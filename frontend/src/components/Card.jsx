import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, Users, Star, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const cardData = [
  {
    id: 1,
    icon: Star,
    tag: "Je Cekrek",
    title: "Food & Products",
    subtitle: "Culinary & Products",
    desc: "Bikin menu atau produk andalanmu nggak cuma fungsional, tapi juga estetik buat dipandang. Yuk, kita buat visual brand kamu makin 'mahal' dan bikin siapa pun yang lihat langsung pengen beli!",
    accent: "#8C5A3C",
    bgImage: "/images/food/f_1.JPEG",
    href: "#gallery",
  },
  {
    id: 2,
    icon: Users,
    tag: "Je Portraiture",
    title: "Event",
    subtitle: "Gathering & Celebration",
    desc: "Setiap momen punya ceritanya sendiri. Sini, aku bantu abadikan keseruan event kamu—dari tawa bareng temen sampe vibes haru wisuda—biar bisa dikenang terus selamanya!",
    accent: "#C08552",
    bgImage: "/images/event/e_1.jpg",
    href: "#gallery",
  },
  {
    id: 3,
    icon: Camera,
    tag: "Je Carshoot",
    title: "Otomotif",
    subtitle: "Modified & Speed",
    desc: "Mobil atau motor kamu bukan sekadar mesin, tapi kebanggaan. Ayo kita bikin cinematic shoot yang nonjolin lekuk agresif dan detail keren tunggangan kesayanganmu!",
    accent: "#4B2E2B",
    bgImage: "/images/otomotif/o_1.jpg",
    href: "#gallery",
  },
  {
    id: 4,
    icon: Heart,
    tag: "Je Petshoot",
    title: "Pet",
    subtitle: "Animals & Nature",
    desc: "Si anabul lagi lucu-lucunya? Jangan sampe kelewatan! Kita potret tingkah gemas dan karakter unik mereka dalam frame yang hangat buat jadi kenangan manis kamu.",
    accent: "#8C5A3C",
    bgImage: "/images/pet/p_1.jpg",
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
      className="h-full flex flex-col"
    >
      <div className="group relative bg-white rounded-[2.5rem] p-4 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
        
        {/* Area Foto */}
        <div className="relative aspect-[10/11] w-full overflow-hidden rounded-[2rem] bg-gray-100 shrink-0">
          <img
            src={card.bgImage}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          
          {/* Tag Kontras Tinggi */}
          <div className="absolute top-4 left-4">
            <div className="px-3 py-1.5 rounded-full bg-white shadow-lg flex items-center gap-2 border border-gray-100">
              <Icon size={12} className="text-[#8C5A3C]" />
              <span className="text-[10px] font-extrabold text-[#4B2E2B] uppercase tracking-wider">
                {card.tag}
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 pt-6 px-2 pb-2">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-2xl font-bold text-[#4B2E2B] tracking-tight">
              {card.title}
            </h3>
            <CheckCircle2 size={20} className="text-green-500 fill-green-500/10" />
          </div>
          
          <p className="text-sm font-medium text-[#8C5A3C]/80 mb-4 italic">
            {card.subtitle}
          </p>

          <p className="text-[#4B2E2B]/60 text-sm leading-relaxed mb-8 flex-1">
            {card.desc}
          </p>

          {/* Action Buttons dengan Hover Effect yang diperkuat */}
          <div className="flex flex-col gap-3 mt-auto">
            {/* Button 1: Book Session */}
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              // Menggunakan justify-center agar teks murni di tengah
              className="relative flex justify-center items-center w-full px-6 h-12 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg group/btn1"
              style={{ backgroundColor: card.accent }}
            >
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-white transition-transform duration-300 group-hover/btn1:-translate-x-1">
                Book Session
              </span>

              {/* Ikon dipaksa ke pojok kanan dengan absolute */}
              <div className="absolute right-3 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 group-hover/btn1:bg-white group-hover/btn1:rotate-45">
                <ArrowUpRight size={14} strokeWidth={2.5} className="text-white group-hover/btn1:text-black transition-colors" />
              </div>
            </a>

            {/* Button 2: Gallery */}
            <button 
              onClick={(e) => {
                e.preventDefault(); 
                window.dispatchEvent(new CustomEvent('changeGalleryCategory', { detail: card.title }));
                const targetElement = document.getElementById(card.href.replace('#', ''));
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex justify-center items-center w-full h-12 rounded-2xl bg-gray-50 border border-gray-100 text-[#4B2E2B]/80 font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-300 hover:bg-[#4B2E2B] hover:text-white hover:scale-[1.02] active:scale-[0.98] hover:shadow-md"
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
    <section id="services" className="relative py-24 md:py-32 bg-[#FDFBF7] px-6">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            className="space-y-4 text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="w-10 h-px bg-[#8C5A3C]"></span>
              <span className="text-[#8C5A3C] text-[11px] font-bold uppercase tracking-[0.5em]">
                Specialized Services
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-[#4B2E2B] leading-[1.1]">
              What We <span className="italic text-[#8C5A3C]">Capture</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {cardData.map((card, i) => (
            <SimpleCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;