import { motion } from "framer-motion";

const About = () => {
  return (
    // Menggunakan FFF8F0 sebagai background utama yang clean & warm
    <section id="about" className="py-20 md:py-32 bg-[#FFF8F0] px-6 overflow-hidden">
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Image Section */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            
            {/* Bentuk mask gambar yang lebih dinamis dan elegan */}
            <div className="rounded-t-[10rem] rounded-b-[3rem] overflow-hidden aspect-[4/5] shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop" 
                className="w-full h-full object-cover" 
                alt="Professional Photographer Behind the Lens" 
              />
              {/* Overlay tipis agar gambar menyatu dengan tone website */}
              <div className="absolute inset-0 bg-[#4B2E2B] mix-blend-overlay opacity-10"></div>
            </div>

            {/* Badge Pengalaman */}
            <motion.div
              className="absolute -bottom-6 -right-6 md:-right-8 bg-[#4B2E2B] text-[#FFF8F0] p-8 md:p-10 rounded-full md:rounded-[3rem] shadow-xl z-20 flex flex-col items-center justify-center aspect-square"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-4xl md:text-5xl font-serif italic leading-none text-[#C08552]">10+</p>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] mt-2 text-center opacity-90">Years of<br/>Experience</p>
            </motion.div>
            
            {/* Ornamen dekoratif simpel */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-[#C08552] rounded-t-[5rem] rounded-b-[2rem] opacity-40 -z-10"></div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-12 h-[1px] bg-[#C08552]"></span>
                <span className="text-[#8C5A3C] text-xs font-bold uppercase tracking-[0.3em]">The Artist Behind The Lens</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#4B2E2B] leading-tight">
                More Than Just <br />
                <span className="italic text-[#8C5A3C]">A Photograph.</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-[#4B2E2B]/80 text-base md:text-lg leading-relaxed font-light">
              <p>
                Berangkat dari latar belakang Desain Komunikasi Visual, kami memahami bahwa setiap frame memiliki cerita, komposisi, dan nyawa. Selama lebih dari satu dekade, kami mendedikasikan diri untuk menangkap momen yang tak lekang oleh waktu dengan estetika yang presisi.
              </p>
              <p>
                Kini, kami menghadirkan keahlian visual yang <span className="italic">clean</span> dan elegan ke dalam empat fokus utama: <strong className="font-medium text-[#8C5A3C] font-serif">Food, Event, Otomotif, dan Pet</strong>. Ini bukan sekadar dokumentasi, melainkan tentang merangkai warisan visual yang berkelas untuk setiap kebutuhan Anda.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#C08552]/30">
              <div>
                <p className="text-4xl font-serif text-[#4B2E2B] mb-1">4</p>
                <p className="text-[10px] uppercase tracking-widest text-[#8C5A3C] font-medium">Spesialisasi Bisnis</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-[#4B2E2B] mb-1">500+</p>
                <p className="text-[10px] uppercase tracking-widest text-[#8C5A3C] font-medium">Momen Terabadikan</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;