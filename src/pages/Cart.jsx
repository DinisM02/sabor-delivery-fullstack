import { useState } from 'react'
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

// Dados de exemplo do carrinho
const initialCartItems = [
  {
    id: 1,
    name: "Frango à Zambeziana",
    restaurant: "Restaurante Maputo",
    price: 450,
    quantity: 2,
    image: "/api/placeholder/100/80",
    notes: ""
  },
  {
    id: 2,
    name: "Caril de Camarão",
    restaurant: "Restaurante Maputo",
    price: 650,
    quantity: 1,
    image: "/api/placeholder/100/80",
    notes: "Sem pimenta, por favor"
  },
  {
    id: 5,
    name: "Cerveja 2M",
    restaurant: "Restaurante Maputo",
    price: 120,
    quantity: 2,
    image: "/api/placeholder/100/80",
    notes: ""
  }
]

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState("")
  const [discount, setDiscount] = useState(0)

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(id)
    } else {
      setCartItems(prev => 
        prev.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      )
    }
  }

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const updateNotes = (id, notes) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, notes } : item
      )
    )
  }

  const applyPromoCode = () => {
    // Simulação de códigos promocionais
    const promoCodes = {
      "PRIMEIRA10": 10,
      "DESCONTO15": 15,
      "FRETE50": 5
    }
    
    if (promoCodes[promoCode.toUpperCase()]) {
      setDiscount(promoCodes[promoCode.toUpperCase()])
    } else {
      alert("Código promocional inválido")
    }
  }

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  const deliveryFee = 50
  const discountAmount = (subtotal * discount) / 100
  const total = subtotal + deliveryFee - discountAmount

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">Seu carrinho está vazio</h2>
          <p className="text-gray-500 mb-6">Adicione alguns pratos deliciosos para começar!</p>
          <Button>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continuar Comprando
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="sm" className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-3xl font-bold">Seu Carrinho</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.restaurant}</p>
                      <p className="text-lg font-bold text-primary mt-1">{item.price} MT</p>
                      
                      {/* Notes */}
                      <div className="mt-2">
                        <Label htmlFor={`notes-${item.id}`} className="text-xs text-gray-600">
                          Observações especiais:
                        </Label>
                        <Input
                          id={`notes-${item.id}`}
                          placeholder="Ex: sem cebola, bem passado..."
                          value={item.notes}
                          onChange={(e) => updateNotes(item.id, e.target.value)}
                          className="mt-1 text-sm"
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="font-semibold min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Promo Code */}
                <div>
                  <Label htmlFor="promo-code">Código Promocional</Label>
                  <div className="flex space-x-2 mt-1">
                    <Input
                      id="promo-code"
                      placeholder="Digite o código"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button variant="outline" onClick={applyPromoCode}>
                      Aplicar
                    </Button>
                  </div>
                  {discount > 0 && (
                    <p className="text-sm text-green-600 mt-1">
                      Desconto de {discount}% aplicado!
                    </p>
                  )}
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{subtotal} MT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxa de entrega</span>
                    <span>{deliveryFee} MT</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Desconto ({discount}%)</span>
                      <span>-{discountAmount.toFixed(0)} MT</span>
                    </div>
                  )}
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">{total.toFixed(0)} MT</span>
                </div>

                <Button className="w-full" size="lg">
                  Finalizar Pedido
                </Button>

                <div className="text-center">
                  <Button variant="ghost" size="sm">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Adicionar mais itens
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

