import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Award, Globe, Heart, Shield, Star, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
const About = () => {
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
            <p className="text-lg opacity-80 max-w-3xl mx-auto">RENATRAVEL.ID adalah perusahaan penyedia layanan perjalanan wisata yang berkomitmen untuk menghadirkan pengalaman liburan yang menyenangkan, aman, dan bermakna. Kami menyediakan berbagai jenis paket wisata, mulai dari:</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-600 mb-2">15+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-600 mb-2">10K+</div>
              <div className="text-gray-600">Wisatawan Puas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-600 mb-2">200+</div>
              <div className="text-gray-600">Destinasi</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-600 mb-2">98%</div>
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
          
          {/* Desktop Grid View */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>)}
          </div>

          {/* Mobile Marquee View */}
          <div className="lg:hidden">
            <div className="overflow-hidden">
              <div className="features-marquee">
                {[...features, ...features].map((feature, index) => <div key={index} className="flex-shrink-0 w-80 text-center group p-4 mx-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>)}
              </div>
            </div>
          </div>
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
          
          {/* Desktop Grid View */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-brand-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />)}
                  </div>
                </div>
              </div>)}
          </div>

          {/* Mobile Single Profile View - Centered */}
          <div className="md:hidden">
            <div className="max-w-sm mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src={team[0].image} alt={team[0].name} className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{team[0].name}</h3>
                  <p className="text-brand-600 font-medium mb-3">{team[0].position}</p>
                  <p className="text-gray-600 mb-4">{team[0].description}</p>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                    <Heart className="w-6 h-6 text-emerald-600 " />
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
      

      <Footer />
    </div>;
};
export default About;