import Image from 'next/image'
import menu from 'public/images/icons/hamburger.svg'
import close from 'public/images/icons/close.svg'
import { useEffect, useRef, useState } from 'react'
import NavLink from './NavLink'
import { pages } from 'lib/utils'
import { useRouter } from 'next/router'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = useRef<HTMLDivElement>()
  const closeButton = useRef<HTMLButtonElement>()
  const router = useRouter()

  useEffect(() => {
    function mousedownListener(e) {
      if (window.innerWidth >= 768 || closeButton.current.contains(e.target))
        return
      if (menuOpen && nav.current && !nav.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', mousedownListener)
    return () => document.removeEventListener('mousedown', mousedownListener)
  }, [menuOpen])

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setMenuOpen(true)
    }
  }, [router.asPath])

  useEffect(() => {
    function handleWindowResize() {
      setMenuOpen(window.innerWidth >= 768)
    }
    function handleScroll() {
      if (window.innerWidth >= 768) return
      setMenuOpen(false)
    }
    window.addEventListener('resize', handleWindowResize)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="relative text-xs text-white">
      <button
        ref={closeButton}
        className="md:hidden grow cyan-filter"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Image src={menuOpen ? close : menu} alt="mobile menu" />
      </button>
      {menuOpen && (
        <nav
          ref={nav}
          className={`fixed md:static uppercase right-8 w-56 md:w-auto mt-6 md:mt-0 z-10 transition duration-500 ${
            menuOpen ? 'opacity-100 scale-1' : 'opacity-0 scale-0'
          }'`}
        >
          <ul
            className={`flex flex-col md:flex-row md:text-grayish-dark-blue items-center gap-8 py-8 bg-grayish-dark-blue md:bg-transparent`}
          >
            {Object.keys(pages).map((k) => (
              <NavLink
                key={k}
                path={pages[k]}
                text={k}
                showActive
                onSelected={() => setMenuOpen(false)}
              />
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}
