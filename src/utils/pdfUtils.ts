
export const generateInvoicePDF = (bookingData: any, total: number) => {
  // Create HTML content for the invoice
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
          border-bottom: 2px solid #059669;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #059669;
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
          color: #059669;
          margin-bottom: 10px;
          font-size: 16px;
        }
        .detail-row {
          margin-bottom: 5px;
          font-size: 14px;
        }
        .tour-section {
          background: #f0fdf4;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
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
          background: #f9fafb;
          font-weight: bold;
        }
        .total-row {
          font-weight: bold;
          font-size: 18px;
          color: #059669;
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
          background: #fef3c7;
          padding: 15px;
          border-radius: 8px;
          margin-top: 20px;
        }
        @media print {
          body { margin: 0; }
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
          <div class="detail-row"><strong>Email:</strong> ${bookingData.customer.email}</div>
          <div class="detail-row"><strong>Telepon:</strong> ${bookingData.customer.phone}</div>
          <div class="detail-row"><strong>Jumlah Peserta:</strong> ${bookingData.customer.participants} orang</div>
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
        <div class="detail-row"><strong>Bank:</strong> BCA</div>
        <div class="detail-row"><strong>No. Rekening:</strong> 1234567890</div>
        <div class="detail-row"><strong>Atas Nama:</strong> PT Renatravel Indonesia</div>
        <div class="detail-row"><strong>Total yang harus dibayar:</strong> <strong>Rp ${total.toLocaleString('id-ID')}</strong></div>
      </div>

      <div class="footer">
        <p><strong>Renatravel.id</strong></p>
        <p>Email: info@renatravel.id | Telepon: +62 812-9573-5703</p>
        <p>Ciputat, Tangerang Selatan</p>
        <p style="margin-top: 10px; font-style: italic;">Terima kasih telah memilih Renatravel.id untuk petualangan Anda!</p>
      </div>
    </body>
    </html>
  `;

  // Create a new window for printing
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(invoiceHTML);
    printWindow.document.close();
    
    // Wait for content to load then trigger print
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 250);
    };
  }
};
