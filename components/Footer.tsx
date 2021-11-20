import Image from 'next/image'
import Link  from 'next/link'

import logo        from 'public/images/logo.svg'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className='flex flex-col items-center gap-10 py-14 bg-grayish-dark-blue text-white'>
      <Image className='to-white' src={logo} alt='Triangle logo'/>
      <nav className='text-center uppercase'>
        <ul className='flex flex-col gap-8'>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>

          <li>
            <Link href='/portfolio'>
              <a>Portfolio</a>
            </Link>
          </li>

          <li>
            <Link href='/contact'>
              <a>Contact Me</a>
            </Link>
          </li>
        </ul>
      </nav>
      <SocialLinks/>
    </footer>
  )
}
