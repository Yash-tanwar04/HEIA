import React from 'react';
import { Users, Music, Trophy, MapPin, Award } from 'lucide-react';

const METRICS = [
  {
    icon: Users,
    value: "50M+",
    label: "COLLECTIVE REACH",
    sub: "Artists & Influencers"
  },
  {
    icon: Music,
    value: "17",
    label: "LIVE STAGE ACTS",
    sub: "Cultural & Musical Feats"
  },
  {
    icon: Trophy,
    value: "14",
    label: "HONOUR SLOTS",
    sub: "Competitive & Tributes"
  },
  {
    icon: MapPin,
    value: "500+",
    label: "STATE HOARDINGS",
    sub: "Pan-Haryana Footprint"
  },
  {
    icon: Award,
    value: "SEASON 2",
    label: "ANNUAL GALA",
    sub: "Faridabad • Haryana"
  }
];

export default function PrestigeMetricsRibbon() {
  return (
    <div className="relative py-8 my-10 max-w-6xl mx-auto px-4">
      {/* Background Glass Bar with Gold Border */}
      <div className="relative rounded-xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#12080A]/90 via-[#0A0A0E]/95 to-[#080C16]/90 backdrop-blur-xl p-6 sm:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.8)]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {METRICS.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className={`flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105 ${
                  idx > 0 ? 'pt-4 md:pt-0' : ''
                }`}
              >
                <div className="p-2.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] mb-2 group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold font-display text-gold-gradient tracking-tight">
                  {m.value}
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#FAF7EE] mt-0.5">
                  {m.label}
                </span>
                <span className="text-[10px] text-[#78746A] tracking-wider mt-0.5 font-light">
                  {m.sub}
                </span>
              </div>
            );
          })}
        </div>

        {/* Traveling Gold Shimmer Line along the bottom edge */}
        <div className="absolute -bottom-[1px] inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_10px_#D4AF37]" />
      </div>
    </div>
  );
}
