import React from 'react';

export const FooterCTA = () => {
    return (
        <section className="relative w-full bg-[#E8E2D2] md:min-h-[650px] flex items-center overflow-hidden">

            {/* 
        CONTAINER DA IMAGEM 
        Mobile: Ocupa a tela inteira (absolute inset-0).
        Desktop: Ocupa apenas a metade direita (md:w-[50%] md:right-0).
      */}
            <div className="absolute inset-0 md:left-auto md:right-0 w-full md:w-[50%] h-full z-0">
                <img
                    src="/10.png"
                    alt="Keith Nunes Arte"
                    // object-top garante que o rosto apareça
                    className="w-full h-full object-cover object-top"
                />

                {/* 
           OVERLAY MOBILE 
           Camada bege com transparência para o texto ficar legível sobre a foto.
           Aumentei a opacidade para /85 para bater com o contraste do print.
         */}
                <div className="absolute inset-0 bg-[#E8E2D2]/60 md:hidden"></div>
            </div>

            {/* CONTEÚDO */}
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 md:grid-cols-2">

                {/* Coluna Texto (Esquerda no Desktop, Centro no Mobile) */}
                <div className="flex flex-col justify-center items-center text-center py-10 md:py-0">

                    <h2 className="font-serif text-2xl md:text-4xl text-[#1a1a1a] uppercase tracking-widest mb-8 md:whitespace-nowrap">
                        Desenhar não é dom, <br className="block md:hidden" /> é método.
                    </h2>

                    <p className="text-[#333] font-bold text-lg md:text-xl leading-relaxed max-w-lg text-center mb-10 px-4 md:px-0">
                        Viva essa experiência guiada e veja <br className="hidden md:block" />
                        seu olhar e seu traço se transformarem.
                    </p>
                    <a href="https://pay.hotmart.com/H101872044L?off=hepk5krt" target='blank'>
                        <button className="bg-[#4B6153] hover:bg-[#384E40] text-white py-4 px-8 md:px-10 uppercase font-bold text-sm tracking-[0.15em] shadow-lg transition-transform hover:scale-105 border border-[#384E40] w-full md:w-auto max-w-xs md:max-w-none">
                            Quero aprender com Keith Nunes
                        </button>
                    </a>
                </div>

                {/* Coluna Vazia (Direita no Desktop para dar espaço à imagem) */}
                <div className="hidden md:block"></div>

            </div>
        </section>
    );
};