
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Star, Wifi, Car, Coffee, Users, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Accommodation = () => {
  const [activeFilter, setActiveFilter] = useState('semua');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    { id: 'semua', name: 'Semua Akomodasi' },
    { id: 'hotel', name: 'Hotel' },
    { id: 'villa', name: 'Villa' },
    { id: 'resort', name: 'Resort' },
    { id: 'apartment', name: 'Apartemen' }
  ];

  const accommodations = [
    {
      id: 1,
      name: "Grand Bali Resort & Spa",
      type: "resort",
      location: "Ubud, Bali",
      price: "Rp 1.200.000",
      originalPrice: "Rp 1.500.000",
      rating: 4.8,
      reviews: 234,
      image: "/placeholder.svg",
      features: ["Wifi Gratis", "Kolam Renang", "Spa", "Restoran"],
      amenities: [Wifi, Coffee, Car, Users]
    },
    {
      id: 2,
      name: "Villa Tropical Paradise",
      type: "villa",
      location: "Seminyak, Bali",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.000.000",
      rating: 4.9,
      reviews: 156,
      image: "/placeholder.svg",
      features: ["Private Pool", "Butler Service", "Kitchen", "Garden"],
      amenities: [Wifi, Coffee, Car, Users]
    },
    {
      id: 3,
      name: "Hotel Borobudur Heritage",
      type: "hotel",
      location: "Yogyakarta",
      price: "Rp 800.000",
      originalPrice: "Rp 1.000.000",
      rating: 4.7,
      reviews: 389,
      image: "/placeholder.svg",
      features: ["Breakfast", "City View", "Gym", "Conference Room"],
      amenities: [Wifi, Coffee, Car, Users]
    },
    {
      id: 4,
      name: "Komodo Luxury Apartment",
      type: "apartment",
      location: "Labuan Bajo, NTT",
      price: "Rp 1.800.000",
      originalPrice: "Rp 2.200.000",
      rating: 4.6,
      reviews: 98,
      image: "/placeholder.svg",
      features: ["Ocean View", "Kitchenette", "Balcony", "Laundry"],
      amenities: [Wifi, Coffee, Car, Users]
    },
    {
      id: 5,
      name: "Toba Lake Resort",
      type: "resort",
      location: "Danau Toba, Sumatra Utara",
      price: "Rp 950.000",
      originalPrice: "Rp 1.200.000",
      rating: 4.5,
      reviews: 167,
      image: "/placeholder.svg",
      features: ["Lake View", "Water Sports", "Cultural Show", "Spa"],
      amenities: [Wifi, Coffee, Car, Users]
    },
    {
      id: 6,
      name: "Raja Ampat Dive Lodge",
      type: "hotel",
      location: "Raja Ampat, Papua Barat",
      price: "Rp 3.200.000",
      originalPrice: "Rp 4.000.000",
      rating: 4.9,
      reviews: 78,
      image: "/placeholder.svg",
      features: ["Diving Center", "Marine View", "Equipment Rental", "Boat Transfer"],
      amenities: [Wifi, Coffee, Car, Users]
    }
  ];

  const filteredAccommodations = accommodations.filter(item => {
    const matchesFilter = activeFilter === 'semua' || item.type === activeFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Akomodasi Pilihan
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Temukan tempat menginap terbaik di seluruh Indonesia
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-full p-2 flex items-center max-w-2xl mx-auto">
              <div className="flex-1 flex items-center px-4">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Cari hotel, villa, resort..."
                  className="w-full py-2 text-gray-700 focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-full hover:from-emerald-600 hover:to-teal-600">
                Cari
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 sticky top-[88px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2 flex-wrap">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600 font-medium">Filter:</span>
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                    activeFilter === filter.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                  } border`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
            <div className="text-gray-600">
              {filteredAccommodations.length} akomodasi ditemukan
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAccommodations.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    HEMAT 20%
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm capitalize">
                    {item.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{item.rating}</span>
                      <span className="text-xs text-gray-500">({item.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{item.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    {item.amenities.slice(0, 4).map((Icon, index) => (
                      <Icon key={index} className="w-5 h-5 text-gray-400" />
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="text-xs bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-emerald-600">{item.price}</span>
                        <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                      </div>
                      <span className="text-xs text-gray-500">per malam</span>
                    </div>
                    <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600">
                      Pesan
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredAccommodations.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">Tidak ada akomodasi yang ditemukan</div>
              <Button 
                onClick={() => {
                  setActiveFilter('semua');
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

export default Accommodation;
