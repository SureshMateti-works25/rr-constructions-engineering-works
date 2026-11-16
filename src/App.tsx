import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HomeDivisionsGrid } from './components/HomeDivisionsGrid';
import { PageHeader } from './components/PageHeader';
import type { PageId } from './components/PageHeader';
import { Services } from './components/Services';
import { HouseTypesAccordion } from './components/HouseTypesAccordion';
import { RecentsInProgress } from './components/RecentsInProgress';
import { Projects } from './components/Projects';
import { Packages } from './components/Packages';
import { CostEstimator } from './components/CostEstimator';
import { MaterialsUsed } from './components/MaterialsUsed';
import { Process } from './components/Process';
import { ClientPortalTeaser } from './components/ClientPortalTeaser';
import { Partners } from './components/Partners';
import { Reviews } from './components/Reviews';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { FlyerModal } from './components/FlyerModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { COMPANY_INFO } from './data/builderData';
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

function getInitialPage(): PageId {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.replace(/^\/+/g, '').toLowerCase();
  const hash = window.location.hash.replace(/^#+/g, '').toLowerCase();

  const validPages: PageId[] = ['services', 'packages', 'projects', 'process', 'faq'];

  if (validPages.includes(path as PageId)) return path as PageId;
  if (validPages.includes(hash as PageId)) return hash as PageId;
  if (hash === 'house-types' || hash === 'in-progress') return 'projects';
  if (hash === 'calculator') return 'packages';

  return 'home';
}

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPrefill, setConsultationPrefill] = useState('');
  const [isFlyerOpen, setIsFlyerOpen] = useState(false);
  const [activeModalProjectId, setActiveModalProjectId] = useState<string | null>(null);
  const [selectedPackageId, setSelectedPackageId] = useState<string>('premium-gold');

  // Synchronize browser history and URL with current page
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    const targetUrl = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== targetUrl) {
      window.history.pushState({ page }, '', targetUrl);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle browser back and forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialPage());
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const handleOpenConsultation = (note?: string) => {
    setConsultationPrefill(note || '');
    setIsConsultationOpen(true);
  };

  const handleScrollToEstimator = () => {
    if (currentPage !== 'packages') {
      handleNavigate('packages');
    }
    setTimeout(() => {
      const el = document.getElementById('calculator');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const handleSelectPackageForEstimator = (packageId: string) => {
    setSelectedPackageId(packageId);
    handleScrollToEstimator();
  };

  return (
    <div className="min-h-screen bg-[#071527] text-slate-100 flex flex-col font-sans selection:bg-[#0066CC] selection:text-white">
      
      {/* Top Fixed Sticky Navigation with Active Page Indicators */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation('VIP Site Visit Booking')}
        onOpenFlyer={() => setIsFlyerOpen(true)}
        onScrollToEstimator={handleScrollToEstimator}
      />

      <main className="flex-1">

        {/* ================= PAGE 1: HOME PAGE ================= */}
        {currentPage === 'home' && (
          <div>
            {/* Hero Section */}
            <Hero
              onOpenConsultation={() => handleOpenConsultation('Consultation from Hero')}
              onScrollToEstimator={handleScrollToEstimator}
              onOpenFlyer={() => setIsFlyerOpen(true)}
              onNavigate={handleNavigate}
              onOpenProjectModal={(id) => setActiveModalProjectId(id)}
            />

            {/* Individual Specialized Portals Grid */}
            <HomeDivisionsGrid
              onNavigate={handleNavigate}
              onOpenFlyer={() => setIsFlyerOpen(true)}
              onOpenConsultation={() => handleOpenConsultation('Inquiry from Home Portals Grid')}
            />

            {/* Verified Customer Reviews */}
            <Reviews />

            {/* Strategic Partners & Bank Approvals */}
            <Partners />

            {/* Home Bottom VIP Callout */}
            <section className="py-16 bg-gradient-to-r from-[#0066CC] via-[#004B99] to-[#071527] border-y border-cyan-400/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                  <div className="space-y-2 max-w-2xl">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-white/10 text-cyan-200 border border-white/20">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                      <span>Ready to Build Your Dream Home?</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      Start with a Free On-Site Soil &amp; Plot Survey
                    </h3>
                    <p className="text-sm text-cyan-100 leading-relaxed">
                      Consult directly with Proprietor {COMPANY_INFO.proprietor} across Andhra Pradesh (Krishna, Guntur, Vijayawada) and Telangana (Hyderabad). Zero obligations, 100% transparent itemized BOQ estimation.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleOpenConsultation('Site Survey from Home CTA')}
                      className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-[#071527] bg-white hover:bg-cyan-100 transition-all shadow-xl hover:scale-105 cursor-pointer flex items-center gap-2"
                    >
                      <span>Book Free Site Survey</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsFlyerOpen(true)}
                      className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-950/60 hover:bg-blue-900 border border-white/30 transition-all cursor-pointer"
                    >
                      <span>Print Visiting Flyer</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ================= PAGE 2: SERVICES & DIVISIONS ================= */}
        {currentPage === 'services' && (
          <div>
            <PageHeader
              category="CORE DIVISIONS &amp; ENGINEERING SERVICES"
              title="Construction, Metal Structural, Designing &amp; Flooring Works"
              subtitle="End-to-end engineering excellence from civil turnkey execution and PEB industrial sheds to 2D/3D AutoCAD models and high-performance epoxy flooring across AP &amp; Telangana."
              currentPage="services"
              onNavigate={handleNavigate}
            />

            {/* The 4 Core Service Divisions with Interactive Working Image Galleries */}
            <Services onOpenConsultation={handleOpenConsultation} />

            {/* Certified Brand Materials & Standards */}
            <MaterialsUsed />
          </div>
        )}

        {/* ================= PAGE 3: PACKAGES & COST ESTIMATOR ================= */}
        {currentPage === 'packages' && (
          <div>
            <PageHeader
              category="TRANSPARENT PACKAGES &amp; REAL-TIME ESTIMATOR"
              title="Turnkey Construction Packages &amp; Instant Cost Estimator"
              subtitle="Comprehensive turnkey packages with 100% price lock guarantee, transparent milestone billing, and a dynamic plot yard calculator for instant budget forecasting."
              currentPage="packages"
              onNavigate={handleNavigate}
            />

            {/* Turnkey Construction Packages & Pricing Matrix */}
            <Packages
              onSelectPackageForEstimator={handleSelectPackageForEstimator}
              onOpenConsultation={handleOpenConsultation}
            />

            {/* Interactive Live Cost Estimator & Material Calculator */}
            <CostEstimator
              selectedPackageId={selectedPackageId}
              onPackageChange={(id) => setSelectedPackageId(id)}
              onOpenConsultation={handleOpenConsultation}
            />

            {/* Certified Materials Standards */}
            <MaterialsUsed />
          </div>
        )}

        {/* ================= PAGE 4: PROJECTS & HOUSE TYPOLOGIES ================= */}
        {currentPage === 'projects' && (
          <div>
            <PageHeader
              category="PORTFOLIO &amp; ARCHITECTURAL ELEVATIONS"
              title="House Typologies, CAD Plans &amp; Live Site Progress"
              subtitle="Explore multi-view working image drawers (Day Elevation, Night Facade, 3D CAD Floor Plan, Living Pavilion) alongside live real-time construction milestone updates."
              currentPage="projects"
              onNavigate={handleNavigate}
            />

            {/* Unique House Types Constructed - Interactive Accordion with 4-view switchers */}
            <HouseTypesAccordion
              onOpenConsultation={handleOpenConsultation}
              onScrollToEstimator={() => handleNavigate('packages')}
            />

            {/* Recents in Progress - Real-Time Site & QC Tracker */}
            <RecentsInProgress
              onOpenConsultation={handleOpenConsultation}
            />

            {/* Featured Landmark Projects Portfolio */}
            <Projects
              activeModalProjectId={activeModalProjectId}
              onCloseProjectModal={() => setActiveModalProjectId(null)}
              onOpenProjectModal={(id) => setActiveModalProjectId(id)}
              onOpenConsultation={handleOpenConsultation}
            />
          </div>
        )}

        {/* ================= PAGE 5: PROCESS & AURA TECH ================= */}
        {currentPage === 'process' && (
          <div>
            <PageHeader
              category="PRECISION EXECUTION &amp; CLIENT TRANSPARENCY"
              title="6-Stage Precision Execution Workflow &amp; Aura Digital Twin"
              subtitle="From architectural soil lab tests to 24/7 live CCTV app streaming and auspicious Griha Pravesham handover with 430+ certified quality gates."
              currentPage="process"
              onNavigate={handleNavigate}
            />

            {/* 6-Stage Precision Execution Workflow & Quality Gates */}
            <Process />

            {/* Enterprise Feature: Aura Client Portal & 24/7 CCTV Digital Twin */}
            <ClientPortalTeaser />

            {/* Customer Testimonials & Reviews */}
            <Reviews />
          </div>
        )}

        {/* ================= PAGE 6: FAQ & CONTACT DESK ================= */}
        {currentPage === 'faq' && (
          <div>
            <PageHeader
              category="CLIENT ADVISORY &amp; OFFICIAL CONTACT"
              title="Frequently Asked Questions &amp; Office Consultation Desk"
              subtitle="Clear, transparent answers regarding DTCP/HMDA building permits, 100% Vastu Shastra compliance, bank loans, and structural warranties."
              currentPage="faq"
              onNavigate={handleNavigate}
            />

            {/* Builder FAQ Accordion */}
            <FaqSection />

            {/* Dedicated Office & Contact Directory Section */}
            <section className="py-16 bg-[#0B1E38] border-t border-[#1E3A5F]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  
                  {/* Left: Office Address & Visiting Card Credentials */}
                  <div className="space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-900/40 text-cyan-300 border border-blue-500/30 mb-3">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Registered Office Locations</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white">
                        Connect with RR Constructions
                      </h3>
                      <p className="mt-2 text-sm text-slate-300">
                        Headed by Proprietor <strong className="text-white">{COMPANY_INFO.proprietor}</strong>. We welcome homeowners and commercial clients to our regional centers or invite us for a free site inspection.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-[#071527] border border-[#1E3A5F] flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-bold text-white">Head Office (Krishna District, AP)</h4>
                          <p className="text-xs text-slate-300 mt-1">{COMPANY_INFO.headOffice}</p>
                          <span className="text-[10px] text-cyan-300 font-mono mt-1 inline-block">GSTIN: {COMPANY_INFO.gstin}</span>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-[#071527] border border-[#1E3A5F] flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-bold text-white">Telangana Regional Hub (Medchal-Malkajgiri)</h4>
                          <p className="text-xs text-slate-300 mt-1">{COMPANY_INFO.hyderabadHub}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <a
                          href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                          className="p-4 rounded-xl bg-[#071527] border border-[#1E3A5F] hover:border-cyan-400 transition-colors flex items-center gap-3"
                        >
                          <Phone className="w-5 h-5 text-emerald-400" />
                          <div>
                            <div className="text-[10px] text-slate-400 uppercase font-bold">Direct Phone Hotline</div>
                            <div className="text-xs font-bold text-white font-mono">{COMPANY_INFO.phone}</div>
                          </div>
                        </a>

                        <a
                          href={`mailto:${COMPANY_INFO.email}`}
                          className="p-4 rounded-xl bg-[#071527] border border-[#1E3A5F] hover:border-cyan-400 transition-colors flex items-center gap-3"
                        >
                          <Mail className="w-5 h-5 text-cyan-400" />
                          <div>
                            <div className="text-[10px] text-slate-400 uppercase font-bold">Official Email</div>
                            <div className="text-xs font-bold text-white">{COMPANY_INFO.email}</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right: Instant Consultation Booking Box */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-[#071527] border-2 border-cyan-400/40 shadow-2xl">
                    <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span>Schedule a Consultation</span>
                    </h4>
                    <p className="text-xs text-slate-300 mb-6">
                      Get a custom 2D floor plan concept, turnkey cost estimate, or industrial steel fabrication proposal within 24 hours.
                    </p>

                    <div className="space-y-4">
                      <button
                        type="button"
                        onClick={() => handleOpenConsultation('Inquiry from FAQ Contact Desk')}
                        className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#00A3FF] via-[#0066CC] to-[#004099] hover:brightness-110 shadow-lg shadow-blue-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span>Book In-Person / Online Meeting</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setIsFlyerOpen(true)}
                        className="w-full py-3 px-4 rounded-xl font-bold text-xs text-cyan-300 bg-[#0F223D] hover:bg-[#16335C] border border-[#1E3A5F] transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span>Download 2-Page Official Flyer</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </div>
        )}

      </main>

      {/* Corporate Enterprise Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation('Footer Consultation Request')}
        onOpenFlyer={() => setIsFlyerOpen(true)}
        onScrollToEstimator={handleScrollToEstimator}
      />

      {/* Floating Interactive WhatsApp Concierge Desk */}
      <WhatsAppWidget
        onOpenConsultation={() => handleOpenConsultation('WhatsApp Concierge Site Survey')}
        onScrollToEstimator={handleScrollToEstimator}
        onOpenFlyer={() => setIsFlyerOpen(true)}
      />

      {/* VIP Site Visit & Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        prefillNote={consultationPrefill}
      />

      {/* Print-Ready Official Digital & Physical Flyer Modal */}
      <FlyerModal
        isOpen={isFlyerOpen}
        onClose={() => setIsFlyerOpen(false)}
        onOpenConsultation={() => {
          setIsFlyerOpen(false);
          handleOpenConsultation('Inquiry from Printable Flyer');
        }}
      />

    </div>
  );
}

export default App;
