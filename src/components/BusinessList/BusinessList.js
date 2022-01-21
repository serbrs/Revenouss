import React, { Component } from "react";
import "./BusinessList.css";
// eslint-disable-next-line no-unused-vars
import Business from "../Business/Business";

export default class BusinessList extends Component {
  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses.map((business) => {
          return <Business business={business} key={business.id} />;
        })}
      </div>
    );
  }
}
