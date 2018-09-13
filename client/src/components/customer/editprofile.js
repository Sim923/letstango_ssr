import React , { Component } from 'react';

class EditProfile extends Component {


	constructor (props){

		super ()

	}
	render (){

		const customer = this.props.data
		console.log(customer)


		return (

			        <div className="col-12 col-md-10 account-right-body">
			            	<h1>Profile</h1>
			              
			              <div className="profile">
			                
			                <div className="row">
			                	<div className="col-12 tittle-block">
			                    	<h3 className="primary">
			                        	Personal Info
			                        </h3>
			                    </div>
			                 </div>  
			                
			                 	<div className="row">
                                        <div className="col-10 col-md-5 loyalty-form-block">
                                            
                                            <div className="form-group">
                                                <input type="text" id="airmile_txt" value={customer.customer_name} className="form-control cool-link" required/>
                                                <label className="form-control-placeholder" htmlFor="airmile_txt">Full Name</label>
                                            </div>
                                            
                                        </div>
                                        <div className="col-2">
                                           <button type="button" className="btn btn-dark" >Save</button>
                                        </div>
                                    </div>
			                	<div className="row ">
				            		
				                    <div className="col-10 col-md-5 loyalty-form-block">
				                      <div className="form-group">
				                        <input type="text" id="airmile" value={customer.email} className="form-control cool-link disabled" required/>
				                        <label className="form-control-placeholder" for="airmile">Email ID</label>
				                      </div>
				           			</div>
				                    
			                    
			      			</div>
			                <div className="row">
			                	<div className="col-12 tittle-block">
			                    	<h3 className="primary">
			                        	Security Info
			                        </h3>
			                    </div>
			                 </div>  
			                
			                <div className="row ">
			                	<div className="col-12">
			                    	<div className="custom-control custom-checkbox my-1 mr-sm-2">
			                            <input type="checkbox" className="custom-control-input" id="customControlInline"/>
			                            <label className="custom-control-label" for="customControlInline">Change password</label>
			                        </div>
			                    </div>
			            		<div className="col-12 col-md-3 loyalty-form-block">
			                      <div className="form-group">
			                        <input type="tetx" id="airmile"  className="form-control cool-link" required/>
			                        <label className="form-control-placeholder" for="airmile">Current password</label>
			                      </div>
			           			</div>
			                    <div className="col-12 col-md-3 loyalty-form-block">
			                      <div className="form-group">
			                        <input type="text" id="airmile"  className="form-control cool-link" required/>
			                        <label className="form-control-placeholder" for="airmile">New Password</label>
			                      </div>
			           			</div>
			                    <div className="col-12 col-md-3 loyalty-form-block">
			                      <div className="form-group">
			                        <input type="text" id="airmile" className="form-control cool-link" required/>
			                        <label className="form-control-placeholder" for="airmile">Confirm Password</label>
			                      </div>
			           			</div>
			           			<div className="col-12 col-md-3">
			                    	<button className="btn btn-dark">UPDATE</button>
			                    </div>
			                    
			      			</div>
			                <div className="clearfix"></div>
			                </div>
			                
			            <div className="clearfix"></div>
			        </div>
		);


	}
}
export default (EditProfile);

