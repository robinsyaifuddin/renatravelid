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
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
    }}>
        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-emerald-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Hero Title */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="block mb-1 sm:mb-2">Jelajahi Tempat</span>
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Impianmu
              </span>
            </h1>
            
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light px-4 sm:px-0">
            Temukan destinasi menakjubkan dan ciptakan kenangan tak terlupakan dengan pengalaman wisata terpilih kami
          </p>

          {/* Professional Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto py-6 sm:py-8">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-400">10K+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300">Wisatawan Puas</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-400">55</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300">Destinasi Pilihan</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-300">5★</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300">Rating Pelayanan</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-sm sm:max-w-md mx-auto px-4 sm:px-0">
            <Button onClick={handleConsultation} size="lg" className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300">
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Konsultasi Sekarang
            </Button>
            
            <Button onClick={handleAboutUs} variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl transition-all duration-300">
              <Info className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Tentang Kami
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </div>
    </section>;
};
export default HeroSection;