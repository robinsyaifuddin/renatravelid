import React, { useState } from 'react';
import { Calendar, User, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
const HeroSection = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');
  const navigate = useNavigate();

  // Tour periods data yang sinkron dengan TourDetail
  const tourPeriods = {
    "Pulau Tidung Adventure": {
      months: ["Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November"],
      period: "Maret - November"
    },
    "Pulau Pramuka Eksplorasi": {
      months: ["April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober"],
      period: "April - Oktober"
    }
  };
  const handleCheckAvailability = () => {
    // Validate if selected dates match available tour periods
    if (checkIn && checkOut) {
      const startDate = new Date(checkIn);
      const endDate = new Date(checkOut);

      // Get month names
      const startMonth = startDate.toLocaleString('id-ID', {
        month: 'long'
      });
      const endMonth = endDate.toLocaleString('id-ID', {
        month: 'long'
      });
      console.log(`Searching tours for period: ${startMonth} - ${endMonth}`);

      // Find matching tours based on period
      const availableTours = Object.entries(tourPeriods).filter(([tourName, data]) => {
        return data.months.some(month => month === startMonth || month === endMonth);
      });
      console.log('Available tours:', availableTours);
    }

    // Create search parameters based on form data
    const searchParams = new URLSearchParams();
    if (checkIn) searchParams.append('checkIn', checkIn);
    if (checkOut) searchParams.append('checkOut', checkOut);
    if (guests) searchParams.append('guests', guests);

    // Navigate to tour page with search parameters
    navigate(`/tour?${searchParams.toString()}`);
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay and Shadow Effect */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat shadow-2xl md:shadow-[0_35px_80px_rgba(13,148,136,0.4)] shadow-[0_20px_50px_rgba(13,148,136,0.3)]" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`,
      filter: 'drop-shadow(0 25px 60px rgba(5,150,105,0.25)) drop-shadow(0 10px 30px rgba(13,148,136,0.35))'
    }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
        
        {/* Additional Shadow Layers for Enhanced Effect */}
        <div className="absolute inset-0 shadow-inner"></div>
        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 blur-xl opacity-60 md:opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white py-[10px]">
        {/* Main Heading */}
        <h1 className="md:text-7xl font-bold mb-6 leading-tight text-4xl drop-shadow-2xl">
          Jelajahi Tempat Impianmu
        </h1>
        
        <p className="md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto text-lg drop-shadow-lg">
          Temukan destinasi menakjubkan dan ciptakan kenangan tak terlupakan dengan pengalaman wisata terpilih kami
        </p>

        {/* Booking Form with Enhanced Shadow */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl shadow-emerald-500/20 max-w-6xl mx-auto border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* Check In */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block text-left date-label-mobile">
                Tanggal Masuk
              </label>
              <div className="relative">
                <Input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} className="pl-10 h-12 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 text-gray-900" placeholder="Pilih Tanggal" />
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Check Out */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block text-left date-label-mobile">
                Tanggal Keluar
              </label>
              <div className="relative">
                <Input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} className="pl-10 h-12 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 text-gray-900" placeholder="Pilih Tanggal" />
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Guests */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block text-left">
                Tamu
              </label>
              <div className="relative">
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="h-12 pl-10 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 text-gray-900">
                    <SelectValue placeholder="2 Orang Dewasa" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Orang Dewasa</SelectItem>
                    <SelectItem value="2">2 Orang Dewasa</SelectItem>
                    <SelectItem value="3">3 Orang Dewasa</SelectItem>
                    <SelectItem value="4">4 Orang Dewasa</SelectItem>
                    <SelectItem value="5">5+ Orang Dewasa</SelectItem>
                  </SelectContent>
                </Select>
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Search Button */}
            <div className="lg:col-span-1">
              <Button onClick={handleCheckAvailability} className="w-full h-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 flex items-center justify-center space-x-2">
                <Search className="w-5 h-5" />
                <span>CEK KETERSEDIAAN</span>
              </Button>
            </div>
          </div>

          {/* Tour Periods Info */}
          
        </div>

        {/* Scroll Indicator with Enhanced Shadow */}
        <div className="mt-16 animate-bounce drop-shadow-lg">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center shadow-lg shadow-emerald-500/20">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;