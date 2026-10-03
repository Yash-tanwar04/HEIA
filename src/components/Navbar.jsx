import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import AudioAtmosphere from './AudioAtmosphere';
import MobileDrawer from './MobileDrawer';

const NAV_LINKS = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'EXPERIENCE', path: '/experience' },
  { name: 'AWARDS', path: '/awards' },
  { name: 'SHOW FLOW', path: '/show-flow' },
  { name: 'CELEBRITIES', path: '/celebrities' },
  { name: 'PERFORMANCES', path: '/performances' },
  { name: 'LEGACY', path: '/legacy' },
  { name: 'SPONSORS', path: '/sponsors' },
  { name: 'MEDIA', path: '/media' },
  { name: 'CONTACT', path: '/contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#07070a]/90 backdrop-blur-xl border-b border-[#D4AF37]/20 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-4 sm:py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo on Left */}
          <Link
            to="/"
            className="flex items-center gap-3 group select-none transition-transform duration-300 hover:scale-[1.02]"
            aria-label="HEIA Homepage"
          >
            <img
              src="/assets/logo/association.png"
              alt="HEIA — Haryana Entertainment Industry Awards"
              className="h-9 sm:h-11 w-auto object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.3)] transition-all group-hover:drop-shadow-[0_0_18px_rgba(212,175,55,0.6)]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-2">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `relative px-2.5 py-1.5 text-[11px] 2xl:text-xs font-semibold tracking-[0.18em] transition-all duration-300 uppercase rounded-sm ${
                    isActive
                      ? 'text-[#FFF2BE] font-bold drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]'
                      : 'text-[#C7C2B2] hover:text-[#FAF7EE] hover:bg-white/[0.03]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 inset-x-2 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_8px_#D4AF37]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Ambient Sound Toggle */}
            <AudioAtmosphere />

            {/* Desktop Sponsor CTA */}
            <Link
              to="/sponsors"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-sm text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 border border-[#D4AF37]/60 bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/10 to-transparent text-[#FAF7EE] hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-black" />
              <span>SPONSOR HEIA</span>
            </Link>

            {/* Mobile / Tablet Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden p-2 rounded border border-[#D4AF37]/30 text-[#D4AF37] hover:border-[#D4AF37] hover:bg-white/5 transition-colors"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
}
