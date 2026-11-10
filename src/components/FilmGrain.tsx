import React from 'react';

interface FilmGrainProps {
  opacity?: number;
  className?: string;
}

export const FilmGrain: React.FC<FilmGrainProps> = ({ opacity = 0.05, className = '' }) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-10 overflow-hidden mix-blend-overlay ${className}`}
      style={{ opacity }}
    >
      <svg
        className="h-full w-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <filter id="film-grain-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#film-grain-filter)" />
      </svg>
    </div>
  );
};
