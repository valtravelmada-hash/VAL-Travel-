import React from 'react';
import { CheckCircle } from 'lucide-react';
import AIImage from './AIImage';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-ocean-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl bg-ocean-800">
                <AIImage 
                  prompt="Portrait of a friendly Malagasy tour guide smiling warmly, wearing a professional blue polo shirt, standing in front of a beautiful tropical landscape in Nosy Be, golden hour, photorealistic, 4k"
                  fallbackSrc="https://images.unsplash.com/photo-1544333323-ec919832e6b3?q=80&w=2073&auto=format&fit=crop"
                  alt="Madagascar Landscape" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold-500 p-8 rounded-tl-3xl rounded-br-3xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold text-white mb-1">10+</p>
                <p className="text-sm font-medium text-white/90">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-gold-400 font-semibold uppercase tracking-wider mb-2">About Us</h2>
            <h3 className="text-4xl font-heading font-bold mb-6">Your Trusted Partner in Madagascar</h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Based in the heart of Nosy Be, Val Travel is dedicated to showing you the real Madagascar. 
              We believe in travel that is not just about seeing new places, but about feeling them.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Our mission is simple: to provide safe, comfortable, and authentically Malagasy experiences 
              that leave you with memories to cherish forever.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Authentic Experiences",
                "Transparent Pricing",
                "24/7 Support",
                "Local Experts",
                "Safety First",
                "Eco-Friendly Tours"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-gold-400 shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="#contact" 
              className="px-8 py-3 border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-white rounded-full font-bold transition-all"
            >
              Get in Touch
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;