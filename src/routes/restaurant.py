from flask import Blueprint, request, jsonify
from src.models.user import db
from src.models.restaurant import Restaurant, Product

restaurant_bp = Blueprint('restaurant', __name__)

@restaurant_bp.route('/restaurants', methods=['GET'])
def get_restaurants():
    """Listar todos os restaurantes"""
    try:
        restaurants = Restaurant.query.filter_by(is_active=True).all()
        return jsonify({
            'success': True,
            'data': [restaurant.to_dict() for restaurant in restaurants]
        }), 200
    except Exception as e:
        return jsonify({
            'success': False,
            'message': str(e)
        }), 500

@restaurant_bp.route('/restaurants/<int:restaurant_id>', methods=['GET'])
def get_restaurant(restaurant_id):
    """Obter detalhes de um restaurante específico"""
    try:
        restaurant = Restaurant.query.get_or_404(restaurant_id)
        restaurant_data = restaurant.to_dict()
        
        # Buscar produtos do restaurante agrupados por categoria
        products = Product.query.filter_by(
            restaurant_id=restaurant_id, 
            is_available=True
        ).all()
        
        # Agrupar produtos por categoria
        menu = {}
        for product in products:
            category = product.category
            if category not in menu:
                menu[category] = []
            menu[category].append(product.to_dict())
        
        restaurant_data['menu'] = menu
        
        return jsonify({
            'success': True,
            'data': restaurant_data
        }), 200
    except Exception as e:
        return jsonify({
            'success': False,
            'message': str(e)
        }), 500

@restaurant_bp.route('/restaurants/featured', methods=['GET'])
def get_featured_restaurants():
    """Listar restaurantes em destaque"""
    try:
        restaurants = Restaurant.query.filter_by(
            is_active=True, 
            is_featured=True
        ).all()
        return jsonify({
            'success': True,
            'data': [restaurant.to_dict() for restaurant in restaurants]
        }), 200
    except Exception as e:
        return jsonify({
            'success': False,
            'message': str(e)
        }), 500

@restaurant_bp.route('/restaurants/search', methods=['GET'])
def search_restaurants():
    """Buscar restaurantes por nome ou culinária"""
    try:
        query = request.args.get('q', '')
        category = request.args.get('category', '')
        
        restaurants_query = Restaurant.query.filter_by(is_active=True)
        
        if query:
            restaurants_query = restaurants_query.filter(
                db.or_(
                    Restaurant.name.ilike(f'%{query}%'),
                    Restaurant.cuisine.ilike(f'%{query}%')
                )
            )
        
        if category and category != 'Todos':
            restaurants_query = restaurants_query.filter(
                Restaurant.cuisine.ilike(f'%{category}%')
            )
        
        restaurants = restaurants_query.all()
        
        return jsonify({
            'success': True,
            'data': [restaurant.to_dict() for restaurant in restaurants]
        }), 200
    except Exception as e:
        return jsonify({
            'success': False,
            'message': str(e)
        }), 500

@restaurant_bp.route('/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    """Obter detalhes de um produto específico"""
    try:
        product = Product.query.get_or_404(product_id)
        return jsonify({
            'success': True,
            'data': product.to_dict()
        }), 200
    except Exception as e:
        return jsonify({
            'success': False,
            'message': str(e)
        }), 500

