import React, { Component } from "react";

import SideMenu from "./categorylanding/sidemenu"
import Banners from "./categorylanding/banners"
import Content from "./categorylanding/content"

class CategoryLanding extends Component {
    render() {
        return (


        <section id="category_list_page">
            <div className="row">
                <SideMenu {...this.props}/>
                <div className="col-md-10 col-12 right-category_body">
                    <Banners {...this.props}/>
                    <Content {...this.props}/>
                </div>
            </div>
            <div className="clearfix"></div>
        </section>
    );
    }
}
export default CategoryLanding;
