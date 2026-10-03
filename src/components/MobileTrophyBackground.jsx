import React, { useEffect, useState } from 'react';

export default function MobileTrophyBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle rotation response to mobile scroll (gentle 30-degree range)
  const mobileRot = (scrollY * 0.08) % 360;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden lg:hidden flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Dramatic Backlight Glow Cones */}
      <div
        className="absolute w-[320px] sm:w-[460px] h-[580px] sm:h-[720px] rounded-full blur-[75px] opacity-35 -translate-y-8"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.3) 0%, rgba(120, 0, 22, 0.32) 45%, rgba(10, 10, 14, 0) 75%)'
        }}
      />

      {/* Top Spotlight Conic Beam */}
      <div
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-[280px] sm:w-[420px] h-[450px] opacity-25 pointer-events-none blur-[40px]"
        style={{
          background:
            'conic-gradient(from 180deg at 50% 0%, transparent 42%, rgba(255, 242, 190, 0.3) 50%, transparent 58%)'
        }}
      />

      {/* The Central Trophy Silhouette in Mobile Background */}
      <div
        className="relative w-[210px] sm:w-[280px] max-h-[78vh] flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(800px) rotateY(${mobileRot}deg)`
        }}
      >
        <img
          src="/assets/trophy/heia_trophy_isolated.png"
          alt=""
          className="w-full h-auto object-contain opacity-[0.18] drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]"
        />
      </div>

      {/* Bottom Stage Base Floor Glow */}
      <div
        className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 w-[260px] sm:w-[380px] h-16 rounded-full blur-[35px] opacity-30"
        style={{
          background:
            'radial-gradient(circle, rgba(212, 175, 55, 0.5) 0%, rgba(120, 0, 22, 0.3) 50%, transparent 80%)'
        }}
      />
    </div>
  );
}
