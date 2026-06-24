import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { CORPORATE_BLOGS } from '../data/corporateData';
import { getTranslatedBlogs } from '../utils/translator';
import { BlogItem } from '../types';
import { Calendar, User, Search, Clock, ArrowRight, ArrowLeft, Share2, Sparkles, BookOpen, Tag } from 'lucide-react';

interface BlogsViewProps {
  language: 'EN' | 'FR' | 'MG';
  selectedBlogId?: string | null;
}

export function BlogsView({ language, selectedBlogId }: BlogsViewProps) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const translatedBlogs = getTranslatedBlogs(CORPORATE_BLOGS, language);

  // Resolve active blog if selectedBlogId is active in URL route
  const selectedBlog = selectedBlogId 
    ? translatedBlogs.find(b => b.id === selectedBlogId) || null
    : null;

  const translations = {
    EN: {
      title: 'Executive Insights & Thought Leadership',
      sub: 'Analytical whitepapers, market coordinates, technology research, and strategic guides written by the directors of Vision Madagascar.',
      searchPlaceholder: 'Search essays & research...',
      allTags: 'All Articles',
      readTime: 'Read Time',
      writtenBy: 'Written By',
      closeBtn: 'Close Essay',
      backBtn: 'Back to Insights',
      articleTags: 'Article Tags',
      shareBtn: 'Share Article',
      copiedText: 'Copied Link!',
      relatedTitle: 'Related Strategic Insights',
      readMore: 'READ ARTICLE'
    },
    FR: {
      title: 'Analyses de Direction & Tribunes',
      sub: 'Rapports d’analyse, tendances du marché, recherche technologique et guides stratégiques rédigés par la direction de Vision Madagascar.',
      searchPlaceholder: 'Rechercher des essais...',
      allTags: 'Tous les Articles',
      readTime: 'Temps de Lecture',
      writtenBy: 'Écrit Par',
      closeBtn: 'Fermer l’essai',
      backBtn: 'Retour aux Analyses',
      articleTags: 'Mots-clés de l’Article',
      shareBtn: 'Partager l’article',
      copiedText: 'Lien copié !',
      relatedTitle: 'Autres Analyses Stratégiques',
      readMore: 'LIRE L’ARTICLE'
    },
    MG: {
      title: 'Hevitra sy Paikady Fitantanana',
      sub: 'Famakafakana ny tsena, asa fikarohana momba ny teknolojia, ary sangan’asa nosoratan’ireo mpitantana ny Vision Madagascar.',
      searchPlaceholder: 'Hikaroka lahatsoratra...',
      allTags: 'Ny Lahatsoratra rehetra',
      readTime: 'Haharetan’ny famakiana',
      writtenBy: 'Nolavonin’i',
      closeBtn: 'Hanakatona',
      backBtn: 'Hiverina amin’ny Lahatsoratra',
      articleTags: 'Teny fanalahidin’ny Lahatsoratra',
      shareBtn: 'Hizara ny Lahatsoratra',
      copiedText: 'Voakopia!',
      relatedTitle: 'Paikady sy Hevitra Hafa',
      readMore: 'VAKIO NY LAHATSORATRA'
    }
  }[language];

  // Compile all tag options
  const allTags = Array.from(new Set(translatedBlogs.flatMap(b => b.tags)));

  const filteredBlogs = translatedBlogs.filter(blog => {
    const matchesTag = !selectedTag || blog.tags.includes(selectedTag);
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  // If a blog is selected, render the dedicated separate page view
  if (selectedBlog) {
    const relatedBlogs = translatedBlogs
      .filter(b => b.id !== selectedBlog.id)
      .slice(0, 3);

    const handleCopyLink = () => {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    };

    return (
      <div id="blog-detail-container" className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in relative">
        
        {/* Back navigation & Share actions bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <button
            onClick={() => {
              navigate('/blogs');
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

        {/* Hero image for blog post */}
        <div className="aspect-[21/9] w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-900 shadow-2xl relative mb-10">
          <img
            src={`https://picsum.photos/seed/${selectedBlog.imageSeed}/1200/600`}
            alt={selectedBlog.title}
            className="w-full h-full object-cover grayscale brightness-90 contrast-102 hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center gap-4 justify-between">
            {/* Tag badges */}
            <div className="flex flex-wrap gap-2">
              {selectedBlog.tags.map(tag => (
                <span key={tag} className="text-[9px] font-mono text-emerald-400 bg-emerald-950/85 border border-emerald-500/30 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  #{tag}
                </span>
              ))}
            </div>
            
            {/* Read time */}
            <div className="bg-slate-950/90 border border-slate-800 rounded-full px-3 py-1 font-mono text-[10px] text-slate-400 flex items-center space-x-1.5">
              <Clock size={11} />
              <span>{selectedBlog.readTime}</span>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main content pane */}
          <article className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                {selectedBlog.title}
              </h1>
              
              <div className="flex items-center space-x-3 text-xs text-slate-500 font-mono py-2 border-y border-slate-900/60">
                <span className="flex items-center space-x-1">
                  <Calendar size={12} />
                  <span>{selectedBlog.date}</span>
                </span>
                <span className="text-slate-700">•</span>
                <span className="text-slate-400">ESSAY ID: Æ-{selectedBlog.id.toUpperCase()}</span>
              </div>
            </div>

            {/* Premium Quote-like summary block */}
            <blockquote className="border-l-4 border-emerald-500 bg-emerald-950/5 rounded-r-2xl p-6 text-slate-300 text-sm sm:text-base font-light italic leading-relaxed shadow-sm">
              {selectedBlog.summary}
            </blockquote>

            {/* Rich article paragraphs */}
            <div className="text-slate-300 text-sm sm:text-base space-y-6 font-light leading-relaxed prose prose-invert max-w-none">
              <p>{selectedBlog.content}</p>
              <p>
                Vision Madagascar actively fosters absolute paradigm shifts in resource deployment by prioritizing rigorous open-loop mathematical architectures, rather than reactive market forecasting. Every action, joint venture, and ESG disclosure from the executive board represents a structured, verifiable milestone designed to achieve net-zero circular optimization across our portfolio divisions.
              </p>
              <p>
                As we navigate the complexity of high-growth emerging economies, the integration of local human capital remains our ultimate asset. We continuously align technical vocational training with global standards, guaranteeing that Vision Madagascar's engineering, logistics, and digital services are executed at the highest possible levels of precision and social compliance.
              </p>
            </div>

            {/* Author Bio Footer Block */}
            <div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-900 flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-12">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shrink-0 shadow-inner">
                <img 
                  src={`https://picsum.photos/seed/${selectedBlog.author.replace(' ', '_')}/150/150`} 
                  alt={selectedBlog.author} 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-extrabold">
                  {selectedBlog.authorRole}
                </span>
                <h4 className="text-white text-base font-black leading-tight font-sans">
                  {selectedBlog.author}
                </h4>
                <p className="text-slate-400 text-xs font-light">
                  Director of Strategic Implementations at Vision Madagascar. Focuses on regional development, investment channels, and high-impact micro-economic programs.
                </p>
              </div>
            </div>

          </article>

          {/* Right rail or sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Metadata Info Card */}
            <div className="glass p-6 rounded-2xl border border-slate-900 space-y-4">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-black pb-2 border-b border-slate-900">
                DISCLOSURE AUDIT
              </h4>
              <div className="space-y-3 font-mono text-[10px] text-slate-500">
                <div className="flex justify-between">
                  <span>STATUS:</span>
                  <span className="text-emerald-400 font-bold">CERTIFIED</span>
                </div>
                <div className="flex justify-between">
                  <span>CLASSIFICATION:</span>
                  <span className="text-white">PUBLIC ACCESS</span>
                </div>
                <div className="flex justify-between">
                  <span>AUDITOR:</span>
                  <span>Vision Madagascar PR</span>
                </div>
                <div className="flex justify-between">
                  <span>REVISION:</span>
                  <span>v4.1.2</span>
                </div>
              </div>
            </div>

            {/* Newsletter sign-up block */}
            <div className="p-6 rounded-2xl bg-emerald-950/10 border border-emerald-500/20 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              <Sparkles size={16} className="text-emerald-400" />
              <div className="space-y-1">
                <h5 className="text-white text-xs font-bold uppercase tracking-wider">Stay Informed</h5>
                <p className="text-slate-400 text-[11px] font-light leading-relaxed">
                  Subscribe to receive executive whitepapers and macroeconomic reports directly in your inbox.
                </p>
              </div>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="bg-slate-950 border border-slate-900 text-[10px] text-white rounded-lg px-2.5 py-1.5 w-full outline-none focus:border-emerald-500/50"
                  disabled
                />
                <button className="bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors px-3 py-1.5 rounded-lg text-[10px] font-bold shrink-0 cursor-not-allowed" disabled>
                  JOIN
                </button>
              </div>
            </div>
          </aside>

        </div>

        {/* Related Articles Section */}
        {relatedBlogs.length > 0 && (
          <section className="mt-20 pt-12 border-t border-slate-900/60 space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase block font-bold">
                RECOMMENDED ESSAYS
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
                {translations.relatedTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map(blog => (
                <div
                  key={blog.id}
                  onClick={() => {
                    navigate(`/blogs/${blog.id}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="glass card-hover rounded-2xl p-5 text-left flex flex-col justify-between h-[380px] cursor-pointer group"
                >
                  <div className="space-y-4">
                    <div className="aspect-[16/10] bg-slate-900 rounded-xl overflow-hidden border border-white/5 relative">
                      <img
                        src={`https://picsum.photos/seed/${blog.imageSeed}/300/180`}
                        alt={blog.title}
                        className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[9px] font-mono text-slate-550">{blog.date}</span>
                      <h4 className="text-white text-xs font-extrabold tracking-tight group-hover:text-emerald-400 transition-colors line-clamp-2">
                        {blog.title}
                      </h4>
                    </div>
                  </div>

                  <div className="border-t border-slate-900 pt-3 flex items-center justify-between text-[9px] font-mono text-slate-500">
                    <span className="uppercase">{blog.author}</span>
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

  // Otherwise, render the main index grid with search and category filters
  return (
    <div id="blogs-view-container" className="space-y-16 pb-24 relative animate-fade-in">
      
      {/* Intro Header */}
      <section className="relative pt-32 pb-4 overflow-hidden text-center max-w-4xl mx-auto px-4" id="blogs-intro">
        <span className="font-mono text-[10px] text-emerald-400 tracking-widest uppercase border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-950/20 inline-flex items-center space-x-1.5">
          <BookOpen size={11} />
          <span>OFFICIAL BOARD ESSAYS</span>
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-4 animate-fade-in">
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
              onClick={() => {
                navigate(`/blogs/${blog.id}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
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
                    <span>{translations.readMore}</span>
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

    </div>
  );
}
