'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cs from 'classnames'
import { useEffect, useState } from 'react'
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'

const Headings = [
  { title: 'Home', href: '/' },
  { title: 'Trabalhos', href: '/trabalhos' },
  { title: 'Exposições', href: '/exposicoes' },
  { title: 'Sobre', href: '/#sobre' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [smallScreen, setSmallScreen] = useState(false)

  function handleToggleMenu() {
    setOpen((state) => !state)
  }

  // Function to handle the scroll event
  const handleScroll = () => {
    const heroElement = document.getElementById('hero')
    const heroHeight = heroElement ? heroElement.offsetHeight : 0
    const scrollTop = window.scrollY

    if (scrollTop > heroHeight - 1) {
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

  useEffect(() => {
    // Function to check the screen width
    const checkScreenWidth = () => {
      setSmallScreen(window.innerWidth < 1024)
    }

    // Check screen width when component mounts
    checkScreenWidth()

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenWidth)

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', checkScreenWidth)
    }
  }, [])

  const pathname = usePathname()
  return (
    <header
      className={cs(
        'fixed right-1/2 top-0 z-20 flex w-full translate-x-1/2 justify-between py-2 shadow-sm lg:h-auto lg:items-center lg:shadow-none',
        !smallScreen && pathname === '/'
          ? isScrolled
            ? 'bg-white 2xl:bg-transparent'
            : 'bg-transparent'
          : 'bg-white',
        open ? 'h-[100dvh]' : 'h-16',
      )}
    >
      {(pathname !== '/' || smallScreen) && (
        <h1 className="h-fit cursor-default p-3 text-xl lg:fixed lg:ml-5 2xl:ml-20">
          Ayla de Oliveira
        </h1>
      )}

      <div className="flex h-fit items-center justify-between p-3 lg:hidden">
        <button onClick={handleToggleMenu} className="relative h-5 w-5">
          <HamburgerMenuIcon
            className={cs(
              'absolute top-0 h-full w-auto transition-opacity',
              open ? 'opacity-0' : 'opacity-100',
            )}
          />
          <Cross1Icon
            className={cs(
              'absolute top-0 h-full w-auto transition-opacity',
              !open ? 'opacity-0' : 'opacity-100',
            )}
          />
        </button>
      </div>
      <nav
        className={cs(
          'absolute right-1/2 top-1/2 mx-auto flex -translate-y-1/2 translate-x-1/2 flex-col items-center gap-10 p-3 lg:static lg:h-auto lg:w-full lg:max-w-xl lg:translate-x-0 lg:translate-y-0 lg:flex-row lg:justify-between 2xl:max-w-3xl lg:[&>*]:h-auto lg:[&>*]:opacity-100',
          open
            ? 'h-fit [&>*]:h-auto [&>*]:opacity-100'
            : 'h-0 [&>*]:h-0 [&>*]:opacity-0',
        )}
      >
        {Headings.map(({ title, href }) => (
          <Link
            onClick={handleToggleMenu}
            key={title}
            href={href}
            className={cs(
              'text-xl font-semibold',
              pathname !== '/' || smallScreen
                ? pathname === href
                  ? 'text-neutral-800 lg:text-base'
                  : 'text-neutral-500 lg:text-base'
                : isScrolled
                  ? pathname === href
                    ? 'font-semibold text-neutral-800 lg:text-base'
                    : 'text-neutral-800 lg:text-base'
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
