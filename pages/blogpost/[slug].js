// import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/blogPost.module.css'
import * as fs from 'fs'


// step 1: find the file according to the slug
// step 2: populate them inside the page
const Slug = (props) => {
    const [blog, setBlog] = useState(props.data)
    // useEffect(() => {
    //     if (!router.isReady)
    //         return
    //     const { slug } = router.query
    //     fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then((a) => {
    //         return a.json();
    //     })
    //         .then((parsed) => {
    //             setBlog(parsed)
    //         })
    // }
    //     , [router.isReady]
    // )

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <style jsx>
                    {`
                

                `}
                </style>
                <h1 > {blog && blog.title} </h1>
                <hr />
                <p className={styles.content}>{blog && blog.content}
                </p>
            </main>

        </div>
    )
}

// creates static side rendering
// doesn't update on updating the data content
// logic is not active during the rendering
// static file is generated in a out dir.

export async function getStaticPaths(context) {
    return {
        paths: [
            { params: { slug: "how-to-learn-django" } },
            { params: { slug: "how-to-learn-javascript" } },
            { params: { slug: "how-to-learn-nextjs" } },
            { params: { slug: "how-to-learn-python" } },
            { params: { slug: "how-to-learn-reactjs" } },
            { params: { slug: "how-to-learn-web-dev" } },
        ],
        fallback: true // false for blocking
    }
}

export async function getStaticProps(context) {
    // console.log(context);
    const { slug } = context.params
    let data = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

    return {
        props: { data: JSON.parse(data) }
    }

}




// export async function getServerSideProps(context) {
//     console.log()
//     const slug = context.query.slug
//     let response = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
//     let data = await response.json()


//     return {
//         props: { data },
//     }
// }

export default Slug