import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CAREER_POSITIONS } from '../data/corporateData';
import { JobPosition } from '../types';
import { Briefcase, MapPin, Clock, Calendar, CheckCircle2, ChevronDown, ChevronUp, FileUp, Sparkles, Send, AlertCircle, X } from 'lucide-react';

interface CareersViewProps {
  language: 'EN' | 'DE' | 'JP';
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
    DE: {
      title: 'Gestalten Sie die Zukunft mit uns',
      sub: 'Madagascar Vision fördert Querdenker und Visionäre. Werden Sie Teil eines globalen Sektor-Syndikats.',
      openingsTitle: 'Aktuelle Vakanzen an unseren Standorten',
      openingsSub: 'Klicken Sie auf eine Position, um Anforderungsprofile und Aufgabenbereiche einzusehen.',
      benefitsTitle: 'Ihre Vorteile & Corporate Wellness',
      cultureTitle: 'Unsere Unternehmenskultur',
      appFormTitle: 'Kandidaten-Bewerbungsportal',
      fullNameLabel: 'Vollständiger Name des Bewerbers',
      emailLabel: 'E-Mail-Adresse',
      phoneLabel: 'Telefonnummer',
      positionLabel: 'Gewünschte Position',
      coverLabel: 'Kurzes Motivationsschreiben',
      resumeLabel: 'Lebenslauf (CV) hochladen',
      dragDropText: 'Lebenslauf hier ablegen oder durchsuchen... (PDF, DOCX bis 12MB)',
      submitBtn: 'Bewerbung einreichen',
      successHeader: 'Bewerbungsunterlagen erhalten',
      successText: 'Ihre Angaben wurden verschlüsselt in unserem Talent-Register erfasst. Unser HR-Komitee prüft Ihre Qualifikationen und meldet sich zeitnah.',
      applyNow: 'Jetzt bewerben'
    },
    JP: {
      title: 'グローバルチームへの参画',
      sub: 'マダガスカル・ビジョンでは、多セクターを結び、地球規模で強固なインフラを設計する革新的なタレントを募っています。',
      openingsTitle: '現在募集中のキャリア求人案件',
      openingsSub: '各求人をクリックして、職務範囲、必須要件、および申請フォームをご参照ください。',
      benefitsTitle: 'グローバルの厚生・福利厚生体系',
      cultureTitle: 'マダガスカル・ビジョンの組織・カルチャーの核心',
      appFormTitle: 'セキュア候補者申請ポータル',
      fullNameLabel: 'お名前（フルネーム）',
      emailLabel: 'ご連絡先電子メールアドレス',
      phoneLabel: 'ご連絡先お電話番号',
      positionLabel: '応募職種',
      coverLabel: '自己紹介・志望動機要約（数行）',
      resumeLabel: '履歴書・職務経歴書（CV）のアップロード',
      dragDropText: '履歴書（CV）をここに部下にドラッグ＆ドロップ、またはファイル選択... （PDF/Word対応, 最大12MB）',
      submitBtn: '応募書類を提出する',
      successHeader: '応募ログが安全に送信されました',
      successText: '提出された職務データおよび verified documents 等は暗号化され、人事部門へ正常にインデックス登録されました。選考委員会にて速やかに審査に入ります。',
      applyNow: '応募する'
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
          : language === 'DE' 
          ? 'Bitte füllen Sie Name, E-Mail, Wunschposition aus und laden Sie Ihren Lebenslauf hoch.' 
          : '必須項目が不足しています。お名前、メール、目標職種、および履歴書ファイルの登録は必須です。'
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
    { title: { EN: 'Multi-Currency Compensation', DE: 'Multi-Währungs-Vergütung', JP: '多通貨による報酬割当' }, desc: { EN: 'Competitive salary packages structured in Swiss Francs (CHF), Euros, or USD adjusted for regional purchasing powers.', DE: 'Attraktive Spitzengehälter, wahlweise auszahlbar in CHF, EUR oder USD, angepasst an regionale Kaufkraft.', JP: 'スイス・フラン（CHF）、ユーロ、または米ドルに基づき設計される高い水準の基本給与。' } },
    { title: { EN: 'Unified Care Insurance', DE: 'Premium-Gesundheitsschutz', JP: '最高水準の医療・介護保険' }, desc: { EN: 'Comprehensive family clinical care covering molecular diagnostic pipelines, travel health registries, and global mental support.', DE: 'Vollständiger Krankenschutz für Sie und Ihre Familie inklusive Zugang zu modernster klinischer Medizin.', JP: '提携する最先端医療・検査、および高度なグローバルケアサポートに直接アクセス可能な家族保険。' } },
    { title: { EN: 'Remote-First Sovereignty', DE: 'Flexible Work-Life Balance', JP: 'フレキシブル遠隔地リモート' }, desc: { EN: 'Our teams coordinate across continents utilizing high-speed digital twin simulations—giving you autonomy on schedule grids.', DE: 'Dezentrale Arbeitsorganisation gepaart mit höchstem Vertrauen und flexiblen Zeiteinteilungen.', JP: '大陸を横断して稼働するデジタルツイン設計体制のもと、完全なスケジュール裁量と自由を提供。' } },
    { title: { EN: 'Sabbatical ESG Allowances', DE: 'Kompensation für ESG-Engagement', JP: 'サステナビリティ特別有給' }, desc: { EN: 'We offer paid sabbaticals up to 4 weeks annually for workers directing community CSR and ocean rehabilitation tasks.', DE: 'Sonderurlaube für ehrenamtliches Engagement im Bereich Klimaschutz, Meeresreinhaltung oder Sozialprojekte.', JP: 'クリーンエネルギー活動支援、CSR、地方ボランティアなど環境保全タスクへの有休提供（最大4週/年）。' } }
  ];

  return (
    <div id="careers-view-wrapper" className="space-y-16 pb-12 relative animate-fade-in">
      
      {/* 1. Page Header */}
      <section className="relative pt-32 pb-8 overflow-hidden text-center max-w-4xl mx-auto px-4" id="careers-intro">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-950/20">
          {language === 'EN' ? 'GLOBAL HUMAN CAPITAL' : language === 'DE' ? 'KARRIERE-NETWORK' : 'タレント採用・採用情報'}
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
                        {language === 'EN' ? 'Scope of Role Strategy' : language === 'DE' ? 'Rolle & Aufgabenbeschreibung' : '職務範囲とミッション'}
                      </h4>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                        {job.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-slate-300 text-xs font-bold uppercase tracking-wider">
                        {language === 'EN' ? 'Prerequisites & Qualifications' : language === 'DE' ? 'Anforderungsprofil' : '必要なバックグラウンド・スキル'}
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
            {language === 'EN' ? 'File verified curriculum documentation securely. Files are routed directly to group-wide directory.' : language === 'DE' ? 'Laden Sie Ihre Dokumente verschlüsselt hoch. Ihre Bewerbung geht direkt an das zuständige HR-Committee.' : '応募書類は安全に暗号化され、人事部門へ直接ルーティングされます。'}
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
                  {language === 'EN' ? '-- Select Vacant Position --' : language === 'DE' ? '-- Position auswählen --' : '-- 応募職種を選択してください --'}
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
