import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Sparkles, Phone, ShieldCheck, Home } from 'lucide-react';
import { COMPANY_INFO } from '../data/builderData';
import { RRLogo } from './RRLogo';
import type { PageId } from './PageHeader';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  onOpenFlyer: () => void;
  onScrollToEstimator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
  onOpenFlyer,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Top menu strictly reduced to the user's requested 5 main items
  const mainNavItems: { label: string; id: PageId }[] = [
    { label: 'Services', id: 'services' },
    { label: 'Packages', id: 'packages' },
    { label: 'Projects', id: 'projects' },
    { label: 'Process', id: 'process' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
          isScrolled
            ? 'bg-[#0B2545]/98 backdrop-blur-xl border-b border-slate-700/60 shadow-[0_10px_35px_rgba(0,0,0,0.4)] py-2 sm:py-2.5'
            : 'bg-[#0B2545]/95 backdrop-blur-md border-b border-slate-700/40 py-3 sm:py-4 shadow-xl'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Top Left: BIG Logo & Company Name (Clicking returns to Home page) */}
            <button 
              type="button"
              onClick={() => onNavigate('home')} 
              className="flex items-center gap-3 group shrink-0 text-left cursor-pointer focus:outline-none"
              title="Return to RR Constructions Home Page"
            >
              <RRLogo size="md" showTagline={false} />
              
              {/* Official Credentials Badge (visible on larger screens) */}
              <div className="hidden 2xl:flex flex-col border-l border-slate-700 pl-3 py-0.5">
                <span className="text-[11px] font-bold text-amber-300 tracking-wider">
                  {COMPANY_INFO.proprietor} ({COMPANY_INFO.proprietorTitle})
                </span>
                <span className="text-[10px] text-slate-300 font-mono flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  GST: {COMPANY_INFO.gstin}
                </span>
              </div>
            </button>

            {/* Desktop Navigation: REDUCED TO MAIN 5 ITEMS */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-bold text-slate-200">
              {/* Home Icon Pill */}
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className={`p-2 rounded-xl transition-all cursor-pointer ${
                  currentPage === 'home'
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25 ring-1 ring-amber-400/50'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
                title="Home Page"
                aria-label="Home Page"
              >
                <Home className="w-4 h-4" />
              </button>

              {mainNavItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer relative group text-sm font-bold ${
                      isActive
                        ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/25 ring-1 ring-amber-300/40'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive ? (
                      <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-amber-200 rounded-full" />
                    ) : (
                      <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right: Phone Call, Download Flyer & Quote CTA */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              {/* Phone Hotline with Visiting Card number */}
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="hidden xl:flex items-center gap-2 text-xs font-bold text-slate-200 hover:text-white px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white">
                  <Phone className="w-3 h-3" />
                </div>
                <span>{COMPANY_INFO.phone}</span>
              </a>

              {/* Download Flyer Button */}
              <button
                type="button"
                onClick={onOpenFlyer}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-200 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all cursor-pointer shadow-sm hover:scale-[1.02]"
                title="View & Download Official Printable Flyer"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>Download Flyer</span>
              </button>

              {/* Quote CTA (Accent Orange) */}
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 rounded-xl shadow-md shadow-orange-500/25 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                <span>Get Free Quote</span>
              </button>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenFlyer}
                className="p-2 text-slate-200 bg-white/10 border border-white/20 rounded-lg"
                title="Flyer"
              >
                <FileText className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white bg-[#0F223D] border border-[#1E3A5F] rounded-lg cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-[#0B2545] border-l border-slate-700 p-6 shadow-2xl overflow-y-auto flex flex-col justify-between text-white">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <RRLogo size="sm" showTagline={false} />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Proprietor & GST credentials badge in mobile drawer */}
              <div className="py-3 px-3.5 my-4 bg-white/10 rounded-xl border border-white/15 text-xs">
                <div className="font-bold text-white flex items-center justify-between">
                  <span>{COMPANY_INFO.proprietor}</span>
                  <span className="text-[10px] text-amber-300 font-extrabold uppercase bg-orange-500/30 px-2 py-0.5 rounded border border-orange-400/40">
                    {COMPANY_INFO.proprietorTitle}
                  </span>
                </div>
                <div className="text-[11px] text-slate-300 font-mono mt-1">GSTIN: {COMPANY_INFO.gstin}</div>
                <div className="text-[10px] text-slate-300 mt-1">
                  Maddipatla, Krishna Dist, AP • Shamirpeta, Medchal Dist, Telangana
                </div>
              </div>

              {/* 5 Main Nav Items in Mobile Drawer */}
              <div className="py-2 space-y-1.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('home');
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-colors cursor-pointer flex items-center justify-between ${
                    currentPage === 'home'
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'text-slate-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Home className="w-4 h-4 text-amber-300" />
                    <span>Home Page</span>
                  </span>
                  {currentPage === 'home' && (
                    <span className="text-xs text-amber-100 bg-black/20 px-2 py-0.5 rounded-full">Active</span>
                  )}
                </button>

                {mainNavItems.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onNavigate(item.id);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-colors cursor-pointer flex items-center justify-between ${
                        isActive
                          ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md'
                          : 'text-slate-200 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="text-xs text-amber-100 bg-black/20 px-2 py-0.5 rounded-full">Viewing</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-700 space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 text-slate-200 border border-white/20 text-xs font-bold"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call: {COMPANY_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFlyer();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 text-slate-200 border border-white/20 text-xs font-bold"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>View &amp; Print Official Flyer</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-xs font-bold shadow-lg shadow-orange-500/25"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Free Quote &amp; 3D Plan</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
