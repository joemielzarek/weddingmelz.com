import React, { Component } from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import { Row, Col } from 'react-flexbox-grid';


export default class accommodations extends Component {
  render() {
    return (
        <ScrollableAnchor id={'accommodations'}>
        <div>
          <Row>
            <Col xs={12}>
              <div className="section-title"><h2>accommodations</h2></div>
            </Col>
            <Col xs={12}>
            <div className="column-container xs-center">
              <div className="hotel-banner"><h3>recommended hotels near edina country club</h3></div>
                <Col xs={2} className="col-1">
                  <h3>Residence Inn</h3>
                  <h4>$</h4>
                  <h5><span>4.1 miles</span> <br></br>from edina country club</h5>
                  <p>(952) 893-9300</p>
                  <p>3400 Edinborough Way<br></br> Edina, MN 55435</p>
                  <a target="_blank" href="https://www.marriott.com/hotels/travel/mspda-residence-inn-minneapolis-edina/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2">Book Now</a>
                </Col>
                <Col xs={2} className="col-2">
                  <h3>Homewood Suites</h3>
                  <h4>$$</h4>
                  <h5><span>2.7 miles</span> <br></br>from edina country club</h5>
                  <p>(952) 926-0224</p>
                  <p>6600 York Ave S<br></br> Edina, MN 55435</p>
                  <a target="_blank" href="https://homewoodsuites3.hilton.com/en/hotels/minnesota/homewood-suites-by-hilton-edina-minneapolis-MSPEIHW/index.html?SEO_id=GMB-HW-MSPEIHW">Book Now</a>
                </Col>
                <Col xs={2} className="col-3">
                  <h3>Westin Edina</h3>
                  <h4>$$$</h4>
                  <h5><span>3 miles</span> <br></br>from edina country club</h5>
                  <p>(952) 567-5000</p>
                  <p>3201 Galleria<br></br> Edina, MN 55435</p>
                  <a target="_blank" href="https://www.marriott.com/hotels/travel/mspwi-the-westin-edina-galleria/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2">Book Now</a>
                </Col>
              </div>
            </Col>
          </Row>
        </div>
        </ScrollableAnchor>
    )
  }
}
