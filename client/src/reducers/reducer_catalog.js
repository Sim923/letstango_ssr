import _ from "lodash";
import {FETCH_CATEGORY, FETCH_PRODUCT, FETCH_CATEGORY_LANDINGPAGE} from "../actions/catalog";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CATEGORY:
      return {...state, ...action.payload.data};
    case FETCH_PRODUCT:
      return {...state, ...action.payload.data};
    case FETCH_CATEGORY_LANDINGPAGE:
      return {...state, ...action.payload.data};
    default:
      return state;
  }
}
