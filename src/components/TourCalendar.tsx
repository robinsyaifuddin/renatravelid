
import React, { useState } from 'react';
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addMonths, subMonths } from "date-fns";
import { id } from "date-fns/locale";

const TourCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Sample tour data with availability
  const tourSchedule = [
    {
      id: 1,
      title: "Pulau Tidung Adventure",
      dates: ["2024-03-15", "2024-03-22", "2024-04-05", "2024-04-19", "2024-05-03"],
      duration: "2D1N",
      price: "Rp 450.000",
      availableSlots: 8,
      color: "bg-emerald-500"
    },
    {
      id: 2, 
      title: "Pulau Pramuka Eksplorasi",
      dates: ["2024-04-12", "2024-04-26", "2024-05-10", "2024-05-24"],
      duration: "2D1N", 
      price: "Rp 385.000",
      availableSlots: 5,
      color: "bg-blue-500"
    }
  ];

  // Get tours for selected date
  const getToursForDate = (date: Date) => {
    const dateStr = format(date, "yyyy-MM-dd");
    return tourSchedule.filter(tour => 
      tour.dates.includes(dateStr)
    );
  };

  // Check if date has tours
  const hasToursOnDate = (date: Date) => {
    const dateStr = format(date, "yyyy-MM-dd");
    return tourSchedule.some(tour => tour.dates.includes(dateStr));
  };

  const selectedDateTours = selectedDate ? getToursForDate(selectedDate) : [];

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Kalender Tour & Trip
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan jadwal keberangkatan tour terbaru dan pilih tanggal yang sesuai dengan rencana liburan Anda
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calendar Section */}
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                <CardTitle className="flex items-center text-xl">
                  <Calendar className="w-6 h-6 mr-3" />
                  Kalender Keberangkatan
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Month Navigation */}
                  <div className="flex items-center justify-between mb-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                      className="flex items-center space-x-2"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Sebelumnya</span>
                    </Button>
                    <h3 className="font-semibold text-lg">
                      {format(currentMonth, "MMMM yyyy", { locale: id })}
                    </h3>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                      className="flex items-center space-x-2"
                    >
                      <span>Selanjutnya</span>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>

                  <CalendarComponent
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    month={currentMonth}
                    onMonthChange={setCurrentMonth}
                    disabled={(date) => date < new Date()}
                    modifiers={{
                      hasTours: (date) => hasToursOnDate(date)
                    }}
                    modifiersStyles={{
                      hasTours: { 
                        backgroundColor: '#10b981', 
                        color: 'white',
                        fontWeight: 'bold'
                      }
                    }}
                    className="w-full pointer-events-auto"
                  />

                  {/* Legend */}
                  <div className="flex items-center justify-center space-x-6 pt-4 border-t">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-emerald-500 rounded"></div>
                      <span className="text-sm text-gray-600">Ada Tour</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-gray-200 rounded"></div>
                      <span className="text-sm text-gray-600">Tidak Ada Tour</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tour Details Section */}
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
                <CardTitle className="flex items-center text-xl">
                  <MapPin className="w-6 h-6 mr-3" />
                  Tour Tersedia
                </CardTitle>
                {selectedDate && (
                  <p className="text-emerald-100 mt-2">
                    {format(selectedDate, "dd MMMM yyyy", { locale: id })}
                  </p>
                )}
              </CardHeader>
              <CardContent className="p-6">
                {selectedDate ? (
                  selectedDateTours.length > 0 ? (
                    <div className="space-y-4">
                      {selectedDateTours.map((tour) => (
                        <div key={tour.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="font-semibold text-gray-800 flex-1">{tour.title}</h4>
                            <Badge variant="secondary" className="ml-2">{tour.duration}</Badge>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span>{tour.duration}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="w-4 h-4" />
                              <span>{tour.availableSlots} slot tersisa</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-2xl font-bold text-emerald-600">{tour.price}</span>
                              <span className="text-gray-500 text-sm ml-2">per orang</span>
                            </div>
                            <Button 
                              size="sm"
                              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                            >
                              Pesan Sekarang
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500 mb-2">Tidak ada tour pada tanggal ini</p>
                      <p className="text-sm text-gray-400">Pilih tanggal lain atau hubungi kami untuk request khusus</p>
                    </div>
                  )
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 mb-2">Pilih tanggal untuk melihat tour</p>
                    <p className="text-sm text-gray-400">Klik pada kalender untuk memilih tanggal keberangkatan</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Quick Tour Overview */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Tour Populer Bulan Ini
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tourSchedule.map((tour) => (
                <Card key={tour.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-semibold text-gray-800 flex-1">{tour.title}</h4>
                      <Badge className={`${tour.color} text-white`}>{tour.duration}</Badge>
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-4">
                      <p>Keberangkatan berikutnya:</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {tour.dates.slice(0, 3).map((date) => (
                          <Badge key={date} variant="outline" className="text-xs">
                            {format(new Date(date), "dd MMM", { locale: id })}
                          </Badge>
                        ))}
                        {tour.dates.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{tour.dates.length - 3} lainnya
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-emerald-600">{tour.price}</span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                      >
                        Lihat Detail
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourCalendar;
