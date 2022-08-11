import React from "react";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import FrontDeals from "../components/FrontDeals";
import Newsletter from "../components/Newsletter";


function Home() {
    return (
        <>
            <Hero />
            <FrontDeals />
            <Slider />
            <Newsletter />
        </>
    );
}

export default Home;
