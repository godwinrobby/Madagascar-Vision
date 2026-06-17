import { motion, AnimatePresence } from 'motion/react';
import { Globe, X, Sparkles } from 'lucide-react';

interface LanguageToastProps {
  toast: {
    title: string;
    desc: string;
    lang: 'EN' | 'FR' | 'MG';
  } | null;
  onClose: () => void;
}

export function LanguageToast({ toast, onClose }: LanguageToastProps) {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-[100] max-w-sm w-full md:w-[360px] p-[1.5px] rounded-2xl shadow-3xl overflow-hidden cursor-default select-none group"
          id="language-change-toast"
        >
          {/* Subtle eco-rainbow sweeping gradient border background */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-violet-500 animate-[rainbow-sweep_6s_linear_infinite] opacity-80" />
          
          {/* Main Toast Content Body */}
          <div className="relative bg-[#020905]/95 backdrop-blur-md rounded-2xl p-4 flex items-start gap-3.5 border border-white/5">
            
            {/* Ambient inner glow */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
            
            {/* Left animated Globe/Sparkle Icon block */}
            <div className="relative shrink-0 w-10 h-10 rounded-xl bg-emerald-950/25 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-all duration-300">
              <Globe size={18} className="animate-[spin_12s_linear_infinite]" />
              <span className="absolute -top-1 -right-1 text-teal-400">
                <Sparkles size={10} className="animate-pulse" />
              </span>
            </div>

            {/* Middle text blocks */}
            <div className="flex-1 min-w-0 pr-2">
              <h4 className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-black block">
                {toast.title}
              </h4>
              <p className="text-sm font-sans font-medium text-white/90 leading-snug mt-1">
                {toast.desc}
              </p>
              
              {/* Visual mini-pill showing the selected language tag */}
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 mt-2.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400 uppercase">
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                <span>active: {toast.lang}</span>
              </div>
            </div>

            {/* Right Close Button */}
            <button
              onClick={onClose}
              className="shrink-0 p-1 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close message"
              id="toast-close-btn"
            >
              <X size={14} />
            </button>

            {/* Sweeping dynamic thin decorative bar inside the card at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-500 via-teal-400 to-violet-500 animate-[rainbow-sweep_6s_linear_infinite]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
