import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface Props {
  altText: string
  imageName: string
}
export default function ResponsiveImage({ altText, imageName }: Props) {
  const [page, setPage] = useState('')
  const [prefix, setPrefix] = useState(``)
  const { pathname } = useRouter()

  useEffect(() => {
    let pageName
    switch (pathname) {
      case '/':
        pageName = 'homepage'
        break
      case '/portfolio':
        pageName = 'portfolio'
        break
      default:
        pageName = 'detail'
    }
    setPage(pageName)
    setPrefix(`/images/${pageName}`)
  }, [pathname])

  if (!page) return null
  return (
    <picture>
      <source
        srcSet={`${prefix}/desktop/image-${imageName}.jpg, ${prefix}/desktop/image-${imageName}@2x.jpg 2x`}
        media="(min-width: 1024px)"
      />
      <source
        srcSet={`${prefix}/tablet/image-${imageName}.jpg, ${prefix}/tablet/image-${imageName}@2x.jpg 2x`}
        media="(min-width: 768px)"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="h-full w-full object-cover"
        srcSet={`${prefix}/mobile/image-${imageName}.jpg ${prefix}/mobile/image-${imageName}@2x.jpg 2x`}
        src={`${prefix}/mobile/image-${imageName}.jpg`}
        alt={altText}
      />
    </picture>
  )
}
