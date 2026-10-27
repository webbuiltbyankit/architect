import { useEffect } from 'react';

export interface SeoProps {
  title: string;
  description: string;
  image?: string;
}

export function useSeo({ title, description, image }: SeoProps): void {
  useEffect(() => {
    const formattedTitle = `${title} | Arun Saini Architects`;
    document.title = formattedTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update Open Graph tags
    const setMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('og:title', formattedTitle);
    setMeta('og:description', description);
    if (image) {
      setMeta('og:image', image);
    }

    // Ensure noindex, nofollow is always strictly present for the preview
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, nofollow');
  }, [title, description, image]);
}
