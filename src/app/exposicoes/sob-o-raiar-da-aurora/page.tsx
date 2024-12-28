'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { useEffect, useState } from 'react'

export default function Aurora() {
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(true)

  useEffect(() => {
    setIsMobileScreen(window.innerWidth <= 400)
  }, [])

  return (
    <main className="mx-auto mb-40 mt-20 flex w-full max-w-7xl flex-col gap-8 px-3 lg:mt-28">
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-4xl">Sob o raiar da Aurora</h2>
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
                src="/exposicoes/aurora/aurora_1.jpeg"
                alt="Image 1"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                className="absolute top-1/2 w-full -translate-y-1/2 object-contain"
                src="/exposicoes/aurora/aurora_2.jpeg"
                alt="Image 2"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                className="absolute top-1/2 w-full -translate-y-1/2 object-contain"
                src="/exposicoes/aurora/aurora_3.jpeg"
                alt="Image 3"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                className="absolute top-1/2 w-full -translate-y-1/2 object-contain"
                src="/exposicoes/aurora/aurora_4.webp"
                alt="Image 4"
              />
            </SplideSlide>
          </Splide>
        )}
      </section>
      <article>
        <h4 className="text-base font-medium md:text-lg">
          Texto por Ana Clara Simoes Lopes
        </h4>
        {texto.map((paragrafo, index) => (
          <p key={index} className="my-4 text-sm md:text-base">
            {paragrafo}
          </p>
        ))}
      </article>
      <section className="flex w-full items-center justify-center">
        <iframe
          className="h-[300px] w-full md:h-[450px] lg:h-[700px]"
          src="https://www.youtube.com/embed/Ibj5Nbjh8uE"
          title='Exposição "Sob o raiar da Aurora"'
          frameBorder="0"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          // allowFullScreen
        />
      </section>
    </main>
  )
}

const texto = [
  'Graduada em pintura pela Escola de Belas Artes – academia estabelecida no Rio de Janeiro a partir da Escola Real de Ciências, Artes e Ofícios, criada em 1816 por Dom João VI – Ayla bem conhece a história e as técnicas de pintura. Estudou os grandes mestres e os métodos de feitura de tintas e pastas, a composição de naturezas mortas e retratos, das alegorias históricas e das grandes representações. Com a maturidade gradativamente conquistada por sua produção, entretanto, já nos demonstra que tanto estudou para a elaboração de um repertório seu, muito próprio, relacionando-se com tal historicidade das técnicas pictóricas a partir dos procedimentos que afetuosamente toma para si. Assim, longe de reproduzir estilos, Ayla os coloca à prova em um procedimento que se constrói também através do empilhamento de camadas. Essas, por sua vez, concentram e oscilam entre séculos e séculos de técnicas de pintura e uma dose generosa de inventividade, inaugurando algo intrinsecamente seu. ',

  'Como tal, vê-se constituído em um meticuloso "jogo de oposição" – como expresso pela artista – entre momentos decorativos (de detalhes e zonas tonais mais planificadas que adornam as composições) e momentos de "realismo visual" (em que a busca pela representação confere às composições uma carga mais densa). Neste jogo, diferentes velaturas são sobrepostas, progressivamente conferindo luz, sombra, textura e volume à representação de formas que, mais tarde, se tornarão elementos equiparadamente reais e simbólicos. ',

  'E tal equiparação se dá pois ainda que não entreguem seus segredos a olhares despreparados, incapazes de decifrar seus símbolos, os elementos representados por Ayla são preciosos, igualmente profundos e misteriosos em seus significados. É o caso de muitas das pinturas exibidas nesta mostra, como "Melão para Oxum IV", "Quiabos na Gamela", "Cesta com frutas e pães", "Anestesia", "Okê Arô" e tantas outras. Realizadas sem estudos prévios ou "abertas direto", nas palavras de Ayla – que curiosamente expressa estas pinturas espontâneas como quem abre cartas oraculares – nestes pequenos e médios formatos frutas e objetos são meticulosamente arranjados em composições cuidadosas, que evidenciam seus muitos significados potenciais, aqui exacerbados também pelas vivências espirituais da artista. É como se, imbuída de decidido encantamento, Ayla pintasse cada objeto como quem escreve uma ladainha, em que a repetição – em seu caso, de gestos em camadas sobrepostas – traz à tona a potência imaginativa de cada objeto e seus muitos significados possíveis. ',

  "É o que observamos em 'Deitada', composição surpreendente também pela intensidade de sensações às quais alude. O corpo em sereno repouso ao centro é rodeado por elementos como um copo d'água, uma vela, uma cumbuca e algumas ervas. Deitada sobre um pano branco, a figura centraliza a composição, ao passo que as flores no canto inferior e os elementos que flutuam à esquerda conferem à mesma uma atmosfera decididamente onírica, em que presença da estrela cadente no topo reitera a materialização do momento divino que é representado. Trata-se de uma composição em que a artista parece brincar com a representação dos rituais e as sensações por eles despertadas. Aqui, como em outras pinturas de Ayla, uma atenção especial é perceptivelmente dedicada à luz, que parece cobrir os objetos de uma cintilância quase muda. Meticulosamente sombreados, os elementos parecem irradiar seu próprio brilho, delicadamente intermediário quando comparado às paletas tonais frequentemente associadas com cenas declaradamente diurnas ou noturnas. ",

  'Em "Omolocum" verificamos mais um desses casos em que a luminosidade é protagonista. A composição é coberta por um brilho indecifrável em sua ambiguidade, que preenche a pintura por uma atmosfera densa e celestial, como tudo que resplandece sob o brilho da aurora. Novamente, são muitos os significados e alusões possíveis encarnados na vela amarela e no prato repleto de flores e demais elementos observados no primeiro plano. A oferenda representada comove pelo cuidado implícito em sua materialização: os ovos cortados, a meticulosa distribuição de flores amarelas. Não só, mas também pelo cuidado de quem pinta quatro ângulos em cada um desses ovos cortados, cada pétala, que cuida de cada detalhe dessa representação como se coisa no mundo fosse. ',

  'Imersos nesta iluminação quase difusa, ligeiramente acobreada, não à toa o título da mostra busca situar a produção de Ayla sob o raiar da Aurora. Aurora que é o primeiro tempo de algo, que cobre tudo dessa cor róseo-clara como a que antecede o alvorecer. Neste título, capitalizada, para que seja também presença assumida, conforme a cuidadosa relação que a artista estabelece com cada um dos objetos que retrata. Afinal, personificar a aurora, o melão, as ervas, a vela, os ovos cortados e a fita amarela é também reconhecer o que simbolizam e, assim, reconhecer-se neles. Com sua produção, Ayla nos mostra que há algo de muito íntimo e indissociavelmente seu nos objetos que escolhe compor e retratar.',

  'Jung uma vez disse que "precisamos projetar-nos nas coisas que nos cercam (...)." Ele concedia uma entrevista ao geógrafo Hans Carol quando o fez. Pode-se dizer que a importância observada em sua trajetória se dá, em grande parte, por suas tentativas de resgate da razão sensível. Não obstante, em oposição a muitos de seus colegas, Jung deu grande importância à espiritualidade, crente de que sua função seria uma enraizadora, de reconexão ao todo e a todas as coisas, que assim também nos penetrariam de forma simbólica. ',

  'Afastada do significado que decerto Jung almejava no emprego de tal palavra, a obra de Ayla em verdade nos oferece o potencial simbólico dos objetos como o quis Cassirer, em que "a relação da representação com o objeto pressupõe um ato independente e espontâneo de consciência." Sua produção nos apresenta elementos singelos e cotidianos agora imbuídos do divino, do indizível e do inverificável a partir do lastro de suas próprias experiências, em composições e representações fundadas por sua espontaneidade, constituídas por sua forma própria de arranjo e disposição, por sua gestualidade pictórica. ',
  'Ayla bem sabe em que se reconhece e quem reverencia quando elabora as imagens que pinta. Desta forma, a partir de um decidido processo de auto identificação, na intercessão entre o que são e o que simbolizam, os elementos de Ayla e suas significações se tornam um e são portanto "(...) indiferenciados, porque se fundem, crescem juntos, concretizam-se numa unidade imediata." Tal unidade faz-se ver em cada uma de suas representações, como fios que contribuem na tecelagem de uma existência que se firma também em melões, velas e oferendas e, principalmente, no fato de que cada objeto, elemento, composição e pincelada constitui e é também constituído pela artista.',
]
