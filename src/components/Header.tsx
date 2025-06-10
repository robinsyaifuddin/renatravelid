
import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Destinasi', href: '/tour' },
    { name: 'Blog', href: '/blog' },
    { name: 'Tentang Kami', href: '/tentang' }
  ];

  const tourDestinations = [
    { id: '1', name: 'Bali - Pulau Dewata', location: 'Bali' },
    { id: '2', name: 'Yogyakarta - Kota Budaya', location: 'Yogyakarta' },
    { id: '3', name: 'Raja Ampat - Surga Bawah Laut', location: 'Papua Barat' },
    { id: '4', name: 'Komodo - Petualangan Eksotis', location: 'NTT' },
    { id: '5', name: 'Borobudur - Warisan Dunia', location: 'Jawa Tengah' },
    { id: '6', name: 'Bromo - Pesona Sunrise', location: 'Jawa Timur' }
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const handleSearch = (destinationId: string) => {
    navigate(`/tour/${destinationId}`);
    setIsSearchOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-2.5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 group">
                <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:block">Jl. Raya Kuta No. 123, Bali</span>
                <span className="sm:hidden">Bali, Indonesia</span>
              </div>
              <div className="hidden md:flex items-center space-x-2 group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>info@wisatanusantara.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 group">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>+62 361 123 456</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                WisataNusantara
              </span>
              <span className="text-xs text-gray-500 hidden sm:block font-medium">
                Jelajahi Keindahan Indonesia
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive(item.href) 
                    ? 'text-emerald-600 bg-emerald-50 shadow-sm' 
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50'
                } transition-all duration-300 font-semibold px-6 py-3 rounded-xl relative group`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transform transition-transform duration-300 ${
                  isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Search Button */}
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center border-emerald-200 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 hover:shadow-md w-10 h-10 p-0"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-4 h-4" />
            </Button>

            <Button 
              className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 hover:from-orange-600 hover:via-orange-700 hover:to-red-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hidden sm:flex"
            >
              Pesan Sekarang
            </Button>

            {/* Mobile Search Button */}
            <Button
              variant="ghost"
              size="sm"
              className="sm:hidden text-emerald-600"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 py-6 border-t border-gray-200 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl animate-fade-in">
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-6 py-4 rounded-xl transition-all duration-300 font-semibold ${
                    isActive(item.href) 
                      ? 'text-emerald-600 bg-emerald-50 shadow-sm' 
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/70'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 space-y-3 border-t border-gray-200 mt-6">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Pesan Sekarang
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Search Dialog */}
      <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <CommandInput placeholder="Cari destinasi wisata..." />
        <CommandList>
          <CommandEmpty>Tidak ada destinasi yang ditemukan.</CommandEmpty>
          <CommandGroup heading="Destinasi Populer">
            {tourDestinations.map((destination) => (
              <CommandItem
                key={destination.id}
                onSelect={() => handleSearch(destination.id)}
                className="cursor-pointer"
              >
                <MapPin className="mr-2 h-4 w-4 text-emerald-600" />
                <div className="flex flex-col">
                  <span className="font-medium">{destination.name}</span>
                  <span className="text-sm text-gray-500">{destination.location}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
};

export default Header;
