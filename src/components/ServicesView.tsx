import { motion } from 'motion/react';
import { SERVICES } from '../data/corporateData';
import { DynamicIcon } from './DynamicIcon';
import { ChevronRight, ArrowRight, ShieldCheck, Cpu, Layers } from 'lucide-react';

interface ServicesViewProps {
  language: 'EN' | 'DE' | 'JP';
}

export function ServicesView({ language }: ServicesViewProps) {
  
  const translations = {
    EN: {
      title: 'Our Services & Executive Capabilities',
      sub: 'Providing high-end technical architectures, advisory, and physical asset management systems built to scale.',
      featuresLabel: 'Primary Service Features',
      requestBtn: 'Request Executive Outline'
    },
    DE: {
      title: 'Dienstleistungen & Beratungskompetenz',
      sub: 'Hochwertige technologische Architekturen, Beratung und physische Asset-Management-Systeme für globale Skalierung.',
      featuresLabel: 'Spezifische Leistungsinhalte',
      requestBtn: 'Leistungsübersicht anfordern'
    },
    JP: {
      title: 'コア・サービス ＆ 特化ソリューション',
      sub: '各事業セクターの運用安定からDX、政府コンサルタントまで、連結持株の力を集結した高付加価値ソリューションを提供します。',
      featuresLabel: 'サービスの主な構成要素',
      requestBtn: 'サービスの詳細案内を要求する'
    }
  }[language];

  return (
    <div id="services-view-wrapper" className="space-y-16 pb-12 relative animate-fade-in">
      
      {/* 1. Header Details */}
      <section className="relative pt-32 pb-8 overflow-hidden text-center max-w-4xl mx-auto px-4" id="services-intro">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase border border-emerald-500/30 px-3 py-1 rounded-full bg-emerald-950/20">
          {language === 'EN' ? 'HIGH-TOUCH CAPABILITIES' : language === 'DE' ? 'UNSERE INHALTLICHEN STRUKTUREN' : 'コングロマリット提供サービス'}
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-4">
          {translations.title}
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-4 max-w-2xl mx-auto">
          {translations.sub}
        </p>
      </section>

      {/* 2. Glassmorphic Services Grid with 3D hover layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="services-cards-grid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((serv, idx) => (
            <motion.div
              key={serv.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass card-hover rounded-2xl p-6 group flex flex-col justify-between h-[390px] relative overflow-hidden"
              id={`service-card-${serv.id}`}
            >
              {/* Backglow element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 group-hover:text-emerald-300 transition-colors">
                  <DynamicIcon name={serv.icon} size={20} />
                </div>

                <div className="space-y-1 block text-left">
                  <h3 className="text-white text-base font-extrabold tracking-tight group-hover:text-emerald-400 transition-colors">
                    {serv.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light line-clamp-3">
                    {serv.description}
                  </p>
                </div>

                {/* Sub Features Bullet points */}
                <div className="space-y-1.5 block text-left">
                  <span className="block text-[10px] font-mono tracking-wider font-bold text-slate-500 uppercase">
                    {translations.featuresLabel}
                  </span>
                  
                  <ul className="space-y-1 text-slate-300 text-[11px] leading-snug">
                    {serv.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-1.5">
                        <span className="text-emerald-400 mt-0.5">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="border-t border-slate-900 pt-3 mt-4 flex items-center justify-between text-[11px] font-semibold text-slate-400 font-mono">
                <span>SEC STATUS: COMPLIANT</span>
                <span className="text-slate-500 group-hover:text-white transition-colors flex items-center space-x-1">
                  <span>OUTLINE</span>
                  <ChevronRight size={10} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Global compliance quality callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="services-quality-callout">
        <div className="glass card-hover rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-xs text-slate-400">
          <div className="flex flex-col items-center space-y-2 p-2">
            <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
              <ShieldCheck size={14} />
            </div>
            <h4 className="text-white font-bold">{language === 'EN' ? 'Sovereign Validation' : language === 'DE' ? 'Staatlich validiert' : '公的法適合'}</h4>
            <p className="max-w-[220px] mx-auto text-[11px]">{language === 'EN' ? 'Complies with all core European, United Kingdom and Japanese regulatory directives.' : language === 'DE' ? 'Konform mit allen Kernrichtlinien der EU, Großbritanniens und Japans.' : '欧州共同体規則（EU）、日本の開発規制基準等に準拠。'}</p>
          </div>

          <div className="flex flex-col items-center space-y-2 p-2 border-y md:border-y-0 md:border-x border-slate-900">
            <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
              <Cpu size={14} />
            </div>
            <h4 className="text-white font-bold">{language === 'EN' ? 'Carbon Ledger AI' : language === 'DE' ? 'CO2-Bilanzierung per KI' : 'AIによるCO2会計'}</h4>
            <p className="max-w-[220px] mx-auto text-[11px]">{language === 'EN' ? 'Continuous automated materials auditing using local edge computational telemetry.' : language === 'DE' ? 'Fortlaufendes automatisches Material-Audit mittels lokaler Sensor-Telemetrie.' : '各物理設備側のIoT端末との同期による、完全透明なCO2排出量の証明。'}</p>
          </div>

          <div className="flex flex-col items-center space-y-2 p-2">
            <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
              <Layers size={14} />
            </div>
            <h4 className="text-white font-bold">{language === 'EN' ? '24/7 Service Desk' : language === 'DE' ? '24/7 Leitstelle' : '24時間年中無休運用'}</h4>
            <p className="max-w-[220px] mx-auto text-[11px]">{language === 'EN' ? 'Providing uninterrupted physical and technological network support across continents.' : language === 'DE' ? 'Ausfallsicherer Support für physische und technologische Infrastrukturen.' : '国際ネットワークから物理インフラまで、専任の監視センターがリアルタイム監査。'}</p>
          </div>
        </div>
      </section>

    </div>
  );
}
