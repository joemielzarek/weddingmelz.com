import React, { Component } from "react";
import Slider from "react-slick";


export default class PeopleSlider extends Component {
  render() {
    const settingsHers = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: false,
      pauseOnHover: false,
      rtl: true,
      centerMode: true,
      initialSlide: 2,
 
    };
    const settingsHis = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: false,
      pauseOnHover: false,
      centerMode: true,
      initialSlide: 0
    };
    return (
      <div className="slick-people-section">
      <div className="slick-overlay"></div>

        <Slider {...settingsHers}>
        <div className="people-slide hers">
          <h3>Molly Moomaw</h3>
          <p>Maid of Honor</p>
        </div>
        <div className="people-slide hers">
          <h3>Katie Boardman</h3>
          <p>Maid of Honor</p>
        </div>
        <div className="people-slide hers">
          <h3>Kelly Johnson</h3>
          <p>Bridesmaid</p>
        </div>
        <div className="people-slide hers">
          <h3>Kelly Trudell</h3>
          <p>Bridesmaid</p>
        </div>
        <div className="people-slide hers">
          <h3>Lori Kaeding</h3>
          <p>Bridesmaid</p>
        </div>
        <div className="people-slide hers">
          <h3>Aria Rochelle</h3>
          <p>Bridesmaid</p>
        </div>
        <div className="people-slide hers">
          <h3>Maggie Mielzarek</h3>
          <p>Bridesmaid</p>
        </div>
        </Slider>

        <Slider {...settingsHis}>
        <div className="people-slide his">
          <h3>Brett Miller</h3>
          <p>Best Man</p>
        </div>
        <div className="people-slide his">
          <h3>Laurie Kincade</h3>
          <p>Best Friend</p>
        </div>
        <div className="people-slide his">
          <h3>Pat Kincade</h3>
          <p>Groomsman</p>
        </div>
        <div className="people-slide his">
          <h3>Ben Fleischman</h3>
          <p>Groomsman</p>
        </div>
        <div className="people-slide his">
          <h3>Coleman Leach</h3>
          <p>Groomsman</p>
        </div>
        <div className="people-slide his">
          <h3>Michael Boardman</h3>
          <p>Groomsman</p>
        </div>
        <div className="people-slide his">
          <h3>Jack Boardman</h3>
          <p>Ring Bearer</p>
        </div>
        </Slider>
      </div>
      );

  }
}
