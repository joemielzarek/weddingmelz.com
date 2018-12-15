import React, { Component } from 'react';
import HeroSlider from '../components/HeroSlider';
import { Parallax } from 'react-scroll-parallax';


export default class Intro extends Component {
  render() {
    return (
      <div>
        <HeroSlider></HeroSlider>
        <section>
          <div className="call-to-action">
          <Parallax
        className="custom-class"
        offsetYMax={20}
        offsetYMin={-20}
        slowerScrollRate
        tag="figure"
    >
                   <div className="cta-description">
              <h3>to have and to hold.</h3>
              <p>05&#x2219;04&#x2219;2019</p>
              <button> <a href="/#rsvp">RSVP</a></button>
            </div>
    </Parallax>

          </div>
        </section>
      </div>

    );
  }
}


 
