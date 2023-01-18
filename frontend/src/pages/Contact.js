import React, { useState } from "react";
import "../Styles/Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import EnquirePopUp from "../components/EnquirePopUp";

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
        <div className="contact_page">
            <h3 id="contact-header">Contact Us</h3>
            <hr/>

            <div className="contacts">
                <section className="contact-text">
                    <p className="us">
                        To get in touch with us fill out the form on the right.
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

            <EnquirePopUp trigger={msgSent} setTrigger={setMsgSent}>
                <div className="sent">Message Sent</div>
            </EnquirePopUp>
        </div>
    );
}

export default Contact;