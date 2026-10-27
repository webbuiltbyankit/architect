export interface SiteConfig {
  studioName: string;
  tagline: string;
  cityLocation: string;
  panIndiaClaim: string;
  previewMode: boolean;
  statusNotice: string;
  socials: {
    linkedin: string;
  };
  draftPhoneUnverified: string; // Draft config only; not exposed as a live public call link until verified
  provisionalNotice: string;
}

export interface NavigationItem {
  name: string;
  path: string;
  isCTA?: boolean;
}

export interface Service {
  slug: string;
  title: string;
  number: string;
  shortDesc: string;
  fullDesc: string;
  scope: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  featuredImage: string;
  imageAlt: string;
  aspectRatio: string;
}

export interface Sector {
  id: string;
  number: string;
  name: string;
  shortDesc: string;
  detailedScope: string;
  note: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const siteConfig: SiteConfig = {
  studioName: "Arun Saini Architects",
  tagline: "Spaces shaped with intention.",
  cityLocation: "Gurugram, Haryana, India",
  panIndiaClaim: "Pan-India design commissions (Subject to project confirmation)",
  previewMode: true,
  statusNotice: "Private Concept Preview — Provisional Demo Content Only",
  socials: {
    linkedin: "https://www.linkedin.com/company/arun-saini-architects/",
  },
  draftPhoneUnverified: "+91 96712 82159", // Internal draft only per brief instructions
  provisionalNotice: "Project imagery and titles shown are curated design studies for client presentation and review. Factual client details and licenses pending final approval.",
};

export const mainNavItems: NavigationItem[] = [
  { name: "Home", path: "/" },
  { name: "Studio", path: "/studio" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Sectors", path: "/sectors" },
  { name: "Contact", path: "/contact" },
];

export const sectorsData: Sector[] = [
  {
    id: "residential",
    number: "01",
    name: "Residential",
    shortDesc: "Private residences, luxury apartments, and bespoke penthouse environments.",
    detailedScope: "Focus on customized spatial layouts, tactile materiality, integrated lighting, and natural illumination tailored to intimate domestic rituals.",
    note: "All residential images shown are curated visual design studies for concept presentation.",
  },
  {
    id: "commercial",
    number: "02",
    name: "Commercial",
    shortDesc: "Headquarters, boutique corporate workplaces, and design-led executive suites.",
    detailedScope: "Spatial zoning, brand identity through physical architecture, collaborative micro-hubs, and acoustic balancing.",
    note: "Field of practice per firm profile. Specific project references subject to client release.",
  },
  {
    id: "institutional",
    number: "03",
    name: "Institutional",
    shortDesc: "Cultural venues, educational gathering centers, and civic learning facilities.",
    detailedScope: "Enduring architectural permanence, public circulation clarity, volume, and sustainable building lifecycle planning.",
    note: "Firm practice interest. Renderings or documentation available upon direct consultation.",
  },
  {
    id: "healthcare",
    number: "04",
    name: "Healthcare",
    shortDesc: "Wellness retreats, specialized clinical facilities, and therapeutic restorative environments.",
    detailedScope: "Calming visual geometries, hygienic natural surfaces, indirect glare-free daylighting, and spatial efficiency.",
    note: "Subject to specialist medical equipment coordination and statutory consultant review.",
  },
  {
    id: "hospitality",
    number: "05",
    name: "Hospitality",
    shortDesc: "Boutique hotels, destination lounges, and culinary social spaces.",
    detailedScope: "Atmospheric sequencing, dramatic lighting focal points, durable luxury textiles, and memorable spatial journeys.",
    note: "Field of engagement. Illustrative concepts available upon request.",
  },
];

export const generalFAQs: FAQItem[] = [
  {
    question: "What information helps start a design conversation?",
    answer: "An outline of your site or floor plan, the primary functional requirements, estimated project timeframe, and any reference materials or inspirations you have gathered.",
  },
  {
    question: "Can I share my own reference images and architectural sketches?",
    answer: "Yes, visual references and moodboards are welcomed during initial discovery to help align stylistic expectations and material preferences.",
  },
  {
    question: "Which design services are currently featured in this preview?",
    answer: "This demonstration features Architecture Concept Planning, Interior Design, Space Planning & Circulation, and Initial Design Consultation.",
  },
  {
    question: "How will my demo inquiry be handled in this preview?",
    answer: "Because this is a private development preview, your inquiry is validated and stored locally on your device in your browser's localStorage. No automated emails or booking confirmations are sent to the studio.",
  },
  {
    question: "Are the projects shown verified built works?",
    answer: "The four case studies are curated editorial design studies representing the studio's aesthetic standard and spatial language for concept demonstration purposes.",
  },
];
