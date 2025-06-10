
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, Eye, MessageCircle, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('semua');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'semua', name: 'Semua Artikel' },
    { id: 'tips', name: 'Tips Perjalanan' },
    { id: 'destinations', name: 'Destinasi Favorit' },
    { id: 'reviews', name: 'Ulasan & Review' },
    { id: 'culture', name: 'Budaya & Tradisi' },
    { id: 'culinary', name: 'Kuliner Nusantara' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Tips Hemat Liburan ke Bali untuk Backpacker",
      excerpt: "Panduan lengkap untuk menikmati keindahan Bali dengan budget terbatas. Mulai dari transportasi, akomodasi, hingga kuliner murah meriah.",
      category: "tips",
      author: "Ahmad Susanto",
      date: "15 Maret 2024",
      readTime: "5 menit",
      views: 1234,
      comments: 23,
      image: "/placeholder.svg",
      featured: true
    },
    {
      id: 2,
      title: "Menjelajahi Keajaiban Raja Ampat: Surga Bawah Laut Indonesia",
      excerpt: "Petualangan menakjubkan di Raja Ampat, Papua Barat. Temukan keanekaragaman hayati laut yang memukau dan spot diving terbaik dunia.",
      category: "destinations",
      author: "Sari Dewi",
      date: "12 Maret 2024",
      readTime: "8 menit",
      views: 987,
      comments: 15,
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 3,
      title: "Review Lengkap: Borobudur Sunrise Tour Experience",
      excerpt: "Pengalaman pribadi mengikuti tur sunrise di Candi Borobudur. Tips booking, harga, dan hal-hal yang perlu dipersiapkan.",
      category: "reviews",
      author: "Budi Hartono",
      date: "10 Maret 2024",
      readTime: "6 menit",
      views: 756,
      comments: 31,
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 4,
      title: "Tradisi Nyepi di Bali: Pengalaman Spiritual yang Mendalam",
      excerpt: "Mengenal lebih dekat tradisi Nyepi atau Hari Raya Saka di Bali. Filosofi, makna, dan pengalaman wisatawan selama Nyepi.",
      category: "culture",
      author: "Desi Ratnasari",
      date: "8 Maret 2024",
      readTime: "7 menit",
      views: 645,
      comments: 18,
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 5,
      title: "Kuliner Khas Yogyakarta yang Wajib Dicoba",
      excerpt: "Panduan lengkap kuliner Jogja dari gudeg hingga bakpia. Rekomendasi tempat makan terbaik dan harga yang bersahabat.",
      category: "culinary",
      author: "Maya Sari",
      date: "5 Maret 2024",
      readTime: "4 menit",
      views: 892,
      comments: 27,
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 6,
      title: "Panduan Lengkap Mendaki Gunung Rinjani",
      excerpt: "Persiapan fisik, mental, dan peralatan untuk mendaki Gunung Rinjani. Jalur pendakian, spot foto terbaik, dan tips keamanan.",
      category: "tips",
      author: "Rizky Pratama",
      date: "3 Maret 2024",
      readTime: "10 menit",
      views: 1456,
      comments: 42,
      image: "/placeholder.svg",
      featured: true
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'semua' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog Perjalanan
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Inspirasi, tips, dan cerita perjalanan dari seluruh Nusantara
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-full p-2 flex items-center max-w-2xl mx-auto">
              <div className="flex-1 flex items-center px-4">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Cari artikel, destinasi, tips..."
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

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Artikel Pilihan</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      FEATURED
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span className="bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full text-xs font-medium">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime} baca</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-emerald-600 transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
              {filteredPosts.length} artikel ditemukan
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {categories.find(cat => cat.id === post.category)?.name}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime} baca</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors cursor-pointer line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">Tidak ada artikel yang ditemukan</div>
              <Button 
                onClick={() => {
                  setActiveCategory('semua');
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

export default Blog;
