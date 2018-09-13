/* eslint-disable */
import React, { Component } from "react";
import ImageLoader          from 'react-load-image';
import * as constants       from '../../../helpers/constants';
import PreLoader            from  '../../../helpers/constants';

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

// var currency   = localStorage.getItem('currency')?(localStorage.getItem('currency')):'AED'; 
var currency   = localStorage.get('currency')?(localStorage.get('currency')):'AED'; 

class RelatedProduct extends Component {


  constructor(){
    super();
  }

  render() {

    const preLoader = constants.Preloader
    const pathName  = constants.getPathName();
    const relatedProduct = this.props.relatedproduct
  	  return (


 		<div id="related-product-slider">

            {(relatedProduct!=null)&&(relatedProduct.length > 0) ? (
            <div className="row">
            	<div className="col-12 tille">
                	<h3>You Might Also Like</h3>
                </div>

                { relatedProduct.map((item, index) =>
                
                        <div className="col-md-2 col-6" key= {index}>
                            <a href={pathName+item.url}>
                                <div className="dealblock_thump">
                                        <div className="thump_img">

                                        <ImageLoader
                                            src={item.image}>
                                          <img />
                                          <div>Error!</div>
                                          <PreLoader />
                                        </ImageLoader>

                                        </div>
                                        <h1 className="crop-text-2">{item.title}</h1>
                                    {item.offer ? (
                                        <p>
                                            <span className="oldprice">{item.price[currency][0].default_original_formated}</span> 
                                            <span className="percentage">{item.offer}</span>
                                        </p>
                                    ):(
                                        <p>
                                        <span className="no-offer">&nbsp;</span>
                                        </p>
                                    )}
                                    <h2>{item.price[currency][0].default_formated}</h2>
                                </div>
                            </a>
                        </div>
  
                )}
        
                  
            </div>
          ) : ( <div></div> ) }
            
        
    <div className="clearfix"></div>
    </div>

  	)
   }
  }
export default RelatedProduct;