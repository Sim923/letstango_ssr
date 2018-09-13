import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCart,deleteCart } from "../../actions/cart";
import * as constants from '../../helpers/constants';

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

let userid  = constants.USERID
let quoteid = constants.QUOTEID

class CartContent extends Component {

	constructor(porps){
		super(porps)

        this.removeItemFromCart = this.removeItemFromCart.bind(this)
        this.quanitySelected    = this.quanitySelected.bind(this)
        this.continueShopping   = this.continueShopping.bind(this)
       
	}

    removeItemFromCart ( event ){
    
        event.preventDefault();
        var myJson = {"customer_id":userid,"quote_id": quoteid,"objectID":event.target.name}
        this.props.deleteCart(myJson)

    }

    quanitySelected( objectId,event ){

        event.preventDefault();        
        var myJson = {"customer_id":userid,"quote_id": quoteid,"objectID":objectId,"qty":event.target.value}
        this.props.updateCart(myJson)


    }

    continueShopping( event ){

        event.preventDefault();
        window.open(constants.HOMESPAGE_URL, "_self");
        
    }

	render(){

        const cartArray = this.props.data
        const availbelQuantity = this.props
        const pathName = constants.getPathName();


        // let currency         = localStorage.getItem('currency')?(localStorage.getItem('currency')):'AED'; 
        // let currencySymbol   = localStorage.getItem('currencySymbol')?(localStorage.getItem('currencySymbol')):'AED'; 
        let currency         = localStorage.get('currency')?(localStorage.get('currency')):'AED'; 
        let currencySymbol   = localStorage.get('currencySymbol')?(localStorage.get('currencySymbol')):'AED'; 
     

        function QuanityPicker(value){

                const totalquanity = Math.floor(value.totalquanity)
                var availbelQuantity= totalquanity>5? 5:totalquanity
                var selectedQuanity = value.selectedQuanity 
               
                return (
                    <select defaultValue={selectedQuanity} className="custom-select" onChange={value.onChange}>
                            {[...Array(availbelQuantity)].map((e,key)=>
                                <option name={100} value = {key+1} key={key+1}>{key+1}</option>
                            )}
                    </select>

                    )
                }
		return(
            <div className="col-lg-9 col-12 cart-left-body">
                {cartArray ? (
                    <div >
                        <div id="tille-block" className="row align-items-center">
                            <div  className="col-12">
                                <h1 className="tittle"><span className="mobleft">My Cart</span> <span className="mobright">({cartArray.length} Items)</span></h1>
                            </div>
                        </div>
                        <div id="cart-tems-wraper">
                            {cartArray.map((item,key)=>
                                <div key={key} className="row cart-list align-items-center">
                                    <div className="col-lg-2 col-3">
                                        <img className="align-self-center mr-3 thump_img" src={item.image} alt=""/>
                                    </div>
                                    <div className="col-lg-8 col-9">
                                        <h5 className="crop-text-2">{item.name}</h5>
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

                                            <QuanityPicker 
                                                totalquanity={item.stock}
                                                selectedQuanity ={item.quantity}
                                                name = {item.objectID}  
                                        
                                                onChange={this.quanitySelected.bind(this, item.objectID)}
                                            />
                                       
                                        </div>
                                        <div className="remove-button p-2">
                                            <a  name={item.objectID} onClick={this.removeItemFromCart}><i className="fa fa-trash"></i> Remove</a>
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

export  default connect(null, { updateCart,deleteCart})(CartContent);
