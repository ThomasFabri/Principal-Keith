import Image from "next/image"

export function FinalFaqSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="space-y-6">
          {/* FAQ Item 1 */}
          <div className="space-y-3 max-w-xl">
            <div className="flex items-start gap-3">
              <h3 className="text-xl font-bold text-gray-700 md:text-2xl">E se eu não acompanhar o ritmo?</h3>
              <Image src="/d.png" alt="" width={32} height={32} className="mt-1 shrink-0" />
            </div>
            <p className="text-base leading-relaxed text-gray-700 md:text-xl">
              Fique tranquilo(a). Você terá acesso vitalício às aulas e pode rever quantas vezes quiser. O importante é
              praticar no seu tempo e ver sua evolução.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="space-y-3 max-w-xl justify-self-end">
            <div className="flex items-start justify-end gap-3">
              <Image src="/e.png" alt="" width={32} height={32} className="mt-1 shrink-0" />
              <h3 className="text-xl font-bold text-gray-700 md:text-2xl">Quanto tempo preciso por dia?</h3>
            </div>
            <p className="text-right text-base leading-relaxed text-gray-700 md:text-xl">
              O Curso foi feito justamente para quem está começando ou para quem já desenha e quer melhorar. Em média, 30 a 40 minutos já são suficientes para assistir à aula e praticar. Mas você pode ajustar conforme sua rotina
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="space-y-3 max-w-xl">
            <div className="flex items-start gap-3">
              <h3 className="text-xl font-bold text-gray-700 md:text-2xl">Recebo certificado?</h3>
              <Image src="/f.png" alt="" width={32} height={32} className="mt-1 shrink-0" />
            </div>
            <p className="text-base leading-relaxed text-gray-700 md:text-xl">
              Sim. Ao concluir o desafio você recebe um certificado digital para marcar sua conquista.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
