import React from 'react';
import { ArrowRight, Circuit } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid-animation" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-blue-900/80" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="floating-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          >
            <Circuit className="text-blue-400/20" size={Math.random() * 40 + 20} />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="animate-fade-down">
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 tracking-tight">
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                FBK Conseil
              </span>
            </h1>
            <div className="h-1 w-24 bg-blue-400 mx-auto rounded-full animate-pulse" />
          </div>

          <p className="text-xl sm:text-3xl text-blue-100 font-light mb-8 animate-fade-up opacity-0" style={{ animationDelay: '0.3s' }}>
            Façonnons ensemble le{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold">
              futur digital
            </span>{' '}
            de votre entreprise
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up opacity-0" style={{ animationDelay: '0.6s' }}>
            <a
              href="#contact"
              className="group relative inline-flex items-center px-8 py-3 text-lg font-medium text-white transition-all duration-300 ease-in-out"
            >
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out transform translate-x-1 translate-y-1 bg-blue-600 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full border-2 border-white"></span>
              <span className="relative">Contactez-nous</span>
              <ArrowRight className="relative ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#about"
              className="px-8 py-3 text-lg font-medium text-white border-2 border-white/30 rounded-md hover:bg-white/10 transition-colors duration-300"
            >
              En savoir plus
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
              <div className="w-1 h-3 bg-white/60 rounded-full mx-auto animate-scroll" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}