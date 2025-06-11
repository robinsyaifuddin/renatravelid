
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, MapPin, Search, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';

const GalleryShowcase = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');
  const [accommodation, setAccommodation] = useState('');

  const showcaseImages = [{
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Pemandangan gunung yang menakjubkan",
    title: "Gunung Bromo",
    location: "Jawa Timur",
    description: "Saksi keagungan sunrise di puncak gunung berapi aktif"
  }, {
    url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Sungai di antara pegunungan",
    title: "Green Canyon",
    location: "Jawa Barat", 
    description: "Petualangan menyusuri sungai hijau yang eksotis"
  }, {
    url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Pantai dengan ombak yang indah",
    title: "Pantai Kuta",
    location: "Bali",
    description: "Pantai legendaris dengan sunset yang memukau"
  }, {
    url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Hutan pinus yang asri",
    title: "Hutan Pinus Mangunan",
    location: "Yogyakarta",
    description: "Hamparan pinus hijau dengan spot foto instagramable"
  }, {
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Satwa liar di alam bebas",
    title: "Taman Nasional Komodo",
    location: "Nusa Tenggara Timur",
    description: "Bertemu langsung dengan naga purba Indonesia"
  }];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % showcaseImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, showcaseImages.length]);

  const nextImage = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(prev => (prev + 1) % showcaseImages.length);
  };

  const prevImage = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(prev => (prev - 1 + showcaseImages.length) % showcaseImages.length);
  };

  const goToImage = index => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handleExploreDestinations = () => {
    navigate('/tour');
  };

  const handleViewGallery = () => {
    navigate('/gallery');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider with Overlay */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <img 
            src={showcaseImages[currentImageIndex].url} 
            alt={showcaseImages[currentImageIndex].alt}
            className="w-full h-full object-cover transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70"></div>
        </div>

        {/* Navigation Arrows */}
        <Button 
          variant="secondary" 
          size="sm" 
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-200 z-20" 
          onClick={prevImage}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        
        <Button 
          variant="secondary" 
          size="sm" 
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-200 z-20" 
          onClick={nextImage}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Play/Pause Button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300 z-20 group">
          <Button 
            onClick={toggleAutoPlay} 
            className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-200"
          >
            <Play className={`w-8 h-8 ml-1 ${isAutoPlaying ? 'opacity-50' : 'opacity-100'}`} />
          </Button>
        </div>

        {/* Auto-play indicator */}
        <div className="absolute top-6 right-6 z-20">
          <div className={`w-3 h-3 rounded-full transition-colors duration-200 ${isAutoPlaying ? 'bg-emerald-500' : 'bg-white/50'}`}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Location Badge */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">{showcaseImages[currentImageIndex].location}</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          {showcaseImages[currentImageIndex].title}
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
          {showcaseImages[currentImageIndex].description}
        </p>

        <div className="text-base md:text-lg mb-12 opacity-80 max-w-2xl mx-auto">
          Temukan destinasi menakjubkan dan ciptakan kenangan tak terlupakan dengan pengalaman wisata terpilih kami
        </div>

        {/* Booking Form */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            {/* Check In */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block text-left">
                Tanggal Masuk
              </label>
              <div className="relative">
                <Input 
                  type="date" 
                  value={checkIn} 
                  onChange={e => setCheckIn(e.target.value)} 
                  className="pl-10 h-12 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 text-gray-900" 
                  placeholder="Pilih Tanggal" 
                />
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Check Out */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block text-left">
                Tanggal Keluar
              </label>
              <div className="relative">
                <Input 
                  type="date" 
                  value={checkOut} 
                  onChange={e => setCheckOut(e.target.value)} 
                  className="pl-10 h-12 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 text-gray-900" 
                  placeholder="Pilih Tanggal" 
                />
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Guests */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block text-left">
                Tamu
              </label>
              <div className="relative">
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="h-12 pl-10 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 text-gray-900">
                    <SelectValue placeholder="2 Orang Dewasa" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Orang Dewasa</SelectItem>
                    <SelectItem value="2">2 Orang Dewasa</SelectItem>
                    <SelectItem value="3">3 Orang Dewasa</SelectItem>
                    <SelectItem value="4">4 Orang Dewasa</SelectItem>
                    <SelectItem value="5">5+ Orang Dewasa</SelectItem>
                  </SelectContent>
                </Select>
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Accommodations */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block text-left">
                Akomodasi
              </label>
              <div className="relative">
                <Select value={accommodation} onValueChange={setAccommodation}>
                  <SelectTrigger className="h-12 pl-10 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 text-gray-900">
                    <SelectValue placeholder="Paket Wisata" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hotel">Hotel</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="resort">Resort</SelectItem>
                    <SelectItem value="apartment">Apartemen</SelectItem>
                    <SelectItem value="tour">Paket Wisata</SelectItem>
                  </SelectContent>
                </Select>
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Search Button */}
            <div className="lg:col-span-1">
              <Button 
                onClick={handleExploreDestinations}
                className="w-full h-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Search className="w-5 h-5" />
                <span>CEK KETERSEDIAAN</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            onClick={handleExploreDestinations} 
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
          >
            Jelajahi Semua Destinasi
          </Button>
          
          <Button 
            onClick={handleViewGallery} 
            variant="outline" 
            className="border-white text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full font-semibold transition-all duration-200 text-lg"
          >
            Lihat Galeri
          </Button>
        </div>

        {/* Image Indicators */}
        <div className="flex justify-center space-x-3 mb-8">
          {showcaseImages.map((_, index) => (
            <button 
              key={index} 
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentImageIndex 
                  ? 'bg-white scale-110' 
                  : 'bg-white/50 hover:bg-white/70'
              }`} 
              onClick={() => goToImage(index)} 
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center mx-auto">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryShowcase;
