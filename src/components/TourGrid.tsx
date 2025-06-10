
import React, { useState } from 'react';
import { Star, MapPin, Calendar, Users, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const TourGrid = () => {
  const [sortBy, setSortBy] = useState('popular');
  const [currentPage, setCurrentPage] = useState(1);

  const tours = [
    {
      id: 1,
      title: "Boathouse Neighborhood",
      location: "North Province, Maldives",
      duration: "06 Days",
      groupSize: "2k",
      rating: 4.9,
      reviews: 63,
      price: "From $9165",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Popular"
    },
    {
      id: 2,
      title: "Camping Tent Near Coastline",
      location: "Koh Rong, Maldives",
      duration: "05 Days",
      groupSize: "2k", 
      rating: 4.9,
      reviews: 63,
      price: "From $3165",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Adventure"
    },
    {
      id: 3,
      title: "Sitting on Boat Spreading Her Arms",
      location: "Tantiaw Anisang Sok, Thailand",
      duration: "05 Days",
      groupSize: "25",
      rating: 4.9,
      reviews: 63,
      price: "From $6165",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Nature"
    },
    {
      id: 4,
      title: "Man Standing on a Rock",
      location: "North Province, Maldives",
      duration: "06 Days",
      groupSize: "2k",
      rating: 4.9,
      reviews: 63,
      price: "From $9165",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Adventure"
    },
    {
      id: 5,
      title: "Huts in the Middle Of Beach",
      location: "Sovalye, French Polynesia",
      duration: "05 Days",
      groupSize: "2k",
      rating: 4.9,
      reviews: 63,
      price: "From $9165",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Luxury"
    },
    {
      id: 6,
      title: "Beautiful Floating Villa",
      location: "Gaafu Dhaalu Atoll, Maldives",
      duration: "06 Days",
      groupSize: "25",
      rating: 4.9,
      reviews: 63,
      price: "From $9165",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Luxury"
    },
    {
      id: 7,
      title: "Man and Woman Walks on Dock",
      location: "Maldives",
      duration: "05 Days",
      groupSize: "2k",
      rating: 4.9,
      reviews: 63,
      price: "From $7165",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Romantic"
    },
    {
      id: 8,
      title: "Trees Under White Clouds during Daytime",
      location: "Yogyakar, French Polynesia",
      duration: "06 Days",
      groupSize: "25",
      rating: 4.9,
      reviews: 63,
      price: "From $9165",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Culture"
    },
    {
      id: 9,
      title: "Body of Water Near Mountain",
      location: "Bali, Indonesia",
      duration: "05 Days",
      groupSize: "2k",
      rating: 4.9,
      reviews: 63,
      price: "From $8165",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Nature"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-gray-600 mb-2">Showing Results 09 Of 55</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Sort By</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
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
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-emerald-200 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-200 group/btn"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                className={`w-10 h-10 ${
                  currentPage === page
                    ? 'bg-emerald-600 text-white'
                    : 'border-gray-300 text-gray-600 hover:border-emerald-600 hover:text-emerald-600'
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            size="sm"
            className="border-gray-300 text-gray-600 hover:border-emerald-600 hover:text-emerald-600"
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TourGrid;
