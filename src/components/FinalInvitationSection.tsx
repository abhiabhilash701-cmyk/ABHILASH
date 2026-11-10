import React from 'react';
import { FilmGrain } from './FilmGrain';
import { MagneticButton } from './MagneticButton';
import { ArrowUpRight, MessageCircle, Mail } from 'lucide-react';

interface FinalInvitationSectionProps {
  bookingLink: string;
  whatsappLink: string;
  email: string;
}

export const FinalInvitationSection: React.FC<FinalInvitationSectionProps> = ({
  bookingLink,
  whatsappLink,
  email,
}) => {
  return (
    <section
      data-theme="ink"
      className="relative overflow-hidden bg-[#22262B] py-28 sm:py-36 md:py-44 text-[#FAF6EE]"
    >
      {/* Real Film Grain */}
      <FilmGrain opacity={0.06} />

      <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 text-center">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#86B99D]">
          Abhilash Math Care
        </p>

        {/* Big serif line adapted to clients */}
        <h2 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight">
          Let's find the weak chapters before students go quiet.
        </h2>

        {/* Booking button in the accent colour with ink text */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <MagneticButton
            href={bookingLink}
            size="lg"
            variant="accent"
            className="gap-2 text-base sm:text-lg"
          >
            <span>Book a 20 minute call</span>
            <ArrowUpRight className="h-5 w-5" />
          </MagneticButton>
        </div>

        {/* WhatsApp and email under it as plain links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 font-sans text-sm sm:text-base text-[#FAF6EE]/75">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-[#86B99D]"
          >
            <MessageCircle className="h-4 w-4 text-[#86B99D]" />
            <span>Message me on WhatsApp</span>
          </a>

          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-[#86B99D]"
          >
            <Mail className="h-4 w-4 text-[#86B99D]" />
            <span>{email}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
