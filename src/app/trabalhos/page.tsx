import { trabalhos } from '@/content/trabalhos'
import Image from 'next/image'

export default function Trabalhos() {
  return (
    <main className="mx-auto mb-40 mt-28 w-full max-w-7xl px-5">
      <h2 className="text-2xl font-medium md:text-4xl">
        Pinturas Selecionadas
      </h2>
      <section className="mt-12 grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {trabalhos.map((item, index) => (
          <div key={index} className="flex flex-col gap-4">
            <Image
              width={392}
              height={588}
              src={item.imagem}
              alt={item.titulo}
            />
            <div className="flex flex-col">
              <h3 className="text-base font-medium">
                {item.titulo}, {item.ano}
              </h3>
              <span>
                {item.tecnica} | {item.dimensoes}
              </span>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
