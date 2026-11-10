import React from 'react';
import { FilmGrain } from './FilmGrain';

interface FooterProps {
  bookingLink: string;
  whatsappLink: string;
  email: string;
}

export const Footer: React.FC<FooterProps> = ({
  bookingLink,
  whatsappLink,
  email,
}) => {
  return (
    <footer
      data-theme="ink"
      className="relative overflow-hidden bg-[#22262B] border-t border-[#FAF6EE]/12 py-14 sm:py-18 text-[#FAF6EE]"
    >
      <FilmGrain opacity={0.04} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Logo on a small cream rounded panel & City */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="inline-flex w-fit items-center rounded-xl bg-[#FAF6EE] px-3 py-1.5 shadow-xs">
              <img
                src="/logo.png"
                alt="Abhilash Math Care"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="font-serif text-lg font-bold text-[#1F6B4A]">
                AMC
              </span>
            </div>

            <p className="font-sans text-sm font-medium tracking-wide text-[#FAF6EE]/60">
              Kurnool
            </p>
          </div>

          {/* Three contact links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-sans text-sm text-[#FAF6EE]/80">
            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#86B99D]"
            >
              Book a 20 minute call
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#86B99D]"
            >
              Message me on WhatsApp
            </a>

            <a
              href={`mailto:${email}`}
              className="transition-colors hover:text-[#86B99D]"
            >
              {email}
            </a>
          </div>

          {/* Year and Business name */}
          <div className="font-sans text-sm text-[#FAF6EE]/60">
            2026 Abhilash Math Care
          </div>
        </div>
      </div>
    </footer>
  );
};
