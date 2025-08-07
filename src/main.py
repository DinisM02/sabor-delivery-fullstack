import os
import sys
# DON'T CHANGE THIS !!!
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from flask import Flask, send_from_directory
from flask_cors import CORS
from src.models.user import db
from src.models.restaurant import Restaurant, Product
from src.models.order import Order, OrderItem
from src.routes.user import user_bp
from src.routes.restaurant import restaurant_bp
from src.routes.order import order_bp

app = Flask(__name__, static_folder=os.path.join(os.path.dirname(__file__), 'static'))
app.config['SECRET_KEY'] = 'asdf#FGSgvasgf$5$WGT'

# Configurar CORS para permitir requisições do frontend
CORS(app, origins=['http://localhost:5173', 'http://localhost:3000'])

# Registrar blueprints
app.register_blueprint(user_bp, url_prefix='/api')
app.register_blueprint(restaurant_bp, url_prefix='/api')
app.register_blueprint(order_bp, url_prefix='/api')

# Configurar banco de dados
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.path.dirname(__file__), 'database', 'app.db')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

# Função para popular dados de exemplo
def populate_sample_data():
    """Popula o banco com dados de exemplo"""
    # Verificar se já existem dados
    if Restaurant.query.first():
        return
    
    # Criar restaurantes de exemplo
    restaurants_data = [
        {
            'name': 'Restaurante Maputo',
            'cuisine': 'Moçambicana',
            'description': 'Autêntica culinária moçambicana com ingredientes frescos e receitas tradicionais.',
            'address': 'Av. Julius Nyerere, 456, Maputo',
            'phone': '+258 84 123 4567',
            'email': 'contato@restaurantemaputo.mz',
            'rating': 4.8,
            'delivery_time': '25-35 min',
            'delivery_fee': 5000,  # 50 MT em centavos
            'image_url': '/static/images/restaurants/restaurant-ambiente-1.jpg',
            'is_featured': True
        },
        {
            'name': 'Pizza Palace',
            'cuisine': 'Italiana',
            'description': 'As melhores pizzas artesanais de Maputo.',
            'address': 'Av. Marginal, 789, Maputo',
            'phone': '+258 84 234 5678',
            'email': 'contato@pizzapalace.mz',
            'rating': 4.6,
            'delivery_time': '30-40 min',
            'delivery_fee': 7500,  # 75 MT em centavos
            'image_url': '/static/images/restaurants/restaurant-ambiente-1.jpg',
            'is_featured': False
        },
        {
            'name': 'Burger House',
            'cuisine': 'Americana',
            'description': 'Hambúrgueres gourmet e batatas crocantes.',
            'address': 'Rua da Resistência, 321, Maputo',
            'phone': '+258 84 345 6789',
            'email': 'contato@burgerhouse.mz',
            'rating': 4.5,
            'delivery_time': '20-30 min',
            'delivery_fee': 6000,  # 60 MT em centavos
            'image_url': '/static/images/restaurants/restaurant-ambiente-1.jpg',
            'is_featured': True
        }
    ]
    
    for restaurant_data in restaurants_data:
        restaurant = Restaurant(**restaurant_data)
        db.session.add(restaurant)
    
    db.session.commit()
    
    # Criar produtos de exemplo para o Restaurante Maputo
    restaurant_maputo = Restaurant.query.filter_by(name='Restaurante Maputo').first()
    if restaurant_maputo:
        products_data = [
            {
                'restaurant_id': restaurant_maputo.id,
                'name': 'Frango à Zambeziana',
                'description': 'Frango grelhado com molho de coco e amendoim, acompanhado de arroz e xima',
                'price': 45000,  # 450 MT em centavos
                'category': 'Pratos Principais',
                'image_url': '/static/images/food/frango-zambeziana.jpg',
                'is_popular': True
            },
            {
                'restaurant_id': restaurant_maputo.id,
                'name': 'Caril de Camarão',
                'description': 'Camarões frescos em molho de caril com leite de coco, servido com arroz',
                'price': 65000,  # 650 MT em centavos
                'category': 'Pratos Principais',
                'image_url': '/static/images/food/caril-camarao.jpg',
                'is_popular': False
            },
            {
                'restaurant_id': restaurant_maputo.id,
                'name': 'Matapa com Caranguejo',
                'description': 'Folhas de mandioca cozidas com caranguejo e leite de coco',
                'price': 55000,  # 550 MT em centavos
                'category': 'Pratos Principais',
                'image_url': '/static/images/food/matapa-caranguejo.jpg',
                'is_popular': True
            },
            {
                'restaurant_id': restaurant_maputo.id,
                'name': 'Sumo de Baobá',
                'description': 'Sumo natural de baobá, refrescante e nutritivo',
                'price': 8000,  # 80 MT em centavos
                'category': 'Bebidas',
                'image_url': '/static/images/food/sumo-baoba.jpg',
                'is_popular': False
            },
            {
                'restaurant_id': restaurant_maputo.id,
                'name': 'Cerveja 2M',
                'description': 'Cerveja moçambicana gelada',
                'price': 12000,  # 120 MT em centavos
                'category': 'Bebidas',
                'image_url': '/static/images/food/cerveja-2m.jpg',
                'is_popular': True
            },
            {
                'restaurant_id': restaurant_maputo.id,
                'name': 'Pudim de Coco',
                'description': 'Pudim cremoso feito com coco fresco',
                'price': 15000,  # 150 MT em centavos
                'category': 'Sobremesas',
                'image_url': '/static/images/food/pudim-coco.jpg',
                'is_popular': False
            }
        ]
        
        for product_data in products_data:
            product = Product(**product_data)
            db.session.add(product)
        
        db.session.commit()

with app.app_context():
    db.create_all()
    populate_sample_data()

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    static_folder_path = app.static_folder
    if static_folder_path is None:
            return "Static folder not configured", 404

    if path != "" and os.path.exists(os.path.join(static_folder_path, path)):
        return send_from_directory(static_folder_path, path)
    else:
        index_path = os.path.join(static_folder_path, 'index.html')
        if os.path.exists(index_path):
            return send_from_directory(static_folder_path, 'index.html')
        else:
            return "index.html not found", 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
