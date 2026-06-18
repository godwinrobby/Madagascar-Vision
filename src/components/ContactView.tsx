import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from './Helmet';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Globe2,
  CalendarDays,
  Sparkles,
  ChevronDown,
  HelpCircle
} from 'lucide-react';

interface ContactViewProps {
  language: 'EN' | 'FR' | 'MG';
}

interface OfficeSpec {
  id: string;
  city: { EN: string; FR: string; MG: string };
  role: { EN: string; FR: string; MG: string };
  address: string;
  tel: string;
  email: string;
  hours: { EN: string; FR: string; MG: string };
  timezone: string;
  coords: { x: string; y: string };
}

export function ContactView({ language }: ContactViewProps) {
  const translations = {
    EN: {
      title: 'Global Administration & Contact',
      sub: 'Establish verified touchpoints. Explore direct channels for sovereign mandates, multi-sector partnerships, and institutional resources.',
      mapTitle: 'Operational Location Matrix',
      mapSub: 'Real-time coordinated corporate coordinates and physical hubs.',
      formTitle: 'Institutional Request Portal',
      formSub: 'Submit partner advisory briefs, developmental infrastructure requests, or capital allocations securely.',
      nameLabel: 'Authorized Representative Name',
      emailLabel: 'Official Corporate Email Address',
      typeLabel: 'Portfolio Interest Sector',
      msgLabel: 'Confidential Inquiry Specifications',
      submitBtn: 'Securely Dispatch Request',
      formSuccessHeader: 'REQUEST REGISTERED',
      formSuccessText: 'Your administrative request has been securely archived and assigned to our regional cabinet panel. Feedback with verified responses will be delivered within our standard 48-hour SLA.',
      protocolTitle: 'Verification Protocol',
      protocolDesc: 'To protect sovereign capital allocations and corporate integrity, all transactions and data points undergo strict security routing.',
      protocolStep1: 'Encrypted administrative transit',
      protocolStep2: 'Direct advisory panel review',
      protocolStep3: 'Guaranteed 48-hour SLA response',
      activeStatus: 'Active Operations',
      faqTitle: 'Fiduciary Support & FAQ',
      faqSub: 'Expedite inquiries. Explore critical directives regarding fiduciary protocols, sustainability standards, and capital clearance requests.'
    },
    FR: {
      title: 'Administration Globale & Contacts',
      sub: 'Établissez des points de contact vérifiés. Explorez les canaux directs pour les mandats souverains, les partenariats multisectoriels et les ressources institutionnelles.',
      mapTitle: 'Matrice de Localisation Opérationnelle',
      mapSub: 'Coordonnées d’entreprise en temps réel et centres physiques.',
      formTitle: 'Portail des Demandes Institutionnelles',
      formSub: 'Soumettez en toute sécurité des dossiers de partenariat, des demandes d’infrastructures de développement ou des allocations de capitaux.',
      nameLabel: 'Nom du Représentant Autorisé',
      emailLabel: 'Adresse E-mail Professionnelle Officielle',
      typeLabel: 'Secteur d’Intérêt du Portefeuille',
      msgLabel: 'Spécifications de la Demande Confidentielle',
      submitBtn: 'Envoyer la Demande en Toute Sécurité',
      formSuccessHeader: 'DEMANDE ENREGISTRÉE',
      formSuccessText: 'Votre demande administrative a été archivée avec sécurité et assignée à notre cellule régionale. Un retour d’information vérifié vous sera transmis dans notre délai de traitement standard de 48 heures.',
      protocolTitle: 'Protocole de Vérification',
      protocolDesc: 'Afin de préserver l’attribution des fonds souverains et l’intégrité corporative, chaque transmission et point de données suit un protocole de sécurité strict.',
      protocolStep1: 'Transit administratif entièrement crypté',
      protocolStep2: 'Examen direct par l’advisory board',
      protocolStep3: 'Réponse garantie dans un délai de 48 heures',
      activeStatus: 'Opérations Actives',
      faqTitle: 'Support Fiduciaire & FAQ',
      faqSub: 'Accélérez vos demandes. Explorez les directives essentielles concernant les protocoles fiduciaires, les normes de durabilité et le dédouanement des capitaux.'
    },
    MG: {
      title: 'Fitantanana sy Fifandraisana Manerantany',
      sub: 'Mifandraisa mivantana amin’ny tompon’andraikitra. Fantaro ireo lalana ho an’ny tetikasa goavana, ny fiaraha-miasa marolafy, ary ny fampiasam-bola maharitra.',
      mapTitle: 'Tabilao misy ny Toerana Misy Anay',
      mapSub: 'Sari-tany mampiseho ireo foibe sy ny fandrindrana ny asa rehetra.',
      formTitle: 'Sehatra Fandefasana Fangatahana',
      formSub: 'Alefaso am-pilaminana ny antontan-taratasy momba ny fiaraha-miasa, ny fotodrafitrasa ilaina, na ny fampiasam-bola tianao hatao.',
      nameLabel: 'Anaran’ny Mpisolo Tena nahazo Lalana',
      emailLabel: 'Mailaka Ofisialy',
      typeLabel: 'Seha-pihariana tiana hiresahana',
      msgLabel: 'Andinindininy momba ny Fangatahanao',
      submitBtn: 'Handefa ny Fangatahana any amin’ny Vaomiera',
      formSuccessHeader: 'VOARAY NY FANGATAHANA',
      formSuccessText: 'Voasoratra soa aman-tsara ao amin’ny tahiry ny fangatahanao ary efa nampitaina amin’ny komity misahana ny faritra. Handray valiny azo antoka ianao ato anatin’ny 48 ora.',
      protocolTitle: 'Fepeta Fiarovana',
      protocolDesc: 'Mba hiarovana ny fampiasam-bola sy ny fahamarinan’ny asa, ny fifandraisana rehetra dia mandalo amin’ny rafitra sivana avo lenta.',
      protocolStep1: 'Fampitana miafina sy azo antoka',
      protocolStep2: 'Famerenana mivantana ataon’ny komity mpanolotsaina',
      protocolStep3: 'Valiny azo antoka ao anatin’ny 48 ora',
      activeStatus: 'Miasa Ankehitriny',
      faqTitle: 'Fanontaniana Mahazatra (FAQ)',
      faqSub: 'Hamafiso ny fikarohanao. Vakio eto ny mikasika ny fepetra ara-dalàna, ny fampiasam-bola, ary ny fiarovana ny fotodrafitrasa.'
    }
  }[language];

  const offices: OfficeSpec[] = [
    {
      id: 'antananarivo',
      city: { EN: 'Antananarivo (Corporate HQ)', FR: 'Antananarivo (Siège Social)', MG: 'Antananarivo (Foibe Be)' },
      role: { EN: 'Operations & Group Management', FR: 'Opérations & Gestion du Groupe', MG: 'Foibe Fandrindrana ny Vondrona' },
      address: 'Explorer Business Park, BP 12 128 - Ankorondrano, 101 Antananarivo, Madagascar',
      tel: '+261 34 14 737 80 / +261 33 15 737 80',
      email: 'contact@visionmadagascar.com',
      hours: { EN: '08:00 - 17:00 EAT', FR: '08:00 - 17:00 EAT', MG: '08:00 - 17:00 EAT' },
      timezone: 'Indian/Antananarivo',
      coords: { x: '52%', y: '55%' }
    },
    {
      id: 'toamasina',
      city: { EN: 'Toamasina (Logistics Hub)', FR: 'Toamasina (Pôle Logistique)', MG: 'Toamasina (Foibe Logistika)' },
      role: { EN: 'Port Operations & Customs Orchestration', FR: 'Opérations Portuaires & Douanes', MG: 'Karakara Seranana sy Logistika' },
      address: "Boulevard de l'Union, Zone Portuaire, 501 Toamasina, Madagascar",
      tel: '+261 34 14 737 82',
      email: 'toamasina.port@visionmadagascar.com',
      hours: { EN: '07:30 - 16:30 EAT', FR: '07:30 - 16:30 EAT', MG: '07:30 - 16:30 EAT' },
      timezone: 'Indian/Antananarivo',
      coords: { x: '62%', y: '50%' }
    },
    {
      id: 'antsiranana',
      city: { EN: 'Antsiranana (Energy & SAVA)', FR: 'Antsiranana (Énergie & SAVA)', MG: 'Antsiranana (Hery sy SAVA)' },
      role: { EN: 'Renewable Hydro & Sustainable Forestry', FR: 'Secteur Hydro-Énergétique & SAVA', MG: 'Angovo Azo Avaozina' },
      address: 'Rue Colbert, Quartier Militaire, 201 Antsiranana, Madagascar',
      tel: '+261 34 14 737 84',
      email: 'antsiranana.energy@visionmadagascar.com',
      hours: { EN: '08:00 - 17:00 EAT', FR: '08:00 - 17:00 EAT', MG: '08:00 - 17:00 EAT' },
      timezone: 'Indian/Antananarivo',
      coords: { x: '58%', y: '18%' }
    },
    {
      id: 'tolagnaro',
      city: { EN: 'Tolagnaro (Southern Minerals)', FR: 'Tolagnaro (Minéraux du Sud)', MG: "Tolagnaro (Harena Ankibon'ny Tany)" },
      role: { EN: 'Eco-responsible Mining & Solar Grid', FR: 'Exploitation Éco-responsable & Solaire', MG: 'Harena sy Amboara Solara' },
      address: 'Boulevard de la Corniche, Libanona Beach, 614 Tolagnaro, Madagascar',
      tel: '+261 34 14 737 86',
      email: 'tolagnaro.south@visionmadagascar.com',
      hours: { EN: '08:00 - 17:00 EAT', FR: '08:00 - 17:00 EAT', MG: '08:00 - 17:00 EAT' },
      timezone: 'Indian/Antananarivo',
      coords: { x: '44%', y: '82%' }
    },
    {
      id: 'mahajanga',
      city: { EN: 'Mahajanga (Agritech & Infra)', FR: 'Mahajanga (Agro-industrie & Infra)', MG: 'Mahajanga (Fambolena sy Fotodrafitrasa)' },
      role: { EN: 'Farming Ecosystems & Organic Products', FR: 'Agriculture Bio, Miel & Canne à Sucre', MG: 'Fambolena sy Fiompiana Manara-penitra' },
      address: 'Avenue de la République, Quartier Résidentiel, 401 Mahajanga, Madagascar',
      tel: '+261 34 14 737 88',
      email: 'mahajanga.agri@visionmadagascar.com',
      hours: { EN: '07:30 - 16:30 EAT', FR: '07:30 - 16:30 EAT', MG: '07:30 - 16:30 EAT' },
      timezone: 'Indian/Antananarivo',
      coords: { x: '42%', y: '40%' }
    }
  ];

  const [activeOffice, setActiveOffice] = useState<OfficeSpec>(offices[0]);
  const [fullName, setFullName] = useState('');
  const [compEmail, setCompEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('');
  const [message, setMessage] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formErr, setFormErr] = useState('');

  const [clocks, setClocks] = useState<{ [key: string]: string }>({});
  
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  const faqs = [
    {
      id: 'foreign-capital',
      question: {
        EN: 'How does Vision Madagascar ensure transparency in foreign capital allocations?',
        FR: 'Comment Vision Madagascar garantit-elle la transparence dans l’allocation des capitaux étrangers ?',
        MG: 'Ahoana no iantohan’ny Vision Madagascar ny fangaraharana amin’ny fampiasam-bola avy any ivelany?'
      },
      answer: {
        EN: 'All multinational capital flows and ESG assets are certified under strict Swiss compliance frameworks. Operations are subjected to multi-tiered fiduciary oversight, with full transaction ledgers securely recorded using cryptography-based verification protocols.',
        FR: 'Tous les flux de capitaux multinationaux et actifs ESG sont certifiés selon des cadres de conformité suisses rigoureux. Les opérations font l’objet d’une surveillance fiduciaire à plusieurs niveaux, avec des registres de transactions entièrement sécurisés.',
        MG: 'Ny fitantanana ny vola rehetra mivoaka sy miditra ary ny tetikasa ESG dia voamarina araka ny fenitra soisa hentitra. Misy ny fanaraha-maso akaiky isaky ny ambaratonga, miaraka amin’ny fitanana an-tsoratra an-tsipiriany amin’ny alalan’ny rafitra azo antoka.'
      }
    },
    {
      id: 'joint-ventures',
      question: {
        EN: 'Who holds authorization to negotiate or sign corporate joint venture agreements?',
        FR: 'Qui détient l’autorité pour négocier ou signer des accords de joint-venture d’entreprise ?',
        MG: 'Iza no manana fahefana hifampiraharaha na hanao sonia fifanarahana fiaraha-miasa?'
      },
      answer: {
        EN: 'Only designated Managing Directors and board members holding certified proxy credentials issued by the Vision Madagascar Executive Panel are empowered to execute legally binding agreements and capital allocations.',
        FR: 'Seuls les directeurs généraux désignés et les membres du conseil d\'administration munis de procurations certifiées émise par le comité exécutif de Vision Madagascar sont autorisés à signer des engagements contractuels.',
        MG: 'Ireo Tale Mpanatanteraka sy mpikambana ao amin’ny Birao manana fahazoan-dalana ofisialy navoakan’ny Vaomieran’ny Vision Madagascar ihany no manana fahefana ara-dalàna hanao fifanarahana.'
      }
    },
    {
      id: 'infrastructure-eng',
      question: {
        EN: 'Can public entities submit unsolicited bids for sovereign developmental infrastructure?',
        FR: 'Les entités publiques peuvent-elles soumettre des offres spontanées pour des infrastructures de développement ?',
        MG: 'Afaka mandefa soso-kevitra momba ny fotodrafitrasa ve ny orinasam-panjakana na fikambanana?'
      },
      answer: {
        EN: 'Yes, we welcome sovereign collaboration. Qualified agencies can submit initial structural bids, feasibility analyses, or capital requirements through our Institutional Request Portal for regional cabinet screening.',
        FR: 'Oui, nous encourageons la collaboration publique. Les agences qualifiées peuvent soumettre des propositions d\'infrastructures, des analyses de faisabilité ou des exigences de capital via notre portail des demandes institutionnelles.',
        MG: 'Eny, mandray tsara ny fiaraha-miasa ofisialy izahay. Ny rantsana voasoratra ara-panjakana dia afaka mandefa soso-kevitra, fandinihana ny tetikasa, na ny teti-bola ilaina amin\'ny alalan\'ny sehatra fandefasana fangatahanay.'
      }
    },
    {
      id: 'esg-sustainability',
      question: {
        EN: 'What framework guides the group’s decarbonization and offset standards?',
        FR: 'Quel cadre guide les normes de décarbonation et de compensation du groupe ?',
        MG: 'Inona ny rafitra mifehy ny fenitra fampihenana ny fahalotoana eo amin’ny orinasa?'
      },
      answer: {
        EN: 'Our ESG Accountability criteria are governed by a Net-Zero 2030 directive. Over 85% of our portfolio energy requirements are satisfied through offshore sovereign wind arrays, municipal micro-grids, and circular economy waste systems.',
        FR: 'Nos critères de responsabilité ESG sont régis par une directive stricte Net-Zero d\'ici 2030. Plus de 85 % de nos besoins en énergie sont couverts par des parcs éoliens offshore, des micro-réseaux municipaux et des systèmes circulaires.',
        MG: 'Ny fitantanana omba ny ESG dia miorina amin\'ny fitsipiky ny Net-Zero 2030 hampihenana ny karbônina. Ny 85% mahery amin\'ny angovo ampiasainay dia azo avy amin’ny masoandro, rivotra, ary fampiasana indray ny fako.'
      }
    },
    {
      id: 'physical-security',
      question: {
        EN: 'Is an active security clearance pass required for physical hub consultations?',
        FR: 'Une habilitation de sécurité active est-elle requise pour les consultations en présentiel ?',
        MG: 'Mila karatra fiarovana manokana ve ny fahatongavana mivantana aty amin\'ireo birao?'
      },
      answer: {
        EN: 'Yes. Due to sensitive MedTech formulas, cloud patents, and fiduciary assets, physical entry into any Vision Madagascar facility requires a pre-scheduled directive appointment accompanied by active regional credentials.',
        FR: 'Oui. En raison de la confidentialité de nos brevets technologiques, formules cliniques et actifs fiduciaires, l’accès physique requiert un rendez-vous préalablement approuvé assorti d’une accréditation régionale active.',
        MG: 'Eny. Noho ny fiarovana ny teknolojia vao hita, ny patanty momba ny fitsaboana, ary ny antontan-taratasy sarotra, dia mila fotoana mialoha voamarina sy karatra fahazoan-dalana vao afaka miditra mivantana ao amin’ny trano fiasana.'
      }
    }
  ];

  useEffect(() => {
    const updateTimes = () => {
      const times: { [key: string]: string } = {};
      offices.forEach(off => {
        try {
          times[off.id] = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: off.timezone
          }).format(new Date());
        } catch {
          times[off.id] = '12:00';
        }
      });
      setClocks(times);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormErr('');
    setFormSuccess(false);

    if (!fullName.trim() || !compEmail.trim() || !inquiryType || !message.trim()) {
      setFormErr(
        language === 'EN' 
          ? 'Please supply all parameters in the form before dispatch.' 
          : language === 'FR' 
            ? 'Veuillez renseigner toutes les informations requises.' 
            : 'Fenoy avokoa ny banga rehetra amin’ny takelaka.'
      );
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormSuccess(true);
      setFullName('');
      setCompEmail('');
      setInquiryType('');
      setMessage('');
    }, 1800);
  };

  return (
    <div id="contact-view-wrapper" className="space-y-16 pb-20 relative animate-fade-in text-slate-100 font-sans">
      <Helmet
        title={language === 'EN' ? 'Global Offices & Verified Inquiries' : language === 'FR' ? 'Bureaux Globaux & Demandes Validées' : 'Biraomanerantany sy Fifandraisana'}
        description="Connect with Vision Madagascar and Aetheris Group. Submit secure partnerships, discover international hubs, and contact institutional board members with sub-second feedback."
        keywords="contact us, offices, Antananarivo, Paris, Singapore, customer support, Vision Madagascar contact, Aetheris Group inquiry"
        language={language}
      />
      
      {/* Absolute Decorative Grid Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(31,138,90,0.06),transparent_45%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(219,91,26,0.04),transparent_50%)] pointer-events-none" />

      {/* 1. Header Hero section */}
      <section className="relative pt-32 pb-4 overflow-hidden text-center max-w-4xl mx-auto px-4" id="contact-intro">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-slate-800 bg-slate-900/60 text-[10px] font-mono tracking-widest uppercase text-emerald-400 select-none animate-pulse-subtle">
          <Globe2 size={12} className="text-emerald-500 animate-spin" style={{ animationDuration: '6s' }} />
          <span>{language === 'EN' ? 'Global Desk Directives' : language === 'FR' ? 'Directives de Contact' : 'Fifandraisana Ofisialy'}</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-5 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-350">
          {translations.title}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl mx-auto font-light">
          {translations.sub}
        </p>
      </section>

      {/* 2. Unified Location & Interactive Blueprint Grid Map Panel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="modern-map-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Block (Lg: 5 columns): Office selector sidebar with rich content details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4" id="office-selector-sidebar">
            <div className="space-y-3.5 text-left">
              <span className="text-[10px] uppercase tracking-widest font-mono text-slate-500 font-bold block bg-transparent">
                {language === 'EN' ? 'Corporate Administrations' : language === 'FR' ? 'Administrations Corporatives' : 'Sokajy fitantanana'}
              </span>
              
              <div className="space-y-3">
                {offices.map((off) => {
                  const active = activeOffice.id === off.id;
                  return (
                    <button
                      key={off.id}
                      onClick={() => setActiveOffice(off)}
                      className={`w-full text-left p-4.5 rounded-2xl transition-all duration-300 border block focus:outline-none cursor-pointer relative ${
                        active 
                          ? 'bg-gradient-to-br from-slate-900 to-slate-950 border-orange-500/30 shadow-xl shadow-orange-950/20' 
                          : 'bg-slate-950/40 border-slate-900/50 hover:bg-slate-900/40 hover:border-slate-800'
                      }`}
                      id={`office-sidebar-selector-${off.id}`}
                    >
                      {active && (
                        <div className="absolute left-0 top-4 bottom-4 w-1 premium-gradient-active rounded-r" />
                      )}

                      <div className="flex items-start justify-between space-x-3">
                        <div className="space-y-1">
                          <span className="text-xs font-bold text-white block font-sans">
                            {off.city[language]}
                          </span>
                          <span className="text-[10px] text-slate-400 block font-light leading-snug font-sans">
                            {off.role[language]}
                          </span>
                        </div>
                        
                        <div className="text-right shrink-0">
                          <div className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded-md flex items-center space-x-1.5 justify-end">
                            <Clock size={10} />
                            <span>{clocks[off.id] || '00:00'}</span>
                          </div>
                          <span className="text-[8px] font-mono uppercase tracking-wide text-slate-500 block mt-1">
                            {off.timezone.split('/').pop()}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Display specifications display for the active selected office */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOffice.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-6 rounded-2xl bg-slate-950/80 border border-slate-900 text-left relative overflow-hidden"
                id="active-office-details-box"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />

                <div className="space-y-4">
                  <div className="flex items-center space-x-2 pb-2.5 border-b border-slate-900">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] font-mono tracking-widest text-[#9cb933] uppercase font-bold">
                      {translations.activeStatus}
                    </span>
                  </div>

                  <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                    <div className="flex items-start space-x-3">
                      <MapPin size={16} className="text-orange-500 mt-0.5 shrink-0" />
                      <span className="font-light leading-relaxed">{activeOffice.address}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone size={14} className="text-slate-500 shrink-0" />
                      <a href={`tel:${activeOffice.tel}`} className="font-mono text-slate-300 hover:text-orange-400 transition-colors">
                        {activeOffice.tel}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail size={14} className="text-slate-500 shrink-0" />
                      <a href={`mailto:${activeOffice.email}`} className="font-mono text-slate-300 hover:text-emerald-400 transition-colors truncate">
                        {activeOffice.email}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3 pt-1">
                      <Clock size={14} className="text-slate-500 shrink-0 border-none" />
                      <span className="font-mono text-xs text-slate-400">
                        {activeOffice.hours[language]}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Block (Lg: 7 columns): Sleek blueprint coordinate radar grid map */}
          <div className="lg:col-span-12 xl:col-span-7 bg-slate-950 border border-slate-900 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between" id="blueprint-radar-frame">
            
            {/* Engineering Grid Line Decoration */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-8 opacity-[0.07] pointer-events-none">
              {Array.from({ length: 96 }).map((_, i) => (
                <div key={i} className="border-t border-l border-slate-500" />
              ))}
            </div>

            <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-slate-900 pb-3 z-10">
              <div className="space-y-0.5 text-left font-sans">
                <h4 className="text-white font-mono text-xs tracking-wider uppercase flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block" />
                  <span>{translations.mapTitle}</span>
                </h4>
                <p className="text-[10px] text-slate-500 font-mono font-light leading-none">
                  * {translations.mapSub}
                </p>
              </div>
              <span className="text-[9px] font-mono text-slate-600 bg-slate-900/60 border border-slate-800 px-2 py-0.5 rounded-sm uppercase tracking-widest hidden sm:inline">
                SCALE 1:350,000,000
              </span>
            </div>

            {/* Radar Simulation Board Stage */}
            <div className="w-full h-[280px] sm:h-[350px] relative border border-slate-905/80 bg-slate-900/15 rounded-2xl overflow-hidden mt-4 flex items-center justify-center select-none" id="radar-blueprint-board">
              
              {/* Radial sonar line animations */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[12%] h-[12%] rounded-full border border-slate-800" />
                <div className="w-[30%] h-[30%] rounded-full border border-slate-800" />
                <div className="w-[55%] h-[55%] rounded-full border border-slate-850" />
                <div className="w-[80%] h-[80%] rounded-full border border-slate-900" />
                
                <div className="absolute inset-x-0 h-px bg-slate-909/50" />
                <div className="absolute inset-y-0 w-px bg-slate-909/50" />
                
                <div className="absolute w-[240px] h-[240px] rounded-full border border-emerald-500/10 animate-ping opacity-75" />
              </div>

              {/* Aesthetic static background Madagascar region and oceanic names mapped precisely */}
              <div className="absolute top-[14%] left-[54%] text-[9px] font-mono text-emerald-800/60 tracking-widest leading-none font-bold">DIANA / SAVA (NORTH)</div>
              <div className="absolute top-[38%] left-[14%] text-[9px] font-mono text-slate-800/60 tracking-widest leading-none font-bold">MOZAMBIQUE CHANNEL</div>
              <div className="absolute top-[40%] left-[46%] text-[9px] font-mono text-emerald-850/60 tracking-widest leading-none font-bold">BOENY REGION</div>
              <div className="absolute top-[52%] left-[54%] text-[9px] font-mono text-emerald-900/65 tracking-widest leading-none font-bold">ANALAMANGA (HQ) & ATSINANANA</div>
              <div className="absolute top-[82%] left-[45%] text-[9px] font-mono text-emerald-800/65 tracking-widest leading-none font-bold">ANOSY (SOUTH)</div>
              <div className="absolute top-[68%] left-[72%] text-[9px] font-mono text-slate-800/60 tracking-widest leading-none font-bold">INDIAN OCEAN</div>
              
              {/* Connection vector lines linking back to current selected index */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <g className="opacity-40">
                  {offices.map((off) => {
                    if (off.id === activeOffice.id) return null;
                    return (
                      <line
                        key={`line-${off.id}`}
                        x1={activeOffice.coords.x}
                        y1={activeOffice.coords.y}
                        x2={off.coords.x}
                        y2={off.coords.y}
                        stroke="#1f8a5a"
                        strokeWidth="1"
                        strokeDasharray="4,4"
                        className="animate-pulse"
                      />
                    );
                  })}
                </g>
              </svg>

              {/* Coordinated interactive radar ping points */}
              {offices.map((off) => {
                const active = activeOffice.id === off.id;
                return (
                  <button
                    key={off.id}
                    onClick={() => setActiveOffice(off)}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none z-10 transition-transform hover:scale-110"
                    style={{ left: off.coords.x, top: off.coords.y }}
                    id={`modern-off-pin-${off.id}`}
                  >
                    <span className="relative flex h-7 w-7 items-center justify-center">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-40 ${
                        active ? 'bg-orange-500' : 'bg-slate-750'
                      }`} />
                      <span className={`relative inline-flex rounded-full h-3 w-3 shadow-2xl border ${
                        active 
                          ? 'bg-orange-500 border-white ring-4 ring-orange-500/20' 
                          : 'bg-slate-700 border-slate-500 hover:bg-slate-500'
                      }`} />
                    </span>
                    
                    <div className={`absolute top-6 left-1/2 transform -translate-x-1/2 bg-slate-950 border text-[8px] font-mono px-2 py-0.5 rounded tracking-widest uppercase transition-all whitespace-nowrap ${
                      active 
                        ? 'text-orange-400 font-bold border-orange-500/30 shadow-lg' 
                        : 'text-slate-500 border-slate-900'
                    }`}>
                      {off.id}
                    </div>
                  </button>
                );
              })}

            </div>

            <div className="mt-4 pt-3.5 border-t border-slate-900 flex flex-wrap gap-4 items-center justify-between text-[9px] font-mono text-slate-600 z-10">
              <span className="flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                <span>ALL DESKS ACTIVE</span>
              </span>
              <span>GRID-REF COORD: 14.23.009 • 87.11.23</span>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Secure Consultation Form & Verification SLA Panel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contact-portal-grid">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Block (Lg: 7 columns): Beautiful Request Console */}
          <div className="lg:col-span-12 xl:col-span-7 bg-slate-950 border border-slate-900 rounded-3xl p-6 sm:p-8 text-left relative overflow-hidden shadow-2xl" id="request-console-form-container">
            <div className="absolute top-0 left-0 w-full h-1 premium-gradient-active" />
            
            <div className="space-y-1.5 mb-6 text-left">
              <h3 className="text-white font-extrabold text-xl sm:text-2xl tracking-tight flex items-center space-x-2">
                <Sparkles size={18} className="text-orange-400 shrink-0 animate-pulse" />
                <span>{translations.formTitle}</span>
              </h3>
              <p className="text-slate-400 text-xs font-light leading-relaxed">
                {translations.formSub}
              </p>
            </div>

            <form onSubmit={handleInquirySubmit} className="space-y-5" id="modern-consultation-form">
              
              <div className="space-y-1.5 block">
                <label className="block text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase">
                  {translations.nameLabel}
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Helena Elizabeth Carter"
                  className="w-full bg-slate-900/60 border border-slate-800 focus:border-orange-500/55 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-650 outline-none transition-all focus:bg-slate-900"
                  id="form-input-representative"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 block">
                  <label className="block text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase">
                    {translations.emailLabel}
                  </label>
                  <input
                    type="email"
                    value={compEmail}
                    onChange={(e) => setCompEmail(e.target.value)}
                    placeholder="name@organization.com"
                    className="w-full bg-slate-900/60 border border-slate-800 focus:border-orange-500/55 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-650 outline-none transition-all focus:bg-slate-900"
                    id="form-input-corporate-email"
                  />
                </div>

                <div className="space-y-1.5 block">
                  <label className="block text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase">
                    {translations.typeLabel}
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full bg-slate-900/60 border border-slate-800 focus:border-orange-500/55 rounded-xl px-4 py-3 text-xs sm:text-sm text-white outline-none transition-all focus:bg-slate-900"
                    id="form-select-sector"
                  >
                    <option value="" className="bg-slate-950 text-slate-400">
                      {language === 'EN' ? '-- Select Sector Realm --' : language === 'FR' ? '-- Choisir un secteur --' : '-- Safidio ny Sehatra --'}
                    </option>
                    <option value="healthcare" className="bg-slate-950 text-white">Healthcare Network & Diagnostics</option>
                    <option value="tech" className="bg-slate-950 text-white">Cognitive Enterprise AI Solutions</option>
                    <option value="energy" className="bg-slate-950 text-white">Renewable Winds & Micro-Grids</option>
                    <option value="smart-cities" className="bg-slate-950 text-white">Urban Real Estate & Smart Cities</option>
                    <option value="logistics" className="bg-slate-950 text-white">Freight Logistics cold-chain systems</option>
                    <option value="advisory" className="bg-slate-950 text-white">Strategic advisory</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5 block">
                <label className="block text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase">
                  {translations.msgLabel}
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Submit details regarding investment coordinates, partnership proposals, or project criteria..."
                  className="w-full bg-slate-900/60 border border-slate-800 focus:border-orange-500/55 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-650 outline-none transition-all focus:bg-slate-900 resize-none"
                  id="form-textarea-specifications"
                />
              </div>

              {formSuccess && (
                <div className="p-4 rounded-2xl bg-emerald-950/35 border border-emerald-500/20 space-y-2 animate-fade-in text-left">
                  <div className="flex items-center space-x-2 text-emerald-400">
                    <CheckCircle2 size={16} className="shrink-0" />
                    <span className="font-mono text-xs uppercase font-extrabold tracking-wider">{translations.formSuccessHeader}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {translations.formSuccessText}
                  </p>
                </div>
              )}

              {formErr && (
                <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/20 text-xs text-red-350 flex items-center space-x-2 text-left animate-shake">
                  <AlertCircle size={15} className="text-red-400 shrink-0" />
                  <span>{formErr}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 premium-gradient hover:opacity-90 active:scale-99 text-white font-extrabold rounded-xl text-xs uppercase tracking-widest transition-all shadow-xl shadow-orange-950/20 duration-300 flex items-center justify-center space-x-2.5 disabled:opacity-50 cursor-pointer"
                id="form-submit-trigger"
              >
                {submitting ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={13} />
                    <span>{translations.submitBtn}</span>
                  </>
                )}
              </button>

            </form>
          </div>

          {/* Right Block (Lg: 5 columns): Secure Verification SLA & Fiduciary Trust details */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-4 font-sans" id="fiduciary-commitment-panel">
            <div className="glass rounded-3xl p-6 sm:p-8 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#1f8a5a]/5 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4">
                <div className="p-3 rounded-2xl bg-[#1f8a5a]/10 border border-[#1f8a5a]/25 text-emerald-400 w-12 h-12 flex items-center justify-center">
                  <ShieldCheck size={24} />
                </div>

                <div className="space-y-1 block">
                  <h4 className="text-white font-bold text-base tracking-tight">
                    {translations.protocolTitle}
                  </h4>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">
                    {translations.protocolDesc}
                  </p>
                </div>

                {/* Steps mapping with modern timeline lines */}
                <div className="space-y-4 pt-3 relative" id="commitment-steps">
                  <div className="absolute left-3 top-4 bottom-4 w-px bg-slate-900" />

                  <div className="flex items-start space-x-4 relative">
                    <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400 flex items-center justify-center shrink-0 z-10">
                      01
                    </div>
                    <div className="space-y-0.5 pt-0.5 text-left">
                      <span className="text-xs font-medium text-white block">
                        {translations.protocolStep1}
                      </span>
                      <span className="text-[10px] text-slate-505 font-mono block uppercase">
                        AES-256 TRANSIT
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 relative">
                    <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400 flex items-center justify-center shrink-0 z-10">
                      02
                    </div>
                    <div className="space-y-0.5 pt-0.5 text-left">
                      <span className="text-xs font-medium text-white block">
                        {translations.protocolStep2}
                      </span>
                      <span className="text-[10px] text-slate-505 font-mono block uppercase">
                        DIRECT ROUTED CABINET
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 relative">
                    <div className="w-6 h-6 rounded-full bg-[#184f37]/30 border border-[#1f8a5a]/40 text-[10px] font-mono text-emerald-400 flex items-center justify-center shrink-0 z-10 font-bold">
                      03
                    </div>
                    <div className="space-y-0.5 pt-0.5 text-left">
                      <span className="text-xs font-medium text-white block">
                        {translations.protocolStep3}
                      </span>
                      <span className="text-[10px] font-mono block uppercase font-bold text-emerald-450">
                        GUARANTEED SLA
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Consultation hours assistance badge */}
            <div className="p-5 rounded-2xl bg-slate-950/40 border border-slate-900/50 text-left flex items-start space-x-3.5">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-850 text-slate-400 shrink-0">
                <CalendarDays size={16} />
              </div>
              <div className="space-y-1 block">
                <span className="text-xs font-bold text-white block">
                  {language === 'EN' ? 'Institutional Schedules' : language === 'FR' ? 'Horaires Institutionnels' : 'Ora fiasana ofisialy'}
                </span>
                <span className="text-[11px] text-slate-400 block font-light leading-relaxed">
                  {language === 'EN' 
                    ? 'Our regional directorates facilitate physical meetings scheduled with active security clearances, weekdays during central local time zones.' 
                    : language === 'FR' 
                      ? 'Nos directions régionales facilitent les réunions physiques programmées avec habilitation de sécurité active de l’entreprise.' 
                      : 'Ny biraonay dia mandray anao amin’ny fomba ofisialy mandritra ny andro fiasana rehefa misy fandaharam-potoana ofisialy.'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Collapsible FAQ Accordion Component */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6" id="faq-section">
        <div className="bg-slate-950 border border-slate-900 rounded-3xl p-6 sm:p-8 text-left relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-orange-500 to-emerald-400" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* FAQ Header */}
          <div className="space-y-2 mb-8 text-left">
            <span className="text-[10px] uppercase tracking-widest font-mono text-emerald-400 font-bold block bg-transparent">
              {language === 'EN' ? 'REDUCE TICKET VOLUMES' : language === 'FR' ? 'RÉDUIRE LE VOLUME DE DEMANDES' : 'FAMPITANANA HAINGANA'}
            </span>
            <h3 className="text-white font-extrabold text-xl sm:text-2xl tracking-tight flex items-center space-x-2.5">
              <HelpCircle size={20} className="text-emerald-500 shrink-0" />
              <span>{translations.faqTitle}</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              {translations.faqSub}
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3.5" id="faq-accordion-group">
            {faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-slate-900/40 border-emerald-500/30' 
                      : 'bg-slate-950/50 border-slate-900 hover:border-slate-800'
                  }`}
                  id={`faq-item-container-${faq.id}`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-4.5 sm:p-5 flex items-center justify-between space-x-4 focus:outline-none cursor-pointer"
                    id={`faq-toggle-btn-${faq.id}`}
                  >
                    <span className="text-xs sm:text-sm font-semibold text-slate-100 hover:text-white transition-colors">
                      {faq.question[language]}
                    </span>
                    <span className={`p-1.5 rounded-lg bg-slate-900 border border-slate-850 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 border-emerald-500/20 text-emerald-400' : 'text-slate-500'
                    }`}>
                      <ChevronDown size={14} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-4.5 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-400 font-light leading-relaxed border-t border-slate-900/60 pt-4 bg-slate-950/30">
                          {faq.answer[language]}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Global Support Hotlines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-slate-650 font-mono border-t border-slate-900" id="contact-supports">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px]">
          <span>VERIFIED ENCRYPTED CONTROLS</span>
          <div className="flex justify-center space-x-3 text-[11px]">
            <a href="https://web.facebook.com/VisionMadagascar" target="_blank" rel="noreferrer" className="text-slate-450 hover:text-emerald-400 hover:underline transition-colors">Facebook</a>
            <span className="text-slate-800">•</span>
            <a href="https://www.linkedin.com/in/vision-madagascar-49a62a214" target="_blank" rel="noreferrer" className="text-slate-450 hover:text-emerald-400 hover:underline transition-colors">LinkedIn</a>
            <span className="text-slate-800">•</span>
            <a href="https://twitter.com/VisionMadagasc1" target="_blank" rel="noreferrer" className="text-slate-450 hover:text-orange-400 hover:underline transition-colors">Twitter / X</a>
            <span className="text-slate-800">•</span>
            <a href="https://www.instagram.com/vision_madagascar" target="_blank" rel="noreferrer" className="text-slate-450 hover:text-emerald-400 hover:underline transition-colors">Instagram</a>
          </div>
        </div>
      </section>

    </div>
  );
}
