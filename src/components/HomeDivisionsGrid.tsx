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
    <section className="py-16 sm:py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-orange-50 border border-orange-200 text-orange-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Our Services &amp; Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B2545] tracking-tight">
            Explore RR Constructions by Service &amp; Expertise
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Review our engineering divisions, compare turnkey packages, test our live cost estimator, or inspect working architectural CAD designs.
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
                className="group relative rounded-2xl bg-white border border-slate-200 hover:border-orange-500 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 cursor-pointer flex flex-col justify-between shadow-xs"
              >
                {/* Header with Icon and Badge */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shadow-xs group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0B2545] bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full">
                      {sec.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {sec.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {sec.desc}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                    {sec.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-orange-600 group-hover:text-orange-700">
                  <span>{sec.ctaText}</span>
                  <div className="w-7 h-7 rounded-lg bg-orange-50 group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center text-orange-600 transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Quick Action Card (Flyer & VIP Visit) - Secondary Navy Structure */}
          <div className="rounded-2xl bg-gradient-to-br from-[#0B2545] via-[#0F1E36] to-[#0B2545] border border-slate-700 p-6 sm:p-7 flex flex-col justify-between shadow-xl text-white">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-amber-300 bg-orange-500/20 border border-orange-400/30 px-2.5 py-1 rounded-full mb-4">
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
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                <span>Download Print-Ready Flyer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full py-2 px-4 rounded-xl text-xs font-bold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer flex items-center justify-center gap-2"
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
