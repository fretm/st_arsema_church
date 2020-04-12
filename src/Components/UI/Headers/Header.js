import React, { Component } from 'react';
import bibleImg from '../../../assets/bible.jpg';
import Banner from './Banner';
import DailyVerse from './DailyVerse';
import MainBody from '../MainBody/MainBody';

class Header extends Component {
  render() {
    return (
      <div>
        <Banner />
        <DailyVerse />
        <MainBody />
      </div>
    );
  }
}
export default Header;
