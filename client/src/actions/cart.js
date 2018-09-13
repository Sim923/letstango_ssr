/* eslint-disable */
import axios from "axios";

import * as constants from '../helpers/constants';

const BASE_URL             = constants.BASE_URL;
const GET_CART_URL         = BASE_URL+"react/checkout/getcartitems";
const UPDATE_CART_URL      = BASE_URL+"react/checkout/updatecartitem";
const DELETE_CART_ITEM_URL = BASE_URL+"react/checkout/deletecartitem";
const APPLY_COUPONCODE     = BASE_URL+"react/checkout/applycouponcode";


export function fetchCart(customerid,quoteid) { 
    return function(dispatch) {

        let data = JSON.stringify({

            customer_id: customerid,
            quote_id:quoteid

        })
    
        return axios.post(`${GET_CART_URL}`, data )
            .then(
                response => response,
                error => console.log('An error occurred.', error)
            )
            .then(response => {
                if(response.data!=null){
                    dispatch(setCartContent(response.data));
                }
            
                else{
                    dispatch(set404PageContents(response));
                }
        })
    }
}
export function updateCart(data) { 
    return function(dispatch) {

        return axios.post(`${UPDATE_CART_URL}`, data )
            .then(
                response => response,
                error => console.log('An error occurred.', error)
            )
            .then(response => {

                if(response.data!=null){
                    dispatch(setCartContent(response.data));
                }
            
                else{
                    dispatch(set404PageContents(response));
                }
        })
    }
}
export function deleteCart(data) { 
    return function(dispatch) {

        return axios.post(`${DELETE_CART_ITEM_URL}`, data )
            .then(
                response => response,
                error => console.log('An error occurred.', error)
            )
            .then(response => {

        
                if(response.data!=null){
                    dispatch(setCartContent(response.data));
                }
            
                else{
                    dispatch(setCartContent(""));
                }
        })
    }
}
export function applyCouponCode(data) { 
    return function(dispatch) {

        return axios.post(`${APPLY_COUPONCODE}`, data )
            .then(
                response => response,
                error => console.log('An error occurred.', error)
            )
            .then(response => {

                if(response.data!=null){
                    dispatch(setCartContent(response.data));
                }
            
                else{
                    dispatch(setCartContent(""));
                }
        })
    }
}

export const FETCH_CART = "fetch_cart";
function setCartContent(response){
    return {
        type: FETCH_CART,
        payload: response
    };
}
export const ERROR_CART = "error_cart";
function setCartError(response){
    return {
        type: ERROR_CART,
        payload: response
    };
}
