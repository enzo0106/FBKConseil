import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ContactForm from './components/ContactForm';
import { Users, Target, Lightbulb, TrendingUp, CheckCircle } from 'lucide-react';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      
      {/* Rest of the sections remain unchanged */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll opacity-0 text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">À Propos de FBK Conseil</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              FBK Conseil accompagne les entreprises dans leur transformation numérique avec une expertise pointue en solutions SAP. Notre équipe de consultants expérimentés vous guide vers l'excellence opérationnelle.
            </p>
          </div>
        </div>
      </section>

      {/* SAP Section */}
      <section id="sap" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll opacity-0 text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Expertise SAP</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Leader dans l'implémentation et l'optimisation des solutions SAP, nous vous accompagnons dans tous vos projets de transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
                title: "Performance",
                description: "Optimisation continue de vos processus métier"
              },
              {
                icon: <CheckCircle className="h-12 w-12 text-blue-600" />,
                title: "Qualité",
                description: "Certification et expertise reconnue"
              },
              {
                icon: <Target className="h-12 w-12 text-blue-600" />,
                title: "Innovation",
                description: "Solutions sur mesure adaptées à vos besoins"
              }
            ].map((item, index) => (
              <div key={index} className="animate-on-scroll opacity-0 bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll opacity-0 text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-12 w-12 text-blue-600" />,
                title: "Collaboration",
                description: "Travail d'équipe et partage des connaissances"
              },
              {
                icon: <Lightbulb className="h-12 w-12 text-blue-600" />,
                title: "Innovation",
                description: "Recherche constante d'amélioration"
              },
              {
                icon: <Target className="h-12 w-12 text-blue-600" />,
                title: "Excellence",
                description: "Engagement envers la qualité"
              }
            ].map((value, index) => (
              <div key={index} className="animate-on-scroll opacity-0 text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" className="py-20 bg-blue-600 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll opacity-0 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Rejoignez FBK Conseil</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Nous recherchons des talents passionnés pour rejoindre notre équipe. Découvrez nos opportunités et participez à des projets innovants.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-on-scroll opacity-0 bg-white bg-opacity-10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Pourquoi nous rejoindre ?</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Projets innovants et stimulants</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Formation continue et développement professionnel</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Environnement de travail collaboratif</span>
                </li>
              </ul>
            </div>
            <div className="animate-on-scroll opacity-0 bg-white bg-opacity-10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Nos avantages</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Package de rémunération attractif</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Équilibre vie professionnelle/personnelle</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Opportunités d'évolution internationale</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll opacity-0 text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vous avez un projet ou une question ? Notre équipe est là pour vous répondre.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FBK Conseil</h3>
            <p className="text-gray-400">
              Expert en solutions SAP pour votre transformation digitale
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">
              Email: contact@fbk-conseil.fr<br />
              Tél: +33 (0)1 XX XX XX XX
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              {/* Add social media links here */}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FBK Conseil. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;