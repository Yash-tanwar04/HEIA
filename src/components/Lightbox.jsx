import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ item, items = [], onClose, onNavigate }) {
  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onNavigate && items.length > 1) {
        const currIdx = items.findIndex((i) => i.id === item.id);
        const prevIdx = (currIdx - 1 + items.length) % items.length;
        onNavigate(items[prevIdx]);
      }
      if (e.key === 'ArrowRight' && onNavigate && items.length > 1) {
        const currIdx = items.findIndex((i) => i.id === item.id);
        const nextIdx = (currIdx + 1) % items.length;
        onNavigate(items[nextIdx]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, items, onClose, onNavigate]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close Fullscreen View"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation arrows */}
      {items.length > 1 && onNavigate && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              const currIdx = items.findIndex((i) => i.id === item.id);
              const prevIdx = (currIdx - 1 + items.length) % items.length;
              onNavigate(items[prevIdx]);
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 border border-[#D4AF37]/30 text-[#FFF2BE] hover:bg-[#D4AF37] hover:text-black transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              const currIdx = items.findIndex((i) => i.id === item.id);
              const nextIdx = (currIdx + 1) % items.length;
              onNavigate(items[nextIdx]);
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 border border-[#D4AF37]/30 text-[#FFF2BE] hover:bg-[#D4AF37] hover:text-black transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Modal Content */}
      <div
        className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.image}
          alt={item.title}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg border border-[#D4AF37]/30 shadow-[0_0_50px_rgba(212,175,55,0.25)]"
        />
        <div className="mt-4 text-center max-w-xl">
          {item.category && (
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              {item.category}
            </span>
          )}
          <h3 className="text-lg sm:text-xl font-bold font-display text-[#FAF7EE] mt-1">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-xs sm:text-sm text-[#C7C2B2] mt-1 font-light">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
