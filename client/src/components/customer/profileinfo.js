import React, {Component} from 'react';


class ProfileInfo extends Component {

	constructor (props){

		super()

	}
	render() {

		return (

			<div className="col-12 col-md-10 account-right-body">
			            	<h1>Dashboard</h1>
			                
			                <div className="row">
			                	<div className="col-12 tittle-block">
			                    	<h2>
			                        	Personal Iinformations
			                        	<span className="pull-right">
			                        		<a ><i className="fa fa-edit" onClick={(e)=>this.props.handleEditClick(2)}></i> Edit </a>
			                       		</span>
			                        </h2>
			                    </div>
			                 </div> 
			                   
			                 <div className="row">
			                    <div className="col-12 body-block-content">
			                    	<p>Tintu Thomas</p>
			                        <p>tintu@letstango.com</p>
			                        <p><a href="#">Change Password</a></p>
			                        <p>056 8686 9179 <span className="badge badge-success"><i className="fa fa-check"></i> verified</span></p>
			                    </div> 
			                </div>
			                
			                
			                
			                
			                 <div className="row">
			                	<div className="col-12 tittle-block">
			                    	<h2>
			                        	Address book
			                        	<span className="pull-right">
			                        		<a href="#"><i onClick={(e)=>this.props.handleEditClick(3)} className="fa fa-edit"></i> Edit </a>
			                       		</span>
			                        </h2>
			                    </div>
			                  </div> 
			                  <div className="row">   
			                    <div className="col-12 body-block-content">
			                    	<h3>Primary Shipping Address</h3>
			                        <p> Praveen Kumar
			                            Bur Dubai
			                            503
			                            Opal4
			                            Dubai, Dubai, 19953
			                            United Arab Emirates
			                            T: 0506823870 
			                        </p>
			                    </div> 
			                    
			                </div>
			                
			            <div className="clearfix"></div>
			            </div>

		);
	}
}
export default (ProfileInfo)