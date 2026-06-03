import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactViewProps {
  language: 'EN' | 'DE' | 'JP';
}

interface OfficeSpec {
  id: string;
  city: { EN: string; DE: string; JP: string };
  address: string;
  tel: string;
  email: string;
  hours: { EN: string; DE: string; JP: string };
  coords: { x: string; top: string; y: string }; // simple coordinate mapping for rendering on layout representation
}

export function ContactView({ language }: ContactViewProps) {
  const translations = {
    EN: {
      title: 'Global Office Desk Directories',
      sub: 'Initiating validated executive touchpoints across European hubs Asian terminals and central high-volume logistics registries.',
      mapTitle: 'Worldwide Asset Operations Center Map',
      mapSub: 'Interactive coordinates matching fully licensed legal corporate registries.',
      formTitle: 'Institutional Inquiries Desk',
      nameLabel: 'Your Authorised representative name',
      emailLabel: 'Fiduciary Corporate Email Address',
      typeLabel: 'Portfolio sector realm targeting',
      msgLabel: 'Confidential Inquiry Specification inbrief',
      submitBtn: 'Securely Dispatch Inquiry to Committee',
      formSuccessHeader: 'INQUIRY COMMITTED SUCCESSFULLY',
      formSuccessText: 'Your request has been cryptographically secured and routed directly to the regional cabinet committee. Our turnaround SLA is nested within 2 business days.',
      socialLinkText: 'Follow Regional News channels'
    },
    DE: {
      title: 'Globale Niederlassungen & Kontakt',
      sub: 'Kontaktieren Sie unsere Hauptquartiere in Kontinentaleuropa, Asien-Pazifik oder unsere Transportleitstellen.',
      mapTitle: 'Weltkarte der Betriebsstätten & Koordinaten',
      mapSub: 'Interaktive Karte der behördlich zugelassenen Madagascar Vision-Holdings.',
      formTitle: 'Zentrales Anfrage-Formular (Institutionell)',
      nameLabel: 'Name des bevollmächtigten Vertreters',
      emailLabel: 'Offizielle Firmen-E-Mail-Adresse',
      typeLabel: 'Betreffendes Markt- oder Sektor-Segment',
      msgLabel: 'Detaillierte Anfrage-Spezifikation (Vertraulich)',
      submitBtn: 'Anfrage verschlüsselt einsenden',
      formSuccessHeader: 'ANFRAGE ERFOLGREICH ÜBERMITTELT',
      formSuccessText: 'Ihre Nachricht wurde verschlüsselt an den regionalen Beirat übertragen. Eine Antwort erfolgt vertragsgemäß innerhalb von 48 Stunden.',
      socialLinkText: 'Offizielle Kommunikationskanäle'
    },
    JP: {
      title: 'グローバル連絡窓口 ＆ 統括オフィス',
      sub: '欧州本社、アジア統括支局、および地域港湾・複合物流制御センターへの検証可能なダイレクト・コンタクト情報。',
      mapTitle: 'グローバルフットプリント・対話型アセットマップ',
      mapSub: 'ライセンス許可済みの登記国・現地法人デスク座標にリンクしています。',
      formTitle: '機関投資家・提携案 統合申請窓口',
      nameLabel: '代表・担当役員様ご氏名',
      emailLabel: '企業発行 公式メールアドレス',
      typeLabel: '投資検討・連携を希望する事業分野',
      msgLabel: '契約要件また共同投資の仕様概要など',
      submitBtn: 'セキュリティ保護の上、審査委員会へ送信',
      formSuccessHeader: '申請要項が安全に受信されました',
      formSuccessText: '案件は地域委員会に即座に共有され、原則として2営業日以内に事務局より確認事項をご案内いたします。',
      socialLinkText: 'ソーシャルネットワーク公式チャンネル'
    }
  }[language];

  const offices: OfficeSpec[] = [
    {
      id: 'zurich',
      city: { EN: 'Zurich (Global HQ)', DE: 'Zürich (Zentrale)', JP: 'チューリッヒ世界本社' },
      address: 'Madagascar Vision Civic Group AG, Bleicherweg 74, 8002 Zürich, Switzerland',
      tel: '+41 44 910 2000',
      email: 'hq.zurich@aetheris.com',
      hours: { EN: '08:00 - 17:30 CET', DE: '08:00 - 17:30 MEZ', JP: 'スイス時間 08:00 - 17:30' },
      coords: { x: '49%', top: '35%', y: '35%' }
    },
    {
      id: 'frankfurt',
      city: { EN: 'Frankfurt Hub', DE: 'Frankfurt (Logistik)', JP: 'フランクフルト支局' },
      address: 'Madagascar Vision Logistik & Guss GmbH, Kaiserstraße 12, 60311 Frankfurt am Main, Germany',
      tel: '+49 69 400 9010',
      email: 'hubs.germany@aetheris.de',
      hours: { EN: '08:30 - 18:00 CET', DE: '08:30 - 18:00 MEZ', JP: 'ドイツ時間 08:30 - 18:00' },
      coords: { x: '51%', top: '30%', y: '30%' }
    },
    {
      id: 'tokyo',
      city: { EN: 'Tokyo Ginza Terminal', DE: 'Tokio (Pazifik)', JP: '東京・銀座アジア太平洋本部' },
      address: 'Madagascar Vision Medical Solutions, Ginza Six 11F, Chuo-ku, Tokyo 104-0061, Japan',
      tel: '+81 3 5510 8800',
      email: 'apac.tokyo@aetheris.jp',
      hours: { EN: '09:00 - 18:00 JST', DE: '09:00 - 18:00 JST', JP: '日本時間 09:00 - 18:00（土日祝除く）' },
      coords: { x: '82%', top: '48%', y: '48%' }
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

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormErr('');
    setFormSuccess(false);

    if (!fullName.trim() || !compEmail.trim() || !inquiryType || !message.trim()) {
      setFormErr(language === 'EN' ? 'Please supply all credential parameters in the form before dispatch.' : language === 'DE' ? 'Bitte füllen Sie alle erforderlichen Felder aus.' : 'フォームのすべての必要要件セパレータを入力してください。');
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
    }, 2000);
  };

  return (
    <div id="contact-view-wrapper" className="space-y-16 pb-12 relative animate-fade-in">
      
      {/* 1. Header Frame */}
      <section className="relative pt-32 pb-8 overflow-hidden text-center max-w-4xl mx-auto px-4" id="contact-intro">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-950/20">
          {language === 'EN' ? 'SECURE SEC DIRECT' : language === 'DE' ? 'KONTAKT UND ADRESSEN' : 'グローバルオフィス案内'}
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-4">
          {translations.title}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl mx-auto">
          {translations.sub}
        </p>
      </section>

      {/* 2. Interactive Map Grid + Selected Office specs details display */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="map-interactive-grid">
        
        {/* Left column: Vector Map with pinpoints (Sizing calculated fluidly) */}
        <div className="lg:col-span-7 bg-slate-950/80 border border-white/5 rounded-3xl p-6 relative overflow-hidden h-[330px] sm:h-[390px]" id="vector-map-frame">
          <div className="absolute inset-0 bg-dotted-pattern opacity-10 pointer-events-none" />
          
          <h4 className="text-slate-400 font-mono text-[10px] tracking-widest uppercase mb-4 text-left">
            {translations.mapTitle}
          </h4>

          {/* Simple Vector Map Wireframe Outline of Continents for high-end aesthetic value */}
          <div className="w-full h-[75%] relative border border-white/5 bg-slate-900/30 rounded-2xl overflow-hidden mt-2" id="globe-radar-canvas">
            
            {/* Ambient scanner grid lines */}
            <div className="absolute inset-0 border-y border-white/5 flex items-center justify-center">
              <div className="w-44 h-44 rounded-full border border-emerald-500/10 animate-pulse" />
              <div className="w-[300px] h-[300px] absolute rounded-full border border-teal-500/5" />
            </div>

            {/* Custom high-end text labels of continents mapped with relative offset */}
            <div className="absolute top-[20%] left-[20%] text-[10px] font-mono text-slate-700 select-none">NORTH AMERICA</div>
            <div className="absolute top-[30%] left-[48%] text-[10px] font-mono text-slate-700 select-none">EUROPE</div>
            <div className="absolute top-[65%] left-[83%] text-[10px] font-mono text-slate-700 select-none">ASIA-PACIFIC</div>

            {/* Map pinpoint anchors */}
            {offices.map((off) => {
              const active = activeOffice.id === off.id;
              return (
                <button
                  key={off.id}
                  onClick={() => setActiveOffice(off)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none"
                  style={{ left: off.coords.x, top: off.coords.y }}
                  id={`off-pin-${off.id}`}
                >
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-65 ${
                      active ? 'bg-emerald-400' : 'bg-slate-500'
                    }`} />
                    <span className={`relative inline-flex rounded-full h-2.5 w-2.5 shadow-lg border border-white/45 ${
                      active ? 'bg-emerald-400 scale-125' : 'bg-slate-600 hover:bg-slate-400'
                    }`} />
                  </span>
                  
                  {/* Tooltip name */}
                  <span className={`absolute top-5 left-1/2 transform -translate-x-1/2 bg-slate-950 border border-slate-800 text-[9px] font-mono px-2 py-0.5 rounded text-white tracking-widest ${
                    active ? 'opacity-100 font-bold border-emerald-500/50' : 'opacity-40'
                  }`}>
                    {off.id.toUpperCase()}
                  </span>
                </button>
              );
            })}

          </div>

          <p className="text-[10px] text-slate-550 font-mono text-left mt-2">
            * {translations.mapSub}
          </p>

        </div>

        {/* Right column: Single Office detailed card */}
        <div className="lg:col-span-5" id="office-details-card">
          <div className="glass card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-[330px] sm:h-[390px] relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest">
                  AETHERIS DESK DIRECTORY
                </span>
                <h3 className="text-white font-extrabold text-xl font-sans mt-1">
                  {activeOffice.city[language]}
                </h3>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start space-x-2.5">
                  <MapPin size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="font-light">{activeOffice.address}</span>
                </div>

                <div className="flex items-center space-x-2.5">
                  <Phone size={14} className="text-emerald-550 flex-shrink-0" />
                  <span className="font-mono">{activeOffice.tel}</span>
                </div>

                <div className="flex items-center space-x-2.5">
                  <Mail size={14} className="text-emerald-555 flex-shrink-0" />
                  <span className="font-mono">{activeOffice.email}</span>
                </div>

                <div className="flex items-center space-x-2.5">
                  <Clock size={14} className="text-emerald-555 flex-shrink-0" />
                  <span className="font-mono text-xs">{activeOffice.hours[language]}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-900 pt-3 mt-4 text-[10px] font-mono text-slate-550 flex justify-between items-center">
              <span>DESK STATE: ACTIVE</span>
              <span className="text-emerald-400">MONITORED v.2026</span>
            </div>

          </div>
        </div>

      </section>

      {/* 3. Business Inquiry parameters secure Form */}
      <section className="max-w-xl mx-auto px-4" id="contact-business-form">
        <div className="glass rounded-3xl p-6 sm:p-8 text-left relative overflow-hidden shadow-2xl">
          
          <h3 className="text-white font-black text-lg sm:text-xl font-sans mb-1.5 flex items-center space-x-2">
            <Sparkles size={16} className="text-emerald-400" />
            <span>{translations.formTitle}</span>
          </h3>
          <p className="text-slate-450 text-[11px] leading-tight mb-6 border-b border-slate-900 pb-3">
            {language === 'EN' ? 'File multi-sector operational requirements, partnerships proposals, or institutional investment briefs.' : language === 'DE' ? 'Übermitteln Sie hier Ihre Anforderungen für Großinvestitionen oder Sektor-Kooperationen.' : '新規アセットの共同開発参画、政府アドバイザリー要請等に関するお見積審査はこちら。'}
          </p>

          <form onSubmit={handleInquirySubmit} className="space-y-4">
            
            {/* Candidate Name */}
            <div className="space-y-1 block">
              <label className="block text-[10px] font-mono tracking-wider font-bold text-slate-500 uppercase">
                {translations.nameLabel}
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Dr. Evelyn Ainsworth"
                className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 outline-none transition-all"
              />
            </div>

            {/* Email + Sector Type choice */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1 block">
                <label className="block text-[10px] font-mono tracking-wider font-bold text-slate-500 uppercase">
                  {translations.emailLabel}
                </label>
                <input
                  type="email"
                  value={compEmail}
                  onChange={(e) => setCompEmail(e.target.value)}
                  placeholder="evelyn.ainsworth@wealthfund.de"
                  className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 outline-none transition-all"
                />
              </div>

              <div className="space-y-1 block">
                <label className="block text-[10px] font-mono tracking-wider font-bold text-slate-500 uppercase">
                  {translations.typeLabel}
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-xs text-white outline-none transition-all"
                >
                  <option value="" className="bg-slate-950 text-slate-500">
                    {language === 'EN' ? '-- Select Portfolio Realm --' : language === 'DE' ? '-- Sektor auswählen --' : '-- 分野・部門を選択 --'}
                  </option>
                  <option value="healthcare" className="bg-slate-950 text-white">Healthcare & Lab Diagnostics</option>
                  <option value="tech" className="bg-slate-950 text-white">Cognitive Enterprise AI Solutions</option>
                  <option value="energy" className="bg-slate-950 text-white">Renewable Winds & Micro-Grids</option>
                  <option value="smart-cities" className="bg-slate-950 text-white">Urban Real Estate & Smart Cities</option>
                  <option value="logistics" className="bg-slate-950 text-white">Freight Logistics cold-chain systems</option>
                  <option value="board" className="bg-slate-950 text-white">Strategic Board Advisory / ESG</option>
                </select>
              </div>
            </div>

            {/* Content text */}
            <div className="space-y-1 block">
              <label className="block text-[10px] font-mono tracking-wider font-bold text-slate-500 uppercase">
                {translations.msgLabel}
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Secure details regarding investment allocation volumes or civic infrastructure coordinates..."
                className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 outline-none transition-all resize-none"
              />
            </div>

            {/* States feedback UI */}
            {formSuccess && (
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-550/20 space-y-2 animate-fade-in text-left">
                <div className="flex items-center space-x-2 text-emerald-400">
                  <CheckCircle2 size={15} />
                  <span className="font-bold text-sm">{translations.formSuccessHeader}</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed font-light">
                  {translations.formSuccessText}
                </p>
              </div>
            )}

            {formErr && (
              <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/20 text-xs text-red-300 flex items-center space-x-2">
                <AlertCircle size={14} className="text-red-400" />
                <span>{formErr}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl text-xs transition-all shadow-2xl shadow-emerald-600/30 duration-300 flex items-center justify-center space-x-2 active:scale-98 disabled:opacity-50 cursor-pointer"
            >
              {submitting ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={12} />
                  <span>{translations.submitBtn}</span>
                </>
              )}
            </button>

          </form>

        </div>
      </section>

      {/* 4. Global Support Hotlines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-slate-500 font-mono border-t border-slate-900" id="contact-supports">
        <span>SECURITY PROTOCOL: SSL/TLS 1.3 LEDGER CERTIFIED</span>
        <span className="mx-3">|</span>
        <span>24/7 NETWORK OPERATIONS CONTROL PHONE: +41 44 910 2099</span>
        <br />
        <div className="flex justify-center space-x-2 mt-4 text-[11px]">
          <span className="text-slate-400 font-bold uppercase">External Alliance Networks:</span>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">LinkedIn</a>
          <span>•</span>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">Twitter / X</a>
        </div>
      </section>

    </div>
  );
}
