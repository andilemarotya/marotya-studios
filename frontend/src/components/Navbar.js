import React from 'react';
import { Link , NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import './Navbar.css';
import logo from '../images/Marotya-Studios-Logo.png';
import { useLocation } from "react-router-dom";


const NavBar = () => {

    const [isMobile,setIsMobile] = useState(false);
    const {pathname} = useLocation();

    // set PATH to current activePath
    useEffect(()=>{


    }, [])

    
    return ( 
        <nav className="navbar">
            <Link to="/"><img src={logo} className="mslogo" alt=''/></Link>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setIsMobile(false)}>
                {/* check for each link path against activePath  */}
                <NavLink exact to="/" className={pathname === "/" ? "active" : "link"}>
                    <li >Home</li>
                </NavLink>
                <NavLink to="/Services"  className={pathname === "/Services" ? "active" : "link"}>
                    <li>Services</li>
                </NavLink>
                <NavLink to="/About" className={pathname === "/About" ? "active" : "link"}>
                    <li >About Us</li>
                </NavLink>
                <NavLink to="/Contact" className={pathname === "/Contact" ? "active" : "link"}>
                    <li >Contact Us</li>
                </NavLink>
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