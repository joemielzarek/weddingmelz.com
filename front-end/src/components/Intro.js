import React, { Component } from 'react';
import HeroSlider from '../components/HeroSlider';

export default class Intro extends Component {
  render() {
    return (
      <div className="row">
        <HeroSlider></HeroSlider>
          <section className="col-xs-12">
            <div className="call-to-action">
              <div className="cta-description">
                <h3>to have and to hold.</h3>
                <p>05&#x2219;04&#x2219;2019</p>
                <button> <a href="/#rsvp">RSVP</a></button>
              </div>
            </div>
          </section>
      </div>
    );
  }
}
