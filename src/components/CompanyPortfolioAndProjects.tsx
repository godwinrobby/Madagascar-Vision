import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  Layers, 
  Activity, 
  ArrowUpRight, 
  CheckCircle2, 
  X, 
  Sparkles, 
  Zap, 
  Compass, 
  Calendar, 
  ShieldCheck, 
  DollarSign, 
  FileText 
} from 'lucide-react';

interface CompanyProject {
  id: string;
  title: string;
  location: string;
  status: string;
  metricLabel: string;
  metricValue: string;
  imageSeed: string;
  highlights: string[];
  challenge: string;
  solution: string;
  result: string;
  budget: string;
  timeline: string;
}

interface CompanyPortfolioAndProjectsProps {
  companyId: string;
  language: 'EN' | 'FR' | 'MG';
  colors: {
    accent: string;
    textAccent: string;
    textAccentHover: string;
    iconColor: string;
    bgMuted: string;
    borderMuted: string;
    borderHover: string;
    glow: string;
  };
}

// Highly tailored projects dataset representing each sub-sector with high-craft prose
const PROJECTS_DATABASE: Record<string, Record<'EN' | 'FR' | 'MG', CompanyProject[]>> = {
  ngo: {
    EN: [
      {
        id: 'ngo-p1',
        title: 'SAVA Solar EPP Canopy',
        location: 'Sambava & Antalaha, Madagascar',
        status: 'Operational',
        metricLabel: 'Schoolhouses Equipped',
        metricValue: '50 Primary EPP',
        imageSeed: 'solar_school',
        highlights: ['100% Clean Solar Power', 'Lego-Modular Structural Kits', 'Sovereign Donor Vouched'],
        challenge: 'Rural primary schools lacked consistent electric access for learning materials, lowering literacy and engagement metrics.',
        solution: 'Constructed custom roof-integrated PV canopies with maintenance-free lithium battery banks in isolated vanilla agricultural circles.',
        result: 'Achieved 100% uptime for computerized tablets, extending light hours into regional evening parent literacy classes.',
        budget: '€1.2M Funding Pooled',
        timeline: 'Completed Q3 2025'
      },
      {
        id: 'ngo-p2',
        title: 'Anosy Mobile Clinic Outreach',
        location: 'Tolanaro (Fort Dauphin), Madagascar',
        status: 'Active',
        metricLabel: 'Under-resourced Patients Treated',
        metricValue: '18,500+ Annually',
        imageSeed: 'mobile_clinic',
        highlights: ['5 Off-road Tactical Cruisers', 'Direct Molecular Diagnostic Kits', 'Remote Telemetry Sat-link'],
        challenge: 'High isolation index in extreme dry southern sectors prevented basic maternal and diagnostic healthcare access.',
        solution: 'Deployed fully equipped heavy multi-terrain vehicles with certified clinicians holding digital satellite health files.',
        result: 'Decreased diagnostic turnaround time from 3 weeks to 15 minutes, actively treating acute water-borne illnesses on-site.',
        budget: '€750K Annual Allocation',
        timeline: 'Extended through 2026'
      },
      {
        id: 'ngo-p3',
        title: 'Antananarivo Clean Aqueduct Kiosks',
        location: 'Analamanga Region, Madagascar',
        status: 'Scaling',
        metricLabel: 'Pure Water Distributed',
        metricValue: '4.8M Liters / Yr',
        imageSeed: 'water_well',
        highlights: ['20 Decentralized Stations', 'Coinless Smart Token Keys', 'Local Community Cooperative Led'],
        challenge: 'Informal urban sectors lacked access to clean deep-water reserves, creating substantial pathogen-risk for families.',
        solution: 'Engineered automated sanitizing clean wells using multi-stage reverse osmosis paired with community-cooperative administration.',
        result: 'Cut local enteric incident numbers by 81% nationwide, directly feeding clean reserves into public primary facilities.',
        budget: '€950K Committed Cap',
        timeline: 'Phase II Scaling'
      }
    ],
    FR: [
      {
        id: 'ngo-p1',
        title: 'Canopée Solaire EPP SAVA',
        location: 'Sambava & Antalaha, Madagascar',
        status: 'Opérationnel',
        metricLabel: 'Écoles Primaires Équipées',
        metricValue: '50 EPP Rurales',
        imageSeed: 'solar_school',
        highlights: ['Énergie 100% Photovoltaïque', 'Kits à Structure Modulaire', 'Financement Souverain Certifié'],
        challenge: 'Le manque d\'électricité dans les écoles primaires de brousse limitait l\'alphabétisation et l\'accès aux ressources numériques.',
        solution: 'Installation de toitures solaires hybrides coordonnées avec accumulateurs de secours étanches pour un entretien minimal.',
        result: 'Disponibilité énergétique de 100%, permettant l\'ouverture de cours du soir d\'alphabétisation pour adultes.',
        budget: '1,2 M€ Alloués',
        timeline: 'Achevée en T3 2025'
      },
      {
        id: 'ngo-p2',
        title: 'Cliniques Mobiles de l\'Anosy',
        location: 'Fort-Dauphin, Madagascar',
        status: 'Actif',
        metricLabel: 'Patients Pris en Charge',
        metricValue: '18 500+ par an',
        imageSeed: 'mobile_clinic',
        highlights: ['5 Véhicules Tout-Terrain', 'Diagnostics Moléculaires Instantanés', 'Liaison Satellite Télé-médicale'],
        challenge: 'L\'isolement extrême du Sud compliquait l\'accès aux soins de maternité et aux diagnostics sanitaires élémentaires.',
        solution: 'Déploiement de camions cliniques équipés d\'unités d\'imagerie médicale et de valises d\'analyse moléculaire directe.',
        result: 'Temps d\'attente diagnostique ramené de 3 semaines à 10 minutes, soignant directement les pathologies hydriques.',
        budget: '750k€ Budget Annuel',
        timeline: 'Reconduit jusqu\'en 2026'
      },
      {
        id: 'ngo-p3',
        title: 'Kiosques à Eau Potable Tana',
        location: 'Analamanga, Madagascar',
        status: 'En Expansion',
        metricLabel: 'Volume d\'Eau Pure Distribuée',
        metricValue: '4,8M Litres / An',
        imageSeed: 'water_well',
        highlights: ['20 Stations Décentralisées', 'Paiement sans contact par jeton', 'Gestion par Coopérative Locale'],
        challenge: 'Les quartiers défavorisés d\'Antananarivo souffraient d\'un manque d\'accès à des sources fiables exemptes de germes.',
        solution: 'Forages urbains automatisés avec triple filtration par osmose inverse gérés exclusivement par des structures de quartier.',
        result: 'Diminution de 81% des maladies infectieuses d\'origine hydrique chez les enfants bénéficiaires.',
        budget: '950k€ Investis',
        timeline: 'Phase II d\'Échelle'
      }
    ],
    MG: [
      {
        id: 'ngo-p1',
        title: 'Tetikasa Jiro Masoandro ho an\'ny EPP SAVA',
        location: 'Sambava & Antalaha, Madagasikara',
        status: 'Mandeha',
        metricLabel: 'Sekoly EPP Nahitana Jiro',
        metricValue: 'Sekoly 50 Vita',
        imageSeed: 'solar_school',
        highlights: ['Hery Selera avy amin\'ny Masoandro', 'Fitaovana Modely sy Mafy', 'Tolana ara-bola Voamarina'],
        challenge: 'Tsy fahampian\'ny jiro tamin\'ireo sekoly ambaratonga voalohany tany ambanivohitra, nanasarotra ny fampianarana.',
        solution: 'Fametrahana "panneaux solaires" manokana sy vata mpanangona herinaratra maharitra teo amin\'ny tafo.',
        result: 'Mandeha 100% ny solosaina takelaka ary afaka mianatra koa ny ray aman-dreny ny hariva.',
        budget: '1.2M € Solomasoandro',
        timeline: 'Vita T3 2025'
      },
      {
        id: 'ngo-p2',
        title: 'Kilinika Mitety Vohitra Anosy',
        location: 'Tolanaro (Fort Dauphin), Madagasikara',
        status: 'Mandeha',
        metricLabel: 'Isan\'ny Olona Voatsabo',
        metricValue: '18,500+ Isan-taona',
        imageSeed: 'mobile_clinic',
        highlights: ['Fiara matanjaka 5 mitety tany', 'Fitaovana fitiliana aretina', 'Fifandraisana "Satellite"'],
        challenge: 'Ny halavirana sy ny faharatsian\'ny lalana any atsimo no misakana ny mponina tsy hahazo fitsaboana tsara.',
        solution: 'Fandefasana fiara 4x4 manokana misy mpitsabo matihanina sy fitaovana fitiliana nomerika haingam-pandeha.',
        result: 'Ny fitiliana aretina nidina ho 15 minitra monja fa tsy herinandro maromaro intsony.',
        budget: '750K € Isan-taona',
        timeline: 'Tohizana hatramin\'ny 2026'
      },
      {
        id: 'ngo-p3',
        title: 'Kioska mpanadio rano Antananarivo',
        location: 'Faritra Analamanga, Madagasikara',
        status: 'Mihalehibe',
        metricLabel: 'Rano Madio Nozaraina',
        metricValue: '4.8M Litatra / Taona',
        imageSeed: 'water_well',
        highlights: ['Tobim-rano 20', 'Karatra nomerika fidirana', 'Tantanan\'ny Fikambanan\'ny mponina'],
        challenge: 'Ny rano amin\'ny faritra be mponina eto Tana dia matetika maloto, niteraka aretin-kibo maro taminn\'ny mpianatra.',
        solution: 'Fampiasana teknolojia fanadiovana rano "Reverse Osmosis" tantanan\'ny mponina ifotony handoavana rano madio.',
        result: 'Nidina 81% ny aretin-kibo vokatry ny rano maloto teo amin\'ireo faritra nahitana ny tetikasa.',
        budget: '950K € Atolotra',
        timeline: 'Fizarana faha-II andalam-pandrosoana'
      }
    ]
  },
  tsingy: {
    EN: [
      {
        id: 'tsingy-p1',
        title: 'Tsingy Sanctuary Eco-Lodge',
        location: 'Diego Suarez Coastline, Madagascar',
        status: 'Operational',
        metricLabel: 'Bio-corridor Preserved',
        metricValue: '4,500 Hectares',
        imageSeed: 'eco_lodge',
        highlights: ['Biophilic Architectural Pillars', 'Zero Forest Concrete Footprint', 'Water Cycle Recovery Closed-loop'],
        challenge: 'Developing low-impact eco-spaces in pristine, fragile karst areas without disrupting delicate limestone endemics.',
        solution: 'Engineered suspended timber platforms secured by deep tension pins instead of heavy monolithic concrete pours.',
        result: 'Declared as 100% non-disruptive, creating Madagascar\'s supreme luxury conservation tourism standard.',
        budget: '$8.5M Capital',
        timeline: 'Completed Q1 2026'
      },
      {
        id: 'tsingy-p2',
        title: 'Micro-Grid Canopy',
        location: 'Bay Zone, Madagascar',
        status: 'Operational',
        metricLabel: 'Sovereign Clean Power',
        metricValue: '350 kWp Hybrid PV',
        imageSeed: 'dense_forest',
        highlights: ['Completely Hidden Array', 'Lithium Salt Solid Batteries', '99.9% Uptime Score'],
        challenge: 'Maintaining modern luxury services deep in remote forest sanctuaries with zero visible industrial equipment to spoil character.',
        solution: 'Blended micro-solar collectors into high-level tree lines integrated with underground carbon-fiber energy vaults.',
        result: 'Saves 240 metric tons of diesel imports annually while preserving auditory silence across natural animal zones.',
        budget: '$2.1M Investment',
        timeline: 'Active Development'
      }
    ],
    FR: [
      {
        id: 'tsingy-p1',
        title: 'Sanctuaire Eco-Lodge Tsingy',
        location: 'Côte de Diego-Suarez, Madagascar',
        status: 'Opérationnel',
        metricLabel: 'Corridor Biologique Préservé',
        metricValue: '4 500 Hectares',
        imageSeed: 'eco_lodge',
        highlights: ['Architecture Biophilique Suspendue', 'Zéro Mètre Cube de Béton Sol', 'Cycle d\'Eau Zéro Rejet'],
        challenge: 'Construire des suites luxueuses dans des massifs de karst ultra-sensibles sans détruire la géologie sédimentaire unique.',
        solution: 'Fixation sur pieux d\'acier thermo-laqué profondément vissés, évitant les fondations de béton perturbatrices.',
        result: 'Reconnu comme projet modèle d\'écotourisme mondial avec zéro perturbation de la biodiversité endemique.',
        budget: '8,5 M$ d\'Actifs',
        timeline: 'Achevée en Q1 2026'
      },
      {
        id: 'tsingy-p2',
        title: 'Centrale Solaire Invisible',
        location: 'Zone de la Baie, Madagascar',
        status: 'Opérationnel',
        metricLabel: 'Réseau Hybride Connecté',
        metricValue: '350 kWc Silencieux',
        imageSeed: 'dense_forest',
        highlights: ['Intégration dous la canopée', 'Batteries au Sel de Lithium', 'Efficience Énergétique Totale'],
        challenge: 'Fournir 100% de l\'alimentation électrique d\'un complexe hôtelier 5 Étoiles sans nuire à l\'ambiance sonore sauvage.',
        solution: 'Installation de micro-capteurs haut de gamme peints aux couleurs végétales reliés à des batteries de stockage souterraines.',
        result: 'Évite l\'importation de 240 tonnes de carburant par an, réduisant le niveau de décibels du site au silence de brousse.',
        budget: '2,1 M$ Investis',
        timeline: 'Actif'
      }
    ],
    MG: [
      {
        id: 'tsingy-p1',
        title: 'Tsingy Sanctuary Eco-Lodge',
        location: 'Diego Suarez, Madagasikara',
        status: 'Mandeha',
        metricLabel: 'Saha Voajanahary Voaaro',
        metricValue: '4,500 Hektara',
        imageSeed: 'eco_lodge',
        highlights: ['Trano hazo ambony andrin-tsivalana', 'Tsy mampiasa simenitra loatra', 'Rano voatantana ara-dalàna'],
        challenge: 'Fananganana trano fandraisam-bahiny mihaja nefa tsy manimba ireo vatolampy "tsingy" sy biby fahita eto ihany.',
        solution: 'Fahantrana andrin-tsivalana vy mafy ampidirina lalina amin\'ny tany mba tsy hampiasa simenitra manapotika ny tontolo.',
        result: 'Voasokajy ho trano fandraisam-bahiny mitsinjo indrindra ny tontolo iainana aty Afrika amin\'ny sanda tsy misy karbôna.',
        budget: '8.5M $ fampiasam-bola',
        timeline: 'Vita Q1 2026'
      },
      {
        id: 'tsingy-p2',
        title: 'Tobim-pifandraisana Herin\'aratra Sola',
        location: 'Diego, Madagasikara',
        status: 'Mandeha',
        metricLabel: 'Herin\'aratra tsy manimba tany',
        metricValue: '350 kWp Masoandro',
        imageSeed: 'dense_forest',
        highlights: ['Jiro masoandro ambonin\'ny hazo', 'Bateria Lithium maharitra', 'Tsy misy tabataba jiro'],
        challenge: 'Fampandehanana jiro sy fitaovana ho an\'ny mpizaha tany nefa tsy hita maso ary tsy misy tabataba milina.',
        solution: 'Fametrahana panely solera tsy hita maso eo ambony hazo avo sy fametrahana ny bateria any ambanin\'ny tany.',
        result: 'Nampihena 240 taonina ny fampiasana solika gazoala isan-taona nefa tsy nisy tabataba nanelingelina ny biby.',
        budget: '2.1M $ Tetikasa',
        timeline: 'Mandeha'
      }
    ]
  },
  water: {
    EN: [
      {
        id: 'water-p1',
        title: 'Mahajanga Marine Reverse Osmosis',
        location: 'Mahajanga, Madagascar',
        status: 'Operational',
        metricLabel: 'Capacity Outflow',
        metricValue: '12M Liters / Year',
        imageSeed: 'purity',
        highlights: ['Marine Wave Turbines Powered', 'Audited Zero Chemical Waste', 'Low maintenance membranes'],
        challenge: 'Coastal groundwater salinization left populous port sectors with unsafe tap water containing trace chemicals.',
        solution: 'Constructed an innovative wave-driven reverse osmosis installation filtering seawater with zero mainland emissions.',
        result: 'Now supplies drinking resources directly to 110 communities, completely eliminating reliance on inland water trucking.',
        budget: '$4.2M Capital',
        timeline: 'SLA Active 2026'
      }
    ],
    FR: [
      {
        id: 'water-p1',
        title: 'Osmose Inverse Marine de Mahajanga',
        location: 'Mahajanga, Madagascar',
        status: 'Opérationnel',
        metricLabel: 'Volume d\'Eau Produit',
        metricValue: '12M Litres / An',
        imageSeed: 'purity',
        highlights: ['Alimenté par l\'Énergie des Vagues', 'Zéro Rejet Chimique Interne', 'Membranes de Filtration Haute Technologie'],
        challenge: 'La salinisation des nappes côtières empêchait l\'approvisionnement des populations portuaires en eau potable saine.',
        solution: 'Création d\'une usine autonome d\'osmose de haute mer utilisant l\'énergie hydraulique des marées pour les filtres.',
        result: 'Fournit de l\'eau potable saine de qualité médicale à plus de 110 villages, éliminant les camions-citernes coûteux.',
        budget: '4,2 M$ d\'Actifs',
        timeline: 'SLA Actif 2026'
      }
    ],
    MG: [
      {
        id: 'water-p1',
        title: 'Tetikasa Sivana Rano any Mahajanga',
        location: 'Mahajanga, Madagasikara',
        status: 'Mandeha',
        metricLabel: 'Rano voadio vokarina',
        metricValue: '12M Litatra / Taona',
        imageSeed: 'purity',
        highlights: ['Hery avy amin\'ny Onjan-dranomasina', 'Tsy mampiasa akora simika manimba', 'Teknolojia sivana mandroso'],
        challenge: 'Nihoatra ny sira ny ranon\'ny fantsakana tany Mahajanga, niteraka fahasahiranana lehibe ho an\'ny mponina amoron-tsiraka.',
        solution: 'Fananganana tobim-panadiovana ranon-dranomasina lehibe mampiasa "Reverse Osmosis" mandeha amin\'ny onjan-drano.',
        result: 'Mamatsy rano fisotro madio ho an\'ny tanàna maherin\'ny 110 izao, nampihena ny fidiran\'ny aretina lehibe avy amin\'ny rano.',
        budget: '4.2M $ Fampiasam-bola',
        timeline: 'SLA feno 2026'
      }
    ]
  },
  woods: {
    EN: [
      {
        id: 'woods-p1',
        title: 'FSC Silviculture Core Grid',
        location: 'East Coast Rainforest Boundary, Madagascar',
        status: 'Active',
        metricLabel: 'FSC Audited Harvest',
        metricValue: '100% Certified Wood',
        imageSeed: 'timber_forest',
        highlights: ['FSC Certification 10-Year Direct', 'Compulsory replanting ratio 1:3', 'Carbon absorption registry live'],
        challenge: 'Unmanaged clear-cutting across eastern territories degraded critical tropical soils and eroded endemic species habitats.',
        solution: 'Established state-of-the-art biological canopy silviculture, maintaining a strict computer-monitored replacement matrix for every single timber tree.',
        result: 'Achieved complete FSC gold certification while proving net carbon-neutral export output across Europe.',
        budget: '$3.5M Forestry Core',
        timeline: 'Regulated Continuous'
      }
    ],
    FR: [
      {
        id: 'woods-p1',
        title: 'Sylviculture Certifiée FSC de l\'Est',
        location: 'Forêt Humide Orientale, Madagascar',
        status: 'Actif',
        metricLabel: 'Rendement Certifié FSC',
        metricValue: '100% Bois Éco-responsable',
        imageSeed: 'timber_forest',
        highlights: ['Certification FSC Décennale Reçue', 'Ration de reboisement obligatoire 1:3', 'Base Carbone temps réel lancée'],
        challenge: 'La déforestation incontrôlée dégradait les sols et menaçait les habitats uniques des lémuriens et oiseaux locaux.',
        solution: 'Création d\'un plan d\'exploitation sélectif avec rotation de parcelles assistée par drone et replantation obligatoire de trois arbres natifs pour un coupé.',
        result: 'Validation complète des critères d\'exportation ESG de l\'Union Européenne avec un impact de conservation positif établi.',
        budget: '3,5 M$ Core Sylvicole',
        timeline: 'Continu'
      }
    ],
    MG: [
      {
        id: 'woods-p1',
        title: 'Tetikasa Fambolen-kazo FSC Atsinanana',
        location: 'Madagasikara Atsinanana',
        status: 'Mandeha',
        metricLabel: 'Hazo vokarina voamarina',
        metricValue: '100% FSC Certified',
        imageSeed: 'timber_forest',
        highlights: ['Voamarina ara-dalàna FSC', 'Fambolena hazo 3 solon\'ny 1', 'Fizarana fako karbôna mahitsy'],
        challenge: 'Ny fandringanana ny ala tany atsinanana dia niteraka faharatsian\'ny tany sy fahasimban\'ny fonenan\'ny biby.',
        solution: 'Fametrahana fitantanana ala nentim-paharazana sy fampiasana solosaina hanaraha-maso ny fitomboan\'ny hazo isaky ny tapaka.',
        result: 'Nahazo fankatoavana iraisam-pirenena FSC ary nahavita nanondrana hazo manana sanda ara-tontolo iainana avo lenta.',
        budget: '3.5M $ Tetikasa Ala',
        timeline: 'Mitohy foana'
      }
    ]
  },
  // High-fidelity fallback that dynamically generates content tailored to ANY other company id
  fallback: {
    EN: [
      {
        id: 'fb-p1',
        title: 'Corporate Decarbonization Audit',
        location: 'Antananarivo Administrative Hub, Madagascar',
        status: 'Completed',
        metricLabel: 'Operational Carbon Reduction',
        metricValue: '48% Decreased',
        imageSeed: 'executive_office',
        highlights: ['Sovereign ESG Compliance Vouched', 'Aetheris Multi-Cloud Management Integration', 'Energy Efficiency Upgrades Done'],
        challenge: 'Traditional business operations generated significant carbon load across heating, cooling, and transport operations.',
        solution: 'Deployed unified internet-of-things monitoring sensors connected directly to local renewable wind and solar storage grids.',
        result: 'Decreased annual operating utility cost substantially while meeting global sustainability benchmarks.',
        budget: '$1.8M Assets',
        timeline: 'Completed 2025'
      },
      {
        id: 'fb-p2',
        title: 'Aetheris Smart Infrastructure Grid',
        location: 'Regional Smart Business Parks, Madagascar',
        status: 'Active',
        metricLabel: 'Connected Smart Nodes',
        metricValue: '25,000 IoT Devices',
        imageSeed: 'smart_city',
        highlights: ['Autonomous Energy Balancing', 'Closed-loop Greywater Networks', 'Dual LEED Platinum Compliance'],
        challenge: 'Unpredictable utility grids in metropolitan areas cause expensive brownouts and administrative operational delay.',
        solution: 'Constructed customized hybrid solar arrays coupled with centralized machine learning energy distribution loops.',
        result: 'Guarantees uninterrupted 99.99% operational SLA, transforming physical business structures into carbon-neutral ecosystems.',
        budget: '$5.4M CapEx',
        timeline: 'Continuous Support'
      }
    ],
    FR: [
      {
        id: 'fb-p1',
        title: 'Audit de Décarbonation Opérationnelle',
        location: 'Siège Administratif d\'Antananarivo, Madagascar',
        status: 'Complété',
        metricLabel: 'Réduction de l\'Empreinte Carbone',
        metricValue: '48% Évités',
        imageSeed: 'executive_office',
        highlights: ['Conformité Critères ESG Souveraine', 'Intégration Plateforme Cloud Aetheris', 'Efficience Énergétique Optimisée'],
        challenge: 'Les opérations tertiaires généraient un coût d\'énergie élevé et des fuites matérielles significatives.',
        solution: 'Déploiement d\'une suite logicielle d\'IoT connectant la régulation thermique au mini-réseau solaire régional.',
        result: 'Réduction immédiate de la facture énergétique annuelle de 48% avec un bilan carbone neutre vérifié.',
        budget: '1,8 M$ d\'Actifs',
        timeline: 'Complété en 2025'
      },
      {
        id: 'fb-p2',
        title: 'Réseau d\'Infrastructure Intelligente VIMA',
        location: 'Parcs d\'Activités Technologiques, Madagascar',
        status: 'Actif',
        metricLabel: 'Capteurs Connectés Actifs',
        metricValue: '25 000 Nœuds IoT',
        imageSeed: 'smart_city',
        highlights: ['Régulation Autonome de Charge', 'Recyclage des Eaux Usées en Cycle Fermé', 'Double Certification LEED Platine'],
        challenge: 'Les coupures d\'énergie intempestives ralentissaient le transit de données opérationnelles critiques pour nos clients.',
        solution: 'Construction d\'un micro-réseau robuste à base de micro-turbines et parcs solaires autonomes de rechange.',
        result: 'Idéal pour garantir un taux de disponibilité technique ininterrompu de 99,99% pour toutes nos filiales.',
        budget: '5,4 M$ Investis',
        timeline: 'En Service Continu'
      }
    ],
    MG: [
      {
        id: 'fb-p1',
        title: 'Tetikasa fampihenana karbôna fandraharahana',
        location: 'Antananarivo',
        status: 'Tontosa',
        metricLabel: 'Fako Karbôna Voasoroka',
        metricValue: '48% Nidina',
        imageSeed: 'executive_office',
        highlights: ['Sanda ESG fenitra iraisam-pirenena', "Fifandraisana amin'ny Cloud Vima", 'Jiro masoandro feno'],
        challenge: 'Ny fomba fiasan\'ny orinasa nentim-paharazana dia niteraka fandaniana jiro be loatra ary nampitombo ny fako karbôna.',
        solution: 'Fametrahana fitaovana nomerika amin\'ny rindrina sy fifandraisana hitsiny amin\'ny angovo azo havaozina.',
        result: 'Nampihena ny fandaniana ara-bola isan-taona ary nahatratra ny fenitra mitsinjo ny tontolo iainana.',
        budget: '1.8M $ fampiasam-bola',
        timeline: 'Vita 2025'
      },
      {
        id: 'fb-p2',
        title: 'Fotodrafitrasa Nomerika VIMA',
        location: 'Tobim-pandraharahana, Madagasikara',
        status: 'Mandeha',
        metricLabel: 'Fitaovana IoT mifandray',
        metricValue: '25,000 Nodes',
        imageSeed: 'smart_city',
        highlights: ['Fitsitsiana angovo mandeha hoazy', 'Famerenana rano maloto voadio', 'LEED Platinum fankatoavana'],
        challenge: 'Saro-pady sy lany fanantenana ny indostria ifotony rehefa misy ny fahatapahan\'ny jiro matetika.',
        solution: 'Fananganana milina mpamokatra jiro masoandro kely sy bateria mpanangona herinaratra maharitra.',
        result: 'Miantoka ny fisian\'ny jiro 99.99% tsy hanapaka ny asa fampandrosoana sy famokarana indostrialy.',
        budget: '5.4M $ Vola natokana',
        timeline: 'Mitohy foana'
      }
    ]
  }
};

export function CompanyPortfolioAndProjects({ companyId, language, colors }: CompanyPortfolioAndProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<CompanyProject | null>(null);
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  // Retrieve customized projects based on companyId, fell back to fallback if undefined
  const getSubSectorProjects = (): CompanyProject[] => {
    const data = PROJECTS_DATABASE[companyId] || PROJECTS_DATABASE.fallback;
    return data[language] || data.EN;
  };

  const projects = getSubSectorProjects();

  const translations = {
    EN: {
      galleryBadge: 'Corporate Assets in Scope',
      galleryTitle: 'Capital Asset & Project Gallery',
      gallerySub: 'Explore real operational case studies representing high-scale projects completed or sustained under strict ESG conditions.',
      accordionBadge: 'Operational Technical Specs',
      accordionTitle: 'Active Project Framework Accordion',
      accordionSub: 'Inspect interactive collapsible specifications detailed by challenge, implemented digital solution, and verifiable outcome.',
      viewCaseStudy: 'Review Full Case Study',
      budget: 'Capital Budget Allocation',
      timeline: 'Execution Lifecycle',
      challenge: 'The Challenge Context',
      solution: 'The Implemented Intervention',
      outcome: 'The Audited Outcome',
      close: 'Minimize Panel',
      status: 'Current Delivery State',
      metric: 'Key Delivery Metric',
      highlights: 'Operational Breakthroughs'
    },
    FR: {
      galleryBadge: 'Actifs Opérationnels Déployés',
      galleryTitle: 'Galerie des Grands Projets d\'Actifs',
      gallerySub: 'Découvrez les études de cas réelles de nos filiales, démontrant la réussite de projets d\'infrastructure complexes sous charte ESG.',
      accordionBadge: 'Fiches Techniques d\'Ingénierie',
      accordionTitle: 'Accordéon des Cadres de Projets Actifs',
      accordionSub: 'Analysez les détails de réalisation technique classés par contexte de défi, solutions déployées et résultats concrets.',
      viewCaseStudy: 'Consulter l\'étude de cas',
      budget: 'Allocation Budgétaire Globale',
      timeline: 'Cycle de Réalisation',
      challenge: 'Contexte et Défi Technique',
      solution: 'Solution d\'Ingénierie Intégrée',
      outcome: 'Bilan et Résultat Audité',
      close: 'Fermer le Panel',
      status: 'État Actuel du Projet',
      metric: 'Indicateur Clé Certifié',
      highlights: 'Points Forts de l\'Opération'
    },
    MG: {
      galleryBadge: 'Tahirian’asa azo tsapain-tanana',
      galleryTitle: 'Tahirim-tetikasa sy Vokatra misy',
      gallerySub: 'Sintona mivantana ireo tantara sy zava-bita mivaingana teo amin\'ny tany sy ny fampandrosoana sosialy tamin\'ity rantsana ity.',
      accordionBadge: 'Fandaharana sy Fanazavana',
      accordionTitle: 'Lisitry ny Tetikasa miaraka amin\'ny tsipiriany',
      accordionSub: 'Tsindrio isaky ny tetikasa eto ambany hahazoana ny tsipiriany momba ny olana natrehana sy ny vahaolana mivaingana.',
      viewCaseStudy: 'Hizaha ny Tantaran\'ny asa',
      budget: 'Sanda sy Renivola ampiasaina',
      timeline: 'Fe-potoana naharetan\'ny asa',
      challenge: 'Ny Olana natrehana',
      solution: 'Ny Vahaolana natolotra',
      outcome: 'Ny Vokatra azo tsapain-tanana',
      close: 'Hakatona ny takelaka',
      status: 'Sata misy ny Tetikasa ankehitriny',
      metric: 'Fandrefesana ny vokatra',
      highlights: 'Zava-bita misongadina'
    }
  }[language];

  const handleToggleAccordion = (id: string) => {
    setExpandedProjectId(prev => prev === id ? null : id);
  };

  return (
    <div className="space-y-16 pt-12" id="company-portfolio-projects-container">
      
      {/* SECTION 1: PORTFOLIO GALLERY */}
      <section className="space-y-8" id="company-portfolio-gallery">
        {/* Section Divider with Glowing Accent */}
        <div className="flex items-center space-x-4">
          <span className="h-[1px] flex-grow bg-slate-900" />
          <div className={`flex items-center space-x-2 bg-slate-950/80 border ${colors.borderMuted} rounded-full px-4 py-1.5 backdrop-blur shadow-md`}>
            <FolderGit2 size={12} className={`${colors.iconColor}`} />
            <span className={`font-mono text-[10px] ${colors.textAccent} tracking-wider font-extrabold uppercase`}>
              {translations.galleryBadge}
            </span>
          </div>
          <span className="h-[1px] flex-grow bg-slate-900" />
        </div>

        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center justify-center gap-2">
            <span>{translations.galleryTitle}</span>
            <Sparkles size={16} className={`${colors.iconColor}`} />
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
            {translations.gallerySub}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={`bg-slate-950/45 rounded-3xl border border-slate-900 overflow-hidden flex flex-col justify-between hover:border-slate-800 transition-all duration-300 group shadow-lg`}
              id={`company-gallery-card-${project.id}`}
            >
              {/* Photo top with linear overlay */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={`https://picsum.photos/seed/${project.imageSeed}/600/400`}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-50 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-75 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                {/* Location indicator chip */}
                <div className="absolute top-4 left-4 flex items-center space-x-1.5 bg-slate-950/80 border border-slate-800/80 rounded-full px-3 py-1 backdrop-blur text-[9px] font-mono font-bold text-slate-300">
                  <MapPin size={10} className={`${colors.iconColor}`} />
                  <span>{project.location}</span>
                </div>

                {/* Status indicator badge */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-slate-950/80 border border-slate-800/80 rounded-full px-3 py-1 backdrop-blur text-[9px] font-mono font-bold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{project.status.toUpperCase()}</span>
                </div>
              </div>

              {/* Body details */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-slate-500 tracking-widest uppercase block font-bold">
                    SEC_CODE_{companyId.toUpperCase()}_0{index + 1}
                  </span>
                  <h3 className="text-base font-black text-white group-hover:text-amber-400/90 transition-colors tracking-tight line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light line-clamp-2">
                    {project.challenge}
                  </p>
                </div>

                {/* Key metric high-fidelity teaser */}
                <div className="bg-slate-900/40 border border-slate-900/80 rounded-2xl p-4 flex items-center justify-between mt-2">
                  <div className="space-y-0.5">
                    <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-widest font-extrabold">{project.metricLabel}</span>
                    <span className={`block text-sm font-black ${colors.textAccent} font-mono tracking-tight`}>{project.metricValue}</span>
                  </div>
                  <div className={`w-8 h-8 rounded-lg bg-slate-950/40 border ${colors.borderMuted} flex items-center justify-center ${colors.iconColor}`}>
                    <Activity size={14} />
                  </div>
                </div>
              </div>

              {/* Hover Trigger Action Footer */}
              <div className="p-6 pt-0 border-t border-slate-900/40 mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-slate-900/50 hover:bg-slate-900 hover:border-slate-800 border border-slate-950 transition-all font-mono text-[10px] font-extrabold uppercase tracking-widest py-3 rounded-xl text-slate-300 hover:text-white flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>{translations.viewCaseStudy}</span>
                  <ArrowUpRight size={12} className={`${colors.iconColor} transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform`} />
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 2: PROJECT ACCORDION */}
      <section className="space-y-8 pt-8" id="company-project-accordion">
        {/* Section Divider with Glowing Accent */}
        <div className="flex items-center space-x-4">
          <span className="h-[1px] flex-grow bg-slate-900" />
          <div className={`flex items-center space-x-2 bg-slate-950/80 border ${colors.borderMuted} rounded-full px-4 py-1.5 backdrop-blur shadow-md`}>
            <Layers size={12} className={`${colors.iconColor}`} />
            <span className={`font-mono text-[10px] ${colors.textAccent} tracking-wider font-extrabold uppercase`}>
              {translations.accordionBadge}
            </span>
          </div>
          <span className="h-[1px] flex-grow bg-slate-900" />
        </div>

        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {translations.accordionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
            {translations.accordionSub}
          </p>
        </div>

        {/* Accordion Rows List */}
        <div className="space-y-4 max-w-4xl mx-auto pt-2" id="accordion-rows-wrapper">
          {projects.map((project, idx) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <div
                key={project.id}
                className={`bg-slate-950/45 rounded-2xl border ${isExpanded ? `${colors.borderMuted} bg-slate-950/80 shadow-[0_0_20px_rgba(255,255,255,0.01)]` : 'border-slate-900 hover:border-slate-800'} overflow-hidden transition-all duration-350`}
                id={`accordion-row-${project.id}`}
              >
                {/* Clickable Header Row */}
                <button
                  onClick={() => handleToggleAccordion(project.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-lg ${isExpanded ? `${colors.bgMuted} border ${colors.borderMuted} ${colors.iconColor}` : 'bg-slate-900/60 border border-slate-900 text-slate-500'} flex items-center justify-center shrink-0 transition-colors`}>
                      <span className="font-mono text-xs font-black">0{idx + 1}</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className={`text-sm sm:text-base font-black text-white font-sans ${isExpanded ? colors.textAccent : 'hover:text-slate-200'} transition-colors`}>
                        {project.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[10px] font-mono text-slate-500 font-medium">
                        <span className="flex items-center gap-1">
                          <MapPin size={10} className={`${colors.iconColor}`} />
                          {project.location}
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-1 text-emerald-400/90">
                          <CheckCircle2 size={10} />
                          {project.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={`text-slate-500 hover:text-white transition-colors`}>
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {/* Collapsible Content Area */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 border-t border-slate-900/60 pt-6 space-y-6">
                        
                        {/* Narrative Tri-Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed font-light">
                          {/* Challenge */}
                          <div className="space-y-2 bg-slate-900/20 border border-slate-900/60 p-4.5 rounded-2xl relative overflow-hidden">
                            <h5 className="font-mono text-[9px] font-extrabold uppercase text-slate-500 tracking-wider flex items-center gap-1.5 border-b border-slate-900/80 pb-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80 animate-pulse" />
                              {translations.challenge}
                            </h5>
                            <p className="text-slate-350">{project.challenge}</p>
                          </div>
                          
                          {/* Solution */}
                          <div className="space-y-2 bg-slate-900/20 border border-slate-900/60 p-4.5 rounded-2xl relative overflow-hidden">
                            <h5 className="font-mono text-[9px] font-extrabold uppercase text-slate-500 tracking-wider flex items-center gap-1.5 border-b border-slate-900/80 pb-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80 animate-pulse" />
                              {translations.solution}
                            </h5>
                            <p className="text-slate-350">{project.solution}</p>
                          </div>

                          {/* Outcome */}
                          <div className="space-y-2 bg-slate-900/20 border border-slate-900/60 p-4.5 rounded-2xl relative overflow-hidden">
                            <h5 className="font-mono text-[9px] font-extrabold uppercase text-slate-500 tracking-wider flex items-center gap-1.5 border-b border-slate-900/80 pb-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
                              {translations.outcome}
                            </h5>
                            <p className="text-slate-350">{project.result}</p>
                          </div>
                        </div>

                        {/* Interactive Highlights Row & Tech Properties Table */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                          
                          {/* Accomplishments Checklists (2/3 columns on wide screens) */}
                          <div className="md:col-span-2 space-y-4">
                            <h5 className="font-mono text-[9px] font-extrabold uppercase text-slate-500 tracking-wider flex items-center gap-2">
                              <Sparkles size={11} className={`${colors.iconColor}`} />
                              {translations.highlights}
                            </h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2">
                              {project.highlights.map((highlight, hIdx) => (
                                <div
                                  key={hIdx}
                                  className="flex items-center space-x-2.5 bg-slate-950/60 border border-slate-900/50 p-3 rounded-xl"
                                >
                                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                                  <span className="text-[11px] text-slate-300 font-sans tracking-wide leading-tight">
                                    {highlight}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technical Specifications Deck */}
                          <div className="md:col-span-1 bg-slate-950/60 border border-slate-900 rounded-2xl p-5 space-y-3.5 flex flex-col justify-center">
                            
                            {/* Budget Property */}
                            <div className="flex items-center justify-between border-b border-slate-900 pb-2.5 text-xs">
                              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1 font-bold">
                                <DollarSign size={11} />
                                Budget
                              </span>
                              <span className="font-mono font-black text-slate-200">
                                {project.budget}
                              </span>
                            </div>

                            {/* Lifecycle Property */}
                            <div className="flex items-center justify-between border-b border-slate-900 pb-2.5 text-xs">
                              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1 font-bold">
                                <Calendar size={11} />
                                Term
                              </span>
                              <span className="font-mono font-black text-slate-300">
                                {project.timeline}
                              </span>
                            </div>

                            {/* SLA Security Certificate */}
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1 font-bold">
                                <ShieldCheck size={11} className="text-emerald-400" />
                                Audit
                              </span>
                              <span className="font-mono font-extrabold text-emerald-400 text-[10px] uppercase tracking-widest bg-emerald-950/10 px-2 py-0.5 rounded border border-emerald-500/20">
                                VERIFIED
                              </span>
                            </div>

                          </div>

                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* FLOATING DETAILED CASE STUDY OVERLAY MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            id="company-project-modal-backdrop"
          >
            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="bg-slate-950 border border-slate-800 rounded-[2.5rem] overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl relative"
              id="company-project-modal"
            >
              {/* Image Banner across Top */}
              <div className="relative h-64 overflow-hidden shrink-0 bg-slate-900">
                <img
                  src={`https://picsum.photos/seed/${selectedProject.imageSeed}/1200/500`}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover grayscale opacity-45 mix-blend-luminosity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Floating labels over image */}
                <div className="absolute bottom-6 left-6 space-y-2 max-w-2xl px-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] text-emerald-400 font-bold border border-emerald-500/30 px-3 py-0.5 rounded-full bg-emerald-950/30 uppercase tracking-widest">
                      {selectedProject.location}
                    </span>
                    <span className="font-mono text-[10px] text-slate-300 font-bold border border-slate-800 px-3 py-0.5 rounded-full bg-slate-900/60 uppercase tracking-widest">
                      {selectedProject.status.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-none drop-shadow-md">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Absolute Close Pin and Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-slate-800/80 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:rotate-90"
                  title={translations.close}
                  id="close-company-project-modal"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Scrollable Contents Body */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[calc(90vh-16rem)]">
                
                {/* Side-by-side spec callouts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-2">
                  {/* Property Card: Status / Term */}
                  <div className="bg-slate-900/30 border border-slate-900 rounded-2xl p-4 flex items-center space-x-3.5">
                    <div className={`w-10 h-10 rounded-xl bg-slate-950/30 border ${colors.borderMuted} flex items-center justify-center shrink-0 ${colors.iconColor}`}>
                      <Calendar size={18} />
                    </div>
                    <div>
                      <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-widest font-extrabold">{translations.timeline}</span>
                      <span className="block text-xs font-black text-slate-200 mt-0.5 font-mono">{selectedProject.timeline}</span>
                    </div>
                  </div>

                  {/* Property Card: Budget allocated */}
                  <div className="bg-slate-900/30 border border-slate-900 rounded-2xl p-4 flex items-center space-x-3.5">
                    <div className={`w-10 h-10 rounded-xl bg-slate-950/30 border ${colors.borderMuted} flex items-center justify-center shrink-0 ${colors.iconColor}`}>
                      <DollarSign size={18} />
                    </div>
                    <div>
                      <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-widest font-extrabold">{translations.budget}</span>
                      <span className="block text-xs font-black text-slate-200 mt-0.5 font-mono">{selectedProject.budget}</span>
                    </div>
                  </div>
                </div>

                {/* Substantive narrative modules */}
                <div className="space-y-5 text-sm leading-relaxed font-light text-slate-350">
                  
                  {/* Challenge Narrative */}
                  <div className="space-y-2 border-l-2 border-rose-500/60 pl-4">
                    <h4 className="font-mono text-[9px] font-extrabold uppercase text-slate-500 tracking-wider flex items-center gap-1.5 leading-none">
                      <Zap size={11} className="text-rose-400" />
                      {translations.challenge}
                    </h4>
                    <p className="font-sans font-light text-slate-300">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  {/* Solution Narrative */}
                  <div className="space-y-2 border-l-2 border-amber-500/60 pl-4">
                    <h4 className="font-mono text-[9px] font-extrabold uppercase text-slate-500 tracking-wider flex items-center gap-1.5 leading-none">
                      <Compass size={11} className="text-amber-400" />
                      {translations.solution}
                    </h4>
                    <p className="font-sans font-light text-slate-300">
                      {selectedProject.solution}
                    </p>
                  </div>

                  {/* Outcome Narrative */}
                  <div className="space-y-2 border-l-2 border-emerald-500/60 pl-4">
                    <h4 className="font-mono text-[9px] font-extrabold uppercase text-slate-500 tracking-wider flex items-center gap-1.5 leading-none">
                      <ShieldCheck size={11} className="text-emerald-400" />
                      {translations.outcome}
                    </h4>
                    <p className="font-sans font-light text-slate-300">
                      {selectedProject.result}
                    </p>
                  </div>

                </div>

                {/* Highlight Checkboxes */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-mono text-[9px] font-extrabold uppercase text-slate-500 tracking-wider flex items-center gap-1.5 pb-1">
                    <Sparkles size={11} className={`${colors.iconColor}`} />
                    {translations.highlights}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2.5 bg-slate-900/30 border border-slate-900 p-3.5 rounded-xl text-xs"
                      >
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                        <span className="text-slate-300 font-medium font-sans leading-tight">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Close Footer Action */}
              <div className="p-6 bg-slate-950 border-t border-slate-900/80 shrink-0 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-850 hover:text-white transition-colors text-xs font-mono font-extrabold uppercase tracking-widest rounded-xl text-slate-300 cursor-pointer border border-slate-800"
                >
                  {translations.close}
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
