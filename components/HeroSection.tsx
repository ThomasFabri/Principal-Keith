import React from 'react';

export const HeroSection = () => {
  return (
    <section className="w-full bg-[#3F5A49] text-white overflow-hidden">
      {/* Container Principal */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-16 md:pt-10 md:pb-20">
        
        {/* GRUPO SUPERIOR: Título e Imagem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center mb-8 md:mb-10">
          
          {/* Lado Esquerdo - Título */}
          {/* Mobile: text-center. Desktop: text-left + margem negativa superior */}
          <div className="flex flex-col md:-mt-16 relative z-10 text-center md:text-left">
            <h1 className="font-serif leading-none text-[#F4F4F4] pt-4 md:pt-10">
              
              {/* FUNDAMENTOS */}
              <span className="block text-3xl md:text-5xl lg:text-5xl uppercase font-thin tracking-[0.15em] md:tracking-[0.3em] ml-1">
                Fundamentos
              </span>
              
              {/* DO */}
              <span className="block text-2xl md:text-5xl uppercase font-thin my-2 md:my-6 tracking-widest ml-1">
                do
              </span>
              
              {/* DESENHO */}
              <span className="block text-5xl md:text-7xl lg:text-[110px] uppercase font-light pt-2 md:pt-10 tracking-wide">
                Desenho
              </span>
            </h1>
          </div>

          {/* Lado Direito - Imagem */}
          <div className="relative w-full">
            <div className="w-full aspect-[4/3] bg-neutral-800 shadow-2xl relative">
              <img 
                src="/1.png" 
                alt="Mão desenhando formas geométricas" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* LINHA DIVISÓRIA (Apenas Desktop) */}
        <div className="hidden md:block w-full h-[1px] bg-white/60 mb-10"></div>

        {/* GRUPO INFERIOR: Botão e Texto Descritivo */}
        {/* Mobile: Flexbox para inverter a ordem (Texto primeiro, Botão depois). Desktop: Grid */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 items-start">
          
          {/* BOTÃO */}
          {/* Mobile: Ordem 2 (Fica embaixo). Largura 100% (w-full). */}
          <div className="order-2 md:order-1 flex justify-center md:justify-start w-full md:w-auto pt-2">
            <a href="https://pay.hotmart.com/H101872044L?off=hepk5krt" target='blank'>
             <button className="w-full md:w-auto bg-[#D9D9D9] hover:bg-white text-[#384E40] text-xs font-bold py-4 px-10 uppercase tracking-[0.2em] transition-colors duration-300 shadow-md border border-transparent hover:border-[#384E40]/20">
              Inscreva- se Agora
            </button>
            </a>
          </div>

          {/* TEXTO DESCRITIVO */}
          {/* Mobile: Ordem 1 (Fica em cima do botão). Borda na esquerda. */}
          <div className="order-1 md:order-2 flex flex-col gap-4 max-w-lg md:ml-auto md:mr-0 text-left pl-6 border-l-2 border-white md:border-l-0 md:pl-0 md:text-left">
            <h3 className="font-bold text-lg md:text-xl text-white tracking-wide">
              Domine o essencial e desenhe com intenção
            </h3>
            <p className="text-sm md:text-base text-white/80 leading-relaxed font-extralight tracking-wide">
              Desenhar não é só fazer linhas; é entender forma, luz e ritmo para que cada traço funcione de verdade.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};