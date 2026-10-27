import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, CheckCircle } from 'lucide-react';
import { Container, Section } from '@/components/layout/Container';
import { Button } from '@/components/common/Button';
import { clearDemoInquiries, getDemoInquiries } from '@/utils/inquiries';
import { useSeo } from '@/utils/seo';

export const PrivacyPage: React.FC = () => {
  useSeo({
    title: 'Demo Privacy & Prototype Disclosure',
    description: 'Privacy notice and data disclosure for the Arun Saini Architects digital prototype preview.',
  });

  const [savedCount, setSavedCount] = useState<number>(getDemoInquiries().length);
  const [clearedMessage, setClearedMessage] = useState(false);

  const handleClearData = () => {
    if (window.confirm('Erase all locally stored demo inquiries from this browser?')) {
      clearDemoInquiries();
      setSavedCount(0);
      setClearedMessage(true);
      setTimeout(() => setClearedMessage(false), 4000);
    }
  };

  return (
    <div className="w-full pt-28 pb-16">
      <section className="py-12 md:py-16 bg-warm-ivory border-b border-border-custom/40">
        <Container>
          <div className="max-w-3xl">
            <span className="text-eyebrow text-muted-brass block mb-3">Legal & Architecture Governance</span>
            <h1 className="text-editorial-h1 text-ink font-light tracking-tight mb-4">
              Demo Privacy & Prototype Disclosure
            </h1>
            <p className="font-ui text-base sm:text-lg text-slate-custom leading-relaxed">
              This digital concept was created solely as a private design and engineering demonstration for Arun Saini Architects.
            </p>
          </div>
        </Container>
      </section>

      <Section spacing="generous" bg="paper">
        <Container className="max-w-3xl">
          <div className="space-y-10 font-ui text-sm sm:text-base text-slate-custom leading-relaxed">
            <div>
              <h2 className="font-display text-2xl text-ink font-normal mb-3">
                1. Local Storage of Inquiry Information
              </h2>
              <p>
                Any inquiries, consultation preferences, or messages entered in the contact forms on this website are preserved <strong>strictly within your local browser storage (localStorage)</strong>. No data is transmitted to an external server, marketing database, or third-party CRM. The studio has not received your inquiry until official production deployment is authorized.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink font-normal mb-3">
                2. Visual Asset Attribution & Rights
              </h2>
              <p>
                The seven interior photographs featured across this concept preview are working references supplied for development layout modeling. Their titles (e.g., <em>The Entertaining Suite</em>, <em>Indigo Retreat</em>) are editorial placeholders. Official project attribution, credits, and publication rights remain subject to client confirmation.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink font-normal mb-3">
                3. Absence of Third-Party Tracking
              </h2>
              <p>
                By default, this preview operates with <strong>no advertising pixels, no tracking cookies, and no third-party telemetry</strong> (such as Google Analytics or Meta Pixel). The application complies with noindex and nofollow directives to ensure preview content is excluded from search engine indexing.
              </p>
            </div>

            <div className="p-6 bg-warm-ivory rounded border border-border-custom space-y-4">
              <h3 className="font-display text-xl text-ink">Erase Locally Stored Demo Data</h3>
              <p className="text-xs text-slate-custom">
                Currently, your browser contains <strong>{savedCount}</strong> locally stored demo inquiry {savedCount === 1 ? 'record' : 'records'}. You may delete these at any time using the action below.
              </p>
              {clearedMessage && (
                <div className="p-3 bg-soft-stone text-xs text-ink rounded flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-muted-brass" />
                  <span>All local demo records successfully removed.</span>
                </div>
              )}
              {savedCount > 0 && (
                <Button onClick={handleClearData} variant="outline" className="text-xs">
                  <Trash2 className="w-3.5 h-3.5 mr-2 text-red-600" />
                  <span>Clear Browser Demo Records</span>
                </Button>
              )}
            </div>

            <div className="pt-6 border-t border-border-custom">
              <Link to="/" className="text-sm font-ui text-ink hover:text-muted-brass underline">
                Return to Homepage
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
