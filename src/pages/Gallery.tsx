
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Eye, Download, Heart, Filter } from 'lucide-react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('semua');

  const categories = [
    { id: 'semua', name: 'Semua Foto' },
    { id: 'nature', name: 'Alam & Pemandangan' },
    { id: 'adventure', name: 'Petualangan' },
    { id: 'culture', name: 'Budaya Lokal' },
    { id: 'food', name: 'Kuliner' },
    { id: 'beach', name: 'Pantai' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Sunrise di Bromo",
      category: "nature",
      location: "Bromo, Jawa Timur",
      image: "/placeholder.svg",
      photographer: "Ahmad Susanto",
      likes: 234,
      views: 1250
    },
    {
      id: 2,
      title: "Danau Kelimutu",
      category: "nature",
      location: "Flores, NTT",
      image: "/placeholder.svg",
      photographer: "Sari Dewi",
      likes: 189,
      views: 980
    },
    {
      id: 3,
      title: "Tari Kecak Tradisional",
      category: "culture",
      location: "Ubud, Bali",
      image: "/placeholder.svg",
      photographer: "Budi Hartono",
      likes: 156,
      views: 720
    },
    {
      id: 4,
      title: "Rafting di Sungai Ayung",
      category: "adventure",
      location: "Ubud, Bali",
      image: "/placeholder.svg",
      photographer: "Desi Ratnasari",
      likes: 298,
      views: 1580
    },
    {
      id: 5,
      title: "Pantai Pink Komodo",
      category: "beach",
      location: "Komodo, NTT",
      image: "/placeholder.svg",
      photographer: "Rizky Pratama",
      likes: 345,
      views: 2100
    },
    {
      id: 6,
      title: "Gudeg Jogja Autentik",
      category: "food",
      location: "Yogyakarta",
      image: "/placeholder.svg",
      photographer: "Maya Sari",
      likes: 167,
      views: 890
    },
    {
      id: 7,
      title: "Raja Ampat Underwater",
      category: "adventure",
      location: "Raja Ampat, Papua",
      image: "/placeholder.svg",
      photographer: "Andi Setiawan",
      likes: 412,
      views: 2450
    },
    {
      id: 8,
      title: "Candi Borobudur Sunrise",
      category: "culture",
      location: "Magelang, Jawa Tengah",
      image: "/placeholder.svg",
      photographer: "Lina Maharani",
      likes: 523,
      views: 3200
    },
    {
      id: 9,
      title: "Kawah Ijen Blue Fire",
      category: "nature",
      location: "Banyuwangi, Jawa Timur",
      image: "/placeholder.svg",
      photographer: "Fadli Rahman",
      likes: 387,
      views: 2890
    }
  ];

  const filteredItems = galleryItems.filter(item => 
    activeCategory === 'semua' || item.category === activeCategory
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Galeri Foto
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Jelajahi keindahan Indonesia melalui lensa fotografer profesional
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              Koleksi foto-foto menakjubkan dari berbagai destinasi wisata di Indonesia yang akan menginspirasi perjalanan Anda selanjutnya
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-gray-600">Foto Berkualitas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
              <div className="text-gray-600">Destinasi</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">25+</div>
              <div className="text-gray-600">Fotografer</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">1M+</div>
              <div className="text-gray-600">Total Views</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-[88px] z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2 flex-wrap">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600 font-medium">Kategori:</span>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                    activeCategory === category.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="text-gray-600">
              {filteredItems.length} foto ditampilkan
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                      <div className="flex space-x-4 mb-4">
                        <button className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                          <Eye className="w-6 h-6" />
                        </button>
                        <button className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                          <Heart className="w-6 h-6" />
                        </button>
                        <button className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                          <Download className="w-6 h-6" />
                        </button>
                      </div>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm opacity-80">{item.location}</p>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </div>
                </div>
                
                {/* Info */}
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.location}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      by {item.photographer}
                    </div>
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{item.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{item.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">Tidak ada foto dalam kategori ini</div>
              <button 
                onClick={() => setActiveCategory('semua')}
                className="text-emerald-600 hover:text-emerald-700 font-medium"
              >
                Lihat Semua Foto
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
