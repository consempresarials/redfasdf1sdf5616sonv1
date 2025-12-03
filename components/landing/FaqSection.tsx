import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQS = [
  {
    question: "Quais estilos musicais vocês produzem?",
    answer: "Trabalhamos com diversos estilos: Pop, Sertanejo, MPB, Rock, Gospel, Reggae, Rap, Jazz, entre outros. Você escolhe o estilo que mais combina com a pessoa homenageada."
  },
  {
    question: "Como funcionam os prazos?",
    answer: "Nosso prazo padrão é de 48 horas após o preenchimento do formulário. A entrega é feita diretamente no seu e-mail e WhatsApp."
  },
  {
    question: "O que recebo ao final?",
    answer: "Você recebe a música completa em MP3 de alta qualidade, a letra da música em PDF e uma capa personalizada para sua música."
  },
  {
    question: "Posso usar a música comercialmente?",
    answer: "As músicas do plano pessoal são para uso privado (presentes, homenagens). Para uso comercial (Jingles, anúncios), entre em contato para adquirir a licença de uso comercial."
  }
];

export const FaqSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-brand-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-12">
           <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-secondary mb-4">Perguntas Frequentes</h2>
           <p className="text-gray-500">Tudo que você precisa saber sobre criar sua música personalizada</p>
         </div>

         <div className="space-y-4">
           {FAQS.map((faq, index) => (
             <div key={index} className="bg-brand-light rounded-lg border border-brand-accent/20 hover:border-brand-accent/50 transition-colors overflow-hidden">
               <button 
                 onClick={() => toggleFaq(index)}
                 className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
               >
                 <span className="font-bold text-brand-secondary text-sm md:text-base">{faq.question}</span>
                 {openFaqIndex === index ? (
                   <ChevronUp className="text-brand-primary w-5 h-5 flex-shrink-0" />
                 ) : (
                   <ChevronDown className="text-brand-secondary/50 w-5 h-5 flex-shrink-0" />
                 )}
               </button>
               <div 
                 className={`px-6 text-sm md:text-base text-gray-600 transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
               >
                 {faq.answer}
               </div>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
};