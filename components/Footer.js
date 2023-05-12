import React from 'react'
import styles from '@/styles/Footer.module.css'
import Script from 'next/script'
import Head from 'next/head'

const Footer = () => {
    return (
        <>
            <Head>
                <style>
                    {
                        `
                          
                          
                          
                          
                          
                          
                          
                          .process-scetion .slider-nav-item {
                            position: relative;
                            flex-grow: 0;
                            flex-shrink: 0;
                            border-radius: 50%;
                            text-align: center;
                            background: #fff;
                            cursor: pointer;
                            transition: all 0.4s ease;
                          }
                          
                          .social-icons a {
                            border-radius: 50px;
                            color: #3f345f;
                            display: inline-block;
                            line-height: 52px;
                            height: 50px;
                            width: 50px;
                            box-shadow: 0 5px 25px rgba(93, 70, 232, 0.15);
                            margin: 15px 15px;
                            font-size: 22px;
                          }
                          
                          a {
                            text-decoration: none !important;
                            color: #3f345f;
                            transition: all 0.3s ease 0s;
                          }
                          
                          
                          
                          .slider-nav-item:before {
                            position: absolute;
                            content: "";
                            height: calc(100% + 16px);
                            width: calc(100% + 16px);
                            top: -8px;
                            left: -8px;
                            border-radius: 50%;
                            border: 1px solid rgba(132, 132, 164, 0.35);
                            animation: 1.5s linear 0s normal none infinite focuse;
                          }
                          
                          .process-scetion .slider-nav-item:last-child:after {
                            display: none;
                          }
                          .process-scetion .slider-nav-item .ikon {
                            font-size: 50px;
                            line-height: 80px;
                          }
                          
                          
                          @keyframes focuse {
                            0% {
                              transform: scale(0.8);
                              opacity: 1;
                            }
                            75% {
                              transform: scale(1.2);
                              opacity: 0;
                            }
                            100% {
                              transform: scale(1.2);
                              opacity: 0;
                            }
                          }
                          @keyframes slide {
                            from {
                              background-position: 0 0;
                            }
                            to {
                              background-position: 40px 0;
                            }
                          }
                          
                          
                          .shadow-img2 {
                            background-position: bottom;
                            background-image: url("../img/shadow2.png");
                            background-size: 100%;
                            background-repeat: no-repeat;
                          }
                          
                          
                          @-webkit-keyframes jello-horizontal {
                            0% {
                              -webkit-transform: scale3d(1, 1, 1);
                              transform: scale3d(1, 1, 1);
                            }
                            30% {
                              -webkit-transform: scale3d(1.25, 0.75, 1);
                              transform: scale3d(1.25, 0.75, 1);
                            }
                            40% {
                              -webkit-transform: scale3d(0.75, 1.25, 1);
                              transform: scale3d(0.75, 1.25, 1);
                            }
                            50% {
                              -webkit-transform: scale3d(1.15, 0.85, 1);
                              transform: scale3d(1.15, 0.85, 1);
                            }
                            65% {
                              -webkit-transform: scale3d(0.95, 1.05, 1);
                              transform: scale3d(0.95, 1.05, 1);
                            }
                            75% {
                              -webkit-transform: scale3d(1.05, 0.95, 1);
                              transform: scale3d(1.05, 0.95, 1);
                            }
                            100% {
                              -webkit-transform: scale3d(1, 1, 1);
                              transform: scale3d(1, 1, 1);
                            }
                          }
                          @keyframes jello-horizontal {
                            0% {
                              -webkit-transform: scale3d(1, 1, 1);
                              transform: scale3d(1, 1, 1);
                            }
                            30% {
                              -webkit-transform: scale3d(1.25, 0.75, 1);
                              transform: scale3d(1.25, 0.75, 1);
                            }
                            40% {
                              -webkit-transform: scale3d(0.75, 1.25, 1);
                              transform: scale3d(0.75, 1.25, 1);
                            }
                            50% {
                              -webkit-transform: scale3d(1.15, 0.85, 1);
                              transform: scale3d(1.15, 0.85, 1);
                            }
                            65% {
                              -webkit-transform: scale3d(0.95, 1.05, 1);
                              transform: scale3d(0.95, 1.05, 1);
                            }
                            75% {
                              -webkit-transform: scale3d(1.05, 0.95, 1);
                              transform: scale3d(1.05, 0.95, 1);
                            }
                            100% {
                              -webkit-transform: scale3d(1, 1, 1);
                              transform: scale3d(1, 1, 1);
                            }
                          }
                          
                          .jello-horizontal {
                            -webkit-animation: jello-horizontal 0.9s both;
                            animation: jello-horizontal 0.9s both;
                          }
                          
                          .social-bar a:hover i {
                            -webkit-animation: jello-horizontal 0.9s both;
                            animation: jello-horizontal 0.9s both;
                          }
                          
                          @media only screen and (max-width: 300px) {
                            .process-scetion .slider-nav-item {
                              height: 30px;
                              width: 30px;
                              margin: 15px 10px;
                              line-height: 28px;
                            }
                          }
                          @media only screen and (max-width: 600px) {
                            .social-icons{
                                margin:10px -150px;
                                position:relative;
                            }
                            .social-icons a {
                                margin-right:5px

                            }
                          }
                          
                    `
                    }
                </style>
            </Head>
            <Script src="https://kit.fontawesome.com/248f39001f.js" crossorigin="anonymous" />
            <footer className={styles.footer} style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                <div>
                    <span> </span>

                    <section class="trial-block shadow3" id="ContactUs">
                        <div class="height450">
                            <div class="section-title text-center">
                                <span class="badge badge-info"></span>
                                <h2 style={{ textAlign: "center" }}>Contact Us</h2>
                            </div>
                            <div class="social-overlap process-scetion mt100">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-md-10">
                                            <div class="social-bar">
                                                <div class="social-icons mb-3 iconpad text-center" style={{ display: "flex", justifyContent: "center" }}>


                                                    <a class="slider-nav-item"><i class="fab fa-facebook"></i></a>
                                                    <a class="slider-nav-item"><i class="fab fa-twitter"></i></a>
                                                    <a class="slider-nav-item" target='_blank' href="https://www.instagram.com/jivit.prani"><i className="fa-brands fa-instagram"></i></a>
                                                    <a class="slider-nav-item" target='_blank' href="https://www.linkedin.com/in/aryan-kumar-8550b71a1/"><i className="fa-brands fa-linkedin"></i></a>
                                                    <a class="slider-nav-item" target='_blank' href="https://www.github.com/Aryan-ji"><i className="fa-brands fa-github"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* <a className={styles.insta} target='_blank' href="https://www.instagram.com/jivit.prani"><i className="fa-brands fa-instagram"></i></a>
                <a target='_blank' href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a>
                <a target='_blank' href="https://www.linkedin.com/in/aryan-kumar-8550b71a1/"><i className="fa-brands fa-linkedin"></i></a>
                <a target='_blank' href="https://www.twitter.com/@AryanKu20348088"><i className="fa-brands fa-twitter"></i></a>
                <a target='_blank' href="https://www.github.com/Aryan-ji"><i className="fa-brands fa-github"></i></a> */}
                </div>

                <div className={styles.copy} >
                    ©2023 Copyright :
                    <a className="text-reset fw-bold" href="https://github.com/Aryan-ji"> HuntingCoder</a>
                </div>
            </footer>
        </>
    )
}

export default Footer