import React from 'react';
import { Container, Section } from '@/components/layout/Container';
import { Button } from '@/components/common/Button';
import { AspectFrame } from '@/components/common/ImageComponents';
import { sectorsData } from '@/data/site';
import { useSeo } from '@/utils/seo';

export const SectorsPage: React.FC = () => {
  useSeo({
    title: 'Sectors & Typologies of Engagement',
    description: 'Explore the architectural and interior sectors addressed by Arun Saini Architects: Residential, Commercial, Institutional, Healthcare, and Hospitality.',
    image: '/images/projects/01-dining-open-plan.jpg',
  });

  return (
    <div className="w-full pt-28 pb-16">
      {/* 1. Masthead */}
      <section className="py-12 md:py-16 bg-warm-ivory border-b border-border-custom/40">
        <Container>
          <div className="max-w-3xl">
            <span className="text-eyebrow text-muted-brass block mb-3">Typologies of Practice</span>
            <h1 className="text-editorial-h1 text-ink font-light tracking-tight mb-4">
              Fields of Architectural & Interior Practice
            </h1>
            <p className="font-ui text-base sm:text-lg text-slate-custom leading-relaxed">
              Arun Saini Architects undertakes commissions across private domestic environments and specialized public typologies. We adapt our spatial principles of proportion, natural daylight, and enduring materiality to each sector's functional demands.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Honest Sector Profiles */}
      <Section spacing="generous" bg="paper">
        <Container>
          <div className="space-y-8">
            {sectorsData.map((sec) => (
              <div
                key={sec.id}
                className="p-8 sm:p-12 bg-warm-ivory rounded border border-border-custom hover:border-muted-brass/60 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-8"
              >
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-muted-brass font-bold">
                      Sector {sec.number}
                    </span>
                    <span>•</span>
                    <span className="font-ui text-xs uppercase tracking-widest text-slate-custom">
                      Typology Profile
                    </span>
                  </div>

                  <h2 className="text-editorial-h2 text-ink font-light mb-3">
                    {sec.name}
                  </h2>

                  <p className="font-ui text-base text-ink/80 font-medium mb-3">
                    {sec.shortDesc}
                  </p>

                  <p className="font-ui text-sm text-slate-custom leading-relaxed mb-4">
                    {sec.detailedScope}
                  </p>

                  <div className="text-xs text-slate-custom/80 italic font-ui">
                    Note: {sec.note}
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <Button
                    to={`/contact?sector=${sec.id}&service=architecture`}
                    variant="brass"
                    withArrow
                  >
                    Enquire About {sec.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Selected Residential Interior Imagery (Explicitly honest attribution) */}
      <Section spacing="generous" bg="stone" className="border-t border-border-custom/30">
        <Container>
          <div className="max-w-2xl mb-12">
            <span className="text-eyebrow text-muted-brass block mb-2">Photographic Evidence</span>
            <h2 className="text-editorial-h2 text-ink font-light">Selected Interior Imagery</h2>
            <p className="font-ui text-sm text-slate-custom mt-3">
              The currently available visual archive is focused on luxury residential interior spaces. We do not misrepresent these private interiors as healthcare, hotel, or commercial exteriors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <AspectFrame aspectRatio="4:3" className="rounded overflow-hidden">
                <img
                  src="/images/projects/01-dining-open-plan.jpg"
                  alt="Residential dining pavilion reference"
                  className="w-full h-full object-cover"
                />
              </AspectFrame>
              <div className="font-ui text-xs text-slate-custom">Residential Dining Study</div>
            </div>

            <div className="space-y-2">
              <AspectFrame aspectRatio="4:3" className="rounded overflow-hidden">
                <img
                  src="/images/projects/02-navy-bedroom-primary.jpg"
                  alt="Residential master suite reference"
                  className="w-full h-full object-cover"
                />
              </AspectFrame>
              <div className="font-ui text-xs text-slate-custom">Residential Bedroom Suite Study</div>
            </div>

            <div className="space-y-2">
              <AspectFrame aspectRatio="4:3" className="rounded overflow-hidden">
                <img
                  src="/images/projects/05-mauve-lounge.jpg"
                  alt="Residential formal lounge reference"
                  className="w-full h-full object-cover"
                />
              </AspectFrame>
              <div className="font-ui text-xs text-slate-custom">Residential Reception Lounge Study</div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
