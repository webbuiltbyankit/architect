import React from 'react';
import { Container, Section } from '@/components/layout/Container';
import { Button, TextLink } from '@/components/common/Button';
import { useSeo } from '@/utils/seo';

export const StyleGuidePage: React.FC = () => {
  useSeo({
    title: 'Design System & Style Guide',
    description: 'Visual tokens, color palette, and typographic scale sampler for Arun Saini Architects.',
  });

  const swatches = [
    { name: 'Ink', hex: '#191919', role: 'Primary typography & dark hero' },
    { name: 'Warm Ivory', hex: '#F7F5F0', role: 'Default canvas background' },
    { name: 'Paper', hex: '#FFFEFC', role: 'Card & modal surfaces' },
    { name: 'Soft Stone', hex: '#E9E5DD', role: 'Subtle section contrast' },
    { name: 'Muted Brass', hex: '#9B815D', role: 'Restrained accent & progress' },
    { name: 'Slate', hex: '#73716E', role: 'Secondary metadata & labels' },
  ];

  return (
    <div className="w-full pt-28 pb-16">
      <section className="py-12 bg-warm-ivory border-b border-border-custom/40">
        <Container>
          <span className="text-eyebrow text-muted-brass block mb-2">Internal Verification</span>
          <h1 className="text-editorial-h1 text-ink font-light">Quiet Architectural Luxury — Style Guide</h1>
          <p className="font-ui text-sm text-slate-custom mt-2">
            Design tokens, typography pairing, buttons, and color swatches for client review.
          </p>
        </Container>
      </section>

      {/* Colors */}
      <Section spacing="normal" bg="paper">
        <Container>
          <h2 className="text-editorial-h2 text-ink mb-8 font-light">Color Tokens</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {swatches.map((s) => (
              <div key={s.name} className="flex flex-col space-y-2">
                <div
                  className="w-full h-24 rounded border border-border-custom shadow-sm"
                  style={{ backgroundColor: s.hex }}
                />
                <span className="font-ui text-xs font-semibold text-ink">{s.name}</span>
                <span className="font-mono text-xs text-muted-brass">{s.hex}</span>
                <span className="font-ui text-[11px] text-slate-custom leading-tight">{s.role}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Typography */}
      <Section spacing="normal" bg="ivory" className="border-t border-border-custom/40">
        <Container>
          <h2 className="text-editorial-h2 text-ink mb-8 font-light">Typography Hierarchy</h2>
          <div className="space-y-8 max-w-4xl">
            <div>
              <span className="font-ui text-xs text-muted-brass uppercase tracking-widest block mb-1">
                Display Hero (Cormorant Garamond)
              </span>
              <p className="text-display-hero text-ink">Spaces shaped with intention.</p>
            </div>
            <div>
              <span className="font-ui text-xs text-muted-brass uppercase tracking-widest block mb-1">
                Editorial H1
              </span>
              <p className="text-editorial-h1 text-ink">A thoughtful approach to space.</p>
            </div>
            <div>
              <span className="font-ui text-xs text-muted-brass uppercase tracking-widest block mb-1">
                Editorial H2
              </span>
              <p className="text-editorial-h2 text-ink">Proportion, light, and quiet permanence.</p>
            </div>
            <div>
              <span className="font-ui text-xs text-muted-brass uppercase tracking-widest block mb-1">
                Body Measure (Manrope)
              </span>
              <p className="font-ui text-base text-slate-custom max-w-xl leading-relaxed">
                Our architectural practice centers on creating buildings of balanced scale, responsive orientation, and clear spatial hierarchy. We study how light moves through every room across the day.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Button Variations */}
      <Section spacing="normal" bg="stone" className="border-t border-border-custom/40">
        <Container>
          <h2 className="text-editorial-h2 text-ink mb-8 font-light">Interactive Components</h2>
          <div className="flex flex-wrap items-center gap-6">
            <Button variant="primary" withArrow>Primary Dark</Button>
            <Button variant="brass" withArrow>Brass Accent</Button>
            <Button variant="outline">Outline Border</Button>
            <Button variant="secondary">Soft Stone</Button>
            <TextLink to="/projects">Editorial Text Link</TextLink>
          </div>
        </Container>
      </Section>
    </div>
  );
};
