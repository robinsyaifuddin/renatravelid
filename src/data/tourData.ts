export interface Tour {
  id: number;
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  rating: number;
  reviews: number;
  price: string;
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
}

export const tourData: { [key: string]: Tour } = {
  "1": {
    id: 1,
    title: "TWA Papandayan",
    location: "Garut, Jawa Barat",
    duration: "ONE DAY TRIP",
    groupSize: "Min 5 orang",
    rating: 4.8,
    reviews: 142,
    price: "Rp 425.000",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&auto=format",
    category: "Pegunungan",
    difficulty: "Mudah",
    description: "Jelajahi keindahan Taman Wisata Alam Papandayan dengan kawah aktif, mata air panas, dan pemandangan pegunungan yang memukau.",
    highlights: [
      "Kawah Papandayan yang aktif",
      "Mata air panas alami",
      "Hutan edelweis",
      "Sunrise point yang spektakuler"
    ],
    included: [
      "Transportasi AC",
      "Tiket masuk TWA Papandayan",
      "Pemandu wisata berpengalaman",
      "Makan siang",
      "Air mineral"
    ],
    notIncluded: [
      "Pengeluaran pribadi",
      "Tips guide",
      "Asuransi perjalanan"
    ],
    itinerary: [
      {
        day: 1,
        title: "Eksplorasi TWA Papandayan",
        activities: [
          "05.00 - Keberangkatan dari Jakarta",
          "09.00 - Tiba di TWA Papandayan",
          "09.30 - Trekking menuju kawah",
          "12.00 - Makan siang",
          "13.00 - Eksplorasi mata air panas",
          "15.00 - Perjalanan pulang",
          "19.00 - Tiba di Jakarta"
        ]
      }
    ]
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
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop&auto=format",
    category: "Budaya",
    difficulty: "Mudah",
    description: "Rasakan pengalaman unik tinggal bersama masyarakat Baduy dan pelajari tradisi serta budaya yang masih terjaga hingga kini.",
    highlights: [
      "Interaksi dengan masyarakat Baduy",
      "Belajar tradisi dan budaya lokal",
      "Trekking di alam Baduy",
      "Menginap di rumah tradisional"
    ],
    included: [
      "Transportasi lokal",
      "Homestay 1 malam",
      "Makan 3x (lunch, dinner, breakfast)",
      "Guide lokal Baduy",
      "Aktivitas budaya"
    ],
    notIncluded: [
      "Transportasi ke Lebak",
      "Pengeluaran pribadi",
      "Oleh-oleh"
    ],
    itinerary: [
      {
        day: 1,
        title: "Perjalanan ke Baduy",
        activities: [
          "08.00 - Keberangkatan menuju Baduy",
          "12.00 - Makan siang di Rangkasbitung",
          "14.00 - Tiba di pintu masuk Baduy",
          "15.00 - Trekking menuju kampung",
          "17.00 - Check-in homestay",
          "19.00 - Makan malam dan acara budaya"
        ]
      },
      {
        day: 2,
        title: "Eksplorasi Budaya Baduy",
        activities: [
          "06.00 - Sarapan pagi",
          "07.00 - Keliling kampung Baduy",
          "10.00 - Belajar kerajinan tradisional",
          "12.00 - Makan siang",
          "14.00 - Perjalanan pulang",
          "18.00 - Tiba di titik awal"
        ]
      }
    ]
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
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop&auto=format",
    category: "Pantai",
    difficulty: "Mudah",
    description: "Nikmati keindahan Pulau Harapan dengan pantai berpasir putih, air laut jernih, dan aktivitas snorkeling yang menakjubkan.",
    highlights: [
      "Pantai berpasir putih",
      "Snorkeling di spot terbaik",
      "Sunset dan sunrise yang indah",
      "Kuliner seafood segar"
    ],
    included: [
      "Kapal speedboat PP",
      "Penginapan 1 malam",
      "Makan 3x",
      "Alat snorkeling",
      "Tour guide"
    ],
    notIncluded: [
      "Transportasi ke Muara Angke",
      "Pengeluaran pribadi",
      "Tips crew kapal"
    ],
    itinerary: [
      {
        day: 1,
        title: "Perjalanan ke Pulau Harapan",
        activities: [
          "06.00 - Berkumpul di Muara Angke",
          "07.00 - Berangkat dengan speedboat",
          "09.00 - Tiba di Pulau Harapan",
          "10.00 - Check-in penginapan",
          "11.00 - Snorkeling trip",
          "13.00 - Makan siang",
          "15.00 - Free time pantai",
          "18.00 - Sunset viewing",
          "19.30 - BBQ dinner"
        ]
      },
      {
        day: 2,
        title: "Eksplorasi Pulau",
        activities: [
          "05.30 - Sunrise hunting",
          "07.00 - Sarapan",
          "08.00 - Island hopping",
          "12.00 - Makan siang",
          "13.00 - Packing dan check out",
          "14.00 - Perjalanan pulang",
          "16.00 - Tiba di Muara Angke"
        ]
      }
    ]
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
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&auto=format",
    category: "Pantai",
    difficulty: "Mudah",
    description: "Jelajahi Pulau Pramuka, pusat pemerintahan Kepulauan Seribu dengan aktivitas konservasi penyu dan keindahan bawah laut yang memukau.",
    highlights: [
      "Pusat konservasi penyu",
      "Diving dan snorkeling",
      "Mangrove tour",
      "Kuliner khas kepulauan"
    ],
    included: [
      "Kapal speedboat PP",
      "Homestay 1 malam",
      "Makan 3x",
      "Alat snorkeling",
      "Tiket konservasi penyu"
    ],
    notIncluded: [
      "Transportasi ke Muara Angke",
      "Sewa alat diving",
      "Pengeluaran pribadi"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival dan Eksplorasi",
        activities: [
          "06.00 - Berkumpul di Muara Angke",
          "07.00 - Berangkat dengan kapal",
          "09.30 - Tiba di Pulau Pramuka",
          "10.00 - Check-in homestay",
          "11.00 - Kunjungi konservasi penyu",
          "13.00 - Makan siang",
          "14.30 - Snorkeling trip",
          "17.00 - Mangrove tour",
          "19.00 - Makan malam"
        ]
      },
      {
        day: 2,
        title: "Water Activities",
        activities: [
          "06.00 - Sarapan",
          "07.00 - Island hopping",
          "10.00 - Diving/snorkeling",
          "12.00 - Makan siang",
          "13.30 - Packing dan check out",
          "14.30 - Perjalanan pulang",
          "17.00 - Tiba di Muara Angke"
        ]
      }
    ]
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
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop&auto=format",
    category: "Pantai",
    difficulty: "Mudah",
    description: "Rasakan sensasi melompat dari Jembatan Cinta di Pulau Tidung dan nikmati keindahan pantai dengan air laut yang jernih dan terumbu karang yang indah.",
    highlights: [
      "Jembatan Cinta yang ikonik",
      "Pantai dengan air jernih",
      "Spot snorkeling terbaik",
      "Sepeda keliling pulau"
    ],
    included: [
      "Kapal speedboat PP",
      "Penginapan 1 malam",
      "Makan 3x",
      "Sewa sepeda",
      "Alat snorkeling",
      "Guide lokal"
    ],
    notIncluded: [
      "Transportasi ke Muara Angke",
      "Pengeluaran pribadi",
      "Dokumentasi underwater"
    ],
    itinerary: [
      {
        day: 1,
        title: "Petualangan Pulau Tidung",
        activities: [
          "06.00 - Berkumpul di Muara Angke",
          "07.00 - Berangkat dengan speedboat",
          "09.00 - Tiba di Pulau Tidung",
          "09.30 - Keliling pulau dengan sepeda",
          "11.00 - Kunjungi Jembatan Cinta",
          "13.00 - Makan siang",
          "14.30 - Snorkeling trip",
          "17.00 - Free time pantai",
          "19.00 - BBQ dinner di pantai"
        ]
      },
      {
        day: 2,
        title: "Water Sports dan Relax",
        activities: [
          "06.00 - Morning walk di pantai",
          "07.00 - Sarapan",
          "08.00 - Water sports (banana boat, donut boat)",
          "12.00 - Makan siang",
          "13.30 - Packing dan check out",
          "14.30 - Perjalanan pulang",
          "16.30 - Tiba di Muara Angke"
        ]
      }
    ]
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
    image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=800&h=600&fit=crop&auto=format",
    category: "Alam",
    difficulty: "Mudah",
    description: "Jelajahi keajaiban geologi Geopark Ciletuh dengan formasi batuan unik, air terjun spektakuler, dan pemandangan pantai yang menakjubkan.",
    highlights: [
      "Formasi geologi unik",
      "Curug Cimarinjung dan Curug Sodong",
      "Pantai Palangpang",
      "Tebing Panenjoan"
    ],
    included: [
      "Transportasi AC",
      "Tiket masuk geopark",
      "Pemandu geopark",
      "Makan siang",
      "Air mineral"
    ],
    notIncluded: [
      "Pengeluaran pribadi",
      "Tips guide",
      "Oleh-oleh"
    ],
    itinerary: [
      {
        day: 1,
        title: "Geopark Ciletuh Adventure",
        activities: [
          "05.00 - Keberangkatan dari Jakarta",
          "08.30 - Tiba di Geopark Ciletuh",
          "09.00 - Kunjungi Curug Cimarinjung",
          "11.00 - Eksplorasi formasi batuan",
          "12.30 - Makan siang",
          "14.00 - Pantai Palangpang",
          "15.30 - Tebing Panenjoan viewpoint",
          "16.30 - Perjalanan pulang",
          "20.00 - Tiba di Jakarta"
        ]
      }
    ]
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
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop&auto=format",
    category: "Pantai",
    difficulty: "Mudah",
    description: "Nikmati keindahan pantai selatan Jawa di Ujung Genteng dengan ombak yang menantang, sunset spektakuler, dan konservasi penyu.",
    highlights: [
      "Pantai dengan ombak besar",
      "Sunset point terbaik",
      "Konservasi penyu",
      "Mercusuar Ujung Genteng"
    ],
    included: [
      "Transportasi AC",
      "Homestay 1 malam",
      "Makan 3x",
      "Tiket konservasi penyu",
      "Guide lokal"
    ],
    notIncluded: [
      "Pengeluaran pribadi",
      "Aktivitas water sports",
      "Tips guide"
    ],
    itinerary: [
      {
        day: 1,
        title: "Perjalanan ke Ujung Genteng",
        activities: [
          "06.00 - Keberangkatan dari Jakarta",
          "10.00 - Tiba di Ujung Genteng",
          "10.30 - Check-in homestay",
          "11.00 - Kunjungi pantai utama",
          "13.00 - Makan siang",
          "15.00 - Konservasi penyu",
          "17.00 - Sunset di mercusuar",
          "19.00 - Makan malam"
        ]
      },
      {
        day: 2,
        title: "Beach Activities",
        activities: [
          "06.00 - Sunrise hunting",
          "07.00 - Sarapan",
          "08.00 - Beach walk dan fotografi",
          "10.00 - Visit local fisherman village",
          "12.00 - Makan siang",
          "14.00 - Perjalanan pulang",
          "18.00 - Tiba di Jakarta"
        ]
      }
    ]
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
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=800&h=600&fit=crop&auto=format",
    category: "Pegunungan",
    difficulty: "Sedang",
    description: "Rasakan dinginnya udara pegunungan Dieng dengan candi-candi kuno, kawah belerang, dan sunrise dari Bukit Sikunir yang memukau hati.",
    highlights: [
      "Sunrise Bukit Sikunir",
      "Candi Arjuna kompleks",
      "Kawah Sikidang",
      "Telaga Warna dan Pengilon"
    ],
    included: [
      "Transportasi AC",
      "Hotel 2 malam",
      "Makan 6x",
      "Tiket masuk objek wisata",
      "Jeep Sikunir",
      "Guide berpengalaman"
    ],
    notIncluded: [
      "Pengeluaran pribadi",
      "Tips guide dan driver",
      "Jaket tebal (bisa sewa)"
    ],
    itinerary: [
      {
        day: 1,
        title: "Perjalanan menuju Dieng",
        activities: [
          "06.00 - Keberangkatan dari Jakarta",
          "12.00 - Makan siang di Wonosobo",
          "14.00 - Tiba di Dieng",
          "14.30 - Check-in hotel",
          "15.30 - Kunjungi Candi Arjuna",
          "17.00 - Kawah Sikidang",
          "19.00 - Makan malam dan istirahat"
        ]
      },
      {
        day: 2,
        title: "Sunrise Sikunir dan Eksplorasi",
        activities: [
          "03.30 - Persiapan sunrise Sikunir",
          "04.00 - Berangkat dengan jeep",
          "05.30 - Sunrise di Bukit Sikunir",
          "08.00 - Kembali ke hotel, sarapan",
          "10.00 - Telaga Warna dan Pengilon",
          "13.00 - Makan siang",
          "15.00 - Museum Dieng Kailasa",
          "17.00 - Free time",
          "19.00 - Makan malam"
        ]
      },
      {
        day: 3,
        title: "Eksplorasi Terakhir",
        activities: [
          "07.00 - Sarapan dan check out",
          "08.00 - Kawah Candradimuka",
          "10.00 - Batu Ratapan Angin",
          "12.00 - Makan siang",
          "14.00 - Perjalanan pulang",
          "20.00 - Tiba di Jakarta"
        ]
      }
    ]
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
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop&auto=format",
    category: "Alam",
    difficulty: "Sedang",
    description: "Jelajahi surga tersembunyi di Pulau Peucang, Taman Nasional Ujung Kulon dengan satwa liar, pantai perawan, dan keindahan alam yang masih asli.",
    highlights: [
      "Taman Nasional Ujung Kulon",
      "Wildlife watching (rusa, banteng)",
      "Pantai perawan yang eksotis",
      "Snorkeling di perairan jernih"
    ],
    included: [
      "Transportasi darat dan laut",
      "Penginapan 2 malam",
      "Makan 7x",
      "Tiket masuk Taman Nasional",
      "Boat untuk island hopping",
      "Guide ranger"
    ],
    notIncluded: [
      "Pengeluaran pribadi",
      "Alat snorkeling",
      "Tips guide dan crew"
    ],
    itinerary: [
      {
        day: 1,
        title: "Perjalanan ke Ujung Kulon",
        activities: [
          "05.00 - Keberangkatan dari Jakarta",
          "09.00 - Tiba di Pelabuhan Sumur",
          "10.00 - Briefing dan persiapan",
          "11.00 - Perjalanan boat ke Pulau Peucang",
          "13.00 - Tiba dan makan siang",
          "15.00 - Trekking wildlife watching",
          "18.00 - Sunset di pantai",
          "19.30 - Makan malam"
        ]
      },
      {
        day: 2,
        title: "Eksplorasi Pulau",
        activities: [
          "06.00 - Bird watching pagi",
          "07.00 - Sarapan",
          "08.30 - Island hopping",
          "12.00 - Makan siang di pantai",
          "14.00 - Snorkeling dan berenang",
          "16.00 - Jungle trekking",
          "18.30 - Sunset watching",
          "19.30 - BBQ dinner"
        ]
      },
      {
        day: 3,
        title: "Kembali ke Jakarta",
        activities: [
          "06.30 - Sunrise dan morning walk",
          "07.30 - Sarapan dan packing",
          "09.00 - Perjalanan kembali ke Sumur",
          "12.00 - Makan siang di Sumur",
          "14.00 - Perjalanan darat ke Jakarta",
          "19.00 - Tiba di Jakarta"
        ]
      }
    ]
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
    image: "https://drive.google.com/uc?export=view&id=11ZyMCu7TnJnjNB60nlLZAUrzn0xFvJ2D", // Updated with Google Drive main image
    category: "Pantai",
    difficulty: "Sedang",
    description: "Nikmati pesona Pulau Sebesi dengan pantai berpasir hitam vulkanik, air laut jernih, dan pemandangan Gunung Krakatau yang megah.",
    highlights: [
      "Pantai berpasir hitam vulkanik",
      "View Gunung Krakatau",
      "Diving dan snorkeling",
      "Budaya lokal masyarakat pulau"
    ],
    included: [
      "Transportasi darat dan laut",
      "Homestay 2 malam",
      "Makan 7x",
      "Boat untuk aktivitas",
      "Alat snorkeling basic",
      "Guide lokal"
    ],
    notIncluded: [
      "Transportasi ke Lampung",
      "Alat diving lengkap",
      "Pengeluaran pribadi"
    ],
    itinerary: [
      {
        day: 1,
        title: "Perjalanan ke Pulau Sebesi",
        activities: [
          "07.00 - Berkumpul di Pelabuhan Bakauheni",
          "08.00 - Perjalanan boat ke Sebesi",
          "10.30 - Tiba di Pulau Sebesi",
          "11.00 - Check-in homestay",
          "12.00 - Makan siang",
          "14.00 - Keliling pulau dengan perahu",
          "17.00 - Sunset point viewing",
          "19.00 - Makan malam dengan menu lokal"
        ]
      },
      {
        day: 2,
        title: "Adventure Day",
        activities: [
          "06.00 - Sunrise hunting",
          "07.00 - Sarapan",
          "08.30 - Snorkeling trip",
          "12.00 - Makan siang di pantai",
          "14.00 - Hiking ke viewpoint",
          "16.00 - Interact dengan local community",
          "18.00 - Sunset di black sand beach",
          "19.30 - Seafood dinner"
        ]
      },
      {
        day: 3,
        title: "Farewell Sebesi",
        activities: [
          "07.00 - Sarapan dan packing",
          "08.30 - Last minute beach time",
          "10.00 - Perjalanan kembali",
          "12.30 - Tiba di Bakauheni",
          "13.00 - Makan siang",
          "14.30 - Persiapan perjalanan lanjutan"
        ]
      }
    ]
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
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop&auto=format",
    category: "Pantai",
    difficulty: "Sedang",
    description: "Rasakan keindahan Pulau Pahawang dengan terumbu karang yang masih asri, air laut yang jernih, dan aktivitas snorkeling yang tak terlupakan.",
    highlights: [
      "Terumbu karang yang masih asri",
      "Snorkeling di spot terbaik",
      "Pantai pasir putih",
      "Island hopping"
    ],
    included: [
      "Transportasi darat dan laut",
      "Homestay 2 malam",
      "Makan 7x",
      "Boat untuk island hopping",
      "Alat snorkeling",
      "Guide wisata"
    ],
    notIncluded: [
      "Transportasi ke Lampung",
      "Pengeluaran pribadi",
      "Dokumentasi underwater"
    ],
    itinerary: [
      {
        day: 1,
        title: "Journey to Paradise",
        activities: [
          "07.00 - Berkumpul di Pelabuhan Ketapang",
          "08.00 - Berangkat ke Pulau Pahawang",
          "09.30 - Tiba di Pahawang",
          "10.00 - Welcome drink dan briefing",
          "11.00 - Snorkeling trip pertama",
          "13.00 - Makan siang",
          "15.00 - Explore pulau dengan perahu",
          "17.30 - Sunset watching",
          "19.00 - BBQ dinner di pantai"
        ]
      },
      {
        day: 2,
        title: "Full Day Activities",
        activities: [
          "06.00 - Optional sunrise viewing",
          "07.00 - Sarapan",
          "08.30 - Island hopping ke pulau sekitar",
          "12.00 - Lunch di floating restaurant",
          "14.00 - Snorkeling di coral garden",
          "16.00 - Beach games dan relax",
          "18.00 - Sunset dari viewpoint",
          "19.30 - Seafood dinner"
        ]
      },
      {
        day: 3,
        title: "Last Paradise Moments",
        activities: [
          "07.00 - Sarapan dan check out",
          "08.30 - Final snorkeling session",
          "10.30 - Souvenir shopping",
          "11.30 - Perjalanan kembali",
          "13.00 - Tiba di Ketapang",
          "13.30 - Makan siang",
          "15.00 - Persiapan perjalanan lanjutan"
        ]
      }
    ]
  }
};
