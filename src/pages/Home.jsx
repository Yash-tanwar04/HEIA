import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ChevronDown,
  Award,
  Users,
  Mic,
  Film,
  Compass,
  Star,
  Tv,
  Radio,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import VideoSection from '../components/VideoSection';
import GoldButton from '../components/GoldButton';
import SectionHeader from '../components/SectionHeader';
import InteractiveCard3D from '../components/InteractiveCard3D';
import PrestigeMetricsRibbon from '../components/PrestigeMetricsRibbon';

const EXPLORE_CARDS = [
  {
    num: "01",
    title: "THE EXPERIENCE",
    desc: "Red carpet glamour, backstage energy, and grand theatrical celebration.",
    path: "/experience",
    image: "/assets/gallery/stage_grand_dance.jpg"
  },
  {
    num: "02",
    title: "THE AWARDS",
    desc: "Recognizing cinematic, musical, and directorial excellence across Haryana.",
    path: "/awards",
    image: "/assets/hero/trophy_isolated.jpg"
  },
  {
    num: "03",
    title: "THE TALENT",
    desc: "Chief ministers, national icons, legendary singers, and top creators.",
    path: "/celebrities",
    image: "/assets/celebrities/haryanvi/sapna_chaudhary.jpg"
  },
  {
    num: "04",
    title: "THE LEGACY",
    desc: "A photographic archive of triumph, felicitations, and historic moments.",
    path: "/legacy",
    image: "/assets/gallery/cultural_group_award.jpg"
  },
  {
    num: "05",
    title: "THE PARTNERS",
    desc: "Title sponsorships, 50M+ collective reach, and broadcast associations.",
    path: "/sponsors",
    image: "/assets/sponsors/sponsor_board.jpg"
  },
  {
    num: "06",
    title: "THE MEDIA",
    desc: "Official 4K showreel, streaming channels, and event broadcast archives.",
    path: "/media",
    image: "/assets/gallery/event_host_podium.jpg"
  }
];

const KEY_ATTRACTIONS = [
  {
    num: "01",
    title: "Red Carpet Glamour",
    desc: "A dazzling red carpet entrance featuring celebrities, ministers, and industry stalwarts under the flashing lights of national media.",
    tag: "ARRIVAL"
  },
  {
    num: "02",
    title: "Award Categories",
    desc: "Honoring excellence in film, television, music, and digital media across multiple competitive and prestigious honorary categories.",
    tag: "HONOURS"
  },
  {
    num: "03",
    title: "Performances",
    desc: "Spectacular live performances by renowned artists showcasing the rich, vibrant cultural heritage and contemporary power of Haryana.",
    tag: "SPECTACLE"
  },
  {
    num: "04",
    title: "Special Tributes",
    desc: "Paying homage to legends, visionaries, and pioneers like Satish Kaushik who have permanently elevated the regional cinema canvas.",
    tag: "LEGENDS"
  },
  {
    num: "05",
    title: "Networking Opportunities",
    desc: "A high-level confluence platform for filmmakers, musicians, tech visionaries, and brand leaders to connect, collaborate, and build.",
    tag: "COMMUNITY"
  }
];

export default function Home() {
  const [heroStep, setHeroStep] = useState(0);

  // Cinematic hero stage entrance sequence
  useEffect(() => {
    const timers = [
      setTimeout(() => setHeroStep(1), 300),   // particles + spotlight dim
      setTimeout(() => setHeroStep(2), 900),   // golden light expands
      setTimeout(() => setHeroStep(3), 1500),  // trophy visual emerges
      setTimeout(() => setHeroStep(4), 2100),  // HEIA logo reveals
      setTimeout(() => setHeroStep(5), 2700),  // headline reveals line by line
      setTimeout(() => setHeroStep(6), 3300),  // CTAs appear & ready
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const scrollToReel = () => {
    const el = document.getElementById('showreel-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen text-[#EDE8D0]">
      {/* ========================================================
          1. CINEMATIC OPENING HERO SECTION
          ======================================================== */}
      <section className="relative min-h-[95vh] sm:min-h-screen flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 pt-28 pb-10 overflow-hidden">
        {/* Deep stage burgundy & liquid gold atmospheric aura */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            heroStep >= 1 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background:
              'radial-gradient(ellipse at 50% 25%, rgba(140, 0, 26, 0.22) 0%, rgba(26, 3, 7, 0.35) 45%, transparent 85%)'
          }}
        />

        {/* Overhead Golden Spotlight Beams */}
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[550px] pointer-events-none transition-all duration-1000 ${
            heroStep >= 2 ? 'opacity-85 scale-100' : 'opacity-0 scale-75'
          }`}
          style={{
            background:
              'conic-gradient(from 180deg at 50% 0%, transparent 38%, rgba(212, 175, 55, 0.2) 47%, rgba(255, 242, 190, 0.4) 50%, rgba(212, 175, 55, 0.2) 53%, transparent 62%)',
            filter: 'blur(40px)'
          }}
        />

        {/* Ambient Stage Dust Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { top: '18%', left: '25%', delay: '0s', dur: '4.5s' },
            { top: '28%', left: '72%', delay: '1s', dur: '5.5s' },
            { top: '48%', left: '35%', delay: '2s', dur: '4s' },
            { top: '62%', left: '80%', delay: '0.5s', dur: '6s' },
            { top: '38%', left: '60%', delay: '1.5s', dur: '5s' }
          ].map((p, i) => (
            <span
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#FFE58F] shadow-[0_0_8px_#D4AF37] animate-pulse"
              style={{
                top: p.top,
                left: p.left,
                animationDelay: p.delay,
                animationDuration: p.dur,
                opacity: 0.55
              }}
            />
          ))}
        </div>

        {/* Top Spacing Sentinel */}
        <div className="w-full max-w-7xl flex items-center justify-between" />

        {/* Hero Core Content — Designed for flawless clearance and editorial elegance */}
        <div className="relative z-10 text-center max-w-4xl mx-auto my-auto py-6 sm:py-8 space-y-6">
          
          {/* 1. Official Gala Eyebrow Badge */}
          <div
            className={`transition-all duration-700 ease-out flex flex-col items-center ${
              heroStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 rounded-full border border-[#D4AF37]/40 bg-gradient-to-r from-black/80 via-[#1A0307]/80 to-black/80 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.25)]">
              <span className="w-2 h-2 rounded-full bg-[#E6C564] shadow-[0_0_10px_#D4AF37] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.3em] text-[#FFF2BE]">
                SEASON 02 • ANNUAL CULTURAL GALA
              </span>
              <span className="text-[10px] text-[#D4AF37]/60 hidden sm:inline">✦</span>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#E6C564] hidden sm:inline">
                OFFICIAL STATE HONOURS
              </span>
            </div>
          </div>

          {/* 2. Master Headline Typography */}
          <div
            className={`transition-all duration-700 delay-100 ease-out space-y-3 sm:space-y-4 ${
              heroStep >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-[11px] sm:text-xs md:text-sm font-mono font-semibold uppercase tracking-[0.35em] text-[#C5A059]">
              HARYANA ENTERTAINMENT INDUSTRY AWARDS
            </p>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight font-display uppercase leading-[1.08]">
              <span className="block text-[#FAF7EE] drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
                WHERE HARYANA’S
              </span>
              <span className="block text-gold-gradient drop-shadow-[0_0_40px_rgba(212,175,55,0.5)] italic font-normal tracking-wide">
                FINEST TALENT
              </span>
              <span className="block text-[#FAF7EE] drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
                TAKES THE SPOTLIGHT.
              </span>
            </h1>

            {/* Gilded Decorative Rule */}
            <div className="flex items-center justify-center gap-3 pt-1">
              <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <span className="text-xs text-[#D4AF37]">✦</span>
              <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>

            <p className="text-sm sm:text-base md:text-lg font-light text-[#D8D3C0] max-w-2xl mx-auto leading-relaxed pt-1">
              Honoring the pioneering filmmakers, legendary vocalists, technicians, and viral storytellers shaping regional cinema's golden era.
            </p>
          </div>

          {/* 3. Floating Ceremony Highlights Glass Ribbon */}
          <div
            className={`transition-all duration-700 delay-200 ease-out ${
              heroStep >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-xl mx-auto pt-2">
              <div className="p-3 rounded-lg bg-black/50 border border-[#D4AF37]/25 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <span className="block text-lg sm:text-2xl font-extrabold font-display text-gold-gradient">14 SLOTS</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#A8A498] font-mono">Ceremonial Awards</span>
              </div>
              <div className="p-3 rounded-lg bg-black/50 border border-[#D4AF37]/25 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <span className="block text-lg sm:text-2xl font-extrabold font-display text-gold-gradient">17 ACTS</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#A8A498] font-mono">Live Stage Acts</span>
              </div>
              <div className="p-3 rounded-lg bg-black/50 border border-[#D4AF37]/25 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <span className="block text-lg sm:text-2xl font-extrabold font-display text-gold-gradient">50M+</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#A8A498] font-mono">Audience Reach</span>
              </div>
            </div>
          </div>

          {/* 4. Action CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ease-out pt-3 ${
              heroStep >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <GoldButton to="/about" size="lg" variant="solid">
              EXPLORE HEIA
            </GoldButton>
            <GoldButton onClick={scrollToReel} size="lg" variant="outline" icon={false}>
              <span className="flex items-center gap-2">
                <Film className="w-4 h-4 text-[#D4AF37]" />
                WATCH 4K SHOWREEL (3:12)
              </span>
            </GoldButton>
          </div>

          {/* 5. Official Broadcast & OTT Footnote */}
          <div
            className={`transition-all duration-700 delay-400 ease-out ${
              heroStep >= 6 ? 'opacity-80' : 'opacity-0'
            }`}
          >
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#8C887B] pt-2">
              <span>OFFICIAL BROADCAST & OTT:</span>
              <span className="text-[#D4AF37] font-semibold">DOORDARSHAN</span>
              <span>•</span>
              <span className="text-[#D4AF37] font-semibold">WAVES OTT</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          onClick={scrollToReel}
          className={`relative z-10 flex flex-col items-center gap-2 cursor-pointer transition-all duration-500 pt-6 pb-2 group ${
            heroStep >= 6 ? 'opacity-80 hover:opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] group-hover:text-[#FFF2BE] transition-colors">
            Discover the journey ↓
          </span>
          <ChevronDown className="w-4 h-4 text-[#D4AF37] animate-bounce" />
        </div>
      </section>

      {/* ========================================================
          2. CINEMATIC SHOWREEL SECTION (HEIA Show Reel LR.mp4)
          ======================================================== */}
      <div id="showreel-section">
        <VideoSection
          title="THE HEIA EXPERIENCE"
          badge="WATCH THE SHOWREEL"
          caption="Step inside the moments that define HEIA."
        />
      </div>

      {/* Prestige Ceremony Metrics Ribbon */}
      <PrestigeMetricsRibbon />

      {/* ========================================================
          3. ABOUT HEIA TEASER (Split Screen)
          ======================================================== */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#E6C564]">
                THE INSTITUTION
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-display leading-[1.12] text-[#FAF7EE]">
              MORE THAN AN AWARD.<br />
              <span className="text-gold-gradient">A CELEBRATION OF HARYANA.</span>
            </h2>

            <div className="w-16 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent" />

            <p className="text-base sm:text-lg text-[#C7C2B2] leading-relaxed font-light">
              "The Haryana Entertainment Industry Awards is a prestigious event that honors and recognizes the outstanding contributions of artists, filmmakers, musicians, and technicians in the vibrant entertainment industry of Haryana. This annual gala brings together the best talents under one roof to celebrate their achievements and inspire future generations."
            </p>

            <div className="pt-4 flex items-center gap-4">
              <GoldButton to="/about" variant="solid" size="md">
                EXPLORE HEIA
              </GoldButton>
              <Link
                to="/experience"
                className="text-xs uppercase tracking-[0.2em] text-[#C5A059] hover:text-[#FFF2BE] transition-colors font-semibold"
              >
                The Gala Experience →
              </Link>
            </div>
          </div>

          {/* Right Image Feature with Parallax Depth Frame */}
          <div className="lg:col-span-5 relative">
            <InteractiveCard3D maxTilt={5} className="rounded-lg">
              <div className="relative rounded-lg overflow-hidden border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
                <img
                  src="/assets/gallery/cultural_group_award.jpg"
                  alt="Award ceremony stage moment"
                  className="w-full h-[380px] sm:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 inset-x-4 p-4 rounded bg-black/70 backdrop-blur-md border border-[#D4AF37]/20">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-semibold">
                    HONOURING EXCELLENCE
                  </p>
                  <p className="text-xs sm:text-sm text-[#FAF7EE] font-display font-bold">
                    United on Stage • The Spirit of Haryanvi Cinema
                  </p>
                </div>
              </div>

              {/* Decorative Gold Corner Rim */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#D4AF37]/40 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#D4AF37]/40 pointer-events-none" />
            </InteractiveCard3D>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. EXPLORE HEIA — 6 UNIQUE INTERACTIVE CARDS
          ======================================================== */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <SectionHeader
          badge="CURATED DISCOVERY"
          title="EXPLORE HEIA"
          subtitle="Navigate into the distinct dimensions of Haryana's greatest cinematic and cultural platform."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EXPLORE_CARDS.map((card) => (
            <InteractiveCard3D key={card.num} maxTilt={6} className="h-full rounded-lg">
              <Link
                to={card.path}
                className="group relative h-80 sm:h-96 rounded-lg overflow-hidden border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-500 bg-[#09090D] flex flex-col justify-between p-6 sm:p-8 hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.3)]"
              >
                {/* Background texture image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover opacity-25 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/80 to-transparent" />
                </div>

                {/* Card Top: Number & Subtle Glow */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-3xl sm:text-4xl font-extrabold font-display text-[#D4AF37]/50 group-hover:text-[#FFF2BE] transition-colors">
                    {card.num}
                  </span>
                  <span className="p-2 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>

                {/* Card Bottom: Title & Description */}
                <div className="relative z-10 space-y-2.5">
                  <div className="w-8 h-[2px] bg-[#D4AF37] group-hover:w-16 transition-all duration-300" />
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-[#FAF7EE] tracking-wide group-hover:text-gold-gradient transition-all">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C7C2B2] font-light leading-relaxed">
                    {card.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold pt-1">
                    Enter Section →
                  </span>
                </div>
              </Link>
            </InteractiveCard3D>
          ))}
        </div>
      </section>

      {/* ========================================================
          5. KEY ATTRACTIONS — STORYTELLING SECTION
          ======================================================== */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <SectionHeader
          badge="THE GALA HIGHLIGHTS"
          title="KEY ATTRACTIONS"
          subtitle="What elevates the Haryana Entertainment Industry Awards into an unforgettable cultural milestone."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {KEY_ATTRACTIONS.map((item, idx) => (
            <InteractiveCard3D key={item.num} maxTilt={5} className="h-full rounded-lg">
              <div className="relative h-full p-6 sm:p-8 rounded-lg bg-gradient-to-b from-[#101016]/90 to-[#07070a]/95 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 group flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                      {item.tag}
                    </span>
                    <span className="text-xl font-bold font-display text-white/20 group-hover:text-[#D4AF37]/60 transition-colors">
                      {item.num}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-[#FAF7EE] group-hover:text-[#FFF2BE] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C7C2B2] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#78746A]">
                    HEIA SIGNATURE
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] group-hover:scale-125 transition-all" />
                </div>
              </div>
            </InteractiveCard3D>
          ))}

          {/* 6th Card: Experience CTA */}
          <InteractiveCard3D maxTilt={5} className="h-full rounded-lg">
            <div className="relative h-full p-6 sm:p-8 rounded-lg bg-gradient-to-br from-[#2A0808] to-[#0A0A0C] border border-[#D4AF37]/40 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#FFF2BE]">
                  IMMERSIVE EXPERIENCE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-[#FAF7EE]">
                  Step Behind the Curtains
                </h3>
                <p className="text-xs sm:text-sm text-[#C7C2B2] leading-relaxed font-light">
                  Discover the 6-chapter breakdown of attending the awards: from red carpet arrival to the grand finale curtain drop.
                </p>
              </div>
              <div className="pt-6">
                <GoldButton to="/experience" variant="solid" size="md">
                  THE EXPERIENCE
                </GoldButton>
              </div>
            </div>
          </InteractiveCard3D>
        </div>
      </section>

      {/* ========================================================
          6. THE TALENT TEASER (Celebrities / Artists Teaser)
          ======================================================== */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#E6C564]">
                THE ROYAL CONFLUENCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#FAF7EE]">
              THE TALENT & GUESTS
            </h2>
            <p className="text-sm sm:text-base text-[#C7C2B2] font-light mt-2 max-w-xl">
              From the Hon'ble Chief Minister and state leadership to international icons and regional sensations.
            </p>
          </div>
          <GoldButton to="/celebrities" variant="outline" size="md">
            VIEW ALL TALENT
          </GoldButton>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {[
            { name: "Sh. Nayab Singh Saini", title: "Chief Minister of Haryana", img: "/assets/celebrities/guests/nayab_singh_saini.jpg" },
            { name: "Sapna Chaudhary", title: "Pride of Haryana", img: "/assets/celebrities/haryanvi/sapna_chaudhary.jpg" },
            { name: "Yashpal Sharma", title: "Living Legend of Haryana", img: "/assets/celebrities/guests/yashpal_sharma.jpg" },
            { name: "MD Desi Rockstar", title: "Youth Icon of Haryana", img: "/assets/celebrities/haryanvi/md.jpg" },
            { name: "Renuka Panwar", title: "Best Singer Female", img: "/assets/celebrities/haryanvi/renu_pawar.jpg" },
            { name: "Elvish Raosahab", title: "18.6M Followers", img: "/assets/celebrities/influencers/elvish_yadav.jpg" }
          ].map((c) => (
            <InteractiveCard3D key={c.name} maxTilt={8} className="h-full rounded-lg">
              <div className="group relative h-full rounded-lg overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37] bg-[#0A0A0E] transition-all duration-300 p-3 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-[#D4AF37]/40 mb-3 group-hover:scale-105 group-hover:border-[#FFF2BE] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.25)]">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold font-display text-[#FAF7EE] group-hover:text-gold-gradient line-clamp-1">
                  {c.name}
                </h4>
                <p className="text-[10px] text-[#C5A059] font-medium tracking-wider uppercase mt-0.5 line-clamp-1">
                  {c.title}
                </p>
              </div>
            </InteractiveCard3D>
          ))}
        </div>
      </section>

      {/* ========================================================
          7. THE LEGACY TEASER (Past Event Glimpses)
          ======================================================== */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#E6C564]">
                ARCHIVE OF TRIUMPH
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#FAF7EE]">
              GLIMPSES FROM THE PAST
            </h2>
            <p className="text-sm sm:text-base text-[#C7C2B2] font-light mt-2 max-w-xl">
              Relive the electric atmosphere, high-stakes award presentations, and backstage camaraderie.
            </p>
          </div>
          <GoldButton to="/legacy" variant="outline" size="md">
            EXPLORE FULL GALLERY
          </GoldButton>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Red Carpet Arrival & Press", img: "/assets/gallery/red_carpet_interview.jpg", tag: "RED CARPET" },
            { title: "Grand Opening Stage Choreography", img: "/assets/gallery/stage_grand_dance.jpg", tag: "THE STAGE" },
            { title: "Ministerial Award Felicitations", img: "/assets/gallery/stage_award_handover.jpg", tag: "THE WINNERS" }
          ].map((item) => (
            <InteractiveCard3D key={item.title} maxTilt={6} className="h-full rounded-lg">
              <div className="group relative rounded-lg overflow-hidden border border-[#D4AF37]/25 hover:border-[#D4AF37] aspect-[4/3] bg-black shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-4 inset-x-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                    {item.tag}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold font-display text-[#FAF7EE] mt-0.5">
                    {item.title}
                  </h4>
                </div>
              </div>
            </InteractiveCard3D>
          ))}
        </div>
      </section>

      {/* ========================================================
          8. OFFICIAL BROADCAST & OTT PARTNERS STRIP
          ======================================================== */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/5">
        <div className="text-center mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            WHERE HEIA REACHES
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#FAF7EE] mt-1">
            Official Broadcast & Digital Partners
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Doordarshan */}
          <div className="p-6 sm:p-8 rounded-lg border border-[#D4AF37]/25 bg-gradient-to-b from-[#0A0C14] to-[#050507] flex flex-col items-center text-center">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E9A8E] mb-3">
              Official Streaming Partner
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-[#FAF7EE] font-display mb-4">
              Doordarshan
            </h4>
            <div className="w-24 h-24 rounded-full bg-black/60 border border-[#D4AF37]/30 flex items-center justify-center p-2 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
              <img
                src="/assets/partners/doordarshan.jpg"
                alt="Doordarshan Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-xs text-[#C7C2B2] mt-4 font-light">
              Satyam Shivam Sundaram • Bringing the ceremony to millions of households across India.
            </p>
          </div>

          {/* Waves OTT */}
          <div className="p-6 sm:p-8 rounded-lg border border-[#D4AF37]/25 bg-gradient-to-b from-[#0A0C14] to-[#050507] flex flex-col items-center text-center">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E9A8E] mb-3">
              Official OTT Partner
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-[#FAF7EE] font-display mb-4">
              Waves OTT
            </h4>
            <div className="w-24 h-24 rounded-xl bg-black/60 border border-[#D4AF37]/30 flex items-center justify-center p-2 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
              <img
                src="/assets/partners/waves_ott.jpg"
                alt="Waves OTT Logo"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <p className="text-xs text-[#C7C2B2] mt-4 font-light">
              Premium on-demand streaming of red carpet specials, performances, and complete award segments.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. SPONSORSHIP CTA CALLOUT
          ======================================================== */}
      <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 bg-gradient-to-r from-[#1A0307] via-[#0E0B08] to-[#060913] p-8 sm:p-14 text-center shadow-[0_20px_60px_-15px_rgba(212,175,55,0.25)]">
          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/40 bg-black/50 text-[10px] tracking-[0.3em] uppercase text-[#FFF2BE]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              BRAND PARTNERSHIPS
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#FAF7EE]">
              PUT YOUR BRAND IN THE SPOTLIGHT.
            </h2>

            <p className="text-sm sm:text-base text-[#C7C2B2] font-light leading-relaxed">
              Join us for the 2nd season of HEIA. With a combined social media reach of over 50 million, our artists and influencers are ready to take your brand narrative to extraordinary heights across Haryana and nationwide.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <GoldButton to="/sponsors" variant="solid" size="lg">
                EXPLORE PACKAGES
              </GoldButton>
              <GoldButton to="/contact" variant="outline" size="lg">
                CONTACT COMMITTEE
              </GoldButton>
            </div>
          </div>

          {/* Ambient Lighting Overlay */}
          <div className="absolute inset-0 bg-radial-gradient from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none" />
        </div>
      </section>
    </div>
  );
}
