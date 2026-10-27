import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projects';
import { AspectFrame } from '@/components/common/ImageComponents';

interface ProjectCardProps {
  project: Project;
  aspectRatio?: '16:9' | '4:3' | '3:2' | '4:5' | '1:1';
  className?: string;
  showIndex?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  aspectRatio = '4:3',
  className = '',
  showIndex = true,
}) => {
  return (
    <article className={`group flex flex-col ${className}`}>
      <Link
        to={`/projects/${project.slug}`}
        className="block relative overflow-hidden focus-visible:outline-2 focus-visible:outline-muted-brass"
      >
        <AspectFrame aspectRatio={aspectRatio} className="bg-soft-stone/50 overflow-hidden">
          <img
            src={project.primaryImage.src}
            alt={project.primaryImage.alt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          {/* Subtle gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:block hidden" />

          {/* Hover Arrow Badge on Desktop */}
          <div className="absolute bottom-4 right-4 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-warm-ivory text-ink shadow-md transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <ArrowUpRight className="w-5 h-5 text-ink" />
          </div>
        </AspectFrame>
      </Link>

      {/* Metadata & Title */}
      <div className="pt-4 flex flex-col">
        <div className="flex items-center justify-between font-ui text-xs text-slate-custom tracking-wider uppercase mb-1">
          <div className="flex items-center gap-2">
            {showIndex && <span className="text-muted-brass font-medium">{project.number}</span>}
            {showIndex && <span>•</span>}
            <span>{project.filterCategory}</span>
          </div>
          <span className="text-[10px] bg-soft-stone/70 px-2 py-0.5 rounded text-slate-custom font-normal">
            Design study
          </span>
        </div>

        <h3 className="font-display text-xl sm:text-2xl text-ink font-normal group-hover:text-muted-brass transition-colors">
          <Link to={`/projects/${project.slug}`} className="hover:underline underline-offset-4">
            {project.title}
          </Link>
        </h3>

        <p className="mt-1.5 font-ui text-xs sm:text-sm text-slate-custom line-clamp-2 leading-relaxed">
          {project.shortDescription}
        </p>

        <div className="mt-3 pt-3 border-t border-border-custom/40 flex items-center justify-between">
          <Link
            to={`/projects/${project.slug}`}
            className="font-ui text-xs uppercase tracking-widest text-ink group-hover:text-muted-brass font-medium flex items-center gap-1.5 transition-colors min-h-[44px]"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-muted-brass" />
          </Link>
        </div>
      </div>
    </article>
  );
};
