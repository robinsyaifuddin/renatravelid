
import React from 'react';
import { MessageSquare, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleConsultation = () => {
    // Navigate to contact page or open chat
    navigate('/kontak');
  };

  const handleAboutUs = () => {
    navigate('/tentang');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
        }}
      >
        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-emerald-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block mb-2">Jelajahi Tempat</span>
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Impianmu
              </span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            Temukan destinasi menakjubkan dan ciptakan kenangan tak terlupakan dengan pengalaman wisata terpilih kami
          </p>

          {/* Professional Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto py-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-emerald-400">500+</div>
              <div className="text-sm md:text-base text-gray-300">Wisatawan Puas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-teal-400">50+</div>
              <div className="text-sm md:text-base text-gray-300">Destinasi Pilihan</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-2xl md:text-3xl font-bold text-emerald-300">5★</div>
              <div className="text-sm md:text-base text-gray-300">Rating Pelayanan</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Button 
              onClick={handleConsultation}
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Konsultasi Sekarang
            </Button>
            
            <Button 
              onClick={handleAboutUs}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <Info className="w-5 h-5 mr-2" />
              Tentang Kami
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8">
            <p className="text-sm text-gray-400 mb-4">Dipercaya oleh:</p>
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-sm font-medium">Travel Agent Resmi</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-sm font-medium">Berpengalaman 5+ Tahun</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-sm font-medium">Garansi Kepuasan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl animate-pulse hidden lg:block"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-emerald-400/10 rounded-full blur-lg animate-pulse hidden md:block"></div>
    </section>
  );
};

export default HeroSection;
