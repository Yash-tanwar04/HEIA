import React from 'react';
import SectionHeader from '../components/SectionHeader';
import GoldButton from '../components/GoldButton';
import InteractiveCard3D from '../components/InteractiveCard3D';
import { Sparkles, Camera, Award, Music, Flame, Users, Handshake } from 'lucide-react';

const CHAPTERS = [
  {
    num: "01",
    title: "THE RED CARPET",
    badge: "THE ARRIVAL",
    icon: Camera,
    heading: "Velvet, Camera Flashes & Dignitary Arrivals",
    desc: "The evening commences on the grand HEIA red carpet wall. As custom lights illuminate the arrival lane, honorable ministers, celebrated cinema stalwarts, and viral youth icons pause for exclusive broadcast interviews with Doordarshan and national news channels. The electric hum of paparazzi shutters and anticipation sets an unforgettable prelude.",
    image: "/assets/gallery/red_carpet_interview.jpg",
    accent: "FROM 6:30 PM ONWARDS"
  },
  {
    num: "02",
    title: "THE AWARDS CEREMONY",
    badge: "THE HONOURS",
    icon: Award,
    heading: "The Golden Globe Statuette in the Spotlight",
    desc: "Inside the grand auditorium, silence turns into roaring applause as sealed golden envelopes reveal the best in Haryanvi cinema, music, web episodic productions, and technical craftsmanship. From breakthrough debuts to the revered Living Legend honours, each handover is marked by emotional acceptance speeches and standing ovations.",
    image: "/assets/gallery/stage_award_handover.jpg",
    accent: "14 CURATED SLOTS"
  },
  {
    num: "03",
    title: "LIVE PERFORMANCES",
    badge: "THE SPECTACLE",
    icon: Music,
    heading: "High-Octane Cultural Energy & Theatrical Brilliance",
    desc: "The HEIA stage erupts with synchronized pyrotechnics, dynamic LED stage architecture, and spellbinding live choreography. From the divine invocation of Ganesh Vandana to acrobatic martial feats by Warrior Squad and viral chartbusters by Sapna Chaudhary, Renuka Panwar, and Ajay Hooda, the stage pulses with Haryana's purest creative fire.",
    image: "/assets/gallery/stage_grand_dance.jpg",
    accent: "17 LIVE STAGE ACTS"
  },
  {
    num: "04",
    title: "SPECIAL TRIBUTES",
    badge: "THE LEGENDS",
    icon: Flame,
    heading: "In Memoriam: The Satish Kaushik Special Honours",
    desc: "A moment of solemn reverence and celebration dedicated to the late, revered pioneer Satish Kaushik. Through an exclusive audio-visual retrospective and the presentation of the Satish Kaushik Kala Ratan Awards, HEIA honors the stalwarts who paved the path for regional artists across the global entertainment spectrum.",
    image: "/assets/gallery/event_host_podium.jpg",
    accent: "KALA RATAN & LIFETIME HONOURS"
  },
  {
    num: "05",
    title: "CELEBRITY MOMENTS",
    badge: "THE SPONTANEITY",
    icon: Users,
    heading: "Unscripted Camaraderie & Star Collisions",
    desc: "Between formal slots, spontaneous moments create lasting folklore. Comic dual-hosting battles explore linguistic charm, while impromptu onstage dance routines between viral creators and beloved icons delight thousands of spectators in real time, breaking barriers between fans and stars.",
    image: "/assets/gallery/stage_celebrity_trophy.jpg",
    accent: "ORGANIC STAR INTERACTIONS"
  },
  {
    num: "06",
    title: "NETWORKING & ALLIANCES",
    badge: "THE CONFLUENCE",
    icon: Handshake,
    heading: "Shaping the Next Wave of Regional Productions",
    desc: "Behind the curtains and at the exclusive post-show gala dinner, key industry players converge. OTT platform founders, independent music producers, streaming partners, and visionary brand sponsors forge the joint ventures and greenlight the series that will dominate the upcoming entertainment season.",
    image: "/assets/gallery/grand_stage_lineup.jpg",
    accent: "INDUSTRY LEADERSHIP"
  }
];

export default function Experience() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <SectionHeader
        badge="IMMERSIVE CHRONICLE"
        title="THE HEIA EXPERIENCE"
        subtitle="Step inside the atmosphere, spectacle, and emotional heartbeat of attending Haryana's grandest entertainment honours."
      />

      {/* Chapters Journey */}
      <div className="space-y-24 lg:space-y-32">
        {CHAPTERS.map((ch, idx) => {
          const isEven = idx % 2 === 1;
          const Icon = ch.icon;

          return (
            <div
              key={ch.num}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text Area */}
              <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl font-extrabold font-display text-gold-gradient">
                    {ch.num}
                  </span>
                  <div className="h-6 w-[1px] bg-[#D4AF37]/30" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
                    {ch.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#FAF7EE] leading-tight">
                  {ch.heading}
                </h3>

                <div className="w-12 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent" />

                <p className="text-sm sm:text-base text-[#C7C2B2] font-light leading-relaxed">
                  {ch.desc}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-white/5 text-[11px] text-[#78746A] uppercase tracking-wider font-mono">
                  <span>{ch.title}</span>
                  <span className="text-[#D4AF37] font-semibold">{ch.accent}</span>
                </div>
              </div>

              {/* Visual Area */}
              <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <InteractiveCard3D maxTilt={6} className="rounded-xl">
                  <div className="relative rounded-xl overflow-hidden border border-[#D4AF37]/30 hover:border-[#D4AF37] shadow-[0_15px_45px_rgba(0,0,0,0.9)] group aspect-[16/10] bg-black transition-all duration-300">
                    <img
                      src={ch.image}
                      alt={ch.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Chapter Watermark Number */}
                    <div className="absolute bottom-4 right-4 text-4xl sm:text-5xl font-black font-display text-white/10 group-hover:text-[#D4AF37]/30 transition-colors pointer-events-none">
                      {ch.num}
                    </div>
                  </div>
                </InteractiveCard3D>
              </div>
            </div>
          );
        })}
      </div>

      {/* Experience CTA */}
      <InteractiveCard3D maxTilt={4} className="mt-28 rounded-xl max-w-3xl mx-auto">
        <div className="p-8 sm:p-12 rounded-xl border border-[#D4AF37]/35 bg-gradient-to-r from-[#1A0307] to-[#0A0A0C] text-center space-y-4 shadow-[0_15px_45px_rgba(0,0,0,0.85)]">
          <Sparkles className="w-6 h-6 text-[#D4AF37] mx-auto animate-pulse" />
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#FAF7EE]">
            Witness the Full Award Roster & Flow
          </h3>
          <p className="text-xs sm:text-sm text-[#C7C2B2] font-light">
            Explore the official timeline or review the complete winners across all competitive categories.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <GoldButton to="/awards" variant="solid" size="md">
              EXPLORE AWARDS
            </GoldButton>
            <GoldButton to="/show-flow" variant="outline" size="md">
              VIEW SHOW FLOW
            </GoldButton>
          </div>
        </div>
      </InteractiveCard3D>
    </div>
  );
}
