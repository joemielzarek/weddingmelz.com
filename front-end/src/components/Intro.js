import React, { Component } from 'react';
import HeroSlider from '../components/HeroSlider';

export default class Intro extends Component {
  render() {
    return (
      <div>
        <HeroSlider></HeroSlider>
        <section>
          <div className="call-to-action">
            <div className="cta-description">
              <h3>to have and to hold.</h3>
              <p>05.04.2019</p>
              <button>RSVP</button>
            </div>
          </div>
        </section>
      </div>

    );
  }
}
