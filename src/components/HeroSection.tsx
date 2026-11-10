import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { MagneticButton } from './MagneticButton';
import { MediaPanel } from './MediaPanel';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

interface HeroSectionProps {
  bookingLink: string;
  whatsappLink: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  bookingLink,
  whatsappLink,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Arch picture moves slightly slower than the page (subtle parallax)
  const archY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#FAF6EE] pt-28 pb-16 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column (or bottom on phone): Headline, description, action buttons */}
          <div className="order-2 flex flex-col items-start lg:order-1 lg:col-span-7">
            {/* Small line */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#22262B]/12 bg-[#FAF6EE] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#3B5A78]"
            >
              For job aspirants in Kurnool
            </motion.div>

            {/* Headline in very large serif type */}
            <motion.h1
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[44px] leading-[1.02] tracking-tight text-[#22262B] sm:text-[62px] lg:text-[76px]"
            >
              Every weak chapter found before the student goes{' '}
              <span className="italic text-[#1F6B4A]">quiet.</span>
            </motion.h1>

            {/* Plain line under it saying what I set up */}
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-[62ch] font-sans text-lg leading-[1.6] text-[#22262B]/85 sm:text-xl"
            >
              You build a small form the teacher fills after each test, a sheet that marks the low scorers, and one screen that lists every student with the chapter they are stuck on.
            </motion.p>

            {/* Actions: Book a 20 minute call & WhatsApp */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <MagneticButton
                href={bookingLink}
                size="lg"
                variant="accent"
                className="group gap-2 text-base"
              >
                <span>Book a 20 minute call</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-base font-semibold text-[#22262B] transition-colors hover:text-[#1F6B4A]"
              >
                <MessageCircle className="h-5 w-5 text-[#1F6B4A]" />
                <span>Message me on WhatsApp</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column (or top on phone): Tall arch frame with me.jpg / rich panel */}
          <div className="order-1 flex justify-center lg:order-2 lg:col-span-5">
            <motion.div
              style={shouldReduceMotion ? {} : { y: archY }}
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[340px] sm:max-w-[390px]"
            >
              {/* Arch frame: rounded top (half circle arch), square/subtle bottom */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-[170px] sm:rounded-t-[200px] rounded-b-[24px] border border-[#22262B]/12 bg-[#FAF6EE] shadow-lg">
                <MediaPanel
                  src="/me.jpg"
                  alt="Abhilash, founder of Abhilash Math Care"
                  identifier="A"
                  label="Abhilash"
                  roundedClassName="rounded-t-[170px] sm:rounded-t-[200px] rounded-b-[24px]"
                  className="h-full w-full"
                />
              </div>

              {/* Floating card on the corner reading "Abhilash, founder of Abhilash Math Care" */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 z-20 rounded-2xl border border-[#22262B]/10 bg-[#FAF6EE] p-4 shadow-md backdrop-blur-xs">
                <p className="font-serif text-lg font-bold text-[#22262B] leading-snug">
                  Abhilash
                </p>
                <p className="font-sans text-xs font-semibold text-[#3B5A78] uppercase tracking-wider mt-0.5">
                  Founder of Abhilash Math Care
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
