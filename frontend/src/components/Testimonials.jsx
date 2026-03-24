import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star, ChevronDown, ChevronUp } from 'lucide-react';

const reviews = [
  { 
    name: "Kezia & Mario", 
    role: "Wedding Client", 
    niche: "Event",
    text: "Melihat kembali foto pernikahan kami terasa seperti menonton film sinematik. Tone warnanya sangat berkelas dan elegan!" 
  },
  { 
    name: "Bung Ben", 
    role: "Cafe Owner", 
    niche: "Food",
    text: "Foto produk kopi dan pastry kami jadi terlihat sangat premium dan menggugah selera. Sangat merekomendasikan layanan visual mereka." 
  },
  { 
    name: "Adrian Utama", 
    role: "Classic Car Enthusiast", 
    niche: "Otomotif",
    text: "Detail restorasi mobil klasik saya tertangkap dengan sempurna. Presisinya luar biasa dan pencahayaannya sangat dramatis." 
  },
  { 
    name: "Sarah & Max", 
    role: "Pet Owner", 
    niche: "Pet",
    text: "Sulit sekali memfoto Golden Retriever saya yang super aktif, tapi hasilnya sungguh di luar dugaan. Sangat natural dan menggemaskan!" 
  },
  { 
    name: "Jessica Veranda", 
    role: "Event Organizer", 
    niche: "Event",
    text: "Proses kerja yang sangat profesional. Mereka tahu persis cara menangkap momen-momen krusial di setiap acara besar klien kami." 
  },
  { 
    name: "Chef Rian", 
    role: "Culinary Expert", 
    niche: "Food",
    text: "Tekstur dan asap dari hidangan panas saya bisa terlihat begitu hidup di foto. Definisi studio modern yang sangat paham F&B." 
  },
];

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  
  // 1. Buat referensi untuk mendeteksi section ini
  const sectionRef = useRef(null);
  
  // 2. Gunakan useInView dari framer-motion untuk cek apakah section ini ada di layar
  const isInView = useInView(sectionRef);

  return (
    // 3. Pasang ref di section utama
    <section ref={sectionRef} id="testimonials" className="py-24 md:py-32 bg-white overflow-hidden px-6 relative">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-[1px] bg-[#C08552]"></span>
            <span className="text-[#8C5A3C] text-[10px] font-bold uppercase tracking-[0.4em]">Kind Words</span>
            <span className="w-8 h-[1px] bg-[#C08552]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#4B2E2B]">
            Voices of <span className="italic text-[#8C5A3C]">Satisfaction</span>
          </h2>
        </div>
        
        {/* Card Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 ${showAll ? 'pb-24' : ''} md:pb-0`}>
          {reviews.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className={`bg-[#FFF8F0] p-10 md:p-12 rounded-[3rem] relative shadow-sm hover:shadow-xl transition-all duration-300 border border-[#C08552]/10 flex-col justify-between h-full group ${!showAll && i >= 2 ? 'hidden md:flex' : 'flex'}`}
            >
              <Quote className="absolute -top-5 right-10 text-[#C08552]/20 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12" size={80} />
              
              <div className="relative z-10 flex-grow">
                <div className="flex gap-1 mb-6 text-[#C08552]">
                  {[...Array(5)].map((_, index) => <Star key={index} size={14} fill="currentColor" className="opacity-90" />)}
                </div>
                <p className="text-[#4B2E2B]/80 text-base md:text-lg font-light leading-relaxed mb-8 italic">
                  "{t.text}"
                </p>
              </div>
              
              <div className="border-t border-[#C08552]/20 pt-6 flex items-end justify-between">
                <div>
                  <h4 className="font-serif font-bold text-[#4B2E2B] text-lg mb-1">{t.name}</h4>
                  <p className="text-[10px] text-[#8C5A3C] uppercase tracking-widest">{t.role}</p>
                </div>
                <span className="text-[9px] border border-[#8C5A3C]/30 text-[#8C5A3C] px-3 py-1 rounded-full uppercase tracking-wider bg-white">
                  {t.niche}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tombol See More (NORMAL / INLINE) - Tampil saat showAll FALSE */}
        {!showAll && (
          <div className="mt-10 flex justify-center md:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="flex items-center gap-2 px-8 py-3 bg-white border-2 border-[#8C5A3C] text-[#8C5A3C] rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#8C5A3C] hover:text-white transition-colors shadow-sm"
            >
              See More
              <ChevronDown size={16} />
            </button>
          </div>
        )}

      </div>

      {/* 4. Tombol Hide Reviews (FIXED) - Hanya tampil jika showAll TRUE DAN section sedang isInView */}
      {showAll && isInView && (
        <div className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-bottom-5 fade-in duration-300">
          <button
            onClick={() => setShowAll(false)}
            className="flex items-center gap-2 px-8 py-4 bg-[#8C5A3C] text-white rounded-full font-bold uppercase tracking-widest text-[10px] shadow-[0_10px_30px_rgba(140,90,60,0.4)] hover:bg-[#4B2E2B] active:scale-95 transition-all"
          >
            Hide Reviews
            <ChevronUp size={16} />
          </button>
        </div>
      )}

    </section>
  );
};

export default Testimonials;