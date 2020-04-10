import React, { Component } from 'react';
import NavBar from '../Components/UI/NavBar';
import Header from '../Components/UI/Headers/Header';
import LeaderWelcome from '../Components/UI/Main/LeaderWelcome';
class Main extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <div className="clearfix"></div>
        <LeaderWelcome />
      </div>
    );
  }
}
export default Main;
