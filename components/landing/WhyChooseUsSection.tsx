import React from 'react';
import { Clock, ShieldCheck } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light border-t border-brand-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <h2 className="font-serif text-3xl font-bold text-brand-secondary mb-12">Por que escolher o Eternisom?</h2>
         
         <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-32">
            <div className="flex flex-col items-center group">
               <div className="w-20 h-20 bg-brand-surface rounded-full flex items-center justify-center text-brand-secondary mb-6 border border-brand-accent/30 shadow-sm group-hover:scale-110 transition-transform">
                  <Clock size={32} strokeWidth={1.5} />
               </div>
               <h3 className="text-lg font-bold text-brand-secondary mb-2">Entrega Rápida</h3>
               <p className="text-gray-600 text-sm">Pronto em 48 horas</p>
            </div>

            <div className="flex flex-col items-center group">
               <div className="w-20 h-20 bg-brand-surface rounded-full flex items-center justify-center text-brand-secondary mb-6 border border-brand-accent/30 shadow-sm group-hover:scale-110 transition-transform">
                  <ShieldCheck size={32} strokeWidth={1.5} />
               </div>
               <h3 className="text-lg font-bold text-brand-secondary mb-2">Garantia Total</h3>
               <p className="text-gray-600 text-sm">30 dias de garantia</p>
            </div>
         </div>
      </div>
    </section>
  );
};