import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Partners = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Restaurantes Parceiros</h1>
          
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 mb-8 text-white">
            <h2 className="text-2xl font-bold mb-4 text-center">Junte-se à Nossa Rede</h2>
            <p className="text-center text-lg">
              Expanda seu negócio e alcance mais clientes com o Sabor Delivery. 
              Somos o parceiro ideal para levar sua culinária a toda Moçambique.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-6">Por que Ser Nosso Parceiro?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-3">📈</span>
                  Aumente suas Vendas
                </h3>
                <p className="text-gray-700 mb-4">
                  Alcance novos clientes e aumente seu faturamento em até 40% com nossa plataforma. 
                  Nossos dados mostram que restaurantes parceiros experimentam crescimento significativo 
                  nas vendas já no primeiro mês.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Exposição para milhares de usuários ativos</li>
                  <li>• Marketing digital integrado</li>
                  <li>• Análises detalhadas de vendas</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🚀</span>
                  Tecnologia Avançada
                </h3>
                <p className="text-gray-700 mb-4">
                  Nossa plataforma oferece ferramentas modernas para gestão de pedidos, controle de 
                  estoque e relacionamento com clientes, tudo em um só lugar.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Painel administrativo intuitivo</li>
                  <li>• Gestão de cardápio em tempo real</li>
                  <li>• Relatórios de performance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-3">💰</span>
                  Pagamentos Seguros
                </h3>
                <p className="text-gray-700 mb-4">
                  Receba seus pagamentos de forma rápida e segura através de M-Pesa, e-Mola ou 
                  transferência bancária, com total transparência nas transações.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Repasses semanais garantidos</li>
                  <li>• Taxas competitivas do mercado</li>
                  <li>• Suporte financeiro dedicado</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="text-2xl mr-3">🤝</span>
                  Suporte Completo
                </h3>
                <p className="text-gray-700 mb-4">
                  Nossa equipe está sempre disponível para ajudar com treinamento, suporte técnico 
                  e estratégias de marketing para maximizar seus resultados.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Onboarding personalizado</li>
                  <li>• Suporte técnico 24/7</li>
                  <li>• Consultoria em marketing digital</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-6">Como Funciona a Parceria</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Cadastro e Análise</h3>
                  <p className="text-gray-700">
                    Preencha nosso formulário de parceria com informações sobre seu restaurante. 
                    Nossa equipe analisará sua proposta em até 48 horas e entrará em contato.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Configuração do Perfil</h3>
                  <p className="text-gray-700">
                    Após aprovação, ajudaremos você a configurar seu perfil na plataforma, incluindo 
                    fotos profissionais, descrição do restaurante e cardápio completo.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Treinamento</h3>
                  <p className="text-gray-700">
                    Oferecemos treinamento completo para sua equipe sobre como usar nossa plataforma, 
                    gerenciar pedidos e otimizar suas vendas online.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Lançamento</h3>
                  <p className="text-gray-700">
                    Seu restaurante entra no ar na plataforma e começamos a promover seus pratos 
                    para nossa base de clientes. O sucesso começa aqui!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-6">Requisitos para Parceria</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Documentação Necessária</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Alvará de funcionamento válido</li>
                  <li>• Licença sanitária atualizada</li>
                  <li>• NUIT da empresa</li>
                  <li>• Comprovativo de morada</li>
                  <li>• Fotos do estabelecimento</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Padrões de Qualidade</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Higiene e segurança alimentar</li>
                  <li>• Tempo de preparo consistente</li>
                  <li>• Embalagens adequadas para delivery</li>
                  <li>• Cardápio com preços atualizados</li>
                  <li>• Atendimento ao cliente de qualidade</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-500 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Pronto para Começar?</h2>
            <p className="text-lg mb-6">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar seu restaurante a crescer.
            </p>
            <div className="space-y-2">
              <p><strong>Email:</strong> parceiros@sabordelivery.mz</p>
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

export default Partners;

