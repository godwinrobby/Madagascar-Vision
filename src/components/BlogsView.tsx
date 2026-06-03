import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CORPORATE_BLOGS } from '../data/corporateData';
import { BlogItem } from '../types';
import { Calendar, User, Search, Clock, ArrowRight, X, Sparkles, BookOpen, Tag } from 'lucide-react';

interface BlogsViewProps {
  language: 'EN' | 'DE' | 'JP';
}

export function BlogsView({ language }: BlogsViewProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const translations = {
    EN: {
      title: 'Executive Insights & Thought Leadership',
      sub: 'Analytical whitepapers, market coordinates, technology research, and strategic guides written by the directors of Madagascar Vision.',
      searchPlaceholder: 'Search essays & research...',
      allTags: 'All Articles',
      readTime: 'Read Time',
      writtenBy: 'Written By',
      closeBtn: 'Close Essay',
      backBtn: 'Back to Insights',
      articleTags: 'Article Tags'
    },
    DE: {
      title: 'Direktions-Analysen & Vordenker-Artikel',
      sub: 'Analytische Fachberichte, Markttrends, Technologieforschung und strategische Leitfäden unserer Fachdirektoren.',
      searchPlaceholder: 'Essays & Publikationen durchsuchen...',
      allTags: 'Alle Artikel',
      readTime: 'Lesezeit',
      writtenBy: 'Autor',
      closeBtn: 'Schließen',
      backBtn: 'Zurück zur Übersicht',
      articleTags: 'Schlagworte'
    },
    JP: {
      title: 'エグゼクティブ・インサイト ＆ 経営論文',
      sub: 'マダガスカル・ビジョンの代表取締役・各分野統括ディレクターによる分析報告、市場予測、先進技術リサーチ、および都市経営戦略のコラム。',
      searchPlaceholder: 'エッセイとリサーチ論文を検索...',
      allTags: 'すべての記事',
      readTime: '読了時間',
      writtenBy: '執筆者',
      closeBtn: 'コラムを閉じる',
      backBtn: 'インサイトハブに戻る',
      articleTags: '関連キーワードタグ'
    }
  }[language];

  // Compile all tag options
  const allTags = Array.from(new Set(CORPORATE_BLOGS.flatMap(b => b.tags)));

  const filteredBlogs = CORPORATE_BLOGS.filter(blog => {
    const matchesTag = !selectedTag || blog.tags.includes(selectedTag);
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div id="blogs-view-container" className="space-y-16 pb-24 relative animate-fade-in">
      
      {/* Intro Header */}
      <section className="relative pt-32 pb-4 overflow-hidden text-center max-w-4xl mx-auto px-4" id="blogs-intro">
        <span className="font-mono text-[10px] text-emerald-400 tracking-widest uppercase border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-950/20 inline-flex items-center space-x-1.5">
          <BookOpen size={11} />
          <span>OFFICIAL BOARD ESSAYS</span>
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-4">
          {translations.title}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl mx-auto font-light">
          {translations.sub}
        </p>
      </section>

      {/* Control bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="blogs-controls">
        <div className="glass rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border border-slate-900 shadow-xl">
          
          {/* Tags list */}
          <div className="flex flex-wrap gap-2 items-center">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-mono tracking-wide border transition-all cursor-pointer ${
                !selectedTag 
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-bold' 
                  : 'text-slate-400 hover:text-slate-200 border-slate-900 hover:border-slate-800 bg-slate-950/40'
              }`}
            >
              {translations.allTags}
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-mono tracking-wide border transition-all cursor-pointer ${
                  selectedTag === tag 
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-bold' 
                    : 'text-slate-400 hover:text-slate-200 border-slate-900 hover:border-slate-800 bg-slate-950/40'
                }`}
              >
                #{tag}
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

      {/* Blogs Editorial Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="blogs-grid">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <div 
              key={blog.id}
              onClick={() => setSelectedBlog(blog)}
              className="glass card-hover rounded-2xl p-6 text-left flex flex-col justify-between h-[450px] cursor-pointer group relative overflow-hidden"
              id={`blog-card-${blog.id}`}
            >
              <div className="space-y-5">
                
                {/* Visual Cover */}
                <div className="aspect-[16/10] bg-slate-900 rounded-xl overflow-hidden border border-white/5 relative">
                  <img 
                    src={`https://picsum.photos/seed/${blog.imageSeed}/400/250`} 
                    alt={blog.title}
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70" />
                  
                  {/* Read time badge */}
                  <div className="absolute bottom-2 right-2 bg-slate-950/80 border border-slate-800 rounded-lg px-2 py-0.5 font-mono text-[8px] text-slate-400 flex items-center space-x-1">
                    <Clock size={8} />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center text-[10px] font-mono text-slate-500 space-x-3">
                    <span className="flex items-center space-x-1">
                      <Calendar size={10} />
                      <span>{blog.date}</span>
                    </span>
                    <span className="text-emerald-400 font-bold">BY: {blog.author.toUpperCase()}</span>
                  </div>

                  <h3 className="text-white text-base font-extrabold tracking-tight group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-slate-400 text-xs font-light leading-relaxed line-clamp-3">
                    {blog.summary}
                  </p>
                </div>

              </div>

              {/* Tag badges inline */}
              <div className="space-y-3 pt-3">
                <div className="flex flex-wrap gap-1">
                  {blog.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-900">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="border-t border-slate-900 pt-3 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-slate-500">{blog.authorRole.toUpperCase()}</span>
                  <span className="text-emerald-400 font-bold flex items-center space-x-1 group-hover:text-white transition-colors">
                    <span>EVALUATE</span>
                    <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

            </div>
          ))}

          {filteredBlogs.length === 0 && (
            <div className="col-span-full py-16 text-center glass rounded-2xl border border-slate-900">
              <span className="text-slate-500 text-xs font-mono block">NO SCIENTIFIC ESSAYS PORTED FOR YOUR PARAMS</span>
            </div>
          )}
        </div>
      </section>

      {/* Rich Blog Modal Display Container */}
      <AnimatePresence>
        {selectedBlog && (
          <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4" id="blog-overlay-modal">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="glass w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative flex flex-col max-h-[85vh] border border-slate-900"
            >
              
              {/* Header section inside modal */}
              <div className="p-6 border-b border-slate-900 flex justify-between items-center bg-slate-950/50 backdrop-blur-xl">
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shrink-0">
                    <img 
                      src={`https://picsum.photos/seed/${selectedBlog.author.replace(' ', '_')}/100/100`} 
                      alt={selectedBlog.author} 
                      className="w-full h-full object-cover grayscale"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-0.5">
                      {selectedBlog.authorRole}
                    </span>
                    <h3 className="text-white text-xs font-bold leading-tight uppercase font-mono">
                      {selectedBlog.author}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedBlog(null)}
                  className="p-2 hover:bg-slate-905 rounded-xl transition-colors text-slate-400 hover:text-white cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable contents */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-left flex-1 font-light leading-relaxed">
                
                {/* Micro-Banner */}
                <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                  <img
                    src={`https://picsum.photos/seed/${selectedBlog.imageSeed}/800/400`}
                    alt={selectedBlog.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex items-center space-x-4 text-[10px] font-mono text-slate-500 py-1 border-b border-slate-900">
                  <span className="flex items-center space-x-1">
                    <Calendar size={10} />
                    <span>{selectedBlog.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock size={10} />
                    <span>{selectedBlog.readTime}</span>
                  </span>
                </div>

                <h2 className="text-white text-xl sm:text-2xl font-black tracking-tight font-sans">
                  {selectedBlog.title}
                </h2>

                <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed italic border-l-2 border-emerald-500 pl-4 py-1">
                  {selectedBlog.summary}
                </p>

                <div className="text-slate-300 text-xs sm:text-sm space-y-4 font-light leading-relaxed pt-2">
                  <p>{selectedBlog.content}</p>
                  <p>
                    Madagascar Vision actively fosters absolute paradigm shifts in resource deployment by prioritizing rigorous open-loop mathematical architectures, rather than reactive market forecasting.
                  </p>
                </div>

                {/* Tags block in detail modal */}
                <div className="space-y-2 pt-4">
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">{translations.articleTags}</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedBlog.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono text-emerald-400 bg-emerald-950/20 border border-emerald-500/20 px-2.5 py-1 rounded-xl">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom bar controls */}
              <div className="p-4 bg-slate-950/80 border-t border-slate-900 flex justify-end">
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="px-5 py-2 hover:bg-slate-800 text-slate-300 rounded-xl text-xs font-semibold tracking-wider transition-all border border-slate-850 cursor-pointer"
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
