import React, { Component } from "react";
import CartContent from "./cartcontent";
import CartMenu from "./cartmenu";
import RelatedProducts from "../catalog/product/relatedproduct"
import CartLoader from "../../components/common/CartLoader"

class Cart extends Component {

	constructor(porps){
		super()
	}
	 
	render(){

		
		return(
		<div>
			
			{this.props.data ?(
				<div>
					<section id="cart_page">
						<div className="container">
				    		<div className="row">
								<CartContent {...this.props}/>
								{(typeof this.props.total !== 'undefined') && 
									<CartMenu {...this.props}/>
								}
								
							</div>
						</div>
					<div className="clearfix"></div>

					</section>

					<RelatedProducts relatedproduct={this.props.relatedproduct}/>
				</div>
				
				): ( 
				<div>
					{(this.props.status == 0 || this.props.message === "Cart is Empty") ? (

						<div className="row d-flex justify-content-center mb-3">
							<div>
	   							<img src="https://search.venders.co/img/animat-shopping-cart-color.gif"/>
	 							<span>EMPTY CART</span>
	 							
	 						</div>

	 					</div>
						
					): (<CartLoader></CartLoader>) }
				</div>
			)}
			
		</div>

			
		);
	}
}
export default (Cart);