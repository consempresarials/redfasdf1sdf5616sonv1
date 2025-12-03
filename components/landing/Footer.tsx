import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#290E12] text-white py-14 border-t border-brand-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="https://promosquiz.online/music/logov1.png" 
                alt="Eternisom Logo" 
                className="h-9 w-auto"
              />
              <span className="font-serif font-bold text-2xl tracking-wide">Eternisom</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6 font-light">
              Eternizando momentos através de músicas personalizadas. Feito com amor no Brasil para emocionar quem você ama.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all"><span className="sr-only">Instagram</span>📷</a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all"><span className="sr-only">Facebook</span>f</a>
            </div>
          </div>
          
          <div>
             <h3 className="font-serif font-bold text-lg mb-4 text-brand-accent">Links Rápidos</h3>
             <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#exemplos" className="hover:text-white transition-colors">Exemplos</a></li>
                <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a></li>
             </ul>
          </div>

          <div className="text-sm text-gray-400">
             <p className="mb-2 font-serif font-bold text-brand-accent text-lg">Contato</p>
             <p className="mb-4">Dúvidas? Fale com a gente!</p>
             <a href="mailto:contato@eternisom.com.br" className="flex items-center gap-2 text-white hover:text-brand-primary transition-colors mb-6">
               ✉️ contato@eternisom.com.br
             </a>
             <div className="flex items-center gap-2 bg-white/5 py-2 px-4 rounded-lg w-max border border-white/10">
                <ShieldCheck size={16} className="text-green-400"/> <span className="text-xs">Pagamento 100% Seguro</span>
             </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; 2024 Eternisom Brasil. Todos os direitos reservados.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-gray-300">Termos de Uso</a>
             <a href="#" className="hover:text-gray-300">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};