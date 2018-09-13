import React, {Component} from 'react';
import LeftNavigation from './leftnavigation';
import AddEditAddress from './add_editaddress';

var showNewAddress = false
var otherAddress =[]
class AddressBook extends Component {

	constructor (props){

		super()

		this.state = {

				mode : false
		}


	}
	addNewAddress = () => {

		this.setState ({mode: true})

	}
	componentDidMount(){
		
	}


	render() {

		const address = this.props.address
		
		const addresstest = this.props.address
		if(addresstest.addresses){
			otherAddress = addresstest.addresses
		}

			console.log(otherAddress)

		return (


			<section id="account-page">
					<div className="container">
				    	<div className="row">
				       
				        	<LeftNavigation selection={"addressbook"} />


				        	{(() => {
	                			switch (this.state.mode) {
	                  				case false:   
	                      				return <div className="col-12 col-md-10 account-right-body">
				                <h1>Addresses <span className="pull-right"><button className="btn btn-dark btn-sm" onClick={(e)=>this.addNewAddress()}><i className="fa fa-plus"></i> ADD NEW ADDRESS</button></span> </h1>
				            
				            	{address.addresses ? ( 

						            <div>    
						                {address.addresses[0].address_id == address.default_address_id &&

						                <div>
						                	<div className="row top-margin">
						                	<div className="col-12 tittle-block">
						                    	<h3 className="primary">
						                        	Primary Address
						                        </h3>
						                    </div>
						                 </div> 
										
						                 <div className="row adress-block align-items-center"> 
						                    <div className="col-md-2">
						                    	<label>Name</label>
						                        <p>{address.addresses[0].name}</p>
						                    </div>
						                    <div className="col-md-6">
						                    	<label>Address</label>
						                        <p className="crop-text-1">{(address.addresses[0].area).join()+", "+(address.addresses[0].region)+", "+(address.addresses[0].city)}</p>
						                    </div>
						                    
						                    <div className="col-md-2">
						                    	<label>Telephone</label>
						                        <p>{address.addresses[0].telephone}</p>
						                    </div>
						                    
						                    <div className="col-md-2 text-right">
						                    <button className="btn btn-outline-dark"><i className="fa fa-edit"></i></button>
						                    	<button className="btn btn-dark"><i className="fa fa-trash"></i></button>
						                    </div>
						                </div>
						                </div>
						                }

						                {otherAddress && 
											<div className="row top-margin">
							                	<div className="col-12 tittle-block">
							                    	<h3 className="primary">
							                        	Other Addresses
							                        </h3>
							                    </div>
							                 </div>
						                }
						                

						                {otherAddress.map((item,key)=>

											<div key={key} className="row adress-block align-items-center"> 
							                    <div className="col-md-2">
							                    	<label>Name</label>
							                        <p>{item.name}</p>
							                    </div>
							                    <div className="col-md-6">
							                    	<label>Address</label>
							                       <p className="crop-text-1">{(item.area).join()+", "+(item.region)+", "+(item.city)}</p>
							                    </div>
							                    
							                    <div className="col-md-2">
							                    	<label>Telephone</label>
							                        <p>{item.telephone}</p>
							                    </div>
							                    
							                    <div className="col-md-2 text-right">
							                    <button className="btn btn-outline-dark"><i className="fa fa-edit"></i></button>
							                    	<button className="btn btn-dark"><i className="fa fa-trash"></i></button>
							                    </div>
							                </div>


						                )}  
						                 
						            </div> 
						          ):(<div></div>)}
				            

				            <div className="clearfix"></div>
				            </div>;
	                  				
	                  				case true:   
	                      				return <AddEditAddress />;
	                  				default:      
	                      				return ''
	                			}
	              			})()}




				           
				            

				      
				      
				        </div>
				    </div>
				    <div className="clearfix"></div>
				</section>


		);
	}
}
export default (AddressBook);