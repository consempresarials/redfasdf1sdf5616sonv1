import React from 'react';
import { MessageCircle, Sparkles, Music, Check } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <span className="inline-block py-1.5 px-4 rounded-full bg-brand-surface border border-brand-accent/20 text-brand-secondary text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">Processo Simples</span>
           <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-secondary mb-4">Como Funciona</h2>
           <p className="text-base text-gray-600 font-medium">Criar sua música personalizada é simples e mágico</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div className="bg-brand-surface p-8 rounded-xl shadow-premium border border-brand-accent/20 flex flex-col items-center text-center relative group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center text-brand-accent mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-brand-accent/30">
               <MessageCircle size={28} strokeWidth={1.5} />
            </div>
            <span className="bg-brand-light text-brand-secondary text-[10px] font-bold px-3 py-1 rounded-full border border-brand-accent/20 mb-5">2 minutos</span>
            <h3 className="text-xl font-serif font-bold text-brand-secondary mb-3">Conte Sua História</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">Responda algumas perguntas sobre seu momento especial, a pessoa e as emoções que deseja transmitir.</p>
            <div className="mt-auto flex items-center gap-1.5 text-xs font-bold text-brand-green">
              <Check size={14} /> Fácil e rápido
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-brand-surface p-8 rounded-xl shadow-premium border border-brand-accent/20 flex flex-col items-center text-center relative group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-white/20">
               <Sparkles size={28} strokeWidth={1.5} />
            </div>
            <span className="bg-brand-light text-brand-secondary text-[10px] font-bold px-3 py-1 rounded-full border border-brand-accent/20 mb-5">48 horas</span>
            <h3 className="text-xl font-serif font-bold text-brand-secondary mb-3">Nossa Equipe Cria</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">Entregamos uma música única, criada com dedicação para transformar sua história em melodia e palavras.</p>
            <div className="mt-auto flex items-center gap-1.5 text-xs font-bold text-brand-primary">
              <Check size={14} /> Profissionais experientes
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-brand-surface p-8 rounded-xl shadow-premium border border-brand-accent/20 flex flex-col items-center text-center relative group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center text-brand-secondary mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-white/20">
               <Music size={28} strokeWidth={1.5} />
            </div>
            <span className="bg-brand-light text-brand-secondary text-[10px] font-bold px-3 py-1 rounded-full border border-brand-accent/20 mb-5">Imediato</span>
            <h3 className="text-xl font-serif font-bold text-brand-secondary mb-3">Receba Sua Obra-Prima</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">Receba sua música personalizada em alta qualidade, pronta para compartilhar com o mundo.</p>
            <div className="mt-auto flex items-center gap-1.5 text-xs font-bold text-brand-secondary">
              <Check size={14} /> Alta qualidade
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};