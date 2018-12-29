import React, { Component } from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import { Row, Col } from 'react-flexbox-grid';


import PeopleSlider from "./PeopleSlider";


export default class WeddingParty extends Component {
  render() {
    return (
        <ScrollableAnchor id={'wedding-party'}>
        <div>
          <Row>
            <Col xs={12}>
              <div className="section-title"><h2>wedding party</h2></div>
            </Col>
            <Col xs={12}>
              <PeopleSlider />
            </Col>
          </Row>
        </div>
        </ScrollableAnchor>
    )
  }
}
