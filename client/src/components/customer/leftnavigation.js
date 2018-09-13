import React, { Component } from "react";
import * as constants from '../../helpers/constants';

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

var username = 'Hello, '

class LeftNavigation extends Component {
	render() {

			const pathName = constants.getPathName();
			// let user  = localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):'';
			let user  = localStorage.get('user')?localStorage.get('user'):'';
			if(user){

				username = user.firstname +" "+ user.lastname
				console.log(user.firstname)

			}

		return (
			<div className="col-12 col-sm-2 left-menu">
	                <h2 className="tittle">
	                   	{username}
	                </h2>
	                <ul>
	                	<a href={pathName + constants.CUSTOMER_ORDERS} 	className= {this.props.selection=="orders"?"active":''}   ><li><i className="fa fa-history"></i> My Orders</li></a>
	                    <a href={pathName + constants.CUSTOMER_WISHLIST} className= {this.props.selection=="wishlist"?"active":''}><li><i className="fa fa-heart-o"></i> My Wishlist</li></a>	     
	                    <a href={pathName + constants.CUSTOMER_ADDRESS} className= {this.props.selection=="addressbook"?"active":''}><li><i className="fa fa-address-book-o"></i> Address Boook</li></a>
	                    <a href={pathName + constants.CUSTOMER_LOYALTY} className= {this.props.selection=="loyalty"?"active":''}><li><i className="fa fa-money"></i> Loyalty Programme</li></a>
	                    <a href={pathName + constants.CUSTOMER_PROFILE} className= {this.props.selection=="profile"?"active":''}><li><i className="fa fa-user"></i> My Profile</li></a>
	                </ul>
	            <div className="clearfix"></div>
            </div>
		)
	}
}
 export default LeftNavigation;
