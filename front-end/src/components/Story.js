import React, { Component } from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import { Row, Col } from 'react-flexbox-grid';


import logoAlt from '../images/logo.svg';
import Greenery from '../images/greenery.png';
import Us from '../images/details-image.jpg';


export default class Story extends Component {
  render() {
    return (
        <ScrollableAnchor id={'our-story'}>
          <div>
            <Row>
            <Col xs={12}>
              <div className="section-title first"><h2>our story</h2></div>
              <Col xs={12} className="section-content">
              <Col xs={8}>
                  <div className="gradient-container">
                    <img src={Us} alt="joe and bailey"/>
                    <div className="text-container">
                      <p>Keep Your Eyes On the Stars, But Your Feet On the Ground. </p>
                    </div>
                  </div>
                </Col>
                <Col xs={4}>
                  <img className="circle-logo" src={logoAlt} alt="logo" />
                  <img className="greenery right" src={Greenery} alt="greenery" />
                </Col>
              </Col>

            </Col>
            </Row>
          </div>
      </ScrollableAnchor>
    )
  }
}
