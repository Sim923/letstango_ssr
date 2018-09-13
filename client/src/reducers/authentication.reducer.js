import { userConstants } from '../helpers';

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

// let user = localStorage.getItem('user')?(localStorage.getItem('user')):'';
let user = localStorage.get('user')?(localStorage.get('user')):'';
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}