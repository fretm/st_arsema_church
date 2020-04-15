import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from '../Components/UI/NavBar';
import Header from '../Components/UI/Headers/Header';
import Footer from '../Components/UI/Footer';

import * as actionType from '../stores/actionType';
import MainBody from '../Components/UI/MainBody/MainBody';
import ChurchStore from '../Components/UI/ChurchStore/ChurchStore';
import Login from '../Components/UI/Auth/Login';
import ShopItemDetail from '../Components/UI/ChurchStore/ShopItemDetail';
import SignUp from '../Components/UI/Auth/SignUp';
import UserCart from '../Components/UI/ChurchStore/UserCart';
import AddBook from '../Components/UI/Admin/AddBook';

class Main extends Component {

  componentDidMount() {
    this.props.setTokenFromCookie();
  }
  
  render() {
    return (
      <Fragment>
        <NavBar />
        <Header />
        <Switch>
          <Route path="/" exact component={MainBody} />
          <Route path="/store" exact component={ChurchStore} />
          <Route path="/itemdetail/:itemid" exact component={ShopItemDetail} />
          {this.props.user && <Route path="/cart" exact component={UserCart} />}
          {this.props.user && <Redirect from="/login" to="/" />}
          <Route path="/login" exact component={Login} />
          {!this.props.user && (
            <Route path="/signup" exact component={SignUp} />
          )}
          <Route path="/addbibleverse" exact component={ChurchStore} />

          {/*  admins routes*/}

          <Route path="/admin/addbook" exact component={AddBook} />
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
const mapDispatchToProps = (dispatch) => {
  return {
    setTokenFromCookie: () => dispatch({ type: actionType.setToken }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
