import { AppProps } from 'next/app'
import Layout from 'layout/Layout'
import 'react-toastify/dist/ReactToastify.css'
import 'styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
