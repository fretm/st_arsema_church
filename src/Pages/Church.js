import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from '../Components/UI/NavBar';
import Header from '../Components/UI/Headers/Header';
import Footer from '../Components/UI/Footer';

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Header />
        <Footer />
      </BrowserRouter>
    );
  }
}
export default Main;
