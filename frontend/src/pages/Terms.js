import React from "react";
import "../Styles/Terms.css";
import { Helmet } from "react-helmet-async";

const Terms = () => {
    return (
        <>
        <Helmet>
            <title>Marotya Studios - Terms and Conditions</title>
            <meta 
            name="description" 
            content="Review the terms and conditions of Marotya Studios. 
            Our commitment to transparency and professionalism ensures a clear understanding of the guidelines governing our software development services." />
            <link rel="canonical" href="/terms" />

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
        
        <div className="t-page">
            <section className="header-wrapper">
                <h1 className="terms-header">Terms and Conditions</h1>
            </section>
            
            <section className="Terms-wrapper">
                <p className="heading">1. Products or Services provided</p><br/>
                <p className="par-body">
                    We offer custom web development, mobile application development, software development and artificial intelligence services.<br/>
                    We plan & analyze the service requested with you, design & prototype, develop and deploy the service for you.<br/>
                    The web, mobile, software services can contain A.I services within them upon the client’s vision / request.
                </p>
                <br/><br/>
                <p className="heading">2. Prices and Payment</p><br/>
                <p className="par-body">
                    The floor and roof prices of the services we offer are written in the “Services” web page. Since we are offering custom services, prices may differ from client to client.
                    If you will need 2 or more services (e.g) a mobile application and a website, then you will get a 15%(+) discount of your original total price.<br/>
                    For payments for our services we use estro-service, a third-party service, this service allows the client to do a scheduled payment upon delivery of the requested service.<br/>
                    The prices provided in the “services” page only covers payment for our services. For the domain name and web hosting services you will have to pay separately to the services providing those.
                </p>
                <br/><br/>

                <p className="heading">3. Returns, Refunds & Complaints</p><br/>
                <p className="par-body">
                    All our services cannot be returned however cancellation of the requested service can be done within 7 days of the inquiry.<br/>
                    All complaints can be directed straight to us via the “contact us” page, or you can contact any one from the management team in the “About Us” page. 
                    Then we will be in contact with you urgently within 3 working days & all issues with our products/services will be addressed.
                </p>
                <br/><br/>

                <p className="heading">4. Future changes</p><br/>
                <p className="par-body">
                    If you subscribed to our newsletter form in our footer you will be notified whenever we have changes with our T&Cs.
                    For our upcoming products & games, emails revealing release dates will be sent to newsletter subscribers.
                </p>
                <br/><br/>

                <p className="heading">5. Governing law</p>
                <p className="par-body">Our business is registered and is operating under South African government laws.</p><br/>




            </section>
        </div>
        </>
    );
}

export default Terms;