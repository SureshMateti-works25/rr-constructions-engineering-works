import { useState } from 'react';
import { 
  Activity, 
  Video, 
  MapPin, 
  FileCheck, 
  ShieldCheck, 
  ExternalLink, 
  Radio, 
  Building2, 
  ChevronRight
} from 'lucide-react';
import { RECENTS_IN_PROGRESS_DATA } from '../data/builderData';
import type { ActiveProjectProgress } from '../types';

interface RecentsInProgressProps {
  onOpenConsultation: (note?: string) => void;
}

export function RecentsInProgress({ onOpenConsultation }: RecentsInProgressProps) {
  const [selectedZone, setSelectedZone] = useState<'all' | 'west' | 'central' | 'north'>('all');
  const [activeCctvProject, setActiveCctvProject] = useState<ActiveProjectProgress | null>(null);

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
    <section id="in-progress" className="py-20 md:py-28 bg-[#071527] text-white relative overflow-hidden border-t border-[#1E3A5F]">
      
      {/* Background Lighting Elements */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-b from-blue-600/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/40 text-cyan-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            Real-Time Site Activity &amp; QC Verification
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Recents in Progress <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-300 bg-clip-text text-transparent">Across AP &amp; Telangana</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Track active civil, structural steel, and turnkey construction milestones on our live sites with verified NABL laboratory strength test reports and high-definition PTZ site cameras.
          </p>

          {/* Key Metric Highlights Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 bg-[#0F1E36] p-3 rounded-2xl border border-[#1E3A5F] text-center">
            <div className="p-2 sm:p-3">
              <div className="text-xl sm:text-2xl font-black text-white">16+</div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Active Sites (AP &amp; TS)</div>
            </div>
            <div className="p-2 sm:p-3 border-l border-[#1E3A5F]">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">100%</div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-medium">On-Time Milestones</div>
            </div>
            <div className="p-2 sm:p-3 border-l border-[#1E3A5F]">
              <div className="text-xl sm:text-2xl font-black text-cyan-400">430+</div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Digital QC Sign-Offs</div>
            </div>
            <div className="p-2 sm:p-3 border-l border-[#1E3A5F]">
              <div className="text-xl sm:text-2xl font-black text-sky-400">24/7</div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Live App CCTV Streaming</div>
            </div>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              type="button"
              onClick={() => setSelectedZone('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedZone === 'all'
                  ? 'bg-gradient-to-r from-[#00A3FF] to-[#0066CC] text-white shadow-lg shadow-blue-500/25 ring-2 ring-cyan-400/30'
                  : 'bg-[#0F1E36] hover:bg-[#1E3A5F] text-slate-300 border border-[#1E3A5F]'
              }`}
            >
              All Active Sites ({RECENTS_IN_PROGRESS_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedZone('west')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedZone === 'west'
                  ? 'bg-gradient-to-r from-[#00A3FF] to-[#0066CC] text-white shadow-lg shadow-blue-500/25 ring-2 ring-cyan-400/30'
                  : 'bg-[#0F1E36] hover:bg-[#1E3A5F] text-slate-300 border border-[#1E3A5F]'
              }`}
            >
              West Zone (Tellapur, Kokapet, Manikonda)
            </button>
            <button
              type="button"
              onClick={() => setSelectedZone('central')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedZone === 'central'
                  ? 'bg-gradient-to-r from-[#00A3FF] to-[#0066CC] text-white shadow-lg shadow-blue-500/25 ring-2 ring-cyan-400/30'
                  : 'bg-[#0F1E36] hover:bg-[#1E3A5F] text-slate-300 border border-[#1E3A5F]'
              }`}
            >
              Central Zone (Jubilee Hills)
            </button>
            <button
              type="button"
              onClick={() => setSelectedZone('north')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedZone === 'north'
                  ? 'bg-gradient-to-r from-[#00A3FF] to-[#0066CC] text-white shadow-lg shadow-blue-500/25 ring-2 ring-cyan-400/30'
                  : 'bg-[#0F1E36] hover:bg-[#1E3A5F] text-slate-300 border border-[#1E3A5F]'
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
              className="bg-[#0F1E36] rounded-2xl border border-[#1E3A5F] hover:border-[#00A3FF] transition-all duration-300 flex flex-col overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 group"
            >
              {/* Site Photo & Live Recording Badge */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.siteImage}
                  alt={project.projectName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-[#0F1E36]/30 to-transparent" />

                {/* Top Badge: Live On-Site Status */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#071527]/90 backdrop-blur-md border border-cyan-400/40 text-cyan-300 text-xs font-bold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                  </span>
                  ACTIVE CONSTRUCTION
                </div>

                {/* Top Right: Live CCTV Stream Pill */}
                {project.hasLiveCCTV && (
                  <button
                    type="button"
                    onClick={() => setActiveCctvProject(project)}
                    className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-600/90 hover:bg-blue-600 text-white text-xs font-semibold backdrop-blur-md border border-cyan-400/40 shadow-sm transition-all hover:scale-105"
                    title="Open Live CCTV Stream"
                  >
                    <Radio className="w-3 h-3 text-cyan-300 animate-pulse" />
                    LIVE CAM
                  </button>
                )}

                {/* Bottom Overlay: Locality & Plot Spec */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <div className="text-xs text-cyan-400 font-semibold flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.locality}
                    </div>
                    <div className="text-sm font-bold text-white leading-snug drop-shadow-md">
                      {project.projectName}
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#071527]/90 text-slate-300 border border-[#1E3A5F]">
                    {project.dayCount}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                
                {/* House Type & Specifications */}
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-[#1E3A5F]">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                      {project.plotSpec}
                    </span>
                    <span className="text-cyan-300 font-medium">{project.houseType}</span>
                  </div>

                  {/* Current Active Stage */}
                  <div className="mt-3">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5 text-cyan-400" />
                      Current Construction Stage
                    </div>
                    <div className="text-sm font-semibold text-white bg-[#071527] p-2.5 rounded-lg border border-[#1E3A5F] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                      <span className="line-clamp-1">{project.currentStage}</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar with Animated Shimmer */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-300">Milestone Progress</span>
                    <span className="text-cyan-400 font-mono text-sm">{project.progressPercent}%</span>
                  </div>
                  <div className="w-full bg-[#071527] rounded-full h-2.5 overflow-hidden p-0.5 border border-[#1E3A5F]">
                    <div
                      className="bg-gradient-to-r from-[#00A3FF] via-[#0066CC] to-emerald-400 h-full rounded-full transition-all duration-1000 shadow-sm shadow-blue-500/50"
                      style={{ width: `${project.progressPercent}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>Est. Handover: <strong className="text-slate-200">{project.estimatedHandover}</strong></span>
                    <span>Client: <strong className="text-slate-200">{project.clientInitials} ({project.clientLocation})</strong></span>
                  </div>
                </div>

                {/* Recent QC Lab Test Milestone */}
                <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-3 text-xs text-emerald-300 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-emerald-200">Latest Verified QC: </span>
                    <span>{project.recentMilestone}</span>
                  </div>
                </div>

                {/* Actions Bar */}
                <div className="pt-2 flex items-center justify-between gap-2 border-t border-[#1E3A5F]">
                  {project.hasLiveCCTV ? (
                    <button
                      type="button"
                      onClick={() => setActiveCctvProject(project)}
                      className="px-3 py-2 rounded-xl bg-[#071527] hover:bg-[#152a48] text-xs font-semibold text-slate-200 border border-[#1E3A5F] flex items-center gap-1.5 transition-colors"
                    >
                      <Video className="w-3.5 h-3.5 text-cyan-400" />
                      View Stream
                    </button>
                  ) : (
                    <span className="text-xs text-slate-500 italic">Site Camera Offline</span>
                  )}

                  <button
                    type="button"
                    onClick={() => onOpenConsultation(`Live Site Visit Booking for: ${project.projectName} (${project.locality})`)}
                    className="flex-1 px-3 py-2 rounded-xl bg-gradient-to-r from-[#00A3FF] to-[#0066CC] hover:brightness-110 text-white text-xs font-bold shadow-md shadow-blue-500/20 flex items-center justify-center gap-1 transition-all hover:scale-[1.02]"
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
        <div className="mt-12 bg-gradient-to-r from-[#0B2545] via-[#0F1E36] to-[#0B2545] rounded-2xl border border-blue-500/30 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00A3FF] to-[#0066CC] flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-bold text-white flex items-center gap-2">
                <span>100% NABL-Accredited Lab Test Certificate Guarantee</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  ISO 9001:2015
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                We never compromise on structural strength. Every single concrete slab pour undergoes 7-day and 28-day crushing cube tests. The original stamped laboratory certificates are uploaded directly to the client portal before milestone invoicing.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onOpenConsultation('Sample NABL Quality Inspection Report Request')}
            className="shrink-0 px-5 py-3 rounded-xl bg-[#071527] hover:bg-[#152a48] text-slate-200 border border-[#1E3A5F] text-xs sm:text-sm font-bold flex items-center gap-2 transition-all"
          >
            Download Sample QC Audit (PDF)
            <ExternalLink className="w-4 h-4 text-cyan-400" />
          </button>
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

    </section>
  );
}
