import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, Eye, MessageCircle, ArrowLeft, Share2, Heart, Bookmark, Facebook, Twitter, Link2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [newComment, setNewComment] = useState('');

  // Sample blog data - in real app, this would come from API
  const blogPosts = [
    // Artikel baru yang ditambahkan dengan konten lengkap
    {
      id: 14,
      title: "Yogyakarta: Kota Istimewa dengan Jutaan Cerita",
      excerpt: "Yogyakarta atau Jogja bukan sekadar kota tujuan wisata – ia adalah kota dengan jiwa, tempat di mana warisan budaya, kearifan lokal, dan keindahan alam berpadu secara harmonis.",
      category: "destinations",
      author: "RENATRAVEL.ID",
      date: "29 Juni 2025",
      readTime: "10 menit",
      views: 892,
      comments: 34,
      likes: 156,
      image: "/placeholder.svg",
      featured: true,
      content: `
        <p>Yogyakarta atau Jogja bukan sekadar kota tujuan wisata – ia adalah kota dengan jiwa, tempat di mana warisan budaya, kearifan lokal, dan keindahan alam berpadu secara harmonis. Setiap sudut Jogja menyimpan cerita, dari jejak sejarah kerajaan hingga denyut kehidupan modern yang bersahabat.</p>
        
        <p>Tak heran jika Jogja dijuluki sebagai "Kota Istimewa". Kota ini selalu berhasil menarik hati siapa saja yang berkunjung. Baik kamu pecinta budaya, pemburu alam, penikmat kuliner, hingga penjelajah jalanan – Jogja punya tempat untuk semua.</p>
        
        <h3>Mengapa Harus Liburan ke Yogyakarta?</h3>
        <p>Liburan ke Jogja bukan hanya tentang destinasi, tapi juga tentang pengalaman dan suasana. Jogja menawarkan:</p>
        <ul>
          <li>Keramahan warga lokal yang membuatmu serasa di rumah sendiri.</li>
          <li>Akses mudah dan murah untuk menjelajahi berbagai tempat.</li>
          <li>Kaya budaya dan sejarah, cocok untuk wisata edukatif.</li>
          <li>Kuliner khas yang menggugah selera, dari yang manis hingga pedas menggoda.</li>
          <li>Pilihan wisata lengkap: pegunungan, pantai, candi, hingga wisata kota.</li>
        </ul>
        
        <h3>Destinasi Wajib Saat di Jogja</h3>
        
        <h4>1. Candi Prambanan</h4>
        <p>Candi Hindu terbesar di Indonesia ini memukau dengan arsitektur tinggi menjulang dan relief yang menceritakan kisah Ramayana. Saat malam hari, kamu juga bisa menyaksikan pertunjukan Ramayana Ballet di area terbuka dengan latar candi yang megah.</p>
        
        <h4>2. Keraton Yogyakarta & Taman Sari</h4>
        <p>Keraton adalah simbol kebesaran budaya Jawa. Di sini kamu bisa melihat kehidupan bangsawan secara langsung. Tak jauh dari situ, Taman Sari hadir sebagai bekas taman kerajaan yang memiliki lorong bawah tanah dan kolam pemandian eksotik.</p>
        
        <h4>3. Malioboro</h4>
        <p>Surga bagi pemburu oleh-oleh dan penikmat suasana malam Jogja. Jalan Malioboro selalu hidup dengan deretan toko, pedagang kaki lima, seniman jalanan, hingga aroma makanan tradisional yang menggoda.</p>
        
        <h4>4. Pantai-Pantai di Gunungkidul</h4>
        <p>Jogja juga punya garis pantai yang indah, terutama di wilayah Gunungkidul. Beberapa pantai favorit seperti:</p>
        <ul>
          <li>Pantai Indrayanti – dengan pasir putih bersih dan ombak tenang.</li>
          <li>Pantai Timang – terkenal dengan gondola tradisional yang ekstrem.</li>
          <li>Pantai Pok Tunggal – spot favorit untuk melihat sunset.</li>
        </ul>
        
        <h3>Surga Kuliner Jogja</h3>
        <p>Jogja tidak lengkap tanpa membicarakan makanannya. Kota ini kaya dengan kuliner khas yang menggoyang lidah:</p>
        <ul>
          <li>Gudeg – makanan khas Jogja berbahan nangka muda, disajikan dengan krecek dan telur.</li>
          <li>Sate Klathak – sate kambing dengan tusukan besi dan bumbu minimalis, khas dari Imogiri.</li>
          <li>Bakpia Pathok – camilan isi kacang hijau yang pas untuk oleh-oleh.</li>
          <li>Angkringan – warung sederhana yang menjual nasi kucing, gorengan, kopi jos, dan jadi tempat nongkrong anak muda hingga seniman.</li>
        </ul>
        
        <p>Jogja bukan kota yang bisa selesai dijelajahi dalam satu kali kunjungan. Ia menyimpan magnet yang selalu menarik kita kembali. Dari cerita sejarah yang membekas, senyum penduduk yang hangat, hingga suasana malam yang syahdu – Jogja selalu meninggalkan kesan mendalam di hati setiap pelancong.</p>
      `
    },
    {
      id: 15,
      title: "Mengenal Budaya Suku Baduy: Warisan Leluhur di Tengah Arus Modernisasi",
      excerpt: "Di tengah hiruk-pikuk dunia modern yang serba digital, masih ada satu kelompok masyarakat di Indonesia yang tetap setia menjaga warisan budaya leluhurnya tanpa terpengaruh oleh perubahan zaman.",
      category: "culture",
      author: "RENATRAVEL.ID",
      date: "29 Juni 2025",
      readTime: "8 menit",
      views: 567,
      comments: 28,
      likes: 89,
      image: "/placeholder.svg",
      featured: false,
      content: `
        <p>Di tengah hiruk-pikuk dunia modern yang serba digital, masih ada satu kelompok masyarakat di Indonesia yang tetap setia menjaga warisan budaya leluhurnya tanpa terpengaruh oleh perubahan zaman. Mereka adalah Suku Baduy, sebuah komunitas adat yang tinggal di wilayah pegunungan Kendeng, Kabupaten Lebak, Provinsi Banten.</p>
        
        <p>Suku Baduy terkenal karena komitmennya yang kuat terhadap kesederhanaan hidup, keseimbangan dengan alam, dan ketaatan pada adat leluhur. Budaya mereka bukan hanya unik, tetapi juga sarat makna dan filosofi hidup yang dalam.</p>
        
        <h3>Letak dan Pembagian Suku Baduy</h3>
        <p>Suku Baduy terbagi menjadi dua kelompok utama:</p>
        
        <h4>1. Baduy Dalam</h4>
        <ul>
          <li>Tinggal di tiga kampung utama: Cibeo, Cikertawana, dan Cikeusik.</li>
          <li>Menjunjung adat paling ketat, menolak segala bentuk teknologi dan modernisasi.</li>
          <li>Tidak boleh menggunakan kendaraan, listrik, sabun kimia, atau pakaian berwarna cerah.</li>
        </ul>
        
        <h4>2. Baduy Luar</h4>
        <ul>
          <li>Tinggal di wilayah yang lebih terbuka dan menerima pengaruh luar secara terbatas.</li>
          <li>Sudah menggunakan pakaian modern dan menerima wisatawan, namun tetap menjaga nilai adat.</li>
        </ul>
        
        <h3>Prinsip Hidup Masyarakat Baduy</h3>
        <p>Masyarakat Baduy memegang teguh tiga prinsip utama yang menjadi landasan hidup mereka:</p>
        
        <h4>1. "Tidak Merusak Alam"</h4>
        <p>Alam bagi mereka bukan hanya sumber kehidupan, tapi juga bagian dari kepercayaan. Hutan larangan (leuweung kolot) tidak boleh diganggu karena dianggap suci.</p>
        
        <h4>2. "Hirup Sauyunan" (Hidup Harmonis)</h4>
        <p>Segala hal dijalani dengan kebersamaan dan saling tolong-menolong. Tidak ada egoisme atau individualisme.</p>
        
        <h4>3. "Mulih ka Asal" (Kembali ke Asal)</h4>
        <p>Sebuah filosofi tentang menjaga kemurnian hidup, menjauh dari keserakahan, dan menjaga kesederhanaan seperti zaman dahulu.</p>
        
        <p>Budaya Suku Baduy adalah salah satu harta tak ternilai milik Indonesia. Di saat dunia sibuk mengejar kemajuan, mereka justru menunjukkan bahwa kebahagiaan bisa hadir dari kehidupan yang bersahaja dan penuh makna.</p>
      `
    },
    {
      id: 16,
      title: "Geopark Ciletuh: Permata Alam Sukabumi yang Mendunia",
      excerpt: "Tersembunyi di ujung barat daya Kabupaten Sukabumi, Jawa Barat, terdapat sebuah kawasan yang menyatukan keindahan alam, nilai geologis, serta kearifan lokal dalam satu ruang yang menakjubkan.",
      category: "destinations",
      author: "RENATRAVEL.ID",
      date: "29 Juni 2025",
      readTime: "9 menit",
      views: 723,
      comments: 22,
      likes: 98,
      image: "/placeholder.svg",
      featured: false,
      content: `
        <p>Tersembunyi di ujung barat daya Kabupaten Sukabumi, Jawa Barat, terdapat sebuah kawasan yang menyatukan keindahan alam, nilai geologis, serta kearifan lokal dalam satu ruang yang menakjubkan: Geopark Ciletuh. Kawasan ini bukan hanya destinasi wisata alam biasa, tetapi juga merupakan warisan bumi yang diakui oleh dunia.</p>
        
        <p>Pada tahun 2018, Geopark Ciletuh resmi ditetapkan sebagai UNESCO Global Geopark, menandakan bahwa kawasan ini memiliki nilai geologis dan budaya yang luar biasa dan perlu dilestarikan.</p>
        
        <h3>Apa Itu Geopark?</h3>
        <p>Geopark (Taman Bumi) adalah kawasan yang memiliki keanekaragaman geologi (batuan, tanah, struktur bumi), biodiversitas (flora-fauna), dan kekayaan budaya, yang dikelola dengan prinsip konservasi, edukasi, dan pembangunan berkelanjutan.</p>
        
        <h3>Daya Tarik Geopark Ciletuh</h3>
        
        <h4>1. Formasi Batuan Tertua di Jawa Barat</h4>
        <p>Geopark ini menyimpan formasi batuan purba yang diperkirakan berusia lebih dari 65 juta tahun, berasal dari zaman Mesozoikum. Ini menjadikan Ciletuh sebagai "buku terbuka" tentang sejarah pembentukan Pulau Jawa.</p>
        
        <h4>2. Pantai-Pantai Eksotis</h4>
        <ul>
          <li>Pantai Palangpang – gerbang utama kawasan geopark dengan pemandangan laut dan perbukitan batu.</li>
          <li>Pantai Ujung Genteng – terkenal dengan pasir putih dan konservasi penyu.</li>
          <li>Pantai Ombak Tujuh – surga bagi peselancar karena ombaknya yang menantang.</li>
        </ul>
        
        <h4>3. Air Terjun (Curug) Menakjubkan</h4>
        <ul>
          <li>Curug Awang – dijuluki "Niagara mini", air terjun setinggi 40 meter yang spektakuler.</li>
          <li>Curug Cimarinjung – dikelilingi tebing batu purba, cocok untuk spot fotografi alam.</li>
          <li>Curug Sodong – air terjun kembar yang mudah diakses dari jalan utama.</li>
        </ul>
        
        <h3>Prinsip Wisata Berkelanjutan di Geopark Ciletuh</h3>
        <p>Mengunjungi Geopark Ciletuh berarti ikut menjaga dan menghormati bumi. Pengunjung dihimbau untuk:</p>
        <ul>
          <li>Tidak membuang sampah sembarangan</li>
          <li>Menggunakan produk lokal</li>
          <li>Menghormati budaya dan adat setempat</li>
          <li>Mendukung pengelolaan wisata berbasis masyarakat</li>
        </ul>
        
        <p>Geopark Ciletuh adalah bukti bahwa Indonesia memiliki kekayaan alam dan budaya yang luar biasa. Lebih dari sekadar tempat wisata, kawasan ini adalah pengingat tentang pentingnya menjaga bumi, memahami sejarah geologi, dan hidup berdampingan dengan alam.</p>
      `
    },
    {
      id: 17,
      title: "Kepulauan Seribu: Surga Tropis di Pintu Gerbang Jakarta",
      excerpt: "Siapa bilang untuk menikmati keindahan pulau tropis harus pergi jauh? Di sebelah utara Jakarta, hanya sekitar 1–2 jam perjalanan dengan kapal, tersembunyi gugusan pulau eksotis.",
      category: "destinations",
      author: "RENATRAVEL.ID",
      date: "29 Juni 2025",
      readTime: "7 menit",
      views: 645,
      comments: 31,
      likes: 87,
      image: "/placeholder.svg",
      featured: false,
      content: `
        <p>Siapa bilang untuk menikmati keindahan pulau tropis harus pergi jauh? Di sebelah utara Jakarta, hanya sekitar 1–2 jam perjalanan dengan kapal, tersembunyi gugusan pulau eksotis yang menawarkan pasir putih, laut biru jernih, dan suasana tenang yang menyegarkan: Kepulauan Seribu.</p>
        
        <p>Meski namanya "Seribu", jumlah pulau yang ada sebenarnya sekitar 110 pulau, dan hanya sebagian yang berhunipun atau dibuka untuk wisata. Namun keindahan dan keunikan yang ditawarkan benar-benar tak terhitung.</p>
        
        <h3>Kenapa Harus ke Kepulauan Seribu?</h3>
        <p>Kepulauan Seribu adalah pilihan liburan sempurna bagi:</p>
        <ul>
          <li>Warga kota yang ingin liburan singkat tanpa harus cuti panjang</li>
          <li>Pencinta laut dan snorkeling</li>
          <li>Keluarga atau rombongan yang ingin suasana alam terbuka</li>
          <li>Traveler yang mencari destinasi murah meriah dekat ibu kota</li>
        </ul>
        
        <h3>Pulau-Pulau Favorit di Kepulauan Seribu</h3>
        
        <h4>1. Pulau Tidung</h4>
        <ul>
          <li>Terkenal dengan Jembatan Cinta yang menghubungkan Pulau Tidung Besar dan Kecil.</li>
          <li>Aktivitas: snorkeling, banana boat, bersepeda keliling pulau.</li>
          <li>Cocok untuk backpacker dan wisata keluarga.</li>
        </ul>
        
        <h4>2. Pulau Pari</h4>
        <ul>
          <li>Dikenal dengan Pantai Pasir Perawan, airnya jernih dan tenang.</li>
          <li>Banyak spot untuk snorkeling, diving, hingga paddle board.</li>
          <li>Nuansanya tenang, cocok untuk short escape.</li>
        </ul>
        
        <h4>3. Pulau Harapan</h4>
        <ul>
          <li>Destinasi populer untuk hopping island (jelajah pulau).</li>
          <li>Dekat dengan beberapa pulau kecil berterumbu karang indah seperti Pulau Macan dan Pulau Gosong Perak.</li>
          <li>Cocok untuk pecinta fotografi bawah laut.</li>
        </ul>
        
        <h3>Aktivitas Wisata Menarik</h3>
        <ul>
          <li>🐠 Snorkeling & Diving – nikmati keindahan terumbu karang dan ikan-ikan tropis</li>
          <li>🚤 Island Hopping – jelajahi pulau-pulau kecil dengan kapal tradisional</li>
          <li>🐢 Konservasi Penyu & Mangrove – kegiatan edukatif dan ramah lingkungan</li>
          <li>🚴 Bersepeda keliling pulau – banyak pulau menyediakan sepeda sewa</li>
          <li>🌅 Sunset & Sunrise Hunting – suasana romantis dan tenang</li>
        </ul>
        
        <p>Kepulauan Seribu adalah destinasi sempurna bagi siapa pun yang ingin menikmati alam tropis tanpa harus jauh-jauh dari Jakarta. Dengan laut biru, udara bersih, dan keramahan penduduk lokal, setiap pulau di Kepulauan Seribu menjanjikan pengalaman yang menyegarkan dan berkesan.</p>
      `
    },
    {
      id: 18,
      title: "Dieng: Negeri di Atas Awan yang Penuh Pesona",
      excerpt: "Terletak di dataran tinggi Jawa Tengah, tepatnya di perbatasan Kabupaten Wonosobo dan Banjarnegara, Dieng adalah destinasi wisata yang dijuluki 'Negeri di Atas Awan'.",
      category: "destinations",
      author: "RENATRAVEL.ID",
      date: "29 Juni 2025",
      readTime: "8 menit",
      views: 534,
      comments: 19,
      likes: 76,
      image: "/placeholder.svg",
      featured: false,
      content: `
        <p>Terletak di dataran tinggi Jawa Tengah, tepatnya di perbatasan Kabupaten Wonosobo dan Banjarnegara, Dieng adalah destinasi wisata yang dijuluki "Negeri di Atas Awan". Dengan ketinggian sekitar 2.000 meter di atas permukaan laut, udara di sini sejuk, segar, bahkan bisa mencapai titik beku saat musim kemarau.</p>
        
        <p>Namun, bukan hanya udaranya yang memikat. Dieng menyimpan kekayaan alam, budaya, dan sejarah yang menjadikannya salah satu destinasi paling istimewa di Indonesia.</p>
        
        <h3>Daya Tarik Utama Dieng</h3>
        
        <h4>1. Golden Sunrise Sikunir</h4>
        <p>Salah satu sunrise terbaik di Indonesia! Dari Bukit Sikunir, kamu bisa melihat matahari terbit dengan latar pegunungan Sindoro, Sumbing, Merapi, hingga Merbabu. Pendakian singkat yang ringan tapi hasilnya luar biasa.</p>
        
        <h4>2. Kawah Sikidang</h4>
        <p>Kawah aktif yang unik karena kawah utamanya sering berpindah-pindah tempat. Di sini kamu bisa melihat uap panas bumi dari dekat dan mencium aroma khas belerang.</p>
        
        <h4>3. Telaga Warna & Telaga Pengilon</h4>
        <p>Dua danau bersebelahan dengan warna air yang bisa berubah-ubah karena kandungan sulfur. Legenda setempat menambah kesan mistis dan keindahan tempat ini.</p>
        
        <h4>4. Kompleks Candi Arjuna</h4>
        <p>Situs peninggalan Hindu tertua di Jawa, dibangun sekitar abad ke-8 M. Tempat ini menyimpan nilai sejarah dan arsitektur yang luar biasa dengan suasana tenang dan eksotis.</p>
        
        <h3>Budaya & Kearifan Lokal</h3>
        <p>Dieng juga terkenal dengan anak gimbal, yaitu anak-anak yang secara alami memiliki rambut gimbal sejak lahir. Masyarakat percaya mereka adalah anak pilihan yang mendapat berkah dari leluhur.</p>
        
        <p>Setiap tahun, digelar Dieng Culture Festival – acara budaya besar yang menghadirkan:</p>
        <ul>
          <li>Ruwatan anak gimbal</li>
          <li>Jazz di atas awan</li>
          <li>Pertunjukan seni tradisional</li>
          <li>Penerbangan lampion</li>
          <li>Kuliner khas Dieng</li>
        </ul>
        
        <h3>Kuliner Khas Dieng</h3>
        <ul>
          <li>Mie Ongklok – mie rebus khas Wonosobo dengan kuah kental dan sayuran</li>
          <li>Carica – buah khas Dieng, mirip pepaya kecil yang diolah menjadi manisan</li>
          <li>Kentang Dieng & Purwaceng – hasil pertanian lokal yang terkenal enak dan berkhasiat</li>
          <li>Tempe kemul & jagung bakar – camilan hangat saat kabut turun</li>
        </ul>
        
        <p>Dieng adalah tempat di mana alam, budaya, dan spiritualitas bertemu dalam suasana yang magis. Setiap kabut yang menyelimuti, setiap candi yang berdiri megah, dan setiap senyuman warga lokal mengajak kita untuk merenung, menikmati, dan kembali ke alam.</p>
      `
    },
    {
      id: 19,
      title: "Menjelajahi Keindahan Pegunungan Indonesia: Negeri Seribu Gunung",
      excerpt: "Indonesia dikenal sebagai negara kepulauan, tapi tak hanya kaya laut—negeri ini juga dikenal sebagai 'Negeri Seribu Gunung' dengan ratusan pegunungan yang menakjubkan.",
      category: "destinations",
      author: "RENATRAVEL.ID",
      date: "29 Juni 2025",
      readTime: "11 menit",
      views: 789,
      comments: 25,
      likes: 103,
      image: "/placeholder.svg",
      featured: false,
      content: `
        <p>Indonesia dikenal sebagai negara kepulauan, tapi tak hanya kaya laut—negeri ini juga dikenal sebagai "Negeri Seribu Gunung". Membentang dari Sabang hingga Merauke, Indonesia memiliki ratusan pegunungan dan gunung berapi aktif maupun tidak aktif, yang menjadi bagian dari Cincin Api Pasifik (Ring of Fire).</p>
        
        <p>Pegunungan di Indonesia bukan hanya indah dipandang, tapi juga menyimpan nilai budaya, sejarah, spiritual, hingga sumber daya alam yang luar biasa.</p>
        
        <h3>Jenis Pegunungan di Indonesia</h3>
        
        <h4>1. Pegunungan Vulkanik (Gunung Api)</h4>
        <ul>
          <li>Terbentuk dari aktivitas letusan magma.</li>
          <li>Contoh: Gunung Merapi, Gunung Bromo, Gunung Rinjani.</li>
        </ul>
        
        <h4>2. Pegunungan Lipatan</h4>
        <ul>
          <li>Terbentuk dari pergerakan lempeng bumi yang saling menekan.</li>
          <li>Contoh: Pegunungan Bukit Barisan (Sumatera), Pegunungan Sudirman (Papua).</li>
        </ul>
        
        <h4>3. Pegunungan Datar</h4>
        <ul>
          <li>Berupa dataran tinggi yang terbentuk dari proses alam ribuan tahun.</li>
          <li>Contoh: Pegunungan Dieng, Pegunungan Tengger.</li>
        </ul>
        
        <h3>Pegunungan Terkenal di Indonesia</h3>
        
        <h4>1. Pegunungan Bukit Barisan (Sumatera)</h4>
        <ul>
          <li>Membentang dari Aceh hingga Lampung sepanjang 1.700 km.</li>
          <li>Rumah bagi gunung-gunung tinggi seperti Gunung Kerinci (3.805 mdpl), yang merupakan gunung tertinggi di Sumatera dan gunung berapi tertinggi di Indonesia.</li>
          <li>Wilayah ini memiliki banyak taman nasional, seperti Taman Nasional Kerinci Seblat.</li>
        </ul>
        
        <h4>2. Pegunungan Jayawijaya (Papua)</h4>
        <ul>
          <li>Terdapat Puncak Jaya (Cartenz Pyramid), titik tertinggi di Indonesia dan Oseania (4.884 mdpl).</li>
          <li>Satu-satunya tempat di Indonesia yang memiliki salju abadi, meski kini mulai mencair akibat perubahan iklim.</li>
          <li>Menjadi tantangan utama bagi para pendaki dunia.</li>
        </ul>
        
        <h4>3. Pegunungan Tengger (Jawa Timur)</h4>
        <ul>
          <li>Terkenal dengan Gunung Bromo, gunung api aktif dengan kaldera spektakuler.</li>
          <li>Berada dalam Taman Nasional Bromo Tengger Semeru.</li>
          <li>Suku Tengger mendiami kawasan ini dan memiliki tradisi unik seperti upacara Kasada.</li>
        </ul>
        
        <h3>Pegunungan Favorit Pendaki di Indonesia</h3>
        <ol>
          <li>Gunung Semeru (3.676 mdpl) – Puncak Mahameru, tertinggi di Pulau Jawa.</li>
          <li>Gunung Rinjani (3.726 mdpl) – Gunung tertinggi di NTB, dengan Danau Segara Anak di kawahnya.</li>
          <li>Gunung Prau (2.565 mdpl) – Favorit pendaki pemula untuk menikmati sunrise terbaik di Dieng.</li>
          <li>Gunung Gede-Pangrango – Cocok untuk pendaki dari Jakarta dan sekitarnya, terkenal dengan edelweiss dan air terjun Cibeureum.</li>
          <li>Gunung Latimojong (Sulawesi Selatan) – Puncak Rantemario-nya adalah titik tertinggi di Sulawesi.</li>
        </ol>
        
        <h3>Fungsi Pegunungan bagi Indonesia</h3>
        <ul>
          <li>Sumber air dan kehidupan bagi masyarakat sekitar.</li>
          <li>Habitat flora dan fauna endemik, termasuk hutan hujan tropis.</li>
          <li>Situs spiritual dan budaya, tempat meditasi, upacara adat, dan kepercayaan lokal.</li>
          <li>Objek wisata alam untuk trekking, camping, dan ekowisata.</li>
        </ul>
        
        <p>Pegunungan Indonesia adalah warisan alam yang luar biasa. Mereka bukan hanya menantang untuk didaki, tapi juga menyimpan keindahan, kehidupan, dan pelajaran tentang harmoni manusia dengan alam. Mendaki gunung bukan hanya soal mencapai puncak, tapi juga tentang menyatu dengan bumi dan mengenal diri sendiri.</p>
      `
    },
    {
      id: 20,
      title: "Wisata Budaya di Indonesia: Menjelajahi Warisan Leluhur Nusantara",
      excerpt: "Indonesia bukan hanya kaya akan alam, tetapi juga merupakan negara dengan kekayaan budaya yang sangat luar biasa. Dari Sabang hingga Merauke, setiap daerah memiliki tradisi yang unik.",
      category: "culture",
      author: "RENATRAVEL.ID",
      date: "29 Juni 2025",
      readTime: "12 menit",
      views: 678,
      comments: 29,
      likes: 94,
      image: "/placeholder.svg",
      featured: false,
      content: `
        <p>Indonesia bukan hanya kaya akan alam, tetapi juga merupakan negara dengan kekayaan budaya yang sangat luar biasa. Dari Sabang hingga Merauke, setiap daerah memiliki tradisi, adat istiadat, seni, dan kearifan lokal yang unik. Inilah yang menjadikan wisata budaya di Indonesia sebagai salah satu daya tarik utama bagi wisatawan lokal maupun mancanegara.</p>
        
        <p>Wisata budaya bukan sekadar menikmati pertunjukan seni atau melihat bangunan bersejarah, tapi juga tentang merasakan kehidupan, memahami makna, dan menghargai warisan leluhur yang telah hidup selama ratusan tahun.</p>
        
        <h3>Apa Itu Wisata Budaya?</h3>
        <p>Wisata budaya adalah perjalanan yang berfokus pada kegiatan yang memperkenalkan pengunjung pada identitas budaya suatu masyarakat, termasuk:</p>
        <ul>
          <li>Upacara adat</li>
          <li>Kesenian tradisional</li>
          <li>Kerajinan lokal</li>
          <li>Kuliner khas</li>
          <li>Bahasa daerah</li>
          <li>Arsitektur dan situs sejarah</li>
        </ul>
        
        <h3>Contoh Wisata Budaya Populer di Indonesia</h3>
        
        <h4>1. Keraton Yogyakarta & Tradisi Jawa</h4>
        <ul>
          <li>Mengunjungi Keraton Ngayogyakarta Hadiningrat untuk belajar tentang budaya Jawa, seni tari, gamelan, dan batik.</li>
          <li>Menyaksikan pertunjukan Sendratari Ramayana di Prambanan.</li>
        </ul>
        
        <h4>2. Tana Toraja, Sulawesi Selatan</h4>
        <ul>
          <li>Wisata budaya yang penuh nilai spiritual dan unik, seperti upacara kematian Rambu Solo', rumah adat Tongkonan, dan makam di tebing batu.</li>
          <li>Pengunjung dapat memahami cara masyarakat Toraja memaknai kematian dan hubungan dengan leluhur.</li>
        </ul>
        
        <h4>3. Bali – Budaya Hindu yang Kuat</h4>
        <p>Meski terkenal dengan pantai, Bali adalah pusat wisata budaya: dari upacara keagamaan di pura, tari Kecak di Uluwatu, hingga seni lukis dan ukir di Ubud.</p>
        
        <h4>4. Suku Baduy, Banten</h4>
        <ul>
          <li>Wisata budaya yang mengajak untuk hidup sederhana tanpa listrik dan teknologi.</li>
          <li>Pengunjung bisa berinteraksi langsung dengan masyarakat adat yang masih menjaga kepercayaan Sunda Wiwitan.</li>
        </ul>
        
        <h4>5. Kampung Naga, Tasikmalaya</h4>
        <p>Perkampungan adat Sunda yang masih mempertahankan tata kehidupan tradisional, arsitektur bambu, dan sistem gotong royong.</p>
        
        <h4>6. Wamena dan Festival Lembah Baliem, Papua</h4>
        <ul>
          <li>Festival budaya tahunan yang menampilkan perang-perangan antar suku Dani, Yali, dan Lani.</li>
          <li>Pengalaman luar biasa melihat adat Papua yang masih hidup dan kuat.</li>
        </ul>
        
        <h3>Manfaat Wisata Budaya</h3>
        <ul>
          <li>📚 Edukasi: Mengenalkan sejarah, adat istiadat, dan nilai-nilai luhur bangsa.</li>
          <li>🌱 Pelestarian Budaya: Membantu menjaga budaya lokal agar tetap hidup dan dihargai.</li>
          <li>💼 Pemberdayaan Ekonomi Lokal: Memberi penghasilan pada pengrajin, seniman, dan pemandu lokal.</li>
          <li>🤝 Interaksi Sosial: Membangun toleransi dan pemahaman antarbudaya.</li>
        </ul>
        
        <h3>Tips Berwisata Budaya</h3>
        <ul>
          <li>Hormati adat dan norma setempat</li>
          <li>Gunakan jasa pemandu lokal untuk pengalaman yang lebih mendalam</li>
          <li>Beli produk kerajinan asli sebagai bentuk dukungan</li>
          <li>Jangan hanya mengambil foto – ambil juga pelajaran dari nilai-nilainya</li>
          <li>Ikut serta dalam kegiatan, bukan sekadar menonton</li>
        </ul>
        
        <p>Wisata budaya di Indonesia adalah cara terbaik untuk mengenal identitas bangsa. Setiap daerah punya cerita, setiap tarian punya makna, dan setiap tradisi punya akar sejarah yang dalam. Dengan berwisata budaya, kita tidak hanya jalan-jalan, tapi juga ikut merawat dan membanggakan kekayaan leluhur kita.</p>
      `
    },
    {
      id: 21,
      title: "Kuliner Indonesia: Cita Rasa Nusantara yang Mendunia",
      excerpt: "Indonesia bukan hanya kaya akan budaya dan alam, tetapi juga surganya kuliner lezat dan penuh rempah. Dari Sabang hingga Merauke, setiap daerah memiliki makanan khas yang menggugah selera.",
      category: "culinary",
      author: "RENATRAVEL.ID",
      date: "29 Juni 2025",
      readTime: "9 menit",
      views: 856,
      comments: 42,
      likes: 128,
      image: "/placeholder.svg",
      featured: false,
      content: `
        <p>Indonesia bukan hanya kaya akan budaya dan alam, tetapi juga surganya kuliner lezat dan penuh rempah. Dari Sabang hingga Merauke, setiap daerah memiliki makanan khas dengan cita rasa, cerita, dan sejarahnya sendiri. Tak heran jika kuliner Indonesia menjadi salah satu daya tarik wisata terbesar bagi wisatawan lokal maupun mancanegara.</p>
        
        <p>Makanan Indonesia bukan hanya sekadar pemenuh perut, tapi juga wujud kearifan lokal, identitas budaya, dan simbol kebersamaan.</p>
        
        <h3>Apa yang Membuat Kuliner Indonesia Istimewa?</h3>
        
        <h4>1. Bumbu dan Rempah yang Kaya</h4>
        <p>Indonesia dikenal sebagai negeri rempah. Bumbu seperti kunyit, lengkuas, jahe, kemiri, sereh, dan cabai menciptakan rasa khas yang tidak ditemukan di tempat lain.</p>
        
        <h4>2. Pengaruh Budaya Beragam</h4>
        <p>Kuliner Indonesia dipengaruhi oleh berbagai budaya seperti India, Arab, Cina, Belanda, hingga lokal adat suku-suku Nusantara, sehingga menghasilkan kekayaan rasa yang unik.</p>
        
        <h4>3. Teknik Masak Tradisional</h4>
        <p>Dari dibakar di atas arang, ditumis, digulai, hingga dikukus dalam daun, teknik memasak Indonesia sangat variatif dan autentik.</p>
        
        <h3>Kuliner Khas dari Berbagai Daerah</h3>
        
        <h4>1. Rendang (Sumatera Barat)</h4>
        <ul>
          <li>Masakan daging sapi dengan santan dan rempah khas Minang.</li>
          <li>Pernah dinobatkan sebagai makanan terenak di dunia oleh CNN Travel.</li>
        </ul>
        
        <h4>2. Gudeg (Yogyakarta)</h4>
        <ul>
          <li>Olahan nangka muda yang dimasak lama dengan gula jawa dan santan.</li>
          <li>Rasa manis legit, biasanya disajikan dengan ayam, telur, dan sambal krecek.</li>
        </ul>
        
        <h4>3. Pempek (Palembang)</h4>
        <p>Makanan khas berbahan dasar ikan tenggiri dan sagu, disajikan dengan kuah cuko pedas-manis-asam.</p>
        
        <h4>4. Rawon (Jawa Timur)</h4>
        <p>Sup daging berkuah hitam pekat dari kluwek. Aromatik dan kaya rasa!</p>
        
        <h4>5. Coto Makassar (Sulawesi Selatan)</h4>
        <p>Sup khas Makassar dari jeroan sapi dengan bumbu kacang dan rempah-rempah.</p>
        
        <h4>6. Papeda (Papua dan Maluku)</h4>
        <p>Bubur sagu lengket disajikan dengan ikan kuah kuning. Makanan pokok masyarakat timur Indonesia.</p>
        
        <h4>7. Ayam Betutu (Bali)</h4>
        <p>Ayam utuh yang diisi bumbu khas Bali, dibungkus daun pisang dan dimasak dalam waktu lama.</p>
        
        <h3>Jajanan Khas & Street Food yang Wajib Dicoba</h3>
        <ul>
          <li>Siomay Bandung</li>
          <li>Sate Madura</li>
          <li>Bakso Malang</li>
          <li>Nasi Goreng Jawa</li>
          <li>Martabak Manis dan Telur</li>
          <li>Es Cendol & Es Teler</li>
        </ul>
        <p>Street food Indonesia terkenal karena murah, enak, dan mudah ditemukan di hampir setiap sudut kota.</p>
        
        <h3>Kuliner Tradisional & Kue Khas</h3>
        <p>Indonesia juga punya kue-kue tradisional yang unik:</p>
        <ul>
          <li>Klepon (bola ketan isi gula merah)</li>
          <li>Lemper (ketan isi ayam dibungkus daun pisang)</li>
          <li>Nagasi, Wajik, Kue Putu, hingga Lapis Legit</li>
        </ul>
        <p>Biasanya disajikan saat acara adat atau perayaan tertentu, setiap kue punya makna dan cerita.</p>
        
        <h3>Kuliner Indonesia di Mata Dunia</h3>
        <p>Makanan Indonesia semakin dikenal secara global:</p>
        <ul>
          <li>Rendang, nasi goreng, dan sate sering masuk daftar makanan terenak dunia.</li>
          <li>Banyak restoran Indonesia berdiri di luar negeri, dari Belanda, Australia, hingga Amerika.</li>
          <li>Program diplomasi kuliner juga aktif mengenalkan masakan Indonesia ke dunia.</li>
        </ul>
        
        <p>Kuliner Indonesia adalah warisan budaya yang hidup, berkembang, dan menjadi jati diri bangsa. Lewat makanan, kita bisa mengenal sejarah, filosofi hidup, hingga keragaman Indonesia. Maka dari itu, menjaga dan mempromosikan kuliner Nusantara sama dengan melestarikan budaya kita sendiri.</p>
      `
    },
    {
      id: 22,
      title: "Barang Bawaan Wajib Saat Ikut Trip Travel bersama RENATRAVEL.ID",
      excerpt: "Ikut trip bareng RENATRAVEL.ID? Siap-siap buat liburan yang seru, praktis, dan penuh pengalaman baru! Tapi sebelum berangkat, penting banget untuk menyiapkan barang bawaan yang tepat.",
      category: "tips",
      author: "RENATRAVEL.ID",
      date: "29 Juni 2025",
      readTime: "6 menit",
      views: 743,
      comments: 35,
      likes: 89,
      image: "/placeholder.svg",
      featured: false,
      content: `
        <p>Ikut trip bareng RENATRAVEL.ID? Siap-siap buat liburan yang seru, praktis, dan penuh pengalaman baru! Tapi sebelum berangkat, penting banget untuk menyiapkan barang bawaan yang tepat supaya perjalananmu makin nyaman dan nggak ribet.</p>
        
        <p>Ingat, liburan yang menyenangkan dimulai dari packing yang cerdas!</p>
        
        <h3>1. Dokumen Penting</h3>
        <p>Walaupun kebanyakan trip domestik, tetap siapkan:</p>
        <ul>
          <li>KTP/Identitas – untuk check-in kapal, hotel, atau registrasi</li>
          <li>Kartu vaksin atau aplikasi PeduliLindungi (jika dibutuhkan)</li>
          <li>Booking confirmation dari admin RENATRAVEL.ID (simpan di HP)</li>
        </ul>
        
        <h3>2. Pakaian Nyaman Sesuai Destinasi</h3>
        <p>Pastikan kamu tahu lokasi dan cuacanya:</p>
        <ul>
          <li>Kaos/celana ringan untuk aktivitas outdoor</li>
          <li>Jaket atau sweater untuk destinasi dingin seperti Bromo atau Dieng</li>
          <li>Pakaian renang untuk trip ke pantai/pulau</li>
          <li>Baju ganti secukupnya (jangan berlebihan)</li>
          <li>Sandal/sepatu nyaman untuk jalan kaki</li>
        </ul>
        <p>💡 Tips: Pilih pakaian yang cepat kering dan mudah dilipat agar tidak memakan tempat.</p>
        
        <h3>3. Peralatan Pribadi</h3>
        <p>Walau RENATRAVEL.ID menyediakan fasilitas, sebaiknya tetap bawa perlengkapan pribadi:</p>
        <ul>
          <li>Sikat gigi, sabun, sampo, tisu basah</li>
          <li>Handuk kecil</li>
          <li>Sunblock & lip balm (penting untuk trip laut/gunung)</li>
          <li>Obat pribadi (jangan lupa ya!)</li>
        </ul>
        
        <h3>4. Perlengkapan Tambahan yang Berguna</h3>
        <ul>
          <li>Powerbank & charger</li>
          <li>Headlamp/senter kecil (kalau trip camping atau sunrise)</li>
          <li>Dry bag/plastik kresek untuk baju basah</li>
          <li>Botol minum isi ulang</li>
          <li>Topi/kacamata hitam</li>
        </ul>
        
        <h3>5. Barang Opsional Sesuai Kebutuhan</h3>
        <ul>
          <li>Uang tunai secukupnya (beberapa pulau/area belum ada ATM)</li>
          <li>Kamera underwater/GoPro (kalau snorkeling)</li>
          <li>Camilan ringan</li>
          <li>Buku kecil atau headset buat hiburan saat perjalanan</li>
        </ul>
        
        <h3>🚫 Jangan Bawa Ini:</h3>
        <ul>
          <li>Barang elektronik berlebihan</li>
          <li>Perhiasan atau barang berharga</li>
          <li>Tas besar yang bikin repot</li>
          <li>Sampah plastik sekali pakai – bantu jaga lingkungan ya!</li>
        </ul>
        
        <p><strong>Bawa barang secukupnya, bukan sebanyaknya. Fokus liburan, bukan ribet ngurus bawaan!</strong></p>
      `
    },
    // Artikel lama tetap ada
    {
      id: 1,
      title: "10 Tips Hemat Liburan ke Bali untuk Backpacker",
      excerpt: "Panduan lengkap untuk menikmati keindahan Bali dengan budget terbatas. Mulai dari transportasi, akomodasi, hingga kuliner murah meriah yang tetap nikmat dan berkesan.",
      category: "tips",
      author: "Ahmad Susanto",
      date: "15 Maret 2024",
      readTime: "5 menit",
      views: 1234,
      comments: 23,
      likes: 156,
      image: "/placeholder.svg",
      featured: true,
      content: `
        <p>Bali memang menjadi destinasi impian banyak orang. Namun, bukan berarti Anda harus menguras tabungan untuk menikmati keindahan Pulau Dewata ini. Dengan perencanaan yang tepat dan tips-tips jitu, Anda bisa berlibur hemat namun tetap berkesan.</p>
        
        <h3>1. Pilih Waktu yang Tepat</h3>
        <p>Hindari high season seperti Juli-Agustus dan Desember-Januari. Pilih bulan April-Juni atau September-November untuk mendapatkan harga yang lebih murah.</p>
        
        <h3>2. Gunakan Transportasi Lokal</h3>
        <p>Manfaatkan angkutan umum seperti bus Trans Sarbagita atau sewa motor untuk berkeliling. Lebih hemat dibanding taksi atau rental mobil.</p>
        
        <h3>3. Menginap di Hostel atau Homestay</h3>
        <p>Pilih akomodasi budget-friendly seperti hostel atau homestay. Selain hemat, Anda juga bisa bertemu backpacker lain dan bertukar cerita.</p>
        
        <h3>4. Makan di Warung Lokal</h3>
        <p>Jangan selalu makan di restoran turis. Warung lokal menawarkan makanan autentik dengan harga yang jauh lebih terjangkau.</p>
        
        <h3>5. Manfaatkan Pantai Gratis</h3>
        <p>Tidak semua pantai di Bali berbayar. Pantai seperti Sanur, Jimbaran, dan beberapa spot di Uluwatu bisa dinikmati gratis.</p>
      `
    },
    {
      id: 2,
      title: "Menjelajahi Keajaiban Raja Ampat: Surga Bawah Laut Indonesia",
      excerpt: "Petualangan menakjubkan di Raja Ampat, Papua Barat. Temukan keanekaragaman hayati laut yang memukau dan spot diving terbaik dunia.",
      category: "destinations",
      author: "Sari Dewi",
      date: "12 Maret 2024",
      readTime: "8 menit",
      views: 987,
      comments: 15,
      likes: 89,
      image: "/placeholder.svg",
      featured: false,
      content: `
        <p>Raja Ampat, yang secara harfiah berarti 'Empat Raja', adalah surga bagi para penyelam dan pecinta alam bawah laut. Terletak di ujung barat laut Papua, kepulauan ini menawarkan keanekaragaman hayati laut yang tak tertandingi di dunia.</p>
        
        <h3>Keanekaragaman Hayati yang Menakjubkan</h3>
        <p>Raja Ampat memiliki 75% dari seluruh spesies karang yang ada di dunia. Di sini Anda bisa menemukan lebih dari 1,500 spesies ikan kecil, 537 spesies karang, dan 700 spesies moluska.</p>
        
        <h3>Spot Diving Terbaik</h3>
        <p>Beberapa spot diving yang wajib dikunjungi antara lain Cape Kri, Sardine Reef, The Passage, dan Arborek Jetty. Setiap spot memiliki keunikan tersendiri.</p>
        
        <h3>Waktu Terbaik Berkunjung</h3>
        <p>Oktober hingga April adalah waktu terbaik untuk diving di Raja Ampat. Cuaca relatif tenang dan visibility air laut sangat baik.</p>
      `
    },
    {
      id: 7,
      title: "Travel Budgeting: Buat Trip Hemat Bareng RENATRAVEL.ID",
      excerpt: "Liburan seru tidak harus menguras kantong! Pelajari tips budgeting untuk perjalanan hemat namun tetap menyenangkan dan berkesan.",
      category: "budgeting",
      author: "RENATRAVEL.ID",
      date: "28 Juni 2025",
      readTime: "7 menit",
      views: 543,
      comments: 19,
      likes: 87,
      image: "/placeholder.svg",
      featured: true,
      content: `
        <p>Liburan Seru Gak Harus Bikin Kantong Jebol! Mau liburan tapi tetap hemat? Bisa banget! Dengan sedikit perencanaan, kamu bisa menikmati perjalanan seru bareng RENATRAVEL.ID tanpa khawatir soal keuangan. Yuk, ikuti tips travel budgeting berikut ini biar liburanmu tetap asik dan aman di dompet!</p>
        
        <h3>Tentukan Bujet Maksimal Sebelum Daftar Trip</h3>
        <p>Langkah pertama: tetapkan limit total pengeluaran sebelum kamu pilih trip. Misalnya:</p>
        <ul>
          <li>Biaya trip: Rp1.000.000</li>
          <li>Uang makan tambahan: Rp200.000</li>
          <li>Oleh-oleh: Rp150.000</li>
          <li>Cadangan dana darurat: Rp100.000</li>
        </ul>
        <p>Dengan estimasi awal, kamu jadi lebih bijak selama perjalanan</p>
        
        <h3>Pilih Paket All-In atau Open Trip</h3>
        <p>Di RENATRAVEL.ID, kamu bisa pilih trip dengan harga yang sudah mencakup:</p>
        <ul>
          <li>Transportasi</li>
          <li>Makan</li>
          <li>Penginapan</li>
          <li>Tiket masuk objek wisata</li>
          <li>Tour leader & dokumentasi</li>
        </ul>
        <p>Open trip lebih hemat karena biaya dibagi bersama peserta lain. Cocok banget buat solo traveler yang mau irit tapi tetap seru!</p>
        
        <h3>Bawa Tunai & E-wallet Secukupnya</h3>
        <p>Gunakan sistem 3 kantong:</p>
        <ul>
          <li>Tunai harian (uang jajan, makan)</li>
          <li>E-wallet (darurat, jajan online, transfer)</li>
          <li>Tunai cadangan (jangan diutak-atik kecuali kepepet)</li>
        </ul>
        <p>Hindari terlalu banyak bawa uang tunai—selain rawan hilang, kamu bisa kalap belanja!</p>
        
        <h3>Manfaatkan Fasilitas Gratis</h3>
        <p>Bareng RENATRAVEL.ID, kamu dapat dokumentasi GRATIS dari tim! Jadi nggak perlu keluar uang buat bayar fotografer tinggal senyum & gaya aja! 😄</p>
        
        <p><strong>Liburan Nyaman, Dompet Aman!</strong> Traveling hemat bukan berarti serba irit, tapi lebih bijak dan terencana. Yuk, mulai rancang liburanmu bareng Rena Travel—semua sudah disiapkan, kamu tinggal jalan!</p>
      `
    },
    {
      id: 8,
      title: "Tips Tetap Sehat & Fit Saat Traveling Bareng RENATRAVEL.ID",
      excerpt: "Panduan lengkap menjaga kesehatan dan stamina selama perjalanan. Tips pola makan, istirahat, dan menjaga kebugaran tubuh saat traveling.",
      category: "health",
      author: "RENATRAVEL.ID",
      date: "27 Juni 2025",
      readTime: "6 menit",
      views: 432,
      comments: 14,
      likes: 65,
      image: "/placeholder.svg",
      featured: false,
      content: `
        <p>Liburan Seru = Badan Fit + Pikiran Fresh! Liburan itu menyenangkan, tapi juga bisa melelahkan kalau tubuhmu nggak dijaga. Bangun subuh buat sunrise, jalan kaki keliling destinasi, naik turun kendaraan… semua butuh stamina yang oke!</p>
        
        <h3>Jaga Pola Makan (Walau Lagi Jalan-Jalan)</h3>
        <p>Kata siapa liburan harus makan sembarangan? Boleh jajan dan eksplor kuliner lokal, tapi tetap seimbang ya!</p>
        <ul>
          <li>Sarapan dulu sebelum mulai aktivitas</li>
          <li>Jangan lupa makan sayur/buah</li>
          <li>Hindari makan terlalu pedas/minuman dingin berlebihan</li>
          <li>Bawa camilan sehat: granola, kacang, buah kering</li>
        </ul>
        
        <h3>Minum Air Putih Cukup!</h3>
        <p>Aktif seharian = tubuh dehidrasi. Sedia botil minum isi ulang dan usahakan minum 2 liter/hari, terutama saat jalan di bawah sinar matahari. Hindari terlalu banyak kopi atau minuman manis—bikin cepat lelah.</p>
        
        <h3>Manfaatkan Waktu Istirahat</h3>
        <p>Jangan begadang kalau besok ada agenda padat. Tidur cukup bikin badan pulih dan mood tetap happy.</p>
        <ul>
          <li>Matikan notifikasi HP saat tidur</li>
          <li>Bawa bantal leher atau penutup mata untuk istirahat di kendaraan</li>
        </ul>
        
        <h3>Jaga Kebersihan Diri</h3>
        <p>Traveling rame-rame = risiko kuman lebih tinggi. Pastikan kamu:</p>
        <ul>
          <li>Cuci tangan rutin</li>
          <li>Bawa tisu basah & hand sanitizer</li>
          <li>Gunakan sandal/sepatu yang bersih & nyaman</li>
          <li>Hindari meminjam alat pribadi peserta lain</li>
        </ul>
        
        <p><strong>Liburan Sehat Bareng Rena Travel = Momen Tak Terlupakan!</strong> Dengan menjaga tubuh tetap bugar, kamu bisa menikmati semua agenda dengan maksimal—tanpa drama sakit, lelah berlebihan, atau mood swing.</p>
      `
    },
    {
      id: 9,
      title: "Tips Foto Estetik Saat Trip Bareng RENATRAVEL.ID",
      excerpt: "Buat liburanmu tidak hanya seru tapi juga Instagramable! Tips dan trik fotografi untuk menghasilkan foto-foto kece selama perjalanan.",
      category: "photography",
      author: "RENATRAVEL.ID",
      date: "26 Juni 2025",
      readTime: "5 menit",
      views: 678,
      comments: 23,
      likes: 102,
      image: "/placeholder.svg",
      featured: false,
      content: `
        <p>Biar Liburanmu Bukan Cuma Seru, Tapi Juga Instagramable! Liburan bareng RENATRAVEL.ID nggak lengkap tanpa foto-foto kece! Tapi kadang hasil foto nggak seindah aslinya, ya? Tenang, kami punya tips foto estetik yang gampang banget buat kamu ikuti selama trip.</p>
        
        <h3>1. Manfaatkan Golden Hour</h3>
        <p>Golden hour adalah waktu terbaik untuk ambil foto, biasanya 1 jam setelah matahari terbit dan 1 jam sebelum matahari terbenam. Cocok banget buat:</p>
        <ul>
          <li>Sunrise di Bromo</li>
          <li>Sunset di pantai</li>
          <li>Siluet puncak gunung</li>
        </ul>
        <p>Cahaya alami bikin warna kulit & langit jadi lebih hangat dan lembut.</p>
        
        <h3>2. Perhatikan Komposisi</h3>
        <p>Gunakan prinsip "Rule of Thirds" (bayangkan layar dibagi jadi 9 kotak). Letakkan objek di pertemuan garis-garis itu.</p>
        <p>Tips: Coba mode grid di kamera/HP kamu. Jangan selalu di tengah, biar hasilnya lebih dinamis</p>
        
        <h3>3. Manfaatkan Alam & Properti Sekitar</h3>
        <p>Pohon, bebatuan, tangga, atau bahkan tembok warna-warni bisa jadi latar yang kece. Contoh:</p>
        <ul>
          <li>Pakai jembatan bambu sebagai leading line</li>
          <li>Duduk santai di pinggir danau dengan latar gunung</li>
          <li>Jalan di tengah jalan desa, candid style</li>
        </ul>
        
        <h3>4. Pose Natural = Lebih Menarik</h3>
        <p>Kaku depan kamera? Coba:</p>
        <ul>
          <li>Jalan pelan sambil senyum</li>
          <li>Duduk sambil melihat ke samping</li>
          <li>Pegang topi, ransel, atau liatin pemandangan</li>
        </ul>
        <p>Lebih baik candid daripada terlalu dipaksakan. Biarkan momen bicara sendiri.</p>
        
        <h3>5. Outfit Berwarna Cerah = Pop di Foto!</h3>
        <p>Pilih warna yang kontras dengan alam:</p>
        <ul>
          <li>Merah/mustard/oranye untuk background hijau atau biru</li>
          <li>Putih untuk pemandangan alam terbuka</li>
          <li>Hindari terlalu banyak motif rame</li>
        </ul>
        <p>Outfit simple tapi kuat di warna = Instagram ready!</p>
        
        <p><strong>BONUS: Simpan & Backup Hasil Foto</strong> Bikin album khusus di galeri, kirim ke Google Drive/OneDrive. Jangan sampai momen berharga hilang karena memori penuh!</p>
      `
    },
    {
      id: 10,
      title: "Etika & Kebiasaan yang Wajib Diterapkan Saat Ikut Trip Bareng RENATRAVEL.ID",
      excerpt: "Panduan etika dan sikap yang perlu diterapkan saat traveling bersama rombongan. Tips menjadi traveler yang bertanggung jawab dan menyenangkan.",
      category: "etiquette",
      author: "RENATRAVEL.ID",
      date: "25 Juni 2025",
      readTime: "6 menit",
      views: 389,
      comments: 16,
      likes: 73,
      image: "/placeholder.svg",
      featured: false,
      content: `
        <p>Liburan bareng rombongan itu seru banget—bisa kenal orang baru, foto-foto rame-rame, dan saling bantu di jalan. Tapi supaya semua tetap nyaman dan happy, penting banget buat jaga etika dan sikap selama trip. Yuk, jadi traveler yang asik dan bertanggung jawab!</p>
        
        <h3>1. Tepat Waktu = Tanda Respect</h3>
        <p>Waktu keberangkatan, kumpul, dan kembali biasanya sudah dijadwalkan dengan rapi oleh tim RENATRAVEL.ID. Telat satu orang bisa ngaruh ke jadwal satu rombongan.</p>
        <p>Tips: Datang minimal 15 menit sebelum jam kumpul. Gunakan alarm dan reminder biar nggak ketiduran</p>
        
        <h3>2. Ikuti Arahan Tour Leader & Crew</h3>
        <p>Crew kami bertugas memastikan perjalanan aman dan lancar. Dengerin arahan, catat info penting, dan jangan ragu bertanya jika bingung. Kalau ada perubahan jadwal atau kondisi darurat, keputusan tour leader adalah yang utama.</p>
        
        <h3>3. Jaga Kebersihan, Di Mana pun Berada</h3>
        <p>Rena Travel peduli lingkungan, dan kamu juga bisa bantu!</p>
        <ul>
          <li>Buang sampah di tempatnya</li>
          <li>Bawa kantong sampah sendiri kalau ke gunung/pantai</li>
          <li>Jangan corat-coret di tempat wisata</li>
        </ul>
        
        <h3>4. Saling Menghargai Sesama Peserta</h3>
        <p>Kita datang dari latar belakang berbeda, jadi yuk ciptakan suasana yang ramah & menyenangkan.</p>
        <ul>
          <li>Gunakan volume suara yang sopan</li>
          <li>Jangan menyerobot antrean</li>
          <li>Dukung peserta lain yang butuh bantuan</li>
          <li>Jangan mengeluh berlebihan</li>
        </ul>
        <p>Sikap ramah bikin perjalanan jadi lebih ringan dan menyenangkan untuk semua.</p>
        
        <h3>5. Bersikap Bijak di Sosial Media</h3>
        <p>Foto-foto boleh, upload juga boleh. Tapi...</p>
        <ul>
          <li>Jangan unggah foto peserta lain tanpa izin</li>
          <li>Hindari posting lokasi sensitif secara real-time (untuk keamanan)</li>
          <li>Mention Instagram/Tiktok @renatravel.id kalau mau repost dari tim dokumentasi!</li>
        </ul>
        <p>Dokumentasikan momenmu dengan bijak, bukan hanya demi konten tapi juga demi kenangan yang bermakna.</p>
        
        <h3>6. Jaga Barang Bawaan & Keselamatan Diri</h3>
        <ul>
          <li>Jangan tinggalkan barang sembarangan</li>
          <li>Simpan barang berharga di tempat aman</li>
          <li>Waspadai lokasi ramai & rawan</li>
          <li>Ikuti jalur resmi saat hiking/tour</li>
        </ul>
        <p>Rena Travel akan membantu, tapi tanggung jawab utama tetap di tanganmu, ya!</p>
      `
    },
    {
      id: 11,
      title: "Checklist Pra-Trip: Hal yang Wajib Kamu Lakukan Sebelum Ikut Trip Bareng RENATRAVEL.ID",
      excerpt: "Panduan lengkap persiapan sebelum berangkat trip. Checklist penting yang harus dilakukan agar perjalanan lancar dan tidak ada yang terlewat.",
      category: "tips",
      author: "RENATRAVEL.ID",
      date: "24 Juni 2025",
      readTime: "8 menit",
      views: 512,
      comments: 21,
      likes: 94,
      image: "/placeholder.svg",
      featured: false,
      content: `
        <p>Jangan sampai udah sampai meeting point, baru sadar ada yang ketinggalan! Sebelum berangkat, yuk cek ulang semua persiapanmu dengan checklist pra-trip dari RENATRAVEL.ID. Liburan yang lancar dimulai dari persiapan yang matang ✈️</p>
        
        <h3>Cek Tanggal & Jam Keberangkatan</h3>
        <ul>
          <li>Sudah cocok dengan jadwal pribadi?</li>
          <li>Sudah izin cuti/kuliah (kalau perlu)?</li>
          <li>Sudah tahu jam kumpul & lokasi meeting point?</li>
        </ul>
        <p>Simpan info ini di notes HP kamu biar nggak kelupaan.</p>
        
        <h3>Simpan Kontak Penting</h3>
        <p>Pastikan kamu simpan kontak:</p>
        <ul>
          <li>Admin RENATRAVEL.ID</li>
          <li>Tour Leader (akan dikirim sebelum trip)</li>
          <li>Driver atau nomor darurat</li>
        </ul>
        <p>Tips: Simpan di kontak dengan nama jelas 📱</p>
        
        <h3>Join Grup WhatsApp Trip</h3>
        <p>Biasanya, peserta akan dimasukkan ke grup khusus untuk info teknis seperti:</p>
        <ul>
          <li>Jam kumpul, rundown, dan detail itinerary</li>
          <li>Lokasi meeting point</li>
          <li>Pembagian kamar/kendaraan</li>
        </ul>
        <p>Pantau grup, jangan di-mute ya! Semua info penting ada di sana.</p>
        
        <h3>Selesaikan Pembayaran & Simpan Bukti</h3>
        <p>Pastikan:</p>
        <ul>
          <li>Pembayaran trip sudah lunas (DP/full)</li>
          <li>Simpan bukti transfer</li>
          <li>Simpan juga booking confirmation dari admin</li>
        </ul>
        <p>Lebih aman kalau bukti dikirim ke email atau discreenshot dan dikunci di galeri.</p>
        
        <h3>Packing Minimal H-1</h3>
        <p>Jangan packing mendadak ya! Supaya tenang dan tidak panik, packing minimal H-1 malam sebelum berangkat. Cek ulang:</p>
        <ul>
          <li>Dokumen pribadi (KTP, tiket)</li>
          <li>Pakaian sesuai cuaca</li>
          <li>Obat pribadi</li>
          <li>Powerbank, charger, perlengkapan mandi</li>
        </ul>
        <p>Gunakan daftar barang bawaan wajib dari RENATRAVEL.ID 🎒</p>
        
        <h3>Pastikan HP Full Baterai & Pulsa</h3>
        <p>Perjalanan panjang? HP harus siap:</p>
        <ul>
          <li>Baterai penuh</li>
          <li>Pulsa/data cukup</li>
          <li>Aplikasi penting sudah terpasang (Google Maps, dompet digital, dll)</li>
        </ul>
        <p>Sinyal bisa lemah di beberapa lokasi—jadi siap-siap duluan!</p>
        
        <h3>Mental Siap, Mood Happy!</h3>
        <p>Yang nggak kalah penting: siapin mental & mood liburan! Siap untuk:</p>
        <ul>
          <li>Bangun pagi</li>
          <li>Aktivitas fisik ringan (jalan, trekking)</li>
          <li>Berbaur dengan teman baru</li>
          <li>Menikmati alam & budaya lokal</li>
        </ul>
        <p>Ingat, ini liburan—bukan lomba. Nikmati prosesnya, bukan hanya destinasinya.</p>
        
        <p><strong>Let's Go with Rena Travel!</strong> Semua udah siap? Kalau checklist ini sudah kamu centang semua, berarti kamu tinggal berangkat dan menikmati perjalanan! 📍Nggak perlu ribet, tinggal datang dan jalan bareng kami. Full support, dokumentasi, dan kenangan manis sudah disiapkan!</p>
      `
    },
    {
      id: 12,
      title: "Cara Dapat Teman Baru Saat Trip Bareng RENATRAVEL.ID",
      excerpt: "Tips mudah dan natural untuk berkenalan dan berteman dengan peserta trip lain. Panduan membuat koneksi positif selama perjalanan.",
      category: "tips",
      author: "RENATRAVEL.ID",
      date: "23 Juni 2025",
      readTime: "6 menit",
      views: 445,
      comments: 18,
      likes: 81,
      image: "/placeholder.svg",
      featured: false,
      content: `
        <p>Liburan Seru Bukan Cuma Soal Tempat, Tapi Juga Soal Siapa yang Kamu Temui! Ikut trip, apalagi open trip bareng RENATRAVEL.ID, jadi kesempatan emas buat kenalan dengan banyak orang dari berbagai latar belakang. Tapi kadang bingung juga ya… gimana sih cara memulai obrolan dan bisa akrab sama peserta lain?</p>
        
        <h3>Senyum & Sapa Duluan</h3>
        <p>Kunci pertama: jangan gengsi menyapa lebih dulu! Saat di meeting point atau di mobil/bus, senyumin orang di samping kamu dan mulai dengan kalimat ringan:</p>
        <ul>
          <li>"Hai, kamu dari mana?"</li>
          <li>"Baru pertama ikut trip ini juga?"</li>
          <li>"Wah, bawaanmu rapi banget—boleh sharing tips packing nggak?"</li>
        </ul>
        
        <h3>Gabung Obrolan Ringan</h3>
        <p>Kalau peserta lain lagi ngobrol, kamu bisa ikut nimbrung pelan-pelan. Cari momen yang pas dan nggak nyerobot. Topik aman buat ngobrol bareng:</p>
        <ul>
          <li>Tempat wisata yang dituju</li>
          <li>Pengalaman traveling sebelumnya</li>
          <li>Outfit, kamera, atau makanan yang dibawa</li>
        </ul>
        
        <h3>Jalan Bareng Saat Explore</h3>
        <p>Jangan jalan sendiri terus! Coba gabung sama peserta lain saat jalan di destinasi. Biasanya, teman paling solid itu muncul saat lagi jalan kaki, foto bareng, atau nunggu sunrise sama-sama 🌅</p>
        <p>Tips: Tawarkan bantuan, misalnya motretin mereka—pasti langsung cair!</p>
        
        <h3>Ikut Foto Grup & Games</h3>
        <p>RENATRAVEL.ID sering bikin sesi dokumentasi & mini games seru selama perjalanan. Ikut aktif di momen ini bikin kamu lebih dikenal dan mudah dekat sama peserta lain.</p>
        <p>Psst… yang sering bantu motretin orang lain biasanya cepet banget dapet teman baru 📸</p>
        
        <h3>Makan Jangan Sendirian</h3>
        <p>Saat sesi makan bersama, coba duduk di meja yang belum kamu kenal. Obrolan saat makan itu paling alami dan bikin akrab!</p>
        <p>Kalau bingung buka topik:</p>
        <ul>
          <li>"Biasanya kamu suka trip ke daerah mana?"</li>
          <li>"Pernah ikut trip bareng travel ini sebelumnya?"</li>
        </ul>
        
        <h3>Aktif di Grup WhatsApp</h3>
        <p>Sebelum trip, kamu udah tergabung di grup WA peserta. Nah, jangan jadi silent reader aja!</p>
        <ul>
          <li>Kirim emoji, tanggapi pertanyaan, atau tanya ringan</li>
          <li>Setelah trip selesai, kirim foto dan bilang "makasih ya semuaa, seru banget bareng kalian!"</li>
        </ul>
        <p>Siapa tahu lanjut jadi grup yang tetap aktif ✨</p>
        
        <h3>Jadi Diri Sendiri, Tapi Tetap Terbuka</h3>
        <p>Kamu nggak harus jadi super ekstrovert untuk dapat teman. Cukup ramah, ringan, dan terbuka untuk ngobrol. Jangan terlalu menilai, cukup nikmati dan biarkan koneksi itu tumbuh alami.</p>
        
        <p><strong>Yuk Gabung, Bukan Cuma Buat Jalan-Jalan!</strong> Bersama RENATRAVEL.ID, kamu nggak cuma dapat pengalaman liburan yang menyenangkan—tapi juga teman baru, cerita baru, dan jaringan yang lebih luas.</p>
      `
    },
    {
      id: 13,
      title: "Cara Atasi Homesick Saat Trip Panjang Bareng RENATRAVEL.ID",
      excerpt: "Tips mengatasi rasa rindu rumah saat traveling jangka panjang. Panduan menjaga mental health dan tetap menikmati perjalanan meski jauh dari rumah.",
      category: "health",
      author: "RENATRAVEL.ID",
      date: "22 Juni 2025",
      readTime: "7 menit",
      views: 367,
      comments: 12,
      likes: 58,
      image: "/placeholder.svg",
      featured: false,
      content: `
        <p>Rindu Rumah Itu Wajar, Tapi Jangan Sampai Ganggu Liburanmu! Ikut trip panjang, apalagi beberapa hari jauh dari rumah, bisa bikin sebagian orang merasa homesick atau kangen suasana rumah. Nggak cuma kangen orang tua atau kasur sendiri, kadang juga kangen makanan rumahan, rutinitas, atau bahkan… hewan peliharaan 😢</p>
        
        <h3>Tetap Terhubung dengan Keluarga</h3>
        <p>Di sela-sela perjalanan, sempatkan kirim kabar singkat:</p>
        <ul>
          <li>"Udah sampai lokasi, aman kok!"</li>
          <li>"Tadi makan gudeg, enak juga. Nanti aku bawain!"</li>
        </ul>
        <p>Tips: Jangan terlalu sering video call atau nge-chat terus, biar tetap bisa fokus menikmati perjalananmu juga. Dengan update seperti ini, kamu tetap merasa dekat dan mereka juga tenang.</p>
        
        <h3>Dokumentasikan Setiap Momen</h3>
        <p>Ambil foto/video dan simpan untuk cerita saat pulang nanti. Saat kamu fokus mengabadikan momen, perasaan kangen rumah pelan-pelan akan tergantikan dengan excitement.</p>
        
        <h3>Temukan Rutinitas Ringan yang Familiar</h3>
        <p>Kalau kamu terbiasa journaling, mendengarkan lagu pagi, atau minum teh malam—lanjutkan itu selama trip. Kebiasaan kecil ini bisa bantu kamu tetap merasa "di zona nyaman".</p>
        <p>Contoh:</p>
        <ul>
          <li>Bawa teh favorit</li>
          <li>Pasang playlist yang biasa didengar di rumah</li>
          <li>Tulis satu paragraf jurnal sebelum tidur</li>
        </ul>
        
        <h3>Berinteraksi dengan Teman Baru</h3>
        <p>Jangan mengurung diri saat mulai merasa kangen. Justru, ngobrol dengan peserta lain atau tour leader bisa bantu kamu merasa lebih ringan. Siapa tahu, kamu nemu teman yang juga baru pertama kali pergi jauh!</p>
        <p>Di RENATRAVEL.ID, banyak peserta open trip yang awalnya nggak saling kenal, tapi akhirnya jadi akrab banget 🤝</p>
        
        <h3>Nikmati Kuliner & Cerita Lokal</h3>
        <p>Rasa kangen rumah kadang bisa reda saat kamu mencicipi makanan baru atau mendengar cerita unik dari tempat yang dikunjungi. Kamu bisa menjadikan pengalaman ini sebagai cerita pulang nanti.</p>
        
        <h3>Kirim Kartu Pos (Atau Email) ke Rumah</h3>
        <p>Kalau ke tempat-tempat seperti Jogja, Flores, atau Bali—kamu bisa beli kartu pos, tulis pesan kecil, lalu kirim ke rumah sendiri. Unik dan menyenangkan!</p>
        <p>Contoh : "Hallo dari Bromo! Aku kangen, tapi aku juga bahagia di sini!"</p>
        
        <h3>Ingat Tujuan Kamu Ikut Trip Ini</h3>
        <p>Kenapa kamu berani pergi? Untuk apa kamu ikut trip ini? Untuk belajar mandiri? Untuk healing? Untuk lihat dunia luar?</p>
        <p>Tulis tujuanmu, dan bacalah kembali saat homesick mulai terasa. Contohnya "Aku sudah sampai di sini—sayang kalau cuma mikirin pulang."</p>
        
        <p><strong>Rindu Itu Bagian dari Petualangan</strong> Homesick bukan hal memalukan—justru tanda bahwa kamu punya rumah dan orang-orang yang menyayangimu. Tapi kamu juga sedang tumbuh, menjelajah, dan menciptakan versi terbaik dari dirimu.</p>
      `
    }
  ];

  const currentPost = blogPosts.find(post => post.id === parseInt(id || '1'));
  const relatedPosts = blogPosts.filter(post => post.id !== parseInt(id || '1')).slice(0, 3);

  const comments = [
    {
      id: 1,
      author: "Rina Sari",
      date: "16 Maret 2024",
      content: "Tips yang sangat bermanfaat! Saya sudah mencoba beberapa tips ini dan benar-benar membantu menghemat budget perjalanan.",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      author: "Budi Santoso",
      date: "16 Maret 2024",
      content: "Terima kasih untuk sharingnya. Jadi tambah semangat untuk backpacker-an ke Bali!",
      avatar: "/placeholder.svg"
    }
  ];

  if (!currentPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Artikel tidak ditemukan</h1>
          <Button onClick={() => navigate('/blog')}>Kembali ke Blog</Button>
        </div>
      </div>
    );
  }

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = currentPost.title;
    
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast.success('Link berhasil disalin!');
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast.success(isLiked ? 'Like dibatalkan' : 'Artikel disukai!');
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast.success(isBookmarked ? 'Bookmark dibatalkan' : 'Artikel disimpan!');
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      toast.success('Komentar berhasil ditambahkan!');
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <img 
          src={currentPost.image} 
          alt={currentPost.title}
          className="w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/blog')}
              className="mb-6 text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Blog
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto">
              {currentPost.title}
            </h1>
            <div className="flex items-center justify-center space-x-6 text-white/90">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{currentPost.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{currentPost.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>{currentPost.views} views</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Article Actions */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLike}
                    className={`${isLiked ? 'text-red-500' : 'text-gray-500'} hover:text-red-500`}
                  >
                    <Heart className={`w-5 h-5 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                    {currentPost.likes + (isLiked ? 1 : 0)}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleBookmark}
                    className={`${isBookmarked ? 'text-emerald-600' : 'text-gray-500'} hover:text-emerald-600`}
                  >
                    <Bookmark className={`w-5 h-5 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
                    Simpan
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600 mr-2">Bagikan:</span>
                  <Button variant="ghost" size="sm" onClick={() => handleShare('facebook')}>
                    <Facebook className="w-5 h-5 text-blue-600" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleShare('twitter')}>
                    <Twitter className="w-5 h-5 text-blue-400" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleShare('copy')}>
                    <Link2 className="w-5 h-5 text-gray-600" />
                  </Button>
                </div>
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: currentPost.content }}
              />

              {/* Tags */}
              <div className="flex items-center space-x-2 mb-8">
                <span className="text-gray-600">Tags:</span>
                <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm">
                  {currentPost.category}
                </span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  travel
                </span>
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                  tips
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            Komentar ({comments.length})
          </h3>

          {/* Add Comment Form */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <form onSubmit={handleCommentSubmit}>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Tulis komentar Anda..."
                  className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  rows={4}
                />
                <Button type="submit" className="mt-4 bg-emerald-600 hover:bg-emerald-700">
                  Kirim Komentar
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <Card key={comment.id} className="border-l-4 border-l-emerald-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={comment.avatar} 
                      alt={comment.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-gray-800">{comment.author}</h4>
                        <span className="text-gray-500 text-sm">{comment.date}</span>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Artikel Terkait
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Button 
                    onClick={() => navigate(`/blog/${post.id}`)}
                    variant="outline" 
                    className="w-full"
                  >
                    Baca Artikel <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetail;
