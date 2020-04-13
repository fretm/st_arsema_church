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

//action for user authentication
export const userLoginAction = (user, loginMessage) => {
  return {
    type: actionType.login,
    user: user,
    loginMessage: loginMessage,
  };
};

//action creator for fetching bible verse
export const asyncLoginAuthentication = () => {
  return (dispatch, getState) => {
    const email = getState().auth.loginForm.email.elemConfig.value;
    const password = getState().auth.loginForm.password.elemConfig.value;

    axios
      .post(
        'http://localhost:5000/api/v1/church/login',

        {
          email: email,
          password: password,
        }
      )
      .then((res) => {
        document.cookie = `churchtoken=${res.data.token};expires=${new Date(
          Date.now() + 15 * 24 * 60 * 60 * 1000
        )}`; // 15 days from now}
        document.cookie = `churchToken=${res.data.token}`;
        dispatch(userLoginAction(res.data.token));
      })
      .catch((err) => {
        dispatch(userLoginAction(null, 'Invalid User Name and Password'));
      });
  };
};
