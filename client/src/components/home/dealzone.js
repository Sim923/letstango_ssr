import React, { Component } from "react";
import * as constants from '../../helpers/constants';
import ImageLoader from 'react-load-image';
import PreLoader   from  '../../helpers/constants';
import { Link } from 'react-router-dom';

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

class DealZone extends Component {

  render() {

	  // let currency   = localStorage.getItem('currency')?(localStorage.getItem('currency')):'AED'; 
	  let currency   = localStorage.get('currency')?(localStorage.get('currency')):'AED'; 
    const pathName = constants.getPathName();

  	const products = this.props.products;  	
    return (
    <section id="home-dealblock">
    	{products ? (
		<div className="container">
	    	<div id="home-head">
	            	<h1>
		            	<span>{this.props.block.label}</span><a href={pathName+this.props.block.url} className="pull-right viewall_home">VIEW ALL<i className="fa fa-angle-right"></i></a>
	            	</h1>
	            </div>
			<div >
				
	            {this.props.block.items[0] ? (

	            <div className="row">

	        	<div id="dealblock_home" className="col-md-6 dealblock countdown-wrapper" >
		        	<a href={pathName+this.props.block.items[0].url}>
		            	<div className="img-container "> 
		                    <img src={this.props.block.items[0].image} alt="" />
		                </div>
		                <div className="card ">
		                    <h2 className="align-middle">Dont Miss out! <br/> Deal Ends in</h2>
		                    <div className="card-block">
		    	                <div id="countdown">
		            	            <div className="well">
		                        	    <span id="hour" className="timer "></span>
		                                <span className="timer ">:</span>
		                        	    <span id="min" className="timer "></span>
		                                <span className="timer ">:</span>
		                        	    <span id="sec" className="timer "></span>
		                        	</div>
		                    	</div>
		                    </div>
		                </div>
		            </a>
	            </div>
				
	            {products.items.map((item, index) => 
	            	<div key={index} className="col-md-2 col-6">
	            	<Link id="link" to={pathName+item.url}>
                                
	         
			            	<div className="dealblock_thump">
			                    <div className="thump_img">
			                    	
			                    <ImageLoader
                                	src={item.image}>
                                	<img />
                                	<div><PreLoader /></div>
                                	<PreLoader />
                            	</ImageLoader>
			                    	
			        
		                    	</div>
			                    <h1 className="crop-text-2">{item.title}</h1>
			                    {item.offer ? (
	                                <p>
	                                    <span className="oldprice">{item.price[currency].old_price_formated}</span> 
	                                    <span className="percentage">{item.offer}</span>
	                                </p>
	                                ) : (
	                                <p>
	                                    <span className="no-offer">&nbsp;</span>
	                                </p>
	                                )
	                            }
			                    <h2>{item.price[currency].default_formated}</h2>
			                </div>
	
			            </Link>
		            </div>
            	)}
            	</div>
            	 ): ( 
            	 <div className="row">
            	 {products.items.map((item, index) => 
	            	<div key={index} className="col-md-2 col-6">
	            		<a href={pathName+item.url}>
			            	<div className="dealblock_thump">
			                    <div className="thump_img">
			                    	<img src={item.image} alt={item.title}/>
		                    	</div>
			                    <h1 className="crop-text-2">{item.title}</h1>
			                    {item.offer ? (
	                                <p>
	                                    <span className="oldprice">{item.price[currency].old_price_formated}</span> 
	                                    <span className="percentage">{item.offer}</span>
	                                </p>
	                                ) : (
	                                <p>
	                                    <span className="no-offer">&nbsp;</span>
	                                </p>
	                                )
	                            }
			                    <h2>{item.price[currency].default_formated}</h2>
			                </div>
			            </a>
		            </div>
            	)}


            	 </div>
            	  ) }
				<div className="row">
            	<div id="viewall-mobile-btn" className="col-12">
               		<a href={pathName} className="pull-right viewall_home_mob">VIEW ALL <i className="fa fa-angle-right"></i></a>
               </div>
			   </div>
			    <div className="clearfix"></div>
	        </div>
	       	 
           <div className="clearfix"></div>
	    
	    </div>
	) : (<span></span>
	)}

	<div className="clearfix"></div>
	</section>
	);
  }

}
export default DealZone;