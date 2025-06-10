
import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Tour', href: '/tour' },
    { name: 'Blog', href: '/blog' },
    { name: 'Tentang Kami', href: '/tentang' }
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="hidden sm:block">Jl. Raya Kuta No. 123, Bali</span>
                <span className="sm:hidden">Bali, Indonesia</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@wisatanusantara.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+62 361 123 456</span>
              </div>
              <select className="bg-transparent border-none text-white text-sm focus:outline-none">
                <option value="id">Bahasa Indonesia</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800">WisataNusantara</span>
              <span className="text-xs text-gray-500 hidden sm:block">Jelajahi Keindahan Indonesia</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${isActive(item.href) ? 'text-emerald-600 bg-emerald-50' : 'text-gray-700 hover:text-emerald-600'} transition-colors duration-200 font-medium px-4 py-2 rounded-md`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl hidden sm:flex"
            >
              Pesan Sekarang
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center space-x-2 border-emerald-200 text-emerald-600 hover:bg-emerald-50"
            >
              <User className="w-4 h-4" />
              <span>Masuk</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200 bg-white rounded-lg shadow-lg">
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-lg transition-colors duration-200 font-medium ${
                    isActive(item.href) 
                      ? 'text-emerald-600 bg-emerald-50' 
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2 border-t border-gray-200 mt-4">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  Pesan Sekarang
                </Button>
                <Button variant="outline" className="w-full border-emerald-200 text-emerald-600">
                  Masuk
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
