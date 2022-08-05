import React, { Component } from "react";
import Slider from "react-slick";
import "../css/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import accessories from "../images/categories/accessories-cat-min.jpg";
import amps from "../images/categories/amps-cat-min.jpg";
import basses from "../images/categories/basses-cat-min.jpg";
import dj from "../images/categories/dj-cat-min.jpg";
import drums from "../images/categories/drums-cat-min.jpg";
import guitars from "../images/categories/guitars-cat-min.jpg";
import keyboard from "../images/categories/keyboard-cat-min.jpg";
import recording from "../images/categories/recording-cat-min.jpg";



import arrow from "../images/arrowRight.png";


export default class SimpleSlider extends Component {

    render() {

        const ArrowRight = ({onClick }) => (
               <img onClick={onClick} src={arrow} className="arrowWrapRight" alt="Arrow Right Slider" />
        );

        const settings = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <ArrowRight />,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        }
        return (
            <div>
                  <div className="container">
                     <div className="grid align-center">
                               <div className="col-custom20 titleCopy">
                             <p>This Week's</p>
                           <h2>Popular Categories</h2>
                         <a href="#">All Categories</a>
                           </div>
                           <div className="col-custom80">


                               <Slider {...settings}>
                                   <div>
                                       <a href="#"><img className="flex-img" src={guitars} alt="Guitar Category" /></a>
                                   </div>
                                   <div>
                                       <a href="#"><img className="flex-img" src={basses} alt="Basses Category" /></a>
                                   </div>
                                   <div>
                                       <a href="#"><img className="flex-img" src={amps} alt="Amps Category" /></a>
                                   </div>
                                   <div>
                                       <a href="#"><img className="flex-img" src={recording} alt="Recording Category" /></a>
                                   </div>
                                   <div>
                                       <a href="#"><img className="flex-img" src={keyboard} alt="Keyboards Category" /></a>
                                   </div>
                                   <div>
                                       <a href="#"><img className="flex-img" src={accessories} alt="Accessories Category" /></a>
                                   </div>
                                   <div>
                                       <a href="#"><img className="flex-img" src={drums} alt="Drums Category" /></a>
                                   </div>
                                   <div>
                                       <a href="#"><img className="flex-img" src={dj} alt="DJ Category" /></a>
                                   </div>
                               </Slider>


                           </div>
                         </div>
                  </div>

            </div>
        );
    }
}

// function Slider(){
//     return(
//         <div className="container">
//             <div className="grid align-center">
//                 <div className="col-sm-3 titleCopy">
//                     <p>This Week's</p>
//                     <h2>Popular Categories</h2>
//                     <a href="#">All Categories</a>
//                 </div>
//                 <div className="col-sm-9">
//                    <a href="#"><img src={catcard} alt="catCard" /></a>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default Slider;