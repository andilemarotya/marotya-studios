import React from "react";
import "../Styles/Services.css";

const Services = () => {
    return(
        <div>
            <section className="services_section1">
                <h3 className="serv_header">Our Services</h3>
                <hr/>
                <br/><br/> <br/> <br/> <br/>
                


                {/* Website Section Style starts here */}
                <div className="Website-wrapper">
                    
                    <div className="web-text-wrapper">
                        <div className="Web-text-header">Website</div>
                        <div className="web-text">
                            Web development, we take you from planning & analysis through designing & prototyping your website, development phase, until deployment.
                        </div>
                    </div>

                    <div className="img-wrapper">
                        <div className="price-wrapper">
                            <button className="enquire">Enquire</button>
                            <div className="price">
                                Price: <div id="amount">$99.95 - $1000+</div>
                            </div>
                        </div>
                        <img src="/images/services/Website_pic.png" alt="" className="web-img"/>
                    </div>
                </div>
                {/*Website Section style ends here*/}
                <hr/>
                <br/><br/>

                {/*Mobile App Section style starts here*/}
                <div className="Website-wrapper">
                    
                    <div className="web-text-wrapper">
                        <div className="Web-text-header">Mobile Application</div>
                        <div className="mobile-text">
                            Mobile development, we take you from planning & analysis through designing & prototyping your mobile application, development phase, until deployment.  
                        </div>
                    </div>

                    <div className="img-wrapper">
                        <div className="price-wrapper">
                            <button className="enquire">Enquire</button>
                            <div className="price">
                                Price: <div id="amount">$249.95 - $1000+</div>
                            </div>
                        </div>
                        <img src="/images/services/mobile_app-pic.png" alt="" className="web-img"/>
                    </div>
                </div>
                {/*Mobile App Section style ends here*/}
                <hr/>
                <br/><br/>

                {/*Software service Section style starts here*/}
                <div className="Website-wrapper">
                    
                    <div className="web-text-wrapper">
                        <div className="Web-text-header">Software</div>
                        <div className="software-text">
                            Software development, we take you from planning & analysis through designing & prototyping your custom software, development phase, until deployment.  
                        </div>
                    </div>

                    <div className="img-wrapper">
                        <div className="price-wrapper">
                            <button className="enquire2">Enquire</button>
                            <div className="price">
                                Price: <div id="amount">$599.95 - $10000+</div>
                            </div>
                        </div>
                        <img src="/images/services/software-pic.png" alt="" className="web-img"/>
                    </div>
                </div>
                {/*Software service Section style ends here*/}
                <hr/>
                <br/><br/>

                {/*A.I service Section style starts here*/}
                <div className="Website-wrapper">
                    
                    <div className="web-text-wrapper">
                        <div className="Web-text-header">A.I Services</div>
                        <div className="software-text">
                            We offer high quality Artificial Intelligence services,<br/> we modify your already existing software , 
                            A.I custom services from planning & analysis up until deployment of the software.
                        </div>
                    </div>

                    <div className="img-wrapper">
                        <div className="price-wrapper">
                            <button className="enquire2">Enquire</button>
                            <div className="price">
                                Price: <div id="amount">$599.95 - $10000+</div>
                            </div>
                        </div>
                        <img src="/images/services/A.I pic.png" alt="" className="web-img"/>
                    </div>
                </div>
                {/*A.I service Section style ends here*/}
                <hr/>


            </section>

        </div>
    );
}

export default Services;