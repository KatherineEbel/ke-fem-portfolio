import Navigation from './Navigation'
import SiteLogoLink from './SiteLogoLink'

export default function Header() {
  return (
    <header className="px-8 md:px-10 2xl:px-[9.75rem] flex justify-between items-center pt-8 px-8">
      <SiteLogoLink />
      <Navigation />
    </header>
  )
}
