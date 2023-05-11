import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/blogPost.module.css'

// step 1: find the file according to the slug
// step 2: populate them inside the page
const Slug = () => {
    const [blog, setBlog] = useState()
    const router = useRouter()
    useEffect(() => {
        if (!router.isReady)
            return
        const { slug } = router.query
        fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then((a) => {
            return a.json();
        })
            .then((parsed) => {
                setBlog(parsed)
            })
    }
        , [router.isReady]
    )

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


export default Slug