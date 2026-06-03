import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  BookOpen, 
  Shield, 
  MessageSquare, 
  ChevronRight, 
  Sparkles, 
  Users, 
  TrendingUp, 
  Scale, 
  Cpu, 
  Leaf, 
  Mail, 
  ArrowUpRight 
} from 'lucide-react';
import { LEADERS } from '../data/corporateData';

interface LeadershipViewProps {
  language: 'EN' | 'DE' | 'JP';
}

export function LeadershipView({ language }: LeadershipViewProps) {
  const [selectedLeaderId, setSelectedLeaderId] = useState<string>('lead-1');
  const [activeTab, setActiveTab] = useState<'ceo-message' | 'board' | 'committees' | 'philosophy'>('board');
  const [expandedQa, setExpandedQa] = useState<number | null>(null);

  const translations = {
    EN: {
      title: 'Our Executive Stewardship',
      sub: 'Governing portfolios of integrated physical and algorithmic systems. Madagascar Vision aligns supreme compliance benchmarks to sovereign-scale sustainability mandates.',
      ceoTitle: 'Office of the CEO',
      ceoMessageTitle: 'Fiduciary Duty in a Complex World',
      ceoSub: 'A Message from our Chief Executive officer, Helena Vance-Sterling.',
      comTitle: 'Board Committees & Governance',
      comSub: 'Bespoke oversight mechanisms enforcing audit protocols and risk intelligence.',
      philTitle: 'Leadership Philosophy & Q&A',
      philSub: 'Engaging real-world strategies for multi-generational asset deployment.',
      contactBoard: 'Institutional Hotline',
      contactBoardSub: 'Establish secure communications with the Office of the Secretariat.',
      sendSecBtn: 'Initiate Board Liaison Protokoll',
      successMsg: 'Cryptographic liaison handshakes committed. Our corporate secretary will respond within 24 hours.',
      readFull: 'Verify Executive Bio Logs'
    },
    DE: {
      title: 'Unser Aufsichtsorgan & Direktorium',
      sub: 'Verwaltung komplexer technologischer und realer Portfolios. Madagascar Vision verbindet höchste Fiduciary-Standards mit staatlichen Nachhaltigkeitszielen.',
      ceoTitle: 'Büro der Geschäftsführung',
      ceoMessageTitle: 'Treuhandpflicht in einer komplexen Welt',
      ceoSub: 'Eine Botschaft unserer Chief Executive Officer, Helena Vance-Sterling.',
      comTitle: 'Ausschüsse & Governance-Strukturen',
      comSub: 'Spezifische Kontrollgremien für regulatorische Prüfungsprozesse und Risikointelligenz.',
      philTitle: 'Führungsphilosophie & Dialog',
      philSub: 'Strategische Antworten auf existenzielle Fragen der globalen Realwirtschaft.',
      contactBoard: 'Aufsichtsrat-Direktverbindung',
      contactBoardSub: 'Sichere Übertragung geschäftskritischer Anträge an das Generalsekretariat.',
      sendSecBtn: 'Vorstandsverbindung herstellen',
      successMsg: 'Verbindungsprotokoll erfolgreich registriert. Die Kanzlei des Vorstands wird sich zeitnah melden.',
      readFull: 'Exekutiven Werdegang prüfen'
    },
    JP: {
      title: '経営陣・ガバナンス体制',
      sub: '物理設計とデジタル・AIアルゴリズムを統括する経営。マダガスカル・ビジョンは、最高水準の監査基準と国家レベルのESGコミットメントを実現します。',
      ceoTitle: 'CEO オフィス公式メッセージ',
      ceoMessageTitle: '複雑化するグローバル市場での信託責任',
      ceoSub: '最高経営責任者 ヘレナ・ヴァンス＝スターリングからのメッセージ。',
      comTitle: 'ガバナンス専門委員会',
      comSub: '厳格なデューデリジェンスを実行し、企業倫理とリスク管理を高度化する専任組織。',
      philTitle: '経営哲学 ＆ エグゼクティブ対話',
      philSub: '何世代にもわたる産業インフラ・資産運用のための戦略的指針。',
      contactBoard: '機関・評議会 統合窓口',
      contactBoardSub: '取締役会事務局に対する信託暗号化ラインを開設します。',
      sendSecBtn: '公式リエゾン・プロトコルを起動',
      successMsg: 'セキュアな暗号接続が記録されました。事務局より速やかにご連絡いたします。',
      readFull: '公式経歴・認証ログを確認する'
    }
  }[language];

  // Rich leader data to augment background info
  const leaderDetails: Record<string, { 
    education: { EN: string; DE: string; JP: string };
    history: { EN: string; DE: string; JP: string }[];
    credentials: string[];
    focus: { EN: string; DE: string; JP: string };
  }> = {
    'lead-1': {
      education: {
        EN: 'M.S. in Civil Infrastructures (ETH Zurich), MBA in Finance (Oxford University)',
        DE: 'M.S. in Zivilinfrastrukturen (ETH Zürich), MBA in Finance (Oxford University)',
        JP: 'スイス連邦工科大学(ETHチューリッヒ) 土木インフラ修士、オックスフォード大学 財務MBA'
      },
      history: [
        { 
          EN: 'Supervised $12B greenfield harbor master installations in Southeast Asia.', 
          DE: 'Leitete 12-Mrd.-USD Greenfield-Hafenprojekte in Südostasien.', 
          JP: '東南アジアにおける120億ドル規模の港湾スマートハブ新設を統治。' 
        },
        { 
          EN: 'Appointed Strategic Infrastructure Advisor to Eurozone Sovereign Funds.', 
          DE: 'Ernennung zum strategischen Berater für Eurozonen-Staatsfonds.', 
          JP: 'ユーロ圏の政府系投資ファンド・インフラ戦略アドバイザーを歴任。' 
        }
      ],
      credentials: ['SIA Approved', 'Fellow of World Fiduciary Institute', 'WEF Panelist'],
      focus: {
        EN: 'Sovereign Capital Deployment, Multipolar Geopolitical Risk, Sustainable Portfolios',
        DE: 'Staatlicher Kapitalfluss, multipolare geopolitische Risiken, nachhaltige Portfolios',
        JP: '国家インフラ投資、マルチポーラー地政学リスク、持続可能アセット管理'
      }
    },
    'lead-2': {
      education: {
        EN: 'Ph.D. in High-Scale Distributed Intelligence (Stanford University)',
        DE: 'Ph.D. in verteilter künstlicher Intelligenz (Stanford University)',
        JP: 'スタンフォード大学 コンピュータサイエンス/分散AI博士'
      },
      history: [
        { 
          EN: 'Chief Architect of Cognitive Real-Time Networks at leading Smart Cities Initiatives.', 
          DE: 'Chefarchitekt kognitiver Echtzeitnetze bei führenden Smart-City-Initiativen.', 
          JP: '先進スマートシティ実証実験での自律制御コグニティブグリッドを設計。' 
        },
        { 
          EN: 'Director of Algorithms and Machine Learning at Quantum Giga-Grid System.', 
          DE: 'Direktor für Algorithmen und Machine Learning bei Quantum Giga-Grid.', 
          JP: 'クォンタム・ギガグリッド社にて予測アルゴリズムと量子強化学習を指揮。' 
        }
      ],
      credentials: ['IEEE Fellow', 'ACM Distinguished Scientist', '14 Patents in AI Routing'],
      focus: {
        EN: 'Physical-Digital Digital Twin Simulation, Zero-Knowledge Security, Neural Supply Lines',
        DE: 'Digital-Twin Simulationen, Zero-Knowledge Sicherheitssysteme, neuronale Lieferketten',
        JP: '実デジタルツインシミュレーション、ゼロナレッジセキュア通信、ニューラル制御'
      }
    },
    'lead-3': {
      education: {
        EN: 'M.S. in Climate Engineering & Geothermal Systems (M.I.T.)',
        DE: 'M.S. in Climate Engineering & Geothermie (M.I.T.)',
        JP: 'マサチューセッツ工科大学(MIT) 気候工学＆地熱統合システム修士'
      },
      history: [
        { 
          EN: 'Director of Offshore Energy and Mooring for Continental Wind Alliances.', 
          DE: 'Direktor für Offshore-Energie und Ankerungssysteme bei Continental Wind.', 
          JP: '欧州洋上ウインド・アライアンスにてディープフロー敷設工法を開発。' 
        },
        { 
          EN: 'Senior Energy Consultant for sovereign microgrid transitions across West Africa.', 
          DE: 'Leitender Berater für die Umrüstung staatlicher Microgrids in Westafrika.', 
          JP: '西アフリカ諸国の国家分散型マイクログリッド転換プロジェクトを統括。' 
        }
      ],
      credentials: ['PE (Professional Engineer)', 'WEC Global Energy Laureate', 'Chamber of Industry Excellence'],
      focus: {
        EN: 'Mega-scale offshore structures, tidal generation hydrodynamics, microgrid stability',
        DE: 'Riesige Offshore-Strukturen, Gezeitenkraft-Hydrodynamik, Microgrid-Stabilität',
        JP: '超深海型浮体式構造、潮流発電流体力学、マイクログリッド安定化制御'
      }
    },
    'lead-4': {
      education: {
        EN: 'M.A. in Environmental Economics (London School of Economics)',
        DE: 'M.A. in Umweltökonomie (London School of Economics)',
        JP: 'ロンドン・スクール・オブ・エコノミクス(LSE) 環境経済学修士'
      },
      history: [
        { 
          EN: 'Formulated ESG metrics protocols adopted by world pension consortiums.', 
          DE: 'Entwickelte ESG-Kennzahlen, die von globalen Pensionsfonds übernommen wurden.', 
          JP: '世界的年金コンソーシアムが採用する統合ESG情報開示基準を規格化。' 
        },
        { 
          EN: 'Special Environmental Auditor to Central European Decarbonization Taskforce.', 
          DE: 'Sonderprüfer für Umweltkriterien der europäischen Dekarbonisierungs-Taskforce.', 
          JP: '中央ヨーロッパ脱炭素化推進タスクフォースの特別環境監査役を歴任。' 
        }
      ],
      credentials: ['GRI Certified Practitioner', 'LEED Fellow', 'UN Climate Alliance Advisor'],
      focus: {
        EN: 'Circular product life-cycle audit, Scope 1-3 tracking systems, Biodiversity security',
        DE: 'Audits des zirkulären Produktlebenslaufs, CO2 Scope 1-3 Monitoring, Schutz der Artenvielfalt',
        JP: '循環型マテリアル監査、温室効果ガスScope 1-3追跡ツール、生物多様性保全'
      }
    }
  };

  const committees = [
    {
      name: { EN: 'ESG Stewardship & Decarbonization Council', DE: 'ESG & Dekarbonisierungskontrolle', JP: 'ESG監査・脱炭素推進評議会' },
      leadName: 'Jonathan Reynolds',
      focusArea: { EN: 'Direct Scope 1, 2, and 3 validation across core material supply channels.', DE: 'Vollständige Prüfung von Scope 1-3 Emissionen in allen Lieferketten.', JP: '中核サプライチェーンにおける温室効果ガス排出量の完全な検証。' },
      meetings: { EN: 'Bi-weekly audits, compliant with CSRD / GRI regulations.', DE: 'Zweiwöchentlich, CSRD / GRI-konform.', JP: '隔週開催、CSRD/GRI開示規則完全準拠。' }
    },
    {
      name: { EN: 'Risk, Cyber, & Audit Fiduciary Committee', DE: 'Risiko-, Cyber- & Fiduciary-Ausschuss', JP: 'リスク管理・情報セキュリティ監査委員会' },
      leadName: 'Marcus K. Chen, PhD',
      focusArea: { EN: 'Real-time threat modeling, SCADA system encryption, and financial transparency ledger tracking.', DE: 'Bedrohungsmodellierung in Echtzeit, Verschlüsselung von SCADA-Anlagen und Ledger-Transparenz.', JP: 'SCADA制御系の暗号化システム監査および財務インテグリティ検証。' },
      meetings: { EN: 'Monthly secure sessions, certified TLS standards.', DE: 'Monatlich, unter verifizierten Sicherheitsstandards.', JP: '月次開催、極秘情報セキュリティ基準。' }
    },
    {
      name: { EN: 'Executive Capital Allocation Review', DE: 'Investitionsprüfungsverband', JP: '最高投資資本アロケーション審査会' },
      leadName: 'Helena Vance-Sterling',
      focusArea: { EN: 'Vetting sovereign acquisitions, renewable park infrastructure bonding, and strategic R&D budgets.', DE: 'Prüfung staatlicher Übernahmen, Bürgschaften für Windparks und R&D Budgets.', JP: '国家級インフラ買収案件、再生エネ敷設債、先端R&D長期予算の最終承認。' },
      meetings: { EN: 'Quarterly board summits and as-needed emergency sessions.', DE: 'Quartalsweise sowie Ad-hoc-Sitzungen bei Akquisitionen.', JP: '四半期定例サミット、および要請に応じた臨時査定。' }
    }
  ];

  const philosophyQa = [
    {
      q: { 
        EN: 'How does Madagascar Vision balance physical heavy asset operations with algorithmic technology?',
        DE: 'Wie balanciert Madagascar Vision reale physische Vermögenswerte mit künstlicher Intelligenz?',
        JP: '物理インフラとAI・次世代ソフトウェア技術はどのように融合されていますか？'
      },
      a: {
        EN: 'Every concrete deck, turbine blade, and molecular lab is monitored by dynamic twin systems. We do not look at physical assets as static units, but as living nodes inside a software-controlled logistics ecosystem.',
        DE: 'Jedes Bauwerk, jede Turbine und jedes klinische Labor wird von einem digitalen Zwilling überwacht. Physische Anlagen sind keine statischen Objekte, sondern lebendige Netzknoten.',
        JP: 'すべてのコンクリート基礎、タービンのブレード、先端医療ラボはマダガスカル・ビジョンのデジタルツインで稼働しています。物理的な施設を固定物ではなく、ソフトウェアで動くリアルタイム・データノードとして制御しています。'
      }
    },
    {
      q: {
        EN: 'What is the fiduciary mandate backing the 100% circular zero-waste policy?',
        DE: 'Was ist das treuhänderische Mandat hinter der 100% zirkulären Zero-Waste-Politik?',
        JP: '完全なゼロ・ウェイスト（循環型社会）環境方針が、財務パフォーマンスに与える価値とは？'
      },
      a: {
        EN: 'Regulatory and resource supply risks are rapidly escalating. Our zero-waste material circularity ensures we decouple our growth from linear resource shocks, securing maximum longevity for our sovereign partners.',
        DE: 'Ressourcen- und regulatorische Risiken steigen rapide. Unsere Kreislaufwirtschaft entkoppelt das Konzernwachstum von Rohstoffengpässen und sichert maximale Betriebsstabilität.',
        JP: '資源枯渇リスクやグローバル法規制は急速に強まっています。循環資源の再利用ループ確立によりリニア型資源ショックから経営を切り離し、強固なサプライチェーンの持続性を確立しています。'
      }
    },
    {
      q: {
        EN: 'How are sovereign-grade funding resources verified and managed?',
        DE: 'Wie werden die staatlichen Investitionsmittel geprüft und verwaltet?',
        JP: '持続可能な調達や機関投資資金の透明性はどのように保証されていますか？'
      },
      a: {
        EN: 'Madagascar Vision implements unified crypto-ledger systems mapping every dollar of ESG bonds and sovereign capital to physical project milestones, generating undeniable proof-of-progress.',
        DE: 'Wir nutzen kryptografisch abgesicherte Kontroll-Ledger. Jeder Euro aus ESG-Anleihen oder Staatsfonds wird direkt einem physischen Meilenstein zugeordnet, wodurch Datenlücken ausgeschlossen werden.',
        JP: '当社では透明性の高い暗号台帳(Ledger)を採用しており、ESG公債や国家投資資金の1円単位に至るまでを物理的な開発フェーズにダイレクトに紐づけ、偽りのない進捗監査を公開しています。'
      }
    }
  ];

  const currentLeader = LEADERS.find(l => l.id === selectedLeaderId) || LEADERS[0];
  const activeDetail = leaderDetails[selectedLeaderId] || leaderDetails['lead-1'];

  // Secretariat mock submit
  const [secName, setSecName] = useState('');
  const [secEmail, setSecEmail] = useState('');
  const [secMsg, setSecMsg] = useState('');
  const [secSuccess, setSecSuccess] = useState(false);
  const [secLoading, setSecLoading] = useState(false);

  const handleSecSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!secName || !secEmail || !secMsg) return;
    setSecLoading(true);
    setTimeout(() => {
      setSecLoading(false);
      setSecSuccess(true);
      setSecName('');
      setSecEmail('');
      setSecMsg('');
      setTimeout(() => setSecSuccess(false), 6000);
    }, 1500);
  };

  return (
    <div id="leadership-view-wrapper" className="space-y-20 pb-16 relative animate-fade-in">
      
      {/* 1. Header Banner */}
      <section className="relative pt-32 pb-6 text-center max-w-4xl mx-auto px-4" id="leadership-header">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-950/20">
          {language === 'EN' ? 'MADAGASCAR VISION CABINET' : language === 'DE' ? 'AUFSICHTSBEHÖRDE & FÜHRUNGSRAT' : '統制コア・機関ガバナンス'}
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-4">
          {translations.title}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl mx-auto">
          {translations.sub}
        </p>

        {/* Dynamic Navigation Sub-Bar */}
        <div className="flex justify-center flex-wrap gap-2 mt-8" id="sub-navigation-pills">
          {[
            { id: 'board', label: { EN: 'Executive Board', DE: 'Vorstandsgremium', JP: '執行役員会' } },
            { id: 'ceo-message', label: { EN: 'CEO Address', DE: 'Ansprache der CEO', JP: '代表所感' } },
            { id: 'committees', label: { EN: 'Committees', DE: 'Ausschüsse', JP: '監査評議会' } },
            { id: 'philosophy', label: { EN: 'Philosophy & Q&A', DE: 'Philosophie & Dialog', JP: '経営哲学Q&A' } }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all border ${
                activeTab === tab.id
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-500/20 shadow-md'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {tab.label[language]}
            </button>
          ))}
        </div>
      </section>

      {/* Main Switcher Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TAB 1: EXECUTIVE BOARD GRID & DETAILS */}
        {activeTab === 'board' && (
          <div className="space-y-12 animate-fade-in" id="leaders-board-tab">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Side: Interactive Selection Cards */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-bold px-1">
                  {language === 'EN' ? 'STEWARD DISPATCHER' : language === 'DE' ? 'MITGLIEDAUSWAHL' : 'エグゼクティブ・フォルダ'}
                </span>
                
                <div className="space-y-3">
                  {LEADERS.map((lead) => {
                    const isSelected = lead.id === selectedLeaderId;
                    return (
                      <button
                        key={lead.id}
                        onClick={() => setSelectedLeaderId(lead.id)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center space-x-4 relative overflow-hidden group ${
                          isSelected
                            ? 'bg-slate-900 border-emerald-500/40 shadow-xl'
                            : 'bg-slate-950/40 border-slate-900 hover:border-slate-800 hover:bg-slate-900/30'
                        }`}
                        id={`btn-leader-${lead.id}`}
                      >
                        {isSelected && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
                        )}
                        
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-900 flex-shrink-0 border border-white/5">
                          <img
                            src={`https://picsum.photos/seed/${lead.imageSeed}/150/150`}
                            alt={lead.name}
                            className={`w-full h-full object-cover transition-all ${
                              isSelected ? 'grayscale-0 scale-105' : 'grayscale group-hover:grayscale-0'
                            }`}
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        <div className="flex-grow">
                          <h4 className={`text-sm font-bold font-sans transition-colors ${
                            isSelected ? 'text-white' : 'text-slate-300'
                          }`}>
                            {lead.name}
                          </h4>
                          <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-400 block mt-0.5">
                            {lead.role}
                          </span>
                        </div>

                        <ChevronRight 
                          size={16} 
                          className={`text-slate-500 transition-transform ${
                            isSelected ? 'translate-x-1 text-emerald-400' : 'group-hover:translate-x-0.5'
                          }`} 
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Side: High-Touch Selected Leader Dossier */}
              <div className="lg:col-span-7" id="leader-dossier-panel">
                <div className="glass rounded-3xl p-6 sm:p-8 space-y-6 text-left relative overflow-hidden shadow-2xl">
                  {/* Subtle watermarked design backing */}
                  <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 rounded-full blur-3xl pointer-events-none" />

                  <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pb-6 border-b border-slate-900">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-lg shrink-0">
                      <img
                        src={`https://picsum.photos/seed/${currentLeader.imageSeed}/300/300`}
                        alt={currentLeader.name}
                        className="w-full h-full object-cover grayscale brightness-95"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 text-emerald-400 font-mono text-[9px] tracking-widest uppercase">
                        <Award size={10} />
                        <span>{language === 'EN' ? 'VERIFIED CABINET PORTFOLIO' : language === 'DE' ? 'EXEKUTIV-ZERTIFIKAT' : '認可済み経歴フォルダ'}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white font-sans tracking-tight mt-1">
                        {currentLeader.name}
                      </h3>
                      <p className="text-emerald-400 font-mono text-xs font-bold leading-tight mt-1.5 uppercase">
                        {currentLeader.role}
                      </p>
                    </div>
                  </div>

                  {/* Core bio details */}
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                        {language === 'EN' ? 'STRICTOR FIDUCIARY BIO' : language === 'DE' ? 'DIREKTORIUMS-VITA' : '公的任務実績'}
                      </span>
                      <p className="text-slate-350 text-xs sm:text-sm leading-relaxed font-light">
                        {currentLeader.bio}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-900">
                      {/* Education */}
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                          {language === 'EN' ? 'ACADEMIC ALUMNI' : language === 'DE' ? 'AKADEMISCHER WERDEGANG' : '最終学歴'}
                        </span>
                        <div className="flex items-start space-x-1.5">
                          <BookOpen size={12} className="text-emerald-500 mt-0.5 shrink-0" />
                          <span className="text-xs text-slate-300 font-light leading-tight">
                            {activeDetail.education[language]}
                          </span>
                        </div>
                      </div>

                      {/* Strategic focus */}
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                          {language === 'EN' ? 'PORTFOLIO DOMAIN' : language === 'DE' ? 'SCHWERPUNKTBEREICH' : '注力管轄分野'}
                        </span>
                        <div className="flex items-start space-x-1.5">
                          <Shield size={12} className="text-teal-400 mt-0.5 shrink-0" />
                          <span className="text-xs text-slate-300 font-light leading-tight">
                            {activeDetail.focus[language]}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Achievements */}
                    <div className="space-y-2 pt-3 border-t border-slate-900">
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                        {language === 'EN' ? 'TRACK RECORD HIGH-VOLUME MILESTONES' : language === 'DE' ? 'ERGEBNISBILANZ' : '実質インフラ統括実績'}
                      </span>
                      <div className="space-y-2.5">
                        {activeDetail.history.map((hist, i) => (
                          <div key={i} className="flex items-start space-x-2 text-xs text-slate-300 bg-slate-900/40 p-2.5 rounded-xl border border-slate-800">
                            <span className="font-mono text-slate-500 font-bold pr-1">0{i+1}.</span>
                            <p className="font-light leading-tight">{hist[language]}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Certifications & Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {activeDetail.credentials.map((cred, i) => (
                        <span key={i} className="text-[9px] font-mono bg-emerald-950/30 text-emerald-300 border border-emerald-500/20 px-2 py-0.5 rounded-md font-medium">
                          {cred}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: OFFICE OF THE CEO ADDRESS */}
        {activeTab === 'ceo-message' && (
          <div className="max-w-3xl mx-auto animate-fade-in" id="ceo-address-tab">
            <div className="glass rounded-3xl p-8 sm:p-12 text-left relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-slate-900 gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-bold block">
                    {translations.ceoTitle}
                  </span>
                  <h3 className="text-2xl font-black text-white font-sans tracking-tight">
                    {translations.ceoMessageTitle}
                  </h3>
                  <p className="text-xs text-slate-450 leading-tight">
                    {translations.ceoSub}
                  </p>
                </div>
                
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-900 border border-white/5 shrink-0 self-start sm:self-center">
                  <img
                    src="https://picsum.photos/seed/executive_woman_portrait/150/150"
                    alt="Helena Vance-Sterling"
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* CEO Letter Body content in language */}
              <div className="space-y-6 text-sm text-slate-300 leading-relaxed font-light pt-8">
                {language === 'EN' ? (
                  <>
                    <p>
                      At Madagascar Vision, we operate under a simple, non-negotiable directive: <strong>physical infrastructure is no longer separate from digital orchestration</strong>. For the past decade, the global markets treated these as distinct sectors. This division led to severe inefficiencies, carbon overloads, and fragmented operations.
                    </p>
                    <p>
                      We founded our unified holding with the complete resolve to dissolve these boundaries. By creating software-defined ecosystems matching robotic material sorting, high-voltage wind farms, and clinical genomic processing systems, we protect the sovereign capital allocated with us. Our responsibility is multi-generational.
                    </p>
                    <p className="italic font-mono text-emerald-300 text-xs bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                      "We do not inherit physical assets; we build their digital future to guarantee they serve our children in a carbon-neutral world."
                    </p>
                    <p>
                      As we look at the year 2026 and forward, we are stepping into a climate landscape that rewards precision and transparent auditing rather than greenwashing. Our ESG crypto-ledgers provide empirical proof of our progress. We thank our public municipal partnerships and sovereign pension groups for their uncompromising trust.
                    </p>
                  </>
                ) : language === 'DE' ? (
                  <>
                    <p>
                      Bei Madagascar Vision handeln wir nach einer klaren, unverrückbaren Prämisse: <strong>Physische Infrastruktur lässt sich nicht länger von digitaler Orchestrierung trennen</strong>. Zu lange wurden diese Bereiche als getrennte Sektoren behandelt, was globale Lieferketten instabil und ineffizient machte.
                    </p>
                    <p>
                      Unsere Holding wurde gegründet, um diese Grenzen niederzulegen. Indem wir physische Produktionsprozesse, Offshore-Windparks und Krebsdiagnostik im Labor in eine vernetzte, datengetriebene Plattform einbinden, schützen wir das uns anvertraute Kapital staatlicher und institutioneller Anleger.
                    </p>
                    <p className="italic font-mono text-emerald-300 text-xs bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                      "Wir investieren nicht in bloße Bausubstanz; wir schaffen den digitalen Zwilling der realen Wirtschaft, um sie CO2-neutral und zukunftssicher zu gestalten."
                    </p>
                    <p>
                      Für das Planungsjahr 2026 gilt mehr denn je: Transparenz schlägt Symbolpolitik. Unsere ESG-Prüfungsdaten bieten verifizierbare Belege für den reellen CO2-Entzug und zirkulären Materialumgang. Wir danken unseren Partnern für das entgegengebrachte Vertrauen.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      マダガスカル・ビジョンにおいて、私たちはシンプルでありながら極めて厳格なビジョンの下で稼働しています。<strong>「物理的な基盤プラットフォームとデジタルソフトウェア制御は、もはや切り離せない」</strong>ということです。産業のデジタル統合の遅れは、炭素排出量の増大や物流ネットワークの不全を引き起こしてきました。
                    </p>
                    <p>
                      私たちのコングロマリットは、この業界の境界線を取り払うために組織されました。最先端の自律ピックロボティクス、高圧スマート風力グリッド、そして高度な病理検査分析をソフトウェアと一体化させることで、お預かりした国家インフラ資本の最大価値を引き出し、何世代にもおよぶ安定性と防衛を担保します。
                    </p>
                    <p className="italic font-mono text-emerald-300 text-xs bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                      「私たちは単なるコンクリートの塊を建てておしまいにはしません。物理空間のデジタルツインを設計し、完全な脱炭素を実装した持続可能インフラへ変革します。」
                    </p>
                    <p>
                      2026年という節目において、産業界に求められるのは表面的な美名（グリーンウォッシング）ではなく、徹底した「透明性と監査証跡」です。持続可能な環境づくりへの参画に感謝申し上げます。
                    </p>
                  </>
                )}
              </div>

              {/* CEO Signature Block */}
              <div className="mt-8 pt-6 border-t border-slate-900 flex justify-between items-end">
                <div>
                  <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block">
                    {language === 'EN' ? 'OFFICIAL INK SIGNATURE' : language === 'DE' ? 'UNTERZEICHNUNG' : '直筆署名照合'}
                  </span>
                  <span className="font-serif italic text-lg text-white font-bold block mt-1 tracking-wider">
                    Helena Vance-Sterling
                  </span>
                  <span className="text-[10px] font-mono text-emerald-450 block mt-0.5">
                    Managing Director & Chief Executive, MV Group Holding
                  </span>
                </div>
                <div className="text-right text-[10px] font-mono text-slate-550 shrink-0">
                  <span>AES CERT #CEO-901</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: BOARD COMMITTEES */}
        {activeTab === 'committees' && (
          <div className="space-y-8 animate-fade-in" id="governance-committees-tab">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {translations.comTitle}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                {translations.comSub}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {committees.map((com, index) => (
                <div 
                  key={index}
                  className="glass card-hover rounded-2xl p-6 text-left flex flex-col justify-between h-[300px] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
                  
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
                      {index === 0 ? <Leaf size={18} /> : index === 1 ? <Cpu size={18} /> : <Scale size={18} />}
                    </div>

                    <h4 className="text-white text-sm font-extrabold font-sans tracking-tight min-h-[40px]">
                      {com.name[language]}
                    </h4>

                    <div className="space-y-2">
                      <div className="space-y-0.5">
                        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                          {language === 'EN' ? 'COMMITTEE CHAIR' : language === 'DE' ? 'AUSSCHUSS-VORSITZ' : '議長・統括者'}
                        </span>
                        <span className="text-xs text-white font-semibold font-mono">{com.leadName}</span>
                      </div>

                      <div className="space-y-0.5">
                        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                          {language === 'EN' ? 'OVERSIGHT REALM' : language === 'DE' ? 'KONTROLLBEREICH' : '管轄方針項目'}
                        </span>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-light line-clamp-3">
                          {com.focusArea[language]}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-900 pt-3 mt-4 flex items-center justify-between text-[9px] font-mono text-slate-500">
                    <span>{com.meetings[language]}</span>
                    <span className="text-emerald-400">MONITORED</span>
                  </div>

                </div>
              ))}
            </div>

            {/* Core Charter statement */}
            <div className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800 text-left max-w-4xl mx-auto flex flex-col sm:flex-row gap-6 mt-12 items-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Shield size={20} />
              </div>
              <div className="space-y-1">
                <h5 className="text-sm font-bold text-white font-sans">
                  {language === 'EN' ? 'Fiduciary Audit Integrity Framework' : language === 'DE' ? 'Regelwerk zur Treuhand-Transparenz' : '信託責任に関する会計及び倫理大綱'}
                </h5>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {language === 'EN' 
                    ? 'All operations are globally insured and bound in multi-million dollar reserves. Committee policies mandate immediate public ledger disclosure of material carbon deviations and audit findings.' 
                    : language === 'DE'
                    ? 'Sämtliche Betriebsprozesse unterliegen einem strengen regulatorischen Absicherungskonzept. Jede materielle CO2-Abweichung wird unverzüglich veröffentlicht.'
                    : 'すべての事業活動は外部監査法人の監視下にあります。基準を超える二酸化炭素排出量の検知、または重大事項の発生は、速やかに記録が公開されます。'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: PHILOSOPHY & Q&A */}
        {activeTab === 'philosophy' && (
          <div className="max-w-3xl mx-auto animate-fade-in" id="philosophy-qa-tab">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-8 animate-fade-in">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {translations.philTitle}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                {translations.philSub}
              </p>
            </div>

            <div className="space-y-4">
              {philosophyQa.map((qa, index) => {
                const isExpanded = expandedQa === index;
                return (
                  <div 
                    key={index}
                    className="glass rounded-2xl border border-slate-900 overflow-hidden text-left transition-all duration-300"
                  >
                    <button
                      onClick={() => setExpandedQa(isExpanded ? null : index)}
                      className="w-full p-6 text-left flex items-start justify-between space-x-4 bg-slate-900/30 hover:bg-slate-900/60 transition-colors"
                      id={`qa-trigger-${index}`}
                    >
                      <div className="flex items-start space-x-3.5">
                        <div className="w-6 h-6 rounded-lg bg-emerald-950/60 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                          Q
                        </div>
                        <span className="text-white text-xs sm:text-sm font-bold font-sans pr-4 leading-snug">
                          {qa.q[language]}
                        </span>
                      </div>
                      
                      <div className="text-slate-500 hover:text-white shrink-0">
                        <MessageSquare size={16} className={`transition-transform duration-300 ${isExpanded ? 'rotate-90 text-emerald-400' : ''}`} />
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="p-6 bg-slate-950 border-t border-slate-900 animate-fade-in text-slate-300 leading-relaxed font-light text-xs sm:text-sm flex items-start space-x-3.5">
                        <div className="w-6 h-6 rounded-lg bg-teal-950/60 border border-teal-500/20 text-teal-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                          A
                        </div>
                        <p>{qa.a[language]}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* 2. Governing Secretariat Secure Contact Form */}
      <section className="max-w-xl mx-auto px-4 pt-10" id="board-liaison-registry">
        <div className="glass rounded-3xl p-6 sm:p-8 text-left relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
          
          <h3 className="text-white font-black text-lg sm:text-xl font-sans mb-1 pb-2 border-b border-slate-900 flex items-center space-x-2">
            <Sparkles size={16} className="text-emerald-400" />
            <span>{translations.contactBoard}</span>
          </h3>
          <p className="text-slate-450 text-[11px] leading-tight mb-5">
            {translations.contactBoardSub}
          </p>

          <form onSubmit={handleSecSubmit} className="space-y-4">
            
            <div className="space-y-1">
              <label className="block text-[10px] font-mono tracking-wider font-bold text-slate-500 uppercase">
                {language === 'EN' ? 'Initiator Name / Title' : language === 'DE' ? 'Name / Amtlicher Titel des Absenders' : '送信者役職・氏名'}
              </label>
              <input
                type="text"
                value={secName}
                onChange={(e) => setSecName(e.target.value)}
                required
                placeholder="Marcus Aurelius QC"
                className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 outline-none transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-mono tracking-wider font-bold text-slate-500 uppercase">
                {language === 'EN' ? 'Private Secure Email' : language === 'DE' ? 'Abgesicherte private Mailadresse' : '公式セキュア・メールアドレス'}
              </label>
              <input
                type="email"
                value={secEmail}
                onChange={(e) => setSecEmail(e.target.value)}
                required
                placeholder="aurelius@fiduciary-chambers.ch"
                className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 outline-none transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-mono tracking-wider font-bold text-slate-500 uppercase">
                {language === 'EN' ? 'Secretariat Message Brief' : language === 'DE' ? 'Gegenstand des Vorstandsantrags' : '取締役会提出案件の briefs 概要'}
              </label>
              <textarea
                value={secMsg}
                onChange={(e) => setSecMsg(e.target.value)}
                required
                rows={3}
                placeholder="Strategic bonding proposal details related to regional offshore grid infrastructure assets..."
                className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 outline-none transition-all resize-none"
              />
            </div>

            {secSuccess && (
              <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-550/25 text-xs text-emerald-300 animate-fade-in line-clamp-3 leading-snug">
                {translations.successMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={secLoading}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl text-xs transition-all shadow-xl shadow-emerald-600/20 flex items-center justify-center space-x-2 active:scale-98 disabled:opacity-50 cursor-pointer"
            >
              {secLoading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>{translations.sendSecBtn}</span>
                  <ArrowUpRight size={13} className="opacity-80" />
                </>
              )}
            </button>

          </form>

        </div>
      </section>

    </div>
  );
}
