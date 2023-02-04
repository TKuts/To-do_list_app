import React, { Component } from "react";
import "./Sort.scss";
import { sortArrayTasks } from "../../helpers/sort";

class Sort extends Component {
  myState = this.props.state.arrayTask;

  onChangeSorts = (e) => {
    const sortSelector = e.target.value;
    const sortedArray = sortArrayTasks(this.myState, sortSelector);
    this.props.sort(sortedArray, sortSelector);
  };

  render() {
    return (
      <div className="select-wrapper">
        <select id="mounth" onChange={this.onChangeSorts} className="select">
          <option value="old">Default</option>
          <option value="new">New - Old</option>
          <option value="first letter">A-Z</option>
          <option value="last letter">Z-A</option>
        </select>
      </div>
    );
  }
}

export default Sort;
