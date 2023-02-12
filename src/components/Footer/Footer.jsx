import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <section className="footer__elem">
          <button
            type="button"
            className="footer__elem-btn"
            onClick={() => this.props.onSliderBtn()}
          >
            <i
              style={{
                color: this.props.slider ? "red" : " rgba(0, 0, 0, 0.7)",
              }}
              className="alert bi bi-exclamation-circle"
            ></i>
          </button>
          <button
            type="button"
            className="footer__elem-btn"
            onClick={() => this.props.onShareBtn()}
            style={{
              pointerEvents: this.props.slider ? "none" : " all",
            }}
          >
            <i className="share bi bi-share"></i>
          </button>

          <button
            type="button"
            className="footer__elem-btn"
            onClick={() => {
              this.props.onFormatBtn();
            }}
            style={{
              pointerEvents: this.props.slider ? "none" : " all",
            }}
          >
            <i className="format bi bi-bounding-box-circles"></i>
          </button>
          <button
            type="button"
            className="footer__elem-btn"
            onClick={() => {
              this.props.onSortBtn();
            }}
            style={{
              pointerEvents: this.props.slider ? "none" : " all",
            }}
          >
            <i className="sort bi bi-sort-down"></i>
          </button>
          <button
            type="button"
            className="footer__elem-btn"
            onClick={() => {
              this.props.modal("allTask", this.props.state.arrayTask);
            }}
            style={{
              pointerEvents: this.props.slider ? "none" : " all",
            }}
          >
            <i className="trash bi bi-trash3"></i>
          </button>
        </section>
      </footer>
    );
  }
}

export default Footer;
