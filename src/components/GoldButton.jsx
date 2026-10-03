import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function GoldButton({
  children,
  to,
  href,
  onClick,
  variant = 'solid',
  size = 'md',
  className = '',
  icon = true,
  disabled = false,
  type = 'button'
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-xs sm:text-sm',
    lg: 'px-8 py-4 text-sm sm:text-base'
  };

  const baseClasses = `relative group inline-flex items-center justify-center font-semibold uppercase tracking-[0.2em] transition-all duration-300 rounded-sm overflow-hidden select-none cursor-pointer ${sizeClasses[size]} ${className}`;

  let variantClasses = '';
  if (variant === 'solid') {
    variantClasses = 'bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA771C] text-[#0A0A0C] hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] hover:brightness-110 active:scale-[0.98] border border-[#FFF2BE]/40';
  } else if (variant === 'outline') {
    variantClasses = 'border border-[#D4AF37]/50 bg-black/40 text-[#FAF7EE] backdrop-blur-md hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] active:scale-[0.98]';
  } else if (variant === 'ghost') {
    variantClasses = 'text-[#D4AF37] hover:text-[#FFF2BE] p-0 tracking-[0.25em] bg-transparent';
  }

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-current" />
        )}
      </span>
      {variant === 'solid' && (
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${variantClasses}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${variantClasses}`}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseClasses} ${variantClasses}`}>
      {content}
    </button>
  );
}
