import React from "react";
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
                            <img src='/images/home/home_ms-services.png' alt='' className="h_service_pic"/>
                        </div>
                        
                    </div>
                    <hr/>
                </section>
                
                <section className="ms-services">
                    <div id="services">
                        <div className="serv-wrapper">
                            <div className="serv-text-wrapper">MS Products</div>
                            <img src='/images/home/home_ms-products.png' alt='' className="h_service_pic"/>
                        </div>
                        
                    </div>
                    <hr/>
                </section>

                <section className="ms-services">
                    <div id="services">
                        <div className="serv-wrapper">
                            <div className="serv-text-wrapper">MS Games</div>
                            <img src='/images/home/home_ms-games.png' alt='' className="h_service_pic"/>
                        </div>
                        
                    </div>
                    <hr/>
                </section>
            </section>

           

        </div>
    );
}

export default Home;