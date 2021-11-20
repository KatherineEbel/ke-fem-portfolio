import Image      from 'next/image'
import logo       from 'public/images/logo.svg'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className='flex justify-between items-center pt-8 px-8'>
      <Image src={logo} alt='Site logo' />
      <Navigation/>
    </header>
  )
}
