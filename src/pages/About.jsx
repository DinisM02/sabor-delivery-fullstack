import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Sobre Nós</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Nossa História</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              O Sabor Delivery nasceu em 2024 com uma missão simples: conectar os moçambicanos aos sabores autênticos 
              da nossa rica culinária, levando o melhor da gastronomia local diretamente à sua porta. Fundada por uma 
              equipe apaixonada pela cultura e tradições culinárias de Moçambique, nossa plataforma representa muito 
              mais do que um simples serviço de entrega.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Começamos com a visão de preservar e promover os sabores tradicionais moçambicanos, desde o famoso 
              Frango à Zambeziana até o delicioso Matapa com Caranguejo. Acreditamos que a comida é uma forma de 
              manter vivas nossas tradições e de compartilhar nossa cultura com as novas gerações.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Nossa Missão</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Democratizar o acesso à autêntica culinária moçambicana, conectando restaurantes locais com consumidores 
              que valorizam qualidade, tradição e conveniência. Trabalhamos para fortalecer a economia local, apoiando 
              pequenos e médios restaurantes em todo o país.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Nossos Valores</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">🇲🇿 Tradição</h3>
                <p className="text-gray-700">
                  Valorizamos e preservamos as receitas tradicionais moçambicanas, garantindo que cada prato 
                  mantenha sua autenticidade.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">⚡ Rapidez</h3>
                <p className="text-gray-700">
                  Entregamos seus pratos favoritos com agilidade, mantendo sempre a qualidade e o sabor.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">🤝 Comunidade</h3>
                <p className="text-gray-700">
                  Apoiamos restaurantes locais e criamos oportunidades de trabalho para entregadores em todo o país.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">✨ Qualidade</h3>
                <p className="text-gray-700">
                  Trabalhamos apenas com restaurantes que compartilham nosso compromisso com ingredientes frescos 
                  e preparo cuidadoso.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Nossa Equipe</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Somos uma equipe diversa e apaixonada, composta por profissionais de tecnologia, gastronomia e 
              logística que trabalham incansavelmente para oferecer a melhor experiência de delivery em Moçambique. 
              Cada membro da nossa equipe contribui com sua expertise para garantir que você receba não apenas 
              comida, mas uma experiência gastronômica completa.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nossos chefs consultores trabalham diretamente com os restaurantes parceiros para garantir que 
              cada prato mantenha sua qualidade durante o transporte. Nossa equipe de tecnologia desenvolve 
              constantemente novas funcionalidades para tornar sua experiência ainda mais conveniente e prazerosa.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

