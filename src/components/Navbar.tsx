import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkStyles = "transition-all duration-300 hover:text-blue-600 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-0 after:rounded-full after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform";

  return (
    <nav className={clsx(
      'fixed w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className={clsx(
              "text-2xl font-bold transition-colors duration-300",
              isScrolled ? "text-blue-600" : "text-white"
            )}>FBK Conseil</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {[
                { href: "#about", label: "À Propos" },
                { href: "#sap", label: "SAP" },
                { href: "#values", label: "Nos Valeurs" },
                { href: "#join", label: "Nous Rejoindre" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    linkStyles,
                    isScrolled ? "text-gray-700" : "text-white"
                  )}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className={clsx(
                  "px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105",
                  isScrolled
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                )}
              >
                Contact
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={clsx(
                "p-2 rounded-md transition-colors",
                isScrolled ? "text-gray-600" : "text-white"
              )}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden animate-fade-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm shadow-lg">
            {[
              { href: "#about", label: "À Propos" },
              { href: "#sap", label: "SAP" },
              { href: "#values", label: "Nos Valeurs" },
              { href: "#join", label: "Nous Rejoindre" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}