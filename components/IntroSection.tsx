import React from 'react';

export const IntroSection = () => {
  return (
    <section className="relative w-full min-h-[700px] flex items-center overflow-hidden bg-[#EFEBE4]">
      
      {/* CAMADA 1: Imagem de Fundo */}
      {/* Ela ocupa tudo (inset-0), mas com object-left para focar no artista */}
      <div className="absolute inset-0 z-0">
         <img 
           src="/2.png" 
           alt="Artista desenhando" 
           className="w-full h-full object-cover object-left md:object-[25%_center]" 
         />
      </div>
      
      <div className="absolute inset-0 z-10 bg-linear-to-r from-transparent via-[#EFEBE4]/70 via-10% md:via-[#EFEBE4]/20 to-[#EFEBE4] md:via-40% md:to-60%"></div>

      {/* CAMADA 3: Conteúdo (Texto e Linha) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          
          {/* Lado Esquerdo Vazio (Para mostrar a foto) */}
          <div className="hidden md:block"></div>

          {/* Lado Direito: Linha + Texto */}
          <div className="flex flex-row md:pl-10 py-10 md:py-0">
            
            {/* A Linha Vertical Verde */}
            {/* O h-auto faz ela crescer conforme o tamanho do texto ao lado */}
            <div className="w-[3px] bg-[#FFFFFF] md:bg-[#384E40] mr-8 md:mr-10 shrink-0 self-stretch rounded-full opacity-90 my-2"></div>

            {/* O Texto (Sem Card) */}
            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-4xl md:text-6xl text-[#1c1c1c] md:text-[#2c2c2c] mb-8 uppercase leading-tight tracking-wide">
                Fundamentos do <br/>
                <span className="block mt-2">Desenho</span>
              </h2>
              
              <p className="text-lg md:text-xl text-[#1c1c1c] md:text-[#2c2c2c] mb-10 font-normal">
                A <strong className="font-bold">beleza</strong> do desenho começa nos <strong className="font-bold">fundamentos</strong>
              </p>
              
              <div className="space-y-6 text-[#1c1c1c] md:text-[#2c2c2c] text-sm md:text-base leading-relaxed font-light">
                <p>
                  Aprenda a segurar o lápis, organizar proporções e transformar formas simples em desenhos sólidos.
                </p>
                
                <div className="pt-4">
                    <p className="font-medium text-[#1c1c1c] mb-1">
                        No fundamentos de desenho te levo zero até o traço seguro,
                    </p>
                    <p>
                        você vai construir a confiança que abre caminho para qualquer estilo ou técnica.
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};