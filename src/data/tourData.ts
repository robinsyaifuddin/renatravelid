
export interface Tour {
  id: string;
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  category: string;
  difficulty: string;
  description: string;
  highlights: string[];
  included: string[];
  notIncluded: string[];
  itinerary: {
    day: number;
    title: string;
    activities: string[];
  }[];
  destinations?: string[];
  departureDates?: string[];
  meetingPoints?: string[];
  cancellationPolicy?: string[];
}

export const tourData: { [key: string]: Tour } = {
  "twa-papandayan": {
    id: "twa-papandayan",
    title: "TWA Papandayan",
    location: "Garut, Jawa Barat",
    duration: "ONE DAY TRIP",
    groupSize: "Min 5 orang",
    rating: 4.8,
    reviews: 142,
    price: 425000,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&auto=format",
    category: "Pegunungan",
    difficulty: "Mudah",
    description: "Gunung Papandayan adalah destinasi pendakian ramah pemula yang berlokasi di Garut, Jawa Barat, dengan ketinggian sekitar 2.665 mdpl. Gunung ini dikenal karena jalurnya yang relatif mudah, pemandangan alam yang spektakuler, serta fasilitas yang cocok untuk camping santai, healing trip, maupun edukasi alam.",
    destinations: [
      "Kawah Putih",
      "Hutan Mati", 
      "Pondok Saladah"
    ],
    highlights: [
      "Kawah Papandayan yang aktif",
      "Mata air panas alami",
      "Hutan edelweis",
      "Sunrise point yang spektakuler"
    ],
    included: [
      "Transportasi AC PP",
      "BBM, TOL Dan Parkir",
      "Souvenir",
      "Makan 1x",
      "Air mineral",
      "Snack",
      "Simaksi",
      "Dokumentasi",
      "Tour leader",
      "Asuransi",
      "P3K Standart"
    ],
    notIncluded: [
      "Makan di luar program",
      "Perbekalan (cemilan/minum) selama trekking Papandayan",
      "Tipping guide"
    ],
    departureDates: [
      "JULI: 5, 12, 19, 26",
      "AGUSTUS: 2, 9, 16, 23, 30",
      "SEP: 6, 13, 20, 27"
    ],
    meetingPoints: [
      "Plaza Semanggi (Jakarta)",
      "RS Cawang UKI (Jakarta)",
      "Exit Tol Cileunyi (Bandung)",
      "Depan Hotel Ammorosa (Bekasi)",
      "Indomaret Exit Tol Karawang Barat",
      "Depan Pollux Mall (Cikarang)"
    ],
    itinerary: [
      {
        day: 1,
        title: "Meeting Point & Keberangkatan",
        activities: [
          "21.00 - Meeting Point Peserta Trip Di Plaza Semanggi",
          "22.00 - Keberangkatan Dari Plaza Semanggi",
          "22.30 - Keberangkatan Dari RS UKU Cawang",
          "23.00 - Keberangkatan dari Hotel Ammarossa Bekasi",
          "23.30 - Keberangaktan Dari Pollux Mall Cikarang",
          "23.50 - Keberangkatan Dari depan Indomaret Exit Tol Karawang Barat"
        ]
      },
      {
        day: 2,
        title: "Eksplorasi TWA Papandayan",
        activities: [
          "02.00 - Keberangkatan dari Exit tol cileunyi",
          "04.30 - Tiba Di camp papandayan, sarapan dan persiapan kegiatan",
          "06.00 - Mulai explore Gunung Papandayan (Kawah, Danau Biru, Hutan Mati, Pondok Saladah)",
          "13.30 - Tiba Kembali di Camp Papandayan, Bebersih dan persiapan pulang",
          "15.00 - Perjalanan Pulang menuju meeting point awal"
        ]
      }
    ],
    cancellationPolicy: [
      "Trip ini Minimal Keberangkatan 5 Orang Peserta",
      "Biaya trip tergantung dari jumlah peserta",
      "DP (Down Payment) minimal 50% dan pelunasan wajib dibayarkan pada H-3 sebelum keberangkatan",
      "DP tidak dapat dikembalikan jika ada pembatalan dari peserta, tapi bisa dialihkan untuk peserta pengganti",
      "Trip dapat batal atau berubah jadwal sewaktu-waktu apabila terjadi cuaca buruk dan kejadian-kejadian alam tertentu",
      "Wajib menjaga barang-barang pribadi, dan segala kehilangan bukan menjadi tanggung jawab kami sebagai tour operator",
      "Peserta wajib mematuhi aturan yang berlaku di masing-masing destinasi yang dikunjungi",
      "Mohon kearifan peserta untuk ikut serta dalam menjaga lokasi objek wisata dengan tidak melakukan hal-hal yang bersifat merusak",
      "Peserta dianggap mengerti dan menyetujui semua ketentuan di atas"
    ]
  },
  "wisuba-baduy": {
    id: "wisuba-baduy",
    title: "WISUBA BADUY",
    location: "Kabupaten Lebak, Banten",
    duration: "2D 1N",
    groupSize: "Min 7 orang",
    rating: 4.7,
    reviews: 98,
    price: 250000,
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop&auto=format",
    category: "Budaya",
    difficulty: "Mudah",
    description: "Wisuba Baduy merupakan destinasi wisata budaya yang berlokasi di wilayah Baduy, Kabupaten Lebak, Banten. Tempat ini mengusung konsep wisata edukatif berbasis budaya lokal yang mengangkat kehidupan masyarakat Suku Baduy sebagai inti daya tariknya. Aktivitas yang umum dilakukan antara lain jelajah kampung adat, upacara budaya simbolik, workshop kerajinan tradisional, hingga sesi interaksi langsung dengan warga lokal.",
    destinations: [
      "Baduy Luar",
      "Baduy Dalam"
    ],
    highlights: [
      "Interaksi dengan masyarakat Baduy",
      "Belajar tradisi dan budaya lokal",
      "Trekking di alam Baduy",
      "Menginap di rumah tradisional"
    ],
    included: [
      "Transportasi Lokal PP",
      "Souvenir",
      "Makan 2x",
      "Homestay Lokal",
      "Snack",
      "Simaksi",
      "Dokumentasi",
      "Tour leader",
      "Guide Lokal",
      "Asuransi"
    ],
    notIncluded: [
      "Makan di luar program",
      "Perbekalan (cemilan/minum) selama trekking Baduy",
      "Tipping guide"
    ],
    departureDates: [
      "JUNI: 21, 28",
      "JULI: 5, 12, 19, 26",
      "AGUSTUS: 2, 9, 16, 23, 30"
    ],
    meetingPoints: [
      "ST RangkasBitung"
    ],
    itinerary: [
      {
        day: 1,
        title: "Perjalanan ke Baduy",
        activities: [
          "07.00 - Meeting Point Peserta Trip Di Pintu Keluar ST. RangkasBitung",
          "08.00 - Keberangkatan Dari ST. Rangkasbitung menuju ke terminal Ciboleger",
          "09.15 - Sampai di Terminal Ciboleger & Persiapan Trekking menuju ke baduy luar",
          "09.30 - Trekking menuju baduy luar & jembatan akar",
          "11.30 - Sampai di Jembatan Akar & ishoma",
          "12.30 - Trekking menuju Baduy Dalam",
          "15.00 - Sampai di Homestay Lokal & istirahat",
          "19.00 - Makan malam, dan di lanjutkan Acara makrab dan diskusi tentang kehidupan wisuba baduy Dalam, serta di lanjutkan dengan Istirahat"
        ]
      },
      {
        day: 2,
        title: "Eksplorasi Budaya Baduy",
        activities: [
          "05.00 - Bangun, sholat dan menikmati Hawa pagi baduy dalam serta melihat aktivitas warga baduy dalam",
          "07.00 - Sarapan pagi lalu di pandu oleh para leader untuk melihat suasana perkampungan baduy dalam",
          "10.00 - Trekking dari baduy dalam menuju terminal Ciboleger",
          "14.00 - Tiba Di terminal Ciboleger, Istirahat dan bersih bersih",
          "15.00 - Perjalanan menuju ST. RangkasBitung menggunakan ELF"
        ]
      }
    ],
    cancellationPolicy: [
      "Trip ini Minimal Keberangkatan 7 Orang Peserta",
      "Biaya trip tergantung dari jumlah peserta",
      "DP (Down Payment) minimal 50% dan pelunasan wajib dibayarkan pada H-3 sebelum keberangkatan",
      "DP tidak dapat dikembalikan jika ada pembatalan dari peserta, tapi bisa dialihkan untuk peserta pengganti",
      "Trip dapat batal atau berubah jadwal sewaktu-waktu apabila terjadi cuaca buruk dan kejadian-kejadian alam tertentu",
      "Wajib menjaga barang-barang pribadi, dan segala kehilangan bukan menjadi tanggung jawab kami sebagai tour operator",
      "Peserta wajib mematuhi aturan yang berlaku di masing-masing destinasi yang dikunjungi",
      "Mohon kearifan peserta untuk ikut serta dalam menjaga lokasi objek wisata dengan tidak melakukan hal-hal yang bersifat merusak",
      "Peserta dianggap mengerti dan menyetujui semua ketentuan di atas"
    ]
  },
  "pulau-harapan": {
    id: "pulau-harapan",
    title: "Pulau Harapan",
    location: "Kepulauan Seribu, Jakarta",
    duration: "2D 1N",
    groupSize: "Min 7 orang",
    rating: 4.8,
    reviews: 156,
    price: 430000,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop&auto=format",
    category: "Pantai",
    difficulty: "Mudah",
    description: "Pulau Harapan adalah kombinasi unik antara destinasi wisata bahari, pusat konservasi lingkungan, dan komunitas lokal yang ramah. Menawarkan kemudahan akses dari Jakarta, suasana alam yang tenang, serta aktivitas edukatif, konon pulau ini menjadi 'pulau harapan' bagi manusia dan alam di tengah Kepulauan Seribu.",
    destinations: [
      "Pulau macan",
      "Pulau dolphin",
      "Sunset di pulau bulat"
    ],
    highlights: [
      "Pantai berpasir putih",
      "Snorkeling di spot terbaik",
      "Sunset dan sunrise yang indah",
      "Kuliner seafood segar"
    ],
    included: [
      "Kapal Feri PP Pelabuhan Kaliadem – Pulau Harapan",
      "Asuransi penyebrangan",
      "Homestay AC",
      "Makan 3x",
      "Barbeque",
      "Air mineral",
      "Kapal penjelajah pulau",
      "Alat snorkeling",
      "Pelampung",
      "Asuransi",
      "Dokumentasi",
      "Tour Guide"
    ],
    notIncluded: [
      "Tiket penangkaran penyu",
      "Kebutuhan dan obat obat an pribadi",
      "Tip guide & crew"
    ],
    departureDates: [
      "JULI: 5-6, 12-13, 19-20, 26-27",
      "AGUSTUS: 2-3, 9-10, 16-17, 23-24, 30-31",
      "SEP: 6-7, 13-14, 20-21, 27-28",
      "OKT: 4-5, 11-12, 18-19, 25-26",
      "NOV: 1-2, 8-9, 15-16, 22-23, 29-30",
      "DES: 3-4, 10-11, 17-18, 24-25, 31-1"
    ],
    meetingPoints: [
      "Pelabuhan Kaliadem Muara Angke - Jakarta Pukul 06.00 wib"
    ],
    itinerary: [
      {
        day: 1,
        title: "Perjalanan ke Pulau Harapan",
        activities: [
          "06.00 - Peserta berkumpul di Pelabuhan Kali Adem, Muara Angke",
          "07.00 - Perjalanan ke Pulau Harapan",
          "11.00 - Tiba di Pulau Harapan, check-in Homestay; istirahat, makan siang, acara bebas",
          "13.00 - Snorkeling di Pulau Macan atau pulau putri atau bira, wisata ke pulau Dolphin, sunset di Pulau Bulat",
          "17.00 - Kembali ke Pulau Harapan untuk mandi dan bersih-bersih",
          "19.00 - Makan malam dan bakar ikan cara bebas"
        ]
      },
      {
        day: 2,
        title: "Eksplorasi dan Kembali",
        activities: [
          "05.30 - Menikmati Sunrise di Pulau Harapan",
          "07.00 - Mandi, coffee break, packing untuk persiapan kembali ke Jakarta",
          "08.00 - Check out homestay",
          "09.00 - Explore Taman Mangrove & Penangkaran Penyu",
          "10.30 - Tiba di dermaga Pulau Harapan",
          "11.00 - Perjalanan menuju pelabuhan kaliadem muara angke"
        ]
      }
    ],
    cancellationPolicy: [
      "Trip ini Minimal Keberangkatan 7 Orang Peserta",
      "Biaya trip tergantung dari jumlah peserta",
      "DP (Down Payment) minimal 50% dan pelunasan wajib dibayarkan pada H-3 sebelum keberangkatan",
      "DP tidak dapat dikembalikan jika ada pembatalan dari peserta, tapi bisa dialihkan untuk peserta pengganti",
      "Trip dapat batal atau berubah jadwal sewaktu-waktu apabila terjadi cuaca buruk dan kejadian-kejadian alam tertentu",
      "Wajib menjaga barang-barang pribadi, dan segala kehilangan bukan menjadi tanggung jawab kami sebagai tour operator",
      "Peserta wajib mematuhi aturan yang berlaku di masing-masing destinasi yang dikunjungi",
      "Mohon kearifan peserta untuk ikut serta dalam menjaga lokasi objek wisata dengan tidak melakukan hal-hal yang bersifat merusak",
      "Peserta dianggap mengerti dan menyetujui semua ketentuan di atas"
    ]
  },
  "pulau-pramuka": {
    id: "pulau-pramuka",
    title: "Pulau Pramuka",
    location: "Kepulauan Seribu, Jakarta",
    duration: "2D 1N",
    groupSize: "Min 7 orang",
    rating: 4.7,
    reviews: 134,
    price: 430000,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&auto=format",
    category: "Pantai",
    difficulty: "Mudah",
    description: "Pulau Pramuka adalah pulau berpenduduk dan sekaligus pusat administratif Kabupaten Kepulauan Seribu di utara Jakarta. Luasnya sekitar 16 ha dan dihuni lebih dari 2.000 orang dari etnis Betawi, Bugis, Banten, Jawa, Madura, dan Minangkabau",
    destinations: [
      "Penangkaran penyu & Taman Nasional",
      "Pulau air, pulau gosong petrick dan pulau semak daun",
      "Snorkeling Di spot Soft Coral"
    ],
    highlights: [
      "Pusat konservasi penyu",
      "Diving dan snorkeling",
      "Mangrove tour",
      "Kuliner khas kepulauan"
    ],
    included: [
      "Kapal Feri PP Pelabuhan Kaliadem – Pulau Pramuka",
      "Asuransi penyebrangan",
      "Homestay AC",
      "Makan 3x",
      "Barbeque",
      "Air mineral",
      "Kapal penjelajah pulau",
      "Alat snorkeling",
      "Pelampung",
      "Asuransi",
      "Dokumentasi",
      "Tour Guide"
    ],
    notIncluded: [
      "Tiket Taman Nasional & penangkaran penyu",
      "Kebutuhan dan obat obat an pribadi",
      "Tip guide & crew"
    ],
    departureDates: [
      "JULI: 5-6, 12-13, 19-20, 26-27",
      "AGUSTUS: 2-3, 9-10, 16-17, 23-24, 30-31",
      "SEP: 6-7, 13-14, 20-21, 27-28",
      "OKT: 4-5, 11-12, 18-19, 25-26",
      "NOV: 1-2, 8-9, 15-16, 22-23, 29-30",
      "DES: 3-4, 10-11, 17-18, 24-25, 31-1"
    ],
    meetingPoints: [
      "Pelabuhan Kaliadem Muara Angke - Jakarta Pukul 06.00 wib"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival dan Eksplorasi",
        activities: [
          "06.00 - Peserta berkumpul di Pelabuhan Kali Adem, Muara Angke",
          "07.00 - Perjalanan ke Pulau Pramuka",
          "11.00 - Tiba di Pulau Pramuka, check-in Homestay; istirahat, makan siang, acara bebas",
          "13.00 - Snorkeling di spot coral, Wisata ke pulau air, pulau gosong petrick dan pulau semak daun",
          "17.00 - Kembali ke Pulau Pramuka untuk mandi dan bersih-bersih",
          "19.00 - Makan malam dan bakar ikan acara bebas"
        ]
      },
      {
        day: 2,
        title: "Water Activities",
        activities: [
          "05.30 - Menikmati Sunrise di Pulau Pramuka",
          "07.00 - Mandi, coffee break, packing untuk persiapan kembali ke Jakarta",
          "08.00 - Check out homestay",
          "09.00 - Explore Taman Nasional & Penangkaran Penyu",
          "10.30 - Tiba di dermaga Pulau Pramuka",
          "11.00 - Perjalanan menuju pelabuhan kaliadem muara angke"
        ]
      }
    ],
    cancellationPolicy: [
      "Trip ini Minimal Keberangkatan 7 Orang Peserta",
      "Biaya trip tergantung dari jumlah peserta",
      "DP (Down Payment) minimal 50% dan pelunasan wajib dibayarkan pada H-3 sebelum keberangkatan",
      "DP tidak dapat dikembalikan jika ada pembatalan dari peserta, tapi bisa dialihkan untuk peserta pengganti",
      "Trip dapat batal atau berubah jadwal sewaktu-waktu apabila terjadi cuaca buruk dan kejadian-kejadian alam tertentu",
      "Wajib menjaga barang-barang pribadi, dan segala kehilangan bukan menjadi tanggung jawab kami sebagai tour operator",
      "Peserta wajib mematuhi aturan yang berlaku di masing-masing destinasi yang dikunjungi",
      "Mohon kearifan peserta untuk ikut serta dalam menjaga lokasi objek wisata dengan tidak melakukan hal-hal yang bersifat merusak",
      "Peserta dianggap mengerti dan menyetujui semua ketentuan di atas"
    ]
  },
  "pulau-tidung": {
    id: "pulau-tidung",
    title: "Pulau Tidung",
    location: "Kepulauan Seribu, Jakarta",
    duration: "2D 1N",
    groupSize: "Min 7 orang",
    rating: 4.9,
    reviews: 187,
    price: 430000,
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop&auto=format",
    category: "Pantai",
    difficulty: "Mudah",
    description: "Pulau Tidung terdiri dari dua pulau: Tidung Besar (berpenduduk) dan Tidung Kecil (alami), yang dihubungkan oleh ikon wisata legendaris, Jembatan Cinta sepanjang sekitar 800 m, tempat favorit untuk foto, menikmati sunrise/sunset, bahkan melompat ke laut demi mitos keberuntungan cinta",
    destinations: [
      "Snorkeling Di Pulau Tidung Kecil & Besar",
      "Jembatan Cinta",
      "Saung Cemara"
    ],
    highlights: [
      "Jembatan Cinta yang ikonik",
      "Pantai dengan air jernih",
      "Spot snorkeling terbaik",
      "Sepeda keliling pulau"
    ],
    included: [
      "Kapal Feri PP Pelabuhan Kaliadem – Pulau Tidung",
      "Asuransi penyebrangan",
      "Homestay AC",
      "Makan 3x",
      "Barbeque",
      "Air mineral",
      "Kapal penjelajah pulau",
      "Alat snorkeling",
      "Pelampung",
      "Asuransi",
      "Dokumentasi",
      "Tour Guide"
    ],
    notIncluded: [
      "Tiket Taman Nasional & penangkaran penyu",
      "Kebutuhan dan obat obat an pribadi",
      "Tip guide & crew"
    ],
    departureDates: [
      "JULI: 5-6, 12-13, 19-20, 26-27",
      "AGUSTUS: 2-3, 9-10, 16-17, 23-24, 30-31",
      "SEP: 6-7, 13-14, 20-21, 27-28",
      "OKT: 4-5, 11-12, 18-19, 25-26",
      "NOV: 1-2, 8-9, 15-16, 22-23, 29-30",
      "DES: 3-4, 10-11, 17-18, 24-25, 31-1"
    ],
    meetingPoints: [
      "Pelabuhan Kaliadem Muara Angke - Jakarta Pukul 06.00 wib"
    ],
    itinerary: [
      {
        day: 1,
        title: "Petualangan Pulau Tidung",
        activities: [
          "06.00 - Peserta berkumpul di Pelabuhan Kali Adem, Muara Angke",
          "07.00 - Perjalanan ke Pulau Tidung",
          "11.00 - Tiba di Pulau Tidung, check-in Homestay; istirahat, makan siang, acara bebas",
          "13.00 - Snorkeling di Pulau Tidung Kecil & Pulau Tidung Besar",
          "16.00 - Perjalanan Menuju Saung Cemara",
          "16.30 - Tiba, Explore dan menikmati sunset di saung cemara",
          "17.30 - Perjalanan menuju Penginapan",
          "19.00 - Makan malam dan bakar ikan acara bebas"
        ]
      },
      {
        day: 2,
        title: "Water Sports dan Relax",
        activities: [
          "05.30 - Menikmati Sunrise di Pulau Tidung",
          "07.00 - Mandi, coffee break, packing untuk persiapan kembali ke Jakarta",
          "08.00 - Check out homestay",
          "09.00 - Explore Jembatan Cinta dan area sekitar",
          "10.30 - Tiba di dermaga Pulau Tidung",
          "11.00 - Perjalanan menuju pelabuhan kaliadem muara angke"
        ]
      }
    ],
    cancellationPolicy: [
      "Trip ini Minimal Keberangkatan 7 Orang Peserta",
      "Biaya trip tergantung dari jumlah peserta",
      "DP (Down Payment) minimal 50% dan pelunasan wajib dibayarkan pada H-3 sebelum keberangkatan",
      "DP tidak dapat dikembalikan jika ada pembatalan dari peserta, tapi bisa dialihkan untuk peserta pengganti",
      "Trip dapat batal atau berubah jadwal sewaktu-waktu apabila terjadi cuaca buruk dan kejadian-kejadian alam tertentu",
      "Wajib menjaga barang-barang pribadi, dan segala kehilangan bukan menjadi tanggung jawab kami sebagai tour operator",
      "Peserta wajib mematuhi aturan yang berlaku di masing-masing destinasi yang dikunjungi",
      "Mohon kearifan peserta untuk ikut serta dalam menjaga lokasi objek wisata dengan tidak melakukan hal-hal yang bersifat merusak",
      "Peserta dianggap mengerti dan menyetujui semua ketentuan di atas"
    ]
  },
  "geopark-ciletuh": {
    id: "geopark-ciletuh",
    title: "Geopark Ciletuh",
    location: "Sukabumi, Jawa Barat",
    duration: "ONE DAY TRIP",
    groupSize: "Min 7 orang",
    rating: 4.6,
    reviews: 89,
    price: 300000,
    image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=800&h=600&fit=crop&auto=format",
    category: "Alam",
    difficulty: "Mudah",
    description: "Geopark Ciletuh Palabuhanratu adalah contoh cemerlang perpaduan warisan geologi kuno, keanekaragaman hayati dan budaya, serta keterlibatan komunitas. Dengan status internasional dari UNESCO, geopark ini tidak hanya melestarikan kekayaan alam dan budaya, tapi juga mendukung pembangunan lokal melalui wisata berkelanjutan dan edukasi.",
    destinations: [
      "Pantai Palampang",
      "Puncak Darma",
      "Curug Cimarunjung",
      "Curug Cikanteh dan Sodong"
    ],
    highlights: [
      "Formasi geologi unik",
      "Curug Cimarinjung dan Curug Sodong",
      "Pantai Palangpang",
      "Tebing Panenjoan"
    ],
    included: [
      "Transportasi AC PP",
      "Driver",
      "Tol",
      "Parkir",
      "Tiket Puncak Darma",
      "Tiket Cimarunjung",
      "Tiket Curug Cikanteh dan Sodong",
      "Tiket Pantai Palampang",
      "Dokumentasi",
      "Tour Leader",
      "P3K",
      "Asuransi"
    ],
    notIncluded: [
      "Makan dan pengeluaran pribadi",
      "Kebutuhan & obat-obatan pribadi",
      "Tip guide dan crew"
    ],
    departureDates: [
      "JULI: 6, 19",
      "AGUSTUS: 3, 17",
      "SEP: 6, 14, 27",
      "OKT: 11, 26",
      "NOV: 8, 23",
      "DES: 6, 13, 20, 25, 28"
    ],
    meetingPoints: [
      "Tangerang Selatan – BSD Plaza",
      "Jakarta – Plaza Semanggi",
      "Jakarta – Halte Stasiun Cawang Atas",
      "Bekasi – Hotel Amarossa Bekasi",
      "Bogor – Rest area KM 34 Sentul Selatan"
    ],
    itinerary: [
      {
        day: 1,
        title: "Geopark Ciletuh Adventure",
        activities: [
          "02.30 – 05.30 - Meeting point",
          "05.40 - Perjalanan menuju Geopark Ciletuh, Sukabumi",
          "10.00 - Tiba di Puncak Darma, istirahat dan foto-foto",
          "11.00 - Perjalanan menuju Curug Cimarunjung",
          "11.30 - Explore Curug Cimarunjung",
          "12.30 - Perjalanan menuju Curug Cikanteh dan Sodong",
          "13.00 - Sampai dan explore Curug Cikanteh dan makan siang",
          "15.30 - Explore Curug Sodong dan Cikanteh",
          "17.00 - Perjalanan menuju Pantai Palampang",
          "18.30 - Sampai di pantai dan foto-foto",
          "20.00 - Perjalanan menuju meeting point",
          "23.00 - Tiba di meeting point & trip selesai"
        ]
      }
    ],
    cancellationPolicy: [
      "Trip ini Minimal Keberangkatan 7 Orang Peserta",
      "Biaya trip tergantung dari jumlah peserta",
      "DP (Down Payment) minimal 50% dan pelunasan wajib dibayarkan pada H-3 sebelum keberangkatan",
      "DP tidak dapat dikembalikan jika ada pembatalan dari peserta, tapi bisa dialihkan untuk peserta pengganti",
      "Trip dapat batal atau berubah jadwal sewaktu-waktu apabila terjadi cuaca buruk dan kejadian-kejadian alam tertentu",
      "Wajib menjaga barang-barang pribadi, dan segala kehilangan bukan menjadi tanggung jawab kami sebagai tour operator",
      "Peserta wajib mematuhi aturan yang berlaku di masing-masing destinasi yang dikunjungi",
      "Mohon kearifan peserta untuk ikut serta dalam menjaga lokasi objek wisata dengan tidak melakukan hal-hal yang bersifat merusak",
      "Peserta dianggap mengerti dan menyetujui semua ketentuan di atas"
    ]
  },
  "ujung-genteng": {
    id: "ujung-genteng",
    title: "Ujung Genteng",
    location: "Sukabumi, Jawa Barat",
    duration: "2D 1N",
    groupSize: "Min 7 orang",
    rating: 4.5,
    reviews: 73,
    price: 375000,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop&auto=format",
    category: "Pantai",
    difficulty: "Mudah",
    description: "Ujung Genteng adalah kombinasi kekuatan geologi, keindahan alam, konservasi, dan budaya lokal—menjadi 'surga tersembunyi' ideal untuk wisata edukatif, petualangan, dan relaksasi yang jauh dari keramaian urban.",
    destinations: [
      "Curug Cikaso",
      "Pantai Karang Gantungan",
      "Penangkaran Penyu",
      "Pantai Ujung Genteng"
    ],
    highlights: [
      "Pantai dengan ombak besar",
      "Sunset point terbaik",
      "Konservasi penyu",
      "Mercusuar Ujung Genteng"
    ],
    included: [
      "Transportasi AC PP",
      "Driver",
      "Tol",
      "Parkir",
      "Tiket Curug Cikaso",
      "Tiket Pantai Ujung Genteng",
      "Tiket Pantai Karang Gantungan",
      "Penangkaran Penyu",
      "Dokumentasi",
      "Asuransi",
      "Tour Leader",
      "P3K"
    ],
    notIncluded: [
      "Makan dan pengeluaran pribadi",
      "Kebutuhan & obat-obatan pribadi",
      "Tip guide dan crew"
    ],
    departureDates: [
      "JULI: 12-13, 26-27",
      "AGUSTUS: 9-10, 16-17",
      "SEP: 5-6, 13-14, 27-28",
      "OKT: 11-12, 25-26",
      "NOV: 8-9, 22-23",
      "DES: 6-7, 13-14, 20-21, 27-28"
    ],
    meetingPoints: [
      "Tangerang Selatan – BSD Plaza",
      "Jakarta – Plaza Semanggi",
      "Jakarta – Halte Stasiun Cawang Atas",
      "Bekasi – Hotel Amarossa Bekasi",
      "Bogor – Rest area KM 34 Sentul Selatan"
    ],
    itinerary: [
      {
        day: 1,
        title: "Perjalanan ke Ujung Genteng",
        activities: [
          "22.00 - Meeting point",
          "23.00 - Perjalanan menuju Curug Cikaso"
        ]
      },
      {
        day: 2,
        title: "Beach Activities",
        activities: [
          "06.00 - Tiba di area Curug Cikaso",
          "07.00 - Menjelajah Curug Cikaso menggunakan perahu",
          "09.30 - Perjalanan menuju Pantai Karang Gantungan",
          "10.00 - Tiba di Pantai Karang Gantungan, Explore dan hunting foto",
          "12.00 - Perjalanan menuju Penangkaran Penyu",
          "12.30 - Tiba dan explore Penangkaran Penyu, hunting foto",
          "14.30 - Perjalanan menuju Pantai Ujung Genteng",
          "15.00 - Tiba di Pantai Ujung Genteng & Explore",
          "17.00 - Perjalanan ke tempat oleh-oleh",
          "18.00 - Tiba Di Tempat oleh oleh",
          "19.00 - Perjalanan Kembali ke meeting point awal",
          "23.00 - Tiba di meeting point dan trip selesai"
        ]
      }
    ],
    cancellationPolicy: [
      "Trip ini Minimal Keberangkatan 7 Orang Peserta",
      "Biaya trip tergantung dari jumlah peserta",
      "DP (Down Payment) minimal 50% dan pelunasan wajib dibayarkan pada H-3 sebelum keberangkatan",
      "DP tidak dapat dikembalikan jika ada pembatalan dari peserta, tapi bisa dialihkan untuk peserta pengganti",
      "Trip dapat batal atau berubah jadwal sewaktu-waktu apabila terjadi cuaca buruk dan kejadian-kejadian alam tertentu",
      "Wajib menjaga barang-barang pribadi, dan segala kehilangan bukan menjadi tanggung jawab kami sebagai tour operator",
      "Peserta wajib mematuhi aturan yang berlaku di masing-masing destinasi yang dikunjungi",
      "Mohon kearifan peserta untuk ikut serta dalam menjaga lokasi objek wisata dengan tidak melakukan hal-hal yang bersifat merusak",
      "Peserta dianggap mengerti dan menyetujui semua ketentuan di atas"
    ]
  },
  "dieng": {
    id: "dieng",
    title: "Dieng",
    location: "Wonosobo, Jawa Tengah",
    duration: "3D 2N",
    groupSize: "Min 7 orang",
    rating: 4.9,
    reviews: 234,
    price: 775000,
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=800&h=600&fit=crop&auto=format",
    category: "Pegunungan",
    difficulty: "Sedang",
    description: "Dieng adalah perpaduan keajaiban alam, kekayaan budaya, dan geologi unik mulai dari udara sejuk, kawah aktif, hingga situs sejarah dan tradisi adat. Selain populer sebagai tujuan wisata dan fotografi, Dieng juga merupakan pusat penelitian ilmiah dan agrowisata. Kawasan ini cocok untuk keluarga, pecinta alam, fotograf, dan peneliti yang mencari pengalaman luar biasa di atas awan.",
    destinations: [
      "Tuk Bimalukar",
      "Dieng Plateu Theater",
      "Batu Ratapan Angin",
      "Kawah Sikidang",
      "Candi Arjuna"
    ],
    highlights: [
      "Sunrise Bukit Sikunir",
      "Candi Arjuna kompleks",
      "Kawah Sikidang",
      "Telaga Warna dan Pengilon"
    ],
    included: [
      "Transportasi AC PP",
      "Driver, Tol, Parking",
      "Homestay",
      "Makan 4x",
      "Air mineral",
      "Kopi dan teh",
      "Tiket wisata",
      "Perijinan wisata",
      "Asuransi",
      "Dokumentasi",
      "Tour Leader"
    ],
    notIncluded: [
      "Kebutuhan & obat-obatan pribadi",
      "Tip guide dan crew"
    ],
    departureDates: [
      "JULI: 4-6, 11-13, 18-20, 25-27",
      "AGUSTUS: 1-3, 8-10, 15-17, 22-24, 29-31",
      "SEP: 5-7, 12-14, 19-21, 26-28",
      "OKT: 3-5, 10-12, 17-19, 24-26, 31-2 NOV",
      "NOV: 7-9, 14-16, 21-23, 28-30",
      "DES: 5-7, 12-14, 19-21, 26-28"
    ],
    meetingPoints: [
      "Meeting point di Cawang Dewi Sartika (Sebrang Panasonic), Jakarta Pukul 19.00 WIB"
    ],
    itinerary: [
      {
        day: 1,
        title: "Perjalanan menuju Dieng",
        activities: [
          "19.00 - Peserta berkumpul di meeting point",
          "20.00 - Perjalanan menuju Dieng"
        ]
      },
      {
        day: 2,
        title: "Sunrise Sikunir dan Eksplorasi",
        activities: [
          "08.00 - Tiba di Dieng, sarapan, dan perjalanan menuju Tuk Bimalukar",
          "09.00 - Tiba, explore dan hunting foto di Tuk Bimalukar",
          "10.30 - Tiba, explore dan hunting foto di Dieng Plateu Theater dan Batu Ratapan Angin",
          "11.30 - Check in Homestay, istirahat dan makan siang",
          "14.30 - Perjalanan menuju Kawah Sikidang",
          "15.00 - Tiba, explore dan hunting foto di Kawah Sikidang",
          "16.30 - Tiba, explore dan hunting foto di Candi Arjuna dan menikmati sunset",
          "17.30 - Perjalanan menuju tempat oleh-oleh dan wisata belanja",
          "18.30 - Perjalanan kembali ke Homestay",
          "19.30 - Makan malam dan briefing Sunrise",
          "20.30 - Acara Bebas dan Istirahat"
        ]
      },
      {
        day: 3,
        title: "Eksplorasi Terakhir",
        activities: [
          "02.00 - Bangun pagi dan persiapan sunrise ke Bukit Sikunir",
          "02.30 - Perjalanan menuju Bukit Sikunir",
          "04.30 - Tiba di kawasan dan pengarahan untuk nanjak ke Bukit Sikunir",
          "05.00 - Hunting foto, menikmati golden sunrise; negeri di atas awan",
          "07.00 - Turun ke bawah & nikmati jajanan Dieng",
          "08.30 - Kembali ke penginapan untuk sarapan dan persiapan untuk check out",
          "10.00 - Check out dan perjalanan menuju Jakarta",
          "22.00 - Tiba di Jakarta dan trip selesai"
        ]
      }
    ],
    cancellationPolicy: [
      "Trip ini Minimal Keberangkatan 7 Orang Peserta",
      "Biaya trip tergantung dari jumlah peserta",
      "DP (Down Payment) minimal 50% dan pelunasan wajib dibayarkan pada H-3 sebelum keberangkatan",
      "DP tidak dapat dikembalikan jika ada pembatalan dari peserta, tapi bisa dialihkan untuk peserta pengganti",
      "Trip dapat batal atau berubah jadwal sewaktu-waktu apabila terjadi cuaca buruk dan kejadian-kejadian alam tertentu",
      "Wajib menjaga barang-barang pribadi, dan segala kehilangan bukan menjadi tanggung jawab kami sebagai tour operator",
      "Peserta wajib mematuhi aturan yang berlaku di masing-masing destinasi yang dikunjungi",
      "Mohon kearifan peserta untuk ikut serta dalam menjaga lokasi objek wisata dengan tidak melakukan hal-hal yang bersifat merusak",
      "Peserta dianggap mengerti dan menyetujui semua ketentuan di atas"
    ]
  },
  "pulau-peucang": {
    id: "pulau-peucang",
    title: "Pulau Peucang",
    location: "Ujung Kulon, Banten",
    duration: "3D 2N",
    groupSize: "Min 7 orang",
    rating: 4.8,
    reviews: 112,
    price: 775000,
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop&auto=format",
    category: "Alam",
    difficulty: "Sedang",
    description: "Pulau Peucang adalah permata tersembunyi Ujung Kulon: kombinasi pantai karang putih kristal, hutan tropis lebat, dan keanekaragaman satwa liar. Dengan status UNESCO dan konservasi kuat, pulau ini menghadirkan pengalaman alam murni: snorkeling, trekking, wildlife spotting—semuanya dalam suasana damai dan sedikit intervensi manusia. Ideal bagi pecinta alam sejati yang menginginkan petualangan dan edukasi di kawasan terlindung.",
    destinations: [
      "Pohon Kiara",
      "Karang Copong",
      "Snorkeling Di Pulau Peucang"
    ],
    highlights: [
      "Taman Nasional Ujung Kulon",
      "Wildlife watching (rusa, banteng)",
      "Pantai perawan yang eksotis",
      "Snorkeling di perairan jernih"
    ],
    included: [
      "Transportasi AC",
      "Kapal Penjelajah Pulau",
      "Penginapan Barak",
      "Makan 5x",
      "Snack",
      "Air Mineral",
      "Tiket Masuk Wisata",
      "Pelampung",
      "Floties",
      "Tour Guide",
      "Tour Leader",
      "Dokumentasi (GoPro, DSLR, & Drone)",
      "Asuransi"
    ],
    notIncluded: [
      "Kebutuhan dan obat-obatan pribadi",
      "Tip guide dan crew",
      "Canoing Rp 50.000/orang",
      "Alat Snorkeling Rp 50.000/set"
    ],
    departureDates: [
      "JULI: 4-6, 11-13, 18-20, 25-27",
      "AGUSTUS: 1-3, 8-10, 15-17, 22-24, 29-31",
      "SEP: 5-7, 12-14, 19-21, 26-28",
      "OKT: 3-5, 10-12, 17-19, 24-26, 31-2 NOV",
      "NOV: 7-9, 14-16, 21-23, 28-30",
      "DES: 5-7, 12-14, 19-21, 26-28"
    ],
    meetingPoints: [
      "Meeting point di Cawang Dewi Sartika (Sebrang Panasonic), Jakarta Pukul 19.00 WIB"
    ],
    itinerary: [
      {
        day: 1,
        title: "Perjalanan ke Ujung Kulon",
        activities: [
          "20.00 - Meeting point di Cawang Dewi Sartika, Jakarta",
          "21.00 - Perjalanan menuju dermaga Sumur (istirahat)"
        ]
      },
      {
        day: 2,
        title: "Eksplorasi Pulau",
        activities: [
          "07.30 - Check-in Penginapan dan acara bebas (main di pantai)",
          "08.30 - Explore, hunting dan snorkeling di Pulau Peucang",
          "12.30 - Makan siang",
          "13.00 - Acara bebas di Pulau Peucang",
          "16.30 - Menikmati sunset di Pulau Peucang",
          "18.00 - Kembali ke penginapan",
          "20.00 - Makan malam dan acara bebas"
        ]
      },
      {
        day: 3,
        title: "Kembali ke Jakarta",
        activities: [
          "05.00 - Sunrise di dermaga",
          "06.00 - Sarapan dan persiapan check out",
          "08.00 - Perjalanan menuju trekking ke Pohon Kiara dan Karang Copong",
          "12.00 - Makan siang dan persiapan check out",
          "13.00 - Perjalanan menuju dermaga Sumur",
          "15.00 - Sampai Dermaga dan persiapan menuju Jakarta",
          "15.30 - Perjalanan menuju Jakarta dan trip selesai",
          "23.00 - Tiba di Jakarta dan trip selesai"
        ]
      }
    ],
    cancellationPolicy: [
      "Trip ini Minimal Keberangkatan 7 Orang Peserta",
      "Biaya trip tergantung dari jumlah peserta",
      "DP (Down Payment) minimal 50% dan pelunasan wajib dibayarkan pada H-3 sebelum keberangkatan",
      "DP tidak dapat dikembalikan jika ada pembatalan dari peserta, tapi bisa dialihkan untuk peserta pengganti",
      "Trip dapat batal atau berubah jadwal sewaktu-waktu apabila terjadi cuaca buruk dan kejadian-kejadian alam tertentu",
      "Wajib menjaga barang-barang pribadi, dan segala kehilangan bukan menjadi tanggung jawab kami sebagai tour operator",
      "Peserta wajib mematuhi aturan yang berlaku di masing-masing destinasi yang dikunjungi",
      "Mohon kearifan peserta untuk ikut serta dalam menjaga lokasi objek wisata dengan tidak melakukan hal-hal yang bersifat merusak",
      "Peserta dianggap mengerti dan menyetujui semua ketentuan di atas"
    ]
  },
  "pulau-sebesi": {
    id: "pulau-sebesi",
    title: "Pulau Sebesi",
    location: "Lampung Selatan",
    duration: "3D 2N",
    groupSize: "Min 7 orang",
    rating: 4.7,
    reviews: 95,
    price: 775000,
    image: "https://drive.google.com/uc?export=view&id=11ZyMCu7TnJnjNB60nlLZAUrzn0xFvJ2D",
    category: "Pantai",
    difficulty: "Sedang",
    description: "Pulau Sebesi adalah surga alam tersembunyi di selatan Sumatra menggabungkan panorama gunung-karang, hutan tropis, dan laut biru. Pulau ini memadukan keindahan geologi dan ekologi, sarat akan nilai historis pasca-letusan Krakatau. Dengan infrastruktur wisata dan komunitas lokal yang mulai bangkit, Pulau Sebesi berpotensi menjadi ikon wisata sustainable di Indonesia.",
    destinations: [
      "Sabaku Kecil",
      "Snorkeling Di Spot Geligi Dan Cemara",
      "Pulau Umang",
      "Anak Gunung Krakatau"
    ],
    highlights: [
      "Pantai berpasir hitam vulkanik",
      "View Gunung Krakatau",
      "Diving dan snorkeling",
      "Budaya lokal masyarakat pulau"
    ],
    included: [
      "Transportasi AC PP",
      "Kapal Feri PP Merak – Bakauheni",
      "Kapal penjelajah pulau",
      "Homestay",
      "Makan 4x",
      "Air mineral",
      "Tiket masuk wisata",
      "Pelampung",
      "Asuransi",
      "Tour Guide",
      "Tour Leader",
      "Dokumentasi",
      "P3K"
    ],
    notIncluded: [
      "Kebutuhan dan obat-obatan pribadi",
      "Tip guide dan crew",
      "Alat Snorkeling Rp 80.000/set"
    ],
    departureDates: [
      "JULI: 25-27",
      "AGUSTUS: 15-17, 29-31",
      "SEP: 5-7, 26-28",
      "OKT: 24-26",
      "NOV: 28-30",
      "DES: 26-28"
    ],
    meetingPoints: [
      "Meeting point di Cawang Dewi Sartika (Sebrang Panasonic), Jakarta Pukul 19.00 WIB"
    ],
    itinerary: [
      {
        day: 1,
        title: "Perjalanan ke Pulau Sebesi",
        activities: [
          "18.30 - Peserta berkumpul di meeting point",
          "20.00 - Perjalanan menuju Pelabuhan Merak",
          "23.30 - Tiba di Pelabuhan Merak"
        ]
      },
      {
        day: 2,
        title: "Adventure Day",
        activities: [
          "00.00 - Perjalanan menuju Pelabuhan Bakauheni",
          "03.30 - Tiba di Pelabuhan Bakauheni",
          "07.00 - Tiba di Dermaga, bersih-bersih dan persiapan trip",
          "08.00 - Perjalanan menuju Pulau Sebuku Kecil",
          "09.00 - Tiba, explore dan hunting di Pulau Sebuku Kecil",
          "10.00 - Perjalanan menuju spot snorkeling Geligi dan Cemara",
          "11.00 - Tiba, explore dan hunting di Spot Snorkeling",
          "12.00 - Perjalanan menuju Pulau Sebesi",
          "12.30 - Tiba dan check in di homestay",
          "13.00 - Makan siang",
          "15.00 - Perjalanan menuju Pulau Umang",
          "16.00 - Tiba, explore dan hunting di Pulau Umang",
          "17.30 - Perjalanan kembali ke homestay",
          "18.00 - Tiba di homestay dan bersih-bersih",
          "19.00 - Makan malam",
          "20.00 - Acara bebas dan istirahat"
        ]
      },
      {
        day: 3,
        title: "Farewell Sebesi",
        activities: [
          "04.00 - Bangun dan persiapan tracking",
          "05.00 - Perjalanan menuju Anak Gunung Krakatau",
          "07.00 - Tiba dan tracking di Anak Gunung Krakatau",
          "09.00 - Perjalanan menuju Pulau Sebesi",
          "10.00 - Tiba di Pulau Sebesi dan bersih bersih",
          "12.00 - Makan siang dan persiapan checkout",
          "13.00 - Perjalanan menuju Dermaga Canti",
          "14.30 - Tiba di Dermaga Canti",
          "15.00 - Perjalanan menuju Pelabuhan Bakauheni",
          "16.00 - Tiba di Pelabuhan Bakauheni",
          "16.30 - Perjalanan menuju Pelabuhan Merak",
          "20.00 - Tiba di Pelabuhan Merak",
          "23.30 - Tiba di meeting point dan trip selesai"
        ]
      }
    ],
    cancellationPolicy: [
      "Trip ini Minimal Keberangkatan 7 Orang Peserta",
      "Biaya trip tergantung dari jumlah peserta",
      "DP (Down Payment) minimal 50% dan pelunasan wajib dibayarkan pada H-3 sebelum keberangkatan",
      "DP tidak dapat dikembalikan jika ada pembatalan dari peserta, tapi bisa dialihkan untuk peserta pengganti",
      "Trip dapat batal atau berubah jadwal sewaktu-waktu apabila terjadi cuaca buruk dan kejadian-kejadian alam tertentu",
      "Wajib menjaga barang-barang pribadi, dan segala kehilangan bukan menjadi tanggung jawab kami sebagai tour operator",
      "Peserta wajib mematuhi aturan yang berlaku di masing-masing destinasi yang dikunjungi",
      "Mohon kearifan peserta untuk ikut serta dalam menjaga lokasi objek wisata dengan tidak melakukan hal-hal yang bersifat merusak",
      "Peserta dianggap mengerti dan menyetujui semua ketentuan di atas"
    ]
  },
  "pulau-pahawang": {
    id: "pulau-pahawang",
    title: "Pulau Pahawang",
    location: "Pesawaran, Lampung",
    duration: "3D 2N",
    groupSize: "Min 7 orang",
    rating: 4.8,
    reviews: 156,
    price: 775000,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop&auto=format",
    category: "Pantai",
    difficulty: "Sedang",
    description: "Terletak di Teluk Lampung, Kecamatan Punduh Pidada, Kabupaten Pesawaran, Provinsi Lampung. Terbagi menjadi Pahawang Besar (~700–1.084 ha, berpenduduk sekitar 300–400 KK) dan Pahawang Kecil Memiliki pantai pasir putih, hutan mangrove seluas ~30 ha, dan perairan toska jernih dengan terumbu karang sehat serta ratusan spesies ikan, Sangat ideal bagi wisatawan yang ingin merasakan kombinasi keindahan alam, keberlanjutan, budaya lokal, dan pengalaman laut yang autentik.",
    destinations: [
      "Pulau Kelagian Kecil & Besar",
      "Cukuh Bedil & Taman Nemo",
      "Pasir Timbul"
    ],
    highlights: [
      "Terumbu karang yang masih asri",
      "Snorkeling di spot terbaik",
      "Pantai pasir putih",
      "Island hopping"
    ],
    included: [
      "Transportasi AC PP",
      "Kapal Feri PP Merak – Bakauheni",
      "Homestay",
      "Makan 4x",
      "Bakar ikan",
      "Kapal penjelajah pulau",
      "Retribusi wisata",
      "Dokumentasi foto",
      "Asuransi",
      "Tour Guide",
      "Tour Leader"
    ],
    notIncluded: [
      "Alat snorkeling: Rp 90.000/set",
      "Kebutuhan & obat-obatan pribadi",
      "Tip guide dan crew"
    ],
    departureDates: [
      "JULI: 4-6, 11-13, 18-20, 25-27",
      "AGUSTUS: 1-3, 8-10, 15-17, 22-24, 29-31",
      "SEP: 5-7, 12-14, 19-21, 26-28",
      "OKT: 3-5, 10-12, 17-19, 24-26, 31-2 NOV",
      "NOV: 7-9, 14-16, 21-23, 28-30",
      "DES: 5-7, 12-14, 19-21, 26-28"
    ],
    meetingPoints: [
      "Meeting point di Plaza Festival, Jakarta Pukul 19.00 WIB"
    ],
    itinerary: [
      {
        day: 1,
        title: "Journey to Paradise",
        activities: [
          "19.00 - Peserta berkumpul di meeting point"
        ]
      },
      {
        day: 2,
        title: "Full Day Activities",
        activities: [
          "00.00 - Perjalanan menuju Pelabuhan Bakauheni Lampung dengan kapal feri",
          "03.00 - Perjalanan menuju dermaga Ketapang dengan transportasi mobil",
          "06.00 - Sarapan dan persiapan trip (Explore pulau dan snorkeling dengan kapal penjelajah pulau)",
          "08.30 - Tiba di Pulau Kelagian Kecil (foto-foto) dan melanjutkan snorkeling",
          "09.30 - Snorkeling di kawasan Cukuh Bedil dan melanjutkan spot snorkeling ke dua",
          "10.30 - Snorkeling di Taman nemo dan melanjutkan untuk check in penginapan",
          "12.00 - Check in home stay, makan siang, istirahat dan menikmati suasana di kawasan Pulau Pahawang Besar",
          "15.30 - Explore Hunting sunset di Pasir Timbul, Pahawang Kecil",
          "17.00 - Kembali ke penginapan untuk mandi & bersih-bersih",
          "18.00 - Makan malam",
          "20.00 - Menikmati Barbeque ikan bakar dan acara bebas"
        ]
      },
      {
        day: 3,
        title: "Last Paradise Moments",
        activities: [
          "05.00 - Menikmati sunrise dan suasana pagi hari di kawasan Pulau Pahawang Besar",
          "06.00 - Sarapan pagi, lalu persiapan untuk check out dan melanjutkan untuk snorkeling dan jelajah pulau",
          "08.00 - Snorkeling di kawasan transplantasi terumbu karang Gosong Bekri",
          "09.00 - Melanjutkan ke pulau Kelagian Besar untuk berfoto-foto dan bermain banana boat (opsional), lalu melanjutkan ke Dermaga Ketapang",
          "10.30 - Sampai di Dermaga Ketapang untuk mandi, bersih-bersih dan melanjutkan perjalanan dengan menggunakan mobil",
          "12.00 - Menuju ke tempat makan untuk makan siang (exclude)",
          "13.00 - Menuju oleh-oleh khas Lampung dan melanjutkan ke Pelabuhan Bakauheni",
          "16.00 - Tiba di Pelabuhan Bakauheni dan melanjutkan ke Pelabuhan Merak menggunakan kapal Feri",
          "19.00 - Tiba di Pelabuhan Merak, dan melanjutkan perjalanan menuju Jakarta",
          "23.30 - Tiba di Jakarta dan trip selesai"
        ]
      }
    ],
    cancellationPolicy: [
      "Trip ini Minimal Keberangkatan 7 Orang Peserta",
      "Biaya trip tergantung dari jumlah peserta",
      "DP (Down Payment) minimal 50% dan pelunasan wajib dibayarkan pada H-3 sebelum keberangkatan",
      "DP tidak dapat dikembalikan jika ada pembatalan dari peserta, tapi bisa dialihkan untuk peserta pengganti",
      "Trip dapat batal atau berubah jadwal sewaktu-waktu apabila terjadi cuaca buruk dan kejadian-kejadian alam tertentu",
      "Wajib menjaga barang-barang pribadi, dan segala kehilangan bukan menjadi tanggung jawab kami sebagai tour operator",
      "Peserta wajib mematuhi aturan yang berlaku di masing-masing destinasi yang dikunjungi",
      "Mohon kearifan peserta untuk ikut serta dalam menjaga lokasi objek wisata dengan tidak melakukan hal-hal yang bersifat merusak",
      "Peserta dianggap mengerti dan menyetujui semua ketentuan di atas"
    ]
  }
};
