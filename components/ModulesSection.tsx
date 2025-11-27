import React from 'react';

// Interface para as props
interface ModuleItemProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imagePosition?: "left" | "right";
  isLast?: boolean; // Para ajustes finos no último item se necessário
}

const ModuleItem = ({ 
  title, 
  subtitle, 
  description, 
  imageSrc, 
  imagePosition = "left" 
}: ModuleItemProps) => {
  
  // Define a ordem dos elementos baseado na posição da imagem
  const isImageRight = imagePosition === 'right';

  return (
    <div className={`flex flex-col md:flex-row items-stretch justify-between py-16 gap-8 md:gap-0`}>
      
      {/* 
         LÓGICA DE ORDENAÇÃO (Desktop):
         Se imagem na direita: Texto (1) -> Linha (2) -> Imagem (3)
         Se imagem na esquerda: Imagem (1) -> Linha (2) -> Texto (3)
         
         Usamos 'order-last' ou 'order-first' para manipular isso visualmente sem mudar o HTML drasticamente.
      */}

      {/* BLOCO DE TEXTO */}
      <div className={`flex-1 flex flex-col justify-center ${isImageRight ? 'md:text-right md:pr-12 md:order-1' : 'md:text-left md:pl-12 md:order-3'}`}>
        <div className="space-y-4">
          {/* Título com linha decorativa abaixo */}
          <div className={`inline-block ${isImageRight ? 'ml-auto' : 'mr-auto'}`}>
            <h3 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] italic">
              {title}
            </h3>
            {/* Linha abaixo do título */}
            <span className="block h-1px w-full bg-[#384E40] mt-2 opacity-80"></span>
          </div>

          {/* Subtítulo */}
          {subtitle && (
            <h4 className="font-serif text-lg text-gray-800 italic font-medium">
              {subtitle}
            </h4>
          )}

          {/* Descrição */}
          <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
            {description}
          </p>
        </div>
      </div>

      {/* LINHA VERTICAL (Divisória Central) */}
      <div className="hidden md:block w-1px bg-[#384E40] opacity-40 md:order-2 self-stretch mx-4"></div>

      {/* BLOCO DE IMAGEM */}
      <div className={`flex-1 flex items-center justify-center ${isImageRight ? 'md:pl-12 md:order-3' : 'md:pr-12 md:order-1'}`}>
        {/* Container da Imagem com sombra suave e borda fina */}
        <div className="relative w-full max-w-[350px] aspect-square bg-white border border-gray-200 shadow-xl p-2">
          <div className="w-full h-full overflow-hidden relative bg-neutral-100">
            <img 
              src={imageSrc} 
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out" 
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export const ModulesSection = () => {
  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Cabeçalho da Seção */}
        <h2 className="text-center font-serif text-4xl md:text-5xl mb-24 text-[#333] tracking-wide uppercase">
          Etapas da sua evolução
        </h2>

        {/* 
           ATENÇÃO AOS CAMINHOS DAS IMAGENS:
           Substitua os src="/3.png" etc pelos seus arquivos reais.
           Organizei alternando left/right conforme os prints.
        */}

        {/* 1. Introdução / Ferramentas */}
        <ModuleItem 
          title="Ferramentas e Materiais"
          subtitle="Primeiro traço com firmeza"
          description="Você vai finalmente dominar os instrumentos de desenho e descobrir que o segredo não é o material, mas como você o usa. O que antes era insegurança diante do lápis e do papel, se transforma em segurança no uso de cada material."
          imageSrc="/3.png"
          imagePosition="right" 
        />

        {/* 2. Linha e Formato */}
        <ModuleItem 
          title="Linha e Formato"
          subtitle=""
          description="Aqui você descobre que a linha é mais do que contorno, ela é expressão, movimento e estrutura. Com o tempo, seus traços deixam de ser duros e inseguros e passam a ser firmes e cheios de intenção."
          imageSrc="/4.png"
          imagePosition="left"
        />

        {/* 3. Tom e Textura */}
        <ModuleItem 
          title="Tom e Textura"
          subtitle=""
          description="Seus desenhos deixam de ser chapados e passam a ter volume e realismo. Com luz e sombra, você cria contraste e profundidade, fazendo cada traço ganhar vida."
          imageSrc="/5.png"
          imagePosition="right"
        />

        {/* 4. Espaço e Profundidade */}
        <ModuleItem 
          title="Espaço e Profundidade"
          subtitle=""
          description="Você aprende perspectiva de 1, 2 e 3 pontos de fuga e constrói objetos em diferentes ângulos com realismo. Assim, deixa de se perder nas proporções e passa a criar cenas convincentes."
          imageSrc="/6.png"
          imagePosition="left"
        />

        {/* 5. Proporção e Estrutura */}
        <ModuleItem 
          title="Proporção e Estrutura"
          subtitle=""
          description="Você aprende a enxergar através dos objetos, quebrando formas complexas em cubos, cilindros e esferas. Assim, deixa de depender de copiar referências e passa a entender a estrutura por trás de qualquer desenho."
          imageSrc="/7.png"
          imagePosition="right"
        />
        
        {/* 6. Observação */}
        <ModuleItem 
           title="Observação"
           subtitle=""
           description="Você aprende a observar como um artista, seguindo as 5 etapas do desenho de observação. Da maçã simples ao modelo vivo, descobre como traduzir o real no papel com naturalidade."
           imageSrc="/8.png" // Imagem escura do rosto
           imagePosition="left"
        />

      </div>
    </section>
  );
};