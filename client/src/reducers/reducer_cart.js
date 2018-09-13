import _ from "lodash";
import {FETCH_CART,ERROR_CART} from "../actions/cart";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CART:
      return { ...action.payload};
    case ERROR_CART:
    	return {...action.payload}
    default:
      return state;
  }
}
