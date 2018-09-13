import React , { Component } from "react";
import { connect } from "react-redux";
import { movetoCart } from "../../actions/wishlist";
import * as constants from '../../helpers/constants';
import LeftNavigation from './leftnavigation';

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

class WishList extends Component {

	constructor(porps){
        super(porps)
		
        this.continueShopping   = this.continueShopping.bind(this)
        this.moveToCart         = this.moveToCart.bind(this)
	}
	
    continueShopping( event ){

        event.preventDefault();
        window.open(constants.HOMESPAGE_URL, "_self");
        
    }
    moveToCart ( event ){
    
        event.preventDefault();
		// let userid  = localStorage.getItem('customer_id')?(localStorage.getItem('customer_id')):'';
		let userid  = localStorage.get('customer_id')?(localStorage.get('customer_id')):'';
        if(userid){
            var myJson = {"customer_id":userid,"product_id":event.target.name}
            this.props.movetoCart(myJson)
        
        }
    }

	render() {

        // let currency         = localStorage.getItem('currency')?(localStorage.getItem('currency')):'AED'; 
		// let currencySymbol   = localStorage.getItem('currencySymbol')?(localStorage.getItem('currencySymbol')):'AED'; 
		let currency         = localStorage.get('currency')?(localStorage.get('currency')):'AED'; 
        let currencySymbol   = localStorage.get('currencySymbol')?(localStorage.get('currencySymbol')):'AED'; 
        const pathName = constants.getPathName();
		
        const wishlist = this.props.whish_list
        console.log(wishlist)
		return (

			<section id="account-page">
				<div className="container">
			    	<div className="row">
			        	
			        	<LeftNavigation selection={"wishlist"}/>


			        	{wishlist ? (
			      
			            <div className="col-12 col-md-10 account-right-body">
			            	<h1>My Wishlist</h1>
			              
			              <div className="wishlist">
			                {wishlist.products.map((item,key)=>
				                <div className="row cart-list align-items-center">
				                		<div className="col-lg-1 col-3">
				                    		<img className="align-self-center mr-3 thump_img" src={item.image} alt=""/>
				                        </div>
				                        <div className="col-lg-9 col-9">
				                        	<h5 className="crop-text-2"> Finger Fidget Spinner Toy Finger Fidget Spinner Toy Finger Fidget Spinner Toy</h5>
				                            <div className="selling-price">{currencySymbol}<span>{item.price[currency][0].default}</span></div>
				                            <p className="stock">{item.is_Instock}</p>
				                            <div className="clearfix">
				                            </div>
				                        </div>
				                            
				                        <div className="col-lg-2 col-12 d-flex align-items-end flex-column pull-right ">
				                        <div className="select-quantity mb-auto p-2">
				                            <button className="btn btn-dark"name={item.objectID} onClick={this.moveToCart} >ADD TO CART</button>
				                        </div>
				                            
				                         <div className="remove-button p-2"><a name="49371"/>Remove <i className="fa fa-trash"></i>

				                         </div>
				                    </div>
				                </div>

				               )}
			                
			                
			                
			     
			                <div className="clearfix"></div>
			                </div>
			                    
			                
			                
			            <div className="clearfix"></div>
			            </div>
			            ): ( <div></div>) }
			        
			        </div>
			    </div>
			</section>

		);
	}
}
function mapStateToProps(state) {
  return { wishlist: state.wishlist };
}
export default connect(null,{movetoCart}) (WishList);
