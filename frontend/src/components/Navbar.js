import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import './Navbar.css';
import logo from '../images/Marotya-Studios-Logo.png';
import { useLocation } from "react-router-dom";


const NavBar = () => {

    const [isMobile,setIsMobile] = useState(false);
    const [activePathy,setActivePath] = useState('/');
    const path = useLocation().pathname;

    // set PATH to current activePath
    useEffect(()=>{


    }, [])

    
    return ( 
        <nav className="navbar">
            <Link to="/"><img src={logo} className="mslogo" alt=''/></Link>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setIsMobile(false)}>
                {/* check for each link path against activePath  */}
                <Link to="/" className={"home ${isActive == 1 && 'active'}"}>
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