
import React from 'react';

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

export const alertConstants = {
    SUCCESS: 'ALERT_SUCCESS',
    ERROR: 'ALERT_ERROR',
    CLEAR: 'ALERT_CLEAR'
};

export const BASE_URL		       = "https://test1.letstango.com/";
export const HOMESPAGE_URL	   = '/';
export const CARTPAGE_URL	     = '/cart';
export const LOGINPAGE_URL	   = '/login';
export const CUSTOMER_ACCOUNT  = 'customer/profile';
export const CUSTOMER_ADDRESS  = 'customer/address';
export const CUSTOMER_ORDERS   = 'customer/orders';
export const CUSTOMER_WISHLIST = 'customer/wishlist';
export const CUSTOMER_LOYALTY  = 'customer/loyalty';
export const CUSTOMER_PROFILE  = 'customer/profile';

// export let 	 USERID  		= localStorage.getItem('customer_id')?(localStorage.getItem('customer_id')):'';
// export let   QUOTEID 		= localStorage.getItem('quote_id')?(localStorage.getItem('quote_id')):'';
export let 	 USERID  		= localStorage.get('customer_id')?(localStorage.get('customer_id')):'';
export let   QUOTEID 		= localStorage.get('quote_id')?(localStorage.get('quote_id')):'';

export let 	 FreeShippingCharge = 200;
export let   MinimumEmi	 	= 1000;

export function getPathName () {

	// const locationPath = location.pathname
	var pathname = "/"
	
	// if(locationPath.startsWith("/ae-ar")){
   	// 	pathname = "/ae-ar/"
	// }

	return pathname;
} 

export function getForamtedDate (date) {

  var dates = new Date(date)
  var formatedDate = dates.toLocaleDateString()
 
  return formatedDate;
 

} 


 export const Preloader = (props) => {
 	return <img src="https://vignette.wikia.nocookie.net/the-darkest-minds/images/4/47/Placeholder.png/revision/latest?cb=20160927044640" />;
 }
 export default Preloader;

export function strip_html_tags(str){
          if ((str===null) || (str===''))
              return false;
          else
              str = str.toString();
          return str.replace(/<[^>]*>/g, '');
      }

 