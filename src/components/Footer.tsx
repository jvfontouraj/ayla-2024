import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex w-full flex-col gap-7 p-6">
      <div className="h-px w-60 bg-neutral-700" />
      <div className="flex w-full flex-col items-baseline gap-1 md:flex-row">
        <div className="flex w-full flex-col gap-3">
          <h2 className="text-2xl">Ayla de Oliveira</h2>
          <span className="hidden md:block">
            © 2024 Todos os direitos reservados
          </span>
        </div>
        <div className="flex w-full flex-col gap-1">
          <Link href={'/'}>@ayladeoliveira_</Link>
          <Link href={'/'}>atelier@ayladeoliveira.com</Link>
          <span className="block md:hidden">
            © 2024 Todos os direitos reservados
          </span>
        </div>
      </div>
    </footer>
  )
}
