import { Sector, Project, Service, Leader, JobPosition, TimelineEvent, Testimonial, NewsItem, BlogItem, CorporateEvent } from '../types';

import ceoHelenaImg from '../assets/images/ceo_helena_portrait_1781508489148.jpg';
import ctoMarcusImg from '../assets/images/cto_marcus_portrait_1781508505462.jpg';
import partnerAmaraImg from '../assets/images/partner_amara_portrait_1781508523475.jpg';
import csoJonathanImg from '../assets/images/cso_jonathan_portrait_1781508539540.jpg';


export const SECTORS: Sector[] = [
  {
    id: 'ngo',
    name: 'ViMa NGO',
    icon: 'Heart',
    description: 'A dedicated philanthropic and social development engine driving humanitarian programs, educational scholarships, healthcare access, and regional community empowerment initiatives throughout Madagascar.',
    metrics: [
      { label: 'Active Initiatives', value: '34' },
      { label: 'Lives Impacted', value: '250,000+' },
      { label: 'Resource Efficiency', value: '98.5%' }
    ],
    services: ['Public School Funding & Supplies', 'Mobile Clinical Outreach Stations', 'Civic Empowerment Workshops'],
    imagingSeed: 'humanitarian'
  },
  {
    id: 'tsingy',
    name: 'ViMa Tsingy Bay',
    icon: 'Compass',
    description: 'An elite global eco-hospitality resort and sustainable real estate development project, protecting and celebrating Madagascar\'s pristine coastal ecosystems through zero-carbon design.',
    metrics: [
      { label: 'Net Carbon Footprint', value: '0.0%' },
      { label: 'Guest satisfaction NPS', value: '98.8%' },
      { label: 'Protected Bio-reserve', value: '4,500 Ha' }
    ],
    services: ['Luxury Organic Eco-Resorts', 'Low-Impact Residential Development', 'Biodiversity & Species Conservation'],
    imagingSeed: 'beach'
  },
  {
    id: 'water',
    name: 'ViMa Water Bank',
    icon: 'Droplet',
    description: 'Providing sustainable access to critical drinking reserves through advanced high-scale filtration, containerized water treatment systems, and municipal distribution grids.',
    metrics: [
      { label: 'Purified/Year', value: '12M Liters' },
      { label: 'Communities Served', value: '110+' },
      { label: 'Active Pump Stations', value: '48' }
    ],
    services: ['High-Output Reverse Osmosis', 'Sovereign Clean-Water Wells', 'Affordable Local Distribution Networks'],
    imagingSeed: 'purity'
  },
  {
    id: 'france',
    name: 'ViMa France',
    icon: 'Globe',
    description: 'The international liaison and European gateway for the ViMa group, managing offshore trade relations, corporate asset structuring, and cross-continental public-private alliances.',
    metrics: [
      { label: 'Foreign Direct Inflow', value: '€450M+' },
      { label: 'Investment Partners', value: '15' },
      { label: 'Bilateral Corridors', value: '4' }
    ],
    services: ['European Trade Representation', 'Sovereign Investment Alignment', 'Global Asset Management Advisory'],
    imagingSeed: 'europe'
  },
  {
    id: 'wtc',
    name: 'ViMa World Trade Center Antananarivo',
    icon: 'Building2',
    description: 'The executive showcase, trade matchmaker, and licensed World Trade Center hub of Madagascar, hosting sovereign chambers of commerce and top-tier business exhibitions.',
    metrics: [
      { label: 'Leased Office Spaces', value: '92.5%' },
      { label: 'Executive Members', value: '240+' },
      { label: 'International Events', value: '12/Year' }
    ],
    services: ['Grade-A Premium Building Leasing', 'Executive Business Centers', 'International Trade Facilitation'],
    imagingSeed: 'wtc'
  },
  {
    id: 'management',
    name: 'ViMa Management',
    icon: 'Briefcase',
    description: 'Providing elite administrative services, executive governance frameworks, legal compliance auditing, and strategic development advisory to cross-border portfolios.',
    metrics: [
      { label: 'Supervised Assets', value: '$1.8B' },
      { label: 'Corporate Clients', value: '88' },
      { label: 'Accuracy Rating', value: '99.9%' }
    ],
    services: ['Strategic Corporate Structuring', 'Sovereign Compliance Auditing', 'Interim Board Placement'],
    imagingSeed: 'management'
  },
  {
    id: 'agulhas',
    name: 'ViMa Agulhas',
    icon: 'Anchor',
    description: 'An expert maritime agency managing deep-water shipping, logistical custom clearances, vessel chartering, and refrigerated cargo terminals near critical channels.',
    metrics: [
      { label: 'Cargo Routed', value: '3.4M Tons' },
      { label: 'Port Dispatches', value: '840' },
      { label: 'Green Ground Fleet', value: '92%' }
    ],
    services: ['Ocean Freight Integration', 'Sovereign Port Liaisons', 'Refrigerated Depot Solutions'],
    imagingSeed: 'cargo'
  },
  {
    id: 'realestate',
    name: 'ViMa Real Estate',
    icon: 'Layout',
    description: 'Madagascar\'s premier urban masterproperty developer, constructing climate-resilient commercial developments, technology business parks, and smart family apartments.',
    metrics: [
      { label: 'Completed Buildings', value: '42' },
      { label: 'LEED Certified Spaces', value: '2.8M SF' },
      { label: 'Customer NPS', value: '81' }
    ],
    services: ['Smart Smart-City Zoning', 'A-Grade Commercial Developments', 'Net-Zero Residential Complexes'],
    imagingSeed: 'apartment'
  },
  {
    id: 'mall',
    name: 'ViMa Majungasaurus Mall',
    icon: 'ShoppingBag',
    description: 'The crowning retail and lifestyle destination of Madagascar, blending high-end fashion, leisure entertainment, and cultural spaces in a fully solar-powered complex.',
    metrics: [
      { label: 'Foot Traffic/Year', value: '5.2M' },
      { label: 'Active Tenants', value: '165' },
      { label: 'Renewable Power Share', value: '100%' }
    ],
    services: ['Anchor Tenant Property Management', 'Eco-Concept Entertainment Centers', 'Cultural Showcase Curation'],
    imagingSeed: 'mall'
  },
  {
    id: 'serv',
    name: "ViMa Serv'",
    icon: 'Settings',
    description: 'Integrated facilities management, high-security operations, advanced industrial cleaning, corporate food solutions, and mechanical assets support systems.',
    metrics: [
      { label: 'Uptime SLA', value: '99.95%' },
      { label: 'Sites Maintained', value: '180+' },
      { label: 'Specialized Staff', value: '1,400' }
    ],
    services: ['Enterprise Facilities Servicing', 'Institutional Catering Programs', 'Electro-Mechanical Preventive Audits'],
    imagingSeed: 'services'
  },
  {
    id: 'dis',
    name: 'ViMa Dis',
    icon: 'Truck',
    description: 'The secure nationwide consumer products distribution network of Madagascar, running hyper-efficient cold chains and advanced regional inventory terminals.',
    metrics: [
      { label: 'Points of Sale', value: '1,200+' },
      { label: 'Dispatch Precision', value: '99.7%' },
      { label: 'Cold-Chain Warehouses', value: '14' }
    ],
    services: ['National FMCG Distribution', 'Advanced Warehouse Management', 'Last-Mile Micro-Logistics'],
    imagingSeed: 'delivery'
  },
  {
    id: 'woods',
    name: 'ViMa Woods',
    icon: 'Trees',
    description: 'Fostering ecological sustainability through FSC-certified forestry nurseries, premium responsible timber cultivations, and high-quality local mill timber production.',
    metrics: [
      { label: 'Reforested Saplings', value: '1.2M' },
      { label: 'FSC Certified Forests', value: '24k Ha' },
      { label: 'Carbon Sink Output', value: 'Carbon-Neg' }
    ],
    services: ['FSC Silviculture & Planting', 'Fine Architectural Woodwork', 'Sovereign Carbon-Sink Offset Audits'],
    imagingSeed: 'forest'
  },
  {
    id: 'hybrid',
    name: 'ViMa Hybrid-Energy',
    icon: 'Zap',
    description: 'Developing next-generation clean power solutions combining solar photovoltaic technology, automated battery backup arrays, and microgrids for remote villages.',
    metrics: [
      { label: 'Decentralized Power', value: '85 MW' },
      { label: 'CO2 Offset/Year', value: '185k Tons' },
      { label: 'Sovereign Grid Nodes', value: '120' }
    ],
    services: ['Solar Microgrid Installations', 'High-Output Specialized Storage', 'Off-Grid Smart Meter Operations'],
    imagingSeed: 'solar'
  },
  {
    id: 'hydro',
    name: 'ViMa Hydro',
    icon: 'Waves',
    description: 'Engineering run-of-the-river clean hydroelectric power plants to supply renewable electricity to regional grids without disruptive ecological damage.',
    metrics: [
      { label: 'Run-of-River Capacity', value: '210 MW' },
      { label: 'Emission Reductions', value: '480k Tons' },
      { label: 'Grid Feed Reliability', value: '99.98%' }
    ],
    services: ['Hydro-Kinetic Impact Planning', 'Weir & Turbine Structural Casts', 'Grid Connection High-Voltage Lines'],
    imagingSeed: 'hydro'
  },
  {
    id: 'yoga',
    name: 'ViMa Z-Yoga',
    icon: 'Heart',
    description: 'Nurturing community wellness, mindfulness training, physical retreats, and eco-fitness hubs designed to promote physical and holistic mental health.',
    metrics: [
      { label: 'Sanctuary Members', value: '14,000+' },
      { label: 'Aesthetic Studios', value: '8' },
      { label: 'Client Feedback SLA', value: '92%' }
    ],
    services: ['Corporate Mind-Body Alignment', 'Immersive Yoga Masterclasses', 'Eco-Wellness Resort Integration'],
    imagingSeed: 'yoga'
  },
  {
    id: 'construction',
    name: 'ViMa Construction',
    icon: 'HardHat',
    description: 'Constructing civil infrastructure of sovereign scale, paving resilient road networks, bridges, and state buildings utilizing green cement products.',
    metrics: [
      { label: 'Delivered Civil Projects', value: '78' },
      { label: 'Security SLA Rating', value: '100% Zero' },
      { label: 'Direct Local Workers', value: '4,500' }
    ],
    services: ['Heavy Public Infrastructure Paving', 'Bespoke Corporate Civil Casting', 'Prefab Eco-Structural Piles'],
    imagingSeed: 'construction'
  },
  {
    id: 'mining',
    name: 'ViMa Mining',
    icon: 'Gem',
    description: 'Conducting high-compliance, ESG-regulated mineral extraction, focusing on premium sand elements and clean graphite under strict soil reclamation programs.',
    metrics: [
      { label: 'Soil Rehabilitation SLA', value: '100%' },
      { label: 'Global Compliance Tier', value: 'AAA' },
      { label: 'Local Community Aid', value: '$42M' }
    ],
    services: ['Low-Dust Element Extraction', 'Bespoke Ecological Rehabilitation', 'Responsible Export Trade Alignment'],
    imagingSeed: 'mining'
  },
  {
    id: 'oilgas',
    name: 'ViMa Oil And Gas',
    icon: 'Fuel',
    description: 'Securing national fuel strategies, liquid storage networks, emergency power buffers, and transition gas conduits to maintain absolute domestic economic uptime.',
    metrics: [
      { label: 'Depot Safe Vaults', value: '4.8M bbl' },
      { label: 'Zero Spill SLA Record', value: '100%' },
      { label: 'National Buffer Share', value: 'High' }
    ],
    services: ['Strategic Hydrocarbon Reserves', 'Safe Industrial LNG Pipeline Feed', 'Rigid Environmental Leak Controls'],
    imagingSeed: 'petroleum'
  },
  {
    id: 'maromokotro',
    name: 'ViMa Maromokotro',
    icon: 'Mountain',
    description: 'Unlocking eco-tourism networks, high-altitude mountain research trails, zero-input high-altitude tea plantations, and critical forest preservation projects near Madagascar\'s highest summit.',
    metrics: [
      { label: 'Station Altitude', value: '2,876m' },
      { label: 'Highland Conservation', value: '12k Ha' },
      { label: 'Academy Alliances', value: '8' }
    ],
    services: ['High-Altitude Ecology Studies', 'Carbon-Neutral Mountain Lodges', 'Organic Highland Crop Cultivation'],
    imagingSeed: 'mountain'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'consulting',
    name: 'Consulting & Board Advisory',
    description: 'Navigating enterprise complexity with insights that reshape business models, capitalize on market disruptions, and enhance cross-sector portfolio operations.',
    icon: 'Briefcase',
    features: ['Corporate Portfolio Strategy', 'Mergers & Acquisitions Structuring', 'Sovereign Wealth Consultation', 'Enterprise Risk Orchestration']
  },
  {
    id: 'proj_management',
    name: 'Next-Gen Project Management',
    description: 'Orchestrating mega-scale engineering and operational projects utilizing integrated Agile pipelines, advanced AI risk modeling, and state-of-the-art cost controls.',
    icon: 'Layers',
    features: ['Mega-Project Operational Auditing', 'Predictive Cost Mitigation', 'Cross-Border Supply Coordination', 'Sub-Contractor Quality Governance']
  },
  {
    id: 'digital_trans',
    name: 'Digital Transformation & AI',
    description: 'Injecting deep technology blocks into legacy business structures—from serverless migrations to bespoke multi-modal custom enterprise models.',
    icon: 'TrendingUp',
    features: ['Generative Intelligent Agents', 'Decentralized Architecture Ingestion', 'Hybrid Cloud Management Solutions', 'Predictive Operational Analytics']
  },
  {
    id: 'infra_sol',
    name: 'Infrastructure Solutions',
    description: 'Deploying high-impact physical and technological framework foundations that accelerate commercial transit speed and physical facility resilience.',
    icon: 'Globe',
    features: ['Multi-Modal Cargo Terminals', 'LEED-Certified Commercial Corridors', 'Smart Energy Grid Infrastructures', 'Water Treatment & Waste Recovery Assemblies']
  },
  {
    id: 'operational_excellence',
    name: 'Operational Excellence',
    description: 'Harnessing advanced Lean Six Sigma principles and generative supply chain automation to maximize production yields while reducing global carbon outputs.',
    icon: 'Settings',
    features: ['Autonomous Materials Flow', 'Predictive Machine Downtime Minimizer', 'Total Quality Management Systems', 'Sustainable Sourcing Integration']
  },
  {
    id: 'managed_services',
    name: 'Strategic Managed Services',
    description: 'Ensuring non-stop operational integrity via 24/7 Security Operations Centers, high-touch tech maintenance, and fully managed remote resources.',
    icon: 'Shield',
    features: ['Full Stack Cloud Operation', 'Global Security operations (SOC)', 'Predictive Maintenance Contracts', 'Dynamic Remote Engineering Pool']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Vision Madagascar Helix Healthcare Center',
    sector: 'Healthcare Network',
    location: 'Munich, Germany',
    description: 'Constructing and operating Germany`s most technologically advanced molecular research hospital, integrating full robotic-assisted surgeries and carbon-free medical hubs.',
    metrics: { label: 'Molecular Diagnostics Speed', value: '+400% Improvement' },
    imageSeed: 'medical_lab',
    highlights: ['1,200 Patient Capacity', '100% On-Site Renewable Solar', 'AI Patient Flow Automation'],
    caseStudy: {
      challenge: 'Unifying multi-source genomic diagnostics with patient care workflows under zero carbon footprint requirements.',
      solution: 'Constructed an integrated smart building grid featuring solar glass panel curtains and direct database interconnects with global laboratories.',
      result: 'Lowered operational utility cost by 48% while reducing diagnostic latency from weeks to hours.'
    }
  },
  {
    id: 'project-2',
    title: 'Synapse Core Smart City Grid',
    sector: 'Real Estate / Smart Cities',
    location: 'Singapore',
    description: 'Development and deployment of the regional master-programmed smart core, managing electricity, traffic density planning, and cooling water through machine learning circuits.',
    metrics: { label: 'Grid Carbon Output', value: '45% Redux' },
    imageSeed: 'smart_city',
    highlights: ['220,000 Connected IoT Nodes', '94% Municipal Waste Recycling', 'Active Rainwater Harvesters'],
    caseStudy: {
      challenge: 'High urban energy density combined with high cooling requirements in a tropical climate.',
      solution: 'Engineered an underground district cooling network synchronized with variable solar and solid-state backup battery clusters.',
      result: 'Vastly outperformed regional efficiency baselines, achieving the coveted Green Mark Platinum star.'
    }
  },
  {
    id: 'project-3',
    title: 'Offshore Dawn Wind Mega Array',
    sector: 'Energy Sector',
    location: 'North Sea, United Kingdom',
    description: 'A massive 1.8 gigawatt offshore wind project deploying largest modular turbine arrays ever bolted, conveying direct high-voltage DC power back to coastal population clusters.',
    metrics: { label: 'Yearly Clean Output', value: '620,000 Homes Powered' },
    imageSeed: 'wind_farm',
    highlights: ['120 Deep-Water Floating Turbines', '99.98% High Voltage SLA', 'Autonomous Underwater Drone Patrols'],
    caseStudy: {
      challenge: 'Turbulent ocean conditions and remote deep-water mooring zones requiring continuous high precision structural maintenance.',
      solution: 'Pioneered self-adjusting floating foundations paired with deep learning predictive structural sensor rings tracking ocean swells.',
      result: 'Maintained uninterrupted generation capacity despite hurricane-strength conditions in the North Sea.'
    }
  },
  {
    id: 'project-4',
    title: 'Lumina automated export mega-hub',
    sector: 'Manufacturing / Logistics',
    location: 'Tokyo Bay, Japan',
    description: 'A master logistics assembly plant using robotic picker models, automated trucks, and green shipping operations exporting high-end precision electric vehicle components globally.',
    metrics: { label: 'Export Dispatch Speed', value: '8 min/container' },
    imageSeed: 'warehouse_robotics',
    highlights: ['98% Robotics Autonomous Picking', 'Full EV Truck Yards', 'Zero Carbon Supply Integration'],
    caseStudy: {
      challenge: 'Drastic shortages in supply crane handlers and driver staffing coupled with skyrocketing global parcel volumes.',
      solution: 'Executed a completely unified warehouse operating system deploying autonomous ground vehicles coordinated via local ceiling tracking tags.',
      result: 'Tripled output throughput with zero incremental labor, achieving world-best dispatch density metrics.'
    }
  }
];

export const TIMELINE: TimelineEvent[] = [
  { year: '2012', title: 'Group Foundation', description: 'Established as an advisory syndicate merging three boutique infrastructure and technology partnerships across Central Europe.' },
  { year: '2016', title: 'Healthcare & Heavy Infrastructure Pivot', description: 'Acquired core clinical networks and civil construction firms to deliver integrated municipal facilities.' },
  { year: '2019', title: '1.2 GW Renewable Milestone', description: 'Launched the first major offshore wind arrays and transition grids in partnership with North Sea utilities.' },
  { year: '2022', title: 'Cognitive Tech Integration', description: 'Aggressively pushed custom machine learning frameworks into our manufacturing and smart estate portfolios.' },
  { year: '2025', title: 'Consolidated Sustainability Pact', description: 'All sectors operate on shared zero-landfill, sustainable supply chain mandates, securing continuous leadership in institutional ESG ratings.' }
];

export const LEADERS: Leader[] = [
  {
    id: 'lead-1',
    name: 'Helena Vance-Sterling',
    role: 'Chief Executive Officer',
    bio: 'With over 24 years directing multi-billion dollar capital programs, Helena guides Vision Madagascar`s strategic direction, ensuring portfolio diversification and deep alignment with institutional investor pools.',
    imageSeed: 'executive_woman_portrait',
    imageUrl: ceoHelenaImg
  },
  {
    id: 'lead-2',
    name: 'Marcus K. Chen, PhD',
    role: 'Chief Technology Officer',
    bio: 'A visionary in computer science and edge intelligence, Dr. Chen oversees technology investments, AI deployment, cyber posture, and digital twin systems across our core physical assets.',
    imageSeed: 'executive_man_glasses',
    imageUrl: ctoMarcusImg
  },
  {
    id: 'lead-3',
    name: 'Amara Diop-Sartre',
    role: 'Managing Partner, Energy Partnerships & Infrastructure',
    bio: 'Amara specializes in global asset investment, renewable power purchase partnerships, and cross-border civil mega-projects, previously directing national infrastructure funds.',
    imageSeed: 'executive_woman_corporate',
    imageUrl: partnerAmaraImg
  },
  {
    id: 'lead-4',
    name: 'Jonathan Reynolds',
    role: 'Chief Sustainability Officer',
    bio: 'Jonathan coordinates our multi-sector ESG commitments, ensuring that our operations across manufacturing, building, logistics, and healthcare maintain absolute compliance with global sustainability agreements.',
    imageSeed: 'executive_man_grey_hair',
    imageUrl: csoJonathanImg
  }
];

export const CAREER_POSITIONS: JobPosition[] = [
  {
    id: 'job-1',
    title: 'Senior Developer - AI & Deep Analytics',
    sector: 'Technology Division',
    location: 'Zurich, Switzerland (Hybrid)',
    type: 'Full-time',
    description: 'We are seeking an experienced developer to craft low-latency client APIs and fine-tune localized generative models optimized for industrial logistics and smart-building automation routing.',
    requirements: [
      '5+ years experience in Python, PyTorch, Go, or high-scale TypeScript systems.',
      'Strong grasp of vector clustering, embedding indexers, and distributed microservices.',
      'Previous experience with IoT telemetry analysis or supply chain logistics is a major plus.'
    ]
  },
  {
    id: 'job-2',
    title: 'Lead Structural Engineer - Offshore Renewables',
    sector: 'Energy & Construction',
    location: 'London, United Kingdom',
    type: 'Full-time',
    description: 'Lead mechanical and structural simulations for our next-generation deep-water floating turbine mooring mounts in the Sea of Japan and the North Sea.',
    requirements: [
      'Master`s degree or PhD in Naval Architecture, Civil Engineering, or Ocean Mechanics.',
      'Expert knowledge of high-fatigue steel casing structures and maritime stress analysis.',
      'Demonstrated leadership in directing high-budget structural validations for public utilities.'
    ]
  },
  {
    id: 'job-3',
    title: 'Director of Healthcare Operations',
    sector: 'Healthcare Division',
    location: 'Singapore (Central)',
    type: 'Full-time',
    description: 'Direct operational flow, staff scheduling networks, and digital integration compliance for our growing diagnostic hospital centers across Southeast Asia.',
    requirements: [
      'MBA or advanced degree in Healthcare Administration/Clinical Operations.',
      '10+ years managing operational departments in premier tertiary-level research hospitals.',
      'Demonstrated expertise in deploying computerized clinical records and patient tracking systems.'
    ]
  },
  {
    id: 'job-4',
    title: 'Global supply Logistics Architect',
    sector: 'Logistics Division',
    location: 'Rotterdam, Netherlands (Remote)',
    type: 'Remote',
    description: 'Engineer and optimize multi-modal routing algorithms matching client container flow to zero-emission maritime and rail assets.',
    requirements: [
      'Bachelor`s degree in Operations Research, Mathematics, or Industrial Engineering.',
      'Deep fluency with linear programming solvers (Gurobi, CPLEX) and GIS coordinate systems.',
      'Strong communication skills for negotiating multi-year supply coordination with port authorities.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: "Vision Madagascar re-engineered our entire regional supply network by injecting smart modular picking robots and electric vehicle routing. The transition was smooth, fast, and yielded instantaneous carbon reductions.",
    author: "Klaus-Dieter Hoffmann",
    role: "VP of Global Supply Logistics",
    company: "Sachsen-Automotive AG",
    rating: 5
  },
  {
    id: 'test-2',
    quote: "Investing in the Synapse Core Smart Grid was a milestone for our city council. Not only did our municipal energy and water bills plummet, but the customer satisfaction indices reached historical heights.",
    author: "Clara Tan-Lee",
    role: "Commissioner of Housing & Urbanism",
    company: "Metro Smart Development Board",
    rating: 5
  },
  {
    id: 'test-3',
    quote: "The molecular healthcare array developed by Vision Madagascar Diagnostics has saved countless lives. Our research physicians now isolate cancer pathways in 2 hours instead of 10 days, with unparalleled clarity.",
    author: "Prof. Arthur Pendelton MD",
    role: "Director of Genomic Diagnostics",
    company: "Western Oncology & Clinical Systems",
    rating: 5
  }
];

export const VALUE_PROPS = [
  {
    title: 'Incessant Innovation',
    description: 'We invest over 14% of annual group revenue directly back into collaborative university laboratories and advanced research programs.',
    icon: 'Lightbulb'
  },
  {
    title: 'Sovereign-Grade Trust',
    description: 'Trusted by national cabinets, central city entities, and tier-one pension funds to execute key, high-security utility assets.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Zero Carbon Mandate',
    description: 'Every division is bound by strict, verified net-zero targets. We do not offset; we engineer actual physical decarbonization.',
    icon: 'Leaf'
  },
  {
    title: 'Global Interconnect',
    description: 'Our digital networks and logistics supply chains span 74 terminal ports and secure cloud pipelines on three continents.',
    icon: 'Globe2'
  }
];

export const CORPORATE_NEWS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Vision Madagascar and European Clean Synergy Trust Sign $850M Offshore Wind Facility',
    category: 'M&A & Partnerships',
    date: '2026-05-18',
    summary: 'A joint initiative to construct and operate 420 megawatt deep-sea floating wind turbines in the North Sea corridor.',
    content: 'Today, Vision Madagascar officially completed high-level terms with the European Clean Synergy Trust for an $850M debt-to-equity investment facility. The capital allocation targets deepwater floating kinetic rigs, engineered to withstand Category-5 marine storm events while feeding steady clean voltages directly into northern continental distribution hubs. Construction begins Q4 2026.',
    imageSeed: 'windfarm'
  },
  {
    id: 'news-2',
    title: 'Precision Oncology Genomic Array Achieves 99.8% Early Isolation Rate in Clinical Trials',
    category: 'Scientific Excellence',
    date: '2026-04-29',
    summary: 'Our healthcare division announces peer-reviewed breakthrough validation of automatic tumor pathfinding models.',
    content: 'Following a continuous 18-month multi-center study involving 14,005 anonymized genomic samples, the Synapse Healthcare Suite has demonstrated superior predictive diagnostic performance. The clinical board verified a 99.8% precision index in isolating early stage cell mutations. The software will be made available to select tier-one research hospitals globally next month.',
    imageSeed: 'laboratory'
  },
  {
    id: 'news-3',
    title: 'Autonomous Multi-Modal Distribution Terminal Completed in Port of Rotterdam',
    category: 'Global Logistics',
    date: '2026-03-12',
    summary: 'Integrating robotic container sorters, automated guided vehicles, and AI dynamic routing pipelines.',
    content: 'We are proud to announce the formal commissioning of Terminal A-74 in Rotterdam. Built in collaboration with global maritime regulators, the terminal operates entirely on automated electric transporters powered by an onsite hydrogen-retention micro-grid. The facility reduces turn-around latency from 14 hours to just 95 minutes, offering an exemplary template for future zero-emission ports.',
    imageSeed: 'containerport'
  }
];

export const CORPORATE_BLOGS: BlogItem[] = [
  {
    id: 'blog-1',
    title: 'The Algorithmic Grid: Balancing Multi-Gigawatt Intermittent Energy Assets',
    author: 'Amara Vance',
    authorRole: 'Managing Director of Energy Infrastructure',
    date: '2026-05-24',
    readTime: '6 min read',
    summary: 'How predictive modeling and deep reinforcement learning stabilize local micro-grids without relying on fossil-fuel reserves.',
    content: 'The rapid integration of utility-scale wind and solar installations presents a systemic bottleneck: intermittency. At Vision Madagascar, we have abandoned traditional thermal-peaker plant safeguards in favor of automated AI routing models. By feeding real-time satellite isobar imagery and micro-climate patterns into neural active routers, we can predict grid surges 4 hours in advance. Read on to explore how molecular battery reserves and predictive load balancing achieve 99.99% operational continuity.',
    imageSeed: 'renewableenergy',
    tags: ['Decarbonization', 'SmartGrid', 'EnergyTransition']
  },
  {
    id: 'blog-2',
    title: 'Reconstructing Urbanity: The Blueprint for Carbon-Neutral Smart City Masterplans',
    author: 'Marcus Vance',
    authorRole: 'CEO & Principal Masterplanner',
    date: '2026-04-15',
    readTime: '8 min read',
    summary: 'An inside look into modern, non-coercive sustainable zoning, passive structural materials, and circular water loops.',
    content: 'Traditional cities generate nearly 70% of global emissions, primarily driven by cement production, inefficient thermal management, and long-range logistics. By constructing masterproperties around decentralized light-transit cores and utilizing low-hydration geo-polymer concrete, we create urban spaces that act as absolute carbon sinks. The Vision Madagascar Smart City layout integrates natural wind thermal tunnels and circular membrane bioreactors, ensuring that 100% of municipal greywater is filtered and routed back into public hydroponic reserves.',
    imageSeed: 'smartcity',
    tags: ['SustainableUrbanism', 'SmartCities', 'MaterialsScience']
  },
  {
    id: 'blog-3',
    title: 'Human-in-the-Loop Diagnostic Automation: Safe AI Integration in Clinical Spaces',
    author: 'Dr. Elena Rostova',
    authorRole: 'Chief of Medical Informatics & Bio-Diagnostics',
    date: '2026-03-05',
    readTime: '5 min read',
    summary: 'Why automation should serve as an amplifier for clinical physicians, not as an autonomous absolute authority.',
    content: 'In the rush to integrate neural transformers into medical software, many industry actors overlook critical safety protocols. At our Medical Analytics Labs, we adhere to a rigid human-in-the-loop paradigm. AI diagnostic models isolate pathways and generate cross-referenced literature indices, but final diagnostic signing remains exclusively within human authority. This protocol has maintained a zero-fault record across all active installations while improving diagnostic processing speeds by 400%.',
    imageSeed: 'microscope',
    tags: ['HealthcareTech', 'Bioinformatics', 'AIGovernance']
  }
];

export const CORPORATE_EVENTS: CorporateEvent[] = [
  {
    id: 'event-1',
    title: 'Global Sovereign Infrastructure Circular Summit 2026',
    type: 'upcoming',
    date: '2026-07-15',
    time: '09:00 - 17:00 UTC',
    location: 'Munich Advisory Council Center, Germany',
    description: 'An elite congregation of cabinet-level environmental administrators, chief technologists, and primary capital Allocators debating decarbonized maritime ports and high-capacity grids.',
    imageSeed: 'convention',
    speakers: ['Marcus Vance (CEO)', 'Amara Vance (Energy MD)', 'Clara Tan-Lee (Commissioner, MHUB)'],
    metrics: { label: 'Registered Delegates', value: '450+ High-Level' }
  },
  {
    id: 'event-2',
    title: 'Molecular Diagnostic & Genomics Forum',
    type: 'upcoming',
    date: '2026-08-20',
    time: '13:00 - 18:30 JST',
    location: 'Tokyo Medical Innovation Hub, Japan',
    description: 'Presenting the verified long-term clinical data of the Synapse Diagnostic Genome suite to APAC hospital coordinators and regulatory boards.',
    imageSeed: 'medicalhub',
    speakers: ['Dr. Elena Rostova', 'Prof. Arthur Pendelton MD'],
    metrics: { label: 'Partner Clinics Participating', value: '180+ Systems' }
  },
  {
    id: 'event-3',
    title: 'Offshore Floating Kinetic Facility Breakthrough Webcast',
    type: 'upcoming',
    date: '2026-09-02',
    time: '14:00 - 15:30 CET',
    location: 'Global Broadcast Pipeline (Digital)',
    description: 'Technical deep-dive on the hydrodynamics of the North Sea kinetic wind array, streamed directly from the engineering docks.',
    imageSeed: 'wavepower',
    speakers: ['Amara Vance', 'Dr. Hans Werner (Clean Synergy Trust)'],
    metrics: { label: 'Expected Virtual Attendees', value: '5,000+' }
  },
  {
    id: 'event-4',
    title: 'Completion and Giga-Grid Connection of North Sea Wind-Hub Phase 1',
    type: 'recent',
    date: '2026-05-10',
    location: 'Offshore Coordinate 54°N, 3°E',
    description: 'Successfully integrated 12 floating deepwater wind turbines directly into northern continental distribution hubs.',
    imageSeed: 'offshoreresource',
    speakers: ['Amara Vance', 'Sovereign Energy Officers'],
    metrics: { label: 'Generated Feed Voltage', value: '250 Megawatts' }
  },
  {
    id: 'event-5',
    title: 'Smart Cities Circular Economy Symposium Tokyo',
    type: 'recent',
    date: '2026-04-03',
    location: 'Nippon Grand Convention Venue, Tokyo',
    description: 'Detailed showcase of Vision Madagascars carbon-neutral construction techniques and membrane water bioreactor arrays.',
    imageSeed: 'tokyobuilding',
    speakers: ['Marcus Vance (CEO)', 'Klaus-Dieter Hoffmann (VP, Sachsen-Automotive)'],
    metrics: { label: 'Audited Decarbonization Value', value: 'LEED Certified' }
  },
  {
    id: 'event-6',
    title: 'Synapse Diagnostic AI Release & Validation Board Assembly',
    type: 'recent',
    date: '2026-02-18',
    location: 'Zurich Medical Analytics Labs, Switzerland',
    description: 'Formal assembly of multi-center trial regulators for peer-reviewing genomic isolation latency and safety thresholds.',
    imageSeed: 'medicalboard',
    speakers: ['Dr. Elena Rostova', 'Regulatory Panel Chairs'],
    metrics: { label: 'Peer Review Consensus', value: '100% Unanimous' }
  }
];

