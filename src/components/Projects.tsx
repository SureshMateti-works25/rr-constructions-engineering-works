import React, { useState } from 'react';
import { Eye, MapPin, Clock, CheckCircle, Sparkles, X, Layers, Image as ImageIcon, Star } from 'lucide-react';
import { PROJECTS_DATA } from '../data/builderData';
import type { ProjectCategory } from '../types';

interface ProjectsProps {
  activeModalProjectId: string | null;
  onCloseProjectModal: () => void;
  onOpenProjectModal: (id: string) => void;
  onOpenConsultation: (note?: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  activeModalProjectId,
  onCloseProjectModal,
  onOpenProjectModal,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [modalTab, setModalTab] = useState<'photos' | 'floorplan'>('photos');
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All Hyderabad Homes', value: 'all' },
    { label: 'Contemporary Duplexes', value: 'villas' },
    { label: 'Luxury Mansions', value: 'apartments' },
    { label: 'G+2 Family Homes', value: 'commercial' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  const activeProject = activeModalProjectId
    ? PROJECTS_DATA.find((p) => p.id === activeModalProjectId)
    : null;

  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C] bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200">
              Hyderabad Project Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Real Homes Built Across Hyderabad
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
              Inspect our landmark turnkey duplexes and independent houses across Tellapur, Jubilee Hills, 
              Gachibowli, Kokapet, and Manikonda. All built with 100% fixed-price contracts and 430+ QC checks.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-[#EA580C] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white border border-slate-200 hover:border-[#EA580C] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:shadow-orange-500/10"
            >
              {/* Media Thumbnail */}
              <div 
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => onOpenProjectModal(project.id)}
              >
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                {/* Status and Tier Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className={`text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-1 rounded-md backdrop-blur-md ${
                    project.status === 'Completed'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-amber-500 text-white shadow-sm'
                  }`}>
                    {project.status}
                  </span>

                  <span className="text-[10px] font-bold text-white bg-slate-900/80 px-2 py-1 rounded-md backdrop-blur-sm">
                    {project.budgetTier} Package
                  </span>
                </div>

                {/* Bottom Overlay Location */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#FB923C]" />
                    <span>{project.location.split(',')[0]}</span>
                  </span>
                  <span className="font-extrabold text-[#FB923C]">
                    {project.plotSize || project.area}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 
                    onClick={() => onOpenProjectModal(project.id)}
                    className="font-sans font-bold text-xl text-slate-900 group-hover:text-[#EA580C] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#EA580C] font-bold">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key specs highlight */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#EA580C]" />
                      <span>{project.timeline}</span>
                    </span>
                    <span className="text-emerald-600 font-bold">430+ QC Passed</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.materialsHighlight.slice(0, 2).map((mat, i) => (
                      <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200 font-medium">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <button
                  type="button"
                  onClick={() => onOpenProjectModal(project.id)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-[#EA580C] hover:text-white border border-slate-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Photos &amp; 3D Floor Plan</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Accessible Project Detail Modal (modern-web-guidance compliant) */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={onCloseProjectModal}
          ></div>

          <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl z-10 max-h-[92dvh] overflow-y-auto flex flex-col">
            
            {/* Modal Header Bar */}
            <div className="p-5 sm:p-6 border-b border-slate-200 flex items-start justify-between bg-white sticky top-0 z-20">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#EA580C] bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                    {activeProject.budgetTier} PACKAGE
                  </span>
                  <span className="text-xs text-slate-600 font-medium flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
                    {activeProject.location}
                  </span>
                </div>
                <h3 className="font-sans font-black text-2xl text-slate-900">
                  {activeProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={onCloseProjectModal}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              
              {/* Media Viewer with Photos / Floor Plan Tabs */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
                  <button
                    type="button"
                    onClick={() => setModalTab('photos')}
                    className={`flex items-center gap-1.5 text-xs font-bold pb-1 border-b-2 cursor-pointer transition-colors ${
                      modalTab === 'photos'
                        ? 'text-[#EA580C] border-[#EA580C]'
                        : 'text-slate-500 border-transparent hover:text-slate-800'
                    }`}
                  >
                    <ImageIcon className="w-4 h-4" />
                    <span>Elevation &amp; Interior Photos</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setModalTab('floorplan')}
                    className={`flex items-center gap-1.5 text-xs font-bold pb-1 border-b-2 cursor-pointer transition-colors ${
                      modalTab === 'floorplan'
                        ? 'text-[#EA580C] border-[#EA580C]'
                        : 'text-slate-500 border-transparent hover:text-slate-800'
                    }`}
                  >
                    <Layers className="w-4 h-4" />
                    <span>2D/3D Floor Plan &amp; Vastu Layout</span>
                  </button>
                </div>

                {modalTab === 'photos' ? (
                  <div className="space-y-3">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-slate-950 border border-slate-200">
                      <img
                        src={activeProject.gallery[activePhotoIndex] || activeProject.heroImage}
                        alt={activeProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Thumbnail strip */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-1">
                      {activeProject.gallery.map((img, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActivePhotoIndex(idx)}
                          className={`w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                            activePhotoIndex === idx ? 'border-[#EA580C] scale-102' : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl overflow-hidden aspect-[16/9] bg-slate-900 border border-slate-200 p-4 flex items-center justify-center">
                    <img
                      src={activeProject.floorPlanUrl}
                      alt="Floor Plan"
                      className="max-h-full max-w-full object-contain filter invert contrast-125"
                    />
                  </div>
                )}
              </div>

              {/* Specs and Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block text-[10px] font-bold">Plot Dimension</span>
                  <span className="font-extrabold text-slate-900 text-sm">{activeProject.plotSize || activeProject.area}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block text-[10px] font-bold">Turnaround Timeline</span>
                  <span className="font-extrabold text-slate-900 text-sm">{activeProject.timeline}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block text-[10px] font-bold">Package Tier</span>
                  <span className="font-extrabold text-[#EA580C] text-sm">{activeProject.budgetTier}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block text-[10px] font-bold">Handover Status</span>
                  <span className="font-extrabold text-emerald-600 text-sm">{activeProject.status}</span>
                </div>
              </div>

              {/* Description & Features */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1">
                    Project Overview
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Key Features &amp; Vastu Specifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeProject.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
                        <CheckCircle className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Quote */}
                {activeProject.clientQuote && (
                  <div className="p-4 rounded-xl bg-orange-50/80 border border-orange-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(activeProject.clientQuote.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[11px] text-slate-500 font-semibold">{activeProject.clientQuote.locality}</span>
                    </div>
                    <p className="text-xs italic text-slate-700">
                      &ldquo;{activeProject.clientQuote.text}&rdquo;
                    </p>
                    <span className="text-xs font-bold text-slate-900 block">
                      — {activeProject.clientQuote.author}
                    </span>
                  </div>
                )}
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4 sticky bottom-0 z-20">
              <span className="text-xs text-slate-600 font-medium">
                Planning to build on your plot in Hyderabad?
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onCloseProjectModal}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-200 cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const projTitle = activeProject.title;
                    onCloseProjectModal();
                    onOpenConsultation(`Inquiry regarding similar design to ${projTitle}`);
                  }}
                  className="px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:brightness-110 shadow-md cursor-pointer flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Get Quote For Similar Home</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
