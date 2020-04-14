import * as actionType from './actionType';

const initialState = {
  shopitems: [],
  itemdetail: {},
  usercart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.shopItem:
      return { ...state, shopitems: action.shopitems };
    case actionType.itemDetail:
      return { ...state, itemdetail: action.itemdetail };
    default:
      return state;
  }
};

export default reducer;
