import React, { useState } from 'react';
import { 
  Home, 
  Building2, 
  Compass, 
  Layers, 
  Leaf, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Award, 
  X, 
  Handshake, 
  Settings, 
  Users,
  ImageIcon,
  Maximize2
} from 'lucide-react';
import { SERVICES_DATA, TRUST_PILLARS } from '../data/builderData';
import type { Service } from '../types';

interface ServicesProps {
  onOpenConsultation: (prefillNote?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeImagePreview, setActiveImagePreview] = useState<string | null>(null);

  // Working images for each core service division matching the visiting card Page 2
  const serviceWorkingGalleries: Record<string, { label: string; url: string; caption: string }[]> = {
    'constructions': [
      { label: 'Residential Villa', url: '/images/modern-luxury-duplex-night.jpg', caption: 'Custom G+2 Luxury Duplex residential villa execution with ambient night lighting' },
      { label: 'Griha Pravesham Handover', url: '/images/griha-pravesham-family.jpg', caption: 'Festive housewarming celebration with traditional marigold flower toran & happy family' },
      { label: 'Civil Site In-Progress', url: '/images/civil-construction-in-progress.jpg', caption: 'Active civil construction site: column shuttering, rebar cages & concrete pour' },
      { label: 'Commercial Complex', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80', caption: 'Multi-storey commercial glass facade & corporate office build' }
    ],
    'metal-structural-works': [
      { label: 'PEB Erection & Crane', url: '/images/metal-structural-peb-erection.jpg', caption: 'Mobile hydraulic crane lifting heavy steel I-beam rafters for industrial warehouse' },
      { label: 'Steel Fabrication', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80', caption: 'CNC cutting, plasma bevelling and high-tensile welding' },
      { label: 'Industrial Sheds', url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80', caption: 'Pre-Engineered PEB industrial warehouse clear-span shed' },
      { label: 'Welding & Rigging', url: '/images/metal-structural-peb-erection.jpg', caption: 'On-site heavy structural steel crane rigging and plumb alignment' }
    ],
    'designing-works': [
      { label: '2D AutoCAD Plan', url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80', caption: 'Precision architectural working plans & structural GFC drawings' },
      { label: '3D Elevation Day', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', caption: 'Photorealistic 3D exterior day render with material texture' },
      { label: '3D Elevation Night', url: '/images/modern-luxury-duplex-night.jpg', caption: 'Exterior night illumination simulation and landscape render' },
      { label: 'Courtyard Design', url: '/images/traditional-andhra-manduva-courtyard.jpg', caption: 'Traditional Andhra Manduva Logili central courtyard CAD modeling' }
    ],
    'flooring-works': [
      { label: 'Industrial Epoxy Application', url: '/images/industrial-epoxy-flooring.jpg', caption: 'Skilled technicians applying self-leveling mirror-finish glossy epoxy flooring' },
      { label: 'Polished Italian Marble', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', caption: 'Mirror-finish bookmatched Italian marble flooring' },
      { label: 'Anti-Static ESD', url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80', caption: 'Electrostatic discharge (ESD) flooring for electronics cleanrooms' },
      { label: 'Warehouse High-Gloss', url: '/images/industrial-epoxy-flooring.jpg', caption: 'Durable chemical-resistant high-gloss industrial floor coating' }
    ]
  };

  const [activeImageIndexByDivision, setActiveImageIndexByDivision] = useState<Record<string, number>>({
    'constructions': 0,
    'metal-structural-works': 0,
    'designing-works': 0,
    'flooring-works': 0,
  });

  const handleSelectServiceImage = (divisionId: string, idx: number) => {
    setActiveImageIndexByDivision((prev) => ({
      ...prev,
      [divisionId]: idx
    }));
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Home': return <Home className="w-6 h-6 text-cyan-400" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-cyan-400" />;
      case 'Compass': return <Compass className="w-6 h-6 text-cyan-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-cyan-400" />;
      case 'Leaf': return <Leaf className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      default: return <Home className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck className="w-7 h-7 text-cyan-400" />;
      case 'Handshake': return <Handshake className="w-7 h-7 text-cyan-400" />;
      case 'Settings': return <Settings className="w-7 h-7 text-cyan-400" />;
      case 'Users': return <Users className="w-7 h-7 text-cyan-400" />;
      default: return <ShieldCheck className="w-7 h-7 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#071527] text-white relative overflow-hidden border-t border-[#1E3A5F]">
      
      {/* Background Blueprint Grid */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#00A3FF 1px, transparent 1px), linear-gradient(90deg, #00A3FF 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header styled exactly like Page 2 of the flyer */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-0.5 w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#00A3FF]" />
            <span className="font-serif italic text-2xl sm:text-3xl text-cyan-400 font-medium">Our</span>
            <span className="h-0.5 w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#00A3FF]" />
          </div>

          <div className="flex items-center justify-center gap-4">
            <span className="hidden sm:inline-block h-1 w-16 bg-[#00A3FF] rounded-full" />
            <h2 className="text-3xl sm:text-5xl font-black tracking-wider uppercase text-white drop-shadow-md">
              SERVICES
            </h2>
            <span className="hidden sm:inline-block h-1 w-16 bg-[#00A3FF] rounded-full" />
          </div>

          {/* Sub-tagline from flyer */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-cyan-300">
            <span>BUILDING IDEAS</span>
            <span className="text-[#00A3FF]">|</span>
            <span>CREATING SPACES</span>
            <span className="text-[#00A3FF]">|</span>
            <span>SHAPING TOMORROW</span>
          </div>

          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Delivering high-tensile structural engineering, turnkey civil construction, AutoCAD designing, and industrial performance flooring across Andhra Pradesh and Telangana.
          </p>
        </div>

        {/* 4 Core Pillars with Interactive Working Image Galleries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SERVICES_DATA.slice(0, 4).map((service, index) => {
            const currentImgIdx = activeImageIndexByDivision[service.id] ?? 0;
            const gallery = serviceWorkingGalleries[service.id] || [
              { label: 'Main', url: service.image, caption: service.tagline }
            ];
            const currentView = gallery[currentImgIdx] || gallery[0];

            return (
              <article
                key={service.id}
                className="group rounded-2xl bg-[#0F1E36] border border-[#1E3A5F] hover:border-[#00A3FF] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/15"
              >
                <div>
                  {/* Card Header matching Page 2 */}
                  <div className="p-5 pb-3 border-b border-[#1E3A5F] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00A3FF] to-[#0052CC] text-white flex items-center justify-center shadow-md">
                        {getIcon(service.iconName)}
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
                          Pillar #{index + 1}
                        </div>
                        <h3 className="text-xl font-black uppercase text-white tracking-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#071527] text-slate-300 border border-[#1E3A5F]">
                      {service.timelineAvg}
                    </span>
                  </div>

                  {/* Interactive Big Working Image Container */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                    <img
                      src={currentView.url}
                      alt={`${service.title} - ${currentView.label}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-[#0F1E36]/20 to-transparent" />

                    {/* View Label Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-[#071527]/90 text-cyan-300 text-xs font-bold border border-blue-500/40 backdrop-blur-md">
                        {currentView.label}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveImagePreview(currentView.url)}
                      className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-[#071527]/80 hover:bg-[#071527] text-white text-xs font-medium backdrop-blur-md flex items-center gap-1 border border-[#1E3A5F]"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Zoom</span>
                    </button>

                    <div className="absolute bottom-3 left-3 right-16 text-xs text-white">
                      <p className="font-semibold truncate">{currentView.caption}</p>
                    </div>
                  </div>

                  {/* Working Gallery Thumbnails Switcher */}
                  <div className="px-5 py-2.5 bg-[#0B2545]/70 border-b border-[#1E3A5F] flex items-center gap-2 overflow-x-auto">
                    {gallery.map((gItem, gIdx) => (
                      <button
                        key={gIdx}
                        type="button"
                        onClick={() => handleSelectServiceImage(service.id, gIdx)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all flex items-center gap-1 shrink-0 ${
                          currentImgIdx === gIdx
                            ? 'bg-[#0066CC] text-white border-cyan-400 shadow-sm'
                            : 'bg-[#071527] text-slate-300 border-[#1E3A5F] hover:text-white'
                        }`}
                      >
                        <ImageIcon className="w-3 h-3 text-cyan-400" />
                        <span>{gItem.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Service Description & Scope Checklist */}
                  <div className="p-5 space-y-3">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-[#1E3A5F]">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">
                        Capabilities &amp; Scope:
                      </div>
                      <ul className="space-y-1 text-xs text-slate-200">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Action Bar */}
                <div className="p-5 pt-0 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-200 bg-[#071527] hover:bg-[#122846] border border-[#1E3A5F] transition-colors cursor-pointer text-center"
                  >
                    Specifications
                  </button>
                  <button
                    type="button"
                    onClick={() => onOpenConsultation(`Request Consultation for ${service.title}`)}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#00A3FF] via-[#0066CC] to-[#004099] hover:brightness-110 shadow-md shadow-blue-500/20 transition-all cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>Get Free Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </article>
            );
          })}
        </div>

        {/* Bottom Trust Pillars matching Page 2 of the flyer */}
        <div className="mt-8 bg-gradient-to-r from-[#0B2545] via-[#0F1E36] to-[#0B2545] rounded-2xl border border-blue-500/30 p-6 md:p-8 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PILLARS.map((pillar) => (
              <div key={pillar.id} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-blue-900/40 border border-blue-500/30 flex items-center justify-center shrink-0 shadow-md">
                  {getPillarIcon(pillar.iconName)}
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-white">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 leading-snug">
                    {pillar.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Accessible Dialog for Service Details */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          />
          
          <div className="relative w-full max-w-2xl bg-[#0F1E36] border border-blue-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 max-h-[90dvh] overflow-y-auto space-y-6 text-white">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  {selectedService.tagline}
                </span>
                <h3 className="font-sans font-black text-2xl text-white mt-1">
                  {selectedService.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedService.description}
            </p>

            <div className="p-4 rounded-xl bg-[#0B2545] border border-[#1E3A5F] space-y-2">
              <div className="flex items-center gap-2 text-xs text-cyan-400 font-bold">
                <Award className="w-4 h-4" />
                <span>Warranty &amp; Service Coverage</span>
              </div>
              <p className="text-xs text-white font-semibold">
                {selectedService.warranty}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Detailed Scope of Deliverables:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-[#071527] border border-[#1E3A5F] text-xs text-slate-200">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#1E3A5F] flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Average Duration: <strong className="text-white">{selectedService.timelineAvg}</strong>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const svc = selectedService;
                    setSelectedService(null);
                    onOpenConsultation(`Request Consultation for ${svc.title}`);
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-[#00A3FF] via-[#0066CC] to-[#004099] hover:brightness-110 shadow-md cursor-pointer flex items-center gap-1.5"
                >
                  <span>Request Custom Estimate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for Image Zoom */}
      {activeImagePreview && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in"
          onClick={() => setActiveImagePreview(null)}
        >
          <div className="relative max-w-4xl w-full bg-[#0F1E36] rounded-2xl overflow-hidden border border-[#1E3A5F] shadow-2xl">
            <img 
              src={activeImagePreview} 
              alt="Service Working Image Preview" 
              className="w-full max-h-[80vh] object-contain"
            />
            <button
              type="button"
              onClick={() => setActiveImagePreview(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
