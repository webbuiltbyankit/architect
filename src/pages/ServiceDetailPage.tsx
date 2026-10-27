import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { Container, Section } from '@/components/layout/Container';
import { Button, TextLink } from '@/components/common/Button';
import { AspectFrame } from '@/components/common/ImageComponents';
import { FaqAccordion } from '@/components/common/FaqAccordion';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { servicesData } from '@/data/copy';
import { projectsData } from '@/data/projects';
import { useSeo } from '@/utils/seo';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  useSeo({
    title: service ? `${service.title} Service` : 'Service Not Found',
    description: service ? service.shortDesc : 'Requested architectural service not found.',
    image: service ? service.featuredImage : undefined,
  });

  if (!service) {
    return (
      <div className="w-full pt-36 pb-24 min-h-[60vh] flex items-center">
        <Container className="text-center max-w-xl mx-auto">
          <span className="text-eyebrow text-muted-brass block mb-2">Notice</span>
          <h1 className="text-editorial-h1 text-ink mb-4 font-light">Service Not Found</h1>
          <p className="font-ui text-slate-custom mb-8">
            The service discipline you requested could not be located in our practice overview.
          </p>
          <Button to="/services" variant="primary" withArrow>
            Return to All Services
          </Button>
        </Container>
      </div>
    );
  }

  const relatedServices = servicesData.filter((s) => s.slug !== service.slug);

  return (
    <div className="w-full pt-28 pb-16">
      {/* 1. Breadcrumbs & Editorial Hero */}
      <section className="py-10 bg-warm-ivory border-b border-border-custom/40">
        <Container>
          <nav aria-label="Breadcrumb" className="font-ui text-xs text-slate-custom flex items-center gap-2 mb-6">
            <Link to="/" className="hover:text-ink">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-ink">Services</Link>
            <span>/</span>
            <span className="text-ink font-medium">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs text-muted-brass tracking-widest uppercase block mb-2">
                Discipline {service.number}
              </span>
              <h1 className="text-editorial-h1 text-ink font-light tracking-tight mb-4">
                {service.title}
              </h1>
              <p className="font-ui text-base sm:text-lg text-slate-custom max-w-2xl leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Button to={`/contact?service=${service.slug}`} variant="brass" withArrow>
                Discuss {service.title}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Hero Featured Visual */}
      <section className="py-8 bg-warm-ivory">
        <Container>
          <AspectFrame aspectRatio="16:9" className="rounded overflow-hidden shadow-sm">
            <img
              src={service.featuredImage}
              alt={service.imageAlt}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </AspectFrame>
          <div className="mt-2 text-right font-ui text-xs text-slate-custom">
            {service.imageAlt}
          </div>
        </Container>
      </section>

      {/* 3. Detailed Scope & Workflow Steps */}
      <Section spacing="generous" bg="paper">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="text-eyebrow text-muted-brass block mb-3">Service Scope</span>
              <h2 className="text-editorial-h2 text-ink font-light mb-6">What We Deliver</h2>
              <div className="w-10 h-0.5 bg-muted-brass mb-6" />
              <ul className="space-y-4 font-ui text-sm sm:text-base text-ink/80">
                {service.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-muted-brass flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-5 bg-soft-stone/40 rounded border border-border-custom/50 text-xs text-slate-custom leading-relaxed">
                <strong>Coordination Standard:</strong> Deliverables focus on conceptual design, architectural layout, material specification, and visual direction. Structural engineering and statutory drawings are coordinated through licensed specialist partners.
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-eyebrow text-muted-brass block mb-3">Methodology</span>
              <h2 className="text-editorial-h2 text-ink font-light mb-6">Execution Sequence</h2>
              <div className="space-y-6">
                {service.processSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-warm-ivory rounded border border-border-custom/60 flex items-start gap-6"
                  >
                    <span className="font-mono text-sm text-muted-brass font-bold pt-0.5">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-display text-xl text-ink font-normal mb-1">
                        {step.title}
                      </h3>
                      <p className="font-ui text-xs sm:text-sm text-slate-custom leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Service-Specific Case Studies */}
      <Section spacing="generous" bg="stone" className="border-t border-border-custom/30">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-eyebrow text-muted-brass block mb-2">Practice Evidence</span>
              <h2 className="text-editorial-h2 text-ink font-light">Relevant Design Studies</h2>
            </div>
            <TextLink to="/projects">All Portfolio Studies</TextLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projectsData.slice(0, 2).map((proj) => (
              <ProjectCard key={proj.slug} project={proj} aspectRatio="4:3" />
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Discipline FAQs */}
      <Section spacing="normal" bg="paper">
        <Container className="max-w-4xl">
          <div className="text-center mb-10">
            <span className="text-eyebrow text-muted-brass block mb-2">Frequently Asked</span>
            <h2 className="text-editorial-h2 text-ink font-light">Inquiries regarding {service.title}</h2>
          </div>
          <FaqAccordion items={service.faqs} />
        </Container>
      </Section>

      {/* 6. Related Services Cross-Navigation */}
      <Section spacing="normal" bg="ivory" className="border-t border-border-custom/40">
        <Container>
          <span className="text-eyebrow text-muted-brass block mb-6 text-center">Other Disciplines</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                to={`/services/${rel.slug}`}
                className="group p-6 bg-paper rounded border border-border-custom hover:border-muted-brass transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-muted-brass block mb-2">{rel.number}</span>
                  <h3 className="font-display text-2xl text-ink group-hover:text-muted-brass transition-colors mb-2">
                    {rel.title}
                  </h3>
                  <p className="font-ui text-xs text-slate-custom line-clamp-2">
                    {rel.shortDesc}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-border-custom/40 flex items-center justify-between text-xs font-ui text-ink group-hover:text-muted-brass">
                  <span>Explore Discipline</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-brass" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};
