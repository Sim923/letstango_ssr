import {FETCH_CUSTOMER_LOYALTY, 
        FETCH_CUSTOMER_ORDERS, 
        FETCH_CUSTOMER_PROFILE,
        FETCH_CUSTOMER_ADDRESS} from "../actions/customer";

export const Loyalty =  function(state = {}, action) {  
  switch (action.type) {
    case FETCH_CUSTOMER_LOYALTY:
      return {...state, ...action.payload};
    default:
      return state;
  }
}

export const Orders =  function(state = {}, action) {  
  switch (action.type) {
    case FETCH_CUSTOMER_ORDERS:
      return {...state, ...action.payload};
    default:
      return state;
  }
}

export const Profile =  function(state = {}, action) {  
  switch (action.type) {
    case FETCH_CUSTOMER_PROFILE:
      return {...state, ...action.payload};
    default:
      return state;
  }
}
export const Address =  function(state = {}, action) {  
  switch (action.type) {
    case FETCH_CUSTOMER_ADDRESS:
      return {...state, ...action.payload};
    default:
      return state;
  }
}