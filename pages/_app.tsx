import { AppProps } from 'next/app'
import 'styles/global.css'
import Layout       from 'layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
