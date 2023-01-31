import React, { Children, Component } from "react";
// import { cloneElement } from "react";
import "./Slider.scss";

import SliderBody from "../SliderBody";
import Arrow from "../Arrow";

class Slider extends Component {
  render() {
    return (
      <section className="slider__wraper">
        <Arrow />
        {/* <SliderBody
          slider={this.props.slider}
          onSliderBtn={this.props.onSliderBtn}
        /> */}
      </section>
    );
  }
}

export default Slider;
