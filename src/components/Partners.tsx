import React from 'react';
import { Landmark, ShieldCheck, Award, CheckCircle } from 'lucide-react';
import { PARTNERS_DATA } from '../data/builderData';

export const Partners: React.FC = () => {
  const bankPartners = PARTNERS_DATA.filter((p) => p.type === 'Bank & Finance');
  const qualityPartners = PARTNERS_DATA.filter((p) => p.type === 'Quality & Standard');

  return (
    <section id="partners" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] bg-orange-100 px-3.5 py-1 rounded-full border border-orange-200">
            Institutional Trust &amp; Approvals
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Banking Partners &amp; Hyderabad Accreditations
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            All our project files are pre-approved by leading national banks for express 48-hour loan sanctioning 
            with zero title ambiguity. Fully compliant with Telangana TS-bPASS and GHMC norms.
          </p>
        </div>

        {/* Banking Partners */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center gap-2">
            <Landmark className="w-5 h-5 text-[#EA580C]" />
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
              Pre-Approved Banking &amp; Home Loan Partners
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {bankPartners.map((bank, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#EA580C] transition-all space-y-2 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans font-bold text-base text-slate-900">
                    {bank.name}
                  </span>
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                </div>
                <p className="text-xs text-slate-600">
                  {bank.tagline}
                </p>
                <div className="pt-2 text-[10px] text-[#EA580C] font-mono font-bold">
                  {bank.badge}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality & Standards Accreditations */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#EA580C]" />
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
              Quality Certifications &amp; Professional Memberships
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {qualityPartners.map((partner, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#EA580C] transition-all space-y-2 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans font-bold text-base text-slate-900">
                    {partner.name}
                  </span>
                  <Award className="w-4 h-4 text-[#EA580C]" />
                </div>
                <p className="text-xs text-slate-600">
                  {partner.tagline}
                </p>
                <div className="pt-2 text-[10px] text-slate-500 font-mono font-medium">
                  {partner.badge}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
