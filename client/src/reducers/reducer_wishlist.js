import _ from "lodash";
import {FETCH_WISHLIST} from "../actions/wishlist";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_WISHLIST:
      return { ...action.payload};
    default:
      return state;
  }
}
