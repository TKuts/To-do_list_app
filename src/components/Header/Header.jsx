import React, {Component} from "react";
import "./Header.scss"
class Header extends Component{
	render() {
		return (
			<header className="header">
            <h1 className="header__title">My Tasks</h1>
         <div>
				<div className="first-oval"></div>
				<div className="second-oval"></div>
				<div className="third-oval"></div>
				<div className="fourth-oval"></div>
          </div>
       </header>
		)
	}
}

export default Header