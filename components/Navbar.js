import Link from 'next/link'
import React from 'react'
import styles from '@/styles/Home.module.css'

const Navbar = () => {
    return (
        <>
            <nav className={styles.mainnav}>
                <ul>
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/blogs'><li>Blogs</li></Link>
                    <Link href='/about'><li>About</li></Link >
                    <Link href='/contact'><li>Contacts</li></Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar