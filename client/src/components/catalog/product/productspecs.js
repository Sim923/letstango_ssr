/* eslint-disable */
import React, { Component } from "react";

import ProductReview from "./productreview"


class ProductSpecs extends Component {

  constructor(){
    super();
  this.onPageChange = this.onPageChange.bind(this);

  }
  onPageChange(event) {

    const targetId  = event.target.id;
    const newVlue = targetId.replace("#", '')
    const container = document.getElementById(newVlue)
    smoothScroll(container)

  }
  render() {


    function strip_html_tags(str){
        if ((str===null) || (str===''))
            return false;
        else
            str = str.toString();
        return str.replace(/<[^>]*>/g, '');
    }

    const specs = this.props.specification
    const specsArray = []
    
    for (var key in specs) {
    if (specs.hasOwnProperty(key)) {
      var val = specs[key];

      specsArray.push(val)

      }
    }


    var formattedDescription       =this.props.description
       
     
    var description       = "\n"+this.props.short_description
    var valueOfString     = strip_html_tags(description)
        valueOfString     = valueOfString.trim();
        valueOfString     = "\n"+valueOfString
    var foramtedShortDesc = valueOfString.replace(/(\r\n|\n|\r)/gm, "<li />");


     
  
    let specsRightArry=specsArray.filter(a=>specsArray.indexOf(a)%2===1);
    let specsLeftArray=specsArray.filter(a=>specsArray.indexOf(a)%2===0);
    const review = this.props.review? JSON.parse(this.props.review):''

    return (

     <div id="spec-block">
   
          <div className="spec-tittles">
              <div className="btn-group-toggle" data-toggle="buttons">
               
                  <label id="overview#" onClick={this.onPageChange} className="btn btn-secondary active">
                    <input type="radio"  name="options" id="option1" autoComplete="off"  defaultChecked={true}/> Overview
                  </label>

                  {specsLeftArray.length>0 &&
                  <label  id="specification#" onClick={this.onPageChange} className="btn btn-secondary">
                    <input type="radio"  name="options"  id="option2" autoComplete="off" defaultChecked={false} /> Specification
                  </label>
                  }

                  {review.score !=null &&
                  <label  id="review#" onClick={this.onPageChange} className="btn btn-secondary" >
                    <input type="radio"   name="options"  id="option3" autoComplete="off" defaultChecked={false}/> Review
                  </label>
                }
         
                
            </div>
 
          </div>

        <div id="overview" className="overview">
          <div id="collapseSummary3" className="overview-box align-items-center collapse">
            <div className="row">
              <div className="col-md-7">
                <div dangerouslySetInnerHTML={{__html: formattedDescription}} ></div>
              </div>
            <div className="col-md-5">
              <h3>HIGHLIGHTS</h3>
                <ul dangerouslySetInnerHTML={{__html: foramtedShortDesc}}></ul>
            </div>

            </div>
              <div className="clearfix"></div>
            </div>
        <div className="row">
          <a className="collapsed showlink" data-toggle="collapse" href="#collapseSummary3" aria-expanded="false" aria-controls="collapseSummary"></a>
        </div>  
        
        <div className="clearfix"></div>
      </div>
      
    { (specsLeftArray.length>0) &&
        <div id="specification" className="specification">
          <div className="row">
            <div className="col-md-12 tille">
              <h3>Specifications</h3>
            </div>
          </div>

        
       
        <div id="spec-wrap" className="spec-wrap"> 

            <div id="collapseSummary" className="specification-box align-items-center collapse">
              <div className="row">
                <div className="col-md-6 col-12">
                  <ul>
                    {specsLeftArray.map((item,index) =>
                        <li key={index}>
                          <span className="left-tittles">{item.label}</span>
                          <span className="right-details crop-text-1">{item.value}</span>
                          <span className="clearfix"></span>
                        </li>
                      )}
                  </ul>
                </div>
                <div className="col-md-6 col-12">
                   <ul>
                    {specsRightArry.map((item,index) =>
                      <li key={index}>
                        <span className="left-tittles">{item.label}</span>
                        <span className="right-details crop-text-1">{item.value}</span>
                        <span className="clearfix"></span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
      
         
            <div className={specsArray.length>10? "row":"d-none"}>
              <a className="collapsed showlink" data-toggle="collapse" href="#collapseSummary" aria-expanded="false" aria-controls="collapseSummary"></a>
            </div>
       
            
          <div className="clearfix"></div>
        </div>
       
        <div className="clearfix"></div>
        
      </div>  
       }  
      <ProductReview review = {this.props.review}/>



   </div>

    )
  }
}
export default ProductSpecs;