import React, { useState } from 'react';
import { 
  Printer, 
  X, 
  Phone, 
  Mail, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  Layers, 
  Compass, 
  Home, 
  Handshake, 
  Settings, 
  Users
} from 'lucide-react';
import { COMPANY_INFO } from '../data/builderData';
import { RRLogo } from './RRLogo';

interface FlyerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const FlyerModal: React.FC<FlyerModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<'both' | 'page1' | 'page2'>('both');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm no-print"
        onClick={onClose}
      />

      {/* Main Container */}
      <div className="relative w-full max-w-5xl bg-slate-900 border border-[#1E3A5F] rounded-2xl shadow-2xl z-10 max-h-[96dvh] overflow-y-auto flex flex-col no-print-wrapper">
        
        {/* Floating Top Control Bar (Hidden when printed) */}
        <div className="p-4 bg-[#071527] border-b border-[#1E3A5F] flex flex-wrap items-center justify-between gap-3 sticky top-0 z-20 backdrop-blur-md no-print text-white">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00A3FF] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
              RR CONSTRUCTIONS &amp; ENGINEERING WORKS • Official Brochure / Flyer
            </span>
          </div>

          {/* Page switch tabs */}
          <div className="flex items-center gap-1 bg-[#0F1E36] p-1 rounded-xl border border-[#1E3A5F] text-xs font-semibold">
            <button
              type="button"
              onClick={() => setActiveTab('both')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'both' ? 'bg-[#0066CC] text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              2-Page View
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('page1')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'page1' ? 'bg-[#0066CC] text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Page 1 (Identity)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('page2')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'page2' ? 'bg-[#0066CC] text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Page 2 (Our Services)
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#00A3FF] via-[#0066CC] to-[#004099] hover:brightness-110 shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Flyer Content */}
        <div className="p-4 sm:p-8 bg-[#F4F8FC] text-slate-900 flyer-print-container space-y-8">
          
          {/* ===================== PAGE 1 ===================== */}
          {(activeTab === 'both' || activeTab === 'page1') && (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#0066CC]/30 relative print:shadow-none print:border-none print:m-0 print:p-0">
              
              {/* Architectural Wireframe Banner Background */}
              <div 
                className="relative p-6 sm:p-10 bg-gradient-to-br from-[#F0F7FF] via-white to-[#E1EFFF] overflow-hidden"
              >
                {/* Construction Building Blueprint Backdrop Sketch */}
                <div className="absolute top-0 left-0 w-64 sm:w-80 h-full opacity-15 pointer-events-none">
                  <svg viewBox="0 0 200 240" fill="none" stroke="#0066CC" strokeWidth="1.5" className="w-full h-full">
                    <rect x="20" y="20" width="160" height="200" strokeDasharray="4 4" />
                    <line x1="20" y1="60" x2="180" y2="60" />
                    <line x1="20" y1="100" x2="180" y2="100" />
                    <line x1="20" y1="140" x2="180" y2="140" />
                    <line x1="20" y1="180" x2="180" y2="180" />
                    <line x1="60" y1="20" x2="60" y2="220" />
                    <line x1="100" y1="20" x2="100" y2="220" />
                    <line x1="140" y1="20" x2="140" y2="220" />
                    <line x1="20" y1="20" x2="180" y2="220" strokeOpacity="0.4" />
                    <line x1="180" y1="20" x2="20" y2="220" strokeOpacity="0.4" />
                  </svg>
                </div>

                {/* Crane and Construction worker silhouette on right */}
                <div className="absolute top-0 right-0 w-56 sm:w-72 h-full opacity-10 pointer-events-none">
                  <svg viewBox="0 0 200 240" fill="#0B2545" className="w-full h-full">
                    <path d="M180 20H80L60 60H190V20Z" />
                    <line x1="90" y1="20" x2="90" y2="220" stroke="#0B2545" strokeWidth="6" />
                    <line x1="90" y1="220" x2="140" y2="220" stroke="#0B2545" strokeWidth="8" />
                  </svg>
                </div>

                {/* Top Right: Proprietor Header Badge */}
                <div className="flex justify-end mb-4 relative z-10">
                  <div className="flex items-center gap-2.5 border-l-4 border-[#0066CC] pl-3 py-1">
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-[#0B2545] tracking-tight leading-tight">
                        {COMPANY_INFO.proprietor}
                      </div>
                      <div className="text-xs font-extrabold uppercase tracking-widest text-[#0066CC]">
                        {COMPANY_INFO.proprietorTitle}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Logo & Typography Centerpiece matching Page 1 */}
                <div className="text-center py-6 sm:py-10 max-w-2xl mx-auto relative z-10">
                  
                  {/* Big Vector Emblem */}
                  <div className="flex justify-center mb-4">
                    <RRLogo size="xl" showText={false} showTagline={false} />
                  </div>

                  <h1 className="text-2xl sm:text-4xl md:text-[2.65rem] font-black uppercase text-[#0B2545] tracking-tight leading-[1.15]">
                    RR CONSTRUCTIONS AND <br className="hidden sm:inline" />
                    <span className="text-[#0066CC]">ENGINEERING WORKS</span>
                  </h1>

                  {/* Horizontal Bar with Tagline */}
                  <div className="mt-4 inline-flex items-center gap-3">
                    <span className="w-8 sm:w-16 h-1 bg-[#0066CC] rounded-full" />
                    <span className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-widest text-[#0B2545]">
                      {COMPANY_INFO.tagline}
                    </span>
                    <span className="w-8 sm:w-16 h-1 bg-[#0066CC] rounded-full" />
                  </div>
                </div>

                {/* Blue Horizontal Angled Contact Ribbon Bar matching Page 1 */}
                <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#0066CC] via-[#0077E6] to-[#0052CC] p-4 sm:p-5 text-white shadow-lg relative overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center sm:text-left items-center">
                    
                    {/* Phone */}
                    <div className="flex items-center justify-center sm:justify-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-blue-200">Phone / WhatsApp</div>
                        <div className="text-sm sm:text-base font-black tracking-wide">{COMPANY_INFO.phone}</div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center justify-center sm:justify-start gap-3 border-y sm:border-y-0 sm:border-x border-white/20 py-2 sm:py-0 sm:px-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div className="truncate">
                        <div className="text-[10px] uppercase font-bold text-blue-200">Official Email</div>
                        <div className="text-xs sm:text-sm font-bold truncate">{COMPANY_INFO.email}</div>
                      </div>
                    </div>

                    {/* GST */}
                    <div className="flex items-center justify-center sm:justify-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30 font-black text-xs">
                        GST
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-blue-200">Registered GSTIN</div>
                        <div className="text-xs sm:text-sm font-black font-mono tracking-wider">{COMPANY_INFO.gstin}</div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Bottom Address Ribbon */}
                <div className="mt-3 py-3 px-4 rounded-xl bg-[#0B2545] text-white flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold shadow-sm text-center">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{COMPANY_INFO.headOffice}</span>
                </div>

              </div>
            </div>
          )}

          {/* ===================== PAGE 2 ===================== */}
          {(activeTab === 'both' || activeTab === 'page2') && (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#0066CC]/30 p-6 sm:p-10 relative print:shadow-none print:border-none print:m-0 print:p-0">
              
              {/* Header: Our SERVICES */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-1">
                  <span className="h-0.5 w-14 bg-gradient-to-r from-transparent to-[#0066CC]" />
                  <span className="font-serif italic text-2xl text-[#0066CC]">Our</span>
                  <span className="h-0.5 w-14 bg-gradient-to-l from-transparent to-[#0066CC]" />
                </div>

                <div className="flex items-center justify-center gap-4">
                  <span className="h-1 w-12 sm:w-16 bg-[#0066CC] rounded-full" />
                  <h2 className="text-2xl sm:text-4xl font-black tracking-wider uppercase text-[#0B2545]">
                    SERVICES
                  </h2>
                  <span className="h-1 w-12 sm:w-16 bg-[#0066CC] rounded-full" />
                </div>

                <div className="mt-2 text-xs sm:text-sm font-black uppercase tracking-widest text-[#0066CC]">
                  BUILDING IDEAS &nbsp;|&nbsp; CREATING SPACES &nbsp;|&nbsp; SHAPING TOMORROW
                </div>
              </div>

              {/* 4 Service Quadrants matching Page 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. CONSTRUCTIONS */}
                <div className="rounded-2xl border-2 border-[#0066CC]/30 p-5 bg-gradient-to-br from-white to-[#F0F7FF] shadow-md flex flex-col justify-between">
                  <div>
                    {/* Header bar */}
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#0066CC]/20">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0066CC] to-[#0B2545] text-white flex items-center justify-center shadow-md">
                        <Home className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-black uppercase text-[#0B2545] tracking-tight">
                        CONSTRUCTIONS
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                      <ul className="sm:col-span-7 space-y-2 text-xs sm:text-sm font-semibold text-slate-800">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                          <span>Residential Buildings</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                          <span>Commercial Buildings</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                          <span>Industrial Construction</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                          <span>Turnkey Projects</span>
                        </li>
                      </ul>

                      <div className="sm:col-span-5 rounded-xl overflow-hidden shadow-md h-24 sm:h-28">
                        <img 
                          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80" 
                          alt="Residential construction" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. METAL STRUCTURAL WORKS */}
                <div className="rounded-2xl border-2 border-[#0066CC]/30 p-5 bg-gradient-to-br from-white to-[#F0F7FF] shadow-md flex flex-col justify-between">
                  <div>
                    {/* Header bar */}
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#0066CC]/20">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0066CC] to-[#0B2545] text-white flex items-center justify-center shadow-md">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-black uppercase text-[#0B2545] tracking-tight">
                        METAL STRUCTURAL WORKS
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                      <ul className="sm:col-span-7 space-y-2 text-xs sm:text-sm font-semibold text-slate-800">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                          <span>Steel Fabrication</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                          <span>Erection &amp; Installation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                          <span>Industrial Sheds &amp; Buildings</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                          <span>Heavy Steel Works</span>
                        </li>
                      </ul>

                      <div className="sm:col-span-5 rounded-xl overflow-hidden shadow-md h-24 sm:h-28">
                        <img 
                          src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=400&q=80" 
                          alt="Metal structural sheds" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. DESIGNING WORKS */}
                <div className="rounded-2xl border-2 border-[#0066CC]/30 p-5 bg-gradient-to-br from-white to-[#F0F7FF] shadow-md flex flex-col justify-between">
                  <div>
                    {/* Header bar */}
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#0066CC]/20">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0066CC] to-[#0B2545] text-white flex items-center justify-center shadow-md">
                        <Compass className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-black uppercase text-[#0B2545] tracking-tight">
                        DESIGNING WORKS
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                      <ul className="sm:col-span-7 space-y-2 text-xs sm:text-sm font-semibold text-slate-800">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                          <span>2D AutoCAD Drawings</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                          <span>3D Elevation &amp; Rendering</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                          <span>Structural Designing</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                          <span>Shop Drawings &amp; Detailing</span>
                        </li>
                      </ul>

                      <div className="sm:col-span-5 rounded-xl overflow-hidden shadow-md h-24 sm:h-28">
                        <img 
                          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80" 
                          alt="3D CAD architectural elevation" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. FLOORING WORKS */}
                <div className="rounded-2xl border-2 border-[#0066CC]/30 p-5 bg-gradient-to-br from-white to-[#F0F7FF] shadow-md flex flex-col justify-between">
                  <div>
                    {/* Header bar */}
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#0066CC]/20">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0066CC] to-[#0B2545] text-white flex items-center justify-center shadow-md">
                        <Layers className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-black uppercase text-[#0B2545] tracking-tight">
                        FLOORING WORKS
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                      <ul className="sm:col-span-7 space-y-1.5 text-xs sm:text-sm font-semibold text-slate-800">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                          <span>Epoxy Flooring</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                          <span>PU Flooring</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                          <span>Industrial Flooring</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                          <span>Anti-Static Flooring</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                          <span>Commercial Flooring</span>
                        </li>
                      </ul>

                      <div className="sm:col-span-5 rounded-xl overflow-hidden shadow-md h-24 sm:h-28">
                        <img 
                          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80" 
                          alt="Industrial Epoxy and PU Flooring" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Trust Pillars matching Page 2 */}
              <div className="mt-8 pt-6 border-t-2 border-[#0066CC]/20">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#0066CC] text-white flex items-center justify-center shadow-md mb-2">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="text-xs sm:text-sm font-black text-[#0B2545]">Quality Workmanship</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#0066CC] text-white flex items-center justify-center shadow-md mb-2">
                      <Handshake className="w-6 h-6" />
                    </div>
                    <span className="text-xs sm:text-sm font-black text-[#0B2545]">On-Time Delivery</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#0066CC] text-white flex items-center justify-center shadow-md mb-2">
                      <Settings className="w-6 h-6" />
                    </div>
                    <span className="text-xs sm:text-sm font-black text-[#0B2545]">Cost Effective Solutions</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#0066CC] text-white flex items-center justify-center shadow-md mb-2">
                      <Users className="w-6 h-6" />
                    </div>
                    <span className="text-xs sm:text-sm font-black text-[#0B2545]">Customer Satisfaction</span>
                  </div>

                </div>
              </div>

            </div>
          )}

        </div>

        {/* Bottom CTA in Modal */}
        <div className="p-4 bg-[#071527] border-t border-[#1E3A5F] flex flex-wrap items-center justify-between gap-4 no-print text-white">
          <div className="text-xs text-slate-300">
            <span>Direct Inquiries: </span>
            <strong className="text-white font-mono">{COMPANY_INFO.phone}</strong>
            <span className="text-slate-500 mx-2">|</span>
            <strong className="text-cyan-400">{COMPANY_INFO.email}</strong>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#00A3FF] to-[#0066CC] hover:brightness-110 shadow-md shadow-blue-500/20"
            >
              Book Free Site Survey
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
