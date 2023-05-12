import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'fs'
import InfiniteScroll from 'react-infinite-scroll-component';

const Blogs = (props) => {
  const [count, setCount] = useState(2)
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

  const fetchMoreData = async () => {
    let response = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`)
    setCount(count + 2)
    let data = await response.json()
    setBlogs(data)
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={props.allCount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className={styles.blogs}>
            {blogs.map((item) => {
              return <div className={styles.blogItem} key={item.s}>
                <h3 className={styles.secondaryHeading}  >{item.title} </h3>
                <p className='blogItemP'>{item.metaDesc}</p>
                <Link href={`blogpost/${item.slug}`}>
                  <button type="submit" className={styles.btn}>Read more</button>
                </Link>
              </div>
            })}

          </div>
        </InfiniteScroll>
      </main>
    </div >
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
  let allCount = response.length
  let myFile;
  let data = []
  for (let index = 0; index < 2; index++) {
    const item = response[index];
    // console.log(item);
    myFile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    data.push(JSON.parse(myFile))
  }
  return {
    props: { data, allCount }
  }
}


export default Blogs        