import React, { useState, useEffect } from 'react';
import { Star, Music } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeroSectionProps {
  onStart: () => void;
}

const ROTATING_TEXTS = [
  "para o Amor da Sua Vida❤️",
  "para Pedir Perdão🙏",
  "para Reacender o Amor🔥",
  "para sua Namorada💘",
  "para Celebrar a União💍",
  "para Eternizar Momentos⏳",
  "para Curar a Saudade💌",
  "para sua Mãe Guerreira🌹",
  "para seu Pai Herói🤠",
  "para seu Namorado💙",
  "para sua Esposa Amada👰",
  "para seu Marido Dedicado🤵",
  "sobre um Novo Começo✨",
  "sobre um Amor Eterno∞",
  "como um Presente de Deus🙌",
  "para sua Filha Princesa👑",
  "para seu Filho Campeão⚽",
  "para quem Te Acolheu⚓",
  "para um Grande Amigo🤝",
  "para sua Vó Querida👵",
  "para seu Vô Exemplo👴",
  "para o Pet da Família🐾",
  "sobre Dias de Luta💪",
  "sobre Dias de Glória🏆",
  "para sua Irmã Parceira👯‍♀️"
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onStart }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);
  
  // Otimização TBT: Adia o início de tarefas pesadas (animação de texto e carregamento de vídeo)
  // para permitir que a hidratação do React ocorra sem bloqueios.
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Atrasa o início da lógica interativa em 1.5s
    // Isso tira a carga da CPU durante o First Input Delay critical window
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const handleType = () => {
      const i = loopNum % ROTATING_TEXTS.length;
      const fullText = ROTATING_TEXTS[i];
      
      const currentChars = [...text];
      const fullChars = [...fullText];

      if (isDeleting) {
        if (text === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(50);
        } else {
          currentChars.pop();
          setText(currentChars.join(''));
          setTypingSpeed(40);
        }
      } else {
        if (text === fullText) {
          setIsDeleting(true);
          setTypingSpeed(2000);
        } else {
          if (currentChars.length < fullChars.length) {
            const nextChar = fullChars[currentChars.length];
            setText(text + nextChar);
            setTypingSpeed(60);
          }
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, isReady]);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-24 md:pb-32">
       {/* Background Elements */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-accent/20 via-transparent to-transparent -z-10 opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 text-center">
        
        <h1 className="flex flex-col items-center justify-center font-serif font-bold leading-tight mb-8 text-center">
          {/* Line 1 */}
          <span className="block text-3xl sm:text-3xl md:text-5xl text-[#B08D26] mb-1 md:mb-2 tracking-wide">
            Eternize Sua História em
          </span>
          
          {/* Line 2 */}
          <span className="block text-3xl sm:text-5xl md:text-7xl text-brand-secondary mb-1 md:mb-4">
            Uma Canção Inesquecível
          </span>

          {/* Line 3 - Optimized to not shift layout when empty */}
          <span className="text-3xl sm:text-4xl md:text-6xl text-brand-primary italic relative h-[1.4em] w-full flex items-center justify-center min-h-[60px]">
            <span className="relative inline-block whitespace-nowrap">
               {text}
               {/* Cursor só aparece quando pronto */}
               {isReady && <span className="ml-1 border-r-4 border-brand-primary animate-pulse h-[0.8em] inline-block align-middle rounded-full"></span>}
            </span>
          </span>
        </h1>

        <div className="relative max-w-3xl mx-auto px-0 md:px-2 mb-10 group cursor-pointer" onClick={onStart}>
          <div className="absolute inset-0 bg-brand-accent/40 blur-[40px] rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-700"></div>
          {/* Polaroid Effect on Video */}
          <div className="relative p-2 bg-white shadow-premium rotate-1 group-hover:rotate-0 transition-all duration-500 rounded-lg">
             <div className="relative overflow-hidden aspect-video bg-black rounded-sm border border-gray-200">
               {/* Defer loading of video source to save bandwidth and CPU on init */}
               {isReady ? (
                 <video 
                   src="https://www.musiclovely.com/assets/musiclovaly-BsfByIqv.mp4" 
                   className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                   autoPlay
                   loop
                   muted
                   playsInline
                   preload="metadata"
                 />
               ) : (
                 // Placeholder leve enquanto o vídeo não carrega
                 <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                   <Music className="text-white/20 w-12 h-12" />
                 </div>
               )}
             </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-3 bg-brand-surface border border-brand-accent/30 rounded-full px-5 py-2 mb-8 shadow-sm">
          <div className="flex -space-x-1.5">
               <Star className="w-4 h-4 text-brand-accent fill-brand-accent" />
               <Star className="w-4 h-4 text-brand-accent fill-brand-accent" />
               <Star className="w-4 h-4 text-brand-accent fill-brand-accent" />
               <Star className="w-4 h-4 text-brand-accent fill-brand-accent" />
               <Star className="w-4 h-4 text-brand-accent fill-brand-accent" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-secondary">Mais de 1.000 clientes felizes</span>
        </div>

        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed px-4 font-medium">
          Transforme sua história em uma música profissional. O presente mais emocionante e inesquecível que você pode dar.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4">
          <Button onClick={onStart} className="w-full sm:w-auto text-base md:text-lg py-4 px-12 shadow-xl hover:-translate-y-1">
            <Music className="mr-2 w-5 h-5" strokeWidth={2} />
            Criar Minha Música Agora
          </Button>
        </div>
      </div>
    </section>
  );
};