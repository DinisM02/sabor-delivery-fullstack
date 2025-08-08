import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Como Funciona</h1>
          
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg p-8 mb-8 text-white">
            <h2 className="text-2xl font-bold mb-4 text-center">É simples, rápido e delicioso!</h2>
            <p className="text-center text-lg">
              Em apenas alguns cliques, você pode saborear os melhores pratos de Moçambique no conforto da sua casa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Explore</h3>
              <p className="text-gray-600">
                Navegue pelos restaurantes disponíveis na sua região e descubra novos sabores.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Escolha</h3>
              <p className="text-gray-600">
                Selecione seus pratos favoritos e adicione ao carrinho com observações especiais.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Pague</h3>
              <p className="text-gray-600">
                Finalize seu pedido com M-Pesa, e-Mola ou cartão de crédito de forma segura.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">4. Receba</h3>
              <p className="text-gray-600">
                Acompanhe seu pedido em tempo real e receba na sua porta com rapidez.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-6">Processo Detalhado</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Navegação e Descoberta</h3>
                <p className="text-gray-700 mb-3">
                  Comece explorando nossa página inicial, onde você encontrará restaurantes organizados por categoria: 
                  Moçambicana, Pizza, Hamburger, Sushi, Café e Churrasco. Use os filtros para encontrar exatamente 
                  o que está procurando.
                </p>
                <p className="text-gray-700">
                  Cada restaurante exibe informações importantes como avaliação, tempo de entrega estimado e taxa 
                  de entrega, ajudando você a fazer a melhor escolha.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Seleção de Pratos</h3>
                <p className="text-gray-700 mb-3">
                  Ao clicar em "Ver Menu", você será direcionado para a página do restaurante, onde encontrará 
                  todos os pratos organizados por categoria: Pratos Principais, Bebidas e Sobremesas.
                </p>
                <p className="text-gray-700">
                  Cada prato inclui uma descrição detalhada, preço e imagem. Você pode adicionar observações 
                  especiais como "sem cebola" ou "bem passado" antes de adicionar ao carrinho.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Carrinho e Checkout</h3>
                <p className="text-gray-700 mb-3">
                  No carrinho, você pode revisar todos os itens, ajustar quantidades e ver o total do pedido 
                  incluindo a taxa de entrega. O sistema calcula automaticamente o valor final.
                </p>
                <p className="text-gray-700">
                  No checkout, você informará seu endereço de entrega e escolherá o método de pagamento. 
                  Aceitamos M-Pesa, e-Mola e cartões de crédito/débito.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Acompanhamento do Pedido</h3>
                <p className="text-gray-700 mb-3">
                  Após a confirmação do pagamento, você receberá um número de pedido e poderá acompanhar 
                  o status em tempo real: Confirmado → Em Preparo → A Caminho → Entregue.
                </p>
                <p className="text-gray-700">
                  Nosso sistema de tracking permite que você saiba exatamente quando seu pedido sairá 
                  para entrega e o tempo estimado de chegada.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Métodos de Pagamento</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-semibold text-gray-800 mb-2">M-Pesa</h3>
                <p className="text-gray-600 text-sm">
                  Pagamento rápido e seguro através do seu telemóvel M-Pesa.
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-semibold text-gray-800 mb-2">e-Mola</h3>
                <p className="text-gray-600 text-sm">
                  Use sua carteira digital e-Mola para pagamentos instantâneos.
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">💳</div>
                <h3 className="font-semibold text-gray-800 mb-2">Cartão</h3>
                <p className="text-gray-600 text-sm">
                  Visa e Mastercard aceitos com total segurança.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;

