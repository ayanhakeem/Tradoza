import React from "react";

/**
	WHOEVER IS REVIEWING THIS CODE PLEASE NOT THIS IS A STATELESS COMPONENT 
**/ 
const IconItem  = ({title, icon, amount, currentView, onClick, hiden, className}) => {
	
	const classi = currentView === title ? "selected" : "";
	const hideClass = hiden ? "hide" : "";

	return(
		<div className={classi + " " + hideClass + " " + className}>
			<a onClick={() => onClick(title, false)}>
				<i className={icon}></i>
				<span><strong>{amount}</strong> {title}</span>
			</a>
		</div>
	);
}

export default IconItem;