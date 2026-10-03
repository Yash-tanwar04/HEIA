import React from 'react';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-4xl ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 mb-3.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#E6C564]">
            {badge}
          </span>
          <span className="w-6 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#FAF7EE] font-display leading-[1.15] mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-[#C7C2B2] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-light mx-auto">
          {subtitle}
        </p>
      )}

      <div className={`mt-6 flex items-center gap-3 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
        <span className="w-1.5 h-1.5 rotate-45 border border-[#D4AF37] bg-[#D4AF37]/30" />
        <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
      </div>
    </div>
  );
}
