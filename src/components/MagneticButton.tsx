import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'accent' | 'cream' | 'ink' | 'outline';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  target?: string;
  rel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  href,
  children,
  variant = 'accent',
  className = '',
  size = 'md',
  target = '_blank',
  rel = 'noopener noreferrer',
}) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (shouldReduceMotion || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (clientX - centerX) * 0.18;
    const deltaY = (clientY - centerY) * 0.18;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  // Base pill styles
  let variantStyles = 'bg-[#86B99D] text-[#22262B] hover:bg-[#92C4AB] shadow-sm';
  if (variant === 'cream') {
    variantStyles = 'bg-[#FAF6EE] text-[#22262B] hover:bg-white shadow-sm';
  } else if (variant === 'ink') {
    variantStyles = 'bg-[#22262B] text-[#FAF6EE] hover:bg-[#2C3138] shadow-sm';
  } else if (variant === 'outline') {
    variantStyles = 'border border-[#22262B]/20 text-[#22262B] hover:border-[#22262B]/50 hover:bg-[#22262B]/5';
  }

  const sizeStyles =
    size === 'sm'
      ? 'px-4 py-2 text-sm font-semibold'
      : size === 'lg'
      ? 'px-8 py-4 text-base md:text-lg font-semibold'
      : 'px-6 py-3 text-sm md:text-base font-semibold';

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={shouldReduceMotion ? {} : { x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, mass: 0.5 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
      className={`inline-flex items-center justify-center rounded-full font-sans transition-colors cursor-pointer select-none text-center ${sizeStyles} ${variantStyles} ${className}`}
    >
      {children}
    </motion.a>
  );
};
