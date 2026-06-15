import React, { useState } from 'react';
import { Mail, ArrowRight, ExternalLink, Linkedin, Twitter, AlertCircle, CheckCircle2 } from 'lucide-react';
import { CompanyLogo } from './CompanyLogo';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  language: 'EN' | 'FR' | 'MG';
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
    FR: {
      about: "Gestion des leaders sectoriels intégrés à l'échelle mondiale dans les domaines de la santé, des énergies renouvelables, du cloud et des infrastructures durables.",
      sectors: 'Notre Entreprise',
      quick: 'Liens Rapides',
      newsletter: 'Informations Opérationnelles',
      placeholder: 'Adresse email professionnelle...',
      desc: "Abonnez-vous aux rapports trimestriels sur la performance et l'économie circulaire de notre groupe.",
      subsSuccess: 'Inscription réussie sur le portail des investisseurs internationaux.',
      cookieWarn: "Cette interface fonctionne sous des protocoles de confidentialité entièrement sécurisés. Contenu conforme aux objectifs 2026.",
      rights: 'Tous droits réservés.'
    },
    MG: {
      about: "Mitantana ireo sehatra loha-laharana maneran-tany eo amin'ny Fitsaboana, Angovo azo havaozina, Cloud matanjaka, lojistika ary fotodrafitrasa lovainjafy.",
      sectors: 'Ny Orinasanay',
      quick: 'Rohy Vetivety',
      newsletter: 'Vaovao momba ny Fampiasam-bola',
      placeholder: 'Hampidiro ny mailaka...',
      desc: "Misorata anarana hahazoana ny tati-baovao momba ny fampiasam-bola isan-telo volana.",
      subsSuccess: "Tafiditra soa aman-tsara tao amin'ny lisitry ny mpampiasa vola iraisam-pirenena.",
      cookieWarn: "Ity sehatra ity dia miasa ao anatin'ny fitsipika fiarovana tsiambaratelo tanteraka. Mifanaraka amin'ny tanjona 2026.",
      rights: 'Zo rehetra voatana.'
    }
  }[language];

  const quickLinks = [
    { id: 'about', label: { EN: 'About Corporate Story', FR: "Notre Histoire d'Entreprise", MG: "Ny Tantaran’ny Orinasanay" } },
    { id: 'leadership', label: { EN: 'Fiduciary Leadership', FR: 'Direction Fiduciaire', MG: 'Mpitantana sy Birao Mpiahy' } },
    { id: 'services', label: { EN: 'Executive Advisory', FR: 'Advisory Exécutif', MG: 'Mpanolotsaina Mpanatanteraka' } },
    { id: 'portfolio', label: { EN: 'Corporate Asset Portfolio', FR: "Portefeuille d'Actifs", MG: 'Tahirian’asa sy Lovany' } },
    { id: 'sustainability', label: { EN: 'ESG Accountability', FR: 'Responsabilité ESG', MG: 'Andraikitra momba ny ESG' } },
    { id: 'careers', label: { EN: 'Global Talent Openings', FR: "Offres d'Emplois Globales", MG: 'Asa sy Tolotra Manerantany' } },
    { id: 'news', label: { EN: 'Official News Feed', FR: "Fil d'Actualités Officiel", MG: 'Tati-baovao Ofisialy' } },
    { id: 'blogs', label: { EN: 'Director Insights Blog', FR: 'Blog des Perspectives', MG: 'Espace Fanehoan-kevitra' } },
    { id: 'events', label: { EN: 'Corporate Summit Log', FR: 'Sommets d’Entreprise', MG: 'Ny Fihaonambe sy Hetsika' } },
    { id: 'corporate-faq', label: { EN: 'Corporate FAQ Support', FR: 'FAQ Accord de Support', MG: 'Fanontaniana sy Fanampiana' } }
  ];

  const sectorLinks = [
    { id: 'healthcare', label: { EN: 'Clinical Diagnostics', FR: 'Diagnostics Cliniques', MG: 'Fisaintsainana sy Fitiliana' } },
    { id: 'technology', label: { EN: 'Enterprise AI & Cloud Architectures', FR: "IA d'Entreprise & Architectures Cloud", MG: "AI sy Cloud ho an'ny Orinasa" } },
    { id: 'energy', label: { EN: 'Offshore Solar & Wind Assets', FR: 'Actifs Solaires & Éoliens Offshore', MG: 'Hery avy amin’ny Masoandro sy Rivotra' } },
    { id: 'realestate', label: { EN: 'Smart Master-Planned Cities', FR: 'Villes Intelligentes Planifiées', MG: 'Tanàna Vaovao Nomanina' } }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMsg(language === 'EN' ? 'Invalid email schema.' : language === 'FR' ? 'Format d\'email invalide.' : 'Diso ny mailaka nampidirina.');
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
    } else if (id === 'corporate-faq') {
      setActiveTab('contact');
      setTimeout(() => {
        const el = document.getElementById('faq-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    } else {
      setActiveTab(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
              <CompanyLogo id="vima" size="md" className="bg-transparent border-0 shadow-none p-0 !w-[100px] !h-[45px]" />
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
              VM Vision Madagascar Holding SE & Co. KGaA
            </p>
            <p className="mt-0.5">
              &copy; {new Date().getFullYear()} Vision Madagascar. {translations.rights}
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
