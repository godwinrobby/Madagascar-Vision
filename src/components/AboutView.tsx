import { motion } from 'motion/react';
import { TimelineEvent, Leader } from '../types';
import { LEADERS, TIMELINE } from '../data/corporateData';
import { Target, Globe, Compass, Landmark, ShieldCheck, Zap, Sparkles, Leaf } from 'lucide-react';

interface AboutViewProps {
  language: 'EN' | 'DE' | 'JP';
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
      overviewDesc: 'Madagascar Vision represents a consolidated multi-sector investment syndicate structured to direct physical and digital utilities into carbon-neutral pathways. We anchor sovereign-grade infrastructure projects and deep tech integrations globally.',
      visionLabel: 'Institutional Mandate',
      visionText: 'Pioneering modular circularity and climate-aware systems at national level scale while ensuring compound asset expansion.',
      missionLabel: 'Operational Mission',
      missionText: 'To engineer robust pipelines matching critical civic utilities to automated intelligence grid vectors, creating resilient communities.'
    },
    DE: {
      teamTitle: 'Das Direktorium & Board-Partner',
      teamSub: 'Herausragende Sektorexperten, die staatliches Branchenwissen, technologische Spitzenforschung, Risiko-Compliance und Nachhaltigkeit vereinen.',
      valTitle: 'Die Säulen unserer Integrität',
      valSub: 'Jede Beteiligung, jeder Investitionsetat und jedes Projekt folgt unseren gemeinsamen operativen Leitlinien.',
      overviewTitle: 'Konzern-Historie & Kapitalstärke',
      overviewDesc: 'Madagascar Vision ist ein konsolidiertes Sektor-Syndikat zur Steuerung physischer und digitaler Infrastrukturen in CO2-neutrale Bahnen. Wir investieren weltweit in staatstragende Asset-Verbünde und Deep-Tech Implementationen.',
      visionLabel: 'Unsere Vision',
      visionText: 'Aufbau zirkulärer, klimaschutzkonformer Großstrukturen bei gleichzeitiger stabiler Wertschöpfung für institutionelle Partner.',
      missionLabel: 'Unsere Mission',
      missionText: 'Entwicklung robuster, automatisierter Netz-Korridore zur Verbindung kommunaler Daseinsvorsorge mit KI-optimierter Steuerung.'
    },
    JP: {
      teamTitle: '取締役会および共同パートナー',
      teamSub: '主要政府・公的機関との調整、科学技術・物理シミュレーション、リスク監査、環境ESGなどの卓越した知見を融合する経営陣です。',
      valTitle: '事業を支える基本価値基準',
      valSub: 'グループのすべての投資ポートフォリオ、企業統治、エンジニアリング計画は、この確立された指針を厳格に順守します。',
      overviewTitle: 'グループ設立と資本持株構造',
      overviewDesc: 'マダガスカル・ビジョンは、物理インフラと統合デジタルインフラの両面から、持続可能かつカーボンニュートラルな世界経済への移行を主導する、連結コングロマリットです。大規模インフラプロジェクトとAI・クラウド事業の両輪で堅牢な基盤を提供します。',
      visionLabel: '私たちのビジョン',
      visionText: '安全な資産価値の維持向上と並行して、ギガワット規模の再生エネルギーや完全循環型のインフラを各国政府レベルで実現。',
      missionLabel: 'ミッションステートメント',
      missionText: '高度に調整された都市・公共インフラにAIグリッドを注入し、何世代にもわたって安全で持続可能な生活コミュニティを創造する。'
    }
  }[language];

  const valuesEx = [
    {
      title: { EN: 'Uncompromising Integrity', DE: 'Kompromisslose Integrität', JP: '妥協のないコンプライアンス' },
      desc: { EN: 'Strict adherence to global ESG standards and fully auditable accounting ledger logs across all portfolios.', DE: 'Vollständige Prüfungspflichten und Einhaltung strenger internationaler Compliance- und ESG-Vorgaben.', JP: 'すべての投資ポートフォリオにおける、完全監査可能なESG開示とガバナンス管理の徹底。' },
      icon: ShieldCheck
    },
    {
      title: { EN: 'Incessant Innovation', DE: 'Bahnbrechende Innovation', JP: '継続的な研究テクノロジー' },
      desc: { EN: 'Over 14% of gross holding revenue reinvested in deep-water ocean energy, smart microgrids, and algorithmic diagnostic research.', DE: 'Investition von über 14% des Umsatzes in Meeresenergie, Microgrids und molekularmedizinische Diagnostik.', JP: '総売上比14%以上を先端医療、次世代グリッド、ディープパワー研究などのR&D研究に還元。' },
      icon: Zap
    },
    {
      title: { EN: 'Sovereign-Grade Excellence', DE: 'Souveräne Exzellenz', JP: '国家インフラ水準の品質' },
      desc: { EN: 'Providing reliable civic utility systems trusted by municipal governments and major central pension funds.', DE: 'Bereitstellung hochgradig resilienter, robuster Systeme für Kommunalbehörden und Pensionskassen.', JP: '地方自治体や大手機関投資家・年金基金から信頼される、高安全なインフラ設備を供給。' },
      icon: Landmark
    },
    {
      title: { EN: 'Circular Sustainability', DE: 'Zirkuläre Nachhaltigkeit', JP: '完全循環型の環境貢献' },
      desc: { EN: 'Engineering physical assets to adhere strictly to non-hazardous material recycling and zero-waste logistics patterns.', DE: 'Physische Projektierung nach strengsten Zero-Waste-Richtlinien und langlebiger Material-Rückgewinnung.', JP: '有害物質の完全不使用、建設資材のリサイクル等、サプライチェーン全体でゼロエミッションを徹底。' },
      icon: Leaf
    }
  ];

  return (
    <div id="about-us-view-wrapper" className="space-y-24 pb-12 relative animate-fade-in">
      
      {/* Page Header banner */}
      <section className="relative pt-32 pb-12 overflow-hidden text-center max-w-4xl mx-auto px-4" id="about-intro">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-950/20">
          {language === 'EN' ? 'THE COGNITIVE HOLDING' : language === 'DE' ? 'DAS INTEGRATIVE SYNDIKAT' : 'エーテリスの企業体制'}
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-4">
          {language === 'EN' ? 'Shaping Resilient Multi-Sector Platforms' : language === 'DE' ? 'Pionier neuer industrieller Synergien' : '持続可能な多角インフラの開拓'}
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
          <span className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase mt-4">AETHERIS TARGET v.2026</span>
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
          <span className="text-[10px] text-teal-400 font-mono tracking-widest uppercase mt-4">FIDUCIARY GOVERNANCE</span>
        </div>

      </section>

      {/* Corporate Journey Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="timeline-section">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            {language === 'EN' ? 'Integrated Group Journey' : language === 'DE' ? 'Meilensteine unserer Evolution' : 'コングリット連結開発・沿革'}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {language === 'EN' ? 'Strategic scaling benchmarks tracing group growth from a boutique asset advisory team to a unified global holdings partner.' : language === 'DE' ? 'Vom regionalen Beratungsverband zum global koordinierten Multi-Sektor-Mischkonzern.' : '持株会社としての創業から、先端医療・次世代グリッド等の統合分野を確立するまでの開発の軌跡。'}
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
                {language === 'EN' ? 'STEWARD ADVISORY' : language === 'DE' ? 'AUFSICHTSBEHÖRDE' : '信託・統治グループ'}
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
                      : language === 'DE' 
                      ? 'Zum vollen Direktorium und Ausschussbereich' 
                      : '役員紹介、経歴ログ、専門委員会へアクセス'}
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
                      src={`https://picsum.photos/seed/${lead.imageSeed}/100/100`} 
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
