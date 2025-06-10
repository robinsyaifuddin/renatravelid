
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
    // Add newsletter subscription logic here
  };

  const footerLinks = {
    services: [
      'Cruise Sale Text',
      'Family Tour Camping',
      'Classic Tour Camping',
      'View All Tour Camping',
      'Small Cabin Wood'
    ],
    about: [
      'About GoWilds',
      'Travel Guides',
      'Data Policy', 
      'Cookie Policy',
      'Legal',
      'Contact'
    ],
    support: [
      'Help Center',
      'Safety Information',
      'Cancellation Options',
      'Customer Reviews',
      'Terms & Conditions'
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <span className="text-2xl font-bold">GoWilds</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                GoWilds is your trusted partner for unforgettable travel experiences. We provide comprehensive travel services to help you explore the world's most beautiful destinations.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-300">563 Main Street, USA Melbourne</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-300">+000 (123) 456 88</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-300">support@gowilds.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 block py-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-6">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 block py-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-6">
              What is the latest information and travel deals? Please subscribe and get important updates
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-500"
                required
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 rounded-lg transition-all duration-200"
              >
                Subscribe Now
              </Button>
            </form>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { Icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
                  { Icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
                  { Icon: Twitter, href: '#', color: 'hover:bg-blue-400' },
                  { Icon: Youtube, href: '#', color: 'hover:bg-red-600' }
                ].map(({ Icon, href, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 ${color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              Copyright © 2024 GoWilds. All Rights Reserved
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                Setting & Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                Faqs
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
