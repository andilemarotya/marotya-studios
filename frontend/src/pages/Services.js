import React from "react";
import "../Styles/Services.css";
import { useState } from "react";
import EnquirePopUp from "../components/EnquirePopUp";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";


const Services = () => {

    const [BtnPopUp , setBtnPopUp] = useState(false);
    {/*const [msgSent , setMsgSent] = useState(false);*/}


    {/*This is where we define send email function*/}
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hddu6zw', 'template_ty2ky7b', form.current, 'TUzGZFgWB8_xhny8t')
        .then((result) => {
            console.log(result.text);
           
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    };
    

    return(
        <>
        <Helmet>
            <title>Our Services - Marotya Studios</title>
            <meta name="description" 
            content="Discover our comprehensive software development services at Marotya Studios. 
            From web and mobile app development to AI and ML solutions, we tailor innovative technologies to meet your business needs." />
            <link rel="canonical" href="/services" />

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
        <div>
            <section className="services_section1">
                <h3 className="serv_header">Our Services</h3>
                <hr id="hr-line1"/>


                {/* Website Section Style starts here */}
                <div className="Website-wrapper">
                    
                    <div className="web-text-wrapper">
                        <div className="Web-text-header">Website</div>
                        <div className="web-text">
                            Web development, we take you from planning & analysis through designing & prototyping your website, development phase, until deployment.
                        </div>
                    </div>

                    <div className="img-wrapper">
                        <div className="price-wrapper">
                            <button className="enquire" onClick={() => setBtnPopUp(true)}>Enquire</button>
                            <div className="price">
                                Price: <div id="amount">$99.95 - $1000+</div>
                            </div>

                        </div>
                        <img src="/images/services/Website_pic.png" alt="" className="web-img"/>
                    </div>
                </div>
                {/*Website Section style ends here*/}
                <hr className="hr-line"/>
                <br/><br/>

                {/*Mobile App Section style starts here*/}
                <div className="Website-wrapper">
                    
                    <div className="web-text-wrapper">
                        <div className="Web-text-header">Mobile Application</div>
                        <div className="mobile-text">
                            Mobile development, we take you from planning & analysis through designing & prototyping your mobile application, development phase, until deployment.  
                        </div>
                    </div>

                    <div className="img-wrapper">
                        <div className="price-wrapper">
                            <button className="enquire" onClick={() => setBtnPopUp(true)}>Enquire</button>
                            <div className="price">
                                Price: <div id="amount">$249.95 - $1000+</div>
                            </div>
                        </div>
                        <img src="/images/services/mobile_app-pic.png" alt="" className="web-img"/>
                    </div>
                </div>
                {/*Mobile App Section style ends here*/}
                <hr className="hr-line"/>
                <br/><br/>

                {/*Software service Section style starts here*/}
                <div className="Website-wrapper">
                    
                    <div className="web-text-wrapper">
                        <div className="Web-text-header">Software</div>
                        <div className="software-text">
                            Software development, we take you from planning & analysis through designing & prototyping your custom software, development phase, until deployment.  
                        </div>
                    </div>

                    <div className="img-wrapper">
                        <div className="price-wrapper">
                            <button className="enquire2" onClick={() => setBtnPopUp(true)}>Enquire</button>
                            <div className="price">
                                Price: <div id="amount">$599.95 - $10000+</div>
                            </div>
                        </div>
                        <img src="/images/services/software-pic.png" alt="" className="web-img"/>
                    </div>
                </div>
                {/*Software service Section style ends here*/}
                
                <hr className="hr-line"/>
                <br/><br/>

                {/*A.I service Section style starts here*/}
                <div className="Website-wrapper">
                    
                    <div className="web-text-wrapper">
                        <div className="Web-text-header">A.I Services</div>
                        <div className="software-text">
                            We offer high quality Artificial Intelligence services,<br/> we modify your already existing software , 
                            A.I custom services from planning & analysis up until deployment of the software.
                        </div>
                    </div>

                    <div className="img-wrapper">

                        <div className="price-wrapper">
                            <button className="enquire2" onClick={() => setBtnPopUp(true)}>Enquire</button>
                            <div className="price">
                                Price: <div id="amount">$599.95 - $10000+</div>
                            </div>
                        </div>
                        <img src="/images/services/A.I pic.png" alt="" className="web-img"/>
                    </div>
                </div>
                {/*A.I service Section style ends here*/}
                <hr/>

                 {/*Here we write the enquiry form  that's goona be displayed on enquire button
                 
                 {isEnquire && (<form className={isEnquire ? "":""}>
                    <label type='text'>Full Name</label>
                    <input type='name' className="name-input" name="user_name" placeholder="e.g) Nelson Mandela"/>


                </form>)}
                */}

                 {/* This is where we use our created pop up form */}
                <EnquirePopUp trigger={BtnPopUp} setTrigger={setBtnPopUp}>
                    <form ref={form} onSubmit={sendEmail} className="EnquireForm">
                        <label type="text">Full Name</label>
                        <input className="PopInput" placeholder=" e.g) Nelson Mandela" name="user_name" required/>
                        <br/>

                        <label type="email">Email</label>
                        <input className="PopInput" placeholder=" e.g) ayandamarotya@gmail.com" name="user_email" required/>
                        <br/>

                        <label>Service</label>
                        <select className="PopInput" name="subject">
                            <option>Website</option>
                            <option>Mobile Application</option>
                            <option>Software</option>
                            <option>Artificial Intelligence</option>

                        </select>
                        <br/>

                        <label>Message</label>
                        <textarea cols="10" rows="10" name="message" className="text-area"/>
                        <br/>
                        
                        <div className="form-btns-wrapper">
                            <button className="form-btns" >Submit</button>
                        </div>

                    </form>
                </EnquirePopUp>
                
            </section>

        </div>
        </>
    );
}

export default Services;