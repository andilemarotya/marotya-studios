import React from "react";
import "../Styles/About.css";
import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <>
        <Helmet>
            <title>About Marotya Studios - Empowering Businesses with Technology</title>
            <meta name="description" 
            content="Learn about Marotya Studios, a leading software development company committed to empowering businesses through innovative web, mobile, AI, and ML solutions. 
            Discover our team, values, and commitment to excellence." />
            <link rel="canonical" href="/about" />

            {/* Add the Google Analytics gtag.js script here */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-28MPJLFSQ9"></script>
            <script>
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-28MPJLFSQ9');
                `}
            </script>
        </Helmet>
        <section className="abt-page">
            <h3 className="header">About Us</h3>
            <hr/>
            <div className="company">
                <h3 id="descr-header">Company Description</h3>
                <br/><br/>
                <p id="descr-text">
                    Marotya Studios is a science and tech company that delivers software as a service (SaaS) to businesses , individuals,
                    government, schools hospitals, and we are focused on innovation of software and games. It was founded by Ayanda Marotya & Mandile Marotya in September 2021, South Africa.
                    The services we offer are software development, machine learning & A.I services, web development and mobile development.
                    We take our clients from Planning & Analysis phase to designing & prototyping up until deployment of the software.
                </p>
            </div>

            <div className="company">
                <h3 id="descr-header">Our Goals</h3>
                <br/><br/>
                <p id="descr-text">
                    We looking forward in growing the business so we can have a positive impact on the unemployment rate of the youth by hiring or recruiting every year the majority being the junior employees.
                    <br/><br/>
                    Our main purpose of developing video games is to have a positive impact on the youth & children globally, mentor them, give them hope , knowledge , help them heal with whatever they might be going through all in the form of games.
                    Deliver the messages that we believe will influence them to be their better versions while spreading love and our great stories.
                </p>
            </div>

            <div className="management">
                <h3 id="manag-header">Management Team</h3>
                <div className="team">
                    <div className="person-wrapper">
                        <img src="/images/about/ace.png" alt="" className="photo"/>
                        <div className="details">
                            <p className="intel">
                                Mandile Marotya <br/><br/>
                                CO-CEO / Co-founder     (Software engineer) <br/><br/>
                                <a href="tel:+27729759950">Phone:  +27 72 975 9950 </a><br/><br/>
                                <a href="mailto:mandile@marotyastudios.com">E-mail:  mandile@marotyastudios.com</a><br/>
                            </p>
                        </div>
                    </div>

                    <div className="person-wrapper">
                        <img src="/images/about/aizy.png" alt="" className="photo"/>
                        <div className="details">
                            <p className="intel">
                                Ayanda Marotya <br/><br/>
                                CO-CEO / Co-founder     (Software engineer) <br/><br/>
                                <a href="tel:+27729759950">Phone:  +27 72 975 9950 </a><br/><br/>
                                <a href="mailto:ayanda@marotyastudios.com">E-mail:  ayanda@marotyastudios.com</a><br/>
                            </p>
                        </div>
                    </div>
                        

                </div>

            </div>
            <hr/>

           
        </section>
        </>

    );
}

export default About;