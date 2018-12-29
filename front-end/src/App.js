import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';


import './App.css';

import Navigation from './components/Navigation';
import Intro from './components/Intro';
import Story from './components/Story';
import Details from './components/Details';
import WeddingParty from './components/WeddingParty';
import Accommodations from './components/Accommodations';
import Registry from './components/Registry';
import Rsvpify from './components/Rsvpify';





class App extends Component {
  render() {
    return (
      <ParallaxProvider className="App">
      <Navigation/>
      <Intro/>
      <Story/>
      <Details/>
      <WeddingParty/>
      <Accommodations/>
      <Registry/>
      <Rsvpify/>
      </ParallaxProvider>
    );
  }
}

export default App;
