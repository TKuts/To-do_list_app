import React, { Component } from "react";
import "./StylizationContent.scss";

class StylizationContent extends Component {
  myState = this.props.myState;

  onChangeSorts = (e) => {
    const sortSelector = e.target.value;
  };

  render() {
    return (
      <select onChange={this.onChangeSorts} className="select">
        <option value="default">Select Style Option</option>
        <option value="size">Size</option>
        <option value="font">Font</option>
        <option value="color">Color</option>
      </select>
    );
  }
}

export default StylizationContent;
