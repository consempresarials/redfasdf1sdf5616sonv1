import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  title: string;
  artist?: string;
  coverImage?: string;
  durationStr: string;
  audioSrc?: string; // Novo prop para o link do áudio real
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ 
  title, 
  artist = "Eternisom", 
  coverImage, 
  durationStr,
  audioSrc
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Refs para controle do áudio real e animação simulada
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const requestRef = useRef<number>(0);

  const togglePlay = () => {
    if (audioSrc && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      // Fallback para simulação se não houver áudio
      setIsPlaying(!isPlaying);
    }
  };

  // Efeito para Áudio Real
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !audioSrc) return;

    const handleTimeUpdate = () => {
      if (audio.duration) {
        const currentProgress = (audio.currentTime / audio.duration) * 100;
        setProgress(currentProgress);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audioSrc]);

  // Efeito para Simulação (apenas se não houver áudio real)
  useEffect(() => {
    if (audioSrc) return; // Se tem áudio real, não usa simulação

    if (isPlaying) {
      const animate = () => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.5; // incremento lento
        });
        requestRef.current = requestAnimationFrame(animate);
      };
      requestRef.current = requestAnimationFrame(animate);
    } else {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying, audioSrc]);

  return (
    <div className="bg-brand-surface rounded-xl p-3 md:p-5 shadow-premium border border-brand-accent/30 max-w-md w-full mx-auto transform transition-transform hover:scale-[1.01]">
      {audioSrc && <audio ref={audioRef} src={audioSrc} preload="none" />}
      
      <div className="flex items-center gap-3 md:gap-5">
        {/* Capa */}
        <div className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shadow-gold border border-brand-secondary/10 shrink-0 ${isPlaying ? 'animate-spin-slow' : ''}`}>
           {coverImage ? (
             <img 
               src={coverImage} 
               alt="Album Art" 
               className="w-full h-full object-cover" 
               loading="lazy" 
               decoding="async"
               width="64"
               height="64"
             />
           ) : (
             <div className="w-full h-full bg-brand-secondary flex items-center justify-center text-brand-accent">
               <span className="text-xs">♫</span>
             </div>
           )}
           <div className="absolute inset-0 bg-black/5 rounded-full ring-1 ring-inset ring-black/10"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 bg-brand-surface rounded-full border border-gray-200"></div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-serif font-bold text-brand-secondary truncate text-sm md:text-lg tracking-tight">{title}</h3>
          <p className="text-xs md:text-sm text-gray-500 truncate font-medium">{artist}</p>
        </div>

        <button 
          onClick={togglePlay}
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-brand-primary text-white shadow-lg hover:bg-[#A64500] transition-colors focus:outline-none shrink-0 border border-brand-primary"
        >
          {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
        </button>
      </div>

      <div className="mt-4 flex items-center gap-2 md:gap-3 text-[10px] md:text-xs text-brand-secondary/60 font-bold tracking-wide">
        <span>{isPlaying && audioRef.current ? formatTime(audioRef.current.currentTime) : "0:00"}</span>
        <div className="flex-1 h-1 md:h-1.5 bg-brand-secondary/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-brand-accent rounded-full transition-all duration-100 relative" 
            style={{ width: `${progress}%` }}
          >
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-accent rounded-full shadow-sm opacity-0 md:opacity-100"></div>
          </div>
        </div>
        <span>{durationStr}</span>
      </div>
    </div>
  );
};

// Helper simples para formatar tempo
function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}