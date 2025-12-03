import React from 'react';
import { AudioPlayer } from '../ui/AudioPlayer';

const DEMO_SONGS = [
  {
    id: 1,
    title: "Juliana Meu Amor",
    artist: "Romântico • Casamento",
    durationStr: "3:42",
    coverImage: "https://lh3.googleusercontent.com/rd-gg-dl/ABS2GSn6g7oGXHf64cmKYmpNuOdUOm3X-Lx7PyhHpY9dDiNuPIImAw39PnyUhp8OmRJ357TmrWvV9svsZgrotRfJuU8Ww2ssEsvEm0AZEFkTQtcsMLv9X4qMj1l-NIGQiJ02Xv3eR39O81zdtqjuf5PFo-HZYk3NVDvGkHK4l-WxJQ2dp73ABKc6swGsXDeqil0_LzyQLRhYA25R5Mkh4iaokeZP_yJkdn60SKIW-MPPi10y8VxjdxfeTjK_msdz_WHsKzxO1CWeLDALDdrc8BWpG_1ISVV_U816hwPcu3u1_3zS9E9SUqLg8VxUi5oZw-CEd4guhfmUvdOY5Mb1Ri_uoOrjcjxZ141R-F8cCks0HxG2y3rj2xIfssPkhjs6YRQMyxv7QT86wYSHNTbfWNGbrVI6XjcyMWHgHWebPiUxxDcU9swA94Hr0GNxsb1fR8Yq5dq-MJIG2YfnOn-RgnK3ENvN9okuDRkv3wPZAm77FoSIbTITqsabRxUkh6Tp3zK3cfbkjYyXcSiLchSBzscv__pjnr9A0G3kiJyZAYZAZg2r366oOqFalZHgcWfJkSDd2OPd4ivzZdMcbUgU5kJxMHejmz40w5fqJS53dvgsnskWZdJBi3SzFXt03v1ZiiTSOMJLcjd-z7BWSn7qmeIKqxDH7aJwoFX-uQJLNECZbSHkqsNgXiR3VZ6cKinO00Mm-3I1a1P88lTz8Iqz5KwDmu1jfGoIwm4-hIflnitGLDlyLwMIvM2JPrNubcFe0_ILSMe9pSVtQXjQ9pn6e9OTuY0QYcsCdezBS9xPzsG67MBKyM4WZA7W-qYjevYkfjGIJzph96np4dksCsqALz4UxEesGnl0oiH0rykEEIRTyjh6HM9EpEfzISrK609LRcQXlTHz5Ty59FBqYXWNndQn8B41XDzSUVcFnQs1ZYMdoulAfyXlnLUOEQs5k7fcmUYyRpu_OK3vGW6HuLLAxMFRLdfQUXh6erDt4_JVM8PY88-LGe6eRXmebrMSG-F6okMmeBVTXuqKbDUYsv2V_9Gn34N3y1vYWdccHFZ9OUD3VXzTc4tMFTRYEnezdhr2MrZ2IloOzZyt2vGLHDSx7kUN2iICpRUFEof1ar5n35rEHNYwxKh2QlrffYmEUxySzcSo1iNpWZfM7Y2LTaXXlWiJZOLJUFKsVL1rabnrSUMAeVo89F9Tb0Mq=s1024-rj",
    audioSrc: "" // Coloque aqui o link do MP3: "https://meusite.com/audio1.mp3"
  },
  {
    id: 2,
    title: "10 Anos de Casados",
    artist: "MPB • Bodas",
    durationStr: "2:55",
    coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=60",
    audioSrc: "" // Coloque aqui o link do MP3
  },
  {
    id: 3,
    title: "Parabéns Pedro",
    artist: "Sertanejo • Aniversário",
    durationStr: "3:15",
    coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60",
    audioSrc: "" // Coloque aqui o link do MP3
  }
];

export const ExamplesSection: React.FC = () => {
  return (
    <section id="exemplos" className="py-16 md:py-24 bg-brand-surface relative border-t border-brand-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-md bg-brand-accent/20 text-brand-secondary text-[11px] font-bold tracking-widest uppercase mb-3 border border-brand-accent/30">Exemplos Reais</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-secondary mb-4">Ouça a Emoção</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">Cada música é única, criada exclusivamente para a sua história com vozes profissionais.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-8">
            {DEMO_SONGS.map((song) => (
              <AudioPlayer 
                key={song.id}
                title={song.title}
                artist={song.artist}
                durationStr={song.durationStr}
                coverImage={song.coverImage}
                audioSrc={song.audioSrc}
              />
            ))}
          </div>
          
          <div className="hidden md:grid grid-cols-2 gap-6 relative p-4">
            <div className="absolute inset-0 bg-brand-accent/10 rounded-full blur-3xl -z-10 transform translate-x-10"></div>
            {/* Polaroid Images */}
            <div className="transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500 z-10">
              <div className="bg-white p-2 pb-8 shadow-premium rounded-sm">
                 <img 
                  src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&auto=format&fit=crop&q=60" 
                  className="w-full aspect-square object-cover filter sepia-[0.15] contrast-[1.05]" 
                  alt="Couple" 
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="transform rotate-[2deg] translate-y-8 hover:rotate-0 transition-transform duration-500 z-0">
              <div className="bg-white p-2 pb-8 shadow-premium rounded-sm">
                 <img 
                  src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=500&auto=format&fit=crop&q=60" 
                  className="w-full aspect-square object-cover filter sepia-[0.15] contrast-[1.05]" 
                  alt="Family" 
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="transform rotate-[4deg] hover:rotate-0 transition-transform duration-500 z-10 mt-[-20px]">
              <div className="bg-white p-2 pb-8 shadow-premium rounded-sm">
                 <img 
                  src="https://images.unsplash.com/photo-1606092195730-5d7b9af1ef4d?w=500&auto=format&fit=crop&q=60" 
                  className="w-full aspect-square object-cover filter sepia-[0.15] contrast-[1.05]" 
                  alt="Celebration" 
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="transform rotate-[-2deg] translate-y-6 hover:rotate-0 transition-transform duration-500 z-0">
              <div className="bg-white p-2 pb-8 shadow-premium rounded-sm">
                 <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=500&auto=format&fit=crop&q=60" 
                  className="w-full aspect-square object-cover filter sepia-[0.15] contrast-[1.05]" 
                  alt="Wedding" 
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};