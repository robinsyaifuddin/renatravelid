
import React from 'react';
import { MessageSquare, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleConsultation = () => {
    navigate('/kontak');
  };

  const handleAboutUs = () => {
    navigate('/tentang');
  };

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 sm:scale-100" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
        }}
      >
        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-emerald-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
          {/* Hero Title */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="block mb-1 sm:mb-2">Jelajahi Tempat</span>
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Impianmu
              </span>
            </h1>
            
            <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-light px-2 sm:px-4 md:px-0">
            Temukan destinasi menakjubkan dan ciptakan kenangan tak terlupakan dengan pengalaman wisata terpilih kami
          </p>

          {/* Professional Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto py-4 sm:py-6 md:py-8">
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-emerald-400">10K+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300">Wisatawan Puas</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-teal-400">55</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300">Destinasi Pilihan</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-emerald-300">5★</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300">Rating Pelayanan</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-xs sm:max-w-sm md:max-w-md mx-auto px-2 sm:px-4 md:px-0">
            <Button 
              onClick={handleConsultation} 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
            >
              <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2" />
              Konsultasi Sekarang
            </Button>
            
            <Button 
              onClick={handleAboutUs} 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50 font-semibold px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base rounded-xl transition-all duration-300"
            >
              <Info className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2" />
              Tentang Kami
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
