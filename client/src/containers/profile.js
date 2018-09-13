import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/common/header";
import MobileIconMenu from "../components/common/mobileiconmenu";
import Menu from "../components/common/menu";
import Footer from "../components/common/footer";
import Profile from "../components/customer/profile";

import { fetchCustomerProfile } from "../actions/customer";

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

class Profiles extends Component {

	componentDidMount () {
		// let userid  = localStorage.getItem('customer_id')?(localStorage.getItem('customer_id')):'';
		let userid  = localStorage.get('customer_id')?(localStorage.get('customer_id')):'';
	    if (userid) {
	        this.props.fetchCustomerProfile(userid);
	    }
	    else{
	    	this.props.history.push('/login');
	    }
	   
	}
	render() {



		return(
			<div>
	  			<Header onSelectCurrency={this.currencyChange}/>
	    
	          	
				<Profile  { ...this.props.profile }/>
				
				<Footer />
	        	<div className="clearfix"></div>
        	</div>
		);
	}
}
function mapStateToProps(state) {
  return { profile: state.profile };
}
export default connect(mapStateToProps,{fetchCustomerProfile})(Profiles);
