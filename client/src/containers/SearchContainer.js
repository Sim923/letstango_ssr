import React, {Component} from 'react'
import { connect } from "react-redux";
import { fetchSearchByCategory } from "../actions/catalog";
import SearchHeader from "../components/algoliasearch/search";
import HeaderTest from "../components/common/HeaderTest";

class SearchContainer extends Component {

	constructor (props) {

		super(props)

	}

	componentDidMount () {

		
	}

	render() {

		return (

			<HeaderTest/>

		);

	}



}
function mapStateToProps(state) {
  return { search: state.catalog };
}

export default connect(mapStateToProps, { fetchSearchByCategory })(SearchContainer);