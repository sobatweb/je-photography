import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Camera, Sparkles, ArrowUpRight } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-[#FDFBF7] relative overflow-hidden">
      {/* Aesthetic Background Element */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#DAC0A3]/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Kiri: Teks & Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Camera className="text-[#DAC0A3]" size={18} />
                <span className="text-[#DAC0A3] font-bold uppercase text-[10px] tracking-[0.5em]">Book Your Session</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-serif text-[#1A120B] leading-tight">
                Mari Abadikan <br /> 
                <span className="italic text-[#DAC0A3]">Legacy Anda.</span>
              </h2>
              
              <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                Apakah itu portrait personal, momen pernikahan, atau kampanye brand, kami siap menangkap esensi terbaik dari cerita Anda.
              </p>

              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-center justify-center lg:justify-start gap-4 text-gray-400">
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                    <Instagram size={16} />
                  </div>
                  <span className="text-[11px] uppercase tracking-widest font-bold">Follow @demo.studio</span>
                </div>
              </div>
            </motion.div>

            {/* Kanan: Card Direct WA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1A120B] p-10 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden group text-center"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#DAC0A3] to-transparent opacity-30" />
              
              <div className="relative z-10 space-y-8">
                <div className="inline-block p-4 rounded-full bg-white/5 mb-2">
                  <Sparkles className="text-[#DAC0A3]" size={32} />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-[#F8F0E5] text-2xl md:text-3xl font-serif italic">Ready for a Photoshoot?</h3>
                  <p className="text-white/40 text-[10px] uppercase tracking-[0.3em]">Respon cepat dalam hitungan menit</p>
                </div>

                <motion.a
                  href={businessConfig.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-4 bg-[#DAC0A3] w-full py-6 rounded-2xl text-[#1A120B] font-black uppercase tracking-[0.2em] text-xs shadow-[0_20px_40px_-10px_rgba(218,192,163,0.3)] transition-all hover:brightness-110"
                >
                  <MessageCircle size={18} fill="currentColor" />
                  Mulai Konsultasi Gratis
                  <ArrowUpRight size={16} />
                </motion.a>
                
                <p className="text-white/20 text-[9px] uppercase tracking-widest leading-loose pt-4">
                  Klik tombol di atas untuk langsung terhubung dengan fotografer kami via WhatsApp.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Location Footer Mini */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24 pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold"> Photography Studio — Jakarta</p>
            <div className="flex gap-8 text-[9px] uppercase tracking-[0.2em] font-black text-[#1A120B]">
              <span className="opacity-40">Privacy</span>
              <span className="opacity-40">Terms</span>
              <span className="text-[#DAC0A3]">© 2026</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;