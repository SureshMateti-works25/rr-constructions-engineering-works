import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
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

export function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPrefill, setConsultationPrefill] = useState('');
  const [isFlyerOpen, setIsFlyerOpen] = useState(false);
  const [activeModalProjectId, setActiveModalProjectId] = useState<string | null>(null);
  const [selectedPackageId, setSelectedPackageId] = useState<string>('premium-gold');

  const handleOpenConsultation = (note?: string) => {
    setConsultationPrefill(note || '');
    setIsConsultationOpen(true);
  };

  const handleScrollToEstimator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackageForEstimator = (packageId: string) => {
    setSelectedPackageId(packageId);
    handleScrollToEstimator();
  };

  return (
    <div className="min-h-screen bg-[#071527] text-slate-100 flex flex-col font-sans selection:bg-[#0066CC] selection:text-white">
      
      {/* Top Fixed Sticky Navigation */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation('VIP Site Visit Booking')}
        onOpenFlyer={() => setIsFlyerOpen(true)}
        onScrollToEstimator={handleScrollToEstimator}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation('Consultation from Hero')}
          onScrollToEstimator={handleScrollToEstimator}
          onOpenFlyer={() => setIsFlyerOpen(true)}
          onOpenProjectModal={(id) => setActiveModalProjectId(id)}
        />

        {/* 2. Services Showcase */}
        <Services onOpenConsultation={handleOpenConsultation} />

        {/* 3. Unique House Types Constructed - Interactive Accordion */}
        <HouseTypesAccordion
          onOpenConsultation={handleOpenConsultation}
          onScrollToEstimator={handleScrollToEstimator}
        />

        {/* 4. Recents in Progress - Real-Time Site & QC Tracker */}
        <RecentsInProgress
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 5. Featured Landmark Projects Portfolio */}
        <Projects
          activeModalProjectId={activeModalProjectId}
          onCloseProjectModal={() => setActiveModalProjectId(null)}
          onOpenProjectModal={(id) => setActiveModalProjectId(id)}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 6. Turnkey Construction Packages & Pricing Matrix */}
        <Packages
          onSelectPackageForEstimator={handleSelectPackageForEstimator}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 7. Enterprise Feature: Live Cost Estimator & Material Calculator */}
        <CostEstimator
          selectedPackageId={selectedPackageId}
          onPackageChange={(id) => setSelectedPackageId(id)}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 8. Materials Used & Brand Authenticity Standards */}
        <MaterialsUsed />

        {/* 9. 6-Stage Precision Execution Workflow & Quality Gates */}
        <Process />

        {/* 10. Enterprise Feature: Aura Client Portal & 24/7 CCTV Digital Twin */}
        <ClientPortalTeaser />

        {/* 11. Strategic Partners & Bank Approvals */}
        <Partners />

        {/* 12. Verified Customer Reviews & Testimonials */}
        <Reviews />

        {/* 13. Builder FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Corporate Enterprise Footer */}
      <Footer
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
