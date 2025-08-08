import { useState, useEffect } from 'react'
import { Check, Clock, Truck, MapPin, Phone, Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

// Dados de exemplo do pedido
const orderData = {
  id: "PED-2024-001",
  status: "em_preparo", // confirmado, em_preparo, a_caminho, entregue
  estimatedTime: "25-35 min",
  restaurant: {
    name: "Restaurante Maputo",
    phone: "+258 84 123 4567",
    address: "Av. Julius Nyerere, 456, Maputo"
  },
  delivery: {
    address: "Av. Marginal, 123, Polana, Maputo",
    driver: {
      name: "Carlos Silva",
      phone: "+258 84 987 6543",
      rating: 4.8
    }
  },
  items: [
    { name: "Frango à Zambeziana", quantity: 2, price: 450 },
    { name: "Caril de Camarão", quantity: 1, price: 650 },
    { name: "Cerveja 2M", quantity: 2, price: 120 }
  ],
  total: 1770,
  orderTime: "14:30",
  paymentMethod: "M-Pesa"
}

const statusSteps = [
  { key: "confirmado", label: "Pedido Confirmado", icon: Check },
  { key: "em_preparo", label: "Em Preparo", icon: Clock },
  { key: "a_caminho", label: "A Caminho", icon: Truck },
  { key: "entregue", label: "Entregue", icon: Check }
]

export default function OrderTracking() {
  const [currentStatus, setCurrentStatus] = useState(orderData.status)
  const [estimatedTime, setEstimatedTime] = useState("25 min")

  // Simulação de atualização de status em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      // Aqui seria feita a consulta ao backend para atualizar o status
      // Por agora, vamos simular uma progressão automática
    }, 30000) // Atualiza a cada 30 segundos

    return () => clearInterval(interval)
  }, [])

  const getStatusIndex = (status) => {
    return statusSteps.findIndex(step => step.key === status)
  }

  const currentStatusIndex = getStatusIndex(currentStatus)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Acompanhar Pedido</h1>
          <p className="text-gray-600">Pedido #{orderData.id}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Status Tracking */}
          <div className="lg:col-span-2 space-y-6">
            {/* Status Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Status do Pedido</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {statusSteps.map((step, index) => {
                    const isCompleted = index <= currentStatusIndex
                    const isCurrent = index === currentStatusIndex
                    const IconComponent = step.icon

                    return (
                      <div key={step.key} className="flex items-center space-x-4">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                          isCompleted 
                            ? 'bg-primary text-white' 
                            : isCurrent 
                              ? 'bg-primary/20 text-primary border-2 border-primary'
                              : 'bg-gray-200 text-gray-400'
                        }`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className={`font-medium ${
                            isCompleted ? 'text-primary' : isCurrent ? 'text-primary' : 'text-gray-400'
                          }`}>
                            {step.label}
                          </p>
                          {isCurrent && (
                            <p className="text-sm text-gray-600">
                              {currentStatus === 'confirmado' && 'Seu pedido foi confirmado pelo restaurante'}
                              {currentStatus === 'em_preparo' && 'Seu pedido está sendo preparado'}
                              {currentStatus === 'a_caminho' && 'Seu pedido está a caminho'}
                              {currentStatus === 'entregue' && 'Seu pedido foi entregue'}
                            </p>
                          )}
                        </div>
                        {isCurrent && (
                          <Badge variant="secondary">
                            {estimatedTime}
                          </Badge>
                        )}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Restaurant Info */}
            <Card>
              <CardHeader>
                <CardTitle>Informações do Restaurante</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🍽️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{orderData.restaurant.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{orderData.restaurant.address}</p>
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4 mr-2" />
                      {orderData.restaurant.phone}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Info */}
            {(currentStatus === 'a_caminho' || currentStatus === 'entregue') && (
              <Card>
                <CardHeader>
                  <CardTitle>Informações do Entregador</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👨‍🚴</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{orderData.delivery.driver.name}</h3>
                      <div className="flex items-center mb-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm">{orderData.delivery.driver.rating}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        <Phone className="h-4 w-4 mr-2" />
                        {orderData.delivery.driver.phone}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Delivery Address */}
            <Card>
              <CardHeader>
                <CardTitle>Endereço de Entrega</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <p className="text-gray-700">{orderData.delivery.address}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Order Time */}
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Pedido realizado às</p>
                  <p className="font-semibold text-lg">{orderData.orderTime}</p>
                </div>

                <Separator />

                {/* Items */}
                <div className="space-y-3">
                  {orderData.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-gray-600">Qtd: {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-sm">{item.price * item.quantity} MT</p>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Total */}
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">{orderData.total} MT</span>
                </div>

                {/* Payment Method */}
                <div className="text-center text-sm text-gray-600">
                  Pago via {orderData.paymentMethod}
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <Button variant="outline" className="w-full" size="sm">
                    Repetir Pedido
                  </Button>
                  <Button variant="ghost" className="w-full" size="sm">
                    Avaliar Pedido
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

