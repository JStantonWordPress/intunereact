import React from "react";
import Logo from "../images/logo.png";
import "../css/hero.css";

function Hero(){
    return(
        <div className="container">
            <div className="grid">
                <div className="col-sm-12">
                    <div className="homeHero">
                        <h1>Welcome to InTuneDeals</h1>
                        <p>InTuneDeals is a free and user-driven deal-sharing site where musicians work together to save money on all types of musical instruments and gear.</p>
                        <a href="#">Sign Up Today!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;