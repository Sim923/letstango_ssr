import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "../components/cart/cart";
import Header from "../components/common/header";
import MobileIconMenu from "../components/common/mobileiconmenu";
import Menu from "../components/common/menu";
import Footer from "../components/common/footer";
import Category from "../components/catalog/category";
import Product from "../components/catalog/product";
import { fetchCart } from "../actions/cart";
import CartLoader from "../components/common/CartLoader"

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

class CartPage extends Component {


	constructor(props){
    	super(props)
	    this.state = {
	      currency: ''
	    };

  	}

	componentDidMount() {
    		
    	// let userid 	= localStorage.getItem('customer_id')?(localStorage.getItem('customer_id')):'';
		  // let quoteid = localStorage.getItem('quote_id')?(localStorage.getItem('quote_id')):'';
		  
		let userid 	= localStorage.get('customer_id')?(localStorage.get('customer_id')):'';
      	let quoteid = localStorage.get('quote_id')?(localStorage.get('quote_id')):'';

   
    	this.props.fetchCart(userid,quoteid);
  
  	}

  	currencyChange = (curr) => {
        this.setState({currency:curr})
    }

	render(){


		console.log({...this.props.cart})
		
		
		return(
			<div>
	  			<Header onSelectCurrency={this.currencyChange}/>
	          	<MobileIconMenu />
	          	<Menu />
	          	{ this.props.cart!=null ? (
					<Cart  {...this.props.cart }/>
				): ( <div>
					{(this.props.status == 0 || this.props.message == "Cart is Empty") ? (

						<div className="row d-flex justify-content-center mb-3">
							<div class="d-flex justify-content-center bg-secondary mb-3">
	   							<img src="https://search.venders.co/img/animat-shopping-cart-color.gif"/>
	 							<span>EMPTY CART</span>
	 							
	 						</div>

	 					</div>
						
					): (<CartLoader></CartLoader>) }
				</div> ) }
				<Footer />
	        	<div className="clearfix"></div>
        	</div>

		);
	}

}

function mapStateToProps(state) {
  return { cart: state.cart };
}

export  default connect(mapStateToProps, { fetchCart })(CartPage);