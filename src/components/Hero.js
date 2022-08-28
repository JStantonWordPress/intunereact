import React from "react";
import "../css/hero.css";

function Hero(){
    return(
        <div className="container">
            <div className="grid">
                <div className="col-sm-12">
                    <div className="homeHero">
                        <h1>Welcome to InTuneDeals</h1>
                        <p>InTuneDeals is a free deal-sharing site where musicians work together to save money on musical instruments and gear.</p>
                        <a href="https://community.intunedeals.com/signup">Sign Up Today!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;