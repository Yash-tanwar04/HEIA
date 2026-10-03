import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { CELEBRITY_CATEGORIES, CELEBRITIES_DATA } from '../data/celebritiesData';
import { Users, Sparkles, Award, Star, Crown } from 'lucide-react';
import InteractiveCard3D from '../components/InteractiveCard3D';

export default function Celebrities() {
  const [activeTab, setActiveTab] = useState("ALL");

  const displayList = CELEBRITIES_DATA.filter(
    (item) => activeTab === "ALL" || item.category === activeTab
  );

  const guests = CELEBRITIES_DATA.filter((i) => i.category === "SPECIAL GUESTS");
  const haryanvi = CELEBRITIES_DATA.filter((i) => i.category === "HARYANVI CELEBRITIES");
  const influencers = CELEBRITIES_DATA.filter((i) => i.category === "INFLUENCERS");

  const renderCard = (person) => (
    <InteractiveCard3D key={person.id} maxTilt={7} className="h-full rounded-xl">
      <div className="group relative h-full rounded-xl overflow-hidden border border-[#D4AF37]/25 hover:border-[#D4AF37] bg-[#0A0A0E] hover:bg-[#101016] transition-all duration-300 p-5 flex flex-col items-center text-center shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.22)]">
        
        {/* Subtle Top Gold Accent */}
        <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent group-hover:via-[#FFE58F] transition-all duration-500" />

        {/* Portrait Circle with Golden Ring & Halo */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full mb-4 group-hover:scale-105 transition-all duration-300">
          {/* Animated Gold Halo Glow */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#D4AF37]/40 via-[#FFE58F]/20 to-[#AA771C]/40 blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#D4AF37]/50 group-hover:border-[#FFE58F] transition-colors shadow-[0_0_20px_rgba(212,175,55,0.25)]">
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
            />
            <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none" />
          </div>

          {/* Star Icon Badge */}
          <div className="absolute -bottom-1 right-2 p-1.5 rounded-full bg-black/80 border border-[#D4AF37]/50 text-[#D4AF37] shadow-md group-hover:scale-110 transition-transform">
            <Star className="w-3 h-3 fill-[#D4AF37]" />
          </div>
        </div>

        {/* Badge */}
        {person.badge && (
          <span className="mb-2 text-[10px] font-mono uppercase tracking-[0.25em] px-2.5 py-0.5 rounded-full bg-white/[0.04] text-[#E6C564] border border-[#D4AF37]/25 group-hover:border-[#D4AF37]/50 transition-colors">
            {person.badge}
          </span>
        )}

        {/* Name */}
        <h3 className="text-base sm:text-lg font-bold font-display text-[#FAF7EE] group-hover:text-gold-gradient transition-colors leading-tight">
          {person.name}
        </h3>

        {/* Official Title / Designation */}
        <p className="text-xs sm:text-sm text-[#C5A059] font-medium tracking-wide mt-1 leading-snug">
          {person.title}
        </p>

        {/* Followers if influencer */}
        {person.followers && (
          <div className="mt-3 pt-2 border-t border-white/5 w-full flex items-center justify-center gap-1.5 text-xs font-mono font-bold text-[#FFF2BE] tracking-wider">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span>{person.followers}</span>
          </div>
        )}
      </div>
    </InteractiveCard3D>
  );

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <SectionHeader
        badge="HONOURED GUESTS & STARS"
        title="CELEBRITIES & DIGNITARIES"
        subtitle="The eminent leadership, celebrated cinematic stalwarts, beloved artists, and viral creators united under the banner of HEIA."
      />

      {/* Dignitary Confluence Banner */}
      <div className="mb-14 p-6 sm:p-8 rounded-xl border border-[#D4AF37]/35 bg-gradient-to-r from-[#0C0D15]/90 via-[#140608]/90 to-[#0A0B10]/95 shadow-[0_10px_40px_rgba(0,0,0,0.8)] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-1.5 text-center md:text-left z-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
            <Crown className="w-4 h-4 text-[#FFF2BE] animate-pulse" />
            STATE HONOURS & ROYAL CONFLUENCE
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-[#FAF7EE]">
            United Under One Historic Canopy
          </h3>
          <p className="text-xs sm:text-sm text-[#C7C2B2] font-light max-w-xl">
            Graced by the Hon'ble Chief Minister Sh. Nayab Singh Saini, Bollywood & regional legend Yashpal Sharma, and youth icons with over 50M+ collective digital resonance.
          </p>
        </div>

        <div className="flex items-center gap-4 z-10 shrink-0">
          <div className="text-center px-4 py-3 rounded-lg bg-black/60 border border-[#D4AF37]/25 backdrop-blur-sm">
            <span className="block text-2xl font-extrabold font-display text-gold-gradient">50M+</span>
            <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-mono">Digital Reach</span>
          </div>
          <div className="text-center px-4 py-3 rounded-lg bg-black/60 border border-[#D4AF37]/25 backdrop-blur-sm">
            <span className="block text-2xl font-extrabold font-display text-gold-gradient">30+</span>
            <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-mono">VIP Dignitaries</span>
          </div>
        </div>
      </div>

      {/* Filter Navigation */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
        {CELEBRITY_CATEGORIES.map((cat) => {
          const isActive = activeTab === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-sm text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA771C] text-black shadow-[0_0_20px_rgba(212,175,55,0.45)] font-bold scale-105'
                  : 'bg-[#0E0E14] text-[#C7C2B2] border border-white/10 hover:border-[#D4AF37]/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {activeTab === "ALL" ? (
        <div className="space-y-20">
          {/* Section 1: Special Guests */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#FAF7EE]">
                Special Guests & Dignitaries
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
              {guests.map(renderCard)}
            </div>
          </div>

          {/* Section 2: Haryanvi Celebrities */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#FAF7EE]">
                Haryanvi Celebrities & Renowned Artists
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
              {haryanvi.map(renderCard)}
            </div>
          </div>

          {/* Section 3: Influencers */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#FAF7EE]">
                Influencers & Digital Icons
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
              {influencers.map(renderCard)}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {displayList.map(renderCard)}
        </div>
      )}
    </div>
  );
}
