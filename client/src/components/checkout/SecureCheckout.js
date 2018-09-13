import React, {Component} 	from 'react'
import { connect } 			from "react-redux";
import { fetchCustomerAddress } from "../../actions/customer";

import CheckoutNavigator 	from '../../components/checkout/CheckoutNavigator'
import CheckoutAddress 		from '../../components/checkout/CheckoutAddress'
import CheckoutAddressGuest from '../../components/checkout/CheckoutAddressGuest'
import CheckoutCartMenu 	from '../../components/checkout/CheckoutRight'
import CheckoutSignIn 		from '../../components/checkout/CheckoutSignIn'
import CheckoutLogin 		from '../../components/checkout/CheckoutLogin'

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

// let userid  = localStorage.getItem('customer_id')?(localStorage.getItem('customer_id')):'';
let userid  = localStorage.get('customer_id')?(localStorage.get('customer_id')):'';

class SecureCheckout extends Component {

	constructor(props) {
		super (props)

		this.state={
			isGuestCheckout:false
		}
	}
	componentDidMount(){
		
	    if (userid) {
	        this.props.fetchCustomerAddress(userid);
	    }
	}
	guestLogin = (curr) => {
        this.setState({isGuestCheckout:true})
    }
	render(){

		const cartData = this.props.cart
		const address  = this.props.address

	

		return(
			<section id="checkout-page" className="loginpage">
				<div className="container">
				<CheckoutNavigator  step= {1}/>
				{userid ? (

				<div id="cart-body" className="row ">

					<CheckoutAddress address = {address}/>
					{(typeof cartData.total !== 'undefined') &&
						<CheckoutCartMenu cartData = {cartData}/>
					}					
				</div>
				):(
					<div>


					{this.state.isGuestCheckout ? (

						<div id="cart-body" className="row logpage justify-content-center">
							<CheckoutAddressGuest address = ''/>
						</div>

						

					):(
						<CheckoutLogin onGuestLogin={this.guestLogin}/>
	
						)}
					</div>
				

				)}
				
			   </div>
				<div className="clearfix"></div>
			</section>
		);
	}
}
function mapStateToProps(state) {
  return { address: state.address };
}
export default connect(mapStateToProps,{fetchCustomerAddress})(SecureCheckout);
