import React from 'react';
import { ChevronRight, Home, ArrowLeft } from 'lucide-react';

export type PageId = 'home' | 'services' | 'packages' | 'projects' | 'process' | 'faq';

interface PageHeaderProps {
  category: string;
  title: string;
  subtitle: string;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  category,
  title,
  subtitle,
  currentPage,
  onNavigate,
}) => {
  const navTabs: { id: PageId; label: string }[] = [
    { id: 'services', label: 'Services & Divisions' },
    { id: 'packages', label: 'Packages & Estimator' },
    { id: 'projects', label: 'Projects & Elevations' },
    { id: 'process', label: 'Process & Tech' },
    { id: 'faq', label: 'FAQ & Contact' },
  ];

  return (
    <div className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 bg-gradient-to-b from-[#0A2240] via-[#071527] to-[#071527] border-b border-[#1E3A5F]/80 overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 163, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 163, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Radiant Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066CC]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-[#00A3FF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium" aria-label="Breadcrumb">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer group"
            >
              <Home className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-cyan-300 font-bold capitalize">{currentPage}</span>
          </nav>

          {/* Quick Back to Home Button */}
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white bg-[#0F223D] hover:bg-[#16335C] border border-[#1E3A5F] px-3 py-1.5 rounded-lg transition-all cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
            <span>Back to Main Page</span>
          </button>
        </div>

        {/* Page Hero Content */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase bg-[#0066CC]/20 border border-cyan-400/30 text-cyan-300 mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>{category}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {title}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Quick Multi-Page Switcher Bar */}
        <div className="mt-8 pt-6 border-t border-[#1E3A5F]/60">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
            Explore Individual Sections &amp; Portals:
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {navTabs.map((tab) => {
              const isActive = currentPage === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onNavigate(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#0066CC] to-[#00A3FF] text-white shadow-md shadow-blue-500/25 ring-2 ring-cyan-400/40'
                      : 'bg-[#0B1E38] text-slate-300 hover:text-white hover:bg-[#132C52] border border-[#1E3A5F]'
                  }`}
                >
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
