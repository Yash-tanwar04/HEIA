import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import GoldButton from '../components/GoldButton';
import { Phone, Mail, MapPin, Sparkles, CheckCircle2, Send } from 'lucide-react';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const prefilledPackage = searchParams.get('package') || '';
  const prefilledType = searchParams.get('type') || (prefilledPackage ? 'sponsorship' : 'general');

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    type: prefilledType,
    packageInterest: prefilledPackage,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledPackage) {
      setFormData((prev) => ({
        ...prev,
        type: 'sponsorship',
        packageInterest: prefilledPackage
      }));
    }
  }, [prefilledPackage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <SectionHeader
        badge="GET IN TOUCH"
        title="LET'S CREATE THE NEXT BIG MOMENT"
        subtitle="Direct access to the HEIA organizing committee for brand sponsorships, artist inquiries, and media accreditation."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
        {/* Left Column: Official Contact Coordinates */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 rounded-2xl border border-[#D4AF37]/30 bg-[#09090D] space-y-6 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-[#FAF7EE]">
              Committee Coordinates
            </h3>
            <p className="text-xs sm:text-sm text-[#C7C2B2] font-light leading-relaxed">
              For partnership discussions, entry delegations, and press credentials, contact our executive secretariats directly.
            </p>

            <div className="space-y-4 pt-2">
              {/* Phone */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-lg border border-white/5 bg-white/[0.02]">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#78746A]">
                    Direct Telephones
                  </p>
                  <a href="tel:08690581555" className="block text-sm font-semibold text-[#FAF7EE] hover:text-[#FFF2BE] transition-colors mt-0.5 font-mono">
                    08690581555
                  </a>
                  <a href="tel:9671724000" className="block text-sm font-semibold text-[#FAF7EE] hover:text-[#FFF2BE] transition-colors font-mono">
                    9671724000
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-lg border border-white/5 bg-white/[0.02]">
                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#78746A]">
                    Official Correspondence
                  </p>
                  <a href="mailto:info@heia.in" className="block text-sm font-semibold text-[#FAF7EE] hover:text-[#FFF2BE] transition-colors mt-0.5">
                    info@heia.in
                  </a>
                  <a href="mailto:Sambharye.foundation@gmail.com" className="block text-xs text-[#C5A059] hover:text-[#FFF2BE] transition-colors mt-0.5">
                    Sambharye.foundation@gmail.com
                  </a>
                </div>
              </div>

              {/* Region */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-lg border border-white/5 bg-white/[0.02]">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#78746A]">
                    State Headquarters & Gala Base
                  </p>
                  <p className="text-sm font-medium text-[#FAF7EE] mt-0.5">
                    Faridabad / Haryana, India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-white/5">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                An Initiative of Sambharye Foundation
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: High-End Interactive Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-2xl border border-[#D4AF37]/30 bg-[#09090D] shadow-[0_15px_50px_rgba(0,0,0,0.8)]">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center mx-auto text-[#FFF2BE]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-display text-[#FAF7EE]">
                  Message Dispatched to Committee
                </h3>
                <p className="text-xs sm:text-sm text-[#C7C2B2] max-w-md mx-auto font-light leading-relaxed">
                  Thank you for reaching out to HEIA. Our secretariat will review your inquiry and connect with your team promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded text-xs uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37]"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-display text-[#FAF7EE]">
                    Official Inquiry Form
                  </h3>
                  <p className="text-xs text-[#9E9A8E] font-light mt-1">
                    Please submit your credentials and inquiry details below.
                  </p>
                </div>

                {/* Inquiry Type Toggle */}
                <div className="grid grid-cols-2 gap-3 p-1 rounded-lg bg-black/60 border border-white/10">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'sponsorship' })}
                    className={`py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all cursor-pointer ${
                      formData.type === 'sponsorship'
                        ? 'bg-[#D4AF37] text-black shadow'
                        : 'text-[#C7C2B2] hover:text-white'
                    }`}
                  >
                    Sponsorship
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'general' })}
                    className={`py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all cursor-pointer ${
                      formData.type === 'general'
                        ? 'bg-[#D4AF37] text-black shadow'
                        : 'text-[#C7C2B2] hover:text-white'
                    }`}
                  >
                    General / Media
                  </button>
                </div>

                {/* Full Name & Organization */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A059]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded border border-white/10 bg-black/50 text-sm text-[#FAF7EE] focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A059]">
                      Organization / Brand
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Media / Enterprise"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-2.5 rounded border border-white/10 bg-black/50 text-sm text-[#FAF7EE] focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A059]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded border border-white/10 bg-black/50 text-sm text-[#FAF7EE] focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A059]">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded border border-white/10 bg-black/50 text-sm text-[#FAF7EE] focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Package Interest (if sponsorship) */}
                {formData.type === 'sponsorship' && (
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A059]">
                      Package of Interest
                    </label>
                    <select
                      value={formData.packageInterest}
                      onChange={(e) => setFormData({ ...formData, packageInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded border border-white/10 bg-black/80 text-sm text-[#FAF7EE] focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value="">Select Package (Optional)</option>
                      <option value="TITLE SPONSOR">TITLE SPONSOR</option>
                      <option value="SPONSORED BY">SPONSORED BY</option>
                      <option value="CO-SPONSORED BY">CO-SPONSORED BY</option>
                      <option value="POWERED BY">POWERED BY</option>
                      <option value="CO-POWERED BY">CO-POWERED BY</option>
                    </select>
                  </div>
                )}

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A059]">
                    Message / Collaboration Scope *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your brand goals, sponsorship preferences, or inquiry details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded border border-white/10 bg-black/50 text-sm text-[#FAF7EE] focus:border-[#D4AF37] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-sm bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA771C] text-black font-bold uppercase tracking-[0.2em] text-xs hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT INQUIRY TO COMMITTEE</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
