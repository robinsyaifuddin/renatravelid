
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, MapPin, Calendar, Users, CheckCircle, Phone, MessageCircle, ArrowLeft, Clock, Shield, Award, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import Autoplay from "embla-carousel-autoplay";

const TourDetail = () => {
  const { id: tourId } = useParams();
  const navigate = useNavigate();

  // Updated tour data based on provided information
  const tours = {
    "1": {
      id: 1,
      title: "TWA Papandayan",
      location: "Garut, Jawa Barat",
      duration: "ONE DAY TRIP",
      groupSize: "Minimal 5 orang",
      rating: 4.8,
      reviews: 142,
      price: "Rp 425.000",
      originalPrice: "Rp 525.000",
      availablePeriod: "Juli - September",
      availableMonths: ["Juli", "Agustus", "September"],
      minAge: "12 tahun",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop&auto=format"
      ],
      description: "Gunung Papandayan adalah destinasi pendakian ramah pemula yang berlokasi di Garut, Jawa Barat, dengan ketinggian sekitar 2.665 mdpl. Gunung ini dikenal karena jalurnya yang relatif mudah, pemandangan alam yang spektakuler, serta fasilitas yang cocok untuk camping santai, healing trip, maupun edukasi alam.",
      highlights: ["Kawah Putih yang menakjubkan", "Hutan Mati dengan pemandangan unik", "Pondok Saladah untuk istirahat", "Danau Biru yang memukau", "Jalur pendakian ramah pemula", "Pemandangan alam spektakuler"],
      facilities: ["Transportasi AC PP", "BBM, TOL dan Parkir", "Souvenir", "Makan 1x", "Air mineral", "Snack", "Simaksi", "Dokumentasi", "Tour leader", "Asuransi", "P3K Standart"],
      itinerary: [
        {
          day: 1,
          title: "Hari Pertama - Keberangkatan",
          activities: [
            "21.00 - Meeting Point di Plaza Semanggi",
            "22.00 - Keberangkatan dari Plaza Semanggi",
            "22.30 - Keberangkatan dari RS UKU Cawang",
            "23.00 - Keberangkatan dari Hotel Ammarossa Bekasi",
            "23.30 - Keberangkatan dari Pollux Mall Cikarang",
            "23.50 - Keberangkatan dari Indomaret Exit Tol Karawang Barat"
          ]
        },
        {
          day: 2,
          title: "Hari Kedua - Eksplorasi Papandayan",
          activities: [
            "02.00 - Keberangkatan dari Exit tol Cileunyi",
            "04.30 - Tiba di camp Papandayan, sarapan dan persiapan",
            "06.00 - Mulai explore Gunung Papandayan (Kawah, Danau Biru, Hutan Mati, Pondok Saladah)",
            "13.30 - Tiba kembali di Camp Papandayan, bersih-bersih",
            "15.00 - Perjalanan pulang menuju meeting point awal"
          ]
        }
      ],
      included: ["Transportasi AC PP", "BBM, TOL dan Parkir", "Souvenir", "Makan 1x", "Air mineral", "Snack", "Simaksi", "Dokumentasi", "Tour leader", "Asuransi", "P3K Standart"],
      notIncluded: ["Makan di luar program", "Perbekalan (cemilan/minum) selama trekking", "Tipping guide"],
      requirements: ["Minimal 5 orang peserta", "Kondisi fisik sehat", "Membawa pakaian hangat", "Sepatu trekking", "Obat-obatan pribadi"],
      cancellationPolicy: ["DP minimal 50% dan pelunasan H-3 sebelum keberangkatan", "DP tidak dapat dikembalikan jika pembatalan dari peserta", "Trip dapat batal jika cuaca buruk", "Peserta wajib mematuhi aturan destinasi"],
      availableDates: [
        "Juli: 5, 12, 19, 26",
        "Agustus: 2, 9, 16, 23, 30", 
        "September: 6, 13, 20, 27"
      ]
    },
    "2": {
      id: 2,
      title: "Wisuba Baduy",
      location: "Kabupaten Lebak, Banten",
      duration: "2D 1N",
      groupSize: "Minimal 7 orang",
      rating: 4.7,
      reviews: 98,
      price: "Rp 250.000",
      originalPrice: "Rp 350.000",
      availablePeriod: "Juni - Agustus",
      availableMonths: ["Juni", "Juli", "Agustus"],
      minAge: "10 tahun",
      images: [
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop&auto=format"
      ],
      description: "Wisuba Baduy merupakan destinasi wisata budaya yang berlokasi di wilayah Baduy, Kabupaten Lebak, Banten. Tempat ini mengusung konsep wisata edukatif berbasis budaya lokal yang mengangkat kehidupan masyarakat Suku Baduy sebagai inti daya tariknya.",
      highlights: ["Jelajah kampung adat Baduy Luar dan Dalam", "Upacara budaya simbolik", "Workshop kerajinan tradisional", "Interaksi langsung dengan warga lokal", "Jembatan akar yang unik", "Pengalaman menginap di homestay lokal"],
      facilities: ["Transportasi Lokal PP", "Souvenir", "Makan 2x", "Homestay Lokal", "Snack", "Simaksi", "Dokumentasi", "Tour leader", "Guide Lokal", "Asuransi"],
      itinerary: [
        {
          day: 1,
          title: "Hari Pertama - Perjalanan ke Baduy",
          activities: [
            "07.00 - Meeting Point di ST. Rangkasbitung",
            "08.00 - Keberangkatan menuju Terminal Ciboleger",
            "09.15 - Sampai di Terminal Ciboleger & persiapan trekking",
            "09.30 - Trekking menuju Baduy Luar & Jembatan Akar",
            "11.30 - Sampai di Jembatan Akar & ishoma",
            "12.30 - Trekking menuju Baduy Dalam",
            "15.00 - Sampai di Homestay Lokal & istirahat",
            "19.00 - Makan malam, makrab dan diskusi kehidupan Baduy"
          ]
        },
        {
          day: 2,
          title: "Hari Kedua - Eksplorasi dan Kembali",
          activities: [
            "05.00 - Bangun, menikmati hawa pagi Baduy Dalam",
            "07.00 - Sarapan dan dipandu melihat perkampungan",
            "10.00 - Trekking dari Baduy Dalam menuju Terminal Ciboleger",
            "14.00 - Tiba di Terminal Ciboleger, istirahat",
            "15.00 - Perjalanan menuju ST. Rangkasbitung"
          ]
        }
      ],
      included: ["Transportasi Lokal PP", "Souvenir", "Makan 2x", "Homestay Lokal", "Snack", "Simaksi", "Dokumentasi", "Tour leader", "Guide Lokal", "Asuransi"],
      notIncluded: ["Makan di luar program", "Perbekalan selama trekking", "Tipping guide"],
      requirements: ["Minimal 7 orang peserta", "Kondisi fisik baik untuk trekking", "Pakaian sopan sesuai adat", "Sepatu trekking", "Respect terhadap budaya lokal"],
      cancellationPolicy: ["DP minimal 50% dan pelunasan H-3 sebelum keberangkatan", "DP tidak dapat dikembalikan jika pembatalan dari peserta", "Trip dapat batal jika cuaca buruk", "Peserta wajib mematuhi aturan adat"],
      availableDates: [
        "Juni: 21, 28",
        "Juli: 5, 12, 19, 26",
        "Agustus: 2, 9, 16, 23, 30"
      ]
    },
    "3": {
      id: 3,
      title: "Pulau Harapan",
      location: "Kepulauan Seribu, Jakarta",
      duration: "2D 1N",
      groupSize: "Minimal 7 orang",
      rating: 4.9,
      reviews: 203,
      price: "Rp 430.000",
      originalPrice: "Rp 530.000",
      availablePeriod: "Juli - Desember",
      availableMonths: ["Juli", "Agustus", "September", "Oktober", "November", "Desember"],
      minAge: "8 tahun",
      images: [
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop&auto=format"
      ],
      description: "Pulau Harapan adalah kombinasi unik antara destinasi wisata bahari, pusat konservasi lingkungan, dan komunitas lokal yang ramah. Menawarkan kemudahan akses dari Jakarta, suasana alam yang tenang, serta aktivitas edukatif.",
      highlights: ["Snorkeling di Pulau Macan", "Wisata ke Pulau Dolphin", "Sunset di Pulau Bulat", "Taman Mangrove", "Penangkaran Penyu", "BBQ di tepi pantai"],
      facilities: ["Kapal Feri PP", "Asuransi penyebrangan", "Homestay AC", "Makan 3x", "Barbeque", "Air mineral", "Kapal penjelajah pulau", "Alat snorkeling", "Pelampung", "Asuransi", "Dokumentasi", "Tour Guide", "Tiket penangkaran penyu"],
      itinerary: [
        {
          day: 1,
          title: "Hari Pertama - Perjalanan dan Eksplorasi",
          activities: [
            "06.00 - Berkumpul di Pelabuhan Kali Adem, Muara Angke",
            "07.00 - Perjalanan ke Pulau Harapan",
            "11.00 - Tiba di Pulau Harapan, check-in homestay",
            "13.00 - Snorkeling di Pulau Macan/Putri/Bira, wisata Pulau Dolphin",
            "17.00 - Kembali ke Pulau Harapan untuk mandi",
            "19.00 - Makan malam dan bakar ikan"
          ]
        },
        {
          day: 2,
          title: "Hari Kedua - Sunrise dan Kembali",
          activities: [
            "05.30 - Menikmati Sunrise di Pulau Harapan",
            "07.00 - Mandi, coffee break, packing",
            "08.00 - Check out homestay",
            "09.00 - Explore Taman Mangrove & Penangkaran Penyu",
            "10.30 - Tiba di dermaga Pulau Harapan",
            "11.00 - Perjalanan menuju Pelabuhan Kaliadem"
          ]
        }
      ],
      included: ["Kapal Feri PP", "Asuransi penyebrangan", "Homestay AC", "Makan 3x", "Barbeque", "Air mineral", "Kapal penjelajah pulau", "Alat snorkeling", "Pelampung", "Asuransi", "Dokumentasi", "Tour Guide", "Tiket penangkaran penyu"],
      notIncluded: ["Kebutuhan dan obat-obatan pribadi", "Tip guide & crew"],
      requirements: ["Minimal 7 orang peserta", "Bisa berenang", "Pakaian renang", "Sunblock", "Obat pribadi"],
      cancellationPolicy: ["DP minimal 50% dan pelunasan H-3 sebelum keberangkatan", "DP tidak dapat dikembalikan jika pembatalan dari peserta", "Trip dapat batal jika cuaca buruk"],
      availableDates: [
        "Juli: 5-6, 12-13, 19-20, 26-27",
        "Agustus: 2-3, 9-10, 16-17, 23-24, 30-31",
        "September: 6-7, 13-14, 20-21, 27-28",
        "Oktober: 4-5, 11-12, 18-19, 25-26",
        "November: 1-2, 8-9, 15-16, 22-23, 29-30",
        "Desember: 3-4, 10-11, 17-18, 24-25, 31-1"
      ]
    }
  };

  const tour = tours[tourId as keyof typeof tours] || tours["1"];
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }
    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    onSelect();
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleThumbnailClick = (index: number) => {
    if (!api) return;
    api.scrollTo(index);
  };

  const handleBookNow = () => {
    navigate(`/booking/${tourId}`);
  };

  // Function to check if date is available for this tour
  const isDateAvailable = (date: Date) => {
    const month = format(date, "MMMM", { locale: id });
    const monthName = month.charAt(0).toUpperCase() + month.slice(1);
    return tour.availableMonths.includes(monthName);
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
              <Carousel setApi={setApi} plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]} className="w-full relative">
                <CarouselContent>
                  {tour.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video rounded-xl overflow-hidden">
                        <img src={image} alt={`${tour.title} ${index + 1}`} className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 bg-white/50 hover:bg-white/80 text-gray-800 border-none" />
                <CarouselNext className="absolute right-4 bg-white/50 hover:bg-white/80 text-gray-800 border-none" />
              </Carousel>

              <div className="grid grid-cols-4 gap-4">
                {tour.images.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`aspect-video rounded-lg overflow-hidden ring-2 transition 
                      ${selectedIndex === index ? 'ring-emerald-500' : 'ring-transparent hover:ring-emerald-200'}
                    `}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${tour.title} ${index + 1}`} 
                      className={`w-full h-full object-cover transition-transform duration-300 
                        ${selectedIndex === index ? 'scale-105' : 'hover:scale-105'}`} 
                    />
                  </button>
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
                        className={`w-4 h-4 ${i < Math.floor(tour.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
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

              <div className="space-y-3">
                <Button onClick={handleBookNow} className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-4 text-lg font-semibold hover:from-teal-600 hover:to-emerald-700">
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

      {/* Tour Details Below Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Period & Age Info */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-100">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-6 h-6 text-emerald-600" />
                <h3 className="text-lg font-semibold text-gray-800">Periode Tour</h3>
              </div>
              <div className="text-emerald-700 font-medium text-lg mb-2">{tour.availablePeriod}</div>
              <div className="text-sm text-gray-600">
                <div className="font-medium mb-2">Tanggal Tersedia:</div>
                {tour.availableDates?.map((date, index) => (
                  <div key={index} className="text-emerald-600 font-medium">{date}</div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800">Usia Minimal</h3>
              </div>
              <div className="text-blue-700 font-medium text-2xl">{tour.minAge}</div>
              <div className="text-sm text-gray-600 mt-2">
                Sesuai untuk keluarga dan pemula
              </div>
            </div>

            {/* Tour Calendar */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-emerald-500" />
                Kalender Tour
              </h3>
              <Popover open={showCalendar} onOpenChange={setShowCalendar}>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal border-emerald-200 hover:bg-emerald-50">
                    <Calendar className="mr-2 h-4 w-4 text-emerald-500" />
                    {selectedDate ? format(selectedDate, "dd MMMM yyyy", { locale: id }) : "Pilih tanggal tour"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent 
                    mode="single" 
                    selected={selectedDate} 
                    onSelect={setSelectedDate}
                    disabled={(date) => {
                      return date < new Date() || !isDateAvailable(date);
                    }}
                    initialFocus 
                    className="pointer-events-auto" 
                  />
                  <div className="p-3 border-t bg-emerald-50">
                    <p className="text-xs text-emerald-700 font-medium">
                      Tour tersedia: {tour.availablePeriod}
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
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
            <Button onClick={handleBookNow} className="w-full bg-white text-emerald-600 py-4 text-lg font-semibold hover:bg-gray-100">
              Pesan Sekarang
            </Button>
            <Button variant="outline" className="w-full border-white text-white py-4 text-lg font-semibold hover:bg-white hover:text-emerald-600">
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
