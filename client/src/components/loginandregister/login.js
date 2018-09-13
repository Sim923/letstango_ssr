/* eslint-disable */
import React from 'react';
import { connect } from "react-redux";
import { userActions } from '../../actions/signin';
import { ToastContainer, toast } from 'react-toastify';
import * as constants from '../../helpers/constants';
import { initialization } from '../../helpers';

const pathName = constants.getPathName();


class Login extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){

    }

    onCreateAccount = () => {


        window.open(pathName+"register", "_self");

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

				      

    					setTimeout(function() { 
        					window.history.back();
        				}.bind(this), 200)

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

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
       
        
        return (


            <div id="wraper">

                <section id="loginpage">

                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-6 tittle-block text-center">
                                <a href={pathName}>
                                    <img src="/images/lets-tango-logo-light.png" srcSet="/images/lets-tango-logo-light.png 1x, /images/lets-tango-logo-light-2x.png 2x, /images/lets-tango-logo-light-3x.png 3x" alt="LetsTango.com" />
                                </a>
                                <h5>Login</h5>
                            </div>
                        </div>


                        <div role="form" className="row justify-content-md-center">
                            <div className="col-12 col-md-5 login-form-block">
                            
                                <form id="info" data-toggle="validator" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input name="username" value={username} onChange={this.handleChange} type="text" id="username" className="form-control" data-error="Bruh, that email address is invalid" required />
                                        <label className="form-control-placeholder" htmlFor="username">Email</label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <input name="password" value={password} onChange={this.handleChange} type="password" id="password" className="form-control" required />
                                        <label className="form-control-placeholder" htmlFor="password">Password</label>
                                        
                                    </div>
                                    <div className="button-container text-center">
                                        <button type="submit" className="btn btn-dark">Submit</button>
                                        <p><a href={pathName+"forgotpassword"}>Forget password</a></p>
                                         
                                    </div>
                                </form>
                                <button className="btn btn-outline-dark" onClick={()=>this.onCreateAccount()}>Create Account</button>
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


export default connect(mapStateToProps)(Login);

