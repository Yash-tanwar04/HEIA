import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import ScrollToTop from './components/ScrollToTop';
import Trophy3D from './components/Trophy3D';
import MobileTrophyBackground from './components/MobileTrophyBackground';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Awards from './pages/Awards';
import ShowFlow from './pages/ShowFlow';
import Celebrities from './pages/Celebrities';
import Performances from './pages/Performances';
import Legacy from './pages/Legacy';
import Sponsors from './pages/Sponsors';
import Media from './pages/Media';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#050507] text-[#EDE8D0] overflow-x-hidden selection:bg-[#D4AF37]/30 selection:text-[#FFF8DC]">
        {/* Mobile Background Trophy Silhouette & Backlight Aura */}
        <MobileTrophyBackground />

        {/* Ambient Gold Particle Dust */}
        <ParticleBackground />

        {/* 3D Rotating HEIA Trophy Model (Desktop/Laptop left side background) */}
        <Trophy3D />

        {/* Magnetic Gold Desktop Cursor */}
        <CustomCursor />

        {/* Scroll To Top on Route Changes */}
        <ScrollToTop />

        {/* Sticky Luxury Navbar */}
        <Navbar />

        {/* Main Content Area in Foreground */}
        <main className="relative z-10 lg:pl-32 xl:pl-40 2xl:pl-48 transition-[padding] duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/show-flow" element={<ShowFlow />} />
            <Route path="/celebrities" element={<Celebrities />} />
            <Route path="/performances" element={<Performances />} />
            <Route path="/legacy" element={<Legacy />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Monolithic Black & Gold Footer */}
        <Footer />
      </div>
    </Router>
  );
}
