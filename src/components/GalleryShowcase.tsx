import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, MapPin, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
const GalleryShowcase = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  // Destinasi yang sesuai dengan tour data - hanya 3 terbaik berdasarkan rating
  const topDestinations = [{
    id: 8,
    url: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    // Sample video URL
    alt: "Dieng Plateau dengan sunrise yang menakjubkan",
    title: "Dieng",
    location: "Wonosobo, Jawa Tengah",
    rating: 4.9,
    price: "Rp 775.000",
    description: "Golden sunrise di negeri di atas awan dengan keajaiban alam yang spektakuler"
  }, {
    id: 5,
    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    // Sample video URL
    alt: "Pulau Tidung dengan Jembatan Cinta yang ikonik",
    title: "Pulau Tidung",
    location: "Kepulauan Seribu, Jakarta",
    rating: 4.9,
    price: "Rp 430.000",
    description: "Jembatan Cinta legendaris dengan pantai eksotis dan snorkeling yang menawan"
  }, {
    id: 3,
    url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    // Sample video URL
    alt: "Pulau Harapan dengan keindahan bahari yang memukau",
    title: "Pulau Harapan",
    location: "Kepulauan Seribu, Jakarta",
    rating: 4.8,
    price: "Rp 430.000",
    description: "Pulau harapan bagi manusia dan alam dengan konservasi lingkungan yang luar biasa"
  }];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || showVideo) return;
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % topDestinations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, showVideo, topDestinations.length]);
  const nextImage = () => {
    setIsAutoPlaying(false);
    setShowVideo(false);
    setCurrentImageIndex(prev => (prev + 1) % topDestinations.length);
  };
  const prevImage = () => {
    setIsAutoPlaying(false);
    setShowVideo(false);
    setCurrentImageIndex(prev => (prev - 1 + topDestinations.length) % topDestinations.length);
  };
  const goToImage = index => {
    setIsAutoPlaying(false);
    setShowVideo(false);
    setCurrentImageIndex(index);
  };
  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };
  const toggleVideo = () => {
    setIsAutoPlaying(false);
    setShowVideo(!showVideo);
  };
  const handleExploreDestinations = () => {
    navigate('/tour');
  };
  const handleViewGallery = () => {
    navigate('/gallery');
  };
  const currentDestination = topDestinations[currentImageIndex];
  return <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
            3 Destinasi Terbaik Indonesia
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed">
            Jelajahi 3 destinasi pilihan terbaik dengan rating tertinggi dan pengalaman tak terlupakan
          </p>
        </div>

        {/* Main Gallery Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 mb-8 sm:mb-12 md:mb-16">
          {/* Large Image/Video Slider */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              {showVideo ? <iframe src={currentDestination.videoUrl} className="w-full h-full object-cover" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> : <img src={currentDestination.url} alt={currentDestination.alt} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />}
              
              {/* Gradient Overlay - hanya tampil saat gambar */}
              {!showVideo && <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>}
              
              {/* Video Controls */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20">
                <Button onClick={toggleVideo} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-200">
                  <Video className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>

              {/* Image Info - hanya tampil saat gambar */}
              {!showVideo && <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white z-10">
                  <div className="flex items-center gap-2 MB-1 sm:mb-2">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm font-medium">{currentDestination.location}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 leading-tight">
                    {currentDestination.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base opacity-90 hidden sm:block leading-relaxed mb-2">
                    {currentDestination.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-base font-bold text-emerald-400">
                      {currentDestination.price}
                    </span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-xs sm:text-sm font-medium">{currentDestination.rating}</span>
                    </div>
                  </div>
                </div>}
              
              {/* Navigation Arrows - hanya tampil saat gambar */}
              {!showVideo && <>
                  <Button variant="secondary" size="sm" onClick={prevImage} className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-200 z-20">
                    <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
                  </Button>
                  
                  <Button variant="secondary" size="sm" onClick={nextImage} className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-200 z-20">
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
                </>}
            </div>

            {/* Image Indicators - hanya tampil saat gambar */}
            {!showVideo && <div className="flex justify-center space-x-1 sm:space-x-2 mt-3 sm:mt-4 md:mt-6">
                {topDestinations.map((_, index) => <button key={index} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${index === currentImageIndex ? 'bg-emerald-600 scale-110' : 'bg-gray-300 hover:bg-gray-400'}`} onClick={() => goToImage(index)} />)}
              </div>}
          </div>

          {/* Content Side */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2 px-2 sm:px-0">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
                Destinasi Pilihan Terbaik
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Kami telah memilih 3 destinasi terbaik berdasarkan rating tertinggi dan pengalaman wisatawan. 
                Setiap destinasi menawarkan keindahan alam yang luar biasa dan pengalaman yang tak terlupakan. 
                Lihat video destinasi untuk mendapatkan gambaran yang lebih jelas.
              </p>
              
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 sm:mb-6">
                <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-600 mb-1">3</div>
                  <div className="text-xs md:text-sm text-gray-600">Destinasi Terbaik</div>
                </div>
                <div className="text-center p-3 md:p-4 bg-gray-50 rounded-lg">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-600 mb-1">5★</div>
                  <div className="text-xs md:text-sm text-gray-600">Rating Tertinggi</div>
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleExploreDestinations} className="flex-1 sm:flex-none bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-4 sm:px-6 md:px-8 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base">
                  Lihat Semua Destinasi
                </Button>
                
                <Button onClick={() => navigate(`/tour/${currentDestination.id}`)} variant="outline" className="flex-1 sm:flex-none border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-4 sm:px-6 md:px-8 py-3 rounded-full font-semibold transition-all duration-200 text-sm sm:text-base">
                  Detail {currentDestination.title}
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-gray-600">
                <span className="flex items-center">✓ Video Destinasi Tersedia</span>
                <span className="flex items-center">✓ Rating Terbaik </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default GalleryShowcase;