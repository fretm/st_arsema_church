import React, { Component } from 'react';
import bibleImg from '../../../assets/bible.jpg';
import Banner from './Banner';
import Sections from './Sections/Sections';
class Header extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Sections />
      </div>
     
    );
  }
}
export default Header;
