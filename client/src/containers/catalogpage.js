import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCatalogContent } from "../actions/catalog";

import Header from "../components/common/header";
import MobileIconMenu from "../components/common/mobileiconmenu";
import Menu from "../components/common/menu";
import Footer from "../components/common/footer";
import Category from "../components/catalog/category";
import Product from "../components/catalog/product";
import CategoryLandingPage from "../components/catalog/categoryLanding";
import PageNotFound from "../components/common/pagenotfound";
import ProductPageLoader from "../components/common/productpage_loader"



class Catalogpage extends Component {

  constructor(props){
    super(props)

    this.state = {
      currency: ''
    };

  }
  
  componentWillReceiveProps(){
    console.log("componentWillReceiveProps")
  }

  componentDidMount() {

    window.scrollTo(0, 0)
   console.log('catalog = ', this.props.catlog)

    this.props.fetchCatalogContent(this.props.location.pathname);
  }

   currencyChange = (curr) => {
        this.setState({currency:curr})
    }


  render() {
    
    return (
      <div>
          <Header onSelectCurrency={this.currencyChange}/>
          <MobileIconMenu />
          <Menu />
          { this.props.catalog.type ? (
            <div>
              {(() => {
                switch (this.props.catalog.type) {
                  case "category":   
                      return <Category currency={this.state.currency} { ...this.props.catalog }/>;
                  case "product":   
                      return <Product currency={this.state.currency} { ...this.props.catalog} />;
                  case "categorylist":   
                      return <CategoryLandingPage currency={this.state.currency} { ...this.props.catalog} />;
                  default:      
                      return <PageNotFound/>;
                }
              })()}

            </div>         
          ): (<ProductPageLoader/>) }

          <Footer />
        <div className="clearfix"></div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { catalog: state.catalog };
}

export default connect(mapStateToProps, { fetchCatalogContent })(Catalogpage);