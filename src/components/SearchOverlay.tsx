import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  X, 
  Cpu, 
  Heart, 
  Building2, 
  HardHat, 
  Sparkles, 
  Combine, 
  Truck, 
  Briefcase, 
  Newspaper,
  CornerDownLeft,
  ChevronRight,
  TrendingUp,
  FileText
} from 'lucide-react';
import { SECTORS, SERVICES, CORPORATE_NEWS } from '../data/corporateData';
import { getTranslatedSectors, getTranslatedNews } from '../utils/translator';
import { DynamicIcon } from './DynamicIcon';
import { CompanyLogo } from './CompanyLogo';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'EN' | 'FR' | 'MG';
  onSelectResult: (type: 'sector' | 'service' | 'news', id: string) => void;
}

interface SearchResult {
  type: 'sector' | 'service' | 'news';
  id: string;
  title: string;
  desc: string;
  category: string;
  meta?: string;
}

const SECTOR_ICONS: Record<string, any> = {
  healthcare: Heart,
  technology: Cpu,
  realestate: Building2,
  construction: HardHat,
  energy: Sparkles,
  manufacturing: Combine,
  logistics: Truck,
  consulting: Briefcase
};

export function SearchOverlay({ isOpen, onClose, language, onSelectResult }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      setQuery('');
      setSelectedIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const translations = {
    EN: {
      placeholder: 'Search sectors, services, news...',
      noResults: 'No matches found',
      escToClose: 'Press ESC to close',
      sectors: 'Sectors & Divisions',
      services: 'Our Services',
      news: 'News & Disclosures',
      trending: 'Trending',
      keyboardNav: '↑↓ to navigate • ↵ to select',
      tips: 'Search "AI", "Wind", "Oncology", or "Logistics"'
    },
    FR: {
      placeholder: 'Rechercher divisions, services, actualités...',
      noResults: 'Aucun résultat trouvé',
      escToClose: 'ÉCHAP pour fermer',
      sectors: 'Sectors & Divisions',
      services: 'Nos Services',
      news: 'Actualités & Annonces',
      trending: 'Tendances',
      keyboardNav: '↑↓ pour naviguer • ↵ pour valider',
      tips: 'Essayez "AI", "Éolien", "Oncologie" ou "Logistique"'
    },
    MG: {
      placeholder: 'Hikaroka sampana, asa, tati-baovao...',
      noResults: 'Tsy nisy hita',
      escToClose: 'Tsindrio ESC hivoahana',
      sectors: 'Sectors & Divisions',
      services: 'Tolotra ho Anao',
      news: 'Tati-baovao & Hetsika',
      trending: 'Malaza',
      keyboardNav: '↑↓ mivezivezy • ↵ hisafidy',
      tips: 'Soraty "AI", "Môtô", "Fahasalamana", na "Fitaterana"'
    }
  }[language];

  const quickSearches = [
    { EN: 'AI & Cloud', FR: 'AI & Cloud', MG: 'AI & Cloud', val: 'AI' },
    { EN: 'Offshore Wind', FR: 'Éolien', MG: 'Angovo', val: 'Wind' },
    { EN: 'Oncology', FR: 'Oncologie', MG: 'Fahasalamana', val: 'Oncology' },
    { EN: 'Smart City', FR: 'Ville Intelligente', MG: 'Tanàna', val: 'Smart City' },
    { EN: 'Logistics', FR: 'Logistique', MG: 'Fitaterana', val: 'Logistics' }
  ];

  // Search filter
  const translatedSectors = getTranslatedSectors(SECTORS, language);
  const translatedNews = getTranslatedNews(CORPORATE_NEWS, language);

  const searchResults: SearchResult[] = [];
  const q = query.trim().toLowerCase();

  if (q.length > 0) {
    // 1. Search sectors
    translatedSectors.forEach(sec => {
      const matchName = sec.name.toLowerCase().includes(q);
      const matchDesc = sec.description.toLowerCase().includes(q);
      const matchSubServices = sec.services.some(s => s.toLowerCase().includes(q));
      if (matchName || matchDesc || matchSubServices) {
        searchResults.push({
          type: 'sector',
          id: sec.id,
          title: sec.name,
          desc: sec.description,
          category: translations.sectors,
          meta: sec.services.slice(0, 2).join(', ')
        });
      }
    });

    // 2. Search services
    SERVICES.forEach(serv => {
      const matchName = serv.name.toLowerCase().includes(q);
      const matchDesc = serv.description.toLowerCase().includes(q);
      const matchFeatures = serv.features.some(f => f.toLowerCase().includes(q));
      if (matchName || matchDesc || matchFeatures) {
        searchResults.push({
          type: 'service',
          id: serv.id,
          title: serv.name,
          desc: serv.description,
          category: translations.services,
          meta: serv.features.slice(0, 2).join(' • ')
        });
      }
    });

    // 3. Search corporate news
    translatedNews.forEach(news => {
      const matchTitle = news.title.toLowerCase().includes(q);
      const matchSumm = news.summary.toLowerCase().includes(q);
      const matchContent = news.content.toLowerCase().includes(q);
      const matchCat = news.category.toLowerCase().includes(q);
      if (matchTitle || matchSumm || matchContent || matchCat) {
        searchResults.push({
          type: 'news',
          id: news.id,
          title: news.title,
          desc: news.summary,
          category: `${translations.news} (${news.category})`,
          meta: news.date
        });
      }
    });
  }

  // Handle keyboard events globally
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
        e.preventDefault();
      } else if (e.key === 'ArrowDown') {
        setSelectedIndex(prev => (prev + 1) % Math.max(1, searchResults.length));
        e.preventDefault();
      } else if (e.key === 'ArrowUp') {
        setSelectedIndex(prev => (prev - 1 + searchResults.length) % Math.max(1, searchResults.length));
        e.preventDefault();
      } else if (e.key === 'Enter') {
        if (searchResults.length > 0) {
          const item = searchResults[selectedIndex];
          if (item) {
            onSelectResult(item.type, item.id);
            onClose();
          }
        }
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, searchResults, selectedIndex, onClose, onSelectResult]);

  // Handle outside click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getResultIcon = (item: SearchResult) => {
    if (item.type === 'sector') {
      return <CompanyLogo id={item.id} size="sm" className="shrink-0" />;
    }
    if (item.type === 'service') {
      return <Cpu size={16} className="text-orange-400 shrink-0" />;
    }
    return <Newspaper size={16} className="text-amber-300 shrink-0" />;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-lg z-50 flex items-start justify-center pt-[10vh] px-4 overflow-y-auto"
          id="global-search-backdrop"
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-full max-w-2xl bg-slate-950 border border-slate-900 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col md:max-h-[650px] max-h-[80vh]"
            id="search-overlay-modal-container"
            ref={containerRef}
          >
            {/* Top orange line accent */}
            <div className="h-1 premium-gradient-active absolute top-0 left-0 w-full" />

            {/* Input Bar */}
            <div className="flex items-center px-4 py-4 border-b border-slate-900 relative">
              <Search className="text-slate-400 mr-3 shrink-0" size={18} />
              <input
                ref={inputRef}
                type="text"
                placeholder={translations.placeholder}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full bg-transparent text-white placeholder-slate-500 font-light text-sm outline-none border-none py-1 pr-10"
                id="search-overlay-input"
              />
              <button 
                onClick={onClose}
                className="p-1 px-2.5 rounded-lg border border-slate-900 text-[10px] uppercase font-mono text-slate-500 hover:text-white hover:border-slate-800 transition-colors cursor-pointer shrink-0 ml-2"
                id="search-overlay-close-btn"
              >
                {translations.escToClose}
              </button>
            </div>

            {/* Content body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4" id="search-overlay-body">
              {query.length === 0 ? (
                // Quick suggestions when search is empty
                <div className="space-y-4 py-4 animate-fade-in text-left">
                  <div className="uppercase font-mono text-[9px] tracking-widest text-[#db5b1a] flex items-center space-x-1.5">
                    <TrendingUp size={11} />
                    <span>{translations.trending}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-slate-205">
                    {quickSearches.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setQuery(item.val);
                          inputRef.current?.focus();
                        }}
                        className="px-3.5 py-2 rounded-xl bg-slate-900/60 border border-slate-900 text-xs font-medium text-slate-300 hover:text-orange-400 hover:border-orange-500/25 hover:bg-orange-950/10 cursor-pointer transition-all duration-200"
                      >
                        {item[language] || item.EN}
                      </button>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-slate-900/50">
                    <span className="text-[10px] font-mono text-slate-500 block leading-tight">
                      {translations.tips}
                    </span>
                  </div>
                </div>
              ) : searchResults.length > 0 ? (
                // Filtered search results
                <div className="space-y-1 text-left" id="search-results-list">
                  {searchResults.map((item, index) => {
                    const isSelected = selectedIndex === index;
                    return (
                      <div
                        key={`${item.type}-${item.id}`}
                        onClick={() => {
                          onSelectResult(item.type, item.id);
                          onClose();
                        }}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`p-3.5 rounded-xl transition-all duration-150 flex items-start space-x-3.5 cursor-pointer relative ${
                          isSelected 
                            ? 'bg-gradient-to-r from-orange-950/20 to-emerald-950/20 border border-orange-500/20 text-white' 
                            : 'bg-transparent border border-transparent hover:bg-slate-900/30'
                        }`}
                        id={`search-item-${item.type}-${item.id}`}
                      >
                        {/* Selected Indicator Pill on Left */}
                        {isSelected && (
                          <div className="absolute left-0 top-3 bottom-3 w-1 bg-gradient-to-b from-[#db5b1a] to-[#1f8a5a] rounded-r" />
                        )}

                        <div className={`p-2.5 rounded-lg shrink-0 border ${
                          isSelected 
                            ? 'bg-orange-900/25 border-orange-500/30' 
                            : 'bg-slate-900 border-slate-900'
                        }`}>
                          {getResultIcon(item)}
                        </div>

                        <div className="space-y-0.5 flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="uppercase text-[8px] font-mono text-[#9cb933] tracking-widest font-bold">
                              {item.category}
                            </span>
                            {item.meta && (
                              <span className="text-[8px] font-mono text-slate-500 text-right truncate max-w-[150px]">
                                {item.meta}
                              </span>
                            )}
                          </div>
                          <span className={`text-xs font-bold block truncate transition-colors ${
                            isSelected ? 'text-orange-400' : 'text-slate-200'
                          }`}>
                            {item.title}
                          </span>
                          <span className="text-[10px] text-slate-400 block line-clamp-1 font-light leading-snug">
                            {item.desc}
                          </span>
                        </div>

                        {isSelected && (
                          <div className="text-[9px] font-mono text-emerald-400 shrink-0 self-center hidden sm:flex items-center space-x-1 uppercase tracking-wide">
                            <CornerDownLeft size={10} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                // No results matches found
                <div className="py-12 text-center space-y-2" id="search-no-results">
                  <div className="w-12 h-12 rounded-full border border-slate-900 flex items-center justify-center mx-auto text-slate-600 bg-slate-950">
                    <FileText size={18} />
                  </div>
                  <span className="text-slate-400 text-xs font-bold block">
                    {translations.noResults}
                  </span>
                  <span className="text-slate-650 text-[10px] font-mono text-slate-500 block">
                    "{query}"
                  </span>
                </div>
              )}
            </div>

            {/* Keyboard instructions footer */}
            <div className="px-4 py-2.5 bg-slate-950/90 border-t border-slate-900 flex justify-between items-center text-[9px] font-mono text-slate-500 shrink-0">
              <span>Vision Madagascar Navigation Engine</span>
              <span>{translations.keyboardNav}</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
