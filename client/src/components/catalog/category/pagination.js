import React, { Component } from "react";
import {fetchCategory} from "../../../actions/catalog";
import {connect} from "react-redux";
import classnames from 'classnames';

class Pagination extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  
    this.onPageChange = this.onPageChange.bind(this);
    this.goFirstPage = this.goFirstPage.bind(this);
    this.goLastPage = this.goLastPage.bind(this);
    this.goPrevPage = this.goPrevPage.bind(this);
    this.goNextPage = this.goNextPage.bind(this);
    this.requestCategory = this.requestCategory.bind(this);

  }

  componentDidMount() {

    const { categoryid, totalpages, currentpage, margin, selectedfilters } =this.props;
    const startPage = currentpage > margin ?currentpage - margin : 1;
    const endPage = currentpage + margin > totalpages ? totalpages : currentpage + margin;
    this.setState({ startPage, endPage,totalpages });
  }

  componentWillReceiveProps(newProps) {
    
    const { categoryid, totalpages, currentpage, margin, selectedfilters } = newProps;
    const startPage = currentpage > margin ?currentpage - margin : 1;
    const endPage = currentpage + margin > totalpages ? totalpages : currentpage + margin;
    this.setState({ startPage, endPage,totalpages });
  }

  onPageChange(event) {
  
  const index =
      Array.prototype.indexOf.call(event.target.parentNode.children, event.target); 

    this.requestCategory(index+this.state.startPage);
   

  }

  goFirstPage() {
   
    this.requestCategory(1);
  }

  goLastPage() {
    
    this.requestCategory(this.state.totalpages);
  }

  goPrevPage() {

    this.requestCategory(this.props.currentpage - 1);
  }

  goNextPage() {
  
    this.requestCategory(this.props.currentpage + 1);
  }


  requestCategory(selectedpage){

    this.props.onClick(selectedpage,"page")
  }


  render() {
   
    const { startPage, endPage, totalpages } = this.state;
    const { categoryid, currentpage, margin } = this.props;
   
    
  const firstPage = currentpage - margin > 1 ?
          <div
            className="pagination-button pagination-go-first"
            onClick={this.goFirstPage}
          >1</div> :
          null;
    const lastPage = currentpage + margin < totalpages ?
          <div
            
            className="pagination-button pagination-go-last"
            onClick={this.goLastPage}>{totalpages}</div> :null;

    const prevPage = currentpage === 1 ? null :
          <div className="pagination-button" onClick={this.goPrevPage}>prev PAGE</div>;
    const nextPage = currentpage === totalpages ? null :
          <div className="pagination-button" onClick={this.goNextPage}>next PAGE</div>;
 
  const pageArray = [];

    for (let i = startPage; i <= endPage; i++) {
      pageArray.push(
        <li
          key={i}
          onClick={this.onPageChange}
          className={classnames('pagination-list-item', 'pagination-button', {
          active: i === this.props.currentpage
          })}
          >
          {i}
        </li>
      );
    }

    return (
  
      <div className="col-12 pagination_block">
        <nav aria-label="Page navigation">
          <ul className="pagination  justify-content-center">
      
          {prevPage}
          {firstPage}
          <ul id="pagination-list">
            {pageArray}
          </ul>
          {lastPage}
          {nextPage}
     
        </ul>
        </nav>
        </div>
    
    );
  }
}
export default connect(null, { fetchCategory })(Pagination);