import { Link } from "react-router-dom";
import {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import './Navbar.css';
import logo from '../images/Marotya-Studios-Logo.png';


const NavBar = () => {

    const [isMobile,setIsMobile] = useState(false);

    
    return ( 
        <nav className="navbar">
            <Link to="/"><img src={logo} className="mslogo" alt=''/></Link>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setIsMobile(false)}>
                <Link to="/" className="home">
                    <li>Home</li>
                </Link>
                <Link to="/Services" className="services">
                    <li>Services</li>
                </Link>
                <Link to="/About" className="about">
                    <li>About Us</li>
                </Link>
                <Link to="/Contact" className="contact">
                    <li>Contact Us</li>
                </Link>
            </ul>
            <button className="mobile-menu"  onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? (<FaTimes/>
                ) : (
                    <FaBars/>
                )}
            </button>
        </nav>
    );
}

export default NavBar;