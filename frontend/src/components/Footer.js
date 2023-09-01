import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../components/Footer.css";
import {FaInstagram , FaFacebook, FaLinkedin, FaWhatsapp,} from 'react-icons/fa';
import axios from "axios";



const Footer = () => {
    const [email, setEmail] = useState("");
    const [subscriptionStatus, setSubscriptionStatus] = useState("");

    const handleSubscription = async (e) => {
        e.preventDefault();

        try {
        // Make a request to Mailchimp API to add the subscriber
        const response = await axios.post(
            "https://us21.api.mailchimp.com/3.0/lists/81de093c5e/members"
,
            {
            email_address: email,
            status: "subscribed",
            },
            {
            headers: {
                Authorization: "Bearer 2044741c07a27d268da78db9423f6843-us21",
            },
            }
        );

        if (response.status === 200) {
            setSubscriptionStatus("Subscribed successfully");
        } else {
            setSubscriptionStatus("Subscription failed");
        }
        } catch (error) {
        console.error(error);
        setSubscriptionStatus("Internal server error");
        }
    };

    return ( 
        <footer className="Footer">      
                
           
           <ul className="foot-wrapper">
                {/*The footer logo image*/}
                <img src="/images/footer-logo.png" alt="" className="footer-logo"/>
                
                <div className="info">
                    <span id="text">To get updates on our new releases fill in below.</span>

                    <form className="email" onSubmit={handleSubscription}>
                        <input
                        className="fill"
                        placeholder="Enter email"
                        name="sub_email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className="btn-sub" type="submit">
                            Subscribe
                        </button>
                    </form>
                    {subscriptionStatus && <p>{subscriptionStatus}</p>}
                    
                    <ul className="foot-links">
                        <ul className="list">
                            <Link to="/" className="f-home">Home</Link>
                            <Link to="/Services" className="f-services">Services</Link>
                            <Link to="/About" className="f-about">About Us</Link>
                            <Link to="/Contact" className="f-contact">Contact Us</Link>
                        </ul>

                        <ul className="list2">
                            
                            <a href="mailto:marotyastudios@gmail.com" className="f-mail">support@marotyastudios.com</a>
                            <a href="tel:+27729759950" className="f-no">Phone: +27 72 975 9950</a>
                            <Link to="/Terms" className="terms">Terms & Conditions</Link>
                        </ul>
                    </ul>

                </div>
                
            </ul>
            <hr id="foot-line"/>
            <div className="end">
                <span>All rights reserved</span>
                <div className="social-media">
                    <a href="https://www.instagram.com/marotyastudios/"><FaInstagram className="icons"/></a>
                    <a href="https://www.facebook.com/profile.php?id=100087907607594"><FaFacebook className="icons"/></a>
                    <a href="https://www.linkedin.com/company/marotya-studios/"><FaLinkedin className="icons"/></a>
                    <a href=" https://wa.me/+27729759950"><FaWhatsapp className="icons"/></a>
                
                </div>
                


            </div>
             
        </footer>
        
    );
}

export default Footer;