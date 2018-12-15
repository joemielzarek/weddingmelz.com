import React, { Component } from "react";
import ScrollableAnchor from 'react-scrollable-anchor'

import PeopleSlider from "./PeopleSlider";


export default class WeddingParty extends Component {
  render() {
    return (
      <div>
        <ScrollableAnchor id={'wedding-party'}>
          <div id="section-three">
            <div className="section-title">
              <h2>wedding party</h2>
            </div>
            <PeopleSlider />
          </div>
        </ScrollableAnchor>
      </div>
    )
  }
}
