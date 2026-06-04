import { useState } from 'react';
import { CORPORATE_EVENTS } from '../data/corporateData';
import { CorporateEvent } from '../types';
import { Calendar, MapPin, Users, Award, Shield, ArrowRight, Video, Target, Clock, Sparkles } from 'lucide-react';

interface EventsViewProps {
  language: 'EN' | 'DE' | 'JP';
}

export function EventsView({ language }: EventsViewProps) {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'recent'>('upcoming');

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
      empty: 'No events scheduled under this scope.'
    },
    DE: {
      title: 'Konzernkooperationen & Foren',
      sub: 'Überblicken Sie anstehende Verbandstreffen, ingenieurwissenschaftliche Symposien und archivierte Kernversammlungen unseres Präsidiums.',
      upcomingBtn: 'Anstehende Gipfel',
      recentBtn: 'Kürzliche Konferenzen & Berichte',
      timeLabel: 'Uhrzeit',
      locationLabel: 'Veranstaltungsort',
      speakersLabel: 'Geladene Diskussionsteilnehmer',
      registerBtn: 'Executive-Zugangspässe anfordern',
      viewRecord: 'Dokumentationsdatenbank abrufen',
      metricLabel: 'Auditierte Leistungsdaten',
      empty: 'In dieser Rubrik sind aktuell keine Termine angesetzt.'
    },
    JP: {
      title: 'グローバル・サミット ＆ 総合開発カンファレンス',
      sub: 'マダガスカル・ビジョンが主催する政府高官共同ラウンドテーブル、主要先端エンジニアリング実地デモ、および完了した各種委員会シンポジウムの活動記録。',
      upcomingBtn: '今後開催予定のサミット (Upcoming)',
      recentBtn: '最近の活動評価実績・アーカイブ (Recent)',
      timeLabel: '開催スケジュール設定',
      locationLabel: 'カンファレンス開催地',
      speakersLabel: '発表予定の専任スピーカー陣',
      registerBtn: '特別参画アクセスパスを申請する',
      viewRecord: 'カンファレンス資料・録画ログを審査する',
      metricLabel: '公式確認パフォーマンス数値',
      empty: '現在、この範囲に該当するイベントはありません。'
    }
  }[language];

  const filteredEvents = CORPORATE_EVENTS.filter(ev => ev.type === activeTab);

  return (
    <div id="events-view-container" className="space-y-16 pb-24 relative animate-fade-in">
      
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
              className="glass rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-start border border-slate-900 hover:border-emerald-500/20 transition-all duration-300 relative overflow-hidden text-left"
              id={`event-item-${ev.id}`}
            >
              {/* Cover seed panel */}
              <div className="w-full md:w-56 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shrink-0 relative">
                <img 
                  src={`https://picsum.photos/seed/${ev.imageSeed}/300/225`} 
                  alt={ev.title}
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:scale-102 transition-all duration-500"
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

                  <h3 className="text-white text-base sm:text-xl font-extrabold tracking-tight">
                    {ev.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                  {ev.description}
                </p>

                {/* Speakers block if available */}
                {ev.speakers && ev.speakers.length > 0 && (
                  <div className="bg-slate-950/60 border border-slate-900 rounded-xl p-3 inline-block">
                    <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-widest mb-1.5">
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

                    <button className="px-4 py-2 bg-slate-900 hover:bg-slate-850 hover:border-emerald-500/20 text-slate-300 font-bold rounded-lg text-[10px] tracking-wider uppercase border border-slate-800 transition-all flex items-center space-x-2 cursor-pointer">
                      <span>{ev.type === 'upcoming' ? translations.registerBtn.split(' ')[0] : translations.viewRecord.split(' ')[0]}</span>
                      <ArrowRight size={10} />
                    </button>
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
