import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { mainNavItems, siteConfig } from '@/data/site';
import { Container } from '@/components/layout/Container';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-ink text-warm-ivory border-t border-white/10 pt-20 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-block group focus-visible:outline-2 focus-visible:outline-muted-brass">
                <span className="font-display text-3xl sm:text-4xl tracking-[0.16em] uppercase text-warm-ivory block font-medium">
                  Arun Saini
                </span>
                <span className="font-ui text-xs tracking-[0.32em] text-muted-brass uppercase block mt-1">
                  Architects
                </span>
              </Link>
              <p className="mt-6 font-ui text-sm text-warm-ivory/70 max-w-sm leading-relaxed">
                Quiet architectural luxury. Spatial planning and interior design concepts shaped by natural daylight, proportion, and enduring materiality.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <span className="font-ui text-xs tracking-widest text-slate-custom uppercase block">
                Studio Base
              </span>
              <span className="font-display text-lg text-warm-ivory/90 mt-1 block">
                {siteConfig.cityLocation}
              </span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3">
            <span className="font-ui text-xs tracking-widest text-muted-brass uppercase block mb-6">
              Navigation
            </span>
            <ul className="space-y-3 font-ui text-sm">
              {mainNavItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-warm-ivory/80 hover:text-warm-ivory hover:text-muted-brass transition-colors inline-block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy"
                  className="text-warm-ivory/80 hover:text-muted-brass transition-colors inline-block py-1"
                >
                  Demo Privacy & Disclosure
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice & Inquiry Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-ui text-xs tracking-widest text-muted-brass uppercase block mb-6">
                Connect
              </span>
              <p className="font-ui text-sm text-warm-ivory/70 leading-relaxed mb-6">
                We welcome exploratory inquiries for private residential commissions and spatial consultations across Delhi NCR and PAN India.
              </p>

              <div className="space-y-3 font-ui text-sm">
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-warm-ivory hover:text-muted-brass transition-colors"
                >
                  <span>LinkedIn Studio Page</span>
                  <ArrowUpRight className="w-4 h-4 text-muted-brass" />
                </a>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-ui text-xs uppercase tracking-widest px-6 py-3 bg-muted-brass text-white hover:bg-brass-dark transition-colors rounded"
              >
                <span>Discuss a Commission</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-ui text-xs text-warm-ivory/50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
            <span>© {currentYear} Arun Saini Architects.</span>
            <span className="inline-block px-2.5 py-0.5 border border-white/10 rounded text-[11px] text-muted-brass bg-white/5">
              Concept website — for review only. Project details subject to approval.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-warm-ivory underline underline-offset-4">
              Demo Notice
            </Link>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-muted-brass transition-colors cursor-pointer min-h-[44px] min-w-[44px]"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
