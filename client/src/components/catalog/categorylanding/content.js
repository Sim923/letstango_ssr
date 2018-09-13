import React, { Component } from "react";
import ImageLoader from 'react-load-image';
import PreLoader from '../../../helpers/constants';
import * as constants from '../../../helpers/constants';

import Cookies from 'universal-cookie';

const localStorage = new Cookies();
class CategoryContent extends Component {


        render() {
               
                const productList = this.props.product_list
                const bannerBlock = this.props.banner_blocks
                const pathName = constants.getPathName();

                var valueOfString = null;
                var description   = this.props.category_description
                if(description!=null){
                    valueOfString = constants.strip_html_tags(description)
                    valueOfString = valueOfString.trim();
                    valueOfString = "\n"+valueOfString
                }

               console.log(productList)
            //    let currency   = localStorage.getItem('currency')?(localStorage.getItem('currency')):'AED'; 
            let currency   = localStorage.get('currency')?(localStorage.get('currency')):'AED'; 
            
            return (
                <div>
                    <div className="row">
                        <section id="landingpage-list-block" >
                            
                         {productList[0]? (
                            <div className="col-12">
                                <div id="home-head">
                                    <h1><span>{productList[0].label}</span> <a href="#" className="pull-right viewall_home">VIEW ALL <i className="fa fa-angle-right"></i></a></h1>
                                </div>
                                <div className="row">
                                        
                                    {productList[0].items.items.map((item,key)=>

                                        <div key={ key } className="col-md-2 col-6">

                                        <a href={pathName+item.url}>
                                            <div className="dealblock_thump">
                                                <div className="thump_img">
                                                    <ImageLoader
                                                        src={item.main_image}>
                                                        <img />
                                                        <div>Error!</div>
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
                                                        </p> )}
                                                <h2>{item.price[currency][0].default_formated}</h2>
                                            </div>
                                            </a>
                                        </div>

                                    )} 
                                </div>
                                <div id="viewall-mobile-btn" className="col-12">
                                    <a href="#" className="pull-right viewall_home_mob">VIEW ALL <i className="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                            ):(<div></div>)}
                        </section>
                        <section id="landingpage-list-block" >
                                
                            {bannerBlock? (

                            <div id="inner-mid-banner" className="row ">

                                {bannerBlock.map((item,key) =>
                                
                                <div key={key} className="col-md-4 banner-thump-block">
                                    <a href={pathName+item.url}>
                                        <img src={item.image} alt="" />
                                        <h2 className="crop-text-2">{item.title}</h2>
                                    </a>
                                </div>

                                )}
                            </div>


                            ):(<div></div>)}

                            
                        
                        </section>
                        
                        <section id="landingpage-list-block" >
                            {productList[1]? (
							
                            <div className="col-12">
                                <div id="home-head">
                                    <h1><span>{productList[1].label}</span> <a href="#" className="pull-right viewall_home">VIEW ALL <i className="fa fa-angle-right"></i></a></h1>
                                </div>
                                <div className="row">
                                        
                                    {productList[1].items.items.map((item,key)=>

                                        <div key={key} className="col-md-2 col-6">
                                            
                                            <a href={pathName+item.url}>
                                            <div className="dealblock_thump">
                                                <div className="thump_img">
                                                    <img  src={item.main_image} alt="" />
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
                                                        </p> )}
                                                <h2>{item.price[currency][0].default_formated}</h2>
                                            </div>
                                            </a>
                                        </div>
                                    )} 
                                </div>
    
                                <div id="viewall-mobile-btn" className="col-12">
                                    <a href="#" className="pull-right viewall_home_mob">VIEW ALL <i className="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                            ):(<div></div>)}
                        </section>
                        <section id="landingpage-list-block" >
                            {productList[2]? (
							
                            <div className="col-12">
                                <div id="home-head">
                                    <h1><span>{productList[2].label}</span> <a href="#" className="pull-right viewall_home">VIEW ALL <i className="fa fa-angle-right"></i></a></h1>
                                </div>
                                <div className="row">
                                        
                                    {productList[2].items.items.map((item,key)=>

                                        <div key={key} className="col-md-2 col-6">
                                            
                                            <a href={pathName+item.url}>
                                                <div className="dealblock_thump">
                                                    <div className="thump_img">
                                                        <img  src={item.main_image} alt="" />
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
                                                            </p> )}
                                                    <h2>{item.price[currency][0].default_formated}</h2>
                                                </div>
                                            </a>
                                        </div>
                                    )} 
                                </div>
                                <div id="viewall-mobile-btn" className="col-12">
                                    <a href="#" className="pull-right viewall_home_mob">VIEW ALL <i className="fa fa-angle-right"></i></a>
									<div className="clearfix"></div>
                                </div>

							
                               
                            </div>
                            ):(<div></div>)}
                        </section>
						 <div id="pagedescription" className="row"> 
                                  <div className="col-12">
								  <h1>
                                      {this.props.category_name} in UAE
                                    </h1>
                                  {valueOfString!=null && 
                                    <p dangerouslySetInnerHTML={{__html: valueOfString}}/> 
                                     
                                  }
								  </div>
                              </div>
						
                    </div>
                    <div className="clearfix"></div>
                </div>
      );
    }
}
export default CategoryContent;
