/* eslint-disable */
import React, { Component } from "react";
import SimilarProducts from "./similarproducts";
import { connect } from "react-redux";
import { userService } from '../../../helpers';
import { initialization } from '../../../helpers';
import { getOptionMetrixProduct } from '../../../actions/catalog';
import { ToastContainer, toast } from 'react-toastify';
import { updateState } from '../../../helpers/appconstants';
import * as constants from '../../../helpers/constants';

import Helmet from 'react-helmet'

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

class ProductContents extends Component {

  constructor(props){
     super(props);

    this.state = {value: 'coconut',
                  notifyEmail : '',
                  similarproducts:[]
                  
                  };
    
    this.onNavigationClick  = this.onNavigationClick.bind(this);
    this.addToCart          = this.addToCart.bind(this);
    this.addToWishList      = this.addToWishList.bind(this);
    this.optionMetrixClick  = this.optionMetrixClick.bind(this);
  
  }


  componentDidMount() {
  initializeLoading();
  initializeTooltip();
  initialization.fbInitialize();
  optionMetrix(); 


    
      userService.getSimilarProducts(this.props.objectID).
      then((cartResponse) => {
              if (cartResponse!=null&&cartResponse.data!=null) {
                  if (cartResponse) {
                    if({similarproducts:cartResponse.data})
                    this.setState({similarproducts:Object.values(cartResponse.data)})
                  }else{
                  }
                }
            })
            .catch(err => console.log("Axios err: ", err))

  }

  handleNotifyMe = (event , productId) => {

    if(this.state.notifyEmail){
      userService.addToNotifyMe(productId,this.state.notifyEmail).
      then((Response) => {

              if (Response!=null) {

              }
            })
            .catch(err => console.log("Axios err: ", err))
     
    }
  }
  
  handleNotifyEmailChange = (event) => {
    const notifyEmail = event.target.value
    this.setState({notifyEmail})
  }

  handleFbSharing = (url) => {
    FB.ui({
      display: 'popup',
      method: 'share',
      href: url,
    }, function(response){});

  }
  
  onNavigationClick(event){
    showSimilarProducts()
  }

  addToWishList (event) {


    if (event.target.name=="addToWishList") {
         
            const productId=  this.props.objectID
            
            userService.addItemToWishList(constants.USERID,productId).

              then((cartResponse) => {

              if (cartResponse!=null&&cartResponse.data!=null) {
                  if (cartResponse.data.status==1) {
                  
                  }else{

                  toast.error(cartResponse.data.message, {
                    position: toast.POSITION.TOP_CENTER
                  });

                  }
               
              }
            })
            .catch(err => console.log("Axios err: ", err))
      }



  }

    addToCart(event){
      event.preventDefault();

    
        if (event.target.name=="addToCart") {
         
            const productId=  this.props.objectID
            const quantity = "1"

            var myJson = {"product_id":productId,"qty":quantity,"options":"null"}
            
            userService.addItemToCart(constants.USERID,constants.QUOTEID,myJson).

              then((cartResponse) => {

              if (cartResponse!=null&&cartResponse.data!=null) {

                    
                  if (cartResponse.data.status==1) {
                    
                    let quote_id = JSON.parse(cartResponse.data.quote_id);
                    // localStorage.setItem('quote_id', quote_id);
                    localStorage.set('quote_id', quote_id);
      
                    window.open(constants.CARTPAGE_URL, "_self");

                  }else{

                  toast.error(cartResponse.data.message, {
                    position: toast.POSITION.TOP_CENTER
                  });

                  }
               
              }
            })
            .catch(err => console.log("Axios err: ", err))
      }
    }

    optionMetrixClick (event){

      const id = event.target.id
      const value= event.target.attributes.getNamedItem('value').value;
      
      if (value!=null){
        this.props.getOptionMetrixProduct(value)

       }
    }

    onclickSample(value){

    
    }

  render() {

      // let currency         = localStorage.getItem('currency')?(localStorage.getItem('currency')):'AED'; 
      // let currencySymbol   = localStorage.getItem('currencySymbol')?(localStorage.getItem('currencySymbol')):'AED'; 
      let currency         = localStorage.get('currency')?(localStorage.get('currency')):'AED'; 
      let currencySymbol   = localStorage.get('currencySymbol')?(localStorage.get('currencySymbol')):'AED'; 
     
      
      var subTotal = this.props.price[currency][0].default
          subTotal = (subTotal).replace(',','');
          subTotal = Math.ceil(subTotal)

      function LoyaltyPrograms(props){

        if (props!=null && props.loyalty!=null) {
          const loyaltyPrograms =   props.loyalty.loyalty

        if (loyaltyPrograms!=null) {
            
             return (

              <div className="rewards-detail-block">
                         <h5>Shop & get Rewards</h5>
                             <div className="bs-example__row">
                              {"Airmile" in loyaltyPrograms  &&
                                <button className="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" data-custom-class="tooltip-primary" title="Shop & earn 20 airmiles by adding loyalty at checkout">
                                  Earn {loyaltyPrograms.Airmile} <img src="/images/loyalty1.png"/>
                                </button>
                              }
                                
                              {"JpMiles" in loyaltyPrograms &&
                                <button className="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" data-custom-class="tooltip-success" title="Shop & earn 20 airmiles by adding loyalty at checkout">
                                  Earn {loyaltyPrograms.JpMiles} <img src="/images/loyalty2.png"/>
                                </button>
                              }
                              {"AirRewards" in loyaltyPrograms &&
                                <button className="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" data-custom-class="tooltip-info" title="Shop & earn 20 airmiles by adding loyalty at checkout">
                                  Earn {loyaltyPrograms.AirRewards} <img src="/images/loyalty3.png"/>
                                </button>
                              }
                              </div>
                    <div className="clearfix"></div>
                    </div>
                
                );

              }
            }
          }
          const optionMetrix = this.props.option_matrix
          var optionMetrixArray = [];
          var optionmetricsKeys = []
          
          for (var key in optionMetrix) {
            if (optionMetrix.hasOwnProperty(key)) {
              var val = optionMetrix[key];
          
              optionMetrixArray.push(val);
              optionmetricsKeys.push(key);
              }
          }

        var description   = "\n"+this.props.short_description
        var valueOfString = constants.strip_html_tags(description)
        valueOfString     = valueOfString.trim();
        valueOfString     = "\n"+valueOfString
        
        var formatted     = valueOfString.replace(/(\r\n|\n|\r)/gm, "<li />");


        const review      = this.props.review? JSON.parse(this.props.review):''
        const value       = this.props.price.default
        

      


    return (

        <div className="col-md-8 col-12">
          <Helmet>
            <meta content={`Letstango - ${this.props.name}`} property="og:title" />
            <meta content={`${this.props.name}`} property="og:description" />
            <meta content="website" property="og:type" />
            <meta content={`/${this.props.name}`} property="og:url" />
            <meta content="summary" name="twitter:card" />
            <meta property="og:updated_time" content={`${new Date()}`} />
            <meta content="Webflow" name="generator" />
          </Helmet>
          <div id="product-tittle-block" className="row">
              <div className="col-12">
                  <h1>{this.props.name}</h1>
                 
                  { review ? (
                  <div >
                      { review.score !=null && 
                      <div className="rating-wraper"> 

                             <div>
                                <span className="rate-percentage">{(review.score/2).toFixed(1)}</span>
                                {[...Array(Math.floor(review.score/2))].map((key,index)=>

                                                  <span key={index} className="fa fa-star checked"></span>
                                )}

                                {  (5-(review.score/2))%1!==0 && 

                                  <span className="fa fa-star-half-o checked"></span>
                                }
                               
                                
                                {[...Array(5-(Math.ceil(review.score/2)))].map((key,index)=>
                                  <span key={index} className="fa fa-star"></span>
                                )}

                                
                                <span className="rate-number">{review.pro_review_count+review.user_review_count} reviews</span>
                                </div> 

                        </div>
                      }
                  </div>
                  ): ( 
                  <div></div>
                  ) }
              </div>
          </div>
            <div className="row ">
              <div className="col-md-8 col-12">
                  <div className="product-price-block align-items-center">
                      
					  {this.props.offer &&
                      <div className="oldprice">{this.props.price[currency][0].default_original_formated}</div> 
                      }
    					  <div className="selling-price">
                              {currencySymbol} <span>{this.props.price[currency][0].default}</span>
                          </div>
                          {this.props.offer &&
                          <div className="percentage">{this.props.offer}</div>
                          }
                      </div>
    					
				
                  <div>
                  {this.props.option_matrix?(

              
                  <div className="attribute-block">

                      <form className="form-inline">
                          {optionmetricsKeys.map((item,key) => 
                          <div key={key} className="form-group mb-2 ">
                              <label>{item}</label>
                              <select   className="select">
                                  {optionMetrixArray[key].map((item,key) => 
                                    <option value = {item.value} selected={!item.clickable} key={key}>{item.label}</option>
                                  )}
                              </select>
                            <div id="event-change" onClick={this.optionMetrixClick}></div>
                          </div>
                          )}
                      </form>
                  </div>

                  ): (
                  <div></div>
                  ) }
                  </div>
				  
                  <SimilarProducts productname={this.props.name} productImage={this.props.main_image} similarproducts={this.state.similarproducts}/>
				  
                  {this.props.short_description!=null &&
                    <div className="short-description-block">
                      <h5>KEY FEATURES</h5>
                      <ul dangerouslySetInnerHTML={{__html: formatted}}></ul>
                      <div className="clearfix"></div>
                    </div>
                  }


                  <div className="delivery-detail-block">
                    <h5>DElivery</h5>
                    <p>Order in the next <span>13 hrs 37 mins </span> and receive it in <span>Dubai</span> by <span className="time">Tomorrow, Jun 7</span></p>
                    <div className="clearfix"></div>
                  </div>

                  {this.props.warranty && 
                    <div className="warranty-detail-block">
                        <h5>Warranty <span>{this.props.warranty}</span></h5>
                        <div className="clearfix"></div>
                    </div>
                  }
				  
	
                    <div className="seller-detail-block">
                       <p>
                            Sold by <a href="#">{this.props.seller_details.name}</a>
                            {(typeof this.state.similarproducts[0] !== 'undefined') && 
                            <span className="comparison"><a onClick={this.onNavigationClick} className="comparisonbutton" >{this.state.similarproducts.length} other offers</a> from {currency} {this.state.similarproducts[0].price[currency][0].default}</span> 
                            }
                        </p>
                        <div className="clearfix"></div>
                    </div>	


                <div className="share-block">
                  <div className="row">
                    <div className="col-12">
					<ToastContainer hideProgressBar={true} autoClose={2000} closeButton={false} />
                      <button role="button" className="sharebuttton" data-toggle="collapse" data-target="#share">
                      <i className="fa fa-share-alt"></i> Share
                      </button>
                      <div id="share" className="collapse  width">
                        <ul>
                          <li onClick={(event)=>this.handleFbSharing("www.google.com")}><a style={{display: "table-cell"}} target="_blank"><img src="/images/share1.png" alt=""/></a></li>
                          <li><a style={{display: "table-cell"}} href="https://twitter.com/LetsTangoME" target="_blank"> <img src="/images/share2.png" alt=""/></a></li>
                          <li><a style={{display: "table-cell"}} href="https://www.instagram.com/letstangome/" target="_blank"><img src="/images/share3.png" alt=""/></a></li>
                        </ul>
                      </div>
                      
                        <button role="button" name="addToWishList" onClick={this.addToWishList} className="blog-read-buttton">
                      <i className="fa fa-heart"></i> Add to wishlist
                     </button>
                      
                    </div>
                  </div>
                  <div className="clearfix"></div>
                </div>		            
				  
				         
                 {/* { this.props.loyalty !=null &&
                    <LoyaltyPrograms loyalty={this.props}/>
                  } */}
                 
              </div>
              <div className="col-md-4 col-12">
                  <div className="cartbutton-block">
                      {(this.props.is_in_stock)== "true" ?(
                        <div id="productInstock">
                          
                          <div className="cartbutton-container">
                              <span className="stock-status">In Stock</span>
                              <button name="addToCart" role="button" className="cartbutton" onClick={this.addToCart}>
                              Add to cart
                              </button>
                              <div className="clearfix"></div>
                          </div>
                          
                        </div>
                      ):(
                      <div id="productInstock">
                          
                          <div className="form-group product-notification">
                              <span className="stock-status-nul">Sold Out</span>
                              <input 
                                type="email" 
                                onChange = {(event)=>this.handleNotifyEmailChange(event)}
                                className="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp" 
                                placeholder="Enter email to get update"/>

                              <div className="clearfix"></div>
                          </div>
                  
                      <div className="product-notification-container">
    							       <button 
    							          id="info"
                            role="button" 
                            onClick = {(event)=>this.handleNotifyMe(event,this.props.objectID)}
                            className="product-notification-button">
                            Notify me
                        </button>
                        
    							     <small id="emailHelp" className="form-text text-muted">Submilt mail ID to get notify once the product back in stock.</small>
                        <div className="clearfix"></div>
                        </div>
                      </div>
                    )}
                      <div className="payment-option-container">
                          <ul>
                            {this.props.payment_methods.map((item, index) => 
                                (<li key={index} className={item}>{item}</li>)
                            )}
                          </ul>
                          <div className="clearfix"></div>
                      </div>
                      <div className="clearfix"></div>
                  </div>
				  
				  
				  
				  
				   			        { /* <div className="static-product-info-block">
                            <div className="media">
                               <img className="align-self-center mr-3" src="/images/product-key1.png" alt=""/>
                                  <div className="media-body">
                                    <p>Recive it in <strong>Dubai by</strong> <span>Tommorow june 7</span></p>
                               </div>
                            </div>
                            <div className="clearfix"></div>
                           </div>
                           
                           
                           <div className="static-product-info-block">
                            <div className="media">
                               <img className="align-self-center mr-3" src="/images/product-key2.png" alt=""/>
                                  <div className="media-body">
                                    <p>Use code <strong>EID20</strong> Get an <strong>extra AED 20 OFF</strong></p>
                               </div>
                            </div>
                            <div className="clearfix"></div>
                           </div>
                           
                           
                           <div className="static-product-info-block">
                            <div className="media">
                               <img className="align-self-center mr-3" src="/images/product-key3.png" alt=""/>
                                  <div className="media-body">
                                    <p> <strong>{this.props.warranty}</strong> available</p>
                               </div>
                            </div>
                            <div className="clearfix"></div>
                           </div>
						   
						              {this.props.emi_rate > 0 &&
                           <div className="static-product-info-block">
                            <div className="media">
                               <img className="align-self-center mr-3" src="/images/product-key4.png" alt=""/>
                                  <div className="media-body">
                                    <p>From <strong>AED {this.props.emi_rate}</strong> a month </p>
                               </div>
                            </div>
                            <div className="clearfix"></div>
                 			    </div>
				  
				                  } */ }

                          <div className="static-product-info-block">
                            <div className="media">
                               <img className="align-self-center mr-3" src="images/delivery-info.jpg" alt=""/>
                                  <div className="media-body">
                                    <h5 className="mt-0">Free delivery</h5>
                                    <p>For AED 200 ad above (Excl Vat)</p>
                               </div>
                            </div>
                            <div className="clearfix"></div>
                           </div>
                           
                           
                           <div className="static-product-info-block">
                            <div className="media">
                               <img className="align-self-center mr-3" src="images/pay-info.jpg" alt=""/>
                                  <div className="media-body">
                                    <h5 className="mt-0">Pay your way</h5>
                                    <p>Cash On Delivery,Credit Card & more</p>
                               </div>
                            </div>
                            <div className="clearfix"></div>
                           </div>
                           
                           
                           <div className="static-product-info-block">
                            <div className="media">
                               <img className="align-self-center mr-3" src="images/genuine-info.jpg" alt=""/>
                                  <div className="media-body">
                                    <h5 className="mt-0">100% Genuine</h5>
                                    <p>Vendor sourced & brand new</p>
                               </div>
                            </div>
                            <div className="clearfix"></div>
                           </div>
                            





              </div>
          </div>
         
      </div>
    	);
    }
  }


  function optionMetrix(){
    
    (function ( $ ) {
  var elActive = '';
    $.fn.selectCF = function( options ) {
 
   
        var settings = $.extend({
            color: "#FFF", // color
            backgroundColor: "#50C9AD", // background
      change: function( ){ }, // event change
        }, options );
 
        return this.each(function(){
      
      var selectParent = $(this);
       var list = [],
        html = '';
        
   
      var width = $(selectParent).width();
      var title = null;
      var s = null;
      
      $(selectParent).hide();
      if( $(selectParent).children('option').length == 0 ){ return; }
      $(selectParent).children('option').each(function(){
        if( $(this).is(':selected') ){  s = 1;  title = $(this).text(); }else{  s = 0; }
        list.push({ 
          value: $(this).attr('value'),
          text: $(this).text(),
          selected: s,
        })
      })
      
      // style
      var style = " background: "+settings.backgroundColor+"; color: "+settings.color+" ";


      
      html += "<ul class='selectCF'>";
      html +=   "<li>";
      
      html +=     "<span class='titleCF' style='"+style+"; width:"+width+"px'>"+title+"</span>";
      html +=     "<span class='arrowCF ion-chevron-down' style='"+style+"'></span>";
      html +=     "<span class='searchCF' style='"+style+"; width:"+width+"px'><input style='color:"+settings.color+"' /></span>";
      html +=     "<ul>";
      $.each(list, function(k, v){ s = (v.selected == 1)? "selected":"";
      html +=       "<li value="+v.value+" class='"+s+"'>"+v.text+"</li>";})    
      html +=     "</ul>";
      html +=   "</li>";
      html += "</ul>";
      $(selectParent).after(html);
      var customSelect = $(this).next('ul.selectCF'); // add Html
      var seachEl = $(this).next('ul.selectCF').children('li').children('.searchCF');
      var seachElOption = $(this).next('ul.selectCF').children('li').children('ul').children('li');
      var seachElInput = $(this).next('ul.selectCF').children('li').children('.searchCF').children('input');
      
      // handle active select
      $(customSelect).unbind('click').bind('click',function(e){
        e.stopPropagation();
        if($(this).hasClass('onCF')){ 
          elActive = ''; 
          $(this).removeClass('onCF');
          $(this).removeClass('searchActive'); $(seachElInput).val(''); 
          $(seachElOption).show();
        }else{
          if(elActive != ''){ 
            $(elActive).removeClass('onCF'); 
            $(elActive).removeClass('searchActive'); $(seachElInput).val('');
            $(seachElOption).show();
          }
          elActive = $(this);
          $(this).addClass('onCF');
          $(seachEl).children('input').focus();
        }
      })
      
      // handle choose option
      var optionSelect = $(customSelect).children('li').children('ul').children('li');
      $(optionSelect).bind('click', function(e){
        var value = $(this).attr('value');

        if( $(this).hasClass('selected') ){

       
        
        }else{
          $(optionSelect).removeClass('selected');
          $(this).addClass('selected');
          $(customSelect).children('li').children('.titleCF').html($(this).html());
          $(selectParent).val(value);
          settings.change.call(selectParent); 


        }
      })

      $(seachEl).children('input').bind('keyup', function(e){
        var value = $(this).val();
        if( value ){
          $(customSelect).addClass('searchActive');
          $(seachElOption).each(function(){
            if( $(this).text().search(new RegExp(value, "i")) < 0 ) {
              // not item
              $(this).fadeOut();
            }else{
              // have item
              $(this).fadeIn();
            }
          })
        }else{
          $(customSelect).removeClass('searchActive');
          $(seachElOption).fadeIn();
        }
      })
      
    });
    };

}( jQuery ));

$(function(){
  var event_change = $('#event-change');
  $( ".select" ).selectCF({
    change: function(){


      var value = $(this).val();
      var text = $(this).children('option:selected').html();
     
        var preview = document.getElementById("event-change");

      preview.setAttribute("value",value);
      preview.setAttribute("name",text);
      preview.click();
  
    }
  });
  $( ".test" ).selectCF({
    color: "#FFF",
    backgroundColor: "#663052",
  });
})

}

 function initializeLoading (){
    $(document).ready(function() {
    $('.progress-bar').waypoint(function() {
        $('.progress-bar').css({
        animation: "animate-positive 1.5s", opacity: "1" });},
        { offset: '100%' });
    });

  }
  
 function initializeTooltip (){  
	  $(document).ready(function(){
	 $('.btn-secondary').tooltip();
	 $('.btn-custom').tooltip({
	   customClass: 'tooltip-custom'
	 });
	 $('.btn-custom-alt').tooltip({
	   customClass: 'tooltip-custom-alt'
	 });
	});

 }




export default connect(null, { getOptionMetrixProduct } )(ProductContents);




