import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

const withoutLines = [
  'You spend the evening checking paper tests and jotting notes by hand.',
  'You wonder which job aspirants struggled with the arithmetic formulas.',
  'You send messages to students asking who is finding the chapter difficult.',
  'You wait for quiet students to speak up before you know they need help.',
];

const withLines = [
  'You open one screen and see every student who needs attention.',
  'The sheet already marks every low scorer from the test.',
  'You see the exact chapter each student is stuck on before tomorrow begins.',
  'You prepare your next session knowing who needs extra math care.',
];

export const BeforeAfterSection: React.FC = () => {
  const [selected, setSelected] = useState<'without' | 'with'>('without');
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative bg-[#FAF6EE] py-20 sm:py-28 md:py-36 border-t border-hairline-ink">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#3B5A78]">
            An Evening In Your Class
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl text-[#22262B]">
            Before and after
          </h2>
        </div>

        {/* Two-position switch */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-[#22262B]/12 bg-[#FAF6EE] p-1.5 shadow-xs">
            <button
              type="button"
              onClick={() => setSelected('without')}
              className={`relative rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                selected === 'without'
                  ? 'text-[#22262B]'
                  : 'text-[#22262B]/60 hover:text-[#22262B]'
              }`}
            >
              {selected === 'without' && (
                <motion.div
                  layoutId="switch-pill"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-[#22262B]/8"
                />
              )}
              <span className="relative z-10">Without Abhilash Math Care</span>
            </button>

            <button
              type="button"
              onClick={() => setSelected('with')}
              className={`relative rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                selected === 'with'
                  ? 'text-[#22262B]'
                  : 'text-[#22262B]/60 hover:text-[#22262B]'
              }`}
            >
              {selected === 'with' && (
                <motion.div
                  layoutId="switch-pill"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-[#86B99D]"
                />
              )}
              <span className="relative z-10">With Abhilash Math Care</span>
            </button>
          </div>
        </div>

        {/* Stacked list container with crossfade */}
        <div className="relative mt-12 min-h-[260px] rounded-[28px] border border-[#22262B]/12 bg-[#FAF6EE] p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1">
            <AnimatePresence mode="wait" initial={false}>
              {selected === 'without' ? (
                <motion.div
                  key="without"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="col-start-1 row-start-1 space-y-5"
                >
                  <p className="font-serif text-lg font-bold text-[#22262B] mb-2">
                    Without Abhilash Math Care
                  </p>
                  <ul className="space-y-4">
                    {withoutLines.map((line, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-base sm:text-lg leading-[1.6] text-[#22262B]/85"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#22262B]/35" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <motion.div
                  key="with"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="col-start-1 row-start-1 space-y-5"
                >
                  <p className="font-serif text-lg font-bold text-[#1F6B4A] mb-2">
                    With Abhilash Math Care
                  </p>
                  <ul className="space-y-4">
                    {withLines.map((line, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-base sm:text-lg leading-[1.6] text-[#22262B]"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1F6B4A]" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
