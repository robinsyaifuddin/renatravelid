
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { generateInvoicePDF } from '@/utils/pdfUtils';
import { 
  Download, 
  Banknote, 
  MessageCircle,
  CheckCircle,
  MapPin,
  Users,
  Clock,
  Calendar,
  Smartphone,
  CreditCard,
  AlertCircle
} from 'lucide-react';

const PaymentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState<any>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      console.log('Loading booking data from localStorage...');
      const storedData = localStorage.getItem('bookingData');
      
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        console.log('Booking data loaded:', parsedData);
        setBookingData(parsedData);
        setError(null);
      } else {
        console.log('No booking data found, redirecting to tour page');
        setError('Data booking tidak ditemukan');
        setTimeout(() => {
          navigate(`/tour/${id || ''}`);
        }, 2000);
      }
    } catch (err) {
      console.error('Error loading booking data:', err);
      setError('Terjadi kesalahan saat memuat data booking');
    } finally {
      setIsLoading(false);
    }
  }, [id, navigate]);

  const paymentMethods = [
    {
      id: 'transfer',
      name: 'Transfer Bank Mandiri',
      icon: Banknote,
      details: {
        bank: 'Bank Mandiri',
        accountNumber: '1200013152082',
        accountName: 'RENDY KURNIAWAN'
      }
    },
    {
      id: 'dana',
      name: 'DANA',
      icon: Smartphone,
      details: {
        number: '081295735703',
        accountName: 'RENDY KURNIAWAN'
      }
    },
    {
      id: 'gopay',
      name: 'GoPay',
      icon: Smartphone,
      details: {
        number: '081295735703',
        accountName: 'RENDY KURNIAWAN'
      }
    },
    {
      id: 'shopeepay',
      name: 'ShopeePay',
      icon: CreditCard,
      details: {
        number: '081295735703',
        accountName: 'RENDY KURNIAWAN'
      }
    }
  ];

  const calculateTotal = () => {
    if (!bookingData?.tour?.price || !bookingData?.customer?.participants) {
      console.log('Missing data for calculation:', { 
        price: bookingData?.tour?.price, 
        participants: bookingData?.customer?.participants 
      });
      return 0;
    }
    
    try {
      const pricePerPerson = parseInt(bookingData.tour.price.replace(/[^\d]/g, ''));
      const total = pricePerPerson * bookingData.customer.participants;
      console.log('Calculated total:', total);
      return total;
    } catch (err) {
      console.error('Error calculating total:', err);
      return 0;
    }
  };

  const handleDownloadInvoice = () => {
    if (!bookingData) {
      console.error('No booking data available for invoice');
      return;
    }
    
    try {
      const selectedMethod = paymentMethods.find(method => method.id === selectedPaymentMethod);
      const total = calculateTotal();
      console.log('Generating invoice with:', { bookingData, total, selectedMethod });
      generateInvoicePDF(bookingData, total, selectedMethod);
    } catch (err) {
      console.error('Error generating invoice:', err);
      setError('Gagal membuat invoice');
    }
  };

  const formatDepartureDate = (dateString: string) => {
    if (!dateString) return 'Belum dipilih';
    
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('id-ID', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch (err) {
      console.error('Error formatting date:', err);
      return 'Format tanggal tidak valid';
    }
  };

  const handleConfirmPayment = () => {
    if (!bookingData || !selectedPaymentMethod) {
      console.log('Missing data for payment confirmation');
      return;
    }

    try {
      const paymentMethod = paymentMethods.find(method => method.id === selectedPaymentMethod);
      const total = calculateTotal();
      const departureDate = bookingData.customer?.departureDate ? formatDepartureDate(bookingData.customer.departureDate) : 'Belum dipilih';
      
      let paymentDetails = '';
      
      if (selectedPaymentMethod === 'transfer') {
        paymentDetails = `• Bank: ${paymentMethod?.details.bank}\n• No. Rekening: ${paymentMethod?.details.accountNumber}\n• Atas Nama: ${paymentMethod?.details.accountName}`;
      } else if (selectedPaymentMethod === 'dana') {
        paymentDetails = `• Nomor DANA: ${paymentMethod?.details.number}\n• Atas Nama: ${paymentMethod?.details.accountName}`;
      } else if (selectedPaymentMethod === 'gopay') {
        paymentDetails = `• Nomor GoPay: ${paymentMethod?.details.number}\n• Atas Nama: ${paymentMethod?.details.accountName}`;
      } else if (selectedPaymentMethod === 'shopeepay') {
        paymentDetails = `• Nomor ShopeePay: ${paymentMethod?.details.number}\n• Atas Nama: ${paymentMethod?.details.accountName}`;
      }

      const message = `Halo Admin Renatravel,

Saya ingin mengkonfirmasi pembayaran untuk booking berikut:

📋 DETAIL BOOKING
• ID Booking: ${bookingData.bookingId || 'N/A'}
• Nama: ${bookingData.customer?.fullName || 'N/A'}
• Telepon: ${bookingData.customer?.phone || 'N/A'}

🏝️ DETAIL TOUR
• Destinasi: ${bookingData.tour?.title || 'N/A'}
• Lokasi: ${bookingData.tour?.location || 'N/A'}
• Durasi: ${bookingData.tour?.duration || 'N/A'}
• Tanggal Keberangkatan: ${departureDate}
• Jumlah Peserta: ${bookingData.customer?.participants || 0} orang

💰 DETAIL PEMBAYARAN
• Total: Rp ${total.toLocaleString('id-ID')}
• Metode: ${paymentMethod?.name || 'N/A'}
${paymentDetails}

Mohon konfirmasi pembayaran ini. Terima kasih!`;

      const whatsappUrl = `https://wa.me/6281316029038?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } catch (err) {
      console.error('Error sending WhatsApp message:', err);
      setError('Gagal membuka WhatsApp');
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Memuat data pembayaran...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Error state
  if (error || !bookingData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8 flex items-center justify-center">
          <div className="text-center bg-white rounded-xl shadow-lg p-8 max-w-md">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Terjadi Kesalahan</h2>
            <p className="text-gray-600 mb-4">{error || 'Data booking tidak ditemukan'}</p>
            <Button 
              onClick={() => navigate('/tour')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              Kembali ke Tour
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const total = calculateTotal();
  const selectedMethodDetails = paymentMethods.find(m => m.id === selectedPaymentMethod)?.details;

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
                        <method.icon className="w-5 h-5 md:w-6 md:h-6 text-emerald-600 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-800 text-sm md:text-base">{method.name}</h3>
                          <p className="text-xs md:text-sm text-gray-600 truncate">
                            {method.id === 'transfer' && method.details && (
                              <>Bank: {method.details.bank} - {method.details.accountNumber}</>
                            )}
                            {(method.id === 'dana' || method.id === 'gopay' || method.id === 'shopeepay') && method.details && (
                              <>Nomor: {method.details.number}</>
                            )}
                          </p>
                        </div>
                        {selectedPaymentMethod === method.id && (
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 flex-shrink-0" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Payment Details Display */}
                {selectedPaymentMethod && selectedMethodDetails && (
                  <div className="mt-4 md:mt-6 p-3 md:p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2 text-sm md:text-base">
                      Informasi {paymentMethods.find(m => m.id === selectedPaymentMethod)?.name}
                    </h4>
                    <div className="space-y-1 text-xs md:text-sm text-blue-700">
                      {selectedPaymentMethod === 'transfer' && (
                        <>
                          <p>Bank: {selectedMethodDetails.bank}</p>
                          <p>No. Rekening: {selectedMethodDetails.accountNumber}</p>
                          <p>Atas Nama: {selectedMethodDetails.accountName}</p>
                        </>
                      )}
                      {(selectedPaymentMethod === 'dana' || selectedPaymentMethod === 'gopay' || selectedPaymentMethod === 'shopeepay') && (
                        <>
                          <p>Nomor: {selectedMethodDetails.number}</p>
                          <p>Atas Nama: {selectedMethodDetails.accountName}</p>
                        </>
                      )}
                      <p className="font-medium mt-2">Total: Rp {total.toLocaleString('id-ID')}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button 
                  onClick={handleDownloadInvoice}
                  variant="outline"
                  className="flex-1 text-sm md:text-base py-2 md:py-3"
                  disabled={!selectedPaymentMethod}
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
                    {bookingData.tour?.image && (
                      <img 
                        src={bookingData.tour.image} 
                        alt={bookingData.tour?.title || 'Tour Image'}
                        className="w-full h-24 md:h-32 object-cover rounded-lg mb-3"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder.svg';
                        }}
                      />
                    )}
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">
                      {bookingData.tour?.title || 'Judul Tour Tidak Tersedia'}
                    </h4>
                  </div>

                  <div className="space-y-2 text-xs md:text-sm">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      <span className="truncate">{bookingData.tour?.location || 'Lokasi tidak tersedia'}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      <span>{bookingData.tour?.duration || 'Durasi tidak tersedia'}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      <span>{bookingData.customer?.participants || 0} peserta</span>
                    </div>
                    {bookingData.customer?.departureDate && (
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <span className="text-xs">{formatDepartureDate(bookingData.customer.departureDate)}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      <span>ID: {bookingData.bookingId || 'ID tidak tersedia'}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2 text-xs md:text-sm">
                      <span className="text-gray-600">Harga per orang</span>
                      <span>{bookingData.tour?.price || 'Rp 0'}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2 text-xs md:text-sm">
                      <span className="text-gray-600">Jumlah peserta</span>
                      <span>{bookingData.customer?.participants || 0} orang</span>
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
                    <span className="font-medium break-words">{bookingData.customer?.fullName || 'Nama tidak tersedia'}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <span className="text-gray-600 sm:w-16">Telepon:</span>
                    <span>{bookingData.customer?.phone || 'Telepon tidak tersedia'}</span>
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
