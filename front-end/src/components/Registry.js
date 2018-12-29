import React, { Component } from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import { Row, Col } from 'react-flexbox-grid';


import Crate from '../images/crate.png';
import Target from '../images/target.png';
import Anthro from '../images/anthro.png';


export default class accommodations extends Component {
  render() {
    return (
      <ScrollableAnchor id={'registry'}>
      <div>
        <Row>
          <Col xs={12}>
            <div className="section-title"><h2>registry</h2></div>
          </Col>
          <Col xs={12}>
          <div className="column-container-registry">
                    <div className="column col-1">
                    <a target="_blank" href="https://www.crateandbarrel.com/gift-registry/joe-mielzarek-and-bailey-moomaw/r5905015">
                    <img className="registry-logo first" src={Crate} alt="Crate & Barrel"/></a>
                    </div>
                    <div className="column col-2">
                    <a target="_blank" href="https://www.target.com/gift-registry/giftgiver?registryId=0d6ceae0a531487599260d986a7c1f6e&type=WEDDING"><img className="registry-logo second" src={Target} alt="Target"/></a>
                    </div>
                    <div className="column col-3">
                    <a target="_blank" href="https://www.anthropologie.com/registry/listing?registryId=NDBMMJZKZGJL"><img className="registry-logo third" src={Anthro} alt="Anthro"/></a>
                    </div>
                  </div>
          </Col>
        </Row>
      </div>
      </ScrollableAnchor>
    )
  }
}
