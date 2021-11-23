import SocialLinks from './SocialLinks'
import SiteLogoLink from './SiteLogoLink'
import { pages } from '../lib/utils'
import NavLink from './NavLink'

export default function Footer() {
  return (
    <footer className="row-start-3 col-span-full flex flex-col md:flex-row items-center gap-10 py-14 md:py-6 md:px-10 md:gap-12 lg:px-44 bg-grayish-dark-blue text-white">
      <SiteLogoLink filter />
      <nav className="text-center uppercase">
        <ul className="flex flex-col md:flex-row lg:justify-center gap-8 md:gap-11 text-xs">
          {Object.keys(pages).map((k) => (
            <NavLink key={k} path={pages[k]} text={k} />
          ))}
        </ul>
      </nav>
      <div className="md:ml-auto">
        <SocialLinks filter />
      </div>
    </footer>
  )
}
