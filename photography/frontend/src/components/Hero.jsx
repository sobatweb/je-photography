import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, MousePointer2, Sparkles, MoveDown } from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  
  // Efek Parallax untuk elemen latar belakang saat scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 1], [0.2, 0]);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center bg-[#1A120B] overflow-hidden px-6 pt-28 pb-20 md:pt-0 md:pb-0">
      
      {/* 1. Dynamic Background Decor (Parallax) */}
      <motion.div 
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute top-[-10%] right-[-5%] w-[70vw] h-[70vw] bg-[#3C2A21] rounded-full blur-[150px] z-0" 
      />
      <div className="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-[#803D3B] rounded-full blur-[120px] opacity-10 z-0" />

      {/* 2. Main Content Grid */}
      <div className="container mx-auto z-10 grid lg:grid-cols-12 gap-12 items-center relative">
        
        {/* Kolom Kiri: Tipografi & Interaksi (L-Span 7) */}
        <motion.div 
          className="lg:col-span-7 space-y-10 text-center lg:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label Atas */}
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <motion.div 
              animate={{ rotate: [0, 360] }} 
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-10 h-10 rounded-full border border-[#DAC0A3]/30 flex items-center justify-center text-[#DAC0A3]"
            >
              <Camera size={16} />
            </motion.div>
            <span className="text-[#DAC0A3] text-[10px] uppercase tracking-[0.8em] font-bold">DEMO Visual Studio</span>
          </div>
          
          {/* Judul Utama (Complex Typography) */}
          <h1 className="text-6xl md:text-[110px] font-serif text-[#F8F0E5] leading-[0.85] tracking-tighter">
            Capture <br /> 
            <span className="italic text-[#DAC0A3] pl-4 md:pl-24 inline-block relative">
              the Soul
              {/* Elemen Dekoratif Sparkle */}
              <Sparkles className="absolute -top-6 -right-10 text-[#DAC0A3]/40 animate-pulse" size={30} />
            </span>
            <br />
            in Silence.
          </h1>

          {/* Deskripsi Singkat */}
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
            Mendedikasikan diri untuk seni observasi. Kami menangkap momen sinematik yang tak terucap, membekukan emosi dalam setiap frame timeless.
          </p>

          {/* Tombol Interaktif & Statistik Mini */}
          <div className="flex flex-col md:flex-row items-center gap-10 pt-6 lg:justify-start justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-5 rounded-full bg-[#DAC0A3] text-[#1A120B] overflow-hidden transition-all shadow-[0_20px_40px_-10px_rgba(218,192,163,0.3)]"
            >
              <span className="relative z-10 uppercase text-[11px] font-black tracking-widest flex items-center gap-3 transition-colors group-hover:text-white">
                Book a Session <MousePointer2 size={14} />
              </span>
              {/* Efek Hover Fill */}
              <div className="absolute inset-0 bg-[#3C2A21] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22, 1, 0.36, 1]" />
            </motion.button>
            
            {/* Statistik Mini */}
            <div className="flex gap-8 text-[#DAC0A3]">
               <div><p className="text-3xl font-serif">10+</p><p className="text-[9px] uppercase tracking-widest opacity-60">Years</p></div>
               <div><p className="text-3xl font-serif">500+</p><p className="text-[9px] uppercase tracking-widest opacity-60">Clients</p></div>
            </div>
          </div>
        </motion.div>

        {/* Kolom Kanan: Visual Layering (L-Span 5) */}
        <motion.div 
          className="lg:col-span-5 relative mt-16 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* 1. Main Floating Image (Mewah & Sinematik) */}
          <div className="relative z-10 rounded-[15rem] rounded-tr-[2rem] overflow-hidden border-[12px] border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] h-[550px] md:h-[650px] group">
            <img 
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800" 
              className="w-full h-full object-cover  transition-all duration-1000 scale-110 group-hover:scale-100" 
              alt="Artistic Portrait" 
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A120B]/50 to-transparent" />
          </div>
          
          {/* 2. Secondary Floating Image (Wedding/Event) - Animasi Floating */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-20 z-20 w-64 h-80 rounded-[3rem] overflow-hidden border-4 border-[#1A120B] shadow-3xl hidden md:block"
          >
            <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500" className="w-full h-full object-cover" alt="Wedding Capture" />
          </motion.div>

          {/* 3. Decorative Frame (Abstract Line Art) */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-[#DAC0A3]/20 rounded-tr-[5rem] z-0 hidden md:block" />
        </motion.div>
      </div>

      {/* 3. Scrolling Indicator (Bottom Center) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#DAC0A3]/50"
      >
        <span className="text-[9px] uppercase tracking-[0.5em]">Scroll</span>
        <MoveDown size={14} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default Hero;