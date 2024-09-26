import {
  // exposicoesColetivas,
  exposicoesIndividuais,
} from '@/content/exposicoes'
import Link from 'next/link'

export default function Exposicoes() {
  return (
    <main className="mx-auto mb-40 mt-24 flex w-full max-w-7xl flex-col gap-20 px-3 lg:mt-28">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <h2 className="text-2xl font-medium md:text-3xl">
          Exposições Individuais
        </h2>
        <div className="flex flex-col gap-10">
          {exposicoesIndividuais.map((item, index) => (
            <Link href={item.url} key={index} className="flex flex-col gap-2">
              <div className="relative h-60 w-full overflow-hidden lg:h-[450px]">
                <img
                  src={item.imagem}
                  alt={item.titulo}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <h3 className="w-fit border-b border-transparent text-base transition-all duration-300 hover:border-neutral-700 lg:text-xl">
                {item.titulo} | {item.ano}
              </h3>
            </Link>
          ))}
        </div>
      </section>
      {/* <section className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <h2 className="text-3xl">Exposições Coletivas</h2>
        <div className="flex flex-col gap-10">
          {exposicoesColetivas.map((item, index) => (
            <div key={index} className="flex cursor-default flex-col gap-2">
              <div className="relative h-[450px] w-full overflow-hidden">
                <img
                  src={item.imagem}
                  alt={item.titulo}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <h3 className="text-xl">
                {item.titulo} | {item.ano}
              </h3>
            </div>
          ))}
        </div>
      </section> */}
    </main>
  )
}
