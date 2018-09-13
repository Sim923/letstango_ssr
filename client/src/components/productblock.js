import React, { Component } from "react";
class ProductBlock extends Component {
  render() {
    return (
      <section id="home-dealblock">
		<div class="container">
	    	<div  class="row ">
	        	<div id="home-head">
	            	<h1><span>Deal Zone</span> 
	            	<a href="#" class="pull-right viewall_home">VIEW ALL <i class="fa fa-angle-right"></i></a></h1>
	            </div>
	        	<div id="dealblock_home" class="col-md-6 dealblock countdown-wrapper">
	            	<div class="img-container ">
	                    <img src="images/deal_image.jpg" alt="" />
	                </div>
	                <div class="card ">
	                    <h2 class="align-middle">Dont Miss Out! <br /> Ends in</h2>
	                    <div class="card-block">
	    	                <div id="countdown">
	            	            <div class="well">
	                        	    <span id="hour" class="timer "></span>
	                                <span class="timer ">:</span>
	                        	    <span id="min" class="timer "></span>
	                                <span class="timer ">:</span>
	                        	    <span id="sec" class="timer "></span>
	                        	</div>
	                    	</div>
	                    </div>
	                </div>
	            </div>
	            
	            
	            <div class="col-md-2 col-6">
	            	<div class="dealblock_thump">
	                    <img src="images/deal-thump.jpg" alt="" />
	                    <h1>LG 86-Inch SUHD Smart TV 86SJ957V Black</h1>
	                    <p>
	                    	<span class="oldprice">AED 23457</span> 
	                        <span class="percentage">20% OFF</span>
	                    </p>
	                    <h2>AED 79000</h2>
	                </div>
	            </div>
	            
	            <div class="col-md-2 col-6">
	            	<div class="dealblock_thump">
	                    <img src="images/deal-thump.jpg" alt="" />
	                    <h1>LG 86-Inch SUHD Smart TV 86SJ957V Black</h1>
	                    <p>
	                    	<span class="oldprice">AED 23457</span> 
	                        <span class="percentage">20% OFF</span>
	                    </p>
	                    <h2>AED 79000</h2>
	                </div>
	            </div>
	            
	            <div class="col-md-2 col-6">
	            	<div class="dealblock_thump">
	                    <img src="images/deal-thump.jpg" alt="" />
	                    <h1>LG 86-Inch SUHD Smart TV 86SJ957V Black</h1>
	                    <p>
	                    	<span class="oldprice">AED 23457</span> 
	                        <span class="percentage">20% OFF</span>
	                    </p>
	                    <h2>AED 79000</h2>
	                </div>
	            </div>
	        </div>
	    </div>
	<div class="clearfix"></div>
	</section>
    );
  }
}
export default ProductBlock;