import React, {Component} from 'react'
import * as constants from '../../helpers/constants';

class CheckOutHeader extends Component {

	constructor(props) {

		super (props)

	}
	render(){

		const pathName = constants.getPathName();

		return(

			<div>

			<header className="sticky-top" id="main-header2">
				<div className="container">
			    	<div className="row align-items-center ">
			        
			            <div className="col-1 d-block d-sm-none menu-icon">
			            	<a href={pathName}>
			                    <img src="images/Hamburger.png" srcSet="images/Hamburger.png 1x, images/Hamburger@2x.png 2x, images/Hamburger@3x.png 3x" alt="Let's Tango" />
			                    
			                </a>
			            </div>
			        	
			            
			            <div className="col-11 brand">
							<a href={pathName}>
								<img alt="" src="/images/lets-tango-logo-light.png" srcSet="/images/lets-tango-logo-light.png 1x, /images/lets-tango-logo-light-2x.png 2x, /images/lets-tango-logo-light-3x.png 3x" alt="LetsTango.com" />
							</a>
							<p> <i className="fa fa-lock"></i> SECURED CHECKOUT</p>
						</div>
			            
			           
			            
			            
			        </div>
			    </div>
			</header>
			</div>

		);
	}

}
export default (CheckOutHeader);