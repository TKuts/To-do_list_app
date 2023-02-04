import React, { Component } from "react";
import "./Arrow.scss";

class Arrow extends Component {
  render() {
    return (
      <div className={`arrow arrow${this.props.styleArrow}`}>
        <div className="curve"></div>
        <div className="point"></div>
      </div>
    );
  }
}

export default Arrow;
