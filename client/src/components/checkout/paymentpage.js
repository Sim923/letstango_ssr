import React, {Component} from 'react'
import { connect } from "react-redux";
import { fetchCustomerAddress } from "../../actions/customer";
import CheckoutNavigator from '../../components/checkout/CheckoutNavigator'
import PaymentContent from '../../components/checkout/paymentcontent'
import CheckoutCartMenu from '../../components/checkout/CheckoutRight'

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

class PaymentPage extends Component {

	constructor(props) {

		super (props)
	}
	componentDidMount(){

		// let userid  = localStorage.getItem('customer_id')?(localStorage.getItem('customer_id')):'';
		let userid  = localStorage.get('customer_id')?(localStorage.get('customer_id')):'';
	    if (userid) {
	        this.props.fetchCustomerAddress(userid);
	    }
	    
	}
	render(){

		const checkoutData 	= this.props.location.state
		const cartData 		= this.props.cart
		const address  		= this.props.address

		return(

			<section id="checkout-page">
				<div className="container">
				<CheckoutNavigator step= {2}/>
				<div id="cart-body" className="row ">
					<PaymentContent address = {address} checkoutData={checkoutData}/>
					{(typeof cartData.total !== 'undefined') &&
						<CheckoutCartMenu cartData = {cartData}/>
					}
				</div>
			   </div>

			<div className="clearfix"></div>
			</section>

		);
	}
}
function mapStateToProps(state) {
  return { address: state.address };
}
export default connect(mapStateToProps,{fetchCustomerAddress})(PaymentPage);
