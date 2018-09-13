import axios from "axios";
import * as constants from '../helpers/constants';
const BASE_URL = constants.BASE_URL;

const ROOT_URL = BASE_URL+"react/homepage/contents/";
//const ROOT_URL = "http://127.0.0.1:8888/tango/react/homepage/contents/";
export function fetchHomepage(pathname) {
	console.log(pathname);
return function(dispatch) {
  	var actualPathName = pathname.substring(1);
  	
	let data = JSON.stringify({
        url: pathname
    })
	return axios.post(`${ROOT_URL}`, data )
		.then(
			response => response,
			error => console.log('An error occurred.', error)
		)
		.then(response => {
			dispatch(setHomepageContents(response));
	})
	
}
};
export const FETCH_HOMEPAGE = "fetch_homepage";
function setHomepageContents(response){
	return {
		type: FETCH_HOMEPAGE,
		payload: response
	};
}

