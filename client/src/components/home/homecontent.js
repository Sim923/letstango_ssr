import React, { Component } from "react";
import { connect } from "react-redux";
import Blog from "../common/blog";
import MainBanner from "./mainbanners";
import DealZone from "./dealzone";
import Mobile from "./mobile";
import Laptop from "./laptop";
import Electronics from "./electronics";
import Photography from "./photography";
import Gadget from "./gadget";
import Gaming from "./gaming";
import Fashion from "./fashion";

import HomeLoader from '../common/homescreen_loader'


class HomeContent extends Component {

  constructor(props){
    super(props);
    }

render() {
	  
    return (
     
      <div>

          <MainBanner/>
            {this.props.dealzone ?(
              <div>
                <DealZone { ...this.props.dealzone} />
                <Gaming { ...this.props.gaming} />
                <Laptop { ...this.props.laptop} />
                <Electronics { ...this.props.electronics} />
                <Mobile { ...this.props.mobile} />
                <Gadget { ...this.props.gadget} />
                <Photography { ...this.props.photography} />
                <Fashion { ...this.props.fashion} />
                <Blog />
              </div>
            ): ( <HomeLoader/>
            ) }
      
        <div className="clearfix"></div>
      </div>

    );
  }
}

export default (HomeContent);