/* eslint-disable */
import React, { Component } from "react";

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

class ProductNavigation extends Component {

  constructor(props){
    	
    	super(props);
    	this.onNavigationClick = this.onNavigationClick.bind(this)

  }
  onNavigationClick(event){
  	hideSimilarProducts()
  }
  viewoffer(url){
  	window.open("/"+url, "_self");
  }
	render() {

		const similarProductArray = this.props.similarproducts
		const productname 	= this.props.productname
		const productImage	 = this.props.productImage

		// let currency   			= localStorage.getItem('currency')?(localStorage.getItem('currency')):'AED'; 
		  // let currencySymbol   	= localStorage.getItem('currencySymbol')?(localStorage.getItem('currencySymbol')):'AED'; 
		  let currency   			= localStorage.get('currency')?(localStorage.get('currency')):'AED'; 
      	let currencySymbol   	= localStorage.get('currencySymbol')?(localStorage.get('currencySymbol')):'AED'; 

	    return (

	    	<div>
			<div id="mySidenav_new" className="sidenav">
	            <a href="javascript:void(0)" id="closebutton" className="closebtn" onClick={this.onNavigationClick}>&times;</a>
	                <h4>{similarProductArray.length} Offers Available</h4>

	                    <div className="compairproduct-main">
	                        <div className="media">
	                            <img className="align-self-center mr-3" src={productImage} alt=""/>
	                             <div className="media-body align-self-center mr-3">
	                                <h5 className="crop-text-2">{productname}</h5>
	                        	</div>
	                    	</div>
	                    <div className="clearfix"></div>
	                    </div>
	                 
	                    <div >
	                        
	                        {similarProductArray.map((item,index)=>



	                        	<div className="compair-product-list" key={index}>
	 
	                        	
	                        		 <div className="row">
	                           			<div className="col-12">
	                                		<div className="product-price-block align-items-center">
	                                			
	                                     		<div className="selling-price">
	                                           		AED <span>{item.price[currency][0].default}</span>
	                                    		</div>

	                                		</div>
	                            		</div>
	                        		</div>
	                                   
	                            	<div className="row">
	                                	<div className="col-12">
	                                    	<div className="delivery-detail-block ">
	                                        	<p>Order now and receive it in <span>Dubai</span> by <span className="time">Tomorrow, Jun 7</span></p>
	                                           	<div className="clearfix"></div>
	                                   		</div>
	                               		 </div>
	                            	</div>
	                                   
	                                   
	                            	<div className="row">
	                                	<div className="col-6">
	                                    	<span className="tittle">Sold by</span>
	                                        <span className="seller-name"><a href="#">{item.seller}</a></span>
	                                 	</div>
	                                        
	                                    <div className="col-6">
	                                        <span className="tittle">Warranty</span>
	                                        <span className="seller-name">1 Year warranty</span>
	                                    </div>
	                                </div>
	                                   
	                                   
	                                <div className="row align-items-center button-block">
	                                    <div className="col-12 ">
	                                        <button type="button" className="btn btn-outline-dark btn-sm" onClick={this.viewoffer.bind(this,item.url)}>View Offer</button>
	                                        <button type="button" className="btn cartbutton btn-sm">Add to cart</button>
	                                  	</div>
	                            	</div>
	                        		<div className="clearfix"></div>
	                
	                        	</div>

	                        )}
	                       
	                    </div>
	                        
	                   <div className="clearfix"></div> 
	           
	   
 			</div>
 			     <div onClick={this.onNavigationClick} id="mySidenav-bg"></div>
 		</div>
	    )
  }
}
export default ProductNavigation; 


// {item.offer ? (
// 	                                    		<div className="slashed-price">
// 	                                        		<span className="oldprice">{item.price[currency][0].default_original_formated}</span>
// 	                                        		<span className="percentage">{item.offer}</span>
// 	                                    		</div>
// 	                                    		):( <span></span> )}