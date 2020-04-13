import React, { Component } from 'react';
import { connect } from 'react-redux';

import bibleImg from '../../../assets/dailyverse.jpg';
import * as actionType from '../../../stores/actions';

class DailyVerse extends Component {
  //fetching the bibleverses and store it on the redux state
  componentDidMount() {
    this.props.getBibleVerses();
  }
  render() {
    console.log(this.props);
    return (
      <div className="dailyverse">
        <div className="container-fluid d-flex justify-content-center">
          <div className="card mb-3 border-0 ml-5">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={bibleImg} className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-center">Daily verses</h5>
                  <p className="card-text text-center">
                    {this.props.bibleverse.text}
                  </p>
                  <p className="card-text float-right">
                    <blockquote className="blockquote">
                      <footer class="blockquote-footer">
                        <cite> {this.props.bibleverse.verse}</cite>
                      </footer>
                    </blockquote>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { bibleverse: state.verses.bibleverse };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBibleVerses: () => dispatch(actionType.asyncVerseFetch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyVerse);
