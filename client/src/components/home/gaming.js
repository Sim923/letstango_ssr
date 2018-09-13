import React, { Component } from "react";
import * as constants from '../../helpers/constants';

import ImageLoader from 'react-load-image';
import PreLoader from '../../helpers/constants';

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

class Gaming extends Component {

  render() {
    const products = this.props.products;
    const categories = this.props.categories;
    const pathName = constants.getPathName();

    //  let currency   = localStorage.getItem('currency')?(localStorage.getItem('currency')):'AED'; 
    let currency   = localStorage.get('currency')?(localStorage.get('currency')):'AED'; 
   

    return (<section id="gaming_block">
        <div className="container">
    {categories ? (
        <div>
            <div className="row">
                <div className="col-12 tittle_section">
                    <h1 className="blocktittle" >{categories.label}</h1>
                    <a href={pathName+categories.url} className="pull-right viewall_home">VIEW ALL <i className="fa fa-angle-right"></i></a>
                </div>
            </div>
            <div className="row topbanners">
                {categories.items.map((item, index) => 
                    <div  key={index} className="col-md-3 col-6">
                            
                         <a href={pathName+item.url}>  
                            <div className="dealblock_thump middleblock">
                                <div className="thump_img">
                                    <ImageLoader
                                            src={item.image}>
                                            <img/>
                                            <div><PreLoader /></div>
                                            <PreLoader />
                                    </ImageLoader>
                                    
                                </div>
                                <h1 className="crop-text-2">{item.title}</h1>
                            </div>
                        </a>
                    </div>
                )}

                <div id="viewall-mobile-btn" className="col-12">
                        <a href={pathName+categories.url} className="pull-right viewall_home_mob">VIEW ALL <i className="fa fa-angle-right"></i></a>
                 </div>
            </div>
        </div>) : (<span></span>)
    }
    {products ? 
        (<div className="row">
            <div id="home-head">
                <h1><span>{products.label}</span><a href={pathName} className="pull-right viewall_home">VIEW ALL<i className="fa fa-angle-right"></i></a></h1>
            </div>
            {products.items.map((item, index) => 
              <div key={index} className="col-md-2 col-6">
                    <a href={pathName+item.url}>
                      <div className="dealblock_thump">
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
                        ):(
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

            <div id="viewall-mobile-btn" className="col-12">
                <a href={pathName+categories.url} className="pull-right viewall_home_mob">VIEW ALL <i className="fa fa-angle-right"></i></a>
            </div>


        </div>
        ) : (<span></span>)
      }
      <div className="clearfix"></div>
    </div>
</section>);
  }
}
export default Gaming;