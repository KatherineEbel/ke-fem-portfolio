import Link from 'next/link'
import ResponsiveImage from './ResponsiveImage'

interface Props {
  imageUrl: string
  heading: string
  bodyText: string
  linkPath: string
  linkText: string
}

export default function PageSection({
  heading,
  bodyText,
  imageUrl,
  linkPath,
  linkText,
}: Props) {
  return (
    <section
      id={`${heading.toLowerCase().split(' ').join('-')}`}
      className="flex flex-col gap-6"
    >
      <ResponsiveImage altText="Alex Spencer" imageName={imageUrl} />
      <div className="flex flex-col gap-7 border-t border-b border-grayish-dark-blue border-opacity-20 py-8">
        <h2 className="h1">{heading}</h2>
        <p className="opacity-80">{bodyText}</p>
        <Link href={linkPath}>
          <a className="btn btn-secondary">{linkText}</a>
        </Link>
      </div>
    </section>
  )
}
