import Head              from 'next/head'
import PageSection       from 'components/PageSection'
import portfolioProjects from 'lib/projects'
import WorkWithMe        from 'components/WorkWithMe'

const sections = portfolioProjects.map(p => {
  return {
    heading: p.name,
    bodyText: p.description,
    imageUrl: p.screenshots.portfolio,
    linkPath: `/portfolio/${p.name.toLowerCase()}`,
    linkText: `View Project`
  }
})

export default function Portfolio() {
  return (
    <div className='grid gap-24'>
      <Head>
        <title>Frontend Mentor | Portfolio</title>
      </Head>
      { sections.map(s => (
        <PageSection key={s.linkPath} {...s} />
      ))}
      <WorkWithMe/>
    </div>
  )
}
