
import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  followUpQuestions?: string[];
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const commonQuestions = [
    "Destinasi wisata terpopuler di Indonesia?",
    "Bagaimana cara booking tour?",
    "Apakah tersedia paket liburan keluarga?",
    "Berapa harga paket tour ke Bali?",
    "Fasilitas apa saja yang disediakan?",
    "Bagaimana kebijakan pembatalan?"
  ];

  const followUpQuestions = {
    destinasi: [
      "Tips memilih destinasi yang tepat?",
      "Kapan waktu terbaik berkunjung?",
      "Apa yang harus dipersiapkan?",
      "Rekomendasi budget untuk liburan?"
    ],
    booking: [
      "Dokumen apa saja yang diperlukan?",
      "Berapa lama proses konfirmasi?",
      "Apakah bisa reschedule jadwal?",
      "Metode pembayaran apa saja?"
    ],
    paket: [
      "Perbedaan paket ekonomi dan premium?",
      "Apakah tersedia guide berbahasa Inggris?",
      "Bagaimana dengan makanan halal?",
      "Asuransi perjalanan sudah termasuk?"
    ],
    harga: [
      "Apakah ada diskon untuk grup?",
      "Cara mendapat harga terbaik?",
      "Termasuk apa saja dalam paket?",
      "Biaya tambahan yang mungkin ada?"
    ],
    fasilitas: [
      "Kualitas hotel yang disediakan?",
      "Transportasi dari bandara?",
      "Aktivitas optional apa saja?",
      "Layanan darurat 24 jam?"
    ],
    pembatalan: [
      "Proses klaim asuransi?",
      "Force majeure bagaimana?",
      "Reschedule lebih mudah daripada cancel?",
      "Biaya administrasi pembatalan?"
    ],
    general: [
      "Tips traveling aman dan nyaman?",
      "Destinasi trending tahun ini?",
      "Paket honeymoon yang romantis?",
      "Aktivitas seru untuk keluarga?"
    ]
  };

  const botResponses: { [key: string]: { text: string; followUp: string } } = {
    "destinasi": {
      text: "Destinasi wisata terpopuler kami meliputi Bali, Yogyakarta, Raja Ampat, Komodo, Borobudur, dan Bromo. Setiap destinasi menawarkan pengalaman unik dengan paket lengkap akomodasi dan transportasi.",
      followUp: "destinasi"
    },
    "booking": {
      text: "Untuk booking tour, Anda bisa hubungi kami melalui WhatsApp di +62 812-9573-5703 atau klik tombol 'Konsultasi Gratis' di website kami. Tim kami siap membantu 24/7!",
      followUp: "booking"
    },
    "paket": {
      text: "Ya, kami menyediakan berbagai paket wisata untuk keluarga, honeymoon, gathering, dan solo traveler. Paket dapat disesuaikan dengan budget dan kebutuhan Anda.",
      followUp: "paket"
    },
    "harga": {
      text: "Harga paket tour ke Bali mulai dari Rp 2.500.000 per orang untuk 3D2N. Harga sudah termasuk hotel, transportasi, dan guide. Hubungi kami untuk penawaran terbaik!",
      followUp: "harga"
    },
    "fasilitas": {
      text: "Fasilitas yang kami sediakan: hotel berbintang, transportasi AC, guide berpengalaman, makan sesuai itinerary, dokumentasi, dan asuransi perjalanan.",
      followUp: "fasilitas"
    },
    "pembatalan": {
      text: "Kebijakan pembatalan: 100% refund jika batal H-7, 50% refund H-3 sampai H-6, tidak ada refund H-1 sampai H-2. Syarat dan ketentuan berlaku.",
      followUp: "pembatalan"
    },
    "default": {
      text: "Terima kasih atas pertanyaan Anda! Untuk informasi lebih detail, silakan hubungi customer service kami di +62 812-9573-5703 atau klik 'Konsultasi Gratis' untuk berbicara langsung dengan tim ahli kami.",
      followUp: "general"
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "Halo! Saya Renatravel BOT, asisten virtual Anda. Saya siap membantu menjawab pertanyaan seputar layanan travel kami. Silakan pilih topik di bawah atau ketik pertanyaan Anda!",
        isBot: true,
        timestamp: new Date(),
        followUpQuestions: commonQuestions
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateBotResponse(message);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse.text,
        isBot: true,
        timestamp: new Date(),
        followUpQuestions: followUpQuestions[botResponse.followUp as keyof typeof followUpQuestions] || followUpQuestions.general
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userMessage: string): { text: string; followUp: string } => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('destinasi') || lowerMessage.includes('wisata') || lowerMessage.includes('tempat')) {
      return botResponses.destinasi;
    } else if (lowerMessage.includes('booking') || lowerMessage.includes('pesan') || lowerMessage.includes('book')) {
      return botResponses.booking;
    } else if (lowerMessage.includes('paket') || lowerMessage.includes('keluarga') || lowerMessage.includes('liburan')) {
      return botResponses.paket;
    } else if (lowerMessage.includes('harga') || lowerMessage.includes('biaya') || lowerMessage.includes('bali')) {
      return botResponses.harga;
    } else if (lowerMessage.includes('fasilitas') || lowerMessage.includes('layanan') || lowerMessage.includes('include')) {
      return botResponses.fasilitas;
    } else if (lowerMessage.includes('batal') || lowerMessage.includes('refund') || lowerMessage.includes('cancel')) {
      return botResponses.pembatalan;
    } else {
      return botResponses.default;
    }
  };

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
          >
            <Bot className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </Button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <>
          {/* Mobile Overlay */}
          <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={() => setIsOpen(false)} />
          
          {/* Chat Container */}
          <div className="fixed inset-4 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-scale-in md:inset-auto md:bottom-6 md:right-6 md:w-96 md:h-[600px]">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-3 md:p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm md:text-lg">Renatravel BOT</h3>
                  <p className="text-xs md:text-sm opacity-90">Customer Service AI</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1"
              >
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div key={message.id} className="space-y-2">
                  <div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-[85%] md:max-w-[80%] p-2 md:p-3 rounded-2xl ${
                      message.isBot
                        ? 'bg-white text-gray-800 shadow-sm'
                        : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
                    }`}>
                      <p className="text-xs md:text-sm leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-white/70'}`}>
                        {message.timestamp.toLocaleTimeString('id-ID', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Follow-up Questions */}
                  {message.isBot && message.followUpQuestions && (
                    <div className="space-y-2 ml-2">
                      <p className="text-xs font-medium text-gray-600">Pertanyaan lainnya yang mungkin Anda butuhkan:</p>
                      <div className="grid grid-cols-1 gap-1.5">
                        {message.followUpQuestions.slice(0, 4).map((question, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuestionClick(question)}
                            className="text-left justify-start h-auto p-2 text-xs border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 rounded-lg"
                          >
                            <MessageCircle className="w-3 h-3 mr-1.5 text-emerald-600 flex-shrink-0" />
                            <span className="leading-tight">{question}</span>
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-2 md:p-3 rounded-2xl shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 md:p-4 border-t border-gray-200 bg-white">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
                  placeholder="Ketik pertanyaan Anda..."
                  className="flex-1 px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-xs md:text-sm"
                />
                <Button
                  onClick={() => handleSendMessage(inputMessage)}
                  disabled={!inputMessage.trim()}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 p-2"
                >
                  <Send className="w-3 h-3 md:w-4 md:h-4" />
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ChatBot;
