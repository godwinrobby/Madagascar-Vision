import { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { CORPORATE_NEWS } from '../data/corporateData';
import { getTranslatedNews } from '../utils/translator';
import { NewsItem } from '../types';
import { Calendar, Search, ArrowRight, ShieldCheck, Newspaper, ArrowLeft, Share2, Sparkles, Tag } from 'lucide-react';
import { Helmet } from './Helmet';

interface NewsViewProps {
  language: 'EN' | 'FR' | 'MG';
  selectedNewsId?: string | null;
}

export function NewsView({ language, selectedNewsId }: NewsViewProps) {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const translatedNews = getTranslatedNews(CORPORATE_NEWS, language);

  // Resolve active news if selectedNewsId is active in URL route
  const selectedNews = selectedNewsId 
    ? translatedNews.find(n => n.id === selectedNewsId) || null
    : null;

  const translations = {
    EN: {
      title: 'Sovereign Disclosures & News Feed',
      sub: 'Official verifiable records, global joint ventures, M&A statements, and research breakthroughs published by the group\'s corporate board.',
      searchPlaceholder: 'Search media archives...',
      filterAll: 'All Disclosures',
      viewArticle: 'Read Full Press Release',
      closeBtn: 'Close Record',
      categoryLabel: 'Category',
      backBtn: 'Return to Press Hub',
      publishedOn: 'Published',
      shareBtn: 'Share Disclosure',
      copiedText: 'Copied Link!',
      relatedTitle: 'Related Disclosures & Press releases',
      readMore: 'ACCESS TRANSCRIPT'
    },
    FR: {
      title: 'Publications Officielles & Centre de Presse',
      sub: 'Avis validés par le comité, acquisitions majeures, co-entreprises d’envergure et brevets déposés par la holding.',
      searchPlaceholder: 'Rechercher dans les archives...',
      filterAll: 'Toutes les Publications',
      viewArticle: 'Lire le communiqué entier',
      closeBtn: 'Fermer',
      categoryLabel: 'Catégorie',
      backBtn: 'Retourner au centre de presse',
      publishedOn: 'Publié le',
      shareBtn: 'Partager la publication',
      copiedText: 'Lien copié !',
      relatedTitle: 'Autres Communiqués de Presse',
      readMore: 'ACCÉDER AU COMMUNIQUÉ'
    },
    MG: {
      title: 'Tati-baovao Ofisialy sy Taratasy mivoaka',
      sub: 'Ireo fanambarana ofisialy rehetra avy amin’ny filan-kevi-pitantanan’ny Vima sy fiaraha-miasa vaovao.',
      searchPlaceholder: 'Hikaroka amin’ny tahirin-kevitra...',
      filterAll: 'Ny Tati-baovao rehetra',
      viewArticle: 'Hamaky ny tati-baovao feno',
      closeBtn: 'Hanakatona',
      categoryLabel: 'Sokajy',
      backBtn: 'Hiverina amin’ny pejy fandraisana tati-baovao',
      publishedOn: 'Navoaka tamin’ny',
      shareBtn: 'Hizara ny lahatsoratra',
      copiedText: 'Voakopia!',
      relatedTitle: 'Tati-baovao Hafa Mifandraika',
      readMore: 'HIJERY NY TATI-BAOVAO'
    }
  }[language];

  const categories = ['ALL', ...Array.from(new Set(translatedNews.map(n => n.category)))];

  const filteredNews = translatedNews.filter(news => {
    const matchesCategory = activeCategory === 'ALL' || news.category === activeCategory;
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          news.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          news.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // If a news item is selected via URL path, show the dedicated page
  if (selectedNews) {
    const relatedNews = translatedNews
      .filter(n => n.id !== selectedNews.id)
      .slice(0, 3);

    const handleCopyLink = () => {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    };

    return (
      <div id="news-detail-container" className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in relative">
        <Helmet
          title={`${selectedNews.title} | Vision Madagascar Press`}
          description={selectedNews.summary}
          keywords={`${selectedNews.category}, ${selectedNews.title}, Vision Madagascar`}
          ogImage={`https://picsum.photos/seed/${selectedNews.imageSeed}/800/500`}
          ogType="article"
          language={language}
        />

        {/* Back navigation & Actions bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <button
            onClick={() => {
              navigate('/news');
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

        {/* Hero image for news press release */}
        <div className="aspect-[21/9] w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-900 shadow-2xl relative mb-10">
          <img
            src={`https://picsum.photos/seed/${selectedNews.imageSeed}/1200/600`}
            alt={selectedNews.title}
            className="w-full h-full object-cover grayscale brightness-90 contrast-102 hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center gap-4 justify-between">
            {/* Category badge */}
            <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/85 border border-emerald-500/30 px-3 py-1 rounded-full uppercase tracking-widest font-extrabold">
              {selectedNews.category}
            </span>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main article body */}
          <article className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight uppercase font-sans">
                {selectedNews.title}
              </h1>
              
              <div className="flex items-center space-x-3 text-xs text-slate-500 font-mono py-2 border-y border-slate-900/60">
                <span className="flex items-center space-x-1.5">
                  <Calendar size={12} />
                  <span>{translations.publishedOn}: {selectedNews.date}</span>
                </span>
                <span className="text-slate-700">•</span>
                <span className="text-slate-400">DISCLOSURE: PUBLIC ACCESS</span>
              </div>
            </div>

            {/* Quote / Summary summary */}
            <blockquote className="border-l-4 border-emerald-500 bg-emerald-950/5 rounded-r-2xl p-6 text-slate-300 text-sm sm:text-base font-light italic leading-relaxed shadow-sm">
              {selectedNews.summary}
            </blockquote>

            {/* Complete content paragraphs */}
            <div className="text-slate-300 text-sm sm:text-base space-y-6 font-light leading-relaxed prose prose-invert max-w-none">
              <p>{selectedNews.content}</p>
              <p>
                As part of Vision Madagascar's transparent governance mandate, all strategic releases and financial partnerships undergo third-party auditing to align operational metrics with standard SDG frameworks. Our dedication to local economic empowerment dictates that every initiative includes active human-capital capacity building.
              </p>
              <p>
                Vision Madagascar (ViMa) continues to solidify its role as a key contributor to the economic expansion of the country. With reliable infrastructure, diverse holdings, and forward-looking strategic programs, our directors remain focused on facilitating long-term national development across the region.
              </p>
            </div>

            {/* Corporate Verifications footer */}
            <div className="border-t border-slate-900 pt-6 mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[10px] font-mono text-slate-500">
              <div className="flex items-center space-x-2">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span className="tracking-wider uppercase">VERIFIED PUBLIC TRANSCRIPT</span>
              </div>
              <div className="sm:text-right">
                <span className="tracking-wider">SECURITY HASH: Æ-SEC-{selectedNews.id.toUpperCase()}</span>
              </div>
            </div>

          </article>

          {/* Right rail sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="glass p-6 rounded-2xl border border-slate-900 space-y-4">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-black pb-2 border-b border-slate-900">
                DOCUMENT METADATA
              </h4>
              <div className="space-y-3 font-mono text-[10px] text-slate-500">
                <div className="flex justify-between">
                  <span>REGISTRY:</span>
                  <span className="text-emerald-400 font-bold">ACTIVE PRESS</span>
                </div>
                <div className="flex justify-between">
                  <span>COMMITTED BY:</span>
                  <span className="text-white">ViMa COMMS</span>
                </div>
                <div className="flex justify-between">
                  <span>AUDIT SYSTEM:</span>
                  <span>CENTRALIZED</span>
                </div>
                <div className="flex justify-between">
                  <span>VERSION:</span>
                  <span>v1.0.0</span>
                </div>
              </div>
            </div>

            {/* Support info card */}
            <div className="p-6 rounded-2xl bg-emerald-950/10 border border-emerald-500/20 space-y-4">
              <Sparkles size={16} className="text-emerald-400" />
              <div className="space-y-1">
                <h5 className="text-white text-xs font-bold uppercase tracking-wider">Media Inquiries</h5>
                <p className="text-slate-400 text-[11px] font-light leading-relaxed">
                  For press kits, executive interview passes, or high-resolution media assets, please contact our public relations office.
                </p>
              </div>
            </div>
          </aside>

        </div>

        {/* Related News section */}
        {relatedNews.length > 0 && (
          <section className="mt-20 pt-12 border-t border-slate-900/60 space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase block font-bold">
                OTHER NEWS FROM PRESS DISPATCH
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
                {translations.relatedTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedNews.map(news => (
                <div
                  key={news.id}
                  onClick={() => {
                    navigate(`/news/${news.id}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="glass card-hover rounded-2xl p-5 text-left flex flex-col justify-between h-[380px] cursor-pointer group"
                >
                  <div className="space-y-4">
                    <div className="aspect-[16/10] bg-slate-900 rounded-xl overflow-hidden border border-white/5 relative">
                      <img
                        src={`https://picsum.photos/seed/${news.imageSeed}/300/180`}
                        alt={news.title}
                        className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[9px] font-mono text-slate-550">{news.date}</span>
                      <h4 className="text-white text-xs font-extrabold tracking-tight group-hover:text-emerald-400 transition-colors line-clamp-2">
                        {news.title}
                      </h4>
                    </div>
                  </div>

                  <div className="border-t border-slate-900 pt-3 flex items-center justify-between text-[9px] font-mono text-slate-500">
                    <span className="uppercase">{news.category}</span>
                    <span className="text-emerald-400 font-bold flex items-center space-x-1 group-hover:text-white transition-colors">
                      <span>READ</span>
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
    <div id="news-view-container" className="space-y-16 pb-24 relative animate-fade-in">
      <Helmet
        title={translations.title}
        description={translations.sub}
        language={language}
      />
      
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
              onClick={() => {
                navigate(`/news/${news.id}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
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

                  <h3 className="text-white text-sm sm:text-base font-extrabold tracking-tight group-hover:text-emerald-400 transition-colors line-clamp-2 uppercase">
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
                  <span>{translations.readMore.split(' ')[0]}</span>
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

    </div>
  );
}
