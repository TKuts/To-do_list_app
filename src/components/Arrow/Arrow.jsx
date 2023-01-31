import React, { Component } from "react";
import "./Arrow.scss";

class Arrow extends Component {
  render() {
    return (
      // <div className="arrow">
      //   <div className="arrow-header"></div>
      //   <div className="arrow-body"></div>
      // </div>
      <div class="arrow">
        <div class="curve"></div>
        <div class="point"></div>
      </div>
    );
  }
}

export default Arrow;
