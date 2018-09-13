/* eslint-disable */
import React, {Component} from 'react'
import * as constants from '../../helpers/constants';
const freeShippingCharge    = constants.FreeShippingCharge
const emiMiniumPrice        = constants.MinimumEmi
var isFreeshipping          = false

import Cookies from 'universal-cookie';

const localStorage = new Cookies();
class CheckoutCartMenu extends Component {

	constructor(props) {
		super (props)
	}
	componentDidMount(){


	}
	render(){

        // let currency         = localStorage.getItem('currency')?(localStorage.getItem('currency')):'AED'; 
        // let currencySymbol   = localStorage.getItem('currencySymbol')?(localStorage.getItem('currencySymbol')):'AED'; 
        let currency         = localStorage.get('currency')?(localStorage.get('currency')):'AED'; 
        let currencySymbol   = localStorage.get('currencySymbol')?(localStorage.get('currencySymbol')):'AED'; 
     

        const cart = this.props.cartData

        const total = cart.total
     
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
				<div  className="col-lg-3 col-12 cart-right-body">
        			
                    <div className="row justify-content-center">

                	<div className="col-12 col-md-8 tittle-block text-center">
                    	<h3 className="primary ">

                        	Your Cart
                        </h3>
                    </div>
                 </div>
               
               <div id="invoice-wrap" className="checkout-cart">     
               
               
              
             <div className="row order-summary">
                   <div className="col-12">     
               		<h5>Items</h5>
                   </div>
             </div>


              {cart.data ?(

                <div>

                {cart.data.map((item,key)=>


                     <div key={key} className="row cart-list align-items-center">
                        <div className="col-lg-2 col-3">
                             <img className="align-self-center mr-3 thump_img" src={item.image} alt=""/>
                        </div>
                        
                        <div className="col-lg-10 col-9">
                            <h5 className="crop-text-2">{item.name}</h5>
                            <div className="selling-price">
                            {currencySymbol} <span>{item.price[currency][0].default}</span>
                            </div>
                        <div className="clearfix"></div>    
                        </div>
                        
                </div>  


                )}

                </div>
                  

                ):(<div></div>)}


                    <div  className="row">
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
                  
                  <div className="clearfix"></div>
                  </div>
                  
                    
        </div>
			



		);
	}
}

export default (CheckoutCartMenu);
