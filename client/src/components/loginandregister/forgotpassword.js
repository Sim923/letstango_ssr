import React, { Component } from 'react'
import * as constants from '../../helpers/constants';

const pathName = constants.getPathName();

class ForgotPassword extends Component {

	constructor (props) {
		super(props)

	}

	render () {

		return (


			<div id="wraper">

                <section id="loginpage">

                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-6 tittle-block text-center">
                                <a href={pathName}>
                                    <img src="https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light.png" srcSet="https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light.png 1x, https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light-2x.png 2x, https://www.letstango.com/skin/frontend/default/ltdefault/images/lets-tango-logo-light-3x.png 3x" alt="LetsTango.com" />
                                </a>
                                <h5>Forgot Password</h5>
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col-12 col-md-5 login-form-block">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input name="username" type="text" id="username" className="form-control" required />
                                        <label className="form-control-placeholder" htmlFor="password">Email</label>
                                        
                                    </div>
                                   
                                </form>
                                <button className="btn btn-outline-dark">Submit</button>
                            </div>
                        </div>
                    </div>
                <div className="clearfix"></div>
                </section>
            <div className="clearfix"></div>
            </div>
		);


	}


}
export default (ForgotPassword);