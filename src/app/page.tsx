import Head from 'next/head'
import Image from 'next/image'
import MelaoOxumIV from '@/assets/MELAOPARAOXUMIV.webp'
import Retrato2 from '@/assets/retrato2.jpg'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Irmandade Senhora Santana</title>
      </Head>
      <main className="relative">
        <section
          id="hero"
          className="relative flex h-screen w-full items-center justify-center overflow-hidden"
        >
          <h1 className="absolute -right-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-9xl font-semibold text-white [text-shadow:_0_4px_10px_rgba(0,_0,_0,_0.25)]">
            Ayla de Oliveira
          </h1>
          <Image src={MelaoOxumIV} alt={'Melão para Oxum IV'} />
        </section>
        <section className="flex" id="sobre">
          <div className="flex max-h-screen w-1/2 items-center justify-center overflow-hidden">
            <Image
              src={Retrato2}
              alt={'Retrato no Atelier'}
              className="w-full shrink-0"
            />
          </div>
          <div className="flex w-1/2 flex-col items-center justify-center gap-3 p-10">
            <p className="">
              Ayla, pintora e umbandista, imersa no universo da espiritualidade
              afro-brasileira, transmuta suas vivências em obras de arte que
              convidam à contemplação e à reflexão. Com formação em Pintura pela
              Escola de Belas Artes da UFRJ, a artista convida o espectador a se
              conectar com a beleza intrínseca das coisas simples e a vivenciar
              a arte como uma experiência sensível/espiritual.
            </p>
            <p>
              Ayla, pintora e umbandista, imersa no universo da espiritualidade
              afro-brasileira, transmuta suas vivências em obras de arte que
              convidam à contemplação e à reflexão. Com formação em Pintura pela
              Escola de Belas Artes da UFRJ, a artista convida o espectador a se
              conectar com a beleza intrínseca das coisas simples e a vivenciar
              a arte como uma experiência sensível/espiritual.
            </p>
            <div className="flex w-full gap-1">
              <Link href={'/sobre'} className="underline">
                CV
              </Link>
              {'|'}
              <Link href={'/sobre'} className="underline">
                PORTFÓLIO
              </Link>
            </div>
          </div>
        </section>
        {/* <section className="flex h-screen w-full items-center justify-center">
          <iframe
            className="h-2/3 w-2/3"
            src="https://www.youtube.com/embed/Ibj5Nbjh8uE"
            title='Exposição "Sob o raiar da Aurora"'
            frameBorder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            // allowFullScreen
          />
        </section> */}
      </main>
    </>
  )
}
