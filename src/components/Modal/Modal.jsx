import React, { Component } from "react";
import "./Modal.scss";

class Modal extends Component {
 
	

  render() {
	
    return (
		<div className={this.props.statusModal ? "modal active" : "modal"}  onClick={()=> this.props.onDeletAll()}>
			<div className={this.props.statusModal ? "modal__content  active" : "modal__content"} onClick={e => e.stopPropagation()}>

				{this.props.children}
			</div>
		</div>
	 )
}
}

export default Modal;
