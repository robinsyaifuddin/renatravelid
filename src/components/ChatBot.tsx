
import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
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

  const botResponses: { [key: string]: string } = {
    "destinasi": "Destinasi wisata terpopuler kami meliputi Bali, Yogyakarta, Raja Ampat, Komodo, Borobudur, dan Bromo. Setiap destinasi menawarkan pengalaman unik dengan paket lengkap akomodasi dan transportasi.",
    "booking": "Untuk booking tour, Anda bisa hubungi kami melalui WhatsApp di +62 812-9573-5703 atau klik tombol 'Konsultasi Gratis' di website kami. Tim kami siap membantu 24/7!",
    "paket": "Ya, kami menyediakan berbagai paket wisata untuk keluarga, honeymoon, gathering, dan solo traveler. Paket dapat disesuaikan dengan budget dan kebutuhan Anda.",
    "harga": "Harga paket tour ke Bali mulai dari Rp 2.500.000 per orang untuk 3D2N. Harga sudah termasuk hotel, transportasi, dan guide. Hubungi kami untuk penawaran terbaik!",
    "fasilitas": "Fasilitas yang kami sediakan: hotel berbintang, transportasi AC, guide berpengalaman, makan sesuai itinerary, dokumentasi, dan asuransi perjalanan.",
    "pembatalan": "Kebijakan pembatalan: 100% refund jika batal H-7, 50% refund H-3 sampai H-6, tidak ada refund H-1 sampai H-2. Syarat dan ketentuan berlaku."
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message when first opened
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "Halo! Saya Renatravel BOT, asisten virtual Anda. Saya siap membantu menjawab pertanyaan seputar layanan travel kami. Silakan pilih topik di bawah atau ketik pertanyaan Anda!",
        isBot: true,
        timestamp: new Date()
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

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = generateBotResponse(message);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userMessage: string): string => {
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
      return "Terima kasih atas pertanyaan Anda! Untuk informasi lebih detail, silakan hubungi customer service kami di +62 812-9573-5703 atau klik 'Konsultasi Gratis' untuk berbicara langsung dengan tim ahli kami.";
    }
  };

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <div className="relative">
            <Button
              onClick={() => setIsOpen(true)}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
            >
              <Bot className="w-8 h-8 text-white group-hover:animate-bounce" />
            </Button>
            
            {/* Tooltip */}
            <div className="absolute bottom-20 right-0 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Butuh bantuan? Chat dengan Renatravel BOT!
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden animate-scale-in md:w-96 sm:w-80 xs:w-72">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Renatravel BOT</h3>
                <p className="text-sm opacity-90">Customer Service AI</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isBot
                      ? 'bg-white text-gray-800 shadow-sm'
                      : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-white/70'}`}>
                    {message.timestamp.toLocaleTimeString('id-ID', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            {/* Common Questions */}
            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600 mb-3">Pertanyaan yang sering ditanyakan:</p>
                {commonQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuestionClick(question)}
                    className="w-full text-left justify-start h-auto p-3 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200"
                  >
                    <MessageCircle className="w-4 h-4 mr-2 text-emerald-600" />
                    <span className="text-sm">{question}</span>
                  </Button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
                placeholder="Ketik pertanyaan Anda..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
              />
              <Button
                onClick={() => handleSendMessage(inputMessage)}
                disabled={!inputMessage.trim()}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 p-2"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Responsive Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default ChatBot;
