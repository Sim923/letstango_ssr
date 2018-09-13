import React, {Component} from 'react'


class CheckoutNavigator extends Component {

	constructor(props) {
		super (props)
	}
	componentDidMount(){


	}
	render(){

	     const step = this.props.step

		return(

			     <div className="container">

  			       
                  
                {step==1 && 

                  <div className="row bs-wizard">

                  <div className="col-4 bs-wizard-step active">
                    <div className="text-center bs-wizard-stepnum">STEP 1</div>
                    <div className="progress"><div className="progress-bar"></div></div>
                    <a href="#" className="bs-wizard-dot"></a>
                    <div className="bs-wizard-info text-center">Customer Info</div>
                    
                  </div>
                  
                  <div className="col-4 bs-wizard-step disabled">
                    <div className="text-center bs-wizard-stepnum">STEP 2</div>
                    <div className="progress"><div className="progress-bar"></div></div>
                    <a href="#" className="bs-wizard-dot"></a>
                   <div className="bs-wizard-info text-center">Payment</div>
                  </div>
                  
                  <div className="col-4 bs-wizard-step  disabled">
                    <div className="text-center bs-wizard-stepnum">STEP 3</div>
                    <div className="progress"><div className="progress-bar"></div></div>
                    <a href="#" className="bs-wizard-dot"></a>
                    <div className="bs-wizard-info text-center">Status</div>
                  </div>


                  </div>


                }
                {step==2 && 


                  <div className="row bs-wizard">

                  <div className="col-4 bs-wizard-step complete ">
                    <div className="text-center bs-wizard-stepnum">STEP 1</div>
                    <div className="progress"><div className="progress-bar"></div></div>
                    <a href="#" className="bs-wizard-dot"></a>
                    <div className="bs-wizard-info text-center">Customer Info</div>
                    
                  </div>
                  
                  <div className="col-4 bs-wizard-step active">
                    <div className="text-center bs-wizard-stepnum">STEP 2</div>
                    <div className="progress"><div className="progress-bar"></div></div>
                    <a href="#" className="bs-wizard-dot"></a>
                   <div className="bs-wizard-info text-center">Payment</div>
                  </div>
                  
                  <div className="col-4 bs-wizard-step  disabled">
                    <div className="text-center bs-wizard-stepnum">STEP 3</div>
                    <div className="progress"><div className="progress-bar"></div></div>
                    <a href="#" className="bs-wizard-dot"></a>
                    <div className="bs-wizard-info text-center">Status</div>
                  </div>


                  </div>


                }
                {step==3 && 


                  <div className="row bs-wizard">

                  <div className="col-4 bs-wizard-step complete">
                    <div className="text-center bs-wizard-stepnum">STEP 1</div>
                    <div className="progress"><div className="progress-bar"></div></div>
                    <a href="#" className="bs-wizard-dot"></a>
                    <div className="bs-wizard-info text-center">Customer Info</div>
                    
                  </div>
                  
                  <div className="col-4 bs-wizard-step complete">
                    <div className="text-center bs-wizard-stepnum">STEP 2</div>
                    <div className="progress"><div className="progress-bar"></div></div>
                    <a href="#" className="bs-wizard-dot"></a>
                   <div className="bs-wizard-info text-center">Payment</div>
                  </div>
                  
                  <div className="col-4 bs-wizard-step  active">
                    <div className="text-center bs-wizard-stepnum">STEP 3</div>
                    <div className="progress"><div className="progress-bar"></div></div>
                    <a href="#" className="bs-wizard-dot"></a>
                    <div className="bs-wizard-info text-center">Status</div>
                  </div>


                  </div>


                }
   
           
              {step==3 && 
                 <div  className="row justify-content-center">
                    <div id="success-message" className="col-12 text-center">
                      <h1>Thank you!</h1>
                      <p>You are successfully placed your order</p>
                    </div>
                </div>

              }
           
			</div>

		);
	}
}

export default (CheckoutNavigator);
