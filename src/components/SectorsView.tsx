import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SECTORS } from '../data/corporateData';
import { Sector } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { CompanyLogo } from './CompanyLogo';
import { CompanyDetailView } from './CompanyDetailView';
import {
  Heart,
  Compass,
  Droplet,
  Globe,
  Building2,
  Briefcase,
  Anchor,
  Layout,
  ShoppingBag,
  Settings,
  Truck,
  Trees,
  Zap,
  Waves,
  Activity,
  HardHat,
  Gem,
  Fuel,
  Mountain,
  Search,
  Filter,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  X,
  PhoneCall,
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface SectorsViewProps {
  language: 'EN' | 'FR' | 'MG';
  selectedSectorId: string | null;
  setSelectedSectorId: (id: string | null) => void;
  setActiveTab?: (tab: string) => void;
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

export function SectorsView({ language, selectedSectorId, setSelectedSectorId, setActiveTab }: SectorsViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCompany, setSelectedCompany] = useState<Sector | null>(null);

  // Sync from home page / search selection redirects
  useEffect(() => {
    if (selectedSectorId) {
      const found = SECTORS.find(s => s.id === selectedSectorId);
      if (found) {
        setSelectedCompany(found);
      }
    } else {
      setSelectedCompany(null);
    }
  }, [selectedSectorId]);

  const handleCloseDetail = () => {
    setSelectedCompany(null);
    setSelectedSectorId(null);
  };

  const handleInquireClick = () => {
    if (setActiveTab) {
      setActiveTab('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Translations
  const translations = {
    EN: {
      title: 'Our Companies',
      sub: 'Explore the 19 high-scale corporate subsidiaries of the Vision Madagascar (ViMa) Group, driving sustainable progress and sovereign industrial excellence.',
      searchPlaceholder: 'Search companies (e.g. NGO, Hydro, Energy)...',
      metricsLabel: 'Validated Key Performance Indicators',
      servicesLabel: 'Primary Operational Services',
      blueprint: 'Executive Operational Blueprint',
      inquireBtn: 'Inquire About Partnerships',
      closeBtn: 'Close Blueprint',
      systemStatus: 'MODEL STANDBY',
      renderMesh: 'Render-Mesh Layer v8.4',
      categories: {
        all: 'All Companies',
        social: 'Social & Well-being',
        realestate: 'Real Estate & Hospitality',
        energy: 'Energy & Infrastructure',
        logistics: 'Logistics & Commerce'
      }
    },
    FR: {
      title: 'Nos Entreprises',
      sub: 'Découvrez les 19 filiales d’envergure du Groupe Vision Madagascar (ViMa), fers de lance du développement durable et de l’excellence industrielle souveraine.',
      searchPlaceholder: 'Rechercher une entreprise (ex: NGO, Hydro, Energy)...',
      metricsLabel: 'Indicateurs de Performance Clés Validés',
      servicesLabel: 'Prestations Opérationnelles Clés',
      blueprint: 'Plan de Vol Opérationnel Exécutif',
      inquireBtn: 'Initier un Partenariat',
      closeBtn: 'Fermer le Plan',
      systemStatus: 'SYSTÈME PRÊT',
      renderMesh: 'Couche de Rendu Spatiale v8.4',
      categories: {
        all: 'Toutes les Entreprises',
        social: 'Social & Bien-être',
        realestate: 'Immobilier & Résidences',
        energy: 'Énergie & Infrastructures',
        logistics: 'Logistique & Services'
      }
    },
    MG: {
      title: 'Ireo Orinasanay',
      sub: "Hahafantaro ireo orinasa 19 rantsan’ny Vondrona Vision Madagascar (ViMa), lohasahan'ny fampandrosoana lovainjafy ho an'ny firenena.",
      searchPlaceholder: 'Hikaroka orinasa (ohatra: NGO, Hydro, Energy)...',
      metricsLabel: 'Tondro momba ny Fahombiazana',
      servicesLabel: 'Asa sy Tolotra Misongadina',
      blueprint: 'Drafitra Teknika momba ny Orinasa',
      inquireBtn: 'Hanao Fiaraha-miasa',
      closeBtn: 'Hikatona',
      systemStatus: 'SAKAFO VONONA',
      renderMesh: 'Sary Teknika Mandaitra v8.4',
      categories: {
        all: 'Ny Orinasa Rehetra',
        social: 'Sosialy & Fahasalamana',
        realestate: 'Trano, Tany & Resorta',
        energy: 'Angovo & Fotodrafitrasa',
        logistics: 'Fitaterana & Tolotra'
      }
    }
  }[language];

  // Dynamic 3D wireframe render specifications for each subsidiary
  const getWireframeSpecs = (id: string) => {
    switch (id) {
      case 'ngo':
      case 'yoga':
        return { label: 'Harmonic Well-being Resonator', color: 'text-rose-400 border-rose-500/50' };
      case 'water':
      case 'hydro':
        return { label: 'Hydro-Kinetic Velocity Vector', color: 'text-sky-400 border-sky-500/50' };
      case 'tsingy':
      case 'maromokotro':
        return { label: 'Coastal Ecological Mesh Elevation', color: 'text-emerald-400 border-emerald-500/50' };
      case 'france':
      case 'management':
        return { label: 'Sovereign Asset Capital Corridor', color: 'text-amber-400 border-amber-500/50' };
      case 'wtc':
      case 'realestate':
      case 'mall':
        return { label: 'LEED Carbon-Zero Structural Frame', color: 'text-indigo-400 border-indigo-500/50' };
      case 'agulhas':
      case 'serv':
      case 'dis':
        return { label: 'Autonomous Freight Routing Grid', color: 'text-orange-400 border-orange-500/50' };
      case 'woods':
        return { label: 'Photosynthetic Biomass Mass Model', color: 'text-green-400 border-green-500/50' };
      case 'hybrid':
        return { label: 'Solenoid Quantum Microgrid Node', color: 'text-teal-400 border-teal-500/50' };
      case 'construction':
        return { label: 'High-Performance Cement Shear Pillar', color: 'text-cyan-400 border-cyan-500/50' };
      case 'mining':
        return { label: 'Spectroscopic Soil Element Scanner', color: 'text-fuchsia-400 border-fuchsia-500/50' };
      case 'oilgas':
        return { label: 'Vapor-Insulated Liquid Fuel Storage', color: 'text-yellow-400 border-yellow-500/50' };
      default:
        return { label: 'Interactive Technical Blueprint Mesh', color: 'text-emerald-400 border-emerald-500/50' };
    }
  };

  // Filter companies
  const filteredCompanies = SECTORS.filter(company => {
    const matchesCategory = activeCategory === 'all' || COMPANY_CATEGORIES[company.id] === activeCategory;
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          company.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          company.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (selectedSectorId) {
    return (
      <CompanyDetailView
        companyId={selectedSectorId}
        onBack={() => {
          setSelectedSectorId(null);
          setSelectedCompany(null);
        }}
        onInquire={(companyName) => {
          if (setActiveTab) {
            setActiveTab('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        language={language}
      />
    );
  }

  return (
    <div id="companies-view-wrapper" className="space-y-16 pb-24 relative">
      
      {/* 1. Header Area with spacious geometric negative space */}
      <section className="relative pt-32 pb-6 text-center max-w-4xl mx-auto px-4" id="companies-intro">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-950/20">
          {language === 'EN' ? 'REVOLUTIONARY SOVEREIGN HOLDINGS' : language === 'FR' ? 'PORTEFEUILLE DE FILIALES' : 'IREO RANTSANA MATANJAKA'}
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-4">
          {translations.title}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl mx-auto font-light">
          {translations.sub}
        </p>
      </section>

      {/* 2. Interactive Navigation Filters & Search bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6" id="companies-controls-panel">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between border-b border-slate-900 pb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start w-full lg:w-auto" id="filter-categories">
            {(Object.keys(translations.categories) as Array<keyof typeof translations.categories>).map((catName) => {
              const active = activeCategory === catName;
              return (
                <button
                  key={catName}
                  onClick={() => {
                    setActiveCategory(catName);
                    setSelectedCompany(null);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all border cursor-pointer active:scale-95 ${
                    active
                      ? 'bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-400 border-emerald-500/40 shadow-inner'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border-slate-900'
                  }`}
                >
                  {translations.categories[catName]}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80" id="companies-search-container">
            <Search className="absolute left-3.5 top-3.5 text-slate-500 w-4.5 h-4.5" />
            <input
              type="text"
              placeholder={translations.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSelectedCompany(null);
              }}
              className="w-full pl-10 pr-4 py-3 bg-slate-950/45 border border-slate-900 rounded-xl text-xs text-white placeholder-slate-500 outline-none focus:border-emerald-500/40 transition-colors"
            />
          </div>

        </div>
      </section>

      {/* 3. Main Grid of Subsidiaries */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="companies-grid-layout">
        {filteredCompanies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company) => {
              const categoryKey = COMPANY_CATEGORIES[company.id];
              const categoryLabel = translations.categories[categoryKey as keyof typeof translations.categories];
              const isSelectedInFlow = selectedCompany?.id === company.id;

              return (
                <motion.div
                  key={company.id}
                  layoutId={`company-card-wrapper-${company.id}`}
                  onClick={() => {
                    setSelectedCompany(company);
                    setSelectedSectorId(company.id);
                  }}
                  className={`glass card-hover rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-[280px] group cursor-pointer border ${
                    isSelectedInFlow
                      ? 'border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.15)] bg-slate-900/60'
                      : 'border-slate-900'
                  }`}
                  id={`company-card-${company.id}`}
                >
                  {/* Subtle glowing orb on hover */}
                  <div className="absolute -top-12 -right-12 w-28 h-28 bg-emerald-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div>
                    {/* Header: Icon & Category Label */}
                    <div className="flex items-center justify-between mb-4">
                      <CompanyLogo id={company.id} size="md" className="ring-1 ring-slate-900 group-hover:ring-emerald-500/30 transition-all shadow-md" />
                      <span className="text-[9px] font-mono font-semibold tracking-wider text-slate-500 uppercase">
                        {categoryLabel}
                      </span>
                    </div>

                    {/* Company Name */}
                    <h3 className="text-white text-base font-bold tracking-tight mb-2 group-hover:text-emerald-400 transition-colors">
                      {company.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-light line-clamp-3">
                      {company.description}
                    </p>
                  </div>

                  {/* Summary Metric Preview Footer */}
                  <div className="pt-4 border-t border-slate-900 flex items-center justify-between mt-4">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-500/10">
                      {company.metrics[0].value} {company.metrics[0].label}
                    </span>
                    <span className="text-slate-500 group-hover:text-white transition-colors flex items-center space-x-1 font-mono text-[9px] font-bold">
                      <span>BLUEPRINT</span>
                      <ChevronRight size={10} className="transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-slate-950 rounded-2xl bg-slate-950/20" id="companies-empty-state">
            <span className="text-slate-500 text-xs font-mono tracking-widest block uppercase">No matching subsidiaries found</span>
          </div>
        )}
      </section>

      {/* 4. Glassmorphic Immersive Drawer Details Panel */}
      <AnimatePresence>
        {selectedCompany && (
          <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-xl z-50 flex items-center justify-end" id="company-detail-drawer" onClick={handleCloseDetail}>
            
            {/* Sliding Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl h-full bg-slate-950/95 border-l border-slate-900 shadow-2xl overflow-y-auto relative flex flex-col justify-between"
              id="company-detail-body"
            >
              <div>
                {/* Header with image & custom fallback layout */}
                <div className="relative h-64 w-full bg-slate-900 overflow-hidden border-b border-slate-900 group">
                  <img
                    src={`https://picsum.photos/seed/${selectedCompany.imagingSeed}/800/500`}
                    alt={selectedCompany.name}
                    className="w-full h-full object-cover grayscale opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Floating labels */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end space-x-4">
                    <CompanyLogo id={selectedCompany.id} size="lg" className="border border-white/10 shadow-xl bg-slate-950/80 rounded-2xl shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-1 font-bold">
                        ACTIVE OPERATIONAL CORRIDOR SEC-{selectedCompany.id.toUpperCase()}
                      </span>
                      <h2 className="text-white text-2xl font-black tracking-tight font-sans">
                        {selectedCompany.name}
                      </h2>
                    </div>
                  </div>

                  {/* Absolute X close button */}
                  <button
                    onClick={handleCloseDetail}
                    className="absolute top-6 right-6 p-2 rounded-xl bg-slate-950/60 border border-white/10 text-slate-300 hover:text-white cursor-pointer hover:bg-slate-900 transition-colors"
                  >
                    <X size={15} />
                  </button>
                </div>

                {/* Body Details */}
                <div className="p-8 space-y-8 text-left">
                  
                  {/* Company Overview Description */}
                  <div className="space-y-3">
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                      {selectedCompany.description}
                    </p>
                  </div>

                  {/* Verified KPI Grid */}
                  <div className="glass rounded-2xl p-6 space-y-4 border border-slate-900 shadow-inner">
                    <h4 className="text-white text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2">
                      <Activity size={14} className="text-emerald-400" />
                      <span>{translations.metricsLabel}</span>
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {selectedCompany.metrics.map((met, idx) => (
                        <div key={idx} className="bg-slate-900/60 border border-white/5 rounded-xl p-3.5 text-center">
                          <span className="block text-white font-extrabold text-base sm:text-lg leading-none">
                            {met.value}
                          </span>
                          <span className="block text-[9px] text-slate-500 font-bold mt-1.5 uppercase tracking-wider font-mono">
                            {met.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Operational Services Bullet points */}
                  <div className="space-y-4">
                    <h4 className="text-white text-xs font-mono font-semibold tracking-wider uppercase border-b border-slate-900 pb-2.5">
                      {translations.servicesLabel}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {selectedCompany.services.map((serv, index) => (
                        <div key={index} className="glass rounded-xl p-3.5 flex items-start space-x-2.5 border border-slate-900/50">
                          <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-350 leading-relaxed font-light">{serv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic 3D Structural Simulator Blueprint Mesh */}
                  <div className="border border-slate-900 bg-slate-950/60 rounded-2xl p-6 relative overflow-hidden h-[240px] flex flex-col justify-between" id="companies-3d-simulator">
                    <div className="absolute inset-0 bg-dotted-pattern opacity-10 pointer-events-none" />
                    
                    <div className="flex justify-between items-center text-[9px] font-mono text-emerald-400 font-bold select-none">
                      <span>{translations.blueprint}</span>
                      <span className="animate-pulse flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 inline-block" />
                        {translations.systemStatus}
                      </span>
                    </div>

                    {/* CSS 3D pulsing wireframe sphere and satellites */}
                    <div className="my-auto self-center flex flex-col items-center justify-center relative scale-95">
                      <div className={`w-14 h-14 rounded-xl border border-dashed animate-spin duration-15000 relative ${getWireframeSpecs(selectedCompany.id).color}`}>
                        <div className="absolute inset-2 border border-dotted border-current rounded-full animate-reverse-spin" />
                        <div className="absolute inset-4 bg-emerald-400/10 rounded-full blur-md" />
                      </div>
                      
                      <span className="text-[11px] font-mono font-bold text-white mt-4 tracking-wider uppercase text-center block max-w-xs">
                        {getWireframeSpecs(selectedCompany.id).label}
                      </span>
                      <span className="text-[9px] font-mono text-slate-500 mt-1">
                        {translations.renderMesh}
                      </span>
                    </div>

                    <div className="text-[9px] font-mono text-slate-600 flex justify-between select-none">
                      <span>COORDINATES LOCK: OK</span>
                      <span>REF_MESH_STANDBY</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Sticky bottom CTA actions */}
              {setActiveTab && (
                <div className="p-6 border-t border-slate-900 bg-slate-950/90 backdrop-blur sticky bottom-0 text-center flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleInquireClick}
                    className="flex-1 px-5 py-4 premium-gradient-interactive rounded-xl text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:shadow-2xl shadow-emerald-500/10 active:scale-95 transition-all cursor-pointer"
                  >
                    <PhoneCall size={13} />
                    <span>{translations.inquireBtn}</span>
                  </button>
                  <button
                    onClick={handleCloseDetail}
                    className="px-5 py-4 glass hover:bg-white/5 rounded-xl text-xs text-slate-400 font-semibold cursor-pointer active:scale-95"
                  >
                    {translations.closeBtn}
                  </button>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
