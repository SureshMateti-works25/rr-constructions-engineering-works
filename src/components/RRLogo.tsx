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
        return 'w-10 h-10';
      case 'md':
        return 'w-12 h-12 sm:w-[3.25rem] sm:h-[3.25rem]';
      case 'lg':
        return 'w-16 h-16';
      case 'xl':
        return 'w-24 h-24 sm:w-28 sm:h-28';
      default:
        return 'w-12 h-12 sm:w-[3.25rem] sm:h-[3.25rem]';
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
      {/* Precision Vector Emblem with Trendy Matched Architectural Badge */}
      <div 
        className={`${getIconSize()} relative shrink-0 flex items-center justify-center p-1.5 sm:p-2 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white via-[#F6FAFF] to-[#E3EFFF] shadow-[0_4px_18px_rgba(0,163,255,0.25)] border border-white/90 ring-1 ring-cyan-400/35 group-hover:ring-cyan-400/80 group-hover:shadow-[0_4px_24px_rgba(0,163,255,0.45)] group-hover:scale-105 transition-all duration-300`}
        title="RR Constructions & Engineering Works"
      >
        <svg
          viewBox="20 -8 160 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full filter drop-shadow-sm"
        >
          {/* Skyscraper towers in background */}
          <path
            d="M95 18L108 8V58H95V18Z"
            fill="url(#skylineGrad1)"
          />
          <path
            d="M110 8L124 0V58H110V8Z"
            fill="url(#skylineGrad2)"
          />
          <path
            d="M126 18L138 28V58H126V18Z"
            fill="url(#skylineGrad3)"
          />
          {/* Skyscraper window slit accents */}
          <line x1="117" y1="12" x2="117" y2="48" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.8" strokeDasharray="3 3" />
          <line x1="102" y1="24" x2="102" y2="48" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.8" strokeDasharray="3 3" />

          {/* House Roof Gable */}
          <path
            d="M60 62L100 32L140 62H128L100 41L72 62H60Z"
            fill="url(#firstRGrad)"
          />
          {/* 4-Pane Square Window inside Attic */}
          <rect x="94" y="47" width="5.5" height="5.5" fill="#00A3FF" />
          <rect x="101" y="47" width="5.5" height="5.5" fill="#00A3FF" />
          <rect x="94" y="54" width="5.5" height="5.5" fill="#00A3FF" />
          <rect x="101" y="54" width="5.5" height="5.5" fill="#00A3FF" />

          {/* First "R" (Deep Sapphire Navy with High-Contrast Definition) */}
          <path
            d="M48 68H84C95.598 68 102 74.2 102 83.5C102 91.5 96.5 96.8 89 98.2L104 122H86L73 101H65V122H48V68ZM65 89H82C86.5 89 89 86.8 89 83.5C89 80.2 86.5 78 82 78H65V89Z"
            fill="url(#firstRGrad)"
          />

          {/* Second "R" (Electric Royal Blue) */}
          <path
            d="M102 68H138C149.598 68 156 74.2 156 83.5C156 91.5 150.5 96.8 143 98.2L158 122H140L127 101H119V122H102V68ZM119 89H136C140.5 89 143 86.8 143 83.5C143 80.2 140.5 78 136 78H119V89Z"
            fill="url(#blueRGrad)"
          />

          {/* Dynamic Cyan/Royal Swoosh sweeping underneath */}
          <path
            d="M30 106C30 106 50 128 85 125C125 121.5 148 95 170 84C146 100 118 117 82 118C53 119 40 106 30 106Z"
            fill="url(#swooshGrad)"
          />

          {/* Gradients matching visiting card & corporate identity */}
          <defs>
            <linearGradient id="firstRGrad" x1="48" y1="68" x2="104" y2="122" gradientUnits="userSpaceOnUse">
              <stop stopColor="#071E3D" />
              <stop offset="0.65" stopColor="#0B2A52" />
              <stop offset="1" stopColor="#103A6E" />
            </linearGradient>
            <linearGradient id="skylineGrad1" x1="95" y1="8" x2="108" y2="58" gradientUnits="userSpaceOnUse">
              <stop stopColor="#071E3D" />
              <stop offset="1" stopColor="#0066CC" />
            </linearGradient>
            <linearGradient id="skylineGrad2" x1="110" y1="0" x2="124" y2="58" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00A3FF" />
              <stop offset="1" stopColor="#004099" />
            </linearGradient>
            <linearGradient id="skylineGrad3" x1="126" y1="18" x2="138" y2="58" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="1" stopColor="#071E3D" />
            </linearGradient>
            <linearGradient id="blueRGrad" x1="102" y1="68" x2="158" y2="122" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00A3FF" />
              <stop offset="0.5" stopColor="#0066CC" />
              <stop offset="1" stopColor="#004099" />
            </linearGradient>
            <linearGradient id="swooshGrad" x1="30" y1="106" x2="170" y2="84" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="0.5" stopColor="#00A3FF" />
              <stop offset="1" stopColor="#0066CC" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Big Authoritative Typography Block */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-black tracking-tight leading-none ${getTextColor()} ${
              size === 'sm' 
                ? 'text-lg sm:text-xl' 
                : size === 'lg' 
                  ? 'text-2xl sm:text-3xl' 
                  : size === 'xl' 
                    ? 'text-3xl sm:text-4xl' 
                    : 'text-xl sm:text-2xl'
            }`}>
              RR CONSTRUCTIONS
            </span>
          </div>
          <span className={`font-extrabold uppercase tracking-wider text-cyan-400 leading-tight mt-0.5 ${
            size === 'sm' ? 'text-[10px]' : size === 'lg' ? 'text-xs sm:text-sm' : 'text-[11px] sm:text-xs'
          }`}>
            &amp; ENGINEERING WORKS
          </span>
          {showTagline && (
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-2.5 h-0.5 bg-[#00A3FF] rounded-full" />
              <span className={`text-[9px] uppercase tracking-widest font-extrabold ${getSubTextColor()}`}>
                BUILDING TRUST, DELIVERING QUALITY
              </span>
              <span className="w-2.5 h-0.5 bg-[#00A3FF] rounded-full" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
