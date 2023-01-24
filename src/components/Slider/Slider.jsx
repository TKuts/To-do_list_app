import React, { Children, Component } from "react";
import { cloneElement } from "react";
import "./Slider.scss";

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allFlashCard: [
        {
          title:
            "Welcome to list maker! Our page will help you stay on top of your lists.",
        },
        {
          title:
            "To get started simply type your first item in the box below and a new list will be created automatically. Click the 'add' button to add items to your list and the 'remove' button to edit items out.",
        },
        {
          title: "Click the 'reset' button to clear your list and start over.",
        },
        {
          title:
            "In order to edit descriptions to your items click the 'description' button.",
        },
        {
          title: "You can also check off items by using the check-boxes",
        },
        {
          title:
            "Once your list is complete you can choose how you would like to see the items displayed with the 'sort list' drop-box.",
        },
        {
          title: "You can also stylize your items using the 'stylize' button.",
        },
        {
          title:
            "Enjoy making your lists and check back for new features in the future!",
        },
      ],
      shiftPage: 0,
    };
  }

  renderCard() {}

  arrowLeftClick() {
    const newCurrent = this.state.shiftPage + 100;

    this.setState({
      shiftPage: Math.min(newCurrent, 0),
    });
  }
  arrowRightClick() {
    const newCurrent = this.state.shiftPage - 100;
    const maxShift = -(100 * (this.state.allFlashCard.length - 1));
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
            {this.state.allFlashCard.map((card, index) => (
              <div
                key={index}
                className="page"
                style={{ height: "100%", minWidth: "100%", maxWidth: "100%" }}
              >
                <p className="page-text">{card.title}</p>
              </div>
            ))}
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
