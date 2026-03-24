import { motion } from 'framer-motion';
import { Camera, Heart, Users, Star, ArrowUpRight } from 'lucide-react';

const cardData = [
  {
    id: 1,
    icon: Star,
    tag: "Culinary Art",
    title: "Food",
    subtitle: "& Beverages",
    desc: "Menghadirkan selera dan estetika dalam setiap hidangan, membuat kreasi kuliner Anda terlihat menggoda dan lezat.",
    accent: "#8C5A3C",
    bgImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    href: "#gallery",
  },
  {
    id: 2,
    icon: Users,
    tag: "Life Moments",
    title: "Event",
    subtitle: "& Gathering",
    desc: "Liputan penuh semangat untuk setiap event — konser, gathering, wisuda, hingga momen berharga Anda.",
    accent: "#C08552",
    bgImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800",
    href: "#gallery",
  },
  {
    id: 3,
    icon: Camera,
    tag: "Engine & Soul",
    title: "Otomotif",
    subtitle: "& Modified",
    desc: "Visual dramatis yang menonjolkan kecepatan, detail mesin, dan lekuk agresif kendaraan kebanggaan Anda.",
    accent: "#4B2E2B",
    bgImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
    href: "#gallery",
  },
  {
    id: 4,
    icon: Heart,
    tag: "Pure Loyalties",
    title: "Pet",
    subtitle: "& Animals",
    desc: "Mengabadikan karakter unik dan tingkah lucu sahabat berbulu Anda dalam frame yang penuh kehangatan.",
    accent: "#8C5A3C",
    bgImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800",
    href: "#gallery",
  },
];

// Simple elegant hover card
const SimpleCard = ({ card, index }) => {
  const Icon = card.icon;

  // Fungsi khusus untuk smooth scroll
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
      className="relative group cursor-pointer h-full"
    >
      <div className="relative rounded-[2.5rem] bg-white border border-[#C08552]/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full min-h-[500px]">
        
        {/* Top Image Hero */}
        <div className="relative h-52 w-full overflow-hidden shrink-0">
          <img
            src={card.bgImage}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Icon Badge */}
          <div className="absolute bottom-5 left-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-md shadow-sm border border-white/20">
              <Icon size={18} className="text-white" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.25em] font-bold px-3.5 py-2 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
              {card.tag}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative p-7 md:p-8 flex flex-col flex-1 bg-white z-10">
          <div className="space-y-1 mb-5">
            <h3 className="text-3xl font-serif text-[#4B2E2B] leading-tight tracking-tight">
              {card.title}
            </h3>
            <h3 className="text-2xl font-serif italic leading-none tracking-tight opacity-90" style={{ color: card.accent }}>
              {card.subtitle}
            </h3>
          </div>

          <p className="text-[#4B2E2B]/70 text-sm md:text-base leading-relaxed font-light mb-8 flex-1">
            {card.desc}
          </p>

          {/* Links & Buttons */}
          <div className="flex flex-col gap-3 pt-6 border-t border-[#C08552]/15 mt-auto">
            
            {/* Tombol Book Session dengan transisi smooth */}
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="flex justify-between items-center w-full px-5 h-[48px] rounded-xl group/book transition-all duration-300 hover:brightness-110 shadow-sm"
              style={{ backgroundColor: card.accent }}
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">
                Book Session
              </span>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover/book:rotate-45">
                <ArrowUpRight size={14} strokeWidth={2.5} className="text-white" />
              </div>
            </a>

            {/* Tombol Look Our Gallery */}
            <a 
              href={card.href} 
              onClick={(e) => {
                e.preventDefault(); 
                window.dispatchEvent(new CustomEvent('changeGalleryCategory', { detail: card.title }));
                const targetElement = document.getElementById(card.href.replace('#', ''));
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex justify-center items-center w-full px-5 h-[48px] rounded-xl bg-transparent transition-all duration-300 ease-out border-2 border-[#8C5A3C]/40 text-[#8C5A3C] font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#8C5A3C] hover:text-white hover:border-[#8C5A3C]"
            >
              Look Our Gallery
            </a>
          </div>
        </div>

        {/* Accent Top Border */}
        <div
          className="absolute top-0 left-0 right-0 h-1.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20"
          style={{ backgroundColor: card.accent }}
        />
      </div>
    </motion.div>
  );
};

const Cards = () => {
  return (
    <section id="services" className="relative py-24 md:py-36 bg-[#FDFBF7] px-6 overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#FFF8F0] to-[#FDFBF7]/0 pointer-events-none z-0" />
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-white to-transparent pointer-events-none z-0" />

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 md:mb-24 gap-8">
          <motion.div
            className="text-center md:text-left space-y-3 max-w-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <span className="w-8 h-[1px] bg-[#C08552] hidden md:block"></span>
              <span className="text-[#8C5A3C] text-[11px] font-bold uppercase tracking-[0.6em]">
                Service Spectrum
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#4B2E2B] leading-tight tracking-tight">
              What We <span className="italic text-[#8C5A3C]">Capture</span>
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-[#4B2E2B]/70 text-base md:text-lg max-w-sm text-center md:text-right font-light leading-relaxed"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Menghadirkan layanan khusus yang menyoroti setiap detail untuk portofolio visual Anda.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card, i) => (
            <SimpleCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;