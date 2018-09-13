import React, { Component } from "react";
import * as constants from '../../../helpers/constants';

class CategoryBanner extends Component {
    render() {

        const mainbanners = this.props.hero_banners
        const pathName = constants.getPathName();

        return (

            <div>
                <div id="tille-block" className="row align-items-center landingpage">
                    <div  className="col-12">
                        <h1 className="tittle inner-land"><span>{this.props.category_name}</span></h1>
                        <div id="category-sort-option" className="dropdown pull-right sortoption-desktop"> 
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
                <section id="hero-slider">
                    <div>
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <ul className="carousel-indicators">
                                {mainbanners.map((item, index) =>     
                                    <li key={index} data-target="#myCarousel" data-slide-to={index}   className= {index ? ("") : ("active")}></li>
                                )}
                            </ul>
                            <div className="carousel-inner"> 
                                {mainbanners.map((item, index) => 
                                    <div key={index} className= {index ? ("carousel-item") : ("carousel-item active") }>
                                        <a href = {pathName+item.url}>
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
                    </div>
                </section>
            </div>
        );
    }
}
export default CategoryBanner;