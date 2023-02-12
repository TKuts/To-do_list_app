import React, { Component } from "react";
import "./Select.scss";

import SortContent from "../SortContent";
import StylizationContent from "../StylizationContent";

class Select extends Component {
  consentSelect = this.props.state.consentSelect;

  render() {
    return (
      <div className="select-wrapper">
        {this.consentSelect === "sort" ? (
          <SortContent
            myState={this.props.state.arrayTask}
            sort={this.props.sort}
          />
        ) : (
          <StylizationContent myState={this.props.state.arrayTask} />
        )}
      </div>
    );
  }
}

export default Select;
