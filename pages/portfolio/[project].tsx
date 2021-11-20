import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import projects from 'lib/projects'
import arrowLeft from 'public/images/icons/arrow-left.svg'
import arrowRight from 'public/images/icons/arrow-right.svg'
import ResponsiveImage from '../../components/ResponsiveImage'
import WorkWithMe from '../../components/WorkWithMe'

export const getStaticProps: GetStaticProps = (context) => {
  const { params } = context
  const projectIndex = projects.findIndex(
    (p) => p.name.toLowerCase() === params.project,
  )
  const length = projects.length
  return {
    props: {
      project: projects[projectIndex],
      previous: projects[(projectIndex + length - 1) % length].name,
      next: projects[(projectIndex + 1) % length].name,
    },
  }
}

export async function getStaticPaths() {
  const paths = projects.map((p) => ({
    params: { project: p.name.toLowerCase() },
  }))
  return {
    paths,
    fallback: false,
  }
}

export default function ProjectDetail({
  project,
  previous,
  next,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="grid gap-10">
      <header>
        <ResponsiveImage
          altText={`${project.name} screenshot`}
          imageName={project.screenshots.hero}
        />
      </header>
      <section className="section">
        <h2 className="h1">{project.name}</h2>
        <p className="body-1">{project.description}</p>
        <p className="text-cyan mr-6">{project.tags.join(' / ')}</p>
        <a className="btn-secondary">Visit Website</a>
      </section>
      <section className="flex flex-col gap-7">
        <h3 className="h3">Project Background</h3>
        <p className="body-2">{project.background}</p>
      </section>
      <section className="flex flex-col gap-8">
        <h3 className="h3 mb-2">Static Previews</h3>
        {Object.keys(project.screenshots)
          .filter((k) => k.includes('preview'))
          .map((k, i) => (
            <ResponsiveImage
              key={i}
              altText={`${project.name} preview ${i + 1}`}
              imageName={project.screenshots[k]}
            />
          ))}
      </section>
      <nav className="flex justify-evenly h-full">
        <Link href={`/portfolio/${previous.toLowerCase()}`}>
          <a className="project-nav-link group border-r items-start w-full">
            <Image src={arrowLeft} alt="arrow left" />
            <h4 className="h3 font-serif">{previous}</h4>
            <span className="capitalize opacity-50 text-body1">
              previous project
            </span>
          </a>
        </Link>
        <Link href={`/portfolio/${next.toLowerCase()}`}>
          <a className="project-nav-link items-end w-full">
            <Image src={arrowRight} alt="arrow right" />
            <h4 className="h3 font-serif">{next}</h4>
            <span className="capitalize opacity-50 text-body1">
              next project
            </span>
          </a>
        </Link>
      </nav>
      <WorkWithMe />
    </div>
  )
}
