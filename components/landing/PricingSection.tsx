import React from 'react';
import { Lock, Gift, Check, Music } from 'lucide-react';
import { Button } from '../ui/Button';

interface PricingSectionProps {
  onStart: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onStart }) => {
  return (
    <section className="py-20 bg-brand-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Decorative elements */}
         <div className="absolute top-0 left-0 w-72 h-72 bg-brand-accent rounded-full filter blur-[100px] opacity-20 -translate-x-1/2"></div>
         <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-primary rounded-full filter blur-[100px] opacity-10 translate-x-1/2"></div>

         <span className="inline-block py-1.5 px-4 rounded-full bg-brand-surface border border-brand-accent/20 text-brand-secondary text-xs font-bold tracking-widest uppercase mb-4">Sem surpresas</span>
         <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-secondary mb-4">Planos Transparentes</h2>
         <p className="text-gray-600 mb-12 max-w-xl mx-auto">Sem taxas escondidas. Apenas música de qualidade profissional.</p>

         <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-10 shadow-sm">
            <Lock size={14} className="text-gray-400" />
            <span className="text-sm font-medium text-gray-600">Preços para: <span className="font-bold text-brand-secondary">BR Brasil</span> 🇧🇷</span>
         </div>

         <div className="max-w-sm mx-auto">
           <div className="bg-brand-surface rounded-xl shadow-premium border-2 border-brand-accent/50 overflow-hidden relative transform hover:-translate-y-1 transition-all duration-300">
             {/* Badge */}
             <div className="bg-brand-accent py-2 px-4 text-white font-bold text-sm tracking-wide">
               OFERTA ESPECIAL
             </div>
             
             <div className="p-8">
               <h3 className="text-2xl font-serif font-bold text-brand-secondary mb-1">Expresso</h3>
               <div className="flex items-center justify-center gap-1 mb-2">
                 <span className="text-sm text-gray-400 font-medium">R$</span>
                 <span className="text-5xl font-serif font-bold text-brand-secondary">47,99</span>
               </div>
               <p className="text-sm text-gray-500 mb-6 font-medium">Entrega em 48 horas</p>

               <div className="bg-brand-green/10 border border-brand-green/20 rounded-lg p-3 mb-8 flex items-center justify-center gap-2">
                 <Gift size={16} className="text-brand-green" />
                 <span className="text-xs font-bold text-brand-green">Ganhe uma versão grátis!</span>
               </div>

               <div className="space-y-4 text-left mb-8 pl-4">
                  <div className="flex items-center gap-3">
                     <div className="bg-brand-secondary/5 p-1 rounded-full"><Check size={14} className="text-brand-primary" strokeWidth={3} /></div>
                     <span className="text-gray-700 font-medium text-sm">MP3 alta qualidade</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="bg-brand-secondary/5 p-1 rounded-full"><Check size={14} className="text-brand-primary" strokeWidth={3} /></div>
                     <span className="text-gray-700 font-medium text-sm">Capa personalizada</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="bg-brand-secondary/5 p-1 rounded-full"><Check size={14} className="text-brand-primary" strokeWidth={3} /></div>
                     <span className="text-gray-700 font-medium text-sm">Letra completa</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="bg-brand-secondary/5 p-1 rounded-full"><Check size={14} className="text-brand-primary" strokeWidth={3} /></div>
                     <span className="text-gray-700 font-medium text-sm">Entrega em 48h</span>
                  </div>
               </div>

               <Button onClick={onStart} fullWidth className="py-4 text-base shadow-lg">
                 <Music className="mr-2 w-4 h-4" />
                 Criar Minha Música
               </Button>
             </div>
           </div>
         </div>
      </div>
    </section>
  );
};