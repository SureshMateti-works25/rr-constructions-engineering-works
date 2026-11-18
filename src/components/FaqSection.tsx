import React, { useState } from 'react';
import { ChevronDown, HelpCircle, CheckCircle2 } from 'lucide-react';
import { FAQS_DATA } from '../data/builderData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 bg-[#F8FAFC] text-slate-900 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-orange-700 bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-orange-600" />
            Clear Answers • Transparent Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B2545] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about turnkey residential construction, metal PEB structural works, 
            zero price escalation guarantee, and NABL certified materials across Andhra Pradesh &amp; Telangana.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-slate-200 hover:border-orange-500/60 transition-all overflow-hidden shadow-xs hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase font-bold text-orange-700 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 shrink-0">
                      {faq.category}
                    </span>
                    <span className="font-sans font-bold text-sm sm:text-base text-[#0B2545]">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 transition-all duration-300 ${
                    isOpen ? 'rotate-180 bg-orange-50 text-orange-600 border-orange-300' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/60 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
