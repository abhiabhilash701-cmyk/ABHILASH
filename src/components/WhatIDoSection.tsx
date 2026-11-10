import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { MediaPanel } from './MediaPanel';

interface WorkItem {
  id: string;
  number: string;
  title: string;
  today: string;
  withService: string;
  image: string;
}

const workItems: WorkItem[] = [
  {
    id: 'form',
    number: '01',
    title: 'A small form for the teacher',
    today: 'Test papers sit on the table and scores remain unrecorded while the next class starts.',
    withService: 'The teacher fills a simple form right after each test to record the scores and chapters.',
    image: '/work-1.jpg',
  },
  {
    id: 'sheet',
    number: '02',
    title: 'A sheet that marks the low scorers',
    today: 'Low marks stay unnoticed inside paper records until a final exam approaches.',
    withService: 'A clean sheet marks every student with low marks so you see who struggled right away.',
    image: '/work-2.jpg',
  },
  {
    id: 'screen',
    number: '03',
    title: 'One screen with stuck chapters',
    today: 'You have to ask each student one by one which math chapters they do not understand.',
    withService: 'One screen lists every student alongside the exact chapter they are stuck on.',
    image: '/work-3.jpg',
  },
];

export const WhatIDoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Laptop pinned horizontal scroll transform
  // With 3 cards of ~70vw, moving from 0 to -140vw
  const x = useTransform(scrollYProgress, [0.05, 0.95], ['0%', '-67%']);

  return (
    <section id="what-i-do" className="relative bg-[#FAF6EE] py-16 md:py-24">
      {/* If reduced motion is active, show standard stacked list */}
      {shouldReduceMotion ? (
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#3B5A78]">
              The Setup
            </p>
            <h2 className="mt-2 font-serif text-4xl sm:text-5xl text-[#22262B]">
              What I set up
            </h2>
          </div>
          <div className="space-y-12">
            {workItems.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-[28px] border border-[#22262B]/12 bg-[#FAF6EE] p-6 shadow-sm"
              >
                <div className="aspect-[16/10] w-full overflow-hidden rounded-[20px]">
                  <MediaPanel
                    src={item.image}
                    alt={item.title}
                    identifier={item.number}
                    label={`SYSTEM ${item.number}`}
                    roundedClassName="rounded-[20px]"
                    className="h-full w-full"
                  />
                </div>
                <div className="mt-6">
                  <span className="font-serif text-3xl font-bold text-[#1F6B4A]">
                    {item.number}
                  </span>
                  <h3 className="mt-1 font-serif text-2xl font-bold text-[#22262B]">
                    {item.title}
                  </h3>
                  <div className="mt-4 space-y-2 text-base text-[#22262B]/85">
                    <p>
                      <strong className="font-semibold text-[#22262B]">Today: </strong>
                      {item.today}
                    </p>
                    <p>
                      <strong className="font-semibold text-[#1F6B4A]">With Abhilash Math Care: </strong>
                      {item.withService}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Mobile swipe layout (hidden on lg screens) */}
          <div className="block lg:hidden px-6">
            <div className="mb-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#3B5A78]">
                The Setup
              </p>
              <h2 className="mt-1 font-serif text-3xl sm:text-4xl text-[#22262B]">
                What I set up
              </h2>
            </div>

            {/* Horizontal swipe container */}
            <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar -mx-6 px-6">
              {workItems.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[85vw] max-w-[88vw] shrink-0 snap-center overflow-hidden rounded-[28px] border border-[#22262B]/12 bg-[#FAF6EE] p-5 shadow-sm"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-[20px]">
                    <MediaPanel
                      src={item.image}
                      alt={item.title}
                      identifier={item.number}
                      label={`SYSTEM ${item.number}`}
                      roundedClassName="rounded-[20px]"
                      className="h-full w-full"
                    />
                  </div>
                  <div className="mt-5">
                    <span className="font-serif text-2xl font-bold text-[#1F6B4A]">
                      {item.number}
                    </span>
                    <h3 className="mt-1 font-serif text-2xl font-bold text-[#22262B]">
                      {item.title}
                    </h3>
                    <div className="mt-3 space-y-2 text-sm leading-relaxed text-[#22262B]/85">
                      <p>
                        <strong className="font-semibold text-[#22262B]">Today: </strong>
                        {item.today}
                      </p>
                      <p>
                        <strong className="font-semibold text-[#1F6B4A]">With Abhilash Math Care: </strong>
                        {item.withService}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Laptop pinned horizontal scroll layout (hidden on mobile, visible on lg) */}
          <div ref={containerRef} className="hidden lg:block relative h-[280vh]">
            <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
              <div className="mx-auto w-full max-w-7xl px-8 mb-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#3B5A78]">
                  The Setup
                </p>
                <h2 className="mt-2 font-serif text-5xl text-[#22262B]">
                  What I set up
                </h2>
              </div>

              {/* Cards sliding sideways */}
              <div className="w-full pl-8">
                <motion.div style={{ x }} className="flex gap-8 w-max">
                  {workItems.map((item) => (
                    <div
                      key={item.id}
                      className="w-[70vw] max-w-[860px] overflow-hidden rounded-[28px] border border-[#22262B]/12 bg-[#FAF6EE] p-7 shadow-sm transition-shadow hover:shadow-md"
                    >
                      {/* Work picture filling top 60% */}
                      <div className="h-[340px] w-full overflow-hidden rounded-[22px]">
                        <MediaPanel
                          src={item.image}
                          alt={item.title}
                          identifier={item.number}
                          label={`SYSTEM ${item.number}`}
                          roundedClassName="rounded-[22px]"
                          className="h-full w-full"
                        />
                      </div>

                      {/* Content */}
                      <div className="mt-6 flex items-start gap-6">
                        <span className="font-serif text-4xl font-bold text-[#1F6B4A] select-none">
                          {item.number}
                        </span>
                        <div className="flex-1">
                          <h3 className="font-serif text-3xl font-bold text-[#22262B]">
                            {item.title}
                          </h3>
                          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-base leading-relaxed text-[#22262B]/85">
                            <p className="rounded-xl border border-[#22262B]/8 bg-[#22262B]/[0.02] p-3">
                              <span className="block font-semibold text-[#22262B] mb-1">Today:</span>
                              {item.today}
                            </p>
                            <p className="rounded-xl border border-[#1F6B4A]/15 bg-[#1F6B4A]/[0.03] p-3">
                              <span className="block font-semibold text-[#1F6B4A] mb-1">With Abhilash Math Care:</span>
                              {item.withService}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
