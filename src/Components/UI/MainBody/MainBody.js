import React, { Component } from 'react';
import WelcomeMessage from './WelcomeMessage';
import Cards from './Cards/Cards';
import Services from './ChurchServices/MainServices';

export default class MainBody extends Component {
  render() {
    return (
      <div>
        <WelcomeMessage />
        <Cards />
        <Services />
      </div>
    );
  }
}
