import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Drivers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Seja um Entregador</h1>
          
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-8 mb-8 text-white">
            <h2 className="text-2xl font-bold mb-4 text-center">Trabalhe Conosco</h2>
            <p className="text-center text-lg">
              Torne-se parte da nossa equipe de entregadores e tenha flexibilidade para trabalhar 
              quando quiser, ganhando uma renda extra ou principal.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-6">Vantagens de Ser Nosso Entregador</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-3">⏰</span>
                  Flexibilidade Total
                </h3>
                <p className="text-gray-700 mb-4">
                  Trabalhe quando quiser, onde quiser. Você define seus próprios horários e pode 
                  trabalhar meio período ou tempo integral, conforme sua disponibilidade.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Escolha seus horários de trabalho</li>
                  <li>• Trabalhe nos fins de semana ou feriados</li>
                  <li>• Pause quando precisar</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-3">💵</span>
                  Ganhos Atrativos
                </h3>
                <p className="text-gray-700 mb-4">
                  Receba pagamentos semanais com valores competitivos por entrega, além de 
                  gorjetas dos clientes e bônus por performance.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Pagamento por entrega realizada</li>
                  <li>• Gorjetas 100% para você</li>
                  <li>• Bônus por metas atingidas</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-3">📱</span>
                  App Intuitivo
                </h3>
                <p className="text-gray-700 mb-4">
                  Nossa aplicação para entregadores é simples e fácil de usar, com navegação GPS 
                  integrada e suporte em tempo real.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Interface simples e intuitiva</li>
                  <li>• GPS integrado para rotas otimizadas</li>
                  <li>• Suporte técnico 24/7</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🛡️</span>
                  Segurança e Suporte
                </h3>
                <p className="text-gray-700 mb-4">
                  Oferecemos seguro para acidentes durante as entregas e suporte completo 
                  para resolver qualquer problema que possa surgir.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Seguro de acidentes pessoais</li>
                  <li>• Suporte 24 horas por dia</li>
                  <li>• Treinamento de segurança</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-6">Requisitos para Ser Entregador</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Requisitos Básicos</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Ter mais de 18 anos
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Possuir smartphone Android ou iOS
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Ter meio de transporte (moto, bicicleta ou carro)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Conhecer bem a cidade onde vai trabalhar
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Ter disponibilidade mínima de 4 horas por dia
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Documentação</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">📄</span>
                    Bilhete de identidade ou passaporte
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">📄</span>
                    Carta de condução (para moto/carro)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">📄</span>
                    Comprovativo de morada
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">📄</span>
                    Número de conta bancária ou M-Pesa
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">📄</span>
                    Foto 3x4 recente
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-6">Como Se Candidatar</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Preencha o Formulário</h3>
                  <p className="text-gray-700">
                    Complete nosso formulário online com suas informações pessoais e de contato. 
                    O processo leva apenas 5 minutos.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Envie os Documentos</h3>
                  <p className="text-gray-700">
                    Faça upload dos documentos necessários através da nossa plataforma segura. 
                    Nossa equipe verificará tudo em até 24 horas.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Treinamento Online</h3>
                  <p className="text-gray-700">
                    Participe do nosso treinamento online sobre como usar o app, atendimento ao cliente 
                    e procedimentos de segurança. Dura aproximadamente 2 horas.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Comece a Trabalhar</h3>
                  <p className="text-gray-700">
                    Após aprovação, baixe o app do entregador e comece a receber pedidos imediatamente. 
                    Bem-vindo à equipe Sabor Delivery!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-6">Perguntas Frequentes</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Quanto posso ganhar por mês?</h3>
                <p className="text-gray-700">
                  Os ganhos variam conforme sua dedicação e região. Em média, nossos entregadores 
                  ganham entre 15.000 MT a 35.000 MT por mês trabalhando meio período.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Preciso ter minha própria moto?</h3>
                <p className="text-gray-700">
                  Sim, você precisa ter seu próprio meio de transporte. Aceitamos motos, bicicletas 
                  e carros. Para algumas regiões, também aceitamos entregadores a pé.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Como recebo os pagamentos?</h3>
                <p className="text-gray-700">
                  Os pagamentos são feitos semanalmente via M-Pesa, e-Mola ou transferência bancária, 
                  sempre às sextas-feiras, referente ao trabalho da semana anterior.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-500 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Pronto para Começar?</h2>
            <p className="text-lg mb-6">
              Junte-se à nossa equipe de entregadores e comece a ganhar dinheiro hoje mesmo!
            </p>
            <div className="space-y-2">
              <p><strong>Email:</strong> entregadores@sabordelivery.mz</p>
              <p><strong>Telefone:</strong> +258 84 123 4567</p>
              <p><strong>WhatsApp:</strong> +258 84 123 4567</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Drivers;

