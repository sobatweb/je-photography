import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, Users, Star, ArrowUpRight, CheckCircle2, Aperture, Scan } from 'lucide-react';

const cardData = [
  {
    id: 1,
    icon: Star,
    tag: "Je Cekrek",
    title: "Food & Products",
    subtitle: "Culinary & Products",
    desc: "Bikin menu atau produk andalanmu nggak cuma fungsional, tapi juga estetik buat dipandang. Yuk, kita buat visual brand kamu makin 'mahal' dan bikin siapa pun yang lihat langsung pengen beli!",
    accent: "#b88a44",
    bgImage: "/images/food/food1.webp",
    logo: "/assets/Logo/image01.webp",
    href: "#gallery",
  },
  {
    id: 2,
    icon: Users,
    tag: "Je Portraiture",
    title: "Event",
    subtitle: "Gathering & Celebration",
    desc: "Setiap momen punya ceritanya sendiri. Sini, aku bantu abadikan keseruan event kamu—dari tawa bareng temen sampe vibes haru wisuda—biar bisa dikenang terus selamanya!",
    accent: "#b88a44",
    bgImage: "/images/event/event19.webp",
    logo: "/assets/Logo/image03.webp",
    href: "#gallery",
  },
  {
    id: 3,
    icon: Camera,
    tag: "Je Carshoot",
    title: "Automotive",
    subtitle: "Modified & Speed",
    desc: "Mobil atau motor kamu bukan sekadar mesin, tapi kebanggaan. Ayo kita bikin cinematic shoot yang nonjolin lekuk agresif dan detail keren tunggangan kesayanganmu!",
    accent: "#b88a44",
    bgImage: "/images/otomotif/auto17.webp",
    logo: "/assets/Logo/image02.webp",
    href: "#gallery",
  },
  {
    id: 4,
    icon: Heart,
    tag: "Je Petshoot",
    title: "Pet",
    subtitle: "Animals & Nature",
    desc: "Si anabul lagi lucu-lucunya? Jangan sampe kelewatan! Kita potret tingkah gemas dan karakter unik mereka dalam frame yang hangat buat jadi kenangan manis kamu.",
    accent: "#b88a44",
    bgImage: "/images/pet/pet12.webp",
    logo: "/assets/Logo/image04.webp",
    href: "#gallery",
  },
];

const SimpleCard = ({ card, index }) => {
  const Icon = card.icon;

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId.replace('#', ''));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      className="h-full flex flex-col relative group pt-12 md:pt-16"
    >
      {/* Container Card: Warna sama dengan BG (#1a110a) */}
   
      <div className="relative z-10 bg-[#1a110a] rounded-[2.5rem] p-4 flex flex-col h-full overflow-hidden transition-all duration-500
                      border-2 border-[#b88a44]/40 
                      shadow-[0_0_40px_-10px_rgba(184,138,68,0.3)]
                      group-hover:shadow-[0_0_50px_-5px_rgba(184,138,68,0.5)] group-hover:border-[#b88a44]/70">
        
        {/* Area Foto */}
        <div className="relative aspect-[10/11] w-full overflow-hidden rounded-[2rem] bg-black/40 shrink-0 border border-white/5">
          <img
            src={card.bgImage}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute top-4 left-4">
            <div className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md flex items-center gap-2 border border-[#b88a44]/30">
              <Icon size={12} className="text-[#b88a44]" />
              <span className="text-[10px] font-extrabold text-white uppercase tracking-wider">
                {card.tag}
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 pt-6 px-2 pb-2">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-2xl font-bold text-white tracking-tight">{card.title}</h3>
            <CheckCircle2 size={18} className="text-[#b88a44] fill-[#b88a44]/10" />
          </div>
          <p className="text-sm font-medium text-[#b88a44] mb-4 italic opacity-90">{card.subtitle}</p>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">{card.desc}</p>

          <div className="flex flex-col gap-3 mt-auto">
            {/* Primary Button */}
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="relative flex justify-center items-center w-full px-6 h-12 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group/btn1"
              style={{ backgroundColor: card.accent }}
            >
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-black transition-transform duration-300 group-hover/btn1:-translate-x-1">
                Book Session
              </span>
              <div className="absolute right-3 w-7 h-7 rounded-full bg-black/10 flex items-center justify-center transition-all duration-300 group-hover/btn1:bg-black group-hover/btn1:rotate-45">
                <ArrowUpRight size={14} strokeWidth={2.5} className="text-white group-hover/btn1:text-[#b88a44] transition-colors" />
              </div>
            </a>

            {/* Secondary Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('changeGalleryCategory', { detail: card.title }));
                const targetElement = document.getElementById(card.href.replace('#', ''));
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex justify-center items-center w-full h-12 rounded-2xl bg-white/[0.03] border border-white/10 text-white font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-300 hover:bg-white hover:text-black hover:scale-[1.02] active:scale-[0.98]"
            >
              Look Our Gallery
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Cards = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#1a110a] px-6 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[5%] left-0 w-full opacity-[0.02] overflow-hidden">
          <h2 className="text-[35vw] font-black text-white leading-none uppercase tracking-tighter">
            STUDIO
          </h2>
        </div>
        
        {/* Subtle Light Leaks */}
        <div className="absolute top-[-5%] right-[-10%] w-[400px] h-[400px] bg-[#b88a44]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
          <motion.div
            className="space-y-4 text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center md:justify-start gap-3">
             
              <span className="text-[#b88a44] text-[12px] font-bold uppercase tracking-[0.5em]">
                Exquisite Services
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">
              Capture <span className="italic text-[#b88a44]">Essence</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-stretch">
          {cardData.map((card, i) => (
            <SimpleCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;