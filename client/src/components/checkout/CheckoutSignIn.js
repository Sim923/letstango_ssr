/* eslint-disable */
import React,{Component} from 'react';
import { connect } from "react-redux";
import { userActions } from '../../actions/signin';
import { ToastContainer, toast } from 'react-toastify';
import * as constants from '../../helpers/constants';

class CheckoutSignIn extends Component {

	constructor(props){
		super(props)

		 this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
						toast.success("Welcome back to Letstango.com !", {
      								position: toast.POSITION.TOP_CENTER
    					});

    					setTimeout(function() { 
        					location.reload();
        				}.bind(this), 200)

            	}else{
						toast.error("Invalid Email or password", {
      						position: toast.POSITION.TOP_CENTER
    					});
            	}
               

            }else{
                console.log("error")
            }
              })
          .catch(err => console.log("Axios err: ", err));
        }
    }

	render() {

		const { username, password, submitted } = this.state;

		return(

			<div  className="col-12 col-sm-4 cart-right-body">
				
                <div className="row justify-content-center">
                	<div className="col-12 col-md-8 tittle-block">
                    	<h2 className="primary text-center ">
                        	 REGISTERED User
                        </h2>
                    </div>
                 </div>
                 <form  data-toggle="validator" onSubmit={this.handleSubmit}>
                 <div className="row justify-content-center">
                 	<div className="col-12 col-md-8">
                      <div className="form-group">
                        <input type="tetx" id="username" name="username" value={username} onChange={this.handleChange}  className="form-control cool-link" required/>
                        <label className="form-control-placeholder" htmlFor="username">Email ID</label>
                      </div>
           			</div>
                    
                    <div className="col-12 col-md-8">
                      <div className="form-group">
                        <input type="password" id="password" name="password" value={password} onChange={this.handleChange}  className="form-control cool-link" required/>
                        <label className="form-control-placeholder" htmlFor="password">Password</label>
                      </div>
           			</div>
                 </div>
                  <div className="row justify-content-center">
                	<div className="col-12 col-md-8 login-button-container-checkout">
                    	<button type="submit" role="button" className="buynowbutton">
                                             Log in
                          </button>
                        <p className="forget-link">
                        	<a href="#">Forget password?</a>
                        </p>
                    </div>
                </div>
                </form>
                   
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
export default connect(mapStateToProps)(CheckoutSignIn);

