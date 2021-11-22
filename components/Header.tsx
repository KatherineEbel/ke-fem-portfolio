import Navigation from './Navigation'
import SiteLogoLink from './SiteLogoLink'

export default function Header() {
  return (
    <header className="flex justify-between items-center pt-8 px-8">
      <SiteLogoLink />
      <Navigation />
    </header>
  )
}
