import React from "react";
import "../Styles/Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

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
                        <label type="full-name" id="first">Full name</label>
                        <input className="f-name" type='text' placeholder="(e.g) John Smith" name="user_name" required/>

                        <label type="Email" id="second">Email</label>
                        <input className="Email" type='email' placeholder="e.g) ayandamarotya@gmail.com " name="user_email" required/>

                        <label type="Msg" id="third">Message</label>
                        <textarea name="message" className="your-message"  cols="11" rows="8"/>
                        <button type="submit" className="submit-btn">Submit</button>


                    </form>
                </section>
            </div>
        </div>
    );
}

export default Contact;