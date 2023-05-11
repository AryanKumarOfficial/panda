import React from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'
const Blogs = () => {
  // Step 1: collect all the data from blogdata directory
  // Step 2: Itrate through them and display them
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <style jsx>
          {`
        h2 {
          font-size: 38px;
          font-size: 28px;
        
        margin-bottom: 2rem;
  }
    `}
        </style>
        <div className={styles.blogs}>
          <div className={styles.blogItem}>
            <Link href={'/blogpost/How-to-learn-javascript'}>
              <h2>How to learn javascript </h2>
            </Link>
            <p>javascript is the languauge to design logic on web</p>
          </div>
          <div className={styles.blogItem}>
            <h2>How to learn javascript </h2>
            <p>javascript is the languauge to design logic on web</p>
          </div>
          <div className={styles.blogItem}>
            <h2>How to learn javascript </h2>
            <p>javascript is the languauge to design logic on web</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Blogs        