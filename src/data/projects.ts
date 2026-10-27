export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
  aspectRatio?: '16:9' | '4:3' | '3:2' | '4:5' | '1:1';
  isHero?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  number: string;
  category: string;
  filterCategory: 'Dining & Social' | 'Bedrooms' | 'Living';
  status: 'Design study (Provisional)';
  shortDescription: string;
  fullOverview: string;
  observations: string[];
  palette: { name: string; hex: string }[];
  primaryImage: ProjectImage;
  secondaryImages: ProjectImage[];
}

export const projectsData: Project[] = [
  {
    slug: "the-entertaining-suite",
    number: "01",
    title: "The Entertaining Suite",
    category: "Interiors",
    filterCategory: "Dining & Social",
    status: "Design study (Provisional)",
    shortDescription: "An expansive dining and social pavilion balancing rich timber craft, sculptural lighting, and pale honed stone surfaces.",
    fullOverview: "A study in fluid social living centered around an eight-seat timber dining ensemble. The layout connects the main entertaining volume with an open background kitchen and conversation lounge, articulated through custom vertical brass screens and rhythmic geometric chandeliers.",
    observations: [
      "Teal upholstered dining seating anchored by warm timber pedestal table framing",
      "Perforated muted-brass vertical divider paneling providing acoustic and visual layering",
      "Honed continuous pale stone flooring reflecting diffuse natural ambient illumination",
      "Sculptural ring chandelier composition defining the central gathering axis"
    ],
    palette: [
      { name: "Teal Accent", hex: "#1D5D62" },
      { name: "Pale Honed Stone", hex: "#E9E5DD" },
      { name: "Natural Timber", hex: "#8A6546" },
      { name: "Muted Brass", hex: "#9B815D" }
    ],
    primaryImage: {
      src: "/images/projects/01-dining-open-plan.jpg",
      alt: "Open-plan luxury dining room with teal chairs, timber table, and modern pendant chandelier",
      caption: "Primary dining pavilion with integrated background kitchen and bronze partition screens",
      aspectRatio: "4:3",
      isHero: true
    },
    secondaryImages: [
      {
        src: "/images/projects/06-dining-lounge-secondary.jpg",
        alt: "Secondary perspective of dining space facing full-height drapery and timber entrance doors",
        caption: "Secondary visual study showing boundary drapery, dark wood framing, and layered ambient lighting",
        aspectRatio: "4:3"
      }
    ]
  },
  {
    slug: "indigo-retreat",
    number: "02",
    title: "Indigo Retreat",
    category: "Interiors",
    filterCategory: "Bedrooms",
    status: "Design study (Provisional)",
    shortDescription: "A serene master suite study defined by a floor-to-ceiling segmented navy headboard, mirrored details, and bespoke brass pendants.",
    fullOverview: "An exploration of tactile intimacy and quiet sanctuary. Deep indigo acoustic headboard panels ascend towards the ceiling, counterbalanced by soft warm-white bedding, a plush blue ottoman bench, and smoked mirror perimeter inserts that amplify natural daylight.",
    observations: [
      "Floor-to-ceiling vertically segmented navy velvet headboard acting as primary acoustic mass",
      "Suspended organic brass branch chandelier providing warm downward glow over linen bedding",
      "Integrated full-height wardrobe cabinetry with warm interior backlighting",
      "Deep blue upholstered lounge bench echoing the headboard textile palette"
    ],
    palette: [
      { name: "Deep Navy", hex: "#1A2B4C" },
      { name: "Parchment White", hex: "#F7F5F0" },
      { name: "Smoked Bronze", hex: "#4A453F" },
      { name: "Cast Brass", hex: "#9B815D" }
    ],
    primaryImage: {
      src: "/images/projects/02-navy-bedroom-primary.jpg",
      alt: "Master bedroom suite with tall segmented navy headboard, brass chandelier, and wardrobe storage",
      caption: "Sanctuary bedroom arrangement featuring full-height velvet wall panels and sculptural gold lighting",
      aspectRatio: "4:3",
      isHero: true
    },
    secondaryImages: [
      {
        src: "/images/projects/04-navy-bedroom-seating.jpg",
        alt: "Alternative view of navy master bedroom with pair of upholstered accent armchairs",
        caption: "Complementary angle highlighting twin indigo armchairs and integrated timber millwork",
        aspectRatio: "4:3"
      }
    ]
  },
  {
    slug: "blush-residence",
    number: "03",
    title: "Blush Residence",
    category: "Interiors",
    filterCategory: "Bedrooms",
    status: "Design study (Provisional)",
    shortDescription: "Soft rose and warm grey suite with backlit circular reliefs, fluted vertical panels, and crystal branch chandelier.",
    fullOverview: "A delicate, contemporary aesthetic pairing soft rose velvet seating and upholstery with architectural fluting and indirect backlighting. The centerpiece is a halo-lit circular wall relief that introduces sculpted relief against neutral grey millwork.",
    observations: [
      "Circular backlit wall halo framing sculptural relief art above the headboard",
      "Fine vertical fluted acoustic timber slats along perimeter wall surfaces",
      "Curved velvet accent seating in muted dusky rose with contrasting gold plinths",
      "Multi-tier crystal branch chandelier dispersing prismatic soft light"
    ],
    palette: [
      { name: "Dusty Rose", hex: "#A87C82" },
      { name: "Muted Greige", hex: "#CDC6BC" },
      { name: "Warm Off-White", hex: "#FFFEFC" },
      { name: "Polished Champagne", hex: "#C7B299" }
    ],
    primaryImage: {
      src: "/images/projects/03-blush-bedroom-primary.jpg",
      alt: "Luxury bedroom in soft rose and greige tones featuring circular backlit wall feature",
      caption: "Bedroom composition with halo-lit wall relief and custom velvet lounge furniture",
      aspectRatio: "4:3",
      isHero: true
    },
    secondaryImages: [
      {
        src: "/images/projects/07-blush-bedroom-wardrobe.jpg",
        alt: "Frontal view of blush bedroom showing wide storage wardrobes, circular art, and seating bench",
        caption: "Frontal perspective displaying balanced wardrobe millwork and bespoke bedroom seating",
        aspectRatio: "4:3"
      }
    ]
  },
  {
    slug: "living-atelier",
    number: "04",
    title: "Living Atelier",
    category: "Interiors",
    filterCategory: "Living",
    status: "Design study (Provisional)",
    shortDescription: "A grand reception salon anchored by deep mauve sofas, coffered tray ceilings, and layered architectural lighting.",
    fullOverview: "A formal salon study focusing on spatial scale and coffered architectural ceiling design. Plum and mauve upholstery grounds the central conversation cluster over a geometric patterned rug, while indirect cove lighting articulates the volume.",
    observations: [
      "Recessed tray ceiling with warm concealed LED cove lighting and central crystal fixture",
      "Plum velvet modular sofas arranged in an intimate double-facing reception format",
      "Geometric dark-and-cream border rug defining the central conversation envelope",
      "Solid architectural door architraves in rich dark walnut"
    ],
    palette: [
      { name: "Deep Plum", hex: "#5C3A4B" },
      { name: "Warm Taupe", hex: "#A89F91" },
      { name: "Dark Walnut", hex: "#382923" },
      { name: "Cream Stone", hex: "#F2EFE9" }
    ],
    primaryImage: {
      src: "/images/projects/05-mauve-lounge.jpg",
      alt: "Spacious luxury living room with plum sofas, coffered tray ceiling, and modern center table",
      caption: "Formal reception lounge showing architectural coffered ceiling, plum seating, and bespoke rug",
      aspectRatio: "4:3",
      isHero: true
    },
    secondaryImages: []
  }
];

export const portfolioFilters = ["All", "Dining & Social", "Bedrooms", "Living"] as const;
export type PortfolioFilterType = (typeof portfolioFilters)[number];
