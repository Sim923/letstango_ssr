import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMenu } from "../actions/menu";
import { isMobile } from "react-device-detect";

class MenuAll extends Component {
  componentDidMount() {
    this.props.fetchMenu();
  }

  renderMenu() {
    let getmenu=isMobile?this.props.menu.mobile:this.props.menu.desktop;
    return _.map(getmenu, menuall => {
      return (
        <li className="list-group-item" key={Math.random()}>
          <Link to={`/posts/${menuall.id}`}>
            {menuall.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Menu</h3>
        <ul className="list-group">
          {this.renderMenu()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { menu: state.menu };
}

export default connect(mapStateToProps, { fetchMenu })(MenuAll);