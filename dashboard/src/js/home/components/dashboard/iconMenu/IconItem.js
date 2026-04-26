import React from "react";

export default class IconItem extends React.Component {
	
	render(){
		const {title, icon, amount, currentView, onClick, hiden} = this.props;
		const className = currentView === title ? "selected" : "";
		const hideClass = hiden ? "hide" : "";
		return(
			<li className={className + " " + hideClass}>
				<a onClick={onClick.bind(this, title)}>
					<i className={icon}></i>
					<span><strong>{amount}</strong> {title}</span>
				</a>
			</li>
		);
	}
}
