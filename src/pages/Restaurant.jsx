import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock, Truck, Plus, Minus, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Restaurant() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [cart, setCart] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("Pratos Principais");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
        const fetchRestaurantData = async () => {
          console.log(`Fetching restaurant data for ID: ${id}`);
          console.log(`API URL: /api/restaurants/${id}`);
          try {
            const response = await fetch(`/api/restaurants/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRestaurant(data.data);
        console.log("Restaurant data received:", data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchRestaurantData();
  }, [id]);

  if (loading) {
    return <div className="text-center py-8">Carregando restaurante...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Erro ao carregar restaurante: {error.message}</div>;
  }

  if (!restaurant) {
    return <div className="text-center py-8">Restaurante não encontrado</div>;
  }

  const addToCart = (item) => {
    setCart(prev => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1
    }));
  };

  const removeFromCart = (item) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[item.id] > 1) {
        newCart[item.id] -= 1;
      } else {
        delete newCart[item.id];
      }
      return newCart;
    });
  };

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = restaurant.menu.flatMap(cat => cat.items).find(i => i.id === parseInt(itemId));
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const getCartItemsCount = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Restaurant Header */}
      <div className="relative">
        <img src={restaurant.image_url} alt={restaurant.name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 text-white p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{restaurant.name}</h1>
            <p className="text-lg opacity-90 mb-4">{restaurant.description}</p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                <span className="font-semibold">{restaurant.rating}</span>
                <span className="ml-1 opacity-75">({restaurant.reviewCount || 0} avaliações)</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-1" />
                <span>{restaurant.delivery_time}</span>
              </div>
              <div className="flex items-center">
                <Truck className="h-5 w-5 mr-1" />
                <span>Entrega: {restaurant.delivery_fee / 100} MT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Menu Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="font-semibold text-lg mb-4">Categorias</h3>
              <div className="space-y-2">
                {Object.keys(restaurant.menu).map((categoryName) => (
                  <Button
                    key={categoryName}
                    variant={selectedCategory === categoryName ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(categoryName)}
                  >
                    {categoryName}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="lg:col-span-3">
            {Object.keys(restaurant.menu).map((categoryName) => (
              <div
                key={categoryName}
                className={selectedCategory === categoryName ? "block" : "hidden"}
              >
                <h2 className="text-2xl font-bold mb-6">{categoryName}</h2>
                <div className="space-y-6">
                  {restaurant.menu[categoryName].map((item) => (
                    <MenuItemCard
                      key={item.id}
                      item={item}
                      quantity={cart[item.id] || 0}
                      onAdd={() => addToCart(item)}
                      onRemove={() => removeFromCart(item)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Cart */}
      {getCartItemsCount() > 0 && (
        <div className="fixed bottom-4 left-4 right-4 z-50">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">
                    {getCartItemsCount()} {getCartItemsCount() === 1 ? 'item' : 'itens'} no carrinho
                  </p>
                  <p className="text-sm opacity-90">Total: {getCartTotal() / 100} MT</p>
                </div>
                <Button variant="secondary">
                  Ver Carrinho
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      <Footer />
    </div>
  );
}

function MenuItemCard({ item, quantity, onAdd, onRemove }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <img
           src={item.image_url}            alt={item.name}
            className="w-full md:w-48 h-32 md:h-auto object-cover"
          />
          <div className="flex-1 p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg flex items-center">
                  {item.name}
                  {item.is_popular && (
                    <Badge className="ml-2 bg-accent">Popular</Badge>
                  )}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              </div>
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <span className="text-xl font-bold text-primary">{item.price / 100} MT</span>
              
              {quantity === 0 ? (
                <Button onClick={onAdd} size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Adicionar
                </Button>
              ) : (
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" onClick={onRemove}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="font-semibold min-w-[2rem] text-center">{quantity}</span>
                  <Button variant="outline" size="sm" onClick={onAdd}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

