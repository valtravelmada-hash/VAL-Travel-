import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="font-sans text-gray-800 antialiased selection:bg-gold-200 selection:text-ocean-900">
      <Navbar />
      
      <main>
        <Hero />
        <Destinations />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      
      {/* Floating Elements */}
      <ChatBot />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;