import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
const GalleryShowcase = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const showcaseImages = [{
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Mountain landscape view"
  }, {
    url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "River between mountains"
  }, {
    url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Ocean wave at beach"
  }, {
    url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Pine trees forest"
  }, {
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Deer in nature"
  }];
  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % showcaseImages.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + showcaseImages.length) % showcaseImages.length);
  };
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Plan, Explore, Enjoy</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore breathtaking destinations and capture unforgettable moments in the world's most beautiful locations
          </p>
        </div>

        {/* Main Gallery Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Large Image Slider */}
          <div className="relative group">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <img src={showcaseImages[currentImageIndex].url} alt={showcaseImages[currentImageIndex].alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Navigation Arrows */}
              <Button variant="secondary" size="sm" className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-200" onClick={prevImage}>
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <Button variant="secondary" size="sm" className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-200" onClick={nextImage}>
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-200">
                  <Play className="w-8 h-8 ml-1" />
                </Button>
              </div>
            </div>

            {/* Image Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {showcaseImages.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentImageIndex ? 'bg-emerald-600 scale-110' : 'bg-gray-300 hover:bg-gray-400'}`} onClick={() => setCurrentImageIndex(index)} />)}
            </div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Experience Nature Like Never Before
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                From majestic mountain peaks to pristine beaches, our curated collection of destinations offers
                something magical for every traveler. Each location has been carefully selected to provide you
                with authentic experiences and breathtaking photo opportunities.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Destinations</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">50K+</div>
                  <div className="text-sm text-gray-600">Happy Travelers</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                Explore All Destinations
              </Button>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>✓ Professional Photography Tours</span>
                <span>✓ Expert Local Guides</span>
              </div>
            </div>
          </div>
        </div>

        {/* Small Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {showcaseImages.map((image, index) => <div key={index} className="relative h-32 md:h-40 rounded-xl overflow-hidden cursor-pointer group" onClick={() => setCurrentImageIndex(index)}>
              <img src={image.url} alt={image.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className={`absolute inset-0 transition-all duration-200 ${index === currentImageIndex ? 'ring-4 ring-emerald-500 ring-offset-2' : 'group-hover:bg-black/20'}`}></div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default GalleryShowcase;