/* eslint-disable */
import React, {Component} from 'react';



var iframeUrl = "../pay.html"
class PayTab extends Component {

	constructor (props) {
		super(props)
	}

	componentDidMount(){

		console.log(iframeUrl)

	}




	render () {
		
		 const style = {minHeight:'450px'}

		return (

			<div id="payTabIframe" name="Midhun" className="row justify-content-center disabled">
                <div className="col-12 col-md-10">   
						<iframe  src={iframeUrl} id="myiFrame" scrolling="no" ></iframe>
				</div>
			</div>
		)
	}

	initPaytabs = () => {

		paytabs.ValidateSecretKey("meenakshi@letstango.com", "347SeeN6Pitf5fBIUsr4ZV8B4MTP8XCc2J4gXSmNaP3f5EY07q46ldHq0Bf9ySlACpQAhcns2rI86G8d6cjsq1SqD7zbZVMClCcD", function(response){
  			console.log(response);
		});




	}


}





export default (PayTab)