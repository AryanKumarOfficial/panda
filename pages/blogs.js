import React, {  useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'fs'
import InfiniteScroll from 'react-infinite-scroll-component';

const Blogs = (props) => {
  const [count, setCount] = useState(2)
  const [blogs, setBlogs] = useState(props.data)

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
          dataLength={blogs.length} 
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

export async function getStaticProps(context) {
  let response = await fs.promises.readdir('blogdata');
  let allCount = response.length
  let myFile;
  let data = []
  for (let index = 0; index < 2; index++) {
    const item = response[index];
    myFile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    data.push(JSON.parse(myFile))
  }
  return {
    props: { data, allCount }
  }
}


export default Blogs        