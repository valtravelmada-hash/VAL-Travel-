import React from 'react';
import { ArrowRight } from 'lucide-react';
import AIImage from './AIImage';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-ocean-900">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <AIImage 
          prompt="Panoramic wide shot of a breathtaking tropical beach in Nosy Be Madagascar, pristine white sand, crystal clear turquoise water, lush green palm trees leaning over the beach, golden hour sunlight, luxury travel aesthetic, cinematic 8k photorealistic"
          fallbackSrc="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2038&auto=format&fit=crop"
          alt="Tropical Beach Nosy Be" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/60 via-ocean-900/40 to-ocean-900/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h2 className="text-gold-400 font-semibold tracking-widest uppercase mb-4 animate-[fadeIn_1s_ease-in]">
          Welcome to Nosy Be
        </h2>
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
          Discover the Authentic <br /> 
          Beauty of <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">Madagascar</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-2xl mx-auto font-light">
          Your journey to paradise begins here. Tailor-made experiences, breathtaking islands, and unforgettable memories with Val Travel.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#destinations" 
            className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
          >
            Explore Destinations <ArrowRight size={20} />
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-ocean-900 text-white rounded-full font-bold text-lg transition-all"
          >
            Plan My Trip
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gold-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;