import React, { Component } from "react";
import "./Share.scss";

class Share extends Component {
  render() {
    return (
      <div
        className={this.props.statusShare ? "modal active" : "modal"}
        onClick={() => this.props.onShareBtn()}
      >
        <div className="share_wrapper" onClick={(e) => e.stopPropagation()}>
          <a
            className="share-img"
            href="https://www.linkedin.com"
            target="_blank"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            className="share-img"
            href="https://web.telegram.org"
            target="_blank"
          >
            <i class="bi bi-telegram"></i>
          </a>
          <a
            className="share-img"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            className="share-img"
            href="https://www.whatsapp.com"
            target="_blank"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
          <a
            className="share-img"
            href="https://www.messenger.com"
            target="_blank"
          >
            <i className="bi bi-messenger"></i>
          </a>
          <a className="share-img" href="mailto:" target="_blank">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Share;
