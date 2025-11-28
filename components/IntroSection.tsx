import React from 'react';

export const IntroSection = () => {
    return (
        <section className="relative w-full min-h-[700px] flex items-end md:items-center overflow-hidden bg-[#EFEBE4]">

            {/* CAMADA 1: Imagem de Fundo */}
            <div className="absolute inset-0 z-0 md:block">
                <img
                    src="/2.png"
                    alt="Artista desenhando"
                    // Mobile: object-center (foca no meio). Desktop: object-[25%_center] (foca na esquerda)
                    className="w-full h-full object-cover object-center md:object-[25%_center]"
                />
            </div>

            <div className="absolute inset-0 z-0 md:hidden">
                <img
                    src="/11.png"
                    alt="Artista desenhando"
                    // Mobile: object-center (foca no meio). Desktop: object-[25%_center] (foca na esquerda)
                    className="w-full h- object-cover object-center md:object-[25%_center]"
                />
            </div>

            {/* CAMADA 2: Degradês (Diferentes para Mobile e Desktop) */}

            <div className="absolute inset-0 z-0 md:hidden">
                <img
                    src="/12.png"
                    alt="Artista desenhando"
                    // Mobile: object-center (foca no meio). Desktop: object-[25%_center] (foca na esquerda)
                    className="w-full h- object-cover object-center md:object-[25%_center]"
                />
            </div>

            {/* MOBILE: Degradê de Baixo para Cima (Branco embaixo -> Transparente em cima) */}
            <div className="absolute inset-0 z-10 bg-linear-to-t from-[#FFFFFF] via-[#F5F1EB] to-transparent md:hidden top-[10%]"></div>

            {/* DESKTOP: Degradê da Esquerda para Direita (Transparente na foto -> Bege Sólido no texto) */}
            <div className="hidden md:block absolute inset-0 z-10 bg-linear-to-r from-transparent via-[#EFEBE4]/70 md:via-[#EFEBE4] to-[#EFEBE4] via-40% to-60%"></div>


            {/* CAMADA 3: Conteúdo */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pb-20 md:pb-0">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">

                    {/* Lado Esquerdo Vazio (Desktop apenas) */}
                    <div className="hidden md:block"></div>

                    {/* Lado Direito: Texto */}
                    {/* Mobile: Centralizado (text-center). Desktop: Alinhado à esquerda com flex-row */}
                    <div className="flex flex-col md:flex-row md:pl-10 pt-10 md:pt-0 text-center md:text-left">

                        {/* A Linha Vertical (Somente Desktop) */}
                        <div className="hidden md:block w-[3px] bg-[#384E40] mr-10 shrink-0 self-stretch rounded-full opacity-90 my-2"></div>

                        {/* O Texto */}
                        <div className="flex flex-col justify-end md:justify-center">
                            <h2 className="font-serif text-4xl md:text-6xl text-[#1c1c1c] md:text-[#2c2c2c] mb-6 md:mb-8 uppercase leading-tight tracking-widest text-start pb-5">
                                Fundamentos do <br />
                                <span className="block mt-2">Desenho</span>
                            </h2>

                            <p className="text-lg md:text-xl text-[#1c1c1c] md:text-[#2c2c2c] mb-8 md:mb-10 font-normal px-4 md:px-0">
                                A <strong className="font-bold">beleza</strong> do desenho começa nos <strong className="font-bold">fundamentos</strong>
                            </p>

                            <div className="space-y-6 text-[#333] md:text-[#2c2c2c] text-sm md:text-base leading-relaxed font-light px-4 md:px-0">
                                <p>
                                    Aprenda a segurar o lápis, organizar proporções e transformar formas simples em desenhos sólidos.
                                </p>

                                <div className="pt-2 md:pt-4">
                                    <p className="font-bold text-black md:font-medium mb-1">
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