import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actionCreator from '../../../stores/actions';
import bibleImg from '../../../assets/book1.jpg';
import { Link } from 'react-router-dom';
class ShopItemDetail extends Component {
  componentDidMount() {
    // getting store item detail
    const itemid = this.props.match.params.itemid;
    this.props.onItemDetail(itemid);
  }
  render() {
    console.log(this.props);
    return (
      <div className="shopdetail">
        <hr />
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <img
                src={this.props.itemdetail.imageurl}
                className="card-img"
                alt="..."
              />
            </div>
            <div className="col-md-8 col-sm-12 pl-4">
              <div className="row">
                <h2>Book Title</h2>
              </div>
              <h4>
                <small className="text-muted">Buy Now on:</small>
              </h4>
              <ul>
                <li className="list-item" href="">
                  <Link href="">Amazon</Link>
                </li>

                <li className="list-item" href="">
                  <Link href="">Barnes Noble</Link>
                </li>
                <li className="list-item" href="">
                  <Link href="">Google book</Link>
                </li>
              </ul>
              <div className="row pt-4">
                <h5>
                  <small class="text-muted">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Totam quam, ullam ut at nesciunt perspiciatis. Dignissimos
                    ullam perferendis eius dolorem quod? Culpa eum recusandae
                    suscipit, labore ab dolorem amet est?
                  </small>
                </h5>
              </div>
              <div className="row pt-2">
                <h5>
                  <small className="text-muted">Rates</small>
                </h5>
              </div>
              <div className="row pt-2 pl-5">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
              <div className="row pt-5 pl-3">
                <Link to="/">
                  <h5>
                    <i className="fas fa-cart-plus"> buy</i>
                  </h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="conatiner mt-5">
            <h5>
              <small className="text-muted">Comments About the book</small>
            </h5>
            <div className="row">
              <blockquote className="blockquote text-right">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">Someone x </footer>
              </blockquote>
            </div>
            <div className="row">
              <blockquote className="blockquote text-right">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">Someone y </footer>
              </blockquote>
            </div>
          </div>

          <div className="conatiner">
            <form>
              <div className="form-group" style={{ width: '80%' }}>
                <label for="exampleTextarea">Your Comment</label>
                <textarea
                  class="form-control"
                  id="exampleTextarea"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
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
    onItemDetail: (itemid) =>
      dispatch(actionCreator.asyncItemDetailFetch(itemid)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShopItemDetail);
