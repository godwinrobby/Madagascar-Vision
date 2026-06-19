import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SECTORS } from '../data/corporateData';
import { getTranslatedSectors } from '../utils/translator';
import { Sector } from '../types';
import { CompanyLogo } from './CompanyLogo';
import { Helmet } from './Helmet';
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
  Construction
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
