
export const generateInvoicePDF = (bookingData: any, total: number) => {
  const formatDepartureDate = (dateString: string) => {
    if (!dateString) return 'Belum dipilih';
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Create HTML content for the invoice with consistent tour data
  const invoiceHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Invoice - ${bookingData.bookingId}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          color: #333;
        }
        .header {
          text-align: center;
          border-bottom: 2px solid #10b981;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .logo {
          font-size: 24px;
          font-weight: bold;
          background: linear-gradient(to right, #10b981, #14b8a6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 5px;
        }
        .tagline {
          color: #666;
          font-size: 14px;
        }
        .invoice-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
        }
        .invoice-details, .customer-details {
          width: 48%;
        }
        .section-title {
          font-weight: bold;
          background: linear-gradient(to right, #10b981, #14b8a6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
          font-size: 16px;
        }
        .detail-row {
          margin-bottom: 5px;
          font-size: 14px;
        }
        .tour-section {
          background: linear-gradient(to right, #ecfdf5, #f0fdfa);
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
          border-left: 4px solid #10b981;
        }
        .calculation-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        .calculation-table th, .calculation-table td {
          padding: 10px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        .calculation-table th {
          background: linear-gradient(to right, #f0fdf4, #f0fdfa);
          font-weight: bold;
          color: #065f46;
        }
        .total-row {
          font-weight: bold;
          font-size: 18px;
          background: linear-gradient(to right, #10b981, #14b8a6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer {
          margin-top: 40px;
          text-align: center;
          font-size: 12px;
          color: #666;
          border-top: 1px solid #ddd;
          padding-top: 20px;
        }
        .payment-info {
          background: linear-gradient(to right, #fef3c7, #fef7ed);
          padding: 15px;
          border-radius: 8px;
          margin-top: 20px;
          border-left: 4px solid #14b8a6;
        }
        .btn-gradient {
          background: linear-gradient(to right, #10b981, #14b8a6);
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          box-shadow: 0 4px 6px rgba(16, 185, 129, 0.2);
        }
        @media print {
          body { margin: 0; }
          .btn-gradient {
            background: #10b981 !important;
            -webkit-print-color-adjust: exact;
          }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">Renatravel.id</div>
        <div class="tagline">Plan, Explore, Enjoy</div>
      </div>

      <div class="invoice-info">
        <div class="invoice-details">
          <div class="section-title">Detail Invoice</div>
          <div class="detail-row"><strong>Invoice ID:</strong> INV-${bookingData.bookingId}</div>
          <div class="detail-row"><strong>Booking ID:</strong> ${bookingData.bookingId}</div>
          <div class="detail-row"><strong>Tanggal:</strong> ${new Date(bookingData.bookingDate).toLocaleDateString('id-ID')}</div>
          <div class="detail-row"><strong>Status:</strong> Menunggu Pembayaran</div>
        </div>
        
        <div class="customer-details">
          <div class="section-title">Data Pemesan</div>
          <div class="detail-row"><strong>Nama:</strong> ${bookingData.customer.fullName}</div>
          <div class="detail-row"><strong>Telepon:</strong> ${bookingData.customer.phone}</div>
          <div class="detail-row"><strong>Jumlah Peserta:</strong> ${bookingData.customer.participants} orang</div>
          ${bookingData.customer.departureDate ? `<div class="detail-row"><strong>Tanggal Keberangkatan:</strong> ${formatDepartureDate(bookingData.customer.departureDate)}</div>` : ''}
        </div>
      </div>

      <div class="tour-section">
        <div class="section-title">Detail Tour</div>
        <div class="detail-row"><strong>Destinasi:</strong> ${bookingData.tour.title}</div>
        <div class="detail-row"><strong>Lokasi:</strong> ${bookingData.tour.location}</div>
        <div class="detail-row"><strong>Durasi:</strong> ${bookingData.tour.duration}</div>
        <div class="detail-row"><strong>Kapasitas Grup:</strong> ${bookingData.tour.groupSize}</div>
        ${bookingData.customer.specialRequests ? `<div class="detail-row"><strong>Permintaan Khusus:</strong> ${bookingData.customer.specialRequests}</div>` : ''}
      </div>

      <table class="calculation-table">
        <thead>
          <tr>
            <th>Deskripsi</th>
            <th>Harga Satuan</th>
            <th>Jumlah</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${bookingData.tour.title}</td>
            <td>${bookingData.tour.price}</td>
            <td>${bookingData.customer.participants} orang</td>
            <td>Rp ${total.toLocaleString('id-ID')}</td>
          </tr>
          <tr class="total-row">
            <td colspan="3"><strong>TOTAL PEMBAYARAN</strong></td>
            <td><strong>Rp ${total.toLocaleString('id-ID')}</strong></td>
          </tr>
        </tbody>
      </table>

      <div class="payment-info">
        <div class="section-title">Informasi Pembayaran</div>
        <div class="detail-row"><strong>Bank:</strong> Bank Mandiri</div>
        <div class="detail-row"><strong>No. Rekening:</strong> 1200013152082</div>
        <div class="detail-row"><strong>Atas Nama:</strong> RENDY KURNIAWAN</div>
        <div class="detail-row"><strong>Total yang harus dibayar:</strong> <strong>Rp ${total.toLocaleString('id-ID')}</strong></div>
      </div>

      <div class="footer">
        <p><strong>Renatravel.id</strong></p>
        <p>Telepon: +62 813-1602-9038</p>
        <p>Jl. Poncol Indah V 87, Ciputat, Tangerang Selatan 15411</p>
        <p style="margin-top: 10px; font-style: italic;">Terima kasih telah memilih Renatravel.id untuk petualangan Anda!</p>
      </div>
    </body>
    </html>
  `;

  // Create blob and download link
  const blob = new Blob([invoiceHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `Invoice-${bookingData.bookingId}.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
  
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(invoiceHTML);
    printWindow.document.close();
    
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
      }, 250);
    };
  }
};
