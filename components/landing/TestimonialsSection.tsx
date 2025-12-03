import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Mariana Costa",
    role: "Filha",
    rating: 5,
    text: "Fiz uma homenagem para meu pai no aniversário de 60 anos dele. Ele ficou emocionado e não para de ouvir.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Empresário",
    rating: 5,
    text: "Criei um jingle para minha empresa e o resultado superou todas as expectativas. Profissionalismo e qualidade.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
  },
  {
    id: 3,
    name: "Ana Silva",
    role: "Noiva",
    rating: 5,
    text: "Encomendei uma música para meu casamento e foi simplesmente perfeita! Todos os convidados choraram. A qualidade de produção é incrível, parece música de rádio!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
           <span className="inline-block py-1.5 px-4 rounded-full bg-brand-light border border-brand-accent/20 text-brand-secondary text-xs font-bold tracking-widest uppercase mb-4">Depoimentos</span>
           <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-secondary mb-4">O Que Nossos Clientes Dizem</h2>
           <p className="text-gray-600">Histórias reais de pessoas reais que criaram momentos mágicos</p>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
           {TESTIMONIALS.map((t) => (
             <div key={t.id} className="bg-brand-light p-8 rounded-sm shadow-premium border border-brand-accent/10 flex flex-col relative mt-6 hover:-translate-y-2 transition-transform duration-300">
               <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-8 h-8 bg-brand-accent rounded-full border-4 border-brand-surface"></div>
               <div className="absolute -top-4 left-8 text-brand-accent/20">
                 <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" />
                 </svg>
               </div>
               <div className="flex gap-1 mb-6 mt-6 justify-center">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-accent fill-brand-accent" />
                  ))}
               </div>
               <p className="text-gray-700 text-center italic mb-8 flex-1 text-base leading-relaxed font-medium">"{t.text}"</p>
               <div className="flex items-center gap-4 border-t border-brand-accent/20 pt-6">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-accent/50 grayscale-[0.2]" 
                    loading="lazy"
                    decoding="async"
                    width="48"
                    height="48"
                  />
                  <div>
                     <h4 className="font-bold text-brand-secondary">{t.name}</h4>
                     <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wide">{t.role}</span>
                  </div>
               </div>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
};