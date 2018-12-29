import React, { Component } from "react";
import Slider from "react-slick";

import Molly from '../images/molly.jpg';
import Katie from '../images/katie.png';
import KellyJ from '../images/kellyj.png';
import KellyT from '../images/kellyt.png';
import Maggie from '../images/maggie.png';
import Aria from '../images/aria.png';
import Lori from '../images/lori.png';


import Brett from '../images/brett.jpeg';
import Ben from '../images/ben.png';
import Pat from '../images/pat.png';
import Laurie from '../images/laurie.png';
import Coleman from '../images/coleman.png';
import Michael from '../images/michael.png';
import Jack from '../images/jack.png';


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
          <div className="people-image-container"><img src={Molly} alt="Molly"/></div>
          <div className="name-holder">
            <h3>Molly Moomaw</h3>
            <p>Maid of Honor</p>
          </div>
        </div>
        <div className="people-slide hers">
        <div className="people-image-container"><img src={Katie} alt="Molly"/></div>
          <div className="name-holder">
            <h3>Katie Boardman</h3>
            <p>Maid of Honor</p>
          </div>
        </div>
        <div className="people-slide hers">
        <div className="people-image-container"><img src={KellyJ} alt="Molly"/></div>
          <div className="name-holder">
            <h3>Kelly Johnson</h3>
            <p>Bridesmaid</p>
          </div>
        </div>
        <div className="people-slide hers">
        <div className="people-image-container"><img src={KellyT} alt="Molly"/></div>
          <div className="name-holder">
            <h3>Kelly Trudell</h3>
            <p>Bridesmaid</p>
          </div>
        </div>
        <div className="people-slide hers">
        <div className="people-image-container"><img src={Lori} alt="Molly"/></div>
          <div className="name-holder">
            <h3>Lori Kaeding</h3>
            <p>Bridesmaid</p>
          </div>
        </div>
        <div className="people-slide hers">
        <div className="people-image-container"><img src={Aria} alt="Molly"/></div>
          <div className="name-holder">
            <h3>Aria Rochelle</h3>
            <p>Bridesmaid</p>
          </div>
        </div>
        <div className="people-slide hers">
        <div className="people-image-container"><img src={Maggie} alt="Molly"/></div>
          <div className="name-holder">
            <h3>Maggie Mielzarek</h3>
            <p>Bridesmaid</p>
          </div>
        </div>
        </Slider>

        <Slider {...settingsHis}>
        <div className="people-slide his">
        <div className="people-image-container"><img src={Brett} alt="Molly"/></div>
          <div className="name-holder">
            <h3>Brett Miller</h3>
            <p>Best Man</p>
          </div>
        </div>
        <div className="people-slide his">
        <div className="people-image-container"><img src={Laurie} alt="Molly"/></div>
          <div className="name-holder">
            <h3>Laurie Kincade</h3>
            <p>Best Friend</p>
          </div>
        </div>
        <div className="people-slide his">
        <div className="people-image-container"><img src={Pat} alt="Molly"/></div>
          <div className="name-holder">
            <h3>Pat Kincade</h3>
            <p>Groomsman</p>
          </div>
        </div>
        <div className="people-slide his">
        <div className="people-image-container"><img src={Ben} alt="Molly"/></div>
          <div className="name-holder">
            <h3>Ben Fleischman</h3>
            <p>Groomsman</p>
          </div>
        </div>
        <div className="people-slide his">
        <div className="people-image-container"><img src={Coleman} alt="Molly"/></div>
          <div className="name-holder">
            <h3>Coleman Leach</h3>
            <p>Groomsman</p>
          </div>
        </div>
        <div className="people-slide his">
        <div className="people-image-container"><img src={Michael} alt="Molly"/></div>
          <div className="name-holder">
            <h3>Michael Boardman</h3>
            <p>Groomsman</p>
          </div>
        </div>
        <div className="people-slide his">
        <div className="people-image-container"><img src={Jack} alt="Molly"/></div>
          <div className="name-holder">
            <h3>Jack Boardman</h3>
            <p>Ring Bearer</p>
          </div>
        </div>
        </Slider>
      </div>
      );

  }
}
