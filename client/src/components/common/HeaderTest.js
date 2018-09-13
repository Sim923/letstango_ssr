/* eslint-disable */
import React, { Component } from "react";
import { createConnector } from 'react-instantsearch';
import MobileIconMenu from "../common/mobileiconmenu";
import TangoMenu from "../common/menu";


import { connect }          from "react-redux";
import { injectIntl, 
         intlShape }        from 'react-intl';
import { fetchCart }        from "../../actions/cart";
import {AutoCompleteMenu} from "./AutocompleteMenu"

import {
  InstantSearch,
  SearchBox,
  Configure,
  RefinementList,
  SortBy,
  Stats,
  Pagination,
  HitsPerPage,
  Highlight,
  Menu,
  ClearAll,
  Hits,

} from 'react-instantsearch/dom';
import { connectRange,connectSearchBox,connectAutoComplete } from 'react-instantsearch/connectors';
import { withUrlSync } from './urlSync';
import PropTypes from 'prop-types';
import { Slider , Range } from 'rc-slider';
import Autosuggest from 'react-autosuggest';


import * as constants from '../../helpers/constants';
import ImageLoader from 'react-load-image';
import PreLoader   from  '../../helpers/constants';

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

// let userid          = localStorage.getItem('customer_id')?(localStorage.getItem('customer_id')):'';
let userid          = localStorage.get('customer_id')?(localStorage.get('customer_id')):'';
const loginPage     = "login"
const cartPage      = "cart"



const usd_flag  = "flag-icon flag-icon-USD"
const aed_flag  = "flag-icon flag-icon-AED"
const omr_flag  = "flag-icon flag-icon-OMR"
const eu_flag   = "flag-icon flag-icon-EU"
const kwd_flag  = "flag-icon flag-icon-KWD"
const sar_flag  = "flag-icon flag-icon-SAR"
const bhd_flag  = "flag-icon flag-icon-BHD"

class HeaderTestSearch extends Component {


 constructor(props) {
    super(props);

    // const storedCurrency    = localStorage.getItem('currency')?(localStorage.getItem('currency')):'AED' 
    const storedCurrency    = localStorage.get('currency')?(localStorage.get('currency')):'AED' 
    const formatedcurrency  = this.props.intl.formatMessage({id: storedCurrency});
    
    this.state = { 
            curr: storedCurrency 
        };
    this.selectCurrency = this.selectCurrency.bind(this)

  }

  componentDidMount() {

    initializeMenu();

    // let userid  = localStorage.getItem('customer_id')?(localStorage.getItem('customer_id')):'';
    // let quoteid = localStorage.getItem('quote_id')?(localStorage.getItem('quote_id')):'';
    let userid  = localStorage.get('customer_id')?(localStorage.get('customer_id')):'';
    let quoteid = localStorage.get('quote_id')?(localStorage.get('quote_id')):'';
    this.props.fetchCart(userid,quoteid);
  }

  getCurrencySymbol(currency){

    switch(currency) {
        case "AED":
          return "AED"
        case "USD":
          return "$"
        case "EU":
          return "€"
        case "SAR":
          return "SAR"
        case "BHD":
          return "BHD"
        case "OMR":
          return "OMR"
        case "KWD":
          return "KWD"
      }

  }


  selectCurrency(event){

    event.preventDefault();
    var currency = event.target.name?event.target.name:event.target.value
    
   
    
   

    if((typeof currency === 'undefined')){
          currency = "AED"
    }

    // localStorage.setItem('currency',currency);
    // localStorage.setItem('currencySymbol',this.getCurrencySymbol(currency));
    localStorage.set('currency',currency);
    localStorage.set('currencySymbol',this.getCurrencySymbol(currency));

   

    this.setState({curr:currency})
    this.props.onSelectCurrency(currency);

  }

  render() {
    
    const pathName = constants.getPathName();
    const flagname = "flag-icon flag-icon-"+this.state.curr

    const search_placeholder  = this.props.intl.formatMessage({id: 'search_placeholder'});
    const sell                = this.props.intl.formatMessage({id: 'sell'});
    const myaccount           = this.props.intl.formatMessage({id: 'myaccount'});
    const trackorder          = this.props.intl.formatMessage({id: 'trackorder'});
    const login               = this.props.intl.formatMessage({id: 'login'});
    const AED                 = this.props.intl.formatMessage({id: 'AED'});
    const USD                 = this.props.intl.formatMessage({id: 'USD'});
    const EU                  = this.props.intl.formatMessage({id: 'EU'});
    const SAR                 = this.props.intl.formatMessage({id: 'SAR'});
    const BHD                 = this.props.intl.formatMessage({id: 'BHD'});
    const OMR                 = this.props.intl.formatMessage({id: 'OMR'});
    const KWD                 = this.props.intl.formatMessage({id: 'KWD'});
    const selectedCurr        = this.props.intl.formatMessage({id: this.state.curr});

    const locationPath = location.pathname
    var language = "en"
    
    if(locationPath.startsWith("/ae-ar")){
        language = "ar"
    }
    var cartCount = 0;
    if(typeof(this.props.cart.total) != 'undefined')
      cartCount = this.props.cart.total.total_cart_count;

    return (

      <InstantSearch
          apiKey="bc67c804dedc8c1ee6d970292200c3cc"
          appId="00MR9K6WFR"
          className="container-fluid"
          createURL={this.props.createURL}
          indexName="letsTango_default_products"
          onSearchStateChange={this.props.onSearchStateChange}
          searchState={this.props.searchState}>
 
            <header className="sticky-top" id="main-header">
    <div className="container">
        <div className="row align-items-center">
            
            <div className="col-2 d-block d-sm-none menu-icon">
                <span id="mob-menu" className="nav-bar">
                   <img src="/images/Hamburger.png" srcSet="/images/Hamburger.png 1x, /images/Hamburger@2x.png 2x, /images/Hamburger@3x.png 3x" alt="Let's Tango" />
                </span>
            </div>

            <div className="col-sm-2 col-xl-1 col-lg-2 col-8 brand">
                <a href={pathName}>
                    <img alt="" src="/images/lets-tango-logo-light.png" srcSet="/images/lets-tango-logo-light.png 1x, /images/lets-tango-logo-light-2x.png 2x, /images/lets-tango-logo-light-3x.png 3x" alt="LetsTango.com" />
                </a>
            </div>
            
            <div className="col-sm-12 col-md-5 col-lg-5 col-xl-6 col-12">
                <div className="input-group">
                   <ConnectedSearchBox />
                   <AutoCompleteMenu/>
                </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 top-navigation ">
                <nav className="navbar navbar-expand-sm  navbar-dark">
                    <ul className="navbar-nav">
                          
                       <li className="nav-item d-none d-md-block">
                          <a className="nav-link" href={language=="ar"?"/":"ae-ar"}>{language=="ar"?"ENGLISH":"العربية"}</a>
                        </li>
              
                   <li className="nav-item dropdown d-none d-md-block">
                          <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                           <span className={flagname}></span> {selectedCurr}
                          </a>
                          <div className="dropdown-menu">
                            
                            <a onClick={this.selectCurrency} name="AED" className="dropdown-item">
                              <span value="AED" className={aed_flag}></span> {AED}
                            </a>

                            <a onClick={this.selectCurrency} name="USD" className="dropdown-item">
                              <span value="USD" className={usd_flag}></span> {USD}</a>
                            
                            <a onClick={this.selectCurrency} name="EU"  className="dropdown-item">
                              <span value="EU"  className={eu_flag}></span> {EU}
                            </a>
                            <a onClick={this.selectCurrency} name="SAR" className="dropdown-item">
                              <span value="SAR" className={sar_flag}></span> {SAR}
                            </a>
                            <a onClick={this.selectCurrency} name="BHD" className="dropdown-item">
                              <span value="BHD" className={bhd_flag}></span> {BHD}
                            </a>
                            <a onClick={this.selectCurrency} name="OMR" className="dropdown-item">
                              <span value="OMR" className={omr_flag}></span> {OMR}
                            </a>
                            <a onClick={this.selectCurrency} name="KWD" className="dropdown-item">
                              <span value="KWD" className={kwd_flag}></span> {KWD}
                              </a>
                            
                          </div>
                        </li>
                        
                        <li className="nav-item d-none d-md-block">
                          <a className="nav-link" href={pathName+"sell"}>{sell}</a>
                        </li>
                        <li className="nav-item d-none d-md-block">
                            <a href={(userid !='')?pathName+constants.CUSTOMER_ORDERS:pathName+loginPage} className="nav-link">{(userid !='')?myaccount:login}</a>
                        </li>
                        <li className="nav-item d-none d-md-block">
                            <a  className="nav-link" href={pathName}>{trackorder}</a>
                        </li>

            
            
            
            <li className="nav-item cart">
              <a href={pathName+cartPage} className="nav-link" >
                <img src="/images/buy.png"/>
                { cartCount ? (<span>{ cartCount }</span>) : ''}
              </a>
            </li>
            </ul>
          </nav>
          </div>
        </div>
    </div>
</header>
    <MobileIconMenu />
    <ConnectedContent/>
    <main>
    </main>
  </InstantSearch>



    );
  
  }
  
  
  
  
  
 
}
class CustomRange extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      currentValues: { min: this.props.min, max: this.props.max },
    };
  

    this.onValuesUpdated = this.onValuesUpdated.bind(this);
    this.onChange = this.onChange.bind(this);
     
  }

  componentWillReceiveProps(sliderState) {

    this.setState({
      currentValues: {
        min: sliderState.currentRefinement.min,
        max: sliderState.currentRefinement.max,
      },
    });
  }

  onValuesUpdated(values) {
    this.setState({ currentValues: { min: values[0], max: values[1] } });
  }
  onChange(values) {

    if (
      this.props.currentRefinement.min !== values[0] ||
      this.props.currentRefinement.max !== values[1]
    ) {
      this.props.refine({ min: values[0], max: values[1] });
    }
  }

  render() {

    const { min = 0, max = 0 } = this.props;
    const { currentValues } = this.state;

    return (
      <div className="ais-Slider__root">
        {currentValues.min === undefined && currentValues.max === undefined
          ? null
          : <Range
              max={Math.trunc(max)}
              min={Math.trunc(min)}
              onAfterChange={this.onChange.bind(this)}
              onChange={this.onValuesUpdated.bind(this)}

              value={[currentValues.min, currentValues.max]}
            />}
        <div className="ais-Slider__values">
          <div>
            {min}
          </div>
          <div>
            {max}
          </div>
        </div>
      </div>
    );
  }
}

Range.propTypes = {
  currentRefinement: PropTypes.object,
  max: PropTypes.number,
  min: PropTypes.number,
  refine: PropTypes.func,
};



function Hit({ hit }) {

  return (
    
          <div className="col-12 end">
          { hit ? (
         
            <div className="dealblock_thump">
              <div className="thump_img">
                      <img alt={hit.name} src="https://www.t-mobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-8/gold/apple-iphone8-gold-1-3x.jpg" />
                    </div>
                    <h1 className="crop-text-2">{hit.name}</h1>
                    <h2>{hit.price.AED.default_formated}</h2>
                  </div>
          
       
          ): (<div></div>)}
              </div> 
      );
    }

const CustomSearchBox = ({ currentRefinement, refine }) => (

  <div className="input-group">
    <input id="head-serach" className="form-control border-secondary py-2"
      type="search"
      value={currentRefinement}
      onChange={e => refine(e.target.value)}
    />
  
  </div>
);



 

const RightColumn = () =>



      <div id="right-column" className="col-md-10 col-12 right-category_body">
        <div id="tille-block" className="info d-flex flex-row justify-content-end">      
          <label className="mob">Sort by:</label>
		  <SortBy
            defaultRefinement="letsTango_default_products"
              items={[
                { value: 'letsTango_default_products', label: 'Relevence' },
                { value: 'letsTango_default_products_price_default_asc', label: 'Lower Price' },
                { value: 'letsTango_default_products_price_default_desc', label: 'Higher Price' },
              ]}/>
			  
			  
			   <div className="btn-group filterbuttons-mobile" role="group" aria-label="Basic example">
                        <button type="button"   className="btn btn-outline-secondary">Filter <i className="fa fa-filter"></i> </button>
                        
                        <button type="button"  className="btn btn-outline-secondary">Sort by <i className="fa fa-sort-amount-desc"></i> </button>
              </div> 
			  
			 
			  
        </div>
		
		
        
      <div className="row">
        <Hits className="col-12 right-category_body" hitComponent={Hit} >
          <div className="clearfix"></div>
        </Hits>
          <div className="clearfix"></div>
      </div>
    
      <div className="row" id="paginations">
        <Pagination className="col-12 text-center" showLast />
      </div>
    </div>;



  const Content = createConnector({
	  
	  
	  
	  
  displayName: 'ConditionalResults',
  getProvidedProps(props, searchState, searchResults) {
    const noResults = searchResults.results
      ? searchResults.results.nbHits === 0
      : false;
    return { query: searchState.query, noResults };
  },
})(({ noResults, query }) => {
  
  const rightColumn = noResults
    ? <div id="no-results-message">
        <p>
          We didnt find any results for the search <em>{query}</em>.
        </p>
        <ClearAll />
      </div>
    : <RightColumn />;
  return (
    <div id="category_list_page">
    <div className="row">
      <div  id="left-column" className="col-12 col-sm-2  left_filter ">

        <h5>Price</h5> 
        <ConnectedRange 
        attribute="price.AED.default"
           />
        <h5>Category</h5>
        <RefinementList attribute="categories.level0" />
        <h5>Manufacture</h5>
        
        <RefinementList
          attribute="manufacturer"
          withSearchBox
          showMore
          searchable = {true}
          translations={{ noResults: 'No matching manufacturer' }}
        />
      </div>
      {rightColumn}
    </div>
	</div>
  );
});


const ConnectedContent    = connectSearchBox(Content);
const ConnectedSearchBox  = connectSearchBox(CustomSearchBox);
const ConnectedRange      = connectRange(CustomRange);

function mapStateToProps(state) {
  return { cart: state.cart };
}

export default injectIntl( withUrlSync(connect(mapStateToProps, { fetchCart })(HeaderTestSearch))); 
