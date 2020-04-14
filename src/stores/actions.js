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
      .get('http://localhost:5000/api/v1/church/bibleverses', {
        withCredentials: true,
      })
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
        },
        { withCredentials: true }
      )
      .then((res) => {
        dispatch(userLoginAction(res.data.token));
      })
      .catch((err) => {
        dispatch(userLoginAction(null, 'Invalid User Name and Password'));
      });
  };
};

//action for storing shopitem
export const shopItemAction = (items) => {
  return {
    type: actionType.shopItem,
    shopitems: items,
  };
};

//action creator for fetching shop items
export const asyncShopItemFetch = () => {
  return (dispatch) => {
    axios
      .get('http://localhost:5000/api/v1/church/shopitems')
      .then((res) => {
        dispatch(shopItemAction(res.data.data));
      })
      .catch((err) => {
        throw new Error();
      });
  };
};

//action for getting detail for shop items
export const itemDetailAction = (itemdetail) => {
  return {
    type: actionType.itemDetail,
    itemdetail: itemdetail,
  };
};

//action creator for fetching shop item detail
export const asyncItemDetailFetch = (itemid) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:5000/api/v1/church/shopitem/${itemid}`)
      .then((res) => {
        dispatch(itemDetailAction(res.data.data));
      })
      .catch((err) => {
        throw new Error();
      });
  };
};
