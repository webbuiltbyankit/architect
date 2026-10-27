import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { mainNavItems, siteConfig } from '@/data/site';
import { Container } from '@/components/layout/Container';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomepage = location.pathname === '/';

  // Performant scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Determine current theme style based on homepage hero vs interior page vs scrolled state
  const isDarkHeroState = isHomepage && !isScrolled;

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-warm-ivory/95 backdrop-blur-md shadow-[0_1px_0_rgba(25,25,25,0.08)] py-4'
            : isHomepage
            ? 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-6'
            : 'bg-warm-ivory py-6'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Wordmark Logo */}
            <Link
              to="/"
              className="group flex flex-col focus-visible:outline-2 focus-visible:outline-muted-brass"
            >
              <span
                className={`font-display text-xl sm:text-2xl tracking-[0.18em] font-medium transition-colors duration-300 uppercase ${
                  isDarkHeroState ? 'text-warm-ivory' : 'text-ink'
                }`}
              >
                Arun Saini
              </span>
              <span
                className={`font-ui text-[10px] sm:text-[11px] tracking-[0.32em] font-normal transition-colors duration-300 uppercase ${
                  isDarkHeroState ? 'text-warm-ivory/70' : 'text-slate-custom'
                }`}
              >
                Architects
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
              {mainNavItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    aria-current={isActive ? 'page' : undefined}
                    className={`font-ui text-sm tracking-widest uppercase transition-all duration-200 relative py-1 focus-visible:outline-2 focus-visible:outline-muted-brass ${
                      isDarkHeroState
                        ? isActive
                          ? 'text-warm-ivory font-semibold'
                          : 'text-warm-ivory/80 hover:text-warm-ivory'
                        : isActive
                        ? 'text-ink font-semibold'
                        : 'text-ink/80 hover:text-ink'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-px transition-colors ${
                          isDarkHeroState ? 'bg-muted-brass' : 'bg-ink'
                        }`}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/contact"
                className={`font-ui text-xs uppercase tracking-widest px-5 py-2.5 transition-all duration-300 border flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-muted-brass cursor-pointer ${
                  isDarkHeroState
                    ? 'border-warm-ivory/30 text-warm-ivory hover:bg-warm-ivory hover:text-ink hover:border-warm-ivory'
                    : 'border-ink/20 text-ink hover:bg-ink hover:text-warm-ivory hover:border-ink'
                }`}
              >
                <span>Discuss a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
              className={`lg:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded transition-colors focus-visible:outline-2 focus-visible:outline-muted-brass cursor-pointer ${
                isDarkHeroState ? 'text-warm-ivory' : 'text-ink'
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
          className="fixed inset-0 z-[100] lg:hidden bg-ink/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 text-warm-ivory animate-in fade-in duration-300"
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex flex-col">
              <span className="font-display text-2xl tracking-[0.16em] uppercase">
                Arun Saini
              </span>
              <span className="font-ui text-xs tracking-[0.28em] text-muted-brass uppercase">
                Architects • Preview
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-warm-ivory hover:text-muted-brass transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex flex-col gap-6 my-auto py-8">
            {mainNavItems.map((item, idx) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-baseline justify-between min-h-[48px] py-2 border-b border-white/5"
                >
                  <span className="font-ui text-xs text-muted-brass/70 tracking-widest">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`font-display text-3xl tracking-wide uppercase transition-colors ${
                      isActive ? 'text-muted-brass' : 'text-warm-ivory group-hover:text-muted-brass'
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Drawer Footer CTA */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-4 bg-muted-brass text-white font-ui text-sm uppercase tracking-widest font-medium rounded hover:bg-brass-dark transition-colors min-h-[44px] flex items-center justify-center"
            >
              Discuss a Project
            </Link>
            <div className="flex items-center justify-between text-xs text-slate-custom font-ui pt-2">
              <span>{siteConfig.cityLocation}</span>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-muted-brass underline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
