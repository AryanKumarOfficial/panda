import React, {  useState } from 'react'
import styles from '@/styles/Contact.module.css'
import Head from 'next/head'
import Script from 'next/script'

const About = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [desc, setDesc] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        let data = { name, email, phone, desc }
        fetch('http://localhost:3000/api/contact', {
            method: "POST",
            body: JSON.stringify(data)

        },)
            .then(response => response.json())
            .then(data => {
                setName('')
                setEmail('')
                setPhone('')
                setDesc('')
                alert("form submited")
            })
            .catch((error) => {
                alert(error)
            })

    }
    const handleChange = (e) => {
        if (e.target.name === "name") {
            setName(e.target.value)
        }
        else if (e.target.name === "email") {
            setEmail(e.target.value)
        }
        else if (e.target.name === "phone") {
            setPhone(e.target.value)
        }
        else if (e.target.name === "desc") {
            setDesc(e.target.value)
        }
    }


    return (
        <>

            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous" />



            </Head>
            <Script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></Script>
            <div className="container my-5">
                <h1 >Contact Us</h1>

                <form className={styles.form} method='POST' onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="name" placeholder="name@example.com" required value={name} onChange={handleChange} name='name' />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="email" placeholder="Password" required value={email} onChange={handleChange} name='email' />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="phone" className="form-control" id="phone" placeholder="phone" required value={phone} onChange={handleChange} name='phone' />
                        <label htmlFor="phone">Phone</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" placeholder="Leave a comment here" id="desc" style={{ height: "100px" }} required onChange={handleChange} name='desc' value={desc} />
                        <label htmlFor="desc">Comments</label>
                    </div>
                    <button type="submit" className="btn btn-primary mb-3" >Submit</button>

                </form >
            </div>
        </>
    )
}

export default About    