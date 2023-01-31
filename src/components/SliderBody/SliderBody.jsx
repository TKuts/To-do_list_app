import React, { Component } from "react";
import "./SliderBody.scss";

class SliderBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allFlashCard: [
        "Welcome to list maker! Our page will help you stay on top of your lists.",
        "To get started simply type your first item in the box below and a new list will be created automatically. Click the 'add' button to add items to your list and the 'remove' button to edit items out.",
        "Click the 'reset' button to clear your list and start over.",
        "In order to edit descriptions to your items click the 'description' button.",
        "You can also check off items by using the check-boxes",
        "Once your list is complete you can choose how you would like to see the items displayed with the 'sort list' drop-box.",
        "You can also stylize your items using the 'stylize' button.",
        "Enjoy making your lists and check back for new features in the future!",
      ],
      shiftPage: 0,
    };
  }

  arrowLeftClick() {
    if (this.state.shiftPage !== 0) {
      this.setState({
        shiftPage: this.state.shiftPage - 1,
      });
    }
  }

  arrowRightClick() {
    if (this.state.shiftPage !== this.state.allFlashCard.length - 1) {
      this.setState({
        shiftPage: this.state.shiftPage + 1,
      });
    } else {
      this.props.onSliderBtn();
    }
  }

  render() {
    return (
      <section
        className={this.props.slider ? "slider active" : "slider"}
        onClick={() => this.props.onSliderBtn()}
      >
        <div className="slider__container" onClick={(e) => e.stopPropagation()}>
          <button
            className="slider-arrow"
            onClick={() => this.arrowLeftClick()}
          >
            &#10094;
          </button>

          <div className="window" onClick={() => this.arrowRightClick()}>
            <div className="page">
              <div className="page-text">
                {this.state.allFlashCard[this.state.shiftPage]}
              </div>
            </div>
          </div>

          <button
            className="slider-arrow"
            onClick={() => this.arrowRightClick()}
          >
            &#10095;
          </button>
        </div>
      </section>
    );
  }
}

export default SliderBody;
