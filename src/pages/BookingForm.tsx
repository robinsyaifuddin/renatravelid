
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { Calendar, MapPin, Users, Clock, User, Mail, Phone, MessageCircle } from 'lucide-react';
import { tourData } from '@/data/tourData';

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  participants: number;
  departureDate: string;
  specialRequests: string;
  emergencyContact: string;
  emergencyPhone: string;
}

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState<any>(null);

  const form = useForm<BookingFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      participants: 1,
      departureDate: '',
      specialRequests: '',
      emergencyContact: '',
      emergencyPhone: ''
    }
  });

  useEffect(() => {
    // Get tour data based on ID from centralized data
    const selectedTour = tourData[id as keyof typeof tourData];
    if (selectedTour) {
      setTour(selectedTour);
    } else {
      // Default to first tour if ID not found
      setTour(tourData["1"]);
    }
  }, [id]);

  const onSubmit = (data: BookingFormData) => {
    // Save booking data to localStorage for use in payment page
    const bookingData = {
      tour,
      customer: data,
      bookingDate: new Date().toISOString(),
      bookingId: `RNT-${Date.now()}`
    };
    
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
    navigate(`/payment/${id}`);
  };

  // Generate departure date options based on tour schedule
  const getDepartureDates = () => {
    const dates = [];
    const today = new Date();
    
    // Generate next 3 months of departure dates
    for (let month = 0; month < 3; month++) {
      const currentDate = new Date(today.getFullYear(), today.getMonth() + month, 1);
      const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
      
      // Add departure dates based on tour type
      for (let day = 1; day <= lastDay; day++) {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        
        // Only add weekend dates (Saturday and Sunday) for most tours
        if (date.getDay() === 0 || date.getDay() === 6) {
          if (date >= today) {
            dates.push({
              value: date.toISOString().split('T')[0],
              label: date.toLocaleDateString('id-ID', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })
            });
          }
        }
      }
    }
    
    return dates.slice(0, 12); // Limit to 12 options
  };

  if (!tour) {
    return <div>Loading...</div>;
  }

  const departureDates = getDepartureDates();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Tour Summary */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">{tour.title}</h1>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-emerald-500" />
                    <span>{tour.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-emerald-500" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-emerald-500" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-emerald-600">{tour.price}</span>
                  <span className="text-gray-600 ml-2">per orang</span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Formulir Pemesanan</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    rules={{ required: "Nama lengkap wajib diisi" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>Nama Lengkap *</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Masukkan nama lengkap" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    rules={{ 
                      required: "Email wajib diisi",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Format email tidak valid"
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center space-x-2">
                          <Mail className="w-4 h-4" />
                          <span>Email *</span>
                        </FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Masukkan email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    rules={{ required: "Nomor telepon wajib diisi" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center space-x-2">
                          <Phone className="w-4 h-4" />
                          <span>Nomor Telepon *</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Masukkan nomor telepon" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="participants"
                    rules={{ 
                      required: "Jumlah peserta wajib diisi",
                      min: { value: 1, message: "Minimal 1 peserta" }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>Jumlah Peserta *</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min="1" 
                            placeholder="Jumlah peserta" 
                            {...field}
                            onChange={(e) => field.onChange(parseInt(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="departureDate"
                    rules={{ required: "Tanggal keberangkatan wajib dipilih" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>Tanggal Keberangkatan *</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih tanggal keberangkatan" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {departureDates.map((date) => (
                              <SelectItem key={date.value} value={date.value}>
                                {date.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="emergencyContact"
                    rules={{ required: "Kontak darurat wajib diisi" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Kontak Darurat *</FormLabel>
                        <FormControl>
                          <Input placeholder="Nama kontak darurat" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="emergencyPhone"
                    rules={{ required: "Nomor kontak darurat wajib diisi" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nomor Kontak Darurat *</FormLabel>
                        <FormControl>
                          <Input placeholder="Nomor kontak darurat" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="specialRequests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center space-x-2">
                        <MessageCircle className="w-4 h-4" />
                        <span>Permintaan Khusus (Opsional)</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Jelaskan permintaan khusus seperti diet, alergi, atau kebutuhan lainnya..."
                          className="min-h-24"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between items-center pt-6 border-t">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => navigate(-1)}
                  >
                    Kembali
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3"
                  >
                    Lanjut ke Pembayaran
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingForm;
