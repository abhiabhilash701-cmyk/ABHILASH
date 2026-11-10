import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { FilmGrain } from './FilmGrain';

const sentence =
  'A test finishes on the weekend, the marks get entered on Monday, but by the time you spot who struggled with arithmetic or algebra, the student has already stopped asking questions and quietly fallen behind.';

export const ProblemSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 30%'],
  });

  const words = sentence.split(' ');

  return (
    <section
      ref={containerRef}
      data-theme="ink"
      className="relative min-h-[60vh] overflow-hidden bg-[#22262B] py-24 sm:py-32 md:py-40 text-[#FAF6EE]"
    >
      {/* Real Film Grain Layer */}
      <FilmGrain opacity={0.05} />

      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8">
        <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#86B99D]">
          The moment time is lost
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.25] tracking-tight">
          {words.map((word, index) => {
            return (
              <WordSpan
                key={index}
                word={word}
                index={index}
                total={words.length}
                scrollYProgress={scrollYProgress}
                shouldReduceMotion={!!shouldReduceMotion}
              />
            );
          })}
        </h2>
      </div>
    </section>
  );
};

interface WordSpanProps {
  word: string;
  index: number;
  total: number;
  scrollYProgress: any;
  shouldReduceMotion: boolean;
}

const WordSpan: React.FC<WordSpanProps> = ({
  word,
  index,
  total,
  scrollYProgress,
  shouldReduceMotion,
}) => {
  const start = index / total;
  const end = Math.min(1, (index + 0.8) / total);

  const opacity = useTransform(scrollYProgress, [start, end], [0.22, 1]);

  if (shouldReduceMotion) {
    return <span className="inline-block mr-[0.28em] text-[#FAF6EE]">{word}</span>;
  }

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block mr-[0.28em] text-[#FAF6EE] transition-colors"
    >
      {word}
    </motion.span>
  );
};
