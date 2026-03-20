import { Instagram, Twitter, Mail, ArrowUpCircle } from 'lucide-react';
import { businessConfig } from '../config//businessConfig';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#1A120B] pt-32 pb-12 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Bio */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-6xl font-serif text-[#DAC0A3] tracking-tighter">
              {businessConfig.brandName}<span className="text-white">.</span>
            </h2>
            <p className="text-[#DAC0A3]/60 max-w-sm font-light leading-relaxed">
              Mendedikasikan diri untuk seni observasi. Kami menangkap momen yang biasanya hilang dalam kebisingan dunia.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#DAC0A3] hover:bg-[#DAC0A3] hover:text-[#1A120B] transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-white font-bold">Studio</h4>
              <ul className="space-y-4 text-[#DAC0A3]/40 text-sm">
                <li><a href="#about" className="hover:text-[#DAC0A3] transition-colors">Our Story</a></li>
                <li><a href="#gallery" className="hover:text-[#DAC0A3] transition-colors">Portfolio</a></li>
                <li><a href="#testimonials" className="hover:text-[#DAC0A3] transition-colors">Clients</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-white font-bold">Services</h4>
              <ul className="space-y-4 text-[#DAC0A3]/40 text-sm">
                <li className="hover:text-[#DAC0A3] cursor-pointer">Wedding</li>
                <li className="hover:text-[#DAC0A3] cursor-pointer">Editorial</li>
                <li className="hover:text-[#DAC0A3] cursor-pointer">Commercial</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] uppercase tracking-[0.6em] text-[#DAC0A3]/30">
            © {new Date().getFullYear()} {businessConfig.brandName} Studio. Built with Passion.
          </p>
          
          {/* Scroll to top button */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[#DAC0A3]/50 hover:text-[#DAC0A3] transition-colors"
          >
            <span className="text-[9px] uppercase tracking-widest">Back to top</span>
            <ArrowUpCircle size={24} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Huge Background Text Decor */}
        <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 pointer-events-none select-none">
          <h1 className="text-[20vw] font-serif text-white/[0.02] whitespace-nowrap leading-none uppercase">
            {businessConfig.brandName}
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;