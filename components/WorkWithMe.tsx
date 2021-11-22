import Link from 'next/link'

export default function WorkWithMe() {
  return (
    <section className="flex flex-col justify-center items-center gap-10">
      <h2 className="h1 text-center">
        Interested in doing a project together?
      </h2>
      <Link href="/portfolio">
        <a className="btn btn-secondary">Contact Me</a>
      </Link>
    </section>
  )
}
