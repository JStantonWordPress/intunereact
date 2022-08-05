import React from "react";
import {Link} from 'react-router-dom';
import Logo from "../images/intunedeals-logo-min.png";

import Hamburger from "../components/Burger";

function NavBar(){
    return(
        <>
            <div className="tablet">
                <div className="grid grid-bleed align-center">
                        <div className="col-4">
                            <Link to="/"><img src={Logo} className="flex-img mainLogo" alt="InTuneDeals Logo" /></Link>
                        </div>
                        <div className="col-8">
                            <a className="headerLogin" href="https://community.intunedeals.com/login">Login / Sign up</a>
                        </div>
                </div>
            </div>
            <div className="navDesktop">
                <div className="container">
                    <div className="grid grid-bleed align-center">
                        <div className="col-sm-2">
                            <Link to="/"><img src={Logo} className="flex-img mainLogo" alt="InTuneDeals Logo" /></Link>
                        </div>
                        <div className="col-sm-7">
                            <ul className="main-navigation">
                                <li><Link to="/">Frontpage Deals</Link><span className="new">New</span></li>
                                <li className="dropdown-item"><a href="https://community.intunedeals.com/">Community</a>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/about">About Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <a className="headerLogin" href="https://community.intunedeals.com/login">Login / Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;