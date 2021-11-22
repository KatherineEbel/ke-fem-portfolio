import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  path: string
  text: string
  showActive?: boolean
  onSelected?: () => void
}
export default function NavLink({
  onSelected = () => {},
  showActive = false,
  path,
  text,
}: Props) {
  const { pathname } = useRouter()
  return (
    <li
      className={`hover:text-cyan hover:scale-x-105 transition duration-300 ${
        pathname === path && showActive ? 'text-cyan' : ''
      }`}
    >
      <Link href={path}>
        <a onClick={onSelected}>{text}</a>
      </Link>
    </li>
  )
}
