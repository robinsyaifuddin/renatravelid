
import React from 'react';
import { Star, MapPin, Calendar, Users, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { tourData } from '@/data/tourData';
import { getMainDestinationImage } from '@/utils/imageUtils';

const TourGrid = () => {
  const navigate = useNavigate();
  
  // Get specific destinations: TWA Papandayan, Pulau Pecang, Wisata Baduy
  const specificDestinations = ['twa-papandayan', 'pulau-pecang', 'wisata-baduy'];
  const topDestinations = specificDestinations.map(id => ({
    id,
    ...tourData[id as keyof typeof tourData]
  })).filter(tour => tour.title); // Filter out any undefined tours

  const handleBookNow = (tourId: string) => {
    navigate(`/tour/${tourId}`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Destinasi Terbaik
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jelajahi destinasi wisata terbaik pilihan kami dengan pengalaman tak terlupakan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topDestinations.map((tour) => (
            <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={getMainDestinationImage(tour.id.toString())} 
                  alt={tour.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {tour.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{tour.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.title}</h3>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{tour.location}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {tour.description}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-emerald-600">
                      Rp {tour.price.toLocaleString()}
                    </span>
                    <span className="text-gray-500 text-sm">/orang</span>
                  </div>
                  <Button 
                    onClick={() => handleBookNow(tour.id)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer"
                  >
                    Lihat Detail
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourGrid;
