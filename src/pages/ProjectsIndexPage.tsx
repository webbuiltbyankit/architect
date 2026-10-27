import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Section } from '@/components/layout/Container';
import { Button } from '@/components/common/Button';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { projectsData, portfolioFilters, PortfolioFilterType } from '@/data/projects';
import { useSeo } from '@/utils/seo';

export const ProjectsIndexPage: React.FC = () => {
  useSeo({
    title: 'Curated Architectural Studies & Interiors Portfolio',
    description: 'Explore the 4 visual design studies by Arun Saini Architects — Private concept preview featuring dining pavilions, master suites, and formal lounges.',
    image: '/images/projects/01-dining-open-plan.jpg',
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = (searchParams.get('filter') as PortfolioFilterType) || 'All';

  const handleFilterChange = (filter: PortfolioFilterType) => {
    if (filter === 'All') {
      searchParams.delete('filter');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ filter });
    }
  };

  const filteredProjects = useMemo(() => {
    if (currentFilter === 'All') return projectsData;
    return projectsData.filter((p) => p.filterCategory === currentFilter);
  }, [currentFilter]);

  return (
    <div className="w-full pt-28 pb-16">
      {/* 1. Typographic Masthead */}
      <section className="py-12 md:py-16 bg-warm-ivory border-b border-border-custom/40">
        <Container>
          <div className="max-w-3xl">
            <span className="text-eyebrow text-muted-brass block mb-3">Portfolio Catalog</span>
            <h1 className="text-editorial-h1 text-ink font-light tracking-tight mb-4">
              Curated Architectural & Interior Studies
            </h1>
            <p className="font-ui text-base sm:text-lg text-slate-custom leading-relaxed mb-6">
              A private collection of 4 visual studies developed to illustrate spatial atmosphere, lighting coordination, and material integrity.
            </p>
            <div className="inline-block px-3 py-1 bg-soft-stone/70 border border-border-custom rounded text-xs font-ui text-slate-custom">
              Displaying {filteredProjects.length} of {projectsData.length} demonstration studies (Subject to client approval)
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Interactive Filter Bar */}
      <section className="sticky top-20 z-40 bg-warm-ivory/95 backdrop-blur-md py-4 border-b border-border-custom/40">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div
              role="group"
              aria-label="Filter projects by category"
              className="flex flex-wrap items-center gap-2"
            >
              {portfolioFilters.map((filter) => {
                const isSelected = currentFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => handleFilterChange(filter)}
                    aria-pressed={isSelected}
                    className={`font-ui text-xs uppercase tracking-widest px-4 py-2 rounded transition-all duration-200 cursor-pointer min-h-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-muted-brass ${
                      isSelected
                        ? 'bg-ink text-warm-ivory font-medium shadow-sm'
                        : 'bg-soft-stone/40 text-slate-custom hover:bg-soft-stone hover:text-ink'
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            <div
              aria-live="polite"
              className="font-ui text-xs text-slate-custom tracking-wider"
            >
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'study' : 'studies'}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Portfolio Editorial Grid */}
      <Section spacing="generous" bg="paper">
        <Container>
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-warm-ivory rounded border border-border-custom max-w-xl mx-auto p-8">
              <span className="text-eyebrow text-muted-brass block mb-2">No Matching Studies</span>
              <h3 className="font-display text-2xl text-ink mb-3">No design studies in this category</h3>
              <p className="font-ui text-sm text-slate-custom mb-6">
                All four curated concept studies are currently categorized under Dining & Social, Bedrooms, and Living.
              </p>
              <Button onClick={() => handleFilterChange('All')} variant="primary">
                View All Studies
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-16">
              {filteredProjects.map((project, idx) => {
                const isOffset = idx % 2 === 1;

                return (
                  <div
                    key={project.slug}
                    className={`${isOffset ? 'md:mt-12' : ''}`}
                  >
                    <ProjectCard
                      project={project}
                      aspectRatio={idx === 0 ? '16:9' : isOffset ? '3:2' : '4:3'}
                    />
                  </div>
                );
              })}
            </div>
          )}

          <div className="mt-24 pt-12 border-t border-border-custom text-center max-w-2xl mx-auto">
            <span className="text-eyebrow text-muted-brass block mb-2">Agency Archival Notice</span>
            <p className="font-ui text-xs text-slate-custom leading-relaxed">
              These four demonstration collections represent the seven unique interior photographs provided for this private build preview. Factual project attributions, addresses, client identities, and completion years are provisional pending client authorization.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
};
