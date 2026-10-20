import { Article } from '../types';

export const HERO_IMAGE_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1VmkQhSyO0L049mK83SPCL2xdE35G0VB54FZKSk-VwUcTaXqbtkbaStraj9DI0eQN6axFOdX61XQKN3wQFJZ0kr_fERGr95Da8flpIbBpHv-3m--YOSaK-XWF75E6nOvKYGTXjkozZLDrBlCpDT5LL2PhzHflDjbUnC3fhAbZh6BBLCjM-O0oC_9hEF3C9L9-wjQq5jy_DqaJ6MUpLrqDGbPtC-itIlC-RPK7kkVFhKwNeS7s4rZkpRuQI';
export const AI_LAB_IMAGE_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1XYWSGKZwffZjU1LKZQ5Cmx2sVMW-Tn-itpolZAPK3kHpc0O_hUQUv2A6I2bIqVVFtnGndQHlJ1QSBhtMoJZMYtWQZfFowFzguDYTfHF48Xj4NJZvgkAMIMNvuNKkPAhHnlKwqaDXhjSe6kH2fVwPRDi2qDcV69SWmppoS3k-cG9jwcDd5XXyAXIuAgls1NfkBHQLA1F09yOtYyDcz45FsCNpOnzyEY38FftQ2RK6opfMHLo_ZPJoGgkZo';
export const CLEAN_GRID_IMAGE_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1WEoHjWGYLrk51vWfxEbqFC9fDGgFazD-pUUr1B3F2rKXbjE-L-Fsf7PbFk562F3akNL070DBG2RJRwQyYTJ9xX7PDZijPAxrGWFusno5B3OVHSl1NSDj6zjazWxMC5poTus5UnpucU-GSa4KZDYBNSZbDSHH0dJ4Y6PBfwTzMQK2w26pRkwH42HoefDfWSKaKWNt8Atff2I9R6m7WADnSze0d1dzXVSlbAgwV3VVYCy5QnAiuLiulkGV4u';
export const DESIGN_DESK_IMAGE_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1VK5R8MH60HOQIsEGyAM3K-hkBRjIUhslKR86n2_2iYPphS_O_peciurmzKgDUEdgYr0Vz6fZiKyh_LvwvFcrx31JEUqehTDHGZeCKVz1xZ4MR_NXMEtnEFbNxDEAsDEkTQuikAde5bSpntu83Gex8AIAy_7FfTl8rAu0aowNFUrfVj767KQYl4NNPab2bINIbzUoYbtWyTlpBY4sThuPbGNFMjKIlUo27p3aRv12k5ekq3NjqiQkp5cFIQ';

export const FEATURED_ARTICLE: Article = {
  id: 'featured-ai-hybrid-publishing-2026',
  slug: 'future-of-ai-and-hybrid-publishing-in-2026',
  title: 'The Future of AI and Hybrid Publishing in 2026',
  excerpt: 'Exploring how intelligent automation and high-density editorial workflows are redefining global news curation and independent media architecture.',
  category: 'Special Report',
  categoryColorClass: {
    bg: 'rgba(158, 119, 237, 0.15)',
    text: '#9E77ED',
    border: 'rgba(158, 119, 237, 0.3)'
  },
  author: {
    name: 'Editorial Board',
    role: 'Principal Investigative Group',
    initials: 'NP',
    avatarBg: 'rgba(158, 119, 237, 0.2)',
    avatarText: '#9E77ED',
    avatarBorder: 'rgba(158, 119, 237, 0.4)',
    bio: 'The NewsPortal Editorial Board unites veteran investigative journalists, machine learning researchers, and newsroom architects to examine systemic shifts across the information economy.'
  },
  date: '24 May 2026',
  readTime: '12 Min Read',
  featured: true,
  specialReport: true,
  trending: true,
  imageUrl: HERO_IMAGE_URL,
  views: '42.8k',
  claps: 1240,
  tags: ['Artificial Intelligence', 'Media Architecture', 'Future of Journalism', 'Hybrid Newsroom'],
  sections: [
    {
      heading: 'The Paradigm Shift in Editorial Velocity',
      paragraphs: [
        'Over the past thirty-six months, newsrooms worldwide have traversed a foundational shift: moving from exploratory AI generation toward deep hybrid orchestration. The early anxieties of wholesale journalist replacement have resolved into a nuanced reality of specialized human-machine synthesis. Writers and analysts no longer battle automated volume; they supervise autonomous verification meshes and syntheses that operate around the clock.',
        'In the contemporary editorial ecosystem, raw feeds—spanning satellite imagery, regulatory filings, court dockets, and distributed telemetry—are structured into real-time semantic graphs. Rather than producing hallucinated prose, modern synthetic pipelines serve as hyper-specialized researchers that surface anomalies and cross-reference factual assertions before a single draft touches an editor’s desk.'
      ],
      pullQuote: 'The highest premium in 2026 is not the speed of generation, but the uncompromising fidelity of attribution and institutional verification.'
    },
    {
      heading: 'Multi-Agent Verification Meshes',
      paragraphs: [
        'At the core of this transformation lies the multi-agent editorial desk. Specialized sub-agents perform deterministic verification tasks: cross-examining corporate financial statements against historical filings, detecting synthetic speech artifacts in breaking audio leaks, and monitoring regional energy microgrid telemetry.',
        'This continuous background verification frees investigative reporters from low-level administrative collation, allowing them to dedicate hours to source corroboration, on-the-ground interviews, and high-context narrative synthesis.'
      ],
      keyTakeaways: [
        'Automated telemetry and anomaly detection compress investigative research cycles from weeks to minutes.',
        'Multi-agent systems enforce rigorous source chain-of-custody tracking directly in editorial CMS frameworks.',
        'Independent publications leverage specialized inference clusters to rival legacy bureau capabilities.'
      ]
    },
    {
      heading: 'Decentralized Syndication & Trust Architectures',
      paragraphs: [
        'As synthetic audio and imagery proliferate across consumer channels, cryptographic provenance headers and signed editorial manifests have emerged as baseline standards. Readers in 2026 demand auditable proof that reported statements originated from verified interviews and primary documentation.',
        'Hybrid publications are adopting localized edge delivery nodes and cryptographic content credentials, allowing subscribers to independently verify photographic metadata and redaction histories directly within their browser viewports.'
      ]
    }
  ]
};

export const LATEST_ARTICLES: Article[] = [
  {
    id: 'autonomous-research-labs',
    slug: 'autonomous-research-labs-synthetic-agents-diagnostics',
    title: 'Autonomous Research Labs: How Synthetic Agents Power Next-Gen Diagnostics',
    excerpt: 'Deep learning workflows are moving from simulated environments into real-time collaborative laboratories.',
    category: 'Artificial Intelligence',
    categoryColorClass: {
      bg: 'rgba(158, 119, 237, 0.15)',
      text: '#9E77ED',
      border: 'rgba(158, 119, 237, 0.3)'
    },
    author: {
      name: 'Dr. Dian Wahyuni',
      role: 'Head of Computational Pathology',
      initials: 'DW',
      avatarBg: 'rgba(158, 119, 237, 0.15)',
      avatarText: '#9E77ED',
      avatarBorder: 'rgba(158, 119, 237, 0.3)',
      bio: 'Dr. Wahyuni conducts research at the intersection of transformer architectures and automated molecular synthesis.'
    },
    date: '24 May 2026',
    readTime: '4 min read',
    trending: true,
    imageUrl: AI_LAB_IMAGE_URL,
    views: '18.4k',
    claps: 842,
    tags: ['Artificial Intelligence', 'Biotech', 'Diagnostics', 'Automation'],
    sections: [
      {
        heading: 'Autonomous Wet Labs in Clinical Practice',
        paragraphs: [
          'The transition from static algorithmic inference to closed-loop physical experimentation has redefined diagnostic timelines. In specialized clinical facilities across Zurich and Singapore, autonomous robotic pipetting suites receive direct instructions from multimodal reasoning agents.',
          'When anomalous protein folding patterns are identified in clinical biopsy scans, synthetic agents formulate chemical binding hypotheses, schedule wet-lab testing sequences, and synthesize spectroscopic results overnight.'
        ],
        pullQuote: 'Closed-loop autonomous labs transform hypothesis testing from a monthly iteration into an hourly feedback cadence.'
      },
      {
        heading: 'Safety Interlocks and Supervisory Human In-The-Loop',
        paragraphs: [
          'Crucially, clinical governance protocols mandate human pathologist checkpoints prior to any experimental compound deployment or patient treatment recommendation. Pathologists review synthetic diagnostic confidence intervals through augmented reality workspaces that project molecular binding simulations onto glass displays.',
          'The net outcome is a tenfold decrease in rare autoimmune diagnostic turnaround times, delivering tailored therapeutic insights when early intervention is critical.'
        ]
      }
    ]
  },
  {
    id: 'scaling-clean-grids',
    slug: 'scaling-clean-grids-microgrid-innovations-zero-emission',
    title: 'Scaling Clean Grids: Microgrid Innovations Fueling Zero-Emission Energy Hubs',
    excerpt: 'Renewable turbine infrastructure and solar integration hit critical mass across emerging mountain regions.',
    category: 'Sustainability',
    categoryColorClass: {
      bg: 'rgba(16, 185, 129, 0.15)',
      text: '#34D399',
      border: 'rgba(52, 211, 153, 0.3)'
    },
    author: {
      name: 'Reza Pratama',
      role: 'Senior Energy Infrastructure Analyst',
      initials: 'RP',
      avatarBg: 'rgba(6, 78, 59, 0.6)',
      avatarText: '#34D399',
      avatarBorder: 'rgba(52, 211, 153, 0.3)',
      bio: 'Reza covers high-voltage DC transmission, grid storage kinetics, and renewable integration policies.'
    },
    date: '23 May 2026',
    readTime: '6 min read',
    imageUrl: CLEAN_GRID_IMAGE_URL,
    views: '14.2k',
    claps: 615,
    tags: ['Sustainability', 'Clean Tech', 'Microgrids', 'Renewable Energy'],
    sections: [
      {
        heading: 'Decentralized Balancing Across Mountain Valleys',
        paragraphs: [
          'Modern renewable energy infrastructure is breaking free from legacy centralized grid bottlenecks. By pairing high-altitude wind turbine clusters with sodium-ion battery banks and predictive weather modeling, regional cooperatives are achieving autonomous islanding capability.',
          'During severe alpine storms, these smart microgrids automatically partition localized industrial clusters into resilient micro-islands, avoiding widespread cascading outages that historically afflicted rural energy networks.'
        ],
        pullQuote: 'Energy sovereignty is no longer an ecological aspiration; it is an industrial prerequisite for resilient manufacturing.'
      },
      {
        heading: 'Edge Dispatch Algorithms and Peak Mitigation',
        paragraphs: [
          'Sub-second frequency balancing powered by decentralized edge computing nodes dynamically shifts heavy computing and hydrogen electrolysis loads to match solar peak generation windows. This eliminates unnecessary power curtailment and maximizes effective renewable utilization above 94% year-round.'
        ]
      }
    ]
  },
  {
    id: 'scalable-design-tokens',
    slug: 'scalable-design-tokens-bridging-figma-multiplatform-codebases',
    title: 'Scalable Design Tokens: Bridging Figma and Multi-Platform Codebases',
    excerpt: 'A rigorous framework for tokenizing color modes, typography, and density rules in modern UI systems.',
    category: 'Design & UX',
    categoryColorClass: {
      bg: 'rgba(158, 119, 237, 0.15)',
      text: '#9E77ED',
      border: 'rgba(158, 119, 237, 0.3)'
    },
    author: {
      name: 'Sarah Kusuma',
      role: 'Principal Design Technologist',
      initials: 'SK',
      avatarBg: 'rgba(158, 119, 237, 0.15)',
      avatarText: '#9E77ED',
      avatarBorder: 'rgba(158, 119, 237, 0.3)',
      bio: 'Sarah leads design systems architecture and tooling, bridging design token pipelines between Figma and modern native platforms.'
    },
    date: '22 May 2026',
    readTime: '5 min read',
    imageUrl: DESIGN_DESK_IMAGE_URL,
    views: '22.1k',
    claps: 1104,
    tags: ['Design & UX', 'Design Systems', 'Figma', 'Engineering'],
    sections: [
      {
        heading: 'From Visual Variables to Immutable Compiler Tokens',
        paragraphs: [
          'The perennial struggle between visual design intention and production code consistency has historically stemmed from disparate data representations. By treating design tokens as compiled code artifacts subject to versioning, automated linting, and semantic contract validation, product teams are eliminating manual translation discrepancies.',
          'Color modes, typography fluid scales, and spatial density tiers are authored as machine-readable JSON schemas in design repositories, automatically generating typed bindings for React, Swift, Kotlin, and WebGL rendering shaders simultaneously.'
        ],
        pullQuote: 'A design token is not merely a hex code variable; it is a contract of intent across viewport geometry and device context.'
      },
      {
        heading: 'The Zero-Drift Pipeline in Action',
        paragraphs: [
          'When brand designers adjust surface contrast ratios in Figma, webhook listeners validate contrast compliance against WCAG AAA thresholds in automated CI checks. If approved, compiled npm packages and native packages are pushed to engineering repositories with full changelog provenance.'
        ]
      }
    ]
  },
  {
    id: 'smart-city-corridors',
    slug: 'smart-city-corridors-transit-cloud-architecture-dusk',
    title: 'Smart City Corridors: High-Density Transit and Cloud Architecture at Dusk',
    excerpt: 'Metropolitan infrastructure adopts dynamic sensor grids to mitigate traffic congestion and power surges.',
    category: 'Urban Technology',
    categoryColorClass: {
      bg: 'rgba(56, 189, 248, 0.15)',
      text: '#38BDF8',
      border: 'rgba(56, 189, 248, 0.3)'
    },
    author: {
      name: 'Budi Santoso',
      role: 'Urban Systems Architect',
      initials: 'BS',
      avatarBg: 'rgba(12, 74, 110, 0.6)',
      avatarText: '#38BDF8',
      avatarBorder: 'rgba(56, 189, 248, 0.3)',
      bio: 'Budi specializes in municipal sensor telemetry, autonomous transit corridors, and edge computing for megalopolises.'
    },
    date: '21 May 2026',
    readTime: '8 min read',
    imageUrl: HERO_IMAGE_URL,
    views: '16.7k',
    claps: 729,
    tags: ['Urban Technology', 'Smart Cities', 'Transit', 'IoT'],
    sections: [
      {
        heading: 'The Synchronized Metropolitan Pulse',
        paragraphs: [
          'As metropolitan density surges, legacy static traffic scheduling has reached physical limits. In Tokyo and Jakarta, illuminated expressway corridors are integrated with edge millimeter-wave radar sensors that monitor vehicle kinetic density at 60 Hz.',
          'Dynamic variable speed governors and coordinated traffic light cascades synchronize transit flows into synchronized arterial waves, reducing idling fuel emissions by 31% while dramatically smoothing commuter throughput during peak dusk windows.'
        ]
      }
    ]
  },
  {
    id: 'zero-trust-protocol-migration',
    slug: 'zero-trust-protocol-migration-high-traffic-media-platforms',
    title: 'Zero-Trust Protocol Migration for High-Traffic Media Platforms',
    excerpt: 'Preventing distributed attacks while maintaining sub-millisecond edge content delivery networks.',
    category: 'Cybersecurity',
    categoryColorClass: {
      bg: 'rgba(251, 191, 36, 0.15)',
      text: '#FBBF24',
      border: 'rgba(251, 191, 36, 0.3)'
    },
    author: {
      name: 'Maya Putri',
      role: 'Principal Security Architect',
      initials: 'MP',
      avatarBg: 'rgba(120, 53, 15, 0.6)',
      avatarText: '#FBBF24',
      avatarBorder: 'rgba(251, 191, 36, 0.3)',
      bio: 'Maya oversees infrastructure hardening, cryptographic identity protocols, and edge DDoS mitigation for global media organizations.'
    },
    date: '20 May 2026',
    readTime: '3 min read',
    imageUrl: AI_LAB_IMAGE_URL,
    views: '24.9k',
    claps: 953,
    tags: ['Cybersecurity', 'Zero Trust', 'Edge Computing', 'Cloud Security'],
    sections: [
      {
        heading: 'Hardening the Global News Pipeline',
        paragraphs: [
          'High-profile editorial publications represent primary targets for state-sponsored DDoS campaigns and unauthorized content injection attacks. Conventional perimeter defenses have proven inadequate against coordinated distributed edge botnets.',
          'Zero-trust cryptographic mesh architectures inspect and authenticate every internal microservice RPC with mutual TLS 1.3 and ephemeral signed tokens, ensuring that compromised edge nodes cannot pivot into core CMS databases or published story archives.'
        ]
      }
    ]
  },
  {
    id: 'async-editorial-desk',
    slug: 'async-editorial-desk-managing-distributed-global-newsrooms',
    title: 'The Async Editorial Desk: Managing Distributed Global Newsrooms',
    excerpt: 'How modern editorial desks balance fast breaking bulletins with deep investigative journalism remotely.',
    category: 'Culture & Remote',
    categoryColorClass: {
      bg: 'rgba(158, 119, 237, 0.15)',
      text: '#9E77ED',
      border: 'rgba(158, 119, 237, 0.3)'
    },
    author: {
      name: 'Arif Wicaksono',
      role: 'Managing Editor & Remote Strategist',
      initials: 'AW',
      avatarBg: 'rgba(158, 119, 237, 0.15)',
      avatarText: '#9E77ED',
      avatarBorder: 'rgba(158, 119, 237, 0.3)',
      bio: 'Arif has managed distributed bureaus across 14 time zones, designing asynchronous collaboration frameworks for modern journalists.'
    },
    date: '19 May 2026',
    readTime: '7 min read',
    imageUrl: DESIGN_DESK_IMAGE_URL,
    views: '12.8k',
    claps: 588,
    tags: ['Culture & Remote', 'Newsroom Management', 'Future of Work', 'Productivity'],
    sections: [
      {
        heading: 'The 24-Hour Editorial Relay',
        paragraphs: [
          'Managing breaking global coverage without burning out reporters across multiple time zones requires replacing continuous sync meetings with high-context asynchronous handoffs.',
          'Each evening, bureaus hand off structured story dossiers containing unverified leads, interview audio transcripts, and legal checkmarks to the incoming regional bureau. The result is seamless 24/7 reporting without requiring midnight emergency call-ins.'
        ]
      }
    ]
  }
];

export const BREAKING_NEWS_ITEMS = [
  'Global standards body ratifies C2PA 3.0 cryptographic media provenance specification',
  'International Renewable Energy Agency reports 42% microgrid efficiency gains across ASEAN',
  'Neural Labs releases open-weight diagnostic verification framework for clinical pathology',
  'Figma tokens specification updated for multi-tenant adaptive typography systems'
];

export const CATEGORIES_LIST = [
  { id: 'all', name: 'All Categories', count: 7 },
  { id: 'ai', name: 'Artificial Intelligence', count: 3 },
  { id: 'sustainability', name: 'Sustainability', count: 2 },
  { id: 'design', name: 'Design & UX', count: 2 },
  { id: 'urban', name: 'Urban Technology', count: 2 },
  { id: 'cybersecurity', name: 'Cybersecurity', count: 1 },
  { id: 'culture', name: 'Culture & Remote', count: 2 }
];

export const INITIAL_COMMENTS = [
  {
    id: 'c1',
    author: 'Elena Rostova',
    initials: 'ER',
    content: 'The perspective on multi-agent verification meshes is spot on. We implemented a similar factual-consistency validator for our financial desk last quarter and reduced routine reporting errors by over 70%.',
    timestamp: '2 hours ago',
    likes: 24
  },
  {
    id: 'c2',
    author: 'Marcus Vance',
    initials: 'MV',
    content: 'Crucial point about cryptographic provenance. With generative media so pervasive now, cryptographic signing at capture is the only defensible benchmark readers will trust in 2026.',
    timestamp: '5 hours ago',
    likes: 18
  },
  {
    id: 'c3',
    author: 'Devi Chen',
    initials: 'DC',
    content: 'Love the ergonomic reading layout! The 65ch measure and typography make this a joy to read on widescreen monitors without eye strain.',
    timestamp: 'Yesterday',
    likes: 9
  }
];
