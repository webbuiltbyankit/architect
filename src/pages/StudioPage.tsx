import React from 'react';
import { Container, Section } from '@/components/layout/Container';
import { Button } from '@/components/common/Button';
import { AspectFrame } from '@/components/common/ImageComponents';
import { editorialCopy } from '@/data/copy';
import { useSeo } from '@/utils/seo';
import { getAssetUrl } from '@/utils/assets';

export const StudioPage: React.FC = () => {
  useSeo({
    title: 'The Studio & Design Philosophy',
    description: 'Learn about Arun Saini Architects — A Gurugram-based architectural and interior practice focused on proportion, materiality, and enduring spatial calm.',
    image: getAssetUrl('/images/projects/01-dining-open-plan.jpg'),
  });

  const { studioPage } = editorialCopy;

  return (
    <div className="w-full pt-28 pb-16">
      {/* 1. Editorial Masthead & Navigation Anchors */}
      <section className="py-12 md:py-16 bg-warm-ivory border-b border-border-custom/40">
        <Container>
          <div className="max-w-4xl">
            <span className="text-eyebrow text-muted-brass block mb-3">About the Practice</span>
            <h1 className="text-editorial-h1 text-ink font-light tracking-tight mb-6">
              {studioPage.title}
            </h1>
            <p className="font-ui text-base sm:text-lg text-slate-custom leading-relaxed max-w-2xl mb-8">
              {studioPage.subtitle}
            </p>

            {/* In-page Anchor Links */}
            <div className="flex flex-wrap items-center gap-6 pt-2 font-ui text-xs uppercase tracking-widest text-slate-custom">
              <span className="text-muted-brass font-medium">Jump to:</span>
              {studioPage.anchors.map((anchor) => (
                <a
                  key={anchor.href}
                  href={anchor.href}
                  className="hover:text-ink hover:underline underline-offset-4 py-1"
                >
                  {anchor.label}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Prominent Visual Masthead Asset */}
      <section className="py-8 bg-warm-ivory">
        <Container>
          <AspectFrame aspectRatio="16:9" className="rounded overflow-hidden shadow-sm">
            <img
              src={getAssetUrl('/images/projects/01-dining-open-plan.jpg')}
              alt="Arun Saini Architects Studio spatial reference dining pavilion"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </AspectFrame>
          <div className="mt-3 flex items-center justify-between text-xs text-slate-custom font-ui">
            <span>Primary Spatial Reference — Open Plan Dining Pavilion</span>
            <span className="italic">Gurugram Practice Context (Provisional Preview)</span>
          </div>
        </Container>
      </section>

      {/* 3. Studio Philosophy Story */}
      <Section id="philosophy" spacing="generous" bg="paper">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-eyebrow text-muted-brass block mb-3">Core Belief</span>
              <h2 className="text-editorial-h2 text-ink font-light leading-tight mb-6">
                {studioPage.philosophyTitle}
              </h2>
              <div className="w-12 h-0.5 bg-muted-brass mb-6" />
              <div className="space-y-4 font-ui text-sm sm:text-base text-slate-custom leading-relaxed">
                <p>{studioPage.philosophyText1}</p>
                <p>{studioPage.philosophyText2}</p>
              </div>

              <div className="mt-6 p-4 bg-soft-stone/40 rounded border border-border-custom/50 text-xs text-slate-custom">
                <strong>Internal Note:</strong> Client background text, team profiles, and certifications will be published upon verified client sign-off.
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <AspectFrame aspectRatio="4:5" className="rounded overflow-hidden shadow-sm">
                  <img
                    src={getAssetUrl('/images/projects/02-navy-bedroom-primary.jpg')}
                    alt="Navy bedroom tactile sanctuary detail"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </AspectFrame>
                <AspectFrame aspectRatio="4:5" className="rounded overflow-hidden shadow-sm sm:mt-10">
                  <img
                    src={getAssetUrl('/images/projects/03-blush-bedroom-primary.jpg')}
                    alt="Blush bedroom spatial balance detail"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </AspectFrame>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Illustrative Design Process (#approach) */}
      <Section id="approach" spacing="generous" bg="ivory" className="border-t border-border-custom/40">
        <Container>
          <div className="max-w-2xl mb-16">
            <span className="text-eyebrow text-muted-brass block mb-3">Workflow Transparency</span>
            <h2 className="text-editorial-h2 text-ink font-light">Illustrative Design Process</h2>
            <p className="font-ui text-sm text-slate-custom mt-3">
              An outline of our collaborative sequence — from discovery dialogue to finished detailing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studioPage.approachStages.map((stage) => (
              <div
                key={stage.step}
                className="bg-paper p-8 rounded border border-border-custom/60 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-muted-brass font-bold tracking-widest block mb-4">
                    Stage {stage.step}
                  </span>
                  <h3 className="font-display text-2xl text-ink font-normal mb-3">
                    {stage.title}
                  </h3>
                  <p className="font-ui text-xs sm:text-sm text-slate-custom leading-relaxed">
                    {stage.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-border-custom/40">
                  <span className="text-[11px] font-ui text-muted-brass uppercase tracking-widest">
                    Methodology Step
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Design Values (#values) */}
      <Section id="values" spacing="generous" bg="stone">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-eyebrow text-muted-brass block mb-2">Practice Principles</span>
            <h2 className="text-editorial-h2 text-ink font-light">Context, Craft & Clarity</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studioPage.values.map((val) => (
              <div key={val.title} className="bg-paper p-8 rounded border border-border-custom/50 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl text-ink mb-3">{val.title}</h3>
                  <p className="font-ui text-sm text-slate-custom leading-relaxed">
                    {val.description}
                  </p>
                </div>
                <div className="w-8 h-0.5 bg-muted-brass mt-6" />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button to="/projects" variant="primary" withArrow>
              Explore Architectural Studies
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
};
