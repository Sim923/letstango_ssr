import React, { Component } from "react";
import { connect } from "react-redux";
import CheckoutHeader from "../components/common/CheckoutHeader";
import PayMentPage from "../components/checkout/paymentpage"
import Footer from "../components/common/footer";
import { fetchCart } from "../actions/cart";

import Cookies from 'universal-cookie';

const localStorage = new Cookies();
class PayMent extends Component {

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
				<PayMentPage { ...this.props } />

			</div>
		);
	}
}
function mapStateToProps(state) {
  return { cart: state.cart };
}
export default connect(mapStateToProps,{fetchCart})(PayMent);
