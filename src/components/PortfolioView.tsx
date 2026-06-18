import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/corporateData';
import { getTranslatedProjects } from '../utils/translator';
import { Project } from '../types';
import { Helmet } from './Helmet';
import { 
  Globe, 
  ArrowRight, 
  X, 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  SlidersHorizontal, 
  BarChart3, 
  TrendingUp, 
  ShieldCheck, 
  DollarSign, 
  Calculator, 
  Leaf, 
  Zap, 
  Database 
} from 'lucide-react';

interface PortfolioViewProps {
  language: 'EN' | 'FR' | 'MG';
}

export function PortfolioView({ language }: PortfolioViewProps) {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'HEALTH' | 'RE' | 'ENERGY' | 'LOGISTICS'>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [simCapital, setSimCapital] = useState<number>(50); // In Millions USD/EUR

  const translatedProjects = getTranslatedProjects(PROJECTS, language);

  const translations = {
    EN: {
      title: 'Our Asset Portfolio & Mega-Infrastructure',
      sub: 'Transparent governance of sovereign-grade development holdings, digital utilities, and decarbonized physical networks worldwide.',
      metricValuation: 'AUM Portfolio Value',
      metricOffset: 'Shared Decarbonization Value',
      metricSLA: 'Systemic Operational SLA',
      exploreBtn: 'Review Verifiable Case Study',
      backBtn: 'Return to Portfolio Hub',
      filterLabel: 'Asset Filter Class',
      challengeLabel: 'The Challenge Context',
      solutionLabel: 'The Executed Intervention',
      resultLabel: 'The Verifiable Outcome Statistics',
      simulatorTitle: 'Civic Capital Yield Simulator',
      simulatorSub: 'Simulate simulated portfolio allocation impact based on historical performance metrics.',
      allocationLabel: 'Capital Commitment Allocation',
      impactYield: 'Forecasted Civic Yield',
      co2Reduction: 'CO2 Avoidance Projection',
      efficiencyFactor: 'Systemic Efficiency Gain'
    },
    FR: {
      title: 'Notre Portefeuille d’Actifs & Grands Projets',
      sub: 'Gouvernance transparente de nos actifs stratégiques, infrastructures publiques et réseaux énergétiques bas-carbone.',
      metricValuation: 'Valeur des Actifs (AUM)',
      metricOffset: 'Empreinte Carbone Évitée',
      metricSLA: 'Taux de Disponibilité SLA',
      exploreBtn: 'Consulter l’étude de cas réelle',
      backBtn: 'Retourner au Hub de Projets',
      filterLabel: 'Filtre des Actifs',
      challengeLabel: 'Le Contexte et Défi',
      solutionLabel: 'L’Intervention Déployée',
      resultLabel: 'Les Résultats Empiriques Clés',
      simulatorTitle: 'Simulateur d’Impact et Rendement d’Actifs',
      simulatorSub: 'Simulez l’impact des ressources allouées en fonction de nos métriques de performance historiques.',
      allocationLabel: 'Ressources de Capital engagées',
      impactYield: 'Rendement Social Projeté',
      co2Reduction: 'Réduction de CO2 estimée',
      efficiencyFactor: 'Gain d’efficience système'
    },
    MG: {
      title: 'Ny Tahirim-pampiasam-bola sy Tetikasa goavana',
      sub: 'Tamberisina mangarahara amin’ireo fotodrafitrasa, famokarana angovo maharitra, ary fampiasam-bola manerantany.',
      metricValuation: 'Sanda manontolon’ny fampiasam-bola',
      metricOffset: 'Hatafana ny fako karbôna',
      metricSLA: 'Taham-pahafaha-miasa ofisialy',
      exploreBtn: 'Hizaha ny tantaram-pahombiazana',
      backBtn: 'Hiverina amin’ny lisitry ny Tetikasa',
      filterLabel: 'Sokajy sivana ny Tetikasa',
      challengeLabel: 'Olana sy zava-tsarotra natrehana',
      solutionLabel: 'Ny vahaolana natolotry ny Vima',
      resultLabel: 'Ny vokatra azo tsapain-tanana',
      simulatorTitle: 'Fitaovana fizahana ny fiantraikan’ny vola',
      simulatorSub: 'Azonao jerena mivantana eto ny vokatra ateraky ny renivola amin’ny fampandrosoana maharitra.',
      allocationLabel: 'Renivola fampiasa amin’ny fanorenana',
      impactYield: 'Taham-pitombon’ny asa sosialy',
      co2Reduction: 'Fatiantoka karbôna voasoroka',
      efficiencyFactor: 'Taham-pandrosoana miakatra'
    }
  }[language];

  const filterMap = {
    ALL: 'ALL_SECTORS',
    HEALTH: 'healthcare',
    RE: 'realestate',
    ENERGY: 'energy',
    LOGISTICS: 'logistics'
  };

  const filteredProjects = translatedProjects.filter((proj) => {
    if (activeFilter === 'ALL') return true;
    const filterKey = filterMap[activeFilter];
    return proj.sector.toLowerCase().includes(filterKey) || proj.id.toLowerCase().includes(filterKey);
  });

  // Simulator math based on capital committed
  const simulatedYield = (simCapital * 1.45).toFixed(1);
  const simulatedCO2 = (simCapital * 380).toLocaleString();
  const simulatedEfficiency = (4.5 + (simCapital * 0.12)).toFixed(2);

  return (
    <div id="portfolio-view-wrapper" className="space-y-16 pb-24 relative animate-fade-in">
      <Helmet
        title={language === 'EN' ? 'Asset Portfolio & Mega-Infrastructure' : language === 'FR' ? "Portefeuille d'Actifs & Méga-Infrastructures" : 'Tahiry sy Fotodrafitrasa Goavana'}
        description={translations.sub}
        keywords="asset portfolio, infrastructure portfolio, energy grids, smart cities, Vision Madagascar, Aetheris Group portfolio"
        language={language}
      />
      
      {/* 1. Elegant Header Area */}
      <section className="relative pt-32 pb-6 overflow-hidden text-center max-w-4xl mx-auto px-4" id="portfolio-intro">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-950/20 font-bold">
          {language === 'EN' ? 'RELIABLE GLOBAL INFRASTRUCTURE' : language === 'FR' ? 'INFRASTRUCTURE NATIONALE FIABLE' : 'FOTODRAFITRASA FAZON-DAHARAHA AZO ANTOKA'}
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-4">
          {translations.title}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl mx-auto font-light">
          {translations.sub}
        </p>
      </section>

      {/* 2. Premium Bento-Style Metric Summary Card Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="portfolio-metrics-bento">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="glass hover:border-emerald-500/20 transition-all p-6 rounded-2xl text-left flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{translations.metricValuation}</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <DollarSign size={15} />
              </div>
            </div>
            <div className="space-y-1 mt-6">
              <span className="text-3xl font-black text-white tracking-tight block">$2.45B</span>
              <span className="text-[10px] text-slate-450 block font-light leading-snug">
                {language === 'EN' 
                  ? 'Representing fully diversified real property, healthcare centers, and clean utility grids.' 
                  : language === 'FR' 
                  ? 'Bâtiments écologiques de premier ordre, parcs éoliens et cliniques médicales d’excellence.' 
                  : 'Orinasa miompana amin’ny trano sy tany, famokarana herinaratra, ary fitsaboana.'}
              </span>
            </div>
          </div>

          <div className="glass hover:border-emerald-500/20 transition-all p-6 rounded-2xl text-left flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{translations.metricOffset}</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Leaf size={15} />
              </div>
            </div>
            <div className="space-y-1 mt-6">
              <span className="text-3xl font-black text-emerald-400 tracking-tight block">15.4M TONS</span>
              <span className="text-[10px] text-slate-450 block font-light leading-snug">
                {language === 'EN' 
                  ? 'Vetted environmental carbon offsets produced across North Sea arrays and circular logistic fleets.' 
                  : language === 'FR' 
                  ? 'Crédits d’évitement carbone réels via notre transition vers des opérations circulaires.' 
                  : 'Ny tati-pahafahana amin’ny fampihenana ny fako karbôna tontolo iainana ofisialy.'}
              </span>
            </div>
          </div>

          <div className="glass hover:border-emerald-500/20 transition-all p-6 rounded-2xl text-left flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{translations.metricSLA}</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <ShieldCheck size={15} />
              </div>
            </div>
            <div className="space-y-1 mt-6">
              <span className="text-3xl font-black text-white tracking-tight block">99.99%</span>
              <span className="text-[10px] text-slate-450 block font-light leading-snug">
                {language === 'EN' 
                  ? 'Uninterrupted power-gen and molecular diagnostic cloud servers uptime.' 
                  : language === 'FR' 
                  ? 'Disponibilité absolue garantie pour le réseau d’approvisionnement et diagnostics cloud.' 
                  : 'Fandaharana sy fahafaha-miasa tsy manam-pahataperana ho an’ny fitantanam-bola.'}
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Civic Capital Impact Simulator (Fascinating Premium Widget) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="portfolio-yield-calculator">
        <div className="glass rounded-3xl p-6 sm:p-10 text-left border border-slate-900 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <span className="font-mono text-[9px] text-emerald-400 tracking-widest uppercase border border-emerald-500/20 px-2.5 py-1 rounded-full bg-emerald-950/10 inline-flex items-center space-x-1.5">
                <Calculator size={11} />
                <span>INTERACTIVE SIMULATOR</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {translations.simulatorTitle}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                {translations.simulatorSub}
              </p>

              {/* Slider Input Block */}
              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-mono">{translations.allocationLabel}:</span>
                  <span className="text-emerald-400 font-bold font-mono text-sm bg-emerald-950/40 border border-emerald-500/20 px-3 py-1 rounded-lg">
                    ${simCapital}M USD
                  </span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="500" 
                  value={simCapital} 
                  onChange={(e) => setSimCapital(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-900 rounded-lg outline-none"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>$5M</span>
                  <span>$250M</span>
                  <span>$500M</span>
                </div>
              </div>
            </div>

            {/* Sim Outputs Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 lg:pl-8">
              
              <div className="bg-slate-950/70 border border-slate-900 p-4 rounded-xl flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider block">{translations.impactYield}</span>
                  <span className="text-base font-black text-white">+{simulatedYield}x Multiplier</span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-emerald-950/20 border border-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <TrendingUp size={14} />
                </div>
              </div>

              <div className="bg-slate-950/70 border border-slate-900 p-4 rounded-xl flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider block">{translations.co2Reduction}</span>
                  <span className="text-base font-black text-emerald-400">{simulatedCO2} Metric Tons</span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-emerald-950/20 border border-emerald-500/10 flex items-center justify-center text-emerald-300 shrink-0">
                  <Leaf size={14} />
                </div>
              </div>

              <div className="bg-slate-950/70 border border-slate-900 p-4 rounded-xl flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider block">{translations.efficiencyFactor}</span>
                  <span className="text-base font-black text-white">+{simulatedEfficiency}% Improvement</span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-emerald-950/20 border border-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <Zap size={14} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Filterable Asset Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="portfolio-interactive-grid">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-900 pb-4">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight text-left">
            {language === 'EN' ? 'Global Active Holdings Grid' : language === 'FR' ? 'Grille des Actifs Globaux Actifs' : 'Lisitry ny Orinasa miasa Manerantany'}
          </h2>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-500 font-mono text-[9px] tracking-widest uppercase flex items-center space-x-1 mr-2">
              <SlidersHorizontal size={11} />
              <span>{translations.filterLabel}:</span>
            </span>

            {(['ALL', 'HEALTH', 'RE', 'ENERGY', 'LOGISTICS'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-mono tracking-wide border transition-all cursor-pointer ${
                  activeFilter === filter 
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-bold' 
                    : 'text-slate-400 hover:text-slate-200 border-slate-900 hover:border-slate-800 bg-slate-950/40'
                }`}
              >
                {filter === 'ALL' ? (language === 'EN' ? 'ALL FIELDS' : language === 'FR' ? 'TOUS LES SECTEURS' : 'NY SEHATRA REHETRA') : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="glass card-hover rounded-2xl overflow-hidden group cursor-pointer flex flex-col justify-between h-[450px]"
              id={`portfolio-tile-${proj.id}`}
            >
              <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden border-b border-white/5">
                <img
                  src={`https://picsum.photos/seed/${proj.imageSeed}/800/450`}
                  alt={proj.title}
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent" />
                
                <div className="absolute top-4 left-4 bg-slate-950/80 border border-slate-800 backdrop-blur rounded-xl px-3 py-1 font-mono text-[9px] text-emerald-400 uppercase tracking-widest">
                  {proj.sector}
                </div>
              </div>

              <div className="p-6 text-left flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-1 text-slate-500 font-mono text-[10px]">
                    <MapPin size={10} className="text-slate-450" />
                    <span>{proj.location}</span>
                  </div>

                  <h3 className="text-white text-base sm:text-lg font-extrabold tracking-tight group-hover:text-emerald-400 transition-colors line-clamp-1 font-sans">
                    {proj.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed font-light line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                <div className="border-t border-slate-900 pt-3 flex items-center justify-between">
                  <div className="text-left">
                    <span className="block text-[8px] font-mono text-slate-550 uppercase tracking-widest">
                      Local Impact Metric
                    </span>
                    <span className="block text-xs font-mono font-bold text-emerald-400 uppercase">
                      {proj.metrics.value}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono font-bold text-slate-450 hover:text-white transition-colors flex items-center space-x-1">
                    <span>{translations.exploreBtn.split(' ')[0]}</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Case Study Overlay Dialog Container Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4 shadow-2xl" id="portfolio-detail-overlay">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="glass w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
            >
              
              {/* Header block with close btn */}
              <div className="p-6 border-b border-slate-900 flex justify-between items-center relative z-10 bg-slate-950/50 backdrop-blur-xl">
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-0.5">
                    {selectedProject.sector} • PORTFOLIO HOLDING CASE DIGEST
                  </span>
                  <h2 className="text-white font-extrabold text-base sm:text-xl font-sans line-clamp-1">
                    {selectedProject.title}
                  </h2>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-slate-900 rounded-lg transition-colors text-slate-400 hover:text-white cursor-pointer"
                  id="close-modal-btn"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable details */}
              <div className="p-6 sm:p-8 space-y-8 overflow-y-auto relative z-10 text-left flex-1">
                
                {/* Big banner image inside modal */}
                <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                  <img
                    src={`https://picsum.photos/seed/${selectedProject.imageSeed}/1200/500`}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Case details split */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  {/* Left stats & details side panel */}
                  <div className="space-y-6 md:border-r border-slate-900 md:pr-8">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">
                        Asset Location Coordinates
                      </span>
                      <div className="flex items-center space-x-1.5 text-xs text-white">
                        <MapPin size={12} className="text-emerald-400" />
                        <span>{selectedProject.location}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">
                        Verifiable Metric Value
                      </span>
                      <span className="text-sm font-mono font-bold text-emerald-400 uppercase block">
                        {selectedProject.metrics.value}
                      </span>
                      <span className="text-[10px] text-slate-450 block mt-0.5 leading-tight">
                        {selectedProject.metrics.label}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block border-b border-slate-900 pb-1.5">
                        {language === 'EN' ? 'Key Technical Highlights' : language === 'FR' ? 'Principaux Points Techniques' : 'Hevitra Niraisana Ara-teknika'}
                      </span>
                      
                      <ul className="space-y-1.5 text-slate-300 text-[11px] leading-relaxed">
                        {selectedProject.highlights.map((hlt, hIdx) => (
                          <li key={hIdx} className="flex items-start space-x-2">
                            <CheckCircle2 size={11} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span>{hlt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Right challenge/intervention story lines */}
                  <div className="md:col-span-2 space-y-6">
                    
                    <div className="space-y-2">
                      <h4 className="text-white text-xs font-bold tracking-wider uppercase border-l-2 border-rose-500 pl-2">
                        {translations.challengeLabel}
                      </h4>
                      <p className="text-slate-300 text-xs leading-relaxed font-light">
                        {selectedProject.caseStudy.challenge}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-white text-xs font-bold tracking-wider uppercase border-l-2 border-emerald-500 pl-2">
                        {translations.solutionLabel}
                      </h4>
                      <p className="text-slate-300 text-xs leading-relaxed font-light">
                        {selectedProject.caseStudy.solution}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-white text-xs font-bold tracking-wider uppercase border-l-2 border-teal-500 pl-2">
                        {translations.resultLabel}
                      </h4>
                      <p className="text-slate-300 text-xs leading-relaxed font-light">
                        {selectedProject.caseStudy.result}
                      </p>
                    </div>

                  </div>

                </div>

              </div>

              {/* Bottom control bar */}
              <div className="p-4 bg-slate-950 border-t border-slate-900 flex justify-end relative z-10">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 hover:bg-slate-800 text-slate-300 rounded-xl text-xs font-semibold tracking-wider transition-all border border-slate-800 active:scale-95 cursor-pointer"
                >
                  {translations.backBtn}
                </button>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
