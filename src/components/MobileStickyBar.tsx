import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface MobileStickyBarProps {
  bookingLink: string;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ bookingLink }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Show after hero scrolls away (approx 480px)
          setShow(window.scrollY > 480);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 z-40 block md:hidden"
        >
          <div className="rounded-full border border-[#22262B]/12 bg-[#FAF6EE]/90 p-2 shadow-lg backdrop-blur-md">
            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#86B99D] py-3 text-sm font-semibold text-[#22262B] shadow-xs transition-colors hover:bg-[#92C4AB] active:scale-[0.98]"
            >
              <span>Book a 20 minute call</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
