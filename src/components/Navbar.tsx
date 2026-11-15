import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Sparkles, Phone, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/builderData';
import { RRLogo } from './RRLogo';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenFlyer: () => void;
  onScrollToEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
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
  const mainNavItems = [
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
          isScrolled
            ? 'bg-[#071527]/95 backdrop-blur-md border-b border-[#1E3A5F] shadow-2xl py-2 sm:py-2.5'
            : 'bg-[#071527]/90 backdrop-blur-sm border-b border-[#1E3A5F]/80 py-3 sm:py-4 shadow-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Top Left: BIG Logo & Company Name */}
            <a href="#" className="flex items-center gap-3 group shrink-0">
              <RRLogo size="md" showTagline={true} />
              
              {/* Official Credentials Badge (visible on larger screens) */}
              <div className="hidden 2xl:flex flex-col border-l border-[#1E3A5F] pl-3 py-0.5">
                <span className="text-[11px] font-bold text-cyan-300 tracking-wider">
                  {COMPANY_INFO.proprietor} ({COMPANY_INFO.proprietorTitle})
                </span>
                <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  GST: {COMPANY_INFO.gstin}
                </span>
              </div>
            </a>

            {/* Desktop Navigation: REDUCED TO MAIN 5 ITEMS */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3 text-sm font-bold text-slate-200">
              {mainNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3.5 py-2 rounded-xl text-slate-200 hover:text-cyan-300 hover:bg-[#0B2545] transition-all relative group"
                >
                  <span>{item.label}</span>
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#00A3FF] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                </a>
              ))}
            </nav>

            {/* Right: Phone Call, Download Flyer & Quote CTA */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              {/* Phone Hotline with Visiting Card number */}
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="hidden xl:flex items-center gap-2 text-xs font-bold text-slate-200 hover:text-cyan-300 px-3 py-2 rounded-xl bg-[#0F1E36] border border-[#1E3A5F] transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-[#0066CC] flex items-center justify-center text-white">
                  <Phone className="w-3 h-3" />
                </div>
                <span>{COMPANY_INFO.phone}</span>
              </a>

              {/* Download Flyer Button */}
              <button
                type="button"
                onClick={onOpenFlyer}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-cyan-300 bg-blue-900/30 hover:bg-blue-800/40 border border-blue-500/40 rounded-xl transition-all cursor-pointer shadow-sm hover:scale-[1.02]"
                title="View & Download Official Printable Flyer"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download Flyer</span>
              </button>

              {/* Book Free Quote Button */}
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-extrabold text-white bg-gradient-to-r from-[#00A3FF] via-[#0066CC] to-[#004099] hover:brightness-110 rounded-xl shadow-md shadow-blue-500/25 transition-all hover:scale-102 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Get Free Quote</span>
              </button>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenFlyer}
                className="p-2 text-cyan-300 bg-blue-900/40 border border-blue-500/30 rounded-xl"
                title="View Flyer"
              >
                <FileText className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white bg-[#0B2545] rounded-xl border border-[#1E3A5F]"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col no-print">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative ml-auto w-4/5 max-w-sm h-full bg-[#071527] border-l border-[#1E3A5F] p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#1E3A5F]">
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
              <div className="py-3 px-3.5 my-4 bg-[#0B2545] rounded-xl border border-[#1E3A5F] text-xs">
                <div className="font-bold text-white flex items-center justify-between">
                  <span>{COMPANY_INFO.proprietor}</span>
                  <span className="text-[10px] text-cyan-400 font-extrabold uppercase bg-blue-900/40 px-2 py-0.5 rounded border border-blue-500/30">
                    {COMPANY_INFO.proprietorTitle}
                  </span>
                </div>
                <div className="text-[11px] text-slate-300 font-mono mt-1">GSTIN: {COMPANY_INFO.gstin}</div>
                <div className="text-[10px] text-slate-400 mt-1">
                  Maddipatla, Krishna District, AP • Hyderabad Hub
                </div>
              </div>

              {/* 5 Main Nav Items in Mobile Drawer */}
              <div className="py-2 space-y-1">
                {mainNavItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl text-base font-bold text-slate-200 hover:bg-[#0B2545] hover:text-cyan-300 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#1E3A5F] space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0B2545] text-cyan-300 border border-[#1E3A5F] text-xs font-bold"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call: {COMPANY_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFlyer();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-900/30 text-cyan-300 border border-blue-500/40 text-xs font-bold"
              >
                <FileText className="w-4 h-4" />
                <span>View &amp; Print Official Flyer</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#00A3FF] via-[#0066CC] to-[#004099] text-white text-xs font-bold shadow-lg shadow-blue-500/25"
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
