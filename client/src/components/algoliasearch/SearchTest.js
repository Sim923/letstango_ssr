
import React from 'react';
import { createConnector } from 'react-instantsearch';

import MobileIconMenu from "../common/mobileiconmenu";
import TangoMenu from "../common/menu";

import {
  InstantSearch,
  SearchBox,
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
import { connectRange,connectSearchBox  } from 'react-instantsearch/connectors';
import { withUrlSync } from './urlSync';
import PropTypes from 'prop-types';
import { Slider , Range } from 'rc-slider';


const SearchTest = props =>

    <InstantSearch
      apiKey="bc67c804dedc8c1ee6d970292200c3cc"
      appId="00MR9K6WFR"
      className="container-fluid"
      createURL={props.createURL}
      indexName="letsTango_default_products"
      onSearchStateChange={props.onSearchStateChange}
      searchState={props.searchState}>
    
    <header className="sticky-top" id="main-header">
      <div className="container">
        <div className="row">
            <div className="col-1 d-block d-sm-none menu-icon">
                <a href="#">
                    <img src="images/Hamburger.png" srcSet="images/Hamburger.png 1x, images/Hamburger@2x.png 2x, images/Hamburger@3x.png 3x" alt="Let's Tango" />
                </a>
            </div>
            <div className="col-sm-2 col-8 brand">
                <a href="index.html">
                    <img alt="" src="https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light.png" srcSet="https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light.png 1x, https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light-2x.png 2x, https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light-3x.png 3x" alt="LetsTango.com" />
                </a>
            </div>
            <div className="col-sm-5 col-12">
                <div className="input-group">
                    
                  <ConnectedSearchBox />
                </div>
            </div>
            <div className="col-sm-5 top-navigation d-none d-sm-block">
                <nav className="navbar navbar-expand-sm  navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown d-none d-sm-block">
                          <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                           <span className="flag-icon flag-icon-ae"></span> AED
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-us"></span> USD</a>
                            <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-eu"></span> EU</a>
                            <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-sa"></span> SAR</a>
                            <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-bh"></span> BHD</a>
                            <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-om"></span> OMR</a>
                            <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-kw"></span> KWD</a>
                            
                          </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">MY ACCOUNT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">TRACK ORDER</a>
                        </li>
                        <li className="nav-item cart">
                            <a className="nav-link" href="#"><img src="images/buy.png"/></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
     </div>
    </header>
      


    <MobileIconMenu />
    <TangoMenu />

    <main>

    </main>
  </InstantSearch>

        

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
 






const ConnectedSearchBox = connectSearchBox(CustomSearchBox);
const ConnectedRange = connectRange(CustomRange);

export default withUrlSync(SearchTest);
