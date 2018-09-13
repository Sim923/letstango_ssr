import React, { Component } from "react";
import { connect } from "react-redux";
import { createConnector } from 'react-instantsearch';
import MobileIconMenu from "../common/mobileiconmenu";
import TangoMenu from "../common/menu";


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

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

// let userid  = localStorage.getItem('customer_id')?(localStorage.getItem('customer_id')):'';
let userid  = localStorage.get('customer_id')?(localStorage.get('customer_id')):'';

const accountPage   = "http://localhost:9000/account"
const cartPage      = "http://localhost:9000/login"
const usd_flag      = "flag-icon flag-icon-USD"
const aed_flag      = "flag-icon flag-icon-AED"
const omr_flag      = "flag-icon flag-icon-OMR"
const eu_flag       = "flag-icon flag-icon-EU"
const kwd_flag      = "flag-icon flag-icon-KWD"
const sar_flag      = "flag-icon flag-icon-SAR"
const bhd_flag      = "flag-icon flag-icon-BHD"

class HeaderTestSearch extends Component {


 constructor(props) {
    super(props);

    // this.state = { curr: localStorage.getItem('currency')?(localStorage.getItem('currency')):'AED' };
    this.state = { curr: localStorage.get('currency')?(localStorage.get('currency')):'AED' };

    this.selectCurrency = this.selectCurrency.bind(this)

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
    const currency = event.target.name
    // localStorage.setItem('currency',event.target.name);
    // localStorage.setItem('currencySymbol',this.getCurrencySymbol(currency));
    localStorage.set('currency',event.target.name);
    localStorage.set('currencySymbol',this.getCurrencySymbol(currency));
    this.setState({curr:currency})
    this.props.onSelectCurrency(currency);

  }


  render() {

    

    const flagname = "flag-icon flag-icon-"+this.state.curr

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
                    
                    <div className="col-1 d-block d-sm-none menu-icon">
                        <span id="mob-menu" className="nav-bar">
                           <img src="/images/Hamburger.png" srcSet="/images/Hamburger.png 1x, /images/Hamburger@2x.png 2x, /images/Hamburger@3x.png 3x" alt="Let's Tango" />
                        </span>
                    </div>

                    <div className="col-sm-2 col-8 brand">
                        <a href="index.html">
                            <img alt="" src="https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light.png" srcSet="https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light.png 1x, https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light-2x.png 2x, https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light-3x.png 3x" alt="LetsTango.com" />
                        </a>
                    </div>
                    
                    <div className="col-sm-6 col-xl-6 col-12">
                        <div className="input-group">
                            
                            <ConnectedSearchBox />


                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button">
                                <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-xl-4 top-navigation ">
                        <nav className="navbar navbar-expand-sm  navbar-dark">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown d-none d-sm-block">
                                  <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                   <span className={flagname}></span> {this.state.curr}
                                  </a>
                                  <div className="dropdown-menu">
                                    <a onClick={this.selectCurrency} name="AED" className="dropdown-item"><span className={aed_flag}></span> AED</a>
                                    <a onClick={this.selectCurrency} name="USD" className="dropdown-item"><span className={usd_flag}></span> USD</a>
                                    <a onClick={this.selectCurrency} name="EU" className="dropdown-item"><span className={eu_flag}></span> EU</a>
                                    <a onClick={this.selectCurrency} name="SAR" className="dropdown-item"><span className={sar_flag}></span> SAR</a>
                                    
                                    <a onClick={this.selectCurrency} name="BHD" className="dropdown-item"><span className={bhd_flag}></span> BHD</a>
                                    
                                    <a onClick={this.selectCurrency} name="OMR" className="dropdown-item"><span className={omr_flag}></span> OMR</a>
                                    
                                    <a onClick={this.selectCurrency} name="KWD" className="dropdown-item"><span className={kwd_flag}></span> KWD</a>
                                    
                                  </div>
                                </li>
                                <li className="nav-item d-none d-sm-block">
                                    <a href={userid?accountPage:cartPage} className="nav-link">MY ACCOUNT</a>
                                </li>
                                <li className="nav-item d-none d-sm-block">
                                    <a  className="nav-link" href="#">TRACK ORDER</a>
                                </li>
                                <li className="nav-item cart">
                                    <a href="http://localhost:9000/cart" className="nav-link" ><img src="/images/buy.png"/></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    <MobileIconMenu />
    <AutoComplete />
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
    <input
      type="text"
      value={currentRefinement}
      onChange={e => refine(e.target.value)}
      className="form-control"
      id="q"
    />
    <span className="input-group-btn">
      <button className="btn btn-default">
        <i className="fa fa-search" />
      </button>
    </span>
  </div>
);


const RightColumn = () =>
      <div id="right-column">
        <div className="info">      
          <SortBy
            defaultRefinement="letsTango_default_products"
              items={[
                { value: 'letsTango_default_products', label: 'Relevence' },
                { value: 'letsTango_default_products_price_default_asc', label: 'Lower Price' },
                { value: 'letsTango_default_products_price_default_desc', label: 'Higher Price' },
              ]}/>
        </div>
        
      <div className="row">
        <Hits className="col-12 right-category_body" hitComponent={Hit} >
          <div className="clearfix"></div>
        </Hits>
          <div className="clearfix"></div>
      </div>
    
      <div className="row" id="paginations">
        <Pagination className="col-12" showLast />
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
          We didn't find any results for the search <em>{query}</em>.
        </p>
        <ClearAll />
      </div>
    : <RightColumn />;
  return (
    <div>
      <div  id="left-column">

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
  );
});



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
      value: newValue,
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
    return <Highlight attribute="name" hit={hit} tagName="mark" />;
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
      <Autosuggest
        suggestions={hits}
        multiSection={true}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        renderSectionTitle={this.renderSectionTitle}
        getSectionSuggestions={this.getSectionSuggestions}
      />
    );
  }
}


const AutoComplete        = connectAutoComplete(Example);
const ConnectedContent    = connectSearchBox(Content);
const ConnectedSearchBox  = connectSearchBox(CustomSearchBox);
const ConnectedRange      = connectRange(CustomRange);
export default withUrlSync(HeaderTestSearch); 
