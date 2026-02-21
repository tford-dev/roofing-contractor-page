import type {
  FAQ,
  GalleryItem,
  Location,
  ProcessStep,
  Review,
  Service,
  TeamMember
} from '@/lib/types';

export const SERVICES: Service[] = [
  {
    slug: 'roof-replacement',
    name: 'Roof Replacement',
    shortDescription: 'Full-system reroofs engineered for long life and clean curb appeal.',
    heroDescription:
      'Premium materials, precise installation, and a schedule your family can actually live with.',
    image:
      '/images/Roof-replacement.png',
    icon: 'house',
    bulletPoints: [
      'Architectural shingles and premium metal options',
      'Ventilation upgrades to protect attic and energy efficiency',
      'Magnet-swept cleanup with final walkthrough and photo proof'
    ],
    whyItMatters:
      'A full replacement done right protects structure, lowers surprise repairs, and boosts property value immediately.'
  },
  {
    slug: 'roof-repair',
    name: 'Roof Repair',
    shortDescription: 'Leak response and targeted repairs that stop damage fast.',
    heroDescription:
      'From flashing failures to missing shingles, we diagnose the root issue and repair without guesswork.',
    image:
      '/images/roof-repair.png',
    icon: 'wrench',
    bulletPoints: [
      'Rapid leak tracing and moisture assessment',
      'Shingle, flashing, and decking spot repairs',
      'Detailed scope so you understand repair vs. replacement'
    ],
    whyItMatters:
      'Small roof issues compound quickly. Fast repairs keep interior damage and insurance headaches from snowballing.'
  },
  {
    slug: 'storm-damage-insurance-claims',
    name: 'Storm Damage & Insurance Claims Help',
    shortDescription: 'Documentation-first storm support that helps claims move faster.',
    heroDescription:
      'We inspect, photograph, and provide the line-item evidence adjusters need to evaluate your claim.',
    image:
      '/images/claims-help.png',
    icon: 'shield',
    bulletPoints: [
      'Post-storm emergency tarping and mitigation guidance',
      'Photo reports and scope notes for adjuster meetings',
      'Repair or replacement execution after claim approval'
    ],
    whyItMatters:
      'Clear documentation reduces claim friction and helps property owners avoid paying out of pocket for covered damage.'
  },
  {
    slug: 'roof-inspections',
    name: 'Roof Inspections',
    shortDescription: 'Thorough roof assessments with actionable recommendations.',
    heroDescription:
      'Ideal for annual maintenance, real estate due diligence, and post-storm condition checks.',
    image:
      '/images/roof-inspections.png',
    icon: 'clipboard',
    bulletPoints: [
      'Shingle, flashing, vent, and drainage condition review',
      'High-resolution photos and a clear risk summary',
      'Priority rankings so you can budget with confidence'
    ],
    whyItMatters:
      'Inspections catch hidden risks early and help owners plan spending before problems become emergencies.'
  },
  {
    slug: 'gutter-installation',
    name: 'Gutter Installation',
    shortDescription: 'Seamless gutter systems that control water and protect foundations.',
    heroDescription:
      'Custom-fit gutters and guards designed for heavy Hampton Roads rain and storm runoff.',
    image:
      '/images/gutter-installation.png',
    icon: 'drain',
    bulletPoints: [
      'Seamless aluminum systems measured onsite',
      'Downspout optimization for clean water flow',
      'Optional guards for lower maintenance'
    ],
    whyItMatters:
      'Poor drainage can damage fascia, siding, landscaping, and foundations. Smart gutters prevent avoidable repairs.'
  },
  {
    slug: 'siding',
    name: 'Siding',
    shortDescription: 'Durable siding upgrades that improve efficiency and curb appeal.',
    heroDescription:
      'Vinyl and composite siding systems installed for weather resistance and low-maintenance ownership.',
    image:
      '/images/house-siding.png',
    icon: 'panels',
    bulletPoints: [
      'Removal and replacement with weather barrier checks',
      'Trim, fascia, and color-matched finish options',
      'Clean installation standards and daily site reset'
    ],
    whyItMatters:
      'Quality siding protects framing from moisture while instantly improving appearance and long-term property value.'
  },
  {
    slug: 'skylights',
    name: 'Skylights',
    shortDescription: 'Leak-safe skylight upgrades that brighten interiors naturally.',
    heroDescription:
      'Modern skylight replacements and installs with proper curb flashing and weatherproof detailing.',
    image:
      '/images/skylights.png',
    icon: 'sun',
    bulletPoints: [
      'New skylight installation or replacement options',
      'Integrated flashing and seal systems for leak prevention',
      'Interior protection plans during install'
    ],
    whyItMatters:
      'Done poorly, skylights leak. Done correctly, they add comfort, resale value, and standout design.'
  }
];

export const LOCATIONS: Location[] = [
  {
    slug: 'williamsburg',
    city: 'Williamsburg',
    state: 'VA',
    tagline: 'Premium roofing crews trusted by homeowners across Williamsburg.',
    intro:
      'From colonial neighborhoods to newer developments, we deliver clean, warranty-backed roofing projects in Williamsburg.'
  },
  {
    slug: 'newport-beach',
    city: 'Newport Beach',
    state: 'VA',
    tagline: 'Reliable roof repair and replacement support in Newport Beach.',
    intro:
      'Property owners in Newport Beach call TF Roofing for fast estimates, clear scopes, and professional jobsite standards.'
  },
  {
    slug: 'hampton',
    city: 'Hampton',
    state: 'VA',
    tagline: 'Storm-ready roofing built for coastal conditions in Hampton.',
    intro:
      'We help Hampton owners protect their homes with quality materials, detailed inspections, and quick storm response.'
  },
  {
    slug: 'yorktown',
    city: 'Yorktown',
    state: 'VA',
    tagline: 'Craftsmanship-focused exterior upgrades for Yorktown neighborhoods.',
    intro:
      'Yorktown clients choose our team for careful communication, quality installation, and no-cut-corners execution.'
  },
  {
    slug: 'toano',
    city: 'Toano',
    state: 'VA',
    tagline: 'Straightforward roofing service and clean project delivery in Toano.',
    intro:
      'In Toano, we focus on practical solutions, thorough cleanup, and dependable timelines for every roofing scope.'
  },
  {
    slug: 'new-kent',
    city: 'New Kent',
    state: 'VA',
    tagline: 'High-performance roofing and gutters for New Kent homes.',
    intro:
      'New Kent homeowners rely on TF Roofing for preventive maintenance, fast repairs, and premium replacements.'
  }
];

export const VALUE_PROPS = [
  'Fast 24-hour estimate scheduling',
  'Workmanship warranty on qualified installs',
  'Daily cleanup with magnetic nail sweeps',
  'Premium materials rated for Virginia weather',
  'Financing options to protect cash flow'
];

export const FAQS: FAQ[] = [
  {
    question: 'Do you offer financing?',
    answer:
      'Yes. We offer financing options for qualified homeowners so you can move forward with repairs or replacement without delaying critical work.'
  },
  {
    question: 'How long does a roof replacement take?',
    answer:
      'Most asphalt shingle replacements are completed in 1 to 2 days depending on roof size, weather, and deck condition.'
  },
  {
    question: 'Do you help with insurance claims?',
    answer:
      'Absolutely. We provide inspection photos, scope documentation, and can meet with your adjuster to streamline the claims process.'
  },
  {
    question: 'What warranties do you provide?',
    answer:
      'We offer manufacturer-backed material warranties plus workmanship warranty coverage on qualified projects for added peace of mind.'
  },
  {
    question: 'How do I know if I need repair vs replacement?',
    answer:
      'We inspect first. If isolated damage can be repaired reliably, we recommend repair. If the roof system is near end-of-life or compromised broadly, replacement is the better long-term value.'
  }
];

export const REVIEWS: Review[] = [
  {
    name: 'Alicia M.',
    location: 'Williamsburg',
    rating: 5,
    service: 'Roof Replacement',
    body:
      'Crew showed up on time, protected landscaping, and finished in one day. Communication was excellent and the cleanup was spotless.'
  },
  {
    name: 'Darnell R.',
    location: 'Hampton',
    rating: 5,
    service: 'Storm Damage Repair',
    body:
      'After a major storm, they documented everything for insurance and got us dried-in quickly. Professional from start to finish.'
  },
  {
    name: 'Jenna T.',
    location: 'Yorktown',
    rating: 4,
    service: 'Gutter Installation',
    body:
      'The new seamless gutters look great and finally fixed pooling around the foundation. Project manager stayed in touch the whole way.'
  },
  {
    name: 'Marcus L.',
    location: 'Toano',
    rating: 5,
    service: 'Roof Repair',
    body:
      'We had a leak around a vent pipe. TF Roofing diagnosed it fast and repaired it correctly the first time.'
  },
  {
    name: 'Kelsey P.',
    location: 'New Kent',
    rating: 5,
    service: 'Roof Inspection',
    body:
      'Detailed inspection report with photos made it easy to prioritize what actually mattered. No pressure, just clear advice.'
  },
  {
    name: 'Robert S.',
    location: 'Newport Beach',
    rating: 4,
    service: 'Siding Upgrade',
    body:
      'The siding transformation was huge. Clean work and respectful crew. We noticed an immediate curb-appeal improvement.'
  },
  {
    name: 'Karen F.',
    location: 'Williamsburg',
    rating: 5,
    service: 'RoofCare 300',
    body:
      'Quarterly checkups are worth it. They spotted a small issue early and handled it before it became expensive.'
  },
  {
    name: 'Noah B.',
    location: 'Hampton',
    rating: 5,
    service: 'Skylight Replacement',
    body:
      'Old skylight leaked for years. The replacement is clean, bright, and dry after several heavy storms.'
  }
];

export const TESTIMONIAL_QUOTES = [
  {
    quote: 'They handled everything like pros and left the property cleaner than they found it.',
    author: 'Homeowner, Williamsburg'
  },
  {
    quote: 'The insurance documentation alone saved us weeks of back-and-forth.',
    author: 'Property Owner, Hampton'
  },
  {
    quote: 'RoofCare 300 paid for itself the first year by catching a flashing issue early.',
    author: 'Landlord, New Kent'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    category: 'Replacement',
    title: 'Architectural Shingle Upgrade',
    alt: 'New architectural shingle roof installation on a two-story home',
    image:
      '/images/architectural.png'
  },
  {
    id: 'g2',
    category: 'Repair',
    title: 'Leak Repair and Flashing',
    alt: 'Roof technician repairing flashing around a chimney',
    image:
      '/images/flashing.png'
  },
  {
    id: 'g3',
    category: 'Gutters',
    title: 'Seamless Gutter Install',
    alt: 'New seamless gutters installed on a residential roof edge',
    image:
      '/images/seamless.png'
  },
  {
    id: 'g4',
    category: 'Siding',
    title: 'Exterior Siding Refresh',
    alt: 'Freshly installed siding on a modern home exterior',
    image:
      '/images/siding-refresh.png'
  },
  {
    id: 'g5',
    category: 'Replacement',
    title: 'Premium Roof System',
    alt: 'Large residential roof replacement project in progress',
    image:
      '/images/premium-roof-system.png'
  },
  {
    id: 'g6',
    category: 'Repair',
    title: 'Storm Damage Repair',
    alt: 'Crew repairing storm-damaged shingles on a roof',
    image:
      '/images/claims-help.png'
  },
  {
    id: 'g7',
    category: 'Gutters',
    title: 'Downspout Optimization',
    alt: 'Technician adjusting gutter downspout system',
    image:
      '/images/downspout.png'
  },
  {
    id: 'g8',
    category: 'Siding',
    title: 'Trim and Siding Detail',
    alt: 'Close-up detail of premium siding and trim installation',
    image:
      '/images/trim-and-siding-detail.png'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Terrance Ford',
    role: 'Founder & Project Lead',
    bio: 'Oversees scopes, quality control, and client communication from inspection through final walkthrough.',
    image:
      "/images/selfie.png"
  },
  {
    name: 'Marcus Hill',
    role: 'Senior Roofing Foreman',
    bio: 'Leads installation crews with a focus on craftsmanship, safety, and efficient project delivery.',
    image:
      "/images/generic-team-member-img.png"
  },
  {
    name: 'Ariana Cole',
    role: 'Client Success Manager',
    bio: 'Coordinates scheduling, updates, financing support, and a smooth homeowner experience.',
    image:
      "/images/generic-team-member-img.png"
  },
  {
    name: 'Derrick Vaughn',
    role: 'Inspection Specialist',
    bio: 'Handles detailed inspections, storm documentation, and maintenance planning reports.',
    image:
      "/images/generic-team-member-img.png"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: 'Inspect',
    summary: 'We assess roofing, drainage, ventilation, and exterior conditions with photos.'
  },
  {
    title: 'Quote',
    summary: 'You get a clear scope, timeline, and pricing options with no pressure.'
  },
  {
    title: 'Schedule',
    summary: 'We lock materials, confirm logistics, and set a production date that works for you.'
  },
  {
    title: 'Build',
    summary: 'Certified crews execute the project with quality checks at each critical stage.'
  },
  {
    title: 'Cleanup',
    summary: 'Daily debris management and magnet sweep keep your property clean and safe.'
  },
  {
    title: 'Final Walkthrough',
    summary: 'You review the completed work, documentation, and warranty details with our team.'
  }
];

export const ROOFCARE_INCLUSIONS = [
  'Quarterly roof and exterior inspections',
  'Minor repairs included up to $500 per quarter',
  'Gutter cleaning and drainage checks',
  'Priority scheduling after severe weather',
  'Storm checkups with photo reports',
  'Annual maintenance summary for your records'
];

export const SERVICE_DROPDOWN_OPTIONS = [
  'Roof Replacement',
  'Roof Repair',
  'Storm Damage / Insurance Help',
  'Roof Inspection',
  'Gutter Installation',
  'Siding',
  'Skylights',
  'RoofCare 300 Maintenance Plan'
];
