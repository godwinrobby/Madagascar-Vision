import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SECTORS } from '../data/corporateData';
import { getTranslatedSectors } from '../utils/translator';
import { Sector } from '../types';
import { CompanyLogo } from './CompanyLogo';
import { Helmet } from './Helmet';
import { ImpactMetrics } from './ImpactMetrics';
import { CompanyPortfolioAndProjects } from './CompanyPortfolioAndProjects';
import { NgoNewsletter } from './NgoNewsletter';
import { CompanyTeam } from './CompanyTeam';
import {
  ArrowLeft,
  Activity,
  CheckCircle2,
  PhoneCall,
  ChevronLeft,
  ChevronRight,
  Shield,
  Clock,
  Sparkles,
  Zap,
  Layers,
  FileText,
  Construction,
  BookOpen,
  HeartPulse,
  Sprout,
  Award,
  Users,
  Target,
  Heart,
  Globe,
  Building2,
  Briefcase,
  Anchor,
  Layout,
  ShoppingBag,
  Settings,
  Truck,
  Trees,
  Waves,
  Compass,
  Droplet
} from 'lucide-react';

interface CompanyDetailViewProps {
  companyId: string;
  onBack: () => void;
  onInquire: (companyName: string) => void;
  language: 'EN' | 'FR' | 'MG';
}

const COMPANY_CATEGORIES: Record<string, 'social' | 'realestate' | 'energy' | 'logistics'> = {
  ngo: 'social',
  tsingy: 'realestate',
  water: 'social',
  france: 'logistics',
  wtc: 'realestate',
  management: 'logistics',
  agulhas: 'logistics',
  realestate: 'realestate',
  mall: 'realestate',
  serv: 'logistics',
  dis: 'logistics',
  woods: 'energy',
  hybrid: 'energy',
  hydro: 'energy',
  yoga: 'social',
  construction: 'energy',
  mining: 'energy',
  oilgas: 'energy',
  maromokotro: 'realestate'
};

interface CategoryColors {
  accent: string;
  textAccent: string;
  textAccentHover: string;
  iconColor: string;
  bgMuted: string;
  borderMuted: string;
  borderHover: string;
  glow: string;
}

function getCategoryColors(id: string, catKey: 'social' | 'realestate' | 'energy' | 'logistics'): CategoryColors {
  switch (catKey) {
    case 'realestate':
      return {
        accent: 'indigo',
        textAccent: 'text-indigo-400',
        textAccentHover: 'group-hover:text-indigo-300',
        iconColor: 'text-indigo-400',
        bgMuted: 'bg-indigo-950/10',
        borderMuted: 'border-indigo-500/20',
        borderHover: 'hover:border-indigo-500/35',
        glow: 'bg-indigo-500/5 group-hover:bg-indigo-500/10'
      };
    case 'energy':
      return {
        accent: 'emerald',
        textAccent: 'text-emerald-400',
        textAccentHover: 'group-hover:text-emerald-300',
        iconColor: 'text-emerald-400',
        bgMuted: 'bg-emerald-950/10',
        borderMuted: 'border-emerald-500/20',
        borderHover: 'hover:border-emerald-500/35',
        glow: 'bg-emerald-500/5 group-hover:bg-emerald-500/10'
      };
    case 'logistics':
      return {
        accent: 'orange',
        textAccent: 'text-orange-400',
        textAccentHover: 'group-hover:text-orange-300',
        iconColor: 'text-orange-400',
        bgMuted: 'bg-orange-950/10',
        borderMuted: 'border-orange-500/20',
        borderHover: 'hover:border-orange-500/35',
        glow: 'bg-orange-500/5 group-hover:bg-orange-500/10'
      };
    case 'social':
    default:
      return {
        accent: 'rose',
        textAccent: 'text-rose-450',
        textAccentHover: 'group-hover:text-rose-300',
        iconColor: 'text-rose-400',
        bgMuted: 'bg-rose-950/10',
        borderMuted: 'border-rose-500/20',
        borderHover: 'hover:border-rose-500/35',
        glow: 'bg-rose-500/5 group-hover:bg-rose-500/10'
      };
  }
}

export function CompanyDetailView({ companyId, onBack, onInquire, language }: CompanyDetailViewProps) {
  const translatedSectors = getTranslatedSectors(SECTORS, language);
  const [company, setCompany] = useState<Sector | null>(null);

  useEffect(() => {
    const found = translatedSectors.find((s) => s.id === companyId);
    if (found) {
      setCompany(found);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [companyId, language]);

  if (!company) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <span className="text-sm font-mono text-slate-500 uppercase tracking-widest animate-pulse">Loading File Coordinates...</span>
      </div>
    );
  }

  // Next / Prev actions
  const currentIndex = translatedSectors.findIndex((s) => s.id === company.id);
  const prevCompany = translatedSectors[currentIndex - 1] || translatedSectors[translatedSectors.length - 1];
  const nextCompany = translatedSectors[currentIndex + 1] || translatedSectors[0];

  const handleNext = () => {
    const nextElem = document.getElementById('company-detail-page-top');
    if (nextElem) nextElem.scrollIntoView({ behavior: 'smooth' });
    const found = translatedSectors.find((s) => s.id === nextCompany.id);
    if (found) setCompany(found);
  };

  const handlePrev = () => {
    const prevElem = document.getElementById('company-detail-page-top');
    if (prevElem) prevElem.scrollIntoView({ behavior: 'smooth' });
    const found = translatedSectors.find((s) => s.id === prevCompany.id);
    if (found) setCompany(found);
  };

  // Translations
  const translations = {
    EN: {
      backBtn: 'Back to Corporate Directory',
      metricsLabel: 'Sovereign Validation Metrics',
      servicesLabel: 'Primary Operational Services',
      specsLabel: 'Sub-Sector Specifications',
      systemStatus: 'MODEL STABLE',
      activeStatus: 'SUBSIDIARY ONLINE',
      renderMesh: 'Real-time Render Layer v9.0',
      blueprint: 'Dynamic Structural Blueprint Mesh',
      inquireBtn: 'Inquire Sovereign Partnership',
      secLabel: 'SUB-SECTOR FILE',
      prevBtn: 'Previous Asset',
      nextBtn: 'Next Asset',
      regAuthorityCode: 'REG-AUTH CODE',
      corporateAuthority: 'VICTORIA MADAGASCAR INTELLECT'
    },
    FR: {
      backBtn: 'Retour au Répertoire',
      metricsLabel: 'Indicateurs Cliniques de Performance',
      servicesLabel: 'Prestations Opérationnelles Clés',
      specsLabel: 'Spécifications de la Filiale',
      systemStatus: 'MODÈLE STABLE',
      activeStatus: 'CORRIDOR ACTIF',
      renderMesh: 'Rendu Tridimensionnel v9.0',
      blueprint: 'Plan de Vol Technique et Structurel',
      inquireBtn: 'Initier un Partenariat Souverain',
      secLabel: 'DOSSIER FILIALE',
      prevBtn: 'Actif Précédent',
      nextBtn: 'Actif Suivant',
      regAuthorityCode: 'CODE ENREGISTREMENT',
      corporateAuthority: 'PROPRIÉTÉ VISION MADAGASCAR'
    },
    MG: {
      backBtn: 'Hiverina amin’ny Lisitry ny Orinasa',
      metricsLabel: 'Fahombiazana sy Tondro Ofisialy',
      servicesLabel: 'Primary Operational Services',
      specsLabel: 'Andraikitra Misandrahaka',
      systemStatus: 'MANDAITRA NY DRAFITRA',
      activeStatus: 'RINDRAN-DRAHARAHA MISY',
      renderMesh: 'Sary Teknika Mandaitra v9.0',
      blueprint: 'Drafitra Teknika momba ny lalam-barotra',
      inquireBtn: 'Hanao Fiaraha-miasa',
      secLabel: 'DOSSIER ORINASA',
      prevBtn: 'Orinasa teo aloha',
      nextBtn: 'Orinasa manaraka',
      regAuthorityCode: 'KAODY FIFANDRAISANA',
      corporateAuthority: 'TSY AZO HOZONGONZONINA NY VIMA'
    }
  }[language];

  const categorySubtitles = {
    social: { EN: 'Social Development & Public Well-being division', FR: 'Développement social et bien-être communautaire', MG: 'Sampana fampandrosoana ara-tsosialy' },
    realestate: { EN: 'A-Grade Real Estate Development & Ecological Living', FR: 'Aménagement Immobilier de Prestige & Resorts', MG: 'Saha momba ny trano sy tany lovainjafy' },
    energy: { EN: 'Clean Hydro-Kinetic Power & Sovereign Infrastructure', FR: 'Infrastructures & Énergies Renouvelables Globales', MG: 'Sampan-draharaha misahana ny angovo sy fotodrafitrasa' },
    logistics: { EN: 'Transnational Logistic Networks & Strategic Asset Trade', FR: 'Logistique, Commerce de Gros & Facilitation Commerciale', MG: 'Sampana fitaterana sy fanondranana entana' }
  };



  const getWireframeSpecs = (id: string) => {
    switch (id) {
      case 'ngo':
      case 'yoga':
        return { label: 'Harmonic Well-being Resonator Node', color: 'text-rose-400 border-rose-500/50' };
      case 'water':
      case 'hydro':
        return { label: 'Hydro-Kinetic Velocity Vector Array', color: 'text-sky-400 border-sky-500/50' };
      case 'tsingy':
      case 'maromokotro':
        return { label: 'Coastal Ecological Mesh Elevation', color: 'text-emerald-400 border-emerald-500/50' };
      case 'france':
      case 'management':
        return { label: 'Sovereign Asset Capital Corridor Grid', color: 'text-amber-400 border-amber-500/50' };
      case 'wtc':
      case 'realestate':
      case 'mall':
        return { label: 'LEED Carbon-Zero Structural Frame Model', color: 'text-indigo-400 border-indigo-500/50' };
      case 'agulhas':
      case 'serv':
      case 'dis':
        return { label: 'Autonomous Freight Routing Logistics Node', color: 'text-orange-400 border-orange-500/50' };
      case 'woods':
        return { label: 'Photosynthetic Biomass Yield Mass Model', color: 'text-green-400 border-green-500/50' };
      case 'hybrid':
        return { label: 'Solenoid Quantum Microgrid Core Meter', color: 'text-teal-400 border-teal-500/50' };
      case 'construction':
        return { label: 'High-Performance Cement Shear Pillar Grid', color: 'text-cyan-400 border-cyan-500/50' };
      case 'mining':
        return { label: 'Spectroscopic Soil Element Excavation Sensor', color: 'text-fuchsia-400 border-fuchsia-500/50' };
      case 'oilgas':
        return { label: 'Vapor-Insulated Liquid Hydrocarbon Dome', color: 'text-yellow-400 border-yellow-500/50' };
      default:
        return { label: 'Interactive Technical Blueprint Mesh Matrix', color: 'text-emerald-400 border-emerald-500/50' };
    }
  };

  const catKey = COMPANY_CATEGORIES[company.id] || 'social';
  const wireframe = getWireframeSpecs(company.id);

  const getExtendedData = (id: string, lang: 'EN' | 'FR' | 'MG'): any => {
    const data: Record<string, Record<'EN' | 'FR' | 'MG', any>> = {
      ngo: {
        EN: {
          pillarsTitle: "Strategic Pillars of Philanthropy",
          pillarsSub: "Our programs are organized into three dedicated focus areas designed for generational transition, local autonomy, and sustainable human welfare:",
          initiativesTitle: "Active Key Initiatives & Regional Outreach",
          initiativesSub: "High-impact field campaigns deploying resources, expertise, and long-term operating support across rural Madagascar:",
          pillars: [
            { title: "Education & Scholar Development", desc: "Reinforcing primary public schools, providing supplies, and creating merit-based secondary scholarships.", icon: BookOpen, badge: "Access & Literacy" },
            { title: "Community Health & Wellbeing", desc: "Launching remote health campaigns, distributing maternal wellness kits, and deploying mobile care vans.", icon: HeartPulse, badge: "Clinical Care" },
            { title: "Sustainable Livelihoods & Agro-Ecology", desc: "Providing rural training on sustainable organic agriculture, drip irrigation, and micro-start support.", icon: Sprout, badge: "Socio-Economic autonomy" }
          ],
          initiatives: [
            { title: "Tetikasa \"Vision Education\"", desc: "Renovating and solar-power equipping 50 primary public schoolhouses in rural SAVA and Analamanga regions.", metric: "50 Schools Target" },
            { title: "\"Salama ViMa\" Regional Mobile Care", desc: "Motorized clinical health vehicles moving deep into off-grid regions to provide diagnostic checks and treatment.", metric: "12,000+ km / year" },
            { title: "\"Maintso Madagascar\" Green Livelihoods", desc: "Reforestation project planting over 300,000 endemic trees on degraded watersheds with school environmental workshops.", metric: "300k+ endemic plants" }
          ],
          teamTitle: "Dedicated Impact Specialists",
          teamSub: "The core administrative oversight team steering the field networks and sovereign donor allocations:",
          team: [
            { name: "Helena Smith", role: "Sovereign Philanthropy Council" },
            { name: "Andry Razafindrakoto", role: "Director of Field Operations" },
            { name: "Fara Ramilison", role: "Head of Community and Public Health Programs" }
          ]
        },
        FR: {
          pillarsTitle: "Piliers Stratégiques de l'ONG",
          pillarsSub: "Nos programmes sont organisés autour de trois domaines clés destinés à favoriser l'autonomie et l'amélioration durable :",
          initiativesTitle: "Initiatives Phares Actives & Impact Régional",
          initiativesSub: "Des campagnes de terrain à fort impact déployant ressources et accompagnement opérationnel durable :",
          pillars: [
            { title: "Éducation & Mentorat Scolaire", desc: "Soutien aux infrastructures scolaires publiques, distribution de matériel éducatif et bourses d'études.", icon: BookOpen, badge: "Alphabétisation" },
            { title: "Santé Publique & Prévention mobile", desc: "Déploiement de dispensaires mobiles de proximité, accompagnement maternel et pédiatrique provincial.", icon: HeartPulse, badge: "Soins Primaires" },
            { title: "Subsistance Durable & Agro-écologie", desc: "Formations agricoles durables, irrigation solaire et micro-soutien économique aux coopératives de tantsaha.", icon: Sprout, badge: "Indépendance" }
          ],
          initiatives: [
            { title: "Projet \"Vision Éducation\"", desc: "Rénovation architecturale complète et équipement solaire de 50 écoles primaires publiques dans les régions SAVA.", metric: "Objectif 50 Écoles" },
            { title: "Postes Mobiles de Santé \"Salama ViMa\"", desc: "Une flotte de véhicules médicaux mobiles se rendant dans des zones privées d'infrastructures pour offrir soin gratuit.", metric: "12 000+ km/an" },
            { title: "Action Environnementale \"Maintso Madagascar\"", desc: "Restauration des bassins versants à travers la plantation de plus de 300 000 arbres endémiques.", metric: "300k+ Arbres Plantés" }
          ],
          teamTitle: "Membres Dédiés aux Programmes",
          teamSub: "L'équipe de direction de l'ONG et les cadres opérationnels de terrain :",
          team: [
            { name: "Helena Smith", role: "Conseillère en Philanthropie Souveraine" },
            { name: "Andry Razafindrakoto", role: "Directeur des Opérations de Terrain" },
            { name: "Fara Ramilison", role: "Spécialiste Programmes de Santé & Éducatifs" }
          ]
        },
        MG: {
          pillarsTitle: "Ny Andrin'ny Asa Sosialy",
          pillarsSub: "Ny fandaharan'asa dia miompana amin'ny sehatra telo lehibe hanampiana ny vahoaka hahatratra ny fahaleovan-tena tanteraka:",
          initiativesTitle: "Tetikasa mbola Mandeha sy Fiaraha-miasa",
          initiativesSub: "Hetsika fidinana ifotony mivantana mizara fanampiana sy fampiofanana ho an'ireo mpiray tanindrazana any ambanivohitra:",
          pillars: [
            { title: "Fanabeazana & Fampianarana ny Tanora", desc: "Fanavaozana sekoly, fizarana fitaovam-pianarana ary fanolorana vatsim-pianarana ho an'ny mendrika.", icon: BookOpen, badge: "Fahaiza-mamaky teny" },
            { title: "Fahasalamana ho an'ny Daholobe", desc: "Fandefasana tobim-pitsaboana mandehandeha mba hitsirika sy hitsabo maimaimpoana any amin'ny lavitra.", icon: HeartPulse, badge: "Fahasalamana fototra" },
            { title: "Fivelomana Maharitra sy Fambolena Ekolojika", desc: "Fiofanana momba ny fambolena tsy simika, fitarihan-drano amin'ny vovo, ary fampindramam-bola madinika.", icon: Sprout, badge: "Fahaleovantena" }
          ],
          initiatives: [
            { title: "Tetikasa \"Vision Education\"", desc: "Fanavaozana sy fametrahana jiro mandeha amin'ny herin'ny masoandro amin'ny sekoly ambaratonga voalohany (EPP) miisa 50.", metric: "Hetsika ho an'ny sekoly 50" },
            { title: "Tobim-pahasoavana mandehandeha \"Salama ViMa\"", desc: "Fiarabe miantrana amin'ny fitiliana sy fizaham-pahasalamana, ary fahazoana fanafody maimaimpoana any ambanivohitra.", metric: "12 000+ km isan-taona" },
            { title: "\"Maintso Madagascar\" Fiahiana ny tontolo iainana", desc: "Fambolena zanakazo teratany miisa 300 000 mahery mba hanoherana ny fahasimban'ny tany.", metric: "Manoatra ny 300k zanakazo" }
          ],
          teamTitle: "Mpiandraikitra ny Fanatrarana Tanjona",
          teamSub: "Ny ekipa misahana ny fitantanana sy ny fandrindrana ifotony ireo asa sosialy rehetra sy ny fanampiana:",
          team: [
            { name: "Helena Smith", role: "Mpanolotsaina ambony momba ny asa soa" },
            { name: "Andry Razafindrakoto", role: "Tale misahana ny asa ifotony" },
            { name: "Fara Ramilison", role: "Spécialiste fandaharan-asa sy fahasalamana" }
          ]
        }
      },
      tsingy: {
        EN: {
          pillarsTitle: "Coastal Eco-Hospitality Pillars",
          pillarsSub: "ViMa Tsingy Bay balances high-end, low-intensity architecture with active environment custody and wildlife protection:",
          initiativesTitle: "Key Sanctuary Infrastructure Programs",
          initiativesSub: "High-level conservation actions guaranteeing net-zero carbon operations and coastal preservation:",
          pillars: [
            { title: "Zero-Carbon Eco-Resorts", desc: "Employing structural timber framing, local stone and integrated local solar microgrids to preserve visual and soil assets.", icon: Compass, badge: "Net-Zero Build" },
            { title: "Marine Coastal Custody", desc: "Deploying permanent marine rangers, protecting pristine coastal coral arrays, and enforcing sustainable fishing boundaries.", icon: Waves, badge: "Marine Preserve" },
            { title: "Circular Water & Soil Management", desc: "Applying advanced soil filtration systems, non-invasive greywater reuse, and zero chemical composting cycles.", icon: Sprout, badge: "Circular Ecosystem" }
          ],
          initiatives: [
            { title: "\"Masoala West\" Coral Sanctuary", desc: "Restoring and actively grafting endangered coastal coral colonies inside specific eco-resort maritime boundary grids.", metric: "15,000 colonies grafted" },
            { title: "Coastal Low-Impact Pathways", desc: "Constructing biological timber boardwalks to redirect foot traffic and protect sensitive nesting birds and coastal soils.", metric: "6.5 km of trails" },
            { title: "Sovereign Green Power Canopy", desc: "Powering the entire sanctuary and guest lodges with a highly sophisticated, hidden solar canopy grid.", metric: "100% solar uptime" }
          ],
          teamTitle: "Resort Custodians & Operators",
          teamSub: "The elite professional design and ecological management crew keeping Tsingy Bay pristine:",
          team: [
            { name: "Eric Radama", role: "General Operations Director" },
            { name: "Mireille Dupont", role: "Eco-Resort Curation Lead" },
            { name: "Jean-Pierre Rabari", role: "Biodiversity & Species Supervisor" }
          ]
        },
        FR: {
          pillarsTitle: "Piliers d'Éco-Hospitalité Côtière",
          pillarsSub: "ViMa Tsingy Bay allie architecture haut de gamme à faible impact et préservation environnementale côtière :",
          initiativesTitle: "Programmes de Préservation du Sanctuaire",
          initiativesSub: "Des projets écologiques concrets validant notre engagement Net-Zero Carbone :",
          pillars: [
            { title: "Architecture Bas Carbone", desc: "Utilisation exclusive de bois certifié, de pierre locale et d'énergie solaire intégrée pour protéger le biome.", icon: Compass, badge: "Construction Verte" },
            { title: "Protection Marine Côtière", desc: "Surveillance active des récifs coralliens et instauration de zones de pêche durable pour les communautés locales.", icon: Waves, badge: "Conservatoire Marin" },
            { title: "Gestion Circulaire des Ressources", desc: "Traitement biologique des eaux grises, recyclage complet des déchets et compostage organique en circuit fermé.", icon: Sprout, badge: "Eau et Sols Sains" }
          ],
          initiatives: [
            { title: "Pépinière Corallienne de Masoala", desc: "Restauration active et repiquage de grappes de corail sur les récifs environnants par des biologistes marins.", metric: "15 000 coraux greffés" },
            { title: "Sentiers Pilotis Écologiques", desc: "Aménagement de passerelles en bois surélevées pour éliminer l'érosion du sol et protéger les oiseaux nicheurs.", metric: "6,5 km de sentiers" },
            { title: "Canopée Solaire Intégrée", desc: "Autonomie électrique totale des lodges grâce à un réseau de tuiles solaires photovoltaïques hautement intégrées.", metric: "Autonomie 100% Solaire" }
          ],
          teamTitle: "Directeurs & Conservateurs",
          teamSub: "L'équipe d'experts immobiliers et de biologistes veillant sur le domaine :",
          team: [
            { name: "Eric Radama", role: "Directeur Général Tsingy Bay" },
            { name: "Mireille Dupont", role: "Responsable Architecture & Curation" },
            { name: "Jean-Pierre Rabari", role: "Superviseur Biodiversité & Faune" }
          ]
        },
        MG: {
          pillarsTitle: "Ny Andrin'ny Fizahan-tany Ekolojika",
          pillarsSub: "Ny ViMa Tsingy Bay dia mampivadika ny trano fonenana ra-tsara sy ny fiarovana ny voary sy ny tontolo iainana amoron-dranomasina:",
          initiativesTitle: "Tetikasa Fiarovana ny Tsingy",
          initiativesSub: "Hetsika mivaingana miantoka ny tsy fahasimban'ny karbônina ary mampiroborobo ny fahadiovan'ny tontolo iainana:",
          pillars: [
            { title: "Trano fonenana mitsitsy tany", desc: "Fampiasana hazo voamarina, vato avy amin'ny faritra, ary jiro masoandro mba tsy hanimba ny tany.", icon: Compass, badge: "Trano Net-Zero" },
            { title: "Fiarovana ny Ranomasina", desc: "Hetsika fisafoana tsy tapaka miaro ny haran-dranomasina any Tsingy sy ny fampiasana jono maharitra.", icon: Waves, badge: "Fiarovana ny voary" },
            { title: "Fitantanana Rano sy Fako", desc: "Fanodinana ny rano efa niasana, fitsitsiana ny rano velona, ary fananganana zezika voajanahary.", icon: Sprout, badge: "Tontolo Ekolojika" }
          ],
          initiatives: [
            { title: "Fambolena Haran-dranomasina", desc: "Famerenana sy fambolena ireo haran-dranomasina simba mba hiveloman'ny hazandrano maro.", metric: "Haran-dranomasina 15 000" },
            { title: "Lalan-kely hazo voaaro", desc: "Fananganana tetezana hazo hahafahan'ny mpitsidika mandeha nefa tsy manimba ny akanin'ny vorona.", metric: "6.5 km ny lalana" },
            { title: "Jiro Masoandro Mahaleotena", desc: "Fampiasana jiro masoandro miafina tsara mamatsy herinaratra ny trano rehetra ao amin'ny hotely.", metric: "100% masoandro" }
          ],
          teamTitle: "Mpitantana sy Mpiaro ny Tsingy",
          teamSub: "Ny ekipa matihanina miantoka ny fahalehibiazan'ny hotely sy ny fiarovana ny tontolo iainana:",
          team: [
            { name: "Eric Radama", role: "Tale jeneraly misahana ny asa rehetra" },
            { name: "Mireille Dupont", role: "Mpandrindra ny haingon-trano ekolojika" },
            { name: "Jean-Pierre Rabari", role: "Mpanara-maso ny zava-boary teratany" }
          ]
        }
      },
      water: {
        EN: {
          pillarsTitle: "Hydraulic Purification Foundations",
          pillarsSub: "Deploying high-output reverse osmosis alongside modular localized distribution systems:",
          initiativesTitle: "Sovereign Supply & Pipeline Projects",
          initiativesSub: "Expanding access to water systems across municipal outskirts and agricultural networks:",
          pillars: [
            { title: "Reverse Osmosis Systems", desc: "Using multi-stage carbon and membrane filtration to remove heavy elements and secure high purity index.", icon: Droplet, badge: "99.9% Pure Index" },
            { title: "Sovereign Community Wells", desc: "Constructing deep water borewells connected to automated, solar-powered local tap stations.", icon: Target, badge: "Solar Borewells" },
            { title: "Closed-Loop Grid Pipes", desc: "Designing non-corrosive high-pressure distribution pipelines that eliminate municipal delivery losses.", icon: Waves, badge: "Engineered Grid" }
          ],
          initiatives: [
            { title: "SAVA Clean Water Pipeline", desc: "Bering clean municipal water pipelines to villages, creating sustainable distribution networks.", metric: "4.2M Liters Daily Capacity" },
            { title: "Rural Well Sanitation", desc: "Rebuilding and sanitizing deep community water wells across major coastal rural sectors.", metric: "48 New Stations Completed" },
            { title: "Advanced Quality Audits", desc: "Providing dynamic testing, chemical analysis, and real-time electronic monitoring of water tables.", metric: "Weekly Lab Diagnostics" }
          ],
          teamTitle: "Hydraulic Engineering Officers",
          teamSub: "The core administrative specialists managing the grid expansion and water audits:",
          team: [
            { name: "Alain Solofoniaina", role: "Hydraulic Engineering Director" },
            { name: "Sarah Johnson", role: "Head of Purification Analytics" },
            { name: "Marc Rakotobe", role: "Field Delivery Supervisor" }
          ]
        },
        FR: {
          pillarsTitle: "Piliers de Purification Hydraulique",
          pillarsSub: "Mise en œuvre d'osmose inverse et de réseaux de distribution d'eau potable déconcentrés :",
          initiativesTitle: "Projets de Canalisations et Réseaux",
          initiativesSub: "Faciliter l'accès à l'eau potable dans les villages reculés et les zones périurbaines :",
          pillars: [
            { title: "Filtration par Osmose Inverse", desc: "Utilisation de filtres à membranes avancés éliminant métaux lourds et bactéries de l'eau brute.", icon: Droplet, badge: "Pureté 99,9%" },
            { title: "Forages Autonomes Solaires", desc: "Forages profonds dans la nappe phréatique raccordés à des pompes solaires de proximité.", icon: Target, badge: "Forages Solaires" },
            { title: "Canalisations Thermo-scellées", desc: "Infrastructures de tuyauterie étanches annulant toute perte ou fuite de charge municipale.", icon: Waves, badge: "Réseau Sans Pertes" }
          ],
          initiatives: [
            { title: "Canalisation d'Eau SAVA", desc: "Extension du réseau de distribution principal vers les communes rurales de la province SAVA.", metric: "4,2M Litres Redistribués" },
            { title: "Forages Écologiques de Proximité", desc: "Construction de stations de pompage communautaires alimentées entièrement par énergie solaire.", metric: "48 Stations construites" },
            { title: "Analyses de l'Eau au Laser", desc: "Contrôles hebdomadaires de turbidité et de minéralité pour certifier l'eau raccordée au réseau.", metric: "Contrôle Qualité Hebdo" }
          ],
          teamTitle: "Membres de la Division Hydraulique",
          teamSub: "Les ingénieurs civils et spécialistes de l'assainissement de l'eau :",
          team: [
            { name: "Alain Solofoniaina", role: "Directeur de l'Ingénierie Hydraulique" },
            { name: "Sarah Johnson", role: "Analyste Qualité de l'Eau" },
            { name: "Marc Rakotobe" , role: "Superviseur Réseau de Distribution" }
          ]
        },
        MG: {
          pillarsTitle: "Andrin'ny Famatsian-drano Madio",
          pillarsSub: "Teknolojia fandefasana rano amin'ny vovo sy fitarihan-drano amin'ny alalan'ny milina mitsitsy:",
          initiativesTitle: "Tetikasa Famatsian-drano any Ambanivohitra",
          initiativesSub: "Fananganana tobim-pamatsian-drano ho an'ireo tokantrano any amin'ny faritra saro-dalana:",
          pillars: [
            { title: "Filtrasyon Osmose Inverse", desc: "Fitaovana mandrefe sy manadio ny rano ho madio tanteraka sy azo sotroina avy hatrany.", icon: Droplet, badge: "99.9% Fahadiovana" },
            { title: "Lava-drano mandeha amin'ny Masoandro", desc: "Lava-drano lalina mifandray amin'ny paompin-drano mandeha amin'ny herin'ny masoandro.", icon: Target, badge: "Lava-drano paompy" },
            { title: "Tambajotra fitarihan-drano", desc: "Tetezan-drano sy fantsona matanjaka tsy mora vaky miantoka ny fahatongavan'ny rano any an-trano.", icon: Waves, badge: "Paompy tsara kalitao" }
          ],
          initiatives: [
            { title: "Fantson-drano lehibe any SAVA", desc: "Fametrahana fantson-drano vaovao mamatsy ireo tanàna madinika any amin'ny faritra lavidavitra.", metric: "Rano 4.2M Litatra isan'andro" },
            { title: "Tobim-pamatsiana Community", desc: "Fananganana tobim-pizaran-drano vaovao tantanan'ny vahoaka ao an-toerana.", metric: "Tobim-by vaovao miisa 48" },
            { title: "Fitsirihana ny kalitaon'ny Rano", desc: "Fanaovana fitiliana rano tsy tapaka isan-kerinandro mba hisorohana ny aretina isan-karazany.", metric: "Fitiliana isan-kerinandro" }
          ],
          teamTitle: "Injenieran'ny Rano sy ny fahasalamana",
          teamSub: "Ireo manam-pahaizana miandraikitra ny fikarohana sy ny fitaovana famarian-drano rehetra:",
          team: [
            { name: "Alain Solofoniaina", role: "Tale jeneralin'ny fitaovana hydraulika" },
            { name: "Sarah Johnson", role: "Mpitantana ny fitiliana ara-tsiantifika" },
            { name: "Marc Rakotobe", role: "Mpanara-maso ny fantson-drano ifotony" }
          ]
        }
      },
      france: {
        EN: {
          pillarsTitle: "Cross-Border Economic Alignment",
          pillarsSub: "Managing trade compliance, financial assets, and sovereign European private partnerships:",
          initiativesTitle: "Active Trade Corridors & Funding",
          initiativesSub: "Coordinating strategic trade, raw resource processing, and overseas investments:",
          pillars: [
            { title: "Euro-Sovereign Funding", desc: "Structuring development funds and sovereign capital matching for Madagascar's infrastructure development.", icon: Globe, badge: "Foreign Inflow" },
            { title: "Trade Representation Desk", desc: "Offering institutional regulatory protection, customs liaison and trade mediation across European markets.", icon: Briefcase, badge: "Sovereign Trade" },
            { title: "Cross-Continental Advisory", desc: "Assisting high-scale multinational portfolios to align with EU environment-social compliance frameworks.", icon: Shield, badge: "EU Compliance" }
          ],
          initiatives: [
            { title: "Sovereign Export Alignment Corridor", desc: "Structuring compliance pipelines for agro-exports (vanilla/tea) to European ports with tracking indices.", metric: "€450M Managed Capital" },
            { title: "Invest Madagascar Paris Summit", desc: "Coordinating bilateral business summits in France, bringing high-tech agricultural investors to the region.", metric: "120+ Key Investors" },
            { title: "Offshore Logistics Gateway", desc: "Supervising marine transit safety, container leasing pacts, and clearing compliance audits with international port regulators.", metric: "99.9% Audit Rating" }
          ],
          teamTitle: "European Corporate Liaison",
          teamSub: "The legal and asset advisory board managing cross-continental partnerships:",
          team: [
            { name: "François Lecomte", role: "Head of International Relations" },
            { name: "Chantal Berthier", role: "European Portfolio Curation Lead" },
            { name: "Roger de Ville", role: "Sovereign Bilateral Counsel" }
          ]
        },
        FR: {
          pillarsTitle: "Piliers du Développement Transnational",
          pillarsSub: "Coordination des capitaux bilatéraux, de la conformité import/export et des relations stratégiques :",
          initiativesTitle: "Couloirs Commerciaux & Investissements Directs",
          initiativesSub: "Canaliser l'excellence des échanges et les partenariats publics-privés internationaux :",
          pillars: [
            { title: "Financement Souverain Euro", desc: "Structuration de fonds d'investissement à impact pour soutenir le renforcement énergétique national.", icon: Globe, badge: "IDE Majeurs" },
            { title: "Représentation Commerciale", desc: "Secrétariat de liaison facilitant l'accès des producteurs malgaches aux marchés d'Europe continentale.", icon: Briefcase, badge: "Pacte Bilatéral" },
            { title: "Conformité Règlementaire", desc: "Audits de conformité évaluant les procédés d'exploitation selon les stricts standards environnementaux de l'UE.", icon: Shield, badge: "Label Vert UE" }
          ],
          initiatives: [
            { title: "Corridor Commercial d'Exportation", desc: "Normalisation et labellisation des chaînes de cannelle et vanille destinées aux acheteurs européens.", metric: "€450M+ Flux Financiers" },
            { title: "Forum de l'Investissement - Paris", desc: "Organisation d'assises réunissant multinationales européennes et d'Afrique côtière à Paris.", metric: "120 Partenaires Clés" },
            { title: "Flux de Transit Maritime", desc: "Sécurisation douanière des lignes d'exportation maritime régulée en conteneurs plombés.", metric: "Zéro Litige Douanier" }
          ],
          teamTitle: "Conseil d'Administration Territorial",
          teamSub: "L'équipe de diplomatie économique et d'affaires juridiques :",
          team: [
            { name: "François Lecomte", role: "Directeur des Relations Internationales" },
            { name: "Chantal Berthier", role: "Responsable Portefeuille Europe" },
            { name: "Roger de Ville", role: "Conseiller Affaires Internationales" }
          ]
        },
        MG: {
          pillarsTitle: "Fandrindrana ny Fampiasam-bola Iraisam-pirenena",
          pillarsSub: "Fitantanana ny fifandandraisan'ny tsena malagasy sy ny any Eoropa ary ny ara-dalàna rehetra:",
          initiativesTitle: "Lalam-barotra lehibe sy fampidirana mpiara-miombon'antoka",
          initiativesSub: "Drafitra fampiasam-bola iraisam-pirenena ho an'ny fampandrosoana ara-toe-karena:",
          pillars: [
            { title: "Vatsy Iraisam-pirenena", desc: "Fikarohana kitapom-bola sy mpiara-miombon'antoka lehibe avy any Eoropa ho an'ny tetikasan'ny ViMa.", icon: Globe, badge: "Fidiran'ny Vola vahiny" },
            { title: "Birao mpandrindra ny Varotra", desc: "Fiarovana ny vokatra malagasy any amin'ny tsena eoropeana sy ny fanaraha-maso ny antontan-taratasy.", icon: Briefcase, badge: "Fifandraisana ara-barotra" },
            { title: "Torohevitra momba ny fampiasam-bola", desc: "Mpanolotsaina manampy ny orinasa malagasy hahatratra ny fenitra takian'ny sendika eoropeana.", icon: Shield, badge: "Fandaharan'asa eoropeana" }
          ],
          initiatives: [
            { title: "Lalana Fandefasana vokatra SAVA", desc: "Fandrindrana ny fanondranana ny lavanila sy ny dite malagasy nentim-paharazana ho tonga haingana any Eoropa.", metric: "vola 450M€ arahina maso" },
            { title: "Varotra Iaraha-mitantana any Paris", desc: "Fivoriana lehibe momba ny asa fampiasam-bola atao any Paris eo amin'ny mpandraharaha frantsay sy malagasy.", metric: "Mpitantana ambony 120+" },
            { title: "Fanaraha-maso ny fitaterana seranana", desc: "Antontan-taratasy fitsirihana ny sambo sy kaontenera miantoka ny fandriampahalemana an-dranomasina.", metric: "99.9% fahombiazana" }
          ],
          teamTitle: "Mpanolotsaina iraisam-pirenena ViMa",
          teamSub: "Ireo mpitantana misahana ny raharaha ara-dalàna momba ny fifandraisana iraisam-pirenena rehetra:",
          team: [
            { name: "François Lecomte", role: "Tale jeneralin'ny fifandraisana eoropeana" },
            { name: "Chantal Berthier", role: "Mpitahiry ny tamberin'ny vola" },
            { name: "Roger de Ville", role: "Mpanolotsaina momba ny fifanarahana" }
          ]
        }
      }
    };

    // If we have custom hardcoded profile return it
    if (data[id]) {
      return data[id][lang] || data[id].EN;
    }

    // Dynamic Generic Fallback Generator to ensure ALL companies are perfectly mapped and have high-fidelity content!
    // We map sectors dynamic profile based on category or name!
    const fallbackCat = COMPANY_CATEGORIES[id] || 'social';
    
    const generatorMap: Record<string, any> = {
      realestate: {
        EN: {
          pillarsTitle: "Sustainable Masterplanning Principles",
          pillarsSub: "Ensuring energy-efficient design, smart building management, and localized microgrids:",
          initiativesTitle: "Active Eco-Urban & Smart Developments",
          initiativesSub: "High-level building and zoning initiatives creating carbon-zero office complexes:",
          pillars: [
            { title: "LEED Carbon-Zero Spaces", desc: "Constructing and maintaining low-emissions smart commercial zoning assets certified by international green building boards.", icon: Building2, badge: "Built Green" },
            { title: "Integrated Micro-Solar Grids", desc: "Deploying comprehensive solar roofing and battery arrays to supply localized electric security.", icon: Zap, badge: "Renewable Power" },
            { title: "Intelligent Resource Recycling", desc: "Implementing automated greywater reclamation pipelines and local non-toxic material sourcing.", icon: Sprout, badge: "Circular Zoning" }
          ],
          initiatives: [
            { title: "Sovereign Green Towers Phase II", desc: "Rebuilding executive workspaces utilizing automated air cooling and high-efficiency solar panel glass structures.", metric: "2.8M SF Certified" },
            { title: "Local Organic Materials Sourcing", desc: "Contracting local mills and stone artisans to reduce transport emissions in structural concrete frames.", metric: "81% local sourcing" },
            { title: "Smart City Infrastructure Layout", desc: "Developing advanced high-bandwidth optical cables and thermal optimization grids inside main business hubs.", metric: "42 Sites Integrated" }
          ],
          teamTitle: "Real Estate & Masterplanning Crew",
          teamSub: "The engineering directors and architects behind our structural layouts:",
          team: [
            { name: "Christian Ramanantsoa", role: "Chief Property Developer" },
            { name: "Valery Andriana", role: "Smart City Principal Architect" },
            { name: "Noely Rakotomalala", role: "Lead Construction Engineer" }
          ]
        },
        FR: {
          pillarsTitle: "Principes d'Aménagement Durable",
          pillarsSub: "Conceptions architecturales performantes intégrant énergies solaires et réduction carbone :",
          initiativesTitle: "Projets Urbains & Technopoles Vertes",
          initiativesSub: "Programmes immobiliers intégrant les stricts labels d'efficacité énergétique :",
          pillars: [
            { title: "Structures Neutres en Carbone", desc: "Développement d'actifs immobiliers tertiaires certifiés par l'institut international LEED.", icon: Building2, badge: "Éco-Construction" },
            { title: "Toitures Solaires Actives", desc: "Couverture intégrale photovoltaïque assurant la sécurité d'approvisionnement des bureaux.", icon: Zap, badge: "Énergie Verte" },
            { title: "Recyclage des Eaux Commerciales", desc: "Traitement automatisé des condensats de climatisation pour l'arrosage et les circuits sanitaires secondaires.", icon: Sprout, badge: "Gestion Hydrique" }
          ],
          initiatives: [
            { title: "Tours Écologiques Souveraines", desc: "Modernisation des plateformes de bureaux avec façades thermo-réfléchissantes et ventilation optimisée.", metric: "2,8M Pieds Carrés LEED" },
            { title: "Valorisation du Granite Régional", desc: "Emploi de matériaux de carrières contrôlées limitant le transport des agrégats lourds.", metric: "81% Achats Locaux" },
            { title: "Réseau Intelligent Smart City", desc: "Intégration de capteurs d'occupation de l'espace réduisant les futiles dépenses de chauffage nocturne.", metric: "42 Bâtiments Intégrés" }
          ],
          teamTitle: "Ingénieurs & Concepteurs Immobiliers",
          teamSub: "Les architectes et programmateurs fonciers dessinant le futur urbain de Madagascar :",
          team: [
            { name: "Christian Ramanantsoa", role: "Directeur de Promotion Immobilière" },
            { name: "Valery Andriana", role: "Architecte en Chef Aménagement Urbain" },
            { name: "Noely Rakotomalala", role: "Ingénieur d'Infrastructures Résilientes" }
          ]
        },
        MG: {
          pillarsTitle: "Fitsipika Momba ny Fanorenana Trano",
          pillarsSub: "Fametrahana endrika manara-penitra, fitsitsiana angovo, ary fiarovana ny zava-boahary manodidina:",
          initiativesTitle: "Tetikasa Fanorenana sy Trano Ekolojika",
          initiativesSub: "Hetsika fampandrosoana ny trano fonenana maoderina tsy mandoto rivotra:",
          pillars: [
            { title: "Trano fonenana LEED", desc: "Fanorenana trano sy birao tsy misy fako ary voamarina ara-dalàna tamin'ny alalan'ny fitsapana maitso.", icon: Building2, badge: "Trano tsara rindra" },
            { title: "Jiro Masoandro amin'ny tafo", desc: "Fametrahana takelaka masoandro lehibe hamatsiana herinaratra ny trano sy birao rehetra.", icon: Zap, badge: "Jiro azo avaozina" },
            { title: "Fanodinana rano fako orinasa", desc: "Teknolojia manadio sy mampiasa indray ny rano efa niasana tsy hanimbana ny tany.", icon: Sprout, badge: "Fitsitsiana rano" }
          ],
          initiatives: [
            { title: "Tilikambo Maitso ViMa", desc: "Fananganana birao ra-tsara manana fidirana jiro matanjaka sy fitsitsiana angovo amin'ny fitaratra.", metric: "Trano lehibe 42 vita" },
            { title: "Fampiasana fitaovana Malagasy", desc: "Fandraisana vato granite sy hazo voaaro avy eto an-toerana hanampiana ny tantsaha sy ny mpiasa.", metric: "81% kojakoja Malagasy" },
            { title: "Tambajotra Smart-City", desc: "Teknolojia mampifandray ny jiro sy ny rano amin'ny lalam-barotra lehibe rehetra ao Antananarivo.", metric: "Faritra 42 voarakitra" }
          ],
          teamTitle: "Mpanorina sy Mpamorona trano ViMa",
          teamSub: "Ireo injeniera sy mpahaikanto mpanelanelana ny fotodrafitrasa rehetra:",
          team: [
            { name: "Christian Ramanantsoa", role: "Tale jeneralin'ny fampiroboroboana" },
            { name: "Valery Andriana", role: "Mpahaikanto momba ny tanàna maoderina" },
            { name: "Noely Rakotomalala", role: "Injeniera lehibe momba ny fanorenana" }
          ]
        }
      },
      logistics: {
        EN: {
          pillarsTitle: "Logistical & Dispatch Principles",
          pillarsSub: "Ensuring deep-water shipping reliability, continuous tracking, and cold-chain security:",
          initiativesTitle: "Active Shipping & Inventory Operations",
          initiativesSub: "Executing heavy freight deliveries and national supply chain integrations daily:",
          pillars: [
            { title: "End-to-End Tracking", desc: "Employing advanced computer networks and GPS tracking to monitor cargo transit without administrative delay.", icon: Award, badge: "99.7% Precision" },
            { title: "Secure Cold-Chain Networks", desc: "Maintaining absolute temperature-controlled storage spaces for sensitive vaccine and agricultural goods.", icon: Truck, badge: "Active Cold Chambers" },
            { title: "Sovereign Port Clearances", desc: "Securing swift bilateral agreements and custom liaisons to lower container discharge times at major port authorities.", icon: Anchor, badge: "Clearance Experts" }
          ],
          initiatives: [
            { title: "Nationwide Cargo Express Line", desc: "Consolidating major supply routes across twelve provinces with dynamic regional terminal hubs.", metric: "3.4M Tons Safely Routed" },
            { title: "Port Terminal Storage Retrofit", desc: "Upgrading deep-water warehouse assets with integrated lithium storage power arrays and clean backup generators.", metric: "14 Depots Fully Integrated" },
            { title: "Last-Mile Distribution Grid", desc: "Fostering local economic growth by delivering to small municipal agricultural markets with electric micro-vans.", metric: "1,200+ points of sale" }
          ],
          teamTitle: "Logistics & Supply Directors",
          teamSub: "The expert terminal managers and marine captains overseeing physical asset dispatch:",
          team: [
            { name: "Captain Robert Drake", role: "Maritime Operations Superintendent" },
            { name: "Jean-Claude Rabe", role: "Director of National Trade Routes" },
            { name: "Nicolas Solofosa", role: "Executive Dispatch Manager" }
          ]
        },
        FR: {
          pillarsTitle: "Principes Logistiques & d'Expédition",
          pillarsSub: "Sécurisation des liaisons nationales, chaîne du froid de bout en bout et dédouanement portuaire fluide :",
          initiativesTitle: "Opérations de Transit et Répartition des Stocks",
          initiativesSub: "Gestion quotidienne des navires marchands et de la flotte de livraison routière :",
          pillars: [
            { title: "Traçabilité Flotte en Temps Réel", desc: "Supervision assistée par GPS garantissant l'intégrité de la marchandise en transit logistique.", icon: Settings, badge: "Suivi Précis 99,7%" },
            { title: "Hubs de Stockage Thermorégulés", desc: "Entrepôts frigorifiques spécialisés pour la conservation sanitaire des produits périssables.", icon: Truck, badge: "Entrepôts ISO-Froid" },
            { title: "Facilitation Douanière Portuaire", desc: "Relations de confiance avec les ports de commerce accélérant la sortie des marchandises sous scellés.", icon: Anchor, badge: "Audit Douanier Vert" }
          ],
          initiatives: [
            { title: "Réseau de Logistique Routière", desc: "Aménagement de liaisons régulières reliant les principaux ports de la côte est à la capitale.", metric: "3,4M Tonnes Transportées" },
            { title: "Entrepôts Autonomes Solaires", desc: "Rénovation des centres d'expédition avec batteries tampons et jiro photovoltaïque réducteurs de fioul.", metric: "14 Terminaux Équipés" },
            { title: "Livraison Micro-Logistique", desc: "Support aux petits commerces d'outre-mer par la mise en place d'une flotte de camions légers durables.", metric: "1 200 Points Ravitillés" }
          ],
          teamTitle: "Direction Maritime & Logistique",
          teamSub: "L'équipe d'officiers maritimes et de responsables d'approvisionnement :",
          team: [
            { name: "Captain Robert Drake", role: "Commandant des Opérations Navales" },
            { name: "Jean-Claude Rabe", role: "Directeur de la Logistique Terrestre" },
            { name: "Nicolas Solofosa", role: "Chef de Quai & Dispatching National" }
          ]
        },
        MG: {
          pillarsTitle: "Fitaterana sy Fitehirizana Entana",
          pillarsSub: "Fiarovana ny fitaterana lavitra, fitehirizana mangatsiaka, ary ny haban-tseranana matanjaka:",
          initiativesTitle: "Tetikasa Fitaterana any amin'ny Seranana",
          initiativesSub: "Asa fandefasana entana isan'andro miantoka ny fahombiazana manerana ny Nosy:",
          pillars: [
            { title: "Fanaraha-maso entana GPS", desc: "Fampiasana teknolojia GPS manara-maso tsy tapaka ny fiara sy ny sambo mitondra entana.", icon: Settings, badge: "99.7% Fahamarinana" },
            { title: "Fitahirizana mangatsiaka tsara rindra", desc: "Siniben-tsakafo sy fitehirizana fanafody mangatsiaka tsara tsy mampiova ny kalitao.", icon: Truck, badge: "Mpandefa mangatsiaka" },
            { title: "Fifandraisana Seranantsambo", desc: "Hetsika haingana famoahana ireo kaontenera any amin'ny seranan-tsambo tsy misy fiandrasana lava.", icon: Anchor, badge: "Haban-tseranana mahomby" }
          ],
          initiatives: [
            { title: "Zotra fitaterana entana ViMa", desc: "Fandrindrana ny fitaterana amin'ny lalam-pirenena rehetra mampiasa camion azo antoka.", metric: "entana 3.4M Taonina lasa" },
            { title: "Fanavaozana ny tobim-pizarana", desc: "Fametrahana jiro masoandro sy rafitra informatika vaovao amin'ny trano fitehirizana miisa 14.", metric: "Trano fitehirizana 14 vita" },
            { title: "Fizarana entana hatrany amin'ny Farany", desc: "Famatsiana ireo tantsaha sy orinasa madinika amin'ny faritra rehetra any Madagascar.", metric: "Mpividy mihoatra ny 1 200" }
          ],
          teamTitle: "Mpitantana ny Seranana sy ny Fitaterana",
          teamSub: "Manam-pahaizana manara-maso ny zotram-pitaterana an-dranomasina sy an-tanety rehetra:",
          team: [
            { name: "Captain Robert Drake", role: "Tale jeneralin'ny fitaterana an-dranomasina" },
            { name: "Jean-Claude Rabe", role: "Mpanara-maso ny zotra an-tanety" },
            { name: "Nicolas Solofosa", role: "Mpitantana ny tobim-pizarana entana" }
          ]
        }
      },
      energy: {
        EN: {
          pillarsTitle: "Clean Energetic & Natural Asset Design",
          pillarsSub: "Harnessing run-of-the-river flow, solar arrays, and high-efficiency backup storage:",
          initiativesTitle: "Active Hydro-Kinetic & Solar Projects",
          initiativesSub: "Deploying megawatt power grids for commercial use and rural village electrification:",
          pillars: [
            { title: "Hydro & Solar Kinematics", desc: "Engineering run-of-the-river water flow layouts and photovaltaic arrays that protect sensitive aquatic biomes.", icon: Waves, badge: "Clean Megawatts" },
            { title: "FSC Certified Forestry Nursery", desc: "Maintaining rich timber sapling seedbanks and promoting long-term local biome re-planting.", icon: Trees, badge: "FSC Custody" },
            { title: "Automated Micro-Grid Storage", desc: "Installing high-efficiency computer-monitored battery storage units for total electrical supply uptime.", icon: Zap, badge: "Grid Connection Ready" }
          ],
          initiatives: [
            { title: "Sovereign Hydro Weir Installation", desc: "Constructing small weir casts to harvest river energy without dam flooding or biological damage.", metric: "210 MW Hydro Capacity" },
            { title: "SAVA Forest Ecological Canopy", desc: "Planting certified endemic timber saplings to rebuild watersheds and generate natural offsets.", metric: "1.2M saplings planted" },
            { title: "Remote Solar Container Station", desc: "Installing and operating insulated shipping containers fitted with solar grids and smart meters inside rural regions.", metric: "120 Rural Nodes Live" }
          ],
          teamTitle: "Sovereign Energy Advisory Staff",
          teamSub: "The mechanical engineers and ecological foresters driving renewable operations:",
          team: [
            { name: "Marc de Ridder", role: "Senior Hydraulic Architect" },
            { name: "Jacques Rabarijaona", role: "FSC Forestry Superintendent" },
            { name: "Toky Rakotomena", role: "Lead Energy Grid Planner" }
          ]
        },
        FR: {
          pillarsTitle: "Principes d'Infrastructures Énergétiques",
          pillarsSub: "Mise en valeur des ressources renouvelables : centrales au fil de l'eau et parcs solaires connectés :",
          initiativesTitle: "Projets Acteurs d'Énergie Totale & Reboisement",
          initiativesSub: "Déploiement de solutions d'électricité rurale décentralisée et de forêts FSC :",
          pillars: [
            { title: "Kinétique au Fil de l'Eau", desc: "Conception de barrages hydroélectriques de dérivation sans retenue d'eau perturbatrice du biotope marin.", icon: Waves, badge: "Hydrokinetic 210 MW" },
            { title: "Certifications Sylvicoles FSC", desc: "Exploitation responsable du bois d'œuvre de haute qualité combinée à un reboisement obligatoire perpétuel.", icon: Trees, badge: "Bois Certifié FSC" },
            { title: "Unités d'Accumulateurs Tampons", desc: "Ensembles intégrés d'accumulateurs au lithium régulant la fourniture locale face aux instabilités.", icon: Zap, badge: "Stabilité du Réseau" }
          ],
          initiatives: [
            { title: "Ouvrage Hydraulique de Maroantsetra", desc: "Installation de turbines hydrauliques respectueuses de l'écosystème halieutique environnant.", metric: "210 MW Capacité Installée" },
            { title: "Reboisement des Bassins Versants - SAVA", desc: "Restauration des sols boisés de montagne par plantation exhaustive d'essences de haute futaie.", metric: "1,2M Arbres Replantés" },
            { title: "Station de Distribution Énergétique SAVA", desc: "Installation de micro-réseaux pour l'approvisionnement des entreprises et zones rurales isolées.", metric: "120 Noeuds Connectés" }
          ],
          teamTitle: "Cadres Techniques & Énergéticiens",
          teamSub: "Les ingénieurs industriels assurant la souveraineté en électricité verte de nos activités :",
          team: [
            { name: "Marc de Ridder", role: "Ingénieur Conseil en Hydroélectricité" },
            { name: "Jacques Rabarijaona", role: "Superviseur des Domaines Forestiers" },
            { name: "Toky Rakotomena", role: "Chef de Projet Réseau Énergétique" }
          ]
        },
        MG: {
          pillarsTitle: "Famokarana Angovo sy Fiarovana ny Ala",
          pillarsSub: "Fampiasana ny herin'ny rano mandeha, oron'ny masoandro, ary ny fametrahana zanakazo voaaro:",
          initiativesTitle: "Tetikasa Angovo Azo Avaozina sy Fambolen-kazo",
          initiativesSub: "Famatsiana herinaratra ny tanàna sy ny indostria ary fitsaboana ny tany nihareraka:",
          pillars: [
            { title: "Herinaratra avy amin'ny Rano", desc: "Fampiasana turbine avo lenta miary ny angovon'ny rano mandeha nefa tsy manimba biby an-drano.", icon: Waves, badge: "Angovo madio" },
            { title: "Fambolen-kazo FSC voamarina", desc: "Fitantanana drafi-pambolena hazo sarobidy miantoka ny faharetan'ny ala sy ny tontolo iainana.", icon: Trees, badge: "Ala voaaro FSC" },
            { title: "Batery fitahirizana matanjaka", desc: "Teknolojia mitazona sy mikarakara herinaratra ho ampiasaina rehefa tsy misy andro homasaka.", icon: Zap, badge: "Fifandraisana amin'ny tambajotra" }
          ],
          initiatives: [
            { title: "Tetikasa Weir any Maroantsetra", desc: "Fanamboarana barazy kely fitarian-drano hakana herinaratra tsy misy tondra-drano any an-tanàna.", metric: "Capacité 210 MW" },
            { title: "Fambolen-kazo any SAVA", desc: "Famerenana ny ala simba any amin'ny tendrombohitra tamin'ny alalan'ny zanakazo 1.2M.", metric: "Zanakazo 1.2M voavoly" },
            { title: "Tobin'ny Jiro Masoandro Kaontenera", desc: "Fametrahana tobim-pamatsiana jiro amin'ny kaontenera any amin'ny faritra isan-karazany.", metric: "Faritra 120 nahazo jiro" }
          ],
          teamTitle: "Mpitantana sy Injenieran'ny Angovo ViMa",
          teamSub: "Ireo manam-pahaizana mpanorina sy mikarakara ny herinaratra azo avaozina rehetra:",
          team: [
            { name: "Marc de Ridder", role: "Injeniera lehibe momba ny rano" },
            { name: "Jacques Rabarijaona", role: "Mpitantana ny ala sy ny fambolen-kazo" },
            { name: "Toky Rakotomena", role: "Mpandrindra ny herinaratra masoandro" }
          ]
        }
      },
      social: {
        EN: {
          pillarsTitle: "Strategic Pillars of Social Impact",
          pillarsSub: "Empowering communities through clinical outreach, academic focus, and holistic mindfulness:",
          initiativesTitle: "Active Social Outreach Programs",
          initiativesSub: "High-impact field campaigns deploying resources, expertise, and long-term operating support:",
          pillars: [
            { title: "Academic & Literacy Support", desc: "Reinforcing primary public schools, providing textbooks, and creating secondary academic scholarships.", icon: BookOpen, badge: "Scholar Access" },
            { title: "Holistic Wellness & Mindfulness", desc: "Setting up fitness and retreat nodes to reduce community fatigue and support mental wellness.", icon: Heart, badge: "Holistic Health" },
            { title: "Clinical Mobile Outreach", desc: "Deploying medicine, diagnosis tools, and mobile vans to families in isolated and off-grid regions.", icon: HeartPulse, badge: "Primary Treatment" }
          ],
          initiatives: [
            { title: "Tetikasa \"Vision Education\"", desc: "Architectural restoration and solar light installation for primary public schoolhouses in rural Madagascar.", metric: "50 Schools Completed" },
            { title: "\"Salama ViMa\" Clinical Patrols", desc: "Providing clean diagnostics, early treatment and pediatric support directly to remote rural valleys.", metric: "12,000+ km Traveled/Yr" },
            { title: "Community Wellness Retreats", desc: "Developing fitness, yoga and rehabilitation spaces to foster clean wellbeing living habits.", metric: "14,000+ Active Members" }
          ],
          teamTitle: "Impact & Community Specialists",
          teamSub: "The core administrative oversight team steering social action and donor allocations:",
          team: [
            { name: "Helena Smith", role: "Sovereign Charity Trustee" },
            { name: "Zara Godson", role: "Primary Wellness Curation Lead" },
            { name: "Fara Ramilison", role: "Director of Public Health Outreach" }
          ]
        },
        FR: {
          pillarsTitle: "Piliers d'Impact Social",
          pillarsSub: "Soutenir le développement durable et le bien-être communautaire par l'éducation et la santé :",
          initiativesTitle: "Programmes Solidaires de Terrain",
          initiativesSub: "Des projets concrets apportant aide matérielle et encadrement aux populations :",
          pillars: [
            { title: "Soutien Éducatif & Bourses", desc: "Financement d'écoles primaires publiques, distribution de manuels scolaires et bourses d'excellence.", icon: BookOpen, badge: "Scolarisation" },
            { title: "Bien-Être & Pleine Conscience", desc: "Création d'espaces de ressourcement, cours de yoga collectifs et sensibilisation à la santé mentale.", icon: Heart, badge: "Équilibre Mental" },
            { title: "Soins Médicaux de Proximité", desc: "Déploiement de caravanes médicales mobiles apportant consultations gratuites et diagnostics pédiatriques.", icon: HeartPulse, badge: "Dispensation Gratuite" }
          ],
          initiatives: [
            { title: "Projet \"Vision Éducation\"", desc: "Rénovation et électrification solaire de 50 écoles primaires publiques dans les zones défavorisées.", metric: "50 Écoles Rénovées" },
            { title: "Caravanes de Santé \"Salama ViMa\"", desc: "Consultations pédiatriques et distribution de trousses de premiers soins en zones enclavées.", metric: "12 000+ km de patrouille" },
            { title: "Foyers de Respiration Collective", desc: "Sessions d'initiation au sport santé et à la nutrition responsable dans nos dispensaires partenaires.", metric: "14 000 Participants" }
          ],
          teamTitle: "Équipe du Développement Social",
          teamSub: "Les coordinateurs de projets solidaires et d'allocation des fonds :",
          team: [
            { name: "Helena Smith", role: "Présidente Conseil de Bienfaisance" },
            { name: "Zara Godson", role: "Responsable Programmes de Bien-être" },
            { name: "Fara Ramilison", role: "Directrice des Opérations Humanitaires" }
          ]
        },
        MG: {
          pillarsTitle: "Ny Andrin'ny Asa Fampandrosoana",
          pillarsSub: "Fanampiana ny vahoaka amin'ny famakiana boky, fahasalamana klinika, ary ny fikololoana ny saina:",
          initiativesTitle: "Tetikasa Sosialy mbola Mandeha",
          initiativesSub: "Fizarana fanampiana mivantana ho an'ireo mpiray tanindrazana any amin'ny faritra sahirana:",
          pillars: [
            { title: "Fanohanana ara-Pianarana", desc: "Fanavaozana sekoly amin'ny tany lavitra, fizarana boky sy kojakoja ho an'ny mpianatra.", icon: BookOpen, badge: "Vatsim-pianarana" },
            { title: "Fikolokoloana ny saina", desc: "Fampianarana yoga sy fisorohana ny roritsaina hiadiana amin'ny havizan'ny mponina.", icon: Heart, badge: "Fahasalamana ara-panahy" },
            { title: "Fizaham-pahasalamana", desc: "Tobim-pitsaboana mandehandeha mizara fanafody maimaimpoana sy fitiliana isan-karazany.", icon: HeartPulse, badge: "Fitsaboana fototra" }
          ],
          initiatives: [
            { title: "Tetikasa \"Vision Education\"", desc: "Fananganana sy fanamboarana EPP miisa 50 any amin'ny faritany isan-karazany eto Madagasikara.", metric: "Sekoly 50 vita fanavaozana" },
            { title: "\"Salama ViMa\" Fizaham-pahasalamana", desc: "Fitsidihana sy fizahana mponina sahirana any ambanivohitra amin'ny alalan'ny fiara klinika.", metric: "12 000+ km ny zotra" },
            { title: "Atrikasa ho an'ny saina", desc: "Fampianarana momba ny yoga sy ny fialan-tsasatra ho an'ny daholobe maimaimpoana.", metric: "Mpianatra 14 000 mahery" }
          ],
          teamTitle: "Mpitantana ny Asa Sosialy rehetra",
          teamSub: "Ireo ekipa misahana ny drafi-panampiana rehetra eo anivon'ny orinasa:",
          team: [
            { name: "Helena Smith", role: "Mpanolotsaina ambony momba ny asa soa" },
            { name: "Zara Godson", role: "Tale misahana ny fialan-tsasatra ara-tsaina" },
            { name: "Fara Ramilison", role: "Tale misahana ny fitsaboana sy fandaharan-asa" }
          ]
        }
      }
    };

    return generatorMap[fallbackCat][lang] || generatorMap[fallbackCat].EN;
  };

  const activePillarsData = getExtendedData(company.id, language);
  const colors = getCategoryColors(company.id, catKey);


  return (
    <div className="pt-36 sm:pt-40 pb-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="company-detail-page-top">
      <Helmet
        title={`${company.name} | Division File`}
        description={company.description}
        keywords={`${company.name}, sub-sector, ${company.id}, Aetheris Group, Vision Madagascar`}
        ogImage={`https://picsum.photos/seed/${company.imagingSeed}/800/400`}
        language={language}
      />
      
      {/* 1. Header Navigation Bar / Back button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-900 pb-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer group"
          id="company-detail-back-button"
        >
          <ArrowLeft size={14} className="transform group-hover:-translate-x-1 transition-transform" />
          <span>{translations.backBtn}</span>
        </button>

        {/* Top Mini-Navigation indicators */}
        <div className="flex items-center space-x-3 text-[10px] font-mono text-slate-500">
          <span>COOPERATIVE FILE // CODE_SECTOR_{company.id.toUpperCase()}_PRO</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </div>

      {/* 2. Panoramic Interactive Premium Hero Banner */}
      <section className="relative rounded-3xl overflow-hidden min-h-[380px] flex items-end p-8 sm:p-12 border border-slate-900 shadow-2xl" id="company-detail-hero">
        <div className="absolute inset-0 bg-slate-900">
          <img
            src={`https://picsum.photos/seed/${company.imagingSeed}/1200/600`}
            alt={company.name}
            className="w-full h-full object-cover grayscale opacity-60 mix-blend-luminosity hover:scale-105 transition-transform duration-10000"
            referrerPolicy="no-referrer"
          />
          {/* Layered cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content stacked at bottom-left */}
        <div className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 text-center sm:text-left">
            {/* LARGE COMPANY LOGO - Oversized premium view as requested */}
            <CompanyLogo
              id={company.id}
              size="xl"
              className="border-2 border-emerald-500/30 rounded-[2.5rem] bg-slate-950/90 shadow-[0_0_30px_rgba(16,185,129,0.2)] p-2 backdrop-blur hover:rotate-3 hover:scale-105 transition-all duration-300 transform"
            />
            
            <div className="space-y-2">
              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                <span className="font-mono text-[9px] text-emerald-400 font-bold border border-emerald-500/35 px-2.5 py-0.5 rounded-full bg-emerald-950/30 uppercase tracking-widest leading-none">
                  SEC-{company.id.toUpperCase()}
                </span>
                <span className="font-mono text-[9px] text-slate-400 font-bold border border-slate-800 px-2.5 py-0.5 rounded-full bg-slate-900/60 uppercase tracking-widest leading-none">
                  {translations.activeStatus}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
                {company.name}
              </h1>
              <p className="text-xs text-slate-400 tracking-wider uppercase font-medium max-w-lg font-mono">
                {categorySubtitles[catKey][language]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Deep Bento Grid Specification Panels */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="company-detail-grid">
        
        {/* Column Left (2/3 Grid): Mission, services, specs */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Card: Narrative overview */}
          <div className="glass rounded-3xl p-8 border border-slate-900 space-y-6 relative overflow-hidden" id="company-detail-overview-card">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center space-x-2 text-slate-400 uppercase font-mono text-xs font-bold">
              <Layers size={14} className="text-emerald-400" />
              <span>{translations.specsLabel}</span>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light first-letter:text-3xl first-letter:font-bold first-letter:text-emerald-400 first-letter:float-left first-letter:mr-2">
              {company.description}
            </p>

            <div className="border-t border-slate-900/60 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center space-x-2 bg-slate-900/20 p-2.5 rounded-xl border border-white/5">
                <Shield size={14} className="text-emerald-500" />
                <span>{translations.regAuthorityCode}: VIMA-{company.id.toUpperCase()}-90</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/20 p-2.5 rounded-xl border border-white/5">
                <Clock size={14} className="text-emerald-500" />
                <span>{translations.corporateAuthority}</span>
              </div>
            </div>
          </div>

          {/* Card: Primary Operational Services */}
          <div className="glass rounded-3xl p-8 border border-slate-900 space-y-6" id="company-detail-services-card">
            <h3 className="text-white text-sm font-mono font-bold tracking-wider uppercase border-b border-slate-900 pb-3 flex items-center gap-2">
              <Construction size={14} className="text-emerald-400" />
              <span>{translations.servicesLabel}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {company.services.map((serv, idx) => (
                <div key={idx} className="bg-slate-950/40 p-5 rounded-2xl border border-slate-900 flex items-start space-x-3.5 group hover:border-emerald-500/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-500/10 transition-colors">
                    <CheckCircle2 size={14} />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-xs font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
                      {serv}
                    </span>
                    <span className="block text-[10px] font-mono text-slate-500">
                      SERVICE_KEY_0{idx + 1} // OPERATIONAL_EXECUTION
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Column Right (1/3 Grid): Interactive Diagnostics Block */}
        <div className="space-y-8 lg:col-span-1">
          
          {/* Card: Sovereign Validation Metrics */}
          <div className="glass rounded-3xl p-6 border border-slate-900 space-y-4" id="company-detail-metrics-card">
            <h3 className="text-white text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2 border-b border-slate-900 pb-3">
              <Activity size={14} className="text-emerald-400" />
              <span>{translations.metricsLabel}</span>
            </h3>

            <div className="space-y-3.5">
              {company.metrics.map((met, idx) => (
                <div key={idx} className="bg-slate-950/60 border border-slate-900 rounded-2xl p-4.5 text-center relative overflow-hidden group">
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-t from-emerald-500 to-teal-500 rounded-l" />
                  <span className="block text-white font-extrabold text-2xl leading-none">
                    {met.value}
                  </span>
                  <span className="block text-[9px] text-slate-500 font-bold mt-2 uppercase tracking-wider font-mono">
                    {met.label}
                  </span>
                </div>
              ))}
            </div>
          </div>



        </div>

      </section>

      {/* 3.1 Custom Dynamic Company Operational Programs Section (rendered for all companies) */}
      {activePillarsData && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12 pt-4"
          id="company-expanded-content"
        >
          {/* Section Divider Line with Glowing Accent Dot */}
          <div className="flex items-center space-x-4">
            <span className="h-[1px] flex-grow bg-slate-900" />
            <div className={`flex items-center space-x-2 bg-slate-950/80 border ${colors.borderMuted} rounded-full px-4 py-1.5 backdrop-blur shadow-md`}>
              <Sparkles size={12} className={`${colors.iconColor} animate-pulse`} />
              <span className={`font-mono text-[10px] ${colors.textAccent} tracking-wider font-extrabold uppercase`}>
                {language === 'EN' ? 'SUBSIDIARY OPERATIONAL OVERVIEW' : language === 'FR' ? 'APERÇU DE LA FILIALE' : 'SEHATRA SOSIALY ORINASA'}
              </span>
            </div>
            <span className="h-[1px] flex-grow bg-slate-900" />
          </div>

          {/* Pillars Headline Block */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {activePillarsData.pillarsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              {activePillarsData.pillarsSub}
            </p>
          </div>

          {/* Pillars Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activePillarsData.pillars.map((pillar: any, index: number) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={index}
                  className={`bg-slate-950/45 p-6 sm:p-8 rounded-3xl border border-slate-900 ${colors.borderHover} transition-all duration-350 group relative overflow-hidden flex flex-col justify-between`}
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl pointer-events-none transition-colors ${colors.glow}`} />
                  
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl bg-slate-950/30 border ${colors.borderMuted} flex items-center justify-center ${colors.iconColor} transition-colors shadow-sm`}>
                      <IconComp size={20} />
                    </div>
                    
                    <div className="space-y-2">
                      <span className={`inline-block text-[9px] font-mono border ${colors.borderMuted} px-2 py-0.5 rounded ${colors.bgMuted} uppercase tracking-widest font-extrabold ${colors.textAccent}`}>
                        {pillar.badge}
                      </span>
                      <h3 className={`text-base font-bold text-white ${colors.textAccentHover} transition-colors`}>
                        {pillar.title}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed font-light">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-900/60 flex justify-between items-center text-[9px] font-mono text-slate-500">
                    <span>STRATEGIC PILLAR_0{index + 1}</span>
                    <span className={`${colors.textAccent} font-bold uppercase`}>VERIFIED</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Initiatives Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            
            {/* Left side: Strategic initiatives list */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2 pb-2">
                <span className={`text-xs font-mono ${colors.textAccent} uppercase tracking-widest block font-extrabold`}>
                  {language === 'EN' ? 'FIELD MISSIONS' : language === 'FR' ? 'MISSIONS DE TERRAIN' : 'FIZAHANA IFOTONY'}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {activePillarsData.initiativesTitle}
                </h3>
              </div>

              <div className="space-y-4">
                {activePillarsData.initiatives.map((init: any, idx: number) => (
                  <div
                    key={idx}
                    className="bg-slate-950/20 hover:bg-slate-900/10 p-5 rounded-2xl border border-slate-900/80 group transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-2 max-w-xl">
                      <div className="flex items-center space-x-2">
                        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${colors.accent === 'rose' ? 'bg-rose-500' : colors.accent === 'indigo' ? 'bg-indigo-500' : colors.accent === 'emerald' ? 'bg-emerald-500' : 'bg-orange-500'}`} />
                        <h4 className="text-white text-sm sm:text-base font-extrabold font-sans">
                          {init.title}
                        </h4>
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed font-light pl-3.5">
                        {init.desc}
                      </p>
                    </div>
                    
                    <div className="shrink-0 bg-slate-950/60 border border-slate-900/80 rounded-xl px-4 py-2 text-center sm:text-right min-w-[140px]">
                      <span className="block text-[8px] font-mono text-slate-500 uppercase">Target / Metric</span>
                      <span className={`block text-xs font-bold ${colors.textAccent} uppercase mt-0.5 font-mono`}>{init.metric}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Specialist Team Members Detail */}
            <div className="lg:col-span-4 space-y-6 bg-slate-950/30 p-6 rounded-3xl border border-slate-900 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-1 pb-2 border-b border-slate-900">
                  <span className={`text-xs font-mono ${colors.textAccent} uppercase tracking-widest block font-extrabold`}>
                    {language === 'EN' ? 'ADMINISTRATIVE OVERSEE' : language === 'FR' ? 'PILOTAGE' : 'FITANTANANA'}
                  </span>
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {activePillarsData.teamTitle}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-mono">
                    {activePillarsData.teamSub}
                  </p>
                </div>

                <div className="space-y-4">
                  {activePillarsData.team.map((member: any, i: number) => {
                    const memberFaces = [
                      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
                      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150",
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"
                    ];
                    return (
                      <div key={i} className="flex items-center gap-3 bg-slate-950/50 p-3 rounded-xl border border-slate-900/60 hover:border-slate-800 transition-colors">
                        <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-slate-800 bg-slate-900">
                          <img
                            src={memberFaces[i]}
                            alt={member.name}
                            className="w-full h-full object-cover grayscale"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="min-w-0">
                          <h5 className="text-xs font-bold text-white truncate">{member.name}</h5>
                          <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-wider truncate">
                            {member.role}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-900 flex justify-between items-center text-[9px] font-mono text-slate-500">
                <span>GOVERNANCE: CERTIFIED</span>
                <span className="text-slate-400 font-bold uppercase">PROVOST_OFFICE</span>
              </div>
            </div>

          </div>

          {/* 3.2 Custom NGO Impact Metrics Section */}
          {company.id === 'ngo' && (
            <ImpactMetrics language={language} colors={colors} />
          )}

          {/* 3.3 Custom Portfolio Gallery & Project Accordion */}
          <CompanyPortfolioAndProjects companyId={company.id} language={language} colors={colors} />

          {/* 3.3.5 Custom Sector Team Section */}
          <CompanyTeam companyId={company.id} language={language} colors={colors} />

          {/* 3.4 Custom NGO Impact Newsletter */}
          {company.id === 'ngo' && (
            <NgoNewsletter language={language} colors={colors} />
          )}

        </motion.div>
      )}

      {/* 4. Sovereign Inquire CTA Actions */}
      <section className="glass rounded-3xl p-8 border border-slate-900 bg-slate-950/40 text-center space-y-6 max-w-3xl mx-auto" id="company-detail-cta">
        <div className="w-12 h-12 rounded-2xl bg-emerald-950/20 border border-emerald-500/35 flex items-center justify-center text-emerald-400 mx-auto animate-pulse">
          <PhoneCall size={18} />
        </div>
        <div className="space-y-2">
          <h3 className="text-white text-lg font-black tracking-tight uppercase">
            {language === 'EN' ? 'INQUIRE ABOUT THIS SUBSIDIARY' : language === 'FR' ? 'SOLICITER CETTE FILIALE' : 'HIFANDRAISANA AMIN’ITY ORINASA ITY'}
          </h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
            {language === 'EN' 
              ? 'Connect directly with the designated management staff, board coordinators, or project operators for this division.' 
              : 'Prenez contact directement avec la direction administrative, les commissaires ou les opérateurs de projets de cette division.'}
          </p>
        </div>
        <button
          onClick={() => onInquire(company.name)}
          className="px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2 mx-auto"
        >
          <Sparkles size={13} />
          <span>{translations.inquireBtn}</span>
        </button>
      </section>

      {/* 5. Custom Cross-Subsidiary Carousel Navigation */}
      <section className="border-t border-slate-900 pt-8 flex items-center justify-between" id="company-detail-nav-carousel">
        <button
          onClick={handlePrev}
          className="flex items-center space-x-2 text-xs font-mono text-slate-450 hover:text-white transition-colors cursor-pointer group bg-slate-950/45 px-4 py-2.5 border border-slate-900 rounded-xl"
        >
          <ChevronLeft size={14} className="transform group-hover:-translate-x-1 transition-transform" />
          <div className="text-left hidden sm:block">
            <span className="block text-[8px] text-slate-550 uppercase font-mono leading-none">{translations.prevBtn}</span>
            <span className="block text-xs font-bold leading-tight mt-0.5">{prevCompany.name}</span>
          </div>
        </button>

        <button
          onClick={handleNext}
          className="flex items-center space-x-2 text-xs font-mono text-slate-450 hover:text-white transition-colors cursor-pointer group bg-slate-950/45 px-4 py-2.5 border border-slate-900 rounded-xl"
        >
          <div className="text-right hidden sm:block">
            <span className="block text-[8px] text-slate-550 uppercase font-mono leading-none">{translations.nextBtn}</span>
            <span className="block text-xs font-bold leading-tight mt-0.5">{nextCompany.name}</span>
          </div>
          <ChevronRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
        </button>
      </section>

    </div>
  );
}
