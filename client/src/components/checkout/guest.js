import React, {Component} from 'react'
import { connect } from "react-redux";

import CheckoutNavigator from './CheckoutNavigator'
import CheckoutCartMenu from './CheckoutRight'
import CheckoutAddress from './CheckoutAddress'
import SignInPage from './CheckoutSignIn'

class Guest extends Component {

	constructor(props) {
		super (props)
	}
	componentDidMount(){

	}
	render(){

		const cartData = this.props.cart
		const address  = this.props.address

		return(
				<section id="checkout-page">
				    <div className="container">
				        <div className="row bs-wizard">
				            <div className="col-4 bs-wizard-step complete active">
				                <div className="text-center bs-wizard-stepnum">STEP 1</div>
				                <div className="progress">
				                    <div className="progress-bar"></div>
				                </div>
				                <a href="#" className="bs-wizard-dot"></a>
				                <div className="bs-wizard-info text-center">Customer Info</div>
				            </div>
				            <div className="col-4 bs-wizard-step disabled">
				                <div className="text-center bs-wizard-stepnum">STEP 2</div>
				                <div className="progress">
				                    <div className="progress-bar"></div>
				                </div>
				                <a href="#" className="bs-wizard-dot"></a>
				                <div className="bs-wizard-info text-center">Payment</div>
				            </div>
				            <div className="col-4 bs-wizard-step  disabled">
				                <div className="text-center bs-wizard-stepnum">STEP 3</div>
				                <div className="progress">
				                    <div className="progress-bar"></div>
				                </div>
				                <a href="#" className="bs-wizard-dot"></a>
				                <div className="bs-wizard-info text-center">Status</div>
				            </div>
				        </div>
				        <div id="cart-body" className="row ">
				            <div className="col-12 col-md-6 cart-left-body">
				                <div className="step_1">
				                    <div className="row justify-content-center">
				                        <div className="col-8 tittle-block">
				                            <h2 className="primary text-center ">
				                                New User
				                            </h2>
				                        </div>
				                    </div>
				                    <div className="row justify-content-center">
				                        <div className="col-10">
				                            <div className="form-group">
				                                <input type="text" id="fullname"  className="form-control cool-link" required/>
				                                <label className="form-control-placeholder" for="fullname">Full Name</label>
				                            </div>
				                        </div>
				                        <div className="col-10">
				                            <div className="form-group">
				                                <input type="text" id="email"  className="form-control cool-link" required/>
				                                <label className="form-control-placeholder" for="email">Email ID</label>
				                            </div>
				                        </div>
				                        <div className="col-10">
				                            <div className="form-group float-label-control" id="country">
				                                <select className="form-control" id="country-list">
				                                    <option >United Arab Emirates</option>
				                                    <option >China</option>
				                                    <option >India</option>
				                                    <option >Pakistan</option>
				                                    <option >Russia</option>
				                                    <option >United Arab Emirates</option>
				                                    <option >United Kingdom</option>
				                                    <option>United States of America</option>
				                                    <option>Zimbawe</option>
				                                </select>
				                                <label className="form-control-placeholder" for="country">Country</label>
				                            </div>
				                        </div>
				                        <div className="col-10">
				                            <div className="form-group">
				                                <input type="text" id="emirate" className="form-control cool-link" required/>
				                                <label className="form-control-placeholder" for="emirate">Emirate / State</label>
				                            </div>
				                        </div>
				                        <div className="col-10">
				                            <div className="form-group">
				                                <input type="text" id="city" className="form-control cool-link" required/>
				                                <label className="form-control-placeholder" for="city">City</label>
				                            </div>
				                        </div>
				                        <div className="col-10">
				                            <div className="form-group">
				                                <input type="text" id="address" className="form-control cool-link" required/>
				                                <label className="form-control-placeholder" for="address">Address - Bldg No. / Flat No. / Landmark / Street Name</label>
				                            </div>
				                            <div className="form-group">
				                                <textarea className="form-control" rows="2" id="address"></textarea>
				                                <label className="form-control-placeholder" for="address">Address - Bldg No. / Flat No. / Landmark / Street Name</label>
			                                </div>
				                        </div>
				                        <div className="col-10">
				                            <div className="form-group">
				                                <input type="text" id="postcode" className="form-control cool-link" required/>
				                                <label className="form-control-placeholder" for="postcode">Post Code</label>
				                            </div>
				                        </div>
				                        <div className="col-10">
				                            <div className="form-group">
				                                <input type="text" id="airmile" className="form-control cool-link" required/>
				                                <label className="form-control-placeholder" for="airmile">Mob Number</label>
			                                </div>
				                            <div className="form-row no-gutters">
				                                <div className="col-2">
				                                	<label  className="form-control-placeholder"  for="ph1">Country code</label>
				                                    <input type="text" value="+971"   className="form-control" id="ph1"/>
				                                </div>
				                                <div className="col-2">
				                                    <select className="form-control" id="country-list">
				                                        <option >050</option>
				                                        <option >051</option>
				                                        <option >056</option>
				                                        <option >055</option>
				                                    </select>
				                                    <label className="form-control-placeholder"  for="ph2">Area code</label>
				                                </div>
				                                <div className="col">
				                                    <input type="text" id="airmile" className="form-control cool-link" required/>
				                                    <label className="form-control-placeholder" for="airmile">Mob Number</label>
				                                </div>
				                            </div>
				                        </div>
				                        <div className="col-10">
				                            <div className="custom-control custom-checkbox my-1 mr-sm-2">
				                                <input type="checkbox" className="custom-control-input" id="customControlInline"/>
				                                <label className="custom-control-label" for="customControlInline">Register with us</label>
				                            </div>
				                        </div>
				                    </div>
				                    <div className="row justify-content-center">
				                        <div className="col-12 col-md-10 text-right">
				                            <button role="button" className="buynowbutton">
				                            Proceed to payment
				                            </button>
				                        </div>
				                    </div>
				                    <div className="clearfix"></div>
				                </div>
				                <div className="clearfix"></div>
				            </div>
				            <CheckoutSignIn/>
				            
				        </div>
				    </div>
				    <div className="clearfix"></div>
				</section>
			);
	}
}
export default Guest;