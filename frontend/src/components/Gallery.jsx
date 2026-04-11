import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useState, memo, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { galleryData } from '../data/GalleryData';

const categories = Object.keys(galleryData);

const bgConfig = {
  Food: { bg: "bg-[#FFF8F0]", accent: "text-[#803D3B]", label: "Culinary Art" },
  Event: { bg: "bg-[#F8F9FA]", accent: "text-[#1A120B]", label: "Life Moments" },
  Otomotif: { bg: "bg-[#FFF8F0]", accent: "text-[#333333]", label: "Engine & Soul" },
  Pet: { bg: "bg-[#F8F9FA]", accent: "text-[#4A5D4A]", label: "Pure Loyalties" }
};

const PhotoCard = memo(({ url, alt, priority }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    // Memuat gambar sedikit lebih awal sebelum masuk layar (rootMargin)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } 
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className="aspect-square overflow-hidden rounded-3xl md:rounded-4xl bg-neutral-200 shadow-sm group relative transform-gpu"
    >
      {isInView && (
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          src={url} 
          alt={alt}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className="w-full h-full object-cover transition-transform duration-1000 transform-gpu group-hover:scale-110"
          onError={(e) => { e.target.src = "https://placehold.co/600x600?text=Error+Loading"; }}
        />
      )}
    </div>
  );
});

const Gallery = () => {
  const [active, setActive] = useState("Food");
  const [displayLimit, setDisplayLimit] = useState(8);

  const sectionRef = useRef(null);
  const galleryTopRef = useRef(null); // Ref untuk scroll back up

  useEffect(() => {
    setDisplayLimit(8);
  }, [active]);

  const displayPhotos = galleryData[active].slice(0, displayLimit);
  const hasMore = galleryData[active].length > displayLimit;

  return (
    <section ref={sectionRef} id="gallery" className={`py-20 md:py-32 transition-colors duration-700 px-6 relative overflow-hidden ${bgConfig[active].bg}`}>
      <div ref={galleryTopRef} className="absolute top-0" /> {/* Anchor untuk scroll */}
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-serif text-[#1A120B]">The <span className="italic">Visuals.</span></h2>
          </div>

          <div className="w-full md:w-auto bg-[#1A120B]/5 p-2 rounded-3xl md:rounded-4xl border border-[#1A120B]/10 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-2 md:flex md:flex-row md:items-center">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setActive(cat)}
                  className={`px-4 py-3 md:px-8 md:py-4 rounded-2xl md:rounded-3xl text-[9px] md:text-[10px] uppercase tracking-widest font-black transition-all border-2 w-full md:w-auto ${
                    active === cat 
                    ? 'bg-[#1A120B] text-[#DAC0A3] border-[#DAC0A3]' 
                    : 'bg-white text-[#1A120B]/40 border-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          <AnimatePresence mode="popLayout">
            {displayPhotos.map((photo, index) => (
              <PhotoCard 
                key={`${active}-${photo.id}`} 
                url={photo.url} 
                alt={active}
                priority={index < 4}
              />
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          {hasMore ? (
            <button 
              onClick={() => setDisplayLimit(prev => prev + 8)}
              className="flex items-center gap-2 px-8 py-3 bg-white border-2 border-[#8C5A3C] text-[#8C5A3C] rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#8C5A3C] hover:text-white transition-all shadow-sm"
            >
              See More Works
              <ChevronDown size={16} />
            </button>
          ) : (
            <button 
              onClick={() => {
                setDisplayLimit(8);
                galleryTopRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-8 py-3 bg-[#8C5A3C] text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#4B2E2B] transition-all shadow-md"
            >
              See Less
              <ChevronUp size={16} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;