import React, {Component} from 'react';
import LeftNavigation from './leftnavigation';
import ProfileInfo from './profileinfo';
import EditProfile from './editprofile';
import AddEditAddress from './add_editaddress';


var showProfile = 1;
var editProfile = 2;
var EditAddress = 3;

class Profile extends Component {

	constructor (props){

		super()

		this.state = {

			mode: editProfile,
			customerDetail: ''

		}
	}

	handleEditClick = (mode) =>{

		this.setState ( {mode :mode} )
	}


	render() {



		return (

		


			<section id="account-page">
				<div className="container">
			    	<div className="row">
			        
			        	<LeftNavigation selection={"profile"}/>

			 				
			        		{this.props.customer_details ? (
			 				<div>

				        	{(() => {
	                			switch (this.state.mode) {
	                  				case showProfile:   
	                      				return <ProfileInfo
												handleEditClick = {this.handleEditClick}
	                      						/>;
	                  				case editProfile:   
	                      				return <EditProfile
	                      						data = {this.props.customer_details}
	                      						/>;
	                  				case EditAddress:   
	                      				return <AddEditAddress />;
	                  				default:      
	                      				return ''
	                			}
	              			})()}

	              			</div>
							
							):(<div></div>)}
              		

			        </div>
			    </div>
			</section>
		);
	}
}
export default (Profile);

