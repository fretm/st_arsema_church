import * as actionType from './actionType';
import axios from 'axios';

export const bibleVerseAction = (verse) => {
  return {
    type: actionType.verse,
    verse: verse,
  };
};

export const asyncVerseFetch = () => {
  let versenumber = Math.ceil(Math.random() * 20);
  return (dispatch) => {
    axios
      .get('http://localhost:5000/api/v1/church/bibleverses')
      .then((res) => {
        dispatch(bibleVerseAction(res.data.data[versenumber]));
      })
      .catch((err) => {
        throw new Error();
      });
  };
};
