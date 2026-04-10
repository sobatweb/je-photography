import { motion } from "framer-motion";
import { Camera, MousePointer2, MoveDown } from "lucide-react";
import { galleryData } from "../data/GalleryData";

const Hero = () => {
  // Photos from public/images/hero photos/
  const collageImages = [
    { url: "/assets/Selected Photos/Je Carshoot/image06.webp", span: "md:col-span-2 md:row-span-2" },
    { url: "/assets/Selected Photos/Je Portraiture/image20.webp", span: "md:col-span-1 md:row-span-1" },
    { url: "/assets/Selected Photos/Je Petshoot/image07.webp", span: "md:col-span-1 md:row-span-2" },
    { url: "/assets/Selected Photos/Je Carshoot/image01.webp", span: "md:col-span-1 md:row-span-1" },
    { url: "/assets/Selected Photos/Je Portraiture/image17.webp", span: "md:col-span-2 md:row-span-1" },
    { url: "/assets/Selected Photos/Je Petshoot/image08.webp", span: "md:col-span-1 md:row-span-1" },
    { url: "/assets/Selected Photos/Je Cekrek/image01.webp", span: "md:col-span-1 md:row-span-1" },
    { url: "/assets/Selected Photos/Je Cekrek/image18.webp", span: "md:col-span-1 md:row-span-1" },
    { url: "/assets/Selected Photos/Je Petshoot/image11.webp", span: "md:col-span-1 md:row-span-1" },
    { url: "/assets/Selected Photos/Je Portraiture/image04.webp", span: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden">

      {/* 1. Background Collage Grid (Varied Sizes) */}
      <div className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-4 gap-2 opacity-80 grayscale contrast-110">
        {collageImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: index * 0.1 }}
            className={`relative overflow-hidden rounded-sm ${img.span}`}
          >
            <img
              src={img.url}
              alt={`Hero Collage ${index}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* 2. Dark Overlay for readability (Stronger in the middle) */}
      <div className="absolute inset-0 z-10 bg-black/25 bg-radial-gradient from-transparent to-black/90" />
      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/40 via-transparent to-black/40" />

      {/* 3. Main Content (Centered) */}
      <div className="container mx-auto z-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {/* Top Label */}
          <div className="flex items-center gap-4 justify-center">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-7 h-7 rounded-full border border-[#DAC0A3]/30 flex items-center justify-center text-[#DAC0A3]"
            >
              <Camera size={12} />
            </motion.div>
            <span className="text-[#DAC0A3] text-[11px] uppercase tracking-[0.5em] font-bold">JE PHOTOGRAPHY</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#F8F0E5] leading-tight tracking-tighter">
            CAPTURE <span className="text-[#DAC0A3] italic">THE SOUL</span><br />
            IN SILENCE
          </h1>

          {/* CTA Button (Premium Solid Style) */}
          <div className="flex justify-center pt-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-4 rounded-full bg-[#DAC0A3] text-black overflow-hidden transition-all shadow-[0_20px_40px_-10px_rgba(218,192,163,0.3)]"
            >
              <span className="relative z-10 uppercase text-[11px] font-bold tracking-[0.2em] flex items-center gap-3 transition-colors group-hover:text-white font-sans">
                Explore Our Works <MousePointer2 size={14} />
              </span>
              {/* Efek Hover Fill */}
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22, 1, 0.36, 1]" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* 4. Scrolling Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#DAC0A3]/50"
      >
        <span className="text-[9px] uppercase tracking-[0.5em]">Scroll</span>
        <MoveDown size={14} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default Hero;
