import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import GoldButton from '../components/GoldButton';
import InteractiveCard3D from '../components/InteractiveCard3D';
import {
  SPONSORSHIP_OVERVIEW,
  SPONSORSHIP_PACKAGES,
  PAST_SPONSORS
} from '../data/sponsorshipData';
import { Sparkles, Check, ChevronDown, ChevronUp, Shield, Star, Users, ArrowRight } from 'lucide-react';

export default function Sponsors() {
  const [expandedId, setExpandedId] = useState("title-sponsor");

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <SectionHeader
        badge="PARTNERSHIP OPPORTUNITIES"
        title="PUT YOUR BRAND IN THE SPOTLIGHT"
        subtitle="Align with Haryana's premier cultural honours and engage over 50 million audience touchpoints across television, on-ground activations, and viral digital channels."
      />

      {/* Narrative Context Card */}
      <InteractiveCard3D maxTilt={3} className="mb-20 rounded-2xl">
        <div className="p-8 sm:p-12 rounded-2xl border border-[#D4AF37]/35 bg-gradient-to-r from-[#1A0307] via-[#0D0B08] to-[#060914] shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-black/60 text-xs font-mono uppercase tracking-[0.25em] text-[#FFF2BE]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
              SEASON 2 INVITATION
            </div>

            <blockquote className="text-lg sm:text-2xl font-display text-[#FAF7EE] leading-relaxed italic font-normal">
              "{SPONSORSHIP_OVERVIEW.sourceQuote}"
            </blockquote>

            <p className="text-sm sm:text-base text-[#C7C2B2] font-light leading-relaxed max-w-2xl mx-auto">
              {SPONSORSHIP_OVERVIEW.description}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 border-t border-white/10 text-xs text-[#9E9A8E]">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[#FFF2BE] font-bold font-mono">50M+</span>
                <span>Collective Artist Reach</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[#FFF2BE] font-bold font-mono">500+</span>
                <span>Statewide Hoardings</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[#FFF2BE] font-bold font-mono">National</span>
                <span>Broadcast on Doordarshan</span>
              </div>
            </div>
          </div>
        </div>
      </InteractiveCard3D>

      {/* Packages Breakdown */}
      <div className="mb-24 space-y-8">
        <div className="text-center mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            OFFICIAL TIERS
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-[#FAF7EE] mt-1">
            Sponsorship Packages
          </h3>
          <p className="text-xs sm:text-sm text-[#C7C2B2] font-light mt-2 max-w-xl mx-auto">
            Choose the strategic level of integration that meets your brand goals and on-ground presence requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {SPONSORSHIP_PACKAGES.map((pkg) => {
            const isExpanded = expandedId === pkg.id;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-xl border transition-all duration-300 overflow-hidden ${
                  pkg.isPrimary
                    ? 'border-[#D4AF37] bg-gradient-to-r from-[#1E1408] via-[#0C0C10] to-[#12080A] shadow-[0_10px_40px_rgba(212,175,55,0.2)]'
                    : 'border-[#D4AF37]/25 bg-[#09090D] hover:border-[#D4AF37]/60'
                }`}
              >
                {/* Header Strip */}
                <div
                  onClick={() => toggleExpand(pkg.id)}
                  className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer select-none"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3">
                      <span className="text-xl sm:text-2xl font-bold font-display text-[#FAF7EE]">
                        {pkg.tier}
                      </span>
                      {pkg.isPrimary && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#F3E5AB] to-[#D4AF37] text-black">
                          PREMIER
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-[#C5A059] font-medium">
                      {pkg.tagline}
                    </p>
                    <p className="text-xs text-[#9E9A8E] font-light">
                      Key Association: <span className="text-[#FAF7EE]">{pkg.highlight}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <Link
                      to={`/contact?package=${encodeURIComponent(pkg.tier)}`}
                      onClick={(e) => e.stopPropagation()}
                      className="px-5 py-2.5 rounded-sm bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA771C] text-black text-xs font-semibold uppercase tracking-[0.2em] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center gap-2"
                    >
                      <span>Discuss Sponsorship</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      className="p-2 rounded-full border border-white/10 hover:border-[#D4AF37] text-[#D4AF37] transition-colors"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Expandable Benefits Grid */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-white/10 bg-black/40">
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
                      Official Included Benefits & Entitlements:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                      {pkg.benefits.map((benefit, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-start gap-2.5 p-3 rounded bg-white/[0.02] border border-white/5"
                        >
                          <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span className="text-xs text-[#E2DDCB] font-light leading-relaxed">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Trusted By Our Past Partners */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            ESTEEMED PATRONS
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#FAF7EE] mt-1">
            Trusted By Our Past Partners
          </h3>
          <p className="text-xs sm:text-sm text-[#C7C2B2] font-light mt-2 max-w-lg mx-auto">
            Leading public sector undertakings, state directorates, and industrial giants who have championed HEIA.
          </p>
        </div>

        {/* Official Sponsor Board from Source Presentation */}
        <InteractiveCard3D maxTilt={4} className="rounded-2xl max-w-5xl mx-auto">
          <div className="p-4 sm:p-8 rounded-2xl border border-[#D4AF37]/35 hover:border-[#D4AF37] bg-black/70 shadow-[0_15px_50px_rgba(0,0,0,0.9)] transition-all duration-300">
            <img
              src="/assets/sponsors/sponsor_board.jpg"
              alt="Sponsor From The Past - ONGC, NHPC, Govt of Haryana, Sarvodaya, ACE, FIA, Veethree, C.Dass, KCL, Imperial Auto, KalaSH"
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </InteractiveCard3D>

        {/* Structured List of Past Partners */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-center">
          {PAST_SPONSORS.map((sp) => (
            <div
              key={sp.name}
              className="p-3 rounded border border-white/5 hover:border-[#D4AF37]/40 bg-[#09090D] hover:bg-[#101016] transition-all duration-300 flex flex-col justify-center group"
            >
              <h4 className="text-xs font-bold text-[#FAF7EE] group-hover:text-gold-gradient transition-colors font-display">
                {sp.name}
              </h4>
              <p className="text-[10px] text-[#78746A] mt-0.5">
                {sp.category}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Final Sponsorship CTA */}
      <InteractiveCard3D maxTilt={4} className="rounded-xl max-w-3xl mx-auto">
        <div className="p-8 sm:p-12 rounded-xl border border-[#D4AF37]/40 bg-gradient-to-r from-[#1A0307] to-[#0A0A0C] text-center space-y-4 shadow-[0_15px_45px_rgba(0,0,0,0.85)]">
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#FAF7EE]">
            Reserve Your Brand Association
          </h3>
          <p className="text-xs sm:text-sm text-[#C7C2B2] font-light">
            Contact our festival directors directly to customize activations, stage integrations, or artist collaborations.
          </p>
          <div className="pt-2">
            <GoldButton to="/contact?type=sponsorship" variant="solid" size="lg">
              CONNECT WITH COMMITTEE
            </GoldButton>
          </div>
        </div>
      </InteractiveCard3D>
    </div>
  );
}
