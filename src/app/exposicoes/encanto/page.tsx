'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { useEffect, useState } from 'react'

export default function Encanto() {
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>()

  useEffect(() => {
    setIsMobileScreen(window.innerWidth <= 400)
  }, [])

  return (
    <main className="mx-auto mb-40 mt-20 flex w-full max-w-7xl flex-col gap-8 px-3 lg:mt-28">
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-4xl">Encanto</h2>
        {typeof isMobileScreen !== 'undefined' && (
          <Splide
            options={{
              rewind: true,
              autoplay: true,
              type: 'loop',
              arrows: false,
              height: isMobileScreen ? '200px' : '500px',
              gap: '1rem',
            }}
          >
            <SplideSlide>
              <img
                className="absolute top-1/2 w-full -translate-y-1/2 object-contain"
                src="/exposicoes/encanto/encanto_1.webp"
                alt="Image 1"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                className="absolute top-1/2 w-full -translate-y-1/2 object-contain"
                src="/exposicoes/encanto/encanto_2.webp"
                alt="Image 2"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                className="absolute top-1/2 w-full -translate-y-1/2 object-contain"
                src="/exposicoes/encanto/encanto_3.webp"
                alt="Image 3"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                className="absolute top-1/2 w-full -translate-y-1/2 object-contain"
                src="/exposicoes/encanto/encanto_4.webp"
                alt="Image 4"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                className="absolute top-1/2 w-full -translate-y-1/2 object-contain"
                src="/exposicoes/encanto/encanto_5.webp"
                alt="Image 5"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                className="absolute top-1/2 w-full -translate-y-1/2 object-contain"
                src="/exposicoes/encanto/encanto_6.webp"
                alt="Image 6"
              />
            </SplideSlide>
          </Splide>
        )}
      </section>
      <article>
        <h4 className="text-base font-medium md:text-lg">
          Texto por Carollina Lauriano
        </h4>
        {texto.map((paragrafo, index) => (
          <p key={index} className="my-4 text-sm md:text-base">
            {paragrafo}
          </p>
        ))}
      </article>
    </main>
  )
}

const texto = [
  'Para sua primeira exposição individual, Ayla de Oliveira apresenta um conjunto de pinturas que estabelecem uma intersecção entre o mistério, o encantamento e o afeto. Nesse processo, interessa à artista traçar aproximações entre a materialidade do seu processo artístico e a imaterialidade inerente a tudo aquilo que não é tangível.',

  'Dessas relações, surgem trabalhos que reúnem as memórias afetivas da artista, desde sua infância bucólica no subúrbio do Rio de Janeiro, até suas vivências no terreiro de Umbanda. Encanto, portanto, pode ser compreendida por várias perspectivas, que partem dos próprios significados da palavra. Numa primeira leitura, podemos compreender o ato de encantar-se; causar grande prazer a. Nesse sentido, as pinturas de Ayla apresentam um lugar lúdico, materializando sua compreensão de mundo em uma poética muito particular. ',

  'Encanto é também o olhar curioso da artista em busca do seu próprio pertencimento no mundo, de estabelecer e afirmar suas origens, da valorização da cultura e da sabedoria popular, o que nos leva a uma segunda interpretação do título da exposição. Encanto enquanto magia. Se em um primeiro momento observamos as pinturas de Ayla como uma manifestação lúdica, aqui, a artista estabelece uma série de simbolismos para todas as suas pinturas, como resultado de sua pesquisa e do seu interesse pelos elementos que representam essa conexão entre o humano e as manifestações espirituais.',

  'No entanto, Ayla apresenta dois conjuntos que se estabelecem nesse lugar. Em um primeiro grupo, a artista reúne uma série de elementos simbólicos, como quartinhas e espadas de São Jorge. Já no segundo, Ayla pinta uma série de oferendas aos Orixás e guias espirituais. Mas aqui, não interessa a artista apenas representar esses objetos enquanto manifestação cultural, mas sim estabelecer um diálogo profundo e respeitoso com eles, tanto a partir de um pensamento pictórico, quanto a partir da sua própria noção de pertencimento a esse espaço.',

  'Por isso, é possível afirmar que as pinturas de Ayla nascem do encontro entre a artista e os lugares que ela estabelece enquanto afeto e pertencimento. Suas pinturas à óleo são construídas a partir das memórias de tempos e atravessamentos que geraram nela algum tipo de encantamento, defendendo, então, a ideia da pintura como ato imaginativo. No entanto, em suas telas a cor também assume um sentido simbólico, condensando tais sensações em blocos cromáticos quase sólidos e em linhas definidas, com cores fortes, por vezes chapadas, que valorizavam os aspectos simbólicos da pintura.',

  'Ao partilhar toda essa intimidade com seu espectador, Ayla cria um lugar de generosidade para sua pintura, convidando-os a partilhar com ela suas próprias memórias, evocando um lugar de troca e acolhimento. É como se nesse processo a artista nos dissesse que para se encantar pelo mundo, pelo outro, pelo diferente, é preciso se abrir para novas percepções, seja sobre nós mesmos, ou sobre a dimensão das coisas que não damos conta, muito menos compreendemos. Mas é preciso estar aberto para descobrir os mistérios da própria existência. ',
  'Se a memória é uma ilha de edição, Ayla nos instiga a pensar quais narrativas estamos criando para nós. A dela, me parece ser encantar-se pela possibilidade de se reconhecer cada vez mais que confia no desconhecido como potência de vida.',
]
