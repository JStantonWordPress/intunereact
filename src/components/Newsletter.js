import React from "react";
import "../css/newsletter.css";

function Newsletter(){
    return(
        <div className="container">
            <div className="grid">
                <div className="col-sm-12">
                    <div className="newsLetter">
                        <h2>Have Questions or Want to Contribute?</h2>
                        <p>Please contact us at <a href="mailto:admin@intunedeals.com">admin@intunedeals.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;

