import React, { Component } from "react";
// import ReactImageMagnify from 'react-image-magnify';

import Helmet from 'react-helmet'

class ProductImages extends Component {

  constructor(){
    super();


  }
  render() {
  	
	return (
		<div className="col-md-4 col-12 text-center"  id="slider">
			{
				this.props.images.length > 0 ? (
					<Helmet>
						<meta content={this.props.images[0]} property="og:image" />
					</Helmet>
				) : null
			}
			
			{this.props.images ?(
		    	<div id="myCarousel" className="carousel slide">
		      		<div className="carousel-inner">  
               			{this.props.images.map((item, index) => 

               			<div key= {index} className= {index ? ("item carousel-item") : ("active item carousel-item")} data-slide-number={index}>
               				{/* <ReactImageMagnify {...{
							    smallImage: {
							        alt: 'Wristwatch by Ted Baker London',
							        isFluidWidth: true,
							        src: this.props.images[index]
							    },
							    largeImage: {
							        src: this.props.images[index],
							        width: 800,
							        height: 800
							    }
							}} /> */}
                    		
                    	
                        	</div>
                  
                		)}
              		
	              		<a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
			            	<span className="carousel-control-prev-icon"></span>
			            </a>
			            <a className="carousel-control-next" href="#myCarousel" data-slide="next">
			            	<span className="carousel-control-next-icon"></span>
			            </a>
		       	 	</div>

		         	{this.props.images.length>1 ? (
					<div id="thumbnail-slider">
						<div className="inner">
							<ul className="carousel-indicators list-inline ">
								{this.props.images.map((item, index) => 
		
									<li key= {index+"classname"} className= {index ? ("list-inline-item") : ("list-inline-item active")}>
										<a id={index} className="selected" data-slide-to={index} data-target="#myCarousel">
											<img className="thumb" src={item} className="img-fluid"/>
										</a>
									</li>
		
								)}	
		
							</ul>
						</div>
					</div>
		 	
		         
		        	):(<div></div>)}

		    	</div>
		    ):(<div></div>)}
		</div>
	)
  }
  
  

	  
	  
	  
	  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}
export default ProductImages;