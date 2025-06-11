
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, Eye, MessageCircle, ArrowLeft, Share2, Heart, Bookmark, Facebook, Twitter, Link2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [newComment, setNewComment] = useState('');

  // Sample blog data - in real app, this would come from API
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips Hemat Liburan ke Bali untuk Backpacker",
      excerpt: "Panduan lengkap untuk menikmati keindahan Bali dengan budget terbatas. Mulai dari transportasi, akomodasi, hingga kuliner murah meriah yang tetap nikmat dan berkesan.",
      category: "tips",
      author: "Ahmad Susanto",
      date: "15 Maret 2024",
      readTime: "5 menit",
      views: 1234,
      comments: 23,
      likes: 156,
      image: "/placeholder.svg",
      featured: true,
      content: `
        <p>Bali memang menjadi destinasi impian banyak orang. Namun, bukan berarti Anda harus menguras tabungan untuk menikmati keindahan Pulau Dewata ini. Dengan perencanaan yang tepat dan tips-tips jitu, Anda bisa berlibur hemat namun tetap berkesan.</p>
        
        <h3>1. Pilih Waktu yang Tepat</h3>
        <p>Hindari high season seperti Juli-Agustus dan Desember-Januari. Pilih bulan April-Juni atau September-November untuk mendapatkan harga yang lebih murah.</p>
        
        <h3>2. Gunakan Transportasi Lokal</h3>
        <p>Manfaatkan angkutan umum seperti bus Trans Sarbagita atau sewa motor untuk berkeliling. Lebih hemat dibanding taksi atau rental mobil.</p>
        
        <h3>3. Menginap di Hostel atau Homestay</h3>
        <p>Pilih akomodasi budget-friendly seperti hostel atau homestay. Selain hemat, Anda juga bisa bertemu backpacker lain dan bertukar cerita.</p>
        
        <h3>4. Makan di Warung Lokal</h3>
        <p>Jangan selalu makan di restoran turis. Warung lokal menawarkan makanan autentik dengan harga yang jauh lebih terjangkau.</p>
        
        <h3>5. Manfaatkan Pantai Gratis</h3>
        <p>Tidak semua pantai di Bali berbayar. Pantai seperti Sanur, Jimbaran, dan beberapa spot di Uluwatu bisa dinikmati gratis.</p>
      `
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
      likes: 89,
      image: "/placeholder.svg",
      featured: false,
      content: `
        <p>Raja Ampat, yang secara harfiah berarti 'Empat Raja', adalah surga bagi para penyelam dan pecinta alam bawah laut. Terletak di ujung barat laut Papua, kepulauan ini menawarkan keanekaragaman hayati laut yang tak tertandingi di dunia.</p>
        
        <h3>Keanekaragaman Hayati yang Menakjubkan</h3>
        <p>Raja Ampat memiliki 75% dari seluruh spesies karang yang ada di dunia. Di sini Anda bisa menemukan lebih dari 1,500 spesies ikan kecil, 537 spesies karang, dan 700 spesies moluska.</p>
        
        <h3>Spot Diving Terbaik</h3>
        <p>Beberapa spot diving yang wajib dikunjungi antara lain Cape Kri, Sardine Reef, The Passage, dan Arborek Jetty. Setiap spot memiliki keunikan tersendiri.</p>
        
        <h3>Waktu Terbaik Berkunjung</h3>
        <p>Oktober hingga April adalah waktu terbaik untuk diving di Raja Ampat. Cuaca relatif tenang dan visibility air laut sangat baik.</p>
      `
    }
  ];

  const currentPost = blogPosts.find(post => post.id === parseInt(id || '1'));
  const relatedPosts = blogPosts.filter(post => post.id !== parseInt(id || '1')).slice(0, 3);

  const comments = [
    {
      id: 1,
      author: "Rina Sari",
      date: "16 Maret 2024",
      content: "Tips yang sangat bermanfaat! Saya sudah mencoba beberapa tips ini dan benar-benar membantu menghemat budget perjalanan.",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      author: "Budi Santoso",
      date: "16 Maret 2024",
      content: "Terima kasih untuk sharingnya. Jadi tambah semangat untuk backpacker-an ke Bali!",
      avatar: "/placeholder.svg"
    }
  ];

  if (!currentPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Artikel tidak ditemukan</h1>
          <Button onClick={() => navigate('/blog')}>Kembali ke Blog</Button>
        </div>
      </div>
    );
  }

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = currentPost.title;
    
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast.success('Link berhasil disalin!');
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast.success(isLiked ? 'Like dibatalkan' : 'Artikel disukai!');
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast.success(isBookmarked ? 'Bookmark dibatalkan' : 'Artikel disimpan!');
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      toast.success('Komentar berhasil ditambahkan!');
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <img 
          src={currentPost.image} 
          alt={currentPost.title}
          className="w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/blog')}
              className="mb-6 text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Blog
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto">
              {currentPost.title}
            </h1>
            <div className="flex items-center justify-center space-x-6 text-white/90">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{currentPost.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{currentPost.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>{currentPost.views} views</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Article Actions */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLike}
                    className={`${isLiked ? 'text-red-500' : 'text-gray-500'} hover:text-red-500`}
                  >
                    <Heart className={`w-5 h-5 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                    {currentPost.likes + (isLiked ? 1 : 0)}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleBookmark}
                    className={`${isBookmarked ? 'text-emerald-600' : 'text-gray-500'} hover:text-emerald-600`}
                  >
                    <Bookmark className={`w-5 h-5 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
                    Simpan
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600 mr-2">Bagikan:</span>
                  <Button variant="ghost" size="sm" onClick={() => handleShare('facebook')}>
                    <Facebook className="w-5 h-5 text-blue-600" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleShare('twitter')}>
                    <Twitter className="w-5 h-5 text-blue-400" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleShare('copy')}>
                    <Link2 className="w-5 h-5 text-gray-600" />
                  </Button>
                </div>
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: currentPost.content }}
              />

              {/* Tags */}
              <div className="flex items-center space-x-2 mb-8">
                <span className="text-gray-600">Tags:</span>
                <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm">
                  {currentPost.category}
                </span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  travel
                </span>
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                  tips
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            Komentar ({comments.length})
          </h3>

          {/* Add Comment Form */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <form onSubmit={handleCommentSubmit}>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Tulis komentar Anda..."
                  className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  rows={4}
                />
                <Button type="submit" className="mt-4 bg-emerald-600 hover:bg-emerald-700">
                  Kirim Komentar
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <Card key={comment.id} className="border-l-4 border-l-emerald-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={comment.avatar} 
                      alt={comment.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-gray-800">{comment.author}</h4>
                        <span className="text-gray-500 text-sm">{comment.date}</span>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Artikel Terkait
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Button 
                    onClick={() => navigate(`/blog/${post.id}`)}
                    variant="outline" 
                    className="w-full"
                  >
                    Baca Artikel <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetail;
