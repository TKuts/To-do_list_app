import React, { Children, Component } from "react";
import { cloneElement } from "react";
import "./Slider.scss";

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: [],
      shiftPage: 0,
    };
  }

  componentDidMount() {
    this.setState({
      pages: this.props.children.map((child, index) => {
        return cloneElement(child, {
          key: index,
          style: {
            height: "100%",
            minWidth: "100%",
            maxWidth: "100%",
          },
        });
      }),
    });
  }

  arrowLeftClick() {
    const newCurrent = this.state.shiftPage + 100;

    this.setState({
      shiftPage: Math.min(newCurrent, 0),
    });
  }
  arrowRightClick() {
    const newCurrent = this.state.shiftPage - 100;
    const maxShift = -(100 * (this.state.pages.length - 1));
    this.setState({
      shiftPage: Math.max(newCurrent, maxShift),
    });
  }

  render() {
    return (
      <div className="slider__container">
        <button className="arrow" onClick={() => this.arrowLeftClick()}>
          &#10094;
        </button>
        <div className="window">
          <div
            className="all__pages-container"
            style={{ transform: `translateX(${this.state.shiftPage}%)` }}
          >
            {this.state.pages}
          </div>
        </div>

        <button className="arrow" onClick={() => this.arrowRightClick()}>
          &#10095;
        </button>
      </div>
    );
  }
}

export default Slider;
