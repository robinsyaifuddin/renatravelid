import React, { useState } from 'react';
import { Calendar, MapPin, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
const HeroSection = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');
  const [accommodation, setAccommodation] = useState('');
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
    }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Breadcrumb */}
        

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Jelajahi Tempat Impianmu
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
          Temukan destinasi menakjubkan dan ciptakan kenangan tak terlupakan dengan pengalaman wisata terpilih kami
        </p>

        {/* Booking Form */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            {/* Check In */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block text-left">
                Tanggal Masuk
              </label>
              <div className="relative">
                <Input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} className="pl-10 h-12 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 text-gray-900" placeholder="Pilih Tanggal" />
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Check Out */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block text-left">
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

            {/* Accommodations */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block text-left">
                Akomodasi
              </label>
              <div className="relative">
                <Select value={accommodation} onValueChange={setAccommodation}>
                  <SelectTrigger className="h-12 pl-10 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 text-gray-900">
                    <SelectValue placeholder="Paket Wisata" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hotel">Hotel</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="resort">Resort</SelectItem>
                    <SelectItem value="apartment">Apartemen</SelectItem>
                    <SelectItem value="tour">Paket Wisata</SelectItem>
                  </SelectContent>
                </Select>
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Search Button */}
            <div className="lg:col-span-1">
              <Button className="w-full h-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <Search className="w-5 h-5" />
                <span>CEK KETERSEDIAAN</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;