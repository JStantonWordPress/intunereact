import React from "react";

function About() {
    return (
        <div>
            <div className="container aboutContainer">
                <div className="grid">
                    <div className="col-sm-12">
                        <h1>Welcome to InTuneDeals</h1>
                        <p>InTuneDeals was launched in July of 2022. The primary goal of the website is to build a community forum of
                            musicians working together, searching the internet to the find and share incredible cost
                            saving deals on musical instruments and gear. The community is 100% free to sign up and to browse
                            the forums and frontpage deals. Community members helop share, find, comment, and vote on the best music deals daily. Frontpage Deals are hand selected deals that pull from the forum
                            based upon number of page views, likes, and replies. To sign up for the forum, you can simply
                            create an account with your email, or sign in using your google or facebook credentials <a href="https://community.intunedeals.com/signup" target="_blank">here</a>.
                            </p>
                        <h2>The Founder</h2>
                        <p>
                            InTuneDeals was founded by Joe Stanton, who has a degree in Music and Business along with over 10+ years
                            experience building websites and applications. Joe used to be a full time musician and studied Music for over 20 years. He also worked in the music
                            retail industry and is very knowledgeable on all types of music gear.
                            As a former musician, Joe knows how important is to save money on music gear and how hard musicians work to
                            find great deals on gear.

                        </p>
                        <p className="quote">"At InTuneDeals, our goal was to create a community
                            for musicians to help each other save money. It's the age of information and with musical instrument sales increasing rapidly online, there are incredible deals on gear everyday. We strive to create a friendly
                            community of musicians working together to bring all those deals and savings to one place."
                            <br /><br />-Joe Stanton
                        </p>
                        <p>
                            <h2>Get In Touch</h2>
                            <p>Have questions or want to contribute to the community? Please feel free to contact us at <a href="mailto:intunedeals@gmail.com">intunedeals@gmail.com</a></p>

                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;