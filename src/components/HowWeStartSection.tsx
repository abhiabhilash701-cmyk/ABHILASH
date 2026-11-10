import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { MagneticButton } from './MagneticButton';
import { ArrowUpRight } from 'lucide-react';

interface HowWeStartSectionProps {
  bookingLink: string;
}

export const HowWeStartSection: React.FC<HowWeStartSectionProps> = ({ bookingLink }) => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 40%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const steps = [
    {
      number: '01',
      title: 'A 20 minute call',
      description:
        'We speak on a 20 minute call to discuss how your tests run and how your teachers currently record student results.',
    },
    {
      number: '02',
      title: 'A plan for your job aspirant class',
      description:
        'I plan the exact form fields your teacher will fill, the sheet rules that mark low scorers, and the layout of the student screen.',
    },
    {
      number: '03',
      title: 'I set it up and show your team',
      description:
        'I build the form, the sheet, and the screen, check them with your test data, and show your team how each piece works.',
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="relative bg-[#FAF6EE] py-20 sm:py-28 md:py-36 border-t border-hairline-ink"
    >
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="mb-16 md:mb-20">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#3B5A78]">
            Simple Process
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl text-[#22262B]">
            How we start
          </h2>
        </div>

        {/* Vertical steps with filling line */}
        <div className="relative pl-8 sm:pl-12">
          {/* Background vertical hairline */}
          <div
            aria-hidden="true"
            className="absolute left-3.5 sm:left-5 top-3 bottom-8 w-[2px] bg-[#22262B]/12"
          />

          {/* Animated fill line */}
          <motion.div
            aria-hidden="true"
            style={shouldReduceMotion ? { height: '100%' } : { height: lineHeight }}
            className="absolute left-3.5 sm:left-5 top-3 w-[2px] bg-[#1F6B4A] origin-top"
          />

          <div className="space-y-14 sm:space-y-16">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Step marker node */}
                <div className="absolute -left-8 sm:-left-12 top-1 flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-[#22262B]/12 bg-[#FAF6EE] text-xs sm:text-sm font-bold font-serif text-[#1F6B4A] shadow-xs">
                  {step.number}
                </div>

                <div className="pt-0.5">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[58ch] font-sans text-base sm:text-lg leading-[1.6] text-[#22262B]/85">
                    {step.description}
                  </p>
                </div>

                {/* Under step 3: The Price line */}
                {idx === 2 && (
                  <div className="mt-8 rounded-[24px] border border-[#1F6B4A]/20 bg-[#FAF6EE] p-6 sm:p-8 shadow-xs">
                    <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#3B5A78]">
                      Investment
                    </p>
                    <p className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-[#1F6B4A]">
                      Rs 15,000 setup + Rs 4,000 a month
                    </p>
                    <p className="mt-2 font-sans text-sm sm:text-base text-[#22262B]/80 leading-relaxed">
                      The class pays once to set it up and a small monthly fee to keep it running.
                    </p>

                    <div className="mt-6">
                      <MagneticButton
                        href={bookingLink}
                        size="md"
                        variant="accent"
                        className="gap-2"
                      >
                        <span>Book a 20 minute call</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </MagneticButton>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
