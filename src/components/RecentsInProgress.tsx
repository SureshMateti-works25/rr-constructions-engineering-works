import { useState } from 'react';
import { 
  Activity, 
  Video, 
  MapPin, 
  FileCheck, 
  ShieldCheck, 
  Radio, 
  Building2, 
  ChevronRight,
  Download,
  Eye
} from 'lucide-react';
import { RECENTS_IN_PROGRESS_DATA } from '../data/builderData';
import type { ActiveProjectProgress } from '../types';
import { QCAuditModal } from './QCAuditModal';

interface RecentsInProgressProps {
  onOpenConsultation: (note?: string) => void;
}

export function RecentsInProgress({ onOpenConsultation }: RecentsInProgressProps) {
  const [selectedZone, setSelectedZone] = useState<'all' | 'west' | 'central' | 'north'>('all');
  const [activeCctvProject, setActiveCctvProject] = useState<ActiveProjectProgress | null>(null);
  const [isQCAuditModalOpen, setIsQCAuditModalOpen] = useState(false);

  const filteredProjects = RECENTS_IN_PROGRESS_DATA.filter((project) => {
    if (selectedZone === 'west') {
      return project.locality.includes('Tellapur') || project.locality.includes('Kokapet') || project.locality.includes('Manikonda');
    }
    if (selectedZone === 'central') {
      return project.locality.includes('Jubilee Hills');
    }
    if (selectedZone === 'north') {
      return project.locality.includes('Bachupally');
    }
    return true;
  });

  return (
    <section id="in-progress" className="py-20 md:py-28 bg-[#F8FAFC] text-slate-900 relative overflow-hidden border-t border-slate-200">
      
      {/* Background Lighting Elements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-b from-orange-500/5 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
            </span>
            Real-Time Site Activity &amp; QC Verification
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
            Recents in Progress <span className="text-orange-600">Across AP &amp; Telangana</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Track active civil, structural steel, and turnkey construction milestones on our live sites with verified NABL laboratory strength test reports and high-definition PTZ site cameras.
          </p>

          {/* Key Metric Highlights Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="p-2 sm:p-3">
              <div className="text-xl sm:text-2xl font-black text-[#0B2545]">16+</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Active Sites (AP &amp; TS)</div>
            </div>
            <div className="p-2 sm:p-3 border-l border-slate-100">
              <div className="text-xl sm:text-2xl font-black text-emerald-600">100%</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium">On-Time Milestones</div>
            </div>
            <div className="p-2 sm:p-3 border-l border-slate-100">
              <div className="text-xl sm:text-2xl font-black text-orange-600">430+</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Digital QC Sign-Offs</div>
            </div>
            <div className="p-2 sm:p-3 border-l border-slate-100">
              <div className="text-xl sm:text-2xl font-black text-[#0B2545]">24/7</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Live App CCTV Streaming</div>
            </div>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              type="button"
              onClick={() => setSelectedZone('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedZone === 'all'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/20'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs'
              }`}
            >
              All Active Sites ({RECENTS_IN_PROGRESS_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedZone('west')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedZone === 'west'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/20'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs'
              }`}
            >
              West Zone (Tellapur, Kokapet, Manikonda)
            </button>
            <button
              type="button"
              onClick={() => setSelectedZone('central')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedZone === 'central'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/20'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs'
              }`}
            >
              Central Zone (Jubilee Hills)
            </button>
            <button
              type="button"
              onClick={() => setSelectedZone('north')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedZone === 'north'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/20'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs'
              }`}
            >
              North Zone (Bachupally)
            </button>
          </div>
        </div>

        {/* Construction Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-orange-500 transition-all duration-300 flex flex-col overflow-hidden shadow-xs hover:shadow-xl group"
            >
              {/* Site Photo & Live Recording Badge */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.siteImage}
                  alt={project.projectName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                {/* Top Badge: Live On-Site Status */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white text-xs font-bold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                  </span>
                  ACTIVE CONSTRUCTION
                </div>

                {/* Top Right: Live CCTV Stream Pill */}
                {project.hasLiveCCTV && (
                  <button
                    type="button"
                    onClick={() => setActiveCctvProject(project)}
                    className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold backdrop-blur-md border border-orange-400/40 shadow-sm transition-all hover:scale-105 cursor-pointer"
                    title="Open Live CCTV Stream"
                  >
                    <Radio className="w-3 h-3 text-amber-300 animate-pulse" />
                    LIVE CAM
                  </button>
                )}

                {/* Bottom Overlay: Locality & Plot Spec */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <div className="text-xs text-orange-400 font-semibold flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.locality}
                    </div>
                    <div className="text-sm font-bold text-white leading-snug drop-shadow-md">
                      {project.projectName}
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-900/90 text-slate-200 border border-slate-700">
                    {project.dayCount}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                
                {/* House Type & Specifications */}
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                    <span className="flex items-center gap-1 font-medium text-slate-700">
                      <Building2 className="w-3.5 h-3.5 text-orange-600" />
                      {project.plotSpec}
                    </span>
                    <span className="text-[#0B2545] font-semibold">{project.houseType}</span>
                  </div>

                  {/* Current Active Stage */}
                  <div className="mt-3">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5 text-orange-600" />
                      Current Construction Stage
                    </div>
                    <div className="text-sm font-semibold text-slate-900 bg-slate-50 p-2.5 rounded-lg border border-slate-200 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                      <span className="line-clamp-1">{project.currentStage}</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar with Animated Shimmer */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-700">Milestone Progress</span>
                    <span className="text-orange-600 font-mono text-sm">{project.progressPercent}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden p-0.5 border border-slate-200">
                    <div
                      className="bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500 h-full rounded-full transition-all duration-1000 shadow-xs"
                      style={{ width: `${project.progressPercent}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>Est. Handover: <strong className="text-slate-800">{project.estimatedHandover}</strong></span>
                    <span>Client: <strong className="text-slate-800">{project.clientInitials} ({project.clientLocation})</strong></span>
                  </div>
                </div>

                {/* Recent QC Lab Test Milestone */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-800 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-emerald-950">Latest Verified QC: </span>
                    <span>{project.recentMilestone}</span>
                  </div>
                </div>

                {/* Actions Bar */}
                <div className="pt-2 flex items-center justify-between gap-2 border-t border-slate-100">
                  {project.hasLiveCCTV ? (
                    <button
                      type="button"
                      onClick={() => setActiveCctvProject(project)}
                      className="px-3 py-2 rounded-xl bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Video className="w-3.5 h-3.5 text-orange-600" />
                      View Stream
                    </button>
                  ) : (
                    <span className="text-xs text-slate-400 italic">Site Camera Offline</span>
                  )}

                  <button
                    type="button"
                    onClick={() => onOpenConsultation(`Live Site Visit Booking for: ${project.projectName} (${project.locality})`)}
                    className="flex-1 px-3 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:brightness-110 text-white text-xs font-bold shadow-md shadow-orange-500/20 flex items-center justify-center gap-1 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <span>Book Site Walkthrough</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Transparency Commitment Box */}
        <div className="mt-12 bg-gradient-to-r from-[#0B2545] via-[#0F1E36] to-[#0B2545] rounded-2xl border border-slate-700 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-white">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-orange-400 shrink-0 shadow-md">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-bold text-white flex items-center gap-2">
                <span>100% NABL-Accredited Lab Test Certificate Guarantee</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  ISO 9001:2015
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                We never compromise on structural strength. Every single concrete slab pour undergoes 7-day and 28-day crushing cube tests. The original stamped laboratory certificates are uploaded directly to the client portal before milestone invoicing.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href="/docs/rr-constructions-sample-qc-audit-report.pdf"
              download="RR_Constructions_Sample_QC_Audit_Report.pdf"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download QC Audit (PDF)</span>
            </a>
            <button
              type="button"
              onClick={() => setIsQCAuditModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer"
            >
              <Eye className="w-4 h-4 text-orange-400" />
              <span>View Audit Report</span>
            </button>
          </div>
        </div>

      </div>

      {/* Interactive CCTV Live Stream Simulator Modal */}
      {activeCctvProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in"
          onClick={() => setActiveCctvProject(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#0F1E36] rounded-2xl overflow-hidden border border-[#1E3A5F] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#071527] p-4 border-b border-[#1E3A5F] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" />
                </span>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>{activeCctvProject.projectName}</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0B2545] text-cyan-300 border border-[#1E3A5F]">
                      {activeCctvProject.cameraName || 'Cam 01: High-Definition Live Stream'}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400">{activeCctvProject.locality} • Stage: {activeCctvProject.currentStage}</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveCctvProject(null)}
                className="w-8 h-8 rounded-full bg-[#0B2545] hover:bg-[#152a48] text-slate-300 flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Video Canvas Simulation */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeCctvProject.siteImage}
                alt={activeCctvProject.projectName}
                className="w-full h-full object-cover filter brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

              {/* PTZ Camera HUD Simulation */}
              <div className="absolute top-4 left-4 font-mono text-[11px] text-cyan-300 bg-black/70 px-2 py-1 rounded backdrop-blur-sm border border-cyan-400/30">
                REC ● 24 FPS • 1080P HD • SECURE ENCRYPTED FEED
              </div>
              <div className="absolute top-4 right-4 font-mono text-[11px] text-amber-300 bg-black/70 px-2 py-1 rounded backdrop-blur-sm">
                RR CONSTRUCTIONS LIVE STREAM
              </div>

              {/* Center PTZ crosshair */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <div className="w-20 h-20 border border-dashed border-cyan-400/50 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                </div>
              </div>

              {/* Bottom HUD */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200 bg-black/80 p-2.5 rounded-xl backdrop-blur-md border border-slate-700">
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400 font-bold">PTZ Camera Online</span>
                  <span className="text-slate-500">|</span>
                  <span>Progress: <strong className="text-white">{activeCctvProject.progressPercent}%</strong></span>
                  <span className="text-slate-500">|</span>
                  <span>{activeCctvProject.dayCount}</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCctvProject(null);
                    onOpenConsultation(`Inquiry from Live CCTV feed of: ${activeCctvProject.projectName}`);
                  }}
                  className="px-3 py-1 rounded-lg bg-[#0066CC] hover:bg-[#0052CC] text-white font-bold text-xs transition-colors"
                >
                  Book On-Site Visit
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Sample 430-Point Stage-Gate QC Audit Report & NABL Certificate Modal */}
      <QCAuditModal 
        isOpen={isQCAuditModalOpen} 
        onClose={() => setIsQCAuditModalOpen(false)} 
      />

    </section>
  );
}
