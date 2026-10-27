import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Maximize2 } from 'lucide-react';
import { Container, Section } from '@/components/layout/Container';
import { Button } from '@/components/common/Button';
import { AspectFrame } from '@/components/common/ImageComponents';
import { Lightbox } from '@/components/common/Lightbox';
import { projectsData, ProjectImage } from '@/data/projects';
import { useSeo } from '@/utils/seo';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[projectIndex];

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useSeo({
    title: project ? `${project.title} — Design Study` : 'Project Not Found',
    description: project ? project.shortDescription : 'Requested design study not found.',
    image: project ? project.primaryImage.src : undefined,
  });

  if (!project) {
    return (
      <div className="w-full pt-36 pb-24 min-h-[60vh] flex items-center">
        <Container className="text-center max-w-xl mx-auto">
          <span className="text-eyebrow text-muted-brass block mb-2">Notice</span>
          <h1 className="text-editorial-h1 text-ink mb-4 font-light">Design Study Not Found</h1>
          <p className="font-ui text-slate-custom mb-8">
            The architectural study you are looking for does not exist in our preview archive.
          </p>
          <Button to="/projects" variant="primary" withArrow>
            Return to All Projects
          </Button>
        </Container>
      </div>
    );
  }

  // Next study cycle (0 -> 1 -> 2 -> 3 -> 0)
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  // Combine primary and secondary images for full gallery
  const allImages: ProjectImage[] = [project.primaryImage, ...project.secondaryImages];

  const openLightboxAt = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full pt-28 pb-16">
      {/* 1. Contextual Breadcrumbs */}
      <section className="py-4 bg-warm-ivory border-b border-border-custom/40">
        <Container>
          <nav aria-label="Breadcrumb" className="font-ui text-xs text-slate-custom flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link to="/" className="hover:text-ink">Home</Link>
              <span>/</span>
              <Link to="/projects" className="hover:text-ink">Projects</Link>
              <span>/</span>
              <span className="text-ink font-medium">{project.title}</span>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1 hover:text-muted-brass"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all studies</span>
            </Link>
          </nav>
        </Container>
      </section>

      {/* 2. Project Title & Metadata Header */}
      <section className="py-12 bg-warm-ivory">
        <Container>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-muted-brass font-bold">
                Study {project.number}
              </span>
              <span>•</span>
              <span className="font-ui text-xs uppercase tracking-widest text-slate-custom">
                {project.category} / {project.filterCategory}
              </span>
              <span>•</span>
              <span className="text-[11px] font-ui bg-soft-stone px-2.5 py-0.5 rounded text-slate-custom">
                {project.status}
              </span>
            </div>

            <h1 className="text-editorial-h1 text-ink font-light tracking-tight mb-6">
              {project.title}
            </h1>

            <p className="font-ui text-base sm:text-lg text-slate-custom leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
        </Container>
      </section>

      {/* 3. Full-Bleed / Large Hero Photograph */}
      <section className="py-4 bg-warm-ivory">
        <Container>
          <div className="relative group cursor-pointer" onClick={() => openLightboxAt(0)}>
            <AspectFrame aspectRatio="16:9" className="rounded overflow-hidden shadow-sm">
              <img
                src={project.primaryImage.src}
                alt={project.primaryImage.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 bg-ink/80 text-warm-ivory backdrop-blur-sm rounded text-xs font-ui tracking-wider flex items-center gap-2">
                  <Maximize2 className="w-4 h-4" /> Expand Visual
                </span>
              </div>
            </AspectFrame>
            <div className="mt-3 flex items-center justify-between text-xs text-slate-custom font-ui">
              <span>{project.primaryImage.caption}</span>
              <span className="italic">Click to expand</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Editorial Narrative Column & Material Palette */}
      <Section spacing="generous" bg="paper">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Overview Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-eyebrow text-muted-brass block mb-2">Spatial Architecture</span>
              <h2 className="text-editorial-h2 text-ink font-light">Observable Design Choices</h2>
              <div className="w-12 h-0.5 bg-muted-brass mb-6" />
              <p className="font-ui text-base sm:text-lg text-slate-custom leading-relaxed">
                {project.fullOverview}
              </p>

              {/* Design Observations List */}
              <div className="pt-6">
                <h3 className="font-display text-2xl text-ink font-normal mb-4">Key Attributes</h3>
                <ul className="space-y-3 font-ui text-sm text-slate-custom">
                  {project.observations.map((obs, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-brass mt-2 flex-shrink-0" />
                      <span>{obs}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Side Information: Palette & Disclaimers */}
            <div className="lg:col-span-5 space-y-8 lg:pl-6">
              <div className="bg-warm-ivory p-6 rounded border border-border-custom/50">
                <span className="font-ui text-xs uppercase tracking-widest text-muted-brass block mb-4 font-semibold">
                  Material Palette
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {project.palette.map((p, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2 bg-paper rounded border border-border-custom/40">
                      <span
                        className="w-5 h-5 rounded-full border border-black/10 flex-shrink-0"
                        style={{ backgroundColor: p.hex }}
                      />
                      <span className="font-ui text-xs text-ink">{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-soft-stone/40 rounded border border-border-custom/50 text-xs text-slate-custom leading-relaxed">
                <span className="font-semibold text-ink block mb-1">Attribution Disclosure:</span>
                This collection is an illustrative design study for preview review. Square footage, client identities, exact site coordinates, and construction dates are reserved pending verified client disclosure.
              </div>

              <div className="pt-2">
                <Button to={`/contact?service=interior-design&project=${project.slug}`} variant="brass" withArrow>
                  Inquire Regarding This Style
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Secondary Image Gallery Spread */}
      {project.secondaryImages.length > 0 && (
        <Section spacing="normal" bg="stone" className="border-t border-border-custom/30">
          <Container>
            <div className="mb-10">
              <span className="text-eyebrow text-muted-brass block mb-2">Alternative Angles</span>
              <h2 className="text-editorial-h2 text-ink font-light">Further Perspectives</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.secondaryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="group relative cursor-pointer"
                  onClick={() => openLightboxAt(idx + 1)}
                >
                  <AspectFrame aspectRatio="4:3" className="rounded overflow-hidden shadow-sm">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 bg-ink/80 text-warm-ivory backdrop-blur-sm rounded text-xs font-ui tracking-wider flex items-center gap-2">
                        <Maximize2 className="w-4 h-4" /> Expand Perspective
                      </span>
                    </div>
                  </AspectFrame>
                  <div className="mt-2 font-ui text-xs text-slate-custom">
                    {img.caption}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* 6. Continuous Next Study Discovery Block */}
      <Section spacing="generous" bg="ivory" className="border-t border-border-custom/40">
        <Container>
          <div className="p-8 sm:p-12 bg-paper rounded border border-border-custom flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded overflow-hidden flex-shrink-0 bg-soft-stone">
                <img
                  src={nextProject.primaryImage.src}
                  alt={nextProject.primaryImage.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-eyebrow text-muted-brass block mb-1">
                  Next Study • {nextProject.number}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-ink">
                  {nextProject.title}
                </h3>
                <p className="font-ui text-xs sm:text-sm text-slate-custom mt-1 line-clamp-1">
                  {nextProject.shortDescription}
                </p>
              </div>
            </div>

            <Button to={`/projects/${nextProject.slug}`} variant="primary" withArrow>
              View Next Study
            </Button>
          </div>
        </Container>
      </Section>

      {/* 7. Image Lightbox Modal */}
      <Lightbox
        images={allImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
};
