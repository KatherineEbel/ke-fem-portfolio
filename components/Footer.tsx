import SocialLinks from './SocialLinks'
import SiteLogoLink from './SiteLogoLink'
import { pages } from '../lib/utils'
import NavLink from './NavLink'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-10 py-14 bg-grayish-dark-blue text-white">
      <SiteLogoLink filter />
      <nav className="text-center uppercase">
        <ul className="flex flex-col gap-8">
          {Object.keys(pages).map((k) => (
            <NavLink key={k} path={pages[k]} text={k} />
          ))}
        </ul>
      </nav>
      <SocialLinks filter />
    </footer>
  )
}
