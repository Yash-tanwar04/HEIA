import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import Lightbox from '../components/Lightbox';
import { LEGACY_CATEGORIES, LEGACY_ITEMS } from '../data/legacyData';
import { Maximize2, Sparkles, Image as ImageIcon } from 'lucide-react';
import InteractiveCard3D from '../components/InteractiveCard3D';

export default function Legacy() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = LEGACY_ITEMS.filter(
    (item) => activeCategory === "ALL" || item.category === activeCategory
  );

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <SectionHeader
        badge="HISTORICAL ARCHIVE"
        title="HEIA LEGACY & GLIMPSES"
        subtitle="A visual backstage journey through triumphs, felicitations, red carpet moments, and the vibrant people behind the awards."
      />

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {LEGACY_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-sm text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA771C] text-black shadow-[0_0_18px_rgba(212,175,55,0.45)] font-bold scale-105'
                  : 'bg-[#0E0E14] text-[#C7C2B2] border border-white/10 hover:border-[#D4AF37]/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Editorial Photographic Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item) => (
          <InteractiveCard3D key={item.id} maxTilt={5} className="h-full rounded-xl">
            <div
              onClick={() => setSelectedItem(item)}
              className="group relative h-full rounded-xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37] bg-[#070709] transition-all duration-500 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.22)] flex flex-col justify-between"
            >
              {/* Photographic Image Area */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                {/* Hover Fullscreen Icon */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37]/30 text-[#FFF2BE] opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Category Pill Over Image */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-sm bg-black/70 backdrop-blur-md border border-[#D4AF37]/30 text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Description Card Footer */}
              <div className="p-5 sm:p-6 space-y-2 bg-gradient-to-b from-[#0A0A0E] to-[#050507]">
                <h3 className="text-base sm:text-lg font-bold font-display text-[#FAF7EE] group-hover:text-gold-gradient transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#C7C2B2] font-light line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-[#78746A] tracking-wider uppercase">
                  <span>HEIA ARCHIVE</span>
                  <span className="text-[#D4AF37] font-medium group-hover:translate-x-1 transition-transform">
                    View Fullscreen →
                  </span>
                </div>
              </div>
            </div>
          </InteractiveCard3D>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onNavigate={(newItem) => setSelectedItem(newItem)}
      />
    </div>
  );
}
