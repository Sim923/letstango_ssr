/* eslint-disable */
import axios from "axios";
import * as constants from '../helpers/constants';

const BASE_URL              = constants.BASE_URL;
const GET_CUSTOMER_LOYALTY  = BASE_URL+"react/customer/getloyaltyprogram";
const GET_CUSTOMER_ORDERS   = BASE_URL+"react/order/getorders";
const GET_CUSTOMER_PROFILE  = BASE_URL+"react/customer/getcustomerprofile";
const GET_CUSTOMER_ADDRESS  = BASE_URL+"react/customer/getaddresses";

export function fetchcustomerloyalty(customerid) { 
    return function(dispatch) {
        let data = JSON.stringify({
            customer_id: customerid
        })
        return axios.post(`${GET_CUSTOMER_LOYALTY}`, data )
            .then(
                response => response,
                error => console.log('An error occurred.', error)
            )
            .then(response => {
                if(response.data!=null){
                    dispatch(setLoyalty(response.data.loyalty));
                }
                else{
                    dispatch(set404PageContents(response));
                }
        })
    }
}
export const FETCH_CUSTOMER_LOYALTY = "fetch_customer_loyalty";
function setLoyalty(response){
    return {
        type: FETCH_CUSTOMER_LOYALTY,
        payload: response
    };
}

export function fetchCustomerProfile(customerid) { 
    return function(dispatch) {
        let data = JSON.stringify({
            customer_id: customerid
        })
        return axios.post(`${GET_CUSTOMER_PROFILE}`, data )
            .then(
                response => response,
                error => console.log('An error occurred.', error)
            )
            .then(response => {
                if(response.data!=null){
                    
                    dispatch(setProfile(response.data));
                }
                else{
                    dispatch(set404PageContents(response));
                }
        })
    }
}
export const FETCH_CUSTOMER_PROFILE = "fetch_customer_profile";
function setProfile(response){
    return {
        type: FETCH_CUSTOMER_PROFILE,
        payload: response
    };
}



export function fetchorders(customerid) { 
    return function(dispatch) {
        let data = JSON.stringify({
            customer_id: customerid
        })
        return axios.post(`${GET_CUSTOMER_ORDERS}`, data )
            .then(
                response => response,
                error => console.log('An error occurred.', error)
            )
            .then(response => {
                if(response.data!=null){
                    
                    dispatch(setOrders(response.data));
                }
                else{
                    dispatch(set404PageContents(response));
                }
        })
    }
}
export const FETCH_CUSTOMER_ORDERS = "fetch_customer_orders";
function setOrders(response){
    return {
        type: FETCH_CUSTOMER_ORDERS,
        payload: response
    };
}

export function fetchCustomerAddress(customerid) { 
    return function(dispatch) {
        let data = JSON.stringify({
            customer_id: customerid
        })
        return axios.post(`${GET_CUSTOMER_ADDRESS}`, data )
            .then(
                response => response,
                error => console.log('An error occurred.', error)
            )
            .then(response => {
                if(response.data!=null){
                    
                    dispatch(setAddress(response.data));
                }
                else{
                    dispatch(set404PageContents(response));
                }
        })
    }
}
export const FETCH_CUSTOMER_ADDRESS = "fetch_customer_address";
function setAddress(response){
    return {
        type: FETCH_CUSTOMER_ADDRESS,
        payload: response
    };
}