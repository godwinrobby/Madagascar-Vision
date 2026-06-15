import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data/corporateData';
import { DynamicIcon } from './DynamicIcon';
import { 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Sparkles, 
  Sliders, 
  Play, 
  CheckCircle2, 
  LineChart, 
  FileText, 
  Send, 
  Clock, 
  Award,
  Filter,
  Check,
  Smartphone,
  Gauge,
  Briefcase,
  TrendingUp,
  Globe,
  Settings,
  Shield
} from 'lucide-react';

interface ServicesViewProps {
  language: 'EN' | 'FR' | 'MG';
  selectedServiceId?: string | null;
}

const serviceTranslations = {
  EN: {
    'consulting': {
      name: 'Consulting & Board Advisory',
      desc: 'Navigating enterprise complexity with insights that reshape business models, capitalize on market disruptions, and enhance cross-sector portfolio operations.',
      features: ['Corporate Portfolio Strategy', 'Mergers & Acquisitions Structuring', 'Sovereign Wealth Consultation', 'Enterprise Risk Orchestration'],
      metricName: 'Sovereign Trust Rating',
      metricVal: 'AAA (99.4%)',
      phases: [
        { title: 'Portfolio Inventory Matrix', bio: 'Comprehensive auditing of active cross-sector assets and sovereign liabilities.' },
        { title: 'M&A Pipeline Structuring', bio: 'Strategic alignment matching investor capital reserves to high-impact opportunities.' },
        { title: 'Fiduciary Risk Simulation', bio: 'Subjecting the expansion blueprint to stress tests under global financial friction.' },
        { title: 'Continuous Board Briefing', bio: 'Real-time telemetry and portfolio compliance handoff to sovereign trustees.' }
      ]
    },
    'proj_management': {
      name: 'Next-Gen Project Management',
      desc: 'Orchestrating mega-scale engineering and operational projects utilizing integrated Agile pipelines, advanced AI risk modeling, and state-of-the-art cost controls.',
      features: ['Mega-Project Operational Auditing', 'Predictive Cost Mitigation', 'Cross-Border Supply Coordination', 'Sub-Contractor Quality Governance'],
      metricName: 'Delivery Integrity Rate',
      metricVal: '98.8% On-Time',
      phases: [
        { title: 'Master Schedule Blueprinting', bio: 'Coordinating cross-functional schedules and high-fidelity milestones.' },
        { title: 'Predictive Margin Optimization', bio: 'Utilizing machine risk models to mitigate potential cost overruns.' },
        { title: 'Supply Chain Mobilization', bio: 'Securing structural commodities and custom machinery protocols.' },
        { title: 'Operational Commissioning', bio: 'Systematic verification of asset integrity before commercial handoff.' }
      ]
    },
    'digital_trans': {
      name: 'Digital Transformation & AI',
      desc: 'Injecting deep technology blocks into legacy business structures—from serverless migrations to bespoke multi-modal custom enterprise models.',
      features: ['Generative Intelligent Agents', 'Decentralized Architecture Ingestion', 'Hybrid Cloud Management Solutions', 'Predictive Operational Analytics'],
      metricName: 'AI Model Deployment Speed',
      metricVal: 'Sub-ms Ingestion',
      phases: [
        { title: 'Legacy Architecture Audit', bio: 'Dissecting siloed systems and documenting technical debt profiles.' },
        { title: 'Edge Telemetry Deployment', bio: 'Provisioning secure local processing nodes for real-time data audit.' },
        { title: 'Generative Agent Training', bio: 'Training bespoke models on sovereign, sandboxed institutional databases.' },
        { title: 'Cognitive Orchestration', bio: 'Connecting human intelligence to real-time generative action feedback.' }
      ]
    },
    'infra_sol': {
      name: 'Infrastructure Solutions',
      desc: 'Deploying high-impact physical and technological framework foundations that accelerate commercial transit speed and physical facility resilience.',
      features: ['Multi-Modal Cargo Terminals', 'LEED-Certified Commercial Corridors', 'Smart Energy Grid Infrastructures', 'Water Treatment & Waste Recovery Assemblies'],
      metricName: 'Power Grid Reliability',
      metricVal: '99.999% Uptime',
      phases: [
        { title: 'Geospatial Site Survey', bio: 'Validating topological constraints and local community interface factors.' },
        { title: 'LEED Materials Sourcing', bio: 'Contracting strictly low-carbon concrete, steel, and structural compounds.' },
        { title: 'Autonomous Assemblage', bio: 'Initiating physical construction utilizing telemetry-equipped heavy machinery.' },
        { title: 'Grid Interface Handshake', bio: 'Connecting newly deployed physical grids with local municipal centers.' }
      ]
    },
    'operational_excellence': {
      name: 'Operational Excellence',
      desc: 'Harnessing advanced Lean Six Sigma principles and generative supply chain automation to maximize production yields while reducing global carbon outputs.',
      features: ['Autonomous Materials Flow', 'Predictive Machine Downtime Minimizer', 'Total Quality Management Systems', 'Sustainable Sourcing Integration'],
      metricName: 'Six Sigma Yield Peak',
      metricVal: '99.97% Defect-Free',
      phases: [
        { title: 'Process Waste Diagnostic', bio: 'Mapping workflow operations via high-resolution telemetry audits.' },
        { title: 'Lean Workflow Ingestion', bio: 'Optimizing assembly parameters to eliminate structural downtime.' },
        { title: 'Total Quality Automation', bio: 'Deploying sensor systems to audit line accuracy in real-time.' },
        { title: 'Micro-Yield Calibrations', bio: 'Continuous optimization of assets to minimize total carbon intensity.' }
      ]
    },
    'managed_services': {
      name: 'Strategic Managed Services',
      desc: 'Ensuring non-stop operational integrity via 24/7 Security Operations Centers, high-touch tech maintenance, and fully managed remote resources.',
      features: ['Full Stack Cloud Operation', 'Global Security operations (SOC)', 'Predictive Maintenance Contracts', 'Dynamic Remote Engineering Pool'],
      metricName: 'SOC Network Latency',
      metricVal: '<15m SLA Guard',
      phases: [
        { title: 'Network Security Audit', bio: 'Establishing baseline threat models and network security bounds.' },
        { title: 'Continuous SOC Connection', bio: 'Enabling 24/7 unified threat analysis with autonomous response overrides.' },
        { title: 'Predictive Lifecycle Alerts', bio: 'Proactive scheduling of equipment upgrades before failure manifests.' },
        { title: 'Managed Engineer Dispatch', bio: 'Dispatching field specialists instantly within guaranteed contract bounds.' }
      ]
    }
  },
  FR: {
    'consulting': {
      name: 'Conseil Stratégique & Gouvernance',
      desc: 'Naviguer dans la complexité de l’entreprise grâce à des perspectives qui remodèlent les modèles économiques, capitalisent sur les perturbations du marché et améliorent les opérations du portefeuille.',
      features: ['Stratégie de Portefeuille d\'Actifs', 'Structuration de Fusions-Acquisitions', 'Consultation en Fonds Souverains', 'Orchestration des Risques Majeurs'],
      metricName: 'Indice de Confiance Souveraine',
      metricVal: 'AAA (99.4%)',
      phases: [
        { title: 'Inventaire du Portefeuille', bio: 'Audit complet des actifs multisectoriels et des engagements réglementaires.' },
        { title: 'Structuration de Fusions', bio: 'Alignement stratégique des capitaux d\'investisseurs avec les opportunités d\'impact.' },
        { title: 'Simulation de Risque Fiduciaire', bio: 'Tests de résistance des plans d\'expansion face aux frictions macroéconomiques.' },
        { title: 'Briefing continu du Conseil', bio: 'Télémétrie en temps réel et transfert de conformité aux fiduciaires.' }
      ]
    },
    'proj_management': {
      name: 'Gestion de Projet Nouvelle Génération',
      desc: 'Orchestrer des mégaprojets d’ingénierie et opérationnels en utilisant des pipelines agiles intégrés, une modélisation avancée des risques par IA et des contrôles de coûts de pointe.',
      features: ['Audit Opérationnel de Mégaprojets', 'Atténuation Prédictive des Coûts', 'Coordination Logistique Transfrontalière', 'Gouvernance de la Qualité Sous-traitants'],
      metricName: 'Respect des Délais (SLA)',
      metricVal: '98.8% À l\'Heure',
      phases: [
        { title: 'Planification du Calendrier Maître', bio: 'Coordination des calendriers transversaux et des jalons de haute fidélité.' },
        { title: 'Atténuation Prédictive des Coûts', bio: 'Utilisation de modèles d\'IA pour prévenir les dépassements budgétaires.' },
        { title: 'Mobilisation de la Supply Chain', bio: 'Sécurisation des matières premières et des protocoles de transport.' },
        { title: 'Mise en Service Opérationnelle', bio: 'Vérification systématique de l\'intégrité des infrastructures de livraison.' }
      ]
    },
    'digital_trans': {
      name: 'Transformation Digitale & IA',
      desc: 'Injecter des blocs technologiques profonds dans les structures d\'entreprise héritées — des migrations serverless aux modèles d\'IA générative personnalisés.',
      features: ['Agents Intelligents Génératifs', 'Intégration d\'Architectures Décentralisées', 'Solutions de Cloud Hybride Géré', 'Analyses Opérationnelles Prédictives'],
      metricName: 'Vitesse de Traitement des Modèles',
      metricVal: 'SLA < 1 Milléme de seconde',
      phases: [
        { title: 'Audit des Systèmes Hérités', bio: 'Analyse des systèmes cloisonnés et cartographie de la dette technique.' },
        { title: 'Déploiement de Télémétrie Edge', bio: 'Mise en place de nœuds de traitement locaux sécurisés en temps réel.' },
        { title: 'Entraînement d\'Agents IA', bio: 'Entraînement de modèles d\'IA souverains sur bases de données isolées.' },
        { title: 'Orchestration Cognitive', bio: 'Connexion de l\'intelligence humaine aux retours d\'action automatisés.' }
      ]
    },
    'infra_sol': {
      name: 'Solutions d’Infrastructure',
      desc: 'Déployer des fondations d’infrastructures physiques et technologiques à fort impact qui accélèrent la vitesse de transit et la résilience des installations physiques.',
      features: ['Terminaux Cargos Multimodaux', 'Corridors Commerciaux Certifiés LEED', 'Réseaux d\'Énergie Intelligents', 'Traitement des Eaux et Valorisation des Déchets'],
      metricName: 'Disponibilité du Réseau Énergétique',
      metricVal: '99.999% En Ligne',
      phases: [
        { title: 'Étude de Site Géospatiale', bio: 'Validation des contraintes topologiques et des interfaces communautaires.' },
        { title: 'Sourcing Bas Carbone LEED', bio: 'Contrats stricts pour l\'acier et le béton à faibles émissions.' },
        { title: 'Assemblage Autonome', bio: 'Début des travaux avec des machines lourdes guidées par télémétrie.' },
        { title: 'Connexion Finale au Réseau', bio: 'Intégration des nouvelles infrastructures dans le réseau municipal local.' }
      ]
    },
    'operational_excellence': {
      name: 'Excellence Opérationnelle',
      desc: 'Exploiter les principes avancés de Lean Six Sigma et l\'automatisation de la chaîne logistique pour maximiser les rendements de production tout en réduisant l\'empreinte carbone.',
      features: ['Flux de Matériaux Autonomes', 'Planificateur de Maintenance Préventive', 'Systèmes de Management de la Qualité Totale', 'Intégration d\'Approvisionnement Durable'],
      metricName: 'Efficacité Six Sigma',
      metricVal: '99.97% Sans Défaut',
      phases: [
        { title: 'Diagnostic des Gaspillages', bio: 'Analyse fine des flux opérationnels via des capteurs IoT.' },
        { title: 'Intégration Lean', bio: 'Optimisation des paramètres de production pour éliminer les temps morts.' },
        { title: 'Automatisation de la Qualité', bio: 'Contrôle continu de l\'exactitude de la ligne d\'assemblage.' },
        { title: 'Micro-Ajustements de Rendement', bio: 'Optimisation pour un ratio carbone/rendement parfait.' }
      ]
    },
    'managed_services': {
      name: 'Services Gérés Stratégiques',
      desc: 'Garantir une intégrité opérationnelle ininterrompue via des centres de sécurité réseau (SOC) 24/7, une maintenance technique de haut niveau et des ressources expertes gérées à distance.',
      features: ['Gestion d\'Infrastructures Multi-Cloud', 'Opérations de Sécurité Globale (SOC)', 'Contrats de Maintenance Prédictive', 'Vivier d\'Ingénieurs Disponibles 24/7'],
      metricName: 'Temps de Réponse en Incident',
      metricVal: '<15m SLA Certifié',
      phases: [
        { title: 'Audit de Sécurité Réseau', bio: 'Établissement du modèle de menaces et des limites de périmètre.' },
        { title: 'Connexion au SOC Global', bio: 'Analyse continue des menaces avec déclencheurs automatiques.' },
        { title: 'Alertes Prédictives Matériel', bio: 'Remplacement proactif des équipements critiques avant usure.' },
        { title: 'Dépêche d\'Ingénieur Géré', bio: 'Envoi instantané de techniciens sous engagement strict du SLA.' }
      ]
    }
  },
  MG: {
    'consulting': {
      name: 'Mpanolo-tsaina Momba ny Fitantanana',
      desc: 'Fisandratana sy fitarihana amin\'ny alalan\'ny soso-kevitra stratejika mpanova rafitry ny fandraharahana sy fampitomboana ny fahombiazan\'ny fampiasam-bola marolafy.',
      features: ['Paikady sy teti-pampiasam-bola', 'Fandrindrana ny fividianana sy fikambanana', 'Fiarahana amin\'ny tahirim-panjakana', 'Fifehezana ny loza mety hitranga'],
      metricName: 'Taham-pitokisana Ofisialy',
      metricVal: 'AAA (99.4%)',
      phases: [
        { title: 'Famakafakana ny Fananana', bio: 'Fanaraha-maso feno ny fananana marolafy sy ny adidy ara-dalàna.' },
        { title: 'Rafi-pampiasam-Bola', bio: 'Fampifanarahana ny renivola sy ny tetikasa misy fiantraikany lehibe.' },
        { title: 'Fitsapana ny Loza Mitatao', bio: 'Fandinihana lalina ny tetika fampandrosoana manoloana ny sakana.' },
        { title: 'Tatitra Mitohy ho an\'ny Birao', bio: 'Fampitana tati-baovao amin\'ny fotoana tena izy amin\'ny mpitantana.' }
      ]
    },
    'proj_management': {
      name: 'Fitantanana Tetikasa Vaovao',
      desc: 'Fandrindrana ireo tetikasa goavana momba ny injeniera sy fampandehanan-draharaha mampiasa fomba fiasa Agile, famakafakana loza mampiasa AI, ary fanaraha-maso ny fandaniana.',
      features: ['Fanaraha-maso ny tetikasa goavana', 'Fisorohana ny fandaniana miampy', 'Fandrindrana ny lojistika manerantany', 'Fitantanana ny kalitao'],
      metricName: 'Fahombiazana sy Fotoana',
      metricVal: '98.8% Ara-Potoana',
      phases: [
        { title: 'Fandaharam-potoana lehibe', bio: 'Fandrindrana ny dingana isan-karazany sy ny tanjona ho tratrarina.' },
        { title: 'Fisorohana ny Fandaniana', bio: 'Fampiasana AI hisorohana ny fihoaran\'ny teti-bola.' },
        { title: 'Fampitaovana ny Tetikasa', bio: 'Fiarovana sy fividianana ny akora fototra sy ny milina.' },
        { title: 'Fandefasana ny asa', bio: 'Fitsapana ny fahafenoan\'ny fotodrafitrasa alohan\'ny fanolorana azy.' }
      ]
    },
    'digital_trans': {
      name: 'Fiovana Ara-Nomerao sy Intelizansa Artifisialy',
      desc: 'Fampidirana ny teknolojia avo lenta amin\'ireo fampandehanan-draharaha mahazatra — manomboka amin\'ny fifindra-monina amin\'ny rahona ka hatramin\'ny AI manokana.',
      features: ['AI mpanampy manokana', 'Teknolojia itsinjaram-pahefana', 'Fitantanana ny Rahona Marolafy', 'Famakafakana ny fandehan\'ny asa'],
      metricName: 'Hafainganan\'ny AI',
      metricVal: 'Haingana indrindra',
      phases: [
        { title: 'Famakafakana ny Rafitra Tranainy', bio: 'Fikarohana ny olana amin\'ireo rafitra efa nampiasaina hatramin\'izay.' },
        { title: 'Fametrahana Maso Télémétrie', bio: 'Fametrahana fitaovana handrefasana sy hanaraha-maso ny asa.' },
        { title: 'Fampianarana ny AI manokana', bio: 'Fampiofanana ny AI amin\'ny fampahalalana voaaro sy manokana.' },
        { title: 'Fampifandraisana ny Olona sy AI', bio: 'Fiarahana miasa eo amin\'ny saina maha-olona sy ny AI.' }
      ]
    },
    'infra_sol': {
      name: 'Vahaolana momba ny Fotodrafitrasa',
      desc: 'Fametrahana fotodrafitrasa matanjaka sy fitaovana ara-teknolojia manafaingana ny fitaterana sy manamafy ny trano sy izay rehetra mifandraika aminy.',
      features: ['Seranan-tsambo maoderina', 'Lalana ara-barotra nahazo fankatoavana LEED', 'Tambajotra herinaratra manan-tsaina', 'Fitantanana ny rano sy fako'],
      metricName: 'Fahazoana herinaratra',
      metricVal: '99.999% tsy tapaka',
      phases: [
        { title: 'Fandinihana ny Toerana', bio: 'Fanamarinana ny toe-tany sy ny fifandraisana amin\'ny vahoaka.' },
        { title: 'Fikarohana Akora ara-tontolo iainana', bio: 'Fampiasana vy sy simenitra tsy manimba tontolo iainana.' },
        { title: 'Fanorenana mampiasa Teknika', bio: 'Fanombohana ny asa fanorenana miaraka amin\'ireo milina vaventy.' },
        { title: 'Fampifandraisana amin\'ny Tambajotra', bio: 'Fampidirana ny fotodrafitrasa vaovao amin\'ny tambajotran-tanàna.' }
      ]
    },
    'operational_excellence': {
      name: 'Fahaiza-manao sy ny Fahombiazana',
      desc: 'Fampiasana ny fepetra Lean Six Sigma sy ny milina mandeha ho azy hanatsarana ny famokarana ary hanamaivanana ny famoahana entona karbona.',
      features: ['Fitaovana mandeha ho azy', 'Fikojakojana mialoha ny fahapotehana', 'Rafitra fanaraha-maso kalitao', 'Fividianana akora maharitra'],
      metricName: 'Fahombiazana Six Sigma',
      metricVal: '99.97% tsy misy kilema',
      phases: [
        { title: 'Fikarohana momba ny Fatiantoka', bio: 'Fandrefesana ny fatiantoka amin\'ny asa mampiasa fitaovana IoT.' },
        { title: 'Fampidirana ny fomba Lean', bio: 'Fandrindrana ny asa mba tsy hisian\'ny fotoana very maina.' },
        { title: 'Fanaraha-maso Kalitao', bio: 'Fanaraha-maso tsy tapaka ny fahamarinan\'ny famokarana.' },
        { title: 'Fanatsarana ny vokatra', bio: 'Fandrindrana farany mba hisian\'ny vokatra tsara indrindra.' }
      ]
    },
    'managed_services': {
      name: 'Tolotra sy Fitantanana ny Fitaovana',
      desc: 'Fisorohana tsy tapaka ny olana amin\'ny alalan\'ny fanaraha-maso 24/7, fikojakojana fitaovana amin\'ny fomba miavaka, ary mpiasa azo antsoina malalaka.',
      features: ['Fitantanana ny rahona feno', 'Fanaraha-maso ny filaminana (SOC)', 'Fikojakojana mialoha ny fahasimbana', 'Mpiandraikitra vonona 24/7'],
      metricName: 'Fotoana famaliana olana',
      metricVal: 'Latsaky ny 15 minitra',
      phases: [
        { title: 'Famakafakana ny Filaminana', bio: 'Famaritana ny olana mety hitranga amin\'ny tambajotra.' },
        { title: 'Fampifandraisana amin\'ny SOC', bio: 'Fanaraha-maso mitohy ny fandrahonana amin\'ny fifandraisana.' },
        { title: 'Fikojakojana ny Fitaovana', bio: 'Fanoloana ireo kojakoja alohan\'ny hahasimbany.' },
        { title: 'Fandefasana Injeniera', bio: 'Fandefasana mpahay manokana hanampy anao ara-potoana.' }
      ]
    }
  }
};

const layoutTranslations = {
  EN: {
    badge: 'SOVEREIGN CAPABILITIES',
    title: 'Our Executive Services & Technical Intelligence',
    subtitle: 'Deploying high-impact physical frameworks, sovereign technology architectures, and expert board-level advisory systems built to integrate and scale.',
    searchPlaceholder: 'Search specific capabilities...',
    allFilter: 'All Portfolios',
    advisoryFilter: 'Strategic Advisory & PM',
    techFilter: 'Digital & Intelligence',
    physicalFilter: 'Physical Infrastructure',
    activeServiceTitle: 'Primary Sovereign Capability Spotlight',
    fiduciaryHeader: 'Fiduciary Operational Diagnostics',
    featuresLabel: 'Primary Service Features',
    roadmapHeader: 'Continuous Deployment Roadmap',
    calculatorHeader: 'Sovereign Proposal & Protocol Estimator',
    calcLabelScale: 'Operational Horizon & Scope',
    calcLabelScope: 'Active Geographical Footprint',
    calcLabelAdvocacy: 'Strategic Priorities Checked',
    calcPriority1: 'Carbon Offset & Low-Carbon Ledger Audit',
    calcPriority2: 'Local Work Force Engagement & Integration',
    calcPriority3: 'Technology Transfer & Domestic IP Co-creation',
    calcButton: 'Compile Strategic Alignment Proposal',
    calcCompiling: 'Processing sovereign regulatory matrices...',
    calcCompiled: 'Corporate Proposal Briefing Created!',
    downloadBtn: 'Retrieve Sovereign Briefing Dossier',
    downloading: 'Preparing high-confidentiality PDF blueprint...',
    secStatus: 'SECURITY STATUS: CERTIFIED PASS',
    trustHeader: 'Sovereign Quality Validation Protocols',
    stat1: 'Active Corporate Segments',
    stat2: 'Cross-Sector Compliance',
    stat3: 'Continuous Support Grid'
  },
  FR: {
    badge: 'CAPACITÉS EXÉCUTIVES SOUVERAINES',
    title: 'Services Stratégiques & Intelligence Technique',
    subtitle: 'Mise en œuvre d’infrastructures physiques à fort impact, d’architectures technologiques souveraines et de conseil d’administration haut de gamme pour structurer et accompagner le développement.',
    searchPlaceholder: 'Rechercher une compétence...',
    allFilter: 'Tous les Portefeuilles',
    advisoryFilter: 'Conseil & Gestion de Projet',
    techFilter: 'Technologie & IA',
    physicalFilter: 'Infrastructure Physique',
    activeServiceTitle: 'Spotlight sur la Compétence Souveraine',
    fiduciaryHeader: 'Diagnostics Opérationnels & Métriques SLA',
    featuresLabel: 'Principaux Piliers de Service',
    roadmapHeader: 'Roadmap de Déploiement Opérationnel',
    calculatorHeader: 'Simulateur de Protocole Souverain',
    calcLabelScale: 'Horizon Opérationnel & Échelle',
    calcLabelScope: 'Territoire de Déploiement Actif',
    calcLabelAdvocacy: 'Priorités Stratégiques Incluses',
    calcPriority1: 'Optimisation Carbone & Bilans ESG Intégrés',
    calcPriority2: 'Emploi Local & Intégration des Talents',
    calcPriority3: 'Transfert de Technologies & Propriété Cognitive',
    calcButton: 'Générer la Proposition d’Alignement',
    calcCompiling: 'Analyse des matrices réglementaires en cours...',
    calcCompiled: 'Mémoire Stratégique d’Alignement rédigé !',
    downloadBtn: 'Télécharger le Rapport Exécutif Géré',
    downloading: 'Création du dossier PDF haute confidentialité...',
    secStatus: 'SÉCURITÉ RÉSEAU INTERNATIONALE : ADAPTÉE',
    trustHeader: 'Protocoles de Validation Spécifiques',
    stat1: 'Divisions Gérées Actives',
    stat2: 'Conformité Réglementaire',
    stat3: 'Support Continu Réseau'
  },
  MG: {
    badge: 'FAHAIZA-MANAO MAODERINA',
    title: 'Tolotra Manokana sy Intelizansa Ara-Teknika',
    subtitle: 'Fametrahana fotodrafitrasa ara-batana matanjaka, rafitra ara-teknolojia manan-tsaina, ary mpanolo-tsaina avo lenta hampitomboana ny vahaolana maharitra.',
    searchPlaceholder: 'Hikaroka tolotra manokana...',
    allFilter: 'Ny Tolotra Rehetra',
    advisoryFilter: 'Mpanolo-tsaina & Fitantanana',
    techFilter: 'Teknolojia & AI',
    physicalFilter: 'Fotodrafitrasa ara-Batana',
    activeServiceTitle: 'Maso Sary amin\'ny Tolotra Voafidy',
    fiduciaryHeader: 'Fandrefesana sy ny Fahombiazana',
    featuresLabel: 'Ny singa fototra amin\'ny tolotra',
    roadmapHeader: 'Dingana sy Paikady Fanatanterahana',
    calculatorHeader: 'Fitaovana Famakafakana Tetikasa',
    calcLabelScale: 'Faharetan\'ny Tetikasa sy Tanjona',
    calcLabelScope: 'Faritra sy Velaran-tany Hiasana',
    calcLabelAdvocacy: 'Laharam-pahamehana eo amin\'ny Firenena',
    calcPriority1: 'Fanafoanana ny Karbona & Fanaraha-maso ESG',
    calcPriority2: 'Fampiasana sy Fanofanana ny Mpiasa Malagasy',
    calcPriority3: 'Fampitana ny Teknolojia & IP ho an\'ny Firenena',
    calcButton: 'Mamorona ny Drafitra Paikady',
    calcCompiling: 'Mandinika ny fitsipika mifehy ny famatsiam-bola...',
    calcCompiled: 'Teti-panoloran-tsaina Ara-Paikady Vonona !',
    downloadBtn: 'Haka ny bokikely momba ny tolotra [PDF]',
    downloading: 'Manomana ny antontan-taratasy PDF voaaro...',
    secStatus: 'FANDRINDRA FILAMINANA: VOALAMINA',
    trustHeader: 'Fankatoavana sy Fepetra momba ny Kalitao',
    stat1: 'Sampana Ara-Toe-karena',
    stat2: 'Fankatoavana ny Fitsipika',
    stat3: 'Tambajotra vonona 24/7'
  }
};

export function ServicesView({ language, selectedServiceId }: ServicesViewProps) {
  const [activeService, setActiveService] = useState<string>(selectedServiceId || 'consulting');
  const [filterCategory, setFilterCategory] = useState<'all' | 'advisory' | 'tech' | 'physical'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Interactive Simulator parameters
  const [horizonScale, setHorizonScale] = useState<number>(2); // 1 = 1yr, 2 = 3yr, 3 = 5yr, 4 = 10yr
  const [geoFootprint, setGeoFootprint] = useState<number>(3); // 1 = regional, 2 = multi-city, 3 = continental, 4 = international
  const [carbonFocus, setCarbonFocus] = useState<boolean>(true);
  const [localWorkforce, setLocalWorkforce] = useState<boolean>(true);
  const [techTransfer, setTechTransfer] = useState<boolean>(false);
  const [isCompiling, setIsCompiling] = useState<boolean>(false);
  const [isCompiled, setIsCompiled] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (selectedServiceId) {
      setActiveService(selectedServiceId);
      const element = document.getElementById('services-viewport-control');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [selectedServiceId]);

  const lText = layoutTranslations[language];

  // Map services into specialized category slots for advanced filtering
  const getServiceCategoryFilter = (id: string): 'advisory' | 'tech' | 'physical' => {
    if (id === 'consulting' || id === 'proj_management') return 'advisory';
    if (id === 'digital_trans' || id === 'managed_services') return 'tech';
    return 'physical';
  };

  const filteredServices = SERVICES.filter(serv => {
    const sCategory = getServiceCategoryFilter(serv.id);
    const sTrans = serviceTranslations[language][serv.id as keyof typeof serviceTranslations['EN']];
    const matchCategory = filterCategory === 'all' || sCategory === filterCategory;
    const matchSearch = searchQuery === '' || 
      sTrans.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      sTrans.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
      sTrans.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleCompile = () => {
    setIsCompiling(true);
    setIsCompiled(false);
    setTimeout(() => {
      setIsCompiling(false);
      setIsCompiled(true);
    }, 1800);
  };

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 2000);
  };

  // Compute live simulated parameters based on inputs
  const simulatedTimeframe = () => {
    const base = horizonScale * 4;
    const additions = geoFootprint * 2;
    return `${base + additions} ${language === 'EN' ? 'Weeks' : language === 'FR' ? 'Semaines' : 'Herinandro'}`;
  };

  const simulatedCompliance = () => {
    let score = 91.2;
    if (carbonFocus) score += 3.1;
    if (localWorkforce) score += 2.2;
    if (techTransfer) score += 2.8;
    return `${Math.min(score, 99.8).toFixed(1)}%`;
  };

  const simulatedLocalLabor = () => {
    const scaleFactor = horizonScale * geoFootprint * 140;
    return `${(scaleFactor + (localWorkforce ? 400 : 0)).toLocaleString()} ${language === 'EN' ? 'Direct Actions' : language === 'FR' ? 'Actions Directes' : 'Asa mivantana'}`;
  };

  const simulatedCarbonFactor = () => {
    let baseReduc = 12;
    if (carbonFocus) baseReduc += 38;
    if (techTransfer) baseReduc += 12;
    return `-${baseReduc}% CO₂e`;
  };

  const selectedServiceDetails = serviceTranslations[language][activeService as keyof typeof serviceTranslations['EN']] || serviceTranslations[language]['consulting'];

  return (
    <div id="services-viewport-control" className="space-y-16 pb-16 relative overflow-hidden">
      
      {/* 1. ULTRA MODERN GLOWING INTRO HEADER */}
      <section className="relative pt-32 pb-8 overflow-hidden px-4" id="services-intro-panel">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-br from-emerald-500/10 via-amber-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 border border-emerald-500/40 rounded-full px-4 py-1 bg-emerald-950/20 text-emerald-400 font-mono text-[10px] tracking-widest uppercase shadow-md shadow-emerald-500/5"
            id="services-micro-badge"
          >
            <Sparkles size={11} className="animate-pulse" />
            <span>{lText.badge}</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none">
            {lText.title.split('&').map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && <span className="gradient-text font-black font-serif italic text-3xl sm:text-4xl md:text-5xl px-2">&</span>}
              </span>
            ))}
          </h1>

          <p className="text-slate-400 dark:text-slate-500 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-light">
            {lText.subtitle}
          </p>

          {/* Real-time micro statistics line */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto pt-6 border-t border-slate-900/60 mt-4 text-[10px] sm:text-xs font-mono text-slate-500">
            <div className="text-center">
              <span className="block text-white font-bold text-base sm:text-lg mb-0.5" id="services-stat-count">06</span>
              <span className="uppercase tracking-wider">{lText.stat1}</span>
            </div>
            <div className="text-center border-x border-slate-900/60">
              <span className="block text-emerald-400 font-bold text-base sm:text-lg mb-0.5">100%</span>
              <span className="uppercase tracking-wider">{lText.stat2}</span>
            </div>
            <div className="text-center">
              <span className="block text-amber-500 font-bold text-base sm:text-lg mb-0.5">24/7/365</span>
              <span className="uppercase tracking-wider">{lText.stat3}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC CONTROL SYSTEM: SEARCH & CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="capabilities-toolbar">
        <div className="glass rounded-2xl p-4 flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-950/40">
          
          {/* Categories Row */}
          <div className="flex flex-wrap gap-1.5 justify-center md:justify-start w-full md:w-auto" id="service-directories-filters">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                filterCategory === 'all'
                  ? 'glass-menu-active text-amber-300'
                  : 'bg-slate-900/40 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900/80'
              }`}
              id="filter-btn-all"
            >
              {lText.allFilter}
            </button>
            <button
              onClick={() => setFilterCategory('advisory')}
              className={`px-4 py-3 md:py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                filterCategory === 'advisory'
                  ? 'glass-menu-active text-amber-300'
                  : 'bg-slate-900/40 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900/80'
              }`}
              id="filter-btn-advisory"
            >
              {lText.advisoryFilter}
            </button>
            <button
              onClick={() => setFilterCategory('tech')}
              className={`px-4 py-3 md:py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                filterCategory === 'tech'
                  ? 'glass-menu-active text-amber-300'
                  : 'bg-slate-900/40 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900/80'
              }`}
              id="filter-btn-tech"
            >
              {lText.techFilter}
            </button>
            <button
              onClick={() => setFilterCategory('physical')}
              className={`px-4 py-3 md:py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                filterCategory === 'physical'
                  ? 'glass-menu-active text-amber-300'
                  : 'bg-slate-900/40 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900/80'
              }`}
              id="filter-btn-physical"
            >
              {lText.physicalFilter}
            </button>
          </div>

          {/* Modern Input Bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder={lText.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-all duration-300"
              id="services-search-input"
            />
            <Filter size={13} className="absolute left-3.5 top-3 text-slate-500" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-[10px] font-mono text-slate-400 hover:text-white"
              >
                CLEAR
              </button>
            )}
          </div>

        </div>
      </section>

      {/* 3. CORE EXECUTIVES CAPABILITY PLATFORM: INTERACTIVE SPLIT DESIGN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="capabilities-platform-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT PANEL: CAPABILITIES NAVIGATION COLUMN (5 COLS) */}
          <div className="lg:col-span-5 space-y-4" id="capabilities-nav-column">
            <div className="space-y-3">
              {filteredServices.map((serv, index) => {
                const sCategory = getServiceCategoryFilter(serv.id);
                const sTrans = serviceTranslations[language][serv.id as keyof typeof serviceTranslations['EN']] || { name: serv.name, desc: serv.description };
                const isActive = activeService === serv.id;
                
                return (
                  <motion.div
                    key={serv.id}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setActiveService(serv.id)}
                    className={`group cursor-pointer rounded-2xl p-5 border transition-all duration-500 text-left relative overflow-hidden ${
                      isActive 
                        ? 'bg-gradient-to-br from-slate-900/90 to-slate-950/90 border-emerald-500/50 shadow-lg shadow-emerald-500/5 premium-border-glow translate-x-1' 
                        : 'bg-slate-950/20 hover:bg-slate-900/30 border-slate-900 hover:border-slate-800'
                    }`}
                    id={`service-nav-card-${serv.id}`}
                  >
                    {/* Tiny neon accent corner indicator */}
                    {isActive && (
                      <span className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-bl from-emerald-500 to-transparent" />
                    )}

                    <div className="flex items-start space-x-4 relative z-10">
                      <div className={`p-3 rounded-xl border transition-colors duration-300 ${
                        isActive 
                          ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300' 
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/5 group-hover:border-emerald-500/20'
                      }`}>
                        <DynamicIcon name={serv.icon} size={18} />
                      </div>

                      <div className="space-y-1 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[9px] text-slate-500 tracking-widest group-hover:text-emerald-400/75 transition-colors">
                            [ 0{index + 1} • {sCategory.toUpperCase()} ]
                          </span>
                          {isActive && (
                            <span className="flex h-1.5 w-1.5 relative">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                            </span>
                          )}
                        </div>

                        <h3 className={`text-sm font-extrabold tracking-tight transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-slate-300 dark:text-slate-100 group-hover:text-white'
                        }`}>
                          {sTrans.name}
                        </h3>
                        
                        <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed font-light mt-1">
                          {sTrans.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {filteredServices.length === 0 && (
                <div className="text-center py-12 glass rounded-2xl border border-slate-900 text-slate-500">
                  <Sliders className="mx-auto mb-2 opacity-30" size={24} />
                  <p className="text-xs font-mono uppercase">No specific capacities found</p>
                  <p className="text-[11px] text-slate-600 mt-1">Refine your search or categories to find corporate segments.</p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT PANEL: IMMERSIVE ACTIVE CAPABILITY CONSOLE & SIMULATOR (7 COLS) */}
          <div className="lg:col-span-7" id="capabilities-display-viewport">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="glass rounded-3xl p-6 md:p-8 border-slate-800/60 bg-gradient-to-b from-slate-900/60 to-slate-950/80 shadow-2xl relative"
                id={`active-service-panel-${activeService}`}
              >
                {/* Decorative mesh backgrid for advanced technical styling */}
                <div className="absolute inset-0 bg-[radial-gradient(#1f8a5a_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] rounded-3xl pointer-events-none" />

                {/* Subtitle / Header indicators */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-900 pb-5 mb-6 gap-2">
                  <div className="text-left">
                    <span className="font-mono text-[9px] tracking-widest text-emerald-400 block uppercase mb-1">
                      {lText.activeServiceTitle}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                      {selectedServiceDetails.name}
                    </h2>
                  </div>
                  <div className="rounded-full bg-emerald-950/35 border border-emerald-500/20 px-3 py-1 font-mono text-[9px] text-emerald-400 shrink-0">
                    SLA CONFIRMED
                  </div>
                </div>

                <div className="space-y-6">
                  
                  {/* METRIC GRAPHS SECTION */}
                  <div className="space-y-4 text-left">
                    <h4 className="font-mono text-[10px] tracking-wider text-slate-500 uppercase font-bold flex items-center space-x-1.5">
                      <Gauge size={12} className="text-emerald-400" />
                      <span>{lText.fiduciaryHeader}</span>
                    </h4>

                    {/* Progress graphs grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Metric 1 */}
                      <div className="bg-slate-950/60 border border-slate-900 rounded-xl p-3.5 space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-400 font-light">{selectedServiceDetails.metricName || 'Fiduciary Alignment'}</span>
                          <span className="font-mono text-emerald-400 font-bold text-xs">
                            {selectedServiceDetails.metricVal || 'AAA'}
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: '96%' }}
                            transition={{ duration: 1 }}
                            className="h-full bg-emerald-400 rounded-full" 
                          />
                        </div>
                      </div>

                      {/* Metric 2 */}
                      <div className="bg-slate-950/60 border border-slate-900 rounded-xl p-3.5 space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-400 font-light">
                            {language === 'EN' ? 'Sovereign Clearance Speed' : language === 'FR' ? 'Vitesse d\'Agrément' : 'Hafainganina'}
                          </span>
                          <span className="font-mono text-amber-500 font-bold text-xs">99.7% PASSED</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: '98%' }}
                            transition={{ duration: 1, delay: 0.1 }}
                            className="h-full bg-amber-500 rounded-full" 
                          />
                        </div>
                      </div>

                      {/* Metric 3 */}
                      <div className="bg-slate-950/60 border border-slate-900 rounded-xl p-3.5 space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-400 font-light">
                            {language === 'EN' ? 'ESG Carbon Reduction Index' : language === 'FR' ? 'Indice ESG Bas-Carbone' : 'Kibon-Karbona'}
                          </span>
                          <span className="font-mono text-sky-400 font-bold text-xs">-48% Net</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: '84%' }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-sky-400 rounded-full" 
                          />
                        </div>
                      </div>

                      {/* Metric 4 */}
                      <div className="bg-slate-950/60 border border-slate-900 rounded-xl p-3.5 space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-400 font-light">
                            {language === 'EN' ? 'Integrated Edge Auditing' : language === 'FR' ? 'Audit Télémétrique Edge' : 'Télémétrie Network'}
                          </span>
                          <span className="font-mono text-emerald-400 font-bold text-xs">100% ONLINE</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="h-full bg-emerald-400 rounded-full" 
                          />
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* HIGH-FIDELITY ACTIVE ROADMAP CHANNELS */}
                  <div className="space-y-4 text-left border-t border-slate-900/80 pt-5">
                    <h4 className="font-mono text-[10px] tracking-wider text-slate-500 uppercase font-bold flex items-center space-x-1.5">
                      <Clock size={12} className="text-emerald-400" />
                      <span>{lText.roadmapHeader}</span>
                    </h4>

                    {/* Timeline stepper */}
                    <div className="space-y-3 pl-3 border-l-2 border-slate-900 relative">
                      {selectedServiceDetails.phases ? selectedServiceDetails.phases.map((ph, pi) => (
                        <div key={pi} className="relative pl-6">
                          {/* Dot item */}
                          <div className="absolute left-[-26px] top-1 w-3 h-3 rounded-full bg-slate-900 border border-emerald-500/80 flex items-center justify-center">
                            <span className="w-1 h-1 rounded-full bg-emerald-400" />
                          </div>
                          
                          <div className="space-y-0.5">
                            <h5 className="text-white text-xs font-bold leading-normal flex items-center space-x-2">
                              <span>{ph.title}</span>
                              <span className="text-[9px] font-mono font-medium text-slate-500 uppercase px-1.5 py-0.5 rounded bg-slate-950 border border-slate-900">
                                {pi === 0 ? 'WEEKS 1-2' : pi === 1 ? 'WEEKS 3-4' : pi === 2 ? 'WEEKS 5-10' : 'STABILIZED'}
                              </span>
                            </h5>
                            <p className="text-[11px] text-slate-400 font-light leading-snug">
                              {ph.bio}
                            </p>
                          </div>
                        </div>
                      )) : null}
                    </div>
                  </div>

                  {/* DYNAMIC BLUEPRINT SIMULATOR (CALCULATOR) */}
                  <div className="border-t border-slate-900/80 pt-5 text-left space-y-4">
                    <h4 className="font-mono text-[10px] tracking-wider text-slate-500 uppercase font-bold flex items-center space-x-1.5">
                      <Sliders size={12} className="text-emerald-400" />
                      <span>{lText.calculatorHeader}</span>
                    </h4>

                    <div className="bg-slate-950/40 border border-slate-900/85 rounded-2xl p-4 md:p-5 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        
                        {/* Interactive Scope slider */}
                        <div className="space-y-2">
                          <label className="text-[11px] font-mono uppercase text-slate-400 flex justify-between">
                            <span>{lText.calcLabelScale}</span>
                            <span className="text-amber-400 font-bold">
                              {horizonScale === 1 ? '1 YR' : horizonScale === 2 ? '3 YRS' : horizonScale === 3 ? '5 YRS' : '10 YRS'}
                            </span>
                          </label>
                          <input
                            type="range"
                            min="1"
                            max="4"
                            value={horizonScale}
                            onChange={(e) => {
                              setHorizonScale(Number(e.target.value));
                              setIsCompiled(false);
                            }}
                            className="w-full accent-amber-500 h-1 bg-slate-900 rounded-lg cursor-pointer"
                            id="calc-horizon-range"
                          />
                          <div className="flex justify-between text-[9px] font-mono text-slate-600">
                            <span>LOCAL</span>
                            <span>REGIONAL</span>
                            <span>NATIONAL</span>
                            <span>SOVEREIGN</span>
                          </div>
                        </div>

                        {/* Interactive Geo footprints */}
                        <div className="space-y-2">
                          <label className="text-[11px] font-mono uppercase text-slate-400 flex justify-between">
                            <span>{lText.calcLabelScope}</span>
                            <span className="text-amber-400 font-bold">
                              {geoFootprint === 1 ? 'PROVINCIAL' : geoFootprint === 2 ? 'URBAN HUB' : geoFootprint === 3 ? 'CONTINENTAL' : 'TRANS-OCEANIC'}
                            </span>
                          </label>
                          <input
                            type="range"
                            min="1"
                            max="4"
                            value={geoFootprint}
                            onChange={(e) => {
                              setGeoFootprint(Number(e.target.value));
                              setIsCompiled(false);
                            }}
                            className="w-full accent-emerald-500 h-1 bg-slate-900 rounded-lg cursor-pointer"
                            id="calc-footprint-range"
                          />
                          <div className="flex justify-between text-[9px] font-mono text-slate-600">
                            <span>UNIT</span>
                            <span>NODE</span>
                            <span>CLUSTER</span>
                            <span>GRID</span>
                          </div>
                        </div>

                      </div>

                      {/* Checklist Options */}
                      <div className="space-y-2 pt-1">
                        <span className="block text-[10px] font-mono uppercase text-slate-500 font-bold">
                          {lText.calcLabelAdvocacy}
                        </span>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                          
                          {/* Priority 1 */}
                          <button
                            onClick={() => {
                              setCarbonFocus(!carbonFocus);
                              setIsCompiled(false);
                            }}
                            className={`flex items-center space-x-2 p-2 rounded-xl border text-left transition-all duration-300 ${
                              carbonFocus 
                                ? 'bg-sky-950/20 border-sky-500/30 text-sky-300' 
                                : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-400'
                            }`}
                            id="calc-opt-carbon"
                          >
                            <span className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${
                              carbonFocus ? 'bg-sky-500/25 border-sky-400/50' : 'border-slate-800'
                            }`}>
                              {carbonFocus && <Check size={10} className="text-sky-300" />}
                            </span>
                            <span className="text-[10px] font-mono leading-none">{lText.calcPriority1}</span>
                          </button>

                          {/* Priority 2 */}
                          <button
                            onClick={() => {
                              setLocalWorkforce(!localWorkforce);
                              setIsCompiled(false);
                            }}
                            className={`flex items-center space-x-2 p-2 rounded-xl border text-left transition-all duration-300 ${
                              localWorkforce 
                                ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300' 
                                : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-400'
                            }`}
                            id="calc-opt-labor"
                          >
                            <span className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${
                              localWorkforce ? 'bg-emerald-500/25 border-emerald-400/50' : 'border-slate-800'
                            }`}>
                              {localWorkforce && <Check size={10} className="text-emerald-300" />}
                            </span>
                            <span className="text-[10px] font-mono leading-none">{lText.calcPriority2}</span>
                          </button>

                          {/* Priority 3 */}
                          <button
                            onClick={() => {
                              setTechTransfer(!techTransfer);
                              setIsCompiled(false);
                            }}
                            className={`flex items-center space-x-2 p-2 rounded-xl border text-left transition-all duration-300 ${
                              techTransfer 
                                ? 'bg-amber-950/20 border-amber-500/30 text-amber-300' 
                                : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-400'
                            }`}
                            id="calc-opt-tech"
                          >
                            <span className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${
                              techTransfer ? 'bg-amber-500/25 border-amber-400/50' : 'border-slate-800'
                            }`}>
                              {techTransfer && <Check size={10} className="text-amber-300" />}
                            </span>
                            <span className="text-[10px] font-mono leading-none">{lText.calcPriority3}</span>
                          </button>

                        </div>
                      </div>

                      {/* CALCULATED OUTPUT BAR */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-3 border-t border-slate-900/60 font-mono text-[10px]">
                        <div className="bg-slate-950 p-2 rounded-lg border border-slate-900 text-left">
                          <span className="block text-slate-600 font-bold uppercase">{language === 'EN' ? 'TIMEFRAME' : language === 'FR' ? 'DURÉE' : 'FAHARETANY'}</span>
                          <span className="text-slate-200 mt-0.5 block font-bold text-xs">{simulatedTimeframe()}</span>
                        </div>
                        <div className="bg-slate-950 p-2 rounded-lg border border-slate-900 text-left">
                          <span className="block text-slate-600 font-bold uppercase">{language === 'EN' ? 'COMPLIANCE' : language === 'FR' ? 'CONFORMITÉ' : 'FANKATOAVANA'}</span>
                          <span className="text-emerald-400 mt-0.5 block font-bold text-xs">{simulatedCompliance()}</span>
                        </div>
                        <div className="bg-slate-950 p-2 rounded-lg border border-slate-900 text-left">
                          <span className="block text-slate-600 font-bold uppercase">{language === 'EN' ? 'LABOR IMPACT' : language === 'FR' ? 'IMPACT EMPLOI' : 'ASA'}</span>
                          <span className="text-amber-500 mt-0.5 block font-bold text-[11px] truncate leading-tight font-sans font-bold">{simulatedLocalLabor()}</span>
                        </div>
                        <div className="bg-slate-950 p-2 rounded-lg border border-slate-900 text-left">
                          <span className="block text-slate-600 font-bold uppercase">NET CARBON</span>
                          <span className="text-sky-400 mt-0.5 block font-bold text-xs">{simulatedCarbonFactor()}</span>
                        </div>
                      </div>

                      {/* Compile Button */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button
                          onClick={handleCompile}
                          disabled={isCompiling}
                          className="flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-lg shadow-emerald-500/10 cursor-pointer disabled:opacity-50 hover:brightness-110 active:scale-98 transition-all w-full sm:w-auto"
                          id="calculator-compile-button"
                        >
                          {isCompiling ? (
                            <>
                              <span className="animate-spin text-slate-900">✦</span>
                              <span>{lText.calcCompiling}</span>
                            </>
                          ) : (
                            <>
                              <Play size={12} className="fill-slate-950 stroke-slate-950" />
                              <span>{isCompiled ? lText.calcCompiled : lText.calcButton}</span>
                            </>
                          )}
                        </button>

                        {isCompiled && (
                          <button
                            onClick={handleDownload}
                            disabled={isDownloading}
                            className={`flex items-center justify-center space-x-2 px-5 py-3 rounded-xl font-mono text-[10px] border transition-all w-full sm:w-auto cursor-pointer ${
                              downloadSuccess 
                                ? 'bg-emerald-950/20 border-emerald-500 text-emerald-400' 
                                : 'bg-slate-900 hover:bg-slate-900/80 border-slate-800 text-slate-300'
                            }`}
                            id="calculator-download-button"
                          >
                            <FileText size={12} />
                            <span>
                              {isDownloading 
                                ? lText.downloading 
                                : downloadSuccess 
                                  ? `${language === 'EN' ? 'Dossier Downloaded Successfully!' : language === 'FR' ? 'Dossier Téléchargé !' : 'Bokikely Azonao !'}` 
                                  : lText.downloadBtn}
                            </span>
                          </button>
                        )}
                      </div>

                    </div>
                  </div>

                  {/* BOTTOM ACTION SECURE STATUS */}
                  <div className="border-t border-slate-900 pt-5 pt-3.5 mt-4 flex items-center justify-between text-[10px] font-semibold text-slate-500 font-mono">
                    <span className="flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 block animate-pulse"></span>
                      <span>{lText.secStatus}</span>
                    </span>
                    <span>MADAGASCAR GRID SECURE</span>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 4. REVOLUTIONARY BENTO GRID SOVEREIGN COMPLIANCE CALLOUTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="services-quality-callout">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="font-mono text-[10px] text-amber-500 tracking-widest block uppercase">[ COMPLIANCE ]</span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
            {lText.trustHeader}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="compliance-bento-grid">
          
          {/* Card 1: Sovereign Certificate */}
          <div className="glass card-hover rounded-2.5xl p-6 relative overflow-hidden bg-slate-950/30 text-left border-slate-900">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 mb-4">
              <ShieldCheck size={18} />
            </div>
            
            <h4 className="text-white font-bold text-sm tracking-tight mb-2">
              {language === 'EN' ? 'Sovereign Validation' : language === 'FR' ? 'Contrôle de Conformité Souveraine' : 'Famelezana Ofisialy'}
            </h4>
            
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              {language === 'EN' 
                ? 'Fully compliant with core Malagasy investment law directives, African Union developmental frameworks, and international financial rules.' 
                : language === 'FR' 
                  ? 'Entièrement conforme aux lois sur l\'investissement de Madagascar, aux directives de l\'Union Africaine et aux accords financiers multilatéraux.' 
                  : 'Mifanaraka tanteraka amin\'ny lalàna mifehy ny fampiasam-bola eto Madagasikara, sy ny fitsipika ara-bola iraisam-pirenena.'}
            </p>

            <div className="pt-4 border-t border-slate-900/60 mt-4 text-[9px] font-mono text-slate-500 flex justify-between items-center">
              <span>CERT-KEY: MADA-INV-2026</span>
              <span className="text-emerald-400">STATUS: VERIFIED</span>
            </div>
          </div>

          {/* Card 2: AI Tech Integration */}
          <div className="glass card-hover rounded-2.5xl p-6 relative overflow-hidden bg-slate-950/30 text-left border-slate-900">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-500 mb-4">
              <Cpu size={18} />
            </div>
            
            <h4 className="text-white font-bold text-sm tracking-tight mb-2">
              {language === 'EN' ? 'Carbon Ledger AI' : language === 'FR' ? 'IA & Comptabilité Carbone' : 'AI sy ny Karbona'}
            </h4>
            
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              {language === 'EN' 
                ? 'Continuous automated materials auditing using local edge computational telemetry to guarantee zero-carbon verification across networks.' 
                : language === 'FR' 
                  ? 'Audit automatisé continu des matériaux via télémétrie locale edge en temps réel pour certifier la décarbonation complète de la chaîne.' 
                  : 'Famakafakana ny fampiasana ny akora fototra mba hampihenana fanahy iniana ny entona karbona amin\'ny famokarana rehetra.'}
            </p>

            <div className="pt-4 border-t border-slate-900/60 mt-4 text-[9px] font-mono text-slate-500 flex justify-between items-center">
              <span>LEDGER SYSTEM: VER-V3</span>
              <span className="text-amber-500">ACTIVE COMPLIANCE</span>
            </div>
          </div>

          {/* Card 3: 24/7 Grid Support */}
          <div className="glass card-hover rounded-2.5xl p-6 relative overflow-hidden bg-slate-950/30 text-left border-slate-900">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 mb-4">
              <Layers size={18} />
            </div>
            
            <h4 className="text-white font-bold text-sm tracking-tight mb-2">
              {language === 'EN' ? 'Continent-Wide SLA' : language === 'FR' ? 'SLA Réseau 24/7' : 'Fanaraha-maso Vonona'}
            </h4>
            
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              {language === 'EN' 
                ? 'Uninterrupted physical and digital support network operating across three primary continental coordinates with rapid incident dispatch.' 
                : language === 'FR' 
                  ? 'Support physique et numérique continu fourni sur trois zones stratégiques avec dépêche ultra-rapide des équipes techniques.' 
                  : 'Tambajotra vonona hihaino sy hamaha ny olana rehetra eo anivon\'ny mpanjifa na andro na alina ho amin\'ny fitoniana.'}
            </p>

            <div className="pt-4 border-t border-slate-900/60 mt-4 text-[9px] font-mono text-slate-500 flex justify-between items-center">
              <span>AVG RES STATE: 8.4 Mins</span>
              <span className="text-sky-400">ACTIVE MONITORS</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
