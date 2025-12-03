import React, { lazy } from 'react';
import { Music } from 'lucide-react';
import { Button } from '../ui/Button';

// Eager Imports (Critical for LCP)
import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';

// Utility for Scroll-based Loading
import { LazySection } from '../ui/LazySection';

// Lazy Imports (Loaded only when scrolled into view)
// Using .then pattern to handle Named Exports without changing original files
const ExamplesSection = lazy(() => import('./ExamplesSection').then(m => ({ default: m.ExamplesSection })));
const HowItWorksSection = lazy(() => import('./HowItWorksSection').then(m => ({ default: m.HowItWorksSection })));
const TestimonialsSection = lazy(() => import('./TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const StatsSection = lazy(() => import('./StatsSection').then(m => ({ default: m.StatsSection })));
const PricingSection = lazy(() => import('./PricingSection').then(m => ({ default: m.PricingSection })));
const WhyChooseUsSection = lazy(() => import('./WhyChooseUsSection').then(m => ({ default: m.WhyChooseUsSection })));
const FaqSection = lazy(() => import('./FaqSection').then(m => ({ default: m.FaqSection })));
const Footer = lazy(() => import('./Footer').then(m => ({ default: m.Footer })));

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-light font-sans">
      {/* Critical Path: Loaded Instantly */}
      <Navbar onStart={onStart} />
      <HeroSection onStart={onStart} />
      
      {/* Below the Fold: Loaded on Scroll */}
      <LazySection minHeight="600px">
        <ExamplesSection />
      </LazySection>
      
      <LazySection minHeight="500px">
        <HowItWorksSection />
      </LazySection>
      
      {/* CTA Section - Inline content but heavy button interaction */}
      <section className="py-16 bg-[#EBE5D5] border-y border-brand-accent/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-secondary mb-4">Pronto para criar sua música?</h2>
           <p className="text-gray-700 mb-8 font-medium">Junte-se a mais de 1000 pessoas que já criaram momentos inesquecíveis</p>
           <Button onClick={onStart} className="text-base px-10 py-4 shadow-xl">
              <Music className="mr-2 w-5 h-5" strokeWidth={2} />
              Criar Minha Música Agora
           </Button>
        </div>
      </section>

      <LazySection minHeight="600px">
        <TestimonialsSection />
      </LazySection>
      
      <LazySection minHeight="200px">
        <StatsSection />
      </LazySection>
      
      <LazySection minHeight="800px">
        <PricingSection onStart={onStart} />
      </LazySection>
      
      <LazySection minHeight="300px">
        <WhyChooseUsSection />
      </LazySection>
      
      <LazySection minHeight="400px">
        <FaqSection />
      </LazySection>
      
      <LazySection minHeight="300px">
        <Footer />
      </LazySection>
    </div>
  );
}