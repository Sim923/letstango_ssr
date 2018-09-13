import React, { Component } from "react";

class Blog extends Component {

  render() {

    return (
    <section id="blog_section_block">
        <div className="container">
            <div className="row">
                <div id="home-head">
                    <h1><span>LETSTALK</span><a href="#" className="pull-right viewall_home">VIEW ALL<i className="fa fa-angle-right"></i></a></h1>
                </div>
                <div className="col-md-3 col-6">
                    <div className="dealblock_thump">
                        <a href="https://blog.letstango.com/the-five-best-smart-helmets-for-bikers-and-motorcyclists/">
                            <div className="thump_img">
                                <img  src="https://blog.letstango.com/wp-content/uploads/2018/06/helmet.jpg" alt="" />
                            </div>
                            <h1 className="crop-text-2">Graphics or Performance – What to Look for in a Gaming Laptop?</h1>
                        </a>
                    </div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="dealblock_thump">
                        <a href="https://blog.letstango.com/google-home-vs-amazon-alexa-which-is-the-right-one-for-you/">
                            <div className="thump_img">
                                <img  src="https://blog.letstango.com/wp-content/uploads/2018/06/google-home.jpg" alt="" />
                            </div>
                            <h1 className="crop-text-2">Graphics or Performance – What to Look for in a Gaming Laptop?</h1>
                        </a>
                    </div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="dealblock_thump">
                        <a href="https://blog.letstango.com/canon-vs-nikon-which-gives-the-best-shot/">
                            <div className="thump_img">
                                <img  src="https://blog.letstango.com/wp-content/uploads/2018/06/canon.jpg" alt="" />
                            </div>
                            <h1 className="crop-text-2">Graphics or Performance – What to Look for in a Gaming Laptop?</h1>
                        </a>
                    </div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="dealblock_thump">
                        <a href="https://blog.letstango.com/the-best-photo-apps-in-2018-for-your-apple-iphone/">
                            <div className="thump_img">
                                <img  src="https://blog.letstango.com/wp-content/uploads/2018/04/hero-iphone.jpg" alt=""/>
                            </div>
                            <h1 className="crop-text-2">The Best Photo Apps in 2018 for Your Apple iPhone</h1>
                        </a>
                    </div>
                </div>
                <div id="viewall-mobile-btn" className="col-12">
                    <a href="#" className="pull-right viewall_home_mob">VIEW ALL <i className="fa fa-angle-right"></i></a>
                </div>
            </div>
        </div>
        <div className="clearfix"></div>
    </section>);
  }
}
export default Blog;