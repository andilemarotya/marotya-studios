import React, { useState } from "react";
import "../Styles/Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";


const Contact = () => {

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

    const [msgSent , setMsgSent] = useState(false);

        
    return(
        <>
        <Helmet>
            <title>Contact</title>
            <meta name="description" content="Contact us for more info" />
            <link rel="canonical" href="/contact" />

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
        <div className="contact_page">
            <h3 id="contact-header">Contact Us</h3>
            <hr/>

            <div className="contacts">
                <section className="contact-text">
                    <p className="us">
                        To get in touch with us fill out the form on this page.
                        If you need to get in touch with us urgently you can call us!  The management phone numbers are on the “About Us page”
                    </p>

                </section>

                <section className="contact-form">
                    <form ref={form} onSubmit={sendEmail} className="reader">
                        <label type="full-name">Full name</label>
                        <input className="InputContact" type='text' placeholder="(e.g) John Smith" name="user_name" required/>

                        <label type="Email" >Email</label>
                        <input className="InputContact" type='email' placeholder="e.g) ayandamarotya@gmail.com " name="user_email" required/>

                        <label type="Subject">Subject</label>
                        <input className="InputContact" type='text' placeholder="Subject" name="subject" required/>


                        <label type="Msg" id="third">Message</label>
                        <textarea name="message" className="your-message"  cols="11" rows="8"/>
                        <button type="submit" className="submit-btn" onClick={() => setMsgSent(true)}>Submit</button>


                    </form>
                </section>
            </div>

           
        </div>
        </>
    );
}

export default Contact;