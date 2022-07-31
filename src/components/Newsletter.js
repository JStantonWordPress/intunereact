import React from "react";
import "../css/newsletter.css";

function Newsletter(){
    return(
        <div className="container">
            <div className="grid">
                <div className="col-sm-12">
                    <div className="newsLetter">
                        <h2>Subscribe to our Newsletter</h2>
                        <p>Subscribe to our newsletter to get latest deals on all types of musical gear.</p>
                        <form class="newsLetterForm">
                            <input type="text" placeholder="Your email address" />
                            <button type="submit">F</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;