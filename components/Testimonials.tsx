import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';
import AIImage from './AIImage';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-ocean-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gold-500 font-semibold uppercase tracking-wider mb-2">Testimonials</h2>
          <h3 className="text-4xl font-heading font-bold text-ocean-900">What Our Travelers Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex text-gold-500 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{t.comment}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <AIImage 
                      prompt={t.imagePrompt}
                      fallbackSrc={t.imageUrl}
                      alt={t.name} 
                      className="w-full h-full object-cover"
                    />
                </div>
                <div>
                  <h5 className="font-bold text-ocean-900">{t.name}</h5>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;