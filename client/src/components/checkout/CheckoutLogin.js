/* eslint-disable */
import React, {Component} from 'react'
import { connect } 			from "react-redux";
import { userActions } from '../../actions/signin';
class CheckoutLogin extends Component {

	constructor(props){
		super(props)

		 this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGuestCheckout = this.handleGuestCheckout.bind(this);
	}
	handleChange(e) {

        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password)).then((response) => {

            if (response.data!=null) {
            	if (response.data.status==1) {
						
            		showSuccessToast("Login success",response.data.message)
    					setTimeout(function() { 
        					location.reload();
        				}.bind(this), 200)

            	}else{
							showErrorToast("Login error",response.data.message)
            	}
               

            }else{
                console.log("error")
            }
              })
          .catch(err => console.log("Axios err: ", err));
        }
    }
    handleGuestCheckout (event) {
    	this.props.onGuestLogin(true);
    }

    handleRegister = () => {

    	


    }
    handleForgotPassword = () => {

    }


	render() {


			const { username, password, submitted } = this.state;

		return(
			<div id="cart-body" className="row justify-content-center">

				
				<div  className="col-12 col-sm-4 col-xl-4 checkout-login-body">
						<span className="plant"><img src="images/checkout-log-bg.png"/></span>
		                <div className="row justify-content-center">
		                	<div className="col-8 tittle-block">
		                    	<h2 className="primary-log text-center ">
		                        	 Log in
		                        </h2>
		                    </div>
		                 </div>
		               	<form  data-toggle="validator" onSubmit={this.handleSubmit}>
		                 <div className="row justify-content-center">
		                 	
		                 	<div className="col-12">
		                      <div className="form-group">
		                        <input type="tetx" id="username" name="username" value={username} onChange={this.handleChange}  className="form-control cool-link" required/>
		                        <label className="form-control-placeholder" htmlFor="username">Email ID</label>
		                      </div>
		           			</div>
		                    
		                    <div className="col-12">
		                      <div className="form-group">
		                        <input type="password" id="password" name="password" value={password} onChange={this.handleChange}  className="form-control cool-link" required/>
		                        <label className="form-control-placeholder" htmlFor="password">Password</label>
		                      </div>
		           			</div>
		                 </div>
		                  <div className="row justify-content-center">
		                	<div className="col-12 text-center">
		                    		<button role="button" className="buynowbutton">
		                                             Log in
		                          </button>
		                        <p className="forget-link col-12">
		                        	<a className="pull-left" onClick={this.handleForgotPassword}>Forget password?</a>
		                            <a className="pull-right" href="#">Register with us</a>
		                        </p>
		                        
		                        <button role="button" className="guestbutton" onClick={this.handleGuestCheckout}>
		                                             Continue as guest
		                          </button>
		                    </div>
		                </div>
		                   
		            <div className="clearfix"></div>
		            </form>
		            </div>



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
export default connect(mapStateToProps)(CheckoutLogin)


