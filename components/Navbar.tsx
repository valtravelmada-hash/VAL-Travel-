import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className={`font-heading font-bold text-2xl ${isScrolled ? 'text-ocean-900' : 'text-white'}`}>
              Val<span className="text-gold-500">Travel</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`font-medium hover:text-gold-500 transition-colors ${
                  isScrolled ? 'text-ocean-900' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="px-5 py-2 rounded-full bg-gold-500 text-white font-semibold hover:bg-gold-600 transition-colors shadow-lg flex items-center gap-2"
            >
              <Phone size={18} /> Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gold-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} color={isScrolled ? '#0c4a6e' : '#ffffff'} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 animate-fade-in-down">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-ocean-900 font-medium text-lg py-2 border-b border-gray-50 hover:text-gold-500"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="w-full text-center py-3 bg-gold-500 text-white font-bold rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Book Your Trip
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;