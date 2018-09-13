import _ from "lodash";
import { FETCH_MENU } from "../actions/menu";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_MENU:
      return {...state, ['desktop']:action.payload.data.desktop,['mobile']:action.payload.data.mobile };
    default:
      return state;
  }
}