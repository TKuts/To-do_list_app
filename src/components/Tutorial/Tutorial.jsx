import React, { Component } from "react";
import "./Tutorial.scss";
import SliderBody from "../SliderBody";
import Arrow from "../Arrow";

class Tutorial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      styleArrow: 0,
    };
  }

  position = (data) => {
    this.setState({
      styleArrow: data,
    });
  };

  render() {
    return (
      <div
        className={
          this.props.slider ? "slider__wraper active" : "slider__wraper"
        }
      >
        <div
          className={`position position${this.state.styleArrow}`}
          //  className={this.state.styleArrow !== 1 ? "align" : "align reverse"}
        >
          <SliderBody
            slider={this.props.slider}
            onSliderBtn={this.props.onSliderBtn}
            position={this.position}
          />
          <Arrow styleArrow={this.state.styleArrow} />
        </div>
      </div>
    );
  }
}

export default Tutorial;
