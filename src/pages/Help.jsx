import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Help = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Como faço um pedido?",
      answer: "É muito simples! Navegue pelos restaurantes, escolha seus pratos favoritos, adicione ao carrinho, informe seu endereço de entrega e escolha o método de pagamento. Pronto!"
    },
    {
      question: "Quais são os métodos de pagamento aceitos?",
      answer: "Aceitamos M-Pesa, e-Mola, Visa e Mastercard. Todos os pagamentos são processados de forma segura através de nossa plataforma."
    },
    {
      question: "Qual é o tempo de entrega?",
      answer: "O tempo de entrega varia por restaurante e localização, geralmente entre 20 a 45 minutos. Você pode ver o tempo estimado na página de cada restaurante."
    },
    {
      question: "Há taxa de entrega?",
      answer: "Sim, cada restaurante define sua própria taxa de entrega, que varia entre 40 MT a 80 MT dependendo da distância e do restaurante."
    },
    {
      question: "Posso cancelar meu pedido?",
      answer: "Você pode cancelar seu pedido gratuitamente até 5 minutos após a confirmação. Após esse prazo, entre em contato conosco pelo telefone ou WhatsApp."
    },
    {
      question: "Como acompanho meu pedido?",
      answer: "Após confirmar o pedido, você receberá um número de rastreamento e poderá acompanhar o status em tempo real: Confirmado → Em Preparo → A Caminho → Entregue."
    },
    {
      question: "E se meu pedido chegar errado ou com problemas?",
      answer: "Entre em contato conosco imediatamente através do telefone +258 84 123 4567 ou WhatsApp. Resolveremos o problema rapidamente, seja com reembolso ou novo pedido."
    },
    {
      question: "Vocês entregam em toda Maputo?",
      answer: "Atualmente entregamos em toda a Grande Maputo. Estamos expandindo para outras cidades de Moçambique. Verifique se sua área está coberta no checkout."
    },
    {
      question: "Posso fazer pedidos para outras pessoas?",
      answer: "Sim! No checkout, você pode informar um endereço de entrega diferente e adicionar observações sobre quem receberá o pedido."
    },
    {
      question: "Como funciona o programa de fidelidade?",
      answer: "A cada pedido você acumula pontos que podem ser trocados por descontos em pedidos futuros. Clientes frequentes também recebem ofertas especiais exclusivas."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Central de Ajuda</h1>
          
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-8 mb-8 text-white">
            <h2 className="text-2xl font-bold mb-4 text-center">Como Podemos Ajudar?</h2>
            <p className="text-center text-lg">
              Encontre respostas para as perguntas mais frequentes ou entre em contato conosco 
              para suporte personalizado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Telefone</h3>
              <p className="text-gray-600 mb-3">Ligue para nosso atendimento</p>
              <p className="text-orange-600 font-semibold">+258 84 123 4567</p>
              <p className="text-sm text-gray-500 mt-2">Seg-Dom: 8h às 22h</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-3">Chat rápido e direto</p>
              <p className="text-orange-600 font-semibold">+258 84 123 4567</p>
              <p className="text-sm text-gray-500 mt-2">Resposta em até 5 min</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600 mb-3">Para questões detalhadas</p>
              <p className="text-orange-600 font-semibold">ajuda@sabordelivery.mz</p>
              <p className="text-sm text-gray-500 mt-2">Resposta em até 2h</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-6">Perguntas Frequentes</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                    <span className="text-orange-500 text-xl">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-6">Problemas Comuns e Soluções</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="text-red-500 mr-2">⚠️</span>
                  Pedido Atrasado
                </h3>
                <p className="text-gray-700 mb-3">
                  Se seu pedido está atrasado, primeiro verifique se há algum imprevisto climático 
                  ou trânsito intenso na sua região.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Solução:</strong> Entre em contato conosco pelo WhatsApp para rastreamento 
                  em tempo real e possível compensação.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="text-red-500 mr-2">💳</span>
                  Problema no Pagamento
                </h3>
                <p className="text-gray-700 mb-3">
                  Se o pagamento não foi processado ou você foi cobrado duas vezes, não se preocupe.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Solução:</strong> Ligue para nosso suporte imediatamente. Estornos são 
                  processados em até 24 horas.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="text-red-500 mr-2">🍽️</span>
                  Pedido Incorreto
                </h3>
                <p className="text-gray-700 mb-3">
                  Recebeu um pedido diferente do que solicitou ou faltam itens?
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Solução:</strong> Tire uma foto do pedido recebido e entre em contato 
                  conosco. Enviaremos os itens corretos sem custo adicional.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="text-red-500 mr-2">📱</span>
                  Problema no App
                </h3>
                <p className="text-gray-700 mb-3">
                  App travando, não carregando ou apresentando erros?
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Solução:</strong> Feche e abra o app novamente. Se persistir, 
                  desinstale e reinstale. Entre em contato se o problema continuar.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-6">Dicas para uma Melhor Experiência</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">✅ Para Pedidos Mais Rápidos</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Mantenha seu endereço atualizado</li>
                  <li>• Adicione pontos de referência claros</li>
                  <li>• Mantenha o telefone ligado</li>
                  <li>• Evite horários de pico (12h-14h, 19h-21h)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">💡 Para Economizar</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Acompanhe nossas promoções semanais</li>
                  <li>• Junte pedidos com amigos para dividir a taxa</li>
                  <li>• Use cupons de desconto disponíveis</li>
                  <li>• Participe do programa de fidelidade</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-500 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ainda Precisa de Ajuda?</h2>
            <p className="text-lg mb-6">
              Nossa equipe de suporte está sempre pronta para ajudar você com qualquer dúvida ou problema.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p><strong>Telefone:</strong></p>
                <p>+258 84 123 4567</p>
              </div>
              <div>
                <p><strong>WhatsApp:</strong></p>
                <p>+258 84 123 4567</p>
              </div>
              <div>
                <p><strong>Email:</strong></p>
                <p>ajuda@sabordelivery.mz</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Help;

