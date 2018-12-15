import React, { Component } from "react";
import ScrollableAnchor from 'react-scrollable-anchor'
import { Parallax } from 'react-scroll-parallax';


import logoAlt from '../images/logo.svg';
import Greenery from '../images/greenery.png';
import Us from '../images/details-image.jpg';






export default class Story extends Component {
  render() {
    return (
      <div>
        <ScrollableAnchor id={'our-story'}>
          <div id="section-one">
          <div className="section-title">
          <h2>our story</h2>
          </div>
          <div className="section-content">
          <div className="column column-1">
          <div className="gradient-container">
          <Parallax  offsetYMax={0} offsetYMin={-30} >
          <img src={Us} alt="joe and bailey"/>
        </Parallax>
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
