import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/common/header";
import MobileIconMenu from "../components/common/mobileiconmenu";
import Menu from "../components/common/menu";
import Footer from "../components/common/footer";
import Loyalty from "../components/customer/loyalty";

import { fetchcustomerloyalty } from "../actions/customer";

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

class LoyaltyPage extends Component {

	componentDidMount () {
		// let userid  = localStorage.getItem('customer_id')?(localStorage.getItem('customer_id')):'';
		let userid  = localStorage.get('customer_id')?(localStorage.get('customer_id')):'';
	    if (userid) {
	        this.props.fetchcustomerloyalty(userid);
	    }
	    else{
	    	this.props.history.push('/login');
	    }
	}
	render() {
	
		return(
			<div>
	  			<Header onSelectCurrency={this.currencyChange}/>
	          	
	          	{ this.props.loyalty != null ? (
					<Loyalty  { ...this.props }/>
				): ( <span></span> ) }
				<Footer />
	        	<div className="clearfix"></div>
        	</div>
		);
	}
}
function mapStateToProps(state) {
  return { loyalty: state.loyalty };
}
export default connect(mapStateToProps,{fetchcustomerloyalty})(LoyaltyPage);