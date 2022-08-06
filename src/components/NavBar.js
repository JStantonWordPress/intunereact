import React from "react";
import {Link} from 'react-router-dom';
import Logo from "../images/intunedeals-logo-min.png";
import Login from "../images/person-icon-min.png";

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
                                        <li><a href="https://community.intunedeals.com/c/guitars/7">Guitars</a></li>
                                        <li><a href="https://community.intunedeals.com/c/amps-effects/9">Amps & Effects</a></li>
                                        <li><a href="https://community.intunedeals.com/c/basses/8">Basses</a></li>
                                        <li><a href="https://community.intunedeals.com/c/accessories/14">Accessories</a></li>
                                        <li><a href="https://community.intunedeals.com/c/recording/10">Recording</a></li>
                                        <li><a href="https://community.intunedeals.com/c/dj-lighting/11">Live Sound & DJ</a></li>
                                        <li><a href="https://community.intunedeals.com/c/keyboards-midi/13">Keyboards & Midi</a></li>
                                        <li><a href="https://community.intunedeals.com/c/drums/12">Drums</a></li>
                                    </ul>
                                </li>
                                <li><Link to="/about">About Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <a className="headerLogin" href="https://community.intunedeals.com/login">
                                <img src={Login} className="headerLoginImage" alt="header login icon" />
                                Login / Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;