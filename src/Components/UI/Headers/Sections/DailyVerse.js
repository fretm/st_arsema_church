import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import biblepicture from '../../../../assets/dailyverse.jpg';
import * as actionType from '../../../../stores/actions';

class DailyVerse extends Component {
  //fetching the bibleverses and store it on the redux state
  componentDidMount() {
    this.props.getBibleVerses();
  }

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <div className="col-md-6">
          <div className="pray">
            <img src={biblepicture} alt="dailyversebible" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="panel text-left">
            <h1>Daily Verse</h1>
            <h4>Book of {this.props.bibleverse.book_name}</h4>
            <p className="pt-4">{this.props.bibleverse.verse}</p>
            <p className="pt-4">{this.props.bibleverse.text}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { bibleverse: state.verses.bibleverse };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBibleVerses: () => dispatch(actionType.asyncVerseFetch()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DailyVerse);
