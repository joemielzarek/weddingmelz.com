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
              <div className="section-title first"><h2>how it all went down</h2></div>
              <Col xs={12} className="section-content">
              <Col xs={8}>
                  <div className="gradient-container">
                    <img src={Us} alt="joe and bailey"/>
                    <div className="text-container">
                      <p>They got off to a super romantic start...</p><p>Joe gave Bailey the opportunity of a lifetime by emailing her to setup an interview to be an intern at the ad agency he worked at. At the time Bailey was an aspiring waitress in Woodbury with big hopes and dreams of working in the big city (Minneapolis).</p><p>Bailey was so excited to hear from Joe, who knew they were talking to the person they would end up spending the rest of their lives with?!</p>
                      <p>Bailey came in for the interview and tried to make friendly with the guy covering the phones at the front desk (Joe), but he was way too involved in his turkey sandwich and wanted nothing to do with Bailey.</p> <p>Spoiler alert: Bailey got the internship of her dreams, and Joe and Bailey became very fast friends and even rode the Metro Transit bus home every night after work together.</p> <p>They took their friendship to the next level and made a tradition to go to Tavern on France every Tuesday night after the bus ride and have Coors Lights and french fries (the key to Bailey’s heart).</p> <p>They called this “Tavern Tuesday”.</p> <p>Joe professed his love to Bailey first, but she wasn’t so sure. However, after Joe bought her more french fries she realized she loved him, too.</p>
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
