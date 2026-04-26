import React from "react";
import {Link} from "react-router";

export default class ListItem extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
	  return this.props.pathname !== nextProps.pathname; 
	}
	
	render(){
		const {pathname, to} = this.props;
		var selectedClass = "";
		
		if(to === "/"){
			// If and won't work in this situation
			if(pathname === "/"){
				selectedClass = "selected";
			}
		}else{
			selectedClass = pathname.match(to) ? "selected" : "";
		}

		return(
			<li className={selectedClass}>
				<Link to={to} >
					<i className={this.props.icon + " " + this.props.color}></i>
					<span>{this.props.title}</span>
				</Link>
			</li>
		);
	}
}
