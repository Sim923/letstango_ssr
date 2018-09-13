import React, {Component} from 'react'


class SucessPageContent extends Component {

	constructor(props) {
		super (props)
	}
	componentDidMount(){


	}
	render(){

		return(

      <div className="col-12 col-md-8 cart-left-body">
       <div className="row justify-content-center">
            <div  className="col-12">
            <div className="row justify-content-center">
                  <div className="col-8 tittle-block">
                      <h3 className="primary text-center ">
                          Order Status
                        </h3>
                    </div>
                 </div>
            </div>
           <div className="row justify-content-center">
                  <div className="col-12 tittle-block">
                      <div className='steps-container'>
                              <div className='steps active'>
                                <span>Order Placed</span>
                              </div>
                              <div className='steps'>
                                <span>Processing</span>
                              </div>
                              <div className='steps'>
                                <span>Shipped</span>
                              </div>
                              <div className='steps'>
                                <span>Delivered</span>
                              </div>
                                
                       </div>
                 </div>
            </div>
         
         </div>
        
       <div className="row justify-content-center">
        <div className="col-12 col-md-5 cart-left-body">
             <div className="step_2">
                <div className="row justify-content-center">
                  <div className="col-8 tittle-block">
                      <h3 className="primary text-center ">
                          Shipping Info
                        </h3>
                    </div>
                 </div>
                 
                 <div className="row justify-content-center">
                  <div className="col-10 address-block ">
                      <p><strong>Tintu Thomas</strong></p>
                        <p>120, Al MAkateb Bldg, Rakbank</p>
                        <p>Dubai, United Arab Emrates</p>
                        <p>Mob: +971 567894242</p>
                    </div>
                 </div>
             <div className="clearfix"></div>
            </div>
          <div className="clearfix"></div>
        </div>
            
            
            
         <div className="col-12 col-md-10 cart-left-body">   
             <div className="row justify-content-center">
                  <div className="col-8 tittle-block">
                      <h3 className="primary text-center ">
                          Payment Method
                        </h3>
                    </div>
                 </div>
                <div className="row select-payment justify-content-center align-items-center">
                    <div className="custom-control custom-radio custom-control-inline py-metord-block">
                      <label><img src="images/checkout-pay-1.png"/> Credit Card</label>
                    </div>
                    
              </div> 
            </div>
        </div>
        
        
       
        
        
        
        </div> 
			

		);
	}
}

export default (SucessPageContent);
