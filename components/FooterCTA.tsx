import React from 'react';

export const FooterCTA = () => {
  return (
    // AJUSTE 1: Aumentei min-h de 550px para 650px (ou 700px) para dar mais altura vertical para a imagem
    <section className="relative w-full bg-[#E8E2D2] min-h-[650px] flex items-center overflow-hidden">
      
      {/* Container da Imagem */}
      <div className="absolute top-0 right-0 w-full md:w-[50%] h-full z-0">
         <img 
            src="/10.png" 
            alt="Keith Nunes Arte"
            // AJUSTE 2: Removi 'md:object-center' e deixei apenas 'object-top'.
            // Isso força a imagem a começar sempre do topo, garantindo que a cabeça não seja cortada.
            className="w-full h-full object-cover object-top"
         />
         
         {/* Overlay apenas para mobile para o texto ficar legível */}
         <div className="absolute inset-0 bg-[#E8E2D2]/80 md:hidden"></div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 md:grid-cols-2">
        
        <div className="flex flex-col justify-center items-center text-center py-20 md:py-0">
          
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] uppercase tracking-widest whitespace-nowrap mb-8">
            Desenhar não é dom, é método.
          </h2>
          
          <p className="text-[#333] font-bold text-lg md:text-xl leading-relaxed max-w-lg text-center mb-10">
            Viva essa experiência guiada e veja seu olhar e seu traço se transformarem.
          </p>
          
          <button className="bg-[#4B6153] hover:bg-[#384E40] text-white py-4 px-10 uppercase font-bold text-sm tracking-[0.15em] shadow-lg transition-transform hover:scale-105 border border-[#384E40]">
            Quero aprender com Keith Nunes
          </button>
        </div>

        <div className="hidden md:block"></div>

      </div>
    </section>
  );
};