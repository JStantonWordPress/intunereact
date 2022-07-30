import React, { Component } from "react";
import Slider from "react-slick";
import "../css/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import catcard from "../images/categories/catCard.png";
import arrow from "../images/arrowRight.png";


export default class SimpleSlider extends Component {

    render() {

        const ArrowRight = ({onClick }) => (
               <img onClick={onClick} src={arrow} className="arrowWrapRight" alt="Arrow Right Slider" />
        );

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <ArrowRight />
        };
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
                                       <a href="#"><img className="flex-img" src={catcard} alt="catCard" /></a>
                                   </div>
                                   <div>
                                       <a href="#"><img className="flex-img" src={catcard} alt="catCard" /></a>
                                   </div>
                                   <div>
                                       <a href="#"><img className="flex-img" src={catcard} alt="catCard" /></a>
                                   </div>
                                   <div>
                                       <a href="#"><img className="flex-img" src={catcard} alt="catCard" /></a>
                                   </div>
                                   <div>
                                       <a href="#"><img className="flex-img" src={catcard} alt="catCard" /></a>
                                   </div>
                                   <div>
                                       <a href="#"><img className="flex-img" src={catcard} alt="catCard" /></a>
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