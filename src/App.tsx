import { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { LeadershipView } from './components/LeadershipView';
import { SectorsView } from './components/SectorsView';
import { ServicesView } from './components/ServicesView';
import { PortfolioView } from './components/PortfolioView';
import { SustainabilityView } from './components/SustainabilityView';
import { CareersView } from './components/CareersView';
import { ContactView } from './components/ContactView';
import { FloatingCanvas } from './components/FloatingCanvas';
import { NewsView } from './components/NewsView';
import { BlogsView } from './components/BlogsView';
import { EventsView } from './components/EventsView';
import { SearchOverlay } from './components/SearchOverlay';
import { LanguageToast } from './components/LanguageToast';

export default function App() {
  const [activeTab, setActiveTab ] = useState<string>('home');
  const [language, setLanguage] = useState<'EN' | 'FR' | 'MG'>('EN');
  const [selectedSectorId, setSelectedSectorId] = useState<string | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('mv-theme');
    return saved === 'light' ? 'light' : 'dark';
  });
  const [toast, setToast] = useState<{ title: string; desc: string; lang: 'EN' | 'FR' | 'MG' } | null>(null);

  const isInitialLang = useRef(true);

  // Sync theme class on HTML element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('mv-theme', theme);
  }, [theme]);

  // Monitor language switches
  useEffect(() => {
    if (isInitialLang.current) {
      isInitialLang.current = false;
      return;
    }

    const messages = {
      EN: { title: 'Language Changed', desc: 'The application is now presented in English.' },
      FR: { title: 'Langue Modifiée', desc: 'L’application est désormais affichée en Français.' },
      MG: { title: 'Fiteny Voasolo', desc: 'Mampiasa ny teny Malagasy ny pejy ankehitriny.' }
    };

    setToast({
      title: messages[language].title,
      desc: messages[language].desc,
      lang: language
    });

    const timer = setTimeout(() => {
      setToast(null);
    }, 4500);

    return () => clearTimeout(timer);
  }, [language]);

  // Global hotkey Cmd+K or Ctrl+K to toggle Search Overlay
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Safe tab selection handler that clears sub-details on manual clicks
  const handleSetActiveTab = (tab: string) => {
    setActiveTab(tab);
    setSelectedSectorId(null);
    setSelectedServiceId(null);
    setSelectedNewsId(null);
  };

  const handleSelectSearchResult = (type: 'sector' | 'service' | 'news', id: string) => {
    // Reset other sub views
    setSelectedSectorId(null);
    setSelectedServiceId(null);
    setSelectedNewsId(null);

    // Coordinate navigation
    if (type === 'sector') {
      setSelectedSectorId(id);
      setActiveTab('sectors');
    } else if (type === 'service') {
      setSelectedServiceId(id);
      setActiveTab('services');
    } else if (type === 'news') {
      setSelectedNewsId(id);
      setActiveTab('news');
    }
    
    // Smooth scroll to top of page
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  // Sync title based on active tab & language to support premium SEO / branding constraints
  useEffect(() => {
    const brandName = 'Vision Madagascar';
    const subNames = {
      home: { EN: 'Multi-Sector Corporate Portfolio', FR: "Portefeuille d'Activités Multi-Sectoriel", MG: 'Fasahan-draharaha Marolafy' },
      about: { EN: 'Corporate Story & Board', FR: "Histoire de l'Entreprise & Conseil", MG: 'Tantara sy ny Birao' },
      leadership: { EN: 'Fiduciary Leadership & Board', FR: 'Direction Fiduciaire & Conseil', MG: 'Fitarihana sy ny Birao Fitantanana' },
      sectors: { EN: 'Global Divisions', FR: 'Divisions Globales', MG: 'Sampan-draharaha Ara-Toe-karena' },
      services: { EN: 'Executive Solutions', FR: 'Solutions Exécutives', MG: "Vahaolana ho an'ny Mpanatanteraka" },
      portfolio: { EN: 'Asset Portfolio & Mega-Infrastructure', FR: "Portefeuille d'Actifs & Méga-Infrastructures", MG: 'Tahiry sy Fotodrafitrasa Goavana' },
      sustainability: { EN: 'ESG & Decarbonization Mandate', FR: 'Mandat ESG & Décarbonation', MG: 'Andraikitra ESG sy Fanafoanana ny Karbona' },
      careers: { EN: 'Human Capital & Vacancies', FR: 'Capital Humain & Postes Vacants', MG: 'Olombelona sy ny Asa Misy' },
      contact: { EN: 'Global Inquiries & Coordinates', FR: 'Demandes Globales & Coordonnées', MG: 'Fandraisana an-tanana sy Toerana misy' },
      news: { EN: 'Sovereign Disclosures & News Feed', FR: 'Publications Souveraines & Actualités', MG: 'Tati-baovao Ofisialy' },
      blogs: { EN: 'Executive Insights & Thought Leadership', FR: 'Perspectives de la Direction & Leadership', MG: 'Hevitry ny Mpitantana sy Fahalalana' },
      events: { EN: 'Global Conventions & Interactive Foras', FR: 'Conventions Globales & Forums Interactifs', MG: 'Fihaonambe sy Seha-pifanakalozana' }
    }[activeTab as keyof typeof subNames] || { EN: '', FR: '', MG: '' };

    document.title = `${brandName} | ${subNames[language]}`;
  }, [activeTab, language]);

  // View dispatcher
  const renderView = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeView
            language={language}
            setActiveTab={handleSetActiveTab}
            setSelectedSectorId={setSelectedSectorId}
          />
        );
      case 'about':
        return <AboutView language={language} setActiveTab={handleSetActiveTab} />;
      case 'leadership':
        return <LeadershipView language={language} />;
      case 'sectors':
        return (
          <SectorsView
            language={language}
            selectedSectorId={selectedSectorId}
            setSelectedSectorId={setSelectedSectorId}
            setActiveTab={handleSetActiveTab}
          />
        );
      case 'services':
        return <ServicesView language={language} selectedServiceId={selectedServiceId} />;
      case 'portfolio':
        return <PortfolioView language={language} />;
      case 'sustainability':
        return <SustainabilityView language={language} />;
      case 'careers':
        return <CareersView language={language} />;
      case 'contact':
        return <ContactView language={language} />;
      case 'news':
        return <NewsView language={language} selectedNewsId={selectedNewsId} />;
      case 'blogs':
        return <BlogsView language={language} />;
      case 'events':
        return <EventsView language={language} />;
      default:
        return (
          <HomeView
            language={language}
            setActiveTab={handleSetActiveTab}
            setSelectedSectorId={setSelectedSectorId}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between relative text-slate-100 select-none antialiased eco-rainbow-bg" id="aetheris-group-app">
      
      {/* Dynamic 3D Geometric Floating background canvas */}
      <FloatingCanvas />

      {/* Floating global gradient glow orbs to reinforce premium branding visuals */}
      <div className="orb orb-blue fixed top-[-100px] right-[-50px] pointer-events-none z-0" />
      <div className="orb orb-purple fixed bottom-[50px] left-[-50px] pointer-events-none z-0" />

      {/* Modern Frosted glass header navigation bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleSetActiveTab}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Primary scrollable view containers wrapper */}
      <main className="flex-grow z-10 w-full" id="root-viewport-control">
        {renderView()}
      </main>

      {/* Enterprise-grade multi-sector board information footer */}
      <Footer
        setActiveTab={handleSetActiveTab}
        language={language}
      />

      {/* Global Keyword Filter Search Overlay */}
      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        language={language}
        onSelectResult={handleSelectSearchResult}
      />

      {/* Dynamic Eco & Rainbow Language Change Confirm Toast */}
      <LanguageToast
        toast={toast}
        onClose={() => setToast(null)}
      />

    </div>
  );
}
