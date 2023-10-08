import React from "react";
import { Link } from "react-router-dom";
import EnquirePopUp from "../components/EnquirePopUp";
import '../Styles/Home.css';
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {

    const [BtnPopUp , setBtnPopUp] = useState(false);                            {/*This is for the view state of the unavailable sections*/}
    const [BtnPopUpGames , setBtnPopUpGames] = useState(false);

    return(
            <>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Check our Software Development services" />
                <link rel="canonical" href="/" />

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
       
            <section className="home_section1">
                <h3 className="ms">Marotya Studios.</h3>
                <hr/>
                <div className="home-text">
                    <p>
                        We bring innovative ideas to life. <br/>
                        We deliver high quality services.<br/>
                        We believe Your greatest success is our success!<br/>
                        Let Us connect and work towards your dream.
                        <br/>
                        <br/>
                        We offer web, mobile app & software designs, prototyping, development, ML services.
                    </p>
                    
                    
                </div>

                <section className="ms-services">
                    <div id="services">
                        <div className="serv-wrapper">
                            <div className="serv-text-wrapper">MS Services</div>
                            
                            <div className="card-wrapper">
                                <img src='/images/home/home_ms-services.png' alt='' className="h_service_pic"/>
                                <p className="link-details">
                                    All the services / custom services we offer can be found here.<br/>
                                    You can view the by clicking on the “View” button below
                                </p>
                            </div>
                            <br/>
                            <Link to="/Services" alt="" className="view-btn">View</Link>
                            <br/>
                        </div>
                        
                    </div>
                    <hr/>
                </section>

                <section className="ms-services">
                    <div id="services">
                        <div className="serv-wrapper">
                            <div className="serv-text-wrapper">MS Products</div>
                            
                            <div className="card-wrapper">
                                <img src='/images/home/home_ms-products.png' alt='' className="h_service_pic"/>
                                <p className="link-details">
                                    All our released innovative projects / products can be accessed here.<br/>
                                    You can view them by clicking on the “View” button below
                                </p>
                            </div>
                            <br/>
                            <button className="view-btn"  onClick={() => setBtnPopUp(true)}>View</button>                      {/* Will update this button to Link when released products*/}
                            <br/>
                        </div>
                        
                    </div>
                    <hr/>
                </section>


                <section className="ms-services">
                    <div id="services">
                        <div className="serv-wrapper">
                            <div className="serv-text-wrapper">MS Games</div>
                            
                            <div className="card-wrapper">
                                <img src='/images/home/home_ms-games.png' alt='' className="h_service_pic"/>
                                <p className="link-details">
                                    All our released / coming soon games we are developing can be found here.<br/> 
                                    You can view the by clicking on the “View” button below
                                </p>
                            </div>
                            <br/>
                            <button className="view-btn"  onClick={() => setBtnPopUpGames(true)}>View</button>                     {/* Will update this button to Link when released products*/}
                            <br/>
                        </div>
                        
                    </div>
                    <hr/>
                </section>
            
                {/*Pop up for the unreleased Games and Innovations*/}
                <EnquirePopUp trigger={BtnPopUp} setTrigger={setBtnPopUp}>
                    <div className="Not-Released">
                        No Released Products yet
                    </div>
                </EnquirePopUp>

                <EnquirePopUp trigger={BtnPopUpGames} setTrigger={setBtnPopUpGames}>
                    <div className="Not-Released">
                        No Released Games yet
                    </div>
                </EnquirePopUp>

            </section>

           
            </>
        
    );
}

export default Home;