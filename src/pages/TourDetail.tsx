import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, MapPin, Calendar, Users, CheckCircle, Phone, MessageCircle, ArrowLeft, Clock, Shield, Award, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import Autoplay from "embla-carousel-autoplay";

const TourDetail = () => {
  const { id: tourId } = useParams();
  const navigate = useNavigate();

  // Complete tour data for all 12 destinations
  const tours = {
    "1": {
      id: 1,
      title: "TWA Papandayan",
      location: "Garut, Jawa Barat",
      duration: "ONE DAY TRIP",
      groupSize: "Min 5 orang",
      rating: 4.8,
      reviews: 142,
      price: "Rp 425.000",
      availablePeriod: "Juli - September",
      availableMonths: ["Juli", "Agustus", "September"],
      minAge: "12 tahun",
      images: [
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop&auto=format"
      ],
      description: "Gunung Papandayan adalah destinasi pendakian ramah pemula yang berlokasi di Garut, Jawa Barat, dengan ketinggian sekitar 2.665 mdpl. Gunung ini dikenal karena jalurnya yang relatif mudah, pemandangan alam yang spektakuler, serta fasilitas yang cocok untuk camping santai, healing trip, maupun edukasi alam.",
      destinations: ["Kawah Putih", "Hutan Mati", "Pondok Saladah"],
      highlights: [
        "Explore Kawah Putih yang menakjubkan",
        "Trekking melalui Hutan Mati yang unik",
        "Menikmati pemandangan dari Pondok Saladah",
        "Danau Biru yang memukau",
        "Jalur pendakian ramah pemula",
        "Healing trip dan edukasi alam"
      ],
      itinerary: [
        {
          day: 1,
          title: "Keberangkatan Malam",
          activities: [
            "21.00 : Meeting Point Peserta Trip Di Plaza Semanggi",
            "22.00 : Keberangkatan Dari Plaza Semanggi",
            "22.30 : Keberangkatan Dari RS UKU Cawang",
            "23.00 : Keberangkatan dari Hotel Ammarossa Bekasi",
            "23.30 : Keberangkatan Dari Pollux Mall Cikarang",
            "23.50 : Keberangkatan Dari depan Indomaret Exit Tol Karawang Barat"
          ]
        },
        {
          day: 2,
          title: "Eksplorasi Papandayan",
          activities: [
            "02.00 : Keberangkatan dari Exit tol cileunyi",
            "04.30 : Tiba Di camp papandayan, sarapan dan persiapan kegiatan",
            "06.00 : Mulai explore Gunung Papandayan (Kawah, Danau Biru, Hutan Mati, Pondok Saladah)",
            "13.30 : Tiba Kembali di Camp Papandayan, Bebersih dan persiapan pulang",
            "15.00 : Perjalanan Pulang menuju meeting point awal"
          ]
        }
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
      meetingPoints: [
        "Plaza Semanggi (Jakarta)",
        "RS Cawang UKI (Jakarta)",
        "Exit Tol Cileunyi (Bandung)",
        "Depan Hotel Ammorosa (Bekasi)",
        "Indomaret Exit Tol Karawang Barat",
        "Depan Pollux Mall (Cikarang)"
      ],
      departureDates: [
        "JULI: 5, 12, 19, 26",
        "AGUSTUS: 2, 9, 16, 23, 30",
        "SEP: 6, 13, 20, 27"
      ],
      cancellationPolicy: [
        "Trip ini Minimal Keberangkatan 5 Orang Peserta",
        "Biaya trip tergantung dari jumlah peserta",
        "DP (Down Payment) minimal 50% dan pelunasan wajib H-3 sebelum keberangkatan",
        "DP tidak dapat dikembalikan jika ada pembatalan dari peserta, tapi bisa dialihkan",
        "Trip dapat batal atau berubah jadwal karena cuaca buruk",
        "Wajib menjaga barang-barang pribadi",
        "Peserta wajib mematuhi aturan destinasi",
        "Menjaga lokasi objek wisata"
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
      availablePeriod: "Juni - Agustus",
      availableMonths: ["Juni", "Juli", "Agustus"],
      minAge: "10 tahun",
      images: [
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop&auto=format"
      ],
      description: "Wisuba Baduy merupakan destinasi wisata budaya yang berlokasi di wilayah Baduy, Kabupaten Lebak, Banten. Tempat ini mengusung konsep wisata edukatif berbasis budaya lokal yang mengangkat kehidupan masyarakat Suku Baduy sebagai inti daya tariknya. Aktivitas yang umum dilakukan antara lain jelajah kampung adat, upacara budaya simbolik, workshop kerajinan tradisional, hingga sesi interaksi langsung dengan warga lokal.",
      destinations: ["Baduy Luar", "Baduy Dalam"],
      highlights: [
        "Jelajah kampung adat Baduy Luar dan Dalam",
        "Interaksi langsung dengan warga lokal",
        "Trekking jembatan akar yang unik",
        "Workshop kerajinan tradisional",
        "Diskusi kehidupan Suku Baduy",
        "Pengalaman menginap di homestay lokal"
      ],
      itinerary: [
        {
          day: 1,
          title: "Perjalanan ke Baduy",
          activities: [
            "07.00: Meeting Point Peserta Trip Di Pintu Keluar ST. RangkasBitung",
            "08.00: Keberangkatan Dari ST. Rangkasbitung menuju ke terminal Ciboleger",
            "09.15 : Sampai di Terminal Ciboleger & Persiapan Trekking menuju ke baduy luar",
            "09.30 : Trekking menuju baduy luar & jembatan akar",
            "11.30 : Sampai di Jembatan Akar & ishoma",
            "12.30 : Trekking menuju Baduy Dalam",
            "15.00 : Sampai di Homestay Lokal & istirahat",
            "19.00 : Makan malam dan makrab diskusi kehidupan wisuba baduy Dalam"
          ]
        },
        {
          day: 2,
          title: "Eksplorasi dan Kembali",
          activities: [
            "05.00 : Bangun, sholat dan menikmati hawa pagi baduy dalam",
            "07.00 : Sarapan pagi dan dipandu leader melihat perkampungan baduy dalam",
            "10.00 : Trekking dari baduy dalam menuju terminal Ciboleger",
            "14.00 : Tiba Di terminal Ciboleger, istirahat dan bersih bersih",
            "15.00 : Perjalanan menuju ST. RangkasBitung menggunakan ELF"
          ]
        }
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
      meetingPoints: ["ST RangkasBitung"],
      departureDates: [
        "JUNI: 21, 28",
        "JULI: 5, 12, 19, 26",
        "AGUSTUS: 2, 9, 16, 23, 30"
      ],
      cancellationPolicy: [
        "Trip ini Minimal Keberangkatan 7 Orang Peserta",
        "Biaya trip tergantung dari jumlah peserta",
        "DP (Down Payment) minimal 50% dan pelunasan wajib H-3 sebelum keberangkatan",
        "DP tidak dapat dikembalikan jika ada pembatalan dari peserta, tapi bisa dialihkan",
        "Trip dapat batal atau berubah jadwal karena cuaca buruk",
        "Wajib menjaga barang-barang pribadi",
        "Peserta wajib mematuhi aturan destinasi",
        "Menjaga lokasi objek wisata"
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
      availablePeriod: "Juli - Desember",
      availableMonths: ["Juli", "Agustus", "September", "Oktober", "November", "Desember"],
      minAge: "8 tahun",
      images: [
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop&auto=format"
      ],
      description: "Pulau Harapan adalah kombinasi unik antara destinasi wisata bahari, pusat konservasi lingkungan, dan komunitas lokal yang ramah. Menawarkan kemudahan akses dari Jakarta, suasana alam yang tenang, serta aktivitas edukatif, konon pulau ini menjadi 'pulau harapan' bagi manusia dan alam di tengah Kepulauan Seribu.",
      destinations: ["Pulau Macan", "Pulau Dolphin", "Sunset di Pulau Bulat"],
      highlights: [
        "Snorkeling di Pulau Macan dengan terumbu karang indah",
        "Wisata ke Pulau Dolphin yang eksotis",
        "Sunset viewing di Pulau Bulat yang romantis",  
        "Explore Taman Mangrove dan Penangkaran Penyu",
        "BBQ ikan bakar di tepi pantai",
        "Sunrise di Pulau Harapan yang menakjubkan"
      ],
      itinerary: [
        {
          day: 1,
          title: "Perjalanan dan Island Hopping",
          activities: [
            "06.00 : Peserta berkumpul di Pelabuhan Kali Adem, Muara Angke",
            "07.00 : Perjalanan ke Pulau Harapan",
            "11.00 : Tiba di Pulau Harapan, check-in Homestay; istirahat, makan siang",
            "13.00 : Snorkeling di Pulau Macan atau pulau putri, wisata ke pulau Dolphin, sunset di Pulau Bulat",
            "17.00 : Kembali ke Pulau Harapan untuk mandi dan bersih-bersih",
            "19.00 : Makan malam dan bakar ikan acara bebas"
          ]
        },
        {
          day: 2,
          title: "Eksplorasi dan Kembali",
          activities: [
            "05.30 : Menikmati Sunrise di Pulau Harapan",
            "07.00 : Mandi, coffee break, packing untuk persiapan kembali ke Jakarta",
            "08.00 : Check out homestay",
            "09.00 : Explore Taman Mangrove & Penangkaran Penyu",
            "10.30 : Tiba di dermaga Pulau Harapan",
            "11.00 : Perjalanan menuju pelabuhan kaliadem muara angke"
          ]
        }
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
        "Kebutuhan dan obat-obatan pribadi",
        "Tip guide & crew"
      ],
      meetingPoints: ["Pelabuhan Kaliadem Muara Angke - Jakarta, Pukul 06.00 WIB"],
      departureDates: [
        "JULI: 5-6, 12-13, 19-20, 26-27",
        "AGUSTUS: 2-3, 9-10, 16-17, 23-24, 30-31",
        "SEP: 6-7, 13-14, 20-21, 27-28",
        "OKT: 4-5, 11-12, 18-19, 25-26",
        "NOV: 1-2, 8-9, 15-16, 22-23, 29-30",
        "DES: 3-4, 10-11, 17-18, 24-25, 31-1"
      ],
      cancellationPolicy: [
        "Trip ini Minimal Keberangkatan 7 Orang Peserta",
        "Biaya trip tergantung dari jumlah peserta",
        "DP (Down Payment) minimal 50% dan pelunasan wajib H-3 sebelum keberangkatan",
        "DP tidak dapat dikembalikan jika ada pembatalan dari peserta, tapi bisa dialihkan",
        "Trip dapat batal atau berubah jadwal karena cuaca buruk",
        "Wajib menjaga barang-barang pribadi",
        "Peserta wajib mematuhi aturan destinasi",
        "Menjaga lokasi objek wisata"
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
      availablePeriod: "Juli - Desember",
      availableMonths: ["Juli", "Agustus", "September", "Oktober", "November", "Desember"],
      minAge: "8 tahun",
      images: [
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop&auto=format"
      ],
      description: "Pulau Pramuka adalah pulau berpenduduk dan sekaligus pusat administratif Kabupaten Kepulauan Seribu di utara Jakarta. Luasnya sekitar 16 ha dan dihuni lebih dari 2.000 orang dari etnis Betawi, Bugis, Banten, Jawa, Madura, dan Minangkabau",
      destinations: ["Penangkaran penyu & Taman Nasional", "Pulau air, pulau gosong petrick dan pulau semak daun", "Snorkeling Di spot Soft Coral"],
      highlights: [
        "Penangkaran penyu dan edukasi konservasi",
        "Explore Taman Nasional Kepulauan Seribu",
        "Island hopping ke pulau air, gosong petrick, semak daun",
        "Snorkeling di spot soft coral yang indah",
        "BBQ ikan bakar dengan suasana pantai",
        "Sunrise dan sunset yang memukau"
      ],
      itinerary: [
        {
          day: 1,
          title: "Perjalanan dan Snorkeling",
          activities: [
            "06.00 : Peserta berkumpul di Pelabuhan Kali Adem, Muara Angke",
            "07.00 : Perjalanan ke Pulau Pramuka",
            "11.00 : Tiba di Pulau Pramuka, check-in Homestay; istirahat, makan siang",
            "13.00 : Snorkeling di spot coral, Wisata ke pulau air, pulau gosong petrick dan pulau semak daun",
            "17.00 : Kembali ke Pulau Pramuka untuk mandi dan bersih-bersih",
            "19.00 : Makan malam dan bakar ikan acara bebas"
          ]
        },
        {
          day: 2,
          title: "Konservasi dan Kembali",
          activities: [
            "05.30 : Menikmati Sunrise di Pulau Pramuka",
            "07.00 : Mandi, coffee break, packing untuk persiapan kembali ke Jakarta",
            "08.00 : Check out homestay",
            "09.00 : Explore Taman Nasional & Penangkaran Penyu",
            "10.30 : Tiba di dermaga Pulau Pramuka",
            "11.00 : Perjalanan menuju pelabuhan kaliadem muara angke"
          ]
        }
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
        "Kebutuhan dan obat-obatan pribadi",
        "Tip guide & crew"
      ],
      meetingPoints: ["Pelabuhan Kaliadem Muara Angke - Jakarta, Pukul 06.00 WIB"],
      departureDates: [
        "JULI: 5-6, 12-13, 19-20, 26-27",
        "AGUSTUS: 2-3, 9-10, 16-17, 23-24, 30-31",
        "SEP: 6-7, 13-14, 20-21, 27-28",
        "OKT: 4-5, 11-12, 18-19, 25-26",
        "NOV: 1-2, 8-9, 15-16, 22-23, 29-30",
        "DES: 3-4, 10-11, 17-18, 24-25, 31-1"
      ],
      cancellationPolicy: [
        "Trip ini Minimal Keberangkatan 7 Orang Peserta",
        "Biaya trip tergantung dari jumlah peserta",
        "DP (Down Payment) minimal 50% dan pelunasan wajib H-3 sebelum keberangkatan",
        "DP tidak dapat dikembalikan jika ada pembatalan dari peserta, tapi bisa dialihkan",
        "Trip dapat batal atau berubah jadwal karena cuaca buruk",
        "Wajib menjaga barang-barang pribadi",
        "Peserta wajib mematuhi aturan destinasi",
        "Menjaga lokasi objek wisata"
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
      availablePeriod: "Juli - Desember",
      availableMonths: ["Juli", "Agustus", "September", "Oktober", "November", "Desember"],
      minAge: "10 tahun",
      images: [
        "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&auto=format",
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop&auto=format"
      ],
      description: "Dieng adalah perpaduan keajaiban alam, kekayaan budaya, dan geologi unik mulai dari udara sejuk, kawah aktif, hingga situs sejarah dan tradisi adat. Selain populer sebagai tujuan wisata dan fotografi, Dieng juga merupakan pusat penelitian ilmiah dan agrowisata. Kawasan ini cocok untuk keluarga, pecinta alam, fotograf, dan peneliti yang mencari pengalaman luar biasa di atas awan.",
      destinations: ["Tuk Bimalukar", "Dieng Plateu Theater", "Batu Ratapan Angin", "Kawah Sikidang", "Candi Arjuna"],
      highlights: [
        "Golden sunrise di Bukit Sikunir - negeri di atas awan",
        "Explore Kawah Sikidang yang aktif dan menakjubkan", 
        "Wisata sejarah di Candi Arjuna",
        "Foto hunting di Tuk Bimalukar dan Dieng Plateu Theater",
        "Batu Ratapan Angin dengan pemandangan spektakuler",
        "Pengalaman menginap di homestay lokal Dieng"
      ],
      itinerary: [
        {
          day: 1,
          title: "Keberangkatan",
          activities: [
            "19.00 : Peserta berkumpul di meeting point",
            "20.00 : Perjalanan menuju Dieng"
          ]
        },
        {
          day: 2,
          title: "Eksplorasi Dieng",
          activities: [
            "08.00 : Tiba di Dieng, sarapan, dan perjalanan menuju Tuk Bimalukar",
            "09.00 : Tiba, explore dan hunting foto di Tuk Bimalukar",
            "10.30 : Explore Dieng Plateu Theater dan Batu Ratapan Angin",
            "11.30 : Check in Homestay, istirahat dan makan siang",
            "14.30 : Perjalanan menuju Kawah Sikidang",
            "15.00 : Explore dan hunting foto di Kawah Sikidang",
            "16.30 : Explore Candi Arjuna dan menikmati sunset",
            "17.30 : Wisata belanja oleh-oleh",
            "19.30 : Makan malam dan briefing Sunrise",
            "20.30 : Acara Bebas dan Istirahat"
          ]
        },
        {
          day: 3,
          title: "Sunrise dan Kembali",
          activities: [
            "02.00 : Bangun pagi dan persiapan sunrise ke Bukit Sikunir",
            "02.30 : Perjalanan menuju Bukit Sikunir",
            "04.30 : Pengarahan untuk nanjak ke Bukit Sikunir",
            "05.00 : Hunting foto, menikmati golden sunrise; negeri di atas awan",
            "07.00 : Turun ke bawah & nikmati jajanan Dieng",
            "08.30 : Kembali ke penginapan untuk sarapan dan check out",
            "10.00 : Check out dan perjalanan menuju Jakarta",
            "22.00 : Tiba di Jakarta dan trip selesai"
          ]
        }
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
      meetingPoints: ["Meeting point di Cawang Dewi Sartika (Sebrang Panasonic), Jakarta - Pukul 19.00 WIB"],
      departureDates: [
        "JULI: 4-6, 11-13, 18-20, 25-27",
        "AGUSTUS: 1-3, 8-10, 15-17, 22-24, 29-31",
        "SEP: 5-7, 12-14, 19-21, 26-28",
        "OKT: 3-5, 10-12, 17-19, 24-26, 31-2 NOV",
        "NOV: 7-9, 14-16, 21-23, 28-30",
        "DES: 5-7, 12-14, 19-21, 26-28"
      ],
      cancellationPolicy: [
        "Trip ini Minimal Keberangkatan 7 Orang Peserta",
        "Biaya trip tergantung dari jumlah peserta",
        "DP (Down Payment) minimal 50% dan pelunasan wajib H-3 sebelum keberangkatan",
        "DP tidak dapat dikembalikan jika ada pembatalan dari peserta, tapi bisa dialihkan",
        "Trip dapat batal atau berubah jadwal karena cuaca buruk",
        "Wajib menjaga barang-barang pribadi",
        "Peserta wajib mematuhi aturan destinasi",
        "Menjaga lokasi objek wisata"
      ]
    }
  };

  const tour = tours[tourId as keyof typeof tours] || tours["1"];
  const [api, setApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    if (!api) {
      return
    }
    
    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap())
    }
    
    api.on("select", onSelect)
    onSelect()
    
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  const handleThumbnailClick = (index: number) => {
    if (!api) return;
    api.scrollTo(index);
  };

  const handleBookNow = () => {
    navigate(`/booking/${tourId}`);
  };

  // Function to check if date is available for this tour
  const isDateAvailable = (date: Date) => {
    const month = format(date, "MMMM", { locale: id });
    const monthName = month.charAt(0).toUpperCase() + month.slice(1);
    return tour.availableMonths?.includes(monthName) || false;
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-emerald-600">Beranda</Link>
            <span className="text-gray-400">/</span>
            <Link to="/tour" className="text-gray-600 hover:text-emerald-600">Tour</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800 font-medium">{tour.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Link to="/tour" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Daftar Tour
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
               <Carousel
                setApi={setApi}
                plugins={[
                  Autoplay({
                    delay: 3000,
                    stopOnInteraction: true,
                  }),
                ]}
                className="w-full relative"
              >
                <CarouselContent>
                  {tour.images?.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video rounded-xl overflow-hidden">
                        <img
                          src={image}
                          alt={`${tour.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 bg-white/50 hover:bg-white/80 text-gray-800 border-none" />
                <CarouselNext className="absolute right-4 bg-white/50 hover:bg-white/80 text-gray-800 border-none" />
              </Carousel>

              <div className="grid grid-cols-4 gap-4">
                {tour.images?.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`aspect-video rounded-lg overflow-hidden ring-2 transition 
                      ${selectedIndex === index
                        ? 'ring-emerald-500'
                        : 'ring-transparent hover:ring-emerald-200'}
                    `}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <img
                      src={image}
                      alt={`${tour.title} ${index + 1}`}
                      className={`w-full h-full object-cover transition-transform duration-300 
                        ${selectedIndex === index ? 'scale-105' : 'hover:scale-105'}`
                      }
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Tour Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{tour.title}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-emerald-500" />
                    <span className="text-gray-600">{tour.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(tour.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm font-medium ml-1">{tour.rating}</span>
                    <span className="text-gray-500 text-sm">({tour.reviews} ulasan)</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-6 h-6 text-emerald-500" />
                  <div>
                    <div className="text-sm text-gray-600">Durasi</div>
                    <div className="font-semibold">{tour.duration}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Users className="w-6 h-6 text-emerald-500" />
                  <div>
                    <div className="text-sm text-gray-600">Grup Size</div>
                    <div className="font-semibold">{tour.groupSize}</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-b border-gray-200 py-6">
                <div className="text-center">
                  <span className="text-3xl font-bold text-emerald-600">{tour.price}</span>
                  <span className="text-gray-600 ml-2">per orang</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={handleBookNow} 
                  className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-4 text-lg font-semibold hover:from-teal-600 hover:to-emerald-700"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Pesan Sekarang
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-emerald-200 text-emerald-600 py-4 text-lg font-semibold hover:bg-emerald-50"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Konsultasi Gratis
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <Shield className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">Terpercaya</div>
                </div>
                <div className="p-4">
                  <Award className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">Berpengalaman</div>
                </div>
                <div className="p-4">
                  <Clock className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">24/7 Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Period, Age & Calendar Section */}
      <section className="py-12 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Informasi Tour & Jadwal</h2>
              <p className="text-lg text-gray-600">Periode ketersediaan dan informasi penting untuk trip ini</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Period Info */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6">
                  <div className="flex items-center space-x-3 text-white">
                    <Calendar className="w-8 h-8" />
                    <div>
                      <h3 className="text-xl font-bold">Periode Tour</h3>
                      <p className="text-emerald-100">Waktu tersedia</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600 mb-2">{tour.availablePeriod}</div>
                    <p className="text-gray-600 mb-4">Tour tersedia pada bulan-bulan ini</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {tour.availableMonths?.slice(0, 4).map((month) => (
                        <span key={month} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                          {month}
                        </span>
                      ))}
                      {(tour.availableMonths?.length || 0) > 4 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                          +{(tour.availableMonths?.length || 0) - 4} lainnya
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Age Info */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-teal-600 to-emerald-600 p-6">
                  <div className="flex items-center space-x-3 text-white">
                    <Users className="w-8 h-8" />
                    <div>
                      <h3 className="text-xl font-bold">Usia Minimal</h3>
                      <p className="text-teal-100">Persyaratan usia</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600 mb-2">{tour.minAge}</div>
                    <p className="text-gray-600 mb-4">Usia minimum peserta</p>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <p className="text-sm text-amber-700">
                        <AlertTriangle className="w-4 h-4 inline mr-1" />
                        Anak di bawah 10 tahun wajib didampingi
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Group Size */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-6">
                  <div className="flex items-center space-x-3 text-white">
                    <Users className="w-8 h-8" />
                    <div>
                      <h3 className="text-xl font-bold">Ukuran Grup</h3>
                      <p className="text-blue-100">Jumlah peserta</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{tour.groupSize}</div>
                    <p className="text-gray-600 mb-4">Jumlah minimal peserta</p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-sm text-green-700">
                        <CheckCircle className="w-4 h-4 inline mr-1" />
                        Grup terorganisir untuk pengalaman optimal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tour Calendar */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6">
                <div className="flex items-center space-x-3 text-white">
                  <Calendar className="w-8 h-8" />
                  <div>
                    <h3 className="text-2xl font-bold">Kalender Tour</h3>
                    <p className="text-emerald-100">Pilih tanggal keberangkatan yang sesuai</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Pilih Tanggal Tour</h4>
                    <Popover open={showCalendar} onOpenChange={setShowCalendar}>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal h-14 text-lg border-2 border-emerald-200 hover:border-emerald-300">
                          <Calendar className="mr-3 h-5 w-5 text-emerald-500" />
                          {selectedDate ? format(selectedDate, "dd MMMM yyyy", { locale: id }) : "Pilih tanggal tour"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => {
                            return date < new Date() || !isDateAvailable(date);
                          }}
                          initialFocus
                          className="pointer-events-auto"
                        />
                        <div className="p-4 border-t bg-gray-50">
                          <p className="text-sm text-gray-600 mb-2">
                            <Calendar className="w-4 h-4 inline mr-1" />
                            Tour tersedia: <span className="font-medium text-emerald-600">{tour.availablePeriod}</span>
                          </p>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Tanggal Keberangkatan</h4>
                    <div className="space-y-2">
                      {tour.departureDates?.map((dateRange, index) => (
                        <div key={index} className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                          <p className="text-sm text-emerald-700 font-medium">{dateRange}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      onClick={handleBookNow}
                      className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 text-lg font-semibold hover:from-emerald-700 hover:to-teal-700"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Pesan Tour Ini
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full sm:w-auto border-emerald-200 text-emerald-600 px-8 py-3 text-lg font-semibold hover:bg-emerald-50"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Tanya Ketersediaan
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Description */}
              <div className="p-4 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Deskripsi Tour</h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{tour.description}</p>
                
                {tour.destinations && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Destinasi Utama</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {tour.destinations.map((dest, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          <span className="text-gray-700">{dest}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Highlights */}
              <div className="p-4 md:p-8 bg-gray-50">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Highlight Tour</h2>
                <div className="grid grid-cols-1 gap-3 md:gap-4">
                  {tour.highlights?.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm md:text-base leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="p-4 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Itinerary Lengkap</h2>
                <div className="space-y-4 md:space-y-6">
                  {tour.itinerary?.map((day, index) => (
                    <div key={index} className="flex space-x-3 md:space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span className="text-emerald-600 font-bold text-sm md:text-base">{day.day}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Hari {day.day}: {day.title}</h3>
                        <ul className="space-y-1 md:space-y-2">
                          {day.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="text-gray-600 text-xs md:text-sm flex items-start space-x-2">
                              <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-emerald-500 rounded-full flex-shrink-0 mt-1.5 md:mt-2"></div>
                              <span className="leading-relaxed">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Include/Exclude */}
              <div className="p-4 md:p-8 bg-gray-50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-4">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 flex items-center">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 mr-2" />
                      Termasuk dalam Paket
                    </h3>
                    <div className="space-y-2 md:space-y-3">
                      {tour.included?.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-xs md:text-sm leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 flex items-center">
                      <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-red-500 mr-2" />
                      Tidak Termasuk
                    </h3>
                    <div className="space-y-2 md:space-y-3">
                      {tour.notIncluded?.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-red-300 rounded-full flex-shrink-0 mt-0.5"></div>
                          <span className="text-gray-700 text-xs md:text-sm leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Meeting Points & Cancellation Policy */}
              <div className="p-4 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-4">
                    <h3 className="text-base md:text-lg font-semibold text-gray-800">Meeting Points</h3>
                    <div className="space-y-2 md:space-y-3">
                      {tour.meetingPoints?.map((point, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <MapPin className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-xs md:text-sm leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-base md:text-lg font-semibold text-gray-800">Kebijakan Pembatalan</h3>
                    <div className="space-y-2 md:space-y-3">
                      {tour.cancellationPolicy?.slice(0, 4).map((policy, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Shield className="w-4 h-4 md:w-5 md:h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-xs md:text-sm leading-relaxed">{policy}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Memulai Petualangan?</h2>
          <p className="text-xl mb-8 opacity-90">Jangan lewatkan kesempatan untuk menjelajahi {tour.title}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              onClick={handleBookNow}
              className="w-full bg-white text-emerald-600 py-4 text-lg font-semibold hover:bg-gray-100"
            >
              Pesan Sekarang
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-white text-white py-4 text-lg font-semibold hover:bg-white hover:text-emerald-600"
            >
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TourDetail;
