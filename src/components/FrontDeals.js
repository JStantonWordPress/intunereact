import React from "react";
import "../css/frontdeals.css";
import Card from "../components/Card";
import Logo from "../images/logo.png";
import {useState, useEffect} from 'react';
import axios from "axios";




export default function FrontDeals(){


    return(
        <div className="container frontDealsContainer">
            <div className="grid">
                <div className="col-sm-12 titleCopy">
                    <p>The Latest Deals</p>
                    <h2>Frontpage Trending Deals</h2>
                </div>
            </div>

            <div className="grid cardGrid">
                {/* Start Looping through topics tagged frontpage here and pass data into component props */}
                <div className="col-sm-4 col-md-3 col-lg-2 col-grid">
                    <Card
                        authorName="Joe Stanton Long"
                        date="1d"
                        authorImage={Logo}
                        dealImage={Logo}
                        dealTitle="Long Deal Title Will Go Here"
                        salePrice="109.99"
                        origPrice="199.99"
                        store="ebay.com"
                        vote="10"
                        comments="5"
                        link="https://www.google.com/"
                    />
                </div>
                {/* End topic loop */}
                <div className="col-sm-4 col-md-3 col-lg-2 col-grid">
                    <Card
                        authorName="Joe Stanton Long"
                        date="1d"
                        authorImage={Logo}
                        dealImage={Logo}
                        dealTitle="Long Deal Title Will Go Here  sdf sdfasdfasdfsa dsf sdfsdf asdf"
                        salePrice="109.99"
                        origPrice="199.99"
                        store="ebay.com"
                        vote="10"
                        comments="5"
                        link="https://www.google.com/"
                    />
                </div>
                <div className="col-sm-4 col-md-3 col-lg-2 col-grid">
                    <Card
                        authorName="Joe Stanton Long"
                        date="1d"
                        authorImage={Logo}
                        dealImage={Logo}
                        dealTitle="Long Deal Title Will Go Here  sdf sdfasdfasdfsa dsf sdfsdf asdf"
                        salePrice="109.99"
                        origPrice="199.99"
                        store="ebay.com"
                        vote="10"
                        comments="5"
                        link="https://www.google.com/"
                    />
                </div>
                <div className="col-sm-4 col-md-3 col-lg-2 col-grid">
                    <Card
                        authorName="Joe Stanton Long"
                        date="1d"
                        authorImage={Logo}
                        dealImage={Logo}
                        dealTitle="Long Deal Title Will Go Here  sdf sdfasdfasdfsa dsf sdfsdf asdf"
                        salePrice="109.99"
                        origPrice="199.99"
                        store="ebay.com"
                        vote="10"
                        comments="5"
                        link="https://www.google.com/"
                    />
                </div>
                <div className="col-sm-4 col-md-3 col-lg-2 col-grid">
                    <Card
                        authorName="Joe Stanton Long"
                        date="1d"
                        authorImage={Logo}
                        dealImage={Logo}
                        dealTitle="Long Deal Title Will Go Here  sdf sdfasdfasdfsa dsf sdfsdf asdf"
                        salePrice="109.99"
                        origPrice="199.99"
                        store="ebay.com"
                        vote="10"
                        comments="5"
                        link="https://www.google.com/"
                    />
                </div>
                <div className="col-sm-4 col-md-3 col-lg-2 col-grid">
                    <Card
                        authorName="Joe Stanton Long"
                        date="1d"
                        authorImage={Logo}
                        dealImage={Logo}
                        dealTitle="Long Deal Title Will Go Here  sdf sdfasdfasdfsa dsf sdfsdf asdf"
                        salePrice="109.99"
                        origPrice="199.99"
                        store="ebay.com"
                        vote="10"
                        comments="5"
                        link="https://www.google.com/"
                    />
                </div>
                <div className="col-sm-4 col-md-3 col-lg-2 col-grid">
                    <Card
                        authorName="Joe Stanton Long"
                        date="1d"
                        authorImage={Logo}
                        dealImage={Logo}
                        dealTitle="Long Deal Title Will Go Here"
                        salePrice="109.99"
                        origPrice="199.99"
                        store="ebay.com"
                        vote="10"
                        comments="5"
                        link="https://www.google.com/"
                    />
                </div>
                <div className="col-sm-4 col-md-3 col-lg-2 col-grid">
                    <Card
                        authorName="Joe Stanton Long"
                        date="1d"
                        authorImage={Logo}
                        dealImage={Logo}
                        dealTitle="Long Deal Title Will Go Here  sdf sdfasdfasdfsa dsf sdfsdf asdf"
                        salePrice="109.99"
                        origPrice="199.99"
                        store="ebay.com"
                        vote="10"
                        comments="5"
                        link="https://www.google.com/"
                    />
                </div>
                <div className="col-sm-4 col-md-3 col-lg-2 col-grid">
                    <Card
                        authorName="Joe Stanton Long"
                        date="1d"
                        authorImage={Logo}
                        dealImage={Logo}
                        dealTitle="Long Deal Title Will Go Here  sdf sdfasdfasdfsa dsf sdfsdf asdf"
                        salePrice="109.99"
                        origPrice="199.99"
                        store="ebay.com"
                        vote="10"
                        comments="5"
                        link="https://www.google.com/"
                    />
                </div>
                <div className="col-sm-4 col-md-3 col-lg-2 col-grid">
                    <Card
                        authorName="Joe Stanton Long"
                        date="1d"
                        authorImage={Logo}
                        dealImage={Logo}
                        dealTitle="Long Deal Title Will Go Here  sdf sdfasdfasdfsa dsf sdfsdf asdf"
                        salePrice="109.99"
                        origPrice="199.99"
                        store="ebay.com"
                        vote="10"
                        comments="5"
                        link="https://www.google.com/"
                    />
                </div>
                <div className="col-sm-4 col-md-3 col-lg-2 col-grid">
                    <Card
                        authorName="Joe Stanton Long"
                        date="1d"
                        authorImage={Logo}
                        dealImage={Logo}
                        dealTitle="Long Deal Title Will Go Here  sdf sdfasdfasdfsa dsf sdfsdf asdf"
                        salePrice="109.99"
                        origPrice="199.99"
                        store="ebay.com"
                        vote="10"
                        comments="5"
                        link="https://www.google.com/"
                    />
                </div>
                <div className="col-sm-4 col-md-3 col-lg-2 col-grid">
                    <Card
                        authorName="Joe Stanton Long"
                        date="1d"
                        authorImage={Logo}
                        dealImage={Logo}
                        dealTitle="Long Deal Title Will Go Here  sdf sdfasdfasdfsa dsf sdfsdf asdf"
                        salePrice="109.99"
                        origPrice="199.99"
                        store="ebay.com"
                        vote="10"
                        comments="5"
                        link="https://www.google.com/"
                    />
                </div>
            </div>

            <div className="grid">
                <div className="col-sm-12">
                    <a className="loadMore" href="#">Load More</a>
                </div>
            </div>
        </div>
    )
}



