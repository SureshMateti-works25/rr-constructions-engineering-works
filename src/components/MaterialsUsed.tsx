import React, { useState } from 'react';
import { Shield, Award, X, Microscope } from 'lucide-react';
import { MATERIALS_DATA } from '../data/builderData';
import type { MaterialBrand } from '../types';

export const MaterialsUsed: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialBrand | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { label: 'All Materials', value: 'all' },
    { label: 'Steel & Rebar', value: 'Steel' },
    { label: 'Cement & Concrete', value: 'Cement' },
    { label: 'Electrical & Cables', value: 'Electrical' },
    { label: 'Plumbing & Drainage', value: 'Plumbing' },
    { label: 'Windows & Glazing', value: 'Windows & Glass' },
    { label: 'Sanitary Fixtures', value: 'Fixtures' },
  ];

  const filteredMaterials = activeCategory === 'all'
    ? MATERIALS_DATA
    : MATERIALS_DATA.filter((m) => m.category === activeCategory);

  return (
    <section id="materials" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] bg-orange-100 px-3.5 py-1 rounded-full border border-orange-200">
            100% Brand Authenticity
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Top-Tier Construction Materials with NABL Lab Reports
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We source directly from manufacturer authorized depots in Hyderabad. Every batch of steel and cement arrives 
            with mill test certificates and undergoes independent concrete cube crush tests in government-approved labs.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-[#EA580C] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-slate-200 hover:border-[#EA580C] transition-all p-6 flex flex-col justify-between space-y-5 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 group"
            >
              <div className="space-y-4">
                {/* Header with Category Badge and Brand Name */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#EA580C] bg-orange-50 px-2.5 py-0.5 rounded border border-orange-200">
                    {item.category}
                  </span>
                  <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Manufacturer Direct</span>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0">
                    <Microscope className="w-6 h-6 text-[#EA580C]" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg text-slate-900 group-hover:text-[#EA580C] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#EA580C] font-semibold">
                      Grade: {item.grade}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.specification}
                </p>

                {/* Quality Testing Protocol */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block">
                    Quality Gate &amp; Testing:
                  </span>
                  <p className="text-xs text-slate-700 font-medium">
                    {item.testingFrequency}
                  </p>
                </div>
              </div>

              {/* Bottom Warranty & Test Report Button */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <span className="text-[11px] text-emerald-700 font-bold">
                  ✓ {item.warranty}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedMaterial(item)}
                  className="py-1.5 px-3 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-[#EA580C] hover:text-white border border-slate-200 transition-colors cursor-pointer"
                >
                  Inspect Standards
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Accessible Material Quality Standard Modal */}
      {selectedMaterial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={() => setSelectedMaterial(null)}
          ></div>

          <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 space-y-5">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">
                  Material Specification Standard
                </span>
                <h3 className="font-sans font-black text-2xl text-slate-900 mt-1">
                  {selectedMaterial.name}
                </h3>
                <span className="text-xs text-slate-600 font-mono">
                  Standard: {selectedMaterial.grade}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedMaterial(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Technical Specification
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedMaterial.specification}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-500 block text-[10px] font-bold">On-Site QC Frequency</span>
                <span className="font-bold text-slate-900 mt-0.5 block">
                  {selectedMaterial.testingFrequency}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-500 block text-[10px] font-bold">Assurance Guarantee</span>
                <span className="font-bold text-emerald-700 mt-0.5 block">
                  {selectedMaterial.warranty}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-slate-800 flex items-start gap-2.5">
              <Award className="w-4 h-4 text-[#0066CC] shrink-0 mt-0.5" />
              <span>
                All 430+ QC test certificates are uploaded to your RR Client Portal before raising milestone invoices.
              </span>
            </div>

            <button
              type="button"
              onClick={() => setSelectedMaterial(null)}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#00A3FF] to-[#0066CC] hover:brightness-110 cursor-pointer"
            >
              Done &amp; Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
