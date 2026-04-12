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
    accent: "#8c6b36",
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
    accent: "#8c6b36",
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
    accent: "#8c6b36",
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
    accent: "#8c6b36",
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
      <div className="relative z-10 bg-white rounded-[2.5rem] p-4 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden">
        {/* Area Foto */}
        <div className="relative aspect-[10/11] w-full overflow-hidden rounded-[2rem] bg-gray-100 shrink-0">
          <img
            src={card.bgImage}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <div className="px-3 py-1.5 rounded-full bg-white shadow-lg flex items-center gap-2 border border-gray-100">
              <Icon size={12} className="text-[#b88a44]" />
              <span className="text-[10px] font-extrabold text-[#1a110a] uppercase tracking-wider">
                {card.tag}
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 pt-6 px-2 pb-2">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-2xl font-bold text-[#1a110a] tracking-tight">{card.title}</h3>
            <CheckCircle2 size={20} className="text-green-500 fill-green-500/10" />
          </div>
          <p className="text-sm font-medium text-[#b88a44]/80 mb-4 italic">{card.subtitle}</p>
          <p className="text-[#1a110a]/60 text-sm leading-relaxed mb-8 flex-1">{card.desc}</p>

          <div className="flex flex-col gap-3 mt-auto">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="relative flex justify-center items-center w-full px-6 h-12 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg group/btn1"
              style={{ backgroundColor: card.accent }}
            >
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-white transition-transform duration-300 group-hover/btn1:-translate-x-1">
                Book Session
              </span>
              <div className="absolute right-3 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 group-hover/btn1:bg-white group-hover/btn1:rotate-45">
                <ArrowUpRight size={14} strokeWidth={2.5} className="text-white group-hover/btn1:text-black transition-colors" />
              </div>
            </a>

              <button
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('changeGalleryCategory', { detail: card.title }));
                const targetElement = document.getElementById(card.href.replace('#', ''));
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex justify-center items-center w-full h-12 rounded-2xl bg-gray-50 border border-gray-100 text-[#1a110a]/80 font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-300 hover:bg-[#1a110a] hover:text-[#b88a44] hover:scale-[1.02] active:scale-[0.98] hover:shadow-md"
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

      {/* --- BACKGROUND ACCENTS (DEKORASI RESPONSIVE) --- */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">

        {/* 1. Giant Outlined Typography - Adjusted for Mobile */}
        <div className="absolute top-[5%] md:top-10 left-0 w-full opacity-[0.04] md:opacity-[0.03] overflow-hidden">
          <h2 className="text-[35vw] md:text-[22vw] font-black text-white leading-none tracking-tighter uppercase -ml-4 md:ml-0">
            STUDIO
          </h2>
        </div>
        <div className="absolute bottom-[5%] md:bottom-10 right-0 w-full opacity-[0.04] md:opacity-[0.03] overflow-hidden flex justify-end">
          <h2 className="text-[35vw] md:text-[22vw] font-black text-white leading-none tracking-tighter uppercase italic -mr-4 md:mr-0">
            VISUAL
          </h2>
        </div>

        {/* 2. Bold Light Leaks - Scaled for Mobile Visibility */}
        <div className="absolute top-[-5%] right-[-15%] md:right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#b88a44] rounded-full blur-[80px] md:blur-[120px] opacity-30 md:opacity-20" />
        <div className="absolute bottom-[-5%] left-[-15%] md:left-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#b88a44] rounded-full blur-[70px] md:blur-[100px] opacity-20 md:opacity-10" />

        {/* 3. Camera Viewfinder Brackets - Adjusted Inset for Mobile */}
        <div className="absolute inset-4 md:inset-10 border-white/[0.02] border-[1px] rounded-[2rem] md:rounded-[3rem]">
          <div className="absolute top-0 left-0 w-12 md:w-20 h-12 md:h-20 border-t-2 border-l-2 border-[#b88a44]/20 rounded-tl-2xl md:rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-12 md:w-20 h-12 md:h-20 border-t-2 border-r-2 border-[#b88a44]/20 rounded-tr-2xl md:rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-12 md:w-20 h-12 md:h-20 border-b-2 border-l-2 border-[#b88a44]/20 rounded-bl-2xl md:rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-12 md:w-20 h-12 md:h-20 border-b-2 border-r-2 border-[#b88a44]/20 rounded-br-2xl md:rounded-br-3xl" />

          {/* Center Focus Crosshair - Hidden on very small screens to avoid clutter */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] md:opacity-[0.05]">
            <Scan size={80} className="md:w-[120px] md:h-[120px] text-white" strokeWidth={0.5} />
          </div>
        </div>

        {/* 4. Large Rotating Aperture - Positioned better for Mobile */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-10 -right-10 md:-bottom-20 md:-right-20 opacity-[0.03] md:opacity-[0.04]"
        >
          <Aperture size={250} className="md:w-[400px] md:h-[400px] text-white" strokeWidth={0.5} />
        </motion.div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-4 gap-8">
          <motion.div
            className="space-y-4 text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="w-10 h-px bg-[#b88a44]"></span>
              <span className="text-[#b88a44] text-[11px] font-bold uppercase tracking-[0.5em]">
                Specialized Services
              </span>
              <span className="w-10 h-px bg-[#b88a44]"></span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">
              What We <span className="italic text-[#b88a44]">Capture</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 md:gap-y-1 items-stretch">
          {cardData.map((card, i) => (
            <SimpleCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;