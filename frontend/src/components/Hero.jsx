import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Camera, MousePointer2, MoveDown } from "lucide-react";
import { galleryData } from "../data/GalleryData";

const HeroImage = ({ img, index, isParentReady, onImageLoad }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isParentReady ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration: 0.8, // Faster duration
        delay: index * 0.05, // Faster stagger
        ease: "easeOut"
      }}
      style={{
        willChange: "opacity",
        backfaceVisibility: "hidden",
        transform: "translateZ(0)"
      }}
      className={`relative overflow-hidden rounded-sm ${img.span}`}
    >
      <img
        src={img.url}
        alt={`Hero Collage ${index}`}
        loading="eager"
        decoding="async"
        onLoad={onImageLoad}
        fetchpriority={index < 4 ? "high" : "auto"}
        className="w-full h-full object-cover transition-opacity duration-500"
      />
    </motion.div>
  );
};

const Hero = () => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Photos from public/images/hero photos/
  const collageImages = useMemo(() => [
    { url: "/assets/hero images/carshoot/image06.webp", span: "md:col-span-2 md:row-span-2" },
    { url: "/assets/hero images/portraiture/image20.webp", span: "md:col-span-1 md:row-span-1" },
    { url: "/assets/hero images/petshoot/image07.webp", span: "md:col-span-1 md:row-span-2" },
    { url: "/assets/hero images/carshoot/image01.webp", span: "md:col-span-1 md:row-span-1" },
    { url: "/assets/hero images/portraiture/image17.webp", span: "md:col-span-2 md:row-span-1" },
    { url: "/assets/hero images/petshoot/image08.webp", span: "md:col-span-1 md:row-span-1" },
    { url: "/assets/hero images/cekrek/image01.webp", span: "md:col-span-1 md:row-span-1" },
    { url: "/assets/hero images/cekrek/image18.webp", span: "md:col-span-1 md:row-span-1" },
    { url: "/assets/hero images/petshoot/image11.webp", span: "md:col-span-1 md:row-span-1" },
    { url: "/assets/hero images/portraiture/image04.webp", span: "md:col-span-2 md:row-span-1" },
  ], []);

  const handleImageLoad = () => setLoadedCount(prev => prev + 1);

  useEffect(() => {
    // Reveal once at least 5 images are loaded (faster entry)
    if (loadedCount >= Math.min(5, collageImages.length)) {
      setIsReady(true);
    }

    // Safety timeout: 1.5s
    const timeout = setTimeout(() => setIsReady(true), 1500);
    return () => clearTimeout(timeout);
  }, [loadedCount, collageImages.length]);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-[#1a110a] overflow-hidden">

      {/* 1. Background Collage Grid */}
      <div
        className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-4 gap-2 opacity-60"
        style={{
          transformStyle: "flat",
          backfaceVisibility: "hidden",
          contain: "paint"
        }}
      >
        {collageImages.map((img, index) => (
          <HeroImage
            key={index}
            img={img}
            index={index}
            isParentReady={isReady}
            onImageLoad={handleImageLoad}
          />
        ))}
      </div>

      {/* 2. Unified Dark Overlay  */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 50%, rgba(0,0,0,0.4) 100%)"
        }}
      />

      {/* 3. Main Content (Centered) */}
      <div className="container mx-auto z-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="max-w-4xl mx-auto space-y-6"
        >


          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#F8F0E5] leading-tight tracking-tighter">
            CAPTURE <span className="text-[#ca913c] italic">THE SOUL</span><br />
            IN SILENCE
          </h1>

          {/* CTA Button (Premium Solid Style) */}
          <div className="flex justify-center pt-2">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3 md:px-10 md:py-4 rounded-full bg-[#b88a44] text-[#1a110a] overflow-hidden transition-all shadow-lg cursor-pointer"
            >
              <span className="relative z-10 uppercase text-[8px] md:text-[10px] font-bold tracking-[0.2em] flex items-center gap-3 transition-colors group-hover:text-[#F8F0E5] font-sans">
                Explore Our Works <MousePointer2 size={14} />
              </span>
              {/* Efek Hover Fill */}
              <div className="absolute inset-0 bg-[#c18a38] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* 4. Scrolling Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isReady ? { opacity: [0, 1, 0], y: [0, 10, 0] } : { opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#b88a44]/50"
      >
        <span className="text-[9px] uppercase tracking-[0.5em]">Scroll</span>
        <MoveDown size={14} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default Hero;
