import React, { useState, useId } from 'react';
import { Download, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PACKAGES_DATA } from '../data/builderData';

interface CostEstimatorProps {
  selectedPackageId: string;
  onPackageChange: (id: string) => void;
  onOpenConsultation: (note?: string) => void;
}

interface AddOn {
  id: string;
  name: string;
  cost: number;
  description: string;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({
  selectedPackageId,
  onPackageChange,
  onOpenConsultation,
}) => {
  const [measurementMode, setMeasurementMode] = useState<'yards' | 'sqft'>('yards');
  const [plotYards, setPlotYards] = useState<number>(200);
  const [customSqFt, setCustomSqFt] = useState<number>(3000);
  const [floors, setFloors] = useState<number>(3); // G+2 = 3 floors
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([
    'rcc-sump',
    'solar-system',
  ]);
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadLocality, setLeadLocality] = useState('Tellapur');
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const areaInputId = useId();

  const addOnsList: AddOn[] = [
    {
      id: 'rcc-sump',
      name: '12,000L Underground RCC Water Sump',
      cost: 180000,
      description: 'RCC waterproofed sump with dual-stage automated pressure booster pump',
    },
    {
      id: 'solar-system',
      name: '5kW On-Grid Rooftop Solar Plant',
      cost: 320000,
      description: 'Tier-1 bifacial panels with Telangana DISCOM net-metering setup (saves up to 75% power)',
    },
    {
      id: 'pooja-room',
      name: 'Designer Teakwood Vastu Pooja Room',
      cost: 140000,
      description: 'Custom CNC carved Burma teakwood jali and marble cladding altar',
    },
    {
      id: 'smart-home',
      name: 'Full Home Automation & Scene Control',
      cost: 250000,
      description: 'Smartphone & voice control for ambient lights, motorized curtains, and smart lock security',
    },
    {
      id: 'italian-marble',
      name: 'Italian Statuario Marble Upgrade',
      cost: 450000,
      description: 'Bookmatched genuine Italian marble throughout living, dining, and foyer areas',
    },
    {
      id: 'private-elevator',
      name: 'Glass Home Hydraulic Capsule Elevator (G+2)',
      cost: 750000,
      description: 'Zero-pit panoramic glass capsule elevator for seamless elder accessibility',
    },
    {
      id: 'terrace-pool',
      name: 'Terrace Heated Plunge Pool & Deck',
      cost: 800000,
      description: 'Mosaic tiled pool with sand filtration, submerged LED lighting & composite deck',
    },
  ];

  const currentPackage =
    PACKAGES_DATA.find((p) => p.id === selectedPackageId) || PACKAGES_DATA[1];

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculate Built-Up Area
  // In Hyderabad: Plot area in yards -> Ground floor coverage ~60-65% (1 yard = 9 sq.ft).
  // 200 yards = 1800 sq.ft plot. Coverage = ~1100 sq.ft per floor. G+2 (3 floors) = ~3,300 sq.ft built-up area.
  const calculatedBuiltUpArea = measurementMode === 'yards'
    ? Math.round(plotYards * 5.5 * (floors * 0.95))
    : customSqFt;

  const baseCost = calculatedBuiltUpArea * currentPackage.ratePerSqFt;

  const addOnsTotal = selectedAddOns.reduce((total, id) => {
    const item = addOnsList.find((a) => a.id === id);
    return total + (item ? item.cost : 0);
  }, 0);

  const grandTotal = baseCost + addOnsTotal;

  // Format currency in Lakhs and Crores
  const formatINR = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakh`;
    }
    return `₹${val.toLocaleString()}`;
  };

  const handleDownloadBOQ = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadPhone) return;

    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00A3FF', '#0066CC', '#10B981', '#0B2545'],
    });

    setLeadSubmitted(true);
  };

  return (
    <section id="calculator" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-700 bg-orange-50 px-3.5 py-1 rounded-full border border-orange-200 shadow-xs">
            Tech-Enabled Cost Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
            Estimate Your Construction Cost — AP &amp; Telangana
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Select your plot size in Square Yards or Square Feet, pick your floor configuration, 
            and see transparent itemized pricing backed by our <strong>Zero Escalation Guarantee</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            
            {/* 1. Mode Selector: Sq.Yards vs Sq.Ft */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                  1. How would you like to measure your plot?
                </label>
                <div className="flex bg-slate-200 p-0.5 rounded-lg text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setMeasurementMode('yards')}
                    className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                      measurementMode === 'yards'
                        ? 'bg-[#0B2545] text-white shadow-xs'
                        : 'text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    Plot in Sq. Yards (AP &amp; TS Standard)
                  </button>
                  <button
                    type="button"
                    onClick={() => setMeasurementMode('sqft')}
                    className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                      measurementMode === 'sqft'
                        ? 'bg-[#0B2545] text-white shadow-xs'
                        : 'text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    Built-up in Sq. Ft
                  </button>
                </div>
              </div>

              {measurementMode === 'yards' ? (
                <div>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {[150, 180, 200, 240, 280, 350, 500].map((yards) => (
                      <button
                        key={yards}
                        type="button"
                        onClick={() => setPlotYards(yards)}
                        className={`py-2 px-1 text-center rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                          plotYards === yards
                            ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white border-orange-500 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                        }`}
                      >
                        {yards} Yds
                      </button>
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1.5 block">
                    {plotYards} Sq. Yards = {(plotYards * 9).toLocaleString()} sq.ft land area
                  </span>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-slate-600">Custom Built-Up Area:</span>
                    <span className="text-base font-extrabold text-[#0066CC]">{customSqFt.toLocaleString()} sq.ft</span>
                  </div>
                  <input
                    id={areaInputId}
                    type="range"
                    min="1200"
                    max="8000"
                    step="100"
                    value={customSqFt}
                    onChange={(e) => setCustomSqFt(Number(e.target.value))}
                    className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-[#0066CC]"
                  />
                </div>
              )}
            </div>

            {/* 2. Floors Config */}
            <div>
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-800 block mb-2.5">
                2. Elevation &amp; Number of Floors
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: 'Ground (G)', value: 1, sub: 'Single Floor' },
                  { label: 'G + 1', value: 2, sub: 'Standard Duplex' },
                  { label: 'G + 2', value: 3, sub: 'Spacious Duplex' },
                  { label: 'G + 3', value: 4, sub: 'Rental + Home' },
                ].map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setFloors(item.value)}
                    className={`py-2.5 px-2 rounded-xl text-center border transition-all cursor-pointer ${
                      floors === item.value
                        ? 'bg-[#0B2545] text-white border-[#0B2545] shadow-sm'
                        : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    <span className="block text-xs font-extrabold">{item.label}</span>
                    <span className={`text-[10px] block mt-0.5 ${floors === item.value ? 'text-amber-300' : 'text-slate-500'}`}>
                      {item.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Package Selection */}
            <div>
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-800 block mb-2.5">
                3. Select Turnkey Package
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {PACKAGES_DATA.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => onPackageChange(pkg.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      currentPackage.id === pkg.id
                        ? 'bg-orange-50/90 border-orange-500 ring-2 ring-orange-500/20 shadow-xs'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-orange-600 block">
                        {pkg.name.split(' ')[0]}
                      </span>
                      <span className="text-sm font-black text-[#0B2545] block mt-0.5">
                        ₹{pkg.ratePerSqFt}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 mt-1 block">/ sq.ft</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Hyderabad Specific Add-ons */}
            <div>
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-800 block mb-2.5">
                4. Essential Upgrades &amp; Systems
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {addOnsList.map((addon) => {
                  const isChecked = selectedAddOns.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 ${
                        isChecked
                          ? 'bg-orange-50/60 border-orange-500'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border transition-colors ${
                          isChecked
                            ? 'bg-orange-600 border-orange-600 text-white'
                            : 'border-slate-400 bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-xs font-bold text-slate-900 block">
                          {addon.name}
                        </span>
                        <span className="text-[11px] font-extrabold text-orange-600 block">
                          +{formatINR(addon.cost)}
                        </span>
                        <p className="text-[10px] text-slate-500 leading-tight">
                          {addon.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Results & Lead Form Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Total Estimate Card */}
            <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FB923C] block">
                Estimated Hyderabad Investment
              </span>

              <div className="flex items-baseline gap-2 mt-2 mb-3">
                <span className="text-3xl sm:text-4xl font-black text-white font-sans">
                  {formatINR(grandTotal)}
                </span>
                <span className="text-xs text-slate-300">
                  (₹{(grandTotal / calculatedBuiltUpArea).toFixed(0)}/sq.ft avg)
                </span>
              </div>

              {/* Summary table */}
              <div className="space-y-2 py-4 border-y border-slate-700 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Calculated Built-Up:</span>
                  <span className="font-bold text-white">{calculatedBuiltUpArea.toLocaleString()} sq.ft</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Selected Package:</span>
                  <span className="font-bold text-[#FB923C]">{currentPackage.name} (₹{currentPackage.ratePerSqFt}/sq.ft)</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Base Civil &amp; Finishes:</span>
                  <span className="font-bold text-white">{formatINR(baseCost)}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Selected Upgrades ({selectedAddOns.length}):</span>
                  <span className="font-bold text-[#FB923C]">+{formatINR(addOnsTotal)}</span>
                </div>
                <div className="flex justify-between text-emerald-400 text-[11px] pt-1">
                  <span>✓ 430+ QC &amp; Live CCTV App:</span>
                  <span className="font-bold">INCLUDED FREE</span>
                </div>
              </div>

              {/* Lead Capture Form for Itemized Hyderabad BOQ */}
              <div className="mt-6 pt-2">
                {!leadSubmitted ? (
                  <form onSubmit={handleDownloadBOQ} className="space-y-3">
                    <p className="text-xs text-slate-200 font-semibold">
                      Receive this itemized BOQ with material brand guarantees and schedule a free plot survey:
                    </p>
                    <div className="space-y-2">
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        className="w-full py-2 px-3 rounded-lg text-xs bg-slate-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Phone / WhatsApp Number *"
                        value={leadPhone}
                        onChange={(e) => setLeadPhone(e.target.value)}
                        className="w-full py-2 px-3 rounded-lg text-xs bg-slate-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                      />
                      <select
                        value={leadLocality}
                        onChange={(e) => setLeadLocality(e.target.value)}
                        className="w-full py-2 px-3 rounded-lg text-xs bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-orange-500"
                      >
                        <option value="Krishna / Gudur / Maddipatla">Krishna District (Gudur / Maddipatla / Machilipatnam)</option>
                        <option value="Vijayawada / Guntur">Vijayawada &amp; Guntur Capital Region</option>
                        <option value="Medchal / Shamirpeta / Aliabad">Medchal / Shamirpeta / Aliabad (Telangana Hub)</option>
                        <option value="Tellapur / Financial District">Tellapur / Financial District (Hyderabad)</option>
                        <option value="Jubilee Hills / Banjara Hills">Jubilee Hills / Banjara Hills (Hyderabad)</option>
                        <option value="Kokapet / Gandipet">Kokapet / Gandipet (Hyderabad)</option>
                        <option value="Manikonda / Puppalaguda">Manikonda / Puppalaguda (Hyderabad)</option>
                        <option value="Bachupally / Miyapur">Bachupally / Miyapur (Hyderabad)</option>
                        <option value="Other AP / Telangana">Other AP / Telangana Location</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:brightness-110 shadow-lg shadow-orange-500/25 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4 text-white" />
                      <span>Download Itemized BOQ &amp; Price Lock</span>
                    </button>
                  </form>
                ) : (
                  <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-center space-y-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                      <Check className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm text-white">
                      BOQ Generated for {leadName}!
                    </h4>
                    <p className="text-xs text-slate-300">
                      Our Hyderabad chief engineer will call you at {leadPhone} to provide your detailed itemized quote and arrange a free plot survey in {leadLocality}.
                    </p>
                    <button
                      type="button"
                      onClick={() => onOpenConsultation(`Follow-up on BOQ for ${calculatedBuiltUpArea} sq.ft in ${leadLocality}`)}
                      className="mt-2 text-xs font-bold text-[#FB923C] underline cursor-pointer"
                    >
                      Book Free Soil &amp; Site Visit Now →
                    </button>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
