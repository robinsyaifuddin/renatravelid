
import React, { useState } from 'react';
import { Star, MapPin, Calendar, Users, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TourGrid = () => {
  const tours = [
    {
      id: 1,
      title: "Pulau Tidung Adventure",
      location: "Kepulauan Seribu, Jakarta",
      duration: "2 Hari 1 Malam",
      groupSize: "15-25 orang",
      rating: 4.8,
      reviews: 142,
      price: "Rp 450.000",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop&auto=format",
      category: "Pantai",
      difficulty: "Mudah"
    },
    {
      id: 2,
      title: "Pulau Pramuka Eksplorasi",
      location: "Kepulauan Seribu, Jakarta",
      duration: "2 Hari 1 Malam", 
      groupSize: "10-20 orang",
      rating: 4.7,
      reviews: 98,
      price: "Rp 385.000",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&auto=format",
      category: "Alam",
      difficulty: "Mudah"
    },
    {
      id: 3,
      title: "Gunung Prau Sunrise",
      location: "Wonosobo, Jawa Tengah",
      duration: "2 Hari 1 Malam",
      groupSize: "8-15 orang", 
      rating: 4.9,
      reviews: 203,
      price: "Rp 325.000",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&auto=format",
      category: "Pegunungan",
      difficulty: "Sedang"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Destinasi Terbaik</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jelajahi keindahan Indonesia dengan paket tour terpilih dari RenaTravel.id
          </p>
        </div>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {tour.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {tour.difficulty}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(tour.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{tour.rating}</span>
                  <span className="text-gray-500 text-sm">({tour.reviews})</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors duration-200">
                  {tour.title}
                </h3>

                {/* Location */}
                <div className="flex items-center space-x-2 text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm">{tour.location}</span>
                </div>

                {/* Details */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-emerald-600">{tour.price}</span>
                    <div className="text-xs text-gray-500">per orang</div>
                  </div>
                  <Link to={`/tour/${tour.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200 group/btn"
                    >
                      <span>Detail</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/tour">
            <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-200">
              Lihat Semua Tour
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TourGrid;
