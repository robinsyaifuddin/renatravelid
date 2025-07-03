
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, MapPin, Calendar, Users, ChevronRight, Filter, Search, Shield, Mountain, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { tourData } from '@/data/tourData';
import { getMainDestinationImage } from '@/utils/imageUtils';

const Tour = () => {
  const [sortBy, setSortBy] = useState('popular');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('semua');

  const categories = [
    { id: 'semua', name: 'Semua Tour' },
    { id: 'Pantai', name: 'Pantai & Pulau' },
    { id: 'Pegunungan', name: 'Pegunungan' },
    { id: 'Alam', name: 'Wisata Alam' },
    { id: 'Budaya', name: 'Wisata Budaya' },
    { id: 'petualangan', name: 'Petualangan' }
  ];

  // Convert tourData object to array for easier manipulation
  const tours = Object.values(tourData);

  const filteredTours = tours.filter(tour => {
    const matchesCategory = selectedCategory === 'semua' || tour.category === selectedCategory;
    const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort tours based on selected option
  const sortedTours = [...filteredTours].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return typeof a.price === 'number' && typeof b.price === 'number' 
          ? a.price - b.price 
          : parseFloat(a.price.toString().replace(/[^\d]/g, '')) - parseFloat(b.price.toString().replace(/[^\d]/g, ''));
      case 'price-high':
        return typeof a.price === 'number' && typeof b.price === 'number' 
          ? b.price - a.price 
          : parseFloat(b.price.toString().replace(/[^\d]/g, '')) - parseFloat(a.price.toString().replace(/[^\d]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      default: // popular
        return b.reviews - a.reviews;
    }
  });

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'Mudah':
        return <Shield className="w-4 h-4 text-green-500" />;
      case 'Sedang':
        return <Mountain className="w-4 h-4 text-yellow-500" />;
      case 'Menantang':
        return <Waves className="w-4 h-4 text-red-500" />;
      default:
        return <Shield className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Paket Tour RenaTravel.id
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Jelajahi destinasi terbaik Indonesia dengan pengalaman tak terlupakan
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-full p-2 flex items-center max-w-2xl mx-auto">
              <div className="flex-1 flex items-center px-4">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Cari destinasi impian Anda..."
                  className="w-full py-2 text-gray-700 focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-full hover:from-emerald-600 hover:to-teal-600">
                Cari Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="text-gray-600 font-medium">Kategori:</span>
              </div>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 w-full sm:w-auto">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 py-2 text-sm rounded-full transition-colors duration-200 whitespace-nowrap ${
                      selectedCategory === category.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4 w-full sm:w-auto">
              <span className="text-gray-600 text-sm">Urutkan:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 w-full sm:w-auto"
              >
                <option value="popular">Terpopuler</option>
                <option value="price-low">Harga: Rendah ke Tinggi</option>
                <option value="price-high">Harga: Tinggi ke Rendah</option>
                <option value="rating">Rating Tertinggi</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {sortedTours.length} Tour Tersedia
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilih dari berbagai paket tour yang telah dirancang khusus untuk memberikan pengalaman tak terlupakan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={getMainDestinationImage(tour.id.toString())}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      {tour.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-emerald-600/90 backdrop-blur-sm text-white px-2 py-1 rounded-full">
                      {getDifficultyIcon(tour.difficulty)}
                      <span className="text-xs font-medium">{tour.difficulty}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">5.0</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors duration-200">
                    {tour.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tour.description}</p>

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
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-lg font-bold text-emerald-600">{tour.price}</span>
                      <div className="text-xs text-gray-500">per orang</div>
                    </div>
                  </div>

                  <Link to={`/tour/${tour.id}`}>
                    <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 group/btn">
                      <span>Lihat Detail</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {sortedTours.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">Tidak ada tour yang ditemukan</div>
              <Button 
                onClick={() => {
                  setSelectedCategory('semua');
                  setSearchTerm('');
                }}
                variant="outline"
              >
                Reset Filter
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tour;
