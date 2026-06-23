import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  MapPin, 
  Tag, 
  TrendingUp, 
  Award, 
  ArrowRight, 
  CheckCircle,
  HelpCircle,
  History,
  Info,
  Layers,
  Sparkles
} from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
  badge: string;
  metric: string;
  longDesc: string;
  location: string;
}

interface CompanyHistoryTimelineProps {
  companyId: string;
  language: 'EN' | 'FR' | 'MG';
  colors: {
    accent: string;
    textAccent: string;
    textAccentHover: string;
    iconColor: string;
    bgMuted: string;
    borderMuted: string;
    borderHover: string;
    glow: string;
  };
}

const TIMELINE_DATABASE: Record<string, Record<'EN' | 'FR' | 'MG', TimelineEvent[]>> = {
  ngo: {
    EN: [
      {
        year: '2016',
        title: 'Initial Outpost Sinking',
        desc: 'Established our primary pediatric hygiene unit in Androy.',
        badge: 'FOUNDING',
        metric: '750 local families registered',
        longDesc: 'Our original outreach team of three medical practitioners navigated unimproved tracks to set up a semi-permanent diagnostic base sheltered beneath dry-resistant structures.',
        location: 'Ambovombe (Androy), MG'
      },
      {
        year: '2018',
        title: 'Safe Aquifer Initiative',
        desc: 'Deployed the first automated reverse-osmosis purification kiosk.',
        badge: 'INFRASTRUCTURE',
        metric: '40k Liters/Day output potential',
        longDesc: 'Engineered a highly resilient solar-coupled filtration hub that bypassed corrupted ground pools to feed pure hydration directly to remote schools and women-led agricultural cooperatives.',
        location: 'Antananarivo (Outskirts), MG'
      },
      {
        year: '2020',
        title: 'Mobile Tele-Clinics Commissioned',
        desc: 'Launched satellite-coupled clinical outreach motor vehicles.',
        badge: 'MEDTECH',
        metric: '12 remote valleys connected',
        longDesc: 'By integrating rugged, off-road 4x4 vehicles with high-fidelity satellite data transceivers, we established clinical consultation links between rural field staff and major university hospitals.',
        location: 'Southern Anosy Plateaus, MG'
      },
      {
        year: '2022',
        title: 'Regional Solar Canopy Network',
        desc: 'Completed carbon-free solar arrays atop rural EPP classrooms.',
        badge: 'POWER_GRID',
        metric: '32 schools fully illuminated',
        longDesc: 'Installed glassless and wind-resistant photovoltaic roofs that feed digital study tablets during daylight while supplying storage battery power for evening community educational loops.',
        location: 'SAVA Vanilla Belt, MG'
      },
      {
        year: '2024',
        title: 'Public Ledger ESG Accountability',
        desc: 'Transitioned financial and impact reporting onto zero-telemetry audits.',
        badge: 'TRANSPARENCY',
        metric: '100% funds cryptographically mapped',
        longDesc: 'Secured deep public trust by anchoring quarterly microcheckpoints and field logs to public, third-party ledger audits with absolute real-world ledger verification hashes.',
        location: 'Corporate HQ, MG'
      },
      {
        year: '2026',
        title: 'Integrated Deep Impact Sovereign Operations',
        desc: 'Synchronized medical outreach, solar grids, and hydrological kiosks.',
        badge: 'HOLISTIC',
        metric: '500k+ total sovereign beneficiaries',
        longDesc: 'Completed construction of centralized dispatch node, unifying our regional programs into a highly efficient, real-time-reporting humanitarian network across seven provinces.',
        location: 'Nationwide, MG'
      }
    ],
    FR: [
      {
        year: '2016',
        title: 'Création du Premier Dispensaire',
        desc: 'Implantation de notre unité pilote de médecine pédiatrique en milieu aride.',
        badge: 'FONDATION',
        metric: '750 familles enregistrées',
        longDesc: 'Nos trois premiers agents médicaux mobiles ont emprunté des pistes dégradées pour ériger un centre d\'examen à l\'ombre des didéréacées.',
        location: 'Ambovombe (Androy), MG'
      },
      {
        year: '2018',
        title: 'Lancement du Réseau Aquifères',
        desc: 'Installation de notre premier kiosque autonome par osmose inverse.',
        badge: 'INFRASTRUCTURE',
        metric: '40k L/Jour débit nominatif',
        longDesc: 'Conception d\'un système de filtration résistant, raccordé à l\'énergie solaire, permettant de distribuer de l\'eau potable aux écoles et aux micro-fermes gérées par des femmes.',
        location: 'Périphérie d\'Antananarivo, MG'
      },
      {
        year: '2020',
        title: 'Cliniques Mobiles Connectées',
        desc: 'Mise en service de véhicules tout-terrain pour le télé-diagnostic à distance.',
        badge: 'MEDTECH',
        metric: '12 vallées isolées raccordées',
        longDesc: 'Nos véhicules 4x4 tout-terrain intègrent désormais des valises de communication satellite afin de lier les soignants isolés aux hôpitaux universitaires.',
        location: 'Plateaux Sud de l\'Anosy, MG'
      },
      {
        year: '2022',
        title: 'Électrification des Écoles (EPP)',
        desc: 'Déploiement de canopées photovoltaïques sur les toitures scolaires.',
        badge: 'SOLAIRE',
        metric: '32 écoles alimentées',
        longDesc: 'Pose de toitures solaires légères résistant aux cyclones océaniques, pour alimenter les tablettes et permettre des cours du soir communautaires.',
        location: 'Région de la Vanille SAVA, MG'
      },
      {
        year: '2024',
        title: 'Audit Cryptographique Public',
        desc: 'Migration de nos comptes vers un registre public d\'impact immatériel.',
        badge: 'TRANSPARENCE',
        metric: '100% des fonds traçables',
        longDesc: 'Renforcement de la confiance grâce à la publication de hashs de conformité certifiés, attestant de l\'affectation exacte des budgets aux projets de terrain d\'enquête.',
        location: 'Siège Corporate, MG'
      },
      {
        year: '2026',
        title: 'Unification d\'Impact National',
        desc: 'Fusion des réseaux médicaux, solaires et d\'adduction d\'eau.',
        badge: 'SYNTHÈSE',
        metric: '500k+ bénéficiaires directs certifiés',
        longDesc: 'Inauguration d\'un tableau de bord partagé unifiant l\'ensemble des programmes locaux dans une infrastructure intégrée, gérée localement par les districts.',
        location: 'Échelle Nationale, MG'
      }
    ],
    MG: [
      {
        year: '2016',
        title: 'Fijoroan’ny Toby Voalohany',
        desc: 'Nanangana ny tobim-pahasalamana fitsaboana zaza tany Androy.',
        badge: 'FIJOROANA',
        metric: 'Fianakaviana 750 voasoratra anarana',
        longDesc: 'Nandalo lalana saro-pady ny mpiasan’ny fahasalamana telo voalohany mba hanangana trano kely fanaovana fitiliana sy fitsaboana ho an’ny rehetra.',
        location: 'Ambovombe (Androy), MG'
      },
      {
        year: '2018',
        title: 'Tetikasa Rano Madio Kioska',
        desc: 'Fametrahana ny kioska mpanadio rano tamin’ny alalan’ny sivana "Osmose".',
        badge: 'AKORA_FOTONY',
        metric: 'Rano 40k L / Andro voasivana',
        longDesc: 'Noforonina ny milina manala parasy sy sira amin’ny rano amin’ny alalan’ny herin’ny masoandro mba famatsiana rano ny sekoly ambanivohitra.',
        location: 'Manodidina an’Antananarivo, MG'
      },
      {
        year: '2020',
        title: 'Fiara Fitsaboana Mitety Vohitra',
        desc: 'Fampiasana fiara 4x4 misy fitaovana fitiliana amin’ny alalan’ny satelita.',
        badge: 'TEK_FITSABOANA',
        metric: 'Lohasaha lavitra 12 voadidy',
        longDesc: ' mampiasa fifandraisana satelita haingana ny fiaranay mba ahafahan’ny mpitsabo any ambanivohitra miresaka mivantana amin’ny hopitaly lehibe any an-tanàn-dehibe.',
        location: 'Lempona Atsimon’Anosy, MG'
      },
      {
        year: '2022',
        title: 'Jiro Masoandro ho an’ny Sekoly',
        desc: 'Fametrahana panely solera amin’ny tafo amin’ireo sekoly ambaratonga voalohany.',
        badge: 'AN_GOVO',
        metric: 'Sekoly 32 nahazo jiro',
        longDesc: 'Natao hahazaka rivodoza ny tafo solera mba hampandehanana ny solosainan’ny mpianatra sy hanomezana jiro mianatra amin’ny alina.',
        location: 'Faritra Lavanila SAVA, MG'
      },
      {
        year: '2024',
        title: 'Mangarahara ny Kaonty rehetra',
        desc: 'Fampiasana "block public ledger" ho an’ny tatitra ara-bola sy asa rehetra.',
        badge: 'FAHAMARINANA',
        metric: '100% ny vola voamarina tamin’ny laser',
        longDesc: 'Mampiseho ny fahamarinan-toerana sy ny fampiasana ny vola rehetra amin’ny alalan’ny hash nomerika tsy azo ovana na fafana mihitsy.',
        location: 'Foibe Toerana, MG'
      },
      {
        year: '2026',
        title: 'Asa Mitambatra sy Fahombiazana',
        desc: 'Nampitambarina ny fitsaboana, ny rano madio ary ny jiro masoandro.',
        badge: 'MITAMBATRA',
        metric: 'Olona 500k+ nahazo tombontsoa',
        longDesc: 'Vita ny fananganana ny tambajotra iraisana mamorona hery vaovao hampitsaharana ny fahantrana sy ny aretina manerana ny faritany fito.',
        location: 'Madagasikara Iray, MG'
      }
    ]
  },
  tsingy: {
    EN: [
      {
        year: '2016',
        title: 'Conservation Feasibility Blueprint',
        desc: 'Conducted first non-disruptive geophysics audits on sedimentary karsts.',
        badge: 'EXPLORATION',
        metric: '2,400 Ha fully mapped',
        longDesc: 'Using custom passive geological sensors and lightweight laser surveying, we established exact digital twins of the reserve limestone spikes without moving any physical sediment.',
        location: 'Tsingy National Reserve, MG'
      },
      {
        year: '2019',
        title: 'Biophilic Design Prototyping',
        desc: 'Constructed the first suspended luxury viewing platform.',
        badge: 'ARCHITECTURE',
        metric: 'Elevated 15m above spikes',
        longDesc: 'Created custom composite suites anchored onto rigid high-grade metal pins, floating cleanly above limestone corridors without altering geological formations.',
        location: 'Tsingy Sanctuary, MG'
      },
      {
        year: '2022',
        title: 'Zero-Carbon Microgrid Launch',
        desc: 'Switched complete property operations onto solar and battery banks.',
        badge: 'CLEAN_ENERGY',
        metric: '100% off-grid status locked',
        longDesc: 'Deployed premium glassless solid-state solar panels in discrete, tree-sheltered formations, paired with advanced lithium iron phosphate backup systems.',
        location: 'Tsingy Sanctuary, MG'
      },
      {
        year: '2026',
        title: 'Integrated Eco-Preservation Suite Expansion',
        desc: 'Inaugurated 12 fully floating structures paired with educational research outposts.',
        badge: 'MATURITY',
        metric: 'NPS Score 98.8% registered',
        longDesc: 'Achieved ultimate biophilic integration, marrying luxury guest services with high-end environmental research monitoring stations that track rare lemur species.',
        location: 'Sanctuary Reserve, MG'
      }
    ],
    FR: [
      {
        year: '2016',
        title: 'Cartographie Géologique Non-Invasive',
        desc: 'Premières analyses lidar sans contact sur les karsts sédimentaires.',
        badge: 'RECHERCHE',
        metric: '2 400 Ha cartographiés',
        longDesc: 'Mise en œuvre de capteurs géophysiques passifs pour générer le jumeau numérique des structures karstiques sans perturber leur intégrité géologique durable.',
        location: 'Réserve des Tsingy, MG'
      },
      {
        year: '2019',
        title: 'Premier Suite Suspendue Prototype',
        desc: 'Inauguration de la structure biophilique légère sur pilotis d\'acier.',
        badge: 'ARCHITECTURE',
        metric: 'Suspendu à 15m de hauteur',
        longDesc: 'Conception d\'une plate-forme d\'observation reposant sur des micro-ancrages percés dans la roche calcaire, garantissant un impact nul sur la couche de sol arable.',
        location: 'Tsingy Sanctuaire, MG'
      },
      {
        year: '2022',
        title: 'Indépendance Énergétique Solaire',
        desc: 'Bascule de l\'intégralité des lodges vers un réseau autonome.',
        badge: 'ISOLÉ',
        metric: '100% hors-réseau validé',
        longDesc: 'Pose de capteurs solaires polymères sans verre camouflés sur la canopée, associés à des batteries stationnaires longue durée de type LiFePO4.',
        location: 'Tsingy Sanctuaire, MG'
      },
      {
        year: '2026',
        title: 'Consécration Éco-Touristique',
        desc: 'Extension des suites flottantes et intégration de laboratoires de brousse.',
        badge: 'EXCELLENCE',
        metric: 'Score NPS de 98,8% certifié',
        longDesc: 'Notre projet phare allie désormais l\'accueil de prestige international avec le soutien effectif aux patrouilles de protection de la faune nocturne.',
        location: 'Réserve Privée, MG'
      }
    ],
    MG: [
      {
        year: '2016',
        title: 'Sarintany sy Fandalinana ny Vato',
        desc: 'Fanaovana sarintany tamin’ny alalan’ny scan laser tsy manimba.',
        badge: 'FIKAROHANA',
        metric: 'Ala sy Vato 2,400 Ha vita',
        longDesc: 'Nampiana fitaovana nomerika manokana izahay handrafetana ny sary 3D an’ireo Tsingy, mba hanomanana ny fanorenana tsy handravona ny vato kely na iray aza.',
        location: 'Tsingy Reserve, MG'
      },
      {
        year: '2019',
        title: 'Trano Mihantona Prototype',
        desc: 'Nanorina ny trano hazo mifandray amin’ny vy mafy teo ambonin’ny Tsingy.',
        badge: 'TRANO_KANTO',
        metric: 'Mihantona 15m ambon’ny tany',
        longDesc: 'Noforonina ny trano miavaka tsara napetaka tamin’ny fantsika vy be manokana mba tsy hanimba ny vato kely sy hahafahan’ny mpizaha tany mijery ny tontolo.',
        location: 'Tsingy, MG'
      },
      {
        year: '2022',
        title: 'Jiro Masoandro sy Bateria feno',
        desc: 'Nampitambarina ny fiaran-jiro sy ny toby solera mitsitsy tanteraka.',
        badge: 'SOLERA',
        metric: '100% tsy mampiasa solika',
        longDesc: 'Fametrahana panely solera tsy vaky tsara affatra teo ambany aloky ny hazo mba hanomezana jiro ny trano sy sakan’ny fiarovana ny biby.',
        location: 'Tsingy, MG'
      },
      {
        year: '2026',
        title: 'Fahombiazana sy Fiarovana feno',
        desc: 'Nahazo ny tamberina tamberin’ny mpanjifa ambony indrindra sy fiarovana ny varika.',
        badge: 'FAHOMBIAZANA',
        metric: '98.8% fahafaham-po azo',
        longDesc: 'Lasa toeram-pizahantany miavaka indrindra eran’izao tontolo izao, mampifandray ny fiainana tsara sy ny fitsaboana fiarovana ny biby miavaka.',
        location: 'Tsingy Reserve, MG'
      }
    ]
  },
  water: {
    EN: [
      {
        year: '2017',
        title: 'Coastal Water Crisis Mapping',
        desc: 'Audited water contamination indexes in coastal regional blocks.',
        badge: 'DATA_COLL',
        metric: '120 saline borewells tracked',
        longDesc: 'Identified precise aquifer salinity intrusion layers caused by climate change, paving the geological path for massive clean water grid construction.',
        location: 'Mahajanga Area, MG'
      },
      {
        year: '2020',
        title: 'Reverse Osmosis Launch',
        desc: 'Deployed first automated chemical-free desalination plant.',
        badge: 'ENGINEERING',
        metric: '3M Liters/Year high fidelity output',
        longDesc: 'Constructed the pilot multi-chamber high pressure sand array and semi-permeable membranes that successfully strip salt and pathogens without chemical inputs.',
        location: 'Coastal West, MG'
      },
      {
        year: '2023',
        title: 'Pathogen-Free Grid Expansion',
        desc: 'Completed deep reticulated gravity pipelines to inland municipalities.',
        badge: 'GRID_BUILD',
        metric: '82 regional municipalities fed',
        longDesc: 'Laid heavy food-grade distribution pipes from pristine mountain reservoirs down to arid central communities, lowering waterborne illnesses dramatically.',
        location: 'Analamanga Region, MG'
      },
      {
        year: '2026',
        title: 'Smart Decentralized Water Loop',
        desc: 'Integrated solar-powered micro-flow monitoring grids everywhere.',
        badge: 'SMART_TECH',
        metric: '12M Liters/Year distributed',
        longDesc: 'Equipped each tap and filtration outpost with sovereign micro-telemetry nodes, logging accurate water distribution states directly for real-time dispatch.',
        location: 'Multiple Provinces, MG'
      }
    ],
    FR: [
      {
        year: '2017',
        title: 'Diagnostic de Salinité Littorale',
        desc: 'Analyse de la pollution des sols et remontées salines.',
        badge: 'DONNÉES',
        metric: '120 puits côtiers audités',
        longDesc: 'Identification précise des intrusions marines dans les sables aquifères côtiers, posant les bases pour le déploiement d\'osmoseurs haute pression.',
        location: 'Région de Mahajanga, MG'
      },
      {
        year: '2020',
        title: 'Première Centrale Osmoseur Pro',
        desc: 'Mise en œuvre d\'une unité de dessalement sans produit chimique.',
        badge: 'INGÉNIERIE',
        metric: '3M Litres/An distribués',
        longDesc: 'La centrale intègre des filtres à sable progressifs et une chaîne de membranes semi-perméables alimentées à 100% par énergie solaire locale.',
        location: 'Littoral Ouest, MG'
      },
      {
        year: '2023',
        title: 'Réseau Gravitaire Grande Échelle',
        desc: 'Travaux de pose de conduites d\'adduction d\'eau potable longue distance.',
        badge: 'ADDUCTION',
        metric: '82 communes raccordées',
        longDesc: 'Acheminement gravitaire depuis des châteaux d\'eau de montagne protégés, réduisant de 90% l\'exposition des populations scolaires aux amibes.',
        location: 'Région Analamanga, MG'
      },
      {
        year: '2026',
        title: 'Boucle d\'Échange Hydrique Intelligente',
        desc: 'Intégration d\'une télémétrie de débit solaire pour parer aux fuites.',
        badge: 'TÉLÉMÉTRIE',
        metric: '12M Litres/An sécurisés',
        longDesc: 'Installation de micro-capteurs de pression alimentés par mini-panneaux solaires, permettant aux techniciens d\'agir sur les canalisations à distance.',
        location: 'Multi-provinces, MG'
      }
    ],
    MG: [
      {
        year: '2017',
        title: 'Drafitra Fikarohana Rano',
        desc: 'Fandrefesana ny sanda sy ny sira amin’ireo fantsakana amoron-tsiraka.',
        badge: 'FIKAROHANA',
        metric: 'Fantsakana 120 voasivana tsara',
        longDesc: 'Hita mivantana fa mihanaka ny sira any amin’ny rano ambanin’ny tany, ka mila fitaovana manokana manala izany mba ho azo sotroina tsara.',
        location: 'Mahajanga, MG'
      },
      {
        year: '2020',
        title: 'Toby Sivana Rano Voalohany',
        desc: 'Fametrahana milina sivana "reverse osmosis" lehibe voalohany.',
        badge: 'INJENIERA',
        metric: 'Rano 3M Litatra / Taona voasivana',
        longDesc: 'Nampiana toby mpanadio rano izay mandeha amin’ny herin’ny masoandro, manala ny sira sy ny kankana rehetra tsy mampiasa fanafody simika.',
        location: 'Morontsiraka Andrefana, MG'
      },
      {
        year: '2023',
        title: 'Fiparitahan’ny Fantson-drano',
        desc: 'Fampitambarana fantsona lehibe hitondrana rano avy amin’ny tendrombohitra.',
        badge: 'FANTSONA',
        metric: 'Tanàna 82 nahazo rano',
        longDesc: 'Fametrahana fantsona vy sy plastika matanjaka mitarika rano madio ho an’ny sekoly sy ny hopitaly amin’ireo tanàna ambanivohitra maina.',
        location: 'Analamanga, MG'
      },
      {
        year: '2026',
        title: 'Kioska Rano Mifandray Nomerika',
        desc: 'Fametrahana rafitra mpanadio rano mifandray amin’ny satelita sy finday mivantana.',
        badge: 'N_OMERIKA',
        metric: 'Rano 12M L / Taona voazara',
        longDesc: 'Azo jerena amin’ny ordinatera ny fitsitsiana ny rano sy ny fahadiovany, ka ho fantatra avy hatrany raha misy fahasimbana hitarina haingana.',
        location: 'Madagasikara Iray, MG'
      }
    ]
  },
  woods: {
    EN: [
      {
        year: '2016',
        title: 'Nursery Infrastructure Establishment',
        desc: 'Constructed native species propagation greenhouses in Moramanga.',
        badge: 'SILVICULTURE',
        metric: '150k endemic saplings grown',
        longDesc: 'Laid the biological foundations of our forest sector by establishing high-tech nurseries dedicated to precious indigenous rosewood and heavy timber species.',
        location: 'Moramanga Forestry Hub, MG'
      },
      {
        year: '2019',
        title: 'FSC Traceability Laser Coding',
        desc: 'Developed laser QR engravings directly applied to legally managed trees.',
        badge: 'COMPLIANCE',
        metric: '100% chain-of-custody certified',
        longDesc: 'Introduced international tracking compliance, assigning unique laser identification directly to legal logging coordinates to eradicate illegal deforestation.',
        location: 'Reforestation Grids, MG'
      },
      {
        year: '2023',
        title: 'Community-Owned Forestry Outposts',
        desc: 'Transferred partial management blocks to local forest associations.',
        badge: 'SOCIAL_ESG',
        metric: '320 forest keepers hired',
        longDesc: 'Empowered bordering villages by granting audited forestry revenues directly for public school budgets and maternal health centers, solidifying local stewardship.',
        location: 'Alaotra-Mangoro Border, MG'
      },
      {
        year: '2026',
        title: 'High-Density Carbon Sink Maturity',
        desc: 'Verified over 24k Ha of high-aspect carbon retention corridors.',
        badge: 'ECOLOGY',
        metric: '1.2M living trees registered',
        longDesc: 'Successfully merged high-grade timber export output with durable deep forest preservation channels, creating a globally renowned, self-sustaining circular framework.',
        location: 'East Coast Corridors, MG'
      }
    ],
    FR: [
      {
        year: '2016',
        title: 'Création de la Pépinière Pilote',
        desc: 'Construction de serres de multiplication pour essences endémiques.',
        badge: 'SYLVICULTURE',
        metric: '150k pousses cultivées',
        longDesc: 'Mise en place de structures horticoles pour propager les essences de bois d\'œuvre menacées et pérenniser l\'exploitation d\'essences de construction d\'arbres.',
        location: 'Pépinière de Moramanga, MG'
      },
      {
        year: '2019',
        title: 'Marquage Laser & Traçabilité FSC',
        desc: 'Développement d\'un protocole laser d\'encodage par code QR.',
        badge: 'CERTIFICATION',
        metric: '100% traçable garanti',
        longDesc: 'Notre innovation permet de marquer les arbres exploités légalement d\'un code gravé unique, bloquant toute possibilité d\'intrusion de bois issu de forêts protégées.',
        location: 'Domaines Exploités, MG'
      },
      {
        year: '2023',
        title: 'Forêts Communautaires Cogérées',
        desc: 'Cession de droits d\'usage de parcelles aux comités de brousse.',
        badge: 'GOUVERNANCE',
        metric: '320 gardes recrutés locaux',
        longDesc: 'Intégration des ménages vivant aux lisières de nos domaines dans le partage des bénéfices de coupe, finançant écoles et soins primaires du village.',
        location: 'Lisière Alaotra-Mangoro, MG'
      },
      {
        year: '2026',
        title: 'Maturité des Puits de Carbone',
        desc: 'Certification de nos 24 000 ha de sylviculture raisonnée d\'arbres.',
        badge: 'CLIMAT',
        metric: '1,2M arbres actifs plantés',
        longDesc: 'Validation finale par les auditeurs internationaux de notre modèle circulaire réconciliant production industrielle de bois de scierie et respect de la canopée primitive.',
        location: 'Corridors Est, MG'
      }
    ],
    MG: [
      {
        year: '2016',
        title: 'Toeram-pambolena Hazo Pilote',
        desc: 'Nanorina trano fitomboan’ny zana-kazo amin’ireo hazo sarobidy.',
        badge: 'ALA_KOLO',
        metric: 'Zana-kazo 150k voavoly',
        longDesc: 'Nanangana toeram-pikarakarana zana-kazo sarobidy toy ny andramena ary vatan-kazo lehibe mba hanonerana ny ala ripaka sy hampiroboroboana ny asa.',
        location: 'Moramanga, MG'
      },
      {
        year: '2019',
        title: 'Laser QR Code momba ny Hazo',
        desc: 'Namorona rafitra soratra laser amin’ny vatan-kazo ho fiarovana azy.',
        badge: 'FENITRA',
        metric: '100% voasoratra ara-dalàna',
        longDesc: 'Soratana amin’ny laser ny hazo rehetra azo jinjaina, mba hatorohana fa tsy misy hazo mangalatra na avy amin’ny ala voaaro mihitsy tafiditra amin’ny varotra.',
        location: 'Toeram-pambolena ALA, MG'
      },
      {
        year: '2023',
        title: 'Fitantanana Miara-miasa',
        desc: 'Natolotra ny vahoaka ny ampahany amin’ny ala ho tantanina miaraka.',
        badge: 'ANDRIKERENA',
        metric: 'Mpanara-maso ala 320 voaray',
        longDesc: 'Ny vahoaka any amin’ny sisin’ny ala dia mahazo ampahany amin’ny tombom-barotra, ahafahany mampitombo ny teti-bolan’ny sekoly sy fitsaboana.',
        location: 'Alaotra-Mangoro, MG'
      },
      {
        year: '2026',
        title: 'Kanto sy Fiarovana ny Tany feno',
        desc: 'Nahazo mari-pankatoavana iraisam-pirenena amin’ny ala miaro ny tany.',
        badge: 'ALA_MAHARITRA',
        metric: 'Hazo 1.2M velona sy voakarakara',
        longDesc: 'Fankatoavana ny fizotran’ny asa izay mampifandray tsara ny fitrandrahana hazo amin’ny fanatsarana ny ala sy fiarovana ny rivotra madio.',
        location: 'Faritany Atsinanana, MG'
      }
    ]
  },
  realestate: {
    EN: [
      {
        year: '2016',
        title: 'Carbon-Neutral Housing Strategy',
        desc: 'Developed architectural drafts for passive thermal retail units.',
        badge: 'DESIGN',
        metric: 'Primary drafts approved',
        longDesc: 'Began engineering concrete-alternatives, substituting volcanic pozzolan clays into structural mortar to lower the embodied footprint of commercial structures.',
        location: 'Antananarivo, MG'
      },
      {
        year: '2020',
        title: 'Passive Thermal Complex Completion',
        desc: 'Finished construction of first commercial plaza with dynamic ventilation.',
        badge: 'INNOVATION',
        metric: '35% structural cooling load cut',
        longDesc: 'Leveraged natural wind vectors and double-glazed solar shielding elements, maintaining comfort without mechanical refrigerant blocks.',
        location: 'Ankorondrano, MG'
      },
      {
        year: '2026',
        title: 'LEED Platinum Commercial Portfolio',
        desc: 'Secured top international ecological certifications across properties.',
        badge: 'EXCELLENCE',
        metric: '2.8M total square feet built',
        longDesc: 'Every high-rise property under management operates under zero-waste water parameters and optimized grid energy feeding networks, defining future offices.',
        location: 'Antananarivo, MG'
      }
    ],
    FR: [
      {
        year: '2016',
        title: 'Dossier Logements Éco-Responsables',
        desc: 'Élaboration des plans thermiques passifs pour bureaux commerciaux.',
        badge: 'CONCEPTION',
        metric: 'Études initiales validées',
        longDesc: 'Début de développement de mortiers volcaniques bas carbone pour remplacer les ciments portlands traditionnels hautement polluants.',
        location: 'Antananarivo, MG'
      },
      {
        year: '2020',
        title: 'Livraison de la Galerie Bioclimatique',
        desc: 'Inauguration du premier centre commercial à ventilation naturelle.',
        badge: 'CHANTIER',
        metric: 'Climatisation mécanique évitée',
        longDesc: 'Mise en œuvre d\'une verrière thermo-dynamique utilisant les flux d\'air pour abaisser la température de 6 degrés en été sans aucune électricité.',
        location: 'Ankorondrano, MG'
      },
      {
        year: '2026',
        title: 'Certification LEED Platine Globale',
        desc: 'Obtention des labels environnementaux les plus stricts du secteur.',
        badge: 'DISTINCTION',
        metric: '2,8M de pieds carrés bâtis',
        longDesc: 'L\'intégralité de nos complexes tertiaires recycle désormais l\'eau de pluie et alimente le réseau d\'électricité public en heures creuses grâce aux toits photovoltaïques.',
        location: 'Antananarivo, MG'
      }
    ],
    MG: [
      {
        year: '2016',
        title: 'Drafitra Trano Hitsitsy Jiro',
        desc: 'Nandravona ny sary voalohany momba ny trano mampiasa hafanana voajanahary.',
        badge: 'DRAFITRA',
        metric: 'Sary voalohany nekena',
        longDesc: 'Nikaroka akora simenitra malefaka mampiasa vovoka vato avy amin’ny vohitra izahay mba hampihenana ny fahalotoan’ny tontolo rehefa mividy trano lehibe.',
        location: 'Antananarivo, MG'
      },
      {
        year: '2020',
        title: 'Famaranana ny Tsena Bioclimatique',
        desc: 'Nahavita ny tsena lehibe mampiasa rivotra voajanahary voalohany.',
        badge: 'ASA_VITA',
        metric: 'Nidina 35% ny fampiasana jiro',
        longDesc: 'Nampiana rafitra fitarihana rivotra sy tafo fitaratra tsara fiarovana hafanana, mampahazo aina ny mpivarotra sy mpividy tsy mila milina mpanamando rivotra.',
        location: 'Ankorondrano, MG'
      },
      {
        year: '2026',
        title: 'Mari-Pankatoavana LEED Platinum feno',
        desc: 'Trano rehetra nahazo ny mari-pankatoavana ambony indrindra momba ny tontolo.',
        badge: 'TAMBERINA',
        metric: 'Trano lehibe 2.8M SF vita',
        longDesc: 'Isaky ny trano tantananay dia mampiasa rano maloto voadio andoavana zaridaina sy mitsitsy jiro amin’ny alalan’ny tafo solera lehibe.',
        location: 'Antananarivo Iray, MG'
      }
    ]
  },
  energy: {
    EN: [
      {
        year: '2016',
        title: 'Grid Integration Modeling',
        desc: 'Conducted grid frequency stability studies for massive clean additions.',
        badge: 'ENGINEERING',
        metric: '3 provincial networks mapped',
        longDesc: 'Developed advanced storage-assisted power smoothing controllers to enable high-voltage wind and solar installations without damaging existing transformers.',
        location: 'Antsirabe Central, MG'
      },
      {
        year: '2021',
        title: 'Decentralized Microgrid Arrays',
        desc: 'Assembled off-road container solar cells for agricultural networks.',
        badge: 'MICRO_GRID',
        metric: '120 rural networks deployed',
        longDesc: 'Delivered containerized solar batteries operated via automated remote digital tokens, providing power loops to remote vanilla drying outposts.',
        location: 'Sambava region, MG'
      },
      {
        year: '2026',
        title: '295 MW Cumulative Generation',
        desc: 'Completed nationwide green production networks combining wind and solar.',
        badge: 'CLEAN_POWER',
        metric: 'Replaced 42M liters of heavy fuel imports',
        longDesc: 'Synchronized our clean hydro and solar facilities into the central grid, driving zero-carbon industrial activity over vast production regions.',
        location: 'Nationwide Grid, MG'
      }
    ],
    FR: [
      {
        year: '2016',
        title: 'Simulation d\'Injection Réseau',
        desc: 'Études de stabilité pour l\'introduction d\'énergies intermittentes.',
        badge: 'RECHERCHE',
        metric: '3 réseaux provinciaux modélisés',
        longDesc: 'Développement de régulateurs de charge et onduleurs intelligents pour éviter d\'endommager les postes de transformation lors des pics de production solaire.',
        location: 'Antsirabe Central, MG'
      },
      {
        year: '2021',
        title: 'Conteneurs Photovoltaïques Mobiles',
        desc: 'Déploiement de micro-réseaux isolés pour les coopératives rurales.',
        badge: 'INNOVATION',
        metric: '120 micro-réseaux installés',
        longDesc: 'Fourniture de modules légers raccordés à des batteries stationnaires, permettant aux producteurs de vanille d\'accéder à des séchoirs électriques contrôlés.',
        location: 'District de Sambava, MG'
      },
      {
        year: '2026',
        title: 'Capacité Active de 295 MW',
        desc: 'Inauguration du hub d\'énergie propre interconnecté aux réseaux nationaux.',
        badge: 'ÉNERGIE_VERTE',
        metric: '42M Litres de fioul lourd économisés',
        longDesc: 'Raccordement de nos fermes hydroélectriques et de nos parcs de stockage au réseau national, éliminant définitivement la dépendance énergétique.',
        location: 'Réseau Électrique National, MG'
      }
    ],
    MG: [
      {
        year: '2016',
        title: 'Fandalinana sy Fikarohana Jiro',
        desc: 'Fianarana ny fomba fitarihana jiro amin’ireo faritany fito.',
        badge: 'FIKAROHANA',
        metric: 'Tambajotra 3 voasoratra sary',
        longDesc: 'Noforoninay ny fitaovana mpanohana herinaratra mba ahafahana mampiasa jiro masoandro lehibe tsy manimba ny milina mpaninjara jiro any ambanivohitra.',
        location: 'Antsirabe, MG'
      },
      {
        year: '2021',
        title: 'Microgrid kely any An-tsaha',
        desc: 'Nametraka toby solera amin’ny vata vy fitaterana ho an’ny mpamboly.',
        badge: 'J_IRO_KELY',
        metric: 'Toby kely 120 voavoly soa',
        longDesc: 'Nandefa toby jiro masoandro azo entina amin’ny fiara izahay, mampiasa fandoavam-bola amin’ny finday mba hanampiana ny mpamboly lavanila hanamaina ny vokatra.',
        location: 'Sambava, MG'
      },
      {
        year: '2026',
        title: 'Tanjaka Herinaratra 295 MW',
        desc: 'Nampitambarina ny toby famokarana herinaratra amin’ny rian-drano sy solera.',
        badge: 'AN_GOVO_MADIO',
        metric: 'Solika 42M litatra voasolo jiro madio',
        longDesc: 'Vita ny fananganana sy fampifandraisana ny toby any amin’ny tambajotram-pirenena, miteraka jiro maharitra ho an’ny indostria sy trano rehetra.',
        location: 'Madagasikara Iray, MG'
      }
    ]
  },
  logistics: {
    EN: [
      {
        year: '2016',
        title: 'Sovereign Marine Fleet Outlining',
        desc: 'Laid down security guidelines for zero-spill bilateral shipping.',
        badge: 'STRATEGY',
        metric: 'Custom compliance audits verified',
        longDesc: 'Established rigid diagnostic checklists at Toamasina Port, preventing dangerous chemical spills and safeguarding fragile coastal marine reef systems.',
        location: 'Toamasina Port, MG'
      },
      {
         year: '2021',
         title: 'Bilateral Trade Corridor Launch',
         desc: 'Connected continuous logistics routes linking Europe with Madagascar.',
         badge: 'CORRIDORS',
         metric: '4 massive trade pipelines opened',
         longDesc: 'Synchronized our marine assets, customs precheck systems, and certified ground transport fleets to allow high-value Vanilla and Timber exports to flow freely.',
         location: 'International Waters'
      },
      {
        year: '2026',
        title: 'Nationwide Green Transport Network',
        desc: 'Completed deployment of biodiesel-fueled inter-province supply fleets.',
        badge: 'LOGISTICS',
        metric: '3.4M tons of cargo routed safely',
        longDesc: 'Unified regional storage terminals with precise low-emission transport telemetry. Our operations maintain 99.8% on-time delivery with pristine ESG marks.',
        location: 'Industrial Hubs, MG'
      }
    ],
    FR: [
      {
        year: '2016',
        title: 'Charte d\'Intégrité Maritime',
        desc: 'Établissement des protocoles anti-pollution pour le transport bipôle.',
        badge: 'RÈGLEMENT',
        metric: 'Contrôles drastiques validés',
        longDesc: 'Mise en place de listes de contrôle au port de Toamasina pour empêcher l\'introduction de nuisibles et de contaminants dangereux dans les récifs locaux.',
        location: 'Port de Toamasina, MG'
      },
      {
         year: '2021',
         title: 'Corridors Douaniers Fluides',
         desc: 'Liaison directe de transit maritime reliant l\'Europe et l\'Asie.',
         badge: 'TRANSPORT',
         metric: '4 corridors commerciaux ouverts',
         longDesc: 'Intégration d\'une plateforme numérique d\'échange couplée avec les douanes, ramenant le temps de traitement des documents à moins de six heures.',
         location: 'Espace Maritime, MG'
      },
      {
        year: '2026',
        title: 'Flotte Nationale Bas-Carbone',
        desc: 'Fin de transition de notre flotte routière vers le biodiesel régénérateur.',
        badge: 'FLOTTE',
        metric: '3,4M de tonnes transportées',
        longDesc: 'Fusion de nos pôles de distribution avec un suivi de géolocalisation de précision, garantissant une livraison zéro-rebut pour tous nos clients industriels.',
        location: 'Pôles Logistiques, MG'
      }
    ],
    MG: [
      {
        year: '2016',
        title: 'Fitsipika momba ny Seranan-tsambo',
        desc: 'Nametraka fitsipika hisorohana ny fahalotoan’ny rano any Toamasina.',
        badge: 'FITSIPY',
        metric: 'Fahasalamana an-dranomasina voamarina',
        longDesc: 'Nanomboka fitsirihana hentitra ny sambo lehibe rehetra izahay alohan’ny hidiran’izy ireo, mba tsy hisy akora simika mpanimba ny biby an-drano ho voaroaka.',
        location: 'Seranantsambon’i Toamasina, MG'
      },
      {
         year: '2021',
         title: 'Lalan-tsambo Iraisam-pirenena',
         desc: 'Nanangana ny lalam-pitaterana mampiofana ny fifandraisana amin’i Eoropa.',
         badge: 'PITATERANA',
         metric: 'Lalan-tsambo 4 lehibe nosokafana',
         longDesc: 'Nampitambarina ny sambo, ny antontan-taratasy nomerika ho an’ny mpitandro filaminana, ary ny fiara fitaterana entana mba hanafainganana ny varotra lavanila.',
         location: 'Ranomasimbe Indiana'
      },
      {
        year: '2026',
        title: 'Tambajotra Fitaterana sy Fandraofana',
        desc: 'Vita ny fampiasana biodiesel ho an’ireo fiara mpitondra entana rehetra.',
        badge: 'FITATERANA_ALA',
        metric: 'Entana 3.4M taonina voatondro',
        longDesc: 'Tambajotra iray lehibe mampifandray ny tanàna rehetra ary mampihena ny entona mpanimba rivotra amin’ny alalan’ny solika voajanahary vokarina eto an-toerana.',
        location: 'Madagasikara Iray, MG'
      }
    ]
  }
};

export function CompanyHistoryTimeline({ companyId, language, colors }: CompanyHistoryTimelineProps) {
  // Gracefully fallback to NGO timeline if companyId of another business isn't defined explicitly
  const events = TIMELINE_DATABASE[companyId] || TIMELINE_DATABASE.ngo;
  const currentEvents = events[language] || events.EN;
  
  const [activeEventIndex, setActiveEventIndex] = useState<number>(currentEvents.length - 1);

  const t = {
    EN: {
      badge: 'Operational Milestones',
      title: 'Decade of Progress',
      sub: 'Track our major capital deployments, technical breakthroughs, and certified local impacts over the past ten years of sovereign leadership.',
      location: 'Deployment Sector:',
      metricBadge: 'Verified Outcome Indicator:',
      viewDetails: 'Expand Field Narrative',
      closeLabel: 'Minimize Ledger Details',
      metaLabel: 'Timeline Checkpoint Matrix'
    },
    FR: {
      badge: 'JALONS OPÉRATIONNELS',
      title: 'Une Décennie d\'Impact',
      sub: 'Suivez nos principaux déploiements d\'actifs, nos percées technologiques et nos retombées environnementales certifiées par trimestre.',
      location: 'Secteur d\'Intervention :',
      metricBadge: 'Indicateur de Rendement Validé :',
      viewDetails: 'Consulter l\'Historique Complet',
      closeLabel: 'Fermer le Registre Narratif',
      metaLabel: 'Matrice de Suivi Chronologique'
    },
    MG: {
      badge: 'ZAVATRA BITA NISY LANJANY',
      title: 'Tamberin’ny folo taona',
      sub: 'Araho maso eto ny fananganana toby, ny teknolojia ary ny fampandrosoana ara-tsosialy vita nandritra ny folo taona niasana.',
      location: 'Toerana niasana :',
      metricBadge: 'Tondro momba ny vokatry ny asa :',
      viewDetails: 'Vakio ny tantara feno',
      closeLabel: 'Hikatona ny tatitra',
      metaLabel: 'Tondro ara-potoana momba ny asa'
    }
  }[language];

  return (
    <div className="pt-12 pb-6 space-y-8" id={`company-timeline-root-${companyId}`}>
      {/* Section Divider with Icon */}
      <div className="flex items-center space-x-4">
        <span className="h-[1px] flex-grow bg-slate-900" />
        <div className={`flex items-center space-x-2 bg-slate-950/80 border ${colors.borderMuted} rounded-full px-4 py-1.5 backdrop-blur shadow-md`}>
          <History size={12} className={`${colors.iconColor}`} />
          <span className={`font-mono text-[10px] ${colors.textAccent} tracking-wider font-extrabold uppercase`}>
            {t.badge}
          </span>
        </div>
        <span className="h-[1px] flex-grow bg-slate-900" />
      </div>

      {/* Narrative Section Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          {t.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
          {t.sub}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
        
        {/* Left Column: Vertical/Horizontal Selector Node Path (5 columns) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-slate-950/45 border border-slate-900 rounded-3xl p-5 sm:p-6 space-y-4" id="timeline-navigation-node">
            <span className="inline-block px-2.5 py-0.5 rounded font-mono text-[8px] font-black tracking-widest uppercase bg-slate-900 border border-slate-800 text-slate-500">
              {t.metaLabel}
            </span>
            
            {/* Interactive Timeline Rail with Year Bubbles */}
            <div className="relative pl-4 border-l border-slate-900 space-y-3 py-2">
              {currentEvents.map((event, idx) => {
                const isActive = activeEventIndex === idx;
                return (
                  <button
                    key={`${event.year}-${idx}`}
                    onClick={() => setActiveEventIndex(idx)}
                    className="w-full text-left flex items-center space-x-3.5 group cursor-pointer py-1.5 focus:outline-none focus:ring-0 select-none text-xs"
                  >
                    {/* Node Dot with Animated Border Rings */}
                    <div className="relative shrink-0">
                      <div className={`w-3.5 h-3.5 rounded-full border transition-all duration-300 flex items-center justify-center -translate-x-[24px] ${
                        isActive 
                          ? 'bg-emerald-500 border-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)] scale-110' 
                          : 'bg-slate-950 border-slate-800 group-hover:border-slate-600'
                      }`}>
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                      </div>
                    </div>

                    {/* Meta year Label and mini summary */}
                    <div className="flex-grow -translate-x-[12px]">
                      <span className={`font-mono text-xs font-black tracking-widest mr-3 ${isActive ? 'text-emerald-400 scale-105' : 'text-slate-500 group-hover:text-slate-350'}`}>
                        {event.year}
                      </span>
                      <span className={`font-sans tracking-tight line-clamp-1 transition-colors ${isActive ? 'text-white font-semibold' : 'text-slate-450 group-hover:text-slate-300'}`}>
                        {event.title}
                      </span>
                    </div>

                    {/* Mini Arrow Indicating clickable status */}
                    <ArrowRight 
                      size={10} 
                      className={`transition-all duration-300 ${isActive ? 'text-emerald-500 translate-x-0 opacity-100' : 'text-slate-700 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} 
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Display Expanded Event (8 columns) */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEventIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="bg-gradient-to-br from-slate-950 via-slate-950/85 to-slate-900/10 border border-slate-900 rounded-[2rem] p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-2xl"
              id={`timeline-display-${companyId}-${activeEventIndex}`}
            >
              {/* Soft decorative blur corresponding to current sector */}
              <div className={`absolute -right-20 -top-20 w-44 h-44 rounded-full blur-3xl pointer-events-none ${colors.glow}`} />

              {/* Header block with Year Emblem */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1">
                  <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded font-mono text-[9px] font-extrabold tracking-widest uppercase bg-slate-900 border border-slate-800 text-slate-400">
                    {currentEvents[activeEventIndex].badge}
                  </span>
                  
                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                    {currentEvents[activeEventIndex].title}
                  </h3>
                </div>

                {/* Highly pronounced Year indicator */}
                <div className="flex items-center space-x-2 bg-slate-950 border border-slate-900 rounded-2xl px-5 py-2 shrink-0 w-max shadow-inner">
                  <Calendar size={13} className="text-emerald-500" />
                  <span className="font-mono text-lg font-black text-white tracking-wider">
                    {currentEvents[activeEventIndex].year}
                  </span>
                </div>
              </div>

              {/* Event brief desc */}
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                {currentEvents[activeEventIndex].desc}
              </p>

              {/* Ground Note block detailing the expanded history */}
              <div className="bg-slate-950/60 border border-slate-950 rounded-2xl p-4 sm:p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-8 h-8 rounded-bl-xl bg-slate-900/40 border-l border-b border-slate-900/10 flex items-center justify-center text-slate-650">
                  <Info size={11} />
                </div>
                <h4 className="font-mono text-[9px] font-extrabold text-indigo-400 tracking-wider uppercase mb-1.5 flex items-center space-x-1">
                  <Sparkles size={10} className="text-indigo-400" />
                  <span>{language === 'EN' ? 'REPORT DETAILED LOG' : language === 'FR' ? 'NOTICES DÉTAILLÉES D\'AUDIT' : 'TATITRA MANTSY NY ASA'}</span>
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light font-sans">
                  {currentEvents[activeEventIndex].longDesc}
                </p>
              </div>

              {/* Meta specifications array tables */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 text-[10px] font-mono border-t border-slate-900/40">
                <div className="space-y-1.5">
                  <span className="text-slate-500 font-bold block uppercase tracking-wider">{t.location}</span>
                  <div className="flex items-center space-x-1.5 text-slate-300">
                    <MapPin size={11} className={colors.iconColor} />
                    <span className="font-sans text-[11px] font-medium">{currentEvents[activeEventIndex].location}</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-slate-500 font-bold block uppercase tracking-wider">{t.metricBadge}</span>
                  <div className="flex items-center space-x-1.5 text-emerald-400 font-extrabold">
                    <TrendingUp size={11} className="text-emerald-500 shrink-0" />
                    <span className="truncate max-w-full text-[11px] uppercase tracking-wide">{currentEvents[activeEventIndex].metric}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
