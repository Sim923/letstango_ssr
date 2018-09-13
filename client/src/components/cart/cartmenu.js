/* eslint-disable */
import React, { Component } from "react";
import { applyCouponCode } 	from "../../actions/cart";
import { connect } 			from "react-redux";
import * as constants 		from '../../helpers/constants';
const 	freeShippingCharge 	= constants.FreeShippingCharge
const 	emiMiniumPrice 		= constants.MinimumEmi
var 	isFreeshipping		= false

let userid  = constants.USERID
let quoteid = constants.QUOTEID

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

class CartMenu extends Component {

	constructor(porps){
		super()

		this.state= {

			isCouponCodeApplied: false,
			couponCode:''
		}

		this.applayCpouponcode 	= this.applayCpouponcode.bind(this)
		this.onCouponCodeChange = this.onCouponCodeChange.bind(this)

	}
	componentWillReceiveProps(newProps){

		if((typeof newProps.coupon_code !== 'undefined') 
				&& ( newProps.coupon_code !== null) && ( newProps.coupon_code !== 'null')){
			this.setState({couponCode:newProps.coupon_code,isCouponCodeApplied:true})
		}else{
			this.setState({couponCode:'',isCouponCodeApplied:false})
		}
	}

	componentDidMount() {

	

		if((typeof this.props.coupon_code != 'undefined') 
				&& (typeof this.props.coupon_code !== null)&& (typeof this.props.coupon_code !== 'null')){
			this.setState({couponCode:this.props.coupon_code,isCouponCodeApplied:true})
		}else{
			this.setState({couponCode:'',isCouponCodeApplied:false})
		}

		
		initializeLoading();
	}

	applayCpouponcode( event ){

	
	
		 let requestParams = JSON.stringify({
            customer_id : userid,
            quote_id    : quoteid,
            couponcode 	: this.state.isCouponCodeApplied?'':this.state.couponCode

        })


		 this.props.applyCouponCode(requestParams)

	
	}
	handleSecureCheckout = () =>{

		window.open("/checkout",'_self')
	}
	onCouponCodeChange(event){
		event.preventDefault()
		
		const couponCode = event.target.value

		this.setState({couponCode})

			
	}
	 
	render(){

		// let currency         = localStorage.getItem('currency')?(localStorage.getItem('currency')):'AED'; 
		// let currencySymbol   = localStorage.getItem('currencySymbol')?(localStorage.getItem('currencySymbol')):'AED'; 
		let currency         = localStorage.get('currency')?(localStorage.get('currency')):'AED'; 
        let currencySymbol   = localStorage.get('currencySymbol')?(localStorage.get('currencySymbol')):'AED'; 
     

		const { couponCode } = this.state;
		
		const total = this.props.total

		var subTotal = total.sub_total[currency][0].default
		subTotal = (subTotal).replace(',','');
		subTotal = Math.ceil(subTotal) 


		var progreesValue = 0 ;
		if (subTotal>=freeShippingCharge) {
			progreesValue = freeShippingCharge
			isFreeshipping= true

		}else{
			progreesValue = subTotal/2
			isFreeshipping= false
		}

	

		return(
			<div className="col-lg-3 col-12 cart-right-body">
			    <div id="free-ship-rater" className="row">
					
			    	{isFreeshipping ?(

			    		<div className="tittle-block col-12">
			            <p>Congrats! you’ve earned free shipping</p>
			        </div>

			    	):(<div className="tittle-block col-12">
			            <p>Add AED {(freeShippingCharge-subTotal).toFixed(2)} for free shipping!</p>
			        </div>)}

			       

			        <div className="rate-bar col-12">
			            <div className="progress">
			                <div className="progress-bar bg-rate-bar" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="5" style={{width: (progreesValue)+'%'}}>
			                </div>
			            </div>
			            <div className="free-ship-rate">
			                <span className="pull-left">AED 0</span>
			                <span className="pull-right">AED 200</span>
			            </div>
			        </div>
			    </div>
			    <div id="invoice-wrap" className="row">
			        <div className="col-12 apply-coupon">
			            <div className="input-group mb-3 ">
			                <input  
			                	value={couponCode} 
			                	onChange={this.onCouponCodeChange} 
			                	type="text" id="name" 
			                	className="form-control" required
			                	/>

			                <label className="form-control-placeholder" htmlFor="name">{this.state.isCouponCodeApplied?"Applied Coupon Code":"Enter coupon code"}</label>
			                <button value={this.state.couponCode} onClick={this.applayCpouponcode} className="btn btn-outline-secondary" type="button" id="button-addon2">{this.state.isCouponCodeApplied?"REMOVE":"APPLY"}</button>
			            </div>
			        </div>
			        <div className="col-12 order-summary">
			            <h5>Order Summary</h5>
			            <p>Subtotal <span className="price pull-right">{total.sub_total[currency][0].default_formated}</span></p>
			            <p>Discount <span className="discount pull-right">{total.discount[currency][0].default_formated}</span></p>
			            
			            {isFreeshipping?(
			            	<p>Shipping <span className="shiping-free pull-right">Free</span></p>
			            ):( <p>Shipping <span className="shiping pull-right">{total.shipping[currency][0].default_formated}</span></p>
			            )}
			           
			            
			            <hr/>
			            <p className="grand-total"><span className="total">Total</span> <small>(Inclusive of VAT)</small> <span className="total-price pull-right">{total.grand_total[currency][0].default_formated}</span></p>
			            <p className="emi-cart">{subTotal>emiMiniumPrice ? 'EMI is available for this purchase.':''}</p>
			        </div>
			    </div>
			    <div id="secure-checkout-container" className="row buynow-container">
			        <button role="button" onClick={this.handleSecureCheckout} className="buynowbutton">
			        SECURE CHECKOUT
			        </button>
			    </div>


			    <div className="payment-option-container">
                          <ul>
                           
                             <li key="visa" className="visa">"visa</li>
                             <li key="mastercard" className="mastercard">"mastercard</li>
                             <li key="amex" className="amex">"amex</li>
                             <li key="cash" className="cash">"cash</li>
                          
                          </ul>
                          <div className="clearfix"></div>
                      </div>

			   
			</div>
			
		);
	}

}
 function	initializeLoading (){
		$(document).ready(function() {
    $('.progress-bar').waypoint(function() {
        $('.progress-bar').css({
        animation: "animate-positive 1.5s", opacity: "1" });},
        { offset: '100%' });
    });

	}
export default connect(null, { applyCouponCode})(CartMenu);
