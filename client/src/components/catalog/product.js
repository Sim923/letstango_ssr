import React, { Component } from "react";

import ProductBreadCrumb from "./product/productbreadcrumb";
import ProductContents from "./product/productcontents";
import ProductImages from "./product/productimages";
import ProductSpecs from "./product/productspecs";
import FloatingHeader from "./product/floatingheader";
import RelatedProduct from "./product/relatedproduct"
import ProductPageLoader from "../common/productpage_loader"

class Product extends Component {


	render() {

		return (
			<section id="product-page-wrapper">   
    			{this.props ?(

    				<div id="product-page">  
						{this.props.is_in_stock == "true" &&
							<FloatingHeader { ...this.props} />
						}	
				
    			<section id="product-page-firstblock">   
	    			<div className="container">
	    			
	    				<div className="row">
				            <ProductBreadCrumb { ...this.props} />
				        </div>
				        <div id="first-block" className="row">
				        	<ProductImages mainImage = {this.props.main_image} images = {this.props.images}/>
				        	<ProductContents { ...this.props}/>
				        </div>
				       
	    			</div>
	    		</section>
	    		<section id="product-page-secondblock">
	    			<div className="container">

	    			 <RelatedProduct relatedproduct ={this.props.related_products}/>
				     <ProductSpecs { ...this.props}/>
				    </div>

	    		</section>

    			</div>




    			):(<ProductPageLoader></ProductPageLoader>)}

			</section>
		);
	}
}
export default Product;