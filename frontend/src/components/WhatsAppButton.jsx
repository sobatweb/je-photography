import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const WhatsAppButton = () => {
  // Format pesan otomatis: "Halo Je Creative, saya ingin bertanya tentang layanan fotografi..."
  const defaultMessage = encodeURIComponent(
    "Halo Je Creative, saya ingin bertanya mengenai layanan fotografi dan konsultasi konsep."
  );

  const whatsappUrl = `${businessConfig.contact.whatsapp}&text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-[1000]">
      {/* Tooltip Label (Optional - Muncul saat hover) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-20 top-1/2 -translate-y-1/2 bg-[#DAC0A3] text-[#1A120B] px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-tighter pointer-events-none whitespace-nowrap shadow-xl"
      >
        Chat with Je Creative
      </motion.div>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/6287751330478"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 bg-[#DAC0A3] rounded-[1.8rem] flex items-center justify-center text-[#1A120B] shadow-2xl border-4 border-[#1A120B] transition-shadow hover:shadow-[#DAC0A3]/20"
      >
        <MessageCircle size={28} fill="currentColor" />
        
        {/* Ping Animation Effect */}
        <span className="absolute inset-0 rounded-[1.8rem] bg-[#DAC0A3] animate-ping opacity-20 -z-10"></span>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;