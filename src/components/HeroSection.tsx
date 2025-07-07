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
  return <section className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 sm:scale-100" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
    }}>
        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-emerald-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 md:space-y-10">
          {/* Hero Title */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              <span className="block mb-2 sm:mb-3 md:mb-4">Jelajahi Tempat</span>
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Impianmu
              </span>
            </h1>
            
            <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-1xl lg:text-3xl xl:text-4xl text-gray-200 max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto leading-relaxed font-light px-2 sm:px-4 md:px-0">
            Temukan destinasi menakjubkan dan ciptakan kenangan tak terlupakan dengan pengalaman wisata terpilih kami
          </p>

          {/* Professional Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl mx-auto py-6 sm:py-8 md:py-10">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-emerald-400">10K+</div>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mt-1 sm:mt-2">Wisatawan Puas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-teal-400">55</div>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mt-1 sm:mt-2">Destinasi Pilihan</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-emerald-300">5★</div>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mt-1 sm:mt-2">Rating Pelayanan</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto px-2 sm:px-4 md:px-0">
            <Button onClick={handleConsultation} size="lg" className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg lg:text-xl rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300">
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 mr-2 sm:mr-3" />
              Konsultasi Sekarang
            </Button>
            
            <Button onClick={handleAboutUs} variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50 font-semibold px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg lg:text-xl rounded-xl transition-all duration-300">
              <Info className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 mr-2 sm:mr-3" />
              Tentang Kami
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;