import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Camera, Send, ChevronRight, HelpCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { businessConfig } from '../config/businessConfig';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Halo! Ada yang bisa saya bantu?" }
  ]);
  const scrollRef = useRef(null);

  const faqs = [
    { q: "Rate harga?", a: "Mulai Rp 2.5jt - Rp 15jt+. Detail di WhatsApp." },
    { q: "Luar kota?", a: "Ya, tersedia untuk seluruh Indonesia." },
    { q: "Lama proses?", a: "Proses edit 7-14 hari kerja." },
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleAsk = (item) => {
    setMessages(prev => [...prev, { role: 'user', text: item.q }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: item.a }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-1000">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 10 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.9, y: 10 }} 
            className="absolute bottom-20 right-0 w-75 max-w-[calc(100vw-2rem)] bg-[#1A120B] border border-[#DAC0A3]/20 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header - Lebih Ramping */}
            <div className="p-5 bg-[#3C2A21] flex justify-between items-center border-b border-[#DAC0A3]/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#DAC0A3] flex items-center justify-center text-[#1A120B]">
                  <Camera size={16} />
                </div>
                <div>
                  <h3 className="text-[#F8F0E5] text-[11px] font-serif tracking-widest uppercase font-bold"> AI</h3>
                  <p className="text-[8px] text-[#DAC0A3] uppercase opacity-70">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-[#DAC0A3]">
                <X size={18} />
              </button>
            </div>

            {/* Chat Area - Tinggi Dikurangi */}
            <div ref={scrollRef} className="h-64 overflow-y-auto p-5 space-y-3 scrollbar-hide bg-[#1A120B]">
              {messages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[90%] p-3 text-[11px] leading-relaxed ${msg.role === 'bot' ? 'bg-[#3C2A21] text-[#F8F0E5] rounded-2xl rounded-tl-none' : 'bg-[#DAC0A3] text-[#1A120B] rounded-2xl rounded-tr-none font-bold'}`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FAQ Menu - Lebih Padat */}
            <div className="p-4 bg-[#130D08] border-t border-white/5 space-y-2">
              <div className="flex flex-col gap-1.5">
                {faqs.map((item, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleAsk(item)}
                    className="flex items-center justify-between w-full p-2.5 rounded-xl bg-white/5 text-[#F8F0E5] text-[10px] hover:bg-[#DAC0A3] hover:text-[#1A120B] transition-all group"
                  >
                    {item.q}
                    <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
              <a 
                href={businessConfig.contact.whatsapp}
                target="_blank"
                className="flex items-center justify-center gap-2 w-full mt-2 py-3 bg-[#DAC0A3] text-[#1A120B] text-[10px] font-black uppercase tracking-widest rounded-xl"
              >
                WhatsApp <Send size={12} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button - Lebih Kecil */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)} 
        className="w-16 h-16 bg-[#DAC0A3] rounded-[1.8rem] flex flex-col items-center justify-center text-[#1A120B] shadow-xl border-4 border-[#1A120B]"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default Chatbot;