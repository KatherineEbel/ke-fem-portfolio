import Image  from 'next/image'
import Link   from 'next/link'
import github from 'public/images/icons/github.svg'
import linkedin from 'public/images/icons/linkedin.svg'
import twitter from 'public/images/icons/twitter.svg'

export default function SocialLinks () {
  return (
    <ul className='flex gap-4'>
      <li>
        <Link href='https://github.com'>
          <a>
            <Image className='to-white' src={github} alt='Github logo'/>
          </a>
        </Link>
      </li>
      <li>
        <Link href='https://twitter.com'>
          <a>
            <Image className='to-white' src={twitter} alt='Twitter logo'/>
          </a>
        </Link>

      </li>
      <li>
        <Link href='https://linkedin.com'>
          <a>
            <Image className='to-white' src={linkedin} alt='Linkedin logo'/>
          </a>
        </Link>
      </li>
    </ul>
  )
}
