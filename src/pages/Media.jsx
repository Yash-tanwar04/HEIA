import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import VideoSection from '../components/VideoSection';
import Lightbox from '../components/Lightbox';
import InteractiveCard3D from '../components/InteractiveCard3D';
import { LEGACY_ITEMS } from '../data/legacyData';
import { Tv, Radio, Film, Sparkles, Download, Play, Maximize2 } from 'lucide-react';

export default function Media() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const mediaPhotos = LEGACY_ITEMS.slice(0, 6);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <SectionHeader
        badge="BROADCAST & DIGITAL ARCHIVES"
        title="HEIA MEDIA"
        subtitle="The cinematic showreel, television streaming partnerships, official photo assets, and broadcast presence of HEIA."
      />

      {/* Featured 4K Showreel Centerpiece */}
      <div className="mb-20">
        <VideoSection
          title="OFFICIAL CEREMONY SHOWREEL"
          badge="CINEMATIC REEL (3:12)"
          caption="Captured live at the HEIA gala: red carpet interviews, stage pyrotechnics, and trophy felicitations."
        />
      </div>

      {/* Official Streaming & OTT Partners */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            WHERE HEIA REACHES
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-[#FAF7EE] mt-1">
            Broadcast & Streaming Alliances
          </h3>
          <p className="text-xs sm:text-sm text-[#C7C2B2] font-light max-w-xl mx-auto mt-2">
            Broadcasting the pride of Haryana to millions of homes across India through premier terrestrial and OTT networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Doordarshan Card */}
          <InteractiveCard3D maxTilt={5} className="rounded-xl">
            <div className="h-full p-8 rounded-xl border border-[#D4AF37]/30 hover:border-[#D4AF37] bg-gradient-to-b from-[#0F111E] to-[#07070A] flex flex-col items-center text-center shadow-[0_15px_45px_rgba(0,0,0,0.8)] transition-all duration-300">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-black/60 text-[10px] font-mono uppercase tracking-[0.25em] text-[#E6C564] mb-4">
                <Tv className="w-3.5 h-3.5 text-[#D4AF37]" />
                Official Streaming Partner
              </div>
              <h4 className="text-2xl font-bold font-display text-[#FAF7EE] mb-1">
                Doordarshan
              </h4>
              <p className="text-xs text-[#C5A059] font-medium tracking-widest uppercase mb-6">
                सत्यम् शिवम् सुन्दरम्
              </p>
              <div className="w-32 h-32 rounded-2xl bg-black border border-[#D4AF37]/30 flex items-center justify-center p-4 shadow-[0_0_25px_rgba(212,175,55,0.2)]">
                <img
                  src="/assets/partners/doordarshan.jpg"
                  alt="Doordarshan Official Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xs sm:text-sm text-[#C7C2B2] mt-6 font-light leading-relaxed">
                India's premier public broadcast television network, streaming the full gala ceremony and cultural heritage segments across state and national transmissions.
              </p>
            </div>
          </InteractiveCard3D>

          {/* Waves OTT Card */}
          <InteractiveCard3D maxTilt={5} className="rounded-xl">
            <div className="h-full p-8 rounded-xl border border-[#D4AF37]/30 hover:border-[#D4AF37] bg-gradient-to-b from-[#0F111E] to-[#07070A] flex flex-col items-center text-center shadow-[0_15px_45px_rgba(0,0,0,0.8)] transition-all duration-300">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-black/60 text-[10px] font-mono uppercase tracking-[0.25em] text-[#E6C564] mb-4">
                <Film className="w-3.5 h-3.5 text-[#D4AF37]" />
                Official OTT Partner
              </div>
              <h4 className="text-2xl font-bold font-display text-[#FAF7EE] mb-1">
                Waves OTT
              </h4>
              <p className="text-xs text-[#C5A059] font-medium tracking-widest uppercase mb-6">
                On-Demand Entertainment
              </p>
              <div className="w-32 h-32 rounded-2xl bg-black border border-[#D4AF37]/30 flex items-center justify-center p-4 shadow-[0_0_25px_rgba(212,175,55,0.2)]">
                <img
                  src="/assets/partners/waves_ott.jpg"
                  alt="Waves OTT Official Logo"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <p className="text-xs sm:text-sm text-[#C7C2B2] mt-6 font-light leading-relaxed">
                Digital on-demand streaming destination presenting high-definition full-length performances, red carpet uncensored interviews, and behind-the-scenes exclusives.
              </p>
            </div>
          </InteractiveCard3D>
        </div>
      </div>

      {/* Press Photo Highlights */}
      <div className="mb-16">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#FAF7EE]">
              Press Photography Highlights
            </h3>
            <p className="text-xs sm:text-sm text-[#9E9A8E] font-light mt-1">
              Official press photographs from past HEIA editions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaPhotos.map((item) => (
            <InteractiveCard3D key={item.id} maxTilt={6} className="h-full rounded-lg">
              <div
                onClick={() => setSelectedPhoto(item)}
                className="group relative h-full rounded-lg overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37] aspect-[4/3] bg-black cursor-pointer shadow-lg transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37]/30 text-[#FFF2BE] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div className="absolute bottom-4 inset-x-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold font-display text-[#FAF7EE] mt-0.5">
                    {item.title}
                  </h4>
                </div>
              </div>
            </InteractiveCard3D>
          ))}
        </div>
      </div>

      <Lightbox
        item={selectedPhoto}
        items={mediaPhotos}
        onClose={() => setSelectedPhoto(null)}
        onNavigate={(item) => setSelectedPhoto(item)}
      />
    </div>
  );
}
