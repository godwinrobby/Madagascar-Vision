import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CompanyLogo } from './CompanyLogo';
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
  Calendar,
  Sun,
  Moon
} from 'lucide-react';

// Subtle, lightweight particle effect triggering on hover, utilizing Framer Motion
function HoverParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-lg" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => {
        const size = Math.random() * 2.5 + 1.5; // subtle sizes from 1.5px to 4px
        const xStart = Math.random() * 80 + 10; // offset slightly from edges
        const delay = i * 0.15; // staggered start
        const duration = Math.random() * 0.7 + 1.0; // quick and reactive particle lifecycle
        
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.2, x: `${xStart}%`, y: '90%' }}
            animate={{ 
              opacity: [0, 0.9, 0.4, 0],
              y: ['90%', '10%'],
              scale: [0.2, 1.2, 0.5]
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "easeOut"
            }}
            style={{ width: size, height: size }}
            className="absolute rounded-full bg-gradient-to-r from-amber-300 via-teal-400 to-emerald-400 opacity-0"
          />
        );
      })}
    </div>
  );
}

interface DesktopNavLinkProps {
  id: string;
  onClick: () => void;
  active: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  children: React.ReactNode;
  key?: string | number;
}

function DesktopNavLink({ id, onClick, active, onMouseEnter, onMouseLeave, children }: DesktopNavLinkProps) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => {
        setHovered(true);
        if (onMouseEnter) onMouseEnter();
      }}
      onMouseLeave={() => {
        setHovered(false);
        if (onMouseLeave) onMouseLeave();
      }}
      id={id}
      className={`relative overflow-hidden px-3 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 select-none ${
        active 
          ? 'glass-menu-active text-amber-200 border border-slate-700/50 shadow-inner shadow-amber-500/5' 
          : 'text-slate-300/80 glass-menu-hover border border-transparent'
      }`}
    >
      <span className="relative z-10">{children}</span>
      {hovered && <HoverParticles />}
    </button>
  );
}

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  language: 'EN' | 'FR' | 'MG';
  setLanguage: (lang: 'EN' | 'FR' | 'MG') => void;
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
  onOpenSearch: () => void;
}

export function Navbar({ activeTab, setActiveTab, language, setLanguage, theme, setTheme, onOpenSearch }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showMediaDropdown, setShowMediaDropdown] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(true);
  const [mobileMediaOpen, setMobileMediaOpen] = useState(true);

  const mainNavItems = [
    { id: 'sectors', label: { EN: 'Our Companies', FR: 'Nos Entreprises', MG: 'Ny Orinasanay' } },
    { id: 'services', label: { EN: 'Services', FR: 'Prestations', MG: 'Asa sy Tolotra' } },
    { id: 'portfolio', label: { EN: 'Portfolio', FR: 'Portefeuille', MG: 'Tahiry' } }
  ];

  const aboutSubItems = [
    { 
      id: 'about', 
      label: { EN: 'About Us', FR: 'À Propos de Nous', MG: 'Mombamomba Anay' }, 
      desc: { EN: 'Corporate foundation story & governance logs.', FR: "L'histoire de notre entreprise et chartes de gouvernance.", MG: 'Tantaran’ny orinasa sy ny fitsipika fitantanana.' } 
    },
    { 
      id: 'leadership', 
      label: { EN: 'Leadership', FR: 'Direction', MG: 'Fitarihana' }, 
      desc: { EN: 'Meet our executive board and committees.', FR: "Rencontrez notre conseil d'administration.", MG: 'Tantarao ireo mpitantana sy birao misahana.' } 
    },
    { 
      id: 'sustainability', 
      label: { EN: 'ESG / Sustainability', FR: 'Développement Durable', MG: 'Fampandrosoana Lovainjafy' }, 
      desc: { EN: 'Our decarbonization and circular mandates.', FR: 'Nos mandats de décarbonation et d’économie circulaire.', MG: 'Ny fepetra momba ny toekarena boribory.' } 
    },
    { 
      id: 'careers', 
      label: { EN: 'Careers', FR: 'Carrières', MG: 'Asa sy Fitadiavana' }, 
      desc: { EN: 'Join cross-sector innovators engineering tomorrow.', FR: 'Rejoignez nos innovateurs pour façonner demain.', MG: 'Midira amin’ny ekipa mpamorona ny ho avy.' } 
    }
  ];

  const mediaSubItems = [
    { 
      id: 'news', 
      label: { EN: 'News Feed', FR: "Fil d'Actualités", MG: 'Tati-baovao' }, 
      desc: { EN: 'Sovereign disclosures & announcements.', FR: 'Annonces et publications officielles.', MG: 'Famoahana ofisialy sy vaovao mafana.' } 
    },
    { 
      id: 'blogs', 
      label: { EN: 'Blogs & Essays', FR: 'Blogs & Analyses', MG: 'Lahatsoratra sy Blaogy' }, 
      desc: { EN: 'Thought leadership by our sector directors.', FR: 'Réflexions de fond de nos directeurs sectoriels.', MG: 'Hevitry ny manam-pahaizana mpanatanteraka.' } 
    },
    { 
      id: 'events', 
      label: { EN: 'Corporate Events', FR: "Événements d'Entreprise", MG: 'Hetsiky ny Orinasa' }, 
      desc: { EN: 'Upcoming circular summits & recent webcasts.', FR: 'Sommets de l’économie circulaire et diffusions.', MG: 'Fihaonambe sy sori-dalana voalahatra.' } 
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
        <div className="flex items-center justify-between h-24">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('home')} id="navbar-logo">
            <CompanyLogo id="vima" size="md" className="bg-transparent border-0 shadow-none p-0 !w-[200px] !h-[84px]" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-1 items-center" id="desktop-nav">
            {/* Home */}
            <DesktopNavLink
              id="nav-btn-home"
              onClick={() => handleNavClick('home')}
              active={activeTab === 'home'}
            >
              {language === 'EN' ? 'Home' : language === 'FR' ? 'Accueil' : 'Fandraisana'}
            </DesktopNavLink>

            {/* About Us Dropdown Trigger */}
            <div 
              className="relative group"
              onMouseEnter={() => setShowAboutDropdown(true)}
              onMouseLeave={() => setShowAboutDropdown(false)}
            >
              <DesktopNavLink
                id="nav-btn-about-menu"
                onClick={() => handleNavClick('about')}
                active={isAboutActive}
              >
                <span className="flex items-center space-x-1.5 justify-center">
                  <span>{language === 'EN' ? 'About Us' : language === 'FR' ? 'À propos' : 'Mombamomba Anay'}</span>
                  <ChevronDown size={14} className={`opacity-70 transition-transform duration-300 ${showAboutDropdown ? 'rotate-180 text-orange-400' : ''}`} />
                </span>
              </DesktopNavLink>

              {showAboutDropdown && (
                <div className="absolute left-0 mt-1 w-80 rounded-2xl bg-slate-950 border border-slate-900 shadow-2xl p-3 space-y-1.5 z-50 animate-fade-in">
                  <div className="absolute inset-0 rounded-2xl bg-orange-500/5 blur-xl pointer-events-none" />
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
                            ? 'bg-gradient-to-r from-orange-950/40 to-emerald-950/40 border border-orange-500/25 text-amber-300 shadow-inner' 
                            : 'hover:bg-slate-900 border border-transparent text-slate-355'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${
                          active 
                            ? 'bg-orange-900/30 border-orange-500/30 text-orange-400' 
                            : 'bg-slate-900 border-slate-800 text-slate-400 group-hover/sub:text-orange-400 group-hover/sub:border-orange-500/20 group-hover/sub:bg-orange-950/25'
                        }`}>
                          <Icon size={15} />
                        </div>
                        <div className="space-y-0.5">
                          <span className={`text-xs font-bold block transition-colors ${
                            active ? 'text-orange-400' : 'text-white group-hover/sub:text-orange-400'
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
                <DesktopNavLink
                  key={item.id}
                  id={`nav-btn-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  active={active}
                >
                  {item.label[language]}
                </DesktopNavLink>
              );
            })}

            {/* News & Insights Dropdown Trigger */}
            <div 
              className="relative group"
              onMouseEnter={() => setShowMediaDropdown(true)}
              onMouseLeave={() => setShowMediaDropdown(false)}
              id="nav-media-dropdown-wrapper"
            >
              <DesktopNavLink
                id="nav-btn-media-menu"
                onClick={() => handleNavClick('news')}
                active={isMediaActive}
              >
                <span className="flex items-center space-x-1.5 justify-center">
                  <span>{language === 'EN' ? 'News & Events' : language === 'FR' ? 'Actualités & Événements' : 'Vaovao & Hetsika'}</span>
                  <ChevronDown size={14} className={`opacity-70 transition-transform duration-300 ${showMediaDropdown ? 'rotate-180 text-orange-400' : ''}`} />
                </span>
              </DesktopNavLink>

              {showMediaDropdown && (
                <div className="absolute left-0 mt-1 w-80 rounded-2xl bg-slate-950 border border-slate-900 shadow-2xl p-3 space-y-1.5 z-50 animate-fade-in">
                  <div className="absolute inset-0 rounded-2xl bg-orange-500/5 blur-xl pointer-events-none" />
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
                            ? 'bg-gradient-to-r from-orange-950/40 to-emerald-950/40 border border-orange-500/25 text-amber-300 shadow-inner' 
                            : 'hover:bg-slate-900 border border-transparent text-slate-355'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${
                          active 
                            ? 'bg-orange-900/30 border-orange-500/30 text-orange-400' 
                            : 'bg-slate-900 border-slate-800 text-slate-400 group-hover/sub:text-orange-400 group-hover/sub:border-orange-500/20 group-hover/sub:bg-orange-950/25'
                        }`}>
                          <Icon size={15} />
                        </div>
                        <div className="space-y-0.5">
                          <span className={`text-xs font-bold block transition-colors ${
                            active ? 'text-orange-400' : 'text-white group-hover/sub:text-orange-400'
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
            <DesktopNavLink
              id="nav-btn-contact"
              onClick={() => handleNavClick('contact')}
              active={activeTab === 'contact'}
            >
              {language === 'EN' ? 'Contact' : language === 'FR' ? 'Contact' : 'Mifandraisa'}
            </DesktopNavLink>
          </nav>

          {/* Action / Language Controls */}
          <div className="hidden md:flex items-center space-x-4" id="nav-actions">
            


            {/* Theme Selector */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="flex items-center justify-center w-9 h-9 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white transition-all active:scale-95 duration-200 cursor-pointer"
              title={theme === 'dark' ? (language === 'EN' ? 'Switch to Light Theme' : language === 'FR' ? 'Mode Clair' : 'Hova Hazavana') : (language === 'EN' ? 'Switch to Dark Theme' : language === 'FR' ? 'Mode Sombre' : 'Hova Haizina')}
              id="desktop-theme-toggler"
            >
              {theme === 'dark' ? (
                <Sun size={15} className="text-amber-400 animate-pulse" />
              ) : (
                <Moon size={15} className="text-indigo-500 hover:text-indigo-400" />
              )}
            </button>

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
                  {(['EN', 'FR', 'MG'] as const).map((lang) => (
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
                      {lang === 'EN' ? 'English' : lang === 'FR' ? 'Français' : 'Malagasy'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Contact CTA */}
            <button
              onClick={() => handleNavClick('contact')}
              className="flex items-center space-x-2 glass-menu-active hover:bg-orange-500/10 px-6 py-2 rounded-full text-sm font-semibold text-orange-400 cursor-pointer transition-all duration-300 active:scale-95 border border-orange-500/30 hover:border-orange-400/50 shadow-lg shadow-orange-500/5"
              id="nav-quick-contact-btn"
            >
              <PhoneCall size={13} className="opacity-80" />
              <span>
                {language === 'EN' ? 'Inquire Now' : language === 'FR' ? 'Nous Contacter' : 'Hanontany Izao'}
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex xl:hidden items-center space-x-3">


            {/* Quick Theme Switcher */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="flex items-center justify-center w-8 h-8 rounded-md border border-slate-850 border-slate-800 text-slate-400 transition-all active:scale-95"
              title="Toggle Theme"
              id="mobile-quick-theme-toggler"
            >
              {theme === 'dark' ? (
                <Sun size={13} className="text-amber-400" />
              ) : (
                <Moon size={13} className="text-indigo-400" />
              )}
            </button>

            {/* Small Quick Lang */}
            <button
              onClick={() => {
                const cycle: ('EN' | 'FR' | 'MG')[] = ['EN', 'FR', 'MG'];
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
                ? 'bg-gradient-to-r from-orange-950/60 to-emerald-950/60 text-amber-300 border-l-4 border-[#db5b1a]' 
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            {language === 'EN' ? 'Home' : language === 'FR' ? 'Accueil' : 'Fandraisana'}
          </button>

          {/* About Us Accordion */}
          <div className="space-y-1">
            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                isAboutActive
                  ? 'bg-slate-900/40 text-orange-400' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              <span>{language === 'EN' ? 'About Us' : language === 'FR' ? 'À propos' : 'Mombamomba Anay'}</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${mobileAboutOpen ? 'rotate-180 text-orange-400' : ''}`} />
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
                          ? 'bg-orange-950/25 text-amber-300 border-l-2 border-orange-500 shadow-inner' 
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
                  ? 'bg-slate-900/40 text-orange-400' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              <span>{language === 'EN' ? 'News & Events' : language === 'FR' ? 'Actualités & Événements' : 'Vaovao & Hetsika'}</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${mobileMediaOpen ? 'rotate-180 text-orange-400' : ''}`} />
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
                          ? 'bg-orange-950/25 text-amber-300 border-l-2 border-orange-500 shadow-inner' 
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
                    ? 'bg-gradient-to-r from-orange-950/60 to-emerald-950/60 text-amber-300 border-l-4 border-[#db5b1a]' 
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
                ? 'bg-gradient-to-r from-orange-950/60 to-emerald-950/60 text-amber-300 border-l-4 border-[#db5b1a]' 
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            {language === 'EN' ? 'Contact Us' : language === 'FR' ? 'Contactez-nous' : 'Mifandraisa Aminay'}
          </button>
          
          <div className="pt-4 border-t border-slate-900 flex flex-col space-y-3 px-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-center premium-gradient-interactive text-white py-3 rounded-xl font-semibold text-sm transition-transform active:scale-95 shadow-lg shadow-orange-500/10"
            >
              {language === 'EN' ? 'Request Proposal' : language === 'FR' ? 'Demander une Proposition' : 'Hangataka Tolo-kevitra'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
