import React, { useState } from 'react';
import { 
  ArrowRight, 
  Calculator, 
  CheckCircle2, 
  MapPin, 
  Sparkles, 
  UserCheck, 
  Shield, 
  Heart,
  Building2,
  CalendarCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/builderData';
import type { PageId } from './PageHeader';

interface HeroProps {
  onOpenConsultation: () => void;
  onScrollToEstimator: () => void;
  onOpenFlyer: () => void;
  onNavigate?: (page: PageId) => void;
  onOpenProjectModal?: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onScrollToEstimator,
  onOpenFlyer,
  onNavigate,
}) => {
  const [plotYards, setPlotYards] = useState('200');
  const [floors, setFloors] = useState('G+2');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [estimateGenerated, setEstimateGenerated] = useState(false);
  const [heroImageTab, setHeroImageTab] = useState<'family' | 'villa' | 'steel'>('family');

  // Quick estimation logic in Hero
  const builtUpEstimate = Number(plotYards) * (floors === 'G' ? 10 : floors === 'G+1' ? 16 : floors === 'G+2' ? 22 : 28);
  const costEstimateMin = (builtUpEstimate * 1879) / 100000;
  const costEstimateMax = (builtUpEstimate * 2099) / 100000;

  const handleInstantQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    confetti({
      particleCount: 85,
      spread: 65,
      origin: { y: 0.6 },
      colors: ['#00A3FF', '#0066CC', '#F59E0B', '#10B981'],
    });

    setEstimateGenerated(true);
  };

  // High-impact big images matching prompt: traditional festive family celebration, big construction home, and structural steel
  const heroImages = {
    family: {
      url: '/images/griha-pravesham-family.jpg',
      badge: 'Griha Pravesham Festive Celebration',
      sub: 'Over 380+ happy traditional Indian families celebrating their housewarming with marigold flower toran, glowing deepams & on-time handover.',
      tag: 'Festive Handover'
    },
    villa: {
      url: '/images/modern-luxury-duplex-night.jpg',
      badge: 'Big Luxury Duplex Villa Elevation',
      sub: 'Engineered for 150 to 400+ Sq.Yard plots with 100% Vastu compliance, double-height living & terrace garden.',
      tag: 'Turnkey Construction'
    },
    steel: {
      url: '/images/metal-structural-peb-erection.jpg',
      badge: 'Heavy Metal Structural PEB & Industrial Sheds',
      sub: 'High-tensile steel fabrication, crane erection, and precision industrial construction.',
      tag: 'Structural Engineering'
    }
  };

  return (
    <section className="relative pt-28 pb-20 bg-gradient-to-b from-[#F8FAFC] via-white to-slate-100 text-slate-900 overflow-hidden">
      
      {/* Traditional Festive Subtle Toran / Mandala & Blueprint Ambient Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0B2545 1px, transparent 0), linear-gradient(to right, #CBD5E1 1px, transparent 1px)`,
          backgroundSize: '40px 40px, 120px 120px'
        }}
      />

      {/* Radiant Glow Spheres matching Visiting Card colors */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            {/* Visiting Card Motto */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-black uppercase tracking-wider border border-slate-200 shadow-xs backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
              </span>
              <span>{COMPANY_INFO.tagline}</span>
            </div>

            {/* Traditional Griha Pravesham Festive Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 text-xs font-bold border border-orange-200">
              <Heart className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
              <span>Griha Pravesham Ready • 100% On-Time</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 text-slate-700 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-xs font-medium">
              <UserCheck className="w-3.5 h-3.5 text-orange-500" />
              <span>{COMPANY_INFO.proprietor} ({COMPANY_INFO.proprietorTitle})</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-700 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-xs font-medium">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>GST: {COMPANY_INFO.gstin}</span>
            </span>
          </div>
        </div>

        {/* Main Grid: Left Value Proposition & Right Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (7 Cols): Punchy Crisp Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest text-orange-600 font-extrabold flex items-center gap-2">
                <span>BUILDING IDEAS</span>
                <span className="text-slate-300">•</span>
                <span>CREATING SPACES</span>
                <span className="text-slate-300">•</span>
                <span>SHAPING TOMORROW</span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-[#0B2545] leading-[1.15]">
                RR CONSTRUCTIONS &amp; <span className="text-orange-600">ENGINEERING WORKS</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Premier turnkey house construction, heavy steel fabrication, 2D/3D designing, and performance flooring across <strong className="text-slate-900 font-bold">Andhra Pradesh &amp; Telangana</strong>. 
              Turnkey packages with <strong className="text-orange-600 font-bold">zero price escalation</strong>, 430+ QC checks, and guaranteed on-time Griha Pravesham handover.
            </p>

            {/* 4 Core Pillars Direct from Visiting Card */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <button 
                type="button" 
                onClick={() => onNavigate && onNavigate('services')} 
                className="bg-white p-3 rounded-xl border border-slate-200 hover:border-orange-500 hover:bg-orange-50/20 shadow-xs hover:shadow-md transition-all cursor-pointer text-left group"
              >
                <div className="text-xs font-black text-slate-900 group-hover:text-orange-600">Constructions</div>
                <div className="text-[10px] text-slate-500 font-medium group-hover:text-orange-600">Residential &amp; Turnkey →</div>
              </button>
              <button 
                type="button" 
                onClick={() => onNavigate && onNavigate('services')} 
                className="bg-white p-3 rounded-xl border border-slate-200 hover:border-orange-500 hover:bg-orange-50/20 shadow-xs hover:shadow-md transition-all cursor-pointer text-left group"
              >
                <div className="text-xs font-black text-slate-900 group-hover:text-orange-600">Metal Structural</div>
                <div className="text-[10px] text-slate-500 font-medium group-hover:text-orange-600">Steel Sheds &amp; PEB →</div>
              </button>
              <button 
                type="button" 
                onClick={() => onNavigate && onNavigate('services')} 
                className="bg-white p-3 rounded-xl border border-slate-200 hover:border-orange-500 hover:bg-orange-50/20 shadow-xs hover:shadow-md transition-all cursor-pointer text-left group"
              >
                <div className="text-xs font-black text-slate-900 group-hover:text-orange-600">Designing Works</div>
                <div className="text-[10px] text-slate-500 font-medium group-hover:text-orange-600">AutoCAD 2D &amp; 3D Render →</div>
              </button>
              <button 
                type="button" 
                onClick={() => onNavigate && onNavigate('services')} 
                className="bg-white p-3 rounded-xl border border-slate-200 hover:border-orange-500 hover:bg-orange-50/20 shadow-xs hover:shadow-md transition-all cursor-pointer text-left group"
              >
                <div className="text-xs font-black text-slate-900 group-hover:text-orange-600">Flooring Works</div>
                <div className="text-[10px] text-slate-500 font-medium group-hover:text-orange-600">Epoxy &amp; PU Flooring →</div>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Fixed-Price Contract (Zero Escalation)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>430+ Stage-wise Quality Checks &amp; NABL Reports</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Vastu Compliant Architectural Planning</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>24/7 Mobile App CCTV Streaming for NRI / Busy Clients</span>
              </div>
            </div>

            {/* Action Buttons (10% Accent CTAs) */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-extrabold text-sm sm:text-base text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-lg shadow-orange-500/25 transition-all hover:scale-102 cursor-pointer"
              >
                <span>Book Free Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate ? onNavigate('packages') : onScrollToEstimator()}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base text-[#0B2545] bg-white hover:bg-slate-50 border-2 border-[#0B2545] shadow-xs transition-all cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-orange-600" />
                <span>Estimate Construction Cost</span>
              </button>

              <button
                type="button"
                onClick={onOpenFlyer}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all cursor-pointer"
              >
                <span>Download Visiting Flyer</span>
              </button>
            </div>

            {/* Registered Locations matching visiting card */}
            <div className="pt-3 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap items-center gap-3">
              <span className="font-semibold text-slate-800 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-orange-600" />
                Offices:
              </span>
              <span><strong>Head Office:</strong> {COMPANY_INFO.headOffice}</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-700"><strong>Telangana Hub:</strong> {COMPANY_INFO.hyderabadHub}</span>
            </div>

          </div>

          {/* Right Column (5 Cols): Big Construction Images & Interactive Instant Estimator (Lets Photography Stand Out) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Visual Hero Showcase with Interactive Working Image Switcher */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl relative group">
              
              {/* Image Tabs */}
              <div className="p-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setHeroImageTab('family')}
                  className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                    heroImageTab === 'family' 
                      ? 'bg-[#0B2545] text-white shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Heart className="w-3.5 h-3.5 text-orange-400" />
                  <span>Happy Family</span>
                </button>
                <button
                  type="button"
                  onClick={() => setHeroImageTab('villa')}
                  className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                    heroImageTab === 'villa' 
                      ? 'bg-[#0B2545] text-white shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5 text-orange-400" />
                  <span>Luxury Villa</span>
                </button>
                <button
                  type="button"
                  onClick={() => setHeroImageTab('steel')}
                  className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                    heroImageTab === 'steel' 
                      ? 'bg-[#0B2545] text-white shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <CalendarCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Steel Works</span>
                </button>
              </div>

              {/* Big High-Impact Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                <img
                  src={heroImages[heroImageTab].url}
                  alt={heroImages[heroImageTab].badge}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Overlaid Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-md bg-white/95 text-slate-900 font-bold text-xs border border-slate-200 backdrop-blur-md shadow-sm">
                    {heroImages[heroImageTab].tag}
                  </span>
                </div>

                {/* Bottom Overlaid Caption */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="font-extrabold text-sm sm:text-base leading-snug drop-shadow-md">
                    {heroImages[heroImageTab].badge}
                  </div>
                  <p className="text-[11px] text-slate-200 line-clamp-1 mt-0.5">
                    {heroImages[heroImageTab].sub}
                  </p>
                </div>
              </div>

              {/* Instant Plot Estimator Quick Box below Image */}
              <div className="p-5 border-t border-slate-200 bg-white">
                {!estimateGenerated ? (
                  <form onSubmit={handleInstantQuote} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0B2545]">
                        Quick Telangana &amp; AP Estimator
                      </span>
                      <span className="text-xs font-bold text-orange-600">Zero Price Escalation</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <select
                        value={plotYards}
                        onChange={(e) => setPlotYards(e.target.value)}
                        className="py-1.5 px-2.5 rounded-lg text-xs bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:border-orange-500"
                      >
                        <option value="150">150 Sq.Yards Plot</option>
                        <option value="180">180 Sq.Yards Plot</option>
                        <option value="200">200 Sq.Yards Plot</option>
                        <option value="240">240 Sq.Yards Plot</option>
                        <option value="300">300 Sq.Yards Plot</option>
                        <option value="400">400 Sq.Yards Plot</option>
                      </select>

                      <select
                        value={floors}
                        onChange={(e) => setFloors(e.target.value)}
                        className="py-1.5 px-2.5 rounded-lg text-xs bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:border-orange-500"
                      >
                        <option value="G">G (Single Floor)</option>
                        <option value="G+1">G + 1 (Duplex)</option>
                        <option value="G+2">G + 2 (Spacious Duplex)</option>
                        <option value="G+3">G + 3 (Rental + Home)</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="py-1.5 px-2.5 rounded-lg text-xs bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-orange-500 placeholder:text-slate-400"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Mobile Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="py-1.5 px-2.5 rounded-lg text-xs bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-orange-500 placeholder:text-slate-400"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 px-3 rounded-xl font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-md shadow-orange-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                      <span>Calculate Instant BOQ &amp; 3D Plan</span>
                    </button>
                  </form>
                ) : (
                  <div className="py-2 space-y-2 text-center">
                    <div className="flex items-center justify-between text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      <span>{plotYards} Sq.Yds ({floors}):</span>
                      <strong className="text-orange-600 text-sm font-black">
                        ₹{costEstimateMin.toFixed(2)}L – ₹{costEstimateMax.toFixed(2)} Lakhs
                      </strong>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setEstimateGenerated(false)}
                        className="flex-1 py-1.5 text-xs text-slate-600 hover:text-slate-900 cursor-pointer"
                      >
                        Recalculate
                      </button>
                      <button
                        type="button"
                        onClick={onOpenConsultation}
                        className="flex-1 py-1.5 px-3 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 cursor-pointer"
                      >
                        Book Free Survey
                      </button>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
