
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { generateInvoicePDF } from '@/utils/pdfUtils';
import { 
  Download, 
  Banknote, 
  QrCode, 
  MessageCircle,
  CheckCircle,
  MapPin,
  Users,
  Clock,
  Calendar
} from 'lucide-react';

const PaymentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState<any>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('bookingData');
    if (storedData) {
      setBookingData(JSON.parse(storedData));
    } else {
      navigate(`/tour/${id}`);
    }
  }, [id, navigate]);

  const paymentMethods = [
    {
      id: 'transfer',
      name: 'Transfer Bank',
      icon: Banknote,
      details: {
        bank: 'Bank Mandiri',
        accountNumber: '1200013152082',
        accountName: 'RENDY KURNIAWAN'
      }
    },
    {
      id: 'qris',
      name: 'QRIS',
      icon: QrCode,
      details: {
        note: 'Scan QR Code untuk pembayaran instant'
      }
    }
  ];

  const calculateTotal = () => {
    if (!bookingData) return 0;
    const pricePerPerson = parseInt(bookingData.tour.price.replace(/[^\d]/g, ''));
    return pricePerPerson * bookingData.customer.participants;
  };

  const handleDownloadInvoice = () => {
    if (bookingData) {
      generateInvoicePDF(bookingData, calculateTotal());
    }
  };

  const formatDepartureDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleConfirmPayment = () => {
    if (!bookingData || !selectedPaymentMethod) return;

    const paymentMethod = paymentMethods.find(method => method.id === selectedPaymentMethod);
    const total = calculateTotal();
    const departureDate = bookingData.customer.departureDate ? formatDepartureDate(bookingData.customer.departureDate) : 'Belum dipilih';
    
    const message = `Halo Admin Renatravel,

Saya ingin mengkonfirmasi pembayaran untuk booking berikut:

📋 DETAIL BOOKING
• ID Booking: ${bookingData.bookingId}
• Nama: ${bookingData.customer.fullName}
• Telepon: ${bookingData.customer.phone}

🏝️ DETAIL TOUR
• Destinasi: ${bookingData.tour.title}
• Lokasi: ${bookingData.tour.location}
• Durasi: ${bookingData.tour.duration}
• Tanggal Keberangkatan: ${departureDate}
• Jumlah Peserta: ${bookingData.customer.participants} orang

💰 DETAIL PEMBAYARAN
• Total: Rp ${total.toLocaleString('id-ID')}
• Metode: ${paymentMethod?.name}
${selectedPaymentMethod === 'transfer' ? `• Bank: ${paymentMethod?.details.bank}\n• No. Rekening: ${paymentMethod?.details.accountNumber}` : ''}

Mohon konfirmasi pembayaran ini. Terima kasih!`;

    const whatsappUrl = `https://wa.me/6281316029038?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!bookingData) {
    return <div>Loading...</div>;
  }

  const total = calculateTotal();
  const transferDetails = paymentMethods.find(m => m.id === 'transfer')?.details;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
            
            {/* Payment Methods */}
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Pilih Metode Pembayaran</h2>
                
                <div className="space-y-3 md:space-y-4">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className={`border rounded-lg p-3 md:p-4 cursor-pointer transition-all ${
                        selectedPaymentMethod === method.id
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                      onClick={() => setSelectedPaymentMethod(method.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <method.icon className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-800 text-sm md:text-base">{method.name}</h3>
                          <p className="text-xs md:text-sm text-gray-600 truncate">
                            {method.id === 'transfer' && (
                              <>Bank: {method.details.bank} - {method.details.accountNumber}</>
                            )}
                            {method.id !== 'transfer' && method.details.note}
                          </p>
                        </div>
                        {selectedPaymentMethod === method.id && (
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 flex-shrink-0" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {selectedPaymentMethod === 'transfer' && transferDetails && (
                  <div className="mt-4 md:mt-6 p-3 md:p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2 text-sm md:text-base">Informasi Transfer Bank</h4>
                    <div className="space-y-1 text-xs md:text-sm text-blue-700">
                      <p>Bank: {transferDetails.bank}</p>
                      <p>No. Rekening: {transferDetails.accountNumber}</p>
                      <p>Atas Nama: {transferDetails.accountName}</p>
                      <p className="font-medium mt-2">Total: Rp {total.toLocaleString('id-ID')}</p>
                    </div>
                  </div>
                )}

                {selectedPaymentMethod === 'qris' && (
                  <div className="mt-4 md:mt-6 p-3 md:p-4 bg-purple-50 border border-purple-200 rounded-lg text-center">
                    <h4 className="font-semibold text-purple-800 mb-3 md:mb-4 text-sm md:text-base">Scan QR Code</h4>
                    <div className="w-32 h-32 md:w-48 md:h-48 bg-white border mx-auto rounded-lg flex items-center justify-center overflow-hidden">
                      <img 
                        src="/lovable-uploads/c688c126-ba00-4009-8b64-92dcd9d7489e.png" 
                        alt="QR Code Pembayaran" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-xs md:text-sm text-purple-700 mt-2">Scan dengan aplikasi banking atau e-wallet</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button 
                  onClick={handleDownloadInvoice}
                  variant="outline"
                  className="flex-1 text-sm md:text-base py-2 md:py-3"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Invoice
                </Button>
                
                <Button 
                  onClick={handleConfirmPayment}
                  disabled={!selectedPaymentMethod}
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm md:text-base py-2 md:py-3"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Konfirmasi via WhatsApp
                </Button>
              </div>
            </div>

            {/* Booking Summary */}
            <div className="space-y-4 md:space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Ringkasan Booking</h3>
                
                <div className="space-y-4">
                  <div>
                    <img 
                      src={bookingData.tour.image} 
                      alt={bookingData.tour.title}
                      className="w-full h-24 md:h-32 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">{bookingData.tour.title}</h4>
                  </div>

                  <div className="space-y-2 text-xs md:text-sm">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      <span className="truncate">{bookingData.tour.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      <span>{bookingData.tour.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      <span>{bookingData.customer.participants} peserta</span>
                    </div>
                    {bookingData.customer.departureDate && (
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <span className="text-xs">{formatDepartureDate(bookingData.customer.departureDate)}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      <span>ID: {bookingData.bookingId}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2 text-xs md:text-sm">
                      <span className="text-gray-600">Harga per orang</span>
                      <span>{bookingData.tour.price}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2 text-xs md:text-sm">
                      <span className="text-gray-600">Jumlah peserta</span>
                      <span>{bookingData.customer.participants} orang</span>
                    </div>
                    <div className="flex justify-between items-center font-bold text-base md:text-lg border-t pt-2">
                      <span>Total</span>
                      <span className="text-emerald-600">Rp {total.toLocaleString('id-ID')}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Data Pemesan</h3>
                <div className="space-y-2 text-xs md:text-sm">
                  <div className="flex flex-col sm:flex-row">
                    <span className="text-gray-600 sm:w-16">Nama:</span>
                    <span className="font-medium break-words">{bookingData.customer.fullName}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <span className="text-gray-600 sm:w-16">Telepon:</span>
                    <span>{bookingData.customer.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentPage;
