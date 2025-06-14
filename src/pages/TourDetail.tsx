
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, MapPin, Calendar, Users, CheckCircle, Phone, MessageCircle, ArrowLeft, Clock, Shield, Award, AlertTriangle, Camera, Utensils, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TourDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Tour data dengan informasi lengkap untuk semua destinasi RenaTravel.id
  const tours = {
    "1": {
      id: 1,
      title: "Pulau Tidung Adventure",
      location: "Kepulauan Seribu, Jakarta",
      duration: "2 Hari 1 Malam",
      groupSize: "15-25 orang",
      rating: 4.8,
      reviews: 142,
      price: "Rp 450.000",
      originalPrice: "Rp 550.000",
      difficulty: "Mudah",
      minAge: "5 tahun",
      images: [
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop&auto=format"
      ],
      description: "Pulau Tidung adalah destinasi wisata favorit di Kepulauan Seribu yang terkenal dengan Jembatan Cinta dan keindahan lautnya. Pulau ini menawarkan pengalaman snorkeling yang menakjubkan dengan terumbu karang yang masih terjaga. Nikmati suasana pantai yang tenang, air laut yang jernih, dan aktivitas menyenangkan seperti bersepeda keliling pulau. Cocok untuk liburan keluarga, honeymoon, atau gathering bersama teman.",
      highlights: [
        "Snorkeling di spot terbaik dengan visibility tinggi",
        "Jembatan Cinta yang ikonik untuk foto Instagram",
        "Bersepeda keliling pulau dengan pemandangan indah", 
        "Sunset viewing di pantai barat pulau",
        "Interaksi dengan penduduk lokal yang ramah",
        "Makan seafood segar hasil tangkapan nelayan"
      ],
      facilities: [
        "Transportasi AC Jakarta - Marina Ancol PP",
        "Kapal cepat menuju Pulau Tidung",
        "Homestay bersih dengan AC",
        "Sepeda untuk keliling pulau",
        "Peralatan snorkeling lengkap",
        "Life jacket dan safety equipment",
        "Guide lokal berpengalaman",
        "Dokumentasi foto underwater"
      ],
      itinerary: [
        {
          day: 1,
          title: "Perjalanan & Eksplorasi Pulau",
          activities: [
            "06.00 - Meeting point di Marina Ancol",
            "07.00 - Berangkat dengan kapal cepat",
            "09.00 - Tiba di Pulau Tidung & check-in homestay",
            "10.00 - Bersepeda keliling pulau & Jembatan Cinta",
            "12.00 - Makan siang seafood lokal",
            "14.00 - Snorkeling di spot terbaik",
            "16.00 - Free time & sunset viewing",
            "19.00 - BBQ dinner di tepi pantai"
          ]
        },
        {
          day: 2,
          title: "Aktivitas Laut & Kembali",
          activities: [
            "06.00 - Sunrise viewing (optional)",
            "07.00 - Sarapan pagi",
            "08.00 - Snorkeling session kedua",
            "10.00 - Eksplorasi pantai & foto session",
            "12.00 - Makan siang & packing",
            "14.00 - Check-out & persiapan pulang",
            "15.00 - Perjalanan kembali ke Marina Ancol",
            "17.00 - Tiba di Jakarta"
          ]
        }
      ],
      included: [
        "Transportasi AC Jakarta - Marina Ancol PP",
        "Tiket kapal cepat PP Pulau Tidung",
        "Akomodasi homestay 1 malam (AC, kamar mandi dalam)",
        "Makan 3x (1x lunch, 1x dinner BBQ, 1x breakfast)",
        "Sepeda untuk keliling pulau",
        "Peralatan snorkeling & life jacket",
        "Guide lokal berpengalaman",
        "Dokumentasi foto",
        "Retribusi pulau & parkir",
        "Asuransi perjalanan"
      ],
      notIncluded: [
        "Pengeluaran pribadi",
        "Tips guide & crew",
        "Makanan & minuman tambahan",
        "Sewa GoPro (Rp 100k/hari)",
        "Aktivitas tambahan di luar paket"
      ],
      requirements: [
        "Usia minimal 5 tahun (anak di bawah 10 tahun wajib didampingi)",
        "Kondisi fisik sehat",
        "Membawa pakaian renang & ganti",
        "Sunblock & topi",
        "Obat-obatan pribadi jika ada",
        "KTP/identitas diri"
      ],
      cancellationPolicy: [
        "Pembatalan H-7: refund 100%",
        "Pembatalan H-3: refund 50%", 
        "Pembatalan H-1: refund 25%",
        "No show: tidak ada refund",
        "Force majeure: refund 100%"
      ]
    },
    "2": {
      id: 2,
      title: "Pulau Pramuka Eksplorasi",
      location: "Kepulauan Seribu, Jakarta", 
      duration: "2 Hari 1 Malam",
      groupSize: "10-20 orang",
      rating: 4.7,
      reviews: 98,
      price: "Rp 385.000",
      originalPrice: "Rp 485.000",
      difficulty: "Mudah",
      minAge: "8 tahun",
      images: [
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop&auto=format"
      ],
      description: "Pulau Pramuka adalah ibu kota administratif Kepulauan Seribu yang menawarkan wisata edukasi dan konservasi yang menarik. Pulau ini terkenal dengan penangkaran penyu sisik, wisata mangrove, dan aktivitas snorkeling yang mengedukasi. Cocok untuk wisata keluarga yang ingin memberikan pengalaman belajar sambil berlibur.",
      highlights: [
        "Penangkaran penyu sisik dan pelepasan tukik",
        "Wisata mangrove dengan perahu tradisional",
        "Snorkeling di area konservasi terumbu karang",
        "Edukasi ekosistem laut dan konservasi",
        "Eksplorasi pulau dengan sepeda",
        "Interaksi dengan masyarakat lokal"
      ],
      facilities: [
        "Transportasi AC Jakarta - Muara Angke PP",
        "Kapal menuju Pulau Pramuka",
        "Homestay nyaman dengan fasilitas lengkap",
        "Perahu untuk wisata mangrove",
        "Peralatan snorkeling",
        "Sepeda keliling pulau",
        "Guide edukasi konservasi",
        "Dokumentasi kegiatan"
      ],
      itinerary: [
        {
          day: 1,
          title: "Edukasi Konservasi & Eksplorasi",
          activities: [
            "06.30 - Meeting point di Muara Angke",
            "07.30 - Berangkat dengan kapal",
            "09.30 - Tiba di Pulau Pramuka & check-in",
            "10.30 - Kunjungan penangkaran penyu sisik",
            "12.00 - Makan siang",
            "14.00 - Wisata mangrove dengan perahu",
            "16.00 - Bersepeda keliling pulau",
            "18.00 - Sunset & makan malam"
          ]
        },
        {
          day: 2,
          title: "Snorkeling & Pelepasan Tukik",
          activities: [
            "06.00 - Sarapan pagi",
            "07.00 - Snorkeling di area konservasi",
            "09.00 - Pelepasan tukik (jika musim)",
            "10.30 - Eksplorasi pantai & foto",
            "12.00 - Makan siang & packing",
            "13.30 - Check-out & persiapan pulang",
            "14.00 - Perjalanan kembali",
            "16.00 - Tiba di Muara Angke"
          ]
        }
      ],
      included: [
        "Transportasi AC Jakarta - Muara Angke PP",
        "Tiket kapal PP Pulau Pramuka",
        "Akomodasi homestay 1 malam",
        "Makan 3x sesuai program",
        "Tiket masuk penangkaran penyu",
        "Wisata mangrove dengan perahu",
        "Sepeda keliling pulau",
        "Peralatan snorkeling",
        "Guide edukasi",
        "Dokumentasi",
        "Asuransi perjalanan"
      ],
      notIncluded: [
        "Pengeluaran pribadi",
        "Tips guide",
        "Makanan tambahan",
        "Oleh-oleh",
        "Aktivitas di luar paket"
      ],
      requirements: [
        "Usia minimal 8 tahun",
        "Kondisi fisik sehat",
        "Pakaian renang & ganti",
        "Sunblock & topi",
        "Kamera underwater (optional)",
        "Obat pribadi jika perlu"
      ],
      cancellationPolicy: [
        "Pembatalan H-7: refund 100%",
        "Pembatalan H-3: refund 50%",
        "Pembatalan H-1: refund 25%",
        "No show: tidak ada refund",
        "Cuaca buruk: reschedule gratis"
      ]
    }
  };

  const tour = tours[id as keyof typeof tours] || tours["1"];

  const handleBookNow = () => {
    navigate(`/booking/${id}`);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-emerald-600">Beranda</Link>
            <span className="text-gray-400">/</span>
            <Link to="/tour" className="text-gray-600 hover:text-emerald-600">Tour</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800 font-medium">{tour.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Link to="/tour" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Daftar Tour
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img src={tour.images[0]} alt={tour.title} className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {tour.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden">
                    <img src={image} alt={`${tour.title} ${index + 2}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer" />
                  </div>
                ))}
              </div>
            </div>

            {/* Tour Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{tour.title}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-emerald-500" />
                    <span className="text-gray-600">{tour.location}</span>
                  </div>
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
                    <span className="text-sm font-medium ml-1">{tour.rating}</span>
                    <span className="text-gray-500 text-sm">({tour.reviews} ulasan)</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-6 h-6 text-emerald-500" />
                  <div>
                    <div className="text-sm text-gray-600">Durasi</div>
                    <div className="font-semibold">{tour.duration}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Users className="w-6 h-6 text-emerald-500" />
                  <div>
                    <div className="text-sm text-gray-600">Grup Size</div>
                    <div className="font-semibold">{tour.groupSize}</div>
                  </div>
                </div>
              </div>

              {/* Enhanced Pricing Section */}
              <div className="border-t border-b border-gray-200 py-4 sm:py-6">
                <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                  <div className="text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
                      <span className="text-2xl sm:text-3xl font-bold text-emerald-600">{tour.price}</span>
                      {tour.originalPrice && (
                        <span className="text-lg sm:text-xl text-gray-500 line-through mt-1 sm:mt-0">{tour.originalPrice}</span>
                      )}
                    </div>
                    <span className="text-sm sm:text-base text-gray-600 block mt-1">per orang</span>
                  </div>
                  <div className="text-center sm:text-right">
                    <div className="text-sm sm:text-base text-green-600 font-medium">
                      Hemat {tour.originalPrice ? `Rp ${parseInt(tour.originalPrice.replace(/[Rp.,]/g, '')) - parseInt(tour.price.replace(/[Rp.,]/g, ''))}` : 'Rp 100.000'}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">Promo terbatas!</div>
                  </div>
                </div>
              </div>

              {/* Difficulty & Age Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-600">Tingkat Kesulitan</div>
                    <div className="font-semibold text-blue-600">{tour.difficulty}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
                  <Users className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="text-sm text-gray-600">Usia Minimal</div>
                    <div className="font-semibold text-green-600">{tour.minAge}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={handleBookNow} 
                  className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-4 text-lg font-semibold hover:from-teal-600 hover:to-emerald-700"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Pesan Sekarang
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-emerald-200 text-emerald-600 py-4 text-lg font-semibold hover:bg-emerald-50"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Konsultasi Gratis
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <Shield className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">Terpercaya</div>
                </div>
                <div className="p-4">
                  <Award className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">Berpengalaman</div>
                </div>
                <div className="p-4">
                  <Clock className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">24/7 Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-0">
          <div className="w-full max-w-none">
            <div className="bg-white rounded-none shadow-lg overflow-hidden">
              {/* Description */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Deskripsi Tour</h2>
                <p className="text-gray-600 leading-relaxed">{tour.description}</p>
              </div>

              {/* Highlights */}
              <div className="p-8 bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Highlight Tour</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tour.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Itinerary Lengkap</h2>
                <div className="space-y-6">
                  {tour.itinerary.map((day, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span className="text-emerald-600 font-bold">{day.day}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-2">Hari {day.day}: {day.title}</h3>
                        <ul className="space-y-1">
                          {day.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="text-gray-600 text-sm flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0 mt-2"></div>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Facilities */}
              <div className="p-8 bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Fasilitas Disediakan</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tour.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Include/Exclude */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                      Termasuk dalam Paket
                    </h3>
                    <div className="space-y-2">
                      {tour.included.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                      Tidak Termasuk
                    </h3>
                    <div className="space-y-2">
                      {tour.notIncluded.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-5 h-5 border-2 border-red-300 rounded-full flex-shrink-0 mt-0.5"></div>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="p-8 bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Persyaratan & Ketentuan</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Persyaratan Peserta</h3>
                    <div className="space-y-2">
                      {tour.requirements.map((req, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Kebijakan Pembatalan</h3>
                    <div className="space-y-2">
                      {tour.cancellationPolicy.map((policy, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Shield className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{policy}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Memulai Petualangan?</h2>
          <p className="text-xl mb-8 opacity-90">Jangan lewatkan kesempatan untuk menjelajahi {tour.title}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              onClick={handleBookNow} 
              className="w-full bg-white text-emerald-600 py-4 text-lg font-semibold hover:bg-gray-100"
            >
              Pesan Sekarang
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-white text-white py-4 text-lg font-semibold hover:bg-white hover:text-emerald-600"
            >
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TourDetail;
