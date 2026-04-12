import { motion } from "framer-motion";
import poto from "/images/about/about.webp";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#FFF8F0] px-6 overflow-hidden">

      <div className="container mx-auto max-w-7xl">
        {/* Menambahkan gap yang lebih besar di layar besar (lg:gap-20 xl:gap-24) agar teks dan gambar tidak terlalu rapat */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-center">

          {/* Bagian Gambar */}
          <motion.div
            className="relative order-2 lg:order-1 max-w-md mx-auto lg:max-w-none w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Perbaikan typo aspect-4/5 menjadi aspect-[4/5] */}
            <div className="rounded-t-[10rem] rounded-b-[3rem] overflow-hidden aspect-4/5 shadow-2xl relative z-10">
              <img
                src={poto}
                className="w-full h-full object-cover"
                alt="Jeremy - Professional Photographer"
              />
              <div className="absolute inset-0 bg-[#1a110a] mix-blend-overlay opacity-10"></div>
            </div>

            {/* Badge Pengalaman */}
            <motion.div
              className="absolute -bottom-6 -right-4 md:-right-8 bg-[#1a110a] text-[#FFF8F0] p-6 md:p-10 rounded-full md:rounded-[3rem] shadow-xl z-20 flex flex-col items-center justify-center aspect-square"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-4xl md:text-5xl font-serif italic leading-none text-[#b88a44]">10+</p>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] mt-2 text-center opacity-90">Years of<br />Experience</p>
            </motion.div>

            {/* Aksen Background (Perbaikan rounded-b-4xl menjadi rounded-b-[2rem]) */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-[#b88a44] rounded-t-[5rem] rounded-b-4xl opacity-40 -z-10"></div>
          </motion.div>

          {/* Bagian Teks */}
          <motion.div
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-12 h-px bg-[#b88a44]"></span>
                <span className="text-[#b88a44] text-xs font-bold uppercase tracking-[0.3em]">The Artist Behind The Lens</span>
              </div>
              <h2 className="text-5xl md:text-6xl xl:text-7xl font-serif text-[#1a110a] leading-tight">
                More Than Just <br />
                <span className="italic text-[#b88a44]">A Photograph.</span>
              </h2>
            </div>

            <div className="space-y-5 text-[#2b1c11]/80 text-base md:text-lg leading-relaxed font-light">
              <p>
                Hi, I’m Jeremy—most people call me Jerry. I’m a professional photographer who has been in the industry since 2013, where what started as a passion gradually evolved into a lifelong craft.
              </p>
              <p>
                Photography has been more than just a profession—it is a craft I continuously refine. With over a decade of dedicated experience, I have developed a strong visual perspective and attention to detail in every frame.
              </p>
              <p>
                {/* Update teks klien dan brand di sini */}
                Over the years, I have worked with <strong>around 1500+ clients</strong> and <strong>around 800+ brands</strong> across various industries, delivering imagery that not only captures moments but elevates them into compelling visual stories. To ensure a focused and refined approach, my services are curated into four specialized divisions:
              </p>

              <ul className="ml-4 border-l-2 border-[#b88a44]/40 pl-5 space-y-3 py-2 text-base">
                <li><strong className="font-serif text-[#b88a44] font-medium text-lg tracking-wide">Je Cekrek</strong> <span className="opacity-80">— Food & Product Photography</span></li>
                <li><strong className="font-serif text-[#b88a44] font-medium text-lg tracking-wide">Je Petshoot</strong> <span className="opacity-80">— Pet Photography</span></li>
                <li><strong className="font-serif text-[#b88a44] font-medium text-lg tracking-wide">Je Carshoot</strong> <span className="opacity-80">— Automotive Photography</span></li>
                <li><strong className="font-serif text-[#b88a44] font-medium text-lg tracking-wide">Je Portraiture</strong> <span className="opacity-80">— Events, Portraits, & Personal Sessions</span></li>
              </ul>

              <p className="pt-2">
                Each division is crafted with its own distinct style and direction, allowing every project to be executed with precision and purpose. I invite you to explore my portfolio below to experience my work.
              </p>
              <p className="font-medium text-[#b88a44]">
                For inquiries and bookings, feel free to reach out via WhatsApp.
              </p>
            </div>

            {/* Statistik diubah menjadi 3 Kolom agar seimbang */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-[#b88a44]/30">
              <div>
                <p className="text-3xl lg:text-4xl font-serif text-[#1a110a] mb-1">4</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-[#b88a44] font-medium">Divisions</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-serif text-[#1a110a] mb-1">1500+</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-[#b88a44] font-medium">Clients</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-serif text-[#1a110a] mb-1">800+</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-[#b88a44] font-medium">Brands</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;