import { 
  Sector, Project, Service, Leader, JobPosition, 
  TimelineEvent, Testimonial, NewsItem, BlogItem, CorporateEvent 
} from '../types';

// French and Malagasy Overrides for SECTORS
const sectorTranslations: Record<'FR' | 'MG', Record<string, Partial<Sector>>> = {
  FR: {
    ngo: {
      name: 'ViMa ONG',
      description: 'Un moteur philanthropique et de développement social gérant des programmes humanitaires, des bourses d’études, l’accès aux soins de santé et des initiatives régionales d’autonomisation communautaire à Madagascar.',
      services: ['Financement et fournitures d’écoles publiques', 'Centres cliniques mobiles de proximité', 'Ateliers d’autonomisation civique']
    },
    tsingy: {
      name: 'ViMa Tsingy Bay',
      description: 'Un projet d’immobilier durable et d’éco-hospitalité haut de gamme protégeant et célébrant les écosystèmes côtiers de Madagascar grâce à une conception à zéro carbone.',
      services: ['Éco-Resorts de luxe biologiques', 'Développement résidentiel à faible impact', 'Conservation de la biodiversité et des espèces']
    },
    water: {
      name: 'ViMa Water Bank',
      description: 'Assurer un accès durable aux réserves d’eau potable par une filtration avancée à grande échelle, des stations de traitement conteneurisées et des réseaux de distribution municipaux.',
      services: ['Osmose inverse à haut rendement', 'Puits d’eau potable souverains', 'Réseaux de distribution locale abordables']
    },
    france: {
      name: 'ViMa France',
      description: 'La liaison internationale et la passerelle européenne du groupe ViMa, gérant les relations commerciales à l’étranger, la structuration d’actifs d’entreprise et les alliances public-privé transcontinentales.',
      services: ['Représentation commerciale européenne', 'Alignement des investissements souverains', 'Conseil en gestion d’actifs mondiaux']
    },
    wtc: {
      name: 'ViMa World Trade Center Antananarivo',
      description: 'La vitrine d’affaires, plateforme de mise en relation commerciale et hub agréé World Trade Center de Madagascar, hébergeant des chambres de commerce et des salons professionnels de premier plan.',
      services: ['Location de bureaux premium classe A', 'Centres d’affaires exécutifs', 'Facilitation du commerce international']
    },
    management: {
      name: 'ViMa Management',
      description: 'Fournir des services administratifs d’élite, des cadres de gouvernance exécutive, des audits de conformité juridique et des conseils stratégiques pour les portefeuilles transfrontaliers.',
      services: ['Structuration d’entreprise stratégique', 'Audit de conformité souveraine', 'Placement de direction intérimaire']
    },
    agulhas: {
      name: 'ViMa Agulhas',
      description: 'Une agence maritime experte qui gère le transport maritime en eau profonde, le dédouanement logistique, l’affrètement de navires et les terminaux de fret réfrigéré.',
      services: ['Intégration du fret maritime', 'Liaisons portuaires souveraines', 'Solutions d’entrepôts réfrigérés']
    },
    realestate: {
      name: 'ViMa Real Estate',
      description: 'Premier promoteur immobilier urbain de Madagascar, construisant des aménagements commerciaux résilients face au climat, des parcs technologiques et des appartements familiaux connectés.',
      services: ['Aménagement de Smart-Cities', 'Immeubles commerciaux de classe A', 'Complexes résidentiels net-zéro']
    },
    mall: {
      name: 'ViMa Majungasaurus Mall',
      description: 'La destination commerciale et de loisirs phare de Madagascar, mêlant mode haut de gamme, divertissements et espaces culturels dans un complexe fonctionnant à l’énergie solaire.',
      services: ['Gestion immobilière pour enseignes phares', 'Centres de divertissement éco-conçus', 'Programmation de vitrines culturelles']
    },
    serv: {
      name: "ViMa Serv'",
      description: 'Gestion intégrée des installations, opérations de haute sécurité, nettoyage industriel avancé, solutions de restauration d’entreprise et systèmes de support mécanique.',
      services: ['Maintenance des installations d’entreprise', 'Programmes de restauration institutionnelle', 'Audits préventifs électromécaniques']
    },
    dis: {
      name: 'ViMa Dis',
      description: 'Le réseau de distribution de produits de grande consommation à l’échelle nationale de Madagascar, opérant des chaînes de froid ultra-efficaces et des terminaux d’inventaire régionaux.',
      services: ['Distribution nationale de produits de grande consommation', 'Gestion avancée des entrepôts', 'Micro-logistique du dernier kilomètre']
    },
    woods: {
      name: 'ViMa Woods',
      description: 'Favoriser la durabilité écologique grâce à des pépinières forestières certifiées FSC, des cultures de bois d’œuvre responsables et une production locale de bois de sciage.',
      services: ['Sylviculture et plantation FSC', 'Menuiserie architecturale raffinée', 'Audits de compensation carbone']
    },
    hybrid: {
      name: 'ViMa Hybrid-Energy',
      description: 'Développer des solutions d’énergie propre de nouvelle génération combinant technologie solaire photovoltaïque, batteries de secours automatisées et micro-réseaux ruraux.',
      services: ['Installations de micro-réseaux solaires', 'Stockage d’énergie à haut rendement', 'Compteurs intelligents hors réseau']
    },
    hydro: {
      name: 'ViMa Hydro',
      description: 'Ingénierie de centrales hydroélectriques au fil de l’eau pour alimenter les réseaux régionaux en électricité renouvelable sans perturber les écosystèmes.',
      services: ['Étude d’impact hydrocinétique', 'Ouvrages de turbines et de déversoirs', 'Lignes haute tension pour connexion réseau']
    },
    yoga: {
      name: 'ViMa Z-Yoga',
      description: 'Promouvoir le bien-être communautaire, la pleine conscience, les retraites de yoga et les centres de fitness écologiques pour préserver la santé physique et holistique.',
      services: ['Bien-être corps-esprit en entreprise', 'Masterclasses de yoga immersives', 'Intégration d’éco-wellness en resort']
    },
    construction: {
      name: 'ViMa Construction',
      description: 'Construction d’infrastructures civiles d’envergure souveraine, aménagement de réseaux routiers résilients, ponts et bâtiments publics utilisant des produits de ciment écologique.',
      services: ['Infrastructures routières publiques', 'Ouvrages civils sur mesure', 'Structures préfabriquées écologiques']
    },
    mining: {
      name: 'ViMa Mining',
      description: 'Extraction minière hautement conforme, réglementée par les critères ESG, concentrée sur le graphite propre et les sables minéralisés sous de stricts programmes de restauration des sols.',
      services: ['Extraction d’éléments à faible poussière', 'Réhabilitation écologique sur mesure', 'Relations commerciales exportatrices responsables']
    },
    oilgas: {
      name: 'ViMa Oil & Gas',
      description: 'Sécurisation des stratégies nationales de carburant, réseaux de stockage de liquides, réserves d’énergie d’urgence et conduites de gaz pour maintenir la souveraineté économique.',
      services: ['Réserves d’hydrocarbures stratégiques', 'Alimentation sécurisée de réseaux GNL', 'Contrôles environnementaux anti-fuite rigides']
    },
    maromokotro: {
      name: 'ViMa Maromokotro',
      description: 'Développement de réseaux d’éco-tourisme, sentiers de recherche scientifique en haute altitude, théiers bio de montagne et projets de préservation des forêts proches du plus haut sommet de Madagascar.',
      services: ['Recherche sur l’écologie de haute altitude', 'Éco-lodges de montagne neutres en carbone', 'Cultures biologiques des hautes terres']
    }
  },
  MG: {
    ngo: {
      name: 'ViMa NGO',
      description: 'Sehatra sosialy sy mpanohana ny vahoaka Malagasy amin’ny alalan’ny fanabeazana, fitsaboana, vatsim-pianarana ary fampandrosoana ny tantsaha manerana an’i Madagascar.',
      services: ['Famatsiana sekoly sy fitaovam-pianarana', 'Tobim-pitsaboana mandehandeha', 'Atrikasa fampiofanana ny olom-pirenena']
    },
    tsingy: {
      name: 'ViMa Tsingy Bay',
      description: 'Tetikasa fizahan-tany mitsinjo ny tontolo iainana sy trano fonenana avo lenta miaro ny biby sy ny zava-maniry amoron-tsiraka tsy mamoaka entona karbonina.',
      services: ['Resorta ekolojika sy biolojika avo lenta', 'Fanorenana trano fonenana mitsitsy tontolo iainana', 'Fiandrianana sy fiarovana ny biby sy zavamaniry sarobidy']
    },
    water: {
      name: 'ViMa Water Bank',
      description: 'Fanomezana rano fisotro madio ho an’ny vahoaka amin’ny alalan’ny fitaovana fanadiovan-drano vaventy sy tambajotra fitsinjarana manerantany.',
      services: ['Fitaovana fanadiovan-drano arifomba', 'Fantsakana rano fisotro madio', 'Tambajotra fitsinjarana rano mora vidy']
    },
    france: {
      name: 'ViMa France',
      description: 'Ny rantsana mampifandray ny Vondrona ViMa amin’ny tsena Eoropeana, mitantana ny varotra ivelany, fampiasam-bola, ary ny fiaraha-miasa iraisam-pirenena.',
      services: ['Solontena ara-barotra any Eoropa', 'Arifomba momba ny fampiasam-bola', 'Mpanolo-tsaina amin’ny fitantanana ny fananana']
    },
    wtc: {
      name: 'ViMa World Trade Center Antananarivo',
      description: 'Foiben’ny varotra iraisam-pirenena eto Madagascar, mampifandray ireo mpandraharaha sy mampiantrano fampirantiana ara-barotra goavana sy ny efitrano fandraharahana.',
      services: ['Hofana birao kilasy A', 'Foibe fandraharahana ho an’ny mpitantana', 'Fanamorana ny varotra iraisam-pirenena']
    },
    management: {
      name: 'ViMa Management',
      description: 'Mitantana ny fitantanan-draharaha, ny fifanarahana ara-dalàna, ny fitsipiky ny orinasa ary ny fanohanana stratejika ho an’ireo tetikasa marolafy.',
      services: ['Fandrindrana ny firafitry ny orinasa', 'Fanaraha-mase ny fitsipika', 'Fametrahana mpitantana vonjimaika']
    },
    agulhas: {
      name: 'ViMa Agulhas',
      description: 'Asa momba ny fitaterana an-dranomasina, famoahana entana amin’ny fadintseranana, fitantanana ny sambo ary tobim-pampidirana entana mangatsiaka.',
      services: ['Fandrindrana ny fitaterana an-dranomasina', 'Fifandraisana amin’ny seranan-tsambo', 'Tobim-pitehirizana entana mangatsiaka']
    },
    realestate: {
      name: 'ViMa Real Estate',
      description: 'Mpamolavola sy mpanorina trano fonenana maoderina, birao avo lenta ary tanàna vaovao mifanaraka amin’ny fiovana ara-toetrandro eto Madagasikara.',
      services: ['Famolavolana tanàna manan-tsaina (Smart-City)', 'Fanorenana birao sy tranom-barotra lehibe', 'Trano fonenana tsy manimba tontolo iainana']
    },
    mall: {
      name: 'ViMa Majungasaurus Mall',
      description: 'Toerana fizahan-tany sy fiantsenana lehibe indrindra, mampitambatra ny tsena maoderina, fialam-boly, ary kolontsaina mampiasa herinaratra azo avy amin’ny masoandro.',
      services: ['Fitantanana ny toeram-pivarotana lehibe', 'Toeram-pialam-boly mitsinjo ny tontolo iainana', 'Sehatra fampirantiana kolontsaina']
    },
    serv: {
      name: "ViMa Serv'",
      description: 'Fikojakojana ny fotodrafitrasa, fiarovana ny trano sy olona, fanadiovana indostrialy, sakafo ho an’ny orinasa, ary fanohanana ara-mekanika.',
      services: ['Fikojakojana trano sy birao', 'Fandaharan’asa fikarakarana sakafo', 'Fanaraha-maso ny fitaovana elektrônika']
    },
    dis: {
      name: 'ViMa Dis',
      description: 'Tambajotra fitsinjarana entana manerana ny nosy, mitantana ny fitaterana mangatsiaka sy ny fitahirizana entana amin’ny faritra maro.',
      services: ['Fitsinjarana entana fampiasa andavanandro', 'Mitantana ny trano fitehirizana entana', 'Fitaterana entana madinika amin’ny faritra sarotra']
    },
    woods: {
      name: 'ViMa Woods',
      description: 'Fambolena ala sy famokarana hazo nahazo fankatoavana FSC, miaro ny ala voajanahary ary mamatsy hazo tsara kalitao.',
      services: ['Fambolena ala sy fikojakojana FSC', 'Asa fandrafetana voadio tsara', 'Fanaraha-maso ny fitehirizana ny karbona']
    },
    hybrid: {
      name: 'ViMa Hybrid-Energy',
      description: 'Famokarana angovo azo havaozina mampiasa herinaratra avy amin’ny masoandro, batteries lehibe fitahirizana herinaratra ho an’ny ambanivohitra.',
      services: ['Fametrahana takelaka herin’ny masoandro', 'Fampiasana batteries lehibe fitahirizana herinaratra', 'Ireo metatra herinaratra manan-tsaina']
    },
    hydro: {
      name: 'ViMa Hydro',
      description: 'Fananganana toby famokarana herinaratra avy amin’ny rian-drano mba hamatsiana herinaratra ny faritra nefa tsy manimba ny renirano sy ny tontolo iainana.',
      services: ['Fandinihana ny herin’ny rano', 'Fananganana toby famokarana sy turbina', 'Fametrahana tariby mitondra herinaratra matanjaka']
    },
    yoga: {
      name: 'ViMa Z-Yoga',
      description: 'Fampiroboroboana ny fahasalamana, ny fisaintsainana, fitsaboana ara-kolontsaina ary toerana fanatanjahantena mitsinjo ny fahasalaman’ny vatana sy ny saina.',
      services: ['Fikarakarana fahasalamana any amin’ny orinasa', 'Atrikasa manokana momba ny Yoga', 'Wellness ekolojika ho an’ny mpitsidika']
    },
    construction: {
      name: 'ViMa Construction',
      description: 'Fanorenana fotodrafitrasa lehibe toy ny lalana, tetezana, ary trambon’ny fanjakana mampiasa akora sy simenitra manokana mitsitsy tontolo iainana.',
      services: ['Fanamboarana lalana ho an’ny daholobe', 'Asa fanorenana lehibe ho an’ny orinasa', 'Simenitra efa voaomana mitsinjo ny tontolo iainana']
    },
    mining: {
      name: 'ViMa Mining',
      description: 'Fitrandrahana harena an-kibon’ny tany manara-dalàna sy mitsinjo ny maha-olona sy ny tontolo iainana, indrindra ny fasika mavitrika sy ny graphite madio.',
      services: ['Fitrandrahana fasika mavitrika', 'Famerenana ny tany amin’ny laoniny ekolojika', 'Fandrafetana ny fanondranana entana ara-dalàna']
    },
    oilgas: {
      name: 'ViMa Oil And Gas',
      description: 'Fitehirizana solika sy gazy ho fiarovana ny herin’ny firenena amin’ny fitsinjovana ny herinaratra sy ny fampandehanana ny toekarena.',
      services: ['Tahirin-tsolika stratejika', 'Famatsiana gazy madio amin’ny fantsona', 'Fepetra hentitra hisorohana ny fivoahan’ny entona']
    },
    maromokotro: {
      name: 'ViMa Maromokotro',
      description: 'Fampivoarana ny fizahan-tany ekolojika amin’ny tendrombohitra avo indrindra eto Madagasikara, tetikasa fambolena dite ary fiarovana ny ala voajanahary.',
      services: ['Fikarohana momba ny tביo-tany avo loatra', 'Trano fonenana mitsitsy angovo any an-tendrombohitra', 'Fambolena dite biolojika amin’ny tany avo']
    }
  }
};

// French and Malagasy Overrides for PROJECTS
const projectTranslations: Record<'FR' | 'MG', Record<string, Partial<Project>>> = {
  FR: {
    'project-1': {
      title: 'Centre Médical Vision Madagascar Helix',
      sector: 'Réseau de Santé',
      description: 'Construction d’un centre de recherche neuro-moléculaire avancé, intégrant la chirurgie robotique assistée et des pôles de soins neutres en carbone.',
      metrics: { label: 'Vitesse Diagnostics Moléculaires', value: '+400% d’amélioration' },
      highlights: ['Capacité de 1 200 lits', 'Énergie 100% Solaire Autonome', 'Automatisation IA du flux de patients'],
      caseStudy: {
        challenge: 'Unifier les diagnostics génomiques complexes avec les parcours de soins sous contrainte de zéro carbone.',
        solution: 'Intégration de rideaux de vitrage solaire photovoltaïque et interconnexions de bases de données directes avec les laboratoires internationaux.',
        result: 'Diminution de 48% des charges d’exploitation tout en réduisant le délai diagnostique de plusieurs semaines à quelques heures.'
      }
    },
    'project-2': {
      title: 'Réseau Synapse Smart City Core',
      sector: 'Immobilier & Villes Intelligentes',
      description: 'Déploiement du cœur technologique d’une ville intelligente, gérant l’électricité, la densité du trafic et les eaux de refroidissement par apprentissage automatique.',
      metrics: { label: 'Émissions du Réseau Carbone', value: 'Réduction de 45%' },
      highlights: ['220 000 capteurs IoT connectés', '94% de recyclage des déchets municipaux', 'Collecteurs de pluie actifs'],
      caseStudy: {
        challenge: 'Densité énergétique urbaine élevée combinée à un fort besoin de climatisation sous climat tropical.',
        solution: 'Création d’un réseau souterrain de refroidissement urbain couplé à une alimentation solaire dynamique et batteries de stockage.',
        result: 'Dépassement net des seuils d’efficacité régionaux, obtenant l’accréditation Green Mark Platinum.'
      }
    },
    'project-3': {
      title: 'Parc Éolien Offshore Dawn',
      sector: 'Secteur de l’Énergie',
      description: 'Un méga-projet éolien offshore de 1,8 gigawatt au large de la mer du Nord, réacheminant la puissance électrique directement vers les foyers côtiers.',
      metrics: { label: 'Production d’Énergie Propre', value: '620 000 foyers alimentés' },
      highlights: ['120 turbines flottantes en haute mer', 'Fiabilité réseau de 99,98%', 'Drones sous-marins autonomes de patrouille'],
      caseStudy: {
        challenge: 'Turbulences marines et zones d’ancrage distantes nécessitant une maintenance technique continue.',
        solution: 'Déploiement de fondations flottantes à auto-ajustement dynamique synchronisées avec des capteurs physiques.',
        result: 'Production d’énergie électrique continue même lors de tempêtes majeures en haute mer.'
      }
    },
    'project-4': {
      title: 'Méga-Hub d’Exportation Automatisé Lumina',
      sector: 'Logistique & Exportation',
      description: 'Une plateforme logistique de premier plan utilisant des robots trieurs, camions électriques autonomes et fret maritime propre pour l’exportation de composants automobiles.',
      metrics: { label: 'Vitesse d’Expédition de Fret', value: '8 min par conteneur' },
      highlights: ['Tri robotisé à 98% autonome', 'Flotte de camions 100% électriques', 'Acheminement logistique décarboné'],
      caseStudy: {
        challenge: 'Pénuries de conducteurs qualifiés et hausse record des volumes mondiaux d’expédition.',
        solution: 'Déploiement d’un système d’exploitation logistique unifié guidant automatiquement les chariots au moyen de balises plafonnières.',
        result: 'Rendements de fret triplés sans surcharge de main d’œuvre additionnelle.'
      }
    }
  },
  MG: {
    'project-1': {
      title: 'Helix Tobim-pitsaboana Vision Madagascar',
      sector: 'Fahasalamana sy Fitsaboana',
      description: 'Fananganana laboratoara sy tobim-pitsaboana arifomba mampiasa milina robotika sy famokarana angovo madio handrefesana ny fahasalamana.',
      metrics: { label: 'Hafainganam-pitiliana momba ny sela', value: '+400% Haingana kokoa' },
      highlights: ['Mora mandray marary 1 200', '100% herinaratra avy amin’ny masoandro', 'Fandrindrana ny marary mampiasa AI'],
      caseStudy: {
        challenge: 'Fampifangaroana ny fitiliana genomic sarotra amin’ny fitsaboana nefa tsy mamokatra entona karbonina.',
        solution: 'Fametrahana fitaratra misy takelaka herin’ny masoandro sy fampifandraisana ny tahon-tsoratra amin’ny laboratoara manerantany.',
        result: 'Nalatsaka 48% ny fandaniana amin’ny fikojakojana ary lasa ora vitsy ny fitiliana fa tsy herinandro intsony.'
      }
    },
    'project-2': {
      title: 'Synapse Tambajotra Tanàna Manan-tsaina',
      sector: 'Trano, Tany & Tetikasa Tanàna',
      description: 'Fametrahana rafitra mifehy ny herinaratra, ny fifamoivoizana ary ny rano fampangatsiahana mampiasa milina manan-tsaina Machine Learning.',
      metrics: { label: 'Karbona voafehy amin’ny tambajotra', value: '45% Karbona latsaka' },
      highlights: ['Fitaovana IoT 220 000 mifandray', '94% fitsitsiana sy fanodinana ny fako tontolo iainana', 'Mpanangona rano-orana miasa tsara'],
      caseStudy: {
        challenge: 'Fandaniana angovo be loatra amin’ny fampangatsiahana ny tanàna any amin’ny faritra mafana.',
        solution: 'Famotsorana fantsona fampangatsiahana ambanin’ny tany miaraka amin’ny herin’ny masoandro sy batteries maharitra.',
        result: 'Nahazo ny mari-pankatoavana ambony Green Mark Platinum noho ny fahombiazana teo amin’ny fitsitsiana herinaratra.'
      }
    },
    'project-3': {
      title: 'Offshore Volana Éolien Mega Array',
      sector: 'Angovo Azo Havaozina',
      description: 'Tetikasa famokarana herinaratra 1.8 Gigawatt avy amin’ny rivotra eny an-dranomasina, mitondra herinaratra ho an’ny tanàna amoron-tsiraka.',
      metrics: { label: 'Herinaratra Madio azo amin’ny Rivotra', value: 'Tokantrano 620 000 mahazo tombony' },
      highlights: ['Éoliennes 120 mitsinkafona an-dranomasina', 'Fahamendrehan’ny tambajotra 99.98%', 'Drones mpanara-maso ambany rano'],
      caseStudy: {
        challenge: 'Ny onjan-dranomasina mahery vaika sy ny halaviran’ny toby izay mitaky fikojakojana sarotra.',
        solution: 'Famoronana rafitra mitsinkafona mahay mandanjalanja miaraka amin’ny fitaovana sensor handrefesana ny onja.',
        result: 'Tsy nitsahatra namokatra herinaratra na teo aza ny tafio-drivotra mahery vaika teny an-dranomasina.'
      }
    },
    'project-4': {
      title: 'Lumina Tobim-pitaterana Goavana Mandeha ho Azy',
      sector: 'Lojistika sy Varotra Ivelany',
      description: 'Toby lojistika mampiasa picker robotika, fiara mandeha ho azy, ary fitsinjarana entana mitsinjo ny tontolo iainana ho an’ny indostria mandeha herinaratra.',
      metrics: { label: 'Hafainganam-pandefasana kaontenera', value: '8 minitra isaky ny kaontenera' },
      highlights: ['98% robotics mandeha ho azy', 'Kamiao mandeha herinaratra feno', 'Tetikasa lojistika tsy mamoaka entona'],
      caseStudy: {
        challenge: 'Ny tsy fahampian’ny mpiasa sy ny fitomboan’ny entana haondrana maneran-tany.',
        solution: 'Fampiasana rafitra iraisana mitantana ny fitaovana sy fiara mandeha ho azy amin’ny alalan’ny sensor eo amin’ny valindrihana.',
        result: 'Nampitomboina avo telo heny ny vokatra vonona haondrana nefa tsy nampiana mpiasa.'
      }
    }
  }
};

// French and Malagasy Overrides for LEADERS
const leaderTranslations: Record<'FR' | 'MG', Record<string, Partial<Leader>>> = {
  FR: {
    'lead-1': {
      role: 'Directrice Générale (CEO)',
      bio: 'Avec plus de 24 ans de direction de programmes de capitaux de plusieurs milliards de dollars, Helena pilote la direction stratégique de Vision Madagascar, assurant la diversification du portefeuille et un alignement profond avec les investisseurs institutionnels.'
    },
    'lead-2': {
      role: 'Directeur de la Technologie (CTO)',
      bio: 'Visionnaire en informatique et en intelligence embarquée, le Dr Chen supervise les investissements technologiques, le déploiement de l’IA, la cybersécurité et les modèles de jumeaux numériques pour nos actifs physiques.'
    },
    'lead-3': {
      role: 'Associée Gérante, Partenariats Énergétiques',
      bio: 'Amara se spécialise dans l’investissement d’actifs mondiaux, les partenariats d’achat d’énergie renouvelable et les mégaprojets civils transfrontaliers, ayant précédemment dirigé des fonds d’infrastructure nationaux.'
    },
    'lead-4': {
      role: 'Directeur du Développement Durable (CSO)',
      bio: 'Jonathan coordonne nos engagements ESG multisectoriels, garantissant que nos opérations industrielles, de construction et de santé restent en parfaite conformité avec les accords mondiaux sur le climat.'
    }
  },
  MG: {
    'lead-1': {
      role: 'Tale Jeneraly sy Mpitantana (CEO)',
      bio: 'Manana traikefa maherin’ny 24 taona amin’ny fitantanana renivola goavana amin’ny tetikasa iraisam-pirenena, i Helena no mitarika ny sori-dalana stratejika ho an’ny Vision Madagascar.'
    },
    'lead-2': {
      role: 'Tale misahana ny Teknolojia (CTO)',
      bio: 'Manampahaizana manokana amin’ny siansa solosaina sy fitsikilovana ara-teknolojia, ny Dr. Chen no manara-maso ny fampiasana ny teknolojia maoderina sy ny rafitra AI rehetra.'
    },
    'lead-3': {
      role: 'Tale Mpiara-mitantana, Angovo sy Fotodrafitrasa',
      bio: 'Amara dia manam-pahaizana amin’ny fampiasam-bola, fiaraha-miasa momba ny angovo azo havaozina, sady efa nitantana ny kitapom-bolan’ny fotodrafitrasa nasionaly maro.'
    },
    'lead-4': {
      role: 'Tale misahana ny Fampandrosoana Maharitra (CSO)',
      bio: 'Jonathan no mandrindra ny fitsipika ESG amin’ireo sehatra rehetra, miantoka fa ny fanorenana sy ny fitsaboana ataontsika dia manaja tanteraka ny tontolo iainana.'
    }
  }
};

// French and Malagasy Overrides for CAREERS
const careerTranslations: Record<'FR' | 'MG', Record<string, Partial<JobPosition>>> = {
  FR: {
    'job-1': {
      title: 'Développeur Senior - IA & Analyses Profondes',
      sector: 'Division Technologique',
      description: 'Nous recherchons un développeur expérimenté pour concevoir des API clients à faible latence et optimiser des modèles génératifs locaux pour la logistique industrielle et l’automatisation des bâtiments intelligents.',
      requirements: [
        'Plus de 5 ans d’expérience en Python, PyTorch, Go ou systèmes TypeScript à grande échelle.',
        'Excellente maîtrise du clustering de vecteurs, des indexeurs d’embeddings et des microservices distribués.',
        'Une expérience préalable avec la télémétrie IoT ou la logistique de chaîne d’approvisionnement est un atout majeur.'
      ]
    },
    'job-2': {
      title: 'Ingénieur Structure Principal - Énergies Offshore',
      sector: 'Énergie & Construction',
      description: 'Diriger les simulations mécaniques et structurelles pour nos supports d’ancrage de turbines éoliennes flottantes de nouvelle génération en haute mer.',
      requirements: [
        'Diplôme de Master ou PhD en Architecture Navale, Génie Civil ou Mécanique Océanique.',
        'Compétences expertes en structures métalliques de fatigue et analyse de stress maritime.',
        'Leadership avéré dans la direction de validations structurelles à budget élevé pour les services publics.'
      ]
    },
    'job-3': {
      title: 'Directeur des Opérations de Soins de Santé',
      sector: 'Division Santé',
      description: 'Piloter les flux opérationnels, la planification du personnel et la conformité de l’intégration numérique pour nos centres hospitaliers de diagnostic en croissance constante.',
      requirements: [
        'MBA ou diplôme d’études supérieures en administration de la santé ou opérations cliniques.',
        'Plus de 10 ans de gestion de départements opérationnels dans des hôpitaux de recherche tertiaires de premier plan.',
        'Expertise démontrée dans le déploiement de dossiers cliniques informatisés et de systèmes de suivi des patients.'
      ]
    },
    'job-4': {
      title: 'Architecte Logistique Supply Chain Globale',
      sector: 'Division Logistique',
      description: 'Concevoir et optimiser les algorithmes de routage multimodal associant les flux de conteneurs des clients à des actifs maritimes et ferroviaires à zéro émission.',
      requirements: [
        'Diplôme universitaire en Recherche Opérationnelle, Mathématiques ou Génie Industriel.',
        'Excellente maîtrise des solveurs de programmation linéaire (Gurobi, CPLEX) et des systèmes de coordonnées SIG.',
        'Fortes compétences en communication pour négocier des accords de coordination de logistique pluriannuels.'
      ]
    }
  },
  MG: {
    'job-1': {
      title: 'Injeniera Mpamorona Rindrambaiko - AI & Data',
      sector: 'Sampana Teknolojia',
      description: 'Mitady injeniera efa za-draharaha hamolavola fitaovana API haingana dia haingana sy handrindra ny rafitra AI hampiasaina amin’ny lojistika indostrialy sy amin’ny trano manan-tsaina.',
      requirements: [
        'Traikefa maherin’ny 5 taona amin’ny Python, PyTorch, Go, na TypeScript rafitra vaventy.',
        'Fahalalana matanjaka amin’ny tontolon’ny vectors, embedding ary distributed microservices.',
        'Ny fahafantarana ny fitaovana IoT sy lojistika dia tombony lehibe.'
      ]
    },
    'job-2': {
      title: 'Injeniera Mpanorina - Angovo Rivotra Offshore',
      sector: 'Angovo & Fanorenana',
      description: 'Mitarika ny fandinihana sy teti-panorenana mekanika ho an’ireo éoliennes mitsinkafona eny an-dranomasina ho avy.',
      requirements: [
        'Master na PhD amin’ny tontolon’ny Naval Architecture, Civil Engineering na Ocean Mechanics.',
        'Fahaizana miavaka amin’ny fandalinana ny herin’ny vy sy ny onjan’ny ranomasina amin’ny fotodrafitrasa.',
        'Traikefa amin’ny fitarihana ekipa amin’ny tetikasa lehiben’ny fanjakana.'
      ]
    },
    'job-3': {
      title: 'Tale misahana ny Fitsaboana sy ny Hopitaly',
      sector: 'Sampana Fitsaboana',
      description: 'Mitarika ny fandehan’ny asa, ny fandaharam-potoan’ny mpitsabo, ary ny rafitra ara-taratasy nomerao ho an’ireo hopitaly fitsaboana vaovao mivoatra haingana.',
      requirements: [
        'MBA na fianarana ambony mikasika ny Fitsaboana sy ny Fitondrana Hopitaly.',
        'Traikefa 10 taona mahery tamin’ny fitantanana toby fitsaboana lehibe.',
        'Fahaizana amin’ny fampitaovana ny fikirakirana taratasy ara-pitsaboana amin’ny solosaina.'
      ]
    },
    'job-4': {
      title: 'Mpanorina ny Politika Lojistika sy Varotra',
      sector: 'Sampana Lojistika',
      description: 'Mamorona sy manatsara ny fandehan’ny entana sy ny fitsinjarana kaontenera mampiasa fitaterana tsy manimba tontolo iainana toy ny lalamby na sambo madio.',
      requirements: [
        'Fianarana mikasika ny Operations Research, Matematika na Industrial Engineering.',
        'Fahaizana mampiasa tsara ny solosaina sy ny rafitra fandrindrana ny fandehan’ny fiara (CPLEX, GIS).',
        'Fahaizana mifandray tsara amin’ny mpiara-miombon’antoka sy seranan-tsambo amin’ny fifanarahana maharitra.'
      ]
    }
  }
};

// French and Malagasy Overrides for TIMELINE
const timelineTranslations: Record<'FR' | 'MG', Record<string, Partial<TimelineEvent>>> = {
  FR: {
    '2012': {
      title: 'Fondation du Groupe',
      description: 'Établi en tant que syndicat consultatif fusionnant trois partenariats spécialisés dans les infrastructures et la technologie en Europe centrale.'
    },
    '2016': {
      title: 'Pivot d’Infrastructure Civile & Santé',
      description: 'Rapprochement de réseaux cliniques clés et d’entreprises de construction civile pour livrer des infrastructures municipales intégrées.'
    },
    '2019': {
      title: 'Cap de 1,2 GW d’Énergies Renouvelables',
      description: 'Lancement des premiers grands parcs éoliens offshore et de réseaux de transition en partenariat avec les services publics de la mer du Nord.'
    },
    '2022': {
      title: 'Intégration Technologique Cognitive',
      description: 'Propulsion massive de cadres d’apprentissage automatique dans nos portefeuilles industriels et immobiliers intelligents.'
    },
    '2025': {
      title: 'Pacte Consolidé de Développement Durable',
      description: 'Toutes les divisions opèrent sous des mandats de zéro déchet et de chaînes d’approvisionnement durables, garantissant un score ESG institutionnel d’élite.'
    }
  },
  MG: {
    '2012': {
      title: 'Fananganana ny Vondrona',
      description: 'Niorina ny fikambanana mpanolo-tsaina tamin’ny alalan’ny fampivatana ny tetikasa fotodrafitrasa telo lehibe tao Eoropa.'
    },
    '2016': {
      title: 'Miditra amin’ny Sehatra fitsaboana sy Fanorenana',
      description: 'Nividianana toby fitsaboana sy orinasa mpanorina lalana sy tetezana mba hamatsiana fotodrafitrasa feno ny tanàn-dehibe.'
    },
    '2019': {
      title: 'Tanjona 1.2 GW eo amin’ny Angovo',
      description: 'Nanomboka ny tetikasa famokarana herinaratra amin’ny alalan’ny rivotra an-dranomasina niarahana tamin’ny mpiara-miombon’antoka.'
    },
    '2022': {
      title: 'Mampiditra ny fitsikilovana ara-Teknolojia',
      description: 'Fampiasana ny teknolojia Machine Learning amin’ireo trano fonenana maoderina sy ny orinasa mamokatra fitaovana rehetra.'
    },
    '2025': {
      title: 'Lalan-tsaina mitazona ny Tontolo Iainana',
      description: 'Ny rantsana rehetra dia manatanteraka ny adidy tsy hisian’ny fako sy ny fampiasana entana tsy manimba ny tontolo iainana (ESG).'
    }
  }
};

// French and Malagasy Overrides for TESTIMONIALS
const testimonialTranslations: Record<'FR' | 'MG', Record<string, Partial<Testimonial>>> = {
  FR: {
    'test-1': {
      quote: "Vision Madagascar a entièrement reconstruit notre réseau d'approvisionnement régional en y injectant des robots de tri intelligents et une planification pour véhicules électriques. La transition a été rapide et les réductions de carbone instantanées.",
      role: 'Vice-Président de la Logistique Globale'
    },
    'test-2': {
      quote: "Investir dans le réseau électrique intelligent Synapse Core a marqué un tournant historique pour notre municipalité. Non seulement nos factures d'énergie ont chuté de manière drastique, mais l'indice de satisfaction citoyenne a atteint des sommets.",
      role: 'Commissaire au Logement & à l\'Urbanisme'
    },
    'test-3': {
      quote: "Le système de santé moléculaire développé par Vision Madagascar a sauvé d’innombrables vies. Nos médecins chercheurs isolent désormais les tumeurs cancéreuses en 2 heures au lieu de 10 jours, avec une précision inégalée.",
      role: 'Directeur de la Diagnostic Génomique'
    }
  },
  MG: {
    'test-1': {
      quote: "Nandamina tanteraka ny fitaterana sy fitsinjaran’ny entanay ny Vision Madagascar tamin’ny alalan’ny picker robotika sy ny fiara mandeha herinaratra. Haingana ny fanamboarana ary hita taratra avy hatrany ny fitsitsiana karbona.",
      role: 'Tale Lefitra misahana ny lojistika',
      company: 'Sachsen-Automotive AG'
    },
    'test-2': {
      quote: "Zava-dehibe ho an’ny komonina ny fampiasam-bola amin’ny Synapse Core Smart Grid. Tsy ny faktiora herinaratra ihany no nidina fa faly avokoa ny mponina tamin’ny fanatsarana ny tolotra.",
      role: 'Tale misahana ny trano sy tanàna',
      company: 'Metro Smart Board'
    },
    'test-3': {
      quote: "Namonjy ain’olona maro ny rafitra fitsaboana Helix novolavolain’ny Vision Madagascar. Mahita ny mikraoba miteraka homamiadana ao anatin’ny adiny 2 fotsiny ny mpitsabo ankehitriny fa tsy 10 andro intsony.",
      role: 'Tale misahana ny fitiliana arifomba',
      company: 'Western Oncology'
    }
  }
};

// French and Malagasy Overrides for VALUE PROPS
const valuePropTranslations: Record<'FR' | 'MG', Record<string, { title: string; description: string }>> = {
  FR: {
    'Incessant Innovation': {
      title: 'Innovation Continuelle',
      description: 'Nous réinvestissons plus de 14 % des revenus annuels du groupe directement dans les laboratoires universitaires et la recherche.'
    },
    'Sovereign-Grade Trust': {
      title: 'Confiance Souveraine',
      description: 'Reconnu par les gouvernements nationaux et les grands fonds de pension pour concevoir et opérer des infrastructures critiques de haute sécurité.'
    },
    'Zero Carbon Mandate': {
      title: 'Mandat Zéro Carbone',
      description: 'Toutes les divisions sont liées par des cibles net-zéro vérifiées. Nous concevons la décarbonation physique concrète.'
    },
    'Global Interconnect': {
      title: 'Interconnexion Globale',
      description: 'Nos réseaux et infrastructures logistiques couvrent 74 ports maritimes et pipelines cloud sécurisés sur trois continents.'
    }
  },
  MG: {
    'Incessant Innovation': {
      title: 'Fanatsarana sy Fandrosoana',
      description: 'Mampiasa maherin’ny 14% amin’ny vola miditra izahay hanohanana tetikasa fikarohana miaraka amin’ireo oniversite lehibe.'
    },
    'Sovereign-Grade Trust': {
      title: 'Fahamendrehana Ankatoavina',
      description: 'Atokisan’ny governemanta sy ny tahirim-bolan’ny mpiasa hitsangana fotodrafitrasa lehibe sady miaraka amin’ny fiarovana avo lenta.'
    },
    'Zero Carbon Mandate': {
      title: 'Tsy Mamoaka Karbona',
      description: 'Manaraka fepetra hentitra ny rantsana rehetra mba tsy hisian’ny entona mandoto ny tontolo iainana amin’ny famokarana.'
    },
    'Global Interconnect': {
      title: 'Fifandraisana Manerantany',
      description: 'Ny tambajotra nomerao sy lojistikantsika dia mipetaka amin’ny seranan-tsambo 74 sy tambajotra rahona amin’ny kôntinanta telo.'
    }
  }
};

// French and Malagasy Overrides for CORPORATE NEWS
const newsTranslations: Record<'FR' | 'MG', Record<string, Partial<NewsItem>>> = {
  FR: {
    'news-1': {
      title: 'Vision Madagascar et le European Clean Synergy Trust Signent un Accord de 850 Millions $ pour des Parcs Éoliens',
      category: 'Fusions & Partenariats',
      summary: 'Une initiative conjointe pour construire et opérer une centrale de turbines éoliennes flottantes de 420 mégawatts en mer du Nord.',
      content: 'Aujourd’hui, Vision Madagascar a officialisé les accords avec le European Clean Synergy Trust pour une facilité d’investissement de 850 millions $. Les capitaux seront alloués à la construction d’installations d’éoliennes flottantes conçues pour résister à des tempêtes marines de catégorie 5 tout en injectant de l’électricité propre dans les réseaux d’Eoropa continentale. Début des travaux prévu au quatrième trimestre 2026.'
    },
    'news-2': {
      title: 'La Plateforme de Diagnostic d’Oncologie Précision Atteint un Taux d’Isolation de 99,8% dans les Essais Cliniques',
      category: 'Excellence Scientifique',
      summary: 'Notre division santé annonce la validation clinique par les pairs de modèles d’analyse autonomes des tumeurs.',
      content: 'Après une étude clinique de 18 mois portant sur 14 005 échantillons de génomique anonymisés, la suite Synapse Healthcare a démontré des performances prédictives exceptionnelles. Le comité clinique a vérifié un indice de fidélité de 99,8% dans la détection précoce des mutations cellulaires. Le logiciel sera mis à la disposition d’une sélection d’hôpitaux de recherche le mois prochain.'
    },
    'news-3': {
      title: 'Mise en Service d’un Terminal Logistique Multimodal Autonome dans le Port de Rotterdam',
      category: 'Logistique Globale',
      summary: 'Intégration d’AGV (véhicules autoguidés), trieurs robotisés intelligents et processus automatisés de transit pour conteneurs.',
      content: 'Nous sommes fiers d’annoncer la mise en service officielle du Terminal A-74 à Rotterdam. Conçu de concert avec les autorités maritimes mondiales, le terminal s’appuie sur des transporteurs électriques alimentés par un micro-réseau à hydrogène autonome. Le site réduit le délai de transit de 14 heures à seulement 95 minutes, s’imposant comme modèle écologique pour les ports.'
    }
  },
  MG: {
    'news-1': {
      title: 'Vision Madagascar sy ny European Trust nanao sonia fifanarahana 850M$ amin’ny angovo',
      category: 'Fiaraha-miasa sy Tetikasa',
      summary: 'Tetikasa iarahana hamokarana herinaratra 420 Megawatts amin’ny alalan’ny rivotra any an-dranomasina.',
      content: 'Androany no vita sonia ofisialy ny fiaraha-miasa eo amin’ny Vision Madagascar sy ny European Clean Synergy Trust amin’ny fampiasam-bola 850 tapitrisa dolara. Hametrahana éoliennes lehibe mitsinkafona mahatohitra tafio-drivotra mahery vaika izany vola izany, ary hitondra herinaratra any amin’ny faritr’i Eoropa. Hanomboka amin’ny faran’ny taona 2026 ny asa.'
    },
    'news-2': {
      title: 'Ny fitaovana fitiliana Helix nahatratra 99.8% tamin’ny famantarana ny sela marary',
      category: 'Siansa sy Fitsaboana',
      summary: 'Ny sampana fitsaboana dia manambara ny fahombiazana lehibe tamin’ny fandrindrana ny fitsaboana homamiadana mampiasa AI.',
      content: 'Taorian’ny fikarohana sy fandinihana natao nandritra ny 18 volana tamin’ny sela 14 005, ny Synapse Healthcare dia naneho fahombiazana miavaka amin’ny famantarana mialoha ny sela homamiadana. Ny dokotera mpikaroka sy ny drafi-pitsaboana no nanamarina io tarehimarika 99.8% io. Homena ireo hopitaly fiaraha-miombon’antoka lehibe ny rindrambaiko amin’ny volana ho avy.'
    },
    'news-3': {
      title: 'Toby Lojistika maoderina sy mandeha ho azy vonona ao amin’ny seranan-tsambon’i Rotterdam',
      category: 'Fitaterana sy Lojistika',
      summary: 'Fampifandraisana ny picker robotika, fiara mandeha ho azy, ary AI mifehy ny fandehan’ny kaontenera.',
      content: 'Faly izahay manambara fa misokatra amin’ny fomba ofisialy ny Terminal A-74 ao Rotterdam. Niarahana tamin’ny sehatry ny seranan-tsambo manerantany ny fanorenana ity toby mandeha herinaratra feno ity. Mampiasa herinaratra avy amin’ny hydrogène izy io ka mampihena ny fotoana fikarakarana ny entana ho 95 minitra fotsiny fa tsy 14 ora intsony.'
    }
  }
};

// French and Malagasy Overrides for CORPORATE BLOGS
const blogTranslations: Record<'FR' | 'MG', Record<string, Partial<BlogItem>>> = {
  FR: {
    'blog-1': {
      title: 'Le Réseau Algorithmique : Équilibrer les Actifs d’Énergie Intermittents Multi-Gigawatts',
      authorRole: 'Directrice Générale de l’Infrastructure Énergétique',
      summary: 'Comment la modélisation prédictive et l’apprentissage par renforcement profond stabilisent les micro-réseaux locaux sans centrales thermiques fossiles.',
      content: 'L’intégration rapide d’installations éoliennes et solaires présente un goulot d’étranglement systémique : l’intermittence. Chez Vision Madagascar, nous avons abandonné les centrales de pointe traditionnelles au profit de modèles d’IA de routage prédictif. En alimentant des images isobares satellites et des modèles climatiques en temps réel dans des réseaux neuronaux actifs, nous pouvons anticiper les surcharges réseau 4 heures à l’avance. Lisez la suite pour découvrir comment les batteries de stockage et l’ajustement prédictif de charge assurent 99,99% de continuité opérationnelle.'
    },
    'blog-2': {
      title: 'Reconstruire l’Urbanité : Schéma Directeur pour des Villes Intelligentes et Neutres en Carbone',
      authorRole: 'Directeur Général & Urbaniste Principal',
      summary: 'Une plongée au cœur de la planification durable non coercitive, des matériaux de construction passifs et des cycles d’eau circulaires.',
      content: 'Les zones urbaines traditionnelles génèrent près de 70% des émissions mondiales de CO2, principalement dues à la production de ciment, à la gestion thermique inefficace et à la logistique longue portée. En structurant nos plans d’habitation autour de modes de transit légers décentralisés et en utilisant du béton géopolymère à faible hydratation, nous créons des espaces urbains agissant comme de véritables puits de carbone. Les réseaux intelligents Vision Madagascar intègrent des couloirs de circulation d’air naturels et des bioréacteurs à membrane, garantissant le recyclage complet des eaux usées.'
    },
    'blog-3': {
      title: 'Automatisation du Diagnostic avec Humain-dans-la-Boucle : Intégration Sécurisée de l’IA en Clinique',
      authorRole: 'Directrice de l’Informatique Médicale & Bio-Diagnostics',
      summary: 'Pourquoi l’automatisation logicielle doit servir de multiplicateur de force pour les praticiens, plutôt que d’autorité absolue de diagnostic.',
      content: 'Dans la course à l’intégration de modèles de langage dans les outils médicaux, plusieurs acteurs négligent d’importants protocoles de sécurité clinique. Au sein de nos centres de diagnostic, nous adhérons rigoureusement au paradigme de l’humain-dans-la-boucle (Human-in-the-Loop). Nos modèles d’IA s’occupent d’analyser les sela et d’indexer la littérature scientifique, mais la validation finale reste le domaine réservé exclusif du clinicien humain. Ce protocole assure un dossier sans faute tout en multipliant par 4 la vitesse de traitement clinique.'
    }
  },
  MG: {
    'blog-1': {
      title: 'Ny Network Manan-tsaina: Fifandanjan’ny herinaratra azo avy amin’ny Angovo',
      authorRole: 'Tale miandraikitra ny fotodrafitrasa angovo',
      summary: 'Ny fomba fandrindrana mialoha sy ny fianaran’ny milina hanatsarana ny toby herinaratra nefa tsy mampiasa solika mandoto.',
      content: 'Olana lehibe eo amin’ny famokarana herinaratra avy amin’ny masoandro na rivotra ny fahatapahana amin’ny andro tsy manantena. Ao amin’ny Vision Madagascar, dia mampiasa AI izahay handrindrana izany. Amin’ny fitehirizana ny sary avy amin’ny satellite, afaka maminany ny fihenan’ny herinaratra izahay 4 ora mialoha, ka mandrindra avy hatrany ny batteries mba tsy hitapahan’ny herinaratra.'
    },
    'blog-2': {
      title: 'Fananganana Tanàna Vaovao: Drafitra ho an’ny Tanàna tsy misy entona Karbona',
      authorRole: 'Tale mpanorina sy mpandrafitra ny tanàna',
      summary: 'Fandrefesana ny fomba fanorenana maharitra, mampiasa akora mitsitsy, ary fanodinana ny rano amin’ny fomba famokarana boribory.',
      content: 'Ny tanàna lehibe mahazatra dia mamokatra 70% amin’ny entona karbona manerantany noho ny simenitra sy ny fitaovana fitaterana. Amin’ny alalan’ny fanorenana tanàna manan-tsaina mampiasa simenitra efa voakarakara mialoha na geopolymer sady mitsitsy rano, dia mahavita mamorona tanàna tsy manimba tontolo iainana izahay. Ny rantsana mitantana ny rano kosa dia manadio indray ny rano maloto rehetra hampiasaina amin’ny trano sy zaridaina.'
    },
    'blog-3': {
      title: 'Fandrindrana ny Fitsaboana miaraka amin’ny Olona sy AI',
      authorRole: 'Tale misahana ny fitaovana fitsaboana sy ny data',
      summary: 'Nahoana ny fitaovana nomerao no tokony hanampy ny dokotera fa tsy hisolo azy tanteraka amin’ny fanapahan-kevitra.',
      content: 'Na dia eo aza ny fisian’ny milina solosaina arifomba mitsabo, ao amin’ny laboratoara fitsaboanay dia mitazona ny fepetra izahay fa ny dokotera olombelona ihany no manapa-kevitra farany. Manampy fotsiny amin’ny fikarohana sy ny fitondrana tati-baovao ny solosaina sy ny AI, fa ny fanamarinana ny aretina sy ny fitsaboana dia tsy miala amin’ny dokotera mpanatanteraka.'
    }
  }
};

// French and Malagasy Overrides for CORPORATE EVENTS
const eventTranslations: Record<'FR' | 'MG', Record<string, Partial<CorporateEvent>>> = {
  FR: {
    'event-1': {
      title: 'Sommet Mondial de l’Infrastructure Circulaire Souveraine 2026',
      location: 'Centre du Conseil Consultatif de Munich, Allemagne',
      description: 'Un rassemblement d’élite d’administrateurs environnementaux de niveau ministériel et de principaux investisseurs pour débattre de la décarbonation portuaire et des réseaux d’énergie intelligents.',
      speakers: ['Marcus Vance (CEO)', 'Amara Vance (Directrice Énergie)', 'Clara Tan-Lee (MHB)']
    },
    'event-2': {
      title: 'Forum Genomic & Diagnostic Moléculaire',
      location: 'Hub de l’Innovation Médicale de Tokyo, Japon',
      description: 'Présentation des données cliniques de Validation de la suite Synapse Diagnostic Genome aux responsables hospitaliers de la zone APAC.',
      speakers: ['Dr. Elena Rostova', 'Prof. Arthur Pendelton MD']
    },
    'event-3': {
      title: 'Diffusion Webcast de l’Éolien Flottant Offshore',
      location: 'Retransmission Globale En Ligne (Digital)',
      description: 'Analyse et démonstration globale de l’ingénierie hydrodynamique des parcs éoliens de la mer du Nord, diffusée depuis les docks.',
      speakers: ['Amara Vance', 'Dr. Hans Werner (Clean Trust)']
    },
    'event-4': {
      title: 'Raccordement au Réseau et Fin de la Phase 1 du Parc Éolien Nord',
      location: 'Coordonnée Offshore 54°N, 3°E (Mer du Nord)',
      description: 'Intégration réussie de 12 éoliennes flottantes en eau profonde directement dans les points de distribution continentaux.'
    },
    'event-5': {
      title: 'Symposium d’Économie Circulaire des Villes Intelligentes',
      location: 'Centre de Conférence du Grand Tokyo, Japon',
      description: 'Démonstration détaillée des technologies de construction neutre en carbone et de traitement circulaire de l’eau par Vision Madagascar.'
    },
    'event-6': {
      title: 'Assemblée de Validation & Lancement de Synapse Diagnostic AI',
      location: 'Laboratoire de Recherche Médicale de Zurich, Suisse',
      description: 'Rassemblement des autorités de régulation clinique pour examiner l’index de réduction de latence diagnostique et de sécurité thérapeutique.'
    }
  },
  MG: {
    'event-1': {
      title: 'Fihaonambe manerantany momba ny fotodrafitrasa lojistika sy boribory 2026',
      location: 'Munich Advisory Council Center, Alemaina',
      description: 'Vondron’ireo mpitondra fanjakana ambony sy mpitantana ny fampiasam-bola midinika mikasika ny fanadiovana seranan-tsambo sy toby herinaratra.',
      speakers: ['Marcus Vance (CEO)', 'Amara Vance (Energy MD)', 'Clara Tan-Lee (MHUB)']
    },
    'event-2': {
      title: 'Seha-pifanakalozana momba ny fitiliana genomic sela fitsaboana',
      location: 'Tokyo Medical Innovation Hub, Japana',
      description: 'Fampisehoana ireo tondro sy tati-pahombiazana fitsaboana Helix amin’ireo dokotera sy mpitarika hopitaly any amin’ny faritr’i Azia.',
      speakers: ['Dr. Elena Rostova', 'Prof. Arthur Pendelton MD']
    },
    'event-3': {
      title: 'Fandaharana mivantana amin’ny internet momba ny rivotra Offshore',
      location: 'Global Broadcast Pipeline (Digital)',
      description: 'Famakafakana ny momba ny éoliennes mitsinkafona any amin’ny ranomasina Nord, alefa mivantana avy amin’ny tobim-panorenana.',
      speakers: ['Amara Vance', 'Dr. Hans Werner (Trust)']
    },
    'event-4': {
      title: 'Fampifandraisana ny andiany voalohany amin’ny éoliennes any an-dranomasina Nord',
      location: 'Offshore Coordinate 54°N, 3°E',
      description: 'Nahavita nampifandray éoliennes mitsinkafona 12 lehibe amin’ny tobim-pitsinjaran-therinaratra any Alemaina sy Eoropa.'
    },
    'event-5': {
      title: 'Fiandrianana sy fiasan’ny fitsingerenan’ny fitaovana ao Tokyo',
      location: 'Nippon Grand Convention Venue, Tokyo',
      description: 'Fandravonana ny teti-panorenana tsy manimba tontolo iainana sy famandrihana rano maloto voadio nataon’ny Vision Madagascar.'
    },
    'event-6': {
      title: 'Fivoriambe fankatoavana ofisialy ny Synapse Diagnostic AI',
      location: 'Zurich Medical Analytics Labs, Soisa',
      description: 'Fivoriana niarahan’ireo mpitsabo sy mpitsapa fitaovana handinihana ny hafainganam-pandeha fitsaboana sy ny herin’ny fifandraisany.'
    }
  }
};

// EXPORT TRANSLATED HELPERS
export function translateList<T extends { id: string }>(
  list: T[], 
  lang: 'EN' | 'FR' | 'MG', 
  translationsMap: Record<'FR' | 'MG', Record<string, Partial<T>>>
): T[] {
  if (lang === 'EN') return list;
  const overrides = translationsMap[lang];
  if (!overrides) return list;
  return list.map(item => {
    const override = overrides[item.id];
    if (override) {
      return { ...item, ...override };
    }
    return item;
  });
}

// Translate Sectors
export function getTranslatedSectors(sectors: Sector[], lang: 'EN' | 'FR' | 'MG'): Sector[] {
  return translateList(sectors, lang, sectorTranslations as any);
}

// Translate Projects
export function getTranslatedProjects(projects: Project[], lang: 'EN' | 'FR' | 'MG'): Project[] {
  return translateList(projects, lang, projectTranslations as any);
}

// Translate Leaders
export function getTranslatedLeaders(leaders: Leader[], lang: 'EN' | 'FR' | 'MG'): Leader[] {
  return translateList(leaders, lang, leaderTranslations as any);
}

// Translate Careers
export function getTranslatedCareers(careers: JobPosition[], lang: 'EN' | 'FR' | 'MG'): JobPosition[] {
  return translateList(careers, lang, careerTranslations as any);
}

// Translate Timeline
export function getTranslatedTimeline(timeline: TimelineEvent[], lang: 'EN' | 'FR' | 'MG'): TimelineEvent[] {
  if (lang === 'EN') return timeline;
  const overrides = timelineTranslations[lang];
  if (!overrides) return timeline;
  return timeline.map(item => {
    const override = overrides[item.year];
    if (override) {
      return { ...item, ...override };
    }
    return item;
  });
}

// Translate Testimonials
export function getTranslatedTestimonials(testimonials: Testimonial[], lang: 'EN' | 'FR' | 'MG'): Testimonial[] {
  return translateList(testimonials, lang, testimonialTranslations as any);
}

// Translate Value Props
export function getTranslatedValueProps(valueProps: any[], lang: 'EN' | 'FR' | 'MG'): any[] {
  if (lang === 'EN') return valueProps;
  const overrides = valuePropTranslations[lang];
  if (!overrides) return valueProps;
  return valueProps.map(item => {
    const override = overrides[item.title];
    if (override) {
      return { ...item, ...override };
    }
    return item;
  });
}

// Translate News
export function getTranslatedNews(news: NewsItem[], lang: 'EN' | 'FR' | 'MG'): NewsItem[] {
  return translateList(news, lang, newsTranslations as any);
}

// Translate Blogs
export function getTranslatedBlogs(blogs: BlogItem[], lang: 'EN' | 'FR' | 'MG'): BlogItem[] {
  return translateList(blogs, lang, blogTranslations as any);
}

// Translate Corporate Events
export function getTranslatedEvents(events: CorporateEvent[], lang: 'EN' | 'FR' | 'MG'): CorporateEvent[] {
  return translateList(events, lang, eventTranslations as any);
}
