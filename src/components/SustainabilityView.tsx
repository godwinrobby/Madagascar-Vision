import { useState } from 'react';
import { Leaf, Award, Recycle, ShieldCheck, HelpCircle, Users, Sparkles, Heart } from 'lucide-react';

interface SustainabilityViewProps {
  language: 'EN' | 'DE' | 'JP';
}

export function SustainabilityView({ language }: SustainabilityViewProps) {
  const [activeGoal, setActiveGoal] = useState<number>(0);

  const translations = {
    EN: {
      title: 'Global ESG & Decarbonization Mandate',
      sub: 'Evaluating verified commitments and community welfare deployments steering aetheris operations to net absolute zero.',
      goalsTitle: 'Our Four ESG Milestones',
      goalsSub: 'Each sector targets quantifiable climate auditing benchmarks monitored and authenticated independently.',
      timelineTitle: 'Circular impact Roadmap',
      timelineDesc: 'Physical milestones ensuring sustainable supply structures across manufacturing casting and building assembly.'
    },
    DE: {
      title: 'ESG & Dekarbonisierungs-Mandat',
      sub: 'Überprüfbare Umweltverpflichtungen und kommunale Förderprogramme zur Verwirklichung einer echten Kreislaufwirtschaft.',
      goalsTitle: 'Unsere vier ESG-Kernziele',
      goalsSub: 'Sämtliche Bereiche unterliegen quantifizierbaren Prüfungsstandards, die durch unabhängige Auditoren zertifiziert werden.',
      timelineTitle: 'Fahrplan der Kreislaufwirtschaft',
      timelineDesc: 'Zirkuläre Zwischenschritte zur Etablierung langlebiger Material-Rückgewinnungen in Fertigung und Bau.'
    },
    JP: {
      title: 'ESG・環境デカルボナーレ（脱炭素）憲章',
      sub: '持続可能性を高め、社会的インフラとしての責任を果たすための当社の環境監査と取り組みロードマップ。',
      goalsTitle: 'エーテリスの最重要ESG4箇条',
      goalsSub: 'コングロマリットを構成する全事業セクターは、第三者機関による独立監査付きの定量炭素目標を設定しています。',
      timelineTitle: '完全循環型社会への移行計画',
      timelineDesc: '精密製造鋳造やインフラ資材組立など、すべての物理レイヤーにおけるCO2削減とゼロマテリアルの変遷。'
    }
  }[language];

  const esgGoals = [
    {
      title: { EN: 'Net Zero Carbon Output', DE: 'Net-Zero CO₂-Ausstoß', JP: '実質排出炭素ゼロ (Net Zero)' },
      targetYear: '2028',
      desc: { EN: 'Eliminating incremental greenhouse emissions across internal transport trucks and clinic facilities by deploying localized green smart building loops.', DE: 'Vollständige Vermeidung von Kohlendioxid in unserem Logistik-Lkw-Netz und Klinik-Verbünden durch autarke Solarglasscheiben.', JP: '物流EVトラック網、および診断用病院棟へのスマート太陽光ガラス等の導入により、排出される温室効果ガスの完全削減を前倒しで達成します。' },
      percent: 88,
      indicator: 'CO₂ REDUCTION',
      icon: Leaf
    },
    {
      title: { EN: 'Circularity & Zero-Waste Logistics', DE: '100% zirkuläre Logistik', JP: '循環型マテリアル・物流' },
      targetYear: '2030',
      desc: { EN: 'Requiring zero packaging landfill routing across logistics warehouses. Integrating full components reclamation protocols into casting designs.', DE: 'Vermeidung jeglichen Mülls in unseren Lagern. Wiederverwertbare Materialkonzepte bereits in der frühen Prototypen-Phase.', JP: 'すべてのロジスティクス倉庫において埋め立て廃棄物の発生をゼロへ。材料開発の初期設計段階に部品リサイクルスキームを取り込み。' },
      percent: 74,
      indicator: 'MATERIAL CIRCULITY',
      icon: Recycle
    },
    {
      title: { EN: 'Sovereign Community Trust', DE: 'Regionale Gemeindeförderung', JP: '地域社会の厚生・公益性' },
      targetYear: 'Continuous',
      desc: { EN: 'Directing 1.8% of net group earnings directly into public educational research partnerships and medical scholarship funds.', DE: 'Direkte Rückführung von 1,8% des Konzernüberschusses in akademische Forschungsprogramme und klinische Stipendien.', JP: 'グループ純利益の1.8%を地域教育プログラム支援、および公衆衛生医療を志す大学研究チームへの資金援助として分配しています。' },
      percent: 95,
      indicator: 'COMMUNITY RETENTION',
      icon: Heart
    },
    {
      title: { EN: 'Fiduciary Compliance Index', DE: 'Ausnahmslose Governance', JP: 'コンプライアンス適合指数' },
      targetYear: 'Continuous',
      desc: { EN: '100% auditable accounting and operational ledgers verified by world-leading institutional green-audit firms twice yearly.', DE: 'Halbjährliche Überprüfung aller Finanz- und CO₂-Ströme durch unabhängige externe Top-Wirtschaftsprüfungsgesellschaften.', JP: '大手第三者環境監査法人による、年2回にわたる財務データ・持続性環境スコアリングの完全査定。' },
      percent: 100,
      indicator: 'GOVERNANCE COMPLIANCE',
      icon: ShieldCheck
    }
  ];

  const sustainabilityTimeline = [
    { year: '2024', title: { EN: 'Asset Fleet Electrification', DE: 'Elektrifizierung des Logistikparks', JP: 'ロジスティクス輸送隊のEV化' }, text: { EN: 'Acquisition of heavy electric shuttle trucks for our German and Japanese freight routes.', DE: 'Erfolgreicher Kauf und Einsatz schwerer E-Schwertransport-Lkw für ausgewählte Strecken.', JP: 'ドイツ・日本圏内の主要港湾・幹線輸送ルートへの大型EVトラック先行配備。' } },
    { year: '2026', title: { EN: 'Gen-3 Smart Hospital Systems', DE: 'Generationswechsel in Hospitalnetzen', JP: '第三世代スマートホスピタルの構築' }, text: { EN: 'Opening zero-landfill tertiary care clinics featuring local smart-grid micro-turbines.', DE: 'Eröffnung CO₂-neutraler medizinischer Zentren mit integrierten Kraft-Wärme-Kopplungen.', JP: '微小ソーラーや燃料電池バッテリー、ゼロエミッション廃棄手順を統合した病院の配備完了。' } },
    { year: '2028', title: { EN: 'Aggregated Grid Decarbonization', DE: 'Sektor-Dezentralisierung Netze', JP: '統合AI電力網の最適化' }, text: { EN: 'Transition of all our industrial manufacturing sites to direct high-voltage offshore green power.', DE: 'Vollständige Autarkie aller großen Produktionsstätten durch direkte Hochspannungs-Offshore-Windenergie.', JP: '主要な部品生産施設の全動作電源を、海底・洋上の大型風力発電アセットから直接共有。' } }
  ];

  return (
    <div id="sustainability-view-wrapper" className="space-y-16 pb-12 relative animate-fade-in">
      
      {/* 1. Introductory block */}
      <section className="relative pt-32 pb-8 overflow-hidden text-center max-w-4xl mx-auto px-4" id="sustainability-intro">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-950/20">
          {language === 'EN' ? 'THE ESG ACCOUNTABILITY SYSTEM' : language === 'DE' ? 'UNSERE ESG-VERANTWORTUNG' : 'ESG・環境ガバナンス'}
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
                {language === 'EN' ? 'STAGE' : language === 'DE' ? 'ETAPPE' : '段階'} {idx + 1}
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
