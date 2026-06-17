import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Group, 
  Heart, 
  Cpu, 
  Building2, 
  HardHat, 
  Sparkles, 
  Combine, 
  Truck, 
  Briefcase, 
  ChevronRight, 
  ChevronLeft, 
  Award, 
  Shield, 
  CheckCircle, 
  Users, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Calendar,
  Wind,
  Droplet,
  Globe,
  Play,
  Pause,
  Activity,
  ShieldCheck
} from 'lucide-react';
import { SECTORS, TESTIMONIALS, VALUE_PROPS, CORPORATE_EVENTS } from '../data/corporateData';
import { getTranslatedSectors, getTranslatedTestimonials, getTranslatedValueProps, getTranslatedEvents } from '../utils/translator';
import { DynamicIcon } from './DynamicIcon';
import { CompanyLogo } from './CompanyLogo';

interface HomeViewProps {
  language: 'EN' | 'FR' | 'MG';
  setActiveTab: (tab: string) => void;
  setSelectedSectorId: (id: string | null) => void;
}

export function HomeView({ language, setActiveTab, setSelectedSectorId }: HomeViewProps) {
  const translatedSectors = getTranslatedSectors(SECTORS, language);
  const translatedTestimonials = getTranslatedTestimonials(TESTIMONIALS, language);
  const translatedValueProps = getTranslatedValueProps(VALUE_PROPS, language);
  const translatedEvents = getTranslatedEvents(CORPORATE_EVENTS, language);
  
  const translations = {
    EN: {
      tagline: 'Orchestrating Diverse Sectors. Engineering Tomorrow Hub.',
      subline: 'Vision Madagascar anchors resilient pathways in clinical health sciences, carbon-neutral master properties, robotic distribution, gigawatt wind fleets, and cloud transformation.',
      exploreSectors: 'Explore Divisions',
      investorRelations: 'Partner Advisory',
      statsHeader: 'Consolidated Performance Indicators',
      whyTitle: 'Why Sovereign Leaders Partner With Vision Madagascar',
      whySub: 'We leverage combined domain knowledge across physical civil construction and next-gen technical algorithms to offer absolute security and compound long-term yields.',
      partnersTitle: 'Consolidated Alliance Ecosystem',
      carouselTicker: 'Consolidated Portfolio Firms & National Development Authorities',
      ctaHeader: 'Forge the Next Civic Epoch with Us',
      ctaText: 'Whether representing a sovereign entity looking to deploy renewable power vectors or a healthcare group seeking diagnostic automation—our board is prepared to evaluate coordinates.',
      consultBtn: 'Schedule Executive Consultation',
      careersBtn: 'Explore Senior Openings'
    },
    FR: {
      tagline: 'Orchestrer Divers Secteurs. Le Prochain Horizon Industriel.',
      subline: "Vision Madagascar propose des voies d'évolution résilientes dans les sciences de la santé, le développement d'actifs neutres en carbone, la distribution automatisée, l'énergie éolienne de grande puissance et la transition cloud.",
      exploreSectors: 'Découvrir nos Divisions',
      investorRelations: 'Partenariats & Advisory',
      statsHeader: 'Indicateurs de Performance Consolidés',
      whyTitle: "Pourquoi les Institutions Choisissent Vision Madagascar",
      whySub: "Nous unissons notre expertise technique de l'infrastructure physique à des algorithmes de pointe pour assurer une rentabilité maximale et une sécurité absolue.",
      partnersTitle: 'Notre Écosystème d’Alliances Consolidé',
      carouselTicker: 'Sociétés en Portefeuille & Autorités Nationales de Développement',
      ctaHeader: 'Bâtissez le Prochain Horizon Civique avec Nous',
      ctaText: "Que vous représentiez une entité souveraine souhaitant déployer de l'énergie éolienne ou un groupe clinique en quête de diagnostics automatisés, notre conseil d'administration est prêt à examiner vos projets.",
      consultBtn: 'Réserver une Consultation Exécutive',
      careersBtn: "Consulter les Postes à Responsabilité"
    },
    MG: {
      tagline: 'Mampiray Seha-pihariana Marolafy. Toekarena Vaovao Ho avy.',
      subline: "Vision Madagascar dia manorina tolotra mafy orina amin'ny fahasalamana klinika, trano sy tany tsy mamoaka karbonina, fitaterana mampiasa milina, famokarana angovo azo havaozina, ary fampitaovana rahona haingana.",
      exploreSectors: 'Ireo Sampan-draharaha',
      investorRelations: 'Fiaraha-miasa Mpampiasa Vola',
      statsHeader: 'Tondro momba ny Fahombiazana',
      whyTitle: "Nahoana Ny Mpitantana No Mifidy any amin'i Vision Madagascar",
      whySub: "Mampifangaro ny fahaizana fotodrafitrasa sy ny teknika avo lenta izahay mba hanomezana antoka feno sy fidiram-bola maharitra.",
      partnersTitle: 'Ny Fiaraha-miasa Manerantany',
      carouselTicker: 'Ireo Orinasa mpiara-miombon\'antoka sy ny Fampandrosoana',
      ctaHeader: 'Andao Hiaraka Hamorona ny Ho Avy',
      ctaText: "Na mpitantana fanjakana ianao te-hametraka angovo azo havaozina, na vondrona fitsaboana mitady fitiliana arifomba, vonona ny handray sy handinika ny fiaraha-miasa ny birao mpitantana.",
      consultBtn: 'Fandaharana Fihaonana Mpitantana',
      careersBtn: 'Hijery ny asa misy rehetra'
    }
  }[language];

  // Multiple Banners Config mapping different sectors and highlights of the conglomerate
  const banners = [
    {
      id: "corporate",
      badge: {
        EN: "Sovereign Industrial Leadership",
        FR: "Souveraineté & Excellence Industrielle",
        MG: "Arifomba ara-Pandraharahana"
      },
      title: {
        EN: "Orchestrating Diverse Sectors. Next Horizon of Industry.",
        FR: "Orchestrer Divers Secteurs. Le Prochain Horizon de l'Industrie.",
        MG: "Mampiray Seha-pihariana. Tandrimo Vaovao amin'ny Ho avy."
      },
      description: {
        EN: "Vision Madagascar anchors resilient pathways in real-estate partnerships, elite tourism, municipal clean water grids, class-A commercial properties, and hybrid power systems.",
        FR: "Vision Madagascar structure des voies d'évolution durables dans l'immobilier, le tourisme d'élite, les réseaux d'eau d'État, les centres d'affaires classe A et la transition énergétique.",
        MG: "Vision Madagascar dia manorina tolotra mafy orina amin'ny trano sy tany, fizahan-tany avo lenta, famatsiana rano madio, ary famokarana herinaratra marolafy."
      },
      primaryCta: {
        EN: "Explore Divisions",
        FR: "Découvrir nos Divisions",
        MG: "Ireo Sampan-draharaha"
      },
      secondaryCta: {
        EN: "Partner Advisory Desk",
        FR: "Partenariats & Advisory",
        MG: "Fiaraha-miasa Mpampiasa Vola"
      },
      primaryAction: () => setActiveTab('sectors'),
      secondaryAction: () => setActiveTab('contact'),
      gradientClass: "from-emerald-500/10 via-slate-950 to-teal-500/10",
      glowColor: "glow-emerald",
      graphicType: "core"
    },
    {
      id: "energy",
      badge: {
        EN: "Sustainable Power & Clean Grid",
        FR: "Énergie Durable & Transition Carbone",
        MG: "Angovo Maharitra sy ny Tontolo iainana"
      },
      title: {
        EN: "Decarbonizing Infrastructure. Powering Malagasy Energy.",
        FR: "Décarboner l'Infrastructure. Propulser l'Énergie Verte.",
        MG: "Manome angovo madio. Miaro ny tontolo iainana."
      },
      description: {
        EN: "Deploying high-output regional solar arrays, hybrid micro-turbines, and zero-carbon tourism masterpieces, preserving biodiversity and enhancing grid yields.",
        FR: "Déploiement de centrales solaires régionales, de réseaux hybrides et d'éco-réserves d'exception comme Tsingy Bay, protégeant notre biodiversité.",
        MG: "Fizorana amin'ny angovo azo havaozina toy ny rano sy masoandro, miaraka amin'ny fametrahana tetikasa madio sy maharitra any Tsingy Bay."
      },
      primaryCta: {
        EN: "View Eco-Assets",
        FR: "Découvrir l'Éco-Tourisme",
        MG: "Hijery Tetikasa Madio"
      },
      secondaryCta: {
        EN: "Read ESG Directives",
        FR: "Mandat de Décarbonation ESG",
        MG: "Hijery ny Tondro ESG"
      },
      primaryAction: () => {
        setSelectedSectorId('tsingy');
        setActiveTab('sectors');
      },
      secondaryAction: () => setActiveTab('sustainability'),
      gradientClass: "from-teal-500/15 via-slate-950 to-emerald-500/15",
      glowColor: "glow-teal",
      graphicType: "energy"
    },
    {
      id: "properties",
      badge: {
        EN: "Class-A Real Estate & Business Infrastructure",
        FR: "Actifs Réels & Hub d'Affaires Souverain",
        MG: "Tranobe sy Varotra Manerantany"
      },
      title: {
        EN: "Bridging Global Markets. Premier Grade-A Business Hubs.",
        FR: "Faire le Pont avec le Monde. Centres d'Affaires Majeurs.",
        MG: "Mampifandray ny Varotra. Tranobe avo lenta isan-karazany."
      },
      description: {
        EN: "Hosting global commerce networks through the World Trade Center Antananarivo and climate-resilient commercial properties built to absolute international standards.",
        FR: "Accueil des réseaux d'échanges internationaux grâce au World Trade Center Antananarivo et des propriétés commerciales résilientes éprouvées de classe A.",
        MG: "Fandraisana ireo mpandraharaha manerantany miaraka amin'ny World Trade Center Antananarivo sy ireo tranobe matanjaka maharitra."
      },
      primaryCta: {
        EN: "Explore Property Portfolios",
        FR: "Voir l'Immobilier de Classe-A",
        MG: "Hijery ny Tranobe"
      },
      secondaryCta: {
        EN: "WTC Leasing Advisory",
        FR: "Consulter l'Espace WTC",
        MG: "Hifandray amin'ny WTC"
      },
      primaryAction: () => {
        setSelectedSectorId('wtc');
        setActiveTab('sectors');
      },
      secondaryAction: () => setActiveTab('contact'),
      gradientClass: "from-amber-500/10 via-slate-950 to-orange-500/10",
      glowColor: "glow-bronze",
      graphicType: "commerce"
    },
    {
      id: "humanitarian",
      badge: {
        EN: "Humanitarian Advancements & NGOs",
        FR: "Héritage Social & Banques d'Eau Souveraines",
        MG: "Tantsoroka Sosialy sy ny Maha-olona"
      },
      title: {
        EN: "Filtering Purity. Nurturing the Next Generation.",
        FR: "Sécuriser la Pureté. Élever les Vies Régionales.",
        MG: "Miantoka ny Rano Madio sy ny Fampianarana."
      },
      description: {
        EN: "Distributing 12,000,000+ liters of safe drinking water via ViMa Water Bank and building durable school networks to foster resilient civic prosperity.",
        FR: "Distribution de plus de 12 000 000 de litres d'eau propre grâce au filtre ViMa Water Bank, et financement d'écoles primaires par ViMa NGO.",
        MG: "Fanomezana rano madio ho an'ny vahoaka amin'ny alalan'ny ViMa Water Bank sy fananganana sekoly maro miaraka amin'ny ViMa NGO."
      },
      primaryCta: {
        EN: "See Philanthropic Impact",
        FR: "Impact de l'ONG & Eau",
        MG: "Tamberin'ny asa Sosialy"
      },
      secondaryCta: {
        EN: "Inquire Collaboration",
        FR: "Rejoindre nos Alliances",
        MG: "Hiaraka hiasa amin'ny NGO"
      },
      primaryAction: () => setActiveTab('sustainability'),
      secondaryAction: () => setActiveTab('contact'),
      gradientClass: "from-blue-500/10 via-slate-950 to-indigo-500/10",
      glowColor: "glow-blue",
      graphicType: "humanitarian"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth dynamic progress interval that supports hover state pausing
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
          return 0;
        }
        return prev + 1.25; // Completes 100% in ~6.4 seconds (80 steps of 80ms)
      });
    }, 80);

    return () => clearInterval(interval);
  }, [isPaused, banners.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
    setProgress(0);
  };

  const handleBulletClick = (idx: number) => {
    setCurrentSlide(idx);
    setProgress(0);
  };

  const currentBanner = banners[currentSlide];

  // Animated numbers
  const stats = [
    { value: '14+', label: { EN: 'Years Group Advisory', FR: 'Années d’Advisory du Groupe', MG: 'Taona Nitantanana ny Vondrona' }, icon: Award },
    { value: '74', label: { EN: 'Global Maritime Hubs', FR: 'Hubs Maritimes Globaux', MG: 'Seranan-tsambo Iraisam-pirenena' }, icon: Truck },
    { value: '115+', label: { EN: 'Mega Projects Completed', FR: 'Méga-Projets Finalisés', MG: 'Tetik’asa Goavana Vita' }, icon: CheckCircle },
    { value: '3.2M', label: { EN: 'Families Supplied Clean Power', FR: 'Foyers Alimentés en Énergie Propre', MG: 'Tokantrano Mahazo Angovo Propre' }, icon: Sparkles }
  ];

  // Fake partner brand names representing high-end alliances
  const clientLogos = [
    'Munich Diagnostics Board', 'Nippon Automation Systems', 'Zurich Clean Infrastructure Fund',
    'Rotterdam Container Terminals', 'London Grid Management', 'Singapore Smart City Alliance',
    'Bavarian Green Materials Lab', 'Sovereign Wealth Nordics'
  ];

  const handleSectorClick = (id: string) => {
    setSelectedSectorId(id);
    setActiveTab('sectors');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="home-view-wrapper" className="space-y-24 pb-12 relative">
      
      {/* 1. STATEFUL MULTIPLE BANNER HERO COMPONENT */}
      <section 
        className={`relative min-h-[92vh] flex flex-col justify-center pt-24 overflow-hidden transition-all duration-1000 bg-gradient-to-b ${currentBanner.gradientClass}`} 
        id="hero-section"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Abstract Dynamic Blurred Glowing Assets */}
        <div className="absolute top-[15%] left-[5%] w-80 h-80 bg-teal-500/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[110px] pointer-events-none" />

        {/* Top Floating Mini-badge showing player state on hover */}
        <div className="absolute top-[16%] left-[50%] -translate-x-[50%] z-20 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-900 text-[10px] font-mono tracking-widest text-slate-500 uppercase select-none">
          {isPaused ? (
            <>
              <Pause size={10} className="text-amber-500" />
              <span>SLIDESHOW AUTOPLAY PAUSED (HOVERING)</span>
            </>
          ) : (
            <>
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              >
                <Play size={8} className="text-emerald-500 fill-emerald-500" />
              </motion.div>
              <span>SLIDESHOW ENGAGED</span>
            </>
          )}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-8">
          
          {/* Glassmorphic content card using AnimatePresence for super fluid slides */}
          <div className="lg:col-span-7 h-auto min-h-[350px] flex flex-col justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentSlide}
                initial={{ opacity: 0, x: -20, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-6 text-left"
                id={`hero-slide-${currentBanner.id}`}
              >
                {/* Tagline / Label (Aligned with theme specs) */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[10px] uppercase tracking-widest text-emerald-400 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{currentBanner.badge[language]}</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white font-sans">
                  {currentBanner.title[language]}
                </h1>

                <p className="text-slate-350 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                  {currentBanner.description[language]}
                </p>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                  <button
                    onClick={currentBanner.primaryAction}
                    className="px-8 py-3.5 premium-gradient-interactive text-white rounded-xl font-bold shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm active:scale-95 cursor-pointer border border-emerald-500/20"
                  >
                    <span>{currentBanner.primaryCta[language]}</span>
                    <ChevronRight size={15} />
                  </button>

                  <button
                    onClick={currentBanner.secondaryAction}
                    className="px-8 py-3.5 glass hover:bg-white/10 text-slate-100 font-bold rounded-xl flex items-center justify-center transition-all text-sm active:scale-95 cursor-pointer border border-white/10"
                  >
                    <span>{currentBanner.secondaryCta[language]}</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Floating Graphic Showcase (Proper Dynamic Visual Board per Slide) */}
          <div className="lg:col-span-5 hidden lg:flex justify-center relative h-[360px] items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.93, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.93, rotate: 2 }}
                transition={{ duration: 0.65 }}
                className="w-full max-w-[340px] h-[340px] rounded-3xl relative border border-white/15 glass-panel shadow-2xl flex flex-col justify-between p-6 transition-all duration-500 overflow-hidden"
              >
                
                {/* 1. BACKGROUND GLOW SHARDS */}
                <div className="absolute inset-0 bg-slate-950/80 -z-10" />
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />

                {/* 2. DYNAMIC CONTENT RENDERING BASED ON ACTIVE GRAPHIC TYPE */}
                
                {/* ID-0: CORE HOLDINGS ORB */}
                {currentBanner.graphicType === "core" && (
                  <div className="w-full h-full flex flex-col justify-between" id="graphic-core-holdings">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] tracking-widest text-slate-400 uppercase">SYS_MONITOR / VI-MA 01</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    </div>

                    {/* Concentric spinning lines */}
                    <div className="relative w-44 h-44 mx-auto my-auto flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border border-dashed border-emerald-500/20 animate-spin duration-20000" />
                      <div className="absolute inset-4 rounded-full border border-dotted border-teal-550/30 animate-reverse-spin duration-15000" />
                      <div className="absolute inset-8 rounded-full border border-slate-800" />
                      
                      {/* Reactor Core */}
                      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-emerald-500 via-emerald-850 to-teal-500 p-0.5 shadow-2xl relative">
                        <div className="absolute inset-0 rounded-full bg-emerald-500 blur-lg opacity-40 animate-pulse" />
                        <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center relative z-10 text-center px-1">
                          <span className="text-[8px] font-mono font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">HOLDINGS</span>
                          <span className="text-white font-extrabold text-base mt-0.5 tracking-tight">Æ CORE</span>
                          <span className="text-[8px] font-mono text-slate-500">SYS_OK.2026</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-left pt-2 border-t border-slate-900 font-mono text-[10px]">
                      <div className="flex flex-col">
                        <span className="text-slate-500 font-light">ALLIANCE CORP</span>
                        <span className="text-emerald-400 font-bold">19 SECTORS ACTIVE</span>
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="text-slate-500 font-light">REGIONAL PORTFOLIO</span>
                        <span className="text-white">AUM EXCELLENCE</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ID-1: CLEAN ENERGY AND WIND GRAPHIC */}
                {currentBanner.graphicType === "energy" && (
                  <div className="w-full h-full flex flex-col justify-between" id="graphic-clean-energy">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] tracking-widest text-teal-400 uppercase">GRID_SECURE / GEN-3</span>
                      <div className="flex items-center space-x-1">
                        <Wind size={10} className="text-teal-400 animate-pulse" />
                        <span className="font-mono text-[8px] text-teal-300">ACTIVE FUEL</span>
                      </div>
                    </div>

                    {/* Turbine and bar graph visual */}
                    <div className="relative w-44 h-44 mx-auto my-auto flex flex-col items-center justify-center space-y-3">
                      {/* Interactive solar-wind meter */}
                      <div className="w-32 h-16 rounded-2xl border border-slate-900 bg-slate-950/90 relative p-3 flex flex-col justify-between flex-shrink-0">
                        <div className="flex justify-between items-center text-[8px] font-mono text-slate-500">
                          <span>GRID LOAD</span>
                          <span className="text-emerald-400">98.4% EFFICIENCY</span>
                        </div>
                        {/* Simulated glowing progress bars */}
                        <div className="space-y-1">
                          <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: "0%" }} 
                              animate={{ width: "98.4%" }} 
                              transition={{ duration: 1.5 }} 
                              className="bg-gradient-to-r from-teal-500 to-emerald-400 h-full rounded-full" 
                            />
                          </div>
                        </div>
                      </div>

                      {/* Small circular wind turbine rotor */}
                      <div className="flex items-center space-x-3 bg-slate-950/40 p-2 rounded-xl border border-slate-900">
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                          className="w-8 h-8 rounded-full border-2 border-dashed border-teal-400/50 flex items-center justify-center"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        </motion.div>
                        <div className="text-left font-mono text-[9px]">
                          <span className="text-slate-400 block font-bold">ViMa HYBRID</span>
                          <span className="text-slate-500 text-[8px]">Hydro & Wind</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-left pt-2 border-t border-slate-900 font-mono text-[10px]">
                      <div className="flex flex-col">
                        <span className="text-slate-500 font-light">CO2 OFFSET</span>
                        <span className="text-teal-400 font-extrabold">-4,120 TONS/YR</span>
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="text-slate-500 font-light">POWER HARVEST</span>
                        <span className="text-white">GIGAWATT HUB</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ID-2: COMMERCE & REAL ESTATE LOGEDER MAP */}
                {currentBanner.graphicType === "commerce" && (
                  <div className="w-full h-full flex flex-col justify-between" id="graphic-global-trade">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] tracking-widest text-amber-500 uppercase">WTC_LEASING / ANTS</span>
                      <span className="font-mono text-[8px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full border border-amber-500/20">CLASS-A AUTH</span>
                    </div>

                    {/* Trade lines diagram or bento stats list */}
                    <div className="w-full space-y-3 my-auto">
                      <div className="glass p-3 rounded-xl border border-white/5 space-y-2">
                        <div className="flex justify-between items-center text-[10px] font-mono">
                          <span className="text-slate-400">WTC Antananarivo</span>
                          <span className="text-amber-500 font-black">92.5% LEASED</span>
                        </div>
                        <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden">
                          <div className="bg-amber-500 h-full rounded-full" style={{ width: "92.5%" }} />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-900 text-left">
                          <span className="text-slate-500 text-[8px] font-mono block">TENANTS</span>
                          <span className="text-white text-xs font-black tracking-tight mt-0.5 block">240+ LEADING</span>
                        </div>
                        <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-900 text-left">
                          <span className="text-slate-500 text-[8px] font-mono block">MALL SECTOR</span>
                          <span className="text-emerald-400 text-xs font-black tracking-tight mt-0.5 block">100% SOLAR</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-left pt-2 border-t border-slate-900 font-mono text-[10px]">
                      <div className="flex flex-col">
                        <span className="text-slate-500 font-light">REGIONAL NETWORK</span>
                        <span className="text-amber-500 font-bold">INDIAN OCEAN</span>
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="text-slate-500 font-light">DEVELOPMENTS</span>
                        <span className="text-white">42 COMPLETE</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ID-3: HUMANITARIAN / NGO WATER INFRASTRUCTURE */}
                {currentBanner.graphicType === "humanitarian" && (
                  <div className="w-full h-full flex flex-col justify-between" id="graphic-humanitarian-welfare">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] tracking-widest text-blue-400 uppercase">SYS_WELFARE / MDG</span>
                      <div className="flex items-center space-x-1 text-blue-300">
                        <Droplet size={9} className="animate-bounce" />
                        <span className="font-mono text-[8px]">ViMa WATER BANK</span>
                      </div>
                    </div>

                    {/* Simulated pulse graph or fluid level */}
                    <div className="relative w-44 h-44 mx-auto my-auto flex flex-col justify-center items-center">
                      <div className="w-28 h-28 rounded-full border border-slate-800 bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
                        {/* Simple CSS waving effect */}
                        <div className="absolute inset-x-0 bottom-0 top-[35%] bg-blue-500/10 animate-pulse rounded-t-3xl" />
                        
                        <div className="relative z-10 text-center text-white">
                          <span className="text-[9px] font-mono text-slate-500 uppercase block tracking-wider">H2O PURITY</span>
                          <span className="text-lg font-black block mt-0.5 text-blue-400">99.85%</span>
                          <span className="text-[8px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded-full block mt-1">SAFE STANDARD</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-left pt-2 border-t border-slate-900 font-mono text-[10px]">
                      <div className="flex flex-col">
                        <span className="text-slate-500 font-light">NGO REACH</span>
                        <span className="text-blue-400 font-black">250,000+ LIVES</span>
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="text-slate-500 font-light">PRIMARY SCHOOLS</span>
                        <span className="text-white">34 CO-SPONSORED</span>
                      </div>
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* 3. PREMIUM HORIZONTAL SLIDE CONTROLS (PROGRESS BAR + BULLETS) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-15 relative pb-8 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 uppercase text-[10px] tracking-widest font-mono text-slate-500 border-t border-slate-900/40">
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={handlePrev}
              className="p-2.5 rounded-lg border border-slate-900 bg-slate-950/40 text-slate-400 hover:text-white hover:bg-slate-900 transition-all cursor-pointer"
              title="Previous Slide"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={14} />
            </button>
            <button 
              onClick={handleNext}
              className="p-2.5 rounded-lg border border-slate-900 bg-slate-950/40 text-slate-400 hover:text-white hover:bg-slate-900 transition-all cursor-pointer"
              title="Next Slide"
              aria-label="Next Slide"
            >
              <ChevronRight size={14} />
            </button>
            <span className="text-[10px] text-slate-500 select-none pl-2">
              0{currentSlide + 1} / 0{banners.length}
            </span>
          </div>

          {/* Interactive Banners Progress Pill Indicators */}
          <div className="flex flex-1 max-w-sm sm:max-w-md items-center space-x-3 overflow-x-auto py-1 scrollbar-none justify-end">
            {banners.map((item, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={item.id}
                  onClick={() => handleBulletClick(idx)}
                  className="flex flex-col text-right items-end group transition-all duration-300 min-w-[65px] cursor-pointer"
                >
                  <span className={`text-[8px] font-bold ${isActive ? 'text-emerald-400' : 'text-slate-500 group-hover:text-slate-350'}`}>
                    {idx === 0 ? "LEADERSHIP" : idx === 1 ? "ECO-POWER" : idx === 2 ? "PROPERTIES" : "NGO TEAM"}
                  </span>
                  
                  {/* Outer bar */}
                  <div className="w-16 h-1 mt-1.5 bg-slate-900 rounded-full overflow-hidden relative border border-white/5">
                    {/* Inner active dynamic progress fill */}
                    {isActive && (
                      <div 
                        className="bg-emerald-400 h-full absolute left-0 top-0 transition-all ease-linear"
                        style={{ 
                          width: `${progress}%`,
                          transitionDuration: isPaused ? '0ms' : '80ms'
                        }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </section>

      {/* 2. Company Highlights statistics Section */}
      <section className="relative z-10 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-y border-slate-900" id="stats-section">

        <h3 className="text-center font-mono text-xs tracking-widest text-slate-500 uppercase mb-8">
          {translations.statsHeader}
        </h3>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="glass card-hover rounded-2xl p-6 text-center group"
              id={`stat-card-${idx}`}
            >
              <div className="mx-auto w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 mb-3 group-hover:text-white group-hover:bg-emerald-500 transition-all">
                <stat.icon size={18} />
              </div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="block text-[11px] sm:text-xs text-slate-400 font-medium mt-1">
                {stat.label[language]}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Business Sectors Overview Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="sectors-section-override">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-3 py-1 rounded-full border border-slate-800 bg-slate-900 text-[10px] font-mono tracking-widest uppercase text-slate-400">
            Vision Madagascar Divisions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {language === 'EN' ? 'Global Multi-Sector Reach' : language === 'FR' ? 'Portée Multi-Sectorielle Globale' : 'Sehatra Marolafy Manerantany'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {language === 'EN' ? 'Operating synchronized business verticals managed by cross-disciplinary executive boards, delivering reliable sovereign solutions.' : language === 'FR' ? 'Gestion de branches d’activités synchronisées par un conseil d’administration interdisciplinaire, fournissant des solutions souveraines de confiance.' : 'Mitantana sampan-draharaha mirindra sy fehezin’ny mpitantana manam-pahaizana, manome vahaolana mahomby sy azo antoka.'}
          </p>
        </div>

        {/* Dynamic Sector Card Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {translatedSectors.map((sec) => (
            <div 
              key={sec.id}
              onClick={() => handleSectorClick(sec.id)}
              className="glass card-hover rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-full min-h-[280px] group cursor-pointer border border-white/5 hover:border-emerald-500/20 transition-all duration-300"
              id={`home-sector-${sec.id}`}
            >
              {/* Back ambient lighting block on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div>
                <CompanyLogo id={sec.id} size="md" className="mb-4 border border-slate-900 group-hover:ring-emerald-500/30 transition-all" />
                
                <h3 className="text-white text-base font-bold tracking-tight mb-2 group-hover:text-emerald-400 transition-colors">
                  {sec.name}
                </h3>
                
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {sec.description}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between text-[11px] font-semibold text-slate-400 border-t border-slate-900 mt-4">
                <div className="flex flex-col text-left">
                  <span className="font-mono text-xs sm:text-sm font-black text-emerald-400 leading-none">
                    {sec.metrics[0].value}
                  </span>
                  <span className="text-[8px] font-mono uppercase tracking-widest text-slate-500 mt-1 leading-none">
                    {sec.metrics[0].label}
                  </span>
                </div>
                <div className="flex items-center space-x-1 font-mono text-[9px] sm:text-[10px] bg-slate-900 border border-slate-800/80 px-3 py-1.5 rounded-xl text-slate-400 group-hover:text-white group-hover:bg-emerald-500 group-hover:border-emerald-400/30 transition-all duration-305">
                  <span>DISPATCH</span>
                  <ChevronRight size={11} className="transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="why-choose-us-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
              Robust Group Anchors
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              {translations.whyTitle}
            </h2>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              {translations.whySub}
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {translatedValueProps.map((prop, idx) => (
              <div 
                key={idx} 
                className="glass card-hover rounded-2xl p-6"
                id={`why-prop-${idx}`}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 mb-3">
                  <DynamicIcon name={prop.icon} size={18} />
                </div>
                
                <h3 className="text-white font-bold text-sm mb-1.5 font-sans">
                  {prop.title}
                </h3>
                
                <p className="text-xs text-slate-400 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Client Logos Premium Continuous Ticker */}
      <section className="relative z-10 py-10 bg-slate-950/40 border-y border-slate-900/65 overflow-hidden" id="logos-ticker-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <h4 className="text-center font-mono text-[10px] tracking-widest text-slate-500 uppercase">
            {translations.carouselTicker}
          </h4>
        </div>

        {/* Horizontal Ticker track marquee */}
        <div className="w-full relative flex overflow-x-hidden">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap text-slate-400 text-xs font-mono font-bold tracking-widest uppercase py-2">
            {clientLogos.concat(clientLogos).map((logo, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500/40 mr-2" />
                <span>{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" id="testimonials-section">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {language === 'EN' ? 'Global Operational Audits' : language === 'FR' ? 'Audits Opérationnels Globaux' : 'Fanaraha-maso sy Tombana Iraisam-pirenena'}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {language === 'EN' ? 'How national administrative boards and institutional compliance partners evaluate our executed multi-sector architectures.' : language === 'FR' ? 'Comment les commissions nationales et les partenaires institutionnels évaluent nos architectures multi-sectorielles exécutées.' : 'Ny fomba entin’ireo vaomieram-panjakana sy ny mpiara-miombon’antoka manombatombana ny zava-bita marolafy.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {translatedTestimonials.map((test) => (
            <div 
              key={test.id} 
              className="glass card-hover rounded-2xl p-6 relative flex flex-col justify-between h-[250px]"
              id={`testi-${test.id}`}
            >
              <div className="space-y-4">
                <span className="text-emerald-500 text-4xl block leading-none font-serif select-none">“</span>
                <p className="text-slate-300 text-xs leading-relaxed italic line-clamp-5">
                  {test.quote}
                </p>
              </div>

              <div className="border-t border-slate-900 pt-3 mt-3 flex justify-between items-center">
                <div>
                  <h4 className="text-white text-xs font-bold leading-tight">
                    {test.author}
                  </h4>
                  <p className="text-[10px] text-slate-500 leading-tight">
                    {test.role}, <span className="font-mono text-emerald-400/80">{test.company}</span>
                  </p>
                </div>
                <div className="flex space-x-0.5 text-amber-500 text-[10px]">
                  {'★'.repeat(test.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6.5. Corporate Events - Upcoming & Recent Assemblies */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" id="events-highlights-section">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-block px-3 py-1 rounded-full border border-slate-800 bg-slate-900 text-[10px] font-mono tracking-widest uppercase text-slate-400">
            Group Symposia Registry
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {language === 'EN' ? 'Upcomings & Recent Assemblies' : language === 'FR' ? 'Assemblées Récentes & À Venir' : 'Fihaonambe Ho avy & Hetsika Manan-tantara'}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {language === 'EN' ? 'Join our board live at upcoming structural roundtables or review clinical and mechanical documentation of recent assemblies.' : language === 'FR' ? 'Rejoignez notre conseil d’administration lors des prochaines tables rondes ou examinez les rapports cliniques et techniques d’assemblées récentes.' : 'Manatreha mivantana ireo fihaonana an-tabilao boribory, na jereo ny tatitra ara-teknika sy fitsaboana rehetra.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Upcoming Column */}
          <div className="space-y-6" id="upcoming-events-deck">
            <h3 className="text-sm font-mono text-emerald-450 uppercase tracking-widest border-b border-emerald-500/20 pb-2 flex items-center justify-between">
              <span>● Upcoming Summits</span>
              <span className="text-[10px] text-slate-550 font-light lowercase">registrations open</span>
            </h3>

            <div className="space-y-4">
              {translatedEvents.filter(ev => ev.type === 'upcoming').slice(0, 3).map((ev) => (
                <div 
                  key={ev.id}
                  className="glass rounded-2xl p-5 hover:border-emerald-500/20 transition-all group flex items-start space-x-4 text-left cursor-pointer"
                  onClick={() => {
                    setActiveTab('events');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  id={`home-upcoming-event-${ev.id}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-emerald-400 shrink-0 flex flex-col items-center justify-center font-mono select-none">
                    <span className="text-[10px] font-bold leading-none uppercase">
                      {new Date(ev.date).toLocaleString('en-US', { month: 'short' })}
                    </span>
                    <span className="text-base font-extrabold leading-none mt-0.5">
                      {new Date(ev.date).getDate()}
                    </span>
                  </div>

                  <div className="space-y-1 flex-1 min-w-0">
                    <h4 className="text-white text-sm sm:text-base font-bold tracking-tight group-hover:text-emerald-400 transition-colors truncate">
                      {ev.title}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 font-light">
                      {ev.description}
                    </p>
                    <div className="flex items-center space-x-4 text-[10px] font-mono text-slate-500 pt-1.5 border-t border-slate-900 mt-2">
                      <span className="flex items-center space-x-1">
                        <MapPin size={10} className="text-emerald-555" />
                        <span className="truncate max-w-[150px]">{ev.location.split(',')[0]}</span>
                      </span>
                      {ev.time && (
                        <span className="flex items-center space-x-1">
                          <Clock size={10} />
                          <span>{ev.time}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Column */}
          <div className="space-y-6" id="recent-events-deck">
            <h3 className="text-sm font-mono text-slate-450 uppercase tracking-widest border-b border-slate-800 pb-2 flex items-center justify-between">
              <span>✓ Recent Completed Assemblies</span>
              <span className="text-[10px] text-slate-550 font-light lowercase">archived records</span>
            </h3>

            <div className="space-y-4">
              {translatedEvents.filter(ev => ev.type === 'recent').slice(0, 3).map((ev) => (
                <div 
                  key={ev.id}
                  className="glass rounded-2xl p-5 hover:border-slate-800 transition-all group flex items-start space-x-4 text-left cursor-pointer"
                  onClick={() => {
                    setActiveTab('events');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  id={`home-recent-event-${ev.id}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 text-slate-450 shrink-0 flex flex-col items-center justify-center font-mono select-none">
                    <span className="text-[10px] uppercase leading-none">
                      {new Date(ev.date).toLocaleString('en-US', { month: 'short' })}
                    </span>
                    <span className="text-sm font-bold leading-none mt-0.5">
                      {new Date(ev.date).getDate()}
                    </span>
                  </div>

                  <div className="space-y-1 flex-1 min-w-0">
                    <h4 className="text-white text-sm sm:text-base font-bold tracking-tight group-hover:text-emerald-400 transition-colors truncate">
                      {ev.title}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 font-light">
                      {ev.description}
                    </p>
                    <div className="flex items-center space-x-4 text-[10px] font-mono text-slate-550 pt-1.5 border-t border-slate-900 mt-2">
                      <span className="flex items-center space-x-1 text-slate-500">
                        <MapPin size={10} />
                        <span className="truncate max-w-[150px]">{ev.location.split(',')[0]}</span>
                      </span>
                      {ev.metrics && (
                        <span className="text-emerald-500 font-bold">
                          {ev.metrics.value}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Access link details button */}
        <div className="text-center pt-2">
          <button
            onClick={() => {
              setActiveTab('events');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 hover:text-white border border-emerald-500/10 hover:border-emerald-500/30 px-5 py-2.5 rounded-xl bg-emerald-950/5 hover:bg-emerald-950/10 cursor-pointer transition-all"
          >
            <span>DISPATCH COMPLETE SYMPOSIA DATABASE</span>
            <ArrowRight size={12} />
          </button>
        </div>

      </section>

      {/* 7. Bottom Call-to-Action Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="cta-bottom-section">
        <div className="glass rounded-3xl p-8 sm:p-12 relative overflow-hidden neon-border shadow-2xl">
          
          {/* Ambient vector lights inside block */}
          <div className="orb orb-blue absolute top-[-50px] left-[-50px] opacity-25 blur-3xl pointer-events-none" />
          <div className="orb orb-purple absolute bottom-[-50px] right-[-50px] opacity-25 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {translations.ctaHeader}
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {translations.ctaText}
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <button
                onClick={() => setActiveTab('contact')}
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-all shadow-2xl shadow-emerald-600/30 active:scale-95 cursor-pointer"
              >
                {translations.consultBtn}
              </button>

              <button
                onClick={() => setActiveTab('careers')}
                className="px-6 py-3.5 glass hover:bg-white/10 text-slate-100 font-bold rounded-xl text-sm transition-all active:scale-95 cursor-pointer"
              >
                {translations.careersBtn}
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
