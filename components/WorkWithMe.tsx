import Link from 'next/link'

export default function WorkWithMe() {
  return (
    <section className="flex flex-col justify-center md:justify-between items-center gap-10 md:gap-8 md:py-20 md:flex-row">
      <h2 className="h2 text-center md:text-left md:flex-[3]">
        Interested in doing a project together?
      </h2>
      <div className="hidden md:block h-0.5 w-full bg-grayish-dark-blue bg-opacity-20 md:flex-[2]" />
      <Link href="/portfolio">
        <a className="btn btn-secondary md:flex-shrink-0">Contact Me</a>
      </Link>
    </section>
  )
}
