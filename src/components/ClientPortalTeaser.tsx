import React, { useState } from 'react';
import { CheckCircle2, FileText, Smartphone, Users, CloudSun, Lock, Play, Pause } from 'lucide-react';

export const ClientPortalTeaser: React.FC = () => {
  const [activeCamera, setActiveCamera] = useState<'cam1' | 'cam2' | 'cam3'>('cam1');
  const [isPlaying, setIsPlaying] = useState(true);

  const cameras = {
    cam1: {
      title: 'Camera 01: Ground Floor Slab & Rebar Laser Grid (Tellapur Site)',
      fps: '30 FPS • 4K HDR',
      timestamp: 'LIVE • 14:00:12 IST',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80',
      status: 'Concrete Curing (Day 7/21)',
    },
    cam2: {
      title: 'Camera 02: Cantilevered Living Pavilion & Balcony Shuttering',
      fps: '30 FPS • 1080p',
      timestamp: 'LIVE • 14:00:12 IST',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      status: 'Shuttering Inspection Passed',
    },
    cam3: {
      title: 'Camera 03: Tata Steel Yard & Material Storage',
      fps: '25 FPS • 1080p',
      timestamp: 'LIVE • 14:00:12 IST',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      status: 'Tata Tiscon 550D Batch Logged',
    },
  };

  const currentCam = cameras[activeCamera];

  return (
    <section id="portal" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-blue-900/40 px-3.5 py-1 rounded-full border border-blue-500/30">
            Tech-Enabled Construction
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            RR Client Portal &amp; 24/7 Live Site CCTV
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Never wonder what is happening on your plot in Hyderabad. Whether you are at work in Hitec City 
            or across the world in the US, watch live PTZ camera feeds, inspect daily material delivery receipts, 
            and track every milestone dollar.
          </p>
        </div>

        {/* Portal Interactive Mockup */}
        <div className="rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-8">
          
          {/* Top Bar of the Mockup */}
          <div className="flex flex-wrap items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00A3FF] to-[#0066CC] flex items-center justify-center text-white font-bold text-lg shadow-md">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-sans font-bold text-lg text-white">
                    Tellapur Duplex Villa (Plot #24)
                  </h3>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-600/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    LIVE STREAMING
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Client: Verified Homeowner (NRI, California) • Site Supervising Engineer: Project Operations Head
                </p>
              </div>
            </div>

            {/* Quick Live Stats Pill */}
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <Users className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-slate-300">22 Masons On-Site</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <CloudSun className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-slate-300">28°C Optimal Curing</span>
              </div>
            </div>
          </div>

          {/* Main Grid: Video Stream Left, Stats & Docs Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-start">
            
            {/* Live Camera Feed Screen */}
            <div className="lg:col-span-8 space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-950 border border-slate-800 group shadow-2xl">
                <img
                  src={currentCam.image}
                  alt={currentCam.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isPlaying ? 'brightness-100' : 'brightness-75'
                  }`}
                />
                
                {/* HUD Camera Overlays */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs z-10 pointer-events-none">
                  <div className="flex items-center gap-2 bg-slate-950/85 px-3 py-1 rounded-md border border-slate-700/80 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                    <span className="font-mono font-bold text-white tracking-wider">
                      {currentCam.timestamp}
                    </span>
                  </div>

                  <div className="bg-slate-950/85 px-3 py-1 rounded-md border border-slate-700/80 backdrop-blur-md text-cyan-400 font-mono font-bold">
                    {currentCam.fps}
                  </div>
                </div>

                {/* Bottom HUD */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs z-10">
                  <div className="bg-slate-950/85 px-3 py-1.5 rounded-md border border-slate-700/80 backdrop-blur-md text-white font-semibold">
                    {currentCam.title}
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-lg bg-slate-950/85 border border-slate-700 text-white hover:text-cyan-400 transition-colors cursor-pointer backdrop-blur-md"
                    title={isPlaying ? 'Pause Feed' : 'Play Live Feed'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Camera Switcher Buttons */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'cam1', label: 'Cam 01: Slab Casting' },
                  { id: 'cam2', label: 'Cam 02: Pool & Terrace' },
                  { id: 'cam3', label: 'Cam 03: Materials Yard' },
                ].map((cam) => (
                  <button
                    key={cam.id}
                    type="button"
                    onClick={() => setActiveCamera(cam.id as any)}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      activeCamera === cam.id
                        ? 'bg-blue-600/30 border-[#0066CC] text-cyan-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {cam.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Panel: Milestone Progress & Digital Vault */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Milestone Progress Card */}
              <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Milestone Progress
                  </span>
                  <span className="text-xs font-black text-cyan-400 font-mono">
                    68% Completed
                  </span>
                </div>

                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#00A3FF] to-[#0066CC] h-full rounded-full transition-all duration-1000"
                    style={{ width: '68%' }}
                  ></div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Substructure &amp; Foundation</span>
                    </span>
                    <span className="text-emerald-400 font-bold">Approved</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>RCC First Floor Slab Pour</span>
                    </span>
                    <span className="text-emerald-400 font-bold">Approved</span>
                  </div>
                  <div className="flex items-center justify-between text-white font-semibold">
                    <span className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-[#0066CC] flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0066CC]"></span>
                      </span>
                      <span>Second Floor &amp; Masonry</span>
                    </span>
                    <span className="text-cyan-400 font-bold">In Progress</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 rounded-full border border-slate-700"></span>
                      <span>Finishes &amp; Plastering</span>
                    </span>
                    <span>Upcoming</span>
                  </div>
                </div>
              </div>

              {/* Digital Blueprint & Certificate Vault */}
              <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Digital Document Vault
                  </span>
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                </div>

                <div className="space-y-2">
                  {[
                    { title: 'Municipal Approved Building Sanction Plan', size: '12.4 MB' },
                    { title: 'UltraTech M25 Cube 28-Day Strength Test', size: '2.1 MB' },
                    { title: 'Tata Tiscon Fe 550D Mill Test Certificate', size: '1.8 MB' },
                    { title: '10-Year Anti-Termite Warranty Certificate', size: '3.4 MB' },
                  ].map((doc, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs"
                    >
                      <div className="flex items-center gap-2 text-slate-300">
                        <FileText className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="line-clamp-1">{doc.title}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono shrink-0 ml-2">
                        {doc.size}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
