import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
const GalleryShowcase = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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
  return <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
            Rencanakan, Jelajahi, Nikmati
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed">
            Jelajahi destinasi menakjubkan Indonesia dan abadikan momen tak terlupakan di lokasi-lokasi terindah Nusantara
          </p>
        </div>

        {/* Main Gallery Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 mb-8 sm:mb-12 md:mb-16">
          {/* Large Image Slider */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img src={showcaseImages[currentImageIndex].url} alt={showcaseImages[currentImageIndex].alt} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Image Info */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white z-10">
                <div className="flex items-center gap-2 mb-1 sm:mb-2">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">{showcaseImages[currentImageIndex].location}</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 leading-tight">
                  {showcaseImages[currentImageIndex].title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base opacity-90 hidden sm:block leading-relaxed">
                  {showcaseImages[currentImageIndex].description}
                </p>
              </div>
              
              {/* Navigation Arrows */}
              <Button variant="secondary" size="sm" onClick={prevImage} className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm border-white/30 text-teal hover:text-teal transition-all duration-200 z-20">
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
              </Button>
              
              <Button variant="secondary" size="sm" onClick={nextImage} className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm border-white/30 text-teal hover:bg-white/30 transition-all duration-200 z-20">
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
              </Button>

              {/* Play/Pause Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <Button onClick={toggleAutoPlay} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-200">
                  <Play className={`w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 ml-1 ${isAutoPlaying ? 'opacity-50' : 'opacity-100'}`} />
                </Button>
              </div>

              {/* Auto-play indicator */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
                <div className={`w-2 h-2 rounded-full transition-colors duration-200 ${isAutoPlaying ? 'bg-emerald-500' : 'bg-white/50'}`}></div>
              </div>
            </div>

            {/* Image Indicators */}
            <div className="flex justify-center space-x-1 sm:space-x-2 mt-3 sm:mt-4 md:mt-6">
              {showcaseImages.map((_, index) => <button key={index} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${index === currentImageIndex ? 'bg-emerald-600 scale-110' : 'bg-gray-300 hover:bg-gray-400'}`} onClick={() => goToImage(index)} />)}
            </div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2 px-2 sm:px-0">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
                Rasakan Keajaiban Alam Indonesia
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Dari puncak gunung yang megah hingga pantai yang masih perawan, koleksi destinasi pilihan kami 
                menawarkan sesuatu yang istimewa untuk setiap pelancong. Setiap lokasi telah dipilih dengan cermat 
                untuk memberikan pengalaman autentik dan kesempatan fotografi yang menakjubkan.
              </p>
              
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 sm:mb-6">
                <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-600 mb-1">500+</div>
                  <div className="text-xs md:text-sm text-gray-600">Destinasi Wisata</div>
                </div>
                <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-600 mb-1">50K+</div>
                  <div className="text-xs md:text-sm text-gray-600">Wisatawan Bahagia</div>
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleExploreDestinations} className="flex-1 sm:flex-none bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-4 sm:px-6 md:px-8 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base">
                  Jelajahi Semua Destinasi
                </Button>
                
                <Button onClick={handleViewGallery} variant="outline" className="flex-1 sm:flex-none border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-4 sm:px-6 md:px-8 py-3 rounded-full font-semibold transition-all duration-200 text-sm sm:text-base">
                  Lihat Galeri
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-gray-600">
                <span className="flex items-center">✓ Tur Fotografi Profesional</span>
                <span className="flex items-center">✓ Pemandu Lokal Berpengalaman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default GalleryShowcase;