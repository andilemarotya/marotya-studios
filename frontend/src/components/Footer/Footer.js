import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";
import {FaInstagram , FaFacebook, FaLinkedin, FaWhatsapp,} from 'react-icons/fa';
import axios from "axios";
import NewsletterSubscribe from "./NewsLetterSubscribe";



const Footer = () => {
    
    return ( 
        <footer className="Footer">      
                
           
           <ul className="foot-wrapper">
                {/*The footer logo image*/}
                <img src="/images/footer-logo.png" alt="" className="footer-logo"/>
                
                <div className="info">
                    <span id="text">To get updates on our new releases fill in below.</span>
                    {/*
                    <form className="email">
                        <input
                        className="fill"
                        placeholder="Enter email"
                        name="sub_email"
                        required
                       
                        />
                        <button className="btn-sub" type="submit">
                            Subscribe
                        </button>
                    </form>
                    */}
                    <NewsletterSubscribe />
                    
                    
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