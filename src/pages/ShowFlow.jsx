import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { SHOW_FLOW_FILTERS, SHOW_FLOW_DATA } from '../data/showFlowData';
import { Clock, Music, Trophy, Mic, Sparkles, Filter, CheckCircle2, Flame } from 'lucide-react';
import InteractiveCard3D from '../components/InteractiveCard3D';

export default function ShowFlow() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredItems = SHOW_FLOW_DATA.filter((item) => {
    return activeFilter === "ALL" || item.type === activeFilter;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'PERFORMANCES':
        return <Music className="w-4 h-4 text-[#FFD700]" />;
      case 'AWARDS':
        return <Trophy className="w-4 h-4 text-[#E6C564]" />;
      case 'ANCHORING':
        return <Mic className="w-4 h-4 text-[#FFF2BE]" />;
      case 'SPECIAL MOMENTS':
      default:
        return <Sparkles className="w-4 h-4 text-[#D4AF37]" />;
    }
  };

  const getTypeBadgeStyle = (type) => {
    switch (type) {
      case 'PERFORMANCES':
        return 'text-[#FFA39E] border-[#FF4D4F]/30 bg-[#2A0808]/50';
      case 'AWARDS':
        return 'text-[#FFF2BE] border-[#D4AF37]/40 bg-[#1F1905]/50';
      case 'ANCHORING':
        return 'text-[#D3ADF7] border-[#722ED1]/30 bg-[#120338]/50';
      case 'SPECIAL MOMENTS':
      default:
        return 'text-[#FFE58F] border-[#FAAD14]/30 bg-[#2B1D05]/50';
    }
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-screen">
      <SectionHeader
        badge="CEREMONIAL ARCHITECTURE"
        title="SHOW FLOW & TIMELINE"
        subtitle="The minute-by-minute ceremonial orchestration of HEIA 2023: from formal red carpet invocations to grand musical finales."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
        {SHOW_FLOW_FILTERS.map((f) => {
          const isActive = activeFilter === f;
          return (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-sm text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA771C] text-black shadow-[0_0_18px_rgba(212,175,55,0.45)] font-bold scale-105'
                  : 'bg-[#0E0E14] text-[#C7C2B2] border border-white/10 hover:border-[#D4AF37]/40 hover:text-white'
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Vertical Cinematic Timeline */}
      <div className="relative border-l-2 border-[#D4AF37]/25 ml-4 sm:ml-28 md:ml-36 space-y-10">
        {/* Animated Traveling Gold Pulse Along Timeline Spine */}
        <div className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#FFE58F] to-transparent animate-pulse pointer-events-none" />

        {filteredItems.map((item, idx) => (
          <div key={`${item.time}-${idx}`} className="relative pl-6 sm:pl-8 group">
            {/* Timestamp pill on the left (visible on desktop outside line) */}
            <div className="sm:absolute sm:-left-36 sm:top-1.5 mb-2 sm:mb-0">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/90 border border-[#D4AF37]/35 text-xs font-mono font-semibold text-[#FFF2BE] shadow-[0_0_12px_rgba(212,175,55,0.2)] group-hover:border-[#FFE58F] transition-colors">
                <Clock className="w-3 h-3 text-[#D4AF37]" />
                {item.time}
              </span>
            </div>

            {/* Timeline node icon */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border border-[#D4AF37] bg-[#07070A] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.45)] group-hover:scale-115 group-hover:bg-[#D4AF37]/25 group-hover:border-[#FFE58F] transition-all duration-300">
              {getTypeIcon(item.type)}
            </div>

            {/* Content Card wrapped in 3D Interactive Tilt */}
            <InteractiveCard3D maxTilt={4} className="rounded-lg">
              <div className="p-5 sm:p-6 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37] bg-[#0A0A0E] group-hover:bg-[#101016] transition-all duration-300 space-y-3 shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.18)]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className={`text-[10px] font-mono uppercase tracking-[0.25em] px-2.5 py-0.5 rounded border ${getTypeBadgeStyle(item.type)}`}>
                    {item.type}
                  </span>
                  {item.artist && (
                    <span className="text-xs font-semibold text-[#FAF7EE] tracking-wide flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      {item.artist}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-[#FAF7EE] group-hover:text-gold-gradient transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#C7C2B2] font-light leading-relaxed">
                  {item.details}
                </p>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#78746A] uppercase tracking-wider">
                  <span>ACT SLOT #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                  <span className="text-[#D4AF37] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                    CEREMONIAL ARCHIVE
                  </span>
                </div>
              </div>
            </InteractiveCard3D>
          </div>
        ))}
      </div>
    </div>
  );
}
