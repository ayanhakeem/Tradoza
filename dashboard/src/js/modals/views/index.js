import React from "react";

export default class Modal extends React.Component {

	constructor(){
		super();
		this.state ={
			visible: false
		};
	}

	render(){
		var hiddenClass = this.state.visible ? "" : "hide";
		return(
			<div className={"modal " + hiddenClass} id="modalContent">	
				<div className="modal-content">
				</div>	
			</div>
		);
	}
}
