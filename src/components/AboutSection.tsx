import React from 'react';
import { MediaPanel } from './MediaPanel';
import { MagneticButton } from './MagneticButton';
import { ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  bookingLink: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ bookingLink }) => {
  return (
    <section id="about" className="relative bg-[#FAF6EE] py-20 sm:py-28 md:py-36 border-t border-hairline-ink">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <div className="rounded-[32px] border border-[#22262B]/12 bg-[#FAF6EE] p-8 sm:p-14 shadow-xs">
          {/* Top row: small round photo and letter heading */}
          <div className="flex items-center gap-5 mb-8">
            <div className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-full border border-[#22262B]/12 bg-[#22262B]">
              <MediaPanel
                src="/me.jpg"
                alt="Abhilash"
                identifier="A"
                roundedClassName="rounded-full"
                className="h-full w-full"
              />
            </div>

            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#3B5A78]">
                Founder
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
                A note from Abhilash
              </h2>
            </div>
          </div>

          {/* Letter Body in slightly larger reading size */}
          <div className="border-t border-[#22262B]/10 pt-8">
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl leading-relaxed text-[#22262B] italic">
              "i m good at maths"
            </p>

            {/* Signed with first name in handwritten Google font Caveat */}
            <div className="mt-8">
              <span className="font-signature text-4xl sm:text-5xl text-[#1F6B4A]">
                Abhilash
              </span>
              <p className="mt-1 font-sans text-xs uppercase tracking-wider text-[#3B5A78]">
                Kurnool
              </p>
            </div>

            {/* Button under it */}
            <div className="mt-10 pt-6 border-t border-[#22262B]/10">
              <MagneticButton
                href={bookingLink}
                size="md"
                variant="accent"
                className="gap-2"
              >
                <span>Book a 20 minute call with Abhilash</span>
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
