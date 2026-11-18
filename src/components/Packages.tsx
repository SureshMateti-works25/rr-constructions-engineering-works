import React, { useState } from 'react';
import { Check, Sparkles, Calculator, Info, CheckCircle2 } from 'lucide-react';
import { PACKAGES_DATA, PACKAGE_COMPARISON } from '../data/builderData';

interface PackagesProps {
  onSelectPackageForEstimator: (packageId: string) => void;
  onOpenConsultation: (note?: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({
  onSelectPackageForEstimator,
  onOpenConsultation,
}) => {
  const [showComparisonTable, setShowComparisonTable] = useState(false);

  return (
    <section id="packages" className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-700 bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200 shadow-xs">
            Transparent Pricing • Zero Hidden Costs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Turnkey Construction Packages — AP &amp; Telangana
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Every package includes 100% fixed-price contracts, architectural designs, municipal plan sanction assistance, 
            lab-tested materials, and 24/7 mobile app CCTV live streaming.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PACKAGES_DATA.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl flex flex-col justify-between p-6 transition-all duration-300 relative ${
                pkg.popular
                  ? 'bg-white border-2 border-orange-500 shadow-xl shadow-orange-500/10 scale-102 ring-4 ring-orange-500/10'
                  : 'bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-extrabold text-[10px] uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-white" />
                  <span>Most Chosen Package</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold tracking-wider uppercase text-orange-600">
                    {pkg.tier}
                  </span>
                  <h3 className="font-sans font-bold text-xl text-[#0B2545] mt-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 min-h-[36px]">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Pricing Block */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-[#0B2545] font-sans">
                      {pkg.currencySymbol}{pkg.ratePerSqFt.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">/ sq.ft</span>
                  </div>
                  <span className="text-[10px] text-emerald-600 font-bold block mt-1">
                    ✓ All-inclusive: Material + Labor + BOQ + 430+ QC
                  </span>
                </div>

                <div className="text-[11px] text-slate-600">
                  <strong>Ideal for:</strong> {pkg.idealFor}
                </div>

                {/* Highlights List */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block">
                    Core Inclusions:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {pkg.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Package Actions */}
              <div className="pt-6 space-y-2 mt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onSelectPackageForEstimator(pkg.id)}
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white hover:brightness-110 shadow-md shadow-orange-500/20'
                      : 'bg-[#0B2545] text-white hover:bg-[#152a48]'
                  }`}
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Calculate In Estimator</span>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenConsultation(`Inquiry for ${pkg.name} (${pkg.currencySymbol}${pkg.ratePerSqFt}/sq.ft)`)}
                  className="w-full py-2 px-3 rounded-lg text-[11px] font-bold text-slate-600 hover:text-orange-600 transition-colors cursor-pointer text-center"
                >
                  Get Detailed Itemized BOQ →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table Toggle Button */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => setShowComparisonTable(!showComparisonTable)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-orange-700 bg-orange-50 hover:bg-orange-100 border border-orange-200 transition-all cursor-pointer"
          >
            <Info className="w-4 h-4 text-orange-600" />
            <span>
              {showComparisonTable
                ? 'Hide Side-by-Side Comparison'
                : 'Compare All 4 Packages Side-by-Side'}
            </span>
          </button>
        </div>

        {/* Detailed Comparison Matrix Table */}
        {showComparisonTable && (
          <div className="mt-8 rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xl overflow-x-auto">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <h3 className="font-sans font-bold text-base text-slate-900">
                Technical Specifications &amp; Material Brand Matrix
              </h3>
              <span className="text-xs text-slate-500 font-semibold">
                NABL lab testing certified on all cement and steel
              </span>
            </div>

            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/70 text-slate-700 font-bold uppercase tracking-wider">
                  <th className="p-3.5 sm:p-4 min-w-[180px]">Feature / Specification</th>
                  <th className="p-3.5 sm:p-4 min-w-[170px]">Elegance (₹1,879)</th>
                  <th className="p-3.5 sm:p-4 min-w-[200px] text-[#EA580C] bg-orange-50">
                    Premium (₹2,099) ★
                  </th>
                  <th className="p-3.5 sm:p-4 min-w-[170px]">Elite (₹2,249)</th>
                  <th className="p-3.5 sm:p-4 min-w-[170px]">Luxury (₹2,399+)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {PACKAGE_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
                      <span>{row.name}</span>
                    </td>
                    <td className="p-3.5 sm:p-4 text-slate-600">{row.elegance}</td>
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900 bg-orange-50/50">
                      {row.premium}
                    </td>
                    <td className="p-3.5 sm:p-4 text-slate-700">{row.elite}</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-slate-900">{row.luxury}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
};
