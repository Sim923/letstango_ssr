/* eslint-disable */
import React, { Component } from "react";
import * as constants from '../../helpers/constants';
import { userActions } from '../../actions/signin';
import { connect } from "react-redux";

const pathName = constants.getPathName();

class Register extends Component {

	constructor(porps){
		super()


		this.state = {

			fullname: '',
			email: '',
			subscription: '1',
			password: ''

		}

		this.onSubmit = this.onSubmit.bind(this)
		this.onCreateAccount = this.onCreateAccount.bind(this)

	}
	handleChange(e) {

		const { name, value } = e.target;
        this.setState({ [name]: value });

		
 
  	}
	onSubmit(event){
		event.preventDefault();
		const { fullname, email, password } = this.state;
        const { dispatch } = this.props;

			if (email && password && fullname) {
            	dispatch(userActions.signup(fullname,email, password)).then((response) => {

	            if (response.data!=null) {
	            	if (response.data.status==1) {
							
							showSuccessToast("Success","Welcome to Letstango.com")

	    					setTimeout(function() { 
	        					window.history.back();
	        				}.bind(this), 2000)

	            	}else{
							showErrorToast("Error",response.data.message)
	            	}
	               

	            }else{
	               showErrorToast("Error",response.data.message)
	            }
              })
          .catch(err => console.log("Axios err: ", err));
        }

	}
	onCreateAccount(event){
		event.preventDefault();
		window.open("/login",'_self');
	}
 
	render(){

		return(

		<div id="wraper">
		
				<section id="loginpage">
					<div className="container">
      					<div className="row justify-content-md-center">
       						<div className="col-6 tittle-block text-center">
            					<a href={pathName}>
            						<img src="/images/lets-tango-logo-light.png" srcSet="/images/lets-tango-logo-light.png 1x, /images/lets-tango-logo-light-2x.png 2x, /images/lets-tango-logo-light-3x.png 3x" alt="LetsTango.com" />
	                 			</a>
	                 			<h5>Register</h5>
        					</div>
     					</div>
      					<div className="row justify-content-md-center">
       						<div className="col-12 col-md-5 login-form-block">
		               			<form>
		               			  	<div className="form-group">
		                        		<input name="fullname" value={this.state.fullname} onChange={this.handleChange.bind(this)} type="text" id="name" className="form-control" required/>
		                        		<label className="form-control-placeholder" htmlFor="email">Fullname</label>
	                      			</div>
	                      			<div className="form-group">
		                        		<input name="email" value={this.state.email} onChange={this.handleChange.bind(this)} type="email" id="email" className="form-control" required/>
		                        		<label className="form-control-placeholder" htmlFor="email">Email</label>
	                      			</div>
	                      			<div className="form-group">
	                        			<input name="password" value={this.state.password} onChange={this.handleChange.bind(this)} type="password" id="password" className="form-control" autoComplete="off" required />
	                        			<label className="form-control-placeholder" htmlFor="password">Password</label>
	                      			</div>
		                      		<div className="button-container text-center">
	                          			<button type="submit" className="btn btn-dark" onClick={this.onSubmit} >Sign up</button>
		                          		<p></p>
				                         <button type="submit" className="btn btn-outline-dark" onClick={this.onCreateAccount}>Login</button>
	                      			</div>
	                			</form>
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
function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}
export default connect(mapStateToProps) (Register);
