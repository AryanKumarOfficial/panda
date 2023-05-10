import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Dumb from '@/components/dumb'
// different styles can be imported as different object in nextjs as a component

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // styled jsx is a way of writing css in a particular component

  console.log(styles);
  return <>
    <div className={styles.container}>
      <Dumb />
      {/* applying internal css 
        component level scope by default
      */}
      <style jsx>
        {`
    .mySpan{
      color:red;
    }
    `}
      </style>
      <Head>
        <title >Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="next, hunting coder, hunting blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.mainnav}>
        <ul>
          <Link href='/'><li>Home</li></Link>
          <Link href='/blogs'><li>Blogs</li></Link>
          <Link href='/about'><li>About</li></Link >
          <Link href='/contact'><li>Contacts</li></Link>
        </ul>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className="mySpan dummy">Hunting Coder</span>
        </h1>

        <p className={styles.description}>
          A blog for hunting coders by a hunting coder
        </p>

        <div className="blogs">
          <h2 className={styles.secondaryHeading}>Popular Blogs</h2>
          <div className={styles.blogItem}>
            <h3>How to learn javascript </h3>
            <p>javascript is the languauge to design logic on web</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn javascript </h3>
            <p>javascript is the languauge to design logic on web</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn javascript </h3>
            <p>javascript is the languauge to design logic on web</p>
          </div>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  </>;
}
