import React, { Component } from "react";

import LeftNavigation from './leftnavigation';
import * as constants from '../../helpers/constants';

class Orders extends Component {

    render() {


        console.log(this.props.data)
        const data = this.props.data


        return (
                <section id="account-page">
                    <div className="container">
                        <div className="row">
                            <LeftNavigation selection={"orders"}/>
                            
                            {data ? (


                            <div className="col-12 col-md-10 account-right-body">
                                <h1>My Orders</h1>
                              
                              <div className="orders">
                                
                                <div className="row order-head align-items-center">
                                    <div className="col-md-1"><p>Order Id</p></div>
                                    <div className="col-md-1"><p>Date</p></div>
                                    <div className="col-md-7"><p>Ship to</p></div>
                                    <div className="col-md-1"><p>Amount</p></div>
                                    <div className="col-md-1"><p>Status</p></div>
                                    <div className="col-md-1"><p>&nbsp;</p></div>   
                                </div>

                                {data.orders.map((item,key)=>

                                    <div key={key} className="row order-list align-items-center">
                                    <div className="col-md-1"><p>{item.order_id}</p></div>
                                    <div className="col-md-1"><p>{constants.getForamtedDate(item.created_at)}</p></div>
                                    <div className="col-md-7"><p>{item.address}</p></div>
                                    <div className="col-md-1"><p>{item.grand_total}</p></div>
                                    <div className="col-md-1"><p>{item.status_default}</p></div>
                                    <div className="col-md-1"><p>
                                        <a href="#">View Order</a>
                                    </p></div>  
                                </div>


                                )}
                                
                                
                                
                                
                                
                                <div className="clearfix"></div>
                                </div>
                                  
                            <div className="clearfix"></div>
                            </div>

                            ):(<div></div>)}
                        </div>
                    </div>
                </section>);
        }

}
export default Orders;