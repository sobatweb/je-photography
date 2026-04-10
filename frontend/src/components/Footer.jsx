import { Instagram, MessageCircle, ArrowUpCircle } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const socialLinks = [
    { name: "Pet", url: "https://www.instagram.com/je_petshoot/" },
    { name: "Food", url: "https://www.instagram.com/je_cekrek/" },
    { name: "Event", url: "https://www.instagram.com/je_portraiture/" },
    { name: "Car", url: "https://www.instagram.com/je_carshoot/" },
  ];

  return (
    <footer className="bg-[#4B2E2B] pt-20 pb-10 px-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          
          {/* Bio Section */}
          <div className="lg:max-w-md space-y-6 text-center lg:text-left">
            <h2 className="text-5xl md:text-6xl font-serif text-[#FFF8F0] tracking-tighter">
              Jeremy<span className="text-[#DAC0A3]">.</span>
            </h2>
            <p className="text-[#FFF8F0]/60 font-light leading-relaxed text-sm max-w-sm mx-auto lg:mx-0">
              Capturing the unique essence of every subject, from automotive to pets. Every shot is a timeless story.
            </p>
            <a 
              href="https://wa.me/6287751330478"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#DAC0A3] text-[#1A120B] px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#FFF8F0] transition-all shadow-lg"
            >
              <MessageCircle size={16} fill="currentColor" /> Chat on WhatsApp
            </a>
          </div>

          {/* Instagram Grid - 2 Columns on Mobile */}
          <div className="flex-1 lg:max-w-xl">
            <h4 className="text-[9px] uppercase tracking-[0.4em] text-[#FFF8F0] font-bold mb-6 text-center lg:text-left">Follow Journey</h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group flex flex-col sm:flex-row items-center gap-3 p-4 rounded-2xl border border-[#FFF8F0]/10 bg-white/3 hover:border-[#DAC0A3]/40 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-[#DAC0A3]/10 flex items-center justify-center text-[#DAC0A3] group-hover:bg-[#DAC0A3] group-hover:text-[#1A120B] transition-all">
                    <Instagram size={14} />
                  </div>
                  <div className="text-center sm:text-left overflow-hidden">
                    <p className="text-[12px] text-[#DAC0A3] uppercase font-bold">{social.name}</p>
                    <p className="text-[12px] text-[#FFF8F0]/80 truncate">@{social.url.split('/').filter(Boolean).pop()}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#FFF8F0]/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <p className="text-[8px] uppercase tracking-[0.3em] text-[#FFF8F0]/50">
            © 2026 Jeremy PORTFOLIO — VISUAL EXCELLENCE.
          </p>
          <button onClick={scrollToTop} className="group flex items-center gap-3 text-[#DAC0A3]/80 hover:text-[#FFF8F0] transition-colors">
            <span className="text-[11px] uppercase tracking-widest">Top</span>
            <ArrowUpCircle size={20} />
          </button>
        </div>
      </div>

      <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 opacity-[0.03] pointer-events-none w-full text-center">
        <h1 className="text-[25vw] font-serif text-[#FFF8F0] leading-none uppercase">JEREMY</h1>
      </div>
    </footer>
  );
};

export default Footer;