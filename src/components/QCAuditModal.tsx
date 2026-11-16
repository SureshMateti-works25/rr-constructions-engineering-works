import React, { useState } from 'react';
import { 
  X, 
  Download, 
  FileCheck2, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  FlaskConical
} from 'lucide-react';

interface QCAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QCAuditModal: React.FC<QCAuditModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'structural' | 'mep' | 'handover'>('summary');

  if (!isOpen) return null;

  const pdfUrl = '/docs/rr-constructions-sample-qc-audit-report.pdf';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-[#0B1B33] border border-[#1E3A5F] rounded-2xl shadow-2xl z-10 max-h-[94dvh] overflow-hidden flex flex-col text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="p-4 sm:p-5 bg-[#071527] border-b border-[#1E3A5F] flex flex-wrap items-center justify-between gap-3 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00A3FF] to-[#0066CC] flex items-center justify-center text-white shadow-md shrink-0">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                  DOC # RRC-QC-2026-HYD-0428
                </span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  100% QC PASSED
                </span>
              </div>
              <h2 className="font-sans font-bold text-base sm:text-lg text-white mt-0.5">
                430-Point Stage-Gate Quality Audit &amp; NABL Lab Report
              </h2>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              download="RR_Constructions_Sample_QC_Audit_Report.pdf"
              className="px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#00A3FF] to-[#0066CC] hover:from-[#0092e6] hover:to-[#0055b3] text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              title="Download Stamped PDF"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex px-3 py-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold items-center gap-1.5 transition-all cursor-pointer"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              <span>Open File</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Audit Meta Banner */}
        <div className="bg-[#09182E] px-4 sm:px-6 py-3 border-b border-[#1E3A5F]/60 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div>
            <span className="text-slate-400 text-[10px] uppercase font-bold block">Audited Project</span>
            <span className="text-slate-200 font-semibold">Tellapur Duplex Villa (Plot #24)</span>
          </div>
          <div>
            <span className="text-slate-400 text-[10px] uppercase font-bold block">Testing Laboratory</span>
            <span className="text-emerald-400 font-semibold">NABL Accredited (TC-8492)</span>
          </div>
          <div>
            <span className="text-slate-400 text-[10px] uppercase font-bold block">Chief Structural QA</span>
            <span className="text-slate-200 font-semibold">Er. K. Ramakrishna, M.Tech</span>
          </div>
          <div>
            <span className="text-slate-400 text-[10px] uppercase font-bold block">Overall Audit Score</span>
            <span className="text-cyan-400 font-bold">430 / 430 Gates Cleared</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-[#071527] px-4 sm:px-6 pt-3 flex gap-2 border-b border-[#1E3A5F] overflow-x-auto text-xs">
          <button
            onClick={() => setActiveTab('summary')}
            className={`pb-2.5 px-3 font-bold border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'summary'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            NABL Lab Summary
          </button>
          <button
            onClick={() => setActiveTab('structural')}
            className={`pb-2.5 px-3 font-bold border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'structural'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Stages 1 - 3 (Soil, Steel &amp; Concrete)
          </button>
          <button
            onClick={() => setActiveTab('mep')}
            className={`pb-2.5 px-3 font-bold border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'mep'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Stages 4 - 5 (Masonry &amp; MEP Integrity)
          </button>
          <button
            onClick={() => setActiveTab('handover')}
            className={`pb-2.5 px-3 font-bold border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'handover'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Stage 6 (Waterproofing &amp; Signoff)
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
          
          {/* TAB 1: SUMMARY */}
          {activeTab === 'summary' && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-950/60 to-cyan-950/60 border border-cyan-500/30 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <FlaskConical className="w-5 h-5 text-cyan-400" />
                    <h3 className="font-bold text-white text-sm sm:text-base">
                      Independent Material Lab Certificate Overview
                    </h3>
                  </div>
                  <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                    Every batch of steel rebar, ready-mix concrete, and foundation soil underwent destructive laboratory testing. All parameters exceed IS Bureau of Indian Standards minimum thresholds.
                  </p>
                </div>
                <div className="shrink-0 text-center sm:text-right bg-[#071527] px-4 py-2.5 rounded-lg border border-[#1E3A5F]">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">28-Day Strength</span>
                  <span className="text-lg font-black text-emerald-400">139.5%</span>
                  <span className="text-[10px] text-slate-400 block">of design strength</span>
                </div>
              </div>

              {/* 4 Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="bg-[#071527] p-3.5 rounded-xl border border-[#1E3A5F]">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Soil SBC Load Test</span>
                  <div className="text-base font-bold text-white mt-1">240 kN/m²</div>
                  <p className="text-[11px] text-emerald-400 mt-0.5">Threshold: &gt; 180 kN/m² (&check; Passed)</p>
                </div>

                <div className="bg-[#071527] p-3.5 rounded-xl border border-[#1E3A5F]">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Tata Tiscon Fe 550D Rebar</span>
                  <div className="text-base font-bold text-white mt-1">586.4 N/mm²</div>
                  <p className="text-[11px] text-emerald-400 mt-0.5">Yield Stress (Min: 550 N/mm²)</p>
                </div>

                <div className="bg-[#071527] p-3.5 rounded-xl border border-[#1E3A5F]">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Concrete Cube Crushing</span>
                  <div className="text-base font-bold text-white mt-1">34.88 N/mm²</div>
                  <p className="text-[11px] text-emerald-400 mt-0.5">28-Day Avg (M25 Design req: 25.0)</p>
                </div>

                <div className="bg-[#071527] p-3.5 rounded-xl border border-[#1E3A5F]">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Ponding Waterproofing</span>
                  <div className="text-base font-bold text-white mt-1">72 Hours Held</div>
                  <p className="text-[11px] text-emerald-400 mt-0.5">Zero Seepage / Efflorescence</p>
                </div>
              </div>

              {/* Download prompt banner */}
              <div className="p-4 rounded-xl bg-[#0F223D] border border-cyan-500/20 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white text-xs block">Need the complete 2-page stamped PDF audit?</span>
                    <span className="text-slate-400 text-[11px]">Includes all 12 concrete pour records, batching slips, and test signatures.</span>
                  </div>
                </div>
                <a
                  href={pdfUrl}
                  download="RR_Constructions_Sample_QC_Audit_Report.pdf"
                  className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Stamped PDF (161 KB)</span>
                </a>
              </div>
            </div>
          )}

          {/* TAB 2: STRUCTURAL (STAGES 1-3) */}
          {activeTab === 'structural' && (
            <div className="space-y-4">
              <div className="rounded-xl bg-[#071527] border border-[#1E3A5F] overflow-hidden">
                <div className="p-3 bg-[#0F223D] border-b border-[#1E3A5F] flex items-center justify-between">
                  <span className="font-bold text-cyan-300 text-xs uppercase tracking-wide">
                    Stage 1: Geotechnical Soil Safe Bearing Capacity &amp; Earthwork
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded">
                    &check; PASSED
                  </span>
                </div>
                <div className="p-3 space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">IS 1888 Plate Load Test SBC:</span>
                    <span className="font-bold text-slate-200">240 kN/m² at 2.5m (Standard: &gt; 180 kN/m²)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Chemical Anti-Termite Barrier (IS 6313):</span>
                    <span className="font-bold text-slate-200">Chlorpyrifos 20% EC @ 5L/m² trench treated</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">PCC 1:4:8 Bed Concrete Leveling:</span>
                    <span className="font-bold text-slate-200">110mm thickness, optical laser leveled</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-[#071527] border border-[#1E3A5F] overflow-hidden">
                <div className="p-3 bg-[#0F223D] border-b border-[#1E3A5F] flex items-center justify-between">
                  <span className="font-bold text-cyan-300 text-xs uppercase tracking-wide">
                    Stage 2: Tata Tiscon Fe 550D Rebar &amp; Structural Steel (IS 1786)
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded">
                    &check; PASSED
                  </span>
                </div>
                <div className="p-3 space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">0.2% Proof Stress (Yield Strength):</span>
                    <span className="font-bold text-slate-200">586.4 N/mm² (Standard min: 550.0 N/mm²)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Ultimate Tensile Strength (UTS):</span>
                    <span className="font-bold text-slate-200">652.8 N/mm² (Standard min: 600.0 N/mm²)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Elongation Percentage:</span>
                    <span className="font-bold text-slate-200">17.2% (High Seismic Ductility min: 14.5%)</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">180° Cold Mandrel Bend Test (IS 1599):</span>
                    <span className="font-bold text-slate-200">Zero fissures or transverse cracks observed</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-[#071527] border border-[#1E3A5F] overflow-hidden">
                <div className="p-3 bg-[#0F223D] border-b border-[#1E3A5F] flex items-center justify-between">
                  <span className="font-bold text-cyan-300 text-xs uppercase tracking-wide">
                    Stage 3: 28-Day Concrete Cube Crushing Test (M25 Ready Mix)
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded">
                    &check; PASSED (139%)
                  </span>
                </div>
                <div className="p-3 space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Plinth &amp; Footings (Crushed Jan 09):</span>
                    <span className="font-bold text-slate-200">33.4 N/mm² (Design req: 25.0 N/mm²)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Ground Floor Columns &amp; Beams:</span>
                    <span className="font-bold text-slate-200">35.1 N/mm² (Design req: 25.0 N/mm²)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">1st Floor Roof Slab Pour:</span>
                    <span className="font-bold text-slate-200">36.2 N/mm² (Design req: 25.0 N/mm²)</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">2nd Floor Cantilever Terrace Slab:</span>
                    <span className="font-bold text-slate-200">34.8 N/mm² (Design req: 25.0 N/mm²)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MEP & MASONRY (STAGES 4-5) */}
          {activeTab === 'mep' && (
            <div className="space-y-4">
              <div className="rounded-xl bg-[#071527] border border-[#1E3A5F] overflow-hidden">
                <div className="p-3 bg-[#0F223D] border-b border-[#1E3A5F] flex items-center justify-between">
                  <span className="font-bold text-cyan-300 text-xs uppercase tracking-wide">
                    Stage 4: Masonry, Plumb-Line &amp; Optical Leveling
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded">
                    &check; PASSED
                  </span>
                </div>
                <div className="p-3 space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">AAC Block Strength (IS 2185 Pt 3):</span>
                    <span className="font-bold text-slate-200">Grade 1 &gt; 4.0 N/mm² (Recorded: 4.4 N/mm²)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Optical Laser Plumb (3m Height):</span>
                    <span className="font-bold text-slate-200">Deviation 1.1 mm (Tolerance max: &plusmn;3 mm)</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Lintel End Bearing Support:</span>
                    <span className="font-bold text-slate-200">230 mm cast bearing (Min requirement: 200 mm)</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-[#071527] border border-[#1E3A5F] overflow-hidden">
                <div className="p-3 bg-[#0F223D] border-b border-[#1E3A5F] flex items-center justify-between">
                  <span className="font-bold text-cyan-300 text-xs uppercase tracking-wide">
                    Stage 5: MEP (Electrical Megger, Earthing &amp; Plumbing Pressure)
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded">
                    &check; PASSED
                  </span>
                </div>
                <div className="p-3 space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Megger Conductor Insulation:</span>
                    <span className="font-bold text-slate-200">52.0 Mega-Ohms at 500V DC (Standard: &gt; 1.0 MΩ)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Earth Pit Resistance (Dual Chemical):</span>
                    <span className="font-bold text-slate-200">1.7 Ohms (Standard threshold: &lt; 2.5 Ohms)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Hydrostatic Water Line Pressure:</span>
                    <span className="font-bold text-slate-200">10 kg/cm² held continuously for 24h (Zero drop)</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Drainage Slope &amp; Smoke Test:</span>
                    <span className="font-bold text-slate-200">Slope 1:40 towards gully trap (100% flow cleared)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: HANDOVER (STAGE 6) */}
          {activeTab === 'handover' && (
            <div className="space-y-4">
              <div className="rounded-xl bg-[#071527] border border-[#1E3A5F] overflow-hidden">
                <div className="p-3 bg-[#0F223D] border-b border-[#1E3A5F] flex items-center justify-between">
                  <span className="font-bold text-cyan-300 text-xs uppercase tracking-wide">
                    Stage 6: Waterproofing 72h Ponding &amp; Handover Snag Clearance
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded">
                    &check; 100% CLEARED
                  </span>
                </div>
                <div className="p-3 space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Terrace &amp; Balcony 72-Hour Ponding:</span>
                    <span className="font-bold text-emerald-400">Zero dampness / zero efflorescence on soffit</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Bathroom Sunken Slab Seal:</span>
                    <span className="font-bold text-slate-200">Polymer modified bitumen double coat up to 300mm</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Tile Laser Alignment &amp; Hollow Sound:</span>
                    <span className="font-bold text-slate-200">100% checked with tapping mallet (Zero hollow tiles)</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">430-Point Standard Checklist:</span>
                    <span className="font-bold text-cyan-300">430 / 430 Points Verified &amp; Signed Off</span>
                  </div>
                </div>
              </div>

              {/* Signatures & Seal */}
              <div className="p-4 rounded-xl bg-[#071527] border border-[#1E3A5F] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="border border-slate-800 rounded-lg p-3">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Resident QC Engineer</div>
                  <div className="font-bold text-slate-200 mt-1">Er. S. R. Rao, BE (Civil)</div>
                  <span className="text-[10px] text-emerald-400 mt-0.5 block">&check; Digitally Certified</span>
                </div>
                <div className="border border-slate-800 rounded-lg p-3">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Chief Structural QA</div>
                  <div className="font-bold text-slate-200 mt-1">Dr. K. Ramakrishna, FIE</div>
                  <span className="text-[10px] text-emerald-400 mt-0.5 block">&check; Directorate Approved</span>
                </div>
                <div className="border border-slate-800 rounded-lg p-3">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Independent Material Lab</div>
                  <div className="font-bold text-slate-200 mt-1">NABL Lab #TC-8492</div>
                  <span className="text-[10px] text-emerald-400 mt-0.5 block">&check; Stamped &amp; Validated</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Sticky Footer */}
        <div className="p-3.5 sm:p-4 bg-[#071527] border-t border-[#1E3A5F] flex flex-wrap items-center justify-between gap-3">
          <div className="text-[11px] text-slate-400">
            <span>Guaranteed 10-Year Structural Warranty backed by RR Constructions</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer transition-colors"
            >
              Close
            </button>
            <a
              href={pdfUrl}
              download="RR_Constructions_Sample_QC_Audit_Report.pdf"
              className="px-4 py-2 rounded-lg bg-[#0066CC] hover:bg-[#0052a3] text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official PDF</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
