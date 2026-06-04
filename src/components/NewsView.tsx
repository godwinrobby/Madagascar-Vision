import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CORPORATE_NEWS } from '../data/corporateData';
import { NewsItem } from '../types';
import { Calendar, Search, ArrowRight, X, Heart, ShieldCheck, Newspaper } from 'lucide-react';

interface NewsViewProps {
  language: 'EN' | 'DE' | 'JP';
}

export function NewsView({ language }: NewsViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const translations = {
    EN: {
      title: 'Sovereign Disclosures & News Feed',
      sub: 'Official verifiable records, global joint ventures, M&A statements, and research breakthroughs published by the groups corporate board.',
      searchPlaceholder: 'Search media archives...',
      filterAll: 'All Disclosures',
      viewArticle: 'Read Full Press Release',
      closeBtn: 'Close Record',
      categoryLabel: 'Category',
      backBtn: 'Return to Press Hub',
      publishedOn: 'Published'
    },
    DE: {
      title: 'Konzernpresse & Offizielle Mitteilungen',
      sub: 'Verifizierbare Aufzeichnungen, transatlantische Joint-Ventures und wissenschaftliche Durchbrüche unseres Aufsichtsrates.',
      searchPlaceholder: 'Pressearchiv durchsuchen...',
      filterAll: 'Alle Mitteilungen',
      viewArticle: 'Vollständige Meldung lesen',
      closeBtn: 'Schließen',
      categoryLabel: 'Kategorie',
      backBtn: 'Zurück zum Presse-Hub',
      publishedOn: 'Veröffentlicht am'
    },
    JP: {
      title: '連結プレスリリース・公式情報開示ログ',
      sub: 'マダガスカル・ビジョン取締役会が署名した公式発表、グローバル合弁事業、M&A合意声明、および各研究ユニットの技術ブレイクスルー記録。',
      searchPlaceholder: '開示アーカイブを検索...',
      filterAll: 'すべての情報開示',
      viewArticle: 'プレスリリース全文を読む',
      closeBtn: '記録を閉じる',
      categoryLabel: 'カテゴリー',
      backBtn: '開示ハブに戻る',
      publishedOn: '発行日'
    }
  }[language];

  const categories = ['ALL', ...Array.from(new Set(CORPORATE_NEWS.map(n => n.category)))];

  const filteredNews = CORPORATE_NEWS.filter(news => {
    const matchesCategory = activeCategory === 'ALL' || news.category === activeCategory;
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          news.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          news.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="news-view-container" className="space-y-16 pb-24 relative animate-fade-in">
      
      {/* Hero Header */}
      <section className="relative pt-32 pb-4 overflow-hidden text-center max-w-4xl mx-auto px-4" id="news-intro">
        <span className="font-mono text-[10px] text-emerald-400 tracking-widest uppercase border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-950/20 inline-flex items-center space-x-1.5">
          <Newspaper size={11} />
          <span>VERIFIED MEDIA REGISTRATION</span>
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-4">
          {translations.title}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl mx-auto font-light">
          {translations.sub}
        </p>
      </section>

      {/* Filter and Search Bar Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="news-controls">
        <div className="glass rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border border-slate-900 shadow-xl">
          
          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2 items-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-mono tracking-wide border transition-all cursor-pointer ${
                  activeCategory === cat 
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-bold' 
                    : 'text-slate-400 hover:text-slate-200 border-slate-900 hover:border-slate-800 bg-slate-950/40'
                }`}
              >
                {cat === 'ALL' ? translations.filterAll : cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
            <input
              type="text"
              placeholder={translations.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 text-white rounded-xl py-2 pl-9 pr-4 text-xs font-light border border-slate-900 focus:border-emerald-500/50 outline-none transition-all placeholder:text-slate-600"
            />
          </div>

        </div>
      </section>

      {/* News Feed Cards Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="news-feed-grid">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <div 
              key={news.id}
              onClick={() => setSelectedNews(news)}
              className="glass card-hover rounded-2xl p-6 text-left flex flex-col justify-between h-[400px] cursor-pointer group relative overflow-hidden"
              id={`news-card-${news.id}`}
            >
              <div className="space-y-4">
                
                {/* Visual Header Image Seed */}
                <div className="aspect-[16/10] bg-slate-900 rounded-xl overflow-hidden border border-white/5 relative">
                  <img 
                    src={`https://picsum.photos/seed/${news.imageSeed}/400/250`} 
                    alt={news.title}
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70" />
                  
                  <span className="absolute top-2 left-2 bg-slate-950/90 border border-slate-850 px-2.5 py-0.5 rounded-lg font-mono text-[8px] text-emerald-400 tracking-widest uppercase">
                    {news.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center text-[10px] font-mono text-slate-500 space-x-1.5">
                    <Calendar size={10} />
                    <span>{news.date}</span>
                  </div>

                  <h3 className="text-white text-sm sm:text-base font-extrabold tracking-tight group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {news.title}
                  </h3>

                  <p className="text-slate-400 text-xs font-light leading-relaxed line-clamp-3">
                    {news.summary}
                  </p>
                </div>

              </div>

              {/* Bottom Card Border and Dispatch Controls */}
              <div className="border-t border-slate-900 pt-3 mt-4 flex items-center justify-between text-[10px] font-mono">
                <span className="text-slate-500 uppercase">Æ PRESS TRANSCRIPT</span>
                <span className="text-emerald-400 font-bold flex items-center space-x-1 hover:text-white transition-colors">
                  <span>ACCESS</span>
                  <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

            </div>
          ))}

          {filteredNews.length === 0 && (
            <div className="col-span-full py-16 text-center glass rounded-2xl border border-slate-900">
              <span className="text-slate-500 text-xs font-mono block">NO PRESS PROTOCOLS MATCH SEARCH QUERY</span>
            </div>
          )}
        </div>
      </section>

      {/* Complete News Modal Disclosure */}
      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4" id="news-overlay-modal">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="glass w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative flex flex-col max-h-[85vh] border border-slate-900"
            >
              
              {/* Header */}
              <div className="p-6 border-b border-slate-900 flex justify-between items-center bg-slate-950/50 backdrop-blur-xl">
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-0.5">
                    PRESS DISCLOSURE PROTOCOL • {selectedNews.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 flex items-center space-x-1">
                    <Calendar size={10} />
                    <span>{translations.publishedOn}: {selectedNews.date}</span>
                  </span>
                </div>

                <button
                  onClick={() => setSelectedNews(null)}
                  className="p-2 hover:bg-slate-905 rounded-xl transition-colors text-slate-400 hover:text-white cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable details */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-left flex-1 font-light leading-relaxed">
                
                {/* Micro-Banner */}
                <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                  <img
                    src={`https://picsum.photos/seed/${selectedNews.imageSeed}/800/400`}
                    alt={selectedNews.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h2 className="text-white text-xl sm:text-2xl font-black tracking-tight font-sans">
                  {selectedNews.title}
                </h2>

                <blockquote className="border-l-2 border-emerald-500 pl-4 py-1 text-slate-400 text-xs sm:text-sm font-light italic">
                  {selectedNews.summary}
                </blockquote>

                <div className="text-slate-300 text-xs sm:text-sm space-y-4 font-light leading-relaxed pt-2">
                  <p>{selectedNews.content}</p>
                  <p>
                    All strategic updates and M&A developments from the Vision Madagascar executive syndicate represent certified ESG logs validated across decentralized audits.
                  </p>
                </div>

                {/* Corporate Verifications footer */}
                <div className="border-t border-slate-900 pt-5 mt-6 grid grid-cols-2 gap-4 text-[10px] font-mono text-slate-500">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    <span>VERIFIED PUBLIC TRANSCRIPT</span>
                  </div>
                  <div className="text-right">
                    <span>SECURITY HASH: Æ-SEC-14902</span>
                  </div>
                </div>

              </div>

              {/* Bottom bar */}
              <div className="p-4 bg-slate-950/80 border-t border-slate-900 flex justify-end">
                <button
                  onClick={() => setSelectedNews(null)}
                  className="px-5 py-2 hover:bg-slate-900 text-slate-300 rounded-xl text-xs font-semibold tracking-wider transition-all border border-slate-850 cursor-pointer"
                >
                  {translations.backBtn}
                </button>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
