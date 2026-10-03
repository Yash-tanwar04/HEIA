import React, { useEffect, useState, useRef } from 'react';

export default function Trophy3D() {
  const [rotationY, setRotationY] = useState(0);
  const [levitation, setLevitation] = useState(0);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });

  const targetRotationRef = useRef(0);
  const currentRotationRef = useRef(0);
  const mouseTargetRef = useRef({ x: 0, y: 0 });
  const mouseCurrentRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const progress = scrollY / maxScroll;
      // 3 full 360-degree axial rotations across full page scroll
      targetRotationRef.current = progress * 1080;
    };

    const handleMouseMove = (e) => {
      // Normalize mouse (-1 to +1) based on screen width/height
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      mouseTargetRef.current = {
        x: nx * 10, // subtle horizontal tilt (deg)
        y: ny * 5   // subtle vertical pitch (deg)
      };
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    handleScroll();

    // High performance 60fps lerp loop with momentum and floating physics
    const animate = () => {
      timeRef.current += 0.025;
      
      // Scroll rotation lerp
      const diffRot = targetRotationRef.current - currentRotationRef.current;
      currentRotationRef.current += diffRot * 0.08;

      // Mouse tilt lerp
      mouseCurrentRef.current.x += (mouseTargetRef.current.x - mouseCurrentRef.current.x) * 0.05;
      mouseCurrentRef.current.y += (mouseTargetRef.current.y - mouseCurrentRef.current.y) * 0.05;

      setRotationY(currentRotationRef.current);
      setMouseTilt({ x: mouseCurrentRef.current.x, y: mouseCurrentRef.current.y });
      setLevitation(Math.sin(timeRef.current) * 8);

      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Calculate current angle in 0-360 degrees
  const totalRotY = rotationY + mouseTilt.x;
  const normalizedAngle = ((totalRotY % 360) + 360) % 360;
  // Is the front facing us? (front is 0-90 deg and 270-360 deg)
  const isFrontFacing = normalizedAngle < 90 || normalizedAngle > 270;

  // Specular light sheen offset across the gold medallion based on rotation angle
  const sheenOffset = Math.sin((totalRotY * Math.PI) / 180) * 65;

  // Key light intensity factor (mimics warm stage spotlight shining from top-front)
  const keyLightIntensity = Math.max(
    0.5,
    Math.cos(((totalRotY - 18) * Math.PI) / 180) * 0.45 + 0.65
  );

  // Subtle 3D perspective pitch (looking slightly from eye level) and dynamic roll
  const pitchX = 3.5 - mouseTilt.y;
  const rollZ = Math.sin((totalRotY * Math.PI) / 180) * 1.5;

  // 18 dense micro-slices for seamless solid cast-metal depth (from -7.5px to +7.5px)
  const depthSlices = [
    -7.5, -6.5, -5.5, -4.5, -3.5, -2.5, -1.5, -0.75, 0,
    0.75, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5
  ];

  return (
    <aside
      className="hidden lg:flex fixed left-1 lg:left-2 xl:left-4 2xl:left-8 top-1/2 -translate-y-1/2 z-0 pointer-events-none select-none flex-col items-center justify-center transition-all duration-500 opacity-80 xl:opacity-95 2xl:opacity-100 scale-80 lg:scale-85 xl:scale-90 2xl:scale-95 origin-left"
      aria-hidden="true"
    >
      {/* Overhead Volumetric Golden Stage Spotlight Cone */}
      <div
        className="absolute -top-36 left-1/2 -translate-x-1/2 w-64 lg:w-72 h-[480px] pointer-events-none blur-3xl opacity-30 xl:opacity-40"
        style={{
          background:
            'conic-gradient(from 180deg at 50% 0%, transparent 40%, rgba(255, 242, 190, 0.45) 48%, rgba(212, 175, 55, 0.55) 50%, rgba(255, 242, 190, 0.45) 52%, transparent 60%)'
        }}
      />

      {/* Atmospheric Royal Burgundy & Amber Aura */}
      <div
        className="absolute inset-0 rounded-full blur-[60px] opacity-30 xl:opacity-40 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(212, 175, 55, 0.35) 0%, rgba(120, 0, 22, 0.28) 45%, transparent 75%)'
        }}
      />

      {/* Floating Golden Ambient Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: '15%', left: '20%', delay: '0s', dur: '4s' },
          { top: '35%', left: '80%', delay: '1.2s', dur: '5s' },
          { top: '55%', left: '10%', delay: '2.5s', dur: '4.5s' },
          { top: '75%', left: '75%', delay: '0.8s', dur: '6s' },
          { top: '25%', left: '65%', delay: '1.8s', dur: '5.2s' },
          { top: '65%', left: '30%', delay: '3.1s', dur: '4.8s' }
        ].map((s, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#FFF2BE] shadow-[0_0_8px_#D4AF37] animate-pulse"
            style={{
              top: s.top,
              left: s.left,
              animationDelay: s.delay,
              animationDuration: s.dur,
              opacity: 0.6
            }}
          />
        ))}
      </div>

      {/* 3D Rotating Trophy Container */}
      <div
        className="relative w-[135px] lg:w-[150px] xl:w-[170px] 2xl:w-[195px] h-[410px] lg:h-[450px] xl:h-[500px] 2xl:h-[560px] flex items-center justify-center"
        style={{
          perspective: '1400px',
          perspectiveOrigin: '50% 48%',
          transform: `translateY(${levitation}px)`
        }}
      >
        <div
          className="relative w-full h-full transition-transform duration-75"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${pitchX}deg) rotateY(${totalRotY}deg) rotateZ(${rollZ}deg)`
          }}
        >
          {/* Volumetric Cast Metal Depth Slices */}
          {depthSlices.map((z, idx) => {
            const isFront = z === 7.5;
            const isBack = z === -7.5;
            const absZ = Math.abs(z);
            const edgeDarkness = 0.55 + (1 - absZ / 7.5) * 0.25;

            return (
              <div
                key={idx}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  transform: `translateZ(${z}px)`,
                  backfaceVisibility: isFront || isBack ? 'hidden' : 'visible',
                  filter: isFront
                    ? `brightness(${keyLightIntensity}) drop-shadow(0 0 20px rgba(212, 175, 55, 0.45))`
                    : isBack
                    ? `brightness(${keyLightIntensity * 0.85}) drop-shadow(0 0 15px rgba(212, 175, 55, 0.25))`
                    : `brightness(${edgeDarkness}) sepia(0.85) hue-rotate(5deg) saturate(1.8)`
                }}
              >
                <img
                  src={
                    isBack
                      ? '/assets/trophy/trophy_back.png'
                      : '/assets/trophy/heia_trophy_isolated.png'
                  }
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            );
          })}

          {/* Dynamic Specular Lens Glint across Gold Medallion when facing front */}
          {isFrontFacing && (
            <div
              className="absolute top-[3%] left-[10%] w-[80%] h-[32%] rounded-full pointer-events-none"
              style={{
                transform: 'translateZ(8.2px)',
                background: `linear-gradient(${115 + sheenOffset}deg, transparent 20%, rgba(255, 252, 235, 0.65) 48%, rgba(212, 175, 55, 0.35) 54%, transparent 80%)`,
                mixBlendMode: 'color-dodge',
                filter: 'drop-shadow(0 0 12px rgba(255, 235, 150, 0.65))'
              }}
            />
          )}

          {/* Golden Rim Specular Accent on Pedestal Base */}
          {isFrontFacing && (
            <div
              className="absolute bottom-[2%] left-[12%] w-[76%] h-[16%] pointer-events-none"
              style={{
                transform: 'translateZ(8.2px)',
                background: `linear-gradient(${90 + sheenOffset * 0.5}deg, transparent 25%, rgba(255, 248, 220, 0.4) 50%, transparent 75%)`,
                mixBlendMode: 'overlay'
              }}
            />
          )}
        </div>
      </div>

      {/* 3D Inverted Stage Floor Reflection */}
      <div
        className="relative -mt-6 w-[140px] xl:w-[160px] h-[75px] overflow-hidden pointer-events-none opacity-20 blur-[2px]"
        style={{
          transform: `scaleY(-1) perspective(800px) rotateX(65deg) rotateY(${totalRotY}deg)`,
          maskImage: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 85%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 85%)'
        }}
      >
        <img
          src="/assets/trophy/heia_trophy_isolated.png"
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Multi-Ring Golden Stage Pedestal Floor Halo */}
      <div className="relative -mt-10 w-48 xl:w-56 h-16 pointer-events-none flex items-center justify-center">
        {/* Outer Halo */}
        <div
          className="absolute inset-0 rounded-full blur-md opacity-45"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.65) 0%, rgba(120, 0, 22, 0.3) 50%, transparent 80%)'
          }}
        />
        {/* Inner Bright Stage Ring */}
        <div
          className="w-28 xl:w-36 h-8 rounded-full border border-[#FFE58F]/75 shadow-[0_0_22px_rgba(212,175,55,0.65)] opacity-75"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 242, 190, 0.4) 0%, transparent 70%)'
          }}
        />
      </div>
    </aside>
  );
}
