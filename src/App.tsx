import React from 'react';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { WhatIDoSection } from './components/WhatIDoSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { HowWeStartSection } from './components/HowWeStartSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { FinalInvitationSection } from './components/FinalInvitationSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

// MY DETAILS
const BOOKING_LINK = 'https://cal.com/abhilash-math-care';
const WHATSAPP_LINK = 'https://wa.me/918008170906';
const EMAIL = 'abhiabhilash701@gmail.com';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#22262B] font-sans antialiased selection:bg-[#86B99D]/40 selection:text-[#22262B]">
      {/* 1. Top bar */}
      <TopBar bookingLink={BOOKING_LINK} />

      <main>
        {/* 2. Hero */}
        <HeroSection
          bookingLink={BOOKING_LINK}
          whatsappLink={WHATSAPP_LINK}
        />

        {/* 3. The problem */}
        <ProblemSection />

        {/* 4. What I do */}
        <WhatIDoSection />

        {/* 5. Before and after */}
        <BeforeAfterSection />

        {/* 6. How we start */}
        <HowWeStartSection bookingLink={BOOKING_LINK} />

        {/* 7. About me */}
        <AboutSection bookingLink={BOOKING_LINK} />

        {/* 8. Questions */}
        <FaqSection />

        {/* 9. Final invitation */}
        <FinalInvitationSection
          bookingLink={BOOKING_LINK}
          whatsappLink={WHATSAPP_LINK}
          email={EMAIL}
        />
      </main>

      {/* 10. Footer */}
      <Footer
        bookingLink={BOOKING_LINK}
        whatsappLink={WHATSAPP_LINK}
        email={EMAIL}
      />

      {/* Phone sticky bar */}
      <MobileStickyBar bookingLink={BOOKING_LINK} />
    </div>
  );
}
