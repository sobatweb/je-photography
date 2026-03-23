import { motion, AnimatePresence } from 'framer-motion';
import { useState, memo, useEffect } from 'react';
import { galleryData } from '../data/GalleryData';

const categories = Object.keys(galleryData);

const bgConfig = {
  Food: { bg: "bg-[#FFF8F0]", accent: "text-[#803D3B]", label: "Culinary Art" },
  Event: { bg: "bg-[#F8F9FA]", accent: "text-[#1A120B]", label: "Life Moments" },
  Otomotif: { bg: "bg-[#FFF8F0]", accent: "text-[#333333]", label: "Engine & Soul" },
  Pet: { bg: "bg-[#F8F9FA]", accent: "text-[#4A5D4A]", label: "Pure Loyalties" }
};

const PhotoCard = memo(({ url, alt }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className="aspect-square overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-white shadow-sm group relative"
  >
    <img 
      src={url} 
      alt={alt}
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      onError={(e) => { e.target.src = "https://placehold.co/600x600?text=Jerry+Photography"; }}
    />
  </motion.div>
));

const Gallery = () => {
  const [active, setActive] = useState("Food");
  const [showAll, setShowAll] = useState(false);

  // Reset ke 8 foto setiap kali ganti kategori
  useEffect(() => {
    setShowAll(false);
  }, [active]);

  // Listen for category change from Card.jsx
  useEffect(() => {
    const handleCategoryChange = (e) => {
      if (categories.includes(e.detail)) {
        setActive(e.detail);
      }
    };
    window.addEventListener('changeGalleryCategory', handleCategoryChange);
    return () => window.removeEventListener('changeGalleryCategory', handleCategoryChange);
  }, []);

  const displayPhotos = showAll ? galleryData[active] : galleryData[active].slice(0, 8);

  return (
    <section id="gallery" className={`py-20 md:py-32 transition-colors duration-700 px-6 relative overflow-hidden ${bgConfig[active].bg}`}>
      {/* Dekorasi Background */}
      <div className="absolute top-10 left-10 pointer-events-none select-none opacity-[0.03] hidden md:block">
        <h1 className="text-[15vw] font-serif font-black uppercase italic">{bgConfig[active].label}</h1>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-8">
          <div className="text-center md:text-left">
            <motion.span key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`${bgConfig[active].accent} text-[9px] font-bold uppercase tracking-[0.5em] mb-2 block`}>
              {active} Collection
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-serif text-[#1A120B]">The <span className="italic">Visuals.</span></h2>
          </div>

          {/* Filter Kategori */}
         <div className="w-full md:w-auto bg-[#1A120B]/5 p-2 rounded-[1.5rem] md:rounded-[2rem] border border-[#1A120B]/10 backdrop-blur-sm">
            {/* Grid di mobile (2 kolom), Flex di desktop (sejajar) */}
            <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:items-center">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setActive(cat)}
                  className={`px-4 py-3 md:px-8 md:py-4 rounded-[1rem] md:rounded-[1.5rem] text-[9px] md:text-[10px] uppercase tracking-widest font-black transition-all border-2 w-full md:w-auto ${
                    active === cat 
                    ? 'bg-[#1A120B] text-[#DAC0A3] border-[#DAC0A3] shadow-lg' 
                    : 'bg-white text-[#1A120B]/40 border-white hover:text-[#1A120B]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Photo Grid */}
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          <AnimatePresence mode="popLayout">
            {displayPhotos.map((photo) => (
              <PhotoCard key={`${active}-${photo.id}`} url={photo.url} alt={active} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Toggle See More / See Less */}
        {galleryData[active].length > 8 && (
          <div className="flex justify-center mt-12">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="bg-[#1A120B] text-[#DAC0A3] px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border-2 border-[#DAC0A3] shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              {showAll ? "See Less" : "See More Works"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;