import React, { Component } from "react";
import "./Modal.scss";

class Modal extends Component {
  render() {
    return (
      <div
        className={this.props.statusModal ? "modal active" : "modal"}
        onClick={() => this.props.modal()}
      >
        <div
          className={
            this.props.statusModal ? "modal__content active" : "modal__content"
          }
          onClick={(e) => e.stopPropagation()}
        >
          <section className="modal__content-flex">
            <label className="modal__content-title ">
              {this.props.children}
            </label>
            <section className="section__buttons">
              <button
                type="button"
                className="section__buttons-once"
                onClick={() => {
                  this.props.modal();
                  this.props.modalConfirm(true);
                }}
              >
                Yes
              </button>
              <button
                type="button"
                className="section__buttons-once"
                onClick={() => {
                  this.props.modal();
                  this.props.modalConfirm(false);
                }}
              >
                Cancel
              </button>
            </section>
          </section>
        </div>
      </div>
    );
  }
}

export default Modal;
