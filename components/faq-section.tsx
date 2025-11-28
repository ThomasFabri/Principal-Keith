import Image from "next/image"

export function FaqSection() {
  return (
    <section className="bg-white py-8 px-4 md:px-8 hidden md:block">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-4xl font-bold text-gray-900 pb-12">
          FAQ
        </p>
        <div className="space-y-6">
          {/* FAQ Item 1 - Direita */}
          <div className="space-y-3 max-w-xl justify-self-end">
            <div className="flex justify-end gap-3">
              <Image src="/a.png" alt="" width={32} height={32} className="" />
              <h3 className="text-xl font-bold text-gray-700 md:text-2xl">
                Preciso já saber desenhar?
              </h3>
            </div>
            <p className="text-right text-base leading-relaxed text-gray-700 md:text-xl">
              Não. O Curso foi feito justamente para quem está começando ou para quem já desenha e quer melhorar. Você vai aprender tudo passo a passo, de forma simples e prática.
            </p>
          </div>

          {/* FAQ Item 2 - Esquerda */}
          <div className="space-y-3 max-w-xl">
            <div className="flex items-start gap-3">
              <h3 className="text-xl font-bold text-gray-700 md:text-2xl">
                Preciso de materiais caros?
              </h3>
              <Image src="/b.png" alt="" width={32} height={32} className="mt-1 shrink-0" />
            </div>
            <p className="text-base leading-relaxed text-gray-700 md:text-xl">
              De jeito nenhum. Tudo o que você precisa é de lápis grafite, papel e borracha.
              Ferramentas simples, que qualquer pessoa pode ter em casa.
            </p>
          </div>

          {/* FAQ Item 3 - Direita */}
          <div className="space-y-3 max-w-xl justify-self-end">
            <div className="flex items-start justify-end gap-3">
              <Image src="/c.png" alt="" width={32} height={32} className="mt-1 shrink-0" />
              <h3 className="text-xl font-bold text-gray-700 md:text-2xl">
                É ao vivo ou gravado?
              </h3>
            </div>
            <p className="text-right text-base leading-relaxed text-gray-700 md:text-xl">
              As aulas já estão gravadas, para você assistir quando quiser. Assim você pode pausar, voltar e rever cada
              etapa no seu próprio ritmo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
