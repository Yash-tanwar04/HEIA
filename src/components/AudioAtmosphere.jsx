import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioAtmosphere() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const oscillatorsRef = useRef([]);

  const toggleAudio = () => {
    if (!isPlaying) {
      // Start ambient synth
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioContext();
        }

        const ctx = audioCtxRef.current;
        if (ctx.state === 'suspended') {
          ctx.resume();
        }

        // Master gain
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 3);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Warm low-pass filter
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(240, ctx.currentTime);
        filter.connect(masterGain);

        // Harmonious golden chord (A1, E2, A2)
        const freqs = [55, 110, 164.81];
        oscillatorsRef.current = freqs.map((f, i) => {
          const osc = ctx.createOscillator();
          osc.type = i === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(f, ctx.currentTime);

          const subGain = ctx.createGain();
          subGain.gain.setValueAtTime(1 / (i + 1.2), ctx.currentTime);
          osc.connect(subGain);
          subGain.connect(filter);
          osc.start();
          return osc;
        });

        setIsPlaying(true);
      } catch (e) {
        console.error('Audio initialization failed', e);
      }
    } else {
      // Fade out
      if (gainNodeRef.current && audioCtxRef.current) {
        const ctx = audioCtxRef.current;
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
        setTimeout(() => {
          oscillatorsRef.current.forEach((osc) => {
            try {
              osc.stop();
              osc.disconnect();
            } catch (err) {}
          });
          oscillatorsRef.current = [];
          setIsPlaying(false);
        }, 1250);
      } else {
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      oscillatorsRef.current.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch (err) {}
      });
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch (err) {}
      }
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      className="relative group p-2.5 rounded-full border border-[#D4AF37]/30 bg-[#0c0c10]/80 text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#181512] transition-all duration-300 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.15)]"
      title={isPlaying ? 'Mute Ceremony Soundscape' : 'Experience Ambient Soundscape'}
      aria-label={isPlaying ? 'Mute Ceremony Soundscape' : 'Experience Ambient Soundscape'}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-4 h-4 text-[#FFF2BE] animate-pulse" />
          <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] tracking-widest uppercase bg-black/90 text-[#D4AF37] border border-[#D4AF37]/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Sound On
          </span>
        </>
      ) : (
        <>
          <VolumeX className="w-4 h-4 text-[#C5A059] opacity-75 group-hover:opacity-100" />
          <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] tracking-widest uppercase bg-black/90 text-[#D4AF37] border border-[#D4AF37]/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Sound Off
          </span>
        </>
      )}
    </button>
  );
}
