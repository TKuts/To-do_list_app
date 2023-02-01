import React, { Component } from "react";
import "./Arrow.scss";

class Arrow extends Component {
  render() {
    return (
      <div class="arrow">
        <div class="curve"></div>
        <div class="point"></div>
      </div>
    );
  }
}

export default Arrow;
