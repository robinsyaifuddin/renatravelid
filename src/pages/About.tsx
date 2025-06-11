import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Award, Globe, Heart, Shield, Star, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const About = () => {
  const isMobile = useIsMobile();

  const features = [{
    icon: Award,
    title: "Pengalaman 15+ Tahun",
    description: "Kami telah melayani ribuan wisatawan dengan pengalaman tak terlupakan di seluruh Nusantara."
  }, {
    icon: Users,
    title: "Tim Profesional",
    description: "Guide berpengalaman dan tim customer service yang siap membantu 24/7."
  }, {
    icon: Shield,
    title: "Terpercaya & Aman",
    description: "Perjalanan Anda dijamin aman dengan asuransi perjalanan dan protokol keselamatan terbaik."
  }, {
    icon: Globe,
    title: "Destinasi Lengkap",
    description: "Dari Sabang sampai Merauke, kami menyediakan paket wisata ke seluruh Indonesia."
  }];

  const team = [{
    name: "Ahmad Susanto",
    position: "CEO & Founder",
    image: "/placeholder.svg",
    description: "Pendiri dengan passion tinggi untuk pariwisata Indonesia"
  }, {
    name: "Sari Dewi",
    position: "Head of Operations",
    image: "/placeholder.svg",
    description: "Ahli dalam operasional dan manajemen perjalanan"
  }, {
    name: "Budi Hartono",
    position: "Senior Travel Consultant",
    image: "/placeholder.svg",
    description: "Konsultan perjalanan dengan pengalaman 12+ tahun"
  }];

  return <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Tentang Renatravel.id</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Menjelajahi Keindahan Indonesia Bersama Ahlinya
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              Kami adalah perusahaan travel terdepan yang mengkhususkan diri dalam wisata domestik Indonesia. 
              Dengan pengalaman lebih dari 15 tahun, kami telah melayani ribuan wisatawan untuk menjelajahi 
              keindahan Nusantara dari Sabang sampai Merauke.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">15+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">10K+</div>
              <div className="text-gray-600">Wisatawan Puas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">200+</div>
              <div className="text-gray-600">Destinasi</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
              <div className="text-gray-600">Tingkat Kepuasan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Mengapa Memilih Kami?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen memberikan pengalaman wisata terbaik dengan layanan profesional dan harga terjangkau
            </p>
          </div>
          
          {isMobile ? (
            <div className="overflow-hidden">
              <div className="flex animate-[marquee_20s_linear_infinite] space-x-6">
                {[...features, ...features].map((feature, index) => (
                  <div key={index} className="flex-shrink-0 w-72 text-center group p-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Tim Profesional Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bertemu dengan orang-orang hebat di balik kesuksesan perjalanan wisata Anda
            </p>
          </div>
          
          {isMobile ? (
            <div className="overflow-hidden">
              <div className="flex animate-[marquee-slow_15s_linear_infinite] space-x-6">
                {[...team, ...team].map((member, index) => (
                  <div key={index} className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h3>
                      <p className="text-emerald-600 font-medium mb-2 text-sm">{member.position}</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">{member.description}</p>
                      <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-emerald-600 font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.description}</p>
                    <div className="flex mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Vision Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Visi & Misi Kami</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Visi</h3>
                    <p className="text-gray-600">
                      Menjadi perusahaan travel terdepan yang memperkenalkan keindahan dan keragaman budaya Indonesia 
                      kepada dunia, sambil mendukung pengembangan pariwisata berkelanjutan.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Misi</h3>
                    <p className="text-gray-600">
                      Memberikan pengalaman wisata yang tak terlupakan melalui layanan berkualitas tinggi, 
                      harga terjangkau, dan komitmen terhadap kelestarian alam serta budaya lokal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img src="/placeholder.svg" alt="Tim WisataNusantara" className="w-full h-96 object-cover rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Siap merencanakan perjalanan impian Anda? Tim kami siap membantu 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Alamat Kantor</h3>
                  <p className="text-gray-600">
                    Jl. Raya Kuta No. 123<br />
                    Badung, Bali 80361<br />
                    Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Telepon</h3>
                  <p className="text-gray-600">
                    +62 361 123 456<br />
                    +62 812 3456 7890
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-600">
                    info@wisatanusantara.com<br />
                    booking@wisatanusantara.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Jam Operasional</h3>
                  <p className="text-gray-600">
                    Senin - Jumat: 08:00 - 18:00<br />
                    Sabtu - Minggu: 09:00 - 16:00
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="Masukkan nama lengkap" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="Masukkan email" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Nomor Telepon</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="Masukkan nomor telepon" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subjek</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="Masukkan subjek" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Pesan</label>
                  <textarea rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="Tulis pesan Anda..."></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-lg font-medium hover:from-emerald-600 hover:to-teal-600 transition-all duration-200">
                  Kirim Pesan
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;
