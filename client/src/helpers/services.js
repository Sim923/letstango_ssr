/* eslint-disable */
import { authHeader } from '../helpers';
import axios from "axios";

import * as constants from './constants';

const ADD_TO_CART           = constants.BASE_URL+"react/checkout/additemtocart";
const ADD_TO_WISHLIST       = constants.BASE_URL+"react/customer/addwhishlistitem";
const GET_SIMILAR_PEODUCTS  = constants.BASE_URL+"react/router/getsimilarproducts";
const ADD_TO_NOTIFY_ME      = constants.BASE_URL+"react/customer/addproductnotification";
const GET_CUSTOMERDETAILS   = constants.BASE_URL+"react/customer/getcustomerdetails";
const GET_COUNTRY           = constants.BASE_URL+"react/customer/getcountrylist";
const GET_STATE             = constants.BASE_URL+"react/customer/getstates";
const GET_AREA              = constants.BASE_URL+"react/customer/getstatesarea";
const GET_SHIPPING_METHOD   = constants.BASE_URL+"react/checkout/getshippingnpaymentmethods";
const GET_TELEPHONECODE     = constants.BASE_URL+"react/customer/getcountrytelephonecode";
const SET_SET_QUOTE_ADDRESS = constants.BASE_URL+"react/checkout/setquoteaddress";
const PLACE_ORDER           = constants.BASE_URL+"react/checkout/placeorder";





export const userService = {
    logout,
    getAll,
    addItemToCart,
    addItemToWishList,
    getSimilarProducts,
    getUserReviews,
    addToNotifyMe,
    getCustomerDetails,
    getCountry,
    getState,
    getArea,
    getTelephoneCode,
    setquoteaddress,
    getShippingPaymentMethod,
    placeOrder
};

function addItemToCart(id,quoteid,cartdata){

      let data = JSON.stringify({
            customer_id: id,
            quote_id:quoteid,
            cartdata: cartdata
        })
    return axios.post(`${ADD_TO_CART}`, data )
        .then((response) => {

          return response
        
        })
        .catch(err => {
            return err
        });
}
function addItemToWishList(id,productid){

      let data = JSON.stringify({
            customer_id: id,
            product_id:productid
        })
    return axios.post(`${ADD_TO_WISHLIST}`, data )
        .then((response) => {

          return response
        
        })
        .catch(err => {
            return err
        });
}
function getSimilarProducts(productid){

      let data = JSON.stringify({
            product_id: productid
        })
    return axios.post(`${GET_SIMILAR_PEODUCTS}`, data )
        .then((response) => {

          return response
        
        })
        .catch(err => {
            return err
        });
}
function getUserReviews(url){
    
    return axios.get(`${url}` )
        .then((response) => {

          return response
        
        })
        .catch(err => {
            return err
        });
}
function addToNotifyMe(productId,email){

     let data = JSON.stringify({
            product_id: productId,
            customer_email:email
        })
   
    return axios.post(`${ADD_TO_NOTIFY_ME}`,data )
        .then((response) => {

          return response
        
        })
        .catch(err => {
            return err
        });
}
function getCustomerDetails(customerId){

      let data = JSON.stringify({
            customer_id: customerId
        })
    return axios.post(`${GET_SIMILAR_PEODUCTS}`, data )
        .then((response) => {

          return response
        
        })
        .catch(err => {
            return err
        });
}
function getCountry(){

      
    return axios.get(`${GET_COUNTRY}` )
        .then((response) => {

          return response
        
        })
        .catch(err => {
            return err
        });
}
function getState(countrycode){

     let data = JSON.stringify({
            country: countrycode
        })

      
    return axios.post(`${GET_STATE}`,data )
        .then((response) => {

          return response
        
        })
        .catch(err => {
            return err
        });
}
function getArea(stateCode){

     let data = JSON.stringify({
            state: stateCode
        })

      
    return axios.post(`${GET_AREA}`,data )
        .then((response) => {

          return response
        
        })
        .catch(err => {
            return err
        });
}
function getTelephoneCode(countrycode){

     let data = JSON.stringify({
            country: countrycode
        })

      
    return axios.post(`${GET_TELEPHONECODE}`,data )
        .then((response) => {

          return response
        
        })
        .catch(err => {
            return err
        });
}
function setquoteaddress(data){

  
    return axios.post(`${SET_SET_QUOTE_ADDRESS}`, data )
        .then((response) => {

          return response
        
        })
        .catch(err => {
            return err
        });
}

function getShippingPaymentMethod(quoteid){

    let data = JSON.stringify({
            quote_id: quoteid
        })

  
    return axios.post(`${GET_SHIPPING_METHOD}`, data )
        .then((response) => {

          return response
        
        })
        .catch(err => {

            this.props.history.push('/cart');
            
            return err
        });
}
function placeOrder(data){

  
    return axios.post(`${PLACE_ORDER}`, data )
        .then((response) => {

          return response
        
        })
        .catch(err => {
            return err
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/users`, requestOptions).then(handleResponse);
}

