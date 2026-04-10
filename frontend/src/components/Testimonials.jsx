import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star, ChevronDown, ChevronUp } from 'lucide-react';

const reviews = [
  { 
    name: "Mr. J** L**", 
    role: "Car Seller", 
    niche: "Car",
    text: "bro jujur ya, ini mobil gw sebelumnya sepi. abis pake foto lu langsung ada yg chat2. ngaruh banget ternyata" 
  },
  { 
    name: "Ms. A** K**", 
    role: "Pet Owner", 
    niche: "Pet",
    text: "anjing gw susah diem loh, gw aja sering gagal fotoin. lu bisa dapet moment dia lagi lucu gitu gimana dah" 
  },
  { 
    name: "Mr. R** D**", 
    role: "Event Client", 
    niche: "Event",
    text: "ini cepet banget sih. kemarin event, hari ini udh ada hasil. ga nyangka secepet itu" 
  },
  { 
    name: "Ms. C** T**", 
    role: "F&B Business Owner", 
    niche: "Food",
    text: "warnanya enak diliat, ga aneh2. tetep keliatan asli tapi tajem, jadi keliatan enak" 
  },
  { 
    name: "Mr. B** S**", 
    role: "Car Seller", 
    niche: "Car",
    text: "beda jauh sih sama foto yg sebelumnya. sekarang orang jd lebih yakin buat nanya mobilnya" 
  },
  { 
    name: "Ms. L** M**", 
    role: "Pet Owner", 
    niche: "Pet",
    text: "thanks ya udh sabar. kucing gw ribet banget padahal, tapi hasilnya dapet semua moment bagusnya" 
  },
  { 
    name: "Mr. D** P**", 
    role: "Event Client", 
    niche: "Event",
    text: "editnya enak diliat, ada feel cinematic tapi ga lebay. masih natural" 
  },
  { 
    name: "Ms. V** N**", 
    role: "F&B Business Owner", 
    niche: "Food",
    text: "detail makanannya keliatan semua. teksturnya keluar, jadi lebih menarik buat dipost" 
  },
  { 
    name: "Mr. H** W**", 
    role: "Car Seller", 
    niche: "Car",
    text: "ini sih ngebantu jualan banget. pas dipasang, responnya langsung beda" 
  },
  { 
    name: "Ms. E** S**", 
    role: "Pet Owner", 
    niche: "Pet",
    text: "timing lu pas terus. dia lagi gerak aja masih bisa dapet ekspresi yg bagus" 
  },
  { 
    name: "Mr. T** A**", 
    role: "Event Client", 
    niche: "Event",
    text: "banyak moment yg gw ga sadar, tapi keambil semua. pas liat hasilnya jadi kerasa lagi suasananya" 
  },
  { 
    name: "Ms. N** R**", 
    role: "Brand Owner", 
    niche: "Food",
    text: "foto nya clean, warna tetep natural. cocok banget buat branding produk sih" 
  },
  { 
    name: "Mr. K** F**", 
    role: "Car Seller", 
    niche: "Car",
    text: "listing gw jadi keliatan lebih proper. buyer juga lebih serius nanyanya" 
  },
  { 
    name: "Ms. P** Y**", 
    role: "Event Client", 
    niche: "Event",
    text: "turnaround cepet banget. ga sampe 2 hari udh jadi semua, itu sih jarang" 
  },
  { 
    name: "Mr. S** G**", 
    role: "Business Owner", 
    niche: "Mix",
    text: "gw udh coba buat mobil sama produk, dua2nya oke. hasilnya konsisten sih" 
  }
];

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 md:py-32 bg-white overflow-hidden px-6 relative">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-px bg-[#C08552]"></span>
            <span className="text-[#8C5A3C] text-[10px] font-bold uppercase tracking-[0.4em]">Kind Words</span>
            <span className="w-8 h-px bg-[#C08552]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#4B2E2B]">
            Voices of <span className="italic text-[#8C5A3C]">Satisfaction</span>
          </h2>
        </div>
        
        {/* Card Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 ${showAll ? 'pb-24' : ''}`}>
          {reviews.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 6) * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className={`bg-[#FFF8F0] p-10 md:p-12 rounded-[3rem] relative shadow-sm hover:shadow-xl transition-all duration-300 border border-[#C08552]/10 flex-col justify-between h-full group ${!showAll && i >= 6 ? 'hidden' : 'flex'}`}
            >
              <Quote className="absolute -top-5 right-10 text-[#C08552]/20 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12" size={80} />
              
              <div className="relative z-10 grow">
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

        {!showAll && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="flex items-center gap-2 px-8 py-3 md:px-10 md:py-4 bg-white border-2 border-[#8C5A3C] text-[#8C5A3C] rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#8C5A3C] hover:text-white transition-colors shadow-sm"
            >
              See All Reviews
              <ChevronDown size={16} />
            </button>
          </div>
        )}

      </div>

      {showAll && isInView && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-100 animate-in slide-in-from-bottom-5 fade-in duration-300">
          <button
            onClick={() => setShowAll(false)}
            className="flex items-center gap-2 px-8 py-4 md:px-10 md:py-4 bg-[#8C5A3C] text-white rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs shadow-[0_10px_30px_rgba(140,90,60,0.4)] hover:bg-[#4B2E2B] active:scale-95 transition-all"
          >
            Hide Reviews
            <ChevronUp size={18} />
          </button>
        </div>
      )}

    </section>
  );
};

export default Testimonials;