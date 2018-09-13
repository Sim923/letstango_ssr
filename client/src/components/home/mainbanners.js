import React, { Component } from "react";
import * as constants from '../../helpers/constants';

class MainBanners extends Component {

    constructor(props){
      super(props);



  }


  render() {

  const pathName = constants.getPathName();
  const mainbanners = [
    { "url":"jgghgvjhh",  "type":"product",   "image":"https://test1.letstango.com/media/catalog/product/watermark/default/hero-banner-aug-gl6-titan.jpg"},
    { "url":null,  "type":"product",   "image":"https://test1.letstango.com/media/catalog/product/watermark/default/hero-banner-june-snap-v2-min.jpg"},
    { "url":null,  "type":"category",  "image":"https://test1.letstango.com/media/catalog/product/watermark/default/hero-banner-aug-mi8-min.jpg"},
    { "url":null,  "type":"category",  "image":"https://test1.letstango.com/media/catalog/product/watermark/default/hero-banner-aug-lg-tv-min.jpg"},
    { "url":null,  "type":"category",  "image":"https://test1.letstango.com/media/catalog/product/watermark/default/hero-banner-aug-benq-min.jpg"},
    { "url":null,  "type":"product",   "image":"https://test1.letstango.com/media/catalog/product/watermark/default/hero-banner-aug-cod.jpg"},
    { "url":null,  "type":"product",   "image":"https://test1.letstango.com/media/catalog/product/watermark/default/hero-banner-aug-gl6-xbox.jpg"},
    { "url":null,  "type":"product",   "image":"https://test1.letstango.com/media/catalog/product/watermark/default/hero-banner-aug-gl6.jpg"}
    ]

    return (
    <section id="hero-slider">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
             <ul className="carousel-indicators">
                 {mainbanners.map((item, index) => 
                    <li key={index} data-target="#myCarousel" data-slide-to={index}   className= {index ? ("") : ("active")}></li>
                  )}
              </ul>
               <div className="carousel-inner"> 
                {mainbanners.map((item, index) => 
                  <div key={index} className= {index ? ("carousel-item") : ("carousel-item active") }>
                    <a href={pathName+item.url}>
                      <img src={item.image} alt="Los Angeles" width="1100" height="500"/>
                    </a>
                  </div>
               
                )}
               </div>
          <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>


<div className="clearfix"></div>
</section>);
  }
}
export default MainBanners;