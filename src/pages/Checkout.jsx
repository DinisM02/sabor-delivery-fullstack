import { useState } from 'react'
import { MapPin, CreditCard, Smartphone, ArrowLeft, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'

export default function Checkout() {
  const [step, setStep] = useState(1) // 1: Address, 2: Payment, 3: Confirmation
  const [formData, setFormData] = useState({
    // Address
    street: '',
    number: '',
    neighborhood: '',
    city: 'Maputo',
    phone: '',
    deliveryNotes: '',
    // Payment
    paymentMethod: 'mpesa',
    mpesaNumber: '',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: ''
  })

  const orderItems = [
    { name: "Frango à Zambeziana", quantity: 2, price: 450 },
    { name: "Caril de Camarão", quantity: 1, price: 650 },
    { name: "Cerveja 2M", quantity: 2, price: 120 }
  ]

  const subtotal = orderItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  const deliveryFee = 50
  const total = subtotal + deliveryFee

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmitOrder = () => {
    // Aqui seria feita a integração com o backend
    alert('Pedido realizado com sucesso!')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="sm" className="mr-4" onClick={handlePreviousStep}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-3xl font-bold">Finalizar Pedido</h1>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              step >= 1 ? 'bg-primary text-white' : 'bg-gray-300'
            }`}>
              {step > 1 ? <Check className="h-4 w-4" /> : '1'}
            </div>
            <div className={`h-1 w-16 ${step >= 2 ? 'bg-primary' : 'bg-gray-300'}`} />
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              step >= 2 ? 'bg-primary text-white' : 'bg-gray-300'
            }`}>
              {step > 2 ? <Check className="h-4 w-4" /> : '2'}
            </div>
            <div className={`h-1 w-16 ${step >= 3 ? 'bg-primary' : 'bg-gray-300'}`} />
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              step >= 3 ? 'bg-primary text-white' : 'bg-gray-300'
            }`}>
              3
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Delivery Address */}
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Endereço de Entrega
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="street">Rua/Avenida</Label>
                      <Input
                        id="street"
                        placeholder="Ex: Av. Julius Nyerere"
                        value={formData.street}
                        onChange={(e) => handleInputChange('street', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="number">Número</Label>
                      <Input
                        id="number"
                        placeholder="Ex: 123"
                        value={formData.number}
                        onChange={(e) => handleInputChange('number', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="neighborhood">Bairro</Label>
                      <Input
                        id="neighborhood"
                        placeholder="Ex: Polana"
                        value={formData.neighborhood}
                        onChange={(e) => handleInputChange('neighborhood', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">Cidade</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      placeholder="Ex: +258 84 123 4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="deliveryNotes">Observações para entrega (opcional)</Label>
                    <Textarea
                      id="deliveryNotes"
                      placeholder="Ex: Portão azul, tocar campainha..."
                      value={formData.deliveryNotes}
                      onChange={(e) => handleInputChange('deliveryNotes', e.target.value)}
                    />
                  </div>

                  <Button onClick={handleNextStep} className="w-full">
                    Continuar para Pagamento
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Payment Method */}
            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Método de Pagamento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <RadioGroup
                    value={formData.paymentMethod}
                    onValueChange={(value) => handleInputChange('paymentMethod', value)}
                  >
                    {/* M-Pesa */}
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="mpesa" id="mpesa" />
                      <Label htmlFor="mpesa" className="flex items-center cursor-pointer">
                        <Smartphone className="h-5 w-5 mr-2" />
                        M-Pesa
                      </Label>
                    </div>
                    {formData.paymentMethod === 'mpesa' && (
                      <div className="ml-6">
                        <Label htmlFor="mpesaNumber">Número M-Pesa</Label>
                        <Input
                          id="mpesaNumber"
                          placeholder="Ex: 84 123 4567"
                          value={formData.mpesaNumber}
                          onChange={(e) => handleInputChange('mpesaNumber', e.target.value)}
                        />
                      </div>
                    )}

                    {/* e-Mola */}
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="emola" id="emola" />
                      <Label htmlFor="emola" className="flex items-center cursor-pointer">
                        <Smartphone className="h-5 w-5 mr-2" />
                        e-Mola
                      </Label>
                    </div>

                    {/* Credit Card */}
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center cursor-pointer">
                        <CreditCard className="h-5 w-5 mr-2" />
                        Cartão de Crédito/Débito
                      </Label>
                    </div>
                    {formData.paymentMethod === 'card' && (
                      <div className="ml-6 space-y-4">
                        <div>
                          <Label htmlFor="cardNumber">Número do Cartão</Label>
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            value={formData.cardNumber}
                            onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="cardName">Nome no Cartão</Label>
                          <Input
                            id="cardName"
                            placeholder="João Silva"
                            value={formData.cardName}
                            onChange={(e) => handleInputChange('cardName', e.target.value)}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="cardExpiry">Validade</Label>
                            <Input
                              id="cardExpiry"
                              placeholder="MM/AA"
                              value={formData.cardExpiry}
                              onChange={(e) => handleInputChange('cardExpiry', e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="cardCvv">CVV</Label>
                            <Input
                              id="cardCvv"
                              placeholder="123"
                              value={formData.cardCvv}
                              onChange={(e) => handleInputChange('cardCvv', e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </RadioGroup>

                  <div className="flex space-x-4">
                    <Button variant="outline" onClick={handlePreviousStep} className="flex-1">
                      Voltar
                    </Button>
                    <Button onClick={handleNextStep} className="flex-1">
                      Revisar Pedido
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Order Confirmation */}
            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle>Confirmar Pedido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Delivery Address */}
                  <div>
                    <h3 className="font-semibold mb-2">Endereço de Entrega</h3>
                    <p className="text-gray-600">
                      {formData.street}, {formData.number}<br />
                      {formData.neighborhood}, {formData.city}<br />
                      Tel: {formData.phone}
                    </p>
                    {formData.deliveryNotes && (
                      <p className="text-sm text-gray-500 mt-1">
                        Obs: {formData.deliveryNotes}
                      </p>
                    )}
                  </div>

                  <Separator />

                  {/* Payment Method */}
                  <div>
                    <h3 className="font-semibold mb-2">Método de Pagamento</h3>
                    <p className="text-gray-600">
                      {formData.paymentMethod === 'mpesa' && `M-Pesa: ${formData.mpesaNumber}`}
                      {formData.paymentMethod === 'emola' && 'e-Mola'}
                      {formData.paymentMethod === 'card' && `Cartão terminado em ${formData.cardNumber.slice(-4)}`}
                    </p>
                  </div>

                  <div className="flex space-x-4">
                    <Button variant="outline" onClick={handlePreviousStep} className="flex-1">
                      Voltar
                    </Button>
                    <Button onClick={handleSubmitOrder} className="flex-1">
                      Confirmar Pedido
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Items */}
                <div className="space-y-3">
                  {orderItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">Qtd: {item.quantity}</p>
                      </div>
                      <p className="font-semibold">{item.price * item.quantity} MT</p>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{subtotal} MT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxa de entrega</span>
                    <span>{deliveryFee} MT</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">{total} MT</span>
                </div>

                <div className="text-sm text-gray-600 text-center">
                  Tempo estimado de entrega: 25-35 min
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

