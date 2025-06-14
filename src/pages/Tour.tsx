
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, MapPin, Calendar, Users, ChevronRight, Filter, Search, Shield, Mountain, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Tour = () => {
  const [sortBy, setSortBy] = useState('popular');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('semua');

  const categories = [
    { id: 'semua', name: 'Semua Tour' },
    { id: 'pantai', name: 'Pantai & Pulau' },
    { id: 'pegunungan', name: 'Pegunungan' },
    { id: 'alam', name: 'Wisata Alam' },
    { id: 'budaya', name: 'Wisata Budaya' },
    { id: 'petualangan', name: 'Petualangan' }
  ];

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
      originalPrice: "Rp 550.000",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop&auto=format",
      category: "pantai",
      featured: true,
      difficulty: "Mudah",
      minAge: "5 tahun",
      description: "Nikmati keindahan Pulau Tidung dengan aktivitas snorkeling, sepeda keliling pulau, dan jembatan cinta yang ikonik. Pulau terdekat dari Jakarta dengan pemandangan laut yang memukau."
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
      originalPrice: "Rp 485.000",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&auto=format",
      category: "alam",
      featured: false,
      difficulty: "Mudah",
      minAge: "8 tahun",
      description: "Jelajahi Pulau Pramuka sebagai pusat administrasi Kepulauan Seribu dengan aktivitas penangkaran penyu sisik, snorkeling, dan wisata mangrove yang menarik."
    },
    {
      id: 3,
      title: "Pulau Peucang Eksotis",
      location: "Ujung Kulon, Banten",
      duration: "3 Hari 2 Malam",
      groupSize: "8-15 orang",
      rating: 4.9,
      reviews: 76,
      price: "Rp 1.250.000",
      originalPrice: "Rp 1.450.000",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop&auto=format",
      category: "alam",
      featured: true,
      difficulty: "Sedang",
      minAge: "12 tahun",
      description: "Eksplorasi Pulau Peucang di Taman Nasional Ujung Kulon dengan wildlife watching, trekking hutan, dan pantai perawan yang menakjubkan. Habitat badak bercula satu."
    },
    {
      id: 4,
      title: "Pulau Sebesi Adventure",
      location: "Selat Sunda, Lampung",
      duration: "2 Hari 1 Malam",
      groupSize: "10-18 orang",
      rating: 4.6,
      reviews: 84,
      price: "Rp 650.000",
      originalPrice: "Rp 750.000",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop&auto=format",
      category: "petualangan",
      featured: false,
      difficulty: "Sedang",
      minAge: "15 tahun",
      description: "Petualangan seru di Pulau Sebesi dengan pendakian gunung berapi, eksplorasi gua vulkanik, dan diving di perairan jernih dengan terumbu karang yang indah."
    },
    {
      id: 5,
      title: "TWA Papandayan",
      location: "Garut, Jawa Barat",
      duration: "1 Hari (Day Trip)",
      groupSize: "8-20 orang",
      rating: 4.8,
      reviews: 156,
      price: "Rp 225.000",
      originalPrice: "Rp 275.000",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&auto=format",
      category: "alam",
      featured: true,
      difficulty: "Mudah",
      minAge: "10 tahun",
      description: "Jelajahi keunikan Taman Wisata Alam Papandayan dengan kawah aktif, sumber air panas, dan fenomena geologi yang menakjubkan. Cocok untuk family trip."
    },
    {
      id: 6,
      title: "Wisata Budaya Baduy",
      location: "Lebak, Banten",
      duration: "2 Hari 1 Malam",
      groupSize: "6-12 orang",
      rating: 4.7,
      reviews: 89,
      price: "Rp 485.000",
      originalPrice: "Rp 585.000",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop&auto=format",
      category: "budaya",
      featured: false,
      difficulty: "Sedang",
      minAge: "12 tahun",
      description: "Rasakan pengalaman autentik dengan suku Baduy dalam. Trekking melintasi hutan, belajar kearifan lokal, dan merasakan kehidupan tradisional yang masih terjaga."
    },
    {
      id: 7,
      title: "Kawah Ratu Mystical",
      location: "Gunung Salak, Bogor",
      duration: "1 Hari (Day Trip)",
      groupSize: "8-15 orang",
      rating: 4.5,
      reviews: 67,
      price: "Rp 195.000",
      originalPrice: "Rp 245.000",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&auto=format",
      category: "alam",
      featured: false,
      difficulty: "Sedang",
      minAge: "16 tahun",
      description: "Eksplorasi Kawah Ratu dengan pemandangan kawah vulkanik yang mistis, trekking hutan hujan tropis, dan suasana spiritual yang menenangkan jiwa."
    },
    {
      id: 8,
      title: "Gunung Prau Sunrise",
      location: "Wonosobo, Jawa Tengah",
      duration: "2 Hari 1 Malam",
      groupSize: "8-15 orang",
      rating: 4.9,
      reviews: 203,
      price: "Rp 325.000",
      originalPrice: "Rp 425.000",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&auto=format",
      category: "pegunungan",
      featured: true,
      difficulty: "Sedang",
      minAge: "15 tahun",
      description: "Saksikan sunrise spektakuler dari puncak Gunung Prau dengan pemandangan 360 derajat. Trekking yang ramah untuk pemula dengan savana yang memukau."
    },
    {
      id: 9,
      title: "Gunung Aseupan Adventure",
      location: "Sukabumi, Jawa Barat",
      duration: "2 Hari 1 Malam",
      groupSize: "6-12 orang",
      rating: 4.6,
      reviews: 91,
      price: "Rp 375.000",
      originalPrice: "Rp 475.000",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop&auto=format",
      category: "pegunungan",
      featured: false,
      difficulty: "Menantang",
      minAge: "17 tahun",
      description: "Pendakian menantang Gunung Aseupan dengan jalur terjal namun pemandangan yang luar biasa. Cocok untuk pendaki yang sudah berpengalaman dan menyukai tantangan."
    },
    {
      id: 10,
      title: "Gunung Pulosari Eksotis",
      location: "Pandeglang, Banten",
      duration: "2 Hari 1 Malam",
      groupSize: "8-16 orang",
      rating: 4.7,
      reviews: 124,
      price: "Rp 295.000",
      originalPrice: "Rp 395.000",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&auto=format",
      category: "pegunungan",
      featured: false,
      difficulty: "Sedang",
      minAge: "14 tahun",
      description: "Jelajahi Gunung Pulosari dengan pemandangan Selat Sunda yang menakjubkan. Trekking melewati hutan tropis dengan flora fauna yang beragam."
    }
  ];

  const filteredTours = tours.filter(tour => {
    const matchesCategory = selectedCategory === 'semua' || tour.category === selectedCategory;
    const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
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
              {filteredTours.length} Tour Tersedia
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilih dari berbagai paket tour yang telah dirancang khusus untuk memberikan pengalaman tak terlupakan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {tour.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        FEATURED
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === tour.category)?.name}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      {getDifficultyIcon(tour.difficulty)}
                      <span className="text-xs font-medium text-gray-700">{tour.difficulty}</span>
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
                          className={`w-4 h-4 ${
                            i < Math.floor(tour.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{tour.rating}</span>
                    <span className="text-gray-500 text-sm">({tour.reviews} ulasan)</span>
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

                  {/* Additional Info */}
                  <div className="text-xs text-gray-500 mb-4">
                    Minimal usia: {tour.minAge} • Tingkat kesulitan: {tour.difficulty}
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-emerald-600">{tour.price}</span>
                        {tour.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{tour.originalPrice}</span>
                        )}
                      </div>
                      <span className="text-xs text-gray-500">per orang</span>
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

          {filteredTours.length === 0 && (
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
