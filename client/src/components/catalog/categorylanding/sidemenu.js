
import React, { Component } from "react";


class SideMenu extends Component {

    constructor(props){
        super(props);
    }


    handleSelction = (e,url) => {

        window.open(url,'_self');

    }

            
        render() {

            const filters = this.props.filters;
            const filterOptions = Object.keys(filters).map(key => 
                    <option value={key}>{filters[key]}</option>);  

           console.log(filterOptions)

            return (
                <div  className="col-12 col-sm-2  left_filter landing-page">
                    <form>

                        {filterOptions.map((filter, index) => 

                        <div key = {filter.props.children.title} className="filtergroup">
                            <h2>{filter.props.children.title}</h2>
                            
                            <div id="collapseSummary" className="filteroptions_bllock collapse">
                                    
                                {filter.props.children.items.map((item, index) => 
                                <div key= {index} className="checkbox ty-compact-list">
                                    <label>
                                        <input type="checkbox"
                                            onClick={(e) => this.handleSelction(e,item.url)} 
                                            value="" />
                                            {item.title}
                                    </label>
                                </div>
                                )}
                            <div className="clearfix"></div>
                            </div>
                            {filter.props.children.items.length>6 &&
                                <a className="collapsed showlink" data-toggle="collapse" href="#collapseSummary" aria-expanded="false" aria-controls="collapseSummary"></a>
                               
                            }
                             <div className="clearfix"></div>
                        </div>
                        )}
                    </form>
                    <div className="clearfix"></div>
                </div>

            );
        }
    }
export default SideMenu;


