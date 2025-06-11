import React from 'react';
import { Phone, Mail, MessageCircle, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
const SupportSection = () => {
  const navigate = useNavigate();
  const supportCards = [{
    icon: <Headphones className="w-8 h-8" />,
    title: "Butuh Bantuan untuk Wisata & Perjalanan?",
    description: "Tim dukungan pelanggan 24/7 kami siap membantu Anda dengan semua kebutuhan perjalanan dan pertanyaan wisata Anda.",
    buttonText: "Dapatkan Bantuan",
    bgColor: "from-blue-500 to-blue-600",
    textColor: "text-white",
    action: () => navigate('/kontak')
  }, {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Siap Memulai Liburan Impian Anda?",
    description: "Mulai rencanakan liburan impian Anda hari ini dengan konsultan perjalanan ahli kami dan paket eksklusif yang menawan.",
    buttonText: "Mulai Sekarang",
    bgColor: "from-orange-500 to-orange-600",
    textColor: "text-white",
    action: () => navigate('/tour')
  }];
  return <section className="py-16 bg-teal-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {supportCards.map((card, index) => <div key={index} className={`bg-gradient-to-r ${card.bgColor} rounded-2xl p-8 text-center relative overflow-hidden group hover:shadow-2xl transition-all duration-300`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-lime-700"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className={card.textColor}>
                      {card.icon}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-2xl md:text-3xl font-bold ${card.textColor} mb-4 leading-tight`}>
                  {card.title}
                </h3>

                {/* Description */}
                <p className={`${card.textColor} opacity-90 mb-8 text-lg leading-relaxed`}>
                  {card.description}
                </p>

                {/* Button */}
                <Button onClick={card.action} className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-gray-800 transition-all duration-300 px-8 py-3 rounded-full font-semibold text-lg group-hover:scale-105">
                  {card.buttonText}
                </Button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full opacity-30 group-hover:scale-125 transition-transform duration-700"></div>
            </div>)}
        </div>

        {/* Contact Options - Compact Mobile Layout */}
        
      </div>
    </section>;
};
export default SupportSection;