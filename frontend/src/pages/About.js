import React from "react";
import "../Styles/About.css";

const About = () => {
    return (
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
                <div id="team">
                    <div className="person-wrapper">
                        <img src="/images/about/ace.png" alt="" className="photo"/>
                        <div className="details">
                            <p className="intel">
                                Mandile Marotya <br/><br/>
                                CO-CEO / Co-founder     (Software engineer) <br/><br/>
                                phone:  +27 72 975 9950 <br/><br/>
                                E-mail:  marotyastudios@gmail.com <br/>
                            </p>
                        </div>
                    </div>

                    <div className="person-wrapper">
                        <img src="/images/about/aizy.png" alt="" className="photo"/>
                        <div className="details">
                            <p className="intel">
                                Ayanda Marotya <br/><br/>
                                CO-CEO / Co-founder     (Software engineer) <br/><br/>
                                phone:  +27 72 975 9950 <br/><br/>
                                E-mail:  ayandamarotya@gmail.com <br/>
                            </p>
                        </div>
                    </div>
                        
                    <div className="person-wrapper">
                        <img src="/images/about/lebo.png" alt="" className="photo"/>
                        <div className="details">
                            <p className="intel">
                                Lebogang Sijila <br/><br/>
                                CMO / Marketing manager <br/><br/>
                                phone:  +27 62 380 1425 <br/><br/>
                                E-mail:  lebosi709@gmail.com <br/>
                            </p>
                        </div>
                    </div>

                </div>

            </div>
            <hr/>

           
        </section>
             

    );
}

export default About;