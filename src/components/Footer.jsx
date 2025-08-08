import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Sabor Delivery</h3>
            <p className="text-gray-300 mb-4">
              A melhor plataforma de delivery de comida e bebida em Moçambique. 
              Conectamos você aos melhores restaurantes e lojas da sua região.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-primary transition-colors">Como Funciona</Link></li>
              <li><Link to="/partners" className="text-gray-300 hover:text-primary transition-colors">Restaurantes Parceiros</Link></li>
              <li><Link to="/drivers" className="text-gray-300 hover:text-primary transition-colors">Entregadores</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-primary transition-colors">Ajuda</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span className="text-gray-300">+258 84 123 4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span className="text-gray-300">info@sabordelivery.mz</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-primary mt-1" />
                <span className="text-gray-300">
                  Av. Julius Nyerere, 123<br />
                  Maputo, Moçambique
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h5 className="text-sm font-semibold mb-2">Métodos de Pagamento</h5>
              <div className="flex space-x-4">
                <div className="bg-white text-black px-3 py-1 rounded text-sm font-semibold">M-Pesa</div>
                <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">e-Mola</div>
                <div className="bg-gray-700 text-white px-3 py-1 rounded text-sm font-semibold">Visa</div>
                <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold">Mastercard</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 Sabor Delivery. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

