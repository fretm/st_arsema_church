import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from '../Components/UI/NavBar';
import Header from '../Components/UI/Headers/Header';
import Footer from '../Components/UI/Footer';

import MainBody from '../Components/UI/MainBody/MainBody';
import ChurchStore from '../Components/UI/ChurchStore/ChurchStore';
import Auth from '../Components/UI/Auth/Auth';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Header />
        <Switch>
          <Route path="/" exact component={MainBody} />
          <Route path="/store" exact component={ChurchStore} />
          {this.props.user && <Redirect from="/auth" to="/" />}
          <Route path="/auth" exact component={Auth} />
          <Route path="/addbibleverse" exact component={ChurchStore} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.auth,
  };
};

export default connect(mapStateToProps)(Main);
