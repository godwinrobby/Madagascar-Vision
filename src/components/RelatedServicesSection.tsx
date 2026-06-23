import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Layers, 
  Cpu, 
  Globe, 
  Settings, 
  Shield, 
  ArrowUpRight, 
  Sparkles,
  Bookmark
} from 'lucide-react';

interface RelatedServicesSectionProps {
  companyId: string;
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

interface ServiceSuggestion {
  id: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
  title: Record<'EN' | 'FR' | 'MG', string>;
  desc: Record<'EN' | 'FR' | 'MG', string>;
  tagLine: Record<'EN' | 'FR' | 'MG', string>;
}

const SERVICE_CATALOG: Record<string, ServiceSuggestion> = {
  consulting: {
    id: 'consulting',
    icon: Briefcase,
    title: {
      EN: 'Consulting & Board Advisory',
      FR: 'Conseil & Conseil d’Administration',
      MG: 'Fiantsorohana sy Torohevitra',
    },
    desc: {
      EN: 'Navigate enterprise complexity with deep insights that reshape business models and enhance cross-sector operations.',
      FR: 'Gérez la complexité opérationnelle grâce à des analyses d’impact approfondies réorganisant vos modèles d\'affaires.',
      MG: 'Torohevitra matanjaka hanatsarana sy handrindrana ny asa aman-draharaha eo anivon’ny orinasa.',
    },
    tagLine: {
      EN: 'Fiducial Strategy',
      FR: 'Stratégie Fiduciaire',
      MG: 'Teti-pivoarana',
    }
  },
  proj_management: {
    id: 'proj_management',
    icon: Layers,
    title: {
      EN: 'Next-Gen Project Management',
      FR: 'Gestion de Projet de Nouvelle Génération',
      MG: 'Fitantanana Tetikasa Vaovao',
    },
    desc: {
      EN: 'Orchestrate mega-scale engineering and operational projects utilizing integrated Agile pipelines and state-of-the-art cost controls.',
      FR: 'Pilotez des projets d’ingénierie à grande échelle à l’aide de pipelines agiles et de suivis détaillés des coûts.',
      MG: 'Fandrindrana tetikasa goavana amin’ny alalan’ny teknolojia mitsitsy sy manara-penitra.',
    },
    tagLine: {
      EN: 'Agile Operations',
      FR: 'Opérations Agiles',
      MG: 'Fandrindrana haingana',
    }
  },
  digital_trans: {
    id: 'digital_trans',
    icon: Cpu,
    title: {
      EN: 'Digital Transformation & AI',
      FR: 'Transformation Digitale & IA',
      MG: 'Fanovana Nomerika sy AI',
    },
    desc: {
      EN: 'Inject deep technology blocks into legacy business structures—from serverless migrations to custom enterprise AI models.',
      FR: 'Insérez des technologies avancées dans vos structures : migration cloud et intégration d’intelligence artificielle.',
      MG: 'Fampidirana ny teknolojia nomerika sy ny fitsikilovana AI hanatsarana ny asa tranainy.',
    },
    tagLine: {
      EN: 'Advanced Computing',
      FR: 'Calcul Avancé',
      MG: 'Teknolojia avo lenta',
    }
  },
  infra_sol: {
    id: 'infra_sol',
    icon: Globe,
    title: {
      EN: 'Infrastructure Solutions',
      FR: 'Solutions d’Infrastructure',
      MG: 'Vahaolana fotodrafitrasa',
    },
    desc: {
      EN: 'Deploy high-impact physical and technological foundational networks that accelerate commercial transit speed and facilities resilience.',
      FR: 'Déployez des infrastructures physiques et technologiques optimisant la résilience et la rapidité commerciale.',
      MG: 'Fananganana fotodrafitrasa matanjaka sy maharitra mampitombo ny fahombiazan’ny varotra.',
    },
    tagLine: {
      EN: 'Global Foundations',
      FR: 'Bâtiment Souverain',
      MG: 'Fotodrafitrasa Iraisana',
    }
  },
  operational_excellence: {
    id: 'operational_excellence',
    icon: Settings,
    title: {
      EN: 'Operational Excellence',
      FR: 'Excellence Opérationnelle',
      MG: 'Fahombiazana feno amin\'ny asa',
    },
    desc: {
      EN: 'Harness advanced Lean Six Sigma principles and supply chain automation to maximize yields while reducing carbon outputs.',
      FR: 'Adoptez les principes du Lean Six Sigma et automatisez vos flux logistiques pour augmenter les rendements écologiques.',
      MG: 'Fampiharana ny fitsitsiana sy ny automatique mampitombo ny vokatra nefa miaro ny rivotra madio.',
    },
    tagLine: {
      EN: 'Zero Waste Yields',
      FR: 'Rendements Vertueux',
      MG: 'Tsy misy rano sisa indray',
    }
  },
  managed_services: {
    id: 'managed_services',
    icon: Shield,
    title: {
      EN: 'Strategic Managed Services',
      FR: 'Services Managés Stratégiques',
      MG: 'Asa sy Ara-teknika tantanina',
    },
    desc: {
      EN: 'Ensure non-stop operational integrity via 24/7 Security Operations Centers, high-touch tech maintenance, and fully managed resources.',
      FR: 'Garantissez la continuité opérationnelle grâce à des centres de contrôle actifs 24h/24 et une maintenance rigoureuse.',
      MG: 'Fiarovana sy fanaraha-maso ny asa rehetra andro aman-alina amin’ny alalan’ny toby nomerika.',
    },
    tagLine: {
      EN: 'Continuous Security',
      FR: 'Sécurité Continue',
      MG: 'Fiarovana tsy mitsahatra',
    }
  }
};

// Maps sector IDs to beautiful, tailored set of 3 services
const SERVICES_MAPPING_BY_SECTOR: Record<string, string[]> = {
  ngo: ['infra_sol', 'proj_management', 'consulting'],
  tsingy: ['infra_sol', 'digital_trans', 'operational_excellence'],
  water: ['infra_sol', 'proj_management', 'managed_services'],
  france: ['consulting', 'digital_trans', 'managed_services'],
  wtc: ['consulting', 'infra_sol', 'digital_trans'],
  management: ['consulting', 'proj_management', 'operational_excellence'],
  agulhas: ['operational_excellence', 'managed_services', 'digital_trans'],
  realestate: ['infra_sol', 'digital_trans', 'operational_excellence'],
  mall: ['managed_services', 'operational_excellence', 'digital_trans'],
  serv: ['operational_excellence', 'managed_services', 'infra_sol'],
  dis: ['operational_excellence', 'digital_trans', 'managed_services'],
  woods: ['infra_sol', 'operational_excellence', 'consulting'],
  hybrid: ['infra_sol', 'operational_excellence', 'managed_services'],
  hydro: ['infra_sol', 'proj_management', 'managed_services'],
  yoga: ['consulting', 'managed_services', 'proj_management'],
  construction: ['infra_sol', 'proj_management', 'operational_excellence'],
  mining: ['operational_excellence', 'proj_management', 'consulting'],
  oilgas: ['managed_services', 'operational_excellence', 'infra_sol'],
  maromokotro: ['infra_sol', 'proj_management', 'digital_trans']
};

export function RelatedServicesSection({ companyId, language, colors }: RelatedServicesSectionProps) {
  // Pull mappings or default to three primary enterprise service ids
  const relatedIds = SERVICES_MAPPING_BY_SECTOR[companyId] || ['infra_sol', 'digital_trans', 'consulting'];
  const suggestedServices = relatedIds.map(id => SERVICE_CATALOG[id]).filter(Boolean);

  const t = {
    EN: {
      badge: 'Integrated Competency Cross-Link',
      title: 'Suggested Strategic Services',
      subtitle: 'Unlock synergy by pairing this division\'s operation with our audited enterprise services delivering international compliance and deep local impact.',
      exploreBtn: 'Explore Service Model',
      viewAllBtn: 'View All Services'
    },
    FR: {
      badge: 'SYNERGIES ET COMPÉTENCES',
      title: 'Services Stratégiques Associés',
      subtitle: 'Optimisez l\'impact de cette filiale en la couplant avec nos services d\'entreprise audités garantissant conformité et rendement local.',
      exploreBtn: 'Découvrir le Service',
      viewAllBtn: 'Voir tous les Services'
    },
    MG: {
      badge: 'ASA SY OKOFIDIAN-DRAHARAHANY',
      title: 'Asa mifandray azonao ampiasaina',
      subtitle: 'Fampiraisana hery sy fampandehanana ny orinasa amin’ny alalan’ny tolotra matanjaka sy voazaha toetra maneran-tany.',
      exploreBtn: 'Hizaha ity Tolotra ity',
      viewAllBtn: 'Hijery ny Tolotra rehetra'
    }
  }[language];

  const handleLinkClick = () => {
    // Keep navigation transitions smooth and top-recurrent
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="pt-12 pb-6 space-y-8" id={`related-services-root-${companyId}`}>
      {/* Visual Section Tag / Divider */}
      <div className="flex items-center space-x-4">
        <span className="h-[1px] flex-grow bg-slate-900" />
        <div className={`flex items-center space-x-2 bg-slate-950/80 border ${colors.borderMuted} rounded-full px-4 py-1.5 backdrop-blur shadow-md`}>
          <Bookmark size={12} className={`${colors.iconColor}`} />
          <span className={`font-mono text-[10px] ${colors.textAccent} tracking-wider font-extrabold uppercase`}>
            {t.badge}
          </span>
        </div>
        <span className="h-[1px] flex-grow bg-slate-900" />
      </div>

      {/* Structured Title Block */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          {t.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
          {t.subtitle}
        </p>
      </div>

      {/* Responsive Bento-Like Grid (3 Items) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {suggestedServices.map((service, index) => {
          const ServiceIcon = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group bg-slate-950/45 border border-slate-900 hover:border-slate-800 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between transition-all hover:shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
              id={`related-service-card-${service.id}`}
            >
              {/* Decorative radial sector light glow */}
              <div className={`absolute -right-16 -top-16 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${colors.glow}`} />

              <div className="space-y-4">
                {/* Header Badge & Icon Block */}
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl group-hover:border-slate-700 transition-colors">
                    <ServiceIcon size={18} className={`${colors.iconColor}`} />
                  </div>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-slate-500 uppercase bg-slate-900/40 border border-slate-900 px-2 py-0.5 rounded">
                    {service.tagLine[language]}
                  </span>
                </div>

                {/* Service Name & Description */}
                <div className="space-y-1.5">
                  <h3 className="text-sm font-black text-white group-hover:text-amber-50 leading-tight transition-colors">
                    {service.title[language]}
                  </h3>
                  <p className="text-[11px] text-slate-450 leading-relaxed font-light line-clamp-3">
                    {service.desc[language]}
                  </p>
                </div>
              </div>

              {/* Action Link Footer Button */}
              <div className="pt-5 border-t border-slate-900/60 mt-4">
                <Link
                  to={`/services/${service.id}`}
                  onClick={handleLinkClick}
                  className={`inline-flex items-center text-[10px] font-mono font-bold tracking-wider uppercase gap-1.5 transition-colors cursor-pointer group-hover:underline ${colors.textAccent} hover:${colors.textAccentHover}`}
                >
                  <span>{t.exploreBtn}</span>
                  <ArrowUpRight size={12} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* High contrast centered button to go directly to major services pool */}
      <div className="flex justify-center pt-2">
        <Link
          to="/services"
          onClick={handleLinkClick}
          className="inline-flex items-center space-x-2 bg-slate-950/75 hover:bg-slate-900 border border-slate-900 hover:border-slate-800 rounded-xl px-5 py-2.5 text-xs text-slate-300 font-mono font-semibold transition-all shadow-md group"
        >
          <Sparkles size={11} className="text-amber-450 animate-pulse" />
          <span>{t.viewAllBtn}</span>
          <ArrowUpRight size={11} className="text-slate-500 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
