import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import bookImg from '../../../assets/book1.jpg';
import * as actionCreator from '../../../stores/actions';

class ChurchStore extends Component {
  componentDidMount() {
    //get shop items from the server and store it
    this.props.onGetShopItem();
  }

  render() {
    return (
      <div className="churchshop mt-3">
        <div className="container text-center">
          <div className="card-columns">
            {this.props.shopitems.map((item) => (
              <Link to={`/itemdetail/${item._id}`} key={item._id}>
                <div className="card border-0 ">
                  <img
                    className="card-img"
                    src={item.imageurl}
                    alt={item.title}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.shop,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetShopItem: () => dispatch(actionCreator.asyncShopItemFetch()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChurchStore);
