import React, { Component } from "react";
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Accomodations extends Component {
  render() {
    return (
      <div>
        <ScrollableAnchor id={'accomodations'}>
          <div id="section-four">
            <div className="section-title">
              <h2>Accomodations</h2>
            </div>
            <div>
              <div className="column col-1">
                <h3>Loews</h3>
              </div>
              <div className="column col-2">
                <h3>Westin Edina</h3>
              </div>
              <div className="column col-3">
                <h3>Holiday Inn</h3>
              </div>
            </div>
          </div>
        </ScrollableAnchor>
      </div>
    )
  }
}
