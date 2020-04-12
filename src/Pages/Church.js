import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavBar from '../Components/UI/NavBar';
import Header from '../Components/UI/Headers/Header';
import Footer from '../Components/UI/Footer';

import MainBody from '../Components/UI/MainBody/MainBody';
import ChurchStore from './ChurchStore';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Header />
        <Switch>
          <Route path="/" exact component={MainBody} />
          <Route path="/store" exact component={ChurchStore} />

          <Route path="/addbibleverse" exact component={ChurchStore} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}
export default Main;
