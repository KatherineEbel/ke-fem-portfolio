import Link from 'next/link'
import ResponsiveImage from './ResponsiveImage'
import { useRouter } from 'next/router'

interface Props {
  imageUrl: string
  heading: string
  bodyText: string
  linkPath: string
  linkText: string
  reversed?: boolean
}

export default function PageSection({
  heading,
  bodyText,
  imageUrl,
  linkPath,
  linkText,
  reversed = false,
}: Props) {
  const { pathname } = useRouter()
  const isPortfolio = pathname === '/portfolio'
  return (
    <section
      id={`${heading.toLowerCase().split(' ').join('-')}`}
      className={`flex flex-col gap-6 md:flex-row md:gap-16 ${
        reversed ? 'even:flex-row-reverse lg:odd:mr-16 lg:even:ml-16' : ''
      }`}
    >
      <div className={`relative ${isPortfolio ? 'md:py-12 lg:py-0' : ''}`}>
        <ResponsiveImage altText="Alex Spencer" imageName={imageUrl} />
      </div>
      <div
        className={`flex flex-col flex-[2] gap-7 border-t border-b border-grayish-dark-blue border-opacity-20 py-8
      `}
      >
        <h2 className="h1">{heading}</h2>
        <p className="opacity-80">{bodyText}</p>
        <Link href={linkPath}>
          <a className="btn btn-secondary">{linkText}</a>
        </Link>
      </div>
    </section>
  )
}
