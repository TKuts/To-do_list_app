import React, { Component } from "react";
import "./Slider.scss";

class Slider extends Component {
	// constructor(props) {
	// 	super(props);
  
		
  
	// 	// this.previewSlide = this.previewSlide.bind(this);
	// 	this.nextSlide = this.nextSlide.bind(this);
		
	// }

	

	previewSlide(){
		let slide = document.getElementsByClassName(window) 
		console.log("-");
		console.log(slide.lenght);
	}
	nextSlide(){
		console.log("+");
	}

	
	render(){
		return(
			<div className="slider">
				<button onClick={() => this.previewSlide()}>&#9668;</button>
				<div className="slider-line">
					<div className="window">
						<p>
							Welcome to list maker!
							Our page will help you stay on top of your lists.
						</p>
					</div>
					<div className="window">
						<p>
							To get started simply type your first item in the box below and a new list will be created automatically.
							Click the 'add' button to add items to your list and the 'remove' button to edit items out.
						</p>
					</div>
					<div className="window">
						<p>
							Click the 'reset' button to clear your list and start over.
						</p>
					</div>
					<div className="window">
						<p>
							In order to edit descriptions to your items click the 'description' button.
						</p>
					</div>
					<div className="window">
						<p>
							You can also check off items by using the check-boxes.
						</p>
					</div>
					<div className="window">
						<p>
							Once your list is complete you can choose how you would like to see the items displayed with the 'sort list' drop-box.
						</p>
					</div>
					<div className="window">
						<p>
							You can also stylize your items using the 'stylize' button.
						</p>
					</div>
					<div className="window">
						<p>
							Enjoy making your lists and check back for new features in the future!
						</p>
					</div>
				</div>
				<button onClick={()=> this.nextSlide()}>&#9658;</button>
			</div>
		)
	}
}

export default Slider
