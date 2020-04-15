import axios from 'axios';
import * as actionType from './actionType';

const initalState = {
  addbookform: {
    title: {
      value: '',
      lable: 'Book Title',
      type: 'text',
      placeholder: 'Add book title here',
      className: 'form-control',
    },
    author: {
      value: '',
      lable: 'Author',
      type: 'text',
      placeholder: 'Add book author here',
      className: 'form-control',
    },
    price: {
      value: '',
      lable: 'Price',
      type: 'number',
      placeholder: 'Add book price here',
      className: 'form-control',
    },
    imageurl: {
      value: '',
      lable: 'Image',
      type: 'text',
      placeholder: 'Add image url',
      className: 'form-control',
    },
    description: {
      value: '',
      lable: 'Description',
      type: 'textarea',
      placeholder: 'Add book description here',
      className: 'form-control',
    },
  },
};

const reducer = (state = initalState, action) => {
  if (action.type === actionType.addBookInputEvent) {
    //copy of original addbook (Immutable)
    const copyofaddbook = { ...state.addbookform };
    const copyofelement = copyofaddbook[action.id];
    copyofelement.value = action.event.target.value;
    copyofaddbook[action.id] = copyofelement;

    return { ...state, addbookform: copyofaddbook };
  }
  // sending all my value using obj to my server to be created
  if (action.type === actionType.submitBookEvent) {
    console.log(state.count, 'check state data');
    let obh = {
      imageurl: state.addbookform.imageurl.value,
      title: state.addbookform.title.value,
      author: state.addbookform.author.value,
      price: state.addbookform.price.value,
      description: state.addbookform.description.value,
    };

    axios.post('/api/addbook', obh).then((res) => {
      console.log(res);
    });
    //updating my state to add by one every time book is created
    return {
      ...state,
      count: state.count + state.count + 1,
    };
  }

  return state;
};

export default reducer;
