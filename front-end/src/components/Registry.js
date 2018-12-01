import React, { Component } from "react";
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Accomodations extends Component {
  render() {
    return (
      <div>
        <ScrollableAnchor id={'registry'}>
          <div id="section-five">
            <div className="section-title">
              <h2>Registry</h2>
            </div>
            <div>
              <div className="column col-1">
                <h3>Crate & Barrel</h3>
              </div>
              <div className="column col-2">
                <h3>Target</h3>
              </div>
              <div className="column col-3">
                <h3>Anthropologie</h3>
              </div>
            </div>
          </div>
        </ScrollableAnchor>
      </div>
    )
  }
}
