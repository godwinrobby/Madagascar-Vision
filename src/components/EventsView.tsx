import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CORPORATE_EVENTS } from '../data/corporateData';
import { getTranslatedEvents } from '../utils/translator';
import { CorporateEvent } from '../types';
import { Calendar, MapPin, Users, ArrowRight, Clock, Sparkles, ArrowLeft, Share2, Shield, Play } from 'lucide-react';
import { Helmet } from './Helmet';

interface EventsViewProps {
  language: 'EN' | 'FR' | 'MG';
  selectedEventId?: string | null;
}

export function EventsView({ language, selectedEventId }: EventsViewProps) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'recent'>('upcoming');
  const [copied, setCopied] = useState<boolean>(false);

  const translations = {
    EN: {
      title: 'Global Conventions & Interactive Foras',
      sub: 'Monitor upcoming sovereign roundtables, key engineering presentations, and historical assemblies coordinated by Vision Madagascar boards.',
      upcomingBtn: 'Upcoming Summits',
      recentBtn: 'Recent Events & Webcasts',
      timeLabel: 'Scheduled GMT',
      locationLabel: 'Convention Coordinate',
      speakersLabel: 'Featured Spokespersons',
      registerBtn: 'Request Executive Access Passes',
      viewRecord: 'Access Event Documentation Archive',
      metricLabel: 'Audited Indicator log',
      empty: 'No events scheduled under this scope.',
      backBtn: 'Back to Events Hub',
      shareBtn: 'Share Event',
      copiedText: 'Copied Link!',
      relatedTitle: 'Related Strategic Events',
      detailsTitle: 'Session & Summit Agenda'
    },
    FR: {
      title: 'Conventions Mandataires & Forums Globaux',
      sub: 'Aperçu des tables rondes souveraines, thématiques industrielles et assemblées clés développées par Vision Madagascar.',
      upcomingBtn: 'Sommets de Haut Niveau',
      recentBtn: 'Congrès Récents & Webcasts',
      timeLabel: 'Horaire Planifié',
      locationLabel: 'Lieu de Réunion',
      speakersLabel: 'Intervenants Clés',
      registerBtn: 'Demander une carte d’accès',
      viewRecord: 'Accéder aux documents enregistrés',
      metricLabel: 'Rapport d’Indicateurs validés',
      empty: 'Aucun événement planifié pour ce portefeuille.',
      backBtn: 'Retour aux Événements',
      shareBtn: 'Partager l’événement',
      copiedText: 'Lien copié !',
      relatedTitle: 'Événements Stratégiques Associés',
      detailsTitle: 'Agenda de la Session'
    },
    MG: {
      title: 'Fihaonambe sy Seha-pifanakalozana',
      sub: 'Araho maso ireo fivoriana lehibe, fandaharana ara-panjakana, ary dinika stratejika mifehy ny ho avin’i Madagasikara.',
      upcomingBtn: 'Fivoriana ho Avy',
      recentBtn: 'Fihaonana Lasana & Webcasts',
      timeLabel: 'Fotoana voatondro GMT',
      locationLabel: 'Toerana fihaonana',
      speakersLabel: 'Mpandray teny nasaina',
      registerBtn: 'Hangata-dalana fandraisana an-tanana',
      viewRecord: 'Hizaha ny tahirim-pampianarana',
      metricLabel: 'Tondro sy tati-pahombiazana',
      empty: 'Tsy misy fivoriana voatondro amin’izao fotoana izao.',
      backBtn: 'Hiverina amin’ny Fivoriana',
      shareBtn: 'Hizara ny Fivoriana',
      copiedText: 'Voakopia!',
      relatedTitle: 'Fivoriana sy Dinika Hafa',
      detailsTitle: 'Fandaharam-potoan’ny Dinika'
    }
  }[language];

  const translatedEvents = getTranslatedEvents(CORPORATE_EVENTS, language);

  // Find selected event if ID is provided in route
  const selectedEvent = selectedEventId
    ? translatedEvents.find(ev => ev.id === selectedEventId) || null
    : null;

  const filteredEvents = translatedEvents.filter(ev => ev.type === activeTab);

  if (selectedEvent) {
    const relatedEvents = translatedEvents
      .filter(ev => ev.id !== selectedEvent.id)
      .slice(0, 3);

    const handleCopyLink = () => {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    };

    return (
      <div id="event-detail-container" className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in relative">
        <Helmet
          title={`${selectedEvent.title} | Vision Madagascar Events`}
          description={selectedEvent.description}
          ogImage={`https://picsum.photos/seed/${selectedEvent.imageSeed}/800/500`}
          language={language}
        />

        {/* Back navigation & Share actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <button
            onClick={() => {
              navigate('/events');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors uppercase cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>{translations.backBtn}</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyLink}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-[10px] font-mono tracking-wide bg-slate-950/60 border border-slate-900 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-all cursor-pointer"
            >
              <Share2 size={11} />
              <span>{copied ? translations.copiedText : translations.shareBtn}</span>
            </button>
          </div>
        </div>

        {/* Hero Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Visual Header */}
          <div className="lg:col-span-7 aspect-[16/10] sm:aspect-[21/9] lg:aspect-auto rounded-3xl overflow-hidden bg-slate-900 border border-slate-900 shadow-2xl relative">
            <img
              src={`https://picsum.photos/seed/${selectedEvent.imageSeed}/800/500`}
              alt={selectedEvent.title}
              className="w-full h-full object-cover grayscale brightness-90 contrast-102 hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent" />
            
            <span className={`absolute top-4 left-4 px-2.5 py-0.5 rounded-lg font-mono text-[9px] font-bold tracking-wider uppercase ${
              selectedEvent.type === 'upcoming' 
                ? 'bg-emerald-950/90 text-emerald-400 border border-emerald-500/20' 
                : 'bg-slate-950/90 text-slate-400 border border-slate-800'
            }`}>
              {selectedEvent.type === 'upcoming' ? 'UPCOMING SUMMIT' : 'RECENT CONGRESS / ARCHIVE'}
            </span>
          </div>

          {/* Quick Details Card */}
          <div className="lg:col-span-5 glass p-6 rounded-3xl border border-slate-900 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-bold border-b border-slate-900 pb-2">
                COORDINATE PROFILE
              </span>
              
              <div className="space-y-3 text-xs">
                <div className="flex items-start space-x-3">
                  <Calendar className="text-slate-500 shrink-0 mt-0.5" size={14} />
                  <div>
                    <span className="block font-mono text-[9px] text-slate-500 uppercase">SUMMIT DATE</span>
                    <span className="text-white font-bold">{selectedEvent.date}</span>
                  </div>
                </div>

                {selectedEvent.time && (
                  <div className="flex items-start space-x-3">
                    <Clock className="text-slate-500 shrink-0 mt-0.5" size={14} />
                    <div>
                      <span className="block font-mono text-[9px] text-slate-500 uppercase">{translations.timeLabel}</span>
                      <span className="text-white font-bold">{selectedEvent.time}</span>
                    </div>
                  </div>
                )}

                <div className="flex items-start space-x-3">
                  <MapPin className="text-slate-500 shrink-0 mt-0.5" size={14} />
                  <div>
                    <span className="block font-mono text-[9px] text-slate-500 uppercase">{translations.locationLabel}</span>
                    <span className="text-white font-semibold">{selectedEvent.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics if present */}
            {selectedEvent.metrics && (
              <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-900 space-y-1">
                <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-widest">
                  {translations.metricLabel}
                </span>
                <span className="block text-sm font-mono font-black text-emerald-400 uppercase">
                  {selectedEvent.metrics.value} <span className="text-[10px] text-slate-400 font-light font-sans">— {selectedEvent.metrics.label}</span>
                </span>
              </div>
            )}

            <button className="w-full py-3 bg-emerald-500 text-slate-950 hover:bg-emerald-400 font-bold rounded-xl text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-emerald-950/20">
              <span>{selectedEvent.type === 'upcoming' ? translations.registerBtn : translations.viewRecord}</span>
              <ArrowRight size={12} />
            </button>
          </div>

        </div>

        {/* Content & Speakers Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
          
          {/* Detailed Agenda & Summary Description */}
          <div className="lg:col-span-8 space-y-8 text-left">
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                {selectedEvent.title}
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {selectedEvent.description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
                {translations.detailsTitle}
              </h3>
              
              <div className="space-y-4 border-l border-slate-900 pl-4">
                <div className="space-y-1.5 relative">
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-950" />
                  <span className="text-[10px] font-mono text-emerald-400">09:00 - 10:30 GMT</span>
                  <h4 className="text-white text-sm font-bold">Inauguration Roundtable & Opening Statement</h4>
                  <p className="text-slate-400 text-xs font-light">Opening executive remarks outlining portfolio development programs, macro-economic coordinates, and decentralized strategic investment structures.</p>
                </div>

                <div className="space-y-1.5 relative">
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-800 border-2 border-slate-950" />
                  <span className="text-[10px] font-mono text-slate-500">11:00 - 12:30 GMT</span>
                  <h4 className="text-white text-sm font-bold">Infrastructure Optimization Breakout Panel</h4>
                  <p className="text-slate-400 text-xs font-light">Detailed audit reports and case reviews highlighting real-estate planning, harbor logistics systems, and sustainable energy operations.</p>
                </div>

                <div className="space-y-1.5 relative">
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-800 border-2 border-slate-950" />
                  <span className="text-[10px] font-mono text-slate-500">14:00 - 16:00 GMT</span>
                  <h4 className="text-white text-sm font-bold">Social Impact and Local Capital Assembly</h4>
                  <p className="text-slate-400 text-xs font-light">Fostering open dialog loops between regional NGOs and board coordinators on vocational educational initiatives, public water access, and community support metrics.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Speakers List */}
          <div className="lg:col-span-4 space-y-6">
            {selectedEvent.speakers && selectedEvent.speakers.length > 0 && (
              <div className="glass p-6 rounded-3xl border border-slate-900 space-y-4 text-left">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-black pb-2 border-b border-slate-900">
                  {translations.speakersLabel}
                </h4>
                
                <div className="space-y-4">
                  {selectedEvent.speakers.map((spk, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-2 bg-slate-950/60 rounded-xl border border-slate-900">
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-900 shrink-0">
                        <img 
                          src={`https://images.unsplash.com/photo-${1500000000000 + idx * 100000}?auto=format&fit=crop&q=80&w=100&h=100`} 
                          alt={spk} 
                          className="w-full h-full object-cover grayscale"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h5 className="text-white text-xs font-bold font-sans">{spk}</h5>
                        <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider block mt-0.5">ViMa DELEGATE</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Public Trust disclosure */}
            <div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-900 text-left space-y-3">
              <div className="flex items-center space-x-2 text-slate-400">
                <Shield size={14} className="text-emerald-400" />
                <span className="text-[9px] font-mono uppercase tracking-widest font-bold">SOVEREIGN PROTOCOL</span>
              </div>
              <p className="text-slate-500 text-[10px] font-light leading-relaxed">
                Admittance to Vision Madagascar summits is highly restricted. Confirmed passes represent cryptographic permissions authorized exclusively by our public relations board.
              </p>
            </div>
          </div>

        </div>

        {/* Related Events Section */}
        {relatedEvents.length > 0 && (
          <section className="mt-20 pt-12 border-t border-slate-900/60 space-y-8 text-left">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase block font-bold">
                OTHER CONGRESS CREDENTIALS
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
                {translations.relatedTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedEvents.map(ev => (
                <div
                  key={ev.id}
                  onClick={() => {
                    navigate(`/events/${ev.id}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="glass card-hover rounded-2xl p-5 text-left flex flex-col justify-between h-[360px] cursor-pointer group"
                >
                  <div className="space-y-4">
                    <div className="aspect-[16/10] bg-slate-900 rounded-xl overflow-hidden border border-white/5 relative">
                      <img
                        src={`https://picsum.photos/seed/${ev.imageSeed}/300/180`}
                        alt={ev.title}
                        className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[9px] font-mono text-slate-550">{ev.date}</span>
                      <h4 className="text-white text-xs font-extrabold tracking-tight group-hover:text-emerald-400 transition-colors line-clamp-2">
                        {ev.title}
                      </h4>
                    </div>
                  </div>

                  <div className="border-t border-slate-900 pt-3 flex items-center justify-between text-[9px] font-mono text-slate-500">
                    <span className="uppercase">{ev.location}</span>
                    <span className="text-emerald-400 font-bold flex items-center space-x-1 group-hover:text-white transition-colors">
                      <span>ACCESS</span>
                      <ArrowRight size={10} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    );
  }

  return (
    <div id="events-view-container" className="space-y-16 pb-24 relative animate-fade-in">
      <Helmet
        title={translations.title}
        description={translations.sub}
        language={language}
      />
      
      {/* Intro Header */}
      <section className="relative pt-32 pb-4 overflow-hidden text-center max-w-4xl mx-auto px-4" id="events-intro">
        <span className="font-mono text-[10px] text-emerald-400 tracking-widest uppercase border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-950/20 inline-flex items-center space-x-1.5">
          <Calendar size={11} />
          <span>CONGRESS GATEWAY LOGS</span>
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-4">
          {translations.title}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl mx-auto font-light">
          {translations.sub}
        </p>
      </section>

      {/* Tab Switch Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="events-tabs">
        <div className="flex justify-center border-b border-slate-900 pb-1">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`py-3 px-6 text-xs sm:text-sm font-mono tracking-widest uppercase transition-all border-b-2 cursor-pointer ${
                activeTab === 'upcoming'
                  ? 'border-emerald-500 text-emerald-400 font-extrabold'
                  : 'border-transparent text-slate-500 hover:text-slate-300'
              }`}
            >
              {translations.upcomingBtn}
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              className={`py-3 px-6 text-xs sm:text-sm font-mono tracking-widest uppercase transition-all border-b-2 cursor-pointer ${
                activeTab === 'recent'
                  ? 'border-emerald-500 text-emerald-400 font-extrabold'
                  : 'border-transparent text-slate-500 hover:text-slate-300'
              }`}
            >
              {translations.recentBtn}
            </button>
          </div>
        </div>
      </section>

      {/* Events Grid layout list */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="events-list-grid">
        <div className="space-y-8 max-w-5xl mx-auto">
          {filteredEvents.map((ev) => (
            <div 
              key={ev.id}
              onClick={() => {
                navigate(`/events/${ev.id}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="glass rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-start border border-slate-900 hover:border-emerald-500/20 transition-all duration-300 relative overflow-hidden text-left cursor-pointer group"
              id={`event-item-${ev.id}`}
            >
              {/* Cover seed panel */}
              <div className="w-full md:w-56 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shrink-0 relative">
                <img 
                  src={`https://picsum.photos/seed/${ev.imageSeed}/300/225`} 
                  alt={ev.title}
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent" />
                
                {/* Event Status flag */}
                <span className={`absolute top-2 left-2 px-2.5 py-0.5 rounded-lg font-mono text-[8.5px] font-bold tracking-wider uppercase ${
                  ev.type === 'upcoming' 
                    ? 'bg-emerald-950/90 text-emerald-400 border border-emerald-550/20' 
                    : 'bg-slate-950/90 text-slate-400 border border-slate-800'
                }`}>
                  {ev.type === 'upcoming' ? 'UPCOMING' : 'COMPLETED'}
                </span>
              </div>

              {/* Info center */}
              <div className="flex-1 space-y-4">
                
                <div className="space-y-1.5">
                  {/* Calendar & Time Row */}
                  <div className="flex flex-wrap items-center gap-4 text-[10px] sm:text-xs font-mono text-slate-400">
                    <span className="flex items-center space-x-1.5 text-emerald-400 font-bold">
                      <Calendar size={12} />
                      <span>{ev.date}</span>
                    </span>
                    {ev.time && (
                      <span className="flex items-center space-x-1.5 text-slate-500">
                        <Clock size={12} />
                        <span>{ev.time}</span>
                      </span>
                    )}
                    <span className="flex items-center space-x-1.5 text-slate-500">
                      <MapPin size={12} />
                      <span>{ev.location}</span>
                    </span>
                  </div>

                  <h3 className="text-white text-base sm:text-xl font-extrabold tracking-tight group-hover:text-emerald-400 transition-colors uppercase">
                    {ev.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                  {ev.description}
                </p>

                {/* Speakers block if available */}
                {ev.speakers && ev.speakers.length > 0 && (
                  <div className="bg-slate-950/60 border border-slate-900 rounded-xl p-3 inline-block">
                    <span className="block text-[8px] font-mono text-slate-550 uppercase tracking-widest mb-1.5">
                      {translations.speakersLabel}
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {ev.speakers.map((spk, sIdx) => (
                        <span key={sIdx} className="bg-slate-900 text-slate-200 px-2.5 py-1 rounded-lg border border-slate-850 flex items-center space-x-1.5">
                          <Users size={10} className="text-emerald-400" />
                          <span>{spk}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Performance or event specifics badge */}
                {ev.metrics && (
                  <div className="border-t border-slate-900 pt-3 flex sm:items-center justify-between gap-4">
                    <div className="text-left">
                      <span className="block text-[8px] font-mono text-slate-550 uppercase tracking-widest">
                        {translations.metricLabel}
                      </span>
                      <span className="block text-xs font-mono font-bold text-emerald-400 uppercase">
                        {ev.metrics.value} — {ev.metrics.label}
                      </span>
                    </div>

                    <div className="px-4 py-2 bg-slate-900 group-hover:bg-emerald-500 group-hover:text-slate-950 text-slate-300 font-bold rounded-lg text-[10px] tracking-wider uppercase border border-slate-800 group-hover:border-transparent transition-all flex items-center space-x-2">
                      <span>{ev.type === 'upcoming' ? translations.registerBtn.split(' ')[0] : translations.viewRecord.split(' ')[0]}</span>
                      <ArrowRight size={10} />
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}

          {filteredEvents.length === 0 && (
            <div className="py-16 text-center glass rounded-3xl border border-slate-900">
              <span className="text-slate-500 text-xs font-mono block">{translations.empty}</span>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
