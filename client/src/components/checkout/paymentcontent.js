/* eslint-disable */
import React, {Component} from 'react'
import { userService } from '../../helpers';
import PayTabPayment from './PayTab'
import * as constants from '../../helpers/constants';
import { BrowserRouter as Router,
         Link } from 'react-router-dom';

import Cookies from 'universal-cookie';

const localStorage = new Cookies();

var   times = 0
var   defaultAddressId = ''
const pathName     = constants.getPathName();

class PaymentContent extends Component {

	constructor(props) {
		super (props)

    this.state = {

          paymentMethods: [],
          selectedPaymentMethod:'paytabs_server',
          selectedShipping:'',
          selectedAddressId:'',
          orderdetails:''

    }

    this.changeAddress    = this.changeAddress.bind(this)
    this.handlePlaceOrder = this.handlePlaceOrder.bind(this)
 
	}
	componentDidMount(){


    console.log(this.props)

    window.scrollTo(0, 0)
    // var   quoteId       = localStorage.getItem('quote_id')?(localStorage.getItem('quote_id')):'';
    var   quoteId       = localStorage.get('quote_id')?(localStorage.get('quote_id')):'';
    if(quoteId){
    userService.getShippingPaymentMethod(quoteId).
        then((response) => {

                if (response!=null&&response.data!=null) {
                  
                    if (response.data.status==1) {

                      var shipping = ''
                      if(response.data.shipping_methods!=null){
                        shipping = response.data.shipping_methods[0].code
                      }
                      
                      this.setState({paymentMethods : response.data.payment_methods,
                                      selectedShipping:shipping})
                      
                    }else{

                      this.props.history.push('/cart');

                    }
                 
                }
              })
            .catch(err => console.log("Axios err: ", err))

      }else{
        window.open(pathName+"cart","_self")
      }

	}
  
  
  changeAddress (event){
     var linkToClick = document.getElementById('checkout');
                          linkToClick.click();
  }
  
  handlePayementMethod = (event) =>{

    const selection = event.target.id
    this.setState({selectedPaymentMethod:selection})

    if(selection!=="paytabs_server"){
      document.getElementById("payTabIframe").style.display = "none";
    }else{
      document.getElementById("payTabIframe").style.display = "flex";
    }


  }
  handlePlaceOrder (){

    if (this.state.selectedPaymentMethod === 'paytabs_server') {
      showWarning("Warning","Invalid payment method, Please choose other")
      return
    }

    console.log("PLACE ORDER")
    // var   customerId    = localStorage.getItem('customer_id')?(localStorage.getItem('customer_id')):'';
    // var   quoteId       = localStorage.getItem('quote_id')?(localStorage.getItem('quote_id')):'';
    var   customerId    = localStorage.get('customer_id')?(localStorage.get('customer_id')):'';
    var   quoteId       = localStorage.get('quote_id')?(localStorage.get('quote_id')):'';
    const shipping_method = this.state.selectedShipping
    const payment_method  = this.state.selectedPaymentMethod

    const checkoutData = this.props.checkoutData
    const data         =    JSON.parse(checkoutData.data)

      let requestParams = JSON.stringify({
            
            customer_id     : customerId,
            quote_id        : quoteId,
            address_id      : defaultAddressId,
            address_details : data.address_details,
            shipping_method : shipping_method,
            payment_method  : payment_method

        })

      console.log(requestParams)

      if(payment_method!=''&& shipping_method !="" && quoteId != '')
            this.proceedPlaceOrder (requestParams)

    }

  proceedPlaceOrder = (requestParams) => {

    userService.placeOrder(requestParams).
            then((response) => {

                    if (response!=null&&response.data!=null) {
                      
                        if (response.data.status==1) {

                            let quote_id = response.data.quote_id;
                            let orderId = response.data.order_id;
                            
                            // localStorage.setItem('quote_id', quote_id);
                            localStorage.set('quote_id', quote_id);

                            this.setState({orderdetails:orderId})

                          var linkToClick = document.getElementById('link');
                          linkToClick.click();
                      
                        }else{

                          showErrorToast("Error",response.data.message)

                        }
                     
                    }
                  })
                  .catch(err => console.log("Axios err: ", err))

    }


	render(){



	   const { selectedPaymentMethod } = this.state
     const checkoutData = this.props.checkoutData
      const pathName     = constants.getPathName();
     if ((typeof checkoutData === 'undefined')) window.open(pathName+"cart","_self")
     
     const data         = JSON.parse(checkoutData.data)
    

     const style = {
        display:'none'
     }

     if ((typeof data !== 'undefined'))
          defaultAddressId =  data.address_id
   

		return(

      <div className="col-12 col-md-8 cart-left-body">
              <div className="step_2">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-10 tittle-block">
                      <h3 className="primary">
                          Shipping INfo
                        </h3>
                    </div>
                 </div>
                 <div>
                   <div className="row justify-content-center">
                    <div className="col-11 col-md-10 address-block">
                        <p><strong>{data.address_details.customer_name}</strong></p>
                          <p>{data.address_details.address}</p>
                          <p>{data.address_details.region}, {data.address_details.city}, {data.address_details.country_name}</p>
                          <p>Mob:{data.address_details.telephone}</p>
                          <span  className="edit-adress"><a  href="JavaScript:Void(0);" name="newAddress" onClick={this.changeAddress}> <i className="fa fa-edit"></i> Change Address</a></span>
                      </div>

                    </div>
                  </div>

                  
                <div className="row justify-content-center">
                  <div className="col-12 col-md-10 tittle-block">
                      <h3 id ="paymentmethodheader" className="primary">
                          Payment Method
                        </h3>
                    </div>
                 </div>
               
                

                {this.state.paymentMethods!= [] && 

                  <div className="row select-payment justify-content-center align-items-center mobilepayment">

                    {this.state.paymentMethods.map((item,key)=>



                      <div key={key} className="custom-control custom-radio custom-control-inline py-metord-block mbob-split">
                        <input type="radio" id={item.code} checked  className="custom-control-input mbob-split" name="selectedPaymentMethod" value={selectedPaymentMethod} onChange={this.handlePayementMethod} checked={item.code==selectedPaymentMethod}/>
                        <label className="custom-control-label" htmlFor={item.code}><img src="images/checkout-pay-1.png"/> {item.title}</label>
                      </div>
                    
                    )}
                  </div>  
                }

              
                  <PayTabPayment /> 
              

                <div className="row justify-content-center">
                  <div className="col-12 col-md-10 text-right  payment-block-button2">
                          <button role="button" className="buynowbutton" onClick={this.handlePlaceOrder}>
                                             PLACE ORDER
                          </button>
                    </div>
                </div>

                <Link id="link" to={{
                                pathname:pathName+'paymentconirmation',
                                state:{

                                    state: this.state.orderdetails
                                }
                                }}></Link>

                  <Link id="checkout" to={{
                                pathname:pathName+'checkout',

                                }}></Link>
                <div className="clearfix"></div>
                </div>
            <div className="clearfix"></div>
            </div>
		);
	}

}

export default (PaymentContent);
