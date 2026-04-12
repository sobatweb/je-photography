import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ["Home", "About", "Gallery", "Testimonials", "Contact"];

  // Mencegah scroll saat menu mobile terbuka
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  return (
    <nav className={`fixed w-full z-1000 transition-[background-color,padding,box-shadow] duration-500 ${scrolled || isOpen ? 'bg-[#2f1f14] py-4 shadow-2xl' : 'bg-transparent py-8'
      }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-base md:text-base font-serif tracking-[0.3em] text-[#b88a44] z-1001">JE CREATIVE</a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-[12px] uppercase tracking-widest text-[#b88a44] hover:brightness-125 hover:underline underline-offset-4 decoration-2 transition-all font-semibold">{link}</a>
          ))}
        </div>

        {/* Burger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#b88a44] md:hidden p-2 z-1001 relative focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#2f1f14] flex flex-col items-center justify-center gap-8 md:hidden z-1000"
          >
            {links.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.4,
                  ease: "easeOut"
                }}
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-xl font-serif text-[#b88a44] hover:brightness-125 hover:underline underline-offset-[6px] decoration-2 transition-all"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;