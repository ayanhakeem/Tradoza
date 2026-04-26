import React from "react";
import shallowCompare from "react-addons-shallow-compare";

export default class Loader extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
	  	return shallowCompare(this, nextProps, nextState);
	}

	render(){
		const  {visible,fullPage} = this.props,
		 		hiddenClass = visible ? "" : "hide", 
				fullPageClass = fullPage ? "loader" : ""; 
		return(
			<div className={fullPageClass + " action-loader " + hiddenClass }>
				<span><i className="fa fa-spinner rotating"></i></span>
				{ fullPage ? <h4>One more second getting all your info...</h4> : null }
			</div>
		);
	}
}
