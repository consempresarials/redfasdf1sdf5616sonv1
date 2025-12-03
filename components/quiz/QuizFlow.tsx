
import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Check, Lock } from 'lucide-react';
import { Button } from '../ui/Button';
import { SongRequestData, RecipientType, MusicStyle, VoiceType } from '../../types';
import { supabase } from '../../lib/supabaseClient';

interface QuizFlowProps {
  onComplete: (data: SongRequestData) => void;
  onBack: () => void; // To exit quiz
}

const TOTAL_STEPS = 5;

const RECIPIENTS: RecipientType[] = ['Esposo(a)', 'Filho(a)', 'Pai', 'Mãe', 'Irmão(ã)', 'Amigo(a)', 'Eu mesmo(a)', 'Outro'];
const STYLES: MusicStyle[] = ['Romântico', 'Sertanejo', 'MPB', 'Pop', 'Rock', 'Gospel', 'Forró', 'Reggae', 'Rap/Hip-Hop', 'Jazz'];

// Função auxiliar para gerar ID único se não existir
const getOrCreateSessionId = () => {
  let sessionId = localStorage.getItem('eternisom_session_id');
  if (!sessionId) {
    sessionId = crypto.randomUUID(); // Gera um UUID único
    localStorage.setItem('eternisom_session_id', sessionId);
  }
  return sessionId;
};

export const QuizFlow: React.FC<QuizFlowProps> = ({ onComplete, onBack }) => {
  const [step, setStep] = useState(1);
  const [sessionId, setSessionId] = useState<string>('');
  const [isSaving, setIsSaving] = useState(false);
  
  const [data, setData] = useState<SongRequestData>({
    recipientType: null,
    recipientName: '',
    style: null,
    voice: null,
    qualities: '',
    memories: '',
    message: '',
    customerEmail: '',
    customerPhone: ''
  });

  // Inicializa a sessão e carrega rascunho se existir (opcional) ou cria novo
  useEffect(() => {
    const id = getOrCreateSessionId();
    setSessionId(id);
    
    // Opcional: Aqui poderíamos buscar os dados do Supabase se o usuário voltou
    // Mas para simplificar, vamos focar em SALVAR novos dados
  }, []);

  // Função para salvar no Supabase
  const saveProgress = async (currentStep: number, currentData: SongRequestData) => {
    if (!supabase || !sessionId) return;

    try {
      setIsSaving(true);
      
      const { error } = await supabase
        .from('quiz_leads')
        .upsert({ 
          session_id: sessionId,
          step: currentStep,
          recipient_name: currentData.recipientName,
          form_data: currentData,
          updated_at: new Date().toISOString()
        }, { onConflict: 'session_id' });

      if (error) {
        console.error('Erro ao salvar progresso:', error);
      }
    } catch (err) {
      console.error('Erro de conexão:', err);
    } finally {
      setIsSaving(false);
    }
  };

  const progress = (step / TOTAL_STEPS) * 100;

  const handleNext = () => {
    // Salva o progresso atual antes de mudar de passo
    saveProgress(step, data);

    if (step < TOTAL_STEPS) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    } else {
      onComplete(data);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    } else {
      onBack();
    }
  };

  const updateData = (key: keyof SongRequestData, value: any) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  const isStepValid = () => {
    switch(step) {
      case 1: return data.recipientType && data.recipientName.length > 1;
      case 2: return data.style && data.voice;
      case 3: return data.qualities.length > 5;
      case 4: return true; 
      case 5: return data.message.length > 5;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-brand-light flex flex-col items-center py-6 px-4 md:py-10 font-sans">
      {/* Header/Progress */}
      <div className="w-full max-w-xl mb-8">
        <div className="flex justify-between text-xs font-bold text-brand-secondary mb-2 tracking-wide uppercase">
          <span>Passo {step} de {TOTAL_STEPS}</span>
          <div className="flex gap-2">
             {isSaving && <span className="text-brand-accent font-normal animate-pulse">Salvando...</span>}
             <span>{Math.round(progress)}%</span>
          </div>
        </div>
        <div className="w-full h-1 bg-brand-secondary/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-brand-accent transition-all duration-500 ease-out shadow-[0_0_10px_rgba(197,160,89,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="w-full max-w-xl bg-brand-surface rounded-sm shadow-premium p-6 md:p-10 border border-brand-accent/20 flex flex-col relative">
        {/* Paper texture overlay for the card */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-30 pointer-events-none rounded-sm"></div>
        
        <div className="relative z-10">
          {/* Step 1: Basics */}
          {step === 1 && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-secondary mb-2">Para quem é a música?</h2>
                <p className="text-sm text-gray-600">Vamos começar personalizando sua experiência.</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {RECIPIENTS.map((r) => (
                  <button
                    key={r}
                    onClick={() => updateData('recipientType', r)}
                    className={`p-3 rounded-md border text-xs md:text-sm font-semibold transition-all duration-200 ${
                      data.recipientType === r 
                      ? 'border-brand-secondary bg-brand-secondary text-white shadow-md' 
                      : 'border-gray-200 bg-brand-light text-gray-700 hover:border-brand-accent/50 hover:bg-white'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <label className="block text-sm font-bold text-brand-secondary mb-2 uppercase tracking-wide">Nome da pessoa *</label>
                <input 
                  type="text"
                  value={data.recipientName}
                  onChange={(e) => updateData('recipientName', e.target.value)}
                  onBlur={() => saveProgress(step, data)} // Salva também quando sai do campo
                  placeholder="Ex: Juliana"
                  className="w-full p-4 rounded-md border border-gray-300 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none bg-brand-light text-base text-brand-secondary placeholder-gray-400 transition-colors"
                />
                <p className="text-[10px] text-gray-500 mt-2 italic">Dica: Adicione pronúncia se necessário. Ex: (Giuliana)</p>
              </div>
            </div>
          )}

          {/* Step 2: Style */}
          {step === 2 && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-secondary mb-2">Estilo Musical</h2>
                <p className="text-sm text-gray-600">Qual ritmo a {data.recipientName} mais gosta?</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {STYLES.map((s) => (
                  <button
                    key={s}
                    onClick={() => updateData('style', s)}
                    className={`p-3 rounded-md border text-xs md:text-sm font-semibold transition-all duration-200 ${
                      data.style === s 
                      ? 'border-brand-secondary bg-brand-secondary text-white shadow-md' 
                      : 'border-gray-200 bg-brand-light text-gray-700 hover:border-brand-accent/50 hover:bg-white'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <div className="pt-6 border-t border-brand-accent/10">
                 <h3 className="text-sm font-bold text-brand-secondary mb-3 uppercase tracking-wide">Voz Preferida</h3>
                 <div className="flex gap-3">
                   {(['Voz Feminina', 'Voz Masculina', 'Sem Preferência'] as VoiceType[]).map((v) => (
                     <button
                      key={v}
                      onClick={() => updateData('voice', v)}
                      className={`flex-1 p-3 rounded-md border text-[11px] md:text-xs font-bold transition-all ${
                        data.voice === v
                        ? 'border-brand-accent bg-brand-accent text-white shadow-sm' 
                        : 'border-gray-200 bg-brand-light text-gray-600 hover:border-brand-accent/50'
                      }`}
                     >
                       {v.replace('Voz ', '')}
                     </button>
                   ))}
                 </div>
              </div>
            </div>
          )}

          {/* Step 3: Qualities */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-secondary mb-2">O que a torna especial?</h2>
                <p className="text-sm text-gray-600">Descreva qualidades, apelidos carinhosos, jeito de ser.</p>
              </div>

              <div className="bg-brand-light p-4 rounded-md border-l-4 border-brand-accent text-xs text-brand-secondary/80 italic font-serif">
                Ex: Ela é guerreira, carinhosa, a melhor mãe. Ilumina tudo onde chega.
              </div>

              <textarea
                value={data.qualities}
                onChange={(e) => updateData('qualities', e.target.value)}
                onBlur={() => saveProgress(step, data)}
                placeholder="Digite aqui..."
                className="w-full h-32 md:h-40 p-4 rounded-md border border-gray-300 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none bg-brand-light resize-none text-sm text-brand-secondary placeholder-gray-400"
              />
              <div className="text-right text-[10px] text-gray-400 font-medium">{data.qualities.length}/500</div>
            </div>
          )}

          {/* Step 4: Memories */}
          {step === 4 && (
            <div className="space-y-6 animate-fadeIn">
               <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-secondary mb-2">Memórias Juntos</h2>
                <p className="text-sm text-gray-600">Momentos importantes da história de vocês.</p>
              </div>

              <div className="bg-brand-light p-4 rounded-md border-l-4 border-brand-accent text-xs text-brand-secondary/80 italic font-serif">
                Ex: A viagem pra praia, quando nos conhecemos, o nascimento do bebê.
              </div>

              <textarea
                value={data.memories}
                onChange={(e) => updateData('memories', e.target.value)}
                onBlur={() => saveProgress(step, data)}
                placeholder="Digite suas memórias..."
                className="w-full h-32 md:h-40 p-4 rounded-md border border-gray-300 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none bg-brand-light resize-none text-sm text-brand-secondary placeholder-gray-400"
              />
               <div className="text-right text-[10px] text-gray-400 font-medium">{data.memories.length}/800</div>
            </div>
          )}

          {/* Step 5: Message */}
          {step === 5 && (
            <div className="space-y-6 animate-fadeIn">
               <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-secondary mb-2">Mensagem Final</h2>
                <p className="text-sm text-gray-600">O que a música deve dizer no encerramento?</p>
              </div>

              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent/20 via-brand-accent/40 to-brand-accent/20"></div>
                <textarea
                  value={data.message}
                  onChange={(e) => updateData('message', e.target.value)}
                  onBlur={() => saveProgress(step, data)}
                  placeholder="Ex: Eu te amo mais que tudo, você é minha vida..."
                  className="w-full h-40 md:h-52 p-6 pt-8 rounded-b-md border-x border-b border-gray-200 focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none bg-white resize-none text-lg font-serif text-brand-secondary leading-relaxed shadow-inner"
                />
              </div>
               <div className="text-right text-[10px] text-gray-400 font-medium">{data.message.length}/500</div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-auto pt-8">
            <button 
              onClick={handlePrev}
              className="px-5 py-3 rounded-lg font-bold text-sm text-gray-500 hover:bg-gray-100 transition-colors flex items-center"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <Button 
              onClick={handleNext} 
              disabled={!isStepValid()}
              fullWidth
              className="flex-1 text-base shadow-lg"
            >
              {step === TOTAL_STEPS ? 'Ver Preço' : 'Próximo'}
              {step !== TOTAL_STEPS && <ArrowRight className="ml-2 w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Trust Badge */}
      <div className="mt-8 flex items-center gap-2 text-xs text-gray-400 font-medium opacity-80">
        <Lock className="w-3 h-3" />
        <span>Suas informações são privadas.</span>
      </div>
    </div>
  );
};