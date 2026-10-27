import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container, Section } from '@/components/layout/Container';
import { Button, TextLink } from '@/components/common/Button';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { editorialCopy, servicesData } from '@/data/copy';
import { projectsData } from '@/data/projects';
import { sectorsData } from '@/data/site';
import { useSeo } from '@/utils/seo';

const HERO_SLIDES = [
  {
    image: '/images/projects/01-dining-open-plan.jpg',
    kicker: 'Architecture / Interiors / Places',
    title: 'Spaces shaped with intention.',
    subtitle: 'Contemporary residential pavilions and interior architecture defined by natural illumination and honest materiality.',
    alt: 'Curated open-plan luxury dining room with teal chairs and statement lighting',
    index: '01 / 04',
  },
  {
    image: '/images/projects/02-navy-bedroom-primary.jpg',
    kicker: 'Tactile Sanctuary',
    title: 'Proportion, light, and quiet permanence.',
    subtitle: 'Private residential sanctuaries featuring floor-to-ceiling upholstered velvet wall panels and bespoke gold branch lighting.',
    alt: 'Master bedroom with tall navy velvet headboard and sculptural chandelier',
    index: '02 / 04',
  },
  {
    image: '/images/projects/03-blush-bedroom-primary.jpg',
    kicker: 'Sensory Balance',
    title: 'Restraint in form. Richness in texture.',
    subtitle: 'Subtle rose and warm grey interior compositions balancing fluted architectural wall panels with halo backlighting.',
    alt: 'Modern blush bedroom with backlit circular wall relief and tailored furniture',
    index: '03 / 04',
  },
];

export const HomePage: React.FC = () => {
  useSeo({
    title: 'Architectural & Interior Design Portfolio',
    description: 'Arun Saini Architects — Private digital concept preview showcasing residential architecture, tailored interiors, and spatial planning.',
    image: '/images/projects/01-dining-open-plan.jpg',
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredServiceImage, setHoveredServiceImage] = useState<string>(servicesData[0].featuredImage);

  // Gentle auto-advance only if user is actively on tab and hasn't hovered
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8500);

    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="w-full overflow-hidden">
      {/* 1. Cinematic Full-Height Hero Section */}
      <section className="relative w-full h-[100svh] min-h-[640px] flex items-end justify-center bg-ink text-warm-ivory select-none">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 overflow-hidden">
          {HERO_SLIDES.map((s, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03] pointer-events-none'
              }`}
            >
              <img
                src={s.image}
                alt={s.alt}
                className="w-full h-full object-cover object-center filter brightness-[0.82]"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-black/30" />
            </div>
          ))}
        </div>

        {/* Hero Overlay Text */}
        <Container className="relative z-10 pb-16 sm:pb-20 md:pb-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-muted-brass inline-block" />
              <span className="font-ui text-xs tracking-[0.24em] uppercase text-muted-brass font-medium">
                {slide.kicker}
              </span>
            </div>

            <h1 className="text-display-hero font-light text-warm-ivory mb-6 max-w-3xl drop-shadow-sm">
              {slide.title}
            </h1>

            <p className="font-ui text-sm sm:text-base text-warm-ivory/80 max-w-xl leading-relaxed mb-8">
              {slide.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button to="/projects" variant="brass" withArrow>
                Explore the portfolio
              </Button>
              <Button to="/contact" variant="outline" className="border-warm-ivory/40 text-warm-ivory hover:bg-white/10 hover:border-warm-ivory">
                Discuss a project
              </Button>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-ui text-xs text-warm-ivory/70">
            <div className="flex items-center gap-4">
              <span className="font-mono text-muted-brass tracking-wider text-sm">
                {slide.index}
              </span>
              <div className="w-24 sm:w-36 h-0.5 bg-white/20 overflow-hidden relative rounded-full">
                <div
                  className="absolute left-0 top-0 bottom-0 bg-muted-brass transition-all duration-500 rounded-full"
                  style={{ width: `${((currentSlide + 1) / HERO_SLIDES.length) * 100}%` }}
                />
              </div>
              <span className="hidden sm:inline text-warm-ivory/50">Gurugram Studio Preview</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                aria-label="Previous Slide"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-warm-ivory transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                aria-label="Next Slide"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-warm-ivory transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Introductory Studio Statement */}
      <Section spacing="generous" bg="ivory">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="text-eyebrow block mb-3">{editorialCopy.studioIntro.eyebrow}</span>
              <h2 className="text-editorial-h2 text-ink font-light leading-tight">
                {editorialCopy.studioIntro.headline}
              </h2>
              <div className="w-12 h-0.5 bg-muted-brass mt-6" />
            </div>

            <div className="lg:col-span-8 space-y-6 font-ui text-base sm:text-lg text-slate-custom leading-relaxed">
              <p>{editorialCopy.studioIntro.leadParagraph}</p>
              <p>{editorialCopy.studioIntro.supportParagraph}</p>
              <div className="pt-4">
                <TextLink to="/studio">{editorialCopy.studioIntro.cta}</TextLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Asymmetrical Featured-Work Gallery (2+1 Layout) */}
      <Section spacing="generous" bg="paper">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div>
              <span className="text-eyebrow block mb-2">Curated Design Studies</span>
              <h2 className="text-editorial-h2 text-ink font-light">Featured Work</h2>
            </div>
            <TextLink to="/projects">All studies ({projectsData.length})</TextLink>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {featuredProjects.slice(0, 2).map((project) => (
              <div key={project.slug} className="lg:col-span-6">
                <ProjectCard project={project} aspectRatio="4:3" />
              </div>
            ))}

            {featuredProjects[2] && (
              <div className="lg:col-span-12 mt-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-soft-stone/30 p-6 sm:p-10 rounded">
                  <div className="lg:col-span-7">
                    <ProjectCard project={featuredProjects[2]} aspectRatio="16:9" />
                  </div>
                  <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
                    <span className="text-eyebrow text-muted-brass">Master Suite Study</span>
                    <h3 className="font-display text-3xl sm:text-4xl text-ink font-normal">
                      {featuredProjects[2].title}
                    </h3>
                    <p className="font-ui text-sm sm:text-base text-slate-custom leading-relaxed">
                      {featuredProjects[2].fullOverview}
                    </p>
                    <div className="pt-2">
                      <Button to={`/projects/${featuredProjects[2].slug}`} variant="primary" withArrow>
                        Explore Case Study
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* 4. Immersive Split-Image Feature Moment (Mauve Lounge) */}
      <Section spacing="none" bg="stone" className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
          <div className="lg:col-span-7 relative h-[380px] lg:h-auto overflow-hidden">
            <img
              src="/images/projects/05-mauve-lounge.jpg"
              alt="Plum velvet reception lounge with coffered ceiling and patterned rug"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/15 pointer-events-none" />
          </div>

          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-paper">
            <span className="text-eyebrow text-muted-brass block mb-4">
              {editorialCopy.splitFeature.eyebrow}
            </span>
            <blockquote className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink font-light leading-tight mb-6">
              "{editorialCopy.splitFeature.pullQuote}"
            </blockquote>
            <p className="font-ui text-sm sm:text-base text-slate-custom leading-relaxed mb-8">
              {editorialCopy.splitFeature.narrative}
            </p>
            <div>
              <TextLink to="/studio#approach">{editorialCopy.splitFeature.cta}</TextLink>
            </div>
            <div className="mt-8 pt-6 border-t border-border-custom/50">
              <span className="font-ui text-xs text-slate-custom/80 block">
                Brand Concept Perspective • Reception Lounge Spatial Study
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Services Preview with Dynamic Hover Thumbnail */}
      <Section spacing="generous" bg="ivory">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div>
              <span className="text-eyebrow block mb-2">Practice Disciplines</span>
              <h2 className="text-editorial-h2 text-ink font-light">Services</h2>
            </div>
            <TextLink to="/services">Detailed Services Overview</TextLink>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 divide-y divide-border-custom">
              {servicesData.map((svc) => (
                <Link
                  key={svc.slug}
                  to={`/services/${svc.slug}`}
                  onMouseEnter={() => setHoveredServiceImage(svc.featuredImage)}
                  className="group py-6 sm:py-8 flex items-baseline justify-between gap-4 block focus-visible:outline-2 focus-visible:outline-muted-brass cursor-pointer"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-xs sm:text-sm text-muted-brass font-medium">
                      {svc.number}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl text-ink group-hover:text-muted-brass transition-colors">
                        {svc.title}
                      </h3>
                      <p className="font-ui text-xs sm:text-sm text-slate-custom mt-1 max-w-md line-clamp-1">
                        {svc.shortDesc}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-custom group-hover:text-muted-brass group-hover:translate-x-2 transition-all flex-shrink-0" />
                </Link>
              ))}
            </div>

            <div className="hidden lg:block lg:col-span-5">
              <div className="relative aspect-[4/3] rounded overflow-hidden shadow-lg border border-border-custom bg-soft-stone">
                <img
                  src={hoveredServiceImage}
                  alt="Service preview visual"
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute bottom-3 left-3 bg-ink/80 backdrop-blur-sm px-3 py-1 rounded text-[11px] text-warm-ivory font-ui tracking-wider uppercase">
                  Service Discipline Asset
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. Three-Part Design Philosophy Strip */}
      <Section spacing="normal" bg="stone" className="border-y border-border-custom">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-eyebrow text-muted-brass block mb-2">Design Methodology</span>
            <h2 className="text-editorial-h2 text-ink font-light">The Illustrative Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {editorialCopy.philosophyStrip.map((item) => (
              <div key={item.number} className="flex flex-col pt-4 border-t border-ink/20">
                <span className="font-mono text-xs text-muted-brass tracking-widest uppercase mb-2">
                  Phase {item.number}
                </span>
                <h3 className="font-display text-2xl text-ink font-medium mb-3">
                  {item.title}
                </h3>
                <p className="font-ui text-sm text-slate-custom leading-relaxed">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <TextLink to="/studio#approach">Explore full studio methodology</TextLink>
          </div>
        </Container>
      </Section>

      {/* 7. Sector Discovery Strip */}
      <Section spacing="generous" bg="ivory">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-eyebrow block mb-2">Practice Reach</span>
              <h2 className="text-editorial-h2 text-ink font-light">Sectors of Engagement</h2>
            </div>
            <TextLink to="/sectors">Review All Sector Profiles</TextLink>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {sectorsData.map((sec) => (
              <div
                key={sec.id}
                className="bg-paper p-6 rounded border border-border-custom/50 flex flex-col justify-between hover:border-muted-brass/50 transition-colors"
              >
                <div>
                  <span className="font-mono text-xs text-muted-brass font-medium block mb-2">
                    {sec.number}
                  </span>
                  <h3 className="font-display text-xl text-ink mb-2">{sec.name}</h3>
                  <p className="font-ui text-xs text-slate-custom leading-relaxed">
                    {sec.shortDesc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border-custom/40">
                  <Link
                    to={`/contact?service=architecture&sector=${sec.id}`}
                    className="font-ui text-xs text-ink hover:text-muted-brass inline-flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3 text-muted-brass" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 8. Conversion Closing CTA */}
      <Section spacing="generous" bg="ink">
        <Container className="text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="font-ui text-xs tracking-[0.24em] uppercase text-muted-brass font-medium">
              Start an Exploratory Dialogue
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-warm-ivory font-light">
              {editorialCopy.closingCta.headline}
            </h2>
            <p className="font-ui text-sm sm:text-base text-warm-ivory/70 leading-relaxed max-w-lg mx-auto">
              {editorialCopy.closingCta.subheadline}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/contact" variant="brass" size="lg" withArrow>
                {editorialCopy.closingCta.ctaButton}
              </Button>
            </div>
            <p className="font-ui text-xs text-slate-custom pt-4">
              {editorialCopy.closingCta.footnote}
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
};
