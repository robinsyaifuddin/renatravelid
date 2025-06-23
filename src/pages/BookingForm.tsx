
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Calendar, MapPin, Users, Clock, User, Mail, Phone, MessageCircle } from 'lucide-react';

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  participants: number;
  specialRequests: string;
  emergencyContact: string;
  emergencyPhone: string;
}

// Complete tour data for all 12 tours
const tourData = {
  "1": {
    id: 1,
    title: "TWA Papandayan",
    location: "Garut, Jawa Barat",
    duration: "ONE DAY TRIP",
    groupSize: "Min 5 orang",
    rating: 4.8,
    reviews: 142,
    price: "Rp 425.000",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&auto=format"
  },
  "2": {
    id: 2,
    title: "WISUBA BADUY",
    location: "Kabupaten Lebak, Banten",
    duration: "2D 1N",
    groupSize: "Min 7 orang",
    rating: 4.7,
    reviews: 98,
    price: "Rp 250.000",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop&auto=format"
  },
  "3": {
    id: 3,
    title: "Pulau Harapan",
    location: "Kepulauan Seribu, Jakarta",
    duration: "2D 1N",
    groupSize: "Min 7 orang",
    rating: 4.8,
    reviews: 156,
    price: "Rp 430.000",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop&auto=format"
  },
  "4": {
    id: 4,
    title: "Pulau Pramuka",
    location: "Kepulauan Seribu, Jakarta",
    duration: "2D 1N",
    groupSize: "Min 7 orang",
    rating: 4.7,
    reviews: 134,
    price: "Rp 430.000",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&auto=format"
  },
  "5": {
    id: 5,
    title: "Pulau Tidung",
    location: "Kepulauan Seribu, Jakarta",
    duration: "2D 1N",
    groupSize: "Min 7 orang",
    rating: 4.9,
    reviews: 187,
    price: "Rp 430.000",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop&auto=format"
  },
  "6": {
    id: 6,
    title: "Geopark Ciletuh",
    location: "Sukabumi, Jawa Barat",
    duration: "ONE DAY TRIP",
    groupSize: "Min 7 orang",
    rating: 4.6,
    reviews: 89,
    price: "Rp 300.000",
    image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=800&h=600&fit=crop&auto=format"
  },
  "7": {
    id: 7,
    title: "Ujung Genteng",
    location: "Sukabumi, Jawa Barat",
    duration: "2D 1N",
    groupSize: "Min 7 orang",
    rating: 4.5,
    reviews: 73,
    price: "Rp 375.000",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop&auto=format"
  },
  "8": {
    id: 8,
    title: "Dieng",
    location: "Wonosobo, Jawa Tengah",
    duration: "3D 2N",
    groupSize: "Min 7 orang",
    rating: 4.9,
    reviews: 234,
    price: "Rp 775.000",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=800&h=600&fit=crop&auto=format"
  },
  "9": {
    id: 9,
    title: "Pulau Peucang",
    location: "Ujung Kulon, Banten",
    duration: "3D 2N",
    groupSize: "Min 7 orang",
    rating: 4.8,
    reviews: 112,
    price: "Rp 775.000",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop&auto=format"
  },
  "10": {
    id: 10,
    title: "Pulau Sebesi",
    location: "Lampung Selatan",
    duration: "3D 2N",
    groupSize: "Min 7 orang",
    rating: 4.7,
    reviews: 95,
    price: "Rp 775.000",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop&auto=format"
  },
  "11": {
    id: 11,
    title: "Pulau Pahawang",
    location: "Pesawaran, Lampung",
    duration: "3D 2N",
    groupSize: "Min 7 orang",
    rating: 4.8,
    reviews: 156,
    price: "Rp 775.000",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop&auto=format"
  }
};

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
      specialRequests: '',
      emergencyContact: '',
      emergencyPhone: ''
    }
  });

  useEffect(() => {
    // Get tour data based on ID
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

  if (!tour) {
    return <div>Loading...</div>;
  }

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
