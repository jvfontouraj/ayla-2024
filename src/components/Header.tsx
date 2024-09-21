'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cs from 'classnames'
import { useEffect, useState } from 'react'

const Headings = [
  { title: 'Home', href: '/' },
  { title: 'Trabalhos', href: '/trabalhos' },
  { title: 'Exposições', href: '/exposicoes' },
  { title: 'Sobre', href: '/#sobre' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Function to handle the scroll event
  const handleScroll = () => {
    const heroElement = document.getElementById('hero')
    const heroHeight = heroElement ? heroElement.offsetHeight : 0
    const scrollTop = window.scrollY

    if (scrollTop > heroHeight) {
      setIsScrolled(true) // Header is beyond hero section
    } else {
      setIsScrolled(false) // Header is over hero section
    }
  }

  // Attach scroll event listener on component mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const pathname = usePathname()
  return (
    <header
      className={cs(
        'fixed right-1/2 top-0 z-50 w-full translate-x-1/2',
        isScrolled ? 'bg-transparent' : 'bg-transparent',
      )}
    >
      {pathname !== '/' && (
        <h1 className="fixed ml-20 cursor-default p-3 text-xl">
          Ayla de Oliveira
        </h1>
      )}
      <nav className="mx-auto flex w-full max-w-3xl justify-between gap-5 p-3">
        {Headings.map(({ title, href }) => (
          <Link
            key={title}
            href={href}
            className={cs(
              'font-semibold',
              pathname !== '/'
                ? pathname === href
                  ? 'text-neutral-800'
                  : 'text-neutral-500'
                : isScrolled
                  ? pathname === href
                    ? 'font-semibold text-neutral-800'
                    : 'text-neutral-800'
                  : pathname === href
                    ? 'text-xl font-bold text-neutral-50 [text-shadow:_0_4px_10px_rgba(0,_0,_0,_0.25)]'
                    : 'text-xl text-neutral-50 [text-shadow:_0_4px_10px_rgba(0,_0,_0,_0.25)]',
            )}
          >
            {title}
          </Link>
        ))}
      </nav>
    </header>
  )
}
