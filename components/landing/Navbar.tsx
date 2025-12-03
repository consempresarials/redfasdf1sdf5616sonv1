import React from 'react';
import { Button } from '../ui/Button';
import { User } from 'lucide-react';

interface NavbarProps {
  onStart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStart }) => {
  return (
    <nav className="sticky top-0 z-50 bg-brand-light/95 backdrop-blur-md border-b border-brand-accent/20 h-20 flex items-center shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Otimização: Width/Height explícitos para evitar Layout Shift e fetchPriority para carregar rápido */}
            <img 
              src="https://promosquiz.online/music/v2/Logo.webp" 
              alt="Eternisom Logo" 
              className="h-8 md:h-9 w-auto"
              width="36"
              height="36"
              //@ts-ignore
              fetchpriority="high"
            />
            <span className="font-serif font-bold text-xl md:text-2xl text-brand-secondary tracking-tight">Eternisom</span>
          </div>
          
          <div className="hidden lg:flex space-x-8 text-sm font-medium text-gray-700 items-center">
            <a href="#como-funciona" className="hover:text-brand-primary transition-colors hover:underline decoration-brand-accent decoration-2 underline-offset-4">Como Funciona</a>
            <a href="#exemplos" className="hover:text-brand-primary transition-colors hover:underline decoration-brand-accent decoration-2 underline-offset-4">Exemplos</a>
            <a href="#depoimentos" className="hover:text-brand-primary transition-colors hover:underline decoration-brand-accent decoration-2 underline-offset-4">Depoimentos</a>
            <a href="#faq" className="hover:text-brand-primary transition-colors hover:underline decoration-brand-accent decoration-2 underline-offset-4">FAQ</a>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
             <button className="hidden sm:flex items-center gap-2 text-sm font-bold text-brand-secondary hover:text-brand-primary hover:bg-brand-secondary/5 px-3 py-2 rounded-lg transition-colors">
                <User size={18} strokeWidth={2.5} />
                <span>Minhas Músicas</span>
             </button>

             <Button onClick={onStart} className="text-xs md:text-sm shadow-gold hover:shadow-brand-primary/40 transition-all">
               Criar Música
             </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};