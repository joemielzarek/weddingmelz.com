import React, { Component } from "react";
import Slider from "react-slick";

import Slide0 from "../images/slide_0.jpg";
import Slide1 from "../images/slide_1.jpg";
import Slide2 from "../images/slide_2.jpg";
import Slide3 from "../images/slide_3.jpg";
import Slide4 from "../images/slide_4.jpg";
import Slide5 from "../images/slide_5.jpg";
import Slide6 from "../images/slide_6.jpg";
import Slide7 from "../images/slide_7.jpg";



export default class HeroSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 6000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true
    };
    return (
      
      <div className="slick-section">
      <div className="slick-overlay"></div>
        <Slider {...settings}>
        <img src={Slide0} alt="Joe and Bailey" />
        <img src={Slide1} alt="Joe and Bailey" />
        <img src={Slide2} alt="Joe and Bailey" />
        <img src={Slide3} alt="Joe and Bailey" />
        <img src={Slide4} alt="Joe and Bailey" />
        <img src={Slide5} alt="Joe and Bailey" />
        <img src={Slide6} alt="Joe and Bailey" />
        <img src={Slide7} alt="Joe and Bailey" />
        </Slider>
      </div>
    );
  }
}
