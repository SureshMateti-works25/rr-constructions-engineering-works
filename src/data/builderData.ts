import type { Project, Service, ConstructionPackage, MaterialBrand, ProcessStage, Testimonial, Partner, FAQItem, PackageFeature, HouseType, ActiveProjectProgress } from '../types';

export const COMPANY_INFO = {
  name: 'RR CONSTRUCTIONS AND ENGINEERING WORKS',
  shortName: 'RR Constructions',
  brandInitials: 'RR',
  legalName: 'RR Constructions and Engineering Works',
  proprietor: 'Ram',
  proprietorTitle: 'Proprietor',
  cityFocus: 'Andhra Pradesh & Telangana',
  tagline: 'BUILDING TRUST, DELIVERING QUALITY',
  subTagline: 'BUILDING IDEAS | CREATING SPACES | SHAPING TOMORROW',
  establishedYear: '2016',
  projectsCompleted: 380,
  sqFtDelivered: '4.2 Million+',
  onTimeDeliveryRate: '99.8%',
  satisfactionRate: '4.9/5.0',
  qualityChecksCount: '430+',
  warrantyYears: 10,
  waterproofingYears: 5,
  freeMaintenanceYears: 1,
  phone: '+91 79957 53177',
  secondaryPhone: '+91 79957 53177',
  email: 'Ram@rrconstructions.info',
  gstin: '37OZVPS5053M1ZY',
  headOffice: '1-161, Maddipatla, Gudur Mandal, Krishna, Andhra Pradesh - 521150',
  hyderabadHub: 'Pranava Business Square, Gachibowli, Hyderabad & Krishna District AP',
  reraNumber: 'GSTIN: 37OZVPS5053M1ZY • ISO 9001:2015 & Structural Certified',
  isoCertification: 'ISO 9001:2015 & ISO 45001:2018 Certified Engineering Works',
  cctvGuarantee: '24/7 Live Stream on RR Client Portal',
  startingRate: '₹1,879',
};

export const TRUST_PILLARS = [
  {
    id: 'quality-workmanship',
    title: 'Quality Workmanship',
    tagline: 'Precision engineering, certified NABL materials & master structural craftsmen',
    iconName: 'ShieldCheck',
  },
  {
    id: 'on-time-delivery',
    title: 'On-Time Delivery',
    tagline: 'Guaranteed milestone handovers with zero delay commitments',
    iconName: 'Handshake',
  },
  {
    id: 'cost-effective-solutions',
    title: 'Cost Effective Solutions',
    tagline: '100% transparent rates, zero escalation bonds & value engineering',
    iconName: 'Settings',
  },
  {
    id: 'customer-satisfaction',
    title: 'Customer Satisfaction',
    tagline: '380+ delighted residential homeowners, industrial owners & architects',
    iconName: 'Users',
  },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'constructions',
    title: 'Constructions',
    tagline: 'Residential, Commercial, Industrial & Turnkey Projects',
    iconName: 'Home',
    image: '/images/civil-construction-in-progress.jpg',
    description: 'Complete civil and architectural construction across Andhra Pradesh & Telangana. From luxury residential duplexes and commercial office buildings to heavy industrial warehouses, executed under single-point turnkey responsibility.',
    deliverables: [
      'Residential Buildings (Custom Duplexes, Luxury Villas & Multi-Storey)',
      'Commercial Buildings (Corporate Offices, Retail Complex & Showrooms)',
      'Industrial Construction (Warehouses, Heavy Slabs & Factory Sheds)',
      'Turnkey Projects (End-to-End: Soil Test, Permissions to Handover)',
      '430+ Stage-wise Quality Checks certified on the RR Client Portal'
    ],
    warranty: '10-Year Structural, 5-Year Waterproofing, 1-Year Free Maintenance',
    timelineAvg: '8 to 12 Months'
  },
  {
    id: 'metal-structural-works',
    title: 'Metal Structural Works',
    tagline: 'Steel Fabrication, Erection & Industrial Sheds',
    iconName: 'Building2',
    image: '/images/metal-structural-peb-erection.jpg',
    description: 'State-of-the-art metal engineering, high-tensile steel fabrication, and on-site structural erection. We manufacture and install heavy industrial sheds, pre-engineered buildings (PEB), mezzanines, and industrial canopy structures.',
    deliverables: [
      'Steel Fabrication (CNC cutting, plasma bevelling, certified welding)',
      'Erection & Installation (Heavy crane rigging and laser plumb alignment)',
      'Industrial Sheds & Buildings (Clear span PEB structures & logistics parks)',
      'Heavy Steel Works (Trusses, portal frames, gantry crane beams)'
    ],
    warranty: '15-Year Steel Structural Integrity Guarantee',
    timelineAvg: '3 to 6 Months'
  },
  {
    id: 'designing-works',
    title: 'Designing Works',
    tagline: '2D AutoCAD, 3D Elevation, Structural & Shop Drawings',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    description: 'Full-spectrum architectural, structural, and mechanical engineering design. We produce 100% Vastu-compliant layouts, photorealistic 3D elevations, STAAD-Pro structural designs, and detailed steel fabrication shop drawings.',
    deliverables: [
      '2D AutoCAD Drawings (Architectural plans, working & GFC drawings)',
      '3D Elevation & Photorealistic Day/Night Rendering',
      'Structural Designing (Bending moments, seismic & load analysis)',
      'Shop Drawings & Detailing (Assembly marks, bolt schedules & BOM)'
    ],
    warranty: '100% Municipal Bye-law & IS Code Compliant',
    timelineAvg: '10 to 15 Days per Stage'
  },
  {
    id: 'flooring-works',
    title: 'Flooring Works',
    tagline: 'Epoxy, PU, Industrial, Anti-Static & Commercial Flooring',
    iconName: 'Layers',
    image: '/images/industrial-epoxy-flooring.jpg',
    description: 'Specialized chemical and performance flooring systems for pharmaceutical plants, industrial warehouses, electronic assembly clean rooms, commercial complexes, and luxury parking bays.',
    deliverables: [
      'Epoxy Flooring (Self-leveling chemical, abrasion & impact resistant)',
      'PU (Polyurethane) Flooring (Flexible, UV stable & thermal shock resistant)',
      'Industrial Flooring (Heavy machinery traffic, vacuum dewatered VDF slabs)',
      'Anti-Static (ESD) Flooring (For semiconductor, IT server & hospital OT rooms)',
      'Commercial Flooring (High-gloss decorative polished concrete & quartz)'
    ],
    warranty: '5-Year Chemical & Delamination Guarantee',
    timelineAvg: '5 to 14 Days Application'
  },
  {
    id: 'smart-green-homes',
    title: 'Solar & Smart Sustainable Buildings',
    tagline: 'Cut operational power and water bills by up to 75%',
    iconName: 'Leaf',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    description: 'Climate-responsive engineering utilizing thermal-insulating fly-ash/AAC blocks, passive cross-ventilation, rooftop solar plants, and rainwater harvesting sumps tailored for Andhra Pradesh & Telangana climate.',
    deliverables: [
      'Hybrid on-grid solar system (3kW to 100kW industrial/residential) with net-metering',
      'Centralized rainwater harvesting percolation pit with desilting chamber',
      'Thermal reflective exterior terrace cool-roof coating',
      'Smartphone app-controlled lighting, geysers, and security cameras'
    ],
    warranty: '25-Year Solar Panel Performance Warranty',
    timelineAvg: 'Integrated within standard timeline'
  },
  {
    id: 'project-management-cctv',
    title: 'Digital Project Tracking & 24/7 Live CCTV',
    tagline: 'Watch your project progress live from anywhere in the world',
    iconName: 'ShieldCheck',
    image: '/images/civil-construction-in-progress.jpg',
    description: 'Designed especially for business owners, busy professionals, and NRIs. We install 360-degree HD CCTV cameras on your site. Receive daily photo logs, material test reports, and approve milestone bills directly on your phone.',
    deliverables: [
      'Dedicated 24/7 live video stream accessible via iOS and Android',
      'Daily site logs with labor count, weather, and concrete curing timers',
      'Escrow milestone payment model: pay only after digital QC approval',
      'Digital document repository for all warranties and sanctioned plans'
    ],
    warranty: '100% Zero Cost Overrun Guarantee',
    timelineAvg: 'Full Project Duration'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'tellapur-duplex',
    title: 'The Tellapur Grand Villa',
    subtitle: 'G+2 Contemporary 4-BHK Luxury Duplex',
    category: 'villas',
    status: 'Completed',
    location: 'Tellapur, Near Financial District, Hyderabad',
    area: '3,850 sq.ft Built-up',
    plotSize: '240 Sq.Yards (East Facing)',
    timeline: '10 Months (Completed Dec 2025)',
    budgetTier: 'Luxury',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlanUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    description: 'A striking contemporary duplex featuring wooden facade louvers, a double-height living room, private terrace garden with pergola, and Vastu-compliant pooja room. Complete with 5kW rooftop solar plant and 12,000L underground RCC sump.',
    features: [
      'Double-height ceiling in living area with Saint-Gobain acoustic glass',
      'Italian Statuario marble flooring on ground floor',
      'Terrace garden with wooden pergola and vertical drip irrigation',
      'Tata Tiscon Fe 550D TMT reinforcement with M25 ready-mix concrete',
      'Full Vastu compliance with Northeast entrance and Southeast kitchen'
    ],
    materialsHighlight: [
      'Tata Tiscon Fe 550D Rebar',
      'UltraTech 53G Weather-Shield Cement',
      'Kohler Wall-hung Sanitaryware',
      'Schneider Electric Modular Switches'
    ],
    clientQuote: {
      author: 'Srinivas & Madhavi Rao',
      locality: 'Tellapur, Hyderabad',
      text: 'Being in the US, monitoring our home construction in Hyderabad was our biggest fear. BuildX Homes eliminated all stress with their live CCTV app and weekly drone logs. Delivered 2 weeks ahead of time without 1 rupee of extra cost!',
      rating: 5
    }
  },
  {
    id: 'jubilee-hills-manor',
    title: 'Jubilee Hills Signature Residence',
    subtitle: 'G+3 Bespoke Luxury Independent House',
    category: 'villas',
    status: 'Completed',
    location: 'Road No. 45, Jubilee Hills, Hyderabad',
    area: '6,200 sq.ft Built-up',
    plotSize: '380 Sq.Yards (North Facing)',
    timeline: '13 Months (Completed Oct 2025)',
    budgetTier: 'Luxury',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlanUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    description: 'An architectural statement in Jubilee Hills featuring cantilevered balconies, private hydraulic glass capsule elevator, acoustic home theater, and full Control4 smart home automation.',
    features: [
      'Panoramic glass home elevator serving Ground to Terrace',
      'Custom teakwood main door with biometric digital lock',
      'Imported bookmatched Italian marble throughout foyer and living',
      'Underground 15,000L sump with dual motor automatic pumping'
    ],
    materialsHighlight: [
      'JSW Neosteel Fe 550D TMT',
      'UltraTech Super Premium Cement',
      'Grohe Essence Designer Fixtures',
      'Schüco Slimline Aluminium Windows'
    ],
    clientQuote: {
      author: 'Dr. V. Prasad & Archana',
      locality: 'Jubilee Hills, Hyderabad',
      text: 'Their civil engineers are exceptionally disciplined. The 430-point quality checklist gave us complete confidence, especially the 28-day concrete cube crush test reports from the NABL lab.',
      rating: 5
    }
  },
  {
    id: 'gachibowli-executive',
    title: 'Gachibowli Executive Duplex',
    subtitle: 'G+2 Minimalist 3-BHK Residence',
    category: 'villas',
    status: 'Completed',
    location: 'Near Wipro Circle, Gachibowli, Hyderabad',
    area: '2,950 sq.ft Built-up',
    plotSize: '180 Sq.Yards (West Facing)',
    timeline: '9 Months (Completed Jan 2026)',
    budgetTier: 'Premium',
    heroImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlanUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    description: 'Designed for a tech executive family in Gachibowli. Efficient space planning, integrated home office, high-durability glazed vitrified tiles, and terrace open-air gym.',
    features: [
      'Integrated sound-insulated home office on second floor',
      '800x1600mm large format tiles with laser joint alignment',
      '3kW rooftop solar power with Telangana DISCOM net-metering',
      'Fenesta acoustic UPVC windows blocking exterior city noise'
    ],
    materialsHighlight: [
      'Tata Tiscon Fe 550D Steel',
      'Dalmia DSP Grade 53 Cement',
      'Jaquar Artize Bathroom Fixtures',
      'Asian Paints Royale Luxury Interior'
    ],
    clientQuote: {
      author: 'Karthik & Sneha Reddy',
      locality: 'Gachibowli, Hyderabad',
      text: 'The best decision was choosing BuildX’s Premium package. Clear fixed-price BOQ, zero escalation, and complete transparency on material delivery slips.',
      rating: 5
    }
  },
  {
    id: 'kokapet-golden-mile',
    title: 'Kokapet Golden Mile Villa',
    subtitle: 'G+2 Ultra-Luxury Cantilevered Sanctuary',
    category: 'villas',
    status: 'Under Construction',
    location: 'Golden Mile Road, Kokapet, Hyderabad',
    area: '4,400 sq.ft Built-up',
    plotSize: '300 Sq.Yards (North-East Corner)',
    timeline: 'Target Handover: August 2026',
    budgetTier: 'Luxury',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlanUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    description: 'Corner plot architectural villa with cantilevered structural concrete canopy, infinity edge plunge pool, and floor-to-ceiling thermal break glass systems.',
    features: [
      'Private terrace heated plunge pool with filtration system',
      'High-durability post-tensioned beam calculations for open layouts',
      'Centralized solar water heating with pressurized water pump',
      'Custom stone cladding on exterior facade with IP68 outdoor warm lights'
    ],
    materialsHighlight: [
      'Tata Tiscon 550D Rebar',
      'UltraTech Ready Mix Concrete M30',
      'Hansgrohe Axor Sanitaryware',
      'Saint-Gobain Low-E Cool-Lite'
    ]
  },
  {
    id: 'manikonda-duplex',
    title: 'Manikonda Modern Independent House',
    subtitle: 'G+2 4-BHK Spacious Family Home',
    category: 'villas',
    status: 'Completed',
    location: 'Puppalaguda / Manikonda, Hyderabad',
    area: '3,200 sq.ft Built-up',
    plotSize: '200 Sq.Yards (East Facing)',
    timeline: '10 Months (Completed Nov 2025)',
    budgetTier: 'Elite',
    heroImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlanUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    description: 'A functional family residence with separate rental floor on top. Designed for maximum light and natural breeze with large French windows and modern elevation fins.',
    features: [
      'Separate external staircase for top rental unit yielding monthly income',
      'Rainwater harvesting recharge well connected to borewell',
      'First-quality solid teakwood door frames and shutters',
      'Polycab FRLS wiring with Legrand modular switches'
    ],
    materialsHighlight: [
      'JSW Fe 550D Rebar',
      'UltraTech 53G Cement',
      'Kajaria 4x2 Vitrified Tiles',
      'Hindware Italian Collection'
    ],
    clientQuote: {
      author: 'M. Venkat & Lakshmi',
      locality: 'Manikonda, Hyderabad',
      text: 'BuildX helped us get GHMC building approval smoothly. The construction was completed cleanly and handed over exactly on the promised date.',
      rating: 5
    }
  },
  {
    id: 'kompally-courtyard',
    title: 'Kompally Green Courtyard Villa',
    subtitle: 'G+1 Traditional-Contemporary Fusion Villa',
    category: 'villas',
    status: 'Completed',
    location: 'Near Cineplanet, Kompally, Hyderabad',
    area: '3,400 sq.ft Built-up',
    plotSize: '280 Sq.Yards',
    timeline: '9 Months (Completed Feb 2026)',
    budgetTier: 'Elite',
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlanUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    description: 'A serene home in Kompally featuring an internal green courtyard, open skylight, solar water heating, and natural terracotta jali screens.',
    features: [
      'Internal open-to-sky courtyard bringing fresh air into all living zones',
      'Solar thermal hot water system with pressure booster pump',
      'Underground 10,000L sump and overhead 2,000L Sintex triple-layer tank',
      'High-grade anti-skid terrace tiles with thermal proofing'
    ],
    materialsHighlight: [
      'Tata Tiscon 550D Rebar',
      'UltraTech 53G Cement',
      'Astral CPVC/UPVC Pipes',
      'Asian Paints Apex Ultima Exterior'
    ]
  }
];

export const PACKAGES_DATA: ConstructionPackage[] = [
  {
    id: 'elegance-package',
    name: 'Elegance Package',
    tier: 'Elegance',
    tagline: 'Standard, solid & reliable house construction at an affordable price',
    ratePerSqFt: 1879,
    currencySymbol: '₹',
    idealFor: 'Value-conscious homeowners and rental-generating residential builds in Hyderabad.',
    highlights: [
      'Structural RCC with Fe 500/550D branded TMT rebar',
      'UltraTech / ACC / Dalmia Grade 53 high-strength cement',
      'Vitrified tile flooring (up to ₹60–₹75/sq.ft allowance)',
      'Jaquar / Cera contemporary bathroom CP fittings',
      'Finolex / Polycab FRLS concealed copper electrical wiring',
      '10-Year Structural Defect Warranty & 430+ QC Checks'
    ],
    structuralSpecs: [
      'Steel: JSW / Kamdhenu / Tata Tiscon Fe 500/550D TMT',
      'Cement: UltraTech / Dalmia / Zuari 53 Grade',
      'Aggregates: 20mm & 12mm machine-crushed blue metal granite',
      'Sand: High-density double-washed M-Sand and P-Sand for plastering',
      'Walls: Solid concrete blocks (9" exterior, 4" interior) or red clay bricks',
      'Ceiling Height: 10 feet clear floor-to-ceiling height'
    ],
    finishingSpecs: [
      'Flooring: 2x2 or 4x2 Vitrified Tiles in living, dining, and bedrooms',
      'Kitchen: 20mm Polished Black Granite with stainless steel sink',
      'Main Door: Teakwood frame with designer skin flush shutter',
      'Windows: 2.5-track aluminium/UPVC sliding windows with mosquito mesh',
      'Painting: Asian Paints Tractor Emulsion interior, Apex exterior'
    ]
  },
  {
    id: 'premium-package',
    name: 'Premium Package',
    tier: 'Premium',
    tagline: 'Our most chosen tier — superior durability, better finishes & modern elevations',
    ratePerSqFt: 2099,
    currencySymbol: '₹',
    popular: true,
    idealFor: 'Families wanting modern designer aesthetics, premium fittings, and long-term peace of mind.',
    highlights: [
      'Tata Tiscon Fe 550D Super Ductile Rebar + M25 RMC',
      'Large format Glazed Vitrified Tiles (GVT 800x1600mm, up to ₹110/sq.ft)',
      'Kohler / Grohe designer bathroom sanitaryware with concealed cisterns',
      'Schneider / Legrand modular switches with smart home pre-wiring',
      'Fenesta / Prominance heavy-duty acoustic UPVC windows',
      '10-Year Structural + 5-Year Waterproofing Warranty'
    ],
    structuralSpecs: [
      'Steel: Tata Tiscon Fe 550D Super Ductile TMT Rebar',
      'Cement: UltraTech Super Weather-Shield 53 Grade',
      'Foundation: Anti-termite chemical soil injection under footings and plinth',
      'Waterproofing: Fosroc 3-coat polymer membrane + 72-hr ponding test',
      'Ceiling Height: 10.5 feet clear floor-to-ceiling height',
      'Plumbing: Astral / Ashirvad CPVC hot & cold water lines'
    ],
    finishingSpecs: [
      'Flooring: 800x1600mm GVT Large Slabs in Living & Dining',
      'Kitchen: Quartz / Premium Granite platform with Franke double sink',
      'Doors: 8ft First-Quality Solid Teakwood main door with Yale smart lock',
      'Windows: Heavy-duty UPVC acoustic sliding windows with Saint-Gobain glass',
      'Painting: Asian Paints Royale Luxury interior & Apex Ultima weatherproof exterior'
    ]
  },
  {
    id: 'elite-package',
    name: 'Elite Package',
    tier: 'Elite',
    tagline: 'Best value for money — superior material specs, wider flexibility & luxury finish',
    ratePerSqFt: 2249,
    currencySymbol: '₹',
    idealFor: 'Custom duplexes & modern villas with high-end architectural and lighting details.',
    highlights: [
      'Tata Tiscon Fe 550D + Ready-Mix Concrete with automated slump testing',
      'Composite Marble / Premium Italian look GVT (up to ₹160/sq.ft)',
      'Kohler Statement / Grohe Eurosmart thermostatic shower systems',
      'Full Home Automation pre-conduit (Lighting, Motorized Curtains, AC)',
      'Saint-Gobain Low-E acoustic double glazing with UPVC/Aluminium',
      'Dedicated Site Engineer + 24/7 Live App CCTV streaming'
    ],
    structuralSpecs: [
      'Steel: Tata Tiscon Fe 550D with post-tensioned beam calculations',
      'Cement: UltraTech Premium / Dalmia DSP 53 Grade',
      'Walls: Thermal-insulating AAC blocks / Wienerberger clay bricks',
      'Plumbing: Astral Silencio acoustic noise-dampening drainage pipes',
      'Ceiling Height: 11.0 feet clear floor-to-ceiling height'
    ],
    finishingSpecs: [
      'Flooring: Large format GVT Slabs or Imported Composite Granite',
      'Kitchen: Premium Quartz stone with Carysil granite sink & chimney outlet',
      'Doors: 8.5ft Solid Burma Teak with pivot hinges and digital lock',
      'Bathrooms: Full height tile cladding, glass shower cubicle, Kohler wall-hung WCs',
      'Electrical: Legrand Arteor / Schneider Zencelo switches'
    ]
  },
  {
    id: 'luxury-package',
    name: 'Luxury Royal Package',
    tier: 'Luxury',
    tagline: 'The ultimate bespoke experience — Italian marble, VRF AC & German fittings',
    ratePerSqFt: 2399,
    currencySymbol: '₹',
    idealFor: 'Discerning clients building high-end custom villas, duplexes & penthouses.',
    highlights: [
      'Imported Italian Statuario/Bottochino Marble (up to ₹300/sq.ft allowance)',
      'Full Smart Home Automation (Lighting, Curtains, Smart Security, Climate)',
      'Concealed VRV/VRF Multi-Zone Air Conditioning pre-installation',
      'Hansgrohe / Artize sculptural luxury bathroom sanitaryware',
      'Rooftop 5kW On-Grid Solar Plant with Telangana DISCOM Net Metering',
      'Lifetime Structural Integrity Guarantee + 2-Year Concierge Maintenance'
    ],
    structuralSpecs: [
      'Steel: Tata Tiscon Fe 550D High Ductility Seismic Spec',
      'Concrete: RMC M30/M35 design mix with NABL cube test reports on every pour',
      'Double-skin insulated exterior cavity walls for Hyderabad thermal comfort',
      'Ceiling Height: 11.5 to 12.0 feet clear height',
      'Underground RCC 15,000L sump with epoxy anti-bacterial coating'
    ],
    finishingSpecs: [
      'Flooring: Genuine Italian Bookmatched Marble in Living, Dining & Foyer',
      'Kitchen: Blum/Hafele soft-close hardware with Silestone quartz island',
      'Doors: 8.5ft Solid Burma Teak grand pivot door with biometric fingerprint lock',
      'Windows: Schüco / Reynaers German slimline thermal-break aluminium systems',
      'Bathrooms: Full marble cladding, freestanding soaking tub, Hansgrohe Raindance'
    ]
  }
];

export const PACKAGE_COMPARISON: PackageFeature[] = [
  {
    name: 'Starting Rate Per Sq.Ft',
    elegance: '₹1,879 / sq.ft',
    premium: '₹2,099 / sq.ft (Most Chosen)',
    elite: '₹2,249 / sq.ft (Best Value)',
    luxury: '₹2,399+ / sq.ft (Ultra Luxury)'
  },
  {
    name: 'Structural Steel Brand',
    elegance: 'JSW / Kamdhenu Fe 500/550D',
    premium: 'Tata Tiscon Fe 550D Super Ductile',
    elite: 'Tata Tiscon Fe 550D High Ductility',
    luxury: 'Tata Tiscon Fe 550D (Seismic Zone V Spec)'
  },
  {
    name: 'Cement Grade & Brand',
    elegance: 'UltraTech / Dalmia 53 Grade',
    premium: 'UltraTech Super Weather-Shield 53G',
    elite: 'UltraTech Premium / Dalmia DSP',
    luxury: 'UltraTech RMC M30 Design Mix'
  },
  {
    name: 'Clear Ceiling Height',
    elegance: '10.0 Feet',
    premium: '10.5 Feet',
    elite: '11.0 Feet',
    luxury: '11.5 to 12.0 Feet'
  },
  {
    name: 'Living & Dining Flooring',
    elegance: 'Vitrified Tiles (up to ₹70/sq.ft)',
    premium: 'Large Format GVT 800x1600 (₹110/sq.ft)',
    elite: 'Composite Marble / GVT Slab (₹160/sq.ft)',
    luxury: 'Imported Italian Marble (₹300/sq.ft)'
  },
  {
    name: 'Bathroom Sanitaryware',
    elegance: 'Jaquar / Cera Contemporary',
    premium: 'Kohler / Grohe Wall-hung WCs',
    elite: 'Kohler Statement / Grohe Eurosmart',
    luxury: 'Hansgrohe / Artize Sculptural'
  },
  {
    name: 'Window Systems',
    elegance: '2.5-Track Aluminium/UPVC with mesh',
    premium: 'Fenesta Acoustic Heavy UPVC',
    elite: 'Prominance / Saint-Gobain UPVC DGU',
    luxury: 'Schüco German Slimline Aluminium'
  },
  {
    name: 'Main Entrance Door',
    elegance: 'Teakwood frame + Skin door (7ft)',
    premium: 'First-quality Solid Teakwood (8ft)',
    elite: 'Solid Teakwood with Yale Lock (8ft)',
    luxury: 'Solid Burma Teak Pivot Door (8.5ft)'
  },
  {
    name: 'Smart Home Automation',
    elegance: 'Standard wiring conduits',
    premium: 'Smart home automation ready conduit',
    elite: 'Smart switches for lights & fans',
    luxury: 'Full Control4 App Automation'
  },
  {
    name: 'Rooftop Solar Plant',
    elegance: 'Solar water heater provision',
    premium: 'Solar water heater included',
    elite: '3kW On-Grid Solar System',
    luxury: '5kW Hybrid Solar Plant + Net Metering'
  },
  {
    name: 'Live CCTV Mobile Tracking',
    elegance: '2 HD Cameras on Mobile App',
    premium: '3 HD 360° Cameras on Mobile App',
    elite: '4 4K Cameras + Daily Drone Logs',
    luxury: '6 4K AI Cameras + Dedicated Engineer'
  },
  {
    name: 'Structural Warranty',
    elegance: '10 Years',
    premium: '10 Years + 5-Yr Waterproofing',
    elite: '10 Years + 5-Yr Waterproofing',
    luxury: 'Lifetime Structural + 2-Yr Concierge'
  }
];

export const MATERIALS_DATA: MaterialBrand[] = [
  {
    name: 'Tata Tiscon / JSW Steel',
    category: 'Steel',
    logoText: 'TATA TISCON 550D',
    grade: 'Fe 550D Super Ductile',
    specification: 'High energy absorption capacity during earthquakes, low carbon content preventing brittleness, rib pattern maximizing bond with concrete.',
    testingFrequency: 'Every single batch tested for yield strength and elongation with mill certificate',
    warranty: 'Corrosion-Resistant Mill Certified',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'UltraTech / Dalmia Cement',
    category: 'Cement',
    logoText: 'ULTRATECH CEMENT',
    grade: 'OPC & PPC 53 Grade',
    specification: 'Engineered micro-particle distribution yielding compressive strength >58 MPa at 28 days, sulfate-resistant with low alkali silica reactivity.',
    testingFrequency: 'Daily 7-day and 28-day cube compression crushing tests in NABL lab',
    warranty: 'Bureau of Indian Standards (IS 12269 & IS 1489)',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Schneider Electric / Legrand',
    category: 'Electrical',
    logoText: 'SCHNEIDER & LEGRAND',
    grade: 'FRLS Copper & Smart Modules',
    specification: 'Flame Retardant Low Smoke (FRLS) 99.97% electrolytic grade copper conductors, silver contact switches tested to 100,000 actuations.',
    testingFrequency: 'Insulation megger testing on every circuit before drywall closure',
    warranty: '10-Year Manufacturer Hardware Guarantee',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Astral Pipes & Ashirvad',
    category: 'Plumbing',
    logoText: 'ASTRAL SILENCIO CPVC',
    grade: 'Chlorinated Polyvinyl (CPVC) & Silencio',
    specification: 'Hot and cold water rated up to 93°C, 100% lead-free, acoustic mineral-reinforced insulation cutting water drainage sound by 18dB.',
    testingFrequency: '24-hour hydrostatic pressure testing at 10 bar before plastering',
    warranty: '50-Year Design Lifespan Guarantee',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Saint-Gobain Glass',
    category: 'Windows & Glass',
    logoText: 'SAINT-GOBAIN GLASS',
    grade: 'Planidur Low-E Double Glazed (DGU)',
    specification: 'Solar control double glazed units with argon gas insulation, blocking 78% infrared heat radiation while transmitting natural visual light.',
    testingFrequency: 'Thermal imaging and acoustic decibel transmission audit',
    warranty: '10-Year Seal & Clarity Warranty',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Kohler & Grohe',
    category: 'Fixtures',
    logoText: 'KOHLER & GROHE',
    grade: 'Brass Core & PVD Finishes',
    specification: 'Solid forged brass core valves, SilkMove ceramic disc cartridges, PVD scratch-resistant surfaces.',
    testingFrequency: 'Flow-rate calibration & zero-leak vacuum seal check',
    warranty: '10-Year Complete Cartridge & Finish Replacement',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Asian Paints Royale & Apex',
    category: 'Finishes',
    logoText: 'ASIAN PAINTS ROYALE',
    grade: 'Teflon Surface Protector & Anti-Bacterial',
    specification: 'Zero VOC indoor air quality certification, washable Teflon shield, elastomeric exterior weather-coat with 10-year UV colorfastness.',
    testingFrequency: 'Moisture meter substrate reading (<12% before primer application)',
    warranty: '8-Year Performance & Anti-Fungal Warranty',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80'
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: 1,
    title: 'Soil Testing, Site Survey & Vastu Analysis',
    duration: 'Days 1 - 7',
    summary: 'Comprehensive site assessment in Hyderabad, digital total station boundary survey, and borehole soil core extraction.',
    details: [
      'Total station digital boundary and topographical survey',
      'Dual borehole soil core extraction & safe bearing capacity (SBC) lab testing',
      'Vastu compliance audit for plot facing (East, North, West, South-East)',
      'Detailed client briefing on spatial requirements, lifestyle & budget'
    ],
    qualityGate: 'Geotechnical Soil Lab Certification & Boundary Demarcation Signoff',
    milestonePayment: '10% on Agreement & Commencement'
  },
  {
    step: 2,
    title: 'Architectural 3D Elevation, GFC & GHMC Sanctions',
    duration: 'Days 8 - 30',
    summary: 'Interactive 3D elevation renders, structural CAD engineering, and municipal building permit filings.',
    details: [
      'Floor plans, structural engineering drawings & MEP schematic designs',
      'Interactive 3D Virtual Reality (VR) walkthrough with materials preview',
      'Bill of Quantities (BOQ) with fixed-price no-escalation lock',
      'GHMC / HMDA municipal plan sanction filings and regulatory liaisoning'
    ],
    qualityGate: 'Client VR Design Approval & Sanctioned Municipal Permit',
    milestonePayment: '10% upon Plan Sanction & Structural Vetting'
  },
  {
    step: 3,
    title: 'Substructure: Excavation, Anti-Termite & Plinth',
    duration: 'Days 31 - 70',
    summary: 'Foundation excavation to solid rock, chemical termite barrier, footings, and plinth beam casting.',
    details: [
      'Excavation to hard strata as per geotechnical recommendations',
      'Deep chemical anti-termite soil treatment under footings and plinth',
      'Reinforced RCC isolated/raft footings with Tata Tiscon Fe 550D rebar',
      'Plinth beam casting, quarry dust backfilling, and damp-proof course (DPC)'
    ],
    qualityGate: 'Concrete Cube 7-Day Crushing Strength Test (>20 MPa) & Rebar Verification',
    milestonePayment: '15% on Plinth Level Completion'
  },
  {
    step: 4,
    title: 'Superstructure RCC Frames & Brick Masonry',
    duration: 'Days 71 - 150',
    summary: 'Casting columns, beams, floor slabs, and solid block / red brick walls.',
    details: [
      'Formwork alignment laser-checked for zero deflection and plumbness',
      'Floor slab casting with M25 ready-mix concrete and continuous ponding curing for 21 days',
      'Solid concrete block / red clay brick masonry with wire mesh reinforcement',
      'Concealed electrical conduit and plumbing sleeve insertions prior to plastering'
    ],
    qualityGate: 'NDT Ultrasonic Rebar Alignment & 28-Day Concrete Cube Strength Certification',
    milestonePayment: '25% Pro-rata across Slab Pour Milestones'
  },
  {
    step: 5,
    title: 'MEP Engineering, Waterproofing & Plastering',
    duration: 'Days 151 - 220',
    summary: 'Concealed services, 3-layer elastomeric waterproofing, and dual-coat plastering.',
    details: [
      'Internal 10-bar hydraulic pressure testing of concealed hot/cold water pipes',
      'Terrace and wet-area polymer waterproofing with 72-hour submerged water testing',
      'Internal gypsum/cement plastering with true-plumb feather edge finish',
      'External double-coat waterproof plastering with sand-faced texture'
    ],
    qualityGate: '72-Hour Submerged Ponding Water Leakage Inspection & Electrical Megger Test',
    milestonePayment: '20% on Plastering & Services Completion'
  },
  {
    step: 6,
    title: 'Finishes, 430-Point QC Audit & Griha Pravesham Handover',
    duration: 'Days 221 - 300',
    summary: 'Flooring, woodwork, fixtures, deep cleaning, and ceremonial key handover.',
    details: [
      'Precision laying of Italian marble / vitrified tiles with laser leveling',
      'Installation of modular kitchen, wardrobes, bathroom vanity units & Kohler fittings',
      '3-coat premium emulsion painting with orbital sanding and dust filtration',
      'Rigorous 430-point Quality Audit covering alignment, acoustics, drainage & finishes',
      'Ceremonial handover with Digital Vault (AutoCAD blueprints, warranties, live CCTV archive)'
    ],
    qualityGate: 'Zero-Defect Snagging Signoff & Formal Occupancy Certificate (OC)',
    milestonePayment: '20% on Final Snag-Free Handover'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Srinivas & Madhavi Rao',
    role: 'Tech Director (Google) & Financial Analyst',
    location: 'Tellapur, Hyderabad',
    projectTitle: 'The Tellapur Duplex Villa (3,850 sq.ft on 240 Sq.Yds)',
    rating: 5,
    date: 'December 2025',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    feedback: 'Living in the US while constructing our dream home in Tellapur seemed like an impossible challenge. BuildX.Homes made it completely seamless. Their mobile app gave us live CCTV camera feeds, daily milestone photos, and itemized material delivery receipts. Delivered 14 days ahead of schedule with zero price escalation!',
    metrics: 'Delivered 14 days early • Zero price escalation'
  },
  {
    id: 'test-2',
    name: 'Dr. V. Prasad & Archana',
    role: 'Senior Consultant Surgeon, AIG Hospitals',
    location: 'Jubilee Hills, Hyderabad',
    projectTitle: 'Jubilee Hills Signature Residence (6,200 sq.ft on 380 Sq.Yds)',
    rating: 5,
    date: 'January 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    feedback: 'Their structural engineering discipline is exceptional. The soil in Jubilee Hills had rocky contours, but their foundation execution with Tata Tiscon 550D rebar and M25 ready mix was top tier. The 430-point quality checklist gave us complete confidence.',
    metrics: '430+ QC Passed • NABL Lab Certified'
  },
  {
    id: 'test-3',
    name: 'Karthik & Sneha Reddy',
    role: 'Senior VP, FinTech & Enterprise Architect',
    location: 'Gachibowli, Hyderabad',
    projectTitle: 'Gachibowli Executive Duplex (2,950 sq.ft on 180 Sq.Yds)',
    rating: 5,
    date: 'November 2025',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    feedback: 'BuildX Homes provides the transparency the Hyderabad construction industry desperately needed. Every milestone payment is linked to verified work on the app. The finishes, Kohler fittings, and tile alignment are hotel-grade.',
    metrics: 'Sub-millimeter tile joints • 10-Yr Warranty'
  }
];

export const PARTNERS_DATA: Partner[] = [
  {
    name: 'HDFC Bank Home Loans',
    type: 'Bank & Finance',
    tagline: 'Pre-approved project files with expedited 48-hour loan sanction in Hyderabad',
    badge: 'Pre-Approved Builder Code: HDFC/HYD/4891'
  },
  {
    name: 'State Bank of India (SBI)',
    type: 'Bank & Finance',
    tagline: 'Lowest sovereign home loan interest rates with zero processing fee offers',
    badge: 'SBI Approved Tier-1 Builder'
  },
  {
    name: 'ICICI Bank Home Finance',
    type: 'Bank & Finance',
    tagline: 'Exclusive preferential interest rates for BuildX Homes projects',
    badge: 'Category A+ Preferred Partner'
  },
  {
    name: 'Axis Bank Mortgage',
    type: 'Bank & Finance',
    tagline: 'Instant paperless milestone disbursements directly linked to construction audits',
    badge: 'Direct Escrow Disbursement'
  },
  {
    name: 'GHMC / HMDA Liaison',
    type: 'Quality & Standard',
    tagline: 'End-to-end building permission and occupancy certificate filing assistance',
    badge: 'Telangana TS-bPASS Compliant'
  },
  {
    name: 'IGBC Green Building Council',
    type: 'Quality & Standard',
    tagline: 'Certified Green Builder building energy-efficient homes in Telangana',
    badge: 'Charter Corporate Member'
  },
  {
    name: 'CREDAI Hyderabad',
    type: 'Quality & Standard',
    tagline: 'Confederation of Real Estate Developers’ Associations of India',
    badge: 'Registered Corporate Member'
  },
  {
    name: 'TÜV SÜD ISO 9001:2015',
    type: 'Quality & Standard',
    tagline: 'Certified Quality Management System for residential construction',
    badge: 'Certificate No. 99 100 18239'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Pricing & Escalation',
    question: 'How does BuildX guarantee "Zero Cost Overruns" and "Zero Price Escalation"?',
    answer: 'Once your detailed Bill of Quantities (BOQ) is finalized and signed, BuildX locks your per-sq.ft rate into a legally binding contract. Even if steel and cement prices surge during the 10–12 month construction period in Hyderabad, we absorb 100% of material fluctuations. Your price per square foot remains exactly as contracted.'
  },
  {
    id: 'faq-2',
    category: 'Hyderabad Approvals',
    question: 'Do you handle GHMC / HMDA building permissions and TS-bPASS approvals?',
    answer: 'Yes! Our turnkey packages include full assistance with architectural drawing submissions, structural stability certificates, and regulatory liaisoning for GHMC, HMDA, and TS-bPASS approvals across all circles of Hyderabad.'
  },
  {
    id: 'faq-3',
    category: 'Escrow & Payments',
    question: 'How does the milestone-based payment model work?',
    answer: 'You never pay in advance. Construction is broken down into structured stages (Plinth, 1st Slab, 2nd Slab, Plastering, Finishes). You only release funds for a milestone after inspecting the work (in person or via our Live CCTV app) and reviewing the 430+ QC inspection report certified by our structural engineer.'
  },
  {
    id: 'faq-4',
    category: 'NRI & Remote Tracking',
    question: 'I reside in the USA / outside Hyderabad. How do I track daily progress?',
    answer: 'We install high-definition 360-degree PTZ cameras on your plot before excavation starts. You receive secure login credentials to the BuildX Client App to watch live camera streams 24/7, view daily photographic logs, track labor attendance, and inspect NABL cube test reports from anywhere in the world.'
  },
  {
    id: 'faq-5',
    category: 'Quality Testing',
    question: 'What are the 430+ Quality Checks, and how are materials tested?',
    answer: 'Our QC protocol covers 430+ checkpoints spanning soil bearing capacity (SBC), cement grade verification (53G), slump tests on every ready-mix concrete pour, 7-day & 28-day concrete cube crush tests in NABL-accredited labs, rebar tensile testing, and 72-hour submerged water ponding tests for all terraces and toilets.'
  },
  {
    id: 'faq-6',
    category: 'Warranty & Maintenance',
    question: 'What warranties do you provide after house handover (Griha Pravesham)?',
    answer: 'We back every home with a 10-Year Structural Defect Guarantee, a 5-Year Waterproofing Warranty against terrace and wet-area leakages, and 1 full year of complimentary quarterly maintenance visits covering plumbing, electrical, and minor touch-ups.'
  }
];

export const HOUSE_TYPES_DATA: HouseType[] = [
  {
    id: 'contemporary-duplex',
    name: 'Contemporary Double-Height Duplex (G+2)',
    tagline: 'Sleek geometric elevation with 20ft double-height living room',
    iconName: 'Home',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    idealPlot: '200 to 250 Sq. Yards (East/North Facing)',
    builtUpArea: '3,200 to 3,850 sq.ft',
    facing: 'Vastu East / North-East Prime',
    highlights: [
      'Double-height ceiling in living pavilion with acoustic double glazing',
      'Cantilevered master balcony with warm exterior wooden louvers',
      'Floating open-riser staircase with glass balustrade',
      'Integrated private home theater & open terrace party deck'
    ],
    description: 'Our signature Hyderabad duplex design. Combines modern cantilevered volumes with warm teakwood louvers that shield from harsh afternoon sun while permitting abundant natural ventilation. Ground floor accommodates parking, foyer, living, dining, and pooja, while the upper floors house private suites and terrace leisure.',
    architecturalStyle: 'Modern Contemporary Minimalist',
    estimatedBudget: '₹68 Lakh – ₹84 Lakh (Turnkey)',
    floorBreakdown: [
      'Ground Floor: 2-Car Parking, Double-Height Living, Dining, Wet/Dry Kitchen, Guest Bedroom, Pooja Room',
      'First Floor: Master Suite with Walk-in Wardrobe, Family Lounge overlooking living below, Children Bedroom',
      'Second Floor: Entertainment Lounge / Home Theater, Gym Zone, Open Terrace with Wooden Pergola'
    ],
    galleryViews: [
      { label: 'Day Elevation', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', caption: 'Front elevation with wooden privacy louvers and double-height architectural glazing' },
      { label: 'Night Facade', url: '/images/modern-luxury-duplex-night.jpg', caption: 'Warm exterior architectural lighting and illuminated terrace party pergola' },
      { label: '3D Floor Plan', url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80', caption: 'Spatial 3D CAD layout with East-facing Vastu kitchen, pooja & master suites' },
      { label: 'Living Pavilion', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', caption: '20ft double-height living room with acoustic floor-to-ceiling glass vista' }
    ]
  },
  {
    id: 'courtyard-villa',
    name: 'Central Courtyard & Tropical Vastu Sanctuaries',
    tagline: 'Indoor-outdoor living with an open-to-sky central courtyard',
    iconName: 'Compass',
    image: '/images/traditional-andhra-manduva-courtyard.jpg',
    idealPlot: '250 to 350 Sq. Yards (East/North Facing)',
    builtUpArea: '3,400 to 4,200 sq.ft',
    facing: 'Strict Vastu Brahmasthan Centered',
    highlights: [
      'Central open-to-sky courtyard with natural rainwater skylight and frangipani tree',
      'Continuous natural cross-ventilation keeping interiors 4°C cooler in summer',
      'Integrated water body with submerged LED lighting in dining perimeter',
      'Clay terracotta jali screens on south facade for thermal cooling'
    ],
    description: 'A timeless architectural fusion inspired by traditional Indian courtyard houses (Haveli / Manduva) adapted for modern Hyderabad living. The central courtyard (Brahmasthan) brings natural daylight to all rooms, enhancing family bonding and serenity.',
    architecturalStyle: 'Biophilic Tropical Fusion',
    estimatedBudget: '₹75 Lakh – ₹95 Lakh (Turnkey)',
    floorBreakdown: [
      'Ground Floor: Water Courtyard, Double-Height Dining, Semi-Open Kitchen, Elder Suite with Garden View, Pooja',
      'First Floor: 2 Master Bedrooms with private louvered balconies, Study/Library overlooking the courtyard',
      'Second Floor: Open Terrace Pavilion, Yoga Deck, Solar Hybrid Plant'
    ],
    galleryViews: [
      { label: 'Courtyard View', url: '/images/traditional-andhra-manduva-courtyard.jpg', caption: 'Open-to-sky central courtyard (Brahmasthan) with carved teak pillars & floating marigold urli' },
      { label: 'Elevation', url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80', caption: 'Terracotta jali facade providing passive thermal cooling in summer' },
      { label: 'Floor Plan', url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80', caption: 'Vastu-certified spatial layout with water feature and elder ground suite' }
    ]
  },
  {
    id: 'rental-income-duplex',
    name: 'Multi-Generational & Rental-Income Residences (G+3 & G+4)',
    tagline: 'Live luxuriously on lower floors while generating ₹60k–₹90k monthly rent above',
    iconName: 'Building2',
    image: '/images/g-plus-2-multi-family-house.jpg',
    idealPlot: '180 to 300 Sq. Yards',
    builtUpArea: '4,200 to 5,800 sq.ft',
    facing: 'East / West Corner Optimized',
    highlights: [
      'Independent external staircase and optional elevator with private biometric access',
      'Ground + 1: Owner’s ultra-spacious 3-BHK luxury duplex with private car porch',
      'Upper Floors: 2 independent 2-BHK luxury rental apartments with separate power meters',
      'High rental yield in Hyderabad IT corridors (Gachibowli, Tellapur, Manikonda)'
    ],
    description: 'A smart financial and living model highly popular in Hyderabad. Designed so the homeowner enjoys privacy in a bespoke duplex, while the upper independent units generate substantial monthly rental income to offset home loan EMIs.',
    architecturalStyle: 'Modern Infill High-Yield Residential',
    estimatedBudget: '₹88 Lakh – ₹1.25 Cr (Turnkey)',
    floorBreakdown: [
      'Ground Floor: Stilt 3-Car Parking + 1 Elder 1-BHK suite with zero-threshold ramp',
      'First & Second Floor: Owner Duplex (Grand Living, Kitchen, 3 Master Bedrooms, Pooja)',
      'Third & Fourth Floor: 2 Independent 2-BHK Units for Corporate IT Tenants (Separate Electricity/Water)'
    ],
    galleryViews: [
      { label: 'Building Elevation', url: '/images/g-plus-2-multi-family-house.jpg', caption: 'G+2 independent residential elevation with ground stilt parking & stone cladding' },
      { label: 'Owner Duplex', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', caption: 'Spacious lower 3-BHK owner duplex with dedicated stilt parking' },
      { label: 'Rental Unit Plan', url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80', caption: 'Independent upper 2-BHK rental layouts with individual utility sub-meters' }
    ]
  },
  {
    id: 'luxury-glass-mansion',
    name: 'Ultra-Luxury Cantilevered Mansions & Penthouses',
    tagline: 'Architectural grandeur with glass curtain walls, private elevator & sky pool',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    idealPlot: '350 to 600+ Sq. Yards (Jubilee Hills, Kokapet, Financial District)',
    builtUpArea: '5,500 to 8,200 sq.ft',
    facing: 'North-East / Corner Panoramic',
    highlights: [
      'Panoramic glass home elevator serving Ground to Rooftop Penthouse deck',
      'Private terrace heated plunge pool with submerged LED and composite sundeck',
      '8-Seater Dolby Atmos THX acoustic screening room with motorized recliners',
      'Imported Italian Statuario bookmatched marble & Schüco German slimline glazing'
    ],
    description: 'The pinnacle of bespoke Hyderabad architectural luxury. Engineered with post-tensioned beam calculations that eliminate interior columns, creating vast open-concept living galleries with seamless glass vistas.',
    architecturalStyle: 'Ultra-Luxury High-Tech Minimalist',
    estimatedBudget: '₹1.4 Cr – ₹2.2 Cr (Turnkey Bespoke)',
    floorBreakdown: [
      'Ground Floor: Grand Foyer with Water Feature, 4-Car Covered Port, Formal & Informal Living, Italian Kitchen',
      'First Floor: 3 Lavish Bedroom Suites with Walk-in Closets and Marble Spas, Private Family Lounge',
      'Second Floor: Master Penthouse Suite, Private Bar Lounge, Dolby Atmos Cinema, Cantilevered Terrace Deck',
      'Terrace: Infinity Heated Plunge Pool, Sunken Seating Lounge, Rooftop Solar Grid'
    ],
    galleryViews: [
      { label: 'Twilight Mansion', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80', caption: 'Cantilevered glass facade with illuminated water reflections' },
      { label: 'Infinity Deck', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', caption: 'Rooftop sky pool and heated lounge overlooking Hyderabad skyline' },
      { label: 'Marble Grandeur', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', caption: 'Italian Statuario bookmatched marble foyer with private glass lift' }
    ]
  },
  {
    id: 'compact-city-duplex',
    name: 'Narrow Plot & Corner Plot Compact Marvels (150–180 Sq.Yds)',
    tagline: 'Zero dead space engineering for premium city plots in Hyderabad',
    iconName: 'Building',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    idealPlot: '150 to 180 Sq. Yards (30x45 or 33x49 ft dimensions)',
    builtUpArea: '2,400 to 2,950 sq.ft',
    facing: 'All Facings with Customized Vastu Lightwells',
    highlights: [
      'Engineered specifically for compact urban plots with zero wasted corridor space',
      'Vertical lightwells and frosted glass skylights flooding interior rooms with daylight',
      'Integrated double-car parking bay with electric vehicle (EV) charging socket',
      'Foldable teakwood pocket doors allowing flexible open or private room layouts'
    ],
    description: 'Building on narrow 150 to 180 Sq.Yard plots in Hyderabad requires specialized spatial geometry. Our design eliminates dark interiors through vertical lightwells and open stair shafts while delivering 4 spacious bedrooms.',
    architecturalStyle: 'Smart Compact Urban Modern',
    estimatedBudget: '₹48 Lakh – ₹62 Lakh (Turnkey)',
    floorBreakdown: [
      'Ground Floor: 2-Car Parking, Compact Foyer, Living Room, Open Modular Kitchen, Dining, Guest Suite',
      'First Floor: Master Bedroom with French Balcony, Children Bedroom, Compact Study Nook',
      'Second Floor: Multipurpose Lounge / Guest Room, Covered Utility, Landscaped Terrace Balcony'
    ],
    galleryViews: [
      { label: 'Street Elevation', url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80', caption: 'Engineered for narrow 30ft width plots with vertical aesthetic louvers' },
      { label: 'Lightwell Interior', url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80', caption: 'Central skylight shaft delivering natural daylight to all interior bedrooms' }
    ]
  },
  {
    id: 'eco-smart-villa',
    name: 'Net-Zero Eco-Smart & Solar-Powered Villas',
    tagline: 'Green building certified — cuts power and water bills by up to 75%',
    iconName: 'Leaf',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    idealPlot: '200 to 400 Sq. Yards',
    builtUpArea: '3,000 to 4,500 sq.ft',
    facing: 'Solar Sun-Path Optimized',
    highlights: [
      '5kW to 10kW On-Grid Rooftop Solar Plant with net-metering setup for zero power bills',
      'Rainwater harvesting percolation pit with 15,000L underground recharge sump',
      'Thermal-reflective cool roof tiles & autoclaved aerated concrete (AAC) blocks',
      'Smart home app-controlled lights, automated motor pumping, and air-quality monitoring'
    ],
    description: 'Designed for environmentally conscious homeowners who want to insulate themselves against rising electricity tariffs in Hyderabad while enjoying modern automation and lower carbon footprints.',
    architecturalStyle: 'Sustainable Net-Zero Modern',
    estimatedBudget: '₹65 Lakh – ₹88 Lakh (Turnkey)',
    floorBreakdown: [
      'Ground Floor: EV Charging Bay, Rainwater Sump, Living & Dining with thermal-glazed windows, Vastu Kitchen',
      'First Floor: 3 Eco-insulated Bedrooms, Natural Daylight Study Room, Heat-reflective balconies',
      'Second Floor: Solar Control Inverter Room, Organic Terrace Herb Garden with automated drip lines'
    ],
    galleryViews: [
      { label: 'Solar Villa Facade', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80', caption: 'Eco-smart villa with rooftop solar PV array and thermal AAC blocks' },
      { label: 'Pergola & Garden', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', caption: 'Terrace organic garden with automated rainwater drip irrigation' }
    ]
  }
];

export const RECENTS_IN_PROGRESS_DATA: ActiveProjectProgress[] = [
  {
    id: 'tellapur-p42',
    projectName: 'The Tellapur Urban Duplex (Plot #42)',
    locality: 'Tellapur, Near Financial District',
    plotSpec: '240 Sq.Yds • G+2 Duplex (3,800 sq.ft)',
    houseType: 'Contemporary Double-Height Duplex',
    currentStage: 'First Floor Slab Concrete Pour & Curing',
    dayCount: 'Day 76 of 270',
    progressPercent: 68,
    recentMilestone: 'NABL 7-Day Concrete Cube Strength Crushing Test Passed (22.4 MPa)',
    clientInitials: 'S. R.',
    clientLocation: 'NRI Client (San Jose, USA)',
    estimatedHandover: 'December 2026',
    siteImage: '/images/civil-construction-in-progress.jpg',
    hasLiveCCTV: true,
    cameraName: 'Cam 01: Slab Rebar Laser Grid'
  },
  {
    id: 'kokapet-p118',
    projectName: 'Kokapet Golden Mile Sanctuary (Plot #118)',
    locality: 'Kokapet, Hyderabad',
    plotSpec: '300 Sq.Yds • G+2 Villa (4,400 sq.ft)',
    houseType: 'Ultra-Luxury Cantilevered Mansion',
    currentStage: 'Superstructure AAC Block Masonry & Electrical Conduits',
    dayCount: 'Day 115 of 300',
    progressPercent: 52,
    recentMilestone: 'Tata Tiscon 550D Column Jacketing & Ultrasonic Beam Check Completed',
    clientInitials: 'R. K. & Ananya',
    clientLocation: 'Financial District, Hyderabad',
    estimatedHandover: 'August 2026',
    siteImage: '/images/civil-construction-in-progress.jpg',
    hasLiveCCTV: true,
    cameraName: 'Cam 02: Column Shuttering & Formwork'
  },
  {
    id: 'jubilee-hills-rd45',
    projectName: 'Jubilee Hills Luxury Estate (Road #45)',
    locality: 'Jubilee Hills, Hyderabad',
    plotSpec: '380 Sq.Yds • G+3 Mansion (6,200 sq.ft)',
    houseType: 'Ultra-Luxury Glass & Cantilevered Mansion',
    currentStage: 'Plinth Beam Casting & Anti-Termite Chemical Soil Barrier',
    dayCount: 'Day 42 of 330',
    progressPercent: 24,
    recentMilestone: 'Borehole Soil Safe Bearing Capacity (SBC) Certified at 240 kN/m²',
    clientInitials: 'Dr. V. P.',
    clientLocation: 'AIG Hospitals, Hyderabad',
    estimatedHandover: 'April 2027',
    siteImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    hasLiveCCTV: true,
    cameraName: 'Cam 03: Footing Steel Cage'
  },
  {
    id: 'manikonda-p88',
    projectName: 'Manikonda Smart Residence (Plot #88)',
    locality: 'Puppalaguda / Manikonda, Hyderabad',
    plotSpec: '200 Sq.Yds • G+2 Duplex (3,200 sq.ft)',
    houseType: 'Net-Zero Eco-Smart Villa',
    currentStage: 'Industrial Metal Structural Works & Roof Erection',
    dayCount: 'Day 182 of 280',
    progressPercent: 79,
    recentMilestone: 'Heavy crane PEB rafter girder erection & ultrasonic weld inspections passed',
    clientInitials: 'K. & Sneha',
    clientLocation: 'Gachibowli Tech Campus',
    estimatedHandover: 'November 2026',
    siteImage: '/images/metal-structural-peb-erection.jpg',
    hasLiveCCTV: true,
    cameraName: 'Cam 01: Crane Erection View'
  },
  {
    id: 'bachupally-duplex',
    projectName: 'Bachupally Modern Duplex (Plot #14)',
    locality: 'Bachupally, Hyderabad',
    plotSpec: '180 Sq.Yds • G+2 Duplex (2,900 sq.ft)',
    houseType: 'Narrow Plot & Corner Plot Compact Marvel',
    currentStage: 'Finishes, Epoxy Flooring Application & 430-Point Audit',
    dayCount: 'Day 255 of 280',
    progressPercent: 92,
    recentMilestone: 'High-gloss seamless self-leveling floor application & dust-free cure completed',
    clientInitials: 'M. Venkat',
    clientLocation: 'Miyapur, Hyderabad',
    estimatedHandover: 'October 2026',
    siteImage: '/images/industrial-epoxy-flooring.jpg',
    hasLiveCCTV: true,
    cameraName: 'Cam 02: High-Gloss Floor View'
  }
];
