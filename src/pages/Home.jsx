import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, Clock, Truck, Filter } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Mock data for restaurants
const restaurants = [
  {
    id: 1,
    name: "Restaurante Maputo",
    cuisine: "Moçambicana",
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: "50 MT",
    image: "/static/images/restaurants/restaurant-ambiente-1.jpg",
    featured: true,
    categories: ["Tradicional", "Frango", "Peixe"]
  },
  {
    id: 2,
    name: "Pizza Palace",
    cuisine: "Italiana",
    rating: 4.6,
    deliveryTime: "30-40 min",
    deliveryFee: "75 MT",
    image: "/static/images/restaurants/restaurant-ambiente-1.jpg",
    featured: false,
    categories: ["Pizza", "Massa", "Italiana"]
  },
  {
    id: 3,
    name: "Burger House",
    cuisine: "Americana",
    rating: 4.5,
    deliveryTime: "20-30 min",
    deliveryFee: "60 MT",
    image: "/static/images/restaurants/restaurant-ambiente-1.jpg",
    featured: true,
    categories: ["Hamburger", "Batatas", "Bebidas"]
  },
  {
    id: 4,
    name: "Sushi Zen",
    cuisine: "Japonesa",
    rating: 4.9,
    deliveryTime: "35-45 min",
    deliveryFee: "80 MT",
    image: "/static/images/restaurants/restaurant-ambiente-1.jpg",
    featured: false,
    categories: ["Sushi", "Sashimi", "Japonesa"]
  },
  {
    id: 5,
    name: "Café Central",
    cuisine: "Café & Doces",
    rating: 4.4,
    deliveryTime: "15-25 min",
    deliveryFee: "40 MT",
    image: "/static/images/restaurants/restaurant-ambiente-1.jpg",
    featured: false,
    categories: ["Café", "Doces", "Bolos"]
  },
  {
    id: 6,
    name: "Churrasqueira do Sul",
    cuisine: "Churrasco",
    rating: 4.7,
    deliveryTime: "40-50 min",
    deliveryFee: "70 MT",
    image: "/static/images/restaurants/restaurant-ambiente-1.jpg",
    featured: true,
    categories: ["Churrasco", "Carne", "Tradicional"]
  }
]

const categories = [
  { name: "Todos", icon: "🍽️" },
  { name: "Moçambicana", icon: "🇲🇿" },
  { name: "Pizza", icon: "🍕" },
  { name: "Hamburger", icon: "🍔" },
  { name: "Sushi", icon: "🍣" },
  { name: "Café", icon: "☕" },
  { name: "Churrasco", icon: "🥩" }
]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants)

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category)
    if (category === "Todos") {
      setFilteredRestaurants(restaurants)
    } else {
      const filtered = restaurants.filter(restaurant => 
        restaurant.cuisine.includes(category) || 
        restaurant.categories.some(cat => cat.includes(category))
      )
      setFilteredRestaurants(filtered)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Sabor na sua porta
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Os melhores restaurantes de Moçambique, entregues com rapidez e qualidade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
              <Truck className="h-5 w-5 mr-2" />
              <span>Entrega rápida</span>
            </div>
            <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
              <Star className="h-5 w-5 mr-2" />
              <span>Qualidade garantida</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Categorias</h2>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                className="flex-shrink-0 flex items-center space-x-2"
                onClick={() => handleCategoryFilter(category.name)}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      {selectedCategory === "Todos" && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Restaurantes em Destaque</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.filter(r => r.featured).map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Restaurants */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              {selectedCategory === "Todos" ? "Todos os Restaurantes" : `Restaurantes - ${selectedCategory}`}
            </h2>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function RestaurantCard({ restaurant }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
      <div className="relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        {restaurant.featured && (
          <Badge className="absolute top-2 left-2 bg-accent">
            Destaque
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1">{restaurant.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{restaurant.rating}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-1" />
            {restaurant.deliveryTime}
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {restaurant.categories.slice(0, 3).map((category, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {category}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            Entrega: {restaurant.deliveryFee}
          </span>
          <Link to={`/restaurant/${restaurant.id}`}>
            <Button size="sm">
              Ver Menu
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

