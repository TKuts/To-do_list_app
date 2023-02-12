import React, { Component } from "react";
import "./Share.scss";

class Share extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={this.props.statusShare ? "modal active" : "modal"}
        onClick={() => this.props.onShareBtn()}
      >
        <div className="share_wrapper" onClick={(e) => e.stopPropagation()}>
          <i className="share-img bi bi-linkedin"></i>
          <i className="share-img bi bi-skype"></i>
          <i className="share-img bi bi-facebook"></i>
          <i className="share-img bi bi-whatsapp"></i>
          <i className="share-img bi bi-messenger"></i>
          <i className="share-img bi bi-envelope-fill"></i>
        </div>
      </div>
    );
  }
}

export default Share;
