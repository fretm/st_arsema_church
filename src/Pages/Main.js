import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from '../Components/UI/NavBar';
import Header from '../Components/UI/Headers/Header';
import LeaderWelcome from '../Components/UI/Main/LeaderWelcome';

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Header />
        <div className="clearfix"></div>
        <LeaderWelcome />
      </BrowserRouter>
    );
  }
}
export default Main;
