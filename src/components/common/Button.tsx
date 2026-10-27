import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface BaseButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'secondary' | 'ghost' | 'brass';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  withUpRightArrow?: boolean;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<BaseButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  withUpRightArrow = false,
  className = '',
  disabled = false,
  loading = false,
  to,
  href,
  target,
  rel,
  onClick,
  type = 'button',
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium font-ui transition-all duration-300 min-h-[44px] min-w-[44px] tracking-wide select-none group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-muted-brass disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeClasses = {
    sm: 'text-xs px-4 py-2 uppercase tracking-widest gap-2',
    md: 'text-sm px-6 py-3 tracking-wide gap-2.5',
    lg: 'text-base px-8 py-4 tracking-wide gap-3',
  }[size];

  const variantClasses = {
    primary: 'bg-ink text-warm-ivory hover:bg-ink-light border border-ink',
    outline: 'bg-transparent text-ink border border-ink/30 hover:border-ink hover:bg-ink/5',
    secondary: 'bg-soft-stone text-ink hover:bg-soft-stone/80 border border-transparent',
    brass: 'bg-muted-brass text-white hover:bg-brass-dark border border-muted-brass',
    ghost: 'bg-transparent text-ink hover:text-muted-brass p-0 min-h-0 min-w-0 border-none',
  }[variant];

  const content = (
    <>
      {loading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      ) : null}
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
      {withUpRightArrow && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target || (href.startsWith('http') ? '_blank' : undefined)}
        rel={rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
        onClick={onClick}
        className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
    >
      {content}
    </button>
  );
};

export const TextLink: React.FC<{
  children: React.ReactNode;
  to?: string;
  href?: string;
  className?: string;
  withArrow?: boolean;
  onClick?: () => void;
}> = ({ children, to, href, className = '', withArrow = true, onClick }) => {
  const classes = `group inline-flex items-center gap-1.5 font-ui text-sm tracking-wide text-ink hover:text-muted-brass transition-colors duration-200 underline-offset-8 hover:underline cursor-pointer min-h-[44px] ${className}`;

  const content = (
    <>
      <span className="border-b border-ink/40 group-hover:border-muted-brass transition-colors pb-0.5">
        {children}
      </span>
      {withArrow && (
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-muted-brass" />
      )}
    </>
  );

  if (to) {
    return <Link to={to} className={classes} onClick={onClick}>{content}</Link>;
  }
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {content}
      </a>
    );
  }
  return <button type="button" onClick={onClick} className={classes}>{content}</button>;
};
