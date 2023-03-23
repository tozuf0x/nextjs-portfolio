import '@/styles/globals.css';
import '@/styles/header.css';
import NProgress from 'nprogress'
import Router from 'next/router'
import Layout from '@/components/layout';
Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
export default function App({ Component, pageProps }) {
  return (
    <Layout>
    <Component {...pageProps} />
    </Layout>
  )
}
