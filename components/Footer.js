import React from 'react'
import styles from '@/styles/Footer.module.css'
import Script from 'next/script'

const Footer = () => {
    return (
        <>
            <Script src="https://kit.fontawesome.com/248f39001f.js" crossorigin="anonymous" />
            <footer className={styles.footer} style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
               <div>
                 <span> Contact Us</span>
                <a target='_blank' href="https://www.instagram.com/jivit.prani"><i class="fa-brands fa-instagram"></i></a>
                <a target='_blank' href="https://www.facebook.com"><i class="fa-brands fa-facebook"></i></a>
                <a target='_blank' href="https://www.linkedin.com/in/aryan-kumar-8550b71a1/"><i class="fa-brands fa-linkedin"></i></a>
                <a target='_blank' href="https://www.twitter.com/@AryanKu20348088"><i class="fa-brands fa-twitter"></i></a>
                <a target='_blank' href="https://www.github.com/Aryan-ji"><i class="fa-brands fa-github"></i></a>
                </div>

                <div class={styles.copy} >
                    ©2023 Copyright : 
                    <a class="text-reset fw-bold" href="https://github.com/Aryan-ji"> HuntingCoder</a>
                </div>
            </footer>
        </>
    )
}

export default Footer