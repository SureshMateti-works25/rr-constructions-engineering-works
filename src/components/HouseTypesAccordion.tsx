import { useState } from 'react';
import { 
  Building2, 
  Home, 
  Compass, 
  Sparkles, 
  Leaf, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight, 
  Maximize2, 
  Ruler, 
  Compass as VastuIcon,
  PhoneCall,
  FileCheck,
  ImageIcon
} from 'lucide-react';
import { HOUSE_TYPES_DATA, COMPANY_INFO } from '../data/builderData';

interface HouseTypesAccordionProps {
  onOpenConsultation: (note?: string) => void;
  onScrollToEstimator?: () => void;
}

export function HouseTypesAccordion({ onOpenConsultation, onScrollToEstimator }: HouseTypesAccordionProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'duplex' | 'villa' | 'investment'>('all');
  const [activeImagePreview, setActiveImagePreview] = useState<string | null>(null);
  
  // Per-card active working image index state
  const [cardActiveImages, setCardActiveImages] = useState<Record<string, number>>({});

  const handleSelectGalleryImage = (houseTypeId: string, index: number) => {
    setCardActiveImages((prev) => ({
      ...prev,
      [houseTypeId]: index,
    }));
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-5 h-5 text-cyan-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-cyan-400" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'Building':
        return <Building2 className="w-5 h-5 text-cyan-400" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-cyan-400" />;
      default:
        return <Home className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredHouseTypes = HOUSE_TYPES_DATA.filter((item) => {
    if (selectedFilter === 'duplex') {
      return item.id.includes('duplex') || item.name.toLowerCase().includes('duplex');
    }
    if (selectedFilter === 'villa') {
      return item.id.includes('villa') || item.id.includes('mansion') || item.name.toLowerCase().includes('villa');
    }
    if (selectedFilter === 'investment') {
      return item.id.includes('rental') || item.id.includes('compact');
    }
    return true;
  });

  return (
    <section id="house-types" className="py-20 md:py-28 bg-[#071527] text-white relative overflow-hidden border-t border-[#1E3A5F]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/40 text-cyan-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Architectural Masterpieces in Andhra Pradesh &amp; Telangana
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Unique House Types <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-300 bg-clip-text text-transparent">Constructed by {COMPANY_INFO.shortName}</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Every plot has unique geometry. Explore our signature residential typologies tailored for 150 to 500+ Sq.Yard plots, 100% Vastu alignment, cross-ventilation, and modern multi-generational living.
          </p>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedFilter === 'all'
                  ? 'bg-gradient-to-r from-[#00A3FF] to-[#0066CC] text-white shadow-lg shadow-blue-500/25 ring-2 ring-cyan-400/30'
                  : 'bg-[#0F1E36] hover:bg-[#1E3A5F] text-slate-300 border border-[#1E3A5F]'
              }`}
            >
              All Models ({HOUSE_TYPES_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('duplex')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedFilter === 'duplex'
                  ? 'bg-gradient-to-r from-[#00A3FF] to-[#0066CC] text-white shadow-lg shadow-blue-500/25 ring-2 ring-cyan-400/30'
                  : 'bg-[#0F1E36] hover:bg-[#1E3A5F] text-slate-300 border border-[#1E3A5F]'
              }`}
            >
              Contemporary Duplexes
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('villa')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedFilter === 'villa'
                  ? 'bg-gradient-to-r from-[#00A3FF] to-[#0066CC] text-white shadow-lg shadow-blue-500/25 ring-2 ring-cyan-400/30'
                  : 'bg-[#0F1E36] hover:bg-[#1E3A5F] text-slate-300 border border-[#1E3A5F]'
              }`}
            >
              Villas &amp; Mansions
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('investment')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedFilter === 'investment'
                  ? 'bg-gradient-to-r from-[#00A3FF] to-[#0066CC] text-white shadow-lg shadow-blue-500/25 ring-2 ring-cyan-400/30'
                  : 'bg-[#0F1E36] hover:bg-[#1E3A5F] text-slate-300 border border-[#1E3A5F]'
              }`}
            >
              Rental Income &amp; Compact Plots
            </button>
          </div>
        </div>

        {/* Exclusive Accordion Group */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {filteredHouseTypes.map((houseType, index) => {
            const isFirst = index === 0;
            const currentImgIndex = cardActiveImages[houseType.id] ?? 0;
            const currentView = houseType.galleryViews?.[currentImgIndex] || {
              label: 'Elevation',
              url: houseType.image,
              caption: houseType.tagline
            };

            return (
              <details
                key={houseType.id}
                name="house-types-exclusive"
                open={isFirst}
                className="group house-type-accordion bg-[#0F1E36] rounded-2xl border border-[#1E3A5F] open:border-[#00A3FF] open:bg-[#0B2545] transition-all duration-300 overflow-hidden shadow-lg open:shadow-2xl open:shadow-blue-500/15"
              >
                {/* Summary Element: No heading tags inside per modern-web-guidance */}
                <summary className="list-none cursor-pointer p-5 sm:p-6 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-2xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    
                    {/* Left: Icon, Title & Architectural Style */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00A3FF] via-[#0066CC] to-[#004099] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 group-open:scale-105 transition-transform">
                        {getIcon(houseType.iconName)}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 bg-blue-900/40 border border-blue-500/30 px-2.5 py-0.5 rounded-full">
                            {houseType.architecturalStyle}
                          </span>
                          <span className="text-xs text-slate-400">
                            Plot: <strong className="text-slate-200">{houseType.idealPlot}</strong>
                          </span>
                        </div>
                        {/* Title styled with div instead of h3 to protect screen reader tree */}
                        <div className="text-lg sm:text-xl font-bold text-white group-open:text-cyan-300 transition-colors">
                          {houseType.name}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-400 line-clamp-1 mt-0.5 group-open:hidden">
                          {houseType.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Right: Quick Spec Chips & Chevron */}
                    <div className="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t border-[#1E3A5F]/60 md:border-t-0">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="px-2.5 py-1 rounded-lg bg-[#071527] text-cyan-300 border border-[#1E3A5F] font-medium">
                          {houseType.builtUpArea}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                          {houseType.estimatedBudget.split('(')[0]}
                        </span>
                      </div>

                      {/* Animated Chevron */}
                      <div className="w-8 h-8 rounded-full bg-[#071527] group-open:bg-blue-600/30 text-slate-400 group-open:text-cyan-400 flex items-center justify-center transition-all duration-300 group-open:rotate-180 shrink-0 border border-[#1E3A5F]">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>

                  </div>
                </summary>

                {/* Expanded Content Drawer with Interactive Working Images */}
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#1E3A5F] text-slate-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-2">
                    
                    {/* Visual Photo Card with Working Gallery Switcher (5 cols) */}
                    <div className="lg:col-span-5 space-y-2">
                      <div className="relative group/img rounded-xl overflow-hidden border border-[#1E3A5F] shadow-xl bg-slate-950">
                        <img
                          src={currentView.url}
                          alt={`${houseType.name} - ${currentView.label}`}
                          className="w-full h-64 sm:h-72 object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071527]/90 via-[#071527]/20 to-transparent" />
                        
                        {/* Floating overlay badges */}
                        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#071527]/90 backdrop-blur-md text-cyan-400 text-xs font-bold border border-blue-500/30">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            100% Vastu Verified
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#071527]/90 backdrop-blur-md text-slate-300 text-xs font-medium border border-[#1E3A5F]">
                            <Ruler className="w-3.5 h-3.5 text-cyan-400" />
                            {currentView.label}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => setActiveImagePreview(currentView.url)}
                          className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#071527]/80 hover:bg-[#071527] text-white text-xs font-medium backdrop-blur-md flex items-center gap-1.5 border border-[#1E3A5F] transition-colors"
                          title="Expand Full View"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          Zoom
                        </button>

                        <div className="absolute bottom-3 left-3 text-xs text-slate-300 max-w-[70%]">
                          <div className="font-semibold text-white truncate">{currentView.caption}</div>
                          <div className="text-slate-400 text-[11px] mt-0.5">{houseType.facing}</div>
                        </div>
                      </div>

                      {/* Interactive Working Image Tabs under image */}
                      {houseType.galleryViews && houseType.galleryViews.length > 1 && (
                        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1">
                          {houseType.galleryViews.map((gView, gIdx) => (
                            <button
                              key={gIdx}
                              type="button"
                              onClick={() => handleSelectGalleryImage(houseType.id, gIdx)}
                              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all flex items-center gap-1 shrink-0 ${
                                currentImgIndex === gIdx
                                  ? 'bg-[#0066CC] text-white border-cyan-400 shadow-sm'
                                  : 'bg-[#071527] text-slate-400 border-[#1E3A5F] hover:text-white'
                              }`}
                            >
                              <ImageIcon className="w-3 h-3" />
                              <span>{gView.label}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Details & Room Breakdown (7 cols) */}
                    <div className="lg:col-span-7 space-y-4">
                      
                      {/* Crisp Description */}
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {houseType.description}
                      </p>

                      {/* Key Highlights Grid */}
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          Key Architectural &amp; Engineering Highlights
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {houseType.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-[#071527]/70 p-2.5 rounded-lg border border-[#1E3A5F]">
                              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Floor-by-Floor Architectural Breakdown */}
                      <div className="bg-[#071527]/90 rounded-xl p-4 border border-[#1E3A5F]">
                        <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
                          <FileCheck className="w-3.5 h-3.5" />
                          Spatial Floor-by-Floor Program
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-300 divide-y divide-[#1E3A5F]/60">
                          {houseType.floorBreakdown.map((floor, fIdx) => (
                            <li key={fIdx} className="pt-1.5 first:pt-0 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                              <span>{floor}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                        <div className="text-xs text-slate-400">
                          <span>Estimated Turnkey Cost: </span>
                          <strong className="text-white text-sm font-bold">{houseType.estimatedBudget}</strong>
                        </div>

                        <div className="flex items-center gap-2">
                          {onScrollToEstimator && (
                            <button
                              type="button"
                              onClick={onScrollToEstimator}
                              className="px-3.5 py-2 rounded-xl bg-[#071527] hover:bg-[#1E3A5F] text-xs font-semibold text-slate-200 border border-[#1E3A5F] flex items-center gap-1.5 transition-colors"
                            >
                              Calculate BOQ
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => onOpenConsultation(`Free 3D Architectural Consultation for: ${houseType.name}`)}
                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#00A3FF] to-[#0066CC] hover:brightness-110 text-xs font-bold text-white shadow-md shadow-blue-500/20 flex items-center gap-1.5 transition-all hover:scale-[1.02]"
                          >
                            <PhoneCall className="w-3.5 h-3.5" />
                            Request 2D/3D Floor Plan
                          </button>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

              </details>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#0B2545] via-[#0F1E36] to-[#0B2545] rounded-2xl border border-blue-500/30 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-5xl mx-auto shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-900/40 border border-blue-500/40 flex items-center justify-center shrink-0 text-cyan-400 shadow-md">
              <VastuIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-white">Have a Custom Plot Dimension in AP or Telangana?</div>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                From Maddipatla &amp; Krishna District to Vijayawada and Hyderabad, our in-house engineering team designs custom AutoCAD 2D/3D layouts tailored to your exact plot.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onOpenConsultation('Custom Architectural Plan Request')}
            className="shrink-0 px-5 py-3 rounded-xl bg-gradient-to-r from-[#00A3FF] to-[#0066CC] hover:brightness-110 text-white font-bold text-sm shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
          >
            Book Free Plot Survey
          </button>
        </div>

      </div>

      {/* Lightbox Modal for Full View */}
      {activeImagePreview && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in"
          onClick={() => setActiveImagePreview(null)}
        >
          <div className="relative max-w-4xl w-full bg-[#0F1E36] rounded-2xl overflow-hidden border border-[#1E3A5F] shadow-2xl">
            <img 
              src={activeImagePreview} 
              alt="House Model Elevation Preview" 
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
}
