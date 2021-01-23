import '../styles/globals.css'
import { AppProps } from 'next/app'
import { Layout, Sidebar } from 'components'

function MyApp({ Component, router, pageProps }: AppProps) {
  if (router.pathname.startsWith('/works')) {
    return (
      <Layout {...pageProps}>
        <Sidebar {...pageProps} />
        <Component {...pageProps} />
      </Layout>
    )
  }
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
