import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'
const Blogs = () => {
  // Step 1: collect all the data from blogdata directory
  // Step 2: Itrate through them and display them
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/api/blogs').then((a) => {
      return a.json();
    })
      .then((parsed) => {
        setBlogs(parsed)
      })
  }, []
  )
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.blogs}>
          {blogs.map((item) => {
            return <div className={styles.blogItem} key={item.s}>
              <Link href={`blogpost/${item.slug}`}>
                <h3 className={styles.secondaryHeading}  >{item.title} </h3>
              </Link>
              <p className='blogItemP'>{item.content.substring(0, 120) + `...`}</p>
            </div>
          })}

        </div>
      </main>
    </div>
  )
}

export default Blogs        