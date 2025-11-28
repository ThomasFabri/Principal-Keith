import React from 'react';

const faqList = [
  {
    question: "Preciso já saber desenhar?",
    answer: "Não. O Curso foi feito justamente para quem está começando ou para quem já desenha e quer melhorar. Você vai aprender tudo passo a passo, de forma simples e prática."
  },
  {
    question: "Preciso de materiais caros?",
    answer: "De jeito nenhum. Tudo o que você precisa é de lápis grafite, papel e borracha. Ferramentas simples, que qualquer pessoa pode ter em casa."
  },
  {
    question: "É ao vivo ou gravado?",
    answer: "As aulas já estão gravadas, para você assistir quando quiser. Assim você pode pausar, voltar e rever cada etapa no seu próprio ritmo."
  },
  {
    question: "E se eu não acompanhar o ritmo?",
    answer: "Fique tranquilo(a). Você terá acesso por 1 ano às aulas e pode rever quantas vezes quiser. O importante é praticar no seu tempo e ver sua evolução."
  },
  {
    question: "Quanto tempo preciso por dia?",
    answer: "O Curso foi feito justamente para quem está começando ou para quem já desenha e quer melhorar. Em média, 30 a 40 minutos já são suficientes para assistir à aula e praticar. Mas você pode ajustar conforme sua rotina."
  },
  {
    question: "Recebo certificado?",
    answer: "Sim. Ao concluir o Curso você recebe um certificado digital para marcar sua conquista."
  }
];

export const FAQMobile = () => {
  return (
    // block md:hidden garante que só apareça em telas pequenas
    <section className="block md:hidden w-full bg-black text-white py-20 px-8">
      
      {/* Cabeçalho Estilizado */}
      <div className="flex items-center justify-center gap-4 mb-20">
        {/* Linha Vertical */}
        <div className="w-[1px] h-14 bg-white/80"></div>
        
        {/* Texto do Título */}
        <div className="text-left">
          <h2 className="font-serif text-5xl leading-none tracking-wide text-white">
            FAQ
          </h2>
          <p className="font-serif italic text-[10px] text-gray-400 tracking-wider mt-1">
            Frequently Asked Questions
          </p>
        </div>
      </div>

      {/* Lista de Perguntas */}
      <div className="space-y-16">
        {faqList.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-6">
            <h3 className="font-serif text-xl uppercase tracking-widest text-[#E0E0E0] max-w-xs leading-snug">
              {item.question}
            </h3>
            <p className="font-sans text-sm text-[#A0A0A0] font-light leading-relaxed max-w-xs">
              {item.answer}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};