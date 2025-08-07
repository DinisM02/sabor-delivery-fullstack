from flask import Blueprint, request, jsonify
from src.models.user import db, User
from src.models.restaurant import Restaurant, Product
from src.models.order import Order, OrderItem
from datetime import datetime
import uuid

order_bp = Blueprint('order', __name__)

@order_bp.route('/orders', methods=['POST'])
def create_order():
    """Criar um novo pedido"""
    try:
        data = request.get_json()
        
        # Validar dados obrigatórios
        required_fields = ['user_id', 'restaurant_id', 'items', 'delivery_address', 'payment_method']
        for field in required_fields:
            if field not in data:
                return jsonify({
                    'success': False,
                    'message': f'Campo obrigatório: {field}'
                }), 400
        
        # Verificar se usuário e restaurante existem
        user = User.query.get(data['user_id'])
        restaurant = Restaurant.query.get(data['restaurant_id'])
        
        if not user:
            return jsonify({
                'success': False,
                'message': 'Usuário não encontrado'
            }), 404
        
        if not restaurant:
            return jsonify({
                'success': False,
                'message': 'Restaurante não encontrado'
            }), 404
        
        # Calcular total do pedido
        total_amount = 0
        order_items_data = []
        
        for item_data in data['items']:
            product = Product.query.get(item_data['product_id'])
            if not product:
                return jsonify({
                    'success': False,
                    'message': f'Produto {item_data["product_id"]} não encontrado'
                }), 404
            
            if not product.is_available:
                return jsonify({
                    'success': False,
                    'message': f'Produto {product.name} não está disponível'
                }), 400
            
            quantity = item_data['quantity']
            unit_price = product.price
            item_total = unit_price * quantity
            total_amount += item_total
            
            order_items_data.append({
                'product_id': product.id,
                'quantity': quantity,
                'unit_price': unit_price,
                'notes': item_data.get('notes', '')
            })
        
        # Adicionar taxa de entrega
        delivery_fee = restaurant.delivery_fee
        total_amount += delivery_fee
        
        # Criar pedido
        order = Order(
            user_id=data['user_id'],
            restaurant_id=data['restaurant_id'],
            total_amount=total_amount,
            delivery_fee=delivery_fee,
            delivery_address=data['delivery_address'],
            delivery_notes=data.get('delivery_notes', ''),
            payment_method=data['payment_method'],
            estimated_delivery_time=restaurant.delivery_time
        )
        
        db.session.add(order)
        db.session.flush()  # Para obter o ID do pedido
        
        # Criar itens do pedido
        for item_data in order_items_data:
            order_item = OrderItem(
                order_id=order.id,
                product_id=item_data['product_id'],
                quantity=item_data['quantity'],
                unit_price=item_data['unit_price'],
                notes=item_data['notes']
            )
            db.session.add(order_item)
        
        db.session.commit()
        
        return jsonify({
            'success': True,
            'data': order.to_dict(),
            'message': 'Pedido criado com sucesso'
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'success': False,
            'message': str(e)
        }), 500

@order_bp.route('/orders/<int:order_id>', methods=['GET'])
def get_order(order_id):
    """Obter detalhes de um pedido específico"""
    try:
        order = Order.query.get_or_404(order_id)
        return jsonify({
            'success': True,
            'data': order.to_dict()
        }), 200
    except Exception as e:
        return jsonify({
            'success': False,
            'message': str(e)
        }), 500

@order_bp.route('/orders/<int:order_id>/status', methods=['PUT'])
def update_order_status(order_id):
    """Atualizar status do pedido"""
    try:
        data = request.get_json()
        
        if 'status' not in data:
            return jsonify({
                'success': False,
                'message': 'Status é obrigatório'
            }), 400
        
        valid_statuses = ['confirmado', 'em_preparo', 'a_caminho', 'entregue', 'cancelado']
        if data['status'] not in valid_statuses:
            return jsonify({
                'success': False,
                'message': f'Status inválido. Valores válidos: {valid_statuses}'
            }), 400
        
        order = Order.query.get_or_404(order_id)
        order.status = data['status']
        order.updated_at = datetime.utcnow()
        
        db.session.commit()
        
        return jsonify({
            'success': True,
            'data': order.to_dict(),
            'message': 'Status atualizado com sucesso'
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'success': False,
            'message': str(e)
        }), 500

@order_bp.route('/users/<int:user_id>/orders', methods=['GET'])
def get_user_orders(user_id):
    """Listar pedidos de um usuário"""
    try:
        orders = Order.query.filter_by(user_id=user_id).order_by(Order.created_at.desc()).all()
        return jsonify({
            'success': True,
            'data': [order.to_dict() for order in orders]
        }), 200
    except Exception as e:
        return jsonify({
            'success': False,
            'message': str(e)
        }), 500

@order_bp.route('/restaurants/<int:restaurant_id>/orders', methods=['GET'])
def get_restaurant_orders(restaurant_id):
    """Listar pedidos de um restaurante"""
    try:
        status = request.args.get('status')
        orders_query = Order.query.filter_by(restaurant_id=restaurant_id)
        
        if status:
            orders_query = orders_query.filter_by(status=status)
        
        orders = orders_query.order_by(Order.created_at.desc()).all()
        
        return jsonify({
            'success': True,
            'data': [order.to_dict() for order in orders]
        }), 200
    except Exception as e:
        return jsonify({
            'success': False,
            'message': str(e)
        }), 500

