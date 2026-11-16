import React from 'react';
import { 
  Building2, 
  Calculator, 
  Layers, 
  Cpu, 
  HelpCircle, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import type { PageId } from './PageHeader';

interface HomeDivisionsGridProps {
  onNavigate: (page: PageId) => void;
  onOpenFlyer: () => void;
  onOpenConsultation: () => void;
}

export const HomeDivisionsGrid: React.FC<HomeDivisionsGridProps> = ({
  onNavigate,
  onOpenFlyer,
  onOpenConsultation,
}) => {
  const sections = [
    {
      id: 'services' as PageId,
      badge: 'Core Divisions',
      title: 'Construction & Engineering Divisions',
      desc: 'Residential villas, commercial towers, industrial PEB sheds, heavy trusses, 2D/3D CAD elevations & mirror-finish epoxy flooring.',
      icon: Building2,
      accentColor: 'from-blue-600 to-cyan-500',
      highlights: ['Constructions (Turnkey)', 'Metal Structural Works', 'Designing Works (AutoCAD)', 'Flooring Works (Epoxy/PU)'],
      ctaText: 'Explore All Divisions',
    },
    {
      id: 'packages' as PageId,
      badge: 'Transparent Pricing',
      title: 'Packages & Live Cost Estimator',
      desc: 'Transparent turnkey packages with zero price escalation, real-time plot yard calculator, and itemized BOQ breakdowns.',
      icon: Calculator,
      accentColor: 'from-cyan-500 to-blue-600',
      highlights: ['Standard, Premium & Luxury Tiers', 'Live Plot Yard BOQ Calculator', 'Certified Brand Materials List', 'Escrow Milestone Payments'],
      ctaText: 'View Packages & Estimator',
    },
    {
      id: 'projects' as PageId,
      badge: 'Portfolio & Live Sites',
      title: 'House Typologies & Active Sites',
      desc: 'Interactive 4-view working image accordions (Day Elevation, Night Facade, 3D CAD Plan, Living Pavilion) plus live site trackers.',
      icon: Layers,
      accentColor: 'from-indigo-600 to-blue-500',
      highlights: ['6 Interactive House Typologies', 'Multi-View CAD & Night Elevations', 'Live Site Milestones Tracker', 'Completed Landmark Villas'],
      ctaText: 'Browse Projects & Typologies',
    },
    {
      id: 'process' as PageId,
      badge: 'Engineering Rigor',
      title: '6-Stage Process & Quality Standards',
      desc: 'Precision execution from architectural approval and soil lab tests to 24/7 live CCTV streaming for homeowners.',
      icon: Cpu,
      accentColor: 'from-blue-500 to-sky-400',
      highlights: ['6-Stage Quality Milestones', '24/7 Live CCTV Site Monitoring', 'NABL Soil & Concrete Lab Tests', 'Turnkey Griha Pravesham Handover'],
      ctaText: 'View Process & Standards',
    },
    {
      id: 'faq' as PageId,
      badge: 'Advisory & Support',
      title: 'FAQs & Direct Contact Desk',
      desc: 'Clear guidance on building permissions (DTCP/HMDA), 100% Vastu Shastra compliance, structural warranties & office visits.',
      icon: HelpCircle,
      accentColor: 'from-sky-500 to-indigo-600',
      highlights: ['DTCP / HMDA Municipal Approvals', '100% Vastu Shastra Adherence', '10-Year Structural Guarantee', 'Krishna & Hyderabad Hubs'],
      ctaText: 'Read FAQs & Contact Us',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#071527] relative border-b border-[#1E3A5F]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-[#0066CC]/20 border border-cyan-400/30 text-cyan-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Our Services &amp; Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Comprehensive Engineering &amp; Construction Solutions
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            From turnkey residential homes and heavy industrial PEB structures to precision 2D/3D CAD elevations and epoxy flooring, explore our complete range of capabilities.
          </p>
        </div>

        {/* 5-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((sec) => {
            const Icon = sec.icon;
            return (
              <div
                key={sec.id}
                onClick={() => onNavigate(sec.id)}
                className="group relative rounded-2xl bg-gradient-to-b from-[#0F223D] to-[#0A1A2F] border border-[#1E3A5F] hover:border-cyan-400/60 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer flex flex-col justify-between"
              >
                {/* Header with Icon and Badge */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sec.accentColor} flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded-full">
                      {sec.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {sec.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {sec.desc}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="mt-4 pt-4 border-t border-[#1E3A5F]/60 space-y-2">
                    {sec.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-6 pt-4 border-t border-[#1E3A5F]/40 flex items-center justify-between text-xs font-bold text-cyan-400 group-hover:text-cyan-300">
                  <span>{sec.ctaText}</span>
                  <div className="w-7 h-7 rounded-lg bg-[#16335C] group-hover:bg-[#0066CC] flex items-center justify-center text-white transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Quick Action Card (Flyer & VIP Visit) */}
          <div className="rounded-2xl bg-gradient-to-br from-[#0066CC]/20 via-[#0B2545] to-[#071527] border-2 border-cyan-400/40 p-6 sm:p-7 flex flex-col justify-between shadow-lg shadow-cyan-500/10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-amber-300 bg-amber-950/40 border border-amber-500/30 px-2.5 py-1 rounded-full mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Visiting Card Handout</span>
              </div>

              <h3 className="text-lg font-bold text-white">
                Download Official Printable Flyer
              </h3>

              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Get the complete dual-sided print brochure mirroring Page 1 and Page 2 of RR Constructions visiting card with all specifications, contact numbers &amp; GSTIN details.
              </p>
            </div>

            <div className="mt-6 space-y-2.5">
              <button
                type="button"
                onClick={onOpenFlyer}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0066CC] to-[#00A3FF] hover:brightness-110 transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                <span>Download Print-Ready Flyer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full py-2 px-4 rounded-xl text-xs font-bold text-cyan-300 bg-[#0F223D] hover:bg-[#16335C] border border-[#1E3A5F] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book VIP Site Consultation</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
