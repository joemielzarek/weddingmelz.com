import React, { Component } from "react";
import ScrollableAnchor from 'react-scrollable-anchor'

import logoAlt from '../images/logo.svg';
import Greenery from '../images/greenery.png';
import Us from '../images/details-image.jpg';





// const FirstFrame = () => (
//   <Parallax
//     className="frame-one"
//     offsetYMax={160}
//     offsetYMin={0}
//     offsetXMax={0}
//     offsetXMin={0}
//   >
//     <img className="picture-frame first-frame" src={FrameOne} />
//   </Parallax>
// );


export default class Story extends Component {
  render() {
    return (
      <div>
        <ScrollableAnchor id={'our-story'}>
          <div id="section-one">
          <div className="section-title">
          <h2>Our Story</h2>
          </div>
          <div className="section-content">
          <div className="column column-1">
          <div className="gradient-container">
          <img src={Us} alt="joe and bailey"/>
            <div className="text-container">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
          </div>
          <div className="column column-2">
          <img className="circle-logo" src={logoAlt} alt="logo" />
          <img className="greenery right" src={Greenery} alt="greenery" />
          </div>
          </div>


          </div>
        </ScrollableAnchor>
      </div>
    )
  }
}
