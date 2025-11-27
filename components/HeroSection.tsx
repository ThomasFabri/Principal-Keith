import React from 'react';

export const HeroSection = () => {
  return (
    <section className="w-full bg-[#3F5A49] text-white overflow-hidden">
      {/* Container Principal */}
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-20 md:pt-10">
        
        {/* PARTE SUPERIOR: Título e Imagem */}
        {/* Mudei items-end para items-center para ajudar no posicionamento vertical */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
          
          {/* Lado Esquerdo - Título */}
          {/* Adicionei -mt-10 md:-mt-20 para subir o texto conforme pediu */}
          <div className="flex flex-col -mt-4 md:-mt-16 relative z-10">
            <h1 className="font-serif leading-none text-[#F4F4F4] pt-10">
              
              {/* FUNDAMENTOS: 
                  - font-thin: Deixa bem fininho
                  - tracking-[0.2em] (ou mais): Estica a palavra horizontalmente para alinhar com a de baixo 
              */}
              <span className="block text-3xl md:text-5xl lg:text-5xl uppercase font-thin tracking-[0.35em] md:tracking-[0.3em] ml-1">
                Fundamentos
              </span>
              
              <span className="block text-xl md:text-5xl uppercase font-thin my-4 md:my-6 tracking-widest ml-1">
                do
              </span>
              
              {/* DESENHO: 
                  - Tamanho gigante (text-[...])
                  - tracking-wide: Espaçamento normal/leve para manter o peso 
              */}
              <span className="block text-6xl md:text-7xl lg:text-[110px] uppercase font-light pt-5 md:pt-10 tracking-wide">
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

        {/* LINHA DIVISÓRIA */}
        <div className="w-full h-[1px] bg-white/60 mb-10"></div>

        {/* PARTE INFERIOR: Botão e Texto Descritivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Lado Esquerdo - Botão */}
          <div className="flex justify-start pt-2">
             <button className="bg-[#D9D9D9] hover:bg-white text-[#384E40] text-xs font-bold py-4 px-10 uppercase tracking-[0.2em] transition-colors duration-300 shadow-md border border-transparent hover:border-[#384E40]/20">
              Inscreva-se Agora
            </button>
          </div>

          {/* Lado Direito - Texto Descritivo */}
          <div className="flex flex-col gap-4 max-w-lg md:ml-auto md:mr-0 text-right md:text-left">
            <h3 className="font-bold text-lg md:text-xl text-white tracking-wide">
              Domine o essencial e desenhe com intenção
            </h3>
            <p className="text-base text-white/80 leading-relaxed font-extralight tracking-wide">
              Desenhar não é só fazer linhas; é entender forma, luz e ritmo para que cada traço funcione de verdade.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};