import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Search, Plane, Compass, Calendar, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const menuItems = [
    { name: 'Beranda', href: '/', icon: Compass },
    { name: 'Destinasi', href: '/tour', icon: MapPin },
    { name: 'Blog', href: '/blog', icon: Heart },
    { name: 'Tentang Kami', href: '/tentang', icon: Plane }
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

  const handleConsultation = () => {
    const message = `Halo Admin Renatravel! 👋

Saya tertarik untuk berkonsultasi mengenai paket wisata yang tersedia.

Mohon informasi lebih lanjut tentang:
🏝️ Destinasi terbaik
💰 Paket dan harga
📅 Jadwal ketersediaan
🎯 Rekomendasi sesuai budget

Terima kasih! 😊`;
    const whatsappUrl = `https://wa.me/6281316029038?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-2xl sticky top-0 z-50 border-b border-emerald-100/50 w-full">
      {/* Top Bar with enhanced 3D effects */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-1.5 sm:py-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-700/20 via-teal-700/20 to-cyan-700/20 transform skew-y-1"></div>
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="flex justify-center items-center text-xs sm:text-sm">
            <Plane className="w-4 h-4 mr-2 animate-pulse" />
            <span className="hidden xs:inline font-medium tracking-wide">Jelajahi Indonesia bersama Renatravel - Paket wisata terbaik menanti Anda!</span>
            <span className="xs:hidden font-medium">Jelajahi Indonesia bersama Renatravel</span>
            <Calendar className="w-4 h-4 ml-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Main Header with enhanced 3D styling */}
      <div className="container mx-auto px-3 sm:px-4 py-2 lg:py-3">
        <div className="flex justify-between items-center">
          {/* Logo with 3D effects */}
          <Link to="/" className="flex items-center space-x-1.5 lg:space-x-2.5 group" onClick={handleNavClick}>
            <div className="relative group-hover:scale-110 transition-all duration-500 transform-gpu perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img 
                src="/lovable-uploads/e10b370d-5966-446b-84d2-b975e27bf503.png" 
                alt="Renatravel.id Logo" 
                className="h-8 w-auto sm:h-10 lg:h-12 object-contain relative z-10 drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500" 
                style={{
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                  transform: 'translateZ(0)'
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent group-hover:from-emerald-700 group-hover:via-teal-700 group-hover:to-cyan-700 transition-all duration-300 drop-shadow-sm">
                Renatravel.id
              </span>
              <span className="text-[10px] sm:text-xs text-gray-500 hidden xs:block font-medium italic tracking-wider">
                Plan, Explore, Enjoy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with 3D effects */}
          <nav className="hidden lg:flex space-x-1">
            {menuItems.map(item => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    isActive(item.href)
                      ? 'text-emerald-600 bg-gradient-to-br from-emerald-50 to-emerald-100 shadow-lg transform scale-105 border border-emerald-200/50'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-gradient-to-br hover:from-emerald-50/80 hover:to-emerald-100/80 hover:shadow-md hover:scale-102 hover:border hover:border-emerald-200/30'
                  } transition-all duration-300 font-semibold px-3 xl:px-5 py-2 lg:py-2.5 rounded-xl relative group flex items-center space-x-2 transform-gpu`}
                  style={{
                    boxShadow: isActive(item.href) 
                      ? '0 8px 25px rgba(16, 185, 129, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)' 
                      : '0 2px 8px rgba(0, 0, 0, 0.04)',
                    transform: 'translateZ(0)'
                  }}
                >
                  <IconComponent className={`w-4 h-4 ${
                    isActive(item.href) ? 'text-emerald-600' : 'text-gray-500 group-hover:text-emerald-500'
                  } transition-colors duration-300`} />
                  <span>{item.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transform transition-transform duration-300 ${
                      isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                    style={{
                      boxShadow: '0 2px 4px rgba(16, 185, 129, 0.3)'
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions with enhanced 3D effects */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 lg:space-x-3">
            {/* Konsultasi Gratis Button - Desktop with 3D effects */}
            <Button
              className="hidden lg:flex items-center bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-700 hover:via-emerald-600 hover:to-teal-700 text-white font-semibold px-3 xl:px-5 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 text-sm lg:text-base space-x-2 group border border-emerald-400/20"
              onClick={handleConsultation}
              style={{
                boxShadow: '0 8px 25px rgba(16, 185, 129, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                transform: 'translateZ(0)'
              }}
            >
              <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span className="hidden xl:inline">Konsultasi Gratis</span>
              <span className="xl:hidden">Konsultasi</span>
            </Button>

            {/* Search Button with 3D effects */}
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center border-emerald-200 text-emerald-600 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg transform hover:scale-110 w-8 h-8 lg:w-9 lg:h-9 p-0 rounded-xl group"
              onClick={() => setIsSearchOpen(true)}
              style={{
                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.1)',
                transform: 'translateZ(0)'
              }}
            >
              <Search className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            </Button>

            {/* Mobile Search Button */}
            <Button
              variant="ghost"
              size="sm"
              className="sm:hidden touch-friendly text-emerald-600 w-8 h-8 p-0 rounded-lg hover:bg-emerald-50 transition-all duration-300 hover:scale-110 transform-gpu"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-4 h-4" />
            </Button>

            {/* Mobile Menu Button with 3D effects */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden touch-friendly text-gray-700 hover:text-emerald-600 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-emerald-100 transition-all duration-300 w-8 h-8 p-0 rounded-lg hover:shadow-md transform hover:scale-110 transform-gpu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                transform: 'translateZ(0)'
              }}
            >
              {isMobileMenuOpen ? 
                <X className="w-5 h-5 transition-transform duration-300 rotate-180" /> : 
                <Menu className="w-5 h-5 transition-transform duration-300" />
              }
            </Button>
          </div>
        </div>

        {/* Mobile Navigation with enhanced 3D effects */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 py-3 border-t border-gray-200 bg-gradient-to-br from-white/95 to-emerald-50/80 backdrop-blur-lg rounded-2xl shadow-2xl animate-fade-in transform-gpu border border-emerald-100/50"
               style={{
                 boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
                 backdropFilter: 'blur(20px)'
               }}>
            <nav className="space-y-0.5">
              {menuItems.map(item => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-all duration-300 font-medium transform hover:scale-102 ${
                      isActive(item.href)
                        ? 'text-emerald-600 bg-gradient-to-r from-emerald-50 to-emerald-100 shadow-md border border-emerald-200/50'
                        : 'text-gray-700 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50/70 hover:to-emerald-100/70 hover:shadow-sm'
                    }`}
                    onClick={handleNavClick}
                    style={{
                      boxShadow: isActive(item.href) 
                        ? '0 4px 12px rgba(16, 185, 129, 0.15)' 
                        : '0 1px 3px rgba(0, 0, 0, 0.05)',
                      transform: 'translateZ(0)'
                    }}
                  >
                    <IconComponent className={`w-5 h-5 ${
                      isActive(item.href) ? 'text-emerald-600' : 'text-gray-500'
                    } transition-colors duration-300`} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              {/* Konsultasi Gratis Button - Mobile with 3D effects */}
              <div className="px-4 pt-2 mt-1">
                <Button
                  className="w-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-700 hover:via-emerald-600 hover:to-teal-700 text-white font-medium py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-102 flex items-center justify-center space-x-2 border border-emerald-400/20"
                  onClick={() => {
                    handleConsultation();
                    setIsMobileMenuOpen(false);
                  }}
                  style={{
                    boxShadow: '0 8px 25px rgba(16, 185, 129, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    transform: 'translateZ(0)'
                  }}
                >
                  <Phone className="w-4 h-4" />
                  <span>Konsultasi Gratis</span>
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
            {tourDestinations.map(destination => (
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
