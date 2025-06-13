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

  const supportLinks = ['Pusat Bantuan', 'Informasi Keamanan', 'Opsi Pembatalan', 'Ulasan Pelanggan', 'Syarat & Ketentuan'];

  return (
    <footer className="bg-emerald-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-2 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="mb-6">
              <img 
                src="/lovable-uploads/b601ee98-9814-4475-9547-1043c24ddbbe.png" 
                alt="Renatravel.id Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Jl. Poncol Indah V 87 Ciputat Tangerang Selatan, South Tangerang</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-300">0813-1602-9038</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-300">renatravel.id@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Dukungan</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 block py-1">
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
              Dapatkan informasi terbaru dan penawaran perjalanan menarik? Berlangganan dan dapatkan update penting
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <Input 
                type="email" 
                placeholder="Alamat Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                className="bg-white-800 border-teal-700 text-black placeholder-white-400 focus:border-emerald-500 focus:ring-emerald-500" 
              />
              <Button 
                type="submit" 
                className="w-full btn-gradient-base text-white font-semibold py-3 rounded-lg transition-all duration-200" 
                style={{
                  '--gradient-from': '#059669',
                  '--gradient-to': '#0d9488',
                  '--gradient-from-hover': '#047857',
                  '--gradient-to-hover': '#0f766e'
                } as React.CSSProperties}
              >
                Berlangganan
              </Button>
            </form>

            {/* Social Media dengan warna background teal putih awal, emerald putih saat diklik */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                {[
                  { Icon: Facebook, href: '#', specificHover: 'hover:bg-blue-600' },
                  { Icon: Instagram, href: '#', specificHover: 'hover:bg-pink-600' },
                  { Icon: Twitter, href: '#', specificHover: 'hover:bg-blue-400' },
                  { Icon: Youtube, href: '#', specificHover: 'hover:bg-red-600' }
                ].map(({ Icon, href, specificHover }, index) => (
                  <a 
                    key={index} 
                    href={href} 
                    className={`w-10 h-10 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center hover:bg-emerald-100 hover:text-emerald-600 active:bg-emerald-200 active:text-emerald-700 transition-all duration-200 transform hover:scale-110 ${specificHover}`}
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
              Hak Cipta © 2024 renatravel.id. Semua Hak Dilindungi
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                Pengaturan & Privasi
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                FAQ
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                Dukungan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
