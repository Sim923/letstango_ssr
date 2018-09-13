import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchHomepage } from "../actions/homepage";

import Footer from "../components/common/footerhome";

import MobileIconMenu from "../components/common/mobileiconmenu";
import Menu from "../components/common/menu";
import HomeContent from "../components/home/homecontent";
import Header from "../components/common/header";


import * as constants from '../helpers/constants';

class Homepage extends Component {

  constructor(props){
    super(props)
 
    this.state = {
      currency: ''
    };
    
  }
  componentDidMount() {
    console.log('pathname = ',this.props.location.pathname);
    this.props.fetchHomepage(this.props.location.pathname);
    
  }
  currencyChange = (curr) => {
        this.setState({currency:curr})
  }

  render() {

    return (

   
      <div>
          <Header />
          <MobileIconMenu />
          <Menu />
          <HomeContent currency={this.state.currency} {...this.props.homepage}/>
          <Footer />
        <div className="clearfix"></div>
      </div>
    

    );
  }
}

function mapStateToProps(state) {
  return { homepage: state.homepage };
}

export default connect(mapStateToProps, { fetchHomepage })(Homepage);