import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2, Film } from 'lucide-react';

export default function VideoSection({
  title = "THE HEIA EXPERIENCE",
  badge = "WATCH THE SHOWREEL",
  caption = "Step inside the moments that define HEIA."
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("3:12");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const hideControlsTimer = useRef(null);

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 192;
    setProgress((curr / dur) * 100);
    setCurrentTime(formatTime(curr));
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(formatTime(videoRef.current.duration));
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newPercent = clickX / rect.width;
    const newTime = newPercent * (videoRef.current.duration || 192);
    videoRef.current.currentTime = newTime;
    setProgress(newPercent * 100);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => console.error(err));
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
    hideControlsTimer.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2800);
  };

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, [isPlaying]);

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title & Badge */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 mb-3">
          <Film className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#D4AF37]">
            {badge}
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#FAF7EE] tracking-tight">
          {title}
        </h2>
      </div>

      {/* Cinematic Frame Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => isPlaying && setShowControls(false)}
        className="relative group rounded-xl overflow-hidden border border-[#D4AF37]/30 bg-black shadow-[0_20px_60px_-15px_rgba(212,175,55,0.2)] aspect-video w-full max-w-5xl mx-auto"
      >
        <video
          ref={videoRef}
          src="/videos/heia_showreel.mp4"
          poster="/assets/gallery/stage_grand_dance.jpg"
          preload="metadata"
          playsInline
          muted={isMuted}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          onClick={togglePlay}
          className="w-full h-full object-cover cursor-pointer"
        />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-70" />

        {/* Ambient Big Center Play Button when paused */}
        {!isPlaying && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all cursor-pointer group-hover:bg-black/25"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#FFF2BE]/80 bg-[#0C0C10]/80 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_rgba(212,175,55,0.45)]">
              <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 text-[#FFF2BE] fill-[#D4AF37]" />
              <span className="absolute inset-0 rounded-full border border-[#D4AF37] animate-ping opacity-30" />
            </div>
            <p className="mt-4 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#FFF2BE] drop-shadow-md">
              Watch Full Reel (3:12)
            </p>
          </div>
        )}

        {/* Custom Luxury Control Bar */}
        <div
          className={`absolute bottom-0 inset-x-0 p-3 sm:p-5 bg-gradient-to-t from-[#050507] via-black/80 to-transparent transition-opacity duration-300 ${
            showControls || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Progress Bar */}
          <div
            onClick={handleSeek}
            className="relative w-full h-1.5 sm:h-2 bg-white/20 hover:h-2.5 rounded-full cursor-pointer transition-all mb-3 overflow-hidden"
          >
            <div
              className="h-full bg-gradient-to-r from-[#AA771C] via-[#D4AF37] to-[#FFF2BE] transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs sm:text-sm text-[#FAF7EE]">
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={togglePlay}
                className="p-1.5 rounded-full hover:bg-white/10 text-[#D4AF37] hover:text-[#FFF2BE] transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
              </button>

              <button
                onClick={toggleMute}
                className="p-1.5 rounded-full hover:bg-white/10 text-[#D4AF37] hover:text-[#FFF2BE] transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>

              <span className="text-[11px] sm:text-xs text-[#C5A059] font-mono tracking-wider">
                {currentTime} / {duration}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <span className="hidden sm:inline-block text-[10px] tracking-[0.2em] uppercase text-[#D4AF37]/80">
                HEIA SHOWREEL
              </span>
              <button
                onClick={toggleFullscreen}
                className="p-1.5 rounded-full hover:bg-white/10 text-[#D4AF37] hover:text-[#FFF2BE] transition-colors"
                aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
              >
                {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-caption from requirements */}
      <p className="mt-5 text-center text-xs sm:text-sm md:text-base text-[#C7C2B2] tracking-wide font-light">
        {caption}
      </p>
    </section>
  );
}
