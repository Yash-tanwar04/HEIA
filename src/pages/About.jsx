import React from 'react';
import SectionHeader from '../components/SectionHeader';
import GoldButton from '../components/GoldButton';
import InteractiveCard3D from '../components/InteractiveCard3D';
import { Award, Film, Music, Users, Sparkles, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <SectionHeader
        badge="THE INSTITUTION"
        title="ABOUT HEIA"
        subtitle="The definitive platform celebrating excellence, culture, and artistic triumph across the Haryana entertainment ecosystem."
      />

      {/* Main Narrative Hero Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#0C0C10] text-[11px] font-semibold uppercase tracking-[0.25em] text-[#E6C564]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            HONOURING THE CRAFT
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-[#FAF7EE] leading-tight">
            A Historic Platform for Regional Storytellers, Musicians & Technicians
          </h3>

          <div className="w-16 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent" />

          <p className="text-base sm:text-lg text-[#C7C2B2] leading-relaxed font-light">
            The <strong className="text-[#FFF2BE] font-semibold">Haryana Entertainment Industry Awards (HEIA)</strong> is a prestigious event that honors and recognizes the outstanding contributions of artists, filmmakers, musicians, and technicians in the vibrant entertainment industry of Haryana. This annual gala brings together the best talents under one roof to celebrate their achievements and inspire future generations.
          </p>

          <p className="text-sm sm:text-base text-[#9E9A8E] leading-relaxed font-light">
            For decades, Haryanvi music, theater, and cinema have captivated millions with unmatched energy, lyrical authenticity, and cultural vitality. HEIA was established to grant these visionary creators the dignified, large-scale cinematic recognition they have rightfully earned on the national stage.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <GoldButton to="/awards" variant="solid" size="md">
              VIEW AWARD CATEGORIES
            </GoldButton>
            <GoldButton to="/experience" variant="outline" size="md">
              THE GALA EXPERIENCE
            </GoldButton>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <InteractiveCard3D maxTilt={5} className="rounded-xl">
            <div className="relative rounded-xl overflow-hidden border border-[#D4AF37]/35 shadow-[0_20px_60px_-10px_rgba(212,175,55,0.25)] bg-[#070709] group">
              <img
                src="/assets/gallery/event_host_podium.jpg"
                alt="HEIA ceremonial podium"
                className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-6 inset-x-6">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-semibold">
                  THE PODIUM
                </span>
                <h4 className="text-lg font-bold font-display text-[#FAF7EE] mt-1">
                  Where Excellence is Formally Commemorated
                </h4>
              </div>
            </div>
          </InteractiveCard3D>
        </div>
      </div>

      {/* Pillars of Celebration */}
      <div className="mb-24">
        <SectionHeader
          badge="PILLARS OF RECOGNITION"
          title="WHAT HEIA CELEBRATES"
          subtitle="A comprehensive spectrum spanning traditional roots, popular sensations, and technical craftsmanship."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Film,
              title: "Cinematic Feats",
              desc: "Honoring visionary directors, screenwriters, lead actors, and episodic web series that portray Haryana's heart with nuance."
            },
            {
              icon: Music,
              title: "Musical Mastery",
              desc: "Celebrating vocalists, music directors, lyricists, composers, folk ensembles, and the viral rhythms that dominate global charts."
            },
            {
              icon: Award,
              title: "Technical Pioneers",
              desc: "Shining a spotlight on directors of photography (DOP), film editors, choreographers, and sound designers crafting world-class productions."
            },
            {
              icon: Users,
              title: "Digital Creators",
              desc: "Recognizing influencers, comedians, poets, and digital entertainers who connect millions to the vibrant vernacular language."
            }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <InteractiveCard3D key={item.title} maxTilt={6} className="h-full rounded-lg">
                <div className="h-full p-6 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37] bg-[#09090D] hover:bg-[#101016] transition-all duration-300 group flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:border-[#FFE58F] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold font-display text-[#FAF7EE] group-hover:text-gold-gradient transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#C7C2B2] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] uppercase tracking-widest text-[#78746A]">
                    <span>HEIA STANDARD</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] group-hover:scale-125 transition-transform" />
                  </div>
                </div>
              </InteractiveCard3D>
            );
          })}
        </div>
      </div>

      {/* Stewardship Section — Sambharye Foundation */}
      <div className="rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#0F0D0C] via-[#08080C] to-[#040406] p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#E6C564]">
                STEWARDSHIP & PATRONAGE
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#FAF7EE]">
              Sambharye Foundation
            </h3>

            <p className="text-sm sm:text-base text-[#C7C2B2] font-light leading-relaxed">
              The Haryana Entertainment Industry Awards is organized under the esteemed guidance of the <strong className="text-[#FFF2BE] font-medium">Sambharye Foundation</strong>, dedicated to championing the cultural prestige, traditional legacy, and modern talent of Haryana. Through relentless dedication and strategic patronage, the foundation continues to establish enduring institutions for regional arts.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#9E9A8E]">
              <span className="border border-white/10 px-3 py-1.5 rounded bg-black/40">
                Official Email: Sambharye.foundation@gmail.com
              </span>
              <span className="border border-white/10 px-3 py-1.5 rounded bg-black/40">
                Liaison: info@heia.in
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="p-6 rounded-xl border border-[#D4AF37]/30 bg-black/60 text-center max-w-xs shadow-[0_0_30px_rgba(212,175,55,0.15)]">
              <img
                src="/assets/logo/association.png"
                alt="HEIA Association Official Crest"
                className="h-20 w-auto mx-auto object-contain mb-3"
              />
              <p className="text-[11px] font-display uppercase tracking-widest text-[#FFF2BE] font-semibold">
                Official Sanction
              </p>
              <p className="text-[10px] text-[#9E9A8E] mt-1 font-light">
                Haryana Entertainment Industry Association
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
