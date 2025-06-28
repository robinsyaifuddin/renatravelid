
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface TourImageGalleryProps {
  images: string[];
  title: string;
}

const TourImageGallery: React.FC<TourImageGalleryProps> = ({ images, title }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Ensure we have exactly 3 images, fill with placeholder if needed
  const displayImages = [...images];
  while (displayImages.length < 3) {
    displayImages.push("https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&auto=format");
  }
  const finalImages = displayImages.slice(0, 3);

  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    onSelect();
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleThumbnailClick = (index: number) => {
    if (!api) return;
    api.scrollTo(index);
  };

  return (
    <div className="space-y-4">
      <Carousel 
        setApi={setApi} 
        plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]} 
        className="w-full relative"
      >
        <CarouselContent>
          {finalImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="aspect-video rounded-xl overflow-hidden">
                <img 
                  src={image} 
                  alt={`${title} ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 bg-white/70 hover:bg-white/90 text-gray-800 border-none" />
        <CarouselNext className="absolute right-4 bg-white/70 hover:bg-white/90 text-gray-800 border-none" />
      </Carousel>

      {/* Thumbnail Grid - Responsive */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {finalImages.map((image, index) => (
          <button
            key={index}
            type="button"
            className={`aspect-video rounded-lg overflow-hidden ring-2 transition-all duration-200 ${
              selectedIndex === index 
                ? 'ring-emerald-500 ring-offset-2' 
                : 'ring-transparent hover:ring-emerald-300'
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img 
              src={image} 
              alt={`${title} thumbnail ${index + 1}`} 
              className={`w-full h-full object-cover transition-all duration-300 ${
                selectedIndex === index ? 'scale-105 brightness-110' : 'hover:scale-105'
              }`} 
            />
          </button>
        ))}
      </div>

      {/* Image Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
        <h4 className="font-medium text-blue-800 mb-2">Cara Mengganti Gambar:</h4>
        <ul className="text-blue-700 space-y-1">
          <li>• <strong>Upload langsung:</strong> Gunakan fitur upload Lovable (direkomendasikan)</li>
          <li>• <strong>URL publik:</strong> Gunakan link dari Unsplash, Imgur, atau hosting lainnya</li>
          <li>• <strong>Google Drive:</strong> Convert share link menjadi direct link terlebih dahulu</li>
        </ul>
      </div>
    </div>
  );
};

export default TourImageGallery;
