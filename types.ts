export type ViewState = 'landing' | 'quiz' | 'checkout' | 'success';

export type RecipientType = 'Esposo(a)' | 'Filho(a)' | 'Pai' | 'Mãe' | 'Irmão(ã)' | 'Amigo(a)' | 'Eu mesmo(a)' | 'Outro';

export type MusicStyle = 'Romântico' | 'Sertanejo' | 'MPB' | 'Pop' | 'Rock' | 'Gospel' | 'Forró' | 'Reggae' | 'Rap/Hip-Hop' | 'Jazz';

export type VoiceType = 'Voz Feminina' | 'Voz Masculina' | 'Sem Preferência';

export interface SongRequestData {
  recipientType: RecipientType | null;
  recipientName: string;
  pronunciation?: string;
  style: MusicStyle | null;
  voice: VoiceType | null;
  qualities: string; // "O que torna essa pessoa especial?"
  memories: string; // "Compartilhe memórias"
  message: string; // "Mensagem do coração"
  customerEmail: string;
  customerPhone: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}
