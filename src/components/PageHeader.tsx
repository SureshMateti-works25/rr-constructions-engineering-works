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
    <div className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 bg-gradient-to-r from-[#0B2545] via-[#0F1E36] to-[#0B2545] border-b border-slate-700/60 text-white overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Radiant Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <nav className="flex items-center gap-2 text-xs text-slate-300 font-medium" aria-label="Breadcrumb">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer group"
            >
              <Home className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-amber-300 font-bold capitalize">{currentPage}</span>
          </nav>

          {/* Quick Back to Home Button */}
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-200 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 px-3 py-1.5 rounded-lg transition-all cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-amber-400" />
            <span>Back to Main Page</span>
          </button>
        </div>

        {/* Page Hero Content */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase bg-orange-500/20 border border-orange-400/30 text-amber-300 mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>{category}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {title}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Quick Navigation Switcher Bar */}
        <div className="mt-8 pt-6 border-t border-slate-700/60">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-3">
            Quick Navigation:
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
                      ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/25 ring-2 ring-amber-300/40'
                      : 'bg-white/10 text-slate-200 hover:text-white hover:bg-white/20 border border-white/15'
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
