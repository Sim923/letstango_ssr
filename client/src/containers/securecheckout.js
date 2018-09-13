/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import CheckoutHeader from "../components/common/CheckoutHeader";
import SecureCheckout from "../components/checkout/SecureCheckout"
import Footer from "../components/common/footer";

import CheckoutFooter 		from '../components/checkout/CheckoutFooter'

import Cookies from 'universal-cookie';

const localStorage = new Cookies();


import { fetchCart } from "../actions/cart";
class SecureCheckouts extends Component {

	componentDidMount () {
	    // let userid  = localStorage.getItem('customer_id')?(localStorage.getItem('customer_id')):'';
		// let quoteid = localStorage.getItem('quote_id')?(localStorage.getItem('quote_id')):'';
		let userid  = localStorage.get('customer_id')?(localStorage.get('customer_id')):'';
	    let quoteid = localStorage.get('quote_id')?(localStorage.get('quote_id')):'';
		this.props.fetchCart(userid,quoteid);
	}
	render() {
		
		return(
			<div>
				<CheckoutHeader/>
				<SecureCheckout { ...this.props } />
				<CheckoutFooter/>
			</div>
		);
	}
}
function mapStateToProps(state) {
  return { cart: state.cart };
}
export default connect(mapStateToProps,{fetchCart})(SecureCheckouts);
