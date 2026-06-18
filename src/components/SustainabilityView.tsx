import { useState } from 'react';
import { Leaf, Award, Recycle, ShieldCheck, HelpCircle, Users, Sparkles, Heart } from 'lucide-react';
import { Helmet } from './Helmet';

interface SustainabilityViewProps {
  language: 'EN' | 'FR' | 'MG';
}

export function SustainabilityView({ language }: SustainabilityViewProps) {
  const [activeGoal, setActiveGoal] = useState<number>(0);

  const translations = {
    EN: {
      title: 'Global ESG & Decarbonization Mandate',
      sub: 'Evaluating verified commitments and community welfare deployments steering Vision Madagascar operations to net absolute zero.',
      goalsTitle: 'Our Four ESG Milestones',
      goalsSub: 'Each sector targets quantifiable climate auditing benchmarks monitored and authenticated independently.',
      timelineTitle: 'Circular impact Roadmap',
      timelineDesc: 'Physical milestones ensuring sustainable supply structures across manufacturing casting and building assembly.'
    },
    FR: {
      title: 'Mandat ESG & Décarbonation Globale',
      sub: 'Évaluation des engagements vérifiés et des programmes communautaires orientant les opérations de Vision Madagascar vers le zéro absolu.',
      goalsTitle: 'Nos Quatre Objectifs ESG',
      goalsSub: 'Chaque secteur vise des indicateurs quantifiables de performance climatique audités de manière indépendante.',
      timelineTitle: 'Feuille de Route d’Impact Circulaire',
      timelineDesc: 'Grandes étapes physiques garantissant des réseaux de distribution durables dans l’immobilier et l’infrastructure.'
    },
    MG: {
      title: 'Andraikitra momba ny ESG sy ny Tontolo iainana',
      sub: 'Fandinihana ireo asa azo tsapain-tanana sy ireo fampiasam-bola ho an’ny vahoaka ataon’ny Vision Madagascar ho an’ny ho avy.',
      goalsTitle: 'Ny Tanjona efatra lehibe momba ny ESG',
      goalsSub: 'Ny rantsana tsirairay dia mametraka tondro tsara hodinihina mahakasika ny fiovan’ny toetr’andro.',
      timelineTitle: 'Ny Dingana mankany amin’ny fampandrosoana maharitra',
      timelineDesc: 'Ireo dingana lehibe hananganana fotodrafitrasa manaja ny tontolo iainana sy tsy misy fako.'
    }
  }[language];

  const esgGoals = [
    {
      title: { EN: 'Net Zero Carbon Output', FR: 'Émissions Carbone Net Zéro', MG: 'Tsy misy fako karbona indray' },
      targetYear: '2028',
      desc: { 
        EN: 'Eliminating incremental greenhouse emissions across internal transport trucks and clinic facilities by deploying localized green smart building loops.', 
        FR: 'Élimination des émissions de gaz à effet de serre dans nos transports et cliniques grâce aux énergies renouvelables et bâtiments intelligents.', 
        MG: 'Fanafoanana ny entona karbôna amin’ny alalan’ny fampiasana angovo madio sy avo lenta amin’ny fiara sy ny trano.' 
      },
      percent: 88,
      indicator: 'CO₂ REDUCTION',
      icon: Leaf
    },
    {
      title: { EN: 'Circularity & Zero-Waste Logistics', FR: 'Logistique Circulaire & Zéro Déchet', MG: 'Fitaterana sy fanatobiana entana madio' },
      targetYear: '2030',
      desc: { 
        EN: 'Requiring zero packaging landfill routing across logistics warehouses. Integrating full components reclamation protocols into casting designs.', 
        FR: 'Zéro déchet dans nos entrepôts de logistique. Intégration de protocoles de valorisation complète des composants dès la conception.', 
        MG: 'Fanafoanana ny fako tontolo iainana amin’ny fampiasana fitaovana azo averina volavolaina any amin’ny trano fitehirizana.' 
      },
      percent: 74,
      indicator: 'MATERIAL CIRCULITY',
      icon: Recycle
    },
    {
      title: { EN: 'Sovereign Community Trust', FR: 'Confiance Communautaire Souveraine', MG: 'Fitokisana sy Fiaraha-monina' },
      targetYear: 'Continuous',
      desc: { 
        EN: 'Directing 1.8% of net group earnings directly into public educational research partnerships and medical scholarship funds.', 
        FR: 'Reversement de 1,8% des bénéfices du groupe directement dans les partenariats de recherche académique et bourses d’études médicales.', 
        MG: 'Mampiasa ny 1.8% amin’ny tombom-barotry ny vondrona ho an’ny fampianarana sy fahasalamam-bahoaka.' 
      },
      percent: 95,
      indicator: 'COMMUNITY RETENTION',
      icon: Heart
    },
    {
      title: { EN: 'Fiduciary Compliance Index', FR: 'Indice de Conformité Fiduciaire', MG: 'Compliance sy Governance azo antoka' },
      targetYear: 'Continuous',
      desc: { 
        EN: '100% auditable accounting and operational ledgers verified by world-leading institutional green-audit firms twice yearly.', 
        FR: 'Comptabilité certifiée et registres opérationnels vérifiés deux fois par an par des cabinets d’audit indépendants de premier plan.', 
        MG: 'Ny fitantanana sy ny asa rehetra dia lanjain’ny sampan-draharaha mpanamari-panjakana tsy miankina indroa isan-taona.' 
      },
      percent: 100,
      indicator: 'GOVERNANCE COMPLIANCE',
      icon: ShieldCheck
    }
  ];

  const sustainabilityTimeline = [
    { 
      year: '2024', 
      title: { EN: 'Asset Fleet Electrification', FR: 'Électrification de la Flotte d’Actifs', MG: 'Fampiasana fiara mandeha herinaratra' }, 
      text: { 
        EN: 'Acquisition of heavy electric shuttle trucks for our freight and transport routes.', 
        FR: 'Acquisition de camions de fret électriques lourds pour nos réseaux de distribution régionaux.', 
        MG: 'Fividianana fiara lehibe mandeha herinaratra mampihena ny entona karbôna amin’ny fitaterana entana.' 
      } 
    },
    { 
      year: '2026', 
      title: { EN: 'Gen-3 Smart Hospital Systems', FR: 'Systèmes d’Hôpitaux Intelligents Gen-3', MG: 'Hopitaly manan-tsaina sokajy faha-3' }, 
      text: { 
        EN: 'Opening zero-landfill tertiary care clinics featuring local smart-grid micro-turbines.', 
        FR: 'Ouverture de cliniques de soins tertiaires zéro déchet dotées de micro-turbines électriques locales de nouvelle génération.', 
        MG: 'Fananganana hopitaly tsy misy fako sy mamokatra angovo mahavelona ho azy ho an’ny fahasalaman’ny daholobe.' 
      } 
    },
    { 
      year: '2028', 
      title: { EN: 'Aggregated Grid Decarbonization', FR: 'Décarbonation Globale du Réseau', MG: 'Fandiovana ny tambajotra herinaratra' }, 
      text: { 
        EN: 'Transition of all our industrial manufacturing sites to direct green power.', 
        FR: 'Transition de nos sites de production industrielle vers des réseaux d’énergie 100% verte issus du solaire et de l’éolien.', 
        MG: 'Ny fanodinana ny herinaratra ho amin’ny angovo madio sy maharitra amin’ireo trano famokarana rehetra.' 
      } 
    }
  ];

  return (
    <div id="sustainability-view-wrapper" className="space-y-16 pb-12 relative animate-fade-in">
      <Helmet
        title={language === 'EN' ? 'Sustainability & Global ESG Mandate' : language === 'FR' ? 'Durabilité & Mandat ESG Global' : 'Fandrosoana Maharitra sy ESG'}
        description={translations.sub}
        keywords="decarbonization mandate, circular roadmap, climate audit, community welfare, Vision Madagascar ESG, Aetheris Group environment"
        language={language}
      />
      
      {/* 1. Introductory block */}
      <section className="relative pt-32 pb-8 overflow-hidden text-center max-w-4xl mx-auto px-4" id="sustainability-intro">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-950/20">
          {language === 'EN' ? 'THE ESG ACCOUNTABILITY SYSTEM' : language === 'FR' ? 'LE SYSTÈME DE RESPONSABILITÉ ESG' : 'NY SEHATRA ARA-PANJAKANA ESG'}
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-4">
          {translations.title}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl mx-auto">
          {translations.sub}
        </p>
      </section>

      {/* 2. Interactive ESG goals displaying circular progress approximations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" id="esg-goals-interactive">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {translations.goalsTitle}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {translations.goalsSub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: goal buttons clickable */}
          <div className="lg:col-span-5 space-y-4">
            {esgGoals.map((g, idx) => (
              <button
                key={idx}
                onClick={() => setActiveGoal(idx)}
                className={`w-full text-left p-5 rounded-2xl border transition-all flex items-center justify-between ${
                  activeGoal === idx 
                    ? 'bg-slate-900 border-emerald-500/30 text-emerald-400 font-bold shadow-md shadow-emerald-500/5' 
                    : 'bg-slate-950/40 border-slate-900 text-slate-300 hover:text-white hover:bg-slate-900/60'
                }`}
                id={`esg-goal-btn-${idx}`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                    activeGoal === idx ? 'bg-emerald-500/10 border-emerald-400 text-emerald-400' : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}>
                    <g.icon size={15} />
                  </div>
                  <span className="text-xs sm:text-sm tracking-tight">
                    {g.title[language]}
                  </span>
                </div>
                <span className="font-mono text-xs font-black">
                  {g.percent}%
                </span>
              </button>
            ))}
          </div>

          {/* Right panel: Expanded circular detail dashboard visualization */}
          <div className="lg:col-span-7">
            <div className="glass rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 text-left" id="esg-goals-panel">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

              {/* Progress visual mock - gorgeous ring using SVG */}
              <div className="relative flex-shrink-0">
                <svg className="w-36 h-36 transform -rotate-90">
                  {/* Background track circle */}
                  <circle
                    cx="72"
                    cy="72"
                    r="62"
                    className="stroke-[#0f172a] fill-none"
                    strokeWidth="10"
                  />
                  {/* Foreground progress circle */}
                  <circle
                    cx="72"
                    cy="72"
                    r="62"
                    className="stroke-emerald-400 fill-none transition-all duration-1000"
                    strokeWidth="10"
                    strokeDasharray={2 * Math.PI * 62}
                    strokeDashoffset={2 * Math.PI * 62 * (1 - esgGoals[activeGoal].percent / 100)}
                    strokeLinecap="round"
                    style={{ strokeShadow: '0 0 10px rgba(52, 211, 153, 0.5)' }}
                  />
                </svg>

                {/* Internal percentage text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-white text-3xl font-black tracking-tight leading-none">
                    {esgGoals[activeGoal].percent}%
                  </span>
                  <span className="text-[9px] font-mono font-bold text-slate-500 tracking-wider mt-1 uppercase">
                    {esgGoals[activeGoal].indicator}
                  </span>
                </div>
              </div>

              {/* Text explanation */}
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block">
                    TARGET DEADLINE YEAR • {esgGoals[activeGoal].targetYear}
                  </span>
                  <h3 className="text-white font-extrabold text-base sm:text-lg font-sans mt-0.5">
                    {esgGoals[activeGoal].title[language]}
                  </h3>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  {esgGoals[activeGoal].desc[language]}
                </p>

                <div className="pt-2 border-t border-slate-900 text-[10px] font-mono text-slate-500 flex justify-between">
                  <span>UN-SDG INDEX METRIC</span>
                  <span>VERIFIED LOGS v.2026</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. Circular impact Roadmap Timeline graphics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-6 border-t border-slate-900" id="sustainability-roadmap">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {translations.timelineTitle}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {translations.timelineDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sustainabilityTimeline.map((item, idx) => (
            <div 
              key={idx} 
              className="glass card-hover rounded-2xl p-6 space-y-3 relative overflow-hidden text-left"
              id={`sustainability-step-${idx}`}
            >
              <div className="absolute top-0 right-0 p-3 text-emerald-500/10 font-bold text-6xl font-mono select-none leading-none">
                {item.year}
              </div>

              <span className="font-mono text-[9px] text-emerald-400 font-bold bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {language === 'EN' ? 'STAGE' : language === 'FR' ? 'ÉTAPE' : 'DINGANA'} {idx + 1}
              </span>

              <h4 className="text-white text-base font-bold font-sans mt-2">
                {item.title[language]}
              </h4>

              <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                {item.text[language]}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
