import React, { Component } from "react";
import { connect } from "react-redux";
import CheckoutHeader from "../components/common/CheckoutHeader";
import SuccessPage from "../components/checkout/successpage"
import Footer from "../components/common/footer";
import { fetchCart } from "../actions/cart";

import Cookies from 'universal-cookie';

const localStorage = new Cookies();
class OrderSuccess extends Component {

	componentDidMount () {
	    // let userid  = localStorage.getItem('customer_id')?(localStorage.getItem('customer_id')):'';
		// let quoteid = localStorage.getItem('quote_id')?(localStorage.getItem('quote_id')):'';
		let userid  = localStorage.get('customer_id')?(localStorage.get('customer_id')):'';
	    let quoteid = localStorage.get('quote_id')?(localStorage.get('quote_id')):'';

	    if (userid) {
	        this.props.fetchCart(userid,quoteid);
	    }
	    
	}
	render() {
		
		return(
			<div>

				<CheckoutHeader/>
				<SuccessPage { ...this.props } />

			</div>
		);
	}
}
function mapStateToProps(state) {
  return { cart: state.cart };
}
export default connect(mapStateToProps,{fetchCart})(OrderSuccess);
