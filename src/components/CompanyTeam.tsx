import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  MapPin, 
  Briefcase, 
  Award, 
  Heart, 
  ArrowUpRight, 
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  X
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarSeed: string;
  location: string;
  specialty: string;
  experience: string;
  impactBadge: string;
  motto: string;
  fieldNotes: string;
}

interface CompanyTeamProps {
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

// Complete localized database of team members representing all sectors
const TEAM_DATABASE: Record<string, Record<'EN' | 'FR' | 'MG', TeamMember[]>> = {
  ngo: {
    EN: [
      {
        id: 'ngo-1',
        name: 'Dr. Helena Rabenirina',
        role: 'Director of Healthcare Delivery',
        bio: 'Helena has spent over 18 years engineering pediatric and maternal outreach programs across the remote arid plateaus of the Southern Anosy sector.',
        avatarSeed: 'helena_rabe',
        location: 'Fort-Dauphin (Anosy), MG',
        specialty: 'Tropical Diagnostics & Mobile Medicine',
        experience: '18+ Years',
        impactBadge: '18K+ Treated',
        motto: 'Healthcare is a fundamental human right, not a geographic privilege.',
        fieldNotes: 'During our Q3 dry stretch, deep sand tracks separated villages from regional clinics by days. By deploying off-road tele-diagnostic units, we discovered cases early, saving lives directly under the shade of didiereaceae trees.'
      },
      {
        id: 'ngo-2',
        name: 'Andry Randriambololona',
        role: 'Chief of Rural Electrification',
        bio: 'Andry manages solar infrastructure arrays, bringing eco-friendly power loops to primary EPP schoolhouses across vanilla production regions.',
        avatarSeed: 'andry_randria',
        location: 'Sambava (SAVA), MG',
        specialty: 'Micro-Grid Photovoltaic Engineering',
        experience: '12+ Years',
        impactBadge: '50+ Solar Canopies',
        motto: 'True illumination is enabling children to read after the sun sets.',
        fieldNotes: 'By mounting integrated glassless photovoltaic canopies to regional timber structures, we withstand Indian Ocean cyclone corridors while feeding clean power directly to children’s digital school tablets.'
      },
      {
        id: 'ngo-3',
        name: 'Lova Sitraka',
        role: 'Head of Safe Aquifer Networks',
        bio: 'Lova leads the design and installation of automated urban clean-water kiosks, using reverse osmosis to protect under-resourced families.',
        avatarSeed: 'lova_sitraka',
        location: 'Antananarivo, MG',
        specialty: 'Hydrological Desalination Systems',
        experience: '9+ Years',
        impactBadge: '4.8M Liters distributed',
        motto: 'Water is the biological baseline of education and community health.',
        fieldNotes: 'Deploying automated coinless token systems created a self-sustaining local loop. Women spend 95% less time transporting water, allowing local micro-enterprise and girls’ educational school attendance to surge.'
      }
    ],
    FR: [
      {
        id: 'ngo-1',
        name: 'Dr. Helena Rabenirina',
        role: 'Directrice de l\'Assistance Médicale',
        bio: 'Helena a consacré plus de 18 ans à concevoir des cliniques pédiatriques mobiles à travers les plateaux isolés et arides de l\'Anosy.',
        avatarSeed: 'helena_rabe',
        location: 'Fort-Dauphin (Anosy), MG',
        specialty: 'Diagnostics Tropicaux & Soins de Proximité',
        experience: '18+ Ans',
        impactBadge: '18k+ Patients Soignés',
        motto: 'La santé est un droit fondamental, pas un privilège géographique.',
        fieldNotes: 'Durant la sécheresse du T3, les pistes de sable isolaient les villages pendant des jours. Grâce à nos cliniques mobiles, nous réalisons des imageries sur place, sauvant des vies à l\'ombre des didéréacées.'
      },
      {
        id: 'ngo-2',
        name: 'Andry Randriambololona',
        role: 'Secrétaire de l\'Électrification Rurale',
        bio: 'Andry pilote le déploiement de canopées solaires raccordées dans les écoles primaires de la région agricole de la vanille.',
        avatarSeed: 'andry_randria',
        location: 'Sambava (SAVA), MG',
        specialty: 'Micro-réseaux Photovoltaïques Isolé',
        experience: '12+ Ans',
        impactBadge: '50+ Écoles Équipées',
        motto: 'La vraie lumière permet aux écoliers de lire longtemps après le crépuscule.',
        fieldNotes: 'Nos toitures photovoltaïques sans verre résistent aux pires corridors cycloniques de l\'océan Indien tout en délivrant un courant stable pour les outils informatiques des élèves.'
      },
      {
        id: 'ngo-3',
        name: 'Lova Sitraka',
        role: 'Responsable des Réseaux Hydriques',
        bio: 'Lova supervise la mise en place de kiosques autonomes à eau pure urbains pour éliminer les risques bactériologiques des enfants.',
        avatarSeed: 'lova_sitraka',
        location: 'Antananarivo, MG',
        specialty: 'Systèmes de Purification Hydro-Ondulatoire',
        experience: '9+ Ans',
        impactBadge: '4,8M Litres Distribués',
        motto: 'L\'eau potable est le socle biologique de l\'apprentissage et de la paix.',
        fieldNotes: 'Nos systèmes automatiques à jeton intelligent sans contact responsabilisent les quartiers. Les écolières passent 95% moins de temps aux corvées d\'eau, améliorant directement leur scolarité.'
      }
    ],
    MG: [
      {
        id: 'ngo-1',
        name: 'Dr. Helena Rabenirina',
        role: 'Tale miandraikitra ny Fahasalamana',
        bio: 'Helena dia niofana sy niasa 18 taona mahery tamin\'ny fitetezana fitsaboana ho an\'ny reny sy ny zaza tany amin\'ny faritra saro-pady any Anosy.',
        avatarSeed: 'helena_rabe',
        location: 'Fort-Dauphin (Anosy), MG',
        specialty: 'Fitiliana aretina sy fitsaboana mitety vohitra',
        experience: '18 Taona',
        impactBadge: '18K+ Voatsabo',
        motto: 'Ny fahasalamana dia zon\'ny olona rehetra, fa tsy tombontsoan\'ny toerana.',
        fieldNotes: 'Nandritra ny main-tany, sarotra ny lalana mankany amin\'ny hopitaly. Ny "mobile diagnostic clinics" anay kosa dia nahitana aretina haingana, namonjy aina mivantana teo ambanin\'ny aloky ny hazon-tany.'
      },
      {
        id: 'ngo-2',
        name: 'Andry Randriambololona',
        role: 'Lehiben\'ny fampiroboroboana ny angovo',
        bio: 'Andry no mandrindra ny fananganana toby fampiasana jiro masoandro amin\'ireo sekoly EPP any amin\'ny faritra mamokatra lavanila.',
        avatarSeed: 'andry_randria',
        location: 'Sambava (SAVA), MG',
        specialty: 'Teknolojia Solera ho an\'ny ambanivohitra',
        experience: '12 Taona',
        impactBadge: 'Ep 50+ vita',
        motto: 'Ny tena fandrosoana dia rehefa afaka mamaky boky ny ankizy rehefa milentika ny masoandro.',
        fieldNotes: 'Ny fandrafetana panely solera tsy vaky fitsentsitra jiro dia nahazaka ny rivodoza avy any amin\'ny Ranomasimbe Indiana nefa nahampy tsara ny solosain\'ny sekoly ambanivohitra.'
      },
      {
        id: 'ngo-3',
        name: 'Lova Sitraka',
        role: 'Mpandrindra ny famatsian-drano madio',
        bio: 'Lova dia mitarika ny fandrafetana sy fametrahana ireo kioska mpanadio rano amin\'ny fampiasana filtre "Reverse Osmosis" ho an\'ny rehetra.',
        avatarSeed: 'lova_sitraka',
        location: 'Antananarivo, MG',
        specialty: 'Sivana rano amin\'ny alalan\'ny fanandriana',
        experience: '9 Taona',
        impactBadge: 'Rano 4.8M L voazara',
        motto: 'Ny rano madio no iorenan\'ny fahasalamana sy ny fianarana tsara.',
        fieldNotes: 'Ny fampiasana karatra nomerika manokana dia nanome fahaleovan-tena ho an\'ireo vehivavy. Nihena 95% ny fotoana laniny tamin\'ny fikarihana rano maloto, ka nahafahany mianatra sy miasa tsara kokoa.'
      }
    ]
  },
  tsingy: {
    EN: [
      {
        id: 'tsingy-1',
        name: 'Sylvie Razafimahatratra',
        role: 'Director of Eco-Lodge Operations',
        bio: 'Sylvie holds 15+ years managing premium sustainable hospitality programs across remote sanctuaries in Southern Africa.',
        avatarSeed: 'sylvie_raza',
        location: 'Diego Suarez, MG',
        specialty: 'Zero-Carbon Hotel Systems',
        experience: '15+ Years',
        impactBadge: 'NPS 98.8%',
        motto: 'True luxury lies in the preservation of nature, not the modification of it.',
        fieldNotes: 'By training local youth from coastal fishing sectors in carbon-free hosting guidelines, we elevated service Quality while keeping local community engagement incredibly high.'
      },
      {
        id: 'tsingy-2',
        name: 'Jean-Marc Beandry',
        role: 'Chief Conservation Warden',
        bio: 'Jean-Marc leads the anti-poaching and forest biodiversity monitoring teams throughout the fragile karst corridors.',
        avatarSeed: 'jean_marc',
        location: 'Tsingy Reserve, MG',
        specialty: 'Karst Wildlife Monitoring',
        experience: '14 Years',
        impactBadge: '4.5k Ha Saved',
        motto: 'Our lime sediment structures form the geological heart of andrianam-pirenena.',
        fieldNotes: 'Using non-invasive telemetry and high-aspect heat scanners, we keep track of endangered lemur populations nocturnal patterns without any physical light interference.'
      },
      {
        id: 'tsingy-3',
        name: 'Nathalie Rambelo',
        role: 'Lead Biophilic Architect',
        bio: 'Nathalie designs high-end modular platforms suspended cleanly above delicate limestone needles to avoid ground degradation.',
        avatarSeed: 'nathalie_ram',
        location: 'Antananarivo, MG',
        specialty: 'Low-Impact Structural Geophysics',
        experience: '8+ Years',
        impactBadge: '12 Suspended Suites',
        motto: 'Architectural honesty means leaving the ground completely untouched.',
        fieldNotes: 'Our suspension methodology bypasses traditional heavy foundation pouring. We anchoring only 2-inch wide stainless pins deep into secure sedimentary seams.'
      }
    ],
    FR: [
      {
        id: 'tsingy-1',
        name: 'Sylvie Razafimahatratra',
        role: 'Directrice des Éco-Lodges',
        bio: 'Sylvie possède plus de 15 ans d\'expérience dans la gestion d\'hôtels éco-responsables haut de gamme dans les sanctuaires d\'Afrique australe.',
        avatarSeed: 'sylvie_raza',
        location: 'Diego Suarez, MG',
        specialty: 'Hôtellerie Carbone-Neutre',
        experience: '15+ Ans',
        impactBadge: 'NPS 98,8%',
        motto: 'Le vrai luxe réside dans la préservation de la nature, pas dans sa modification.',
        fieldNotes: 'En formant les jeunes locaux des villages côtiers aux règles hôtelières durables, nous créons des emplois de qualité tout en limitant l\'exode rural.'
      },
      {
        id: 'tsingy-2',
        name: 'Jean-Marc Beandry',
        role: 'Conservateur en Chef',
        bio: 'Jean-Marc dirige les équipes de surveillance de la biodiversité végétale et animale à travers les fissures calcaires fragiles.',
        avatarSeed: 'jean_marc',
        location: 'Réserve de Tsingy, MG',
        specialty: 'Suivi Faunique Sédimentaire',
        experience: '14 Ans',
        impactBadge: '4,5k Ha Sauvés',
        motto: 'Nos barrières de calcaire constituent le cœur géologique endémique du pays.',
        fieldNotes: 'À l\'aide d\'outils radio discrets et de traceurs thermiques, nous surveillons les lémuriens nocturnes en évitant toute pollution lumineuse artificielle.'
      },
      {
        id: 'tsingy-3',
        name: 'Nathalie Rambelo',
        role: 'Architecte Biophilique Principale',
        bio: 'Nathalie conçoit les suites suspendues destinées à flotter au-dessus des aiguilles calcaires sans impacter la couche arable.',
        avatarSeed: 'nathalie_ram',
        location: 'Antananarivo, MG',
        specialty: 'Structure Géophysique Écopréserver',
        experience: '8+ Ans',
        impactBadge: '12 Suites Flottantes',
        motto: 'L\'honnêteté constructive consiste à respecter l\'intégrité absolue des sols.',
        fieldNotes: 'Nos terrasses boisées reposent sur des micro-ancrages d\'acier inoxydable perforés de quelques centimètres, évitant l\'usage destructeur de dalles pleines.'
      }
    ],
    MG: [
      {
        id: 'tsingy-1',
        name: 'Sylvie Razafimahatratra',
        role: 'Tale mpandrindra ny Tsingy Lodge',
        bio: 'Sylvie dia miandraikitra ny fandraisana vahiny sy ny fitantanana ny trano fialantsasara mitsinjo ny tontolo iainana efa naharitra 15 taona.',
        avatarSeed: 'sylvie_raza',
        location: 'Diego Suarez, MG',
        specialty: 'Fizahan-tany tsy mampiasa Karbôna',
        experience: '15 Taona mahery',
        impactBadge: '98.8% Afapo',
        motto: 'Ny tena harena dia ny fiarovana ny zava-boary fa tsy ny fanovana azy.',
        fieldNotes: 'Tamin\'ny alalan\'ny fanofanana ny tanora avy amin\'ny tanànan\'ny mpanjono eo an-toerana amin\'ny fahaiza-mandray vahiny, dia nampiakatra ny kalitaon\'ny asa izahay nefa niantoka ny fitoniana.'
      },
      {
        id: 'tsingy-2',
        name: 'Jean-Marc Beandry',
        role: 'Mpiantoka ny ala sy ny Tsingy',
        bio: 'Jean-Marc no mitarika ny mpanara-maso ny ala sy ny biby miavaka amin\'ireo lalan-tsara sy zohy any Tsingy.',
        avatarSeed: 'jean_marc',
        location: 'Diego, MG',
        specialty: 'Fiarovana ny biby an-karst',
        experience: '14 Taona',
        impactBadge: '4.5k Ha voaaro',
        motto: 'Ireo vato tsingy kanto ireo no vakoka sarobidy indrindra ho an\'ny Firenena.',
        fieldNotes: 'Amin\'ny fampiasana fitsirihana hafanana farany ambony, dia fantatray ny fihetsiky ny varika amin\'ny alina tsy mila jiro manaitra azy ireo.'
      },
      {
        id: 'tsingy-3',
        name: 'Nathalie Rambelo',
        role: 'Mpandrafitra trano mahay ny tontolo',
        bio: 'Nathalie no mamorona ireo trano hazo miavaka izay mihantona moramora eo ambonin\'ny Tsingy mba tsy hanimba ny vato kely.',
        avatarSeed: 'nathalie_ram',
        location: 'Antananarivo, MG',
        specialty: 'Drafitra trano ambony tany saro-pady',
        experience: '8 Taona mahery',
        impactBadge: 'Trano mihantona 12',
        motto: 'Ny fahaiza-manao dia ny fananganana tsy mandrovitra ny tany.',
        fieldNotes: 'Ny fomba fananganana trano mihantona dia tsy mila fototra mavesatra. Isika dia nampiasa vy "stainless" manify napetaka lalina tamin\'ny vato mafy.'
      }
    ]
  },
  water: {
    EN: [
      {
        id: 'water-1',
        name: 'Dr. Thierry Rakotomalala',
        role: 'Director of Aquifer Filtration',
        bio: 'Thierry designs municipal-scale reverse osmosis filtration systems to restore clean water access in highly salinated oceanfront coastal blocks.',
        avatarSeed: 'thierry_rako',
        location: 'Mahajanga, MG',
        specialty: 'Osmotic Hydro-Engineering',
        experience: '16+ Years',
        impactBadge: '12M Liters/Yr',
        motto: 'Access to pure hydration is the silent foundation of industrial and bodily uptime.',
        fieldNotes: 'By utilizing multi-chamber high pressure sand arrays and semi-permeable membranes, we filter out dissolved salts with zero chemical inputs.'
      },
      {
        id: 'water-2',
        name: 'Mirana Randrianarisoa',
        role: 'Manager of Grid Distribution',
        bio: 'Mirana oversees the mechanical laying of pipeline arrays, supplying deep, pathogen-free reservoir lines directly to outlying towns.',
        avatarSeed: 'mirana_randria',
        location: 'Antananarivo, MG',
        specialty: 'Reticulated Gravity Grid Design',
        experience: '11 Years',
        impactBadge: '110+ Villages',
        motto: 'Every pipeline we connect cuts waterborne pathogen statistics in half.',
        fieldNotes: 'We integrated local micro-monitors that track flow pressure telemetry, notifying our engineering dispatch center before line leaks or blocks impact families.'
      },
      {
        id: 'water-3',
        name: 'Pascal Rabe',
        role: 'Lead Geological Hydrologist',
        bio: 'Pascal monitors deep earth aquifers, establishing secure drill channels that tap clean subterranean pockets without drawing down surface water.',
        avatarSeed: 'pascal_rabe',
        location: 'Toliara, MG',
        specialty: 'Submersible Well Sinking',
        experience: '10 Years',
        impactBadge: '48 Deep Wells',
        motto: 'To find the purest liquid loop, you must read the story of the stones.',
        fieldNotes: 'By testing soil spectroscopy prior to setting deep rigs, we avoid heavy metal compounds while ensuring long-term aquifer stability.'
      }
    ],
    FR: [
      {
        id: 'water-1',
        name: 'Dr. Thierry Rakotomalala',
        role: 'Directeur de la Filtration des Aquifères',
        bio: 'Thierry conçoit des systèmes de désalinisation par osmose inverse pour amener l\'eau douce potable dans les communes côtières hautement salinisées.',
        avatarSeed: 'thierry_rako',
        location: 'Mahajanga, MG',
        specialty: 'Génie Osmotique des Fluides',
        experience: '16+ Ans',
        impactBadge: '12M Litres/An',
        motto: 'L\'accès à l\'eau pure est la fondation silencieuse de l\'activité humaine et de l\'industrie.',
        fieldNotes: 'Nos systèmes à cartouches sédimentaires multiples filtrent l\'eau de mer sans aucun additif chimique, rejetant un concentré salin neutre au large.'
      },
      {
        id: 'water-2',
        name: 'Mirana Randrianarisoa',
        role: 'Responsable des Réseaux d\'Adduction',
        bio: 'Mirana supervise la pose technique des conduites d\'eau qui acheminent les réserves purifiées vers les localités isolées.',
        avatarSeed: 'mirana_randria',
        location: 'Antananarivo, MG',
        specialty: 'Conduites Gravitaires de Grande Échelle',
        experience: '11 Ans',
        impactBadge: '110+ Communes',
        motto: 'Chaque mètre linéaire posé réduit drastiquement l\'incidence parasitaire locale.',
        fieldNotes: 'Nous formons des comités de village pour surveiller les capteurs de pression, assurant une auto-réparation efficace avant toute fuite critique.'
      },
      {
        id: 'water-3',
        name: 'Pascal Rabe',
        role: 'Hydrologue Souterrain Principal',
        bio: 'Pascal étudie les nappes profondes de l\'enveloppe terrestre pour forer avec précision dans des poches exemptes de contaminants.',
        avatarSeed: 'pascal_rabe',
        location: 'Toliara, MG',
        specialty: 'Forage Profond Hydrologique',
        experience: '10 Ans',
        impactBadge: '48 Forages Actifs',
        motto: 'Pour trouver l\'eau la plus pure, il faut déchiffrer l\'histoire écrite dans la roche.',
        fieldNotes: 'Par l\'analyse des coupes de grès et de calcaire, nous évitons les poches à forte teneur en métaux pour livrer une eau parfaitement équilibrée.'
      }
    ],
    MG: [
      {
        id: 'water-1',
        name: 'Dr. Thierry Rakotomalala',
        role: 'Tale miandraikitra ny sivana rano',
        bio: 'Thierry dia namolavola ny fitaovana sivana "reverse osmosis" lehibe hitrandrahana rano madio amin\'ny rano misy sira any amin\'ny morontsiraka.',
        avatarSeed: 'thierry_rako',
        location: 'Mahajanga, MG',
        specialty: 'Teknolojia sivana rano "Osmotique"',
        experience: '16 Taona mahery',
        impactBadge: '12M L / Taona',
        motto: 'Ny fahazoana rano madio no fanalahidy voalohany amin\'ny fahasalamana sy ny asa.',
        fieldNotes: 'Amin\'ny fampiasana sivana sora-bato sy rano tsindry farany ambony, dia voasivana madio ny sira sy ny loto amin\'ny fomba voajanahary.'
      },
      {
        id: 'water-2',
        name: 'Mirana Randrianarisoa',
        role: 'Mpandrindra ny fantson-drano',
        bio: 'Mirana no mitantana ny fampitambarana fantsona lehibe, mitondra ny rano madio avy amin\'ny toby mankany amin\'ny tanàna madinika.',
        avatarSeed: 'mirana_randria',
        location: 'Antananarivo, MG',
        specialty: 'Drafitra fitarihana rano amin\'ny hery misintona',
        experience: '11 Taona',
        impactBadge: 'Tanàna 110+',
        motto: 'Isaky ny fantsona tafaraka dia mihena ny isan\'ny zaza marary kibo.',
        fieldNotes: 'Niara-niasa tamin\'ny teknolojia nomerika izahay mampiasa "sensor" mampahafantatra avy hatrany raha misy fantsona vaky na tsentsina.'
      },
      {
        id: 'water-3',
        name: 'Pascal Rabe',
        role: 'Injenieran\'ny fantsakana lalina',
        bio: 'Pascal dia manara-maso ny fantsakana lalina ambanin\'ny tany, miantoka ny fahafahan\'ny fantsakana mamatsy rano tsy misy fahalotoana.',
        avatarSeed: 'pascal_rabe',
        location: 'Toliara, MG',
        specialty: 'Fitrandrahana rano ambanin\'ny tany',
        experience: '10 Taona',
        impactBadge: 'Loharano 48',
        motto: 'Raha te hahazo rano madio indrindra ianao, mila mahafantatra ny fizotry ny vatolampy.',
        fieldNotes: 'Mandrefy ny sanda momba ny tany sy ny vato izahay alohan\'ny handavahana, mba hisorohana ny vovoka simika mety ho hita any ambanin\'ny tany.'
      }
    ]
  },
  woods: {
    EN: [
      {
        id: 'woods-1',
        name: 'Tahiry Rajaona',
        role: 'Director of FSC Silviculture',
        bio: 'Tahiry oversees high-standard planting protocols, nursery propagation, and local community-supported reforestation grids across 24k Ha.',
        avatarSeed: 'tahiry_raja',
        location: 'Moramanga, MG',
        specialty: 'Native Species Propagation',
        experience: '14+ Years',
        impactBadge: '1.2M Saplings',
        motto: 'A sustainable forest is a living bank that yields oxygen and secure jobs for generations.',
        fieldNotes: 'We established dedicated nurseries for precious endemic timbers alongside fast-growing utility pine. This satisfies commercial architectural demand while restoring indigenous biodiversity.'
      },
      {
        id: 'woods-2',
        name: 'Bako Ratsimbazafy',
        role: 'Lead FSC Compliance Officer',
        bio: 'Bako guarantees our products meet pristine international ecological tracking guidelines with absolute structural transparency.',
        avatarSeed: 'bako_rat',
        location: 'Antananarivo, MG',
        specialty: 'Forest Stewardship Council Standards',
        experience: '12 Years',
        impactBadge: '100% Traceable',
        motto: 'Chain-of-custody tracking protects forest ecosystems from exploitation.',
        fieldNotes: 'Every legal log is engraved with a laser QR code barcode at the plantation. This tracks timber from soil level through milling and transport straight to high-fidelity export client hands.'
      },
      {
        id: 'woods-3',
        name: 'Hery Lalaina',
        role: 'Master Timber Artisan',
        bio: 'Hery trains local carpenters in structural carpentry, transforming raw certified timber into precision furniture and architecture assets.',
        avatarSeed: 'hery_lal',
        location: 'Moramanga, MG',
        specialty: 'Low-Waste Wood Milling',
        experience: '15 Years',
        impactBadge: '300+ Artisans Trained',
        motto: 'Respecting timber means utilizing every cut with ultimate geometric efficiency.',
        fieldNotes: 'By utilizing laser-guided sawing rigs, we elevated timber yield per log by 32%, turning surplus trimmings into fuel pellets for local sustainable community kilns.'
      }
    ],
    FR: [
      {
        id: 'woods-1',
        name: 'Tahiry Rajaona',
        role: 'Directeur de la Sylviculture FSC',
        bio: 'Tahiry coordonne la pépinière forestière et gère les programmes de reboisement direct sur une emprise de 24k Ha.',
        avatarSeed: 'tahiry_raja',
        location: 'Moramanga, MG',
        specialty: 'Propagation d\'Essences Endémiques',
        experience: '14+ Ans',
        impactBadge: '1,2M Pousses',
        motto: 'Une forêt durable est une banque vivante délivrant l\'oxygène et la richesse des générations futures.',
        fieldNotes: 'Nous marions l\'exploitation de pins d\'œuvre à rotation rapide et le reboisement d\'essences endémiques pour régénérer la canopée dégradée.'
      },
      {
        id: 'woods-2',
        name: 'Bako Ratsimbazafy',
        role: 'Auditrice de Conformité FSC',
        bio: 'Bako veille à ce que chacun de nos produits réponde aux exigences strictes de traçabilité carbone et environnementale du label FSC.',
        avatarSeed: 'bako_rat',
        location: 'Antananarivo, MG',
        specialty: 'Normes de Certification Sylvicoles',
        experience: '12 Ans',
        impactBadge: '100% Traçable',
        motto: 'La traçabilité totale protège la filière bois légitime contre la déforestation sauvage.',
        fieldNotes: 'Chaque grume coupée reçoit un marquage laser unique. Ce code permet de vérifier l\'âge, la provenance et l\'empreinte de transport en temps réel.'
      },
      {
        id: 'woods-3',
        name: 'Hery Lalaina',
        role: 'Maître Artisan Ébéniste',
        bio: 'Hery forme les ouvriers de scierie aux techniques d\'usinage de précision pour élaborer des pièces de bois d\'œuvre très haut de gamme.',
        avatarSeed: 'hery_lal',
        location: 'Moramanga, MG',
        specialty: 'Usinage Assisté à Faible Rebut',
        experience: '15 Ans',
        impactBadge: '300+ Ébénistes',
        motto: 'Respecter le bois d\'œuvre signifie optimiser chaque coupe avec un minimum de déchets.',
        fieldNotes: 'Grâce à des têtes de coupe laser guidées, nous réduisons les résidus de bois et réutilisons la sciure pour alimenter les séchoirs de manufacture.'
      }
    ],
    MG: [
      {
        id: 'woods-1',
        name: 'Tahiry Rajaona',
        role: 'Tale miandraikitra ny fambolen-kazo',
        bio: 'Tahiry dia mitantana ireo masomboly kely sy fambolen-kazo indray amin\'ireo ala mirefy 24,000 Hektara.',
        avatarSeed: 'tahiry_raja',
        location: 'Moramanga, MG',
        specialty: 'Fampitomboana karazan-kazo malagasy',
        experience: '14 Taona mahery',
        impactBadge: 'Zana-kazo 1.2M',
        motto: 'Ny ala maharitra dia loharano velona manome rivotra madio sy asa ho an\'ny taranaka.',
        fieldNotes: 'Nanangana toeram-pambolena hazo sarobidy toy ny andramena sy hazo fihinam-boa izahay, mba hamatsiana ny indostria tsy manimba ny ala voajanahary.'
      },
      {
        id: 'woods-2',
        name: 'Bako Ratsimbazafy',
        role: 'Mpanamarina ny mari-pankatoavana FSC',
        bio: 'Bako dia miantoka fa manaraka ny fitsipika iraisam-pirenena FSC momba ny fiarovana ny ala ny hazo voajinja rehetra.',
        avatarSeed: 'bako_rat',
        location: 'Antananarivo, MG',
        specialty: 'Fitsipika sy fenitra FSC momba ny ala',
        experience: '12 Taona',
        impactBadge: '100% Voamarina',
        motto: 'Ny fanaraha-maso ny fizotran\'ny hazo no miaro ny alantsika amin\'ny fangalarana.',
        fieldNotes: 'Isaky ny hazo tapaka dia misy QR code soratana amin\'ny laser. Izany no ahafahana manaraka ny lalana nalehany manomboka any an-tsaha ka hatrany amin\'ny mpanjifa.'
      },
      {
        id: 'woods-3',
        name: 'Hery Lalaina',
        role: 'Lehiben\'ny mpandrafitra matihanina',
        bio: 'Hery no mampianatra sy manofana ireo mpiasa eo an-toerana amin\'ny fampiasana hazo amin\'ny fomba mahomby sy feno kanto.',
        avatarSeed: 'hery_lal',
        location: 'Moramanga, MG',
        specialty: 'Famokarana hazo tsy misy fako',
        experience: '15 Taona',
        impactBadge: '300+ voahofana',
        motto: 'Ny fanajana ny hazo dia ny fampiasana azy amin\'ny sanda farany ambony nefa tsy misy very.',
        fieldNotes: 'Mampiasa tsofa miendrika laser izahay handrafetana ny hazo, ka niakatra 32% ny vokatra azo isaky ny vatan-kazo iray nefa kely ny ambaserany.'
      }
    ]
  },
  realestate: {
    EN: [
      {
        id: 're-1',
        name: 'Jocelyn Radavidrason',
        role: 'Chief Architect & Smart Planner',
        bio: 'Jocelyn leads urban masterplanning, organizing net-zero commercial developments and enterprise high-rises integrated with high-performance solar glazing.',
        avatarSeed: 'jocelyn_rada',
        location: 'Antananarivo, MG',
        specialty: 'Net-Zero Thermal Smart Cities',
        experience: '17+ Years',
        impactBadge: '42 Buildings',
        motto: 'A functional city should breathe natively with ecological and thermal loops.',
        fieldNotes: 'By designing passive solar facades and organizing natural wind corridors throughout our latest retail centers, we cut cooling loads by 35% without adding mechanical equipment.'
      },
      {
        id: 're-2',
        name: 'Clarisse Ravaoarimalala',
        role: 'Director of Sustainable Construction',
        bio: 'Clarisse directs engineering teams, ensuring structural integrity while using green cement binders to lower structural embodied carbon.',
        avatarSeed: 'clarisse_ravao',
        location: 'Antananarivo, MG',
        specialty: 'Embodies Carbon Mitigation',
        experience: '13 Years',
        impactBadge: '2.8M SF Constructed',
        motto: 'Building resilient spaces requires solid earth-friendly binders.',
        fieldNotes: 'We switched our concrete supply to include local volcanic pozzolan overlays, drastically reducing imported cement requirements and saving thousands of tons of shipping emissions.'
      },
      {
        id: 're-3',
        name: 'Nirina Raharison',
        role: 'LEED Certification Specialist',
        bio: 'Nirina coordinates structural auditing, locking in top-tier certification honors for sovereign administrative complexes.',
        avatarSeed: 'nirina_raha',
        location: 'Antananarivo, MG',
        specialty: 'High-Environmental Performance Criteria',
        experience: '9 Years',
        impactBadge: 'LEED Platinum Stars',
        motto: 'Rigorous ecological metrics transform structural plans into long-term assets.',
        fieldNotes: 'By enforcing strict structural water-saving guidelines and closed graywater recycling networks, our buildings operate at 50% lower municipal water dependency rates.'
      }
    ],
    FR: [
      {
        id: 're-1',
        name: 'Jocelyn Radavidrason',
        role: 'Architecte en Chef & Urbaniste',
        bio: 'Jocelyn pilote la planification urbaine durable, concevant des complexes d\'affaires neutres en carbone intégrant des façades solaires thermiques.',
        avatarSeed: 'jocelyn_rada',
        location: 'Antananarivo, MG',
        specialty: 'Planification Urbaine Bioclimatique',
        experience: '17+ Ans',
        impactBadge: '42 Bâtiments',
        motto: 'Une ville moderne doit respirer au rythme des cycles thermiques naturels.',
        fieldNotes: 'En dessinant des structures ventilées naturellement, nous obtenons une climatisation passive qui réduit le recours aux blocs de climatisation.'
      },
      {
        id: 're-2',
        name: 'Clarisse Ravaoarimalala',
        role: 'Directrice des Chantiers Durables',
        bio: 'Clarisse gère les équipes de génie civil, insistant sur l\'usage de béton bas carbone et de matériaux biosourcés.',
        avatarSeed: 'clarisse_ravao',
        location: 'Antananarivo, MG',
        specialty: 'Matériaux & Bétons Neutres',
        experience: '13 Ans',
        impactBadge: '2,8M SF Construits',
        motto: 'Bâtir durablement exige des liants solides respectueux de notre terre.',
        fieldNotes: 'Nous intégrons des poussières volcaniques régionales dans les mortiers, ce qui diminue le besoin de clinker importé et solidifie nos édifices.'
      },
      {
        id: 're-3',
        name: 'Nirina Raharison',
        role: 'Responsable Certification LEED',
        bio: 'Nirina dirige la conformité écologique, obtenant les labels les plus stricts pour nos projets de bureaux et de centres commerciaux.',
        avatarSeed: 'nirina_raha',
        location: 'Antananarivo, MG',
        specialty: 'Critères Environnementaux LEED / HQE',
        experience: '9 Ans',
        impactBadge: 'Labels LEED Platine',
        motto: 'L\'audit environnemental rigoureux valorise l\'immobilier sur le long terme.',
        fieldNotes: 'Grâce à la boucle d\'eau grise implantée dans tous nos bâtiments, nos usagers consomment moitié moins de ressources municipales.'
      }
    ],
    MG: [
      {
        id: 're-1',
        name: 'Jocelyn Radavidrason',
        role: 'Lehiben\'ny mpandrafitra sy mpandahatra',
        bio: 'Jocelyn no mitarika ny mari-trano sy ny fandaharan\'asa momba ny fananganana tanàna mitsinjo ny angovo tsy manimba.',
        avatarSeed: 'jocelyn_rada',
        location: 'Antananarivo, MG',
        specialty: 'Famolavolana tanàna mitsitsy hafanana',
        experience: '17 Taona mahery',
        impactBadge: 'Trano 42 vita',
        motto: 'Ny tanàna mahomby dia tokony miresaka mivantana amin\'ny tontolo iainana.',
        fieldNotes: 'Tamin\'ny alalan\'ny fametrahana lalan-tsira ho an\'ny rivotra tsara eo amin\'ny trano fivarotana lehibe, dia nidina 35% ny fampiasana milina mpanamando rivotra.'
      },
      {
        id: 're-2',
        name: 'Clarisse Ravaoarimalala',
        role: 'Tale miandraikitra ny fananganana trano',
        bio: 'Clarisse dia mitantana ireo mpiasa mpanorina, miantoka ny fahamafisan\'ny rindrina amin\'ny alalan\'ny simenitra bas-carbon.',
        avatarSeed: 'clarisse_ravao',
        location: 'Antananarivo, MG',
        specialty: 'Fananganana trano mitsinjo ny tany',
        experience: '13 Taona',
        impactBadge: '2.8M SF vita',
        motto: 'Ny fanorenana mafy dia mila akora mitsitsy sy mitsinjo ny tany.',
        fieldNotes: 'Nampiasa vovoka vato mitsonika avy eto an-toerana izahay hampifandraisana ny simenitra, nampihena ny fanafarana akora lafo vidy avy any ivelany.'
      },
      {
        id: 're-3',
        name: 'Nirina Raharison',
        role: 'Mpanamarina mari-pankatoavana LEED',
        bio: 'Nirina no manamarina ny sanda momba ny tontolo, miantoka ny fahazoana ny mari-pankatoavana ambony indrindra ho an\'ny trano rehetra.',
        avatarSeed: 'nirina_raha',
        location: 'Antananarivo, MG',
        specialty: 'Fenitry ny tontolo iainana LEED sy HQE',
        experience: '9 Taona',
        impactBadge: 'LEED Platinum',
        motto: 'Ny tondro mitsinjo ny tontolo iainana no manova ny trano ho vakoka maharitra.',
        fieldNotes: 'Mampiasa rafitra mpanadio rano maloto kely izahay isaky ny trano, mba hahafahana mampiasa rano indray andoavana ny zaridaina sy ny trano fivoahana.'
      }
    ]
  },
  energy: {
    EN: [
      {
        id: 'en-1',
        name: 'Dr. Solofo Rabetokotany',
        role: 'Director of Renewable Networks',
        bio: 'Solofo leads high-voltage clean energy integrations, bringing hybrid solar microgrids and run-of-the-river hydropower units onto regional grids.',
        avatarSeed: 'solofo_rabet',
        location: 'Antsirabe, MG',
        specialty: 'Sovereign Grid Power Integration',
        experience: '18 Years',
        impactBadge: '295 MW Capacity',
        motto: 'Electric power is the neurological engine of economic growth; keeping it green is our solemn duty.',
        fieldNotes: 'By synchronizing variable high-output solar arrays with storage batteries and run-of-the-river water wheels, we maintain grid frequency parameters without burning imported petroleum.'
      },
      {
        id: 'en-2',
        name: 'Faly Tsitohaina',
        role: 'Chief Microgrid Engineer',
        bio: 'Faly oversees installation of decentralized containerized solar hubs, feeding automatic electricity to remote, off-grid agricultural communities.',
        avatarSeed: 'faly_tsito',
        location: 'Sambava, MG',
        specialty: 'Solid-State Storage & Inverters',
        experience: '11 Years',
        impactBadge: '120 Microgrids',
        motto: 'Unlocking off-grid light unlocks local enterprise opportunities.',
        fieldNotes: 'We packaged safe solar boards and smart-meter boxes in compact weather-proof metal enclosures. Local cooperatives operate them with easy digital mobile monetary tokens.'
      },
      {
        id: 'en-3',
        name: 'Mamy Fenosoa',
        role: 'Hydraulic Flow Analyst',
        bio: 'Mamy studies water course velocities, mapping non-disruptive runoff turbine locations that avoid flooding sensitive agricultural fields.',
        avatarSeed: 'mamy_feno',
        location: 'Fianarantsoa, MG',
        specialty: 'River Velocity Grid Modeling',
        experience: '8 Years',
        impactBadge: '99.9% Hydrological SLA',
        motto: 'Let the natural runoff of our water courses illuminate the future.',
        fieldNotes: 'We created custom dynamic flow predictors. These balance high-water storms with low dry cycles, safeguarding regional communities while optimizing clean outputs.'
      }
    ],
    FR: [
      {
        id: 'en-1',
        name: 'Dr. Solofo Rabetokotany',
        role: 'Directeur des Énergies Neutres',
        bio: 'Solofo gère le raccordement des centrales solaires rutilantes et des turbines hydrauliques au réseau électrique interconnecté.',
        avatarSeed: 'solofo_rabet',
        location: 'Antsirabe, MG',
        specialty: 'Intégration Réseau Haute Tension',
        experience: '18 Ans',
        impactBadge: '295 MW Livrés',
        motto: 'L\'électricité est la colonne vertébrale du développement, la garder verte est notre priorité absolue.',
        fieldNotes: 'À l\'aide de régulateurs de charge avancés, nous stabilisons le courant du réseau public sans aucune combustion de fioul lourd.'
      },
      {
        id: 'en-2',
        name: 'Faly Tsitohaina',
        role: 'Ingénieur Micro-Réseaux',
        bio: 'Faly conçoit des générateurs photovoltaïques mobiles en conteneurs pour électrifier les dispensaires et les récoltes isolées.',
        avatarSeed: 'faly_tsito',
        location: 'Sambava, MG',
        specialty: 'Accumulation d\'Énergie Stationnaire',
        experience: '11 Ans',
        impactBadge: '120 Micro-grids',
        motto: 'Amener l\'électricité en brousse stimule l\'essor des coopératives agricoles.',
        fieldNotes: 'Chaque conteneur intègre des batteries au sel et des compteurs intelligents autonomes que les bénéficiaires gèrent via mobile money.'
      },
      {
        id: 'en-3',
        name: 'Mamy Fenosoa',
        role: 'Hydro-Analyste des Flux',
        bio: 'Mamy modélise les courants fluviaux pour implanter des micro-turbines au fil de l\'eau n\'impactant pas les bancs de poissons.',
        avatarSeed: 'mamy_feno',
        location: 'Fianarantsoa, MG',
        specialty: 'Optimisation Hydraulique Verte',
        experience: '8 Ans',
        impactBadge: 'SLA Énergie 99,9%',
        motto: 'Exploitons la force douce de nos rivières sans perturber leur cours naturel.',
        fieldNotes: 'Nos turbines intègrent des rotors à basse vitesse, conçus spécifiquement pour préserver la vie aquatique tout en alimentant les villages adjacents.'
      }
    ],
    MG: [
      {
        id: 'en-1',
        name: 'Dr. Solofo Rabetokotany',
        role: 'Tale miandraikitra ny angovo azo havaozina',
        bio: 'Solofo dia mitantana ireo tetikasa jiro masoandro lehibe sy toby famokarana herinaratra amin\'ny rano hampidirana jiro ho an\'ny rehetra.',
        avatarSeed: 'solofo_rabet',
        location: 'Antsirabe, MG',
        specialty: 'Fampitambarana herin\'aratra sy jiro',
        experience: '18 Taona',
        impactBadge: '295 MW tanjaka',
        motto: 'Ny herinaratra no rantsambatana mampihetsika ny toekarena; adidintsika ny mitazona izany ho madio.',
        fieldNotes: 'Amin\'ny alalan\'ny fampifandraisana ny panely solera sy ny toby famokarana amin\'ny rano mandeha, dia tazonina ho fisaka ny jiro nefa tsy mampiasa solika sy galy lafo vidy.'
      },
      {
        id: 'en-2',
        name: 'Faly Tsitohaina',
        role: 'Lehiben\'ny injeniera mpanorina jiro madinika',
        bio: 'Faly no mitantana ny fametrahana toby jiro masoandro kely mitsinjara jiro amin\'ireo tanàna ambanivohitra lavitra ny tanàn-dehibe.',
        avatarSeed: 'faly_tsito',
        location: 'Sambava, MG',
        specialty: 'Bateria sy fitsitsiana jiro masoandro',
        experience: '11 Taona',
        impactBadge: 'Grid kely 120',
        motto: 'Ny fahazoana jiro amin\'ny ambanivohitra dia manome hery ny asa fivelomana mivantana.',
        fieldNotes: 'Nataonay ao anaty vata vy mafy tsara tantanana ny bateria sy ny milina rehetra, ka azon\'ny mponina tantanana amin\'ny alalan\'ny finday sy "mobile money".'
      },
      {
        id: 'en-3',
        name: 'Mamy Fenosoa',
        role: 'Mpandrefy ny rian-drano',
        bio: 'Mamy no mikaroka ny lalan\'ny rano handrafetana milina turbine tsy miteraka tondra-drano amin\'ny fambolen\'ny mpamboly.',
        avatarSeed: 'mamy_feno',
        location: 'Fianarantsoa, MG',
        specialty: 'Fitsirihana sy fandrefesana rian-drano',
        experience: '8 Taona',
        impactBadge: '99.9% SLA rano',
        motto: 'Avelao ny rian-dranontsika hanazava ny hoavy maharitra.',
        fieldNotes: 'Noforoninay ny fitaovana mamantatra ny haavon\'ny rano amin\'ny hain-tany sy ny fahavaratra, miaro ny tanàna nefa mamokatra jiro tsy tapaka.'
      }
    ]
  },
  logistics: {
    EN: [
      {
        id: 'log-1',
        name: 'Pierre-Olivier Dupont',
        role: 'Director of Bilateral Trade Corridors',
        bio: 'Pierre-Olivier manages shipping agencies, container lines, and asset positioning to create highly fluid bilateral trade lanes.',
        avatarSeed: 'pierre_dupont',
        location: 'Paris, France',
        specialty: 'Cross-Border Asset Logistics',
        experience: '16 Years',
        impactBadge: '4 Corridors',
        motto: 'Perfect logistic flow requires absolute coordination of legal and maritime assets.',
        fieldNotes: 'By synchronizing customs pre-declarations with green ground fleet dispatch metrics, we lowered import dispatch dwell time from days to mere hours.'
      },
      {
        id: 'log-2',
        name: 'Jean-Claude Rabe',
        role: 'National Dispatch Director',
        bio: 'Jean-Claude operates our nationwide logistics networks, handling cold chain transit terminals and green truck arrays with high safety SLA margins.',
        avatarSeed: 'jean_claude_rabe',
        location: 'Toamasina, MG',
        specialty: 'Fleet Management Telemetry',
        experience: '13+ Years',
        impactBadge: '3.4M Tons Routed',
        motto: 'The lifeline of a nation is written in its logistics reliability.',
        fieldNotes: 'We introduced low-emission biodiesel transport trucks across major national routes and centralized temperature tracking to ensure fragile product freshness.'
      },
      {
        id: 'log-3',
        name: 'Fanja Raharolahy',
        role: 'Maritime Compliance Auditor',
        bio: 'Fanja audits port operations, custom clearances, and vessel declarations to secure zero-spill safety compliance.',
        avatarSeed: 'fanja_raha',
        location: 'Toamasina Port, MG',
        specialty: 'Oceanic Transport & Custom Regulations',
        experience: '11 Years',
        impactBadge: '840 Port Dispatches',
        motto: 'Rigid port environmental checklists guard our precious island marine ecosystems.',
        fieldNotes: 'We mandated strict hull biohazard testing on deep sea container ships, keeping external invasive organisms far away from local reef systems.'
      }
    ],
    FR: [
      {
        id: 'log-1',
        name: 'Pierre-Olivier Dupont',
        role: 'Directeur des Corridors Portuaires',
        bio: 'Pierre-Olivier coordonne le courtage maritime, l\'affrètement et le positionnement d\'actifs logistiques pour fluidifier les lignes d\'échange pour l\'Europe.',
        avatarSeed: 'pierre_dupont',
        location: 'Paris, France',
        specialty: 'Logistique Multimodale d\'Actifs',
        experience: '16 Ans',
        impactBadge: '4 Corridors',
        motto: 'La régularité du flux maritime exige une synergie totale entre capitainerie et douanes.',
        fieldNotes: 'En pré-déclarant par voie électronique les frets, nous ramenons la durée d\'immobilisation à quai des navires marchands sous la barre des 6 heures.'
      },
      {
        id: 'log-2',
        name: 'Jean-Claude Rabe',
        role: 'Directeur de la Logistique Nationale',
        bio: 'Jean-Claude dirige notre réseau logistique national, pilotant les entrepôts frigorifiques et les camions de fret de grande capacité.',
        avatarSeed: 'jean_claude_rabe',
        location: 'Toamasina, MG',
        specialty: 'Télémétrie Flotte & Chaîne du Froid',
        experience: '13+ Ans',
        impactBadge: '3,4M Tons Routés',
        motto: 'La robustesse de la chaîne logistique est garante de l\'activité économique nationale.',
        fieldNotes: 'Nous formons nos chauffeurs à la conduite douce et surveillons les alertes de température par puces cellulaires scellées.'
      },
      {
        id: 'log-3',
        name: 'Fanja Raharolahy',
        role: 'Conseillère en Conformité Maritime',
        bio: 'Fanja s\'assure du respect des formalités portuaires et douanières, prévenant les risques d\'amende et garantissant des escales sûres.',
        avatarSeed: 'fanja_raha',
        location: 'Port de Toamasina, MG',
        specialty: 'Règlementation Portuaire & Fluviale',
        experience: '11 Ans',
        impactBadge: '840 Escales Claires',
        motto: 'Des contrôles douaniers efficaces préservent la souveraineté économique globale.',
        fieldNotes: 'Nos protocoles de vérification à quai neutralisent l\'entrée éventuelle de ravageurs agricoles, protégeant nos écosystèmes fragiles.'
      }
    ],
    MG: [
      {
        id: 'log-1',
        name: 'Pierre-Olivier Dupont',
        role: 'Tale miandraikitra ny lalan-tsena',
        bio: 'Pierre-Olivier dia mitantana ireo masoivoho mpanampy amin\'ny fanafarana entana sy fandrindrana ny lalan-tsena iraisam-pirenena.',
        avatarSeed: 'pierre_dupont',
        location: 'Paris, France',
        specialty: 'Fitantanana entana manerana ny sisin-tany',
        experience: '16 Taona',
        impactBadge: 'Lalana 4',
        motto: 'Ny fampandehanana ny fitaterana dia mila fandaminana tsara ny antontan-taratasy rehetra.',
        fieldNotes: 'Tamin\'ny fampiasana drafi-pandraofana nomerika haingana, nohafohezina ho ora vitsy monja ny fitazonana entana any amin-ladoany fa tsy andro maromaro.'
      },
      {
        id: 'log-2',
        name: 'Jean-Claude Rabe',
        role: 'Tale miandraikitra ny fitaterana',
        bio: 'Jean-Claude no mitantana ny tambajotra fitaterana entana manerana ny nosy, mampiasa fiara tsy manimba tontolo sy mangatsiaka ho an\'ny entana saro-pady.',
        avatarSeed: 'jean_claude_rabe',
        location: 'Toamasina, MG',
        specialty: 'Fezotran\'ny fiara sy fitsitsiana solika',
        experience: '13 Taona mahery',
        impactBadge: '3.4M Taonina voatondro',
        motto: 'Ny hery mihetsika amin\'ny fitaterana no manome aina ny toekarem-pirenena.',
        fieldNotes: 'Nampiditra fiara mampiasa solika natoraly mampihena ny fofon-jiro izahay mba hiarovana ny mponina manamorona ny lalam-pirenena.'
      },
      {
        id: 'log-3',
        name: 'Fanja Raharolahy',
        role: 'Mpandrindra ny fiarovana ny seranantsambo',
        bio: 'Fanja no mpanamarina ny sanda sy ny fiarovana any amin\'ny seranantsambo mba hisorohana ny loza sy ny fahalotoana avy amin\'ny sambo lehibe.',
        avatarSeed: 'fanja_raha',
        location: 'Toamasina, MG',
        specialty: 'Lalàna sy fiarovana an-dranomasina',
        experience: '11 Taona',
        impactBadge: 'Sambo 840 voadio',
        motto: 'Ny fanaraha-maso hentitra any amin\'ny ladoany no miantoka ny fiarovana ny morontsiraka sarobidy.',
        fieldNotes: 'Manamarina ny fahadiovan\'ny sambo lehibe rehetra izahay alohan\'ny hidirany, mba tsy hisy biby na otrikaretina vahiny mpanimba ny haran-dranomasina.'
      }
    ]
  },
  services: {
    EN: [
      {
        id: 'serv-1',
        name: 'Dr. Liliane Raveloson',
        role: 'Director of Occupational Safety',
        bio: 'Liliane leads compliance checklists, site welfare campaigns, and preventive health screenings for thousands of operational personnel.',
        avatarSeed: 'liliane_rave',
        location: 'Antananarivo, MG',
        specialty: 'Operational Site Health & Hygiene',
        experience: '15+ Years',
        impactBadge: 'Zero Incident SLA',
        motto: 'Operational excellence starts with the structural welfare of our workforce.',
        fieldNotes: 'By maintaining custom on-site medical checkup huts across industrial zones, we guaranteed early diagnosis of worker fatigue, securing a perfect wellness rating.'
      },
      {
        id: 'serv-2',
        name: 'Tiana Rakotoarisoa',
        role: 'Lead Reclamation Architect',
        bio: 'Tiana translates environmental guidelines into physical action, managing high-quality land rehabilitation and botanical replanting projects after activity periods terminate.',
        avatarSeed: 'tiana_rako',
        location: 'Moramanga, MG',
        specialty: 'Soil Remediation & Endemic Botany',
        experience: '12 Years',
        impactBadge: '100% Soil Reclaimed',
        motto: 'We hold a sacred responsibility to restore every block of land to its original ecological state.',
        fieldNotes: 'By introducing hyper-accumulator local grasses into past mineral sites, we pulled heavy minerals out of top soils naturally, preparing the site for rapid forest recovery replanting.'
      },
      {
        id: 'serv-3',
        name: 'Lalao Randrianasolo',
        role: 'Wellness Programs Coordinator',
        bio: 'Lalao leads mindfulness retreats, stress management workshops, and mental health programs for corporate and local communities.',
        avatarSeed: 'lalao_randria',
        location: 'Nosy Be, MG',
        specialty: 'Holistic Stress Reduction',
        experience: '10 Years',
        impactBadge: '14,000+ Members',
        motto: 'A quiet, stabilized mind produces optimal, resilient daily craft.',
        fieldNotes: 'We established outdoor yoga pavilions and digital guided meditation routines, helping under-resourced families mitigate chronic work stresses.'
      }
    ],
    FR: [
      {
        id: 'serv-1',
        name: 'Dr. Liliane Raveloson',
        role: 'Directrice de la Sécurité Professionnelle',
        bio: 'Liliane administre les audits de risques professionnels et met sur pied des visites médicales mobiles pour préserver l\'intégrité de nos équipes de terrain.',
        avatarSeed: 'liliane_rave',
        location: 'Antananarivo, MG',
        specialty: 'Médecine du Travail & Ergonomie',
        experience: '15+ Ans',
        impactBadge: 'SLA Zéro Accident',
        motto: 'L\'excellence technique débute par le bien-être physique et psychologique de nos collaborateurs.',
        fieldNotes: 'Grâce à des séances de sensibilisation et des équipements de protection individuelle de pointe, nous maintenons un taux d\'interruption technique de zéro.'
      },
      {
        id: 'serv-2',
        name: 'Tiana Rakotoarisoa',
        role: 'Architecte en Restauration des Sols',
        bio: 'Tiana planifie la revégétalisation post-exploitation, veillant au reboisement systématique des concessions temporaires avec des botanistes agréés.',
        avatarSeed: 'tiana_rako',
        location: 'Moramanga, MG',
        specialty: 'Phyto-Remédiation & Sols Dégradés',
        experience: '12 Ans',
        impactBadge: 'Sols Régénérés 100%',
        motto: 'Notre engagement sacré est de laisser le sol plus fertile que nous l\'avons trouvé.',
        fieldNotes: 'En introduisant des plantes indigènes qui absorbent les impuretés de surface, nous préparons la reconstruction naturelle de la faune sauvage locale.'
      },
      {
        id: 'serv-3',
        name: 'Lalao Randrianasolo',
        role: 'Coordonnatrice Santé & Mindfulness',
        bio: 'Lalao organise des ateliers de réduction du stress et promeut la santé mentale des collaborateurs en s\'appuyant sur des méditations traditionnelles.',
        avatarSeed: 'lalao_randria',
        location: 'Nosy Be, MG',
        specialty: 'Techniques de Détente & Respiration',
        experience: '10 Ans',
        impactBadge: '14 000+ Membres',
        motto: 'Un esprit calme est le gage d\'un travail précis et d\'une vie harmonieuse.',
        fieldNotes: 'Les retraites en plein air et les programmes d\'accompagnement moral renforcent la convivialité opérationnelle entre départements.'
      }
    ],
    MG: [
      {
        id: 'serv-1',
        name: 'Dr. Liliane Raveloson',
        role: 'Tale miandraikitra ny fahasalaman\'ny mpiasa',
        bio: 'Liliane dia manara-maso fa mendrika sy milamina ny fepetra iasan\'ireo mpiasa rehetra, hisorohana ny aretina sy ny loza am-perinasa.',
        avatarSeed: 'liliane_rave',
        location: 'Antananarivo, MG',
        specialty: 'Fampianarana ny fiarovana sy fahasalamana',
        experience: '15 Taona mahery',
        impactBadge: 'Fiarovana 100%',
        motto: 'Ny fahombiazana dia manomboka amin\'ny fahasalaman\'ireo mpiasa loharanon-karena.',
        fieldNotes: 'Nametraka birao fitsaboana mavitrika any amin\'ny tobin\'ny asa izahay, mba hahitana aretina aloha indrindra ho an\'ny mpiasa ary nomena fitaovana sahaza.'
      },
      {
        id: 'serv-2',
        name: 'Tiana Rakotoarisoa',
        role: 'Injenieran\'ny fanarenana ny tany soa',
        bio: 'Tiana dia mikolo ny fanarenana sy fambolen-kazo indray amin\'ireo toerana niasana, mba hiverina amin\'ny fahatsarany voalohany ny tany.',
        avatarSeed: 'tiana_rako',
        location: 'Moramanga, MG',
        specialty: 'Sivana tany amin\'ny alalan\'ny ahidrano',
        experience: '12 Taona',
        impactBadge: 'Tany kanto 100%',
        motto: 'Manana adidy masina isika hamerina ny tany rehetra amin\'ny toetrany voajanahary fahiny.',
        fieldNotes: 'Tamin\'ny fambolena bozaka manokana misintona ny loto amin\'ny tany, dia nadio tsara ny tany ka vonona amin\'ny fahazoana ala maitso indray.'
      },
      {
        id: 'serv-3',
        name: 'Lalao Randrianasolo',
        role: 'Mpandrindra ny fahasalamana holistika',
        bio: 'Lalao no mitarika ireo fivoriana fikololoana saina, fitsaboana ara-panahy, ary hetsika hitsinjovana ny rehetra amin\'ny alalan\'ny meditation sy yoga.',
        avatarSeed: 'lalao_randria',
        location: 'Nosy Be, MG',
        specialty: 'Fampihenana ny roritsaina amin\'ny fofona',
        experience: '10 Taona',
        impactBadge: 'Olona 14,000+',
        motto: 'Ny saina miratranana no fototry ny asa milamina sy tsara kalitao.',
        fieldNotes: 'Nanangana toeram-pilasiana mitsitsy saina izahay, manampy ireo olona sahirana eo an-toerana hampihenana ny roritsaina sy ny tebiteby isan\'andro.'
      }
    ]
  }
};

export function CompanyTeam({ companyId, language, colors }: CompanyTeamProps) {
  const [activeNotesMember, setActiveNotesMember] = useState<TeamMember | null>(null);

  const t = {
    EN: {
      badgengo: 'Certified Humanitarian Fieldforce',
      badgetsingy: 'Certified Conservation Directors',
      badgewater: 'Infrastructure & Resource Leaders',
      badgerestate: 'Smart Structural Specialists',
      badgeothers: 'Sovereign Operating Specialists',
      title: 'Our Key Directors & Experts',
      sub: 'Meet the highly qualified practitioners executing our ground campaigns, providing sovereign accountability directly within rural and metropolitan areas.',
      notesBtn: 'Examine Field Notes',
      contactSecure: 'Audit Directives Verified',
      experience: 'Operational Term:',
      specialty: 'Domain Specialty:',
      notesTitle: 'Ground Operations Briefing',
      closeNotes: 'Return to Overviews'
    },
    FR: {
      badgengo: 'Praticiens de Terrain Agréés',
      badgetsingy: 'Conservateurs de Terrain Agréés',
      badgewater: 'Directeurs d\'Infrastructures & Ressources',
      badgerestate: 'Ingénieurs & Aménageurs Durables',
      badgeothers: 'Contrôleurs Opérationnels d\'Élite',
      title: 'Directeurs Clés & Experts',
      sub: 'Rencontrez les experts qualifiés qui pilotent nos interventions directes et garantissent la traçabilité de notre impact sociétal.',
      notesBtn: 'Consulter les notes de brousse',
      contactSecure: 'Critères d\'Audit Vérifiés',
      experience: 'Mandat Opérationnel :',
      specialty: 'Spécialité Technique :',
      notesTitle: 'Note d\'Opérationnel de Terrain',
      closeNotes: 'Fermer le Carnet de Bord'
    },
    MG: {
      badgengo: 'Mpiantoka ny Asa Sosialy ifotony',
      badgetsingy: 'Mpiaro ny ala sy ny tontolo voajanahary',
      badgewater: 'Mpitantana ny fotodrafitrasa sy rano',
      badgerestate: 'Mpanorina sy mpandamina tanàna',
      badgeothers: 'Tale mpandrindra matihanina',
      title: 'Ireo mpandrindra sy mpitsabo ifotony',
      sub: 'Ireo olona matihanina miasa isan\'andro, miantoka ny fahamarinan\'ny vokatra sy ny fandaharan\'asa amin\'ny faritra rehetra.',
      notesBtn: 'Vakio ny tatitry ny asa',
      contactSecure: 'Fifandraisana voamarina',
      experience: 'Fe-potoana niasana:',
      specialty: 'Taranja imasoana:',
      notesTitle: 'Tatitra momba ny asa tany an-toerana',
      closeNotes: 'Hikatona ny tatitra'
    }
  }[language];

  // Resolve team badge based on sector
  const getBadgeTranslation = (): string => {
    if (companyId === 'ngo') return t.badgengo;
    if (companyId === 'tsingy' || companyId === 'woods') return t.badgetsingy;
    if (companyId === 'water' || companyId === 'hybrid' || companyId === 'hydro') return t.badgewater;
    if (companyId === 'realestate' || companyId === 'wtc' || companyId === 'mall') return t.badgerestate;
    return t.badgeothers;
  };

  // Retrieve customized team based on companyId, fallback to default if undefined
  const getSectorTeam = (): TeamMember[] => {
    let key = 'services';
    if (companyId === 'ngo') key = 'ngo';
    else if (companyId === 'tsingy') key = 'tsingy';
    else if (companyId === 'water') key = 'water';
    else if (companyId === 'woods') key = 'woods';
    else if (companyId === 'realestate' || companyId === 'wtc' || companyId === 'mall') key = 'realestate';
    else if (companyId === 'hybrid' || companyId === 'hydro') key = 'energy';
    else if (companyId === 'agulhas' || companyId === 'dis' || companyId === 'france' || companyId === 'management') key = 'logistics';
    
    const db = TEAM_DATABASE[key] || TEAM_DATABASE.services;
    return db[language] || db.EN;
  };

  const members = getSectorTeam();
  const activeBadgeText = getBadgeTranslation();

  return (
    <div className="pt-12 pb-4 space-y-8" id="company-team-section-root">
      {/* Section Divider with Glowing Accent */}
      <div className="flex items-center space-x-4">
        <span className="h-[1px] flex-grow bg-slate-900" />
        <div className={`flex items-center space-x-2 bg-slate-950/80 border ${colors.borderMuted} rounded-full px-4 py-1.5 backdrop-blur shadow-md`}>
          <Users size={12} className={`${colors.iconColor}`} />
          <span className={`font-mono text-[10px] ${colors.textAccent} tracking-wider font-extrabold uppercase`}>
            {activeBadgeText}
          </span>
        </div>
        <span className="h-[1px] flex-grow bg-slate-900" />
      </div>

      {/* Narrative Section Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          {t.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light font-sans">
          {t.sub}
        </p>
      </div>

      {/* Grid of Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {members.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-slate-950/45 border border-slate-900 hover:border-slate-850 rounded-3xl p-6 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
            id={`company-team-card-${member.id}`}
          >
            {/* Soft subtle glow matching colors behind the avatar */}
            <div className={`absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl pointer-events-none transition-all group-hover:scale-110 ${colors.glow}`} />

            <div className="space-y-5">
              {/* Card top row header: Avatar with specialty badge */}
              <div className="flex items-start justify-between">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center p-0.5">
                    <img 
                      src={`https://api.dicebear.com/7.x/bottts/svg?seed=${member.avatarSeed}&backgroundColor=0f172a`}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-md bg-slate-950 border border-slate-800/80 flex items-center justify-center text-emerald-450 text-[10px]" title="Field Certified Practitioner">
                    <CheckCircle2 size={10} />
                  </span>
                </div>

                {/* Micro operational badge */}
                <div className="bg-slate-900/60 border border-slate-900 rounded px-2.5 py-1 text-[8px] font-mono font-extrabold uppercase tracking-widest text-emerald-400">
                  {member.impactBadge}
                </div>
              </div>

              {/* Identity & location */}
              <div className="space-y-1">
                <h3 className="text-base font-black text-white group-hover:text-amber-450 transition-colors">
                  {member.name}
                </h3>
                <div className="flex items-center space-x-1.5 text-[10px] font-mono text-slate-500">
                  <Briefcase size={10} className={colors.iconColor} />
                  <span className="font-extrabold text-slate-400 uppercase tracking-wide">{member.role}</span>
                </div>
                <div className="flex items-center space-x-1 text-[9px] font-mono text-slate-450 pt-0.5">
                  <MapPin size={9} />
                  <span>{member.location}</span>
                </div>
              </div>

              {/* Bio snippet */}
              <p className="text-xs text-slate-400 font-light leading-relaxed min-h-[3.5rem] font-sans">
                {member.bio}
              </p>

              {/* Specs parameters table */}
              <div className="bg-slate-900/10 border border-slate-900 rounded-2xl p-4 space-y-2 text-[10px] font-mono">
                <div className="flex justify-between items-center text-slate-500">
                  <span className="font-bold">{t.specialty}</span>
                  <span className="font-sans text-slate-350 text-[11px] line-clamp-1 max-w-[150px]">{member.specialty}</span>
                </div>
                <div className="flex justify-between items-center text-slate-500 border-t border-slate-900/40 pt-2">
                  <span className="font-bold">{t.experience}</span>
                  <span className="font-black text-slate-330">{member.experience}</span>
                </div>
              </div>
            </div>

            {/* Click to inspect notes button */}
            <div className="pt-5 border-t border-slate-900/40 mt-5">
              <button
                onClick={() => setActiveNotesMember(member)}
                className="w-full bg-slate-900/40 hover:bg-slate-900 hover:border-slate-800 border border-slate-950 text-slate-400 hover:text-white transition-all duration-200 py-3 rounded-xl font-mono text-[9px] font-extrabold uppercase tracking-widest flex items-center justify-center space-x-1.5 cursor-pointer select-none"
              >
                <MessageSquare size={11} className={`${colors.iconColor}`} />
                <span>{t.notesBtn}</span>
                <ArrowUpRight size={10} className="opacity-60" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Ground notes detailed Overlay Drawer for pristine interactive high-craft feel */}
      <AnimatePresence>
        {activeNotesMember && (
          <div 
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
            id="company-team-notes-backdrop"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="bg-slate-950 border border-slate-800 rounded-[2rem] p-6 sm:p-8 max-w-xl w-full flex flex-col shadow-2xl relative space-y-6"
              id="company-team-notes-card"
            >
              {/* Header row with Avatar & Name */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden shrink-0">
                  <img 
                    src={`https://api.dicebear.com/7.x/bottts/svg?seed=${activeNotesMember.avatarSeed}&backgroundColor=0f172a`}
                    alt={activeNotesMember.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-black text-white font-sans">{activeNotesMember.name}</h4>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-teal-400">{activeNotesMember.role}</p>
                </div>
              </div>

              {/* Operational motto banner */}
              <div className="bg-slate-900/30 border-l-2 border-emerald-500 rounded-r-xl p-4 text-[11px] text-slate-300 italic font-medium leading-relaxed font-sans">
                "{activeNotesMember.motto}"
              </div>

              {/* Briefing notes core layout */}
              <div className="space-y-3.5">
                <span className="inline-block bg-slate-900 border border-slate-800 px-3 py-1 rounded-md text-[9px] font-mono text-slate-400 uppercase font-black tracking-widest">
                  {t.notesTitle}
                </span>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light font-sans">
                  {activeNotesMember.fieldNotes}
                </p>
              </div>

              {/* Verification lock footer */}
              <div className="pt-4 border-t border-slate-900/50 flex justify-between items-center text-[9px] font-mono text-slate-500">
                <div className="flex items-center space-x-1.5 text-emerald-400 font-bold">
                  <ShieldCheck size={12} />
                  <span>{t.contactSecure}</span>
                </div>
                <span className="text-slate-600">REF_FIELD_REP_{activeNotesMember.id.toUpperCase()}</span>
              </div>

              {/* Close Button top-right */}
              <button
                onClick={() => setActiveNotesMember(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-900 hover:bg-slate-850 border border-slate-800/80 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                title={t.closeNotes}
              >
                <X size={14} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
