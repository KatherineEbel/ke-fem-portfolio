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
      <div className="grid gap-10 lg:grid-rows-detail lg:gap-y-10">
        <section className="section border-t-b lg:self-start">
          <h2 className="h1 md:row-start-1 md:row-span-1 md:col-span-1">
            {project.name}
          </h2>
          <p className="body-2 md:row-span-full md:pr-4">
            {project.description}
          </p>
          <p className="text-cyan md:row-start-2 md:mr-8 font-bold text-xs">
            <span className="block whitespace-nowrap">
              {project.tags.slice(0, 2).join(' / ')}
            </span>
            <span>{project.tags.slice(2).join(' / ')}</span>
          </p>
          <a className="btn btn-secondary md:row-start-3 col-start-1">
            Visit Website
          </a>
        </section>
        <section className="flex flex-col gap-7 lg:row-start-1 lg:row-end-2 lg:col-start-2">
          <h3 className="h3">Project Background</h3>
          <p className="body-2">{project.background}</p>
        </section>
        <section className="flex flex-col gap-8 lg:col-start-2 lg:row-start-2">
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
      </div>
      <nav className="flex justify-evenly h-full">
        <Link href={`/portfolio/${previous.toLowerCase()}`}>
          <a className="project-nav-link group border-r items-start md:items-center w-full">
            <Image src={arrowLeft} alt="arrow left" />
            <div>
              <h4 className="h3 font-serif">{previous}</h4>
              <span className="capitalize opacity-50 text-body1">
                previous project
              </span>
            </div>
          </a>
        </Link>
        <Link href={`/portfolio/${next.toLowerCase()}`}>
          <a className="project-nav-link items-end md:items-center w-full md:flex-row-reverse">
            <div>
              <Image src={arrowRight} alt="arrow right" />
            </div>
            <div>
              <h4 className="h3 font-serif">{next}</h4>
              <span className="capitalize opacity-50 text-body1">
                next project
              </span>
            </div>
          </a>
        </Link>
      </nav>
      <WorkWithMe />
    </div>
  )
}
