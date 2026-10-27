import React, { useState } from 'react';

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: '16:9' | '4:3' | '3:2' | '4:5' | '1:1';
  objectFit?: 'cover' | 'contain';
  objectPosition?: string;
  eager?: boolean;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  caption?: string;
  onClick?: () => void;
}

export const AspectFrame: React.FC<{
  children: React.ReactNode;
  aspectRatio?: '16:9' | '4:3' | '3:2' | '4:5' | '1:1';
  className?: string;
}> = ({ children, aspectRatio = '4:3', className = '' }) => {
  const ratioClasses = {
    '16:9': 'aspect-[16/9]',
    '4:3': 'aspect-[4/3]',
    '3:2': 'aspect-[3/2]',
    '4:5': 'aspect-[4/5]',
    '1:1': 'aspect-square',
  }[aspectRatio];

  return <div className={`relative overflow-hidden w-full ${ratioClasses} ${className}`}>{children}</div>;
};

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  aspectRatio = '4:3',
  objectFit = 'cover',
  objectPosition = 'center',
  eager = false,
  priority = false,
  className = '',
  containerClassName = '',
  caption,
  onClick,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={`relative w-full overflow-hidden ${containerClassName}`}>
      <AspectFrame aspectRatio={aspectRatio} className="bg-soft-stone/40">
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-soft-stone/60 animate-pulse transition-opacity duration-300" />
        )}
        {hasError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-soft-stone/60 text-slate-custom text-center">
            <span className="font-display text-sm italic">Image study asset</span>
            <span className="font-ui text-xs mt-1 text-slate-custom/70">Reference file: {src.split('/').pop()}</span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading={eager || priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            onClick={onClick}
            style={{ objectPosition }}
            className={`w-full h-full transition-all duration-700 ${
              objectFit === 'cover' ? 'object-cover' : 'object-contain'
            } ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'} ${
              onClick ? 'cursor-pointer hover:scale-[1.03]' : ''
            } ${className}`}
            {...rest}
          />
        )}
      </AspectFrame>
      {caption && (
        <figcaption className="mt-2.5 font-ui text-xs text-slate-custom tracking-wide flex items-center gap-2">
          <span className="w-4 h-px bg-muted-brass/60 inline-block" />
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
};
