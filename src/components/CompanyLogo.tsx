import React from 'react';

interface CompanyLogoProps {
  id: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function CompanyLogo({ id, size = 'md', className = '' }: CompanyLogoProps) {
  // Determine sizing classes
  const sizeClasses = {
    sm: 'w-10 h-10 rounded-xl text-sm',
    md: 'w-16 h-16 rounded-2xl text-base',
    lg: 'w-24 h-24 rounded-3xl text-lg',
    xl: 'w-36 h-36 rounded-[2rem] text-2xl'
  }[size];

  const iconSizes = {
    sm: 20,
    md: 32,
    lg: 48,
    xl: 72
  }[size];

  // Render a distinctive custom geometric SVG logomark for each company brand
  const renderLogoGraphic = () => {
    switch (id) {
      case 'ngo':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="url(#ngo-grad)" strokeWidth="6" className="opacity-90" />
            <path d="M50 32C42 22 28 26 28 38C28 52 50 68 50 68C50 68 72 52 72 38C72 26 58 22 50 32Z" fill="url(#ngo-grad)" className="animate-pulse" style={{ animationDuration: '3s' }} />
            <defs>
              <linearGradient id="ngo-grad" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'tsingy':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Eco hospitality / Tsingy Bay coastal waves and sun */}
            <circle cx="50" cy="50" r="45" fill="url(#tsingy-bg)" />
            <circle cx="50" cy="38" r="14" fill="#fbbf24" />
            {/* Stylized waves/tsingy peaks */}
            <path d="M22 68L36 46L50 62L68 36L82 68H22Z" fill="url(#tsingy-peak)" />
            <path d="M15 74C30 65 45 78 60 74C75 70 85 78 85 78V85H15V74Z" fill="#0d9488" fillOpacity="0.8" />
            <defs>
              <linearGradient id="tsingy-bg" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
              <linearGradient id="tsingy-peak" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'water':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15C50 15 22 45 22 62C22 75.3 34.5 85 50 85C65.5 85 78 75.3 78 62C78 45 50 15 50 15Z" fill="url(#water-grad)" />
            <path d="M50 25C50 25 28 49 28 62C28 71.5 37.8 78 50 78C62.2 78 72 71.5 72 62C72 49 50 25 50 25Z" fill="url(#water-grad-inner)" />
            <circle cx="42" cy="55" r="5" fill="#ffffff" fillOpacity="0.4" />
            <defs>
              <linearGradient id="water-grad" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="water-grad-inner" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'france':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Elegant European liaison gateway logo */}
            <circle cx="50" cy="50" r="42" stroke="url(#france-ring)" strokeWidth="4" />
            <g transform="translate(18, 18) scale(0.64)">
              {/* French flag abstract vertical swooshes */}
              <path d="M25 15C18 20 15 40 15 65C15 90 28 85 28 85V15H25Z" fill="#3b82f6" />
              <path d="M28 15H55V85H28V15Z" fill="#f8fafc" />
              <path d="M55 15H58C68 15 85 30 85 55C85 80 65 85 55 85V15Z" fill="#ef4444" />
            </g>
            {/* Golden Star compass in centre representation */}
            <path d="M50 35L53 44L62 44L55 50L58 59L50 53L42 59L45 50L38 44L47 44L50 35Z" fill="#fbbf24" />
            <defs>
              <linearGradient id="france-ring" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'wtc':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* World Trade Center Antananarivo - Bold intersecting towering grids */}
            <rect x="22" y="15" width="22" height="70" rx="3" fill="url(#wtc-grad)" />
            <rect x="56" y="15" width="22" height="70" rx="3" fill="url(#wtc-grad)" />
            {/* Intersecting globe latitudes and longitudes */}
            <path d="M12 50H88" stroke="#10b981" strokeWidth="4" strokeLinecap="round" strokeDasharray="4 4" />
            <path d="M15 35C30 45 70 45 85 35" stroke="#10b981" strokeWidth="3" fill="none" />
            <path d="M15 65C30 55 70 55 85 65" stroke="#10b981" strokeWidth="3" fill="none" />
            <defs>
              <linearGradient id="wtc-grad" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'management':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Corporate governance, shield & grid board */}
            <path d="M50 15L82 28V55C82 72 68 85 50 85C32 85 18 72 18 55V28L50 15Z" fill="url(#mgmt-bg)" />
            {/* Clean golden interlocking abstract corporate nodes */}
            <circle cx="50" cy="40" r="8" fill="#fbbf24" />
            <circle cx="38" cy="62" r="6" fill="#f59e0b" />
            <circle cx="62" cy="62" r="6" fill="#f59e0b" />
            <line x1="50" y1="40" x2="38" y2="62" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.6" />
            <line x1="50" y1="40" x2="62" y2="62" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.6" />
            <line x1="38" y1="62" x2="62" y2="62" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.6" />
            <defs>
              <linearGradient id="mgmt-bg" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'agulhas':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Maritime, shipping, deep water deep-orange anchor motif */}
            <circle cx="50" cy="50" r="42" fill="url(#agulhas-bg)" />
            {/* Ship Bow/Anchor styled */}
            <path d="M50 25V68M50 68C42 68 32 60 28 50M50 68C58 68 68 60 72 50" stroke="#f97316" strokeWidth="7" strokeLinecap="round" />
            <path d="M40 38H60" stroke="#f97316" strokeWidth="6" strokeLinecap="round" />
            <circle cx="50" cy="24" r="6" stroke="#f97316" strokeWidth="5" />
            <defs>
              <linearGradient id="agulhas-bg" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#0b1329" />
                <stop offset="100%" stopColor="#1c2541" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'realestate':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/205 205" xmlnsXlink="http://www.w3.org/1999/xlink">
            {/* Elegant luxury realestate architecture logo */}
            {/* Left tower */}
            <path d="M20 78V35L42 22V78H20Z" fill="url(#re-grad-light)" />
            {/* Right overlapping tower */}
            <path d="M42 78V45L68 30L80 38V78H42Z" fill="url(#re-grad-dark)" />
            {/* Little windows represented in lines */}
            <line x1="28" y1="45" x2="34" y2="45" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="3" />
            <line x1="28" y1="55" x2="34" y2="55" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="3" />
            <line x1="28" y1="65" x2="34" y2="65" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="3" />
            <line x1="52" y1="50" x2="58" y2="50" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="3" />
            <line x1="52" y1="60" x2="58" y2="60" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="3" />
            <line x1="66" y1="55" x2="72" y2="55" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="3" />
            <line x1="66" y1="65" x2="72" y2="65" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="3" />
            
            <line x1="12" y1="78" x2="88" y2="78" stroke="#10b981" strokeWidth="4" strokeLinecap="round" />
            <defs>
              <linearGradient id="re-grad-light" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <linearGradient id="re-grad-dark" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#065f46" />
                <stop offset="100%" stopColor="#022c22" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'mall':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Crown of retail / atrium ribbon / dinosaur shield */}
            <circle cx="50" cy="50" r="45" fill="url(#mall-bg)" />
            {/* Golden concentric ribbons nesting */}
            <path d="M25 60C30 40 45 25 50 25C55 25 70 40 75 60C62 52 50 64 50 64C50 64 38 52 25 60Z" fill="url(#mall-gold)" />
            <path d="M34 68C38 54 46 44 50 44C54 44 62 54 66 68C56 61 50 70 50 70C50 70 44 61 34 68Z" fill="#ea580c" />
            <defs>
              <linearGradient id="mall-bg" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#1e1b4b" />
                <stop offset="100%" stopColor="#311042" />
              </linearGradient>
              <linearGradient id="mall-gold" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'serv':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Interlocking gear vector / service bolt */}
            <circle cx="50" cy="50" r="16" stroke="url(#gear-grad)" strokeWidth="12" />
            {/* Gear spokes */}
            <g transform="translate(50,50)" className="animate-spin" style={{ animationDuration: '12s' }}>
              <rect x="-6" y="-36" width="12" height="15" rx="3" fill="url(#gear-grad)" />
              <rect x="-6" y="21" width="12" height="15" rx="3" fill="url(#gear-grad)" />
              <rect x="-36" y="-6" width="15" height="12" rx="3" fill="url(#gear-grad)" />
              <rect x="21" y="-6" width="15" height="12" rx="3" fill="url(#gear-grad)" />
              
              <rect x="-24" y="-24" width="12" height="12" rx="2" fill="url(#gear-grad)" transform="rotate(45)" />
              <rect x="12" y="12" width="12" height="12" rx="2" fill="url(#gear-grad)" transform="rotate(45)" />
              <rect x="-24" y="12" width="12" height="12" rx="2" fill="url(#gear-grad)" transform="rotate(-45)" />
              <rect x="12" y="-24" width="12" height="12" rx="2" fill="url(#gear-grad)" transform="rotate(-45)" />
            </g>
            <circle cx="50" cy="50" r="8" fill="#0f172a" />
            <defs>
              <linearGradient id="gear-grad" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'dis':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Rapid nationwide delivery / logistic speed lines */}
            <path d="M15 35H65L78 52V68H60" stroke="url(#dis-grad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="32" cy="74" r="10" stroke="url(#dis-grad)" strokeWidth="6" />
            <circle cx="68" cy="74" r="10" stroke="url(#dis-grad)" strokeWidth="6" />
            {/* Delivery velocity lines */}
            <line x1="8" y1="42" x2="22" y2="42" stroke="#ea580c" strokeWidth="4" strokeLinecap="round" />
            <line x1="12" y1="50" x2="28" y2="50" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
            <line x1="6" y1="58" x2="18" y2="58" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
            <defs>
              <linearGradient id="dis-grad" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'woods':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Natural ecology, repeating tree rings / leaves */}
            <circle cx="50" cy="50" r="42" stroke="url(#woods-grad)" strokeWidth="4" />
            <circle cx="50" cy="50" r="30" stroke="url(#woods-grad)" strokeWidth="3" strokeDasharray="6 3" />
            <circle cx="50" cy="50" r="18" stroke="url(#woods-grad)" strokeWidth="2" />
            {/* Green leaf in center */}
            <path d="M50 24C36 38 46 64 50 72C54 64 64 38 50 24Z" fill="url(#woods-leaf)" />
            <defs>
              <linearGradient id="woods-grad" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#047857" />
                <stop offset="100%" stopColor="#065f46" />
              </linearGradient>
              <linearGradient id="woods-leaf" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'hybrid':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Hybrid energy solar PV + cells node */}
            <rect x="22" y="22" width="56" height="56" rx="10" stroke="url(#hybrid-grad)" strokeWidth="5" />
            {/* Solar cells matrix grids */}
            <line x1="22" y1="40" x2="78" y2="40" stroke="url(#hybrid-grad)" strokeWidth="2.5" />
            <line x1="22" y1="60" x2="78" y2="60" stroke="url(#hybrid-grad)" strokeWidth="2.5" />
            <line x1="40" y1="22" x2="40" y2="78" stroke="url(#hybrid-grad)" strokeWidth="2.5" />
            <line x1="60" y1="22" x2="60" y2="78" stroke="url(#hybrid-grad)" strokeWidth="2.5" />
            {/* Bolt flashing overlay */}
            <path d="M54 32L38 52H50L46 70L62 50H50L54 32Z" fill="#f59e0b" className="animate-pulse" />
            <defs>
              <linearGradient id="hybrid-grad" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'hydro':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Hydro power rotating water turbine */}
            <circle cx="50" cy="50" r="42" stroke="url(#hydro-grad)" strokeWidth="4" />
            <g transform="translate(50,50)" className="animate-spin" style={{ animationDuration: '8s' }}>
              {/* Hydraulic blades */}
              {Array.from({ length: 6 }).map((_, i) => (
                <path
                  key={i}
                  d="M0 0C10 -15 25 -10 25 5C25 20 10 20 0 0Z"
                  fill="url(#hydro-grad)"
                  transform={`rotate(${i * 60})`}
                  fillOpacity="0.85"
                />
              ))}
            </g>
            <circle cx="50" cy="50" r="6" fill="#f8fafc" />
            <defs>
              <linearGradient id="hydro-grad" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'yoga':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Zen Lotus petals / Z-Yoga wellness alignment */}
            <circle cx="50" cy="50" r="44" fill="url(#yoga-bg)" />
            {/* Sacred alignment circles vector */}
            <circle cx="50" cy="28" r="4" fill="#a855f7" />
            <circle cx="50" cy="38" r="3" fill="#c084fc" />
            <circle cx="50" cy="46" r="2.5" fill="#e9d5ff" />
            
            {/* Lotus petals */}
            <path d="M50 48C42 56 30 58 30 70C30 82 50 82 50 82C50 82 70 82 70 70C70 58 58 48 50 48Z" fill="url(#yoga-petal)" fillOpacity="0.9" />
            <path d="M50 56C45 61 38 62 38 70C38 78 50 78 50 78C50 78 62 78 62 70C62 62 55 61 50 56Z" fill="#a855f7" fillOpacity="0.6" />
            <defs>
              <linearGradient id="yoga-bg" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#1e182a" />
                <stop offset="100%" stopColor="#0f0c15" />
              </linearGradient>
              <linearGradient id="yoga-petal" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#d946ef" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'construction':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* High strength infrastructural girder triangle */}
            <path d="M15 78L50 18L85 78H15Z" stroke="url(#const-grad)" strokeWidth="8" strokeLinejoin="round" />
            {/* Interlacing inner trusses */}
            <line x1="50" y1="18" x2="50" y2="78" stroke="url(#const-grad)" strokeWidth="6" />
            <line x1="32" y1="48" x2="50" y2="48" stroke="url(#const-grad)" strokeWidth="5" />
            <line x1="50" y1="48" x2="68" y2="48" stroke="url(#const-grad)" strokeWidth="5" />
            <line x1="32" y1="48" x2="50" y2="78" stroke="url(#const-grad)" strokeWidth="4" />
            <line x1="68" y1="48" x2="50" y2="78" stroke="url(#const-grad)" strokeWidth="4" />
            <defs>
              <linearGradient id="const-grad" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#ca8a04" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'mining':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Crystal / Diamond crystalline mineral vector */}
            <polygon points="50,15 80,38 70,82 30,82 20,38" fill="url(#mine-dark)" />
            <polygon points="50,15 80,38 50,55 20,38" fill="url(#mine-light)" />
            <polygon points="50,55 70,82 30,82" fill="url(#mine-mid)" />
            <line x1="50" y1="15" x2="50" y2="55" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />
            <line x1="20" y1="38" x2="50" y2="55" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />
            <line x1="80" y1="38" x2="50" y2="55" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />
            <defs>
              <linearGradient id="mine-dark" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#86198f" />
                <stop offset="100%" stopColor="#4a044e" />
              </linearGradient>
              <linearGradient id="mine-light" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#d946ef" />
                <stop offset="100%" stopColor="#a21caf" />
              </linearGradient>
              <linearGradient id="mine-mid" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#7e22ce" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'oilgas':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Safe industrial liquid storage fuel flame dome */}
            <circle cx="50" cy="50" r="42" stroke="url(#gas-grad)" strokeWidth="4" />
            <path d="M50 20C50 20 25 45 25 65C25 78.8 36.2 90 50 90C63.8 90 75 78.8 75 65C75 45 50 20 50 20Z" fill="url(#gas-bg)" />
            {/* Hydrocarbon fire spark logo */}
            <path d="M50 35C50 35 34 54 34 68C34 76.8 41.2 82 50 82C58.8 82 66 76.8 66 68C66 54 50 35 50 35Z" fill="#f97316" />
            <path d="M50 50C50 50 40 62 40 70C40 75.5 44.5 78 50 78C55.5 78 60 75.5 60 70C60 62 50 50 50 50Z" fill="#facc15" />
            <defs>
              <linearGradient id="gas-grad" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>
              <linearGradient id="gas-bg" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#1e1b4b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
          </svg>
        );

      case 'maromokotro':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Highest mountain peak summit station */}
            <circle cx="50" cy="50" r="44" fill="url(#maro-bg)" />
            {/* Overlapping glowing ridges */}
            <path d="M15 82L42 38L62 65L85 82H15Z" fill="url(#maro-grad-back)" />
            <polygon points="40,32 50,15 78,82 50,82" fill="url(#maro-grad-front)" />
            {/* Snow capped summit */}
            <polygon points="50,15 45,28 50,33 55,28" fill="#ffffff" />
            <defs>
              <linearGradient id="maro-bg" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="maro-grad-back" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="maro-grad-front" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="url(#def-grad)" strokeWidth="6" />
            <rect x="35" y="35" width="30" height="30" rx="6" fill="url(#def-grad)" />
            <defs>
              <linearGradient id="def-grad" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#14b8a6" />
              </linearGradient>
            </defs>
          </svg>
        );
    }
  };

  return (
    <div 
      className={`relative flex items-center justify-center shrink-0 border border-slate-900 shadow-inner overflow-hidden select-none bg-slate-950/60 ${sizeClasses} ${className}`}
      id={`company-logo-container-${id}`}
    >
      {/* Background glow node inside container */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-white/5 opacity-40 pointer-events-none" />
      <div className="w-full h-full p-1 flex items-center justify-center">
        {renderLogoGraphic()}
      </div>
    </div>
  );
}
