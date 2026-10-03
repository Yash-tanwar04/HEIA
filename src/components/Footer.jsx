import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040406] text-[#C7C2B2] border-t border-[#D4AF37]/20 pt-16 pb-12 overflow-hidden lg:pl-32 xl:pl-40 2xl:pl-48 transition-[padding] duration-300">
      {/* Subtle background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-gradient-to-t from-[#D4AF37]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-white/5">
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/assets/logo/association.png"
                alt="HEIA — Haryana Entertainment Industry Awards"
                className="h-12 sm:h-14 w-auto object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
              />
            </Link>
            <p className="text-sm font-display tracking-widest uppercase text-[#FAF7EE] font-medium">
              Haryana Entertainment Industry Awards
            </p>
            <p className="text-xs text-[#9E9A8E] max-w-md leading-relaxed font-light">
              Celebrating Haryana's entertainment, talent and culture. An initiative recognizing the pioneering storytellers, artists, musicians, and technicians shaping regional excellence.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded text-[10px] uppercase tracking-[0.25em] bg-white/[0.03] border border-[#D4AF37]/25 text-[#E6C564]">
                Organized by Sambharye Foundation
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FFF2BE] mb-3 font-display">
                Ceremony
              </h4>
              <ul className="space-y-2 text-xs">
                <li><Link to="/about" className="hover:text-[#FFF2BE] transition-colors">About HEIA</Link></li>
                <li><Link to="/experience" className="hover:text-[#FFF2BE] transition-colors">The Experience</Link></li>
                <li><Link to="/awards" className="hover:text-[#FFF2BE] transition-colors">Award Categories</Link></li>
                <li><Link to="/show-flow" className="hover:text-[#FFF2BE] transition-colors">Show Flow</Link></li>
                <li><Link to="/celebrities" className="hover:text-[#FFF2BE] transition-colors">Celebrities & Guests</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FFF2BE] mb-3 font-display">
                Platform
              </h4>
              <ul className="space-y-2 text-xs">
                <li><Link to="/performances" className="hover:text-[#FFF2BE] transition-colors">Performances</Link></li>
                <li><Link to="/legacy" className="hover:text-[#FFF2BE] transition-colors">Legacy & Glimpses</Link></li>
                <li><Link to="/sponsors" className="hover:text-[#FFF2BE] transition-colors">Sponsorship</Link></li>
                <li><Link to="/media" className="hover:text-[#FFF2BE] transition-colors">Media & Reel</Link></li>
                <li><Link to="/contact" className="hover:text-[#FFF2BE] transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Col 3: Direct Official Contacts */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FFF2BE] font-display">
              Official Coordinates
            </h4>
            <div className="space-y-2.5 text-xs text-[#C7C2B2]">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a href="tel:08690581555" className="block hover:text-[#FFF2BE] transition-colors">08690581555</a>
                  <a href="tel:9671724000" className="block hover:text-[#FFF2BE] transition-colors">9671724000</a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a href="mailto:info@heia.in" className="block hover:text-[#FFF2BE] transition-colors">info@heia.in</a>
                  <a href="mailto:Sambharye.foundation@gmail.com" className="block text-[11px] text-[#9E9A8E] hover:text-[#FFF2BE] transition-colors">Sambharye.foundation@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-[11px] uppercase tracking-wider border border-[#D4AF37]/30 text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#78746A]">
          <p>© {new Date().getFullYear()} Haryana Entertainment Industry Awards (HEIA). All Rights Reserved.</p>
          <p className="tracking-wider uppercase">Celebrating Haryana's entertainment, talent and culture.</p>
        </div>
      </div>
    </footer>
  );
}
