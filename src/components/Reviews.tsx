import React from 'react';
import { Star, CheckCircle2, ThumbsUp, Briefcase } from 'lucide-react';
import { TESTIMONIALS_DATA, COMPANY_INFO } from '../data/builderData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Rating Aggregate */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200">
            Client Voices &amp; Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Trusted by Doctors, IT Executives &amp; NRI Families
          </h2>
          
          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-slate-900 font-extrabold text-lg font-sans">
              {COMPANY_INFO.satisfactionRate} Rating
            </span>
            <span className="text-slate-500 text-xs font-medium">
              (Over 350+ Verified Homeowners across Google &amp; Trustpilot)
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl bg-white border border-slate-200 hover:border-[#EA580C] transition-all p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 group"
            >
              <div className="space-y-4">
                {/* Rating & Project Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono font-bold">
                    {t.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{t.feedback}&rdquo;
                </p>

                {/* Measurable Milestone Impact */}
                <div className="p-2.5 rounded-lg bg-orange-50 border border-orange-200 text-[11px] text-[#EA580C] font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
                  <span>{t.metrics}</span>
                </div>
              </div>

              {/* Client Designation & Verified Tag (No personal names, No personal photos) */}
              <div className="pt-4 border-t border-slate-100 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center shrink-0 text-[#EA580C]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-sans font-bold text-sm text-slate-900 group-hover:text-[#EA580C] transition-colors leading-snug">
                    {t.role}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[11px] text-slate-500 font-medium">{t.location}</span>
                    <span className="text-slate-300">•</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      Verified Client
                    </span>
                  </div>
                  <p className="text-[10px] text-[#EA580C] font-semibold mt-0.5">
                    {t.projectTitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Handover Ceremony Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-orange-500 to-[#EA580C] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-orange-500/20">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-sans font-extrabold text-xl text-white">
              The Griha Pravesham (Handover) Experience
            </h3>
            <p className="text-xs sm:text-sm text-orange-100 max-w-xl">
              See what housewarming day feels like when an architectural vision becomes home. 
              Ceremonial gold key presentation, digital warranty vault transfer, and family walkthroughs.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 bg-white px-4 py-2.5 rounded-xl shadow-xs">
              <ThumbsUp className="w-4 h-4 text-[#EA580C]" />
              <span>99.6% On-Time Handover Record</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
