import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/common/header";
import MobileIconMenu from "../components/common/mobileiconmenu";
import Menu from "../components/common/menu";
import Footer from "../components/common/footer";
import Orders from "../components/customer/orders";

import { fetchorders } from "../actions/customer";

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

class OrdersPage extends Component {

	componentDidMount () {
	    let userid  = localStorage.get('customer_id')?(localStorage.get('customer_id')):'';
	    if (userid) {
	        this.props.fetchorders(userid);
	    }
	    else{
	    	this.props.history.push('/login');
	    }
	}
	render() {

		
		return(
			<div>
	  			<Header onSelectCurrency={this.currencyChange}/>
	         
	          	{ this.props.orders != null ? (
					<Orders  { ...this.props.orders }/>
				): ( <span></span> ) }
				<Footer />
	        	<div className="clearfix"></div>
        	</div>
		);
	}
}
function mapStateToProps(state) {
  return { orders: state.orders };
}
export default connect(mapStateToProps,{fetchorders})(OrdersPage);