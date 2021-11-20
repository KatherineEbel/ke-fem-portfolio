interface Props {
  altText: string
  imageName: string
}
export default function ResponsiveImage({ altText, imageName }: Props) {
  const pathPrefix = `images/homepage`
  return (
    <picture className='w-full'>
      <source
        srcSet={`${pathPrefix}/desktop/image-${imageName}.jpg, ${pathPrefix}/desktop/image-${imageName}@2x.jpg 2x`}
        media="(min-width: 1024px)"
      />
      <source
        srcSet={`${pathPrefix}/tablet/image-${imageName}.jpg, ${pathPrefix}/tablet/image-${imageName}@2x.jpg 2x`}
        media="(min-width: 768px)"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className='min-w-full object-cover'
        srcSet={
          `${pathPrefix}/mobile/image-${imageName}.jpg ${pathPrefix}/mobile/image-${imageName}@2x.jpg 2x`
        }
        src={`${pathPrefix}/mobile/image-${imageName}.jpg`}
        alt={altText}
      />
    </picture>
  )
}
