
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, MapPin, Calendar, Users, CheckCircle, Phone, MessageCircle, ArrowLeft, Clock, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TourDetail = () => {
  const { id } = useParams();

  // Mock data - dalam implementasi nyata, ini akan diambil dari API berdasarkan ID
  const tour = {
    id: 1,
    title: "Eksplorasi Raja Ampat",
    location: "Papua Barat, Indonesia",
    duration: "5 Hari 4 Malam",
    groupSize: "8-12 orang",
    rating: 4.9,
    reviews: 127,
    price: "Rp 8.500.000",
    originalPrice: "Rp 10.000.000",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    description: "Raja Ampat, yang berarti 'Empat Raja', adalah destinasi diving dan snorkeling terbaik di dunia. Terletak di ujung barat laut Papua, kawasan ini menawarkan keanekaragaman hayati laut yang luar biasa dengan lebih dari 1.500 spesies ikan dan 75% dari seluruh spesies karang yang dikenal di dunia.",
    highlights: [
      "Diving di 4 spot terbaik Raja Ampat",
      "Snorkeling di laguna tersembunyi",
      "Trekking ke Piaynemo (Wayag Kecil)",
      "Sunset di Arborek Island",
      "Interaksi dengan manta ray",
      "Fotografi underwater professional"
    ],
    facilities: [
      "Akomodasi resort bintang 4",
      "Boat charter private",
      "Peralatan diving lengkap",
      "Guide profesional bersertifikat",
      "Makan 3x sehari",
      "Dokumentasi foto & video",
      "Asuransi perjalanan",
      "Transfer airport"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Check-in",
        activities: ["Penjemputan di bandara", "Check-in resort", "Briefing program", "Welcome dinner"]
      },
      {
        day: 2,
        title: "Diving Cape Kri & Sawandarek",
        activities: ["Diving spot Cape Kri", "Lunch di boat", "Diving Sawandarek", "Snorkeling sore hari"]
      },
      {
        day: 3,
        title: "Piaynemo & Arborek",
        activities: ["Trekking Piaynemo", "Snorkeling laguna", "Kunjungan Arborek Village", "Sunset photography"]
      },
      {
        day: 4,
        title: "Manta Point",
        activities: ["Diving Manta Point", "Swimming with manta", "Relaxing di pantai", "BBQ dinner"]
      },
      {
        day: 5,
        title: "Departure",
        activities: ["Check-out resort", "Last minute shopping", "Transfer ke bandara"]
      }
    ],
    included: [
      "Tiket pesawat Jakarta - Sorong PP",
      "Akomodasi 4 malam di resort",
      "Semua makan sesuai program",
      "Boat charter selama program",
      "Peralatan diving & snorkeling",
      "Guide profesional",
      "Dokumentasi foto",
      "Asuransi perjalanan"
    ],
    notIncluded: [
      "Pengeluaran pribadi",
      "Tips guide & crew",
      "Laundry",
      "Minuman beralkohol",
      "Aktivitas tambahan di luar program"
    ]
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
                <img 
                  src={tour.images[0]} 
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {tour.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${tour.title} ${index + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
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

              <div className="border-t border-b border-gray-200 py-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl font-bold text-emerald-600">{tour.price}</span>
                      {tour.originalPrice && (
                        <span className="text-xl text-gray-500 line-through">{tour.originalPrice}</span>
                      )}
                    </div>
                    <span className="text-gray-600">per orang</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-600 font-medium">Hemat Rp 1.500.000</div>
                    <div className="text-xs text-gray-500">Promo terbatas!</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 text-lg font-semibold hover:from-orange-600 hover:to-orange-700">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Pesan Sekarang
                </Button>
                <Button variant="outline" className="w-full border-emerald-200 text-emerald-600 py-4 text-lg font-semibold hover:bg-emerald-50">
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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
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
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Itinerary</h2>
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
                            <li key={actIndex} className="text-gray-600 text-sm flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></div>
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
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Fasilitas</h2>
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
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Termasuk dalam Paket</h3>
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
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Tidak Termasuk</h3>
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
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Memulai Petualangan?</h2>
          <p className="text-xl mb-8 opacity-90">Jangan lewatkan kesempatan untuk menjelajahi keindahan Raja Ampat</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
              Pesan Sekarang
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold">
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
