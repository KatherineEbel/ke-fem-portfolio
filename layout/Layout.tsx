import Header from 'components/Header'
import Footer from 'components/Footer'
import { PropsWithChildren } from 'react'
import Head from 'next/head'

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <div className="grid grid-rows-layout gap-10 h-full w-full">
      <Head>
        <title>Frontend Mentor | Minimalist Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="px-8 md:px-10 md:mt-12 2xl:px-[9.75rem] max-w-screen-2xl place-self-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}
