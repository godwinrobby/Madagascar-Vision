import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, Award, Globe, TrendingUp, Sparkles, Filter } from 'lucide-react';

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export function CountUp({ value, suffix = '', duration = 1200 }: CountUpProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startValue = displayValue;
    const endValue = value;
    if (startValue === endValue) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad function
      const easedProgress = progress * (2 - progress);
      const current = Math.floor(easedProgress * (endValue - startValue) + startValue);
      
      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setDisplayValue(endValue);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [value]);

  return (
    <span>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

interface ImpactMetricsProps {
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

type TimelineId = 'cumulative' | 'legacy2025' | 'active2026';

export function ImpactMetrics({ language, colors }: ImpactMetricsProps) {
  const [activeTimeline, setActiveTimeline] = useState<TimelineId>('cumulative');

  // Multi-lingual translations
  const t = {
    EN: {
      sectionBadge: 'Humanitarian Audited Impact',
      sectionTitle: 'Philanthropic Reach & Metrics',
      sectionSub: 'Real-time verifiable outreach telemetry. Use the timeline controls below to filter certified project outputs over our current and past operational terms.',
      timelineLabel: 'Active Filter:',
      timelines: {
        cumulative: 'Cumulative Impact',
        legacy2025: 'Fiscal Year 2025',
        active2026: 'Fiscal Year 2026'
      },
      metrics: {
        servedTitle: 'Community Members Served',
        servedDesc: 'Total citizens receiving healthcare outreach, primary educational scholarships, or clean drinking reserves.',
        projectsTitle: 'Projects Completed',
        projectsDesc: 'Completed municipal developments, solar retrofitted primary schools, and containerized treatment installations.',
        partnersTitle: 'Global Partnerships',
        partnersDesc: 'Sovereign donor syndicates, bilateral treaty funds, and international NGO alliances cooperating in field operations.'
      },
      auditFooter: 'VERIFIABLE METRICS AUDITED BY INDEPENDENT CORPORATE GOVERNANCE'
    },
    FR: {
      sectionBadge: 'Impact Humanitaire Audité',
      sectionTitle: 'Indicateurs d\'Impact & Bilan',
      sectionSub: 'Suivi télémétrique certifié en temps réel. Utilisez les filtres temporels pour analyser le rendement opérationnel de nos campagnes.',
      timelineLabel: 'Filtre Temporel :',
      timelines: {
        cumulative: 'Impact Cumulé',
        legacy2025: 'Exercice Fiscale 2025',
        active2026: 'Plan d\'Action 2026'
      },
      metrics: {
        servedTitle: 'Bénéficiaires Directs',
        servedDesc: 'Citoyens de la Grande Île ayant reçu des soins de proximité, des bourses scolaires ou l\'accès à l\'eau potable.',
        projectsTitle: 'Projets Finalisés',
        projectsDesc: 'Infrastructures scolaires rénovées sous alimentation photovoltaïque et installations de purification hydraulique.',
        partnersTitle: 'Partenariats Internationaux',
        partnersDesc: 'Syndicats de donateurs souverains, traités bilatéraux et ONG internationales coopérant sur le terrain.',
      },
      auditFooter: 'INDICATEURS CERTIFIÉS PAR L\'OFFICE CORPORATIF DE GOUVERNANCE INDÉPENDANTE'
    },
    MG: {
      sectionBadge: 'Vokatra Voamarina',
      sectionTitle: 'Bilan momba ny Asa Sosialy',
      sectionSub: 'Fandrefesana ny vokatra mivaingana azo tsapain-tanana tamin\'ny asa sosialy. Safidio ny fe-potoana tianao jerena eto ambany.',
      timelineLabel: 'Sintona sivana:',
      timelines: {
        cumulative: 'Vokatra Manontolo',
        legacy2025: 'Taom-piasana 2025',
        active2026: 'Tetikasa ho an\'ny 2026'
      },
      metrics: {
        servedTitle: 'Mpiray Tanindrazana Nahazo Fanampiana',
        servedDesc: 'Isan\'ny olona nahazo fizaham-pahasalamana maimaimpoana, vatsim-pianarana, ary rano madio fisotro.',
        projectsTitle: 'Tetikasa Vita sy tontosa',
        projectsDesc: 'EPP vita fanavaozana sy nahitana jiro mandeha amin\'ny masoandro ary paompin-drano vaovao.',
        partnersTitle: 'Fiaraha-miasa Iraisam-pirenena',
        partnersDesc: 'Ireo mpamatsy vola iraisam-pirenena sy fikambanana mpiara-miombon\'antoka amin\'ny asa fampandrosoana ifotony.',
      },
      auditFooter: 'FAMARITANA VOAMARINA ARY NODINIHIN\'NY FILAN-KEVI-PITANTANANA MANOKANA'
    }
  }[language];

  // Specific counter value configurations for timelines
  const timelineValues: Record<TimelineId, { served: number; projects: number; partners: number }> = {
    cumulative: {
      served: 286400,
      projects: 148,
      partners: 19
    },
    legacy2025: {
      served: 124500,
      projects: 52,
      partners: 12
    },
    active2026: {
      served: 161900,
      projects: 96,
      partners: 7
    }
  };

  const currentValues = timelineValues[activeTimeline];

  return (
    <div className="space-y-8 pt-4" id="ngo-impact-metrics">
      {/* Section Header Line with Glowing Accent Dot */}
      <div className="flex items-center space-x-4">
        <span className="h-[1px] flex-grow bg-slate-900" />
        <div className={`flex items-center space-x-2 bg-slate-950/80 border ${colors.borderMuted} rounded-full px-4 py-1.5 backdrop-blur shadow-md`}>
          <TrendingUp size={12} className={`${colors.iconColor} animate-pulse`} />
          <span className={`font-mono text-[10px] ${colors.textAccent} tracking-wider font-extrabold uppercase`}>
            {t.sectionBadge}
          </span>
        </div>
        <span className="h-[1px] flex-grow bg-slate-900" />
      </div>

      {/* Narrative Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center justify-center gap-2">
          <span>{t.sectionTitle}</span>
          <Sparkles size={16} className={`${colors.iconColor} select-none`} />
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
          {t.sectionSub}
        </p>
      </div>

      {/* Multi-Select Timeline Capsule Control */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-slate-950/40 p-2 border border-slate-900 rounded-2xl max-w-2xl mx-auto backdrop-blur-sm">
        <span className="text-[10px] font-mono font-extrabold uppercase text-slate-500 tracking-wider flex items-center gap-1.5 px-3">
          <Filter size={11} className={`${colors.iconColor}`} />
          {t.timelineLabel}
        </span>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {(['cumulative', 'legacy2025', 'active2026'] as TimelineId[]).map((timelineId) => (
            <button
              key={timelineId}
              onClick={() => setActiveTimeline(timelineId)}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-widest font-extrabold transition-all duration-200 cursor-pointer ${
                activeTimeline === timelineId
                  ? `${colors.bgMuted} border ${colors.borderMuted} ${colors.textAccent} shadow-[0_0_15px_rgba(244,63,94,0.1)]`
                  : 'text-slate-400 border border-transparent hover:text-white hover:bg-slate-900/40'
              }`}
            >
              {t.timelines[timelineId]}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of 3 Premium Cards with Dynamic Counters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        
        {/* Metric 1: Community Members Served */}
        <div className={`bg-slate-950/45 p-6 sm:p-8 rounded-3xl border border-slate-900 ${colors.borderHover} transition-all duration-350 group relative overflow-hidden flex flex-col justify-between`}>
          <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl pointer-events-none transition-colors ${colors.glow}`} />
          
          <div className="space-y-4">
            <div className={`w-12 h-12 rounded-xl bg-slate-950/30 border ${colors.borderMuted} flex items-center justify-center ${colors.iconColor} transition-colors shadow-sm`}>
              <Users size={20} />
            </div>
            
            <div className="space-y-2">
              <span className={`inline-block text-[9px] font-mono border ${colors.borderMuted} px-2 py-0.5 rounded ${colors.bgMuted} uppercase tracking-widest font-extrabold ${colors.textAccent}`}>
                {activeTimeline === 'cumulative' ? '100% AUDITED' : 'ANNUAL REACH'}
              </span>
              
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                <CountUp value={currentValues.served} suffix="+" />
              </h3>

              <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wide pt-1">
                {t.metrics.servedTitle}
              </h4>
              
              <p className="text-slate-400 text-xs leading-relaxed font-light">
                {t.metrics.servedDesc}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-slate-900/60 flex justify-between items-center text-[9px] font-mono text-slate-500">
            <span>INDEX_REGISTRY: RM_01</span>
            <span className={`${colors.textAccent} font-bold uppercase`}>ACTUALS</span>
          </div>
        </div>

        {/* Metric 2: Projects Completed */}
        <div className={`bg-slate-950/45 p-6 sm:p-8 rounded-3xl border border-slate-900 ${colors.borderHover} transition-all duration-350 group relative overflow-hidden flex flex-col justify-between`}>
          <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl pointer-events-none transition-colors ${colors.glow}`} />
          
          <div className="space-y-4">
            <div className={`w-12 h-12 rounded-xl bg-slate-950/30 border ${colors.borderMuted} flex items-center justify-center ${colors.iconColor} transition-colors shadow-sm`}>
              <Award size={20} />
            </div>
            
            <div className="space-y-2">
              <span className={`inline-block text-[9px] font-mono border ${colors.borderMuted} px-2 py-0.5 rounded ${colors.bgMuted} uppercase tracking-widest font-extrabold ${colors.textAccent}`}>
                DELIVERED
              </span>
              
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                <CountUp value={currentValues.projects} />
              </h3>

              <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wide pt-1">
                {t.metrics.projectsTitle}
              </h4>
              
              <p className="text-slate-400 text-xs leading-relaxed font-light">
                {t.metrics.projectsDesc}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-slate-900/60 flex justify-between items-center text-[9px] font-mono text-slate-500">
            <span>INDEX_REGISTRY: IP_02</span>
            <span className={`${colors.textAccent} font-bold uppercase`}>COMPLETED</span>
          </div>
        </div>

        {/* Metric 3: Global Partnerships */}
        <div className={`bg-slate-950/45 p-6 sm:p-8 rounded-3xl border border-slate-900 ${colors.borderHover} transition-all duration-350 group relative overflow-hidden flex flex-col justify-between`}>
          <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl pointer-events-none transition-colors ${colors.glow}`} />
          
          <div className="space-y-4">
            <div className={`w-12 h-12 rounded-xl bg-slate-950/30 border ${colors.borderMuted} flex items-center justify-center ${colors.iconColor} transition-colors shadow-sm`}>
              <Globe size={20} />
            </div>
            
            <div className="space-y-2">
              <span className={`inline-block text-[9px] font-mono border ${colors.borderMuted} px-2 py-0.5 rounded ${colors.bgMuted} uppercase tracking-widest font-extrabold ${colors.textAccent}`}>
                CERTIFIED LIAISONS
              </span>
              
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                <CountUp value={currentValues.partners} />
              </h3>

              <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wide pt-1">
                {t.metrics.partnersTitle}
              </h4>
              
              <p className="text-slate-400 text-xs leading-relaxed font-light">
                {t.metrics.partnersDesc}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-slate-900/60 flex justify-between items-center text-[9px] font-mono text-slate-500">
            <span>INDEX_REGISTRY: PL_03</span>
            <span className={`${colors.textAccent} font-bold uppercase`}>ACTIVE COOP</span>
          </div>
        </div>

      </div>

      {/* Decoupled Audit Disclaimer footer */}
      <div className="text-center pt-2">
        <span className="inline-block text-[8px] font-mono text-slate-600 tracking-widest uppercase border border-slate-900 p-2 rounded-lg bg-slate-950/10">
          {t.auditFooter}
        </span>
      </div>
    </div>
  );
}
