import React, { useEffect, useState } from 'react';
import { MagneticButton } from './MagneticButton';

interface TopBarProps {
  bookingLink: string;
}

export const TopBar: React.FC<TopBarProps> = ({ bookingLink }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverInk, setIsOverInk] = useState(false);

  useEffect(() => {
    let ticking = false;

    const checkScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 24);

      // Check if top bar intersects any [data-theme="ink"] section
      const inkSections = document.querySelectorAll<HTMLElement>('[data-theme="ink"]');
      const topBarHeight = 72;
      let overInk = false;

      inkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // If top bar sits within the section bounds
        if (rect.top <= topBarHeight && rect.bottom >= 10) {
          overInk = true;
        }
      });

      setIsOverInk(overInk);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(checkScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    checkScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine navbar background and text classes
  let barClasses = 'bg-transparent text-[#22262B] border-b border-transparent';
  if (isOverInk) {
    barClasses = 'bg-[#22262B] text-[#FAF6EE] border-b border-[#FAF6EE]/12';
  } else if (isScrolled) {
    barClasses = 'bg-[#FAF6EE] text-[#22262B] border-b border-[#22262B]/12';
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${barClasses}`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Logo on the left */}
        <a
          href="#"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
          aria-label="Abhilash Math Care home"
        >
          {isOverInk ? (
            <div className="flex items-center rounded-xl bg-[#FAF6EE] px-2.5 py-1 shadow-xs">
              <img
                src="/logo.png"
                alt="Abhilash Math Care"
                className="h-7 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="font-serif text-lg font-bold text-[#1F6B4A]">
                AMC
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Abhilash Math Care"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="font-serif text-xl tracking-tight text-[#1F6B4A] font-bold">
                Abhilash Math Care
              </span>
            </div>
          )}
        </a>

        {/* Three nav links (hidden on very small phones, visible on sm and up) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <a
            href="#what-i-do"
            className="transition-colors hover:opacity-75 focus-visible:outline-hidden"
          >
            What I do
          </a>
          <a
            href="#how-it-works"
            className="transition-colors hover:opacity-75 focus-visible:outline-hidden"
          >
            How it works
          </a>
          <a
            href="#about"
            className="transition-colors hover:opacity-75 focus-visible:outline-hidden"
          >
            About
          </a>
        </nav>

        {/* The "Book a call" pill on the right */}
        <div>
          <MagneticButton
            href={bookingLink}
            size="sm"
            variant="accent"
            className="shadow-xs"
          >
            Book a call
          </MagneticButton>
        </div>
      </div>
    </header>
  );
};
