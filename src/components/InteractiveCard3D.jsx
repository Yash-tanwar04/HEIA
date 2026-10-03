import React, { useRef, useState } from 'react';

export default function InteractiveCard3D({
  children,
  className = '',
  glare = true,
  maxTilt = 8,
  onClick
}) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * maxTilt;
    const rotY = ((x - centerX) / centerX) * maxTilt;

    setTransform(`perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);

    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      setGlarePos({ x: glareX, y: glareY, opacity: 0.25 });
    }
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{
        transform,
        transformStyle: 'preserve-3d'
      }}
    >
      {children}

      {/* Dynamic Cursor Glare Reflection */}
      {glare && (
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300 overflow-hidden"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 242, 190, 0.45) 0%, rgba(212, 175, 55, 0.15) 35%, transparent 70%)`,
            mixBlendMode: 'color-dodge'
          }}
        />
      )}

      {/* Luxury Gold Corner Filigree Accents */}
      <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#D4AF37]/50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[#D4AF37]/50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-[#D4AF37]/50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#D4AF37]/50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
