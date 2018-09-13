/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import WishLists from "../components/customer/wishlist";
import Header from "../components/common/header";
import MobileIconMenu from "../components/common/mobileiconmenu";
import Menu from "../components/common/menu";
import Footer from "../components/common/footer";
import Category from "../components/catalog/category";
import Product from "../components/catalog/product";
import { fetchwishlist } from "../actions/wishlist";
import CartLoader from "../components/common/CartLoader"

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

class WishList extends Component {

	cunstructor(props){
		
		
        this.continueShopping   = this.continueShopping.bind(this)

	}
	componentDidMount () {

	// let userid  = localStorage.getItem('customer_id')?(localStorage.getItem('customer_id')):'';
	let userid  = localStorage.get('customer_id')?(localStorage.get('customer_id')):'';
	
    if (userid) {
        this.props.fetchwishlist(userid);
    }
    
	}
	
    continueShopping( event ){

        event.preventDefault();
        window.open(constants.HOMESPAGE_URL, "_self");
        
    }
    
	render() {

        console.log(this.props.cart)
		  console.log({...this.props.cart})
		
		
		return(
			<div>
	  			<Header onSelectCurrency={this.currencyChange}/>
	        
	          	{ this.props.wishlist!=null ? (
					<WishLists  {...this.props.wishlist }/>
				): ( <CartLoader/> ) }
				<Footer />
	        	<div className="clearfix"></div>
        	</div>

		);
	}
}
function mapStateToProps(state) {
  return { wishlist: state.wishlist };
}
export default connect(mapStateToProps,{fetchwishlist})(WishList);