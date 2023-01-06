import React, { Component } from "react";
import "./Footer.scss"

class Footer extends Component {

	render(){
		return(
			<footer className="footer">
      
            <section className="footer__elem">
              <button type="button" className="footer__elem-btn">
                <i className="alert bi bi-exclamation-circle"></i>
              </button>
              <button
                type="button"
                className="footer__elem-btn"
                id="btn-share"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i className="share bi bi-share"></i>
              </button>
                 {/* <Tutorial />
                 <Share /> 
                 <Calendar /> 
                 <Sort /> 
                 <DeletedTasks /> */}
              <button type="button" className="footer__elem-btn">
                <i className="format bi bi-info-square"></i>
              </button>
              <button 
				  type="button" 
				  className="footer__elem-btn"
				  onClick={()=> {this.props.onSortBtn()} }
				  >
                <i className="sort bi bi-sort-down"></i>
              </button>
              <button 
				  type="button" 
				  className="footer__elem-btn"
				  onClick={()=> {this.props.onDeletAll(this.props.state.arrayTask)} }
				  >
                <i className="trash bi bi-trash3"></i>
              </button>
            </section>
          </footer>
			
		)
	}
}

export default Footer