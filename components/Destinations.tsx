import React from 'react';
import { DESTINATIONS } from '../constants';
import AIImage from './AIImage';

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-20 bg-ocean-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gold-500 font-semibold uppercase tracking-wider mb-2">Our Top Picks</h2>
          <h3 className="text-4xl font-heading font-bold text-ocean-900">Explore Paradise Islands</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From the turtle sanctuary of Nosy Iranja to the pristine forests of Lokobe, discover the jewels of the Indian Ocean.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DESTINATIONS.map((dest) => (
            <div 
              key={dest.id} 
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <AIImage 
                  prompt={dest.imagePrompt}
                  fallbackSrc={dest.imageUrl}
                  alt={dest.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-ocean-900 px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                  {dest.price}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-ocean-900 mb-2">{dest.title}</h4>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {dest.description}
                </p>
                <a 
                  href="#contact" 
                  className="inline-block text-gold-600 font-semibold hover:text-gold-500 border-b-2 border-gold-200 hover:border-gold-500 transition-colors pb-1"
                >
                  Book This Tour
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;