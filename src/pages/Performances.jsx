import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import GoldButton from '../components/GoldButton';
import InteractiveCard3D from '../components/InteractiveCard3D';
import { Music2, Disc, Flame, Sparkles, Radio, Play, Volume2, Mic2 } from 'lucide-react';

const HEADLINERS = [
  {
    name: "Sapna Chaudhary",
    genre: "Cultural Dance Icon & Vocalist",
    image: "/assets/celebrities/haryanvi/sapna_chaudhary.jpg",
    highlight: "Showstopping Stage Presence & Iconic Regional Anthems",
    track: "Teri Aakhya Ka Yo Kaajal & Royal Stage Entry",
    bpm: "135 BPM"
  },
  {
    name: "Ajay Hooda",
    genre: "Hit Machine & Live Performer",
    image: "/assets/celebrities/haryanvi/ajay_hooda.jpg",
    highlight: "High-voltage stage sets and record-breaking crowd interactions",
    track: "Solid Body & Non-Stop Arena Medley",
    bpm: "140 BPM"
  },
  {
    name: "Renuka Panwar",
    genre: "Record-Breaking Vocalist",
    image: "/assets/celebrities/haryanvi/renu_pawar.jpg",
    highlight: "The melodious voice behind chartbuster sensations",
    track: "52 Gaj Ka Daman Live Symphony",
    bpm: "128 BPM"
  },
  {
    name: "MD Desi Rockstar",
    genre: "Urban Folk & Youth Icon",
    image: "/assets/celebrities/haryanvi/md.jpg",
    highlight: "Contemporary fusion beats and signature rap rhythm",
    track: "Desi Rockstar Street Cypher Live",
    bpm: "142 BPM"
  },
  {
    name: "Raj Mawar",
    genre: "Powerhouse Vocalist",
    image: "/assets/celebrities/haryanvi/raj_mawar.jpg",
    highlight: "Authentic acoustic delivery and emotive folk depth",
    track: "Soulful Raga & Folk Heritage Overture",
    bpm: "115 BPM"
  },
  {
    name: "Diler Kharkiya",
    genre: "Modern Pop Sensation",
    image: "/assets/celebrities/haryanvi/diler_kharkiya.jpg",
    highlight: "Viral romantic and celebration anthems performed live",
    track: "Moto & Modern Pop Anthems Live",
    bpm: "130 BPM"
  }
];

const MARQUEE_ARTISTS = [
  "SAPNA CHAUDHARY",
  "AJAY HOODA",
  "RENUKA PANWAR",
  "MD DESI ROCKSTAR",
  "RAJ MAWAR",
  "DILER KHARKIYA",
  "RUCHIKA JANGID",
  "KHAS AALA",
  "SURENDER ROMEO",
  "MC SQUARE",
  "PARADOX",
  "VICKY KAJLA",
  "AASMA DANCE GROUP",
  "WARRIOR SQUAD"
];

export default function Performances() {
  const [activeAudioVisual, setActiveAudioVisual] = useState(true);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <SectionHeader
        badge="CONCERT & STAGE SHOWCASE"
        title="LIVE PERFORMANCES"
        subtitle="Experience the visceral rhythm, folk virtuosity, and electric stage spectacle defining the HEIA arena."
      />

      {/* Dynamic Soundwave & Stage Spotlight Bar */}
      <div className="mb-14 p-6 sm:p-8 rounded-xl border border-[#D4AF37]/35 bg-gradient-to-r from-[#1A0307] via-[#0E0E14] to-[#060913] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_15px_45px_rgba(0,0,0,0.85)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none" />

        <div className="space-y-1.5 text-center md:text-left z-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
            <Radio className="w-4 h-4 animate-pulse text-[#FFF2BE]" />
            LIVE AUDITORIUM ARENA • 17 ACTS
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-[#FAF7EE]">
            17 Electrifying Live Acts on the Main Stage
          </h3>
          <p className="text-xs sm:text-sm text-[#C7C2B2] font-light max-w-xl">
            From the ceremonial Ganesh Vandana to high-voltage rap battles and soulful folk overtures, witness Haryana's musical legends live in action.
          </p>
        </div>

        {/* Animated Interactive Soundwave Visualizer Motif */}
        <div 
          onClick={() => setActiveAudioVisual(!activeAudioVisual)}
          className="flex items-end gap-1.5 h-12 p-3 rounded-lg bg-black/60 border border-[#D4AF37]/30 backdrop-blur-md cursor-pointer hover:border-[#D4AF37] transition-all z-10 group"
          title="Click to toggle visualizer dynamics"
        >
          {[40, 75, 95, 60, 100, 45, 80, 55, 90, 70, 85, 50, 95, 65, 85, 45, 90].map((h, i) => (
            <span
              key={i}
              className="w-1.5 rounded-full bg-gradient-to-t from-[#AA771C] via-[#D4AF37] to-[#FFF2BE] transition-all duration-300"
              style={{
                height: activeAudioVisual ? `${h}%` : '25%',
                animation: activeAudioVisual ? `pulse 1.2s infinite ease-in-out ${(i * 0.12) % 1}s` : 'none'
              }}
            />
          ))}
          <Volume2 className="w-4 h-4 text-[#D4AF37] ml-2 group-hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* Infinite Horizontal Marquee Ticker */}
      <div className="relative w-full overflow-hidden py-4 border-y border-[#D4AF37]/25 mb-16 bg-black/50 backdrop-blur-sm">
        <div className="flex w-max animate-[marquee_25s_linear_infinite] gap-8">
          {[...MARQUEE_ARTISTS, ...MARQUEE_ARTISTS].map((name, idx) => (
            <div key={idx} className="flex items-center gap-4 text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FFF2BE]/90 uppercase font-display">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            </div>
          ))}
        </div>
      </div>

      {/* Headliner Spotlight Cards */}
      <div className="space-y-12">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <Flame className="w-5 h-5 text-[#D4AF37] animate-pulse" />
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#FAF7EE]">
              Headliner Artist Spotlights
            </h2>
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
            HEIA OFFICIAL LINEUP
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {HEADLINERS.map((artist) => (
            <InteractiveCard3D key={artist.name} maxTilt={6} className="h-full rounded-xl">
              <div className="group relative h-full rounded-xl overflow-hidden border border-[#D4AF37]/25 hover:border-[#D4AF37] bg-[#09090D] transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.8)] flex flex-col justify-between">
                
                {/* Image Box with Gold Vinyl Record Slide-Out */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  {/* Sliding Golden Vinyl Record */}
                  <div className="absolute top-1/2 -translate-y-1/2 right-4 w-32 h-32 rounded-full bg-gradient-to-tr from-[#684B12] via-[#E8C568] to-[#996F19] border-2 border-[#FFF2BE]/60 shadow-[0_0_25px_rgba(212,175,55,0.5)] flex items-center justify-center transition-all duration-700 ease-out translate-x-8 opacity-0 group-hover:translate-x-12 group-hover:opacity-100 group-hover:rotate-180 z-0 pointer-events-none">
                    {/* Vinyl concentric groove rings */}
                    <div className="w-24 h-24 rounded-full border border-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border border-black/40 flex items-center justify-center">
                        {/* Center gold spindle label */}
                        <div className="w-8 h-8 rounded-full bg-black border border-[#D4AF37] flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-[#FFF2BE]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Artist Photo */}
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="relative z-10 absolute inset-0 bg-gradient-to-t from-[#09090D] via-transparent to-transparent opacity-80" />

                  {/* Disc Spinning Badge */}
                  <div className="relative z-20 absolute top-4 left-4 p-2 rounded-full bg-black/70 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37]">
                    <Disc className="w-4 h-4 animate-spin [animation-duration:6s]" />
                  </div>

                  {/* BPM Tag */}
                  <div className="relative z-20 absolute top-4 right-4 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-[#D4AF37]/30 text-[10px] font-mono text-[#FFF2BE]">
                    {artist.bpm}
                  </div>
                </div>

                {/* Info Body */}
                <div className="p-6 space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
                      {artist.genre}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37]/50 group-hover:bg-[#D4AF37] group-hover:scale-125 transition-all" />
                  </div>

                  <h3 className="text-xl font-bold font-display text-[#FAF7EE] group-hover:text-gold-gradient transition-colors">
                    {artist.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#C7C2B2] font-light leading-relaxed">
                    {artist.highlight}
                  </p>

                  {/* Live Track Feature */}
                  <div className="p-2.5 rounded bg-white/[0.03] border border-[#D4AF37]/15 flex items-center gap-2.5">
                    <Mic2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span className="text-xs text-[#FAF7EE] font-medium truncate">
                      {artist.track}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#78746A]">
                    <span>HEADLINER SLOT</span>
                    <span className="text-[#D4AF37] font-semibold tracking-wider">LIVE ON STAGE →</span>
                  </div>
                </div>
              </div>
            </InteractiveCard3D>
          ))}
        </div>
      </div>

      {/* Troupe & Cultural Ensembles */}
      <InteractiveCard3D maxTilt={4} className="mt-20 rounded-xl">
        <div className="p-8 sm:p-12 rounded-xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#0B0C14] to-[#050507] shadow-[0_15px_45px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37]">
                CULTURAL & MARTIAL TROUPES
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#FAF7EE]">
                Aasma Dance Group & Warrior Squad
              </h3>
              <p className="text-sm sm:text-base text-[#C7C2B2] font-light leading-relaxed">
                HEIA honors both the classic roots and athletic modern mastery of dance. The ceremony commences with the grand ceremonial invocation of Ganesh Vandana by Aasma Dance Group, followed by gravity-defying choreography and acrobatic routines by the nationally celebrated Warrior Squad.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <GoldButton to="/show-flow" variant="solid" size="md">
                PERFORMANCE SCHEDULE
              </GoldButton>
            </div>
          </div>
        </div>
      </InteractiveCard3D>
    </div>
  );
}
