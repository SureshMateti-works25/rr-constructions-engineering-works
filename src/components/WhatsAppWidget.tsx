import React, { useState } from 'react';
import { MessageSquare, X, Calculator, Calendar, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/builderData';

interface WhatsAppWidgetProps {
  onOpenConsultation: () => void;
  onScrollToEstimator: () => void;
  onOpenFlyer: () => void;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  onOpenConsultation,
  onScrollToEstimator,
  onOpenFlyer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsAppDirect = (msg: string) => {
    const cleanNumber = COMPANY_INFO.phone.replace(/[^0-9]/g, '');
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${cleanNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div id="whatsapp-float" className="fixed bottom-6 right-6 z-40 no-print">
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-white border border-slate-200 shadow-2xl p-5 text-slate-900 space-y-4 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold shadow-md">
                <MessageSquare className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm text-[#0B2545]">
                  {COMPANY_INFO.shortName} Concierge
                </h4>
                <span className="text-[10px] text-emerald-600 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Proprietor {COMPANY_INFO.proprietor} Online Now
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Welcome to <strong className="text-slate-900">{COMPANY_INFO.name}</strong>. Planning a residential construction, metal structural shed, 2D/3D design, or industrial epoxy flooring?
          </p>

          <div className="space-y-2">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onScrollToEstimator();
              }}
              className="w-full text-left p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors flex items-center gap-2.5 text-xs text-slate-800 cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-orange-600 shrink-0" />
              <span>Calculate Turnkey Construction Cost</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenConsultation();
              }}
              className="w-full text-left p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors flex items-center gap-2.5 text-xs text-slate-800 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-orange-600 shrink-0" />
              <span>Book Free On-Site Plot Survey</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenFlyer();
              }}
              className="w-full text-left p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors flex items-center gap-2.5 text-xs text-slate-800 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-orange-600 shrink-0" />
              <span>View &amp; Print Official Flyer</span>
            </button>

            <button
              type="button"
              onClick={() => openWhatsAppDirect(`Hello Ram garu, I am contacting RR Constructions & Engineering Works regarding my project.`)}
              className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp ({COMPANY_INFO.phone})</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-105 transition-all cursor-pointer relative"
        aria-label="Contact via WhatsApp or Concierge"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30" />
        <MessageSquare className="w-6 h-6 fill-current text-white relative z-10" />
      </button>
    </div>
  );
};
