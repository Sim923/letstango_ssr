import React, { Component } from "react";
import { connect } from "react-redux";
import { injectIntl, intlShape } from 'react-intl';
import { fetchCart } from "../../actions/cart";
import ImageLoader from 'react-load-image';
import PreLoader   from  '../../helpers/constants';

import PropTypes from 'prop-types';
import {
  InstantSearch,
  Configure,
  Index,
  Highlight,
} from 'react-instantsearch/dom';
import { connectAutoComplete } from 'react-instantsearch/connectors';
import Autosuggest from 'react-autosuggest';


import * as constants from '../../helpers/constants';

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


class Example extends Component {
  static propTypes = {
    hits: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentRefinement: PropTypes.string.isRequired,
    refine: PropTypes.func.isRequired,
  };

  state = {
    value: this.props.currentRefinement,
  };

onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.props.refine(value);

  };

  onSuggestionsClearRequested = () => {
    this.props.refine();
  };

  getSuggestionValue(hit) {

    return hit.name;
  }

  renderSuggestion(hit) {


    return (<div className="media  align-items-center">

                <ImageLoader className="align-self-center mr-3"
                    src={"https://www.letstango.com/media/catalog/product/cache/1/image/229x229/9df78eab33525d08d6e5fb8d27136e95/"+hit.original_image}>
                    <img />
                    <div><PreLoader /></div>
                    <PreLoader />
                </ImageLoader>
                <div className="media-body">
                <h5 className="mt-0 crop-text-2">{hit.name}</h5>
                </div>
            </div>);
  }

  renderSectionTitle(section) {
    return section.index;
  }

  getSectionSuggestions(section) {
    return section.hits;
  }
 

  render() {
    const { hits } = this.props;
    const { value } = this.state;
    
    const inputProps = {
      placeholder: 'Search for a product...',
      onChange: this.onChange,

      value,
    };

    return (

      <div>
        
        { /* <input id="head-serach" className="form-control border-secondary py-2 display-none" 
          value={this.state.value} onChange={(event)=>this.onChange(event)}
          type="search" placeholder="search_placeholder"/> */
        }


      <Autosuggest className="serach-result-popup"
        suggestions={hits}
        multiSection={true}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        focusInputOnSuggestionClick={false}
        renderSectionTitle={this.renderSectionTitle}
        getSectionSuggestions={this.getSectionSuggestions}
      />

      <div id="talkbubble" className="serach-result-popup">
                <div className="row">
                <div className="col-4">
                  <h2>Related Categories</h2>
                  <ul>
                  
              
                    
                  </ul>
                </div>
                <div className="col-5">
                  
                  <h2>Recommented Products</h2>
                  
                  <a href="#"><div className="search-product-info-block">
          

                    <div className="media  align-items-center">
                       <img className="align-self-center mr-3" src="https://test1.letstango.com/media/catalog/product/cache/1/image/480x/9df78eab33525d08d6e5fb8d27136e95/I/P/IPHONE_7_PLUS_CLEAR_BACK_CASE.jpg" alt=""/>
                        <div className="media-body">
                        <h5 className="mt-0 crop-text-2">Snook C75S Snook C75S 7inch, 512MB Dual SIM, Wi-Fi, 3G, White 7inch, 512MB Dual SIM, Wi-Fi, 3G, White</h5>
                       </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  </a>
                  
                  <a href="#"><div className="search-product-info-block">
                    <div className="media  align-items-center">
                       <img className="align-self-center mr-3" src="https://test1.letstango.com/media/catalog/product/cache/1/image/480x/9df78eab33525d08d6e5fb8d27136e95/I/P/IPHONE_7_PLUS_CLEAR_BACK_CASE.jpg" alt=""/>
                        <div className="media-body">
                        <h5 className="mt-0 crop-text-2">Snook C75S Snook C75S 7inch, 512MB Dual SIM, Wi-Fi, 3G, White 7inch, 512MB Dual SIM, Wi-Fi, 3G, White</h5>
                       </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  </a>
                  
                  <a href="#"><div className="search-product-info-block">
                    <div className="media  align-items-center">
                       <img className="align-self-center mr-3" src="https://test1.letstango.com/media/catalog/product/cache/1/image/480x/9df78eab33525d08d6e5fb8d27136e95/I/P/IPHONE_7_PLUS_CLEAR_BACK_CASE.jpg" alt=""/>
                        <div className="media-body">
                        <h5 className="mt-0 crop-text-2">Snook C75S Snook C75S 7inch, 512MB Dual SIM, Wi-Fi, 3G, White 7inch, 512MB Dual SIM, Wi-Fi, 3G, White</h5>
                       </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  </a>
                  
                  <a href="#"><div className="search-product-info-block">
                    <div className="media  align-items-center">
                       <img className="align-self-center mr-3" src="https://test1.letstango.com/media/catalog/product/cache/1/image/480x/9df78eab33525d08d6e5fb8d27136e95/I/P/IPHONE_7_PLUS_CLEAR_BACK_CASE.jpg" alt=""/>
                        <div className="media-body">
                        <h5 className="mt-0 crop-text-2">Snook C75S Snook C75S 7inch, 512MB Dual SIM, Wi-Fi, 3G, White 7inch, 512MB Dual SIM, Wi-Fi, 3G, White</h5>
                       </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  </a>
                  
                </div>
                
                <div className="col-3">
                  <h2>Trending Now</h2>
                  <ul>
                    <a href="#"><li>iPhone X</li></a>
                    <a href="#"><li>Smasung S9</li></a>
                    <a href="#"><li>Macbook Pro</li></a>
                    <a href="#"><li>Galaxy Note 9</li></a>
                    <a href="#"><li>Xbox one X</li></a>
                    <a href="#"><li>PS4</li></a>
                    <a href="#"><li>HTC Vivo Pro</li></a>
                    <a href="#"><li>Thinkpad</li></a>
                    
                  </ul>
                </div>
                
                
              </div>
            <div className="clearfix"></div>
            </div>
         

      </div>
    );
  }
}

const AutoComplete = connectAutoComplete(Example);

class HeaderAutoComplete extends Component {

 constructor(props) {
    super(props);

    // const storedCurrency    = localStorage.getItem('currency')?(localStorage.getItem('currency')):'AED' 
    // const formatedcurrency  = this.props.intl.formatMessage({id: storedCurrency});
    const storedCurrency    = localStorage.get('currency')?(localStorage.get('currency')):'AED' 
    const formatedcurrency  = this.props.intl.formatMessage({id: storedCurrency});
    
    this.state = { 
            curr: storedCurrency 
        };
    this.selectCurrency = this.selectCurrency.bind(this)

  }

  componentDidMount() {
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
  onAutoCompleteChange=()=> {

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
    
    <header className="sticky-top" id="main-header">
    <InstantSearch
    appId="00MR9K6WFR"
    apiKey="bc67c804dedc8c1ee6d970292200c3cc"
    indexName="letsTango_default_products">



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
                  
                 
                  
           

                <AutoComplete onChange={this.onAutoCompleteChange}/>
					       <Configure hitsPerPage={5} />
                <Index indexName="letsTango_default_products" />
                <Index indexName="letsTango_default_products_price_default_asc" />
					  
					  
					 
					  
					  
                    
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

 
    

  </InstantSearch>
</header>
 

);
  }

 onInputChange(term) {
    this.setState({ term });
  
  }

}

function mapStateToProps(state) {
  return { cart: state.cart };
}


export default injectIntl(
  connect(mapStateToProps, { fetchCart })(HeaderAutoComplete)
)

