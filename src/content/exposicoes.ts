interface ExposicoesProps {
  titulo: string
  ano: number
  imagem: string
  url: string
}

export const exposicoesIndividuais: ExposicoesProps[] = [
  {
    titulo: 'Sob o raiar da Aurora',
    ano: 2024,
    imagem: '/exposicoes/aurora.jpeg',
    url: '/exposicoes/sob-o-raiar-da-aurora',
  },
  {
    titulo: 'Encanto',
    ano: 2024,
    imagem: '/exposicoes/encanto.webp',
    url: '/exposicoes/encanto',
  },
]

export const exposicoesColetivas: ExposicoesProps[] = [
  // {
  //   titulo: 'Abrir a hora - espiralar o tempo',
  //   ano: 2024,
  //   imagem: '/exposicoes/aurora.jpeg',
  //   url: '/exposicoes/sob-o-raiar-da-aurora',
  // },
  // {
  //   titulo: 'O caminho entre o céu e a terra',
  //   ano: 2024,
  //   imagem: '/exposicoes/aurora.jpeg',
  //   url: '/exposicoes/sob-o-raiar-da-aurora',
  // },
  // {
  //   titulo: '50 anos depois',
  //   ano: 2024,
  //   imagem: '/exposicoes/aurora.jpeg',
  //   url: '/exposicoes/sob-o-raiar-da-aurora',
  // },
  {
    titulo: 'Programa Exposições 2025 | MARP (22ª edição)',
    ano: 2025,
    imagem: '/exposicoes/marp/marp1.webp',
    url: '/exposicoes/programa-exposicoes-marp',
  },
]
