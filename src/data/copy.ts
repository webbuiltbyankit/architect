import { Service } from './site';
import { getAssetUrl } from '@/utils/assets';

export const editorialCopy = {
  hero: {
    eyebrow: "Architecture & Interior Design",
    title: "Spaces shaped with intention.",
    subtitle: "A digital preview of architectural and interior design concepts. Crafted with disciplined restraint, tactile materiality, and spatial clarity.",
    primaryCta: "Explore the portfolio",
    secondaryCta: "Discuss a project",
  },
  studioIntro: {
    eyebrow: "The Studio",
    headline: "Good design begins with how life unfolds.",
    leadParagraph: "Arun Saini Architects approaches built environments through a deep appreciation of proportion, natural illumination, and calm spatial flow. Based in Gurugram, the studio develops customized spatial concepts across residential and commercial typologies.",
    supportParagraph: "Every scheme is composed as an enduring dialogue between light, stone, timber, and carefully balanced sightlines. We believe luxury is not found in excessive ornamentation, but in the quiet precision of how spaces are experienced.",
    cta: "Discover the studio",
  },
  splitFeature: {
    eyebrow: "Spatial Narrative",
    pullQuote: "Every detail has a purpose.",
    narrative: "True luxury lives in the harmony between architectural volume and intimate human scale. From coffered ceilings that softly hold indirect light to bespoke millwork that quietly recedes, spaces should calm the mind while enriching everyday living.",
    cta: "Learn about our approach",
  },
  philosophyStrip: [
    {
      number: "01",
      title: "Observe",
      summary: "Understanding the subtle interplay between site orientation, natural solar paths, and the client's private domestic rituals.",
    },
    {
      number: "02",
      title: "Imagine",
      summary: "Translating functional requirements into balanced architectural volumes, intuitive circulation routes, and sensory materiality.",
    },
    {
      number: "03",
      title: "Refine",
      summary: "Disciplined detailing of joinery, integrated architectural lighting, and bespoke textile curation for effortless permanence.",
    },
  ],
  closingCta: {
    headline: "Have a space in mind?",
    subheadline: "Whether conceiving a private residence or an interior transformation, we welcome an exploratory dialogue.",
    ctaButton: "Start a conversation",
    footnote: "Private concept preview — Inquiries are saved locally for demonstration purposes.",
  },
  studioPage: {
    title: "A thoughtful approach to space.",
    subtitle: "Architecture and interiors shaped with measured proportions and enduring materiality.",
    anchors: [
      { label: "Philosophy", href: "#philosophy" },
      { label: "Approach", href: "#approach" },
      { label: "Values", href: "#values" },
    ],
    philosophyTitle: "Architecture as quiet sanctuary.",
    philosophyText1: "Our practice is grounded in the belief that the environments we inhabit profoundly influence our state of being. We seek an architecture of quiet dignity — spaces that feel open yet protective, refined yet deeply grounded.",
    philosophyText2: "Working from Gurugram, we engage with clients who value craftsmanship, honest materials, and spatial restraint. Each project is tailored as an individual response to lifestyle and site context, free from ephemeral stylistic trends.",
    approachStages: [
      {
        step: "01",
        title: "Listen & Discover",
        description: "We begin with comprehensive conversations to uncover functional needs, spatial aspirations, material preferences, and daily rhythms.",
      },
      {
        step: "02",
        title: "Concept & Direction",
        description: "Exploration of spatial configurations, volumetric massing, light studies, and material palettes to define a clear cohesive design narrative.",
      },
      {
        step: "03",
        title: "Detail & Develop",
        description: "Refining precise millwork transitions, bespoke hardware schedules, layered lighting strategies, and surface textures down to the millimeter.",
      },
      {
        step: "04",
        title: "Review & Refine",
        description: "Synthesizing contractor coordination, sample reviews, and iterative adjustments to ensure seamless realization on site.",
      },
    ],
    values: [
      {
        title: "Context",
        description: "Honoring the geographic, cultural, and environmental cues of each site to create buildings that feel naturally rooted.",
      },
      {
        title: "Craft",
        description: "Collaborating with master artisans and skilled fabricators who respect natural stone, turned timber, and patinated metals.",
      },
      {
        title: "Clarity",
        description: "Eliminating superfluous visual noise to arrive at intuitive spatial layouts that prioritize natural ease and visual calmness.",
      },
    ],
  },
};

export const servicesData: Service[] = [
  {
    slug: "architecture",
    number: "01",
    title: "Architecture",
    shortDesc: "Comprehensive conceptualization, volumetric massing, and architectural planning for residential and commercial commissions.",
    fullDesc: "Our architectural practice centers on creating buildings of balanced scale, responsive orientation, and clear spatial hierarchy. We study how light moves through every room across the day, curating vistas and transitions that elevate the everyday experience.",
    scope: [
      "Site analysis, orientation & massing studies",
      "Concept design & schematic spatial planning",
      "Envelope & facade material coordination",
      "Volume, sightline & daylight optimization",
      "Integration of interior and landscape connections"
    ],
    processSteps: [
      { title: "Brief Definition", desc: "Understanding site constraints, program requirements, and long-term client vision." },
      { title: "Massing & Layout", desc: "Iterating through volumetric models and circulation flow diagrams." },
      { title: "Material Integration", desc: "Selecting robust facade textures, fenestration schemes, and structural expressions." },
      { title: "Design Package Coordination", desc: "Developing coordinated conceptual documentation for client and consultant alignment." }
    ],
    faqs: [
      { question: "Do you design both private homes and commercial buildings?", answer: "Yes, our studio addresses private luxury villas, multi-unit residential spaces, and design-led boutique corporate spaces." },
      { question: "How is structural engineering handled?", answer: "Structural, MEP, and statutory services are coordinated in collaboration with qualified external licensed engineering consultants." }
    ],
    featuredImage: getAssetUrl("/images/projects/01-dining-open-plan.jpg"),
    imageAlt: "Architectural interior dining space showing open spatial layout and integrated structural elements",
    aspectRatio: "16:9"
  },
  {
    slug: "interior-design",
    number: "02",
    title: "Interior Design",
    shortDesc: "Bespoke interior architecture, custom millwork, sensory materiality, and curated furniture palettes.",
    fullDesc: "We approach interiors as an intimate tactile extension of architecture. By selecting natural stones, warm timbers, custom brass accents, and tailored upholstery, we craft spaces that feel deeply personal, calm, and effortlessly luxurious.",
    scope: [
      "Spatial identity & bespoke interior architecture",
      "Custom cabinetry, wardrobe & millwork detailing",
      "Finishes, veneers, stone slabs & palette curation",
      "Architectural and decorative lighting plans",
      "Furniture, rug, art & textile specifications"
    ],
    processSteps: [
      { title: "Mood & Material Strategy", desc: "Establishing an evocative tactile palette with physical samples and finish boards." },
      { title: "Detailed Joinery Drawing", desc: "Dimensioning custom millwork, headboards, vanities, and feature wall treatments." },
      { title: "Lighting & Fixture Sourcing", desc: "Curating bespoke chandeliers, concealed LED coves, and artisanal decorative pieces." },
      { title: "Installation Styling", desc: "Directing the placement of furniture, textiles, and art for a cohesive finished ambiance." }
    ],
    faqs: [
      { question: "Can the studio design custom furniture pieces?", answer: "Yes, our interior projects frequently feature bespoke dining tables, headboard walls, and upholstered seating tailored specifically to room dimensions." },
      { question: "How are sample selections approved?", answer: "We review stone slabs, veneer swatches, metal finishes, and textile strike-offs in natural daylight before finalizing orders." }
    ],
    featuredImage: getAssetUrl("/images/projects/02-navy-bedroom-primary.jpg"),
    imageAlt: "Custom interior bedroom suite with bespoke navy velvet headboard and gold branch chandelier",
    aspectRatio: "16:9"
  },
  {
    slug: "space-planning",
    number: "03",
    title: "Space Planning",
    shortDesc: "Strategic zoning, circulation flow analysis, and furniture layouts to unlock the full potential of existing floor plans.",
    fullDesc: "Exceptional design begins with functional logic. Our space planning service resolves awkward configurations, eliminates redundant corridors, and establishes intuitive spatial hierarchies that maximize usable area, daylight penetration, and visual harmony.",
    scope: [
      "Existing floor plate audit & circulation diagnostics",
      "Functional zoning and privacy demarcation",
      "Ergonomic clearances and traffic-flow optimization",
      "Storage maximization & integrated utility layouts",
      "Multi-option schematic floor plan alternatives"
    ],
    processSteps: [
      { title: "Spatial Audit", desc: "Reviewing existing blueprints, structural columns, and utility locations." },
      { title: "Flow Schematics", desc: "Drafting multiple layout alternatives with distinct circulation paths." },
      { title: "Option Evaluation", desc: "Comparing layout pros/cons based on client lifestyle and furniture dimensions." },
      { title: "Final Master Plan", desc: "Delivering a clear, dimensioned master floor plan ready for implementation." }
    ],
    faqs: [
      { question: "Can space planning be done for existing bare-shell apartments?", answer: "Yes, space planning is especially impactful when starting with an open shell or pre-construction builder layout." },
      { question: "Does this include structural wall removals?", answer: "We identify non-load-bearing partitions for potential reconfiguration, subject to on-site structural audit." }
    ],
    featuredImage: getAssetUrl("/images/projects/05-mauve-lounge.jpg"),
    imageAlt: "Formal reception lounge showing zoned seating arrangement and coffered ceiling geometry",
    aspectRatio: "16:9"
  },
  {
    slug: "design-consultation",
    number: "04",
    title: "Design Consultation",
    shortDesc: "Focused advisory sessions for clients seeking professional guidance on spatial layout, style direction, or renovation scope.",
    fullDesc: "An exploratory, high-impact consultation designed to bring clarity to your project before committing to full-scale design. We examine your goals, review reference imagery, discuss feasibility, and outline a clear roadmap for execution.",
    scope: [
      "Review of client aspirations, budget considerations & timelines",
      "Aesthetic & stylistic direction alignment",
      "Initial review of architectural drawings or real estate brochures",
      "Material, finish & contractor procurement guidance",
      "Actionable recommendations summary"
    ],
    processSteps: [
      { title: "Discovery Questionnaire", desc: "Gathering project details, location, and key questions prior to meeting." },
      { title: "In-Depth Discussion", desc: "An intensive session reviewing plans, opportunities, and design challenges." },
      { title: "Design Strategy Brief", desc: "Summarizing recommendations, recommended finishes, and next phase steps." }
    ],
    faqs: [
      { question: "Is this consultation conducted in person or virtually?", answer: "Consultations can be held at our Gurugram studio or conducted via high-definition video conference." },
      { question: "Does booking a consultation obligate me to a full contract?", answer: "No, consultations are standalone advisory engagements with no long-term commitment required." }
    ],
    featuredImage: getAssetUrl("/images/projects/03-blush-bedroom-primary.jpg"),
    imageAlt: "Refined blush bedroom detail illustrating customized interior design consultation outcomes",
    aspectRatio: "16:9"
  }
];
