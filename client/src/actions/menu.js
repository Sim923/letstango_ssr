/* eslint-disable */
import axios from "axios";

export const FETCH_MENU = "fetch_menu";
import * as constants from '../helpers/constants';
const BASE_URL             = constants.BASE_URL;
const API_KEY = "?key=PAPERCLIP1234";

export function fetchMenu() {
  //const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  const request = axios.get(`${BASE_URL}/header/menu${API_KEY}`);

  return {
    type: FETCH_MENU,
    payload: request
  };
}
