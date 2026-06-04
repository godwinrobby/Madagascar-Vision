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
  language: 'EN' | 'FR' | 'MG';
}

export function LeadershipView({ language }: LeadershipViewProps) {
  const [selectedLeaderId, setSelectedLeaderId] = useState<string>('lead-1');
  const [activeTab, setActiveTab] = useState<'ceo-message' | 'board' | 'committees' | 'philosophy'>('board');
  const [expandedQa, setExpandedQa] = useState<number | null>(null);

  const translations = {
    EN: {
      title: 'Our Executive Stewardship',
      sub: 'Governing portfolios of integrated physical and algorithmic systems. Vision Madagascar aligns supreme compliance benchmarks to sovereign-scale sustainability mandates.',
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
    FR: {
      title: 'Notre Direction Exécutive',
      sub: 'Gestion de portefeuilles de systèmes physiques et algorithmiques intégrés. Vision Madagascar aligne les critères de conformité les plus élevés avec des mandats de durabilité à l’échelle souveraine.',
      ceoTitle: 'Bureau de la Direction Générale',
      ceoMessageTitle: 'Devoir Fiduciaire dans un Monde Complexe',
      ceoSub: 'Un Message de notre Directrice Générale, Helena Vance-Sterling.',
      comTitle: 'Comités du Conseil & Gouvernance',
      comSub: 'Mécanismes de surveillance sur mesure appliquant des protocoles d’audit et d’intelligence des risques.',
      philTitle: 'Philosophie de Direction & Questions-Réponses',
      philSub: 'Engager des stratégies concrètes pour le déploiement d’actifs multigénérationnels.',
      contactBoard: 'Ligne Directrice Institutionnelle',
      contactBoardSub: 'Établir des communications sécurisées avec le Bureau du Secrétariat.',
      sendSecBtn: 'Initier le protocole de liaison du Conseil',
      successMsg: 'Protocole de liaison cryptographique validé. Notre secrétaire général répondra sous 24 heures.',
      readFull: 'Vérifier la biographie exécutive'
    },
    MG: {
      title: 'Ny Mpitarika sy Birao Fitantanana',
      sub: 'Mitantana ireo fotodrafitrasa sy rafitra nomerika arifomba. Vision Madagascar dia mampifanaraka ny fenitra avo indrindra amin’ny tontolo iainana sy ny fitantanana.',
      ceoTitle: 'Biraon’ny Tale Jeneraly',
      ceoMessageTitle: 'Andraikitra amin’ny Tontolo Sarotra',
      ceoSub: 'Hafatra avy amin’ny Tilikambon’ny fitantanana, Helena Vance-Sterling.',
      comTitle: 'Vaomieram-pitantanana sy ny Birao',
      comSub: 'Drafitra fanaraha-maso sy fanadihadiana ny loza mety hitranga.',
      philTitle: 'Fahendren’ny Mpitondra sy Dialogy',
      philSub: 'Fijerena tetikasa ho an’ny taranaka rehetra ary fandraharahana maharitra.',
      contactBoard: 'Fifandraisana Ofisialy',
      contactBoardSub: 'Mifandray mivantana amin’ny Sekretera sy Birao.',
      sendSecBtn: 'Handefa fangatahana ho an’ny Birao',
      successMsg: 'Voaray ny fangatahanao. Hamaly anao ao anatin’ny 24 ora ny sekretera.',
      readFull: 'Hijery ny mombamomba azy feno'
    }
  }[language];

  // Rich leader data to augment background info
  const leaderDetails: Record<string, { 
    education: { EN: string; FR: string; MG: string };
    history: { EN: string; FR: string; MG: string }[];
    credentials: string[];
    focus: { EN: string; FR: string; MG: string };
  }> = {
    'lead-1': {
      education: {
        EN: 'M.S. in Civil Infrastructures (ETH Zurich), MBA in Finance (Oxford University)',
        FR: 'Master en Infrastructures Civiles (ETH Zurich), MBA en Finance (Université d’Oxford)',
        MG: 'M.S. amin’ny fotodrafitrasa (ETH Zurich), MBA amin’ny fitantanam-bola (Oxford University)'
      },
      history: [
        { 
          EN: 'Supervised $12B greenfield harbor master installations in Southeast Asia.', 
          FR: 'A dirigé des installations de ports intelligents de 12 milliards de dollars en Asie du Sud-Est.', 
          MG: 'Nanara-maso ny tsenan’ny seranan-tsambo mitentina 12 miliara dolara tany Azia Atsimo-atsinanana.' 
        },
        { 
          EN: 'Appointed Strategic Infrastructure Advisor to Eurozone Sovereign Funds.', 
          FR: 'Nommée conseillère stratégique en infrastructures auprès de fonds souverains de la zone euro.', 
          MG: 'Notsendrena ho Mpanolotsaina momba ny Fotodrafitrasa ho an’ny Tahirim-bolam-panjakana any Eoropa.' 
        }
      ],
      credentials: ['SIA Approved', 'Fellow of World Fiduciary Institute', 'WEF Panelist'],
      focus: {
        EN: 'Sovereign Capital Deployment, Multipolar Geopolitical Risk, Sustainable Portfolios',
        FR: 'Déploiement de capitaux souverains, risques géopolitiques multipolaires, portefeuilles durables',
        MG: 'Fampiasana ny renivola, ny fitantanana ny loza ara-politika ary ny fitahirizana maharitra'
      }
    },
    'lead-2': {
      education: {
        EN: 'Ph.D. in High-Scale Distributed Intelligence (Stanford University)',
        FR: 'Doctorat en Intelligence Distribuée à Grande Échelle (Université de Stanford)',
        MG: 'Ph.D. amin’ny Intelligence Distribuée (Stanford University)'
      },
      history: [
        { 
          EN: 'Chief Architect of Cognitive Real-Time Networks at leading Smart Cities Initiatives.', 
          FR: 'Architecte en chef des réseaux cognitifs en temps réel au sein d’initiatives de villes intelligentes de premier plan.', 
          MG: 'Mpanorina lehibe ny tambajotra amin’ny Smart Cities Initiatives.' 
        },
        { 
          EN: 'Director of Algorithms and Machine Learning at Quantum Giga-Grid System.', 
          FR: 'Directeur des algorithmes et de l’apprentissage automatique chez Quantum Giga-Grid System.', 
          MG: 'Tale jeneralin’ny Algorithms sy Machine Learning tao amin’ny Quantum Giga-Grid.' 
        }
      ],
      credentials: ['IEEE Fellow', 'ACM Distinguished Scientist', '14 Patents in AI Routing'],
      focus: {
        EN: 'Physical-Digital Digital Twin Simulation, Zero-Knowledge Security, Neural Supply Lines',
        FR: 'Simulation de jumeaux numériques physiques et numériques, sécurité zéro connaissance, chaînes d’approvisionnement neuronales',
        MG: 'Famakafakana ny Digital Twin, fiarovana nomerika, ary fitantanana manan-tsaina ny famatsiana'
      }
    },
    'lead-3': {
      education: {
        EN: 'M.S. in Climate Engineering & Geothermal Systems (M.I.T.)',
        FR: 'M.S. en Génie Climatique & Systèmes Géothermiques (M.I.T.)',
        MG: 'M.S. amin’ny Climate Engineering sy Geothermal Systems (M.I.T.)'
      },
      history: [
        { 
          EN: 'Director of Offshore Energy and Mooring for Continental Wind Alliances.', 
          FR: 'Directeur de l’énergie offshore et du mouillage pour les alliances éoliennes continentales.', 
          MG: 'Tale jeneralin’ny sangan’asa momba ny angovo an-dranomasina.' 
        },
        { 
          EN: 'Senior Energy Consultant for sovereign microgrid transitions across West Africa.', 
          FR: 'Consultant principal en énergie pour les transitions de micro-réseaux souverains en Afrique de l’Ouest.', 
          MG: 'Mpanolotsaina ambony momba ny angovo ho an’ny tetikasa mikrogid any Afrika Andrefana.' 
        }
      ],
      credentials: ['PE (Professional Engineer)', 'WEC Global Energy Laureate', 'Chamber of Industry Excellence'],
      focus: {
        EN: 'Mega-scale offshore structures, tidal generation hydrodynamics, microgrid stability',
        FR: 'Structures offshore à méga-échelle, hydrodynamique de génération marémotrice, stabilité des micro-réseaux',
        MG: 'Fotodrafitrasa lehibe an-dranomasina, angovon’ny rano, ary fitantanana ny tambajotra kely'
      }
    },
    'lead-4': {
      education: {
        EN: 'M.A. in Environmental Economics (London School of Economics)',
        FR: 'Master en Économie de l’Environnement (London School of Economics)',
        MG: 'M.A. amin’ny Environmental Economics (London School of Economics)'
      },
      history: [
        { 
          EN: 'Formulated ESG metrics protocols adopted by world pension consortiums.', 
          FR: 'A formulé les protocoles de mesures ESG adoptés par les consortiums mondiaux de caisses de retraite.', 
          MG: 'Namorona ny fenitra fandrefesana ESG ho an’ny tahirim-bola misotro ronono.' 
        },
        { 
          EN: 'Special Environmental Auditor to Central European Decarbonization Taskforce.', 
          FR: 'Auditeur environnemental spécial auprès du groupe de travail sur la décarbonation en Europe centrale.', 
          MG: 'Mpanadihady manokana tontolo iainana ho an’ny decarb tany Eoropa.' 
        }
      ],
      credentials: ['GRI Certified Practitioner', 'LEED Fellow', 'UN Climate Alliance Advisor'],
      focus: {
        EN: 'Circular product life-cycle audit, Scope 1-3 tracking systems, Biodiversity security',
        FR: 'Audit du cycle de vie des produits circulaires, système de suivi Scope 1-3, protection de la biodiversité',
        MG: 'Fanadihadiana ny fizotran’ny fitaovana, fanaraham-maso ny Scope 1-3, ary fiarovana ny tontolo iainana'
      }
    }
  };

  const committees = [
    {
      name: { EN: 'ESG Stewardship & Decarbonization Council', FR: 'Conseil de gérance ESG & Décarbonation', MG: 'Filan-kevitra ESG sy ny Fanafoanana ny Karbona' },
      leadName: 'Jonathan Reynolds',
      focusArea: { EN: 'Direct Scope 1, 2, and 3 validation across core material supply channels.', FR: 'Validation directe des Scopes 1, 2 et 3 dans les principaux canaux d’approvisionnement en matériaux.', MG: 'Fanamarinana mivantana ny Scope 1, 2, ary 3 amin’ny famatsiana akora.' },
      meetings: { EN: 'Bi-weekly audits, compliant with CSRD / GRI regulations.', FR: 'Audits bihebdomadaires, conformes aux réglementations CSRD / GRI.', MG: 'Fanadihadiana indroa isan-kerinandro, manaraka ny CSRD / GRI.' }
    },
    {
      name: { EN: 'Risk, Cyber, & Audit Fiduciary Committee', FR: 'Comité de Fiducie des Risques, de la Cybersécurité & d’Audit', MG: 'Vaomieran’ny loza, ny teknolojia, sy ny fanadihadiana' },
      leadName: 'Marcus K. Chen, PhD',
      focusArea: { EN: 'Real-time threat modeling, SCADA system encryption, and financial transparency ledger tracking.', FR: 'Modélisation des menaces en temps réel, cryptage des systèmes SCADA et suivi du registre de transparence financière.', MG: 'Drafitra fampisehoana loza amin’ny fotoana tena izy sy encryption SCADA.' },
      meetings: { EN: 'Monthly secure sessions, certified TLS standards.', FR: 'Sessions mensuelles sécurisées, normes TLS certifiées.', MG: 'Fivoriana isam-bolana azo antoka manaraka ny fenitra TLS.' }
    },
    {
      name: { EN: 'Executive Capital Allocation Review', FR: 'Examen de l’allocation des capitaux exécutifs', MG: 'Vaomiera mpanadihady ny fampiasam-bola tsara' },
      leadName: 'Helena Vance-Sterling',
      focusArea: { EN: 'Vetting sovereign acquisitions, renewable park infrastructure bonding, and strategic R&D budgets.', FR: 'Évaluation des acquisitions souveraines, cautionnement des infrastructures éoliennes et budgets stratégiques de R&D.', MG: 'Fanamarinana ny fividianana tetikasa goavana sy ny tetibola R&D.' },
      meetings: { EN: 'Quarterly board summits and as-needed emergency sessions.', FR: 'Sommets trimestriels du conseil et sessions d’urgence au besoin.', MG: 'Fivoriana isaky ny telo volana na isaky ny misy maika.' }
    }
  ];

  const philosophyQa = [
    {
      q: { 
        EN: 'How does Vision Madagascar balance physical heavy asset operations with algorithmic technology?',
        FR: 'Comment Vision Madagascar équilibre-t-elle les opérations d’actifs physiques lourds avec les technologies algorithmiques ?',
        MG: 'Ahoana no mampifandanja ny asa goavana ara-batana sy ny teknolojia nomerika ao amin’ny Vision Madagascar ?'
      },
      a: {
        EN: 'Every concrete deck, turbine blade, and molecular lab is monitored by dynamic twin systems. We do not look at physical assets as static units, but as living nodes inside a software-controlled logistics ecosystem.',
        FR: 'Chaque plateforme en béton, pale de turbine et laboratoire moléculaire est surveillé par des jumeaux numériques dynamiques. Nous ne considérons pas les actifs physiques comme statiques, mais comme des nœuds vivants au sein d’un écosystème logistique contrôlé par logiciel.',
        MG: 'Ny fotodrafitrasa rehetra dia arahi-maso amin’ny alalan’ny digital twin. Ny fitaovana ara-batana dia tsy zavatra tsy mihetsika fa mifandray amin’ny tambajotra mandeha ho azy ao anaty logiciel.'
      }
    },
    {
      q: {
        EN: 'What is the fiduciary mandate backing the 100% circular zero-waste policy?',
        FR: 'Quel est le mandat fiduciaire soutenant la politique 100 % circulaire "zéro déchet" ?',
        MG: 'Inona no andraikitra fiduciaire mpanohana ny drafi-pandrosoana 100% tsy misy fako ?'
      },
      a: {
        EN: 'Regulatory and resource supply risks are rapidly escalating. Our zero-waste material circularity ensures we decouple our growth from linear resource shocks, securing maximum longevity for our sovereign partners.',
        FR: 'Les risques réglementaires et d’approvisionnement en ressources augmentent rapidement. Notre circularité zéro déchet garantit que nous décorrélons notre croissance des chocs de ressources linéaires, assurant une longévité maximale pour nos partenaires.',
        MG: 'Mitombo haingana ny loza mitatao amin’ny famatsiana sy ny lalàna. Ny fampihenana ny fako tontolo iainana dia manome antoka fa tsy ho tratry ny olana ara-pitaovana ny fampandrosoana.'
      }
    },
    {
      q: {
        EN: 'How are sovereign-grade funding resources verified and managed?',
        FR: 'Comment les ressources financières de niveau souverain sont-elles vérifiées et gérées ?',
        MG: 'Ahoana no hanamarinana sy hitantanana ny renivola avy amin’ny fanjakana ?'
      },
      a: {
        EN: 'Vision Madagascar implements unified crypto-ledger systems mapping every dollar of ESG bonds and sovereign capital to physical project milestones, generating undeniable proof-of-progress.',
        FR: 'Vision Madagascar déploie des systèmes de registres cryptographiques unifiés associant chaque dollar d’obligations ESG et de capitaux souverains à des jalons de projet physiques, générant une preuve de progrès incontestable.',
        MG: 'Vision Madagascar dia mampiasa ny rafitra crypto-ledger unifiés mba hampifandraisana ny vola rehetra amin’ny fandrosoana tena izy amin’ny tetikasa.'
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
          {language === 'EN' ? 'MADAGASCAR VISION CABINET' : language === 'FR' ? 'CABINET MADAGASCAR VISION' : 'BIRAO MADAGASCAR VISION'}
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
            { id: 'board', label: { EN: 'Executive Board', FR: 'Conseil d’Administration', MG: 'Filan-kevi-pitantanana' } },
            { id: 'ceo-message', label: { EN: 'CEO Address', FR: 'Message de la Directrice Générale', MG: 'Hafatra avy amin’ny Tale' } },
            { id: 'committees', label: { EN: 'Committees', FR: 'Comités', MG: 'Komity sy Birao' } },
            { id: 'philosophy', label: { EN: 'Philosophy & Q&A', FR: 'Philosophy & Q&R', MG: 'Fahendrena & Dialogy' } }
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
                  {language === 'EN' ? 'STEWARD DISPATCHER' : language === 'FR' ? 'SÉLECTEUR DE DIRIGEANT' : 'FANTINANA MPIANDRAIKITRA'}
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
                        <span>{language === 'EN' ? 'VERIFIED CABINET PORTFOLIO' : language === 'FR' ? 'PORTEFEUILLE DE CABINET VÉRIFIÉ' : 'MOMBA NY BIRAO MARINA'}</span>
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
                        {language === 'EN' ? 'STRICTOR FIDUCIARY BIO' : language === 'FR' ? 'BIOGRAPHIE FIDUCIAIRE DIRECTE' : 'tantaran’ny asa sy andraikitra'}
                      </span>
                      <p className="text-slate-350 text-xs sm:text-sm leading-relaxed font-light">
                        {currentLeader.bio}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-900">
                      {/* Education */}
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                          {language === 'EN' ? 'ACADEMIC ALUMNI' : language === 'FR' ? 'PARCOURS ACADÉMIQUE' : 'fampianarana noraisina'}
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
                          {language === 'EN' ? 'PORTFOLIO DOMAIN' : language === 'FR' ? 'DOMAINE DE PORTEFEUILLE' : 'sehatra ifantohana'}
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
                        {language === 'EN' ? 'TRACK RECORD HIGH-VOLUME MILESTONES' : language === 'FR' ? 'HISTORIQUE DES JALONS CLÉS' : 'ireo zava-bita lehibe teo aloha'}
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
                      At Vision Madagascar, we operate under a simple, non-negotiable directive: <strong>physical infrastructure is no longer separate from digital orchestration</strong>. For the past decade, the global markets treated these as distinct sectors. This division led to severe inefficiencies, carbon overloads, and fragmented operations.
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
                ) : language === 'FR' ? (
                  <>
                    <p>
                      Chez Vision Madagascar, nous opérons sous une directive simple et non négociable : <strong>l’infrastructure physique n’est plus séparée de l’orchestration numérique</strong>. Durant la dernière décennie, les marchés mondiaux ont traité ces secteurs comme distincts. Cette division a entraîné de graves inefficacités, des surcharges de carbone et des opérations fragmentées.
                    </p>
                    <p>
                      Nous avons fondé notre holding unifiée avec la ferme résolution de dissoudre ces frontières. En créant des écosystèmes définis par logiciel associant le tri robotisé des matériaux, des parcs éoliens haute tension et des systèmes de traitement génomique clinique, nous protégeons le capital souverain qui nous est alloué. Notre responsabilité est multigénérationnelle.
                    </p>
                    <p className="italic font-mono text-emerald-300 text-xs bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                      "Nous n’héritons pas d’actifs physiques ; nous construisons leur avenir numérique pour garantir qu’ils servent nos enfants dans un monde neutre en carbone."
                    </p>
                    <p>
                      Alors que nous anticipons l’année 2026 et au-delà, nous entrons dans un paysage climatique qui récompense la précision et l’audit transparent plutôt que le greenwashing. Nos registres cryptographiques ESG fournissent des preuves empiriques de nos progrès. Nous remercions nos partenaires municipaux et les groupes de retraite souverains pour leur confiance sans faille.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Ao amin’ny Vision Madagascar, miasa eo ambanin’ny fenitra tsotra sy tsy azo iadian-kevitra izahay: <strong>ny fotodrafitrasa ara-batana dia tsy misaraka ity fitaovana nomerika ity intsony</strong>. Nandritra ny folo taona lasa, ny tsena eran-tany dia nampitaha an’ireo ho sehatra roa samy hafa. Izany fisarahana izany dia niteraka tsy fahombiazana, famoahana carbone tafahoatra ary asa mikorontana.
                    </p>
                    <p>
                      Nanangana ity holding unifiée ity izahay mba handravana an’ireny sisintany ireny. Amin’ny alalan’ny famoronana tontolo nomerika mampifandray ny robotics, parcs éoliens ary genomic processing, dia miaro ny renivola nankinina taminay izahay. Manana andraikitra lehibe ho an’ny taranaka rehetra izahay.
                    </p>
                    <p className="italic font-mono text-emerald-300 text-xs bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                      "Tsy mandova fotsiny ny fotodrafitrasa ara-batana izahay, fa manangana ny ho aviny nomerika mba hahazoana antoka fa hanompo ny zanatsika ao anatin’ny tontolo tsy misy carbone izy ireo."
                    </p>
                    <p>
                      Rehefa mijery ny taona 2026 sy ny ho avy izahay, dia miditra amin’ny tontolo izay manome lanja ny fahitsiana sy ny mangarahara fa tsy ny greenwashing fotsiny.
                    </p>
                  </>
                )}
              </div>

              {/* CEO Signature Block */}
              <div className="mt-8 pt-6 border-t border-slate-900 flex justify-between items-end">
                <div>
                  <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block">
                    {language === 'EN' ? 'OFFICIAL INK SIGNATURE' : language === 'FR' ? 'SIGNATURE OFFICIELLE' : 'SINO OFISIALY MANAN-KERY'}
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
                          {language === 'EN' ? 'COMMITTEE CHAIR' : language === 'FR' ? 'PRÉSIDENT DU COMITÉ' : 'TALE JENERALY NY BIRAO'}
                        </span>
                        <span className="text-xs text-white font-semibold font-mono">{com.leadName}</span>
                      </div>

                      <div className="space-y-0.5">
                        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                          {language === 'EN' ? 'OVERSIGHT REALM' : language === 'FR' ? 'DOMAINE DE SURVEILLANCE' : 'SEHATRA ANDRAIKITRA'}
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
                  {language === 'EN' ? 'Fiduciary Audit Integrity Framework' : language === 'FR' ? 'Cadre d’intégrité de l’audit fiduciaire' : 'Drafitra Fanaovana Audit Fiduciaire'}
                </h5>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {language === 'EN' 
                    ? 'All operations are globally insured and bound in multi-million dollar reserves. Committee policies mandate immediate public ledger disclosure of material carbon deviations and audit findings.' 
                    : language === 'FR'
                    ? 'Toutes les opérations sont assurées à l’échelle mondiale et garanties par des réserves de plusieurs millions de dollars. Les politiques du comité imposent une publication immédiate de toute déviation de carbone.'
                    : 'Ny asa rehetra dia manana fiantohana manerantany ary voaantoka tsara. Ny politika dia mandidy ny fampahafantarana mivantana ny fandrosoana sy ny fivoaran’ny carbone rehetra.'}
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
                {language === 'EN' ? 'Initiator Name / Title' : language === 'FR' ? 'Nom / Titre de l’initiateur' : 'Anarana / Andraikitry ny Mpanentana'}
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
                {language === 'EN' ? 'Private Secure Email' : language === 'FR' ? 'E-mail privé sécurisé' : 'E-mail manokana azo antoka'}
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
                {language === 'EN' ? 'Secretariat Message Brief' : language === 'FR' ? 'Brève description pour le secrétariat' : 'Hafatra fohy ho an’ny Sekretera'}
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
