import Image from 'next/image'
import menu from 'public/images/icons/hamburger.svg'
import close from 'public/images/icons/close.svg'
import { useEffect, useRef, useState } from 'react'
import NavLink from './NavLink'

const pages = {
  Home: '/',
  Portfolio: '/portfolio',
  'Contact Me': '/contact-me',
}

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = useRef<HTMLDivElement>()
  const closeButton = useRef<HTMLButtonElement>()

  useEffect(() => {
    function mousedownListener(e) {
      if (menuOpen && nav.current && !nav.current.contains(e.target)) {
        if (closeButton.current.contains(e.target)) return
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', mousedownListener)
    return () => document.removeEventListener('mousedown', mousedownListener)
  }, [menuOpen])

  useEffect(() => {
    function handleWindowResize() {
      setMenuOpen(window.innerWidth >= 768)
    }

    handleWindowResize()

    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <div className="relative text-xs text-white">
      <button
        ref={closeButton}
        className="md:hidden transition duration-300"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Image src={menuOpen ? close : menu} alt="mobile menu" />
      </button>
      {menuOpen && (
        <nav
          ref={nav}
          className={`fixed md:static uppercase right-8 w-56 md:w-auto mt-6 md:mt-0 transition duration-500 ${
            menuOpen ? 'opacity-100 scale-1' : 'opacity-0 scale-0'
          }'`}
        >
          <ul
            className={`flex flex-col md:flex-row md:text-grayish-dark-blue items-center gap-8 py-8 bg-grayish-dark-blue md:bg-transparent`}
          >
            {Object.keys(pages).map((k) => (
              <NavLink key={k} path={pages[k]} text={k} />
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}
