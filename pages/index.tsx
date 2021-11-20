import Head                            from 'next/head'
import Image                           from 'next/image'
import Link                            from 'next/link'
import ResponsiveImage                 from 'components/ResponsiveImage'
import downArrows                   from 'public/images/icons/down-arrows.svg'
import PageSection from 'components/PageSection'
import WorkWithMe                   from 'components/WorkWithMe'

const section=
  {
    heading: 'About Me',
    bodyText: 'I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.',
    imageUrl: 'homepage-profile',
    linkPath: '/portfolio',
    linkText: 'Go to portfolio'
  }


const Home = () => (
  <div className='grid gap-24'>
    <Head>
      <title>Frontend Mentor | Minimalist Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section className='flex flex-col gap-6'>
      <ResponsiveImage altText='Home office setup' imageName='homepage-hero'/>
      <h2 className='h1 pr-3'>Hey, I’m Alex Spencer and I love building beautiful websites</h2>
      <Link href={'#about-me'}>
          <a className='self-start flex justify-start items-center gap-4 w-[12.5rem] tracking-wide h-12 mt-4 bg-dark-blue'>
            <span className='bg-black bg-opacity-10 relative w-16 h-12 flex flex-col justify-center items-center'>
             <Image src={downArrows} alt='scroll down' />
            </span>
            <span className='text-center text-xs uppercase text-white'>
              About me
            </span>
          </a>
      </Link>
    </section>
    <PageSection {...section} />
    <WorkWithMe/>
  </div>
)

export default Home