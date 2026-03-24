import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Camera, Sparkles, ArrowUpRight } from 'lucide-react';
// Pastikan path config ini sesuai dengan struktur folder kamu ya
import { businessConfig } from '../config/businessConfig';

const Contact = () => {
  // Fungsi khusus untuk smooth scroll ke footer
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId.replace('#', ''));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback jika id="footer" belum dibuat Nabil, otomatis scroll mentok bawah
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-[#FFF8F0] relative overflow-hidden">
      
      {/* Aesthetic Background Element */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#C08552]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#8C5A3C]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Kiri: Teks & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left relative z-10"
          >
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="w-8 h-[1px] bg-[#C08552] hidden lg:block"></span>
              <Camera className="text-[#8C5A3C]" size={16} />
              <span className="text-[#8C5A3C] font-bold uppercase text-[10px] tracking-[0.4em]">Book Your Session</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#4B2E2B] leading-tight">
              Mari Abadikan <br /> 
              <span className="italic text-[#8C5A3C]">Legacy Anda.</span>
            </h2>
            
            <p className="text-[#4B2E2B]/70 text-base md:text-lg font-light leading-relaxed max-w-md mx-auto lg:mx-0">
              Mulai dari kehangatan keluarga, detail produk kuliner, elegansi otomotif, hingga tingkah lucu hewan peliharaan Anda. Kami siap menangkap esensi terbaik dari setiap cerita.
            </p>

            <div className="pt-6 flex justify-center lg:justify-start">
              <motion.a 
                href="#footer" 
                onClick={(e) => handleSmoothScroll(e, '#footer')}
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-4 py-3 px-6 rounded-full border border-[#C08552]/30 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-[#C08552] transition-all shadow-sm group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-[#FFF8F0] border border-[#C08552]/20 flex items-center justify-center group-hover:bg-[#C08552] group-hover:text-white transition-colors text-[#8C5A3C]">
                  <Instagram size={14} />
                </div>
                <span className="text-[10px] text-[#4B2E2B] uppercase tracking-widest font-bold">Follow My Journey</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Kanan: Card Direct WA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-[#4B2E2B] p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden group text-center border border-[#8C5A3C]/20"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C08552] to-transparent opacity-40" />
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#8C5A3C]/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-8">
              <div className="inline-flex p-4 rounded-full bg-[#FFF8F0]/10 mb-2 border border-[#FFF8F0]/5">
                <Sparkles className="text-[#C08552]" size={28} />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-[#FFF8F0] text-3xl md:text-4xl font-serif italic">Ready to Shoot?</h3>
                <p className="text-[#FFF8F0]/50 text-[10px] uppercase tracking-[0.3em] font-medium">Respon cepat dalam hitungan menit</p>
              </div>

              <motion.a
                href={businessConfig?.contact?.whatsapp || "https://wa.me/123456789"} 
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 bg-[#C08552] w-full py-5 rounded-2xl text-white font-bold uppercase tracking-[0.15em] text-xs shadow-[0_15px_30px_-10px_rgba(192,133,82,0.5)] transition-all hover:bg-[#8C5A3C]"
              >
                <MessageCircle size={18} fill="currentColor" className="text-white" />
                Chat Whatsapp
                <ArrowUpRight size={16} className="opacity-70" />
              </motion.a>
              
              <p className="text-[#FFF8F0]/30 text-[9px] uppercase tracking-[0.2em] leading-loose pt-4 border-t border-[#FFF8F0]/10">
                Klik tombol di atas untuk berdiskusi langsung dengan kami
              </p>
            </div>
          </motion.div>

        </div>

        {/* Location Footer Mini */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-24 pt-10 border-t border-[#C08552]/20 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#8C5A3C] font-bold">Studio Photography — Jakarta</p>
          <div className="flex gap-8 text-[9px] uppercase tracking-[0.2em] font-black text-[#4B2E2B]">
            <span className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer">Privacy</span>
            <span className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer">Terms</span>
            <span className="text-[#C08552]">© 2026</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;