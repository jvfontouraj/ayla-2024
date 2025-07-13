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
          <h1 className="absolute -right-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 text-center text-7xl font-semibold leading-snug text-white [text-shadow:_0_4px_10px_rgba(0,_0,_0,_0.25)] md:leading-none xl:text-9xl">
            Ayla de Oliveira
          </h1>
          <Image
            src={MelaoOxumIV}
            alt={'Melão para Oxum IV'}
            className="absolute -right-1/2 top-1/2 aspect-[1.37] h-full -translate-x-1/2 -translate-y-1/2 object-cover"
          />
        </section>
        <section className="flex flex-col lg:flex-row" id="sobre">
          <div className="flex max-h-screen w-full items-center justify-center overflow-hidden lg:w-1/2">
            <Image
              src={Retrato2}
              alt={'Retrato no Atelier'}
              className="w-full shrink-0"
            />
          </div>
          <div className="flex w-full flex-col justify-center gap-3 px-7 py-5 text-sm md:text-base lg:w-1/2 lg:p-10">
            <h2 className="text-base font-semibold md:text-lg">
              Ayla de Oliveira, 1997
            </h2>
            {texto.map((paragrafo, index) => (
              <p key={index}>{paragrafo}</p>
            ))}
            <div className="flex w-full gap-1">
              <Link
                href={'/Ayla_de_Oliveira_CV_2024.pdf'}
                className="underline"
                download
              >
                CV
              </Link>
              {'|'}
              <Link
                href={'/Ayla de Oliveira Portfólio 2025.pdf'}
                className="underline"
                download
              >
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

const texto = [
  'A pintura de Ayla de Oliveira emerge de uma experiência espiritual e sensível, profundamente enraizada nas tradições da umbanda. Por meio de composições que evocam um amplo repertório — passando pelas tradições da natureza-morta, do retrato, da paisagem e do ícone —, a artista constrói imagens de forte carga simbólica e energética, em que velas, frutas, flores, bebidas e oferendas se tornam manifestações tangíveis do invisível.  Sua prática explora técnicas como encáustica sobre madeira e misturas de cera com óleo, criando superfícies densas e vibrantes, em que planos de cor operam como campos abertos, em constante transformação. A matéria pictórica, muitas vezes trabalhada em passadas imprecisas ou massas indefinidas, reforça a ideia de uma imagem em estado de travessia — entre a intenção e a intuição, entre o material e o espiritual. Ao articular a fé, o culto e o afeto, a artista trabalha com uma poética que se oferece como ícone e talismã. Suas obras propõem um espaço de contemplação e reconexão, reafirmando a arte como campo de expressão da presença, do sagrado e das forças ocultas que moldam o mundo. Sua exposições individuais incluem:  "Sob o raiar da Aurora" (2024, Mitre Galeria, Belo Horizonte – Brasil) e "Encanto" (2023, Bacorejo, Rio de Janeiro – Brasil). Participou das exposições coletivas: "100 Anos da Colônia Juliano Moreira: arquivos, territórios e imaginários" (2025, Museu Bispo do Rosário, Rio de Janeiro – Brasil) e "O Caminho entre o Céu e a Terra" (2024, Centro Cultural dos Correios, Rio de Janeiro – Brasil).',
]
