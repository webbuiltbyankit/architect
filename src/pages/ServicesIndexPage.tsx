import React from 'react';
import { Check } from 'lucide-react';
import { Container, Section } from '@/components/layout/Container';
import { Button } from '@/components/common/Button';
import { AspectFrame } from '@/components/common/ImageComponents';
import { servicesData } from '@/data/copy';
import { useSeo } from '@/utils/seo';

export const ServicesIndexPage: React.FC = () => {
  useSeo({
    title: 'Design Services & Architectural Practice',
    description: 'Explore Arun Saini Architects services: Architecture, Bespoke Interior Design, Space Planning, and Design Consultations.',
    image: '/images/projects/01-dining-open-plan.jpg',
  });

  return (
    <div className="w-full pt-28 pb-16">
      {/* Header */}
      <section className="py-12 md:py-16 bg-warm-ivory border-b border-border-custom/40">
        <Container>
          <div className="max-w-3xl">
            <span className="text-eyebrow text-muted-brass block mb-3">Practice Disciplines</span>
            <h1 className="text-editorial-h1 text-ink font-light tracking-tight mb-4">
              Comprehensive Architectural & Interior Services
            </h1>
            <p className="font-ui text-base sm:text-lg text-slate-custom leading-relaxed">
              From foundational volumetric planning to handcrafted interior millwork, our studio delivers tailored architectural design solutions crafted for permanence and sensory calm.
            </p>
          </div>
        </Container>
      </section>

      {/* Alternating Services Features */}
      <div className="space-y-16 py-16">
        {servicesData.map((svc, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <Section key={svc.slug} spacing="normal" bg={isEven ? 'stone' : 'paper'} className="border-y border-border-custom/30">
              <Container>
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? 'lg:grid-flow-dense' : ''
                }`}>
                  {/* Visual Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:col-start-7' : ''}`}>
                    <AspectFrame aspectRatio="4:3" className="rounded overflow-hidden shadow-sm">
                      <img
                        src={svc.featuredImage}
                        alt={svc.imageAlt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </AspectFrame>
                    <div className="mt-2 text-right font-ui text-xs text-slate-custom">
                      Illustrative Discipline Visual
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:col-start-1' : ''}`}>
                    <span className="font-mono text-xs text-muted-brass font-bold tracking-widest block mb-2">
                      Discipline {svc.number}
                    </span>
                    <h2 className="text-editorial-h2 text-ink font-light mb-4">
                      {svc.title}
                    </h2>
                    <p className="font-ui text-base text-slate-custom leading-relaxed mb-6">
                      {svc.fullDesc}
                    </p>

                    {/* Scope Checklist */}
                    <div className="mb-8">
                      <span className="font-ui text-xs uppercase tracking-widest text-slate-custom block mb-3 font-semibold">
                        Core Capabilities
                      </span>
                      <ul className="space-y-2 font-ui text-sm text-ink/80">
                        {svc.scope.map((item, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-muted-brass flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <Button to={`/services/${svc.slug}`} variant="primary" withArrow>
                        View {svc.title} Details
                      </Button>
                      <Button to={`/contact?service=${svc.slug}`} variant="outline">
                        Inquire About This Service
                      </Button>
                    </div>
                  </div>
                </div>
              </Container>
            </Section>
          );
        })}
      </div>

      {/* Bottom Conversion Section */}
      <Section spacing="generous" bg="ivory">
        <Container className="text-center max-w-2xl mx-auto">
          <span className="text-eyebrow text-muted-brass block mb-3">Custom Commissions</span>
          <h2 className="text-editorial-h2 text-ink font-light mb-4">
            Need a tailored scope or combined service?
          </h2>
          <p className="font-ui text-base text-slate-custom leading-relaxed mb-8">
            Many projects seamlessly combine architectural conceptualization with full turnkey interior detailing. Let us outline a collaborative approach for your specific space.
          </p>
          <Button to="/contact" variant="brass" size="lg" withArrow>
            Request a Consultation
          </Button>
        </Container>
      </Section>
    </div>
  );
};
