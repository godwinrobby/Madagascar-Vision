import { motion } from 'motion/react';
import { Group, Heart, Cpu, Building2, HardHat, Sparkles, Combine, Truck, Briefcase, ChevronRight, Award, Shield, CheckCircle, Users, MapPin, Clock, ArrowRight, Calendar } from 'lucide-react';
import { SECTORS, TESTIMONIALS, VALUE_PROPS, CORPORATE_EVENTS } from '../data/corporateData';
import { DynamicIcon } from './DynamicIcon';

interface HomeViewProps {
  language: 'EN' | 'FR' | 'MG';
  setActiveTab: (tab: string) => void;
  setSelectedSectorId: (id: string | null) => void;
}

export function HomeView({ language, setActiveTab, setSelectedSectorId }: HomeViewProps) {
  
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
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 overflow-hidden" id="hero-section">
        
        {/* Abstract 3D Geometric Floating CSS Object */}
        <div className="absolute top-[20%] left-[8%] w-72 h-72 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none animate-pulse duration-10000" />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Glassmorphic content card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
            id="hero-content-left"
          >
            {/* Tagline / Label (Aligned with theme specs) */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[10px] uppercase tracking-widest text-emerald-400 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Enterprise Excellence & Sovereignty</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-none tracking-tighter text-white font-sans">
              {language === 'EN' ? (
                <>
                  Orchestrating Diverse Sectors. <span className="gradient-text">Next Horizon</span> of Industry.
                </>
              ) : language === 'FR' ? (
                <>
                  Orchestrer Divers Secteurs. <span className="gradient-text">Le Prochain Horizon</span> de l'Industrie.
                </>
              ) : (
                <>
                  Mampiray Seha-pihariana. <span className="gradient-text">Tandrimo Vaovao</span> amin'ny Ho avy.
                </>
              )}
            </h1>

            <p className="text-slate-350 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              {translations.subline}
            </p>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <button
                onClick={() => setActiveTab('sectors')}
                className="px-8 py-4 premium-gradient-interactive text-white rounded-xl font-bold shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm active:scale-95 cursor-pointer"
              >
                <span>{translations.exploreSectors}</span>
                <ChevronRight size={15} />
              </button>

              <button
                onClick={() => setActiveTab('contact')}
                className="px-8 py-4 glass hover:bg-white/10 text-slate-100 font-bold rounded-xl flex items-center justify-center transition-all text-sm active:scale-95 cursor-pointer"
              >
                <span>{translations.investorRelations}</span>
              </button>
            </div>
          </motion.div>

          {/* Interactive Floating 3D Graphic Showcase (Pure High-Contrast CSS 3D) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 hidden lg:flex justify-center relative"
            id="hero-content-right"
          >
            {/* Massive frosted glass geometric orb with internal pulsing cores */}
            <div className="w-80 h-80 rounded-3xl relative border border-white/10 glass-panel shadow-2xl flex items-center justify-center group transform hover:rotate-3 transition-transform duration-1000 glow-emerald">
              
              {/* Internal neon wire diagram */}
              <div className="absolute inset-4 rounded-2xl border border-dashed border-emerald-500/20 animate-spin duration-20000" />
              <div className="absolute inset-10 rounded-full border border-dashed border-teal-500/30 animate-reverse-spin" />

              {/* Central glowing reactor mimic */}
              <div className="relative w-36 h-36 rounded-full bg-gradient-to-tr from-[#db5b1a] via-[#9cb933] to-[#1f8a5a] flex items-center justify-center p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-x-0 inset-y-0 rounded-full bg-gradient-to-tr from-[#db5b1a] via-[#9cb933] to-[#1f8a5a] blur-xl opacity-35 group-hover:opacity-70 transition-opacity" />
                <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center relative z-10 text-center px-4">
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#db5b1a] to-[#9cb933]">
                    Our Companies
                  </span>
                  <span className="text-white font-extrabold text-xl mt-1 select-none">
                    Æ CORE
                  </span>
                  <span className="text-[9px] font-mono text-slate-500 mt-1">
                    ACTIVE 2026
                  </span>
                </div>
              </div>

              {/* Micro satellite indicators rotating */}
              <div className="absolute top-8 left-8 w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-emerald-400 shadow-md">
                <Cpu size={18} />
              </div>

              <div className="absolute bottom-8 right-8 w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-purple-400 shadow-md">
                <Sparkles size={18} />
              </div>

              <div className="absolute top-12 right-12 w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-emerald-400 shadow-md">
                <Building2 size={16} />
              </div>

              <div className="absolute bottom-12 left-12 w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-rose-400 shadow-md">
                <Heart size={16} />
              </div>
            </div>
          </motion.div>

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
          {SECTORS.map((sec) => (
            <div 
              key={sec.id}
              onClick={() => handleSectorClick(sec.id)}
              className="glass card-hover rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-[230px] group cursor-pointer"
              id={`home-sector-${sec.id}`}
            >
              {/* Back ambient lighting block on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                  <DynamicIcon name={sec.icon} size={20} />
                </div>
                
                <h3 className="text-white text-base font-bold tracking-tight mb-2 group-hover:text-emerald-400 transition-colors">
                  {sec.name}
                </h3>
                
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {sec.description}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between text-[11px] font-semibold text-slate-400 border-t border-slate-900 mt-2">
                <span className="font-mono text-emerald-400">
                  {sec.metrics[0].value} {sec.metrics[0].label}
                </span>
                <span className="text-slate-500 group-hover:text-white transition-colors flex items-center space-x-1 font-mono">
                  <span>DISPATCH</span>
                  <ChevronRight size={10} />
                </span>
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
            {VALUE_PROPS.map((prop, idx) => (
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
          {TESTIMONIALS.map((test) => (
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
              {CORPORATE_EVENTS.filter(ev => ev.type === 'upcoming').slice(0, 3).map((ev) => (
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
              {CORPORATE_EVENTS.filter(ev => ev.type === 'recent').slice(0, 3).map((ev) => (
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
