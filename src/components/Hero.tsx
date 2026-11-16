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
    <section className="relative pt-28 pb-20 bg-gradient-to-b from-[#071527] via-[#0B2545] to-[#071527] text-white overflow-hidden">
      
      {/* Traditional Festive Subtle Toran / Mandala & Blueprint Ambient Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00A3FF 1px, transparent 0), linear-gradient(to right, #F59E0B 1px, transparent 1px)`,
          backgroundSize: '40px 40px, 120px 120px'
        }}
      />

      {/* Radiant Glow Spheres matching Visiting Card colors */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            {/* Visiting Card Motto */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/50 text-cyan-300 text-xs font-black uppercase tracking-wider border border-blue-500/40 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span>{COMPANY_INFO.tagline}</span>
            </div>

            {/* Traditional Griha Pravesham Festive Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/15 text-amber-300 text-xs font-bold border border-amber-500/30">
              <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Griha Pravesham Ready • 100% On-Time</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 text-slate-300 bg-[#0F1E36] px-3 py-1.5 rounded-full border border-[#1E3A5F]">
              <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>{COMPANY_INFO.proprietor} ({COMPANY_INFO.proprietorTitle})</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-300 bg-[#0F1E36] px-3 py-1.5 rounded-full border border-[#1E3A5F]">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>GST: {COMPANY_INFO.gstin}</span>
            </span>
          </div>
        </div>

        {/* Main Grid: Left Value Proposition & Right Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (7 Cols): Punchy Crisp Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest text-cyan-300 font-extrabold flex items-center gap-2">
                <span>BUILDING IDEAS</span>
                <span className="text-cyan-500">•</span>
                <span>CREATING SPACES</span>
                <span className="text-cyan-500">•</span>
                <span>SHAPING TOMORROW</span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-white leading-[1.15]">
                RR CONSTRUCTIONS &amp; <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-300 bg-clip-text text-transparent">ENGINEERING WORKS</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Premier turnkey house construction, heavy steel fabrication, 2D/3D designing, and performance flooring across <strong className="text-white font-bold">Andhra Pradesh &amp; Telangana</strong>. 
              Turnkey packages with <strong className="text-cyan-300 font-bold">zero price escalation</strong>, 430+ QC checks, and guaranteed on-time Griha Pravesham handover.
            </p>

            {/* 4 Core Pillars Direct from Visiting Card */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <button 
                type="button" 
                onClick={() => onNavigate && onNavigate('services')} 
                className="bg-[#0F1E36] p-3 rounded-xl border border-[#1E3A5F] hover:border-cyan-400 hover:bg-[#16335C] transition-all cursor-pointer text-left group"
              >
                <div className="text-xs font-black text-white group-hover:text-cyan-300">Constructions</div>
                <div className="text-[10px] text-cyan-300 font-medium">Residential &amp; Turnkey →</div>
              </button>
              <button 
                type="button" 
                onClick={() => onNavigate && onNavigate('services')} 
                className="bg-[#0F1E36] p-3 rounded-xl border border-[#1E3A5F] hover:border-cyan-400 hover:bg-[#16335C] transition-all cursor-pointer text-left group"
              >
                <div className="text-xs font-black text-white group-hover:text-cyan-300">Metal Structural</div>
                <div className="text-[10px] text-cyan-300 font-medium">Steel Sheds &amp; PEB →</div>
              </button>
              <button 
                type="button" 
                onClick={() => onNavigate && onNavigate('services')} 
                className="bg-[#0F1E36] p-3 rounded-xl border border-[#1E3A5F] hover:border-cyan-400 hover:bg-[#16335C] transition-all cursor-pointer text-left group"
              >
                <div className="text-xs font-black text-white group-hover:text-cyan-300">Designing Works</div>
                <div className="text-[10px] text-cyan-300 font-medium">AutoCAD 2D &amp; 3D Render →</div>
              </button>
              <button 
                type="button" 
                onClick={() => onNavigate && onNavigate('services')} 
                className="bg-[#0F1E36] p-3 rounded-xl border border-[#1E3A5F] hover:border-cyan-400 hover:bg-[#16335C] transition-all cursor-pointer text-left group"
              >
                <div className="text-xs font-black text-white group-hover:text-cyan-300">Flooring Works</div>
                <div className="text-[10px] text-cyan-300 font-medium">Epoxy &amp; PU Flooring →</div>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Fixed-Price Contract (Zero Escalation)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>430+ Stage-wise Quality Checks &amp; NABL Reports</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Vastu Compliant Architectural Planning</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 Mobile App CCTV Streaming for NRI / Busy Clients</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-extrabold text-sm sm:text-base text-white bg-gradient-to-r from-[#00A3FF] via-[#0066CC] to-[#004099] hover:brightness-110 shadow-lg shadow-blue-500/25 transition-all hover:scale-102 cursor-pointer"
              >
                <span>Book Free Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate ? onNavigate('packages') : onScrollToEstimator()}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-[#0F1E36] hover:bg-[#1E3A5F] border border-[#1E3A5F] shadow-sm transition-all cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-cyan-400" />
                <span>Estimate Construction Cost</span>
              </button>

              <button
                type="button"
                onClick={onOpenFlyer}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-cyan-300 hover:text-white bg-blue-900/40 hover:bg-blue-800/50 border border-blue-500/40 transition-all cursor-pointer"
              >
                <span>Download Visiting Flyer</span>
              </button>
            </div>

            {/* Registered Locations matching visiting card */}
            <div className="pt-3 border-t border-[#1E3A5F] text-xs text-slate-400 flex flex-wrap items-center gap-3">
              <span className="font-semibold text-slate-200 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                Offices:
              </span>
              <span><strong>Head Office:</strong> {COMPANY_INFO.headOffice}</span>
              <span className="text-slate-600">|</span>
              <span className="text-cyan-300"><strong>Telangana Hub:</strong> {COMPANY_INFO.hyderabadHub}</span>
            </div>

          </div>

          {/* Right Column (5 Cols): Big Construction Images & Interactive Instant Estimator */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Visual Hero Showcase with Interactive Working Image Switcher */}
            <div className="rounded-2xl overflow-hidden border-2 border-blue-500/40 bg-[#0F1E36] shadow-2xl relative group">
              
              {/* Image Tabs */}
              <div className="p-2 bg-[#071527] border-b border-[#1E3A5F] flex items-center justify-between text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setHeroImageTab('family')}
                  className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                    heroImageTab === 'family' 
                      ? 'bg-[#0066CC] text-white shadow-md' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Heart className="w-3.5 h-3.5 text-amber-400" />
                  <span>Happy Family</span>
                </button>
                <button
                  type="button"
                  onClick={() => setHeroImageTab('villa')}
                  className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                    heroImageTab === 'villa' 
                      ? 'bg-[#0066CC] text-white shadow-md' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Luxury Villa</span>
                </button>
                <button
                  type="button"
                  onClick={() => setHeroImageTab('steel')}
                  className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                    heroImageTab === 'steel' 
                      ? 'bg-[#0066CC] text-white shadow-md' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <CalendarCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Steel Works</span>
                </button>
              </div>

              {/* Big High-Impact Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                <img
                  src={heroImages[heroImageTab].url}
                  alt={heroImages[heroImageTab].badge}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-[#0F1E36]/30 to-transparent" />

                {/* Overlaid Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-md bg-[#071527]/90 text-cyan-300 font-bold text-xs border border-blue-500/40 backdrop-blur-md shadow-md">
                    {heroImages[heroImageTab].tag}
                  </span>
                </div>

                {/* Bottom Overlaid Caption */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="font-extrabold text-sm sm:text-base leading-snug drop-shadow-md">
                    {heroImages[heroImageTab].badge}
                  </div>
                  <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                    {heroImages[heroImageTab].sub}
                  </p>
                </div>
              </div>

              {/* Instant Plot Estimator Quick Box below Image */}
              <div className="p-5 border-t border-[#1E3A5F]">
                {!estimateGenerated ? (
                  <form onSubmit={handleInstantQuote} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-cyan-300">
                        Quick Telangana &amp; AP Estimator
                      </span>
                      <span className="text-xs font-bold text-amber-400">Zero Price Escalation</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <select
                        value={plotYards}
                        onChange={(e) => setPlotYards(e.target.value)}
                        className="py-1.5 px-2.5 rounded-lg text-xs bg-[#071527] border border-[#1E3A5F] text-white focus:outline-none focus:border-cyan-400"
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
                        className="py-1.5 px-2.5 rounded-lg text-xs bg-[#071527] border border-[#1E3A5F] text-white focus:outline-none focus:border-cyan-400"
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
                        className="py-1.5 px-2.5 rounded-lg text-xs bg-[#071527] border border-[#1E3A5F] text-white focus:outline-none focus:border-cyan-400 placeholder:text-slate-500"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Mobile Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="py-1.5 px-2.5 rounded-lg text-xs bg-[#071527] border border-[#1E3A5F] text-white focus:outline-none focus:border-cyan-400 placeholder:text-slate-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 px-3 rounded-xl font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#00A3FF] via-[#0066CC] to-[#004099] hover:brightness-110 shadow-md shadow-blue-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                      <span>Calculate Instant BOQ &amp; 3D Plan</span>
                    </button>
                  </form>
                ) : (
                  <div className="py-2 space-y-2 text-center">
                    <div className="flex items-center justify-between text-xs text-slate-300 bg-[#071527] p-2.5 rounded-xl border border-[#1E3A5F]">
                      <span>{plotYards} Sq.Yds ({floors}):</span>
                      <strong className="text-cyan-400 text-sm font-black">
                        ₹{costEstimateMin.toFixed(2)}L – ₹{costEstimateMax.toFixed(2)} Lakhs
                      </strong>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setEstimateGenerated(false)}
                        className="flex-1 py-1.5 text-xs text-slate-400 hover:text-white"
                      >
                        Recalculate
                      </button>
                      <button
                        type="button"
                        onClick={onOpenConsultation}
                        className="flex-1 py-1.5 px-3 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-500"
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
