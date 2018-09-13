/* eslint-disable */
import React, { Component } from "react";
import Register from "..//components/loginandregister/register"
import Login from "..//components/loginandregister/login"
import ForgotPassword from "..//components/loginandregister/forgotpassword"
import PageNotFound from "../components/common/pagenotfound";
import * as constants from '../helpers/constants';

class LoginReg extends Component {
	render(){
        // const locationPath 	= location.pathname
        const locationPath 	= '/'
		const pathname 		= constants.getPathName();
		console.log(locationPath)
		return(
		
            <div>
              {(() => {
                switch (locationPath) {
                  case pathname+"login":   
                      return <Login/>;
                  case pathname+"register":   
                      return <Register/>;
                  case pathname+"forgotpassword":   
                      return <ForgotPassword/>;
                  default:      
                      return <PageNotFound/>;
                }
              })()}

            </div>         
         


		);
	}

}
export default LoginReg; 