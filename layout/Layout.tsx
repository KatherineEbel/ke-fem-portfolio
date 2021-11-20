import Header                from '../components/Header'
import Footer                from '../components/Footer'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <div className='grid grid-rows-layout gap-10'>
      <Header/>
      <main className='px-8'>
        { children }
      </main>
      <Footer/>
    </div>
)
}
