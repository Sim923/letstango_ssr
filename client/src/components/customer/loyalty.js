import React, { Component } from "react";

import LeftNavigation from './leftnavigation';

class Loyalty extends Component {

    addLoyalty = (code) => {

        // console.log(code+'_txt');
        // var codeTxtId = code+'_txt';
        // //var codeValue = document.getElementById(codeTxtId).value;
        // var codeValue = React.findDOMNode(this.refs.codeTxtId).value;
        // console.log(codeValue);
    }   

    render() {
    
        var loyaltyPrograms = this.props.loyalty;

        return (<section id="account-page">
                    <div className="container">
                        <div className="row">
                            <LeftNavigation selection={"loyalty"}/>
                            <div className="col-12 col-md-10 account-right-body">
                                <h1>Loyalty Programmes</h1>
                                <div className="loyalty">
                                    <div className="row">
                                        <div className="col-10 col-md-5 loyalty-form-block">
                                            { loyaltyPrograms.airmile ? 
                                                (
                                                    <div className="form-group">
                                                        <input type="text" id="airmile_txt" className="form-control cool-link" value={loyaltyPrograms.airmile.value} readOnly />
                                                        <label className="form-control-placeholder" htmlFor="airmile_txt">Airmile Number</label>
                                                    </div>
                                                    
                                                ) : (
                                                    <div className="form-group">
                                                        <input type="text" id="airmile_txt" className="form-control cool-link" required/>
                                                        <label className="form-control-placeholder" htmlFor="airmile_txt">Add Airmile Number</label>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="col-2">
                                            {loyaltyPrograms.airmile ? 
                                                (<button type="button" className="btn btn-dark">Remove</button>) 
                                                : 
                                                (<button type="button" className="btn btn-dark" onClick={this.addLoyalty('airmile')}>Add</button>) 
                                            }
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-10 col-md-5 loyalty-form-block">
                                            { loyaltyPrograms.jpmiles ? 
                                                (
                                                    <div className="form-group">
                                                        <input type="text" id="jpmile" className="form-control cool-link" value={loyaltyPrograms.jpmiles.value} readOnly />
                                                        <label className="form-control-placeholder" htmlFor="jpmile">JPMile Number</label>
                                                    </div>
                                                ) : (
                                                    <div className="form-group">
                                                        <input type="text" id="jpmile" className="form-control cool-link" required/>
                                                        <label className="form-control-placeholder" htmlFor="jpmile">Add JPMile Number</label>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="col-2">
                                            {loyaltyPrograms.jpmiles ? 
                                                (<button type="button" className="btn btn-dark">Remove</button>) 
                                                : 
                                                (<button type="button" className="btn btn-dark">Add</button>) 
                                            }
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-10 col-md-5 loyalty-form-block">

                                            { loyaltyPrograms.airewards ? 
                                                (
                                                    <div className="form-group">
                                                        <input type="text" id="airreward" className="form-control cool-link" value={loyaltyPrograms.airewards.value} readOnly/>
                                                        <label className="form-control-placeholder" htmlFor="airreward">Air Reward ID</label>
                                                    </div>
                                                ) : (
                                                    <div className="form-group">
                                                        <input type="text" id="airreward" className="form-control cool-link" />
                                                        <label className="form-control-placeholder" htmlFor="airreward">Add Air Reward ID</label>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="col-2">
                                            {loyaltyPrograms.airewards ? 
                                                (<button type="button" className="btn btn-dark">Remove</button>) 
                                                : 
                                                (<button type="button" className="btn btn-dark">Add</button>) 
                                            }
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </section>);
        }
}
export default Loyalty;