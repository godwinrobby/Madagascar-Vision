import { motion } from 'motion/react';
import { TimelineEvent, Leader } from '../types';
import { LEADERS, TIMELINE } from '../data/corporateData';
import { Target, Globe, Compass, Landmark, ShieldCheck, Zap, Sparkles, Leaf } from 'lucide-react';

interface AboutViewProps {
  language: 'EN' | 'FR' | 'MG';
  setActiveTab?: (tab: string) => void;
}

export function AboutView({ language, setActiveTab }: AboutViewProps) {
  
  const translations = {
    EN: {
      teamTitle: 'The Board & Managing Partners',
      teamSub: 'Distinguished cross-sector leaders blending institutional sovereign expertise, technological physics, risk frameworks, and sustainability portfolios.',
      valTitle: 'The Anchors of Our Operations',
      valSub: 'Every holding, investment track, and engineering project adheres to our unified fiduciary values.',
      overviewTitle: 'Group Foundation & Capital Base',
      overviewDesc: 'Vision Madagascar represents a consolidated multi-sector investment syndicate structured to direct physical and digital utilities into carbon-neutral pathways. We anchor sovereign-grade infrastructure projects and deep tech integrations globally.',
      visionLabel: 'Institutional Mandate',
      visionText: 'Pioneering modular circularity and climate-aware systems at national level scale while ensuring compound asset expansion.',
      missionLabel: 'Operational Mission',
      missionText: 'To engineer robust pipelines matching critical civic utilities to automated intelligence grid vectors, creating resilient communities.'
    },
    FR: {
      teamTitle: 'Le Conseil d’Administration & Associés',
      teamSub: 'Chefs de file intersectoriels de premier plan associant expertise souveraine institutionnelle, physique technologique, cadres de gestion des risques et portefeuilles de durabilité.',
      valTitle: 'Les Piliers de nos Opérations',
      valSub: 'Chaque participation, budget d’investissement et projet d’ingénierie adhère à nos valeurs fiduciaires unifiées.',
      overviewTitle: 'Fondation du Groupe & Structure du Capital',
      overviewDesc: 'Vision Madagascar représente un syndicat d’investissement multisectoriel consolidé, structuré pour orienter les services physiques et numériques vers des trajectoires neutres en carbone. Nous ancrons des projets d’infrastructure de niveau souverain et des intégrations technologiques profondes au niveau mondial.',
      visionLabel: 'Mandat Institutionnel',
      visionText: 'Pionnier de la circularité modulaire et des systèmes respectueux du climat à l’échelle nationale tout en assurant l’expansion continue des actifs.',
      missionLabel: 'Mission Opérationnelle',
      missionText: 'Concevoir des infrastructures robustes reliant les services publics essentiels à des vecteurs de réseaux intelligents automatisés, créant ainsi des communautés résilientes.'
    },
    MG: {
      teamTitle: 'Mpitantana sy ny Mpiara-miombon’antoka',
      teamSub: 'Ireo mpitarika miavaka mampifandray ny traikefa ara-panjakana, ny fampandrosoana ara-teknolojia, ary ny fahaizana miatrika olana sy ny fandrosoana maharitra.',
      valTitle: 'Fototry ny Asa Atolotray',
      valSub: 'Ny fampiasam-bola, ny tetikasa, ary ny drafitra rehetra dia manaraka ny soatoavina iraisana voamarina.',
      overviewTitle: 'Fototry ny Vondrona sy Renivola',
      overviewDesc: 'Vision Madagascar dia fikambanana mampiasa vola amin’ny sehatra maro mba hitondrana ny fotodrafitrasa ara-batana sy ara-nomerika ho amin’ny lalana madio tsy hisy karbona. Manorina fotodrafitrasa avo lenta sy teknolojia arifomba ho an’ny firenena izahay.',
      visionLabel: 'Tanjona Iraisana',
      visionText: 'Mamorona rafitra maharitra mitsinjo ny tontolo iainana eo amin’ny sehatra nasionaly nefa mampitombo ny tombom-barotry ny fiaraha-miasa.',
      missionLabel: 'Iraka Atoron’asa',
      missionText: 'Manorina fotodrafitrasa azo antoka mampifandray ny filan’ny vahoaka amin’ny tambajotra manan-tsaina sy mandeha ho azy, mba hananganana fiaraha-monina matanjaka.'
    }
  }[language];

  const valuesEx = [
    {
      title: { EN: 'Uncompromising Integrity', FR: 'Intégrité Sans Compromis', MG: 'Fahamendrehana Tsy Mivadika' },
      desc: { EN: 'Strict adherence to global ESG standards and fully auditable accounting ledger logs across all portfolios.', FR: 'Respect strict des normes ESG mondiales et registres comptables entièrement vérifiables dans tous les portefeuilles.', MG: 'Fanajana hentitra ny fenitra ESG manerantany sy ny fitantanam-bola azo hamarinina amin’ny tetikasa rehetra.' },
      icon: ShieldCheck
    },
    {
      title: { EN: 'Incessant Innovation', FR: 'Innovation Continuelle', MG: 'Fikarohana sy Fandrosoana' },
      desc: { EN: 'Over 14% of gross holding revenue reinvested in deep-water ocean energy, smart microgrids, and algorithmic diagnostic research.', FR: 'Plus de 14 % des revenus bruts réinvestis dans l’énergie océanique profonde, les micro-réseaux intelligents et la recherche diagnostique.', MG: 'Mampiasa vola maherin’ny 14% amin’ny fidiram-bola amin’ny angovo an-dranomasina, tambajotra kely, ary fitiliana arifomba.' },
      icon: Zap
    },
    {
      title: { EN: 'Sovereign-Grade Excellence', FR: 'Excellence de Niveau Souverain', MG: 'Fahaiza-manao Ambony' },
      desc: { EN: 'Providing reliable civic utility systems trusted by municipal governments and major central pension funds.', FR: 'Fourniture de services collectifs fiables soutenus par les gouvernements municipaux et les caisses de retraite.', MG: 'Fanomezana fitaovana ho an’ny daholobe izay atokisan’ny governemanta sy ny tahirim-bola lehibe.' },
      icon: Landmark
    },
    {
      title: { EN: 'Circular Sustainability', FR: 'Durabilité Circulaire', MG: 'Fandrosoana Maharitra' },
      desc: { EN: 'Engineering physical assets to adhere strictly to non-hazardous material recycling and zero-waste logistics patterns.', FR: 'Conception d’actifs physiques respectant strictement le recyclage des matériaux non dangereux et le zéro déchet.', MG: 'Famoronana fotodrafitrasa mitsitsy fitaovana sy tsy misy fako tontolo iainana.' },
      icon: Leaf
    }
  ];

  return (
    <div id="about-us-view-wrapper" className="space-y-24 pb-12 relative animate-fade-in">
      
      {/* Page Header banner */}
      <section className="relative pt-32 pb-12 overflow-hidden text-center max-w-4xl mx-auto px-4" id="about-intro">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-950/20">
          {language === 'EN' ? 'THE COGNITIVE HOLDING' : language === 'FR' ? 'LE HOLDING COGNITIF' : 'NY HOLDING ARA-TSAINA'}
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-4">
          {language === 'EN' ? 'Shaping Resilient Multi-Sector Platforms' : language === 'FR' ? 'Façonner des Plateformes Multisectorielles Résilientes' : 'Manorina Rafitra Sehatra Maro Mafy sy Maharitra'}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl mx-auto">
          {translations.overviewDesc}
        </p>
      </section>

      {/* Corporate Mission & Vision Split Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8" id="mission-vision-section">
        
        <div className="glass card-hover rounded-2xl p-8 flex flex-col justify-between h-[250px] relative overflow-hidden group text-left">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
              <Compass size={18} />
            </div>
            <h3 className="text-white font-bold text-lg font-sans">
              {translations.visionLabel}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              {translations.visionText}
            </p>
          </div>
          <span className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase mt-4">VISION TARGET v.2026</span>
        </div>

        <div className="glass card-hover rounded-2xl p-8 flex flex-col justify-between h-[250px] relative overflow-hidden group text-left">
          <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full blur-xl pointer-events-none" />
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400">
              <Target size={18} />
            </div>
            <h3 className="text-white font-bold text-lg font-sans">
              {translations.missionLabel}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              {translations.missionText}
            </p>
          </div>
          <span className="text-[10px] text-teal-400 font-mono tracking-widest uppercase mt-4">FIDOCIARY GOVERNANCE</span>
        </div>

      </section>

      {/* Corporate Journey Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="timeline-section">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            {language === 'EN' ? 'Integrated Group Journey' : language === 'FR' ? 'Évolution de la Holding' : 'Zotran’ny Fampandrosoana Iraisana'}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {language === 'EN' ? 'Strategic scaling benchmarks tracing group growth from a boutique asset advisory team to a unified global holdings partner.' : language === 'FR' ? 'Repères de croissance stratégique traçant le développement du groupe d’une équipe de conseil en actifs en un partenaire d’investissement unifié.' : 'Ny dingana lehibe nandalovan’ny vondrona hatramin’ny nanombohana sy ny fampiasam-bola ho an’ny ho avy.'}
          </p>
        </div>

        {/* Timelines grid */}
        <div className="relative border-l border-slate-850 ml-4 md:ml-32 md:space-y-0 space-y-8" id="timeline-track">
          {TIMELINE.map((evt, idx) => (
            <div key={idx} className="relative pl-8 md:pl-24 pb-8 group text-left" id={`timeline-evt-${idx}`}>
              
              {/* Year badge display on left */}
              <div className="absolute left-[-17px] md:left-[-130px] top-1.5 md:w-28 text-left">
                <span className="px-3 py-1 font-mono text-xs font-black text-emerald-400 bg-slate-900 border border-slate-800 rounded-lg shadow-md group-hover:border-emerald-500 transition-colors">
                  {evt.year}
                </span>
              </div>

              {/* Point dot icon */}
              <div className="absolute left-[-5px] top-2.5 w-2.5 h-2.5 rounded-full bg-emerald-400 group-hover:scale-150 transition-transform shadow-lg shadow-emerald-400/40" />

              <div className="glass card-hover rounded-2xl p-6 max-w-3xl">
                <h4 className="text-white text-base font-bold font-sans">
                  {evt.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mt-1.5 font-light">
                  {evt.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Leadership Preview with CTA link to Full Leadership Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" id="leadership-section">
        <div className="glass rounded-3xl p-8 sm:p-12 text-left relative overflow-hidden shadow-xl border border-slate-900">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <span className="font-mono text-[10px] text-emerald-400 tracking-widest uppercase border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-950/20 inline-block">
                {language === 'EN' ? 'STEWARD ADVISORY' : language === 'FR' ? 'CONSEIL FIDUCIAIRE' : 'FITANTONAN’NY MPIARAHA-MIOMBON’ANTOKA'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                {translations.teamTitle}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                {translations.teamSub}
              </p>
              
              <div className="pt-2 text-left">
                <button
                  onClick={() => {
                    setActiveTab?.('leadership');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl text-xs sm:text-sm tracking-wide transition-all shadow-xl shadow-emerald-600/20 inline-flex items-center space-x-2 active:scale-98 cursor-pointer"
                >
                  <span>
                    {language === 'EN' 
                      ? 'Access Corporate Leadership Portfolios' 
                      : language === 'FR' 
                      ? 'Accéder au Conseil d’Administration' 
                      : 'Hijery ny mombamomba ny Mpitantana'}
                  </span>
                  <Sparkles size={14} className="animate-pulse" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {LEADERS.map((lead) => (
                <div 
                  key={lead.id} 
                  onClick={() => {
                    setActiveTab?.('leadership');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-slate-950/65 border border-slate-900 hover:border-emerald-500/30 p-4 rounded-xl text-left cursor-pointer transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-900 border border-white/5 mb-3">
                    <img 
                      src={lead.imageUrl || `https://picsum.photos/seed/${lead.imageSeed}/100/100`} 
                      alt={lead.name}
                      className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h4 className="text-white text-xs font-bold leading-tight font-sans group-hover:text-emerald-400 transition-colors">
                    {lead.name}
                  </h4>
                  <span className="text-[9px] text-slate-500 font-mono tracking-wider block mt-1 uppercase truncate">
                    {lead.role}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-8 border-t border-slate-900" id="values-section">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            {translations.valTitle}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {translations.valSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesEx.map((val, idx) => (
            <div 
              key={idx} 
              className="glass card-hover rounded-2xl p-6 text-left"
              id={`corporate-value-${idx}`}
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 mb-4">
                <val.icon size={18} />
              </div>
              
              <h3 className="text-white text-sm font-extrabold tracking-tight mb-2 font-sans">
                {val.title[language]}
              </h3>
              
              <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                {val.desc[language]}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
