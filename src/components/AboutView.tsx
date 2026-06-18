import { motion } from 'motion/react';
import { TimelineEvent, Leader } from '../types';
import { LEADERS, TIMELINE } from '../data/corporateData';
import { getTranslatedLeaders, getTranslatedTimeline } from '../utils/translator';
import { Target, Globe, Compass, Landmark, ShieldCheck, Zap, Sparkles, Leaf, Users, Heart } from 'lucide-react';
import { Helmet } from './Helmet';

interface AboutViewProps {
  language: 'EN' | 'FR' | 'MG';
  setActiveTab?: (tab: string) => void;
}

export function AboutView({ language, setActiveTab }: AboutViewProps) {
  const translatedTimeline = getTranslatedTimeline(TIMELINE, language);
  const translatedLeaders = getTranslatedLeaders(LEADERS, language);
  
  const translations = {
    EN: {
      teamTitle: 'The Board & Managing Partners',
      teamSub: 'Distinguished cross-sector leaders blending institutional sovereign expertise, technological physics, risk frameworks, and sustainability portfolios.',
      valTitle: 'Our Values',
      valSub: 'ViMa builds on the principles of team spirit, accountability and respect. The women and men of ViMa are the pillars of the group, and their engagement for the development of Madagascar contributes to bringing solutions and satisfaction to our customers.',
      overviewTitle: 'Group Foundation & Capital Base',
      overviewDesc: 'Vision Madagascar represents a consolidated multi-sector investment syndicate structured to direct physical and digital utilities into carbon-neutral pathways. We anchor sovereign-grade infrastructure projects and deep tech integrations globally.',
      visionMissionTitle: 'Vision and mission',
      visionMissionP1: 'Since its inception, Vision Madagascar (ViMa) has aimed to be a major player of the development of a «new Madagascar», a country where private companies are contributing to the improvement of Malagasy people’s quality of life. Therefore, our vision statement, «Creating a new Madagascar», is central in all of ViMa’s activities.',
      visionMissionP2: 'We regard quality as a key to competitiveness, and that challenges makes progress. We aim to use our creativity to make innovative solutions of highest quality to our customers.',
      visionMissionP3: 'The key success of ViMa lie in giving out all energy, know-how and expertise to produce irreproachable and satisfactory services to customers and partners.',
      visionLabel: 'Creating a New Madagascar',
      missionLabel: 'Quality & Progress',
      excellenceLabel: 'Energy, Expertise & Success'
    },
    FR: {
      teamTitle: 'Le Conseil d’Administration & Associés',
      teamSub: 'Chefs de file intersectoriels de premier plan associant expertise souveraine institutionnelle, physique technologique, cadres de gestion des risques et portefeuilles de durabilité.',
      valTitle: 'Nos valeurs',
      valSub: 'ViMa s\'appuie sur les principes de l\'esprit d\'équipe, de la responsabilité et du respect. Les femmes et les hommes de ViMa sont les piliers du groupe, et leur engagement pour le développement de Madagascar contribue à apporter solutions et satisfaction à nos clients.',
      overviewTitle: 'Fondation du Groupe & Structure du Capital',
      overviewDesc: 'Vision Madagascar représente un syndicat d’investissement multisectoriel consolidé, structuré pour orienter les services physiques et numériques vers des trajectoires neutres en carbone. Nous ancrons des projets d’infrastructure de niveau souverain et des intégrations technologiques profondes au niveau mondial.',
      visionMissionTitle: 'Vision et mission',
      visionMissionP1: 'Depuis sa création, Vision Madagascar (ViMa) a pour ambition d’être un acteur majeur du développement d’un «nouveau Madagascar», un pays où les entreprises privées contribuent à l\'amélioration de la qualité de vie de la population malgache. Par conséquent, notre vision, «Créer un nouveau Madagascar», est au cœur de toutes les activités de ViMa.',
      visionMissionP2: 'Nous considérons la qualité comme la clé de la compétitivité, et pensons que les défis favorisent le progrès. Notre objectif est d\'utiliser notre créativité pour proposer des solutions innovantes de la plus haute qualité à nos clients.',
      visionMissionP3: 'La clé du succès de ViMa réside dans la mobilisation de toute son énergie, de son savoir-faire et de son expertise pour fournir des services irréprochables et satisfaisants à nos clients et partenaires.',
      visionLabel: 'Créer un Nouveau Madagascar',
      missionLabel: 'Qualité & Progrès',
      excellenceLabel: 'Énergie, Expertise & Réussite'
    },
    MG: {
      teamTitle: 'Mpitantana sy ny Mpiara-miombon’antoka',
      teamSub: 'Ireo mpitarika miavaka mampifandray ny traikefa ara-panjakana, ny fampandrosoana ara-teknolojia, ary ny fahaizana miatrika olana sy ny fandrosoana maharitra.',
      valTitle: 'Ny soatoavinay',
      valSub: 'Ny ViMa dia miorina amin\'ny foto-kevitry ny fiombonana, ny fandraisana andraikitra ary ny fanajana. Ny vehivavy sy ny lehilahy ao amin\'ny ViMa no andrin\'ny vondrona, ary ny fanoloran-tenan\'izy ireo ho amin\'ny fampandrosoana an\'i Madagasikara dia mandray anjara amin\'ny fitondrana vahaolana sy fahafaham-po ho an\'ny mpanjifanay.',
      overviewTitle: 'Fototry ny Vondrona sy Renivola',
      overviewDesc: 'Vision Madagascar dia fikambanana mampiasa vola amin’ny sehatra maro mba hitondrana ny fotodrafitrasa ara-batana sy ara-nomerika ho amin’ny lalana madio tsy hisy karbona. Manorina fotodrafitrasa avo lenta sy teknolojia arifomba ho an’ny firenena izahay.',
      visionMissionTitle: 'Vina sy iraka',
      visionMissionP1: 'Hatramin\'ny nanombohany, ny Vision Madagascar (ViMa) dia mikendry ny ho mpanorina lehibe amin\'ny fampandrosoana an\'i «Madagasikara vaovao», firenena iray ahafahan\'ny orinasa tsy miankina mandray anjara amin\'ny fanatsarana ny kalitaon\'ny fiainan\'ny vahoaka malagasy. Noho izany, ny vinanay hoe, «Mamorona an\'i Madagasikara vaovao», dia mitana toerana lehibe amin\'ny hetsika rehetra ataon\'ny ViMa.',
      visionMissionP2: 'Hitanay fa ny kalitao no fanalahidin\'ny fifaninanana, ary ny fiatrehana ny fanamby no mitondra fivoarana. Mikendry ny hampiasa ny fahaiza-mamorona izahay mba hanomezana vahaolana vaovao sy manana kalitao avo indrindra ho an\'ny mpanjifanay.',
      visionMissionP3: 'Ny tsiambaratelon\'ny fahombiazan\'ny ViMa dia ny fanehoana ny hery rehetra, ny fahaizana ary ny traikefa mba famokarana serivisy tsy misy kilema sy mahafa-po ho an\'ny mpanjifa sy ny mpiara-miombon\'antoka.',
      visionLabel: 'Mamorona an\'i Madagasikara Vaovao',
      missionLabel: 'Kalitao & Fivoarana',
      excellenceLabel: 'Hery, Fahaizana & Fahombiazana'
    }
  }[language];

  const valuesEx = [
    {
      title: { EN: 'Team Spirit', FR: "Esprit d'équipe", MG: "Sain'ny fiombonana" },
      desc: { 
        EN: "Fostering cohesive, cross-functional collaboration and horizontal trust to deliver seamless synergy across all group sectors.", 
        FR: "Favoriser une collaboration cohérente et transversale pour assurer des synergies parfaites entre tous nos secteurs.", 
        MG: "Fiaraha-miasa matanjaka sy fanehoana ny hery iraisana eo amin'ny sampan-draharaha rehetra ao amin'ny vondrona." 
      },
      icon: Users
    },
    {
      title: { EN: 'Accountability', FR: 'Responsabilité', MG: 'Fandraisana andraikitra' },
      desc: { 
        EN: "Owning high-impact outcomes and holding ourselves to standard fiduciary governance and social responsibilities.", 
        FR: "S'approprier les résultats et se conformer aux normes les plus strictes de gouvernance fiduciaire et sociale.", 
        MG: "Fandraisana andraikitra feno amin'ny vokatra sy ny asa soa sosialy mifanaraka amin'ny fitantanana ankapobeny." 
      },
      icon: ShieldCheck
    },
    {
      title: { EN: 'Respect', FR: 'Respect', MG: 'Fanajana' },
      desc: { 
        EN: "Upholding the dignity, diverse perspectives, and potential of our employees, regional partners, and civic communities.", 
        FR: "Valoriser la dignité, la diversité des perspectives et le potentiel de nos collaborateurs, partenaires et communautés.", 
        MG: "Fanekena ny hasina sy ny fomba fijery isan-karazany eo amin'ny mpiasa sy ny mpiara-miombon'antoka." 
      },
      icon: Heart
    }
  ];

  return (
    <div id="about-us-view-wrapper" className="space-y-24 pb-12 relative animate-fade-in">
      <Helmet
        title={language === 'EN' ? 'Corporate Story & Board' : language === 'FR' ? "Histoire de l'Entreprise & Conseil" : 'Tantara sy ny Birao'}
        description={translations.overviewDesc}
        keywords="capital base, group foundation, corporate story, Madagascar infrastructure, Vision Madagascar, Aetheris Group history"
        language={language}
      />
      
      {/* Page Header banner */}
      <section className="relative pt-32 pb-4 overflow-hidden text-center max-w-4xl mx-auto px-4" id="about-intro">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-950/20">
          {language === 'EN' ? 'THE COGNITIVE HOLDING' : language === 'FR' ? 'LE HOLDING COGNITIF' : 'NY HOLDING ARA-TSAINA'}
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-4">
          {language === 'EN' ? 'Shaping Resilient Multi-Sector Platforms' : language === 'FR' ? 'Façonner des Plateformes Multisectorielles Résilientes' : 'Manorina Rafitra Sehatra Maro Mafy sy Maharitra'}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl mx-auto">
          {translations.overviewDesc}
        </p>
      </section>

      {/* Corporate Mission & Vision Split Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" id="mission-vision-section">
        <div className="text-center md:text-left max-w-3xl">
          <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-950/20">
            {language === 'EN' ? 'THE CRITICAL PATH' : language === 'FR' ? 'LA TRAJECTOIRE CRITIQUE' : 'ZOTRA LALAN-TSAINA'}
          </span>
          <h2 className="text-3xl font-black text-white tracking-tight mt-4">
            {translations.visionMissionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Vision - Creating a new Madagascar */}
          <div className="eco-rainbow-border-card eco-rainbow-glow-hover p-8 flex flex-col justify-between h-auto min-h-[300px] relative overflow-hidden group text-left border-0">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Compass size={20} />
              </div>
              <h3 className="text-white font-extrabold text-lg font-sans tracking-tight">
                {translations.visionLabel}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                {translations.visionMissionP1}
              </p>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase mt-6 block">VISION CORE STATEMENT</span>
          </div>

          {/* Card 2: Competitiveness & Progress */}
          <div className="eco-rainbow-border-card eco-rainbow-glow-hover p-8 flex flex-col justify-between h-auto min-h-[300px] relative overflow-hidden group text-left border-0">
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full blur-xl pointer-events-none" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-950/20 border border-teal-500/20 flex items-center justify-center text-teal-400">
                <Zap size={20} />
              </div>
              <h3 className="text-white font-extrabold text-lg font-sans tracking-tight">
                {translations.missionLabel}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                {translations.visionMissionP2}
              </p>
            </div>
            <span className="text-[10px] text-teal-400 font-mono tracking-widest uppercase mt-6 block">CREATIVE COMPETITIVENESS</span>
          </div>

          {/* Card 3: Energy & Expertise */}
          <div className="eco-rainbow-border-card eco-rainbow-glow-hover p-8 flex flex-col justify-between h-auto min-h-[300px] relative overflow-hidden group text-left border-0">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-950/20 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Target size={20} />
              </div>
              <h3 className="text-white font-extrabold text-lg font-sans tracking-tight">
                {translations.excellenceLabel}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                {translations.visionMissionP3}
              </p>
            </div>
            <span className="text-[10px] text-amber-400 font-mono tracking-widest uppercase mt-6 block">OPERATIONAL EXCELLENCE</span>
          </div>
        </div>
      </section>

      {/* Corporate Journey Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="timeline-section">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            {language === 'EN' ? 'Integrated Group Journey' : language === 'FR' ? 'Évolution de la Holding' : 'Zotran’ny Fampandrosoana Iraisana'}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {language === 'EN' ? 'Strategic scaling benchmarks tracing group growth from a boutique asset advisory team to a unified global holdings partner.' : language === 'FR' ? 'Repères de croissance stratégique traçant le développement du groupe d’une équipe de conseil en actifs en un partenaire d’investissement unifié.' : 'Ny dingana lehibe nandalovan’ny vondrona hatramin’ny nanombohana sy ny fampiasam-bola ho an’ny ho avy.'}
          </p>
        </div>

        {/* Timelines grid */}
        <div className="relative border-l border-slate-850 ml-4 md:ml-32 md:space-y-0 space-y-8" id="timeline-track">
          {translatedTimeline.map((evt, idx) => (
            <div key={idx} className="relative pl-8 md:pl-24 pb-8 group text-left" id={`timeline-evt-${idx}`}>
              
              {/* Year badge display on left */}
              <div className="absolute left-[-17px] md:left-[-130px] top-1.5 md:w-28 text-left">
                <span className="px-3 py-1 font-mono text-xs font-black text-emerald-400 bg-slate-900 border border-slate-800 rounded-lg shadow-md group-hover:border-emerald-500 transition-colors">
                  {evt.year}
                </span>
              </div>

              {/* Point dot icon */}
              <div className="absolute left-[-5px] top-2.5 w-2.5 h-2.5 rounded-full bg-emerald-400 group-hover:scale-150 transition-transform shadow-lg shadow-emerald-400/40" />

              <div className="glass card-hover rounded-2xl p-6 max-w-3xl">
                <h4 className="text-white text-base font-bold font-sans">
                  {evt.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mt-1.5 font-light">
                  {evt.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Leadership Preview with CTA link to Full Leadership Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" id="leadership-section">
        <div className="glass rounded-3xl p-8 sm:p-12 text-left relative overflow-hidden shadow-xl border border-slate-900">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <span className="font-mono text-[10px] text-emerald-400 tracking-widest uppercase border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-950/20 inline-block">
                {language === 'EN' ? 'STEWARD ADVISORY' : language === 'FR' ? 'CONSEIL FIDUCIAIRE' : 'FITANTONAN’NY MPIARAHA-MIOMBON’ANTOKA'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                {translations.teamTitle}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                {translations.teamSub}
              </p>
              
              <div className="pt-2 text-left">
                <button
                  onClick={() => {
                    setActiveTab?.('leadership');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl text-xs sm:text-sm tracking-wide transition-all shadow-xl shadow-emerald-600/20 inline-flex items-center space-x-2 active:scale-98 cursor-pointer"
                >
                  <span>
                    {language === 'EN' 
                      ? 'Access Corporate Leadership Portfolios' 
                      : language === 'FR' 
                      ? 'Accéder au Conseil d’Administration' 
                      : 'Hijery ny mombamomba ny Mpitantana'}
                  </span>
                  <Sparkles size={14} className="animate-pulse" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {translatedLeaders.map((lead) => (
                <div 
                  key={lead.id} 
                  onClick={() => {
                    setActiveTab?.('leadership');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-slate-950/65 border border-slate-900 hover:border-emerald-500/30 p-4 rounded-xl text-left cursor-pointer transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-900 border border-white/5 mb-3">
                    <img 
                      src={lead.imageUrl || `https://picsum.photos/seed/${lead.imageSeed}/100/100`} 
                      alt={lead.name}
                      className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h4 className="text-white text-xs font-bold leading-tight font-sans group-hover:text-emerald-400 transition-colors">
                    {lead.name}
                  </h4>
                  <span className="text-[9px] text-slate-500 font-mono tracking-wider block mt-1 uppercase truncate">
                    {lead.role}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-8 border-t border-slate-900" id="values-section">
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="font-mono text-xs text-teal-400 tracking-widest uppercase border border-teal-500/30 px-3 py-1 rounded-full bg-teal-950/20">
            {language === 'EN' ? 'GUIDING ETHICS' : language === 'FR' ? 'ÉTHIQUE DIRECTRICE' : 'SOATOAVINA MITANTANA'}
          </span>
          <h2 className="text-3xl font-black text-white tracking-tight">
            {translations.valTitle}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-light">
            {translations.valSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valuesEx.map((val, idx) => (
            <div 
              key={idx} 
              className="glass card-hover rounded-2xl p-8 text-left border border-white/5 hover:border-emerald-500/10 transition-all duration-300"
              id={`corporate-value-${idx}`}
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 mb-6">
                <val.icon size={22} />
              </div>
              
              <h3 className="text-white text-base font-extrabold tracking-tight mb-3 font-sans">
                {val.title[language]}
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                {val.desc[language]}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
