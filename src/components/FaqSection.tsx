import React, { useState } from 'react';
import { ChevronDown, HelpCircle, CheckCircle2 } from 'lucide-react';
import { FAQS_DATA } from '../data/builderData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#071527] text-white relative border-t border-[#1E3A5F]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300 bg-blue-900/40 px-3.5 py-1 rounded-full border border-blue-500/30">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            Clear Answers • Transparent Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
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
                className="rounded-2xl bg-[#0F1E36] border border-[#1E3A5F] hover:border-[#00A3FF]/60 transition-all overflow-hidden shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#122846] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase font-bold text-cyan-300 bg-blue-900/40 px-2.5 py-1 rounded-md border border-blue-500/30 shrink-0">
                      {faq.category}
                    </span>
                    <span className="font-sans font-bold text-sm sm:text-base text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-[#071527] flex items-center justify-center shrink-0 border border-[#1E3A5F] transition-all duration-300 ${
                    isOpen ? 'rotate-180 bg-blue-600/30 text-cyan-300 border-cyan-400' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-[#1E3A5F] bg-[#071527]/50 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
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
