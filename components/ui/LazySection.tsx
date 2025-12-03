import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Loader2 } from 'lucide-react';

interface LazySectionProps {
  children: React.ReactNode;
  threshold?: number; // 0 to 1
  minHeight?: string; // To prevent layout shift
}

export const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  threshold = 0.1, 
  minHeight = '300px' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Once visible, set state and unobserve (we only need to load once)
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        rootMargin: '100px', // Load slightly before it comes into view
        threshold
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return (
    <div ref={ref} style={{ minHeight: isVisible ? 'auto' : minHeight }} className="w-full">
      {isVisible ? (
        <Suspense 
          fallback={
            <div className="w-full h-full flex items-center justify-center py-20 text-brand-secondary/50">
              <Loader2 className="animate-spin w-8 h-8" />
            </div>
          }
        >
          {children}
        </Suspense>
      ) : null}
    </div>
  );
};