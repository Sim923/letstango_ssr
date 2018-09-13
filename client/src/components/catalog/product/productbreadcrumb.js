import React, { Component } from "react";
import * as constants from '../../../helpers/constants';


class ProductBreadCrumb extends Component {

  constructor(){
    super();


  }
  render() {

    var breadCrumbs = this.props.breadcrumb
    const homeValue = {"name": "Home", "url": ""}
    const pathName  = constants.getPathName();

    if (breadCrumbs!=null) {

        breadCrumbs = [homeValue,...breadCrumbs]

    }
    return (
    	<div className="col-12 bread-crumps">

            {breadCrumbs? (
            <ul>
                {breadCrumbs.map((item,key)=>

                <li key={key}><a href={pathName+item.url}>{item.name}</a></li>
            
                )}
                
            </ul>

            ):(<div></div>)}
        </div>
        )
    }
}
export default ProductBreadCrumb;