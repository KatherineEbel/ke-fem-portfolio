import Head            from 'next/head'
import Image           from 'next/image'
import Link            from 'next/link'
import ResponsiveImage from 'components/ResponsiveImage'
import downArrows from 'public/images/icons/down-arrows.svg'

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
    <section id='about-me' className='flex flex-col gap-6'>
      <ResponsiveImage altText='Alex Spencer' imageName='homepage-profile'/>
      <div className='flex flex-col gap-7 border-t border-b border-grayish-dark-blue border-opacity-20 py-8'>
        <h2 className='h1'>About Me</h2>
        <p className='opacity-80'>
          I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.
        </p>
        <Link href='/portfolio'>
          <a className='btn-secondary'>Go to portfolio</a>
        </Link>
      </div>
    </section>
    <section className='flex flex-col justify-center items-center gap-10'>
      <h2 className='h1 text-center'>Interested in doing a project together?</h2>
      <Link href='/portfolio'>
        <a className='btn-secondary'>Contact Me</a>
      </Link>
    </section>
  </div>
)

export default Home
