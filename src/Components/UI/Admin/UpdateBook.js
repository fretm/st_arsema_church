import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './input';
import { fechsinglebook } from '../../../stores/actions';
import { Children } from 'react';

class UpdateForm extends Component {
  componentDidMount() {
    //feching single book
    this.props.getonebookeventhandler(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    let UpdateBookFormArray = [];
    // copied booklist from the state
    for (let key in this.props.addbookform) {
      UpdateBookFormArray.push({
        id: key,
        configElem: this.props.addbookform[key],
      });
    }

    return (
      <div>
        {UpdateBookFormArray.map((item) => (
          <Input
            //passing all the item from state to child component
            key={item.id}
            singledata={this.props.data}
            id={item.id}
            label={item.configElem.lable}
            type={item.configElem.type}
            value={item.configElem.value}
            // passing function that handle event handler
            inputeventhandler1={(event) =>
              this.props.inputeventhandler1(event, item.configElem.lable)
            }
          />
        ))}
        <div>
          <br></br>
          <hr />
          <button
            onClick={(id) => {
              this.props.onupdateeventhander(this.props._id);
            }}
          >
            update
          </button>
        </div>
      </div>
    );
  }
}
// Extracting Data with mapStateToProps
const mapStateToProps = (state) => {
  return { ...state.admin};
};
// created functions that dispatch when called,and pass those functions as props to my component.
const mapDispatchToProps = (dispatch) => {
  return {
    //getting all the input event
    inputeventhandler1: (event, id) =>
      dispatch({ type: 'inputevent1', event: event, id: id }),
    //feching single book
    getonebookeventhandler: (id) => dispatch(fechsinglebook(id)),
    // function that handle my update button
    onupdateeventhander: (id) => dispatch({ type: 'update', id: id }),
  };
};
// connecting  a React component to a Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);
