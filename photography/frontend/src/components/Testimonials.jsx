import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const reviews = [
  { name: "Jessica Veranda", role: "Editorial Model", text: "Proses shooting yang sangat nyaman dan hasil yang di luar ekspektasi. tahu cara menangkap sisi terbaik saya.", color: "bg-[#EADBC8]" },
  { name: "Kezia & Mario", role: "Wedding Client", text: "Melihat kembali foto pernikahan kami terasa seperti menonton film sinematik. Tone warnanya sangat berkelas!", color: "bg-[#DAC0A3]" },
  { name: "Bung Ben", role: "Cafe Owner", text: "Foto produk kopi kami jadi terlihat sangat premium. Sangat merekomendasikan layanan branding visual mereka.", color: "bg-[#F8F0E5]" },
  { name: "Adrian Utama", role: "Landscape Arch", text: "Detail arsitektur yang saya bangun tertangkap dengan sempurna. Presisinya luar biasa.", color: "bg-[#EADBC8]" },
  { name: "Sasha Gray", role: "Lifestyle Influencer", text: "Cepat, profesional, dan estetik. Definisi studio modern masa kini.", color: "bg-[#DAC0A3]" },
  { name: "Rian", role: "Groom", text: "Terima kasih sudah mengabadikan momen sekali seumur hidup kami dengan begitu indahnya.", color: "bg-[#F8F0E5]" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 bg-white overflow-hidden px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[#DAC0A3] text-[10px] font-bold uppercase tracking-[0.8em] mb-4 block">Kind Words</span>
          <h2 className="text-5xl font-serif text-[#1A120B]">Voices of <span className="italic">Satisfaction</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15, rotate: i % 2 === 0 ? 1 : -1 }}
              className={`${t.color} p-12 rounded-[5rem] relative shadow-sm border border-black/5 flex flex-col justify-between h-full`}
            >
              <Quote className="absolute -top-4 left-10 text-[#1A120B]/10" size={60} />
              <div className="relative z-10">
                <div className="flex gap-1 mb-6 text-[#1A120B]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                </div>
                <p className="text-[#1A120B] text-lg font-light leading-relaxed mb-8 italic italic">
                  "{t.text}"
                </p>
              </div>
              <div className="border-t border-black/5 pt-6">
                <h4 className="font-bold text-[#1A120B] uppercase tracking-[0.2em] text-xs">{t.name}</h4>
                <p className="text-[9px] text-[#803D3B] font-bold mt-1 uppercase tracking-widest">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;