import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/common/Button';
import { useSeo } from '@/utils/seo';

export const NotFoundPage: React.FC = () => {
  useSeo({
    title: 'Page Not Found',
    description: 'The requested architectural document or page could not be located.',
  });

  return (
    <div className="w-full pt-44 pb-32 min-h-[75vh] flex items-center bg-warm-ivory">
      <Container className="text-center max-w-xl mx-auto">
        <span className="font-mono text-xs text-muted-brass font-bold tracking-widest block mb-3">
          Error 404
        </span>
        <h1 className="text-editorial-h1 text-ink font-light mb-4">
          Page Not Located
        </h1>
        <p className="font-ui text-base text-slate-custom mb-8 leading-relaxed">
          The page or architectural study you requested has been moved, renamed, or does not exist in this preview.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button to="/" variant="primary">
            Return to Homepage
          </Button>
          <Button to="/projects" variant="outline">
            Browse Portfolio Studies
          </Button>
        </div>
      </Container>
    </div>
  );
};
