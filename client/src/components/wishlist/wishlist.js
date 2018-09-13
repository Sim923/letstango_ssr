import React , { Component } from "react";
import { connect } from "react-redux";
import { movetoCart } from "../../actions/wishlist";
import * as constants from '../../helpers/constants';

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

			<div className="col-lg-9 col-12 cart-left-body">
                {wishlist ? (
                    <div >
                        <div id="tille-block" className="row align-items-center">
                            <div  className="col-12">
                                <h1 className="tittle"><span className="mobleft">My Wishlist</span> <span className="mobright">({wishlist.length} Items)</span></h1>
                            </div>
                        </div>
                        <div id="cart-tems-wraper">
                            {wishlist.products.map((item,key)=>
                                <div key={key} className="row cart-list align-items-center">
                                    <div className="col-lg-2 col-3">
                                        <img className="align-self-center mr-3 thump_img" src={item.image} alt=""/>
                                    </div>
                                    <div className="col-lg-8 col-9">
                                        <h5 className="crop-text-2">{item.title}</h5>
                                        <div className="selling-price">
                                            {currencySymbol} <span>{item.price[currency][0].default}</span>
                                        </div>
                                        <div className="seller-detail-block">
                                            <p>
                                                Sold by <img src="images/seller.jpg" alt=""/> <a href={pathName}>Letstango</a>
                                            </p>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="col-lg-2 col-12 d-flex align-items-end flex-column ">
                                        <div className="select-quantity mb-auto p-2">

                                        <div className="remove-button p-2">
                                            <a  name={item.objectID} onClick={this.moveToCart}><i className="fa fa-trash"></i> Move to</a>
                                        </div>
                                       
                                        </div>
                                    
                                    </div>
                                </div>
                              )}
                        </div>
                        <div id="continue-shop" className="row">
                            <div id="secure-checkout-container " className="col-12 buynow-container">
                                <button type="button" className="btn btn-outline-dark btn-sm" onClick={this.continueShopping}>Continue shopping</button>
                            </div>
                        </div>
                    </div>
                  ): ( <div></div>) }
            </div>


		);
	}
}
function mapStateToProps(state) {
  return { wishlist: state.wishlist };
}
export default connect(null,{movetoCart}) (WishList);
