import React, {Component} from "react";
import "./Header.scss"
class Header extends Component{
	render() {
		return (
			<header className="header">
            <h1 className="header__title">My Tasks</h1>
        		<div className="cloud"></div>
       </header>
		)
	}
}

export default Header