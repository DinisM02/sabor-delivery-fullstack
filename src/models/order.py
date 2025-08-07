from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from src.models.user import db

class Order(db.Model):
    __tablename__ = 'orders'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurants.id'), nullable=False)
    status = db.Column(db.String(20), default='confirmado')  # confirmado, em_preparo, a_caminho, entregue, cancelado
    total_amount = db.Column(db.Integer, nullable=False)  # em centavos
    delivery_fee = db.Column(db.Integer, default=0)  # em centavos
    delivery_address = db.Column(db.Text, nullable=False)
    delivery_notes = db.Column(db.Text)
    payment_method = db.Column(db.String(20), nullable=False)  # mpesa, emola, card
    payment_status = db.Column(db.String(20), default='pending')  # pending, paid, failed
    estimated_delivery_time = db.Column(db.String(20))  # e.g., "25-35 min"
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relacionamentos
    items = db.relationship('OrderItem', backref='order', lazy=True, cascade='all, delete-orphan')
    
    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'restaurant_id': self.restaurant_id,
            'status': self.status,
            'total_amount': self.total_amount,
            'delivery_fee': self.delivery_fee,
            'delivery_address': self.delivery_address,
            'delivery_notes': self.delivery_notes,
            'payment_method': self.payment_method,
            'payment_status': self.payment_status,
            'estimated_delivery_time': self.estimated_delivery_time,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None,
            'items': [item.to_dict() for item in self.items]
        }

class OrderItem(db.Model):
    __tablename__ = 'order_items'
    
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('orders.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    unit_price = db.Column(db.Integer, nullable=False)  # em centavos
    notes = db.Column(db.Text)  # observações especiais
    
    # Relacionamento
    product = db.relationship('Product', backref='order_items')
    
    def to_dict(self):
        return {
            'id': self.id,
            'order_id': self.order_id,
            'product_id': self.product_id,
            'quantity': self.quantity,
            'unit_price': self.unit_price,
            'notes': self.notes,
            'product': self.product.to_dict() if self.product else None
        }

