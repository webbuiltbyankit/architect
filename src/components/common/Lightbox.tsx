import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectImage } from '@/data/projects';

interface LightboxProps {
  images: ProjectImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const currentImage = images[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Preview"
      className="fixed inset-0 z-[999] flex flex-col items-center justify-between bg-ink/95 backdrop-blur-md text-warm-ivory p-4 sm:p-6 md:p-10 select-none animate-in fade-in duration-300"
    >
      {/* Top Bar */}
      <div className="w-full flex items-center justify-between max-w-7xl">
        <div className="flex items-center gap-3">
          <span className="font-ui text-xs tracking-widest text-muted-brass uppercase">
            Study Visual
          </span>
          <span className="text-white/40">/</span>
          <span className="font-ui text-xs tracking-wider text-warm-ivory/80">
            {String(currentIndex + 1).padStart(2, '0')} of {String(images.length).padStart(2, '0')}
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close Lightbox (Esc)"
          className="p-3 text-white/80 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-muted-brass"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative flex-1 w-full max-w-6xl flex items-center justify-center my-4 overflow-hidden">
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            aria-label="Previous Image"
            className="absolute left-2 sm:left-4 z-10 p-3 text-white/80 hover:text-white bg-ink/60 hover:bg-ink/80 rounded-full backdrop-blur-sm transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center border border-white/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-h-[75vh] max-w-full object-contain rounded shadow-2xl transition-transform duration-300"
        />

        {images.length > 1 && (
          <button
            onClick={handleNext}
            aria-label="Next Image"
            className="absolute right-2 sm:right-4 z-10 p-3 text-white/80 hover:text-white bg-ink/60 hover:bg-ink/80 rounded-full backdrop-blur-sm transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center border border-white/10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Caption */}
      <div className="w-full max-w-4xl text-center">
        <p className="font-display text-base sm:text-lg text-warm-ivory font-light italic">
          {currentImage.caption || currentImage.alt}
        </p>
        <p className="font-ui text-xs text-slate-custom mt-1 tracking-wider uppercase">
          Curated Design Study Asset • Arun Saini Architects
        </p>
      </div>
    </div>
  );
};
