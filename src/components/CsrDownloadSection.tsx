import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Download, 
  CheckCircle2, 
  Loader2, 
  ShieldCheck, 
  X,
  Sparkles,
  FileDown,
  Clock,
  HardDrive
} from 'lucide-react';

interface CsrDownloadSectionProps {
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

export function CsrDownloadSection({ companyId, language, colors }: CsrDownloadSectionProps) {
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);
  const [downloadStep, setDownloadStep] = useState<'idle' | 'generating' | 'downloading' | 'completed'>('idle');
  const [isSuccessDismissed, setIsSuccessDismissed] = useState(false);

  const filenames: Record<string, Record<'EN' | 'FR' | 'MG', { title: string; filename: string; size: string }>> = {
    ngo: {
      EN: {
        title: '2026 Sovereign NGO Direct Impact and ESG Audit',
        filename: 'Sovereign_NGO_Direct_Impact_ESG_Audit_2026.pdf',
        size: '4.8 MB'
      },
      FR: {
        title: 'Audit de l\'Impact Direct et de la Responsabilité Sociétale de l\'ONG 2026',
        filename: 'ONG_Rapport_Impact_Social_2026.pdf',
        size: '5.1 Mo'
      },
      MG: {
        title: 'Tatitra momba ny Asa ho an’ny Vahoaka sy ny Fitantanana Madagascar 2026',
        filename: 'Tatitra_Asa_Tontolo_Iainana_Madagasikara_2026.pdf',
        size: '4.7 MB'
      }
    },
    tsingy: {
      EN: {
        title: '2026 Eco-Sanctuary Preservation & Zero Carbon Circular Report',
        filename: 'Tsingy_Eco_Lodges_Zero_Carbon_Report_2026.pdf',
        size: '6.2 MB'
      },
      FR: {
        title: 'Rapport Éco-Sanctuaire Conservation et Émissions Neutres T3 2026',
        filename: 'Tsingy_Eco_Lodges_Emissions_Neutres_2026.pdf',
        size: '6.5 Mo'
      },
      MG: {
        title: 'Tamberina momba ny Fiarovana ny Tsingy sy Fizahan-tany Maharitra 2026',
        filename: 'Tsingy_Fiarovana_Tontolo_Iainana_2026.pdf',
        size: '6.1 MB'
      }
    },
    water: {
      EN: {
        title: '2026 Deep Aquifer Hydrological Quality & Desalination Ledger',
        filename: 'Sovereign_Aquifers_Desalination_Quality_Ledger_2026.pdf',
        size: '3.9 MB'
      },
      FR: {
        title: 'Registre de Qualité Hydrologique et Osmose Inverse des Aquifères 2026',
        filename: 'Aquiferes_Osmose_Qualite_Eau_2026.pdf',
        size: '4.2 Mo'
      },
      MG: {
        title: 'Tatitra momba ny Sivana sy ny Fahadiovan’ny Rano sy ny fantsakana 2026',
        filename: 'Fahadiovana_Rano_Madio_Fantsakana_2026.pdf',
        size: '3.8 MB'
      }
    },
    woods: {
      EN: {
        title: '2026 FSC-Certified Silviculture Chain-of-Custody Accountability Protocol',
        filename: 'Sovereign_FSC_Silviculture_Traceability_Protocol_2026.pdf',
        size: '4.4 MB'
      },
      FR: {
        title: 'Protocole de Traçabilité Certifié FSC de la Canopée Forestière 2026',
        filename: 'Canopee_FSC_Tracabilite_Bois_2026.pdf',
        size: '4.6 Mo'
      },
      MG: {
        title: 'Tahirinkevitra momba ny fambolen-kazo sy ny mari-pahafantarana FSC 2026',
        filename: 'Ala_Fambolena_FSC_Tracabilite_2026.pdf',
        size: '4.3 MB'
      }
    },
    realestate: {
      EN: {
        title: '2026 Passive Thermal Smart Building Decarbonization Standard',
        filename: 'Sovereign_Buildings_Passive_Thermal_Decarbonization_2026.pdf',
        size: '5.5 MB'
      },
      FR: {
        title: 'Standard de Décarbonation et Efficacité Bioclimatique Immobilière 2026',
        filename: 'Immobilier_Efficacite_Bioclimatique_2026.pdf',
        size: '5.8 Mo'
      },
      MG: {
        title: 'Fenitra ara-drafitra momba ny Trano sy Fanorenana mitsitsy Jiro 2026',
        filename: 'Drafitra_Trano_Miaraka_Tontolo_2026.pdf',
        size: '5.3 MB'
      }
    },
    energy: {
      EN: {
        title: '2026 Renewable Microgrid Frequency & Hydro-Flow Storage Ledger',
        filename: 'Sovereign_Energy_Microgrid_SLA_Flow_Ledger_2026.pdf',
        size: '7.1 MB'
      },
      FR: {
        title: 'Registre de Résilience des Micro-Réseaux Hybrides Solaires-Hydriques 2026',
        filename: 'Energie_Microgrid_SLA_Fianarantsoa_2026.pdf',
        size: '7.4 Mo'
      },
      MG: {
        title: 'Tatitra momba ny Tanjaka sy ny Fizotran’ny Toby Angovo Solera 2026',
        filename: 'Angovo_Solera_Microgrids_Madagasikara_2026.pdf',
        size: '7.0 MB'
      }
    },
    logistics: {
      EN: {
        title: '2026 Bilateral Shipping Corridors & Zero-Spill Maritime Integrity Standards',
        filename: 'Sovereign_Logistics_Bilateral_Shipping_Corridors_2026.pdf',
        size: '5.9 MB'
      },
      FR: {
        title: 'Rapport de Flotte Maritime et Fluviale Bas-Carbone Toamasina 2026',
        filename: 'Logistique_Maritime_Toamasina_Flotte_2026.pdf',
        size: '6.2 Mo'
      },
      MG: {
        title: 'Torolalana momba ny Lalan-tsambo sy ny Fampitaterana mitsitsy Solika 2026',
        filename: 'Fampitaterana_Tsena_Seranantsambo_2026.pdf',
        size: '5.8 MB'
      }
    }
  };

  const currentMeta = (filenames[companyId] || filenames.ngo)[language];

  const t = {
    EN: {
      sectionTitle: 'CORPORATE SOCIAL RESPONSIBILITY',
      badge: 'Certified Audited ESG Disclosures',
      cardTitle: 'Download CSR & Impact Report',
      cardSubtitle: 'Review our sovereign commitments, certified metrics, carbon ledger compliance tables, and local community benefits audited quarterly.',
      btnIdle: 'Download CSR Report (PDF)',
      btnGenerating: 'Compiling Ledger Entries...',
      btnDownloading: 'Securing File Transfer...',
      btnCompleted: 'Audit Document Ready',
      successMessage: 'CSR audit document successfully initialized and cached. Direct local storage payload verified.',
      fileType: 'Electronic PDF Format',
      complianceSecured: 'Sovereign Encrypted Audit Access Verified',
      speedText: 'Downloading speed: 1.2 MB/s',
      closeBtn: 'Dismiss'
    },
    FR: {
      sectionTitle: 'RESPONSABILITÉ SOCIÉTALE (RSE)',
      badge: 'Régularité des Normes ESG Certifiée',
      cardTitle: 'Télécharger le Rapport RSE',
      cardSubtitle: 'Consultez nos engagements éco-durables, bilans thermiques raccordés, données chiffrées sur la biodiversité et l\'impact local audité.',
      btnIdle: 'Télécharger le Rapport RSE (PDF)',
      btnGenerating: 'Génération du registre cryptographique...',
      btnDownloading: 'Transmission du document sécurisé...',
      btnCompleted: 'Rapport RSE Disponible',
      successMessage: 'Le document d\'audit RSE a été généré et enregistré dans votre cache sécurisé local.',
      fileType: 'Format PDF Électronique',
      complianceSecured: 'Accès d\'Audit Chiffré Souverain Validé',
      speedText: 'Vitesse de transfert : 1,2 Mo/s',
      closeBtn: 'Fermer'
    },
    MG: {
      sectionTitle: 'FAHETSEN-TENA RAHA MOMBA NY REHETRA (CSR)',
      badge: 'Fiarovana ny Tontolo sy ny Olona voamarina',
      cardTitle: 'Haka ny tatitra CSR',
      cardSubtitle: 'Vakio eto ny tatitra feno momba ny fambolen-kazo, ny fiarovana ny rano ary ny fanentanana sosialy voamarin’ny mpanamarina mahay.',
      btnIdle: 'Haka ny Taratasy CSR (PDF)',
      btnGenerating: 'Andalam-panomanana ny tatitra...',
      btnDownloading: 'Andalam-pandefasana ny taratasy...',
      btnCompleted: 'Tafiditra ny Tatitra',
      successMessage: 'Tafiditra soa aman-tsara amin’ny fomba azo antoka ny tatitra CSR. Azonao vakiana mivantana.',
      fileType: 'Format PDF Nomerika',
      complianceSecured: 'Fifandraisana voaaro sy voamarina tsara',
      speedText: 'Hafainganam-pandefasana: 1.2 MB/s',
      closeBtn: 'Hikatona'
    }
  }[language];

  const handleStartDownload = () => {
    if (downloadStep !== 'idle') return;
    setIsSuccessDismissed(false);
    setDownloadStep('generating');
    setDownloadProgress(0);

    // Phase 1: Simulate server side ledger cryptographic packing
    setTimeout(() => {
      setDownloadStep('downloading');
      
      // Phase 2: Progress interval representing download pipeline
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 10;
        setDownloadProgress(currentProgress);
        
        if (currentProgress >= 100) {
          clearInterval(interval);
          setDownloadStep('completed');
          
          // Inject actual client-side simulated PDF blob download to prevent mock gaps!
          try {
            const mockPdfContent = `%PDF-1.4\n%...\n1 0 obj\n<< /Title (${currentMeta.title}) >>\nendobj\ntrailer\n<< /Root 1 0 R >>\n%%EOF`;
            const blob = new Blob([mockPdfContent], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = currentMeta.filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          } catch (e) {
            console.error('Simulated download triggering failed', e);
          }
        }
      }, 150);
    }, 1000);
  };

  const handleDismissSuccess = () => {
    setIsSuccessDismissed(true);
    setDownloadStep('idle');
    setDownloadProgress(null);
  };

  return (
    <div className="pt-12 pb-4 space-y-6" id="csr-download-container">
      {/* Section Divider with Glowing Badge */}
      <div className="flex items-center space-x-4">
        <span className="h-[1px] flex-grow bg-slate-900" />
        <div className={`flex items-center space-x-2 bg-slate-950/80 border ${colors.borderMuted} rounded-full px-4 py-1.5 backdrop-blur shadow-md`}>
          <FileText size={12} className="text-emerald-450" />
          <span className={`font-mono text-[10px] text-emerald-400 tracking-wider font-extrabold uppercase`}>
            {t.sectionTitle}
          </span>
        </div>
        <span className="h-[1px] flex-grow bg-slate-900" />
      </div>

      {/* Main Download Card with Glassmorphism */}
      <div 
        className="relative overflow-hidden rounded-[2rem] border border-emerald-950/40 bg-gradient-to-br from-slate-950 via-slate-950/90 to-emerald-950/15 p-6 sm:p-10 transition-all duration-500 hover:border-emerald-900/40 shadow-2xl"
        id="csr-download-card"
      >
        {/* Subtle decorative lights representing premium tech aesthetics */}
        <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute left-6 top-6 w-1 -translate-y-2 h-16 bg-gradient-to-b from-emerald-500/50 to-transparent blur-[1px]" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Information Side (7 columns) */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="space-y-1.5">
              <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full font-mono text-[9px] font-black tracking-wider uppercase bg-emerald-950/30 border border-emerald-800/20 text-emerald-400">
                <ShieldCheck size={10} className="mr-0.5" />
                {t.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {t.cardTitle}
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed max-w-xl">
              {t.cardSubtitle}
            </p>

            {/* Document metadata badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="flex items-center space-x-1.5 bg-slate-900/60 border border-slate-850 rounded-lg px-2.5 py-1.5 text-[10px] font-mono text-slate-400">
                <FileDown size={11} className="text-emerald-500" />
                <span>{currentMeta.size}</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-slate-900/60 border border-slate-850 rounded-lg px-2.5 py-1.5 text-[10px] font-mono text-slate-400">
                <HardDrive size={11} className="text-emerald-500" />
                <span className="truncate max-w-[150px] sm:max-w-xs">{currentMeta.filename}</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-slate-900/60 border border-slate-850 rounded-lg px-2.5 py-1.5 text-[10px] font-mono text-slate-500">
                <Clock size={11} />
                <span>2026 Audit Cycle v4</span>
              </div>
            </div>
          </div>

          {/* Interactive Button Side (5 columns) */}
          <div className="lg:col-span-5 w-full flex flex-col justify-center items-stretch sm:items-end z-20">
            <AnimatePresence mode="wait">
              {downloadStep !== 'completed' || isSuccessDismissed ? (
                <motion.div
                  key="download-initial-state"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full space-y-4"
                >
                  <button
                    disabled={downloadStep !== 'idle'}
                    onClick={handleStartDownload}
                    className="w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.30)] flex items-center justify-center space-x-3 transition-all duration-300 transform active:scale-97 disabled:cursor-not-allowed select-none group border border-emerald-400/20"
                  >
                    {downloadStep === 'idle' ? (
                      <>
                        <Download size={14} className="animate-bounce" />
                        <span>{t.btnIdle}</span>
                      </>
                    ) : downloadStep === 'generating' ? (
                      <>
                        <Loader2 size={14} className="animate-spin text-white" />
                        <span>{t.btnGenerating}</span>
                      </>
                    ) : (
                      <>
                        <Loader2 size={14} className="animate-spin text-white" />
                        <span>{t.btnDownloading} ({downloadProgress}%)</span>
                      </>
                    )}
                  </button>

                  {/* Simulated network speed and secure channel telemetry */}
                  {downloadStep !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center sm:text-right font-mono text-[9px] text-emerald-500/70 space-y-1"
                    >
                      <div>{t.speedText}</div>
                      <div>SECURE_TUNNEL_HASH: md5:9cbca3f{downloadProgress || 5}</div>
                    </motion.div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="download-success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full bg-emerald-950/20 border border-emerald-500/25 rounded-2xl p-5 text-left space-y-3 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-12 h-12 bg-emerald-500/10 rounded-bl-3xl flex items-center justify-center text-emerald-450">
                    <Sparkles size={14} className="animate-spin-slow" />
                  </div>

                  <div className="flex items-center space-x-2">
                    <CheckCircle2 size={16} className="text-emerald-400" />
                    <span className="text-xs font-black text-white tracking-tight uppercase">
                      {t.btnCompleted}
                    </span>
                  </div>
                  
                  <p className="text-[11px] text-slate-350 leading-relaxed">
                    {t.successMessage}
                  </p>

                  <div className="flex items-center justify-between text-[8px] font-mono text-slate-550 border-t border-slate-900/50 pt-2 ">
                    <span className="text-emerald-450/70">{t.complianceSecured}</span>
                    <button
                      onClick={handleDismissSuccess}
                      className="text-slate-400 hover:text-white underline font-extrabold uppercase tracking-wide flex items-center space-x-1 cursor-pointer"
                    >
                      <X size={8} />
                      <span>{t.closeBtn}</span>
                    </button>
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
