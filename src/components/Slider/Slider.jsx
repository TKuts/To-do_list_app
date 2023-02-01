import React, { Component } from "react";

import "./Slider.scss";

import SliderBody from "../SliderBody";
import Arrow from "../Arrow";

class Slider extends Component {
  render() {
    return (
      <section
        className={
          this.props.slider ? "slider__wraper active" : "slider__wraper"
        }
      >
        <Arrow />
        <SliderBody
          slider={this.props.slider}
          onSliderBtn={this.props.onSliderBtn}
        />
      </section>
    );
  }
}

export default Slider;
