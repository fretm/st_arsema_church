import * as actionType from './actionType';

import axios from 'axios';

//action for storing bible verse
export const bibleVerseAction = (verse) => {
  return {
    type: actionType.verse,
    verse: verse,
  };
};


//action creator for fetching bible verse
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
