// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import "./Business.css";

export default class Business extends Component {
  render() {
    const business = this.props.business;
    return (
      <div>
        <div className="Business">
          <div className="image-container">
            <img src={business.imageSrc} alt={business.name} />
          </div>
          <h2>{business.name}</h2>
          <div className="Business-information">
            <div className="Business-address">
              <p>{business.address}</p>
              <p>{business.category}</p>
              <p>{business.state + business.zipCode}</p>
            </div>
            <div className="Business-reviews">
              <h3>{business.category}</h3>
              <h3 className="rating">4.5 stars</h3>
              <p>{business.reviewCount} reviews</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
