import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/common/header";
import MobileIconMenu from "../components/common/mobileiconmenu";
import Menu from "../components/common/menu";
import Footer from "../components/common/footer";
import AddressBook from "../components/customer/addressbook";

import { fetchCustomerAddress } from "../actions/customer";

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

class AddressBooks extends Component {

	componentDidMount () {
		// let userid  = localStorage.getItem('customer_id')?(localStorage.getItem('customer_id')):'';
		let userid  = localStorage.get('customer_id')?(localStorage.get('customer_id')):'';
	    if (userid) {
	        this.props.fetchCustomerAddress(userid);
	    }
	    else{
	    	this.props.history.push('/login');
	    }
	}
	render() {


	
		return(
			<div>
	  			<Header onSelectCurrency={this.currencyChange}/>
	          
	          		
					<AddressBook  { ...this.props }/>
			
				<Footer />
	        	<div className="clearfix"></div>
        	</div>
		);
	}
}
function mapStateToProps(state) {
  return { address: state.address };
}
export default connect(mapStateToProps,{fetchCustomerAddress})(AddressBooks);
