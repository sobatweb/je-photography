import { motion } from 'framer-motion';
import { useState } from 'react';

const categories = ["All", "Wedding", "Editorial", "Landscape", "Portrait"];

const photos = [
  { url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800", cat: "Wedding", size: "h-[450px] rounded-[4rem]" },
  { url: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=800", cat: "Portrait", size: "h-[300px] rounded-full" },
  { url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800", cat: "Landscape", size: "h-[550px] rounded-[2rem] rounded-tr-[10rem]" },
  { url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800", cat: "Editorial", size: "h-[400px] rounded-[6rem]" },
  { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800", cat: "Wedding", size: "h-[350px] rounded-t-full" },
  { url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800", cat: "Portrait", size: "h-[500px] rounded-b-[10rem]" },
  { url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800", cat: "Landscape", size: "h-[400px] rounded-[5rem]" },
  { url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800", cat: "Portrait", size: "h-[320px] rounded-[3rem]" },
];

const Gallery = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? photos : photos.filter(p => p.cat === active);

  return (
    <section id="gallery" className="py-32 bg-[#FAF8F5] px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-[#803D3B] text-[10px] font-bold uppercase tracking-[0.6em] mb-4 block">Portfolio</span>
            <h2 className="text-6xl font-serif text-[#1A120B]">The Archive.</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {categories.map(c => (
              <button 
                key={c} 
                onClick={() => setActive(c)}
                className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-widest transition-all border ${active === c ? 'bg-[#1A120B] text-[#DAC0A3] border-[#1A120B]' : 'bg-transparent text-gray-400 border-gray-200'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
          {filtered.map((p, i) => (
            <motion.div 
              layout
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`${p.size} overflow-hidden group relative cursor-pointer shadow-xl`}
            >
              <img src={p.url} className="w-full h-full object-cover cale  transition-all duration-700 group-hover:scale-110" alt="Gallery" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-[#DAC0A3] text-[10px] uppercase tracking-widest font-bold">{p.cat}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;