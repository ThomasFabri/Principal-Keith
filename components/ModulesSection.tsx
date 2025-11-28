import React from 'react';

// Interface para as props
interface ModuleItemProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  imagePosition?: "left" | "right";
  isLast?: boolean;
  inverted?: boolean; // Estilo "Fundo Preto" (Observação)
}

const ModuleItem = ({ 
  title, 
  subtitle, 
  description, 
  imageSrc, 
  imagePosition = "left",
  inverted = false 
}: ModuleItemProps) => {
  
  const isImageRight = imagePosition === 'right';

  // Definição de cores baseada no modo
  const textColor = inverted ? "text-white" : "text-[#1a1a1a]";
  const subTextColor = inverted ? "text-gray-300" : "text-gray-800";
  const descColor = inverted ? "text-gray-400" : "text-gray-600";
  const borderColor = inverted ? "border-white" : "border-[#1a1a1a]";
  const lineColor = inverted ? "bg-white" : "bg-[#384E40]";

  return (
    // WRAPPER DO ITEM
    // Mobile Inverted: bg-black com margens negativas (-mx-6) para encostar na borda da tela.
    <div className={`
      flex flex-col md:flex-row items-stretch justify-between 
      gap-8 md:gap-0
      ${inverted 
        ? 'bg-black -mx-6 px-6 py-16 md:bg-transparent md:mx-0 md:px-0 md:py-16' 
        : 'py-12 md:py-16'
      } 
    `}>
      
      {/* 1. BLOCO DE TEXTO */}
      {/* Mobile: Ordem 1 (Texto em cima da imagem) */}
      <div className={`
        flex-1 flex flex-col justify-center 
        order-1 
        ${isImageRight ? 'md:text-right md:pr-12 md:order-1' : 'md:text-left md:pl-12 md:order-3'}
      `}>
        <div className={`
          space-y-4 
          /* Mobile: Linha vertical na esquerda */
          pl-6 border-l-[1.5px] ${borderColor} md:border-l-0 md:pl-0
        `}>
          
          {/* Título */}
          <div className={`inline-block ${isImageRight ? 'md:ml-auto' : 'md:mr-auto'}`}>
            <h3 className={`font-serif text-2xl md:text-3xl lg:text-4xl italic ${textColor}`}>
              {title}
            </h3>
            {/* Linha horizontal (Apenas Desktop) */}
            <span className={`hidden md:block h-[1px] w-full ${lineColor} mt-2 opacity-80`}></span>
          </div>

          {/* Subtítulo */}
          {subtitle && (
            <h4 className={`font-serif text-lg italic font-medium ${subTextColor}`}>
              {subtitle}
            </h4>
          )}

          {/* Descrição */}
          <p className={`${descColor} text-sm leading-relaxed max-w-md md:mx-0`}>
            {description}
          </p>
        </div>
      </div>

      {/* 2. LINHA DIVISÓRIA CENTRAL (Apenas Desktop) */}
      <div className={`hidden md:block w-[1px] ${lineColor} opacity-40 md:order-2 self-stretch mx-4`}></div>

      {/* 3. BLOCO DE IMAGEM */}
      {/* Mobile: Ordem 2 (Imagem abaixo do texto) */}
      <div className={`
        flex-1 flex items-center justify-center 
        order-2 
        ${isImageRight ? 'md:pl-12 md:order-3' : 'md:pr-12 md:order-1'}
      `}>
        
        {/* CARD DA IMAGEM */}
        {/* Se inverted: Removemos bg-white, shadow, border e padding (p-2) para a imagem ficar limpa no fundo preto */}
        <div className={`
          relative w-full aspect-square md:max-w-[350px] 
          ${inverted 
            ? 'bg-transparent' // Sem moldura
            : 'bg-white border border-gray-200 shadow-xl p-2' // Com moldura polaroid
          }
        `}>
          
          {/* Wrapper interno da imagem */}
          {/* Se inverted: removemos o bg-neutral-100 para não aparecer fundo cinza se a imagem demorar a carregar */}
          <div className={`w-full h-full overflow-hidden relative ${inverted ? '' : 'bg-neutral-100'}`}>
            <img 
              src={imageSrc} 
              alt={title}
              className="w-full h-full object-cover" 
            />
            
            {/* Overlay sutil apenas no inverted desktop se desejar, mas no mobile fica limpo */}
            {inverted && <div className="absolute inset-0 bg-black/10 pointer-events-none md:hidden"></div>}
          </div>
        </div>
      </div>

    </div>
  );
};

export const ModulesSection = () => {
  return (
    <section className="w-full bg-white md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <h2 className="text-center font-serif text-3xl md:text-5xl mb-16 md:mb-24 text-[#333] tracking-wide uppercase leading-snug">
          Etapas da <br className="md:hidden" /> sua evolução
        </h2>

        {/* 1. Introdução */}
        <ModuleItem 
          title="Ferramentas e Materiais"
          description="Você vai finalmente dominar os instrumentos de desenho e descobrir que o segredo não é o material, mas como você o usa. O que antes era insegurança vira confiança."
          imageSrc="/3.png"
          imagePosition="right" 
        />

        {/* 2. Linha e Formato */}
        <ModuleItem 
          title="Linha e Formato"
          subtitle=""
          description="Aqui você descobre que a linha é mais do que contorno, ela é expressão, movimento e estrutura. Com o tempo, seus traços deixam de ser duros e inseguros."
          imageSrc="/5.png"
          imagePosition="left"
        />

        {/* 3. Tom e Textura */}
        <ModuleItem 
          title="Tom e Textura"
          subtitle=""
          description="Seus desenhos deixam de ser chapados e passam a ter volume e realismo. Com luz e sombra, você cria contraste e profundidade, fazendo cada traço ganhar vida."
          imageSrc="/4.png"
          imagePosition="right"
        />

        {/* 4. Espaço e Profundidade */}
        <ModuleItem 
          title="Espaço e Profundidade"
          subtitle=""
          description="Você aprende perspectiva de 1, 2 e 3 pontos de fuga e constrói objetos em diferentes ângulos com realismo. Assim, deixa de se perder nas proporções."
          imageSrc="/7.png"
          imagePosition="left"
        />

        {/* 5. Proporção e Estrutura */}
        <ModuleItem 
          title="Proporção e Estrutura"
          subtitle=""
          description="Você aprende a enxergar através dos objetos, quebrando formas complexas em cubos, cilindros e esferas."
          imageSrc="/6.png"
          imagePosition="right"
        />
        
        {/* 6. Observação (FUNDO PRETO) */}
        <ModuleItem 
           title="Observação"
           subtitle=""
           description="Você aprende a observar como um artista, seguindo as 5 etapas do desenho de observação. Da maçã simples ao modelo vivo, descobre como traduzir o real no papel."
           imageSrc="/8.png" 
           imagePosition="left"
           inverted={true} 
        />

      </div>
    </section>
  );
};