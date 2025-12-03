import React, { useState } from 'react';
import { SongRequestData } from '../../types';
import { Button } from '../ui/Button';
import { Check, ShieldCheck, Clock, Gift, Music } from 'lucide-react';

interface CheckoutPageProps {
  data: SongRequestData;
  onBack: () => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ data, onBack }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      alert("Redirecionando para o gateway de pagamento (Pix/Cartão)...");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-brand-light py-8 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-secondary mb-2">
            Quase Lá!
          </h1>
          <p className="text-sm text-gray-600 font-medium">Finalize o pedido para <span className="font-bold text-brand-secondary border-b border-brand-accent">{data.recipientName}</span>.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Form & Summary */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Contact Info Card */}
            <div className="bg-brand-surface rounded-lg p-6 shadow-premium border border-brand-accent/20">
              <div className="flex items-center gap-3 mb-6 border-b border-brand-secondary/5 pb-4">
                 <div className="bg-brand-secondary/10 p-2 rounded-full text-brand-secondary">
                   <ShieldCheck size={20} strokeWidth={1.5} />
                 </div>
                 <h2 className="text-lg font-bold text-brand-secondary">Onde enviar a música?</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-brand-secondary mb-2 uppercase tracking-wide">Seu E-mail</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemplo@email.com"
                    className="w-full p-3 rounded-md border border-gray-300 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none text-sm bg-brand-light"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-secondary mb-2 uppercase tracking-wide">WhatsApp (Opcional)</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm font-medium">
                      +55
                    </span>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="flex-1 p-3 rounded-r-md border border-gray-300 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none text-sm bg-brand-light"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Plan Selection */}
            <div className="bg-brand-surface rounded-lg p-6 shadow-premium border-2 border-brand-accent relative overflow-hidden">
               {/* Background Texture for Card */}
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

               <div className="absolute top-0 right-0 bg-brand-accent text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg tracking-widest uppercase shadow-sm z-10">
                 Mais Vendido
               </div>
               
               <div className="flex justify-between items-start mb-6 relative z-10">
                 <div>
                   <h3 className="text-xl font-serif font-bold text-brand-secondary">Plano Expresso</h3>
                   <div className="flex items-center gap-1.5 text-xs text-brand-primary mt-1">
                     <Clock size={14} />
                     <span className="font-bold">Entrega em 48 horas ⚡</span>
                   </div>
                 </div>
                 <div className="text-right">
                   <div className="text-gray-400 text-xs line-through font-medium">R$ 158,00</div>
                   <div className="text-3xl font-serif font-bold text-brand-secondary">R$ 47,90</div>
                 </div>
               </div>

               <div className="space-y-3 mb-6 text-sm relative z-10">
                 <div className="flex items-center gap-3 text-gray-700">
                   <div className="bg-brand-green/10 p-0.5 rounded-full"><Check className="text-brand-green" size={14} strokeWidth={3} /></div>
                   <span className="font-medium">MP3 Alta Qualidade + Capa</span>
                 </div>
                 <div className="flex items-center gap-3 text-gray-700">
                   <div className="bg-brand-green/10 p-0.5 rounded-full"><Check className="text-brand-green" size={14} strokeWidth={3} /></div>
                   <span className="font-medium">Letra Completa em PDF</span>
                 </div>
               </div>

               <div className="bg-brand-accent/10 rounded-md p-3 flex items-center gap-3 text-brand-secondary text-xs font-bold border border-brand-accent/20 relative z-10">
                 <Gift size={18} className="shrink-0 text-brand-accent" />
                 <span>Bônus: Leve 2 versões da música pelo preço de 1!</span>
               </div>
            </div>

          </div>

          {/* Right Column: Order Review */}
          <div className="bg-brand-surface rounded-lg p-6 shadow-premium border border-brand-accent/20 lg:sticky lg:top-8">
            <h3 className="text-base font-bold text-brand-secondary mb-4 pb-4 border-b border-brand-secondary/10 uppercase tracking-wide">Resumo do Pedido</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 font-medium">Para:</span>
                <span className="font-bold text-brand-secondary truncate max-w-[150px]">{data.recipientName}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 font-medium">Estilo:</span>
                <span className="font-bold text-brand-secondary">{data.style}</span>
              </div>
              <div className="flex justify-between text-base pt-4 border-t border-brand-secondary/10">
                <span className="text-brand-secondary font-bold">Total:</span>
                <span className="font-serif font-bold text-2xl text-brand-primary">R$ 47,90</span>
              </div>
            </div>

            <Button onClick={handlePayment} isLoading={loading} fullWidth className="mb-4 py-4 text-base shadow-lg">
              <Music className="mr-2 w-4 h-4" />
              Pagar e Receber
            </Button>

            <div className="flex flex-col items-center gap-2 text-[10px] text-gray-400 text-center font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={12} className="text-green-600" />
                Site Blindado e 100% Seguro
              </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg" alt="Pix" className="h-5 mt-1 opacity-60 grayscale hover:grayscale-0 transition-all" />
            </div>

            <button onClick={onBack} className="w-full mt-4 text-xs text-brand-secondary/60 hover:text-brand-primary underline font-medium">
              Voltar e editar detalhes
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};