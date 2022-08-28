import React from "react";
import {Link} from 'react-router-dom';
import Logo from "../images/footer-logo.png";

function Footer(){
    return(
        <>
            <div className="footerFluid">
                <div className="container">
                    <div className="grid">
                        <div className="col-sm-12">
                            <img src={Logo} className="flex-img footerLogo" alt="InTuneDeals Logo" />
                           <ul>
                               <li><Link to="/">Frontpage Deals</Link></li>
                               <li><a href="https://community.intunedeals.com/">Community</a></li>
                               <li><Link to="/about">About Us</Link></li>
                           </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerFluidCopy">
                <div className="container">
                    <div className="grid">
                        <div className="col-sm-12">
                            <p>&copy; 2022 Copyright InTuneDeals. <Link to="/privacy">Privacy Policy</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;