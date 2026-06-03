import { Sector, Project, Service, Leader, JobPosition, TimelineEvent, Testimonial, NewsItem, BlogItem, CorporateEvent } from '../types';

export const SECTORS: Sector[] = [
  {
    id: 'healthcare',
    name: 'Healthcare Division',
    icon: 'Heart',
    description: 'Pioneering global wellness through cutting-edge diagnostics, state-of-the-art medical technology, and world-class hospital networks delivering compassionate Patient-First experiences.',
    metrics: [
      { label: 'Patient Outcomes', value: '99.2% Yes' },
      { label: 'Advanced Facilities', value: '42 Centers' },
      { label: 'R&D Investment', value: '$120M+' }
    ],
    services: ['Tertiary Care Referral Hospitals', 'Molecular Precision Diagnostics', 'Robotic-Assisted Surgery Integration'],
    imagingSeed: 'healthcare'
  },
  {
    id: 'technology',
    name: 'Technology Division',
    icon: 'Cpu',
    description: 'Driving enterprise scale via bespoke Next-Gen software development, custom generative AI integrations, advanced cognitive analytics, and secure cloud orchestration architectures.',
    metrics: [
      { label: 'SLA Availability', value: '99.999%' },
      { label: 'Data Protected', value: '4.8 Exabytes' },
      { label: 'Tech Engineers', value: '2,400+' }
    ],
    services: ['Enterprise AI & ML Solutions', 'High-Scale Cloud Engineering', 'Cybersecurity Threat Intelligence'],
    imagingSeed: 'technology'
  },
  {
    id: 'realestate',
    name: 'Real Estate Division',
    icon: 'Building2',
    description: 'Shaping the future of community via carbon-neutral smart cities, futuristic commercial towers, premium residential spaces, and ultra-high-efficiency master-planned environments.',
    metrics: [
      { label: 'Leased Portfolio', value: '18M+ sq ft' },
      { label: 'Green Certification', value: 'LEED Gold+' },
      { label: 'Resident NPS', value: '78+' }
    ],
    services: ['Sustainable Urban Master-Planning', 'High-End Commercial Assets', 'Smart City Technological Integration'],
    imagingSeed: 'realestate'
  },
  {
    id: 'construction',
    name: 'Construction Division',
    icon: 'HardHat',
    description: 'Constructing robust, multi-generational infrastructure, complex transit facilities, and heavy industrial facilities utilizing proprietary sustainable materials and AI-routed workflows.',
    metrics: [
      { label: 'Incidents Rate', value: '0.00 (Zero)' },
      { label: 'Mega Projects', value: '115 Delivered' },
      { label: 'Material Efficiency', value: '94.5%' }
    ],
    services: ['Transnational Civil Engineering', 'Heavy Prefabricated Assembly', 'Sustainable Structural Design'],
    imagingSeed: 'construction'
  },
  {
    id: 'energy',
    name: 'Energy Division',
    icon: 'Sparkles',
    description: 'Powering transition towards renewable pathways with gigawatt-scale wind farms, concentrated solar arrays, grid-level battery storage, and smart micro-grid utility networks.',
    metrics: [
      { label: 'Clean Power Gen', value: '8.4 Gigawatts' },
      { label: 'CO2 Offset', value: '15.4M Tons' },
      { label: 'Grid Connection', value: '3.2M Homes' }
    ],
    services: ['Utility-Scale PV Assets', 'Offshore Wind Generation', 'Smart Micro-Grid Logistics'],
    imagingSeed: 'energy'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing Division',
    icon: 'Combine',
    description: 'Precision manufacturing of critical micro-components and industrial automation parts, scaling global export channels with full climate-aware green supply operations.',
    metrics: [
      { label: 'Yield Rate', value: '99.998%' },
      { label: 'Automated Plants', value: '14 Facilities' },
      { label: 'Global Trade Hubs', value: '45 countries' }
    ],
    services: ['Advanced Micro-Component Cast', 'Fully-Automated Circular Assembly', 'Zero-Waste Supply Routing'],
    imagingSeed: 'manufacturing'
  },
  {
    id: 'logistics',
    name: 'Logistics Division',
    icon: 'Truck',
    description: 'End-to-end multi-modal routing, advanced temperature-controlled warehousing, and global container movements coordinated by automated real-time cognitive dispatch.',
    metrics: [
      { label: 'On-Time Performance', value: '99.85%' },
      { label: 'Cold-Chain Space', value: '4.2M cu ft' },
      { label: 'Clean Truck Fleet', value: '85% Electric' }
    ],
    services: ['Secure Global Cargo Flow', 'Dynamic Cold-Chain Logistics', 'Autonomous Warehouse Robotics'],
    imagingSeed: 'logistics'
  },
  {
    id: 'consulting',
    name: 'Consulting & Advisory',
    icon: 'Briefcase',
    description: 'Transformative management solutions powering boards and leaders with operational blueprinting, strategic transaction advice, and enterprise risk intelligence.',
    metrics: [
      { label: 'Client Advisory Value', value: '$45B+' },
      { label: 'M&A Transactions', value: '280+ Completed' },
      { label: 'Client Retention', value: '96.4%' }
    ],
    services: ['Strategic Board Advisory', 'Digital Capital Assessment', 'Risk & Compliance Restructuring'],
    imagingSeed: 'consulting'
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
    title: 'Madagascar Vision Helix Healthcare Center',
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
    bio: 'With over 24 years directing multi-billion dollar capital programs, Helena guides Madagascar Vision`s strategic direction, ensuring portfolio diversification and deep alignment with institutional investor pools.',
    imageSeed: 'executive_woman_portrait'
  },
  {
    id: 'lead-2',
    name: 'Marcus K. Chen, PhD',
    role: 'Chief Technology Officer',
    bio: 'A visionary in computer science and edge intelligence, Dr. Chen oversees technology investments, AI deployment, cyber posture, and digital twin systems across our core physical assets.',
    imageSeed: 'executive_man_glasses'
  },
  {
    id: 'lead-3',
    name: 'Amara Diop-Sartre',
    role: 'Managing Partner, Energy Partnerships & Infrastructure',
    bio: 'Amara specializes in global asset investment, renewable power purchase partnerships, and cross-border civil mega-projects, previously directing national infrastructure funds.',
    imageSeed: 'executive_woman_corporate'
  },
  {
    id: 'lead-4',
    name: 'Jonathan Reynolds',
    role: 'Chief Sustainability Officer',
    bio: 'Jonathan coordinates our multi-sector ESG commitments, ensuring that our operations across manufacturing, building, logistics, and healthcare maintain absolute compliance with global sustainability agreements.',
    imageSeed: 'executive_man_grey_hair'
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
    quote: "Madagascar Vision re-engineered our entire regional supply network by injecting smart modular picking robots and electric vehicle routing. The transition was smooth, fast, and yielded instantaneous carbon reductions.",
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
    quote: "The molecular healthcare array developed by Madagascar Vision Diagnostics has saved countless lives. Our research physicians now isolate cancer pathways in 2 hours instead of 10 days, with unparalleled clarity.",
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
    title: 'Madagascar Vision and European Clean Synergy Trust Sign $850M Offshore Wind Facility',
    category: 'M&A & Partnerships',
    date: '2026-05-18',
    summary: 'A joint initiative to construct and operate 420 megawatt deep-sea floating wind turbines in the North Sea corridor.',
    content: 'Today, Madagascar Vision officially completed high-level terms with the European Clean Synergy Trust for an $850M debt-to-equity investment facility. The capital allocation targets deepwater floating kinetic rigs, engineered to withstand Category-5 marine storm events while feeding steady clean voltages directly into northern continental distribution hubs. Construction begins Q4 2026.',
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
    content: 'The rapid integration of utility-scale wind and solar installations presents a systemic bottleneck: intermittency. At Madagascar Vision, we have abandoned traditional thermal-peaker plant safeguards in favor of automated AI routing models. By feeding real-time satellite isobar imagery and micro-climate patterns into neural active routers, we can predict grid surges 4 hours in advance. Read on to explore how molecular battery reserves and predictive load balancing achieve 99.99% operational continuity.',
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
    content: 'Traditional cities generate nearly 70% of global emissions, primarily driven by cement production, inefficient thermal management, and long-range logistics. By constructing masterproperties around decentralized light-transit cores and utilizing low-hydration geo-polymer concrete, we create urban spaces that act as absolute carbon sinks. The Madagascar Vision Smart City layout integrates natural wind thermal tunnels and circular membrane bioreactors, ensuring that 100% of municipal greywater is filtered and routed back into public hydroponic reserves.',
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
    description: 'Detailed showcase of Madagascar Visions carbon-neutral construction techniques and membrane water bioreactor arrays.',
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

