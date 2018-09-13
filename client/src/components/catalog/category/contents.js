/* eslint-disable */
import React, { Component } from "react";
import {connect} from "react-redux";
import Pagination from './pagination';
import {fetchCategory} from "../../../actions/catalog";
import Dropdown from 'react-dropdown'
import * as constants from '../../../helpers/constants';
import ImageLoader from 'react-load-image';
import PreLoader from '../../../helpers/constants';

import Cookies from 'universal-cookie';

const localStorage = new Cookies();


  const sortBy = [
    { value: 'new', label: 'Relevance' },
    { value: 'price_high', label: 'High to Low' },
    { value: 'price_low', label: 'Low to High' },
  ]
  var defaultSorting = sortBy[0].label



class Contents extends Component {

  constructor(props){
    super();

    this.onFetchCategory  = this.onFetchCategory.bind(this)
    this.onSortSelect     = this.onSortSelect.bind(this)

  }

  componentWillReceiveProps(newProps){
     window.scrollTo(0, 0)
  }
  openNavigation(type){

   openNav(type)

  }
  closeNavigation(type){
  
    closeNav(type)

  }

  onSortSelect(event,isMobile,value){



    if(isMobile){

      event.preventDefault();

      this.onFetchCategory(value.value,"sort")

    }else{
      
      this.onFetchCategory(event.value,"sort")
        
    }
  }

  onFetchCategory(selectedItem,type){

    var currentPage   = type=="page"?selectedItem:1
    const sortby      = type=="sort"?selectedItem:this.props.sort
 

  
    /* CALL GET CATEGORY API */
  
    const categoryId = this.props.category_id
    const minValue = this.props.minprice;
    const maxValue = this.props.maxprice;
    const finalFilterArray = this.props.selected_filters;


    let data = JSON.stringify({
                category_id: categoryId,
                page:currentPage,
                minprice:minValue,
                maxprice:maxValue,
                sort:sortby,
                filters:finalFilterArray
                
        })

    
    this.props.fetchCategory(data) 


  }
  render() {

   

    const items = this.props.items; 
    // let currency   = localStorage.getItem('currency')?(localStorage.getItem('currency')):'AED'; 
    let currency   = localStorage.get('currency')?(localStorage.get('currency')):'AED'; 
    const pathName = constants.getPathName();



    if (this.props.sort !=null ) {
        for(var i=0; i<sortBy.length; i++){
          if(sortBy[i].value==this.props.sort){
            defaultSorting = sortBy[i].label
          }
        }
      
      }

    return (

      <div className="col-12 col-md-9 col-lg-10 right-category_body">
      

      {items ? (

      	<div >
            
            <div id="tille-block" className="row align-items-center">
                <div className="col-12">

                    <h1 className="tittle"><span className="mobright">{this.props.nitems} results for</span> <span className="mobleft">{this.props.category_name}</span></h1>
                  
                      <div className="btn-group filterbuttons-mobile" role="group" aria-label="Basic example">
                        <button type="button" onClick={this.openNavigation.bind(this,"filter")}  className="btn btn-outline-secondary">Filter <i className="fa fa-filter"></i> </button>
                        
                        <button type="button" onClick={this.openNavigation.bind(this,"sort")} className="btn btn-outline-secondary">Sort by <i className="fa fa-sort-amount-desc"></i> </button>
                      </div> 

                      <div id="category-sort-option" className="dropdown pull-right sortoption-desktop">
					             <label>Sort by:</label>
                          <Dropdown 
                              menuClassName='myMenuClassName'
                              options={sortBy} 
                              onChange={this.onSortSelect} 
                              value={defaultSorting}
                              placeholder="Select an option" />
                      <div className="clearfix"></div>
                      </div>


                       <div id="sortby-mob"  className="col-12 col-sm-2  sortby-mob">
                      
                        <div className="close-button">
                          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNavigation.bind(this,"sort")}>&times;</a>
                        </div>
                        

                         <div className="sortgroup"> 
                         
                         <div className="options">
                                <label  onClick={(e) => this.onSortSelect(e,true,sortBy[0])}   title="item1">
                                    <input   type="radio" checked="checked" name="foo" value="0" /> 
                                      {sortBy[0].label}
                                    <img />
                                </label>
                                <label  onClick={(e) => this.onSortSelect(e,true,sortBy[1])}  title="item2">
                                    <input  type="radio" name="foo" value="1" />
                                      {sortBy[1].label}
                                    <img />
                                </label>   
                                <label onClick={(e) => this.onSortSelect(e,true,sortBy[2])} title="item3">
                                    <input   type="radio" name="foo" value="2" />
                                      {sortBy[2].label}
                                    <img />
                                </label>
                           </div>
                              
                               
                         <div className="clearfix"></div>
                         </div>  
                     </div>
                 </div>
              </div>

              { items ? (
                  <div className="row">
                  {items.map((item, index) => 
                    
                    <div className="col-md-3 col-lg-2 col-6 end" key={index}>
                        
                      <a href={pathName+item.url}>

                        <div className="dealblock_thump">
                            <div className="thump_img">

                            <ImageLoader
                                src={item.main_image}>
                                <img />
                                <div><PreLoader /></div>
                                <PreLoader />
                            </ImageLoader>

                            

                            
                            </div>
                              <h1 className="crop-text-2">{item.name}</h1>
                           {item.offer ? (
                            <p>
                                <span className="oldprice">{item.price[currency][0].default_original_formated}</span> 
                                <span className="percentage">{item.offer}</span>
                            </p>
                        ):(
                            <p>
                                <span className="no-offer">&nbsp;</span>
                            </p>
                            )
                        }
                        <h2>{item.price[currency][0].default_formated}</h2>
                      </div>

                    </a>

                  </div> 
                  )}
                  
                  {this.props.npages>1 && 
                  <Pagination className = ""
                    categoryid={this.props.category_id}
                    totalpages={this.props.npages}
                    currentpage={this.props.currentpage}
                    selectedfilters={this.props.selected_filters}
                    onClick = {this.onFetchCategory}
                    margin={1}/>
                  }

                  {this.props.category_description!=null && 
                  <div id="pagedescription" className="col-12"> 
                      <h1>
                          {this.props.category_name} in UAE
                        </h1>
                  
                        <p dangerouslySetInnerHTML={{__html: this.props.category_description}}/> 
                        
                  </div>
                  }
                
             </div>

            ): (<div></div>) }

            <div className="clearfix"></div>
          </div>
        ):(<div></div>)}

        </div>
    	);
    }
  }
export default connect(null,{ fetchCategory }) (Contents);