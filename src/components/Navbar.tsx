import { useState } from 'react';
import { 
  Menu, 
  X, 
  Globe, 
  PhoneCall, 
  ChevronDown, 
  Info, 
  Users, 
  Leaf, 
  Briefcase,
  Newspaper,
  BookOpen,
  Calendar
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  language: 'EN' | 'DE' | 'JP';
  setLanguage: (lang: 'EN' | 'DE' | 'JP') => void;
}

export function Navbar({ activeTab, setActiveTab, language, setLanguage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showMediaDropdown, setShowMediaDropdown] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(true);
  const [mobileMediaOpen, setMobileMediaOpen] = useState(true);

  const mainNavItems = [
    { id: 'sectors', label: { EN: 'Our Company', DE: 'Unser Unternehmen', JP: '当社について' } },
    { id: 'services', label: { EN: 'Services', DE: 'Leistungen', JP: 'サービス' } },
    { id: 'portfolio', label: { EN: 'Portfolio', DE: 'Portfolio', JP: 'ポートフォリオ' } }
  ];

  const aboutSubItems = [
    { 
      id: 'about', 
      label: { EN: 'About Us', DE: 'Über uns', JP: '企業信託概要' }, 
      desc: { EN: 'Corporate foundation story & governance logs.', DE: 'Geschichte & Fundament unserer Vision.', JP: '企業理念、統治基盤、基本情報の開示' } 
    },
    { 
      id: 'leadership', 
      label: { EN: 'Leadership', DE: 'Direktorium & Aufsichtsrat', JP: '役員・ガバナンス体制' }, 
      desc: { EN: 'Meet our executive board and committees.', DE: 'Unsere Führungsgremien & Ausschussräte.', JP: '執行役員、監査専門委員会、統治大綱' } 
    },
    { 
      id: 'sustainability', 
      label: { EN: 'ESG / Sustainability', DE: 'ESG & Nachhaltigkeit', JP: 'サステナビリティ' }, 
      desc: { EN: 'Our decarbonization and circular mandates.', DE: 'Emissions- und Kreislauf-Verpflichtungen.', JP: '脱炭素化、再生エネ、完全循環型方針' } 
    },
    { 
      id: 'careers', 
      label: { EN: 'Careers', DE: 'Karriere', JP: '採用情報' }, 
      desc: { EN: 'Join cross-sector innovators engineering tomorrow.', DE: 'Möglichkeiten für globale Innovatoren.', JP: 'グローバルチームへの参画、求人案件一覧' } 
    }
  ];

  const mediaSubItems = [
    { 
      id: 'news', 
      label: { EN: 'News Feed', DE: 'Pressemitteilungen', JP: 'プレスリリース・公式開示' }, 
      desc: { EN: 'Sovereign disclosures & announcements.', DE: 'Offizielle Presseberichte & Protokolle.', JP: '公式情報開示ログ・合弁M&A発表' } 
    },
    { 
      id: 'blogs', 
      label: { EN: 'Blogs & Essays', DE: 'Essays & Fachartikel', JP: 'インサイト・経営論文' }, 
      desc: { EN: 'Thought leadership by our sector directors.', DE: 'Umfassende Fachanalysen der Experten.', JP: '技術展望、都市理論、医学情報コラム' } 
    },
    { 
      id: 'events', 
      label: { EN: 'Corporate Events', DE: 'Events & Gipfel', JP: 'サミット・イベント' }, 
      desc: { EN: 'Upcoming circular summits & recent webcasts.', DE: 'Termine für kommende Symposien.', JP: '開催予定サミット一覧、完了した委員会録' } 
    }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
    setShowAboutDropdown(false);
    setShowMediaDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isAboutActive = ['about', 'leadership', 'sustainability', 'careers'].includes(activeTab);
  const isMediaActive = ['news', 'blogs', 'events'].includes(activeTab);

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-nav shadow-lg" id="navbar-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('home')} id="navbar-logo">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#db5b1a] via-[#9cb933] to-[#1f8a5a] flex items-center justify-center shadow-lg relative group mr-3">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#db5b1a] via-[#9cb933] to-[#1f8a5a] blur-md opacity-30 group-hover:opacity-75 transition-opacity" />
              <span className="text-white font-black text-sm select-none relative z-10 tracking-tight">MV</span>
            </div>
            <div>
              <span className="text-white font-extrabold text-lg sm:text-xl tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
                Madagascar
              </span>
              <span className="text-emerald-400 text-xs block tracking-widest uppercase font-mono font-bold leading-none -mt-1 ml-0.5">
                Vision
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-1 items-center" id="desktop-nav">
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 ${
                activeTab === 'home' 
                  ? 'glass-accent text-emerald-400 border border-emerald-500/30' 
                  : 'text-slate-300/80 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              {language === 'EN' ? 'Home' : language === 'DE' ? 'Startseite' : 'ホーム'}
            </button>

            {/* About Us Dropdown Trigger */}
            <div 
              className="relative group"
              onMouseEnter={() => setShowAboutDropdown(true)}
              onMouseLeave={() => setShowAboutDropdown(false)}
            >
              <button
                id="nav-btn-about-menu"
                onClick={() => handleNavClick('about')}
                className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 outline-none ${
                  isAboutActive
                    ? 'glass-accent text-emerald-400 border border-emerald-500/30' 
                    : 'text-slate-300/80 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <span>{language === 'EN' ? 'About Us' : language === 'DE' ? 'Über uns' : '会社概要'}</span>
                <ChevronDown size={14} className={`opacity-70 transition-transform duration-300 ${showAboutDropdown ? 'rotate-180 text-emerald-400' : ''}`} />
              </button>

              {showAboutDropdown && (
                <div className="absolute left-0 mt-1 w-80 rounded-2xl bg-slate-950 border border-slate-900 shadow-2xl p-3 space-y-1.5 z-50 animate-fade-in">
                  <div className="absolute inset-0 rounded-2xl bg-emerald-500/5 blur-xl pointer-events-none" />
                  {aboutSubItems.map((subItem) => {
                    const active = activeTab === subItem.id;
                    const Icon = {
                      about: Info,
                      leadership: Users,
                      sustainability: Leaf,
                      careers: Briefcase
                    }[subItem.id as 'about' | 'leadership' | 'sustainability' | 'careers'] || Info;

                    return (
                      <button
                        key={subItem.id}
                        onClick={() => {
                          handleNavClick(subItem.id);
                          setShowAboutDropdown(false);
                        }}
                        className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start space-x-3 group/sub ${
                          active 
                            ? 'bg-gradient-to-r from-emerald-950/40 to-teal-950/40 border border-emerald-500/25 text-emerald-400 shadow-inner' 
                            : 'hover:bg-slate-900 border border-transparent text-slate-355'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${
                          active 
                            ? 'bg-emerald-900/30 border-emerald-500/30 text-emerald-400' 
                            : 'bg-slate-900 border-slate-800 text-slate-400 group-hover/sub:text-emerald-400 group-hover/sub:border-emerald-500/20 group-hover/sub:bg-emerald-950/25'
                        }`}>
                          <Icon size={15} />
                        </div>
                        <div className="space-y-0.5">
                          <span className={`text-xs font-bold block transition-colors ${
                            active ? 'text-emerald-400' : 'text-white group-hover/sub:text-emerald-400'
                          }`}>
                            {subItem.label[language]}
                          </span>
                          <span className="text-[10px] text-slate-450 block font-light leading-tight">
                            {subItem.desc[language]}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Other Main Navigation Items */}
            {mainNavItems.map((item) => {
              const active = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-btn-${item.id}`}
                  className={`px-3 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 ${
                    active 
                      ? 'glass-accent text-emerald-400 border border-emerald-500/30' 
                      : 'text-slate-300/80 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {item.label[language]}
                </button>
              );
            })}

            {/* News & Insights Dropdown Trigger */}
            <div 
              className="relative group"
              onMouseEnter={() => setShowMediaDropdown(true)}
              onMouseLeave={() => setShowMediaDropdown(false)}
              id="nav-media-dropdown-wrapper"
            >
              <button
                id="nav-btn-media-menu"
                onClick={() => handleNavClick('news')}
                className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 outline-none ${
                  isMediaActive
                    ? 'glass-accent text-emerald-400 border border-emerald-500/30' 
                    : 'text-slate-300/80 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <span>{language === 'EN' ? 'News & Events' : language === 'DE' ? 'Medien & Termine' : '開示情報・サミット'}</span>
                <ChevronDown size={14} className={`opacity-70 transition-transform duration-300 ${showMediaDropdown ? 'rotate-180 text-emerald-400' : ''}`} />
              </button>

              {showMediaDropdown && (
                <div className="absolute left-0 mt-1 w-80 rounded-2xl bg-slate-950 border border-slate-900 shadow-2xl p-3 space-y-1.5 z-50 animate-fade-in">
                  <div className="absolute inset-0 rounded-2xl bg-emerald-500/5 blur-xl pointer-events-none" />
                  {mediaSubItems.map((subItem) => {
                    const active = activeTab === subItem.id;
                    const Icon = {
                      news: Newspaper,
                      blogs: BookOpen,
                      events: Calendar
                    }[subItem.id as 'news' | 'blogs' | 'events'] || Info;

                    return (
                      <button
                        key={subItem.id}
                        onClick={() => {
                          handleNavClick(subItem.id);
                          setShowMediaDropdown(false);
                        }}
                        className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start space-x-3 group/sub ${
                          active 
                            ? 'bg-gradient-to-r from-emerald-950/40 to-teal-950/40 border border-emerald-500/25 text-emerald-400 shadow-inner' 
                            : 'hover:bg-slate-900 border border-transparent text-slate-355'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${
                          active 
                            ? 'bg-emerald-900/30 border-emerald-500/30 text-emerald-400' 
                            : 'bg-slate-900 border-slate-800 text-slate-400 group-hover/sub:text-emerald-400 group-hover/sub:border-emerald-500/20 group-hover/sub:bg-emerald-950/25'
                        }`}>
                          <Icon size={15} />
                        </div>
                        <div className="space-y-0.5">
                          <span className={`text-xs font-bold block transition-colors ${
                            active ? 'text-emerald-400' : 'text-white group-hover/sub:text-emerald-400'
                          }`}>
                            {subItem.label[language]}
                          </span>
                          <span className="text-[10px] text-slate-450 block font-light leading-tight">
                            {subItem.desc[language]}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Standalone contact button */}
            <button
              onClick={() => handleNavClick('contact')}
              id="nav-btn-contact"
              className={`px-3 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 ${
                activeTab === 'contact' 
                  ? 'glass-accent text-emerald-400 border border-emerald-500/30' 
                  : 'text-slate-300/80 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              {language === 'EN' ? 'Contact' : language === 'DE' ? 'Kontakt' : 'お問い合わせ'}
            </button>
          </nav>

          {/* Action / Language Controls */}
          <div className="hidden md:flex items-center space-x-4" id="nav-actions">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 text-sm font-medium transition-all"
                id="language-selector-button"
              >
                <Globe size={15} />
                <span>{language}</span>
              </button>

              {showLangDropdown && (
                <div className="absolute right-0 mt-2 w-28 rounded-lg bg-slate-900 border border-slate-800 shadow-xl overflow-hidden z-50">
                  {(['EN', 'DE', 'JP'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setShowLangDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-semibold hover:bg-slate-800 transition-colors ${
                        language === lang ? 'text-emerald-400 bg-slate-800/50' : 'text-slate-300'
                      }`}
                    >
                      {lang === 'EN' ? 'English (EN)' : lang === 'DE' ? 'Deutsch (DE)' : '日本語 (JP)'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Contact CTA */}
            <button
              onClick={() => handleNavClick('contact')}
              className="flex items-center space-x-2 glass-accent hover:bg-emerald-500/10 px-6 py-2 rounded-full text-sm font-semibold text-emerald-400 cursor-pointer transition-all duration-300 active:scale-95 hover:border-emerald-400/30 shadow-lg shadow-emerald-500/5"
              id="nav-quick-contact-btn"
            >
              <PhoneCall size={13} className="opacity-80" />
              <span>
                {language === 'EN' ? 'Inquire Now' : language === 'DE' ? 'Direktkontakt' : 'お問い合わせ'}
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex xl:hidden items-center space-x-4">
            {/* Small Quick Lang */}
            <button
              onClick={() => {
                const cycle: ('EN' | 'DE' | 'JP')[ ] = ['EN', 'DE', 'JP'];
                const nextIdx = (cycle.indexOf(language) + 1) % cycle.length;
                setLanguage(cycle[nextIdx]);
              }}
              className="md:hidden flex items-center space-x-1 px-2 py-1.5 rounded-md border border-slate-800 text-slate-400 text-xs font-mono"
            >
              <Globe size={13} />
              <span>{language}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white focus:outline-none"
              id="mobile-hamburger-btn"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="xl:hidden bg-slate-950 border-t border-slate-900 px-4 pt-2 pb-6 space-y-2 animate-fade-in" id="mobile-menu-panel">
          {/* Home */}
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors block ${
              activeTab === 'home' 
                ? 'bg-gradient-to-r from-emerald-950/60 to-teal-950/60 text-emerald-400 border-l-4 border-emerald-500' 
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            {language === 'EN' ? 'Home' : language === 'DE' ? 'Startseite' : 'ホーム'}
          </button>

          {/* About Us Accordion */}
          <div className="space-y-1">
            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                isAboutActive
                  ? 'bg-slate-900/40 text-emerald-400' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              <span>{language === 'EN' ? 'About Us' : language === 'DE' ? 'Über uns' : '会社概要'}</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${mobileAboutOpen ? 'rotate-180 text-emerald-400' : ''}`} />
            </button>

            {mobileAboutOpen && (
              <div className="pl-4 space-y-1.5 border-l-2 border-slate-900 ml-4 py-1">
                {aboutSubItems.map((subItem) => {
                  const active = activeTab === subItem.id;
                  return (
                    <button
                      key={subItem.id}
                      onClick={() => handleNavClick(subItem.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors block ${
                        active 
                          ? 'bg-emerald-950/20 text-emerald-400 border-l-2 border-emerald-500/80 shadow-inner' 
                          : 'text-slate-400 hover:text-white hover:bg-slate-900'
                      }`}
                    >
                      {subItem.label[language]}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* News & Insights Accordion */}
          <div className="space-y-1">
            <button
              onClick={() => setMobileMediaOpen(!mobileMediaOpen)}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                isMediaActive
                  ? 'bg-slate-900/40 text-emerald-400' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              <span>{language === 'EN' ? 'News & Events' : language === 'DE' ? 'Medien & Termine' : '開示情報・サミット'}</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${mobileMediaOpen ? 'rotate-180 text-emerald-400' : ''}`} />
            </button>

            {mobileMediaOpen && (
              <div className="pl-4 space-y-1.5 border-l-2 border-slate-900 ml-4 py-1">
                {mediaSubItems.map((subItem) => {
                  const active = activeTab === subItem.id;
                  return (
                    <button
                      key={subItem.id}
                      onClick={() => handleNavClick(subItem.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors block ${
                        active 
                          ? 'bg-emerald-950/20 text-emerald-400 border-l-2 border-emerald-500/80 shadow-inner' 
                          : 'text-slate-400 hover:text-white hover:bg-slate-900'
                      }`}
                    >
                      {subItem.label[language]}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Remaining Main Nav Items */}
          {mainNavItems.map((item) => {
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors block ${
                  active 
                    ? 'bg-gradient-to-r from-emerald-950/60 to-teal-950/60 text-emerald-400 border-l-4 border-emerald-500' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-900'
                }`}
              >
                {item.label[language]}
              </button>
            );
          })}

          {/* Standalone Mobile Contact Button */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors block ${
              activeTab === 'contact' 
                ? 'bg-gradient-to-r from-emerald-950/60 to-teal-950/60 text-emerald-400 border-l-4 border-emerald-500' 
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            {language === 'EN' ? 'Contact Us' : language === 'DE' ? 'Kontakt' : 'お問い合わせ'}
          </button>
          
          <div className="pt-4 border-t border-slate-900 flex flex-col space-y-3 px-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-semibold text-sm transition-transform active:scale-95"
            >
              {language === 'EN' ? 'Request Proposal' : language === 'DE' ? 'Angebot anfordern' : '見積・提案依頼'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
