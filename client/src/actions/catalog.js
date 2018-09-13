/* eslint-disable */
import axios from "axios";

import * as constants from '../helpers/constants';

const BASE_URL             = constants.BASE_URL;


const ROOT_URL 			= BASE_URL+"react/router/contents/";
const CATEGORY_URL 		= BASE_URL+"react/router/category/";
const PTIONMETRIX_URL 	= BASE_URL+"react/router/product/";


export function fetchCatalogContent(pathname) {	
	return function(dispatch) {
		//dispatch(requestAPI());
		var actualPathName = pathname.substring(1);
		let data = JSON.stringify({
	        url: pathname
	    })
		//return axios.get(`${ROOT_URL}`, { params: { url: actualPathName }})
		//console.log(data);
		return axios.post(`${ROOT_URL}`, data )
			.then(
				response => response,
				error => console.log('An error occurred.', error)
			)
			.then(response => {
				if(response.data.type == 'category'){
					dispatch(setCategoryContents(response));
				}
				else if(response.data.type == 'product'){
					dispatch(setProductContents(response));
				}
				else if(response.data.type == 'categorylist'){
					dispatch(setCategoryLandingPage(response));
				}
				else if(response.data.type == 'page'){
					dispatch(setPageContents(response));
				}
				else{
					dispatch(set404PageContents(response));
				}
		})
	}
}


export function getOptionMetrixProduct(productId) {	
	return function(dispatch) {
		//dispatch(requestAPI());

		let data = JSON.stringify({
	        product_id: productId
	    })
		//return axios.get(`${ROOT_URL}`, { params: { url: actualPathName }})
	
		return axios.post(`${PTIONMETRIX_URL}`, data )
			.then(
				response => response,
				error => console.log('An error occurred.', error)
			)
			.then(response => {
				if(response.data.type == 'category'){
					dispatch(setCategoryContents(response));
				}
				else if(response.data.type == 'product'){
					dispatch(setProductContents(response));
				}
				else if(response.data.type == 'page'){
					dispatch(setPageContents(response));
				}
				else{
					dispatch(set404PageContents(response));
				}
			})
		}
	}



export function fetchCategory(data){
return function(dispatch) {
		//dispatch(requestAPI());
	
		
		//return axios.get(`${ROOT_URL}`, { params: { url: actualPathName }})
		//console.log(data);
		return axios.post(`${CATEGORY_URL}`, data )
			.then(
				response => response,
				error => console.log('An error occurred.', error)
			)
			.then(response => {
				dispatch(setCategoryContents(response));
				
			})
		}
}


export function applayFilters(id){

return function(dispatch) {
		//dispatch(requestAPI());
			let data = JSON.stringify({
	        category_id: categoryId,
	        page:page
	    })
		//return axios.get(`${ROOT_URL}`, { params: { url: actualPathName }})
		//console.log(data);
		return axios.post(`${CATEGORY_URL}`, data )
			.then(
				response => response,
				error => console.log('An error occurred.', error)
			)
			.then(response => {
				dispatch(setCategoryContents(response));
				
		})
	}
}

export function fetchSearchByCategory(pathname) {	
	return function(dispatch) {
		//dispatch(requestAPI());
		var actualPathName = pathname.substring(1);
		let data = JSON.stringify({
	        url: pathname
	    })
		//return axios.get(`${ROOT_URL}`, { params: { url: actualPathName }})
		//console.log(data);
		return axios.post(`${ROOT_URL}`, data )
			.then(
				response => response,
				error => console.log('An error occurred.', error)
			)
			.then(response => {
				if(response.data.type == 'category'){
					dispatch(setCategoryContents(response));
				}
				else if(response.data.type == 'product'){
					dispatch(setProductContents(response));
				}
				else if(response.data.type == 'categorylist'){
					dispatch(setCategoryLandingPage(response));
				}
				else if(response.data.type == 'page'){
					dispatch(setPageContents(response));
				}
				else{
					dispatch(set404PageContents(response));
				}
		})
	}
}




export const FETCH_CATEGORY = "fetch_category";
function setCategoryContents(response){
	return {
		type: FETCH_CATEGORY,
		payload: response
	};
}
export const FETCH_PRODUCT = "fetch_product";
function setProductContents(response){
	return {
		type: FETCH_PRODUCT,
		payload: response
	};
}
export const FETCH_CATEGORY_LANDINGPAGE = "fetch_category_landingpage";
function setCategoryLandingPage(response){
	return {
		type: FETCH_CATEGORY_LANDINGPAGE,
		payload: response
	};
}
export const FETCH_PAGE = "fetch_page";
function setPageContents(response){
	return {
		type: FETCH_PAGE,
		payload: response
	};
}
export const FETCH_404 = "fetch_404";
function set404PageContents(response){
	return {
		type: FETCH_404,
		payload: response
	};
}

