import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'fs'
const Blogs = (props) => {
  
  // console.log(props);
  // Step 1: collect all the data from blogdata directory
  // Step 2: Itrate through them and display them
  const [blogs, setBlogs] = useState(props.data)
  // useEffect(() => {
  //   fetch('http://localhost:3000/api/blogs').then((a) => {
  //     return a.json();
  //   })
  //     .then((parsed) => {
  //       setBlogs(parsed)
  //     })
  // }, []
  // )
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.blogs}>
          {blogs.map((item) => {
            return <div className={styles.blogItem} key={item.s}>
              <Link href={`blogpost/${item.slug}`}>
                <h3 className={styles.secondaryHeading}  >{item.title} </h3>
              </Link>
              <p  className='blogItemP'>{item.metaDesc}</p>
            </div>
          })}

        </div>
      </main>
    </div>
  )
};
/*
  logic to generate server side rendering to help bots to read our data 
  static html file is sent on every request from client and updates upon the changes in the content 
*/
// export async function getServerSideProps(context) {
//   let response = await fetch('http://localhost:3000/api/blogs');
//   let data = await response.json();
//   return {
//     props: { data },
//   }
// }

export async function getStaticProps(context) {
  let response = await fs.promises.readdir('blogdata');
  let myFile;
  let data = []
  for (let index = 0; index < response.length; index++) {
    const item = response[index];
    // console.log(item);
    myFile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    data.push(JSON.parse(myFile))
  }
  return {
    props: { data }
  }
}


export default Blogs        