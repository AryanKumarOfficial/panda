import '@/styles/globals.css'
import '../styles/style.css'

// we can use global css by importing them here

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
