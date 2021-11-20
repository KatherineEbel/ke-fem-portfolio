import Link          from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  path: string
  text: string
}
export default function NavLink ({ path, text }: Props) {
  const { pathname } = useRouter()
  return (
    <li className={`hover:text-cyan hover:scale-x-105 ${pathname.includes(path) ? 'text-cyan' : ''}`}>
      <Link href={path}>
        <a>{text}</a>
      </Link>
    </li>
  )
}
