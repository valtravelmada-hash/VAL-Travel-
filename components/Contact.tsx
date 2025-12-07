import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Info Side */}
          <div className="lg:w-2/5 bg-ocean-900 p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Let's Plan Your Trip!</h2>
              <p className="text-gray-300 mb-10">
                Ready to explore Nosy Be? Fill out the form or contact us directly via WhatsApp or Email. We'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="text-gold-400" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Call / WhatsApp</h5>
                    <p className="text-gray-300">{CONTACT_INFO.whatsapp}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail className="text-gold-400" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Email Us</h5>
                    <p className="text-gray-300">{CONTACT_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="text-gold-400" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Visit Us</h5>
                    <p className="text-gray-300">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                 <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Clock className="text-gold-400" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Working Hours</h5>
                    <p className="text-gray-300">Mon - Sat: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\s+/g, '')}`} 
                target="_blank" 
                rel="noreferrer"
                className="block w-full text-center py-3 bg-green-500 hover:bg-green-600 rounded-lg font-bold transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-10">
            <h3 className="text-2xl font-bold text-ocean-900 mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none transition-all">
                  <option>General Inquiry</option>
                  <option>Book a Tour</option>
                  <option>Hotel Reservation</option>
                  <option>Car Rental</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none transition-all" placeholder="Tell us about your travel plans..." required></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-ocean-500 hover:bg-ocean-600 text-white font-bold rounded-lg shadow-md transition-all">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;