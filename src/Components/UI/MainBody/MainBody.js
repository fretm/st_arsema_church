import React, { Component } from 'react';
import WelcomeMessage from './WelcomeMessage';
import Cards from './Cards/Cards';

export default class MainBody extends Component {
  render() {
    return (
      <div>
        <WelcomeMessage />
        <Cards />
      </div>
    );
  }
}
