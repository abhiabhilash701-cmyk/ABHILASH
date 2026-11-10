import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Plus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: 'Who is this for?',
    answer: 'This is for job aspirants in Kurnool and the classes that teach them.',
  },
  {
    question: 'What exactly do you set up?',
    answer:
      'You build a small form the teacher fills after each test, a sheet that marks the low scorers, and one screen that lists every student with the chapter they are stuck on.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'The timeline to build and launch your form, sheet, and student tracking screen is agreed on the call.',
  },
  {
    question: 'What does it cost?',
    answer:
      'The class pays once to set it up and a small monthly fee to keep it running, as agreed on the call.',
  },
  {
    question: 'How do we start?',
    answer:
      'Book a 20 minute call with the booking link, or message me directly on WhatsApp.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative bg-[#FAF6EE] py-20 sm:py-28 md:py-36 border-t border-hairline-ink">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="mb-14 md:mb-18">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#3B5A78]">
            Questions
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl text-[#22262B]">
            Frequently asked
          </h2>
        </div>

        <div className="border-t border-hairline-ink">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border-b border-hairline-ink transition-colors hover:bg-[#22262B]/[0.015]"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between py-6 sm:py-7 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-[24px] sm:text-[28px] text-[#22262B] group-hover:text-[#1F6B4A] transition-colors pr-6">
                    {item.question}
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#22262B]/12 bg-[#FAF6EE] text-[#22262B] transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-[#22262B]/5' : 'group-hover:scale-105'
                    }`}
                  >
                    <Plus className="h-5 w-5" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 font-sans text-base sm:text-lg leading-[1.6] text-[#22262B]/85 max-w-[62ch]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
