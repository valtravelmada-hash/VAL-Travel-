import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gold-500 font-semibold uppercase tracking-wider mb-2">What We Offer</h2>
          <h3 className="text-4xl font-heading font-bold text-ocean-900">Premium Travel Services</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="p-8 border border-gray-100 rounded-2xl hover:bg-ocean-50 transition-colors duration-300 text-center md:text-left group"
            >
              <div className="w-16 h-16 bg-ocean-100 text-ocean-500 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:bg-ocean-500 group-hover:text-white transition-colors duration-300">
                <service.icon size={32} />
              </div>
              <h4 className="text-xl font-bold text-ocean-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;