import React , {Component} from 'react'

class AddEditAddress extends Component {

	constructor (props ){
		super (props)


	}

	render () {

		return ( 
				
				<div className="col-12 col-md-10 account-right-body">
            	<h1>Add Address</h1>
              
              <div className="profile">
                
                <div className="row">
                	<div className="col-12 tittle-block">
                    	<h3 className="primary">
                        	Personal Info
                        </h3>
                    </div>
                 </div>  
                
                <div className="row ">
            		<div className="col-12 col-md-4 loyalty-form-block">
                      <div className="form-group">
                        <input type="text" id="name" value="Tintu Thomas" className="form-control cool-link" required/>
                        <label className="form-control-placeholder" for="name">Full Name</label>
                      </div>
           			</div>
                    <div className="col-12 col-md-4 loyalty-form-block">
                      <div className="form-group">
                        <input type="text" id="email" value="tintu@letstango.com" className="form-control cool-link" required/>
                        <label className="form-control-placeholder" for="email">Email ID</label>
                      </div>
           			</div>
                    <div className="col-12 col-md-4 loyalty-form-block">
                      <div className="form-group">
                        <input type="text" id="mobile" value="0568746578" className="form-control cool-link" required/>
                        <label className="form-control-placeholder" for="mobile">Mobille Number</label>
                      </div>
           			</div>
                    
      			</div>
                
                <div className="row">
                	<div className="col-12 tittle-block">
                    	<h3 className="primary">
                        	Location Info
                        </h3>
                    </div>
                 </div> 
                
                 <div className="row ">
            		<div className="col-12 col-md-4 loyalty-form-block">
                      
                      <div className="form-group float-label-control" id="select-field">
                        
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
                    <div className="col-12 col-md-4 loyalty-form-block">
                                         <div className="form-group float-label-control" id="select-field">
                        
                        <select className="form-control" id="country-list">
                            <option >Dubai</option>
                            <option >Abu Dhabi</option>
                            <option >Sharjah</option>
                        </select>
                        <label className="form-control-placeholder" for="country">Country</label>
                    </div>
           			</div>
                    <div className="col-12 col-md-4 loyalty-form-block">
                      <div className="form-group">
                        <input type="text" id="city"  className="form-control cool-link" required/>
                        <label className="form-control-placeholder" for="city">City</label>
                      </div>
           			</div>
                    
      			</div>
                
                <div className="row ">
            		<div className="col-12 col-md-8 loyalty-form-block">
                      <div className="form-group">
                        <input type="text" id="address" className="form-control cool-link" required/>
                        <label className="form-control-placeholder" for="airmile">Bldg No. / Flat No. / Landmark / Street</label>
                      </div>
           			</div>
                    
                    <div className="col-4 col-md-4 loyalty-form-block">
                      <div className="form-group">
                        <input type="text" id="postcode"  className="form-control cool-link" required/>
                        <label className="form-control-placeholder" for="postcode">Post code</label>
                      </div>
           			</div>
      			</div>
                
     			
                
                
                <div className="row">
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
export default (AddEditAddress);

