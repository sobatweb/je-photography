import { motion } from "framer-motion";
import { Camera, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Image Section - Muncul Instan */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="rounded-[3rem] md:rounded-t-full md:rounded-b-[5rem] overflow-hidden aspect-[4/5] shadow-2xl">
              <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800" className="w-full h-full object-cover" alt="Photographer" />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-10 bg-[#1A120B] text-[#DAC0A3] p-8 md:p-12 rounded-[3rem] shadow-2xl">
              <p className="text-3xl md:text-5xl font-serif italic leading-none">10+</p>
              <p className="text-[9px] uppercase tracking-widest mt-2 opacity-60">Years of Art</p>
            </div>
          </motion.div>

          {/* Text Section */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="text-[#803D3B] text-[10px] font-bold uppercase tracking-[0.4em]">The Legend</span>
              <h2 className="text-5xl md:text-7xl font-serif text-[#1A120B] leading-tight">Every Frame <br/><span className="italic text-[#DAC0A3]">is a Legacy.</span></h2>
            </div>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light">
              Kami percaya bahwa fotografi bukan hanya soal menekan tombol, tapi soal menangkap jiwa. Dengan pengalaman satu dekade, kami membantu Anda mengabadikan momen yang tak lekang oleh waktu.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
               <div><p className="text-3xl font-serif text-[#1A120B]">500+</p><p className="text-[9px] uppercase tracking-widest text-gray-400">Events</p></div>
               <div><p className="text-3xl font-serif text-[#1A120B]">24</p><p className="text-[9px] uppercase tracking-widest text-gray-400">Awards</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;