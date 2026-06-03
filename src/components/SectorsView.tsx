import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SECTORS } from '../data/corporateData';
import { Sector } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { ArrowLeftRight, CheckCircle2, TrendingUp, Compass, ArrowRight, Activity, Calendar, ShieldCheck } from 'lucide-react';

interface SectorsViewProps {
  language: 'EN' | 'DE' | 'JP';
  selectedSectorId: string | null;
  setSelectedSectorId: (id: string | null) => void;
}

export function SectorsView({ language, selectedSectorId, setSelectedSectorId }: SectorsViewProps) {
  const [activeSector, setActiveSector] = useState<Sector>(SECTORS[0]);

  // Set initial selected sector from parent state (i.e. if user clicked it on Home Page!)
  useEffect(() => {
    if (selectedSectorId) {
      const found = SECTORS.find(s => s.id === selectedSectorId);
      if (found) {
        setActiveSector(found);
      }
    }
  }, [selectedSectorId]);

  const handleSectorTabChange = (sec: Sector) => {
    setActiveSector(sec);
    setSelectedSectorId(sec.id);
  };

  const translations = {
    EN: {
      title: 'Our Divisions & Operational Realms',
      sub: 'Operating fully autonomous, compliant, and ESG-accredited business segments scaling globally.',
      servicesLabel: 'Primary Operational Services',
      metricsLabel: 'Validated Operational Key performance Indicators',
      viewCaseStudy: 'Evaluate Associated Project Case Study',
      divisionStats: 'Division Statistics Log'
    },
    DE: {
      title: 'Geschäftsbereiche & Portfolios',
      sub: 'Eigenständig geführte, ESG-zertifizierte Sektoren mit weltweitem Skalierungspotenzial.',
      servicesLabel: 'Operative Dienstleistungen',
      metricsLabel: 'Auditierte Leistungsindikatoren (KPI)',
      viewCaseStudy: 'Zugehörige Fallstudie anzeigen',
      divisionStats: 'Bereichs-Statistiken'
    },
    JP: {
      title: '事業部門・グローバル・ポートフォリオ',
      sub: '各部門が完全に自立し、国際法・環境基準を順守したESG適合型の事業展開を進めています。',
      servicesLabel: '主な提供サービス・事業領域',
      metricsLabel: '監査済みの主要運営指標（KPI）',
      viewCaseStudy: '関連プロジェクトのケーススタディを確認する',
      divisionStats: 'セクター報告データログ'
    }
  }[language];

  // Specific visual illustration layouts or keywords for mock 3D geometry representation
  const render3DRep = (sectorId: string) => {
    let wireframes = [];
    if (sectorId === 'healthcare') {
      wireframes = ['Molecular Helix Strain', 'Double Shell Bio Dome', 'Diagnostics Optic Ring'];
    } else if (sectorId === 'technology') {
      wireframes = ['Multi-Node Cognitive Net', 'Hyperplane Cloud Array', 'Quantum Vector Ledger'];
    } else if (sectorId === 'realestate') {
      wireframes = ['LEED-90 Carbon Sphere', 'Dynamic Master Axis', 'Intelliheat Thermal Cube'];
    } else if (sectorId === 'energy') {
      wireframes = ['High-Voltage Core Reactor', 'Offshore Swell Tether', 'Solenoid Magnetic Field'];
    } else {
      wireframes = ['Hexagonal Supply Matrix', 'Acoustic Stress Prism', 'Circular Mass Balance'];
    }

    return (
      <div className="border border-white/5 bg-slate-950/60 rounded-2xl p-5 relative overflow-hidden h-[240px] flex flex-col justify-between" id="mock-3d-panel">
        {/* Animated matrix dots */}
        <div className="absolute inset-0 bg-dotted-pattern opacity-10 pointer-events-none" />
        
        <div className="flex justify-between items-center text-[10px] font-mono text-emerald-400">
          <span>Æ INTEGRATION BLUEPRINT</span>
          <span className="animate-pulse">● MODEL STANDBY</span>
        </div>

        {/* 3D Wireframe geometric projection spacer */}
        <div className="my-auto self-center flex flex-col items-center justify-center relative translate-y-1">
          <div className="w-16 h-16 rounded-xl border border-dashed border-emerald-500/50 animate-spin duration-15000 relative">
            <div className="absolute inset-2 border border-teal-400 rounded-lg animate-reverse-spin" />
            <div className="absolute inset-4 bg-emerald-400/10 rounded-full blur-md" />
          </div>
          <span className="text-[11px] font-mono font-bold text-white mt-4 tracking-wider uppercase">
            {wireframes[0]}
          </span>
          <span className="text-[9px] font-mono text-slate-500 mt-0.5">
            Render-Mesh Layer v6.2
          </span>
        </div>

        <div className="text-[10px] font-mono text-slate-500 flex justify-between">
          <span>COORD: 48.1351° N</span>
          <span>SYSTEM LOCK: OK</span>
        </div>
      </div>
    );
  };

  return (
    <div id="sectors-view-wrapper" className="space-y-16 pb-12 relative">
      
      {/* 1. Header Area */}
      <section className="relative pt-32 pb-8 overflow-hidden text-center max-w-4xl mx-auto px-4" id="sectors-intro">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-950/20">
          {language === 'EN' ? 'GLOBAL INTEGRATED REALMS' : language === 'DE' ? 'UNSERE SEKTORSTRUKTUR' : 'グローバル連結事業'}
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-4">
          {translations.title}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl mx-auto">
          {translations.sub}
        </p>
      </section>

      {/* 2. Interactive Navigation Tabs for All 8 Sectors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="sectors-tab-rail">
        <div className="flex flex-wrap gap-2 justify-center border-b border-slate-900 pb-6">
          {SECTORS.map((sec) => {
            const active = activeSector.id === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => handleSectorTabChange(sec)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                  active 
                    ? 'glass-accent text-emerald-400 border border-emerald-500/30' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent'
                }`}
              >
                <DynamicIcon name={sec.icon} size={15} />
                <span>{sec.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Deep-Dive Sector Showcase Content Panel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="sector-display-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSector.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left side: Images, Metrics, 3D render simulation */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Image box */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl group">
                <img
                  src={`https://picsum.photos/seed/${activeSector.imagingSeed}/600/400`}
                  alt={activeSector.name}
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Floating Sector title */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-mono text-[9px] font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                    ACTIVE ENVIRONMENT SEC-{activeSector.id.toUpperCase()}
                  </span>
                  <h3 className="text-white text-lg font-black leading-tight">
                    {activeSector.name}
                  </h3>
                </div>
              </div>

              {/* Verified Metrics indicator */}
              <div className="glass card-hover rounded-2xl p-6 space-y-4">
                <h4 className="text-white font-bold text-sm tracking-wide flex items-center space-x-2">
                  <Activity size={15} className="text-emerald-400" />
                  <span>{translations.divisionStats}</span>
                </h4>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  {activeSector.metrics.map((m, idx) => (
                    <div key={idx} className="bg-slate-950/60 border border-white/5 rounded-xl p-3">
                      <span className="block text-white font-black text-sm sm:text-base leading-none">
                        {m.value}
                      </span>
                      <span className="block text-[9px] text-slate-500 font-medium mt-1 uppercase tracking-wider font-mono">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Custom dynamic 3D structural render */}
              {render3DRep(activeSector.id)}

            </div>

            {/* Right side: Title, Description, Bullet points, Services list */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-4 text-left">
                <h2 className="text-3xl font-black text-white leading-tight font-sans">
                  {activeSector.name}
                </h2>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {activeSector.description}
                </p>
              </div>

              {/* Service List with animated cards */}
              <div className="space-y-4 text-left">
                <h3 className="text-white font-bold text-sm tracking-wider uppercase border-b border-slate-900 pb-3">
                  {translations.servicesLabel}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeSector.services.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="glass card-hover rounded-xl p-4 flex items-start space-x-3"
                      id={`sec-serv-${activeSector.id}-${idx}`}
                    >
                      <div className="w-5 h-5 rounded bg-emerald-950/80 border border-emerald-800 flex items-center justify-center text-emerald-400 mt-0.5">
                        <CheckCircle2 size={12} />
                      </div>
                      <span className="text-xs text-slate-300 font-semibold leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic statement */}
              <div className="p-5 border-l-4 border-emerald-500 bg-emerald-950/20 backdrop-blur rounded-r-xl border border-white/5 text-left">
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {language === 'EN' 
                    ? 'All operations within this division comply with regional antitrust structures and fall under centralized group-wide net-zero material routing policies.' 
                    : language === 'DE' 
                    ? 'Sämtliche Aktivitäten unterliegen behördlichen Regulierungen sowie unserer konzernweiten Net-Zero-Lieferkettenrichtlinie.' 
                    : '本事業セクターの事業活動は、それぞれの進出国のコンプライアンス法、およびグループ全体の完全純ゼロ炭素・環境規定に基づいて厳格に運営されています。'}
                </p>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </section>

    </div>
  );
}
