import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from '../Components/UI/NavBar';
import Header from '../Components/UI/Headers/Header';

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Header />
      </BrowserRouter>
    );
  }
}
export default Main;
