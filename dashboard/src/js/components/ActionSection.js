import React from "react";
import Loader from "./Loader";
import shallowCompare from "react-addons-shallow-compare";

export default class ActionSection extends React.Component {
	constructor() {
	    super();
	    this.state = {
	    	visible: false
	    };
	    this.toggleVissible = this.toggleVissible.bind(this);
	}

	toggleVissible(){
		var element = document.getElementById("section");
	    var main = document.getElementById("tmplMain");
	    if(main) main.scrollTop = 0;
		
		const visible = ! this.state.visible;
		this.setState({visible});
	}

	shouldComponentUpdate(nextProps, nextState) {
	  	return shallowCompare(this, nextProps, nextState);
	}

	render(){
		const 	visibleClass = this.state.visible ? "show-all" : "",
				iconVisibleClass = this.state.visible ? "fa-sort-down" : "fa-sort-up";

		return(
			<div id="section" className={ "col-lg-12 col-md-12 col-xs-12 col-ms-12 action-section separator " + visibleClass }>
				<span id="toggle" className="toggle " onClick={this.toggleVissible}><i className={"fa "+ iconVisibleClass}></i></span>
				<Loader visible={this.props.receiving} />
				<div className="content">
					{this.props.children}
				</div>
			</div>
		);
	}
}
