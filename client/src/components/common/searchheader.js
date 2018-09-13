import React, { Component } from "react";

import Header from "./header";
import Search from "../algoliasearch/search";

class TopHeader extends Component {

	constructor(props){
    	super(props);

    	this.state = { term: "" };

  
  	this.searchAlgolia = this.searchAlgolia.bind(this); 	


	}
  	componentDidMount() {
   
  	}

  	searchAlgolia(term) {

 	this.setState({ term });

  	}

  	render() {

  		const searchTerm = this.state.term;
  		
	
    	return (
     		
     		<div>
          
          	<Search searchState={searchTerm}/>

        	</div>
 		);
  	}
}

export default (TopHeader);
