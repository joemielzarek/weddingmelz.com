import React, { Component } from 'react';


import './App.css';

import Navigation from './components/Navigation';
import Intro from './components/Intro';
import Story from './components/Story';
import Details from './components/Details';
import WeddingParty from './components/WeddingParty';
import Accomodations from './components/Accomodations';
import Registry from './components/Registry';

import ContactForm from './components/ContactForm';




class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation/>
      <Intro/>
      <Story/>
      <Details/>
      <WeddingParty/>
      <Accomodations/>
      <Registry/>
      <ContactForm />
      </div>
    );
  }
}

export default App;
