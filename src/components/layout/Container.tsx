import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'default',
}) => {
  const sizeClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-[1340px]',
    wide: 'max-w-[1500px]',
    full: 'max-w-full',
  }[size];

  return (
    <div className={`mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16 ${sizeClasses} ${className}`}>
      {children}
    </div>
  );
};

export const Section: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
  spacing?: 'compact' | 'normal' | 'generous' | 'none';
  bg?: 'ivory' | 'paper' | 'stone' | 'ink';
}> = ({
  children,
  className = '',
  id,
  spacing = 'normal',
  bg = 'ivory',
}) => {
  const spacingClasses = {
    none: 'py-0',
    compact: 'py-12 md:py-16',
    normal: 'py-20 md:py-28',
    generous: 'py-28 md:py-40',
  }[spacing];

  const bgClasses = {
    ivory: 'bg-warm-ivory text-ink',
    paper: 'bg-paper text-ink',
    stone: 'bg-soft-stone text-ink',
    ink: 'bg-ink text-warm-ivory',
  }[bg];

  return (
    <section id={id} className={`relative w-full ${spacingClasses} ${bgClasses} ${className}`}>
      {children}
    </section>
  );
};

export const EditorialGrid: React.FC<{
  children: React.ReactNode;
  className?: string;
  cols?: 2 | 3 | 4 | 12;
}> = ({ children, className = '', cols = 12 }) => {
  const gridClasses = {
    2: 'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14',
    3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10',
    4: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8',
    12: 'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 md:gap-8',
  }[cols];

  return <div className={`w-full ${gridClasses} ${className}`}>{children}</div>;
};

export const SplitPanel: React.FC<{
  left: React.ReactNode;
  right: React.ReactNode;
  ratio?: '50-50' | '60-40' | '40-60';
  reverseOnMobile?: boolean;
  className?: string;
}> = ({ left, right, ratio = '50-50', reverseOnMobile = false, className = '' }) => {
  const ratioClasses = {
    '50-50': 'lg:grid-cols-2',
    '60-40': 'lg:grid-cols-[1.2fr_0.8fr]',
    '40-60': 'lg:grid-cols-[0.8fr_1.2fr]',
  }[ratio];

  return (
    <div
      className={`grid grid-cols-1 ${ratioClasses} items-center gap-10 md:gap-16 lg:gap-24 ${
        reverseOnMobile ? 'flex flex-col-reverse lg:grid' : ''
      } ${className}`}
    >
      <div className="w-full">{left}</div>
      <div className="w-full">{right}</div>
    </div>
  );
};
