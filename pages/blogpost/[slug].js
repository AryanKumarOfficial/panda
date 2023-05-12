import React, { useState } from 'react'
import styles from '@/styles/blogPost.module.css'
import * as fs from 'fs'


const Slug = (props) => {
    const [blog, setBlog] = useState(props.data)
    function createMarkup(c) {
        return { __html: c }
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <style jsx>
                    {`
                

                `}
                </style>
                <h1 > {blog && blog.title} </h1>
                <hr />
                {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}

            </main>

        </div>
    )
}

export async function getStaticPaths(context) {
    let datas = await fs.promises.readdir(`blogdata`)
    datas = datas.map((item) => {
        return { params: { slug: item.split(".")[0] } }
    })

    return {
        paths: datas,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { slug } = context.params
    let data = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

    return {
        props: { data: JSON.parse(data) }
    }

}

export default Slug