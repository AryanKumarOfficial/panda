import { useRouter } from 'next/router'
import React from 'react'
import styles from '@/styles/blogPost.module.css'

// step 1: find the file according to the slug
// step 2: populate them inside the page
const Slug = () => {

    const router = useRouter()
    const { slug } = router.query
    return (
        <div className={styles.blogItem}>
            <main className={styles.main}>
                <style jsx>
                    {`
                

                `}
                </style>
                <h1 className={styles.header}> title of the page {slug}</h1>
                <hr className={styles.contentDivider} />
                <p className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt assumenda ab cumque animi nostrum quidem, deleniti praesentium illo nesciunt, tenetur, culpa blanditiis rem repellat debitis earum. Aperiam delectus architecto eos, minima nihil laboriosam minus excepturi adipisci iure, et neque molestiae ab iste eius inventore! Non ratione aspernatur consectetur qui asperiores illum a ipsa esse perferendis voluptatum earum eaque, tenetur inventore unde suscipit eum, minima labore alias minus quasi illo neque expedita! Voluptate, deleniti sed harum vel eius dignissimos veniam quaerat maxime tempore voluptates reiciendis sint libero corrupti, impedit ipsam ducimus nobis quo magnam. Repellendus placeat labore consequuntur doloremque autem fugit, molestiae odit dolores neque consequatur laborum quo, aperiam culpa ab quibusdam. Molestiae est architecto rerum quos reiciendis repudiandae quas nihil, possimus aspernatur accusamus sapiente omnis consequuntur ducimus unde dicta. Mollitia dicta commodi et quod necessitatibus, provident amet non voluptatem tempora dolores magni vitae eaque quidem aut ratione neque, beatae aspernatur suscipit eum reiciendis? Iste quaerat adipisci, vitae reiciendis autem commodi? Possimus beatae cum consequuntur facilis impedit doloremque quam fugiat, nam, consectetur adipisci iste blanditiis voluptatem maiores libero. Porro temporibus, totam obcaecati eaque minima modi velit iusto! Vitae temporibus amet optio quia culpa odit illo repellendus ratione, suscipit voluptate sed dolore in ipsam ducimus mollitia voluptatibus ad excepturi repudiandae officia repellat facere at! Non corporis inventore provident beatae accusantium, odio quos dicta molestiae. Vero quis facere voluptate quod dolor ad ipsum soluta a perspiciatis quam non explicabo eius itaque doloremque quo, officia numquam cum pariatur, ipsam repellendus totam beatae. Ab aspernatur soluta error hic. Quos cupiditate, magnam non repellendus placeat vel porro ad, rem maxime corporis perferendis, illo dolorem in temporibus dolores error vero laboriosam sint quod? Ullam, placeat? Veritatis molestiae atque maxime quasi aliquam fuga pariatur quae tempora magni, esse quibusdam quod accusamus molestias nulla ad eos? Obcaecati, commodi qui corrupti doloremque earum id. Obcaecati veritatis pariatur in hic provident ipsam minus molestiae repudiandae sunt, illo aliquam non sapiente sequi nostrum fuga dolor iure deserunt et doloremque? Molestias sapiente, illo dolores cumque praesentium adipisci dolorem, iure numquam perferendis modi placeat nemo debitis natus eum rerum? Dolorum repellat velit laudantium rem sit! Voluptas culpa eveniet officiis ea alias itaque voluptates corrupti in magni labore, quos maxime, neque et mollitia fuga minima facilis. Odio cupiditate ipsa debitis ratione explicabo ipsam consequuntur repellat corrupti itaque quidem! Animi quidem accusantium distinctio voluptas repellat doloremque iste, odio maiores? Dolorum doloremque eum eveniet explicabo nostrum tempora ratione! Voluptate illo repudiandae saepe natus, quam consequuntur deserunt minus delectus, optio fuga et, fugiat voluptates doloremque autem. Similique voluptatum deleniti, adipisci esse labore iusto autem dolor culpa ad accusantium. Accusamus dolore quo magnam reiciendis officia necessitatibus culpa facere enim. Rem fuga dolores debitis aspernatur blanditiis atque deleniti totam qui at libero voluptatibus assumenda cupiditate quaerat voluptate odio dolore voluptas, ex perspiciatis! Doloremque animi veniam iste nulla. Omnis corporis velit et porro expedita. Distinctio eos culpa asperiores dolorem tempore, alias aliquid aliquam incidunt, recusandae nihil, quia tempora illo explicabo ab dolores. Accusantium atque, illo nisi deleniti minima quidem repellat asperiores inventore quos ipsam. Eos, deleniti. Beatae, consequuntur explicabo est nesciunt reprehenderit voluptate qui? Sit nisi quibusdam cumque harum, commodi dolorum cupiditate impedit incidunt aliquid, asperiores atque distinctio vel voluptate cum odio eius.
                </p>
            </main>

        </div>
    )
}

export default Slug