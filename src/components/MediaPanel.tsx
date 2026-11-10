import React, { useState } from 'react';
import { FilmGrain } from './FilmGrain';

interface MediaPanelProps {
  src: string;
  alt: string;
  identifier: string; // "A" for Abhilash or "01", "02", "03"
  label?: string;
  className?: string;
  roundedClassName?: string;
  badge?: React.ReactNode;
}

export const MediaPanel: React.FC<MediaPanelProps> = ({
  src,
  alt,
  identifier,
  label,
  className = '',
  roundedClassName = 'rounded-[28px]',
  badge,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${roundedClassName} ${className}`}>
      {/* Real image if present and loaded */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}

      {/* Rich panel fallback: soft gradient from ink colour (#22262B) to accent (#1F6B4A / #3B5A78) with fine film grain & outline serif type */}
      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#22262B] via-[#1B3A2C] to-[#1F6B4A] p-6 text-center select-none">
          {/* Subtle geometric chalk guideline */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-4 rounded-[20px] border border-[#FAF6EE]/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #FAF6EE 1px, transparent 1px), linear-gradient(to bottom, #FAF6EE 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />

          {/* Film Grain Layer */}
          <FilmGrain opacity={0.06} />

          {/* Huge outline serif type */}
          <span
            className="outline-serif-text font-serif leading-none tracking-tight"
            style={{
              fontSize: identifier.length > 1 ? 'clamp(4.5rem, 14vw, 9rem)' : 'clamp(6rem, 18vw, 12rem)',
            }}
          >
            {identifier}
          </span>

          {label && (
            <p className="mt-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#FAF6EE]/60 font-sans">
              {label}
            </p>
          )}
        </div>
      )}

      {/* Optional floating badge */}
      {badge}
    </div>
  );
};
