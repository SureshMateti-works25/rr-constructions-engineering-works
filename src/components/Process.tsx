import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, FileCheck2 } from 'lucide-react';
import { PROCESS_STAGES } from '../data/builderData';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const currentStage = PROCESS_STAGES.find((s) => s.step === activeStep) || PROCESS_STAGES[0];

  return (
    <section id="process" className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200">
            Predictable Construction Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Our 6-Stage Construction Journey with 430+ QC Checks
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            No unexpected delays or chaotic site conditions. Every project proceeds through strict, 
            audited quality gates where milestone payments are only released after verified lab test approvals.
          </p>
        </div>

        {/* Stepper Tabs Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
          {PROCESS_STAGES.map((stage) => (
            <button
              key={stage.step}
              type="button"
              onClick={() => setActiveStep(stage.step)}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                activeStep === stage.step
                  ? 'bg-gradient-to-r from-[#EA580C] to-[#C2410C] text-white border-[#EA580C] shadow-lg shadow-orange-500/20 font-bold'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${
                  activeStep === stage.step ? 'bg-white text-[#EA580C]' : 'bg-slate-200 text-slate-700'
                }`}>
                  Stage {stage.step}
                </span>
                <Clock className={`w-3.5 h-3.5 ${activeStep === stage.step ? 'text-white' : 'text-[#EA580C]'}`} />
              </div>

              <span className="text-xs font-bold line-clamp-1">
                {stage.title}
              </span>
              <span className={`text-[10px] mt-1 ${activeStep === stage.step ? 'text-orange-100 font-medium' : 'text-slate-500'}`}>
                {stage.duration}
              </span>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Card */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Stage Left: Overview & Checkpoints */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#EA580C] bg-orange-100 px-3 py-1 rounded-md border border-orange-200">
                    Stage {currentStage.step} of 6 • {currentStage.duration}
                  </span>
                </div>
                <h3 className="font-sans font-black text-2xl sm:text-3xl text-slate-900">
                  {currentStage.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {currentStage.summary}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Critical Execution Protocols:
                </h4>
                <div className="space-y-2.5">
                  {currentStage.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stage Right: Quality Gate & Escrow Payment */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Quality Gate Audit Box */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Mandatory Quality Gate Signoff</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                  {currentStage.qualityGate}
                </p>
                <p className="text-[11px] text-slate-500">
                  Inspected and stamped by certified structural engineers with laboratory test reports before proceeding to the next stage.
                </p>
              </div>

              {/* Linked Milestone Payment */}
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0066CC]">
                  <FileCheck2 className="w-4 h-4" />
                  <span>Milestone Disbursement (Escrow Safe)</span>
                </div>
                <div className="text-2xl font-black text-slate-900 font-sans">
                  {currentStage.milestonePayment}
                </div>
                <p className="text-[11px] text-slate-700">
                  Your funds are protected. You only release milestone payments once the physical site milestones and NABL lab approvals are digitally verified on your RR Client Portal.
                </p>
              </div>

              {/* Step Navigation */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  disabled={activeStep === 1}
                  onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  ← Previous Stage
                </button>
                <button
                  type="button"
                  disabled={activeStep === 6}
                  onClick={() => setActiveStep((prev) => Math.min(6, prev + 1))}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-[#00A3FF] to-[#0066CC] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1 shadow-xs"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
