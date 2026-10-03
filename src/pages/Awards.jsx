import React, { useState, useMemo } from 'react';
import SectionHeader from '../components/SectionHeader';
import { AWARD_CATEGORIES, AWARDS_DATA } from '../data/awardsData';
import { Search, Trophy, Sparkles, Filter, Award, Film, Crown, CheckCircle2 } from 'lucide-react';
import InteractiveCard3D from '../components/InteractiveCard3D';

export default function Awards() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAwards = useMemo(() => {
    return AWARDS_DATA.filter((award) => {
      const matchesCategory =
        selectedCategory === "ALL" || award.categoryGroup === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        award.title.toLowerCase().includes(q) ||
        award.recipient.toLowerCase().includes(q) ||
        (award.project && award.project.toLowerCase().includes(q)) ||
        award.categoryGroup.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <SectionHeader
        badge="OFFICIAL COMMEMORATION"
        title="HEIA AWARDS"
        subtitle="The definitive catalog of honours, celebrating outstanding artistic, musical, directorial, and technical accomplishments."
      />

      {/* Prestige Trophy Showcase Banner */}
      <div className="mb-12 p-6 sm:p-8 rounded-xl border border-[#D4AF37]/35 bg-gradient-to-r from-[#1A0307]/90 via-[#0B0C14]/90 to-[#050507]/95 shadow-[0_10px_40px_rgba(0,0,0,0.8)] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none" />
        
        <div className="space-y-2 text-center md:text-left z-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37]">
            <Crown className="w-4 h-4 text-[#FFF2BE] animate-pulse" />
            THE PINNACLE OF REGIONAL MERIT
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-[#FAF7EE]">
            14 Ceremonial Honour Slots & Iconic Tributes
          </h3>
          <p className="text-xs sm:text-sm text-[#C7C2B2] font-light max-w-xl">
            From the Satish Kaushik Kala Ratan Awards to Best Film Fauja and Living Legend felicitations, every statuette carries decades of creative passion.
          </p>
        </div>

        <div className="flex items-center gap-3 sm:gap-6 z-10 shrink-0">
          <div className="text-center px-4 py-3 rounded-lg bg-black/60 border border-[#D4AF37]/25 backdrop-blur-sm">
            <span className="block text-2xl font-extrabold font-display text-gold-gradient">14</span>
            <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-mono">Honour Slots</span>
          </div>
          <div className="text-center px-4 py-3 rounded-lg bg-black/60 border border-[#D4AF37]/25 backdrop-blur-sm">
            <span className="block text-2xl font-extrabold font-display text-gold-gradient">100%</span>
            <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-mono">Authentic Merit</span>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="mb-10 space-y-6">
        {/* Search Input */}
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
          <input
            type="text"
            placeholder="Search by category, recipient, or film (e.g. Yashpal Sharma, Fauja, Dada Lakhmi)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-lg border border-[#D4AF37]/30 bg-[#0C0C10] text-sm text-[#FAF7EE] placeholder-[#78746A] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs uppercase text-[#C5A059] hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {AWARD_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-sm text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA771C] text-black shadow-[0_0_20px_rgba(212,175,55,0.45)] font-bold scale-105'
                    : 'bg-[#0E0E14] text-[#C7C2B2] border border-white/10 hover:border-[#D4AF37]/50 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Results Counter */}
        <div className="text-center text-xs font-mono text-[#9E9A8E]">
          Showing <span className="text-[#FFF2BE] font-semibold">{filteredAwards.length}</span> recorded honors
          {selectedCategory !== "ALL" && ` in ${selectedCategory}`}
        </div>
      </div>

      {/* Awards Grid */}
      {filteredAwards.length === 0 ? (
        <div className="p-12 text-center rounded-xl border border-white/5 bg-[#09090D] max-w-md mx-auto">
          <Trophy className="w-10 h-10 text-[#D4AF37]/40 mx-auto mb-3" />
          <p className="text-[#C7C2B2] text-sm">No awards found matching your query.</p>
          <button
            onClick={() => { setSelectedCategory("ALL"); setSearchQuery(""); }}
            className="mt-3 text-xs uppercase tracking-wider text-[#D4AF37] hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredAwards.map((award) => (
            <InteractiveCard3D key={award.id} maxTilt={6} className="h-full rounded-lg">
              <div className="group relative h-full p-6 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37] bg-[#0A0A0E] hover:bg-[#101016] transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_35px_rgba(212,175,55,0.22)] overflow-hidden">
                {/* Expanding Gold Ribbon Accent on Top Edge */}
                <div className="absolute top-0 left-0 h-[2px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent group-hover:w-full transition-all duration-500" />

                {/* Subtle Background Watermark Trophy Silhouette */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-5 group-hover:opacity-15 transition-opacity pointer-events-none">
                  <Award className="w-full h-full text-[#D4AF37]" />
                </div>

                <div className="relative z-10">
                  {/* Category Badge & Trophy Pin */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A059] px-2.5 py-0.5 rounded bg-white/[0.04] border border-[#D4AF37]/20">
                      {award.categoryGroup}
                    </span>
                    <Trophy className="w-4 h-4 text-[#D4AF37]/60 group-hover:text-[#FFF2BE] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                  </div>

                  {/* Award Title */}
                  <h3 className="text-base sm:text-lg font-bold font-display text-[#FAF7EE] group-hover:text-gold-gradient transition-colors leading-snug">
                    {award.title}
                  </h3>

                  {/* Recipient */}
                  <div className="mt-4 pt-3 border-t border-white/5">
                    <p className="text-[10px] font-mono text-[#78746A] uppercase tracking-widest">
                      RECIPIENT / WINNER
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-[#FFF2BE] mt-0.5 leading-snug">
                      {award.recipient}
                    </p>
                  </div>
                </div>

                {/* Project / Work Context */}
                {award.project ? (
                  <div className="relative z-10 mt-4 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] text-[#9E9A8E] font-light">
                    <span className="truncate text-[#D4AF37]/90 font-medium">
                      Project: {award.project}
                    </span>
                    <span className="text-[9px] uppercase font-mono tracking-widest text-[#C5A059] px-2 py-0.5 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20 ml-2 shrink-0">
                      VERIFIED
                    </span>
                  </div>
                ) : (
                  <div className="relative z-10 mt-4 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] text-[#78746A] uppercase font-mono tracking-widest">
                    <span>HEIA TROPHY RECIPIENT</span>
                    <span className="text-[#D4AF37]">HONOURED</span>
                  </div>
                )}
              </div>
            </InteractiveCard3D>
          ))}
        </div>
      )}
    </div>
  );
}
