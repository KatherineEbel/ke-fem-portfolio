import Head from 'next/head'
import PageSection from 'components/PageSection'
import projects from 'lib/projects'
import WorkWithMe from 'components/WorkWithMe'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useEffect, useState } from 'react'

// in case one day want to get data from server
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects,
    },
    revalidate: 60 * 60 * 24,
  }
}

export default function Portfolio({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [sections, setSections] = useState([])

  useEffect(() => {
    if (!projects) return
    setSections(
      projects.map((p) => {
        return {
          heading: p.name,
          bodyText: p.description,
          imageUrl: p.screenshots.portfolio,
          linkPath: `/portfolio/${p.name.toLowerCase()}`,
          linkText: `View Project`,
        }
      }),
    )
  }, [projects])

  return (
    <div className="grid gap-24">
      <Head>
        <title>Frontend Mentor | Portfolio</title>
      </Head>
      {sections.map((s) => (
        <PageSection key={s.linkPath} {...s} reversed />
      ))}
      <WorkWithMe />
    </div>
  )
}
