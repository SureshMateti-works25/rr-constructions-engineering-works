import React from 'react';

interface RRLogoProps {
  className?: string;
  showText?: boolean;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'color';
}

export const RRLogo: React.FC<RRLogoProps> = ({
  className = '',
  showText = true,
  showTagline = true,
  size = 'md',
  variant = 'color',
}) => {
  const getIconSize = () => {
    switch (size) {
      case 'sm':
        return 'w-11 h-11 sm:w-12 sm:h-12';
      case 'md':
        return 'w-14 h-14 sm:w-16 sm:h-16';
      case 'lg':
        return 'w-18 h-18 sm:w-20 sm:h-20';
      case 'xl':
        return 'w-28 h-28 sm:w-32 sm:h-32';
      default:
        return 'w-14 h-14 sm:w-16 sm:h-16';
    }
  };

  const getTextColor = () => {
    if (variant === 'light') return 'text-white';
    if (variant === 'dark') return 'text-[#0B2545]';
    return 'text-white';
  };

  const getSubTextColor = () => {
    if (variant === 'light') return 'text-cyan-200';
    if (variant === 'dark') return 'text-slate-600';
    return 'text-cyan-300';
  };

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Precision Emblem Badge featuring Official High-Res RR Constructions Logo */}
      <div 
        className={`${getIconSize()} relative shrink-0 flex items-center justify-center p-1 sm:p-1.5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF5FF] shadow-[0_4px_20px_rgba(0,163,255,0.28)] border border-white/95 ring-1 ring-cyan-400/40 group-hover:ring-cyan-400 group-hover:shadow-[0_4px_24px_rgba(0,163,255,0.45)] group-hover:scale-105 transition-all duration-300 overflow-hidden`}
        title="RR Constructions & Engineering Works"
      >
        <img
          src="/images/rr-logo-mark.png"
          alt="RR Constructions and Engineering Works Logo"
          className="w-full h-full object-contain filter drop-shadow-sm select-none"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Refined Executive Typography Block */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-black tracking-tight leading-none ${getTextColor()} ${
              size === 'sm' 
                ? 'text-xs sm:text-sm' 
                : size === 'lg' 
                  ? 'text-lg sm:text-xl' 
                  : size === 'xl' 
                    ? 'text-xl sm:text-2xl' 
                    : 'text-sm sm:text-base lg:text-[1.05rem]'
            }`}>
              RR CONSTRUCTIONS
            </span>
          </div>
          <span className={`font-bold uppercase tracking-wider text-cyan-400 leading-tight mt-0.5 ${
            size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-[10px] sm:text-xs' : 'text-[8.5px] sm:text-[9.5px]'
          }`}>
            &amp; ENGINEERING WORKS
          </span>
          {showTagline && (
            <div className="hidden sm:flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-0.5 bg-[#00A3FF] rounded-full" />
              <span className={`text-[8px] uppercase tracking-widest font-bold ${getSubTextColor()}`}>
                BUILDING TRUST, DELIVERING QUALITY
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
