import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Home.css';

const Home = () => {
    return(
        <div>
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
                            <Link to="/" alt="" className="view-btn">View</Link>
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
                            <Link to="/" alt="" className="view-btn">View</Link>
                            <br/>
                        </div>
                        
                    </div>
                    <hr/>
                </section>
            
            </section>

           

        </div>
    );
}

export default Home;