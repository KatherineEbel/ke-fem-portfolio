import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/images/logo.svg'

export default function SiteLogoLink({ filter = false }: { filter?: boolean }) {
  return (
    <h1>
      <Link href="/">
        <a>
          <Image
            className={`${filter ? 'white-filter grow' : 'cyan-filter grow'}`}
            src={logo}
            alt="Site logo"
          />
        </a>
      </Link>
    </h1>
  )
}
