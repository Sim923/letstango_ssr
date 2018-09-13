/* eslint-disable */
import axios from "axios";

import * as constants from '../helpers/constants';

const BASE_URL             = constants.BASE_URL;
const GET_WISHLIST         = BASE_URL+"react/customer/getwishlist";



export function fetchwishlist(customerid) { 
    return function(dispatch) {

        let data = JSON.stringify({

            customer_id: customerid,

        })
    
        return axios.post(`${GET_WISHLIST}`, data )
            .then(
                response => response,
                error => console.log('An error occurred.', error)
            )
            .then(response => {
                if(response.data!=null){
                    dispatch(setWishList(response.data));
                }
            
                else{
                    dispatch(set404PageContents(response));
                }
        })
    }
}
export function movetoCart(data) { 
    return function(dispatch) {

        return axios.post(`${GET_WISHLIST}`, data )
            .then(
                response => response,
                error => console.log('An error occurred.', error)
            )
            .then(response => {

        
                if(response.data!=null){
                    dispatch(setWishList(response.data));
                }
            
                else{
                    dispatch(setWishList(""));
                }
        })
    }
}
export const FETCH_WISHLIST = "fetch_wishlist";
function setWishList(response){
    return {
        type: FETCH_WISHLIST,
        payload: response
    };
}
