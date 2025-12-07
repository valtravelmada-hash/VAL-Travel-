import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ocean-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-heading font-bold text-2xl mb-4">
              Val<span className="text-gold-500">Travel</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your gateway to the authentic beauty of Madagascar. We create unforgettable journeys with passion, safety, and comfort.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-gold-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-gold-400">Top Destinations</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Nosy Iranja</li>
              <li>Nosy Tanikely</li>
              <li>Lokobe Reserve</li>
              <li>Nosy Sakatia</li>
              <li>Mont Passot</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-gold-400">Contact Us</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>{CONTACT_INFO.address}</li>
              <li>{CONTACT_INFO.email}</li>
              <li>{CONTACT_INFO.whatsapp}</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Val Travel Madagascar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;