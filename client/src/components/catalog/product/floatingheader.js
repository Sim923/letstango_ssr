import React, { Component } from "react";
import { userService } from '../../../helpers';
import { ToastContainer, toast } from 'react-toastify';
import * as constants from '../../../helpers/constants';

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

class FloatingHeader extends Component {

  constructor(props){
    super();

  this.addToCart = this.addToCart.bind(this);
 
  }

  addToCart(event){
      event.preventDefault();

      // let userid = localStorage.getItem('customer_id')?(localStorage.getItem('customer_id')):'';
      // let quoteid = localStorage.getItem('quote_id')?(localStorage.getItem('quote_id')):'';
      let userid = localStorage.get('customer_id')?(localStorage.get('customer_id')):'';
      let quoteid = localStorage.get('quote_id')?(localStorage.get('quote_id')):'';

        if (event.target.name=="addToCart") {
         
            const productId=  this.props.objectID
            const quantity = ""

            var myJson = {"product_id":productId,"qty":quantity,"options":"null"}
            userService.addItemToCart(userid,quoteid,myJson).

              then((cartResponse) => {

              if (cartResponse!=null&&cartResponse.data!=null) {

                    
                  if (cartResponse.data.status==1) {
    
                    window.open("/cart", "_self");

                    let quote_id = JSON.parse(cartResponse.data.quote_id);
                    // localStorage.setItem('quote_id', quote_id);
                    localStorage.set('quote_id', quote_id);
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


  render() {


    const review        = this.props.review? JSON.parse(this.props.review):''
    // let currency        = localStorage.getItem('currency')?(localStorage.getItem('currency')):'AED'; 
    // let currencySymbol  = localStorage.getItem('currencySymbol')?(localStorage.getItem('currencySymbol')):'AED'; 
    let currency        = localStorage.get('currency')?(localStorage.get('currency')):'AED'; 
    let currencySymbol  = localStorage.get('currencySymbol')?(localStorage.get('currencySymbol')):'AED'; 
    const pathName      = constants.getPathName();

    return (

        <nav id="floater">   

          <ToastContainer hideProgressBar={true} autoClose={2000} closeButton={false} />

            <div className="floater">
              <div className="container">
                 <div className="row align-items-center">
                  <div className="col-md-8 d-none d-sm-block">
                    <div className="floatcart-info-block">
                        <div className="media">
                            <img className="align-self-center mr-3" src={this.props.main_image} 
                            alt=""/>
                            <div className="media-body">
                              <h5 className="crop-text-1">{this.props.name}</h5>
                               
                               { review ? (

                                <div className="rating-wraper">

                                  { review.score !=null && 

                                    <div>
                                      <span className="rate-percentage">{(review.score/2).toFixed(1)}</span>
                                  
                                        {[...Array(Math.floor(review.score/2))].map((key,index)=>

                                                  <span key={index} className="fa fa-star checked"></span>
                                        )}

                                        {  (5-(review.score/2))%1!==0 ? (
                                            <span className="fa fa-star-half-o checked"></span>
                                        ):(<span className="fa fa-star"></span>)}
                                     
                                        <span>
                                          {[...Array(5-(Math.ceil(review.score/2)))].map((key,index)=>
                                          <span key={index} className="fa fa-star"></span>
                                          )}
                                        </span>
                              
                                        <span className="rate-number">{review.pro_review_count+review.user_review_count} reviews</span>

                                      
                                    </div> 

                                  }

                                </div>

                                
                                ): ( <div></div> ) }

                        </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
                
                
                <div className="col-md-2 col-12 text-right">
					<div className="selling-price">
                          {currencySymbol} <span>{this.props.price[currency][0].default}</span>
                      </div>
				 </div>
				<div className="col-md-2 col-12 ">
                  <div className="buynow-container">
                      <button name="addToCart" role="button" className="buynowbutton" onClick={this.addToCart}>
                          Add to cart
                      </button>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        <div className="clearfix"></div>
      </nav>   

    );
  }
}
export default FloatingHeader;  
   