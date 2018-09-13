/* eslint-disable */
import axios from "axios";

import * as constants from '../helpers/constants';
const BASE_URL             = constants.BASE_URL;

const LOGIN_URL = BASE_URL+"react/customer/getlogin/";
const SIGNUP_URL= BASE_URL+"react/customer/createcustomer";

export const userActions = {
    login,
    signup
};

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

export function login(username, password){
return function(dispatch) {
        //dispatch(requestAPI());
      let data = JSON.stringify({
                email: username,
                password:password
                
                
        })

        return axios.post(`${LOGIN_URL}`, data )
            .then(
                response => { 

                    if (response.data.status==1) {

                    // localStorage.setItem('user', JSON.stringify(response.data.info));
                    // localStorage.setItem('customer_id', (response.data.info.id));
                    localStorage.set('user', response.data.info);
                    localStorage.set('customer_id', (response.data.info.id));

                    }

                
                   return response

                },
                error => {
                    dispatch(failure(error));
                    return error
                }
            )
        
        };
    
}
export function signup(username,email, password){
return function(dispatch) {
        //dispatch(requestAPI());
      let data = JSON.stringify({
                custName:username,
                custEmail: email,
                custPassword:password
                
                
        })

        return axios.post(`${SIGNUP_URL}`, data )
            .then(
                response => { 
                    localStorage.set('user', JSON.stringify(response.data.customer));
                    localStorage.set('customer_id', (response.data.customer.id));
                   return response

                },
                error => {
                    dispatch(failure(error));
                    return error
                }
            )
        
        };
    
}
