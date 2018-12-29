



import React, { Component } from 'react';

import ScrollableAnchor from 'react-scrollable-anchor';

import Iframe from 'react-iframe';

import { Row, Col } from 'react-flexbox-grid';




export default class Rsvpify extends Component {
    render() {
      return (
          <ScrollableAnchor id={'rsvp'}>
          <div>
          <Row className="rsvp">
            <Col xs={12} className="section-title invert">
              <h2>rsvp</h2>
            </Col>
            <Iframe url="https://weddingmelz.app.rsvpify.com/"
            width="100vw"
            height="100vh"
            id="rsvp-iframe"
            display="initial"
            position="relative"
            allowFullScreen/>
            </Row>
          </div>

          </ScrollableAnchor>
      )
    }

  }
