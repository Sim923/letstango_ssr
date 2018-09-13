/* eslint-disable */

import React, { Component } from "react";
import { connectRange,
         connectSearchBox,
         connectAutoComplete,
         connectStateResults } from 'react-instantsearch/connectors';
import ImageLoader from 'react-load-image';
import PreLoader   from  '../../helpers/constants';
import * as constants from '../../helpers/constants';
import { Link } from 'react-router-dom';
 const pathName = constants.getPathName();

var _ = require('lodash');

export  function AutoCompleteMenu() {

  return (

    <div id="talkbubble" className="serach-result-popup">
      <div className="row">
          <div className="col-4">
              <h2>Related Categories</h2>
                  <RelatedCategory/>
                </div>
                <div className="col-8">
                  <h2>Recommented Products</h2>
                  <div>
                    <RecommentedProduct/>
                  </div>

              </div>
              
      </div>
     
  </div>

  );
}

const RecommentedProduct = connectStateResults(({ searchState, searchResults }) => {

   return (
      <div>
        {searchResults!=null &&
        <div >
          {searchResults.hits.map((item,key)=>
            <div key={key} className="search-product-info-block">
              <a href={(item.url).replace("https://www.letstango.com","")}>
                <div className="media  align-items-center">

                     <ImageLoader
                        src={"https://www.letstango.com/media/catalog/product/cache/1/image/229x229/9df78eab33525d08d6e5fb8d27136e95"+(item.original_image)}>
                        <img />
                        <div><PreLoader /></div>
                        <PreLoader />
                      </ImageLoader>
                    
                    
                    <div className="media-body">
                    <h5 className="mt-0 crop-text-2">{item.name}</h5>
                    </div>
                </div>
              </a>
              </div>
              )}
              
          </div>
        }
      </div>

   );
});

const RelatedCategory = connectStateResults(({ searchParameters, searchState, searchResults,}) => {

  var categoryArray = []
  

  if (searchResults!=null) {
    
      for (var i=0;i<searchResults.hits.length;i++){
        categoryArray.push(...searchResults.hits[i].categories_without_path);
      }
  }
  let categories = _.uniq(categoryArray)
   return (

      <div>
      {searchResults!=null &&
       <ul>
       {categories.map((item)=>
         <Link key={item} to={pathName+"search?"+((searchResults._rawResults[0].params).replace("page=0","page=1"))}>
            <li> <span>{searchResults.query}</span> in {item}</li>
          </Link>
      )}
      </ul>
      }
      </div>

   );
});



