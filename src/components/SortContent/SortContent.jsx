import React, { Component } from "react";
import "./SortContent.scss";

import { sortArrayTasks } from "../../helpers/sort";

class SortContent extends Component {
  myState = this.props.myState;

  onChangeSorts = (e) => {
    const sortSelector = e.target.value;
    const sortedArray = sortArrayTasks(this.myState, sortSelector);
    this.props.sort(sortedArray, sortSelector);
  };

  render() {
    return (
      <select id="mounth" onChange={this.onChangeSorts} className="select">
        <option value="old">Select Sort Option</option>
        <option value="new">New - Old</option>
        <option value="first letter">A-Z</option>
        <option value="last letter">Z-A</option>
      </select>
    );
  }
}

export default SortContent;
