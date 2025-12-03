import React from 'react';

export const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-brand-secondary text-brand-light relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
         <div className="flex flex-col md:flex-row items-center justify-between text-center gap-10">
            <div className="flex-1">
               <div className="text-5xl font-serif font-bold text-brand-accent mb-2">500+</div>
               <div className="text-brand-light/80 font-medium">Músicas Criadas</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-brand-accent/30"></div>
            <div className="flex-1">
               <div className="text-5xl font-serif font-bold text-brand-accent mb-2">5.0</div>
               <div className="text-brand-light/80 font-medium">Avaliação Média</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-brand-accent/30"></div>
            <div className="flex-1">
               <div className="text-5xl font-serif font-bold text-brand-accent mb-2">48h</div>
               <div className="text-brand-light/80 font-medium">Tempo de Entrega</div>
            </div>
         </div>
      </div>
    </section>
  );
};