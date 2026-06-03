import React, { useState } from 'react';
import { Mail, ArrowRight, ExternalLink, Linkedin, Twitter, AlertCircle, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  language: 'EN' | 'DE' | 'JP';
}

export function Footer({ setActiveTab, language }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const translations = {
    EN: {
      about: 'Operating integrated sector leaders globally across Healthcare, Renewables, deep technology cloud, smart logistics systems, and sustainable premium infrastructure development.',
      sectors: 'Our Company',
      quick: 'Quick Links',
      newsletter: 'Global Operations Intel',
      placeholder: 'Enter corporate email...',
      desc: 'Subscribe to group investment and circular economy performance digests released quarterly.',
      subsSuccess: 'Successfully added to international investor portal logs.',
      cookieWarn: 'This digital interface operates complete sandboxed privacy protocols. Content matches 2026 corporate targets.',
      rights: 'All rights reserved.'
    },
    DE: {
      about: 'Globale konsolidierte Sektorführerschaft in Healthcare, Erneuerbaren Energien, Deep-Tech Cloud, intelligenten Logistik-Systemen und nachhaltiger Premium-Infrastruktur.',
      sectors: 'Unser Unternehmen',
      quick: 'Schnellzugriff',
      newsletter: 'Unternehmen & Investor Updates',
      placeholder: 'Geschäftliche E-Mail...',
      desc: 'Erhalt vierteljährlicher Berichte über Konzern-Investitionen und Kreislaufwirtschaft-Bilanzen.',
      subsSuccess: 'Erfolgreich ins internationale Investor-Verzeichnis eingetragen.',
      cookieWarn: 'Diese Benutzeroberfläche unterliegt gesicherten Datenschutzprotokollen. Inhalte entsprechen Planungszielen 2026.',
      rights: 'Alle Rechte vorbehalten.'
    },
    JP: {
      about: 'ヘルスケア、再生エネルギー、ディープテッククラウド、スマートロジスティクス、持続可能なインフラ開発分野で、グローバルに統合されたセクターを牽引しています。',
      sectors: '当社について',
      quick: 'クイックリンク',
      newsletter: 'グローバル運営インテル',
      placeholder: '代表メールアドレス...',
      desc: '四半期ごとに公開されるグループ投資および循環型経済のパフォーマンス要約を入手する。',
      subsSuccess: '国際投資家ポータルへの配信登録が完了しました。',
      cookieWarn: '本インターフェースは完全なセキュア・サンドボックス仕様です。2026年の企業開発目標に基づいています。',
      rights: '無断転載・複製を禁じます。'
    }
  }[language];

  const quickLinks = [
    { id: 'about', label: { EN: 'About Corporate Story', DE: 'Über unsere Vision', JP: '企業沿革・ストーリー' } },
    { id: 'leadership', label: { EN: 'Fiduciary Leadership', DE: 'Direktorium & Aufsichtsrat', JP: '役員会議室・経営陣' } },
    { id: 'services', label: { EN: 'Executive Advisory', DE: 'Senior Consulting & Services', JP: '提供サービス' } },
    { id: 'portfolio', label: { EN: 'Corporate Asset Portfolio', DE: 'Beteiligungsportfolio', JP: 'アセットポートフォリオ一覧' } },
    { id: 'sustainability', label: { EN: 'ESG Accountability', DE: 'ESG-Verpflichtungen', JP: 'サステナビリティ/ESG' } },
    { id: 'careers', label: { EN: 'Global Talent Openings', DE: 'Karriereportale', JP: 'グローバル採用情報' } },
    { id: 'news', label: { EN: 'Official News Feed', DE: 'Pressemitteilungen', JP: 'プレスリリース・情報開示' } },
    { id: 'blogs', label: { EN: 'Director Insights Blog', DE: 'Fachartikel & Blogs', JP: 'エグゼクティブ・コラム' } },
    { id: 'events', label: { EN: 'Corporate Summit Log', DE: 'Events & Gipfel', JP: '開催イベント・サミット一覧' } }
  ];

  const sectorLinks = [
    { id: 'healthcare', label: { EN: 'Clinical Diagnostics', DE: 'Klinische Labore & Kliniknetze', JP: 'ヘルスケア / クリニカル' } },
    { id: 'technology', label: { EN: 'Enterprise AI & Cloud Architectures', DE: 'KI-Systeme & Cloudberatung', JP: 'エンタープライズAI / クラウド' } },
    { id: 'energy', label: { EN: 'Offshore Solar & Wind Assets', DE: 'Erneuerbare Energien & Netze', JP: '再生エネルギー事業' } },
    { id: 'realestate', label: { EN: 'Smart Master-Planned Cities', DE: 'Smart Cities & Wohnanlagen', JP: 'スマートシティ開発' } }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMsg(language === 'EN' ? 'Invalid email schema.' : language === 'DE' ? 'Ungültiges E-Mail-Format.' : '有効な電子メールを入力してください。');
      return;
    }
    setErrorMsg('');
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  const handleLink = (id: string, isSector = false) => {
    if (isSector) {
      setActiveTab('sectors');
    } else {
      setActiveTab(id);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 pt-20 pb-10 z-10" id="footer-container">
      {/* Dynamic ambient glowing accent in footer banner corner */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid mapping */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
          
          {/* Logo, About text & Socials */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center cursor-pointer" onClick={() => handleLink('home')}>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#db5b1a] via-[#9cb933] to-[#1f8a5a] flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white font-black text-xs select-none tracking-tight">MV</span>
              </div>
              <span className="text-white font-extrabold text-xl tracking-wider uppercase">
                Madagascar <span className="text-[#db5b1a] font-mono font-bold text-xs block -mt-1 tracking-widest">Vision</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {translations.about}
            </p>

            <div className="flex space-x-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-emerald-500/50 hover:text-emerald-400 transition-colors text-slate-400">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-emerald-500/50 hover:text-emerald-400 transition-colors text-slate-400">
                <Twitter size={18} />
              </a>
              <span className="text-xs text-slate-500 font-mono self-center border border-slate-800 px-3 py-1 rounded-md">
                SEC #E94-902
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4 col-span-1">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase border-b border-slate-900 pb-3">
              {translations.quick}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleLink(item.id)}
                    className="hover:text-emerald-400 transition-colors text-left flex items-center group cursor-pointer"
                  >
                    <ArrowRight size={10} className="mr-0 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 group-hover:mr-1.5 transition-all" />
                    {item.label[language]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business divisions Column */}
          <div className="lg:col-span-3 space-y-4 col-span-1">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase border-b border-slate-900 pb-3">
              {translations.sectors}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {sectorLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleLink(item.id, true)}
                    className="hover:text-emerald-400 transition-colors text-left flex items-center group cursor-pointer"
                  >
                    <ArrowRight size={10} className="mr-0 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 group-hover:mr-1.5 transition-all" />
                    {item.label[language]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Email Subscription section */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase border-b border-slate-900 pb-3">
              {translations.newsletter}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {translations.desc}
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={translations.placeholder}
                  className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 outline-none transition-all pr-10"
                />
                <button
                  type="submit"
                  className="absolute right-1 text-slate-400 hover:text-white top-1 bg-slate-800 p-2 rounded-lg transition-colors hover:bg-slate-700"
                >
                  <ArrowRight size={14} />
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center space-x-2 text-xs text-emerald-400 bg-emerald-950/40 p-2 rounded-lg border border-emerald-500/20">
                  <CheckCircle2 size={13} />
                  <span>{translations.subsSuccess}</span>
                </div>
              )}

              {errorMsg && (
                <div className="flex items-center space-x-2 text-xs text-red-400 bg-red-950/40 p-2 rounded-lg border border-red-500/20">
                  <AlertCircle size={13} />
                  <span>{errorMsg}</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Separator, Sandboxed Warning & Credits */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-slate-500">
          <div className="flex items-center space-x-2 bg-slate-900/50 px-4 py-2 rounded-xl border border-slate-800 max-w-lg md:max-w-none">
            <AlertCircle size={14} className="text-emerald-400 flex-shrink-0" />
            <p className="leading-tight text-[11px]">{translations.cookieWarn}</p>
          </div>
          
          <div className="text-right">
            <p className="font-mono text-[10px] tracking-wider text-slate-400 uppercase">
              MV Madagascar Vision Holding SE & Co. KGaA
            </p>
            <p className="mt-0.5">
              &copy; {new Date().getFullYear()} Madagascar Vision. {translations.rights}
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
