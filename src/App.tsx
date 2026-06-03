import { useState, useEffect } from 'react';
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

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [language, setLanguage] = useState<'EN' | 'DE' | 'JP'>('EN');
  const [selectedSectorId, setSelectedSectorId] = useState<string | null>(null);

  // Sync title based on active tab & language to support premium SEO / branding constraints
  useEffect(() => {
    const brandName = 'Madagascar Vision';
    const subNames = {
      home: { EN: 'Multi-Sector Corporate Portfolio', DE: 'Mischkonzern & Beteiligungen', JP: '多角インフラ持株グループ' },
      about: { EN: 'Corporate Story & Board', DE: 'Über uns & Direktorium', JP: '企業沿革・経営陣' },
      leadership: { EN: 'Fiduciary Leadership & Board', DE: 'Direktorium & Aufsichtsrat', JP: '役員・ガバナンス体制' },
      sectors: { EN: 'Global Divisions', DE: 'Geschäftsbereiche', JP: '事業セクター' },
      services: { EN: 'Executive Solutions', DE: 'Dienstleistungen', JP: 'サービス分野' },
      portfolio: { EN: 'Asset Portfolio & Mega-Infrastructure', DE: 'Asset-Portfolio & Infrastruktur', JP: '開発実績ポートフォリオ' },
      sustainability: { EN: 'ESG & Decarbonization Mandate', DE: 'ESG & Nachhaltigkeit', JP: '環境ESG・社会的厚生' },
      careers: { EN: 'Human Capital & Vacancies', DE: 'Karriere & Vakanzen', JP: '採用情報・キャリア' },
      contact: { EN: 'Global Inquiries & Coordinates', DE: 'Direktkontakt & Adressen', JP: 'お問い合わせ窓口' },
      news: { EN: 'Sovereign Disclosures & News Feed', DE: 'Presse & Mitteilungen', JP: '公式プレス開示ログ' },
      blogs: { EN: 'Executive Insights & Thought Leadership', DE: 'Blogs & Essays', JP: '経営陣インサイト・コラム' },
      events: { EN: 'Global Conventions & Interactive Foras', DE: 'Konzernkooperationen & Events', JP: 'サミット・開発カンファレンス' }
    }[activeTab as keyof typeof subNames] || { EN: '', DE: '', JP: '' };

    document.title = `${brandName} | ${subNames[language]}`;
  }, [activeTab, language]);

  // View dispatcher
  const renderView = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeView
            language={language}
            setActiveTab={setActiveTab}
            setSelectedSectorId={setSelectedSectorId}
          />
        );
      case 'about':
        return <AboutView language={language} setActiveTab={setActiveTab} />;
      case 'leadership':
        return <LeadershipView language={language} />;
      case 'sectors':
        return (
          <SectorsView
            language={language}
            selectedSectorId={selectedSectorId}
            setSelectedSectorId={setSelectedSectorId}
          />
        );
      case 'services':
        return <ServicesView language={language} />;
      case 'portfolio':
        return <PortfolioView language={language} />;
      case 'sustainability':
        return <SustainabilityView language={language} />;
      case 'careers':
        return <CareersView language={language} />;
      case 'contact':
        return <ContactView language={language} />;
      case 'news':
        return <NewsView language={language} />;
      case 'blogs':
        return <BlogsView language={language} />;
      case 'events':
        return <EventsView language={language} />;
      default:
        return (
          <HomeView
            language={language}
            setActiveTab={setActiveTab}
            setSelectedSectorId={setSelectedSectorId}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between relative text-slate-100 select-none antialiased" id="aetheris-group-app">
      
      {/* Dynamic 3D Geometric Floating background canvas */}
      <FloatingCanvas />

      {/* Floating global gradient glow orbs to reinforce premium branding visuals */}
      <div className="orb orb-blue fixed top-[-100px] right-[-50px] pointer-events-none z-0" />
      <div className="orb orb-purple fixed bottom-[50px] left-[-50px] pointer-events-none z-0" />

      {/* Modern Frosted glass header navigation bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Primary scrollable view containers wrapper */}
      <main className="flex-grow z-10 w-full" id="root-viewport-control">
        {renderView()}
      </main>

      {/* Enterprise-grade multi-sector board information footer */}
      <Footer
        setActiveTab={setActiveTab}
        language={language}
      />

    </div>
  );
}
