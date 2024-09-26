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
                href={'/Ayla_de_Oliveira_Portfolio_2024.pdf'}
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
  'Ayla, pintora e umbandista, imersa no universo da espiritualidade afro-brasileira, transmuta suas vivências em obras de arte que convidam à contemplação e à reflexão. Com formação em Pintura pela Escola de Belas Artes da UFRJ, a artista convida o espectador a se conectar com a beleza intrínseca das coisas simples e a vivenciar a arte como uma experiência sensível/espiritual.',

  'Sua pesquisa artística se concentra na investigação de temas como a fé, a natureza e a ancestralidade, tensionando a razão e o sensível em prol da intuição. Em suas séries de pintura de oferendas, a artista revela uma profunda sensibilidade para captar a energia e a espiritualidade presentes nos objetos do seu cotidiano. Algumas obras são pintadas com pasta de cera e óleo, enquanto outras utilizam a técnica ancestral da encáustica sobre madeira, criando um universo visual rico em simbolismo e matéria.',

  'Como bem observa Ana Clara Simões Lopes, "Ayla bem sabe em que se reconhece e quem reverencia quando elabora as imagens que pinta. Desta forma, a partir de um decidido processo de auto identificação, na intercessão entre o que são e o que simbolizam, os elementos de Ayla e suas significações se tornam um e são portanto "(...) indiferenciados, porque se fundem, crescem juntos, concretizam-se numa unidade imediata." Tal unidade faz-se ver em cada uma de suas representações, como fios que contribuem na tecelagem de uma existência que se firma também em melões, velas e oferendas e, principalmente, no fato de que cada objeto, elemento, composição e pincelada constitui e é também constituído pela artista."',
  'Através de suas obras, Ayla não apenas compartilha sua fé e sua cultura, mas também busca contribuir para o diálogo entre a arte contemporânea e as tradições afro-brasileiras, combatendo a intolerância e promovendo a difusão das mesmas. ',

  'Atualmente é representada pela galeria Mitre e produz em seu atelier no Rio de Janeiro.',
]
