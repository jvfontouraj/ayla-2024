'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { useEffect, useState } from 'react'

export default function ProgramaExposicoesMarp() {
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(true)

  useEffect(() => {
    setIsMobileScreen(window.innerWidth <= 400)
  }, [])

  return (
    <main className="mx-auto mb-40 mt-20 flex w-full max-w-7xl flex-col gap-8 px-3 lg:mt-28">
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-4xl">
          Programa Exposições 2025 | MARP (22ª edição)
        </h2>
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
                src="/exposicoes/marp/marp1.webp"
                alt="Image 1"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                className="absolute top-1/2 w-full -translate-y-1/2 object-contain"
                src="/exposicoes/marp/marp2.webp"
                alt="Image 2"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                className="absolute top-1/2 w-full -translate-y-1/2 object-contain"
                src="/exposicoes/marp/marp3.webp"
                alt="Image 3"
              />
            </SplideSlide>
          </Splide>
        )}
      </section>
      <section>
        <h4 className="text-base font-semibold md:text-lg">Obras:</h4>
        <h4 className="text-base md:text-lg">
          Cesta de frutas amarelas, 2025
          <br />
          Acarajés para Iansã (e para os eguns), 2024
          <br />
          Vida, Corpo e Espírito, 2024
        </h4>
      </section>
      <section>
        <h4 className="text-base font-semibold md:text-lg">
          Comissão de Seleção:
        </h4>
        <h4 className="text-base md:text-lg">
          Allan Yzumizawa, André Pitol e Nilton Campos.
        </h4>
      </section>
      <article>
        <h4 className="text-base font-semibold md:text-lg">
          Artistas selecionados:
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
  'Andrea Lalli (Lowell-MA (EUA) | Vive e trabalha em São Paulo-SP)',
  'Ayla de Oliveira (Rio de Janeiro-RJ | Vive e trabalha no Rio de Janeiro-RJ)',
  'Bárbara Elizei (Varginha-MG | Vive e trabalha em Belo Horizonte-MG)',
  'Carlos Matos (São Paulo-SP | Vive e trabalha em São Paulo-SP)',
  'Carlos Mello de Carvalho (Jundiaí-SP | Vive e trabalha em São Paulo-SP)',
  'Carol Pachioni (Santos-SP | Vive e trabalha em Praia Grande-SP)',
  'Érica Magalhães (Muriaé-MG | Vive e trabalha em Ribeirão Preto-SP)',
  'Fernanda Luz (Santiago-RM | Vive e trabalha em São Paulo-SP)',
  'Janice Ito (Guararapes-SP | Vive e trabalha em Mogi das Cruzes-SP)',
  'Jér Coqueiro (Campinas-SP | Vive e trabalha em São Paulo-SP)',
  'Júlia Hallal (Ribeirão Preto-SP | Vive e trabalha em São Paulo-SP)',
  'Luccas Morais (São Paulo-SP | Vive e trabalha em São Paulo-SP)',
  'Malu Tigre (Rio de Janeiro-RJ | Vive e trabalha em São Paulo-SP)',
  'Manu Gomez (Rio de Janeiro-RJ | Vive e trabalha no Rio de Janeiro-RJ)',
  'Michel CENA7 (São Paulo-SP | Vive e trabalha em São Bernardo do Campo-SP)',
  'Nina Simão (São Paulo-SP | Vive e trabalha em São Paulo-SP)',
  'O tal do Ale (São Paulo-SP | Vive e trabalha em São Paulo-SP)',
  'Pedro Mishima (Ribeirão Preto-SP | Vive e trabalha em Campinas-SP)',
  'Renata Laguardia (Belo Horizonte-MG | Vive e trabalha em São Paulo-SP)',
  'Shay Marias (Queimados-RJ | Vive e trabalha em São Paulo-SP)',
  'Silvio De Camillis (São Paulo-SP | Vive e trabalha em São Paulo-SP)',
  'Tulio Costa (Herculândia-SP | Vive e trabalha em São Paulo-SP)',
  'Yanaki Herrera (Cusco-CU (Peru) | Vive e trabalha em Belo Horizonte-MG)',
  'Yuki Zarate (Pindamonhangaba-SP | Vive e trabalha em São Paulo-SP)',
]
