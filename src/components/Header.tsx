
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { 
      name: 'Accommodation', 
      href: '#accommodation',
      dropdown: ['Hotels', 'Villas', 'Resorts', 'Apartments']
    },
    { 
      name: 'Gallery', 
      href: '#gallery',
      dropdown: ['All Photos', 'Nature', 'Adventure', 'Culture']
    },
    { 
      name: 'Blog', 
      href: '#blog',
      dropdown: ['Travel Tips', 'Destinations', 'Reviews']
    },
    { 
      name: 'Pages', 
      href: '#pages',
      dropdown: ['About Us', 'Services', 'FAQ', 'Privacy Policy']
    },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>563 Main Street, USA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>support@gowilds.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+000 (123) 456 88</span>
              </div>
              <select className="bg-transparent border-none text-white text-sm">
                <option value="en">English</option>
                <option value="id">Indonesia</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">GoWilds</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium"
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors duration-200"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl hidden sm:flex"
            >
              Book Now
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center space-x-2 border-emerald-200 text-emerald-600 hover:bg-emerald-50"
            >
              <User className="w-4 h-4" />
              <span>Login</span>
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
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="space-y-4">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium py-2"
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 space-y-2 mt-2">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block text-gray-600 hover:text-emerald-600 transition-colors duration-200 py-1"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  Book Now
                </Button>
                <Button variant="outline" className="w-full border-emerald-200 text-emerald-600">
                  Login
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
