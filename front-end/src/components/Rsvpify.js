



import React, { Component } from 'react'

import ScrollableAnchor from 'react-scrollable-anchor'

import Iframe from 'react-iframe'



export default class Rsvpify extends Component {
    render() {
      return (
        <div>
          <ScrollableAnchor id={'rsvp'}>
            <div id="section-six">
            <div className="section-title">
              <h2>rsvp</h2>
            </div>
            <Iframe url="https://weddingmelz.app.rsvpify.com/"
            width="100vw"
            height="100vh"
            id="rsvp-iframe"
            display="initial"
            position="relative"
            allowFullScreen/>
            </div>
            
          </ScrollableAnchor>
        </div>
      )
    }

  }
