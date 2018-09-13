import React, { Component } from "react";
import * as constants from '../../helpers/constants';

import ImageLoader from 'react-load-image';
import PreLoader from '../../helpers/constants';

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

class Electronics extends Component {

  render() {

     const banners = this.props.banners;
     const block= this.props.block;
     const products= this.props.products;
     const pathName = constants.getPathName();

    //  let currency   = localStorage.getItem('currency')?(localStorage.getItem('currency')):'AED'; 
    let currency   = localStorage.get('currency')?(localStorage.get('currency')):'AED'; 

    return (<section id="electronic_block">
    <div className="container">

    {products ? (

        <div>
           <div className="row d-sm-none d-block">
                <div className="col-12 tittle_section">
                                    <h1 className="blocktittle" >{block.label}</h1>
                                    <a href={pathName+block.url} className="pull-right viewall_home">VIEW ALL <i className="fa fa-angle-right"></i></a>
                                </div>
                </div>

                <div className="row">
                    { block ? (
                    
                        <div className="dealblock_thump col-md-6 big_thump">
                            <a href={pathName+block.items[0].url}>
                                <div className="thump_img">
                                    
                                    <ImageLoader
                                    src={block.items[0].image}>
                                    <img />
                                    <div><PreLoader /></div>
                                    <PreLoader />
                                </ImageLoader>
                                    
                                     
                                </div>
                                    <h1 className="crop-text-2">{block.items[0].title}</h1>
                                        {block.items[0].offer ? (
                                            <p>
                                                <span className="oldprice">{block.items[0].price[currency][0].old_price_formated}</span> 
                                                <span className="percentage">{block.items[0].offer}</span>
                                            </p>
                                            ) : (
                                            <p>
                                                <span className="no-offer">&nbsp;</span>
                                            </p>
                                        )}

                                <h2>{block.items[0].price[currency][0].default_formated}</h2>
                      
                            </a>
                        </div>
                          
           

                    ) : (<div></div>) }


                    <div className="col-md-6 smallthump">
                        <div className="row d-none d-sm-block">
                            <div className="col-12 tittle_section">
                                <h1 className="blocktittle" >{block.label}</h1>
                                <a href={pathName+block.url} className="pull-right viewall_home">VIEW ALL <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                        <div className="row">
                        {products.items.map((item, index) => 
                            <div key={index} className="col-md-4 col-6 botm_pad">
                                <a href={pathName+item.url}>    
                                    <div className="dealblock_thump">
                                        <div className="thump_img">
                                           
                                             <ImageLoader
                                                src={item.image}>
                                                <img />
                                                <div><PreLoader /></div>
                                                <PreLoader />
                                            </ImageLoader>
                                        
                                        </div>
                                        <h1 className="crop-text-2">{item.title}</h1>
                                        {item.offer ? (
                                            <p>
                                                <span className="oldprice">{item.price[currency].old_price_formated}</span> 
                                                <span className="percentage">{item.offer}</span>
                                            </p>
                                            ) : (
                                            <p>
                                                <span className="no-offer">&nbsp;</span>
                                            </p>
                                            )
                                        }
                                        <h2>{item.price[currency].default_formated}</h2>
                                    </div>
                                </a>
                            </div>
                            )}
                        </div>
                    </div>

                    <div id="viewall-mobile-btn" className="col-12">
                            <a href={pathName+block.url} className="pull-right viewall_home_mob">VIEW ALL <i className="fa fa-angle-right"></i></a>
                    </div>
                    
                </div>

            </div>
        ) : (<span></span>
        )}


        </div>

    <div className="clearfix"></div>
</section>);
  }
}
export default Electronics;