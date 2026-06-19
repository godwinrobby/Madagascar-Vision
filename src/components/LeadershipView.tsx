import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  ArrowUpRight,
  Fingerprint,
  Layers,
  History,
  CheckCircle2,
  Lock,
  Globe,
  Radio,
  FileCheck,
  Search,
  Activity
} from 'lucide-react';
import { LEADERS, SECTORS } from '../data/corporateData';
import { getTranslatedLeaders, getTranslatedSectors } from '../utils/translator';
import { Helmet } from './Helmet';
import { DynamicIcon } from './DynamicIcon';

interface LeadershipViewProps {
  language: 'EN' | 'FR' | 'MG';
}

export function LeadershipView({ language }: LeadershipViewProps) {
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>('ngo');
  const [activeTab, setActiveTab] = useState<'companies' | 'ceo-message' | 'committees' | 'philosophy'>('companies');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'realestate' | 'energy' | 'logistics' | 'social'>('all');
  const [expandedQa, setExpandedQa] = useState<number | null>(null);

  // Scroll to top of tab view when active tab changes, smooth animation
  useEffect(() => {
    const section = document.getElementById('leadership-tabs-anchor');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeTab]);

  const translations = {
    EN: {
      title: 'Our Executive Stewardship',
      sub: 'Governing portfolios of integrated physical and algorithmic systems. Vision Madagascar aligns supreme compliance benchmarks to sovereign-scale sustainability mandates.',
      ceoTitle: 'Office of the CEO',
      ceoMessageTitle: 'Fiduciary Duty in a Complex World',
      ceoSub: 'A message from Helena Vance-Sterling, Chief Executive Officer.',
      comTitle: 'Board Committees & Governance',
      comSub: 'Bespoke oversight mechanisms enforcing audit protocols, resource intelligence, and absolute transparency.',
      philTitle: 'Leadership Philosophy & Q&A',
      philSub: 'Engaging real-world strategies for multi-generational holding development, structural durability, and public alignment.',
      contactBoard: 'Institutional Secretariat Hotline',
      contactBoardSub: 'Establish secure cryptographic communications with the Office of the Board Secretariat.',
      sendSecBtn: 'Initiate Board Liaison Protocol',
      successMsg: 'Cryptographic liaison handshakes committed. Our corporate secretary will respond within 24 hours.',
      readFull: 'Verify Executive Bio Logs',
      dossierTitle: 'Sovereign Executive Portfolio Dossier',
      statusLabel: 'Fiduciary Security Status',
      activeStatus: 'ACTIVE // CABINET PORTFOLIO AUTHORIZED',
      focusHeader: 'Strategic Focus Indices',
      timelineHeader: 'Chronological Operational Milestones',
      credentialsHeader: 'Accredited Credentials & Panels',
      tenetsTitle: 'Holding Governance Tenets',
      tenetsSub: 'Sovereign benchmarks guiding every capital allocation decision.'
    },
    FR: {
      title: 'Notre Direction Exécutive',
      sub: 'Gestion de portefeuilles de systèmes physiques et algorithmiques intégrés. Vision Madagascar aligne les critères de conformité les plus élevés avec des mandats de durabilité à l’échelle souveraine.',
      ceoTitle: 'Bureau de la Direction Générale',
      ceoMessageTitle: 'Devoir Fiduciaire dans un Monde Complexe',
      ceoSub: 'Un message de Helena Vance-Sterling, Directrice Générale.',
      comTitle: 'Comités du Conseil & Gouvernance',
      comSub: 'Mécanismes de surveillance sur mesure appliquant des protocoles d’audit d’une rigueur absolue et d’intelligence des risques.',
      philTitle: 'Philosophie de Direction & Questions-Réponses',
      philSub: 'Engager des stratégies concrètes pour le déploiement d’actifs multigénérationnels et l’harmonie institutionnelle.',
      contactBoard: 'Ligne Directrice Institutionnelle',
      contactBoardSub: 'Établir des communications sécurisées avec le Secrétariat du Conseil d’Administration.',
      sendSecBtn: 'Initier le protocole de liaison',
      successMsg: 'Protocole de liaison cryptographique validé. Notre secrétariat général vous contactera sous 24 heures.',
      readFull: 'Vérifier la biographie exécutive',
      dossierTitle: 'Dossier de Portefeuille Exécutif Souverain',
      statusLabel: 'Statut de Sécurité Fiduciaire',
      activeStatus: 'ACTIF // PORTEFEUILLE CABINET AUTORISÉ',
      focusHeader: 'Indices d’Impact Stratégique',
      timelineHeader: 'Jalons Opérationnels Chronologiques',
      credentialsHeader: 'Diplômes Accrédités & Collèges',
      tenetsTitle: 'Piliers de Gouvernance du Holding',
      tenetsSub: 'Normes de référence guidant chaque décision d’investissement.'
    },
    MG: {
      title: 'Ny Mpitarika sy Birao Fitantanana',
      sub: 'Mitantana ireo fotodrafitrasa sy rafitra nomerika arifomba. Vision Madagascar dia mampifanaraka ny fenitra avo indrindra amin’ny tontolo iainana sy ny fitantanana.',
      ceoTitle: 'Biraon’ny Tale Jeneraly',
      ceoMessageTitle: 'Andraikitra amin’ny Tontolo Sarotra',
      ceoSub: 'Hafatra avy amin’ny Tilikambon’ny fitantanana, Helena Vance-Sterling.',
      comTitle: 'Vaomieram-pitantanana sy ny Birao',
      comSub: 'Drafitra fanaraha-maso, fitantanana ny loza mety hitranga ary tamberisina mangarahara.',
      philTitle: 'Fahendren’ny Mpitondra sy Dialogy',
      philSub: 'Fijerena tetikasa ho an’ny taranaka rehetra ary fandraharahana maharitra miaraka amin’ny vahoaka.',
      contactBoard: 'Fifandraisana Ofisialy amin’i Vima',
      contactBoardSub: 'Mifandray mivantana sy azo antoka amin’ny Sekretera lehiben’ny Birao.',
      sendSecBtn: 'Handefa fangatahana ho an’ny Birao',
      successMsg: 'Voaray ny fangatahanao. Hamaly anao ao anatin’ny 24 ora ny sekretera malalaka.',
      readFull: 'Hijery ny mombamomba azy feno',
      dossierTitle: 'Dossier ny mombamomba ny mpitantana',
      statusLabel: 'Sata momba ny fiarovana sy fitantanana',
      activeStatus: 'MISOKATRA // NAHOAZANA FAHAZOAN-DALANA',
      focusHeader: 'Tondro sy Andraikitra Ifantohana',
      timelineHeader: 'Tantara sy ny dingana vita teo amin’ny asa',
      credentialsHeader: 'Mari-boninahitra sy Fankatoavana ofisialy',
      tenetsTitle: 'Fitsipiky ny fitantanana ny Vima',
      tenetsSub: 'Tondrozotra mifehy ny fampiasam-bola maharitra rehetra.'
    }
  }[language];

  // Rich leader details augmented with focus percentages
  const leaderDetails: Record<string, { 
    education: { EN: string; FR: string; MG: string };
    history: { EN: string; FR: string; MG: string }[];
    credentials: string[];
    focus: { EN: string; FR: string; MG: string };
    metrics: { name: string; value: number }[];
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
      credentials: ['SIA Approved Certified', 'Fellow of World Fiduciary Institute', 'WEF Panelist'],
      focus: {
        EN: 'Sovereign Capital Deployment, Multipolar Geopolitical Risk, Sustainable Portfolios',
        FR: 'Déploiement de capitaux souverains, risques géopolitiques multipolaires, portefeuilles durables',
        MG: 'Fampiasana ny renivola, ny fitantanana ny loza ara-politika ary ny fitahirizana maharitra'
      },
      metrics: [
        { name: 'Sovereign Capital Deployment', value: 98 },
        { name: 'Geopolitical Risk Balancing', value: 95 },
        { name: 'Multipolar Strategy', value: 92 }
      ]
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
      },
      metrics: [
        { name: 'Digital Twin Simulations', value: 97 },
        { name: 'Zero-Knowledge Auditing', value: 94 },
        { name: 'Neural Supply Routing', value: 91 }
      ]
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
      },
      metrics: [
        { name: 'Infrastructure Mooring Integrity', value: 96 },
        { name: 'Hydro-Kinetic Physics Modeling', value: 93 },
        { name: 'Microgrid Stability Tuning', value: 90 }
      ]
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
      },
      metrics: [
        { name: 'Carbon Decoupling Audits', value: 98 },
        { name: 'Scope 1-3 Absolute Mapping', value: 95 },
        { name: 'Biodiversity Matrix Security', value: 93 }
      ]
    }
  };

  const committees = [
    {
      name: { EN: 'ESG Stewardship & Decarbonization Council', FR: 'Conseil de gérance ESG & Décarbonation', MG: 'Filan-kevitra ESG sy ny Fanafoanana ny Karbona' },
      leadName: 'Jonathan Reynolds',
      focusArea: { EN: 'Direct Scope 1, 2, and 3 validation across core material supply channels.', FR: 'Validation directe des Scopes 1, 2 et 3 dans les principaux canaux d’approvisionnement en matériaux.', MG: 'Fanamarinana mivantana ny Scope 1, 2, ary 3 amin’ny famatsiana akora.' },
      meetings: { EN: 'Bi-weekly audits, compliant with CSRD / GRI regulations.', FR: 'Audits bihebdomadaires, conformes aux réglementations CSRD / GRI.', MG: 'Fanadihadiana indroa isan-kerinandro, manaraka ny CSRD / GRI.' },
      accent: 'border-emerald-500/20 text-emerald-400 bg-emerald-950/10'
    },
    {
      name: { EN: 'Risk, Cyber, & Audit Fiduciary Committee', FR: 'Comité de Fiducie des Risques, de la Cybersécurité & d’Audit', MG: 'Vaomieran’ny loza, ny teknolojia, sy ny fanadihadiana' },
      leadName: 'Marcus K. Chen, PhD',
      focusArea: { EN: 'Real-time threat modeling, SCADA system encryption, and financial transparency ledger tracking.', FR: 'Modélisation des menaces en temps réel, cryptage des systèmes SCADA et suivi du registre de transparence financière.', MG: 'Drafitra fampisehoana loza amin’ny fotoana tena izy sy encryption SCADA.' },
      meetings: { EN: 'Monthly secure sessions, certified TLS standards.', FR: 'Sessions mensuelles sécurisées, normes TLS certifiées.', MG: 'Fivoriana isam-bolana azo antoka manaraka ny fenitra TLS.' },
      accent: 'border-amber-500/20 text-amber-450 bg-amber-955/10'
    },
    {
      name: { EN: 'Executive Capital Allocation Review', FR: 'Examen de l’allocation des capitaux exécutifs', MG: 'Vaomiera mpanadihady ny fampiasam-bola tsara' },
      leadName: 'Helena Vance-Sterling',
      focusArea: { EN: 'Vetting sovereign acquisitions, renewable park infrastructure bonding, and strategic R&D budgets.', FR: 'Évaluation des acquisitions souveraines, cautionnement des infrastructures éoliennes et budgets stratégiques de R&D.', MG: 'Fanamarinana ny fividianana tetikasa goavana sy ny tetibola R&D.' },
      meetings: { EN: 'Quarterly board summits and as-needed emergency sessions.', FR: 'Sommets trimestriels du conseil et sessions d’urgence au besoin.', MG: 'Fivoriana isaky ny telo volana na isaky ny misy maika.' },
      accent: 'border-cyan-500/20 text-cyan-400 bg-cyan-950/10'
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

  const translatedLeaders = getTranslatedLeaders(LEADERS, language);
  const translatedSectors = getTranslatedSectors(SECTORS, language);

  const SUBSIDIARY_TEAMS = [
    {
      id: 'ngo',
      name: 'ViMa NGO',
      roles: [
        { title: { EN: 'Founding Honorary President', FR: 'Président d’Honneur Fondateur', MG: 'Filoha mpanorina mendrika' }, name: 'Zouzar BOUKA' },
        { title: { EN: 'President', FR: 'Président', MG: 'Filoha' }, name: 'Me Frederika BANKS' },
        { title: { EN: 'Secretary', FR: 'Secrétaire', MG: 'Sekretera' }, name: 'Gina RATOMPOARILALAINA' },
        { title: { EN: 'Treasurer', FR: 'Trésorier', MG: 'Mpitahiry vola' }, name: 'Jonah Razafindratsitoagny' }
      ]
    },
    {
      id: 'tsingy',
      name: 'ViMa Tsingy Bay',
      roles: [
        { title: { EN: 'Co-Manager', FR: 'Co-Gérant', MG: 'Mpiara-mitantana' }, name: 'Koureich FIDAHOUSSEN' },
        { title: { EN: 'Co-Manager', FR: 'Co-Gérant', MG: 'Mpiara-mitantana' }, name: 'Sandeep LODHA' },
        { title: { EN: 'Operations Manager', FR: 'Directeur des Opérations', MG: 'Tale miandraikitra ny asa' }, name: 'ZANDRY Jean Phinédit' },
        { title: { EN: 'Administrative and Financial Manager', FR: 'Responsable Administratif et Financier', MG: 'Mpitantana fitantanan-draharaha sy fitantanam-bola' }, name: 'Jonah Razafindratsitoagny' }
      ]
    },
    {
      id: 'water',
      name: 'ViMa Water Bank',
      roles: [
        { title: { EN: 'Manager', FR: 'Gérant', MG: 'Mpitantana' }, name: 'Mourtaza FAZLEABASSE' },
        { title: { EN: 'Director of Operations and Projects', FR: 'Directeur des Opérations et des Projets', MG: 'Tale misahana ny asa sy ny tetikasa' }, name: 'Rado Rasolomanana' },
        { title: { EN: 'Administrative and Financial Manager', FR: 'Responsable Administratif et Financier', MG: 'Mpitantana fitantanan-draharaha sy fitantanam-bola' }, name: 'Mialisoatiana RAZANABOLOLONA' }
      ]
    },
    {
      id: 'france',
      name: 'ViMa France',
      roles: [
        { title: { EN: 'Managing Director', FR: 'Directeur Général', MG: 'Tale Jeneraly' }, name: 'Mourtaza FAZLEABASSE' }
      ]
    },
    {
      id: 'wtc',
      name: 'World Trade Center Antananarivo',
      roles: [
        { title: { EN: 'Co-Manager', FR: 'Co-Gérant', MG: 'Mpiara-mitantana' }, name: 'Koureich FIDAHOUSSEN' },
        { title: { EN: 'Co-Manager', FR: 'Co-Gérant', MG: 'Mpiara-mitantana' }, name: 'Sandeep LODHA' },
        { title: { EN: 'Operations Manager', FR: 'Directeur des Opérations', MG: 'Tale miandraikitra ny asa' }, name: 'Kaish SABIR' },
        { title: { EN: 'Administrative and Financial Director', FR: 'Directeur Administratif et Financier', MG: 'Tale miadidy ny fitantanana sy ny fitantanam-bola' }, name: 'Rojo RAKOTOMALALA' }
      ]
    },
    {
      id: 'management',
      name: 'ViMa Management',
      roles: [
        { title: { EN: 'Co-Director-at-Large', FR: 'Co-Directeur Général délégué', MG: 'Mpiara-mitantana ho an’ny rehetra' }, name: 'Koureich FIDAHOUSSEN' },
        { title: { EN: 'Co-Director-at-Large', FR: 'Co-Directeur Général délégué', MG: 'Mpiara-mitantana ho an’ny rehetra' }, name: 'Sandeep LODHA' },
        { title: { EN: 'General Counsel', FR: 'Conseiller Juridique Général', MG: 'Mpanolotsaina ara-dalàna ankapobeny' }, name: 'Gina RATOMPOARILALAINA' },
        { title: { EN: 'Internal Auditor', FR: 'Auditeur Interne', MG: 'Mpanamarina anatiny' }, name: 'Eugénie RAKOTOARISON' },
        { title: { EN: 'Administrative and Financial Manager', FR: 'Responsable Administratif et Financier', MG: 'Mpitantana fitantanan-draharaha sy fitantanam-bola' }, name: 'Jonah Razafindratsitoagny' }
      ]
    },
    {
      id: 'agulhas',
      name: 'ViMa Agulhas',
      roles: [
        { title: { EN: 'Co-Manager', FR: 'Co-Gérant', MG: 'Mpiara-mitantana' }, name: 'Koureich FIDAHOUSSEN' },
        { title: { EN: 'Co-Manager', FR: 'Co-Gérant', MG: 'Mpiara-mitantana' }, name: 'Sandeep LODHA' },
        { title: { EN: 'Director of Operations and Projects', FR: 'Directeur des Opérations et des Projets', MG: 'Tale misahana ny asa sy ny tetikasa' }, name: 'Mourtaza FAZLEABASSE' },
        { title: { EN: 'Administrative and Financial Director', FR: 'Directeur Administratif et Financier', MG: 'Tale miadidy ny fitantanana sy ny fitantanam-bola' }, name: 'Rojo RAKOTOMALALA' }
      ]
    },
    {
      id: 'realestate',
      name: 'ViMa Real Estate',
      roles: [
        { title: { EN: 'Co-Manager', FR: 'Co-Gérant', MG: 'Mpiara-mitantana' }, name: 'Koureich FIDAHOUSSEN' },
        { title: { EN: 'Co-Manager', FR: 'Co-Gérant', MG: 'Mpiara-mitantana' }, name: 'Sandeep LODHA' },
        { title: { EN: 'Director of Operations and Projects', FR: 'Directeur des Opérations et des Projets', MG: 'Tale misahana ny asa sy ny tetikasa' }, name: 'Mourtaza FAZLEABASSE' },
        { title: { EN: 'Administrative and Financial Director', FR: 'Directeur Administratif et Financier', MG: 'Tale miadidy ny fitantanana sy ny fitantanam-bola' }, name: 'Rojo RAKOTOMALALA' }
      ]
    },
    {
      id: 'mall',
      name: 'ViMa Majungasaurus Mall',
      roles: [
        { title: { EN: 'Co-Deputy Head', FR: 'Co-Responsable Adjoint', MG: 'Mpiandray andraikitra lefitra' }, name: 'Koureich FIDAHOUSSEN' },
        { title: { EN: 'Co-Deputy Head', FR: 'Co-Responsable Adjoint', MG: 'Mpiandray andraikitra lefitra' }, name: 'Sandeep LODHA' },
        { title: { EN: 'Director of Operations and Projects', FR: 'Directeur des Opérations et des Projets', MG: 'Tale misahana ny asa sy ny tetikasa' }, name: 'Mourtaza FAZLEABASSE' },
        { title: { EN: 'Administrative and Financial Director', FR: 'Directeur Administratif et Financier', MG: 'Tale miadidy ny fitantanana sy ny fitantanam-bola' }, name: 'Rojo RAKOTOMALALA' },
        { title: { EN: 'Operations Manager', FR: 'Responsable des Opérations', MG: 'Mpitantana ny asa' }, name: 'Jean de Cléry RABEMANANTSOA' }
      ]
    },
    {
      id: 'serv',
      name: "ViMa Serv'",
      roles: [
        { title: { EN: 'Co-Manager', FR: 'Co-Gérant', MG: 'Mpiara-mitantana' }, name: 'Koureich FIDAHOUSSEN' },
        { title: { EN: 'Co-Manager', FR: 'Co-Gérant', MG: 'Mpiara-mitantana' }, name: 'Sandeep LODHA' },
        { title: { EN: 'Administrative and Financial Manager', FR: 'Responsable Administratif et Financier', MG: 'Mpitantana fitantanan-draharaha sy fitantanam-bola' }, name: 'Charles RAZAFINDRALAMBO' },
        { title: { EN: 'Key Account Manager', FR: 'Responsable Grands Comptes', MG: 'Mpitantana mpanjifa lehibe' }, name: 'Gina RAMANANTSOA' }
      ]
    },
    {
      id: 'dis',
      name: 'ViMa Dis',
      roles: [
        { title: { EN: 'Co-Manager', FR: 'Co-Gérant', MG: 'Mpiara-mitantana' }, name: 'Koureich FIDAHOUSSEN' },
        { title: { EN: 'Co-Manager', FR: 'Co-Gérant', MG: 'Mpiara-mitantana' }, name: 'Sandeep LODHA' },
        { title: { EN: 'Director of Operations "UAE"', FR: 'Directeur des Opérations "UAE"', MG: 'Tale misahana ny asa "UAE"' }, name: 'Rado Rasolomanana' },
        { title: { EN: 'Operations and Business Development Manager', FR: 'Responsable du Développement Opérationnel & Commercial', MG: 'Mpitantana fampandrosoana ara-barotra sy asa' }, name: 'Frederika BERG' },
        { title: { EN: 'Sales and Marketing Manager', FR: 'Responsable des Ventes et du Marketing', MG: 'Mpitantana ny varotra sy ny dokam-barotra' }, name: 'Valérie Andriamiadanarivo' },
        { title: { EN: 'Administrative and Financial Manager', FR: 'Responsable Administratif et Financier', MG: 'Mpitantana fitantanan-draharaha sy fitantanam-bola' }, name: 'Jonah Razafindratsitoagny' }
      ]
    },
    {
      id: 'woods',
      name: 'ViMa Woods',
      roles: [
        { title: { EN: 'Co-Chairman of the Board of Directors', FR: 'Co-Président du Conseil d’Administration', MG: 'Mpiara-mitantana ny Birao fitantanana' }, name: 'Koureich FIDAHOUSSEN & Sandeep LODHA' },
        { title: { EN: 'Administrator', FR: 'Administrateur', MG: 'Mpitantana' }, name: 'Lova RAKOTONDRABARY' },
        { title: { EN: 'Executive Director', FR: 'Directeur Exécutif', MG: 'Tale Mpanatanteraka' }, name: 'Toni RAKOTOMALALA' }
      ]
    },
    {
      id: 'hybrid',
      name: 'ViMa Hybrid Energy',
      roles: [
        { title: { EN: 'Manager', FR: 'Gérant', MG: 'Mpitantana' }, name: 'Mourtaza FAZLEABASSE' },
        { title: { EN: 'Director of Operations and Projects', FR: 'Directeur des Opérations et des Projets', MG: 'Tale misahana ny asa sy ny tetikasa' }, name: 'Rado Rasolomanana' },
        { title: { EN: 'Administrative and Financial Manager', FR: 'Responsable Administratif et Financier', MG: 'Mpitantana fitantanan-draharaha sy fitantanam-bola' }, name: 'Mialisoatiana RAZANABOLOLONA' }
      ]
    },
    {
      id: 'hydro',
      name: 'ViMa Hydro',
      roles: [
        { title: { EN: 'Managing Director', FR: 'Directeur Général', MG: 'Tale Jeneraly' }, name: 'Mourtaz FAZLEA BASS' },
        { title: { EN: 'Operations and Project Directors', FR: 'Directeur des Opérations et des Projets', MG: 'Tale misahana ny asa sy ny tetikasa' }, name: 'Rado Rasolomanana' },
        { title: { EN: 'Administrative and Financial Manager', FR: 'Responsable Administratif et Financier', MG: 'Mpitantana fitantanan-draharaha sy fitantanam-bola' }, name: 'Mialisoatiana RAZANABOLOLONA' }
      ]
    },
    {
      id: 'yoga',
      name: 'Z-Yoga',
      roles: [
        { title: { EN: 'Co-Chairmen of the Board of Directors', FR: 'Co-Président du Conseil d’Administration', MG: 'Mpiara-mitantana ny Birao fitantanana' }, name: 'Koureich FIDAHOUSSEN & Sandeep LODHA' },
        { title: { EN: 'Executive Director', FR: 'Directeur Exécutif', MG: 'Tale Mpanatanteraka' }, name: 'Zion GODSON' },
        { title: { EN: 'Chief Financial Officer', FR: 'Directeur Financier', MG: 'Tale misahana ny fitantanam-bola' }, name: 'Rojo RAKOTOMALALA' }
      ]
    },
    {
      id: 'construction',
      name: 'ViMa Construction',
      roles: [
        { title: { EN: 'Co-Chairmen of the Board of Directors', FR: 'Co-Président du Conseil d’Administration', MG: 'Mpiara-mitantana ny Birao fitantanana' }, name: 'Koureich FIDAHOUSSEN & Sandeep LODHA' },
        { title: { EN: 'Managing Director', FR: 'Directeur Général', MG: 'Tale Jeneraly' }, name: 'Mourtaza FAZLEABASSE' }
      ]
    },
    {
      id: 'mining',
      name: 'ViMa Mining',
      roles: [
        { title: { EN: 'Co-Manager', FR: 'Co-Gérant', MG: 'Mpiara-mitantana' }, name: 'Koureich FIDAHOUSSEN' },
        { title: { EN: 'Co-Manager', FR: 'Co-Gérant', MG: 'Mpiara-mitantana' }, name: 'Sandeep LODHA' },
        { title: { EN: 'Administrative and Financial Manager', FR: 'Responsable Administratif et Financier', MG: 'Mpitantana fitantanan-draharaha sy fitantanam-bola' }, name: 'Mialisoatiana RAZANABOLOLONA' }
      ]
    },
    {
      id: 'oilgas',
      name: 'ViMa Oil And Gas',
      roles: [
        { title: { EN: 'Co-Manager', FR: 'Co-Gérant', MG: 'Mpiara-mitantana' }, name: 'Koureich FIDAHOUSSEN' },
        { title: { EN: 'Co-Manager', FR: 'Co-Gérant', MG: 'Mpiara-mitantana' }, name: 'Sandeep LODHA' },
        { title: { EN: 'Director of Operations and Projects', FR: 'Directeur des Opérations et des Projets', MG: 'Tale misahana ny asa sy ny tetikasa' }, name: 'Mourtaza FAZLEABASSE' },
        { title: { EN: 'Administrative and Financial Manager', FR: 'Responsable Administratif et Financier', MG: 'Mpitantana fitantanan-draharaha sy fitantanam-bola' }, name: 'Mialisoatiana RAZANABOLOLONA' }
      ]
    }
  ];

  const COMPANY_CATEGORIES: Record<string, 'social' | 'realestate' | 'energy' | 'logistics'> = {
    ngo: 'social',
    tsingy: 'realestate',
    water: 'social',
    france: 'realestate',
    wtc: 'logistics',
    management: 'realestate',
    agulhas: 'logistics',
    realestate: 'realestate',
    mall: 'realestate',
    serv: 'social',
    dis: 'logistics',
    woods: 'social',
    hybrid: 'energy',
    hydro: 'energy',
    yoga: 'social',
    construction: 'energy',
    mining: 'energy',
    oilgas: 'energy',
    maromokotro: 'realestate'
  };

  const companyLeaderMapping: Record<string, string> = {
    ngo: 'lead-4',
    tsingy: 'lead-1',
    water: 'lead-4',
    france: 'lead-1',
    wtc: 'lead-2',
    management: 'lead-1',
    agulhas: 'lead-3',
    realestate: 'lead-1',
    mall: 'lead-1',
    serv: 'lead-4',
    dis: 'lead-2',
    woods: 'lead-4',
    hybrid: 'lead-3',
    hydro: 'lead-3',
    yoga: 'lead-4',
    construction: 'lead-3',
    mining: 'lead-3',
    oilgas: 'lead-3',
    maromokotro: 'lead-1'
  };

  const selectedCompany = translatedSectors.find(s => s.id === selectedCompanyId) || translatedSectors[0];
  const activeLeaderId = companyLeaderMapping[selectedCompanyId] || 'lead-1';
  const currentLeader = translatedLeaders.find(l => l.id === activeLeaderId) || translatedLeaders[0];
  const activeDetail = leaderDetails[activeLeaderId] || leaderDetails['lead-1'];
  const currentCompanyTeam = SUBSIDIARY_TEAMS.find(t => t.id === selectedCompanyId) || SUBSIDIARY_TEAMS[0];

  const filteredCompanies = translatedSectors.filter(comp => {
    const matchesCategory = activeCategory === 'all' || COMPANY_CATEGORIES[comp.id] === activeCategory;
    const matchesSearch = comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          comp.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Secretariat contact state
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
      setTimeout(() => setSecSuccess(false), 5500);
    }, 1500);
  };

  const sectionTitle = {
    EN: 'Complementary talents',
    FR: 'Talents complémentaires',
    MG: 'Talenta mifameno'
  }[language];

  const sectionSub = {
    EN: "Vision Madagascar's subsidiaries benefit from strategic management provided by recognized experts. Each entity relies on solid skills in management, finance, operations and development.",
    FR: "Les filiales de Vision Madagascar bénéficient d’une gestion stratégique assurée par des experts reconnus. Chaque entité s’appuie sur des compétences solides en gestion, finance, opérations et développement.",
    MG: "Ny rantsan’ny Vision Madagascar dia mahazo tombontsoa amin’ny fitantanana stratejika ataon’ireo manam-pahaizana manokana. Ny rantsana tsirairary dia miankina amin’ny fahaizana mifehy fitantanana, fitantanam-bola sy ny fampandrosoana."
  }[language];

  const sectionSubIntro = {
    EN: "Expert governance at the service of the group's ambitions",
    FR: "Une gouvernance d'experts au service des ambitions du groupe",
    MG: "Fitantanana manam-pahaizana eo amin'ny fanatratrarana ny tanjon'ny vondrona"
  }[language];

  return (
    <div id="leadership-view-wrapper" className="space-y-24 pb-20 relative animate-fade-in text-slate-200">
      <Helmet
        title={language === 'EN' ? 'Fiduciary Leadership & Board' : language === 'FR' ? 'Direction Fiduciaire & Conseil' : 'Fitarihana sy ny Birao Fitantanana'}
        description="Fiduciary leadership and corporate governance representing deep intersectoral industry experience and strategic growth."
        keywords="fiduciary leadership, managing partners, corporate governance, strategic growth, board of directors, Vision Madagascar, Aetheris Group"
        language={language}
      />
      
      {/* Absolute Decorative Accent Lights */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] bg-teal-500/3 rounded-full blur-[120px] pointer-events-none" />

      {/* 1. Header Hero Banner - Editorial Asymmetric Styling */}
      <section className="relative pt-32 pb-4 text-center max-w-5xl mx-auto px-4" id="leadership-header">
        <div className="inline-flex items-center space-x-2 bg-slate-950/80 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-xl shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[10px] text-emerald-400 tracking-wider uppercase font-bold">
            {sectionSubIntro}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-4">
          {sectionTitle}
        </h1>
        
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-5 max-w-3xl mx-auto font-light">
          {sectionSub}
        </p>
      </section>

      {/* Main Switcher Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TAB 1: SERVICE COMPANIES DIRECTORY */}
        {activeTab === 'companies' && (
          <div className="space-y-12 animate-fade-in" id="leaders-board-tab">
            
            {/* Centered Search & Category Filter Box - Full View with Larger Typography */}
            <div className="w-full glass rounded-3xl p-6 sm:p-8 border border-slate-900/90 space-y-6 shadow-2xl bg-slate-950/25">
              
              {/* Search Bar */}
              <div className="relative max-w-3xl mx-auto">
                <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-emerald-450 animate-pulse" />
                <input
                  type="text"
                  placeholder={language === 'EN' ? 'Search company or sector...' : language === 'FR' ? 'Rechercher une filiale ou un secteur...' : 'Tadiavo ny orinasa na sehatra...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-3.5 sm:py-4.5 bg-slate-950 border border-slate-900/90 rounded-2xl text-xs sm:text-sm text-white placeholder-slate-500 font-sans focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all font-light"
                />
              </div>

              {/* Horizontal Category Filters */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-2">
                {[
                  { id: 'all', EN: 'All Companies', FR: 'Toutes les filiales', MG: 'Orinasa Rehetra' },
                  { id: 'realestate', EN: 'Property', FR: 'Immobilier', MG: 'Harena' },
                  { id: 'energy', EN: 'Energy', FR: 'Énergie', MG: 'Angovo' },
                  { id: 'logistics', EN: 'Trade & Logistics', FR: 'Commerce & Logistique', MG: 'Varotra' },
                  { id: 'social', EN: 'Social & NGO', FR: 'Social & ONG', MG: 'Sosialy' }
                ].map((cat) => {
                  const isCatActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id as any);
                        const matches = translatedSectors.filter(comp => {
                          const matchesCat = cat.id === 'all' || COMPANY_CATEGORIES[comp.id] === cat.id;
                          const matchesS = comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                            comp.description.toLowerCase().includes(searchQuery.toLowerCase());
                          return matchesCat && matchesS;
                        });
                        if (matches.length > 0 && !matches.some(m => m.id === selectedCompanyId)) {
                          setSelectedCompanyId(matches[0].id);
                        }
                      }}
                      className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all border outline-none cursor-pointer ${
                        isCatActive
                          ? 'bg-gradient-to-r from-emerald-500/10 to-teal-500/5 border-emerald-500/30 text-emerald-450 shadow-md shadow-emerald-500/5'
                          : 'bg-slate-950/40 text-slate-500 border-transparent hover:text-slate-300 hover:bg-slate-900/30'
                      }`}
                    >
                      {cat[language] || cat.EN}
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* Split layout: Selector board on the left (asymmetric grid) & Premium Dossier on the right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Grid selector of executives */}
              <div className="lg:col-span-4 space-y-6">

                <div className="border-b border-slate-900 pb-3 flex justify-between items-center px-1">
                  <span className="text-xs font-mono tracking-widest text-slate-400 uppercase font-black font-sans">
                    {language === 'EN' ? 'SUBSIDIARY REGISTER' : language === 'FR' ? 'FILIALES DU GROUPE' : 'REKOTRY NY RANTSANA'}
                  </span>
                  <span className="text-xs font-mono text-emerald-400">{filteredCompanies.length} {language === 'EN' ? 'UNITS' : language === 'FR' ? 'ENTITÉS' : 'RANTSANA'}</span>
                </div>
                
                {/* Scrollable company elements */}
                <div className="space-y-3.5 max-h-[520px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-900 scrollbar-track-transparent">
                  {filteredCompanies.length === 0 ? (
                    <div className="text-center py-10 border border-slate-900/60 rounded-2xl bg-slate-950/30">
                      <span className="text-sm text-slate-500 font-light block">
                        {language === 'EN' ? 'No registered companies found.' : language === 'FR' ? 'Aucune filiale trouvée.' : 'Tsy nisy orinasa hita.'}
                      </span>
                    </div>
                  ) : (
                    filteredCompanies.map((comp) => {
                      const isSelected = comp.id === selectedCompanyId;
                      const compTeam = SUBSIDIARY_TEAMS.find(t => t.id === comp.id);
                      const leaderName = compTeam ? compTeam.roles[0].name : 'Zouzar BOUKA';
                      const leaderTitle = compTeam ? (compTeam.roles[0].title[language] || compTeam.roles[0].title.EN) : '';
                      const compCategoryLabel = {
                        social: { EN: 'Social & Eco', FR: 'Social & Éco', MG: 'Sosialy' },
                        realestate: { EN: 'Property & Li', FR: 'Immo & Liaison', MG: 'Harena' },
                        energy: { EN: 'Energy & Infr', FR: 'Énergie & Infr', MG: 'Angovo' },
                        logistics: { EN: 'Trade & Log', FR: 'Varotra & Log', MG: 'Varotra' }
                      }[COMPANY_CATEGORIES[comp.id] || 'social'][language];

                      return (
                        <button
                          key={comp.id}
                          onClick={() => setSelectedCompanyId(comp.id)}
                          className={`w-full text-left p-4 rounded-xl border transition-all flex items-start space-x-3.5 relative overflow-hidden group outline-none cursor-pointer ${
                            isSelected
                              ? 'bg-slate-900/90 border-emerald-500/40 shadow-xl shadow-emerald-955/10'
                              : 'bg-slate-950/40 border-slate-900/80 hover:border-slate-800/80 hover:bg-slate-900/20'
                          }`}
                          id={`btn-company-tab-${comp.id}`}
                        >
                          {isSelected && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-teal-500" />
                          )}
                          
                          {/* Subsidiary Division Icon dynamically fetched */}
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
                            isSelected 
                              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-bold' 
                              : 'bg-slate-950 border-slate-900 text-slate-500 group-hover:text-slate-300'
                          }`}>
                            <DynamicIcon name={comp.icon} size={16} />
                          </div>

                          <div className="flex-grow min-w-0">
                            <div className="flex items-center justify-between gap-1.5">
                              <span className={`text-[10px] font-mono tracking-wider uppercase font-bold ${
                                isSelected ? 'text-emerald-400' : 'text-slate-500'
                              }`}>
                                {compCategoryLabel}
                              </span>
                              <span className="text-[10px] font-mono text-slate-500">ACTIVE DIVISION</span>
                            </div>
                            
                            <h4 className={`text-sm font-black font-sans tracking-wide uppercase mt-1 transition-colors ${
                              isSelected ? 'text-white' : 'text-slate-300 group-hover:text-slate-100'
                            }`}>
                              {comp.name}
                            </h4>
                            
                            <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between gap-2">
                              <span className="text-xs text-slate-400 font-light truncate block">
                                <span className={`${isSelected ? 'text-emerald-450' : 'text-slate-500'} font-mono text-[10px] uppercase font-bold mr-1`}>{leaderTitle}:</span>
                                <strong className={`${isSelected ? 'text-white font-semibold' : 'text-slate-300'}`}>
                                  {leaderName}
                                </strong>
                              </span>
                            </div>
                          </div>

                          <ChevronRight 
                            size={12} 
                            className={`text-slate-600 shrink-0 transition-transform self-center ${
                              isSelected ? 'translate-x-1 text-emerald-450' : 'group-hover:translate-x-0.5 text-slate-500'
                            }`} 
                          />
                        </button>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Right Column: Dynamic Deep Sovereign Dossier */}
              <div className="lg:col-span-8" id="leader-dossier-panel">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedCompanyId}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="glass rounded-3xl p-6 sm:p-10 text-left border border-slate-900/90 relative overflow-hidden shadow-2xl space-y-8"
                  >
                    {/* Abstract watermarked ledger pattern inside the dossier */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-dotted-pattern opacity-10 pointer-events-none" />
                    <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-emerald-500/2 rounded-full blur-3xl pointer-events-none" />

                    {/* --- LEVEL 1: SUBSIDIARY COMPANY HEADER PROFILE --- */}
                    <div className="space-y-4 border-b border-white/5 pb-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex items-center space-x-3.5">
                          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-955/20 shrink-0">
                            <DynamicIcon name={selectedCompany.icon} size={22} />
                          </div>
                          <div>
                            <span className="text-xs font-mono text-emerald-450 tracking-widest block font-bold uppercase">
                              {language === 'EN' ? 'GLOBAL DIVISION REGISTER' : language === 'FR' ? 'FILIALE CERTIFIÉE' : 'ANTSAN-DRAHARAHA OFISIALY'}
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase mt-0.5 leading-none">
                              {selectedCompany.name}
                            </h2>
                          </div>
                        </div>
                        
                        <div className="text-xs font-mono text-slate-400 bg-slate-950/60 px-4 py-2 rounded-xl border border-white/5 self-start">
                          REGID_{selectedCompany.id.toUpperCase()}_REV03
                        </div>
                      </div>

                      <p className="text-slate-300 text-sm leading-relaxed font-light">
                        {selectedCompany.description}
                      </p>

                      {/* Subsidiary Metrics & Services Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                        {/* Metrics Panel */}
                        <div className="bg-slate-950/40 border border-slate-900 p-4.5 rounded-2xl space-y-3">
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                            {language === 'EN' ? 'Performance Indices / Metrics' : language === 'FR' ? 'Indices de Performance' : 'Tondro fitsarana asa'}
                          </span>
                          <div className="grid grid-cols-3 gap-2">
                            {selectedCompany.metrics?.map((m: any, i: number) => (
                              <div key={i} className="text-center p-2 rounded-lg bg-slate-950 border border-white/5 space-y-1">
                                <span className="text-xs sm:text-sm font-black text-white block truncate">{m.value}</span>
                                <span className="text-[9px] font-mono text-slate-500 block truncate uppercase leading-none">{m.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Specialty Services List */}
                        <div className="bg-slate-950/40 border border-slate-900 p-4.5 rounded-2xl space-y-3">
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                            {language === 'EN' ? 'Strategic Business Fields' : language === 'FR' ? 'Champs d’Action Stratégiques' : 'Saha iasàna manokana'}
                          </span>
                          <div className="space-y-1.5">
                            {selectedCompany.services?.slice(0, 3).map((serv: string, i: number) => (
                              <div key={i} className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300 font-light">
                                <span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
                                <span className="truncate">{serv}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* --- LEVEL 2: GOVERNING BOARD EXECUTIVE PROFILE CONTROLS --- */}
                    <div className="space-y-6 pt-2">
                      <div className="flex items-center space-x-2 bg-slate-950/45 border border-slate-900/60 rounded-xl px-3 py-1.5 w-fit">
                        <Users size={12} className="text-emerald-450" />
                        <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                          {language === 'EN' ? 'GOVERNING LEADERSHIP & KEY TALENTS' : language === 'FR' ? 'CORPS DE GOUVERNANCE ET TALENTS CLÉS' : 'REKOTRY NY MPITARIKA AMBONY'}
                        </span>
                      </div>

                      {/* Subsidiary Leaders Hierarchy Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {currentCompanyTeam?.roles.map((role: any, idx: number) => (
                          <div 
                            key={idx} 
                            className="bg-slate-950/40 p-4 rounded-xl border border-slate-900 hover:border-emerald-500/25 transition-all group duration-300 flex flex-col justify-between"
                          >
                            <div className="space-y-1">
                              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block font-bold group-hover:text-emerald-300 transition-colors">
                                {role.title[language] || role.title.EN}
                              </span>
                              <h4 className="text-white text-sm sm:text-base font-extrabold tracking-tight font-sans mt-0.5">
                                {role.name}
                              </h4>
                            </div>
                            <div className="mt-4 pt-1.5 border-t border-slate-900/60 text-[9px] font-mono text-slate-500 flex justify-between items-center">
                              <span>ACTIVE PORTFOLIO</span>
                              <span className="text-slate-400 font-bold uppercase">VERIFIED</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Overlap of standard operational timeline and metric indicators as supplemental professional depth */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-900">
                        {/* Dynamic Strategic Focus Gauges */}
                        <div className="space-y-4">
                          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block font-bold">
                            {translations.focusHeader}
                          </span>
                          <div className="space-y-3">
                            {activeDetail.metrics.map((met, idx) => (
                              <div key={idx} className="bg-slate-950/40 p-3 rounded-xl border border-slate-900 space-y-1.5">
                                <div className="flex justify-between items-center text-[10.5px] font-mono">
                                  <span className="text-slate-400 truncate pr-2">{met.name}</span>
                                  <span className="text-white font-black">{met.value}%</span>
                                </div>
                                <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden p-0.5 border border-white/5">
                                  <div
                                    style={{ width: `${met.value}%` }}
                                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Timeline Milestones Section */}
                        <div className="space-y-4">
                          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block font-bold animate-pulse">
                            {translations.timelineHeader}
                          </span>
                          <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1">
                            {activeDetail.history.map((hist, i) => (
                              <div key={i} className="flex gap-3 items-start bg-slate-950/20 p-3 rounded-lg border border-slate-900/80 hover:bg-slate-900/10 transition-all">
                                <div className="w-6 h-6 rounded bg-emerald-950/20 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                                  0{i+1}
                                </div>
                                <p className="text-[11px] text-slate-350 font-light leading-relaxed">{hist[language]}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Credentials Verification List */}
                      <div className="space-y-3 pt-4 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block font-black mb-1.5">{translations.credentialsHeader}</span>
                          <div className="flex flex-wrap gap-1">
                            {activeDetail.credentials.map((cred, i) => (
                              <span key={i} className="text-[10.5px] font-mono bg-emerald-950/30 text-emerald-300 border border-emerald-500/10 px-2 py-0.5 rounded font-medium">
                                {cred}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="text-[10.5px] font-mono text-slate-500 bg-slate-950/40 p-2 border border-slate-900/80 rounded-lg shrink-0 w-full sm:w-auto text-center sm:text-right font-bold">
                          SHA PROTOCOL: SEC-{selectedCompany.name.toUpperCase().substring(0, 4)}-AUTHENTICATED
                        </div>
                      </div>
                    </div>

                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: OFFICE OF THE CEO ADDRESS (IMPROVED EXECUTIVE REPORT STYLE) */}
        {activeTab === 'ceo-message' && (
          <div className="max-w-4xl mx-auto animate-fade-in" id="ceo-address-tab">
            <div className="glass rounded-3xl p-6 sm:p-12 text-left border border-slate-900 relative overflow-hidden shadow-2xl space-y-10">
              
              {/* Asymmetric Header grid inside the address */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-slate-900 pb-8">
                
                {/* Visual quote accent column */}
                <div className="md:col-span-8 space-y-3">
                  <div className="inline-flex items-center space-x-2 bg-emerald-950/10 border border-emerald-500/20 rounded-lg px-2.5 py-1">
                    <Award size={10} className="text-emerald-400" />
                    <span className="font-mono text-xs text-emerald-300 font-bold uppercase tracking-wider">{translations.ceoTitle}</span>
                  </div>
                  
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-none uppercase">
                    {translations.ceoMessageTitle}
                  </h2>
                  
                  <p className="text-xs text-slate-450 leading-relaxed font-mono">
                    {translations.ceoSub} // TRANSCRIPTED ENCRYPTED LOGIC
                  </p>
                </div>

                {/* Oversized vertical portrait photo with glowing background frame */}
                <div className="md:col-span-4 flex justify-start md:justify-end">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 p-0.5 shadow-lg group-hover:scale-102 transition-transform">
                      <img
                        src={translatedLeaders[0].imageUrl || "https://picsum.photos/seed/executive_woman_portrait/250/250"}
                        alt="Helena Vance-Sterling"
                        className="w-full h-full object-cover rounded-xl grayscale tracking-tight"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* Premium Editorial Core Article Dropcap Style */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Main letter body text column */}
                <div className="lg:col-span-8 text-sm text-slate-300 leading-relaxed font-light space-y-6">
                  {language === 'EN' ? (
                    <>
                      <p className="text-sm">
                        At Vision Madagascar, we operate under a simple, non-negotiable directive: <strong className="text-white font-medium">physical infrastructure is no longer separate from digital orchestration</strong>. For the past decade, the global markets treated these as distinct sectors. This outdated division led to critical logistics failures, excess carbon footprints, and fragmented municipal operations.
                      </p>
                      <p>
                        We founded our unified holding with the complete resolve to dissolve these boundaries permanently. By creating software-defined operating ecosystems matching heavy robotic sorting installations, high-voltage offshore wind farms, and clinical genomic processing systems, we secure and multiply every dollar of institutional capital.
                      </p>
                      <div className="border-l-2 border-emerald-500/40 bg-emerald-950/10 p-5.5 rounded-r-xl italic font-mono text-emerald-400 text-xs space-y-1 shadow-inner">
                        <span className="block text-[10px] font-mono text-slate-400 uppercase not-italic font-bold">KEY CORPORATE DICTUM // OFFICERS MANUAL</span>
                        <p className="leading-relaxed">
                          "We do not inherit static physical assets; we build their digital coordinate twins to guarantee they serve our children in a carbon-neutral multipolar world."
                        </p>
                      </div>
                      <p>
                        As we navigate the years ahead, our global industrial landscape will heavily reward precise mathematical audit tracking and empirical carbon metrics over empty greenwashing slogans. Our ESG blockchain frameworks provide unalterable, authentic proof of our progress. We thank our public municipal partners and corporate secretaria for their strict, unwavering faith.
                      </p>
                    </>
                  ) : language === 'FR' ? (
                    <>
                      <p className="text-sm">
                        Chez Vision Madagascar, nous opérons sous une directive simple et absolue : <strong className="text-white font-medium">l’infrastructure physique n’est plus séparée de l’orchestration numérique</strong>. Durant la dernière décennie, les marchés mondiaux ont traité ces secteurs comme distincts. Cette division a entraîné de graves inefficacités et des opérations fragmentées.
                      </p>
                      <p>
                        Nous avons fondé notre holding unifiée avec l’ambition absolue de dissoudre ces frontières. En créant des écosystèmes définis par logiciel mariant tri robotisé de pointe, parcs éoliens haute tension et laboratoires de traitement génomique clinique, nous garantissons la longévité de nos portefeuilles face aux aléas de la transition planétaire.
                      </p>
                      <div className="border-l-2 border-emerald-500/40 bg-emerald-950/10 p-5.5 rounded-r-xl italic font-mono text-emerald-400 text-xs space-y-1 shadow-inner">
                        <span className="block text-[10px] font-mono text-slate-400 uppercase not-italic font-bold">DICTUM CLÉ DE GOUVERNANCE</span>
                        <p className="leading-relaxed">
                          "Nous n’héritons pas d’actifs physiques statiques ; nous projetons leur double numérique pour qu’ils servent de piliers d’efficience d’un monde net-zéro complexe."
                        </p>
                      </div>
                      <p>
                        À l’horizon 2026, la rigueur climatique exigera des bilans empiriques et des vérifications strictes. Nos registres exclusifs constituent la preuve indiscutable de notre trajectoire carbone solide. Nous saluons l’engagement indéfectible des administrations souveraines à nos côtés.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm">
                        Ao amin’ny Vision Madagascar, miasa eo ambanin’ny fenitra tsy azo iadian-kevitra izahay: <strong className="text-white font-medium">ny fotodrafitrasa ara-batana dia tsy misaraka intsony amin’ny fitaovana nomerika</strong>. Nandritra ny folo taona lasa, ny tsena eran-tany dia nampitaha an’ireo ho sehatra roa samy hafa. Izany fisarahana izany dia niteraka tsy fahombiazana teo amin’ny fampandrosoana.
                      </p>
                      <p>
                        Nanangana ity holding unifiée ity izahay mba handravana an’ireny sisintany ireny. Amin’ny alalan’ny famoronana tontolo nomerika mampifandray ny robotics, parcs éoliens ary genomic processing, dia miaro ny renivola nankinina taminay izahay ka manome antoka ny amin’ny zava-bita.
                      </p>
                      <div className="border-l-2 border-emerald-500/40 bg-emerald-950/10 p-5.5 rounded-r-xl italic font-mono text-emerald-400 text-xs space-y-1 shadow-inner">
                        <span className="block text-[10px] font-mono text-slate-400 uppercase not-italic font-bold">HAFATRA MANAN-KERY FAHASALAMAN’NY VIMA</span>
                        <p className="leading-relaxed">
                          "Tsy mandova fotsiny ny fotodrafitrasa ara-batana izahay, fa manangana ny ho aviny nomerika mba hahazoana antoka fa hanompo ny zanatsika ao anatin’ny tontolo tsy misy carbone izy ireo."
                        </p>
                      </div>
                      <p>
                        Rehefa mijery ny taona 2026 sy the ho avy izahay, dia miditra amin’ny tontolo izay manome lanja ny fahitsiana sy ny mangarahara amin’ny alalan’ny technology matotra indrindra.
                      </p>
                    </>
                  )}
                </div>

                {/* Right Column: Decorative Gold Fiduciary Stamp & Signature Card */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Signature block styled elegantly */}
                  <div className="bg-slate-950/60 p-6 rounded-2xl border border-slate-900/80 space-y-6">
                    <div>
                      <span className="text-xs text-slate-400 font-mono tracking-widest uppercase block font-bold">
                        {language === 'EN' ? 'OFFICIAL INK SIGNATURE' : language === 'FR' ? 'SIGNATURE OFFICIELLE' : 'SINO OFISIALY MANAN-KERY'}
                      </span>
                      <img 
                        src="https://signature.free.fr/sign/sign_large.png" 
                        alt="Signature log" 
                        className="w-32 h-12 object-contain grayscale invert opacity-75 my-4 pointer-events-none"
                        onError={(e)=>{
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <span className="font-serif italic text-xl text-white font-bold block tracking-wider mt-4">
                        Helena Vance-Sterling
                      </span>
                      <span className="text-xs font-mono text-emerald-400 block mt-1 uppercase">
                        Group Chief Executive, ViMa Holding
                      </span>
                    </div>

                    <div className="border-t border-slate-900 pt-4 text-[11px] font-mono text-slate-500 space-y-1">
                      <div>AES AUTH SHA-256 SECURED</div>
                      <div>CERTIFICATE ID // CEO-901-BETA</div>
                    </div>
                  </div>

                  {/* Trust Fiduciary Guild Badge */}
                  <div className="bg-gradient-to-br from-slate-950 to-slate-900 p-6 rounded-2xl border border-emerald-500/10 text-center space-y-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto animate-pulse">
                      <Shield size={16} />
                    </div>
                    <span className="block text-[10px] font-mono text-slate-400 uppercase font-bold">
                      Global Fiduciary Seal
                    </span>
                    <p className="text-[9px] text-slate-550 leading-snug">
                      Authorized by the Sovereign Wealth and Decarbonization Joint Assembly Committee.
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>
        )}

        {/* TAB 3: BOARD COMMITTEES (BENTO-GRID MODERN LAYOUT) */}
        {activeTab === 'committees' && (
          <div className="space-y-10 animate-fade-in" id="governance-committees-tab">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
              <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/20 px-3 py-1 rounded-full border border-emerald-500/20 uppercase tracking-widest font-bold">
                AUDITING PROTOCOLS & GOVERNANCE
              </span>
              <h3 className="text-3xl font-black text-white tracking-tight uppercase leading-none">
                {translations.comTitle}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-light">
                {translations.comSub}
              </p>
            </div>

            {/* Bento Grid: Varied dimensions, unique accent colors and background patterns */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Committee 1: ESG (Takes 7/12 columns on desktop for bento feel) */}
              <div className="md:col-span-7 glass hover:border-emerald-500/30 rounded-3xl p-6 sm:p-8 text-left flex flex-col justify-between min-h-[350px] relative overflow-hidden group transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute inset-0 bg-dotted-pattern opacity-5 pointer-events-none" />

                <div className="space-y-6">
                  <div className="flex justify-between items-center bg-slate-950/60 p-3 rounded-xl border border-white/5 width-full">
                    <div className="flex items-center space-x-2">
                       <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <Leaf size={16} />
                      </div>
                      <span className="text-xs font-mono text-slate-300 font-extrabold uppercase">COMMITTEE FILE // SEC-01</span>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 animate-pulse flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                      COMPLIANCE ACTIVE
                    </span>
                  </div>

                  <h4 className="text-white text-lg sm:text-xl font-bold font-sans tracking-tight leading-tight group-hover:text-emerald-400 transition-colors">
                    {committees[0].name[language]}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1 bg-slate-950/45 p-3 rounded-lg border border-white/5">
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block font-bold">COMMITTEE CHAIR</span>
                      <span className="text-xs text-white font-semibold font-mono">{committees[0].leadName}</span>
                    </div>
                    <div className="space-y-1 bg-slate-950/45 p-3 rounded-lg border border-white/5">
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block font-bold">OVERSIGHT REALM</span>
                      <p className="text-xs text-slate-300 font-light leading-snug line-clamp-2">
                        {committees[0].focusArea[language]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-900/60 pt-4 mt-6 flex justify-between items-center text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1"><History size={12} /> {committees[0].meetings[language]}</span>
                  <span className="text-emerald-400 uppercase font-bold tracking-widest text-xs">GRI / CSRD VERIFIED</span>
                </div>
              </div>

              {/* Committee 2: Cyber & Audit (Takes 5/12 columns on desktop for bento offset) */}
              <div className="md:col-span-5 glass hover:border-amber-500/30 rounded-3xl p-6 sm:p-8 text-left flex flex-col justify-between min-h-[350px] relative overflow-hidden group transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/5 rounded-full blur-[60px] pointer-events-none" />
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center bg-slate-950/60 p-3 rounded-xl border border-white/5 width-full">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-955 border border-amber-500/10 flex items-center justify-center text-amber-400">
                        <Cpu size={16} />
                      </div>
                      <span className="text-xs font-mono text-slate-300 font-extrabold uppercase">SEC-02</span>
                    </div>
                    <span className="text-xs font-mono text-amber-400 uppercase font-semibold">CIPHER LOCK // STABLE</span>
                  </div>

                  <h4 className="text-white text-base sm:text-lg font-bold font-sans tracking-tight leading-tight group-hover:text-amber-400 transition-colors">
                    {committees[1].name[language]}
                  </h4>

                  <div className="space-y-2.5">
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block font-bold">COMMITTEE CHAIR</span>
                      <span className="text-xs text-white font-semibold font-mono">{committees[1].leadName}</span>
                    </div>
                    <div className="space-y-1 bg-slate-950/30 p-2.5 rounded-lg border border-white/5">
                      <p className="text-xs text-slate-350 leading-relaxed font-light">
                        {committees[1].focusArea[language]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-900/60 pt-4 mt-6 flex justify-between items-center text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1"><History size={12} /> {committees[1].meetings[language]}</span>
                  <span className="text-amber-400 uppercase tracking-wider text-xs font-mono">TLS SECURED</span>
                </div>
              </div>

              {/* Committee 3: Executive Capital Allocation Review (Full Width 12/12 Bento Bottom Row) */}
              <div className="md:col-span-12 glass hover:border-cyan-500/35 rounded-3xl p-6 sm:p-8 text-left relative overflow-hidden group transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                <div className="absolute inset-y-0 right-0 w-80 bg-gradient-to-l from-cyan-500/5 to-transparent rounded-r-3xl pointer-events-none" />
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  <div className="md:col-span-5 space-y-4">
                     <div className="inline-flex items-center space-x-2 bg-cyan-950/20 border border-cyan-500/10 rounded-lg px-2.5 py-1">
                      <div className="w-5 h-5 bg-cyan-950 rounded border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs">
                        <Scale size={11} />
                      </div>
                      <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">CAPITAL_MATRIX // SEC-03</span>
                    </div>

                    <h4 className="text-white text-lg sm:text-xl font-bold font-sans tracking-tight leading-tight group-hover:text-cyan-400 transition-colors">
                      {committees[2].name[language]}
                    </h4>

                    <div className="flex items-center gap-4 text-xs font-mono text-slate-405">
                      <span className="flex items-center gap-1"><History size={12} /> {committees[2].meetings[language]}</span>
                      <span className="text-cyan-400 font-bold uppercase tracking-wider">SECURE ESCROW AUTHORIZED</span>
                    </div>
                  </div>

                  <div className="md:col-span-4 bg-slate-950/50 p-5 rounded-2xl border border-slate-900 flex flex-col justify-center space-y-1.5 h-full">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block font-bold">OVERSIGHT REALM & RESPONSIBILITY</span>
                    <p className="text-xs text-slate-350 leading-relaxed font-light">
                      {committees[2].focusArea[language]}
                    </p>
                  </div>

                  <div className="md:col-span-3 bg-slate-950/50 p-5 rounded-2xl border border-slate-905 flex flex-col justify-center space-y-2.5 text-center sm:text-left h-full">
                    <div>
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block font-bold mb-0.5">COMMITTEE CHAIR</span>
                      <span className="text-sm text-white font-extrabold font-mono">{committees[2].leadName}</span>
                    </div>
                    <div className="text-xs font-mono text-slate-400 uppercase leading-none">
                      Active Bonding Reserves: $150M+
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Core Integrity Charter Frame */}
            <div className="glass p-6 sm:p-8 rounded-3xl border border-slate-900 text-left max-w-4xl mx-auto flex flex-col sm:flex-row gap-6 items-center shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/2 rounded-full blur-2xl pointer-events-none" />
              <div className="w-12 h-12 rounded-2xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-950/40">
                <Shield size={20} />
              </div>
              <div className="space-y-1.5">
                <h5 className="text-sm font-bold text-white font-sans uppercase tracking-wide">
                  {language === 'EN' ? 'Fiduciary Audit Integrity Framework' : language === 'FR' ? 'Cadre d’intégrité de l’audit fiduciaire' : 'Drafitra Fanaovana Audit Fiduciaire'}
                </h5>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {language === 'EN' 
                    ? 'All transactions, project developments, and ESG mandates are globally insured and backed by multi-million dollar reserves. Standing committee policies enforce absolute digital ledger disclosure of structural milestones, material carbon deviations, and executive audit logs.' 
                    : language === 'FR'
                    ? 'Toutes les opérations sont assurées à l’échelle mondiale et garanties par des réserves importantes. Les comités imposent la publication en temps réel de toute variation carbone sur registre décentralisé public.'
                    : 'Ny asa rehetra dia manana fiantohana manerantany ary voaantoka tsara. Ny politika dia mandidy ny fampahafantarana mivantana ny fandrosoana sy ny fivoaran’ny carbone rehetra handalovana.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: LEADERSHIP PHILOSOPHY (ELEGANT HORIZONTAL-SPLIT LAYOUT) */}
        {activeTab === 'philosophy' && (
          <div className="max-w-6xl mx-auto animate-fade-in" id="philosophy-qa-tab">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
              <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/20 px-3 py-1 rounded-full border border-emerald-500/20 uppercase tracking-widest font-bold">
                STEWARDSHIP FRAMEWORK & CONVERSATIONS
              </span>
              <h3 className="text-3xl font-black text-white tracking-tight leading-none uppercase">
                {translations.philTitle}
              </h3>
              <p className="text-slate-450 text-xs sm:text-sm leading-relaxed font-light">
                {translations.philSub}
              </p>
            </div>

            {/* Horizontal Split Layout: Left side has permanent Tenet Cards, right side has interactive accordion Accordion Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Core Holding Tenets */}
              <div className="lg:col-span-5 glass p-6 sm:p-8 rounded-3xl border border-slate-900 text-left space-y-6 relative overflow-hidden shadow-lg h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/3 rounded-full blur-3xl pointer-events-none" />
                
                <div className="space-y-1">
                  <h4 className="text-white text-base font-bold font-sans tracking-tight">
                    {translations.tenetsTitle}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-mono">
                    {translations.tenetsSub}
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { num: '01', title: { EN: 'Empirical Decoupling', FR: 'Découplage Empirique', MG: 'Fanafoanana ny karbôna' }, desc: { EN: 'We systematically disconnect our material growth from linear resource consumption.', FR: 'Nous décorrélons systématiquement notre croissance de la consommation linéaire de matières.', MG: 'Mampiavaka ny fandrosoana tsy misy fanimbana tontolo iainana.' } },
                    { num: '02', title: { EN: 'Rigorous Fiduciary Stewardship', FR: 'Gérance Fiduciaire Rigoureuse', MG: 'Fitantanana ary tamberisina' }, desc: { EN: 'Sovereign-grade assets demand ironclad cryptographic accountability and public progress vectors.', FR: 'La transparence absolue constitue l’engagement suprême envers nos partenaires étatiques.', MG: 'Ny tamberisina feno no fanalahidin’ny fahatokisana rehetra.' } },
                    { num: '03', title: { EN: 'Decentralized Operational Resilience', FR: 'Résilience Opérationnelle Décentralisée', MG: 'Faharetana amin’ny sedra rehetra' }, desc: { EN: 'Distributing autonomous authority across sectors ensures unbroken operations during geopolitical crises.', FR: 'La décentralisation de l’autorité garantit la continuité des opérations en période de crise.', MG: 'Ny fitsinjaram-pahefana dia miantoka ny fandidiana tsara na dia misy krizy aza.' } }
                  ].map((tenet, idx) => (
                    <div key={idx} className="bg-slate-950/60 p-4.5 rounded-2xl border border-slate-900 hover:border-slate-850 transition-colors flex space-x-3.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-black flex items-center justify-center shrink-0">
                        {tenet.num}
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs text-white font-bold leading-none block">{tenet.title[language]}</span>
                        <p className="text-[10px] text-slate-400 font-light leading-relaxed">{tenet.desc[language]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Premium design Accordion cards */}
              <div className="lg:col-span-7 space-y-4">
                {philosophyQa.map((qa, index) => {
                  const isExpanded = expandedQa === index;
                  return (
                    <div 
                      key={index}
                      className="glass rounded-2xl border border-slate-900 overflow-hidden text-left transition-all duration-300 shadow-sm"
                    >
                      <button
                        onClick={() => setExpandedQa(isExpanded ? null : index)}
                        className="w-full p-6 text-left flex items-start justify-between space-x-4 bg-slate-900/10 hover:bg-slate-900/30 transition-colors outline-none cursor-pointer"
                        id={`qa-trigger-${index}`}
                      >
                        <div className="flex items-start space-x-3.5">
                          <div className="w-7 h-7 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-black flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                            Q
                          </div>
                          <span className="text-white text-xs sm:text-sm font-bold font-sans pr-4 leading-snug">
                            {qa.q[language]}
                          </span>
                        </div>
                        
                        <div className="text-slate-500 hover:text-white shrink-0 mt-1">
                          <MessageSquare size={16} className={`transition-transform duration-300 ${isExpanded ? 'rotate-90 text-emerald-400' : ''}`} />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="p-6 bg-slate-950 border-t border-slate-900 text-slate-350 leading-relaxed font-light text-xs sm:text-sm flex items-start space-x-3.5">
                              <div className="w-7 h-7 rounded-lg bg-teal-950/20 border border-teal-500/20 text-teal-400 text-xs font-mono font-black flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                A
                              </div>
                              <p className="leading-relaxed">{qa.a[language]}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        )}

      </div>

      {/* 2. Governing Secretariat Secure Contact Form - High-fidelity visual communication port */}
      <section className="max-w-2xl mx-auto px-4 pt-8" id="board-liaison-registry">
        <div className="glass rounded-3xl p-6 sm:p-10 text-left border border-slate-900 relative overflow-hidden shadow-2xl space-y-6">
          <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/3 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-dotted-pattern opacity-5 pointer-events-none" />
          
          <div className="pb-4 border-b border-slate-900 space-y-1.5">
            <h3 className="text-white font-extrabold text-lg sm:text-xl font-sans uppercase tracking-tight flex items-center space-x-2.5">
              <Sparkles size={18} className="text-emerald-400 animate-pulse" />
              <span>{translations.contactBoard}</span>
            </h3>
            <p className="text-slate-450 text-xs leading-normal font-light">
              {translations.contactBoardSub}
            </p>
          </div>

          <form onSubmit={handleSecSubmit} className="space-y-5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono tracking-widest font-black text-slate-500 uppercase">
                  {language === 'EN' ? 'Initiator Title / Name' : language === 'FR' ? 'Nom et Titre de l’initiateur' : 'Anarana sy Andraikitra'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={secName}
                    onChange={(e) => setSecName(e.target.value)}
                    required
                    placeholder="Managing Partner"
                    className="w-full bg-slate-950 border border-slate-800/80 focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 outline-none transition-all "
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono tracking-widest font-black text-slate-500 uppercase">
                  {language === 'EN' ? 'Private Secure Email' : language === 'FR' ? 'E-mail privé sécurisé' : 'E-mail manokana azo antoka'}
                </label>
                <input
                  type="email"
                  value={secEmail}
                  onChange={(e) => setSecEmail(e.target.value)}
                  required
                  placeholder="name@sovereign-holdings.ch"
                  className="w-full bg-slate-950 border border-slate-800/80 focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[10px] font-mono tracking-widest font-black text-slate-500 uppercase">
                {language === 'EN' ? 'Secretariat Message Briefing' : language === 'FR' ? 'Message confidentiel au secrétariat' : 'Hafatra fohy ho an’ny Sekretera'}
              </label>
              <textarea
                value={secMsg}
                onChange={(e) => setSecMsg(e.target.value)}
                required
                rows={4}
                placeholder="Indicate transaction numbers, physical portfolio locations, or specific material queries related to joint-stewardship..."
                className="w-full bg-slate-950 border border-slate-800/80 focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 outline-none transition-all resize-none leading-relaxed"
              />
            </div>

            {secSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/25 text-xs text-emerald-400 font-light flex items-start space-x-3"
              >
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{translations.successMsg}</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={secLoading}
              className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-extrabold rounded-xl text-xs uppercase tracking-widest transition-all shadow-xl shadow-emerald-950/10 flex items-center justify-center space-x-2 active:scale-98 disabled:opacity-50 cursor-pointer"
            >
              {secLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Lock size={13} className="opacity-80" />
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
