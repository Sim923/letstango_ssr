import React, { Component } from "react";

class MobileIconMenu extends Component {

  render() {

    return (<div className="mbob-nav-head col-12">
            	<ul>
                	<li>
                    	<a href="#">
                            <img src="/images/Deals.png" srcSet="/images/Deals.png 1x, /images/Deals@2x.png 2x, /images/Deals@3x.png 3x" alt="Let's Tango Deals" /><br/>
                            Deals
                        </a>
                    </li>
                    
                    <li>
                    	<a href="#">
                        	<img src="/images/Mobiles.png" srcSet="/images/Mobiles.png 1x, /images/Mobiles@2x.png 2x, /images/Mobiles@3x.png 3x" alt="Let's Tango Deals" /><br/>
                            Mobiles
                        </a>
                    </li>
                    
                    <li>
                    	<a href="#">
                        	<img src="/images/Gaming.png" srcSet="/images/Gaming.png 1x, /images/Gaming@2x.png 2x, /images/Gaming@3x.png 3x" alt="Let's Tango Gaming" /><br/>
                            Gaming
                        </a>
                    </li>
                    
                    
                    
                    <li>
                    	<a href="#">
                        	<img src="/images/Televisions.png" srcSet="/images/Televisions.png 1x, /images/Televisions@2x.png 2x, /images/Televisions@3x.png 3x" alt="Let's Tango " /><br/>
                            Televisions
                        </a>
                    </li>
                    
                    <li>
                    	<a href="#">
                        	<img src="/images/More.png" srcSet="/images/More.png 1x, /images/More@2x.png 2x, /images/More@3x.png 3x" alt="Let's Tango more deals " /><br/>
                            More
                        </a>
                    </li>
                </ul>
            </div>);
  }
}
export default MobileIconMenu;