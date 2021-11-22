import Image from 'next/image'
import Link from 'next/link'
import github from 'public/images/icons/github.svg'
import linkedin from 'public/images/icons/linkedin.svg'
import twitter from 'public/images/icons/twitter.svg'

interface Props {
  filter?: boolean
}
export default function SocialLinks({ filter = false }: Props) {
  const className = filter ? 'white-filter' : ''
  return (
    <ul className="flex gap-4">
      <li>
        <Link href="https://github.com">
          <a>
            <div className="relative grow cyan-filter">
              <Image className={className} src={github} alt="Github logo" />
            </div>
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://twitter.com">
          <a>
            <div className="relative grow cyan-filter">
              <Image className={className} src={twitter} alt="Twitter logo" />
            </div>
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://linkedin.com">
          <a>
            <div className="relative grow cyan-filter">
              <Image className={className} src={linkedin} alt="Linkedin logo" />
            </div>
          </a>
        </Link>
      </li>
    </ul>
  )
}
