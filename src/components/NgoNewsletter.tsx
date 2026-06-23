import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface NgoNewsletterProps {
  language: 'EN' | 'FR' | 'MG';
  colors: {
    accent: string;
    textAccent: string;
    textAccentHover: string;
    iconColor: string;
    bgMuted: string;
    borderMuted: string;
    borderHover: string;
    glow: string;
  };
}

export function NgoNewsletter({ language, colors }: NgoNewsletterProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const translations = {
    EN: {
      title: 'Discreet Impact Dispatch',
      subtitle: 'Subscribe to our quarterly audited outcomes, sovereign donor reports, and local conservation micro-briefings.',
      placeholder: 'Enter secure email address...',
      button: 'Subscribe',
      loading: 'Registering...',
      successTitle: 'Secure Subscription Confirmed',
      successText: 'Your email has been encrypted and registered for our quarterly accountability briefings.',
      invalidEmail: 'Please enter a valid administrative email address.',
      complianceText: 'By registering, you agree to our sovereign ESG accountability guidelines. Zero telemetry, zero tracking.',
    },
    FR: {
      title: 'Lettre d\'Impact Réseau',
      subtitle: 'Abonnez-vous à nos rapports d\'enquêtes audités, rapports de donateurs souverains et alertes de conservation locale.',
      placeholder: 'Saisissez votre e-mail sécurisé...',
      button: 'S\'abonner',
      loading: 'Inscription...',
      successTitle: 'Inscription Sécurisée Validée',
      successText: 'Votre adresse a été chiffrée et enregistrée pour la réception de nos bilans trimestriels.',
      invalidEmail: 'Veuillez saisir une adresse électronique valide.',
      complianceText: 'En vous inscrivant, vous acceptez nos lignes directrices ESG directes. Sans ciblage ni cookies.',
    },
    MG: {
      title: 'Tahirinkevitra & Vaovao momba ny Asa',
      subtitle: 'Araho maso eto ny tatitra ara-bola voamarin\'ny mpamatsy vola, sy ny zava-bita momba ny tontolo iainana isaky ny telo volana.',
      placeholder: 'Hampidiro ny adiresy imailaka...',
      button: 'Handray Vaovao',
      loading: 'Andalam-panoratana...',
      successTitle: 'Voasoratra ara-dalàna ianao',
      successText: 'Voaray sy voaaro amin\'ny fomba azo antoka ny imailakao mba handraisana ny tatitra manaraka.',
      invalidEmail: 'Hampidiro adiresy imailaka marina azafady.',
      complianceText: 'Rehefa misoratra anarana ianao dia manaiky ny fitsipika mitsinjo ny olona rehetra. Tsy misy mpanaraka an-kolaka.',
    }
  }[language];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !email.includes('@') || email.length < 5) {
      setErrorMsg(translations.invalidEmail);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate real high-craft API registration latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Persist locally to preserve trust
      localStorage.setItem('ngo_newsletter_subscribed', email);
    }, 1200);
  };

  return (
    <div className="pt-12 pb-6" id="ngo-newsletter-root">
      {/* Section Divider with Glowing Accent */}
      <div className="flex items-center space-x-4 mb-8">
        <span className="h-[1px] flex-grow bg-slate-900" />
        <div className={`flex items-center space-x-2 bg-slate-950/80 border ${colors.borderMuted} rounded-full px-4 py-1.5 backdrop-blur shadow-md`}>
          <Mail size={12} className={`${colors.iconColor}`} />
          <span className={`font-mono text-[10px] ${colors.textAccent} tracking-wider font-extrabold uppercase`}>
            {language === 'EN' ? 'ESG DISPATCH' : language === 'FR' ? 'BULLETIN ESG' : 'TATITRA ESG'}
          </span>
        </div>
        <span className="h-[1px] flex-grow bg-slate-900" />
      </div>

      <div 
        className="relative overflow-hidden rounded-[2rem] border border-slate-900 bg-slate-950/20 px-8 py-10 md:py-12 md:px-12 backdrop-blur-xl transition-all duration-500 hover:border-slate-800 shadow-2xl"
        id="ngo-newsletter-card"
      >
        {/* Subtle decorative vector mesh mimicking high craft glassmorphism */}
        <div className="absolute -right-16 -top-16 w-36 h-36 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-36 h-36 rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Column 1: Info and descriptions */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded font-mono text-[9px] font-extrabold tracking-widest uppercase bg-slate-900 border border-slate-800 text-slate-400">
                AUDITED_PUBLIC_LEDGER
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {translations.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed max-w-xl">
              {translations.subtitle}
            </p>
          </div>

          {/* Column 2: Form Container with AnimatePresence */}
          <div className="lg:col-span-5 w-full">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="newsletter-input-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  noValidate
                  id="ngo-newsletter-form"
                >
                  <div className="relative flex items-center bg-slate-950/80 border border-slate-900/90 hover:border-slate-850 rounded-2xl p-1.5 focus-within:border-emerald-500/40 transition-all shadow-inner">
                    <div className="pl-3 text-slate-550 shrink-0">
                      <Mail size={16} className={`${colors.iconColor}`} />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={translations.placeholder}
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-0 ring-0 focus:ring-0 text-slate-200 placeholder-slate-605 text-xs px-3 focus:outline-none disabled:opacity-50 py-2.5"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white px-5 py-2.5 rounded-xl text-[10px] font-mono font-extrabold uppercase tracking-wider flex items-center space-x-2 transition-all cursor-pointer select-none active:scale-95 disabled:opacity-55"
                    >
                      <span>{isSubmitting ? translations.loading : translations.button}</span>
                      {!isSubmitting && <ArrowRight size={12} className={colors.iconColor} />}
                    </button>
                  </div>
                  
                  {/* Subtle validation message */}
                  <AnimatePresence>
                    {errorMsg && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-center space-x-2 text-rose-450 text-[11px] pl-1"
                        id="newsletter-error-panel"
                      >
                        <AlertCircle size={12} className="shrink-0" />
                        <span>{errorMsg}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <p className="text-[10px] text-slate-500 leading-normal font-light">
                    {translations.complianceText}
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="newsletter-success-panel"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-950/5 border border-emerald-900/30 rounded-2xl p-5 text-left space-y-3"
                  id="ngo-newsletter-success"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-950/20 border border-emerald-500/25 flex items-center justify-center text-emerald-450 shrink-0">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-xs font-black text-slate-200 tracking-tight font-sans">
                      {translations.successTitle}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {translations.successText}
                  </p>
                  
                  {/* Ledger Hash representing mock blockchain audit block */}
                  <div className="pt-2 border-t border-slate-900/40 flex justify-between items-center text-[8px] font-mono text-slate-600">
                    <span>HASH_COMPLIANCE</span>
                    <span>sha256:f52ca9..</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
