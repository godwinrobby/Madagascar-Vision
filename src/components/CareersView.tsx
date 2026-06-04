import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CAREER_POSITIONS } from '../data/corporateData';
import { JobPosition } from '../types';
import { Briefcase, MapPin, Clock, Calendar, CheckCircle2, ChevronDown, ChevronUp, FileUp, Sparkles, Send, AlertCircle, X } from 'lucide-react';

interface CareersViewProps {
  language: 'EN' | 'FR' | 'MG';
}

export function CareersView({ language }: CareersViewProps) {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  
  // Job Application Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedJob, setSelectedJob] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  
  // UI interaction state
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const translations = {
    EN: {
      title: 'Join Our Global Mission',
      sub: 'Madagascar Vision values cross-sector innovators engineering resilient pathways. Join a sovereign group shaping tomorrow.',
      openingsTitle: 'Current Active Career Vacancies',
      openingsSub: 'Click any position to review exact scope, prerequisites, and integrated application channels.',
      benefitsTitle: 'Global Employee Wellness & Benefits',
      cultureTitle: 'The Cultural Core at Madagascar Vision',
      appFormTitle: 'Secure Candidate Application Portal',
      fullNameLabel: 'Full Candidate Name',
      emailLabel: 'Contact Corporate Email Address',
      phoneLabel: 'Mobile Phone Contact',
      positionLabel: 'Target Career Position',
      coverLabel: 'Professional Motivation Summary',
      resumeLabel: 'Upload Curriculum Vitae (CV / Resume)',
      dragDropText: 'Drag and drop CV here or click to browse local storage... (Supports PDF, DOCX up to 12MB)',
      submitBtn: 'Submit Fiduciary Application Logs',
      successHeader: 'Application Log Successfully Deposited',
      successText: 'Your candidate details and verified documents have been indexed securely in Madagascar Vision Talent Registry. Our recruitment board will review credentials shortly.',
      applyNow: 'Submit Application'
    },
    FR: {
      title: 'Rejoignez notre Mission Globale',
      sub: 'Madagascar Vision valorise les innovateurs intersectoriels qui bâtissent des voies résilientes. Rejoignez un groupe souverain qui façonne demain.',
      openingsTitle: 'Postes Vacants Actifs',
      openingsSub: 'Cliquez sur un poste pour consulter le cahier des charges, les prérequis et postuler directement.',
      benefitsTitle: 'Bien-être Global & Remises des Employés',
      cultureTitle: 'Le Noyau Culturel chez Madagascar Vision',
      appFormTitle: 'Portail de Candidature Candidat Sécurisé',
      fullNameLabel: 'Nom Complet du Candidat',
      emailLabel: 'Adresse Email Professionnelle de Contact',
      phoneLabel: 'Numéro de Téléphone Portable',
      positionLabel: 'Poste Professionnel Visé',
      coverLabel: 'Résumé de Motivation Professionnelle',
      resumeLabel: 'Téléverser votre Curriculum Vitae (CV)',
      dragDropText: 'Déposer votre CV ici ou cliquer pour parcourir vos fichiers... (Prend en charge PDF, DOCX jusqu\'à 12 Mo)',
      submitBtn: 'Soumettre les Détails de Candidature',
      successHeader: 'Candidature Enregistrée avec Succès',
      successText: 'Vos informations et documents ont été indexés en toute sécurité dans le registre des talents de Madagascar Vision. Notre comité de recrutement examinera vos compétences sous peu.',
      applyNow: 'Soumettre la Candidature'
    },
    MG: {
      title: 'Midira amin’ny Tanjonay Manerantany',
      sub: 'Madagascar Vision dia manome lanja ireo mpamorona manerana ny seha-pifandraisana. Midira amin\'ny vondrona manorina ny ho avy.',
      openingsTitle: 'Ireo Asa Malalaka Misy Ankehitriny',
      openingsSub: 'Tsindrio ny asa tianao hijerena ny pitsopitsony, ny fepetra ary ny fomba fandefasana bika.',
      benefitsTitle: 'Tombontsoa sy Fandaharana Fahasalamana ho an’ny Mpiasa',
      cultureTitle: 'Ny Soatoavin’ny Madagascar Vision',
      appFormTitle: 'Fandefasana Taratasy Fidirana Asa',
      fullNameLabel: 'Anarana Feno',
      emailLabel: 'Adiresy Mailaka Fifandraisana',
      phoneLabel: 'Laharana finday',
      positionLabel: 'Asa Kendrena',
      coverLabel: 'Taratasy Fandresen-dahatra Vetivety',
      resumeLabel: 'Hampidiro ny Diary Asa (CV)',
      dragDropText: 'Tariho eto ny CV-nao na tsindrio hisafidianana solosaina... (PDF, DOCX hatramin\'ny 12MB)',
      submitBtn: 'Handefa ny fangatahana fidirana asa',
      successHeader: 'Voarainay ny Taratasy Fangatahanao',
      successText: 'Voasoratra soa aman-tsara ao amin’ny tahirin’ny Madagascar Vision ny diary asanao. Handinika izany haingana ny tompon’andraikitra misahana ny fandraisana mpiasa.',
      applyNow: 'Handefa bika'
    }
  }[language];

  // Drag and drop events logic
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setResumeFile(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !selectedJob || !resumeFile) {
      setErrorMessage(
        language === 'EN' 
          ? 'Mandatory fields missing. Full Name, Email, Target Position and CV are required.' 
          : language === 'FR' 
          ? 'Champs obligatoires manquants. Le nom, l\'adresse email, le poste visé et le CV sont requis.' 
          : 'Misy banga ny saha tsy maintsy fenoina. Ilaina ny anarana, ny mailaka, ny asa kendrena ary ny CV.'
      );
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate server side database registration delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // clean forms
      setFullName('');
      setEmail('');
      setPhone('');
      setSelectedJob('');
      setCoverLetter('');
      setResumeFile(null);
    }, 2000);
  };

  const toggleJobExpand = (id: string) => {
    if (expandedJobId === id) {
      setExpandedJobId(null);
    } else {
      setExpandedJobId(id);
      setSelectedJob(id); // Autoselect job in form choice!
    }
  };

  // Benefits grid
  const benefits = [
    { title: { EN: 'Multi-Currency Compensation', FR: 'Rémunération Multidevises', MG: 'Tambin-karama isan-karazany' }, desc: { EN: 'Competitive salary packages structured in Swiss Francs (CHF), Euros, or USD adjusted for regional purchasing powers.', FR: 'Forfaits salariaux compétitifs structurés en francs suisses (CHF), en euros ou en USD ajustés aux pouvoirs d’achat régionaux.', MG: 'Karama mifaninana amin’ny CHF, Euros na USD mifanaraka amin’ny fahefa-mividy isam-paritra.' } },
    { title: { EN: 'Unified Care Insurance', FR: 'Assurance Maladie Unifiée', MG: 'Fiarovana ara-pahasalamana iraisana' }, desc: { EN: 'Comprehensive family clinical care covering molecular diagnostic pipelines, travel health registries, and global mental support.', FR: 'Prise en charge clinique complète de la famille couvrant les diagnostics moléculaires, l’assistance voyage et le soutien mental global.', MG: 'Fahasalamam-pianakaviana feno ahitana fitiliana arifomba, fanampiana amin’ny dia ary fanohanana ara-tsaina manerantany.' } },
    { title: { EN: 'Remote-First Sovereignty', FR: 'Télétravail-First', MG: 'Fahalalahana miasa lavidavitra' }, desc: { EN: 'Our teams coordinate across continents utilizing high-speed digital twin simulations—giving you autonomy on schedule grids.', FR: 'Nos équipes collaborent à travers les continents à l’aide de simulations numériques rapides, vous offrant une autonomie sur vos horaires.', MG: 'Miasa lavidavitra nefa mirindra tsara ny mpiasa mampiasa fampitaovana nomerika avo lenta mba hanome fahalalahana anao.' } },
    { title: { EN: 'Sabbatical ESG Allowances', FR: 'Congés Sabbatical ESG', MG: 'Fialan-tsasatra manokana ESG' }, desc: { EN: 'We offer paid sabbaticals up to 4 weeks annually for workers directing community CSR and ocean rehabilitation tasks.', FR: 'Nous offrons des congés payés pouvant aller jusqu’à 4 semaines par an pour les employés menant des projets RSE et de restauration océanique.', MG: 'Manolotra fialan-tsasatra misy karama hatramin’ny 4 herinandro isan-taona izahay ho an’izay mpiasa mirotsaka amin’ny tetikasa RSE sy fiarovana ny ranomasina.' } }
  ];

  return (
    <div id="careers-view-wrapper" className="space-y-16 pb-12 relative animate-fade-in">
      
      {/* 1. Page Header */}
      <section className="relative pt-32 pb-8 overflow-hidden text-center max-w-4xl mx-auto px-4" id="careers-intro">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-950/20">
          {language === 'EN' ? 'GLOBAL HUMAN CAPITAL' : language === 'FR' ? 'CAPITAL HUMAIN GLOBAL' : 'NY MPIASA MANERANTANY'}
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-4">
          {translations.title}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl mx-auto">
          {translations.sub}
        </p>
      </section>

      {/* 2. Benefits list columns */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" id="benefits-section">
        <h2 className="text-2xl font-bold text-white text-center tracking-tight">
          {translations.benefitsTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((ben, idx) => (
            <div 
              key={idx} 
              className="glass card-hover rounded-2xl p-6 text-left"
              id={`benefit-${idx}`}
            >
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 mb-4">
                <CheckCircle2 size={15} />
              </div>

              <h4 className="text-white text-xs font-bold tracking-tight mb-2 uppercase font-sans">
                {ben.title[language]}
              </h4>

              <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                {ben.desc[language]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Open Positions Accordion layout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-left" id="open-positions-explorer">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {translations.openingsTitle}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            {translations.openingsSub}
          </p>
        </div>

        <div className="space-y-4" id="positions-list">
          {CAREER_POSITIONS.map((job) => {
            const isExpanded = expandedJobId === job.id;
            return (
              <div 
                key={job.id} 
                className="glass card-hover rounded-2xl overflow-hidden"
                id={`job-acc-${job.id}`}
              >
                {/* Accordion header */}
                <button
                  onClick={() => toggleJobExpand(job.id)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <div className="space-y-2 pr-4">
                    <span className="inline-block px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-widest leading-none">
                      {job.sector}
                    </span>

                    <h3 className="text-white font-bold text-sm sm:text-base font-sans line-clamp-1">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-slate-500 text-[11px] font-mono">
                      <span className="flex items-center space-x-1">
                        <MapPin size={11} className="text-emerald-500/60" />
                        <span>{job.location}</span>
                      </span>

                      <span className="flex items-center space-x-1">
                        <Clock size={11} className="text-purple-500/60" />
                        <span>{job.type}</span>
                      </span>
                    </div>

                  </div>

                  <div className="p-2 border border-slate-900 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition-colors">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {/* Simulated detail expansion */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 border-t border-slate-900 pt-5 space-y-5 animate-fade-in bg-slate-950/20 text-left">
                    
                    <div className="space-y-2">
                      <h4 className="text-slate-300 text-xs font-bold uppercase tracking-wider">
                        {language === 'EN' ? 'Scope of Role Strategy' : language === 'FR' ? 'Description des Responsabilités' : 'Ny Andraikitra sy ny Asa Kendrena'}
                      </h4>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                        {job.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-slate-300 text-xs font-bold uppercase tracking-wider">
                        {language === 'EN' ? 'Prerequisites & Qualifications' : language === 'FR' ? 'Prérequis & Qualifications' : 'Fepetra sy Fahaizana Ilaina'}
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-400">
                        {job.requirements.map((req, rIdx) => (
                          <li key={rIdx} className="flex items-start space-x-2">
                            <span className="text-emerald-400 mt-0.5">•</span>
                            <span className="font-light">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-900 flex justify-end">
                      <a
                        href="#application-portal-form"
                        onClick={(e) => {
                          setSelectedJob(job.id);
                          // Smooth scroll
                          const el = document.getElementById('application-portal-form');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition-all shadow-2xl shadow-emerald-600/30 active:scale-95 cursor-pointer"
                      >
                        {translations.applyNow}
                      </a>
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Candidate Online application Form */}
      <section className="max-w-xl mx-auto px-4" id="application-portal-form">
        <div className="glass rounded-3xl p-6 sm:p-8 relative text-left shadow-2xl">
          
          <h3 className="text-white font-black text-lg sm:text-xl font-sans mb-1.5 flex items-center space-x-2">
            <Sparkles size={16} className="text-emerald-400" />
            <span>{translations.appFormTitle}</span>
          </h3>
          <p className="text-slate-450 text-[11px] leading-tight mb-6 border-b border-slate-900 pb-3">
            {language === 'EN' ? 'File verified curriculum documentation securely. Files are routed directly to group-wide directory.' : language === 'FR' ? 'Déposez votre curriculum en toute sécurité. Les fichiers sont acheminés directement vers la direction du groupe.' : 'Ny diary asa rehetra dia alefa any amin\'ny tahirin\'ny mpiasa voaaro.'}
          </p>

          <form onSubmit={handleSubmitApplication} className="space-y-4">
            
            {/* Name Input */}
            <div className="space-y-1 block">
              <label className="block text-[10px] font-mono tracking-wider font-bold text-slate-500 uppercase">
                {translations.fullNameLabel}
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="CEO Sterling-Jones"
                className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 outline-none transition-all"
              />
            </div>

            {/* Email + Contact phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1 block">
                <label className="block text-[10px] font-mono tracking-wider font-bold text-slate-500 uppercase">
                  {translations.emailLabel}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="candidate@aetheris.com"
                  className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 outline-none transition-all"
                />
              </div>

              <div className="space-y-1 block">
                <label className="block text-[10px] font-mono tracking-wider font-bold text-slate-500 uppercase">
                  {translations.phoneLabel}
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+41 44 910 2030"
                  className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 outline-none transition-all"
                />
              </div>
            </div>

            {/* Target Job selection dropdown */}
            <div className="space-y-1 block">
              <label className="block text-[10px] font-mono tracking-wider font-bold text-slate-500 uppercase">
                {translations.positionLabel}
              </label>
              <select
                value={selectedJob}
                onChange={(e) => setSelectedJob(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-xs text-white outline-none transition-all"
              >
                <option value="" className="bg-slate-950 text-slate-500">
                  {language === 'EN' ? '-- Select Vacant Position --' : language === 'FR' ? '-- Sélectionner un poste --' : '-- Safidio ny asa iriana --'}
                </option>
                {CAREER_POSITIONS.map((job) => (
                  <option key={job.id} value={job.id} className="bg-slate-950 text-white text-xs">
                    [{job.sector}] {job.title} ({job.location})
                  </option>
                ))}
              </select>
            </div>

            {/* Motivation cover note */}
            <div className="space-y-1 block">
              <label className="block text-[10px] font-mono tracking-wider font-bold text-slate-500 uppercase">
                {translations.coverLabel}
              </label>
              <textarea
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                rows={3}
                placeholder="Outline associated project competencies in brief..."
                className="w-full bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 outline-none transition-all resize-none"
              />
            </div>

            {/* Drag and Drop resume Upload widget (Usability Pattern Compliance) */}
            <div className="space-y-1 block">
              <label className="block text-[10px] font-mono tracking-wider font-bold text-slate-500 uppercase">
                {translations.resumeLabel}
              </label>
              
              <div
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
                onClick={triggerFileSelect}
                className={`w-full py-6 px-4 rounded-2xl border-2 border-dashed text-center transition-all cursor-pointer flex flex-col items-center justify-center space-y-2 ${
                  dragActive 
                    ? 'bg-emerald-950/40 border-emerald-400 text-emerald-300' 
                    : resumeFile 
                    ? 'bg-slate-900 border-emerald-500/40 text-emerald-300' 
                    : 'bg-slate-900 border-slate-800 text-slate-450 hover:border-slate-700 hover:bg-slate-850/80'
                }`}
              >
                <FileUp size={24} className={resumeFile ? 'text-emerald-400 animate-pulse' : 'text-slate-550'} />
                
                {resumeFile ? (
                  <div className="space-y-1 font-mono text-xs">
                    <span className="block text-emerald-400 font-bold">✓CV LOADED:</span>
                    <span className="block text-slate-300 text-[10px] truncate max-w-xs">{resumeFile.name} ({(resumeFile.size / 1024).toFixed(1)} KB)</span>
                  </div>
                ) : (
                  <p className="text-[10.5px] leading-relaxed max-w-sm">
                    {translations.dragDropText}
                  </p>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.docx,.doc"
                  className="hidden"
                />
              </div>
            </div>

            {/* Feedback system */}
            {submitSuccess && (
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/20 space-y-2 animate-fade-in text-left">
                <div className="flex items-center space-x-2 text-emerald-400">
                  <CheckCircle2 size={15} />
                  <span className="font-bold text-sm">{translations.successHeader}</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed font-light">
                  {translations.successText}
                </p>
              </div>
            )}

            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/20 text-xs text-red-300 flex items-center space-x-2">
                <AlertCircle size={14} className="text-red-400 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Submit btn */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl text-xs transition-all shadow-2xl shadow-emerald-600/30 duration-300 flex items-center justify-center space-x-2 active:scale-98 disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={12} />
                  <span>{translations.submitBtn}</span>
                </>
              )}
            </button>

          </form>

        </div>
      </section>

    </div>
  );
}
