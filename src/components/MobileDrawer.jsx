import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, Sparkles, Phone, Mail, ArrowRight } from 'lucide-react';

export default function MobileDrawer({ isOpen, onClose, links }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] xl:hidden flex flex-col bg-[#07070a]/98 backdrop-blur-2xl transition-opacity duration-300">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#D4AF37]/20">
        <Link to="/" onClick={onClose} className="flex items-center">
          <img
            src="/assets/logo/association.png"
            alt="HEIA Logo"
            className="h-9 w-auto object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]"
          />
        </Link>
        <button
          onClick={onClose}
          className="p-2.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
          aria-label="Close Navigation Menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <nav className="space-y-3">
          {links.map((link, idx) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `group flex items-center justify-between py-2.5 border-b border-white/5 text-lg font-bold tracking-[0.18em] transition-all font-display ${
                  isActive
                    ? 'text-[#FFF2BE] translate-x-1'
                    : 'text-[#C7C2B2] hover:text-[#FFF2BE] hover:translate-x-1'
                }`
              }
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#D4AF37]/60">
                  {idx < 9 ? `0${idx + 1}` : idx + 1}
                </span>
                <span>{link.name}</span>
              </div>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF37]" />
            </NavLink>
          ))}
        </nav>

        {/* Bottom Actions & Contacts */}
        <div className="pt-8 border-t border-[#D4AF37]/20 mt-6 space-y-4">
          <Link
            to="/sponsors"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-sm bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA771C] text-black font-semibold uppercase tracking-[0.2em] text-xs shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            <Sparkles className="w-4 h-4" />
            <span>BECOME A SPONSOR</span>
          </Link>

          <div className="flex flex-col gap-2 text-xs text-[#9E9A8E] font-light">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>08690581555 / 9671724000</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>info@heia.in</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
