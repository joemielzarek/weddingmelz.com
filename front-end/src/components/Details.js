import React, { Component } from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import { Row, Col } from 'react-flexbox-grid';


import UsECC from '../images/ecc-image.jpg';


export default class Details extends Component {
  render() {
    return (
      <ScrollableAnchor id={'details'}>
<div>
  <Row>
  <Col xs={12}>
    <div className="section-title"><h2>details</h2></div>
    <Col xs={12} className="section-content">
      {/* <Col xs={1} >
      </Col> */}
    <Col xs={8}>
      <div className="date-grid-container">
        <div className="date-grid-banner"><h3>#weddingmelz</h3><h4>the future mr. and mrs. mielzarek</h4></div>
          <div className="date-grid-row-top">
            <div className="date-grid-top-cell left">
              <h3>05</h3>
              <h4>may</h4>
            </div>
            <div className="date-grid-top-cell middle">
              <h3>04</h3>
              <h4>fourth</h4>
            </div>
            <div className="date-grid-top-cell right">
              <h3>2019</h3>
              <h4>twenty-nineteen</h4>
            </div>
          </div>
          <div className="date-grid-row-bottom">
            <div className="date-grid-bottom-cell left">
            <h2>ceremony</h2>
            {/* <h3>4 o'clock in the afternoon</h3> */}
            <h4>Colonial Church<br />6200 Colonial Way<br />Edina, MN 55436</h4>
            <p><a href="https://goo.gl/maps/tPrAnLU4A692" rel="noopener noreferrer" target="_blank">Directions</a></p>
            </div>
            <div className="date-grid-bottom-cell right">
            <h2>reception</h2>
            {/* <h3>5 o'clock, following ceremony</h3> */}
            <h4>Edina Country Club<br />5100 Wooddale Ave.<br /> Edina, MN 55424</h4>
            <p><a href="https://goo.gl/maps/BJAjWJFLiiw" rel="noopener noreferrer" target="_blank">Directions</a></p>
            </div>
          </div>
      </div>
      </Col>
      <Col xs={5}>
      <img className="details-image" src={UsECC} alt="joe and bailey"/>
      </Col>
    </Col>

  </Col>
  </Row>
</div>
</ScrollableAnchor>
    )
  }
}
