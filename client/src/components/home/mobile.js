import React, { Component } from "react";
import * as constants from '../../helpers/constants';

import ImageLoader from 'react-load-image';
import PreLoader from '../../helpers/constants';

import Cookies from 'universal-cookie';

const localStorage = new Cookies();
class Mobile extends Component {

  render() {

 
    const banners = this.props.banners;
    const block = this.props.block;
    const products = this.props.products;
    const pathName = constants.getPathName();

    // let currency   = localStorage.getItem('currency')?(localStorage.getItem('currency')):'AED'; 
    let currency   = localStorage.get('currency')?(localStorage.get('currency')):'AED'; 
    

    return (
        <section id="smartphone_block">
    
        {products ? (

        <div className="container">
            <div className="row">
                {banners.items.map((item, index) => 
                    <div key={index} className="hero-banner-block">
                        <a href={pathName+item.url}>
                            <img src={item.image} alt={item.title}/>
                        </a>
                    </div>
                )}

                <div id="home-head">
                    <h1><span>{block.label}</span><a href={pathName+block.url} className="pull-right viewall_home">VIEW ALL<i className="fa fa-angle-right"></i></a></h1></div>

                
                {block.items.map((item, index) => 
                    <div key={item.title} className="dealblock_thump col-md-6 big_thump">
                        <a href={pathName+item.url}>
                            <div className="thump_img">
                                
                                <ImageLoader
                                    src={item.image}>
                                    <img/>
                                    <div><PreLoader /></div>
                                    <PreLoader />
                                </ImageLoader>
                            </div>
                                <h1 className="crop-text-2">{item.title}</h1>
                                
                                {item.offer ? (
                                    <p>
                                        <span className="oldprice">{item.price[currency][0].old_price_formated}</span> 
                                        <span className="percentage">{item.offer}</span>
                                    </p>
                                ) : (
                                    <p>
                                        <span className="no-offer">&nbsp;</span>
                                    </p>
                                )}
                            <h2>{item.price[currency][0].default_formated}</h2>
                        </a>
                     </div>
                )}


            
                <div className="col-md-6 smallthump">
                    <div className="row ">

                    {products.items.map((item, index) => 
                        <div key={item.title+index} className="col-6">
                            <a href={pathName+item.url}>
                                <div className="dealblock_thump botm_pad">
                                    <div className="thump_img">
                                         <ImageLoader
                                            src={item.image}>
                                            <img/>
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
                    <a href={pathName} className="pull-right viewall_home_mob">VIEW ALL <i className="fa fa-angle-right"></i></a>
            </div>
            <div className="clearfix"></div>
        </div>
    </div>
    ) : (<div></div>
    )}
   
    <div className="clearfix"></div>
    
</section>);
  }
}
export default Mobile;