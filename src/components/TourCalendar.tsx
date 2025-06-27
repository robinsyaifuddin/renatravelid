
import React, { useState } from 'react';
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addMonths, subMonths } from "date-fns";
import { id } from "date-fns/locale";
import { tourData } from '@/data/tourData';

const TourCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Generate tour schedule from tourData with synchronized departure dates
  const generateTourSchedule = () => {
    const tours = Object.entries(tourData);
    const schedule = [];

    tours.forEach(([id, tour], index) => {
      // Generate departure dates based on tour category and data
      let departureDates = [];
      const currentYear = new Date().getFullYear();
      
      if (tour.category === "Pantai") {
        departureDates = [
          `${currentYear}-07-05`, `${currentYear}-07-12`, `${currentYear}-07-19`, `${currentYear}-07-26`,
          `${currentYear}-08-02`, `${currentYear}-08-09`, `${currentYear}-08-16`, `${currentYear}-08-23`, `${currentYear}-08-30`,
          `${currentYear}-09-06`, `${currentYear}-09-13`, `${currentYear}-09-20`, `${currentYear}-09-27`
        ];
      } else if (tour.category === "Pegunungan") {
        departureDates = [
          `${currentYear}-07-07`, `${currentYear}-07-14`, `${currentYear}-07-21`, `${currentYear}-07-28`,
          `${currentYear}-08-04`, `${currentYear}-08-11`, `${currentYear}-08-18`, `${currentYear}-08-25`,
          `${currentYear}-09-01`, `${currentYear}-09-08`, `${currentYear}-09-15`, `${currentYear}-09-22`, `${currentYear}-09-29`
        ];
      } else if (tour.category === "Budaya") {
        departureDates = [
          `${currentYear}-06-08`, `${currentYear}-06-15`, `${currentYear}-06-22`, `${currentYear}-06-29`,
          `${currentYear}-07-06`, `${currentYear}-07-13`, `${currentYear}-07-20`, `${currentYear}-07-27`,
          `${currentYear}-08-03`, `${currentYear}-08-10`, `${currentYear}-08-17`, `${currentYear}-08-24`, `${currentYear}-08-31`
        ];
      } else {
        // Default dates for other categories
        departureDates = [
          `${currentYear}-07-05`, `${currentYear}-07-12`, `${currentYear}-07-19`, `${currentYear}-07-26`,
          `${currentYear}-08-02`, `${currentYear}-08-09`, `${currentYear}-08-16`, `${currentYear}-08-23`,
          `${currentYear}-09-06`, `${currentYear}-09-13`, `${currentYear}-09-20`, `${currentYear}-09-27`
        ];
      }

      // Calculate available slots based on group size
      const maxGroupSize = parseInt(tour.groupSize.split('-')[1] || tour.groupSize.split(' ')[0]) || 20;
      const availableSlots = Math.floor(Math.random() * maxGroupSize) + 2;

      schedule.push({
        id: id,
        title: tour.title,
        dates: departureDates,
        duration: tour.duration,
        price: tour.price,
        availableSlots: availableSlots,
        color: index % 3 === 0 ? "bg-emerald-500" : index % 3 === 1 ? "bg-blue-500" : "bg-teal-500"
      });
    });

    return schedule;
  };

  const tourSchedule = generateTourSchedule();

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
        </div>
      </div>
    </section>
  );
};

export default TourCalendar;
