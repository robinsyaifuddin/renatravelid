import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TourImageGallery from '@/components/TourImageGallery';
import { Star, MapPin, Calendar, Users, CheckCircle, Phone, MessageCircle, ArrowLeft, Clock, Shield, Award, AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { tourData } from '@/data/tourData';
import { getDestinationImages } from '@/utils/imageUtils';

const TourDetail = () => {
  const { id: tourId } = useParams();
  const navigate = useNavigate();

  // Get tour data from centralized source
  const tour = tourData[tourId as keyof typeof tourData];

  // If tour not found, redirect to tour list
  if (!tour) {
    navigate('/tour');
    return null;
  }

  // Get next recommended tour
  const getNextRecommendedTour = () => {
    const tourKeys = Object.keys(tourData);
    const currentIndex = tourKeys.indexOf(tourId as string);
    const nextIndex = currentIndex === tourKeys.length - 1 ? 0 : currentIndex + 1;
    const nextTourId = tourKeys[nextIndex];
    return {
      id: nextTourId,
      ...tourData[nextTourId as keyof typeof tourData]
    };
  };

  const nextTour = getNextRecommendedTour();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  // Get tour images - use specific destination images or fallback to category placeholders
  const tourImages = getDestinationImages(tourId as string);

  const generateDepartureDates = () => {
    const dates = ["JULI: 5, 12, 19, 26", "AGUSTUS: 2, 9, 16, 23, 30", "SEP: 6, 13, 20, 27"];
    if (tour.category === "Pantai") {
      return ["JULI: 5-6, 12-13, 19-20, 26-27", "AGUSTUS: 2-3, 9-10, 16-17, 23-24, 30-31", "SEP: 6-7, 13-14, 20-21, 27-28"];
    }
    if (tour.duration === "3D 2N") {
      return ["JULI: 4-6, 11-13, 18-20, 25-27", "AGUSTUS: 1-3, 8-10, 15-17, 22-24, 29-31", "SEP: 5-7, 12-14, 19-21, 26-28"];
    }
    return dates;
  };

  const getAvailableDates = () => {
    const availableDates: Date[] = [];
    const currentYear = new Date().getFullYear();
    const departureDates = generateDepartureDates();
    departureDates.forEach(dateRange => {
      const [monthPart, datesPart] = dateRange.split(': ');
      const monthName = monthPart.trim();
      const dates = datesPart.split(', ');

      const monthMap: { [key: string]: number; } = {
        'JANUARI': 0, 'FEBRUARI': 1, 'MARET': 2, 'APRIL': 3, 'MEI': 4, 'JUNI': 5,
        'JULI': 6, 'AGUSTUS': 7, 'SEP': 8, 'SEPTEMBER': 8, 'OKT': 9, 'OKTOBER': 9,
        'NOV': 10, 'NOVEMBER': 10, 'DES': 11, 'DESEMBER': 11
      };
      const monthNumber = monthMap[monthName];
      if (monthNumber !== undefined) {
        dates.forEach(dateStr => {
          const cleanDate = dateStr.trim();
          if (cleanDate.includes('-')) {
            const [startDay, endDay] = cleanDate.split('-').map(d => parseInt(d.trim()));
            if (!isNaN(startDay) && !isNaN(endDay)) {
              for (let day = startDay; day <= endDay; day++) {
                availableDates.push(new Date(currentYear, monthNumber, day));
              }
            }
          } else {
            const day = parseInt(cleanDate);
            if (!isNaN(day)) {
              availableDates.push(new Date(currentYear, monthNumber, day));
            }
          }
        });
      }
    });
    return availableDates;
  };

  const isDateAvailable = (date: Date) => {
    const availableDates = getAvailableDates();
    return availableDates.some(availableDate => 
      availableDate.getDate() === date.getDate() && 
      availableDate.getMonth() === date.getMonth() && 
      availableDate.getFullYear() === date.getFullYear()
    );
  };

  const getAvailablePeriod = () => {
    if (tour.category === "Pantai") return "Juli - Desember";
    if (tour.category === "Pegunungan") return "Juli - September";
    if (tour.category === "Budaya") return "Juni - Agustus";
    return "Juli - September";
  };

  const getAvailableMonths = () => {
    if (tour.category === "Pantai") return ["Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    if (tour.category === "Pegunungan") return ["Juli", "Agustus", "September"];
    if (tour.category === "Budaya") return ["Juni", "Juli", "Agustus"];
    return ["Juli", "Agustus", "September"];
  };

  const handleBookNow = () => {
    navigate(`/booking/${tourId}`);
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
            <div>
              <TourImageGallery images={tourImages} title={tour.title} />
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
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm font-medium ml-1">5.0</span>
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
                <div className="text-center">
                  <span className="text-3xl font-bold text-emerald-600">{tour.price}</span>
                  <span className="text-gray-600 ml-2">per orang</span>
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

      
      {/* Tour Period & Calendar Section */}
      <section className="py-12 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Informasi Tour & Jadwal</h2>
              <p className="text-lg text-gray-600">Periode ketersediaan dan informasi penting untuk trip ini</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6">
                  <div className="flex items-center space-x-3 text-white">
                    <Calendar className="w-8 h-8" />
                    <div>
                      <h3 className="text-xl font-bold">Periode Tour</h3>
                      <p className="text-emerald-100">Waktu tersedia</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600 mb-2">{getAvailablePeriod()}</div>
                    <p className="text-gray-600 mb-4">Tour tersedia pada bulan-bulan ini</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {getAvailableMonths().slice(0, 4).map(month => (
                        <span key={month} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                          {month}
                        </span>
                      ))}
                      {getAvailableMonths().length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                          +{getAvailableMonths().length - 4} lainnya
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-6">
                  <div className="flex items-center space-x-3 text-white">
                    <Users className="w-8 h-8" />
                    <div>
                      <h3 className="text-xl font-bold">Ukuran Grup</h3>
                      <p className="text-blue-100">Jumlah peserta</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{tour.groupSize}</div>
                    <p className="text-gray-600 mb-4">Jumlah minimal peserta</p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-sm text-green-700">
                        <CheckCircle className="w-4 h-4 inline mr-1" />
                        Grup terorganisir untuk pengalaman optimal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6">
                <div className="flex items-center space-x-3 text-white">
                  <Calendar className="w-8 h-8" />
                  <div>
                    <h3 className="text-2xl font-bold">Kalender Tour</h3>
                    <p className="text-emerald-100">Pilih tanggal keberangkatan yang sesuai</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Pilih Tanggal Tour</h4>
                    <Popover open={showCalendar} onOpenChange={setShowCalendar}>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal h-14 text-lg border-2 border-emerald-200 hover:border-emerald-300">
                          <Calendar className="mr-3 h-5 w-5 text-emerald-500" />
                          {selectedDate ? format(selectedDate, "dd MMMM yyyy", { locale: id }) : "Pilih tanggal tour"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent 
                          mode="single" 
                          selected={selectedDate} 
                          onSelect={setSelectedDate} 
                          disabled={date => date < new Date() || !isDateAvailable(date)} 
                          initialFocus 
                          className="pointer-events-auto" 
                        />
                        <div className="p-4 border-t bg-gray-50">
                          <p className="text-sm text-gray-600 mb-2">
                            <Calendar className="w-4 h-4 inline mr-1" />
                            Tour tersedia: <span className="font-medium text-emerald-600">{getAvailablePeriod()}</span>
                          </p>
                          <p className="text-xs text-gray-500">
                            Hanya tanggal yang tersedia dalam jadwal keberangkatan yang dapat dipilih
                          </p>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Tanggal Keberangkatan</h4>
                    <div className="space-y-2">
                      {generateDepartureDates().map((dateRange, index) => (
                        <div key={index} className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                          <p className="text-sm text-emerald-700 font-medium">{dateRange}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={handleBookNow} className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 text-lg font-semibold hover:from-emerald-700 hover:to-teal-700">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Pesan Tour Ini
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto border-emerald-200 text-emerald-600 px-8 py-3 text-lg font-semibold hover:bg-emerald-50">
                      <Phone className="w-5 h-5 mr-2" />
                      Tanya Ketersediaan
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Deskripsi Tour</h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{tour.description}</p>
              </div>

              <div className="p-4 md:p-8 bg-gray-50">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Highlight Tour</h2>
                <div className="grid grid-cols-1 gap-3 md:gap-4">
                  {tour.highlights?.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm md:text-base leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Itinerary Lengkap</h2>
                <div className="space-y-4 md:space-y-6">
                  {tour.itinerary?.map((day, index) => (
                    <div key={index} className="flex space-x-3 md:space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span className="text-emerald-600 font-bold text-sm md:text-base">{day.day}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Hari {day.day}: {day.title}</h3>
                        <ul className="space-y-1 md:space-y-2">
                          {day.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="text-gray-600 text-xs md:text-sm flex items-start space-x-2">
                              <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-emerald-500 rounded-full flex-shrink-0 mt-1.5 md:mt-2"></div>
                              <span className="leading-relaxed">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 md:p-8 bg-gray-50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-4">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 flex items-center">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 mr-2" />
                      Termasuk dalam Paket
                    </h3>
                    <div className="space-y-2 md:space-y-3">
                      {tour.included?.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-xs md:text-sm leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 flex items-center">
                      <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-red-500 mr-2" />
                      Tidak Termasuk
                    </h3>
                    <div className="space-y-2 md:space-y-3">
                      {tour.notIncluded?.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-red-300 rounded-full flex-shrink-0 mt-0.5"></div>
                          <span className="text-gray-700 text-xs md:text-sm leading-relaxed">{item}</span>
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

      {/* Recommended Next Destination */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Destinasi Selanjutnya yang Direkomendasikan
              </h2>
              <p className="text-gray-600">Lanjutkan petualangan Anda dengan destinasi menarik lainnya</p>
            </div>
            
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-square overflow-hidden">
                  <img src={nextTour.image} alt={nextTour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                        {nextTour.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-gray-600 mb-4">
                        <MapPin className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm">{nextTour.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {nextTour.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm text-gray-600">{nextTour.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm text-gray-600">{nextTour.groupSize}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-sm font-medium ml-1">5.0</span>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-emerald-600">{nextTour.price}</span>
                        <div className="text-xs text-gray-500">per orang</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Link to={`/tour/${nextTour.id}`}>
                      <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 group-hover:shadow-lg transition-all duration-300">
                        Lihat Detail Tour
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TourDetail;
