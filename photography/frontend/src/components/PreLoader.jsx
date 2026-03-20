import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { businessConfig } from "../config/businessConfig";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ clipPath: "inset(0 0 100% 0)", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[99999] bg-[#1A120B] flex flex-col items-center justify-center p-6"
        >
          <div className="relative flex flex-col items-center w-full max-w-xs">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-4xl font-serif uppercase tracking-[0.5em] md:tracking-[1em] text-[#DAC0A3] mb-10 ml-[0.5em] md:ml-[1em] text-center"
            >
              {businessConfig.brandName}
            </motion.h1>

            <div className="w-full h-px bg-white/10 relative overflow-hidden">
              <motion.div className="absolute h-full bg-[#DAC0A3] left-0 top-0" style={{ width: `${progress}%` }} />
            </div>

            <div className="w-full flex justify-between mt-4 text-[#DAC0A3] font-mono text-[9px] uppercase tracking-widest">
              <span>Initializing</span>
              <span>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default PreLoader;