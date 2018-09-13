/* eslint-disable */
import React, {Component} from 'react'
import { BrowserRouter as Router,
         Link } from 'react-router-dom';
import { userService } from '../../helpers';
import * as constants from '../../helpers/constants';

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

// var   customerId    = localStorage.getItem('customer_id')?(localStorage.getItem('customer_id')):'';
var   customerId    = localStorage.get('customer_id')?(localStorage.get('customer_id')):'';
class CheckoutAddress extends Component {

	constructor(props) {
		super (props)
    this.state = {

          addNewAddress: true,
          countryList: [],
          stateList:[],
          areaList:[],
          fullName:'',
          emailId:'',
          selectedCountry:"United Arab Emirates",
          selcetedCity:"Dubai",
          selcetedRegion:'Select region',
          address:'',
          postCode:'',
          mobileCode:'971',
          mobileNo:'',
          selectedCountryCode:"AE",
          isRegisterWithus:'',
          selectedAddress:'',
          isValid:true,
          checkoutData:''
          

  }

    this.handleChange     = this.handleChange.bind(this)
    this.radioButtonClick = this.radioButtonClick.bind(this)
    this.handleSubmit     = this.handleSubmit.bind(this)
   
	}

  componentWillReceiveProps(newprops){

      if(newprops)
        if((typeof newprops.address.default_address_id !== 'undefined'))
          this.setState({selectedAddress:newprops.address.default_address_id,
                          addNewAddress:true})
  }

  componentDidMount(){

    if((typeof this.props.address !== 'undefined')){
   
        if(typeof this.props.address.default_address_id === 'undefined'){
           this.setState({addNewAddress:false})
        }
      }
    

    this.getCountry();
    this.getState(this.state.selectedCountryCode)
    this.getArea(this.state.selcetedCity);
  }

  handleChange(e) {
        
        const { name, value } = e.target;
        this.setState({ [name]: value });
    
  }
  radioButtonClick(e) {
        
      
        const { name, id } = e.target;
        this.setState({ [name]: id ,addNewAddress:true });
       
  }

  handleSubmit (event) {

   event.preventDefault();


    const data          = this.props.address
    
    // var   quoteId       = localStorage.getItem('quote_id')?(localStorage.getItem('quote_id')):'';
    var   quoteId       = localStorage.get('quote_id')?(localStorage.get('quote_id')):'';
    var   addressId     = ""
    var   addressDetail = ''
    
    var   defaultAddressId = this.state.selectedAddress
    if(defaultAddressId === '') {

        if ((typeof data !== 'undefined'))
            if ((typeof data.default_address_id !== 'undefined'))
                defaultAddressId =  data.default_address_id
    }


    if(!this.state.addNewAddress){

      if(this.state.selectedCountryCode =="AE"){

        if(this.state.selcetedRegion == "Select region") {
            alert("Please Select region") 
            return;
        }

      }
        addressDetail= {

                      "customer_name" : this.state.fullName,
                      "email"         : this.state.emailId,
                      "address"       : this.state.address,
                      "region"        : this.state.selcetedRegion,
                      "city"          : this.state.selcetedCity,
                      "postcode"      : this.state.postCode,
                      "country"       : this.state.selectedCountryCode,
                      "telephone"     : this.state.mobileCode+this.state.mobileNo,

                    }

    console.log("1")

    }else{

      for(var i=0;i<data.addresses.length;i++){

        if(defaultAddressId == data.addresses[i].address_id){
          addressDetail= {"customer_name" : data.addresses[i].name,
                          "email"         : data.addresses[i].name,
                          "address"       : data.addresses[i].area.join(),
                          "region"        : data.addresses[i].region,
                          "city"          : data.addresses[i].city,
                          "postcode"      : data.addresses[i].zipcode,
                          "country"       : data.addresses[i].country,
                          "telephone"     : data.addresses[i].telephone
                        }
                  addressId = data.addresses[i].address_id
          }
      }
          console.log("2")
    }

    let requestParams = JSON.stringify({
            customer_id : customerId,
            address_id  : addressId,
            quote_id    : quoteId,
            address_details:addressDetail,

        })

    console.log(requestParams)
    this.handleServerReq(requestParams)
    
  }

  handleServerReq (requestParams){

    userService.setquoteaddress(requestParams).
        then((response) => {

                if (response!=null&&response.data!=null) {
                  
                    if (response.data.status==1) {

                  
                    this.setState({checkoutData:requestParams})
                    var linkToClick = document.getElementById('link');
                        linkToClick.click();
                      
                    }else{

                      showErrorToast("Error",response.data.message)

                    }
                 
                }
              })
              .catch(err => console.log("Axios err: ", err))


  }
 

  onCountryChange = (event) => {
   
   const country    = event.target.selectedOptions[0].text
   var countrycode  = event.target.value
   var emeirates    = country=="United Arab Emirates"?"Dubai":''
   var region       = country=="United Arab Emirates"?"Select region":''

    this.setState({selectedCountry:country,
                    selectedCountryCode:countrycode,
                    selcetedCity:emeirates,
                    selcetedRegion:region
                    })
    this.getTelephoneCode(countrycode)
  }
   onCityChange = (event) => {
   const city    = event.target.value
   
  
    this.setState({selcetedCity:city,
                    })
    this.getArea(city)
  }
  onRegionChange = (event) => {
   const region    = event.target.value
  
    this.setState({selcetedRegion:region,
                    })
  }

  showAaddNewAddress = (event) => {

  
      this.setState({selectedAddress:'',
      addNewAddress:!this.state.addNewAddress})
        
        const targetId  = event.target.id;
        const newVlue = targetId.replace("#", '')


        setTimeout(function() { //Start the timer        
        console.log(newVlue)
        const container = document.getElementById(newVlue)
        smoothScroll(container)
        }.bind(this), 100)

    

  }

  getCountry = () =>{

    userService.getCountry().
      then((response) => {

              if (response!=null&&response.data!=null) {

                  this.setState({countryList:response.data.allowed_countries})
              }
            })
            .catch(err => console.log("Axios err: ", err))

  }
  getState = (country) => {

    userService.getState(country).
      then((response) => {

              if (response!=null&&response.data!=null) {

                  this.setState({stateList:response.data.states})
                 
              }
            })
            .catch(err => console.log("Axios err: ", err))


  }
  getArea =  (statecode) => {

    userService.getArea(statecode).
      then((response) => {

              if (response!=null&&response.data!=null) {

                  const areaArray = ["Select region",...response.data.area_codes]

                  this.setState({areaList:areaArray})
              }
            })
            .catch(err => console.log("Axios err: ", err))

          
  }

    getTelephoneCode =  (countryCode) => {
    userService.getTelephoneCode(countryCode).
      then((response) => {

              if (response!=null&&response.data!=null) {

                  this.setState({mobileCode:response.data.telephone_code})
              }
            })
            .catch(err => console.log("Axios err: ", err))

          
  }

	render(){
		
    const data = this.props.address
    const { fullName, emailId, selectedCountry,selcetedCity,selcetedRegion,
          address,postCode,mobileCode,mobileNo,selectedCountryCode,selectedAddress} = this.state;
    const pathName = constants.getPathName();
        

    return(
  
			<div className="col-12 col-md-10 cart-left-body">
       
              <div className="step_1">
                
			
                <div className="row justify-content-center align-items-center">
                	<div className="col-12 col-md-10 tittle-block">
                    	<h3 className="primary">
                        	Shipping info
                        </h3>
						  
                  {(data.addresses && this.state.addNewAddress) && 
    						      <button id="addaddress#" role="button" className="product-notification-button pull-right" onClick={this.showAaddNewAddress}>
                                                 Add new address
                      </button>
						      }
                    </div>
                 </div>
                 
                 {data.addresses && 

                 
                   <div>

                   {data.addresses.map((item,key)=>
                    <div key={key} className="row justify-content-center">
                      <div className="col-11 col-md-10 address-block">
                          <p><strong>{item.name}</strong></p>
                            <p>{(item.area).join()}</p>
                            <p>{(item.city)+", "+(item.state)}</p>
                            <p>Mob: {item.telephone}</p>
                            <span className="edit-adress">
                              <div className="custom-control custom-radio custom-control-inline ">
                                  <input type="radio" id={item.address_id} name="selectedAddress" value={selectedAddress} onChange={this.radioButtonClick} checked={item.address_id==selectedAddress} className="custom-control-input"/>
                                  <label className="custom-control-label" htmlFor={item.address_id}>Choose </label>
                                </div>
                            </span>
                        </div>
                     </div>


                    )}
                   
                  </div>
              }

              <form  onSubmit={this.handleSubmit}> 
              {!this.state.addNewAddress && 
                
              <div id="addaddress" className="row justify-content-center">
                	
            		<div className="col-12 col-md-5">
                      <div className="form-group">
                        <input type="tetx" id="fullname" name="fullName" value={fullName} onChange={this.handleChange}  className="form-control cool-link" required/>
                        <label className="form-control-placeholder" htmlFor="fullname">Full Name</label>
                        <div className="help-block with-errors"></div>
                      </div>
           			</div>
                    
                    <div className="col-12 col-md-5">
                      <div className="form-group">
                        <input type="email " id="email"  name="emailId" value={emailId} onChange={this.handleChange} className="form-control cool-link" required/>
                        <label className="form-control-placeholder" htmlFor="email">Email ID</label>
                      </div>
           			</div>
                    
                  <div className="col-12 col-md-5">
                      <div className="form-group float-label-control" id="country">
                        
                        <select className="form-control" id="country-list" defaultValue = {selectedCountry} 
                              onChange={this.onCountryChange}>
                          {this.state.countryList.map((item,key)=>
                              <option value = {item.value} key={key}>{item.label}</option>
                            )}
                            
                        </select>
                        <label className="form-control-placeholder" htmlFor="country">Country</label>
                      </div>
           			  </div>
                    
                    <div className="col-12 col-md-5">
                    {selectedCountryCode == "AE" ? (

                    <div className="form-group float-label-control" id="country">
                        
                        <select className="form-control" id="country-list" onChange={this.onCityChange}>
                          {this.state.stateList.map((item)=>
                              <option value = {item} key={item}>{item}</option>
                            )}
                            
                        </select>
                        <label className="form-control-placeholder" htmlFor="country">Emirate</label>
                      </div>


                    ):(

                      <div className="form-group">
                        <input type="text" id="emirate" name="selcetedCity" value={selcetedCity} onChange={this.handleChange} className="form-control cool-link" required/>
                        <label className="form-control-placeholder" htmlFor="emirate">City</label>
                      </div>

                    )}
                      
           			</div>
                    
                <div className="col-12 col-md-10">
                  <div className="row">

                    <div className="col-12 col-md-6">

                    {selectedCountryCode == "AE" ? (

                    <div className="form-group float-label-control" id="country">
                        
                        <select className="form-control" id="country-list" onChange={this.onRegionChange}>
                          {this.state.areaList.map((item)=>
                              <option value = {item} key={item} >{item}</option>
                            )}
                            
                        </select>
                        <label className="form-control-placeholder" htmlFor="country">Region</label>
                      </div>


                    ):(

                    <div className="form-group">
                        <input type="text" id="region" name="selcetedRegion" value={selcetedRegion} onChange={this.handleChange} className="form-control cool-link" required/>
                        <label className="form-control-placeholder" htmlFor="region">Region</label>
                      </div>

                    )}


           			    </div>

                   

                    <div className="col-12 col-md-6">
                          <div className="form-row no-gutters">
                            <div className="col-3">
                                <input type="text" id="mobileCode" name="mobileCode" value={"+"+mobileCode}   onChange={this.handleChange} className="form-control"/>
                              <label className="form-control-placeholder" htmlFor="mobileCode">Code</label>
                            </div>
                             
                            <div className="col">
                                <input type="number" id="mobileNo" name="mobileNo" value={mobileNo} onChange={this.handleChange} className="form-control cool-link" required/>
                                <label className="form-control-placeholder" htmlFor="mobileNo">Mob Number</label>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>


                    
                    <div className="col-12 col-md-10">
                      <div className="form-group">
                        <input type="text" id="address" name="address" value={address} onChange={this.handleChange} className="form-control cool-link" required/>
                        <label className="form-control-placeholder" htmlFor="address">Address - Bldg No. / Flat No. / Landmark / Street Name</label>
                    </div>
                      
 				           </div>

                    {selectedCountryCode !=='AE' &&
                  
                      <div className="col-12 col-md-10">
                        <div className="form-group">
                          <input type="text" id="postcode" name="postCode" value={postCode} onChange={this.handleChange} className="form-control cool-link" required/>
                          <label className="form-control-placeholder" htmlFor="postcode">Post Code</label>
                        </div>
                      </div>
                    }
                    
                    
                    <div className="col-12 col-md-10">
                    	<div className="custom-control custom-checkbox my-1 mr-sm-2">
                            <input type="checkbox" className="custom-control-input" id="customControlInline"/>
                            <label className="custom-control-label" htmlFor="customControlInline">Register with us</label>
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>
                    
      			   </div>
             }
               <Link id="link" to={{
                                pathname: pathName+'payment',
                                state:{

                                    data: this.state.checkoutData,

                                }
                                }}></Link>
                              

                <div className="row justify-content-center">
                	<div className="col-12 col-md-10 text-right payment-block-button">
                  <button type="submit" role="button" className="buynowbutton">
                                  PROCEED TO PAYMENT
                  </button>

                           
                    </div>
                </div>

                </form>
         
                <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
        </div>
		);
	}
}

export default (CheckoutAddress);
