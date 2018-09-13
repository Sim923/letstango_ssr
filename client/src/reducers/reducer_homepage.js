import _ from "lodash";
import {FETCH_HOMEPAGE} from "../actions/homepage";

export default function(state = {}, action) {
  
  switch (action.type) {
    case FETCH_HOMEPAGE:
      return {...state, ...action.payload.data.contents};
    default:
      return state;
  }
}
