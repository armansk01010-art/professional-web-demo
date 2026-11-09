import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onIndexChange: (index: number) => void;
  title?: string;
  caption?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onIndexChange,
  title,
  caption
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onIndexChange((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight') {
        onIndexChange((currentIndex + 1) % images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onIndexChange]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212]/95 backdrop-blur-md p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      {/* Top Bar with title and close */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[#FFFFFF] z-10">
        <div>
          {title && (
            <span className="font-editorial-heading text-xl sm:text-2xl text-[#FFFFFF] tracking-tight block">
              {title}
            </span>
          )}
          <span className="text-xs text-[#A69B8B] tracking-wider uppercase">
            Plate {currentIndex + 1} of {images.length}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-[#FFFFFF]/80 hover:text-[#FFFFFF] transition-colors cursor-pointer"
          aria-label="Close image viewer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Viewport */}
      <div className="relative max-w-6xl max-h-[82vh] w-full flex items-center justify-center p-2">
        <img
          src={currentImage}
          alt={title ? `${title} - plate ${currentIndex + 1}` : 'Architectural study'}
          referrerPolicy="no-referrer"
          className="max-h-[80vh] max-w-full object-contain rounded-none shadow-2xl transition-transform duration-300 select-none"
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => onIndexChange((currentIndex - 1 + images.length) % images.length)}
              className="absolute left-2 sm:-left-4 p-3 rounded-full bg-[#292929]/70 hover:bg-[#292929] text-[#FFFFFF] transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => onIndexChange((currentIndex + 1) % images.length)}
              className="absolute right-2 sm:-right-4 p-3 rounded-full bg-[#292929]/70 hover:bg-[#292929] text-[#FFFFFF] transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Bottom Caption and Dots */}
      <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A69B8B]">
        <p className="max-w-xl text-center sm:text-left line-clamp-1">
          {caption || 'Architectural study captured during concept development.'}
        </p>
        <div className="flex items-center gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => onIndexChange(idx)}
              className={`h-1.5 transition-all cursor-pointer ${
                idx === currentIndex ? 'w-6 bg-[#FFFFFF]' : 'w-2 bg-[#555555]'
              }`}
              aria-label={`Jump to plate ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
