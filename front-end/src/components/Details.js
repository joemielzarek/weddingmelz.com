import React, { Component } from "react";
import ScrollableAnchor from 'react-scrollable-anchor'

import flowers2 from '../images/greenery.png';


export default class Details extends Component {
  render() {
    return (
      <div>
        <ScrollableAnchor id={'details'}>
          <div id="section-two">
            <div className="section-title">
              <h2>Details</h2>
            </div>
            <div className="section-content">
            <img className="greenery left" src={flowers2} alt="greenery" />
              <div className="date-grid-container">
                <div className="date-grid-row-top">
                  <div className="date-grid-top-cell left">
                    <h2>May</h2>
                    <h3>05</h3>
                  </div>
                  <div className="date-grid-top-cell middle">
                    <h2>Fourth</h2>
                    <h3>04</h3>
                  </div>
                  <div className="date-grid-top-cell right">
                    <h2>Twenty-nineteen</h2>
                    <h3>2019</h3>
                  </div>
                </div>
                <div className="date-grid-row-bottom">
                  <div className="date-grid-bottom-cell left">
                  <h2>Ceremony</h2>
                  <h3>4 o'clock post meridiem</h3>
                  <h4>Colonial Church<br />6200 Colonial Way<br />Edina, MN 55436</h4>
                  <p><a href="https://goo.gl/maps/tPrAnLU4A692" rel="noopener noreferrer" target="_blank">Directions</a></p>
                  </div>
                  <div className="date-grid-bottom-cell right">
                  <h2>Reception</h2>
                  <h3>5 o'clock post meridiem</h3>
                  <h4>Edina Country Club<br />5100 Wooddale Ave.<br /> Edina, MN 55424</h4>
                  <p><a href="https://goo.gl/maps/BJAjWJFLiiw" rel="noopener noreferrer" target="_blank">Directions</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollableAnchor>
      </div>
    )
  }
}
