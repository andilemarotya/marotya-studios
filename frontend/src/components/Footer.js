import React from "react";
import { Link } from "react-router-dom";
import "../components/Footer.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';



const Footer = () => {
    
    return ( 
        <footer className="Footer">      
                
           
           <ul className="foot-wrapper">
                {/*The footer logo image*/}
                <img src="/images/footer-logo.png" alt="" className="footer-logo"/>
                
                <div className="info">
                    <span id="text">To get updates on our new releases fill in below.</span>
                    <form className="email"> 
                        <input className="fill" placeholder="Enter email" label="To get updates on our new releases fill in below"></input>
                        <button className="btn-sub">Subscribe</button>
                    </form>

                    
                    <ul className="foot-links">
                        <ul className="list">
                            <Link to="/" className="f-home">Home</Link>
                            <Link to="/Services" className="f-services">Services</Link>
                            <Link to="/About" className="f-about">About Us</Link>
                            <Link to="/Contact" className="f-contact">Contact Us</Link>
                        </ul>

                        <ul className="list2">
                            <Link to="" className="f-partner">Partnership</Link>
                            <Link to="" className="f-mail">marotyastudios@gmail.com</Link>
                            <span className="f-no">Phone: +27 72 975 9950</span>
                            <Link to="/Terms" className="terms">Terms & Conditions</Link>
                        </ul>
                    </ul>

                </div>
                
            </ul>
            <hr id="foot-line"/>
            <div className="end">
                <span>All rights reserved</span>
                <div>Social Media Links</div>
            </div>
             
        </footer>
        
    );
}

export default Footer;